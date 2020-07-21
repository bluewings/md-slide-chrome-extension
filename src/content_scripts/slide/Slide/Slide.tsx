import React, { useMemo, useLayoutEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/plugin/highlight/zenburn.css';
import { Key } from '../../constant';
import { toKebabCase } from '../../helpers/util';
import { useHandle } from '../../hooks';
import useChannel from './useChannel';
import { getRootStyle } from '../../theme';
import '../../theme/theme.scss';

function Slide() {
  const revealRef = useRef<any>(null);
  const handleKeyDown = useHandle((keyCode: number) => {
    const revealjs = revealRef.current;
    if (revealjs) {
      if (keyCode === Key.LEFT) {
        revealjs.left();
      } else if (keyCode === Key.RIGHT) {
        revealjs.right();
      } else if (keyCode === Key.UP) {
        revealjs.up();
      } else if (keyCode === Key.DOWN) {
        revealjs.down();
      }
    }
  });

  const [{ config, sections, changedSlide }, { sendInfo }] = useChannel({
    onKeyDown: handleKeyDown,
    revealjs: revealRef,
  });

  const sync = useHandle((changed: any) => {
    const container = slides.current;
    if (container) {
      let revealjs = revealRef.current;
      if (!revealjs) {
        revealjs = Reveal(container.parentNode, {
          plugins: [RevealMarkdown, RevealHighlight],
        });
        revealjs = revealjs;
        revealjs.initialize();
        const _sendInfo = () => {
          const indices = revealjs.getIndices();
          const totalSlides = revealjs.getTotalSlides();
          const slidePastCount = revealjs.getSlidePastCount();
          sendInfo({ indices, totalSlides, slidePastCount: slidePastCount % totalSlides });
        };
        revealjs.on('slidechanged', _sendInfo);
        revealRef.current = revealjs;
        setTimeout(_sendInfo, 1);
      } else {
        try {
          const { h: index_h, v: index_v } = revealjs.getIndices();
          revealjs.getPlugin('markdown').processSlides(slides.current);
          revealjs.getPlugin('markdown').convertSlides();
          Array.from(container.querySelectorAll('pre code')).forEach((e) => {
            revealjs.getPlugin('highlight').highlightBlock(e);
          });
          revealjs.sync();
          if (changed) {
            revealjs.slide(changed.index_h, changed.index_v);
          } else {
            revealjs.slide(index_h, index_v);
          }
        } catch {
          console.log(revealjs);
        }
      }
    }
  });

  const slides = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const container = slides.current;
    if (container && sections?.length > 0) {
      container.innerHTML = '';
      sections.forEach((slideInfos: any[]) => {
        const slides = slideInfos.map(toSlide);
        let cursor: HTMLElement = container;
        if (slides.length > 1) {
          const section = document.createElement('section');
          cursor.appendChild(section);
          cursor = section;
        }
        slides.forEach((slide) => {
          cursor.appendChild(slide);
        });
      });
      sync(changedSlide);
    }
  }, [sections, changedSlide]);

  const style = useRef<HTMLStyleElement>(null);

  const [rootStyle, __css] = useMemo(() => {
    return getRootStyle(config?.theme);
  }, [config?.theme]);

  useLayoutEffect(() => {
    if (style.current) {
      style.current.innerHTML = rootStyle;
    }
  }, [rootStyle]);

  return (
    <span css={__css}>
      <style ref={style} />
      <div className="reveal">
        <div className="slides" ref={slides} />
      </div>
    </span>
  );
}

export default Slide;

const knownOptions = ['backgroundColor', 'transition'];

const toSlide = (slide: any) => {
  const { config, markdown } = slide;
  const section = document.createElement('section');
  section.setAttribute('data-markdown', '');
  const { hAlign, vAlign, ...rest } = config;
  section.className = [hAlign, vAlign].filter(Boolean).join(' ');
  Object.entries(rest).forEach(([key, value]: any) => {
    if (knownOptions.includes(key)) {
      section.setAttribute(`data-${toKebabCase(key)}`, value);
    }
  });
  const script = document.createElement('script');
  script.setAttribute('type', 'text/template');
  script.innerHTML = markdown;
  section.appendChild(script);
  return section;
};
