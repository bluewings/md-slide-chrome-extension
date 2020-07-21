// Override theme settings (see ../template/settings.scss)
import { radialGradient } from './mixin';

export default {
  headingTextShadow: '0px 0px 6px rgba(0,0,0,0.2)',
  heading1TextShadow:
    '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 20px 20px rgba(0,0,0,.15)',
  bodyBackground: radialGradient('rgba(28,30,32,1)', 'rgba(85,90,95,1)'),
};
