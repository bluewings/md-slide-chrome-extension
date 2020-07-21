// code from: https://github.githubassets.com/assets/github-bootstrap-b9efa97b.js
function ho(e) {
  if (null === e.parentNode || !(e.parentNode instanceof HTMLElement)) throw new Error();
  const t = e.parentNode.children;
  for (let n = 0; n < t.length; ++n) if (t[n] === e) return n;
  return 0;
}
function bo(e) {
  return e
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
var jo = 0;
var vo = {
  INPUT: (e) => (e instanceof HTMLInputElement && e.checked ? '[x] ' : '[ ] '),
  CODE(e) {
    const t = e.textContent || '';
    return e.parentNode && 'PRE' === e.parentNode.nodeName
      ? ((e.textContent = `\`\`\`\n${t.replace(/\n+$/, '')}\n\`\`\`\n\n`), e)
      : t.indexOf('`') >= 0
      ? `\`\` ${t} \`\``
      : `\`${t}\``;
  },
  STRONG: (e) => `**${e.textContent || ''}**`,
  EM: (e) => `_${e.textContent || ''}_`,
  DEL: (e) => `~${e.textContent || ''}~`,
  BLOCKQUOTE(e) {
    const t = (e.textContent || '').trim().replace(/^/gm, '> '),
      n = document.createElement('pre');
    return (n.textContent = `${t}\n\n`), n;
  },
  A(e) {
    const t = e.textContent || '',
      n = e.getAttribute('href');
    return /^https?:/.test(t) && t === n ? t : n ? `[${t}](${n})` : t;
  },
  IMG(e) {
    const t = e.getAttribute('alt') || '',
      n = e.getAttribute('src');
    if (!n) throw new Error();
    const o = e.hasAttribute('width') ? ` width="${bo(e.getAttribute('width') || '')}"` : '',
      s = e.hasAttribute('height') ? ` height="${bo(e.getAttribute('height') || '')}"` : '';
    return o || s ? `<img alt="${bo(t)}"${o}${s} src="${bo(n)}">` : `![${t}](${n})`;
  },
  LI(e) {
    const t = e.parentNode;
    if (!t) throw new Error();
    let n = '';
    if (
      !(function (e) {
        const t = e.childNodes[0],
          n = e.childNodes[1];
        return (
          !!(t && e.childNodes.length < 3) &&
          !(
            ('OL' !== t.nodeName && 'UL' !== t.nodeName) ||
            (n && (n.nodeType !== Node.TEXT_NODE || (n.textContent || '').trim()))
          )
        );
      })(e)
    )
      if ('OL' === t.nodeName)
        if (jo > 0 && !t.previousSibling) {
          n = `${ho(e) + jo + 1}\\. `;
        } else n = `${ho(e) + 1}. `;
      else n = '* ';
    const o = n.replace(/\S/g, ' '),
      s = (e.textContent || '').trim().replace(/^/gm, o),
      i = document.createElement('pre');
    return (i.textContent = s.replace(o, n)), i;
  },
  OL(e) {
    const t = document.createElement('li');
    return t.appendChild(document.createElement('br')), e.append(t), e;
  },
  H1(e) {
    const t = parseInt(e.nodeName.slice(1));
    return e.prepend(`${Array(t + 1).join('#')} `), e;
  },
  UL: (e) => e,
};
vo.UL = vo.OL;
for (let t = 2; t <= 6; ++t) vo[`H${t}`] = vo.H1;
function yo(e) {
  const t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, function (e) {
      return e.nodeName in vo &&
        !(function (e) {
          if (e instanceof HTMLAnchorElement && 1 === e.childNodes.length) {
            const t = e.childNodes[0];
            if (t instanceof HTMLImageElement) return t.src === e.href;
          }
          return false;
        })(e) &&
        ((function (e) {
          return 'IMG' === e.nodeName || null != e.firstChild;
        })(e) ||
          (function (e) {
            return 'INPUT' === e.nodeName && e instanceof HTMLInputElement && 'checkbox' === e.type;
          })(e))
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP;
    }),
    n = [];
  let o = t.nextNode();
  for (; o; ) o instanceof HTMLElement && n.push(o), (o = t.nextNode());
  n.reverse();
  for (const s of n) s.replaceWith(vo[s.nodeName](s));
}

var To = /\bEdge\//.test(navigator.userAgent);

var Lo;

