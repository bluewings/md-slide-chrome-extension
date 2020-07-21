import * as React from 'react';
import useSlides from './useSlides';
import usePortal from './usePortal';
import EmbedWidget from '../EmbedWidget';

function Main() {
  const { config, sections } = useSlides();

  const Portal = usePortal(
    '.gutter-condensed > .flex-shrink-0:last-child, #discussion_bucket > .col-3:last-child',
    (parent: Element) => {
      const div = document.createElement('div');
      div.style.position = 'sticky';
      div.style.top = '60px';
      parent.prepend(div);
      return div;
    },
  );

  return config && sections ? (
    <Portal>
      <EmbedWidget config={config} sections={sections} />
    </Portal>
  ) : null;
}

export default Main;
