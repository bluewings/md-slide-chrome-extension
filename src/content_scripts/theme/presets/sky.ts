// Background generator
// @mixin bodyBackground() {
// 	@include radial-gradient( #add9e4, #f7fbfc );
// }
import { radialGradient } from './mixin';

export default {
  mainFont: "'Open Sans', sans-serif",
  mainColor: '#333',
  headingFont: "'Quicksand', sans-serif",
  headingColor: '#333',
  headingLetterSpacing: '-0.08em',
  headingTextShadow: 'none',
  backgroundColor: '#f7fbfc',
  linkColor: '#3b759e',
  linkColorHover: 'lighten( $linkColor, 20% )',
  selectionBackgroundColor: '#134674',
  bodyBackground: radialGradient('#add9e4', '#f7fbfc'),
};