function Ho(e, range) {
  let selectionText = e.trim();
  if (!selectionText) return;
  let cursor = range.startContainer;
  if (!cursor) return;
  if ((cursor.nodeType !== Node.ELEMENT_NODE && (cursor = cursor.parentNode), !(cursor instanceof Element))) return;
  const container = So(cursor);
  if (!container) return;
  const r = Lo.get(container);
  if (r) {
    if (r.quoteMarkdown && !To)
      try {
        const e = (function (e, t) {
          const n = e.startContainer;
          if (!(n && n.parentNode && n.parentNode instanceof HTMLElement))
            throw new Error('the range must start within an HTMLElement');
          const o = n.parentNode;
          let s = e.cloneContents();
          if (t) {
            const e = s.querySelector(t);
            e && ((s = document.createDocumentFragment()), s.appendChild(e));
          }
          jo = 0;
          const i = o.closest('li');
          if (o.closest('pre')) {
            const e = document.createElement('pre');
            e.appendChild(s), (s = document.createDocumentFragment()), s.appendChild(e);
          } else if (i && i.parentNode && ('OL' === i.parentNode.nodeName && (jo = ho(i)), !s.querySelector('li'))) {
            const e = document.createElement('li');
            if (!i.parentNode) throw new Error();
            const t = document.createElement(i.parentNode.nodeName);
            e.appendChild(s), t.appendChild(e), (s = document.createDocumentFragment()), s.appendChild(t);
          }
          return s;
        })(range, r.scopeSelector);
        container.dispatchEvent(
          new CustomEvent('quote-selection-markdown', {
            bubbles: !0,
            cancelable: !1,
            detail: {
              fragment: e,
              range,
              unwrap: false,
            },
          }),
        );

        yo(e),
          (selectionText = (function (e) {
            const t = document.body;
            if (!t) return '';
            const n = document.createElement('div');
            n.appendChild(e), (n.style.cssText = 'position:absolute;left:-9999px;'), t.appendChild(n);
            let o = '';
            try {
              const e = window.getSelection();
              if (e) {
                const t = document.createRange();
                t.selectNodeContents(n),
                  e.removeAllRanges(),
                  e.addRange(t),
                  (o = e.toString()),
                  e.removeAllRanges(),
                  t.detach();
              }
            } finally {
              t.removeChild(n);
            }
            return o;
          })(e)
            .replace(/^\n+/, '')
            .replace(/\s+$/, ''));
      } catch (a) {
        setTimeout(() => {
          throw a;
        });
      }
    return {
      selectionText,
      container,
    };
  }
}
function So(e) {
  let t = e;
  for (; (t = t.parentElement); ) if (Lo.has(t)) return t;
}

function Co(e) {
  return 'DIV' === e.nodeName && e.classList.contains('highlight');
}

document.addEventListener('quote-selection-markdown', function (e) {
  const t = e.detail,
    { fragment: n, range: o, unwrap: s } = t,
    i = o.startContainer.parentElement,
    r = i && i.closest('pre');
  if (r instanceof HTMLElement && !s) {
    const e = r.parentElement;
    if (e && Co(e)) {
      const t = document.createElement('div');
      (t.className = e.className), t.appendChild(n), n.appendChild(t);
    }
  }
  !(function (e) {
    const t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (e) =>
          e.nodeName in Io &&
          (function (e) {
            return 'IMG' === e.nodeName || null != e.firstChild;
          })(e)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP,
      }),
      n = [];
    let o = t.nextNode();
    for (; o; ) o instanceof HTMLElement && n.push(o), (o = t.nextNode());
    n.reverse();
    for (const s of n) s.replaceWith(Io[s.nodeName](s));
  })(n);
});
const Io = {
  PRE(e) {
    const t = e.parentElement;
    if (t && Co(t)) {
      const n = t.className.match(/highlight-source-(\S+)/),
        o = n ? n[1] : '',
        s = (e.textContent || '').replace(/\n+$/, '');
      (e.textContent = `\`\`\`${o}\n${s}\n\`\`\``), e.append('\n\n');
    }
    return e;
    // const pre = document.createElement('pre');
    // pre.innerText = e.textContent;
    // return pre;
  },
  TABLE(e) {
    return e.outerHTML;
  },
  A(e) {
    const t = e.textContent || '';
    return e.classList.contains('user-mention') || e.classList.contains('team-mention')
      ? t
      : e.classList.contains('issue-link') && /^#\d+$/.test(t)
      ? t
      : e;
  },
  IMG(e) {
    const t = e.getAttribute('alt');
    return t && e.classList.contains('emoji') ? t : e;
  },
  DIV(e) {
    if (e.classList.contains('js-suggested-changes-blob')) e.remove();
    else if (e.classList.contains('blob-wrapper-embedded')) {
      const t = e.parentElement,
        n = c(t, 'a[href]', HTMLAnchorElement),
        o = document.createElement('p');
      (o.textContent = n.href), t.replaceWith(o);
    }
    return e;
  },
};

function getMarkdown(target) {
  Lo = new WeakMap();
  var selCon = document.querySelector('.js-quote-selection-container');
  Lo.set(selCon, {
    quoteMarkdown: selCon.hasAttribute('data-quote-markdown'),
    scopeSelector: selCon.getAttribute('data-quote-markdown') || '',
    copyMarkdown: false,
  });
  // var quoteReply = document.querySelector('.js-comment-quote-reply');

  // var t;

  var n = target;
  // .comment.querySelector('.js-comment-body'),
  // quoteReply.closest('.js-comment');
  var o = n.querySelector('.js-comment-body');

  if (n.classList.contains('js-nested-discussion-comment')) {
    null === (t = i(n, '.js-timeline-comment').querySelector('.js-toggle-inline-comment-form')) ||
      void 0 === t ||
      t.click();
  }

  Array.from(o.querySelectorAll('hr')).forEach((elem) => {
    const divider = document.createElement('p');
    divider.setAttribute('data-tmp-divider', '');
    divider.innerText = '\n\n---\n\n';
    elem.parentNode.insertBefore(divider, elem);
  });

  const f = window.getSelection();
  f.removeAllRanges();
  f.selectAllChildren(o);

  const n1 = Ho(f.toString(), f.getRangeAt(0));

  Array.from(o.querySelectorAll('p[data-tmp-divider]')).forEach((elem) => {
    elem.parentNode.removeChild(elem);
  });

  if (!n1) return false;
  return n1.selectionText;
}

export { getMarkdown };
