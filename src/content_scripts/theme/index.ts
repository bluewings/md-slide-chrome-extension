import { ThemeOptions } from './constant';
import presets from './presets';
import { toCamelCase } from '../helpers/util';

function parseThemeConfig(options: any) {
  let parsed = null;
  if (typeof options === 'string') {
    parsed = { name: options };
  } else if (typeof options === 'object' && !Array.isArray(options)) {
    parsed = Object.entries(options || {})
      .map(([key, value]: any) => [toCamelCase(key), value])
      .filter(([key]: any) => ThemeOptions.includes(key))
      .reduce((accum: any, [key, value]: any) => ({ ...accum, [key]: value }), {});
  }
  if (parsed) {
    if (typeof parsed.name === 'string' && !(parsed.name in presets)) {
      delete parsed.name;
    }
  }
  return parsed;
}

const defaultStyle = {
  backgroundColor: '#2b2b2b',
  mainFont: 'Lato, sans-serif',
  mainFontSize: '40px',
  mainColor: '#eee',
  blockMargin: '20px',
  headingMargin: '0 0 ${blockMargin} 0',
  headingFont: 'League Gothic, Impact, sans-serif',
  headingColor: '#eee',
  headingLineHeight: '1.2',
  headingLetterSpacing: 'normal',
  headingTextTransform: 'uppercase',
  headingTextShadow: 'none',
  headingFontWeight: 'normal',
  heading1TextShadow: '${headingTextShadow}',
  heading1Size: '3.77em',
  heading2Size: '2.11em',
  heading3Size: '1.55em',
  heading4Size: '1.00em',
  codeFont: 'monospace',
  linkColor: '#13DAEC',
  linkColorHover: 'lighten( ${linkColor}, 20% )',
  selectionBackgroundColor: '#FF5E99',
  selectionColor: '#fff',
  bodyBackground: '',
};

function getRootStyle(theme: any) {
  const _ = {
    ...defaultStyle,
    ...presets[theme?.name],
    ...theme,
  };
  return [
    `
    :root {
      --background-color: ${_.backgroundColor};
      --main-font: ${_.mainFont};
      --main-font-size: ${_.mainFontSize};
      --main-color: ${_.mainColor};
      --block-margin: ${_.blockMargin};
      --heading-margin: ${_.headingMargin};
      --heading-font: ${_.headingFont};
      --heading-color: ${_.headingColor};
      --heading-line-height: ${_.headingLineHeight};
      --heading-letter-spacing: ${_.headingLetterSpacing};
      --heading-text-transform: ${_.headingTextTransform};
      --heading-text-shadow: ${_.headingTextShadow};
      --heading-font-weight: ${_.headingFontWeight};
      --heading1-text-shadow: ${_.heading1TextShadow};
      --heading1-size: ${_.heading1Size};
      --heading2-size: ${_.heading2Size};
      --heading3-size: ${_.heading3Size};
      --heading4-size: ${_.heading4Size};
      --code-font: ${_.codeFont};
      --link-color: ${_.linkColor};
      --link-color-hover: ${_.linkColorHover};
      --selection-background-color: ${_.selectionBackgroundColor};
      --selection-color: ${_.selectionColor};
    }
    .reveal-viewport {
      ${_.bodyBackground}
    }
  `,
    _.__css,
  ];
}

export { parseThemeConfig, getRootStyle };
