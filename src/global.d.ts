// https://www.typescriptlang.org/docs/handbook/declaration-files/templates.html

declare module 'reveal.js';
declare module 'reveal.js/plugin/markdown/markdown.esm';
declare module 'reveal.js/plugin/highlight/highlight.esm';

declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
