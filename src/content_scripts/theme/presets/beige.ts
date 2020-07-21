// Background generator
// @mixin bodyBackground() {
// 	@include radial-gradient( rgba(247,242,211,1), rgba(255,255,255,1) );
// }
import { radialGradient } from './mixin';

export default {
  mainColor: '#333',
  headingColor: '#333',
  headingTextShadow: 'none',
  backgroundColor: '#f7f3de',
  // background: 'radial-gradient( rgba(247,242,211,1), rgba(255,255,255,1) )',
  linkColor: '#8b743d',
  linkColorHover: 'lighten( $linkColor, 20% )',
  selectionBackgroundColor: 'rgba(79, 64, 28, 0.99)',
  heading1TextShadow:
    '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 20px 20px rgba(0,0,0,.15)',
  bodyBackground: radialGradient('rgba(247,242,211,1)', 'rgba(255,255,255,1)'),
};
