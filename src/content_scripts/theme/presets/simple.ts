import { css } from '@emotion/core';

export default {
  mainFont: "'Lato', sans-serif",
  mainColor: '#000',
  headingFont: "'News Cycle', Impact, sans-serif",
  headingColor: '#000',
  headingTextShadow: 'none',
  headingTextTransform: 'none',
  backgroundColor: '#fff',
  linkColor: '#00008B',
  linkColorHover: 'lighten( $linkColor, 20% )',
  selectionBackgroundColor: 'rgba(0, 0, 0, 0.99)',
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
