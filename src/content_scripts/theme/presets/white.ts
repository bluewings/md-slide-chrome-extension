import { css } from '@emotion/core';

export default {
  backgroundColor: '#fff',
  mainColor: '#222',
  headingColor: '#222',
  mainFontSize: '42px',
  mainFont: "'Source Sans Pro', Helvetica, sans-serif",
  headingFont: "'Source Sans Pro', Helvetica, sans-serif",
  headingTextShadow: 'none',
  headingLetterSpacing: 'normal',
  headingTextTransform: 'uppercase',
  headingFontWeight: '600',
  linkColor: '#2a76dd',
  linkColorHover: 'lighten( $linkColor, 15% )',
  selectionBackgroundColor: 'lighten( $linkColor, 25% )',
  heading1Size: '2.5em',
  heading2Size: '1.6em',
  heading3Size: '1.3em',
  heading4Size: '1.0em',
  __css: css`
    section.has-dark-background {
      &,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: #fff;
      }
    }
  `,
};
