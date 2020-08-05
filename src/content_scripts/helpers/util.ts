import { safeLoad } from 'js-yaml';
import { getMarkdown } from './vender.github';
import { Aligns, Align } from '../constant';
import { parseThemeConfig } from '../theme';

const { location, parent } = window;

const locationSearch = location.search || (location.href.match(/(\?.*)$/) || [])[1] || '';

const options = {
  fid: (locationSearch.match(/fid=([a-zA-Z0-9]+)/) || [])[1],
  origin: (locationSearch.match(/origin=([^&]+)/) || [])[1],
};

const postMessage = (type: string, payload: any) => {
  const stringmessage = JSON.stringify([type, payload, options.fid]);
  parent.postMessage(stringmessage, options.origin);
};

const hashCode = (str: any) => {
  let hash: any = 0;
  if (typeof str === 'object' && str !== null) {
    str = JSON.stringify(str);
  }
  str = `_${str}`;
  if (!str || str.length === 0) {
    return hash;
  }
  let i = 0;
  const len = str.length;
  while (i < len) {
    const chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
    i++;
  }
  const base16 = hash.toString(16).replace(/[^a-z0-9]/g, '');
  const base36 = hash.toString(36).replace(/[^a-z0-9]/g, '');
  hash = (parseInt(base16.substr(0, 1), 16) + 10).toString(36) + base36;
  return hash;
};

const textTransform = (text: string) => {
  const snake_case = text
    .replace(/([A-Z])/g, (whole, p1) => `_${p1.toLowerCase()}`)
    .replace(/-/g, '_')
    .replace(/[_]{1,}/g, '_')
    .replace(/^_/, '');
  return {
    snake_case,
    SNAKE_CASE: snake_case.toUpperCase(),
    'kebab-case': snake_case.replace(/_/g, '-'),
    lowercase: snake_case.replace(/_/g, ''),
    camelCase: snake_case.replace(/_([a-z])/g, (whole, p1) => p1.toUpperCase()),
    PascalCase: snake_case.replace(/(^|_)([a-z])/g, (whole, p1, p2) => p2.toUpperCase()),
  };
};
const toKebabCase = (text: string) => textTransform(text)['kebab-case'];
const toCamelCase = (text: string) => textTransform(text).camelCase;

const hAligns = [Align.LEFT, Align.RIGHT, Align.CENTER];
const vAligns = [Align.TOP, Align.BOTTOM, Align.MIDDLE];

const parseText = (text: string = '', parent?: any) => {
  let config: any = null;
  let markdown = '';

  let matches = `\n${text.trim()}`.match(/^([\s\S]*)\n```\s*\n([\s\S]+?)\n```$/);
  if (matches) {
    config = matches[2];
    markdown = matches[1];
  } else {
    matches = `${text.trim()}\n`.match(/^```\s*\n([\s\S]+?)\n```\n([\s\S]*)$/);
    if (matches) {
      config = matches[1];
      markdown = matches[2];
    }
  }
  if (config) {
    try {
      config = safeLoad(config);
      if (config && !Array.isArray(config) && typeof config === 'object') {
        if (typeof config.align === 'string') {
          config.align = config.align
            .toLowerCase()
            .split(/[^a-z]/)
            .filter((e: any) => Aligns.includes(e));
          config.vAlign = config.align.filter((e: any) => vAligns.includes(e))[0];
          config.hAlign = config.align.filter((e: any) => hAligns.includes(e))[0];
          delete config.align;
        }
        if (config.theme__) {
          config.theme__ = parseThemeConfig(config.theme__);
        }
        if (config.theme_) {
          config.theme_ = parseThemeConfig(config.theme_);
        }
        if (config.theme) {
          config.theme = parseThemeConfig(config.theme);
        }
      } else {
        config = null;
      }
    } catch (e) {}
  }
  if (!config) {
    markdown = text.trim();
  }
  if (typeof markdown === 'string') {
    markdown = `\n${markdown}\n`
      .replace(/(\n```)([a-z]{0,})\n([\s\S]+?)(```\n)/, (whole, p1, du, p2, p3) =>
        p2.trim().match(/^<[\s\S]+>$/) ? p1 + 'html' + '\n' + p2.replace(/</g, '&lt').replace(/>/g, '&gt') + p3 : whole,
      )
      .replace(/(\n```yaml)([a-z]{0,})\n([\s\S]+?)(```\n)/g, (whole, p1, p2, p3, p4) => {
        try {
          const jsonData: any = safeLoad(p3);
          if (jsonData && typeof jsonData.chart === 'string' && jsonData.data) {
            return `\n<div data-widget-type="chart" data-widget-data="${encodeURIComponent(
              JSON.stringify(jsonData.data),
            )}"></div>\n`;
          }
        } catch {}

        return whole;
      })
      .trim();
  }
  return {
    config: Object.entries(config || {}).reduce(
      (accum: any, [key, value]: any) =>
        key && value !== null && value !== undefined ? { ...accum, [toCamelCase(key)]: value } : accum,
      {},
    ),
    hash: hashCode(`${markdown}`.replace(/\s+/g, ' ')),
    markdown,
  };
};

const SEPARATOR = '---';
const SEPARATOR_VERTICAL = '...';

const parseContents = (contents: string[]) => {
  const [first, ...rest] = contents
    .filter((e) => e.trim().search(/^`use slide`\s*\n/) !== -1)
    .map((e) =>
      e
        .trim()
        .replace(/^`use slide`\n/, '')
        .split(/\n/)
        .map((line) => line.replace(/\s+$/, ''))
        .join('\n'),
    );

  if (typeof first === 'string') {
    const { config, markdown } = parseText(first);
    const separator = config.separator || SEPARATOR;
    const separatorVertical = config.separatorVertical || SEPARATOR_VERTICAL;
    let index = 0;
    let sections: any[] = markdown.split(`\n${separator}\n`);
    if (rest.length > 0) {
      sections = [...sections, ...rest.join(`\n${separator}\n`).split(`\n${separator}\n`)];
    }
    sections = sections.map((section, index_h) =>
      section.split(`\n${separatorVertical}\n`).map((slide: string, index_v: number) => {
        const { config: slideConfig, ...rest } = parseText(slide);
        return {
          config: { ...config, ...slideConfig },
          slideConfig,
          ...rest,
          index_h,
          index_v,
          index: index++,
        };
      }),
    );
    return { config, sections };
  }
  return { config: null, sections: null };
};

const parseContent = (content: string) => {
  const text = content
    .split(/\n/)
    .map((line) => line.replace(/\s+$/, ''))
    .join('\n');

  if (text.trim().search(/^`use slide`\n/) === -1) {
    return { config: null, sections: null };
  }

  const { config, markdown } = parseText(text.trim().replace(/^`use slide`\n/, ''));

  const separator = config.separator || SEPARATOR;
  const separatorVertical = config.separatorVertical || SEPARATOR_VERTICAL;

  let index = 0;
  const sections = markdown.split(`\n${separator}\n`).map((section, index_h) =>
    section.split(`\n${separatorVertical}\n`).map((slide, index_v) => {
      const { config: slideConfig, ...rest } = parseText(slide);
      return {
        config: { ...config, ...slideConfig },
        slideConfig,
        ...rest,
        index_h,
        index_v,
        index: index++,
      };
    }),
  );

  return { config, sections };
};

export { postMessage, getMarkdown, parseText, parseContents, parseContent, toKebabCase, toCamelCase };
