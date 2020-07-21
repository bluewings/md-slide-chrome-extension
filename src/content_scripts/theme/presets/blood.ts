// /**
//  * Blood theme for reveal.js
//  * Author: Walther http://github.com/Walther
//  *
//  * Designed to be used with highlight.js theme
//  * "monokai_sublime.css" available from
//  * https://github.com/isagalaev/highlight.js/
//  *
//  * For other themes, change $codeBackground accordingly.
//  *
//  */

//  // Default mixins and settings -----------------
// "@import "../template/mixins"",
// "@import "../template/settings"",
// // ---------------------------------------------

// // Include theme-specific fonts

// "@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,700,300italic,700italic)",

// // Colors used in the theme
// "#a23: #a23",
// "#222  : #222",
// "$codeBackground: #23241f",

// "$backgroundColor: #222  ",

// // Main text
// "$mainFont: Ubuntu, 'sans-serif'",
// "$mainColor: #eee",

// // Headings
// "$headingFont: Ubuntu, 'sans-serif'",
// "$headingTextShadow: 2px 2px 2px #222  ",

// // h1 shadow, borrowed humbly from
// // (c) Default theme by Hakim El Hattab
// "$heading1TextShadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 20px 20px rgba(0,0,0,.15)",

// // Links
// "$linkColor: #a23",
// "$linkColorHover: lighten( $linkColor, 20% )",

// // Text selection
// "$selectionBackgroundColor: #a23",
// "$selectionColor: #fff",

// // Theme template ------------------------------
// "@import "../template/theme"",
// // ---------------------------------------------

// // some overrides after theme template import

// .reveal p {
// "    font-weight: 300",
// "    text-shadow: 1px 1px #222  ",
// }

// .reveal h1,
// .reveal h2,
// .reveal h3,
// .reveal h4,
// .reveal h5,
// .reveal h6 {
// "    font-weight: 700",
// }

// .reveal p code {
// "    background-color: $codeBackground",
// "    display: inline-block",
// "    border-radius: 7px",
// }

// .reveal small code {
// "    vertical-align: baseline",
// }

export default {
  // Colors used in the theme
  blood: '#a23',
  coal: '#222',
  codeBackground: '#23241f',

  backgroundColor: '#222',

  // Main text
  mainFont: "Ubuntu, 'sans-serif'",
  mainColor: '#eee',

  // Headings
  headingFont: "Ubuntu, 'sans-serif'",
  headingTextShadow: '2px 2px 2px #222',

  // h1 shadow, borrowed humbly from
  // (c) Default theme by Hakim El Hattab
  heading1TextShadow:
    '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 20px 20px rgba(0,0,0,.15)',

  // Links
  linkColor: '#a23',
  linkColorHover: 'lighten( $linkColor, 20% )',

  // Text selection
  selectionBackgroundColor: '#a23',
  selectionColor: '#fff',
};
