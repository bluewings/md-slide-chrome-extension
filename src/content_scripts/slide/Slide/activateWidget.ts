import { bb } from 'billboard.js';
import 'billboard.js/dist/billboard.css';

function activateWidget(domElem?: HTMLElement) {
  setTimeout(() => {
    if (domElem) {
      // console.log('activate');
      // console.log(domElem);

      const targets = Array.from(domElem.querySelectorAll('[data-widget-type]'))
        .filter((e) => !e.getAttribute('done'))
        .forEach((e) => {
          e.setAttribute('done', 'true');

          const div = document.createElement('div');
          // div.style.width = '200px';
          div.style.height = '200px';

          // div.style.display = 'flex';
          // div.style.justifyContent = 'center';

          e.appendChild(div);
          // @ts-ignore
          e.style.width = '100%';
          // @ts-ignore
          e.style.height = '200px';
          // @ts-ignore
          e.style.display = 'flex';
          // @ts-ignore
          e.style.justifyContent = 'center';

          // setTimeout(() => {
          try {
            const widgetType = e.getAttribute('data-widget-type');
            const data = JSON.parse(decodeURIComponent(e.getAttribute('data-widget-data') || ''));

            const keys = Object.keys(data);
            const values = Object.values(data) as number[];

            bb.generate({
              data: {
                x: 'x',
                columns: [
                  ['x', ...keys],
                  ['data1', ...values],
                ],
                type: 'radar',
                labels: true,
              },
              radar: {
                axis: {
                  max: Math.max(...values),
                },
                level: {
                  depth: 4,
                },
                direction: {
                  clockwise: true,
                },
              },
              legend: { show: false },
              bindto: div,
            });
          } catch {}
          return e;
        });
    }
  }, 10);
}

export default activateWidget;
