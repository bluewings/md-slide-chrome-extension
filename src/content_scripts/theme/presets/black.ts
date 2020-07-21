import { css } from '@emotion/core';

export default {
  backgroundColor: '#191919',
  mainColor: '#fff',
  headingColor: '#fff',
  mainFontSize: '42px',
  mainFont: "'Source Sans Pro', Helvetica, sans-serif",
  headingFont: "'Source Sans Pro', Helvetica, sans-serif",
  headingTextShadow: 'none',
  headingLetterSpacing: 'normal',
  headingTextTransform: 'uppercase',
  headingFontWeight: '600',
  linkColor: '#42affa',
  linkColorHover: 'lighten( $linkColor, 15% )',
  selectionBackgroundColor: 'lighten( $linkColor, 25% )',
  heading1Size: '2.5em',
  heading2Size: '1.6em',
  heading3Size: '1.3em',
  heading4Size: '1.0em',
  __css: css`
    section.has-light-background {
      &,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: '#222';
      }
    }
  `,
};
