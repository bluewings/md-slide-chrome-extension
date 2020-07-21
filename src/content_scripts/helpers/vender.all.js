System.register(['./vendor.js', './frameworks.js'], function (e, t) {
  'use strict';
  var n,
    o,
    s,
    i,
    r,
    a,
    c,
    l,
    u,
    d,
    m,
    f,
    p,
    g,
    h,
    j,
    b,
    v,
    y,
    L,
    w,
    T,
    E,
    k,
    S,
    M,
    x,
    A,
    H,
    q,
    C,
    I,
    _,
    $,
    N,
    R,
    D,
    P,
    F,
    B,
    O,
    U,
    z,
    W,
    V,
    G,
    J,
    K,
    X,
    Y,
    Q,
    Z,
    ee,
    te,
    ne,
    oe,
    se,
    ie,
    re,
    ae,
    ce,
    le,
    ue,
    de,
    me,
    fe,
    pe,
    ge,
    he,
    je,
    be,
    ve,
    ye,
    Le,
    we,
    Te,
    Ee,
    ke,
    Se,
    Me,
    xe,
    Ae,
    He,
    qe,
    Ce,
    Ie,
    _e,
    $e,
    Ne,
    Re,
    De,
    Pe,
    Fe,
    Be,
    Oe,
    Ue,
    ze,
    We,
    Ve,
    Ge,
    Je,
    Ke,
    Xe,
    Ye,
    Qe,
    Ze,
    et,
    tt,
    nt,
    ot,
    st,
    it,
    rt,
    at,
    ct,
    lt,
    ut,
    dt,
    mt,
    ft,
    pt,
    gt,
    ht,
    jt,
    bt,
    vt,
    yt,
    Lt,
    wt,
    Tt,
    Et,
    kt,
    St,
    Mt;
  return {
    setters: [
      function (e) {
        (n = e.a),
          (o = e.I),
          (s = e.o),
          (i = e.c),
          (r = e.g),
          (a = e.q),
          (c = e.b),
          (l = e.d),
          (u = e.f),
          (d = e.A),
          (m = e.e),
          (f = e.R),
          (p = e.F),
          (g = e.n),
          (h = e.C),
          (j = e.i),
          (b = e.j),
          (v = e.t),
          (y = e.k),
          (L = e.M),
          (w = e.r),
          (T = e.h),
          (E = e.p),
          (k = e.v),
          (S = e.m),
          (M = e.l),
          (x = e.s),
          (A = e.w),
          (H = e.x),
          (q = e.y);
      },
      function (e) {
        (C = e.O),
          (I = e.P),
          (_ = e.q),
          ($ = e.Q),
          (N = e.A),
          (R = e.o),
          (D = e.j),
          (P = e.y),
          (F = e.R),
          (B = e.r),
          (O = e.M),
          (U = e.S),
          (z = e.F),
          (W = e.B),
          (V = e.a),
          (G = e.x),
          (J = e.w),
          (K = e.I),
          (X = e.T),
          (Y = e.U),
          (Q = e.b),
          (Z = e.s),
          (ee = e.V),
          (te = e.W),
          (ne = e.m),
          (oe = e.g),
          (se = e.X),
          (ie = e.f),
          (re = e.K),
          (ae = e.i),
          (ce = e.Y),
          (le = e.Z),
          (ue = e._),
          (de = e.$),
          (me = e.p),
          (fe = e.a0),
          (pe = e.a1),
          (ge = e.a2),
          (he = e.G),
          (je = e.a3),
          (be = e.a4),
          (ve = e.L),
          (ye = e.a5),
          (Le = e.a6),
          (we = e.a7),
          (Te = e.E),
          (Ee = e.H),
          (ke = e.a8),
          (Se = e.a9),
          (Me = e.aa),
          (xe = e.ab),
          (Ae = e.ac),
          (He = e.ad),
          (qe = e.ae),
          (Ce = e.af),
          (Ie = e.ag),
          (_e = e.ah),
          ($e = e.ai),
          (Ne = e.D),
          (Re = e.t),
          (De = e.aj),
          (Pe = e.ak),
          (Fe = e.al),
          (Be = e.am),
          (Oe = e.v),
          (Ue = e.an),
          (ze = e.k),
          (We = e.l),
          (Ve = e.ao),
          (Ge = e.ap),
          (Je = e.aq),
          (Ke = e.ar),
          (Xe = e.as),
          (Ye = e.at),
          (Qe = e.au),
          (Ze = e.av),
          (et = e.aw),
          (tt = e.ax),
          (nt = e.ay),
          (ot = e.az),
          (st = e.aA),
          (it = e.aB),
          (rt = e.aC),
          (at = e.aD),
          (ct = e.aE),
          (lt = e.aF),
          (ut = e.C),
          (dt = e.aG),
          (mt = e.aH),
          (ft = e.aI),
          (pt = e.aJ),
          (gt = e.aK),
          (ht = e.aL),
          (jt = e.aM),
          (bt = e.aN),
          (vt = e.aO),
          (yt = e.aP),
          (Lt = e.aQ),
          (wt = e.aR),
          (Tt = e.aS),
          (Et = e.aT),
          (kt = e.aU),
          (St = e.aV),
          (Mt = e.aW);
      },
    ],
    execute: function () {
      document.addEventListener(
        'click',
        function (e) {
          if (!(e.target instanceof Element)) return;
          const t = e.target.closest(
            'a[data-confirm], input[type=submit][data-confirm], input[type=checkbox][data-confirm], button[data-confirm]',
          );
          if (!t) return;
          const n = t.getAttribute('data-confirm');
          n &&
            ((t instanceof HTMLInputElement && t.hasAttribute('data-confirm-checked') && !t.checked) ||
              confirm(n) ||
              (e.stopImmediatePropagation(), e.preventDefault()));
        },
        !0,
      ),
        n('[data-hotkey]', {
          constructor: HTMLElement,
          add(e) {
            C(e);
          },
          remove(e) {
            I(e);
          },
        });
      class PollIncludeFragmentElement extends o {
        async fetch(e, t = 1e3) {
          const n = await super.fetch(e);
          return 202 === n.status ? (await new Promise((e) => setTimeout(e, t)), this.fetch(e, 1.5 * t)) : n;
        }
      }
      window.customElements.get('poll-include-fragment') ||
        ((window.PollIncludeFragmentElement = PollIncludeFragmentElement),
        window.customElements.define('poll-include-fragment', PollIncludeFragmentElement));
      const e = navigator.userAgent.match(/Firefox\/(\d+)/);
      function xt(e) {
        return 'ArrowDown' === e.key || 'ArrowUp' === e.key;
      }
      function At(e) {
        const t = i(e, 'label');
        t.hasAttribute('data-role') || t.setAttribute('data-role', r(t, 'role')),
          t.setAttribute('role', r(t, 'data-role')),
          e.removeAttribute('role');
      }
      e &&
        Number(e[1]) < 76 &&
        (n('details-menu label[tabindex][role^="menuitem"]', (e) => {
          const t = e.querySelector('input');
          if (!t) return;
          const n = e.classList.contains('select-menu-item'),
            o = t.classList.contains('d-none'),
            s = n || o || t.hidden;
          n && t.classList.add('d-block'),
            o && t.classList.remove('d-none'),
            s && (t.classList.add('sr-only'), (t.hidden = !1)),
            e.removeAttribute('tabindex');
        }),
        s(
          'focus',
          'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input',
          (e) => {
            const t = i(e.currentTarget, 'label');
            t.classList.contains('select-menu-item') && t.classList.add('navigation-focus'),
              t.classList.contains('SelectMenu-item') && t.classList.add('hx_menuitem--focus'),
              t.classList.contains('dropdown-item') && t.classList.add('hx_menuitem--focus'),
              e.currentTarget.addEventListener(
                'blur',
                () => {
                  t.classList.contains('select-menu-item') && t.classList.remove('navigation-focus'),
                    t.classList.contains('SelectMenu-item') && t.classList.remove('hx_menuitem--focus'),
                    t.classList.contains('dropdown-item') && t.classList.remove('hx_menuitem--focus');
                },
                {
                  once: !0,
                },
              );
          },
          {
            capture: !0,
          },
        ),
        _(
          'keydown',
          'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input',
          async function (e) {
            if (xt(e))
              e.currentTarget instanceof Element &&
                (function (e) {
                  const t = i(e, 'label');
                  t.hasAttribute('data-role') || t.setAttribute('data-role', r(t, 'role'));
                  e.setAttribute('role', r(t, 'data-role')), t.removeAttribute('role');
                })(e.currentTarget);
            else if ('Enter' === e.key) {
              const t = e.currentTarget;
              e.preventDefault(), await $(), t instanceof HTMLInputElement && t.click();
            }
          },
        ),
        s(
          'blur',
          'details-menu label input[role="menuitemradio"], details-menu label input[role="menuitemcheckbox"]',
          (e) => {
            At(e.currentTarget);
          },
          {
            capture: !0,
          },
        ),
        _(
          'keyup',
          'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input',
          (e) => {
            xt(e) && e.currentTarget instanceof Element && At(e.currentTarget);
          },
        ));
      function Ht(e) {
        return e.toUpperCase() === e;
      }
      function qt(e, t, n, o) {
        for (
          var s = e.length,
            i = t.length,
            r = e.toLowerCase(),
            a = t.toLowerCase(),
            c = (function (e) {
              for (var t, n = e.length, o = new Array(n), s = '/', i = 0; i < n; i++) {
                var r = e[i];
                '/' === s
                  ? (o[i] = 0.9)
                  : '-' === s || '_' === s || ' ' === s
                  ? (o[i] = 0.8)
                  : '.' === s
                  ? (o[i] = 0.6)
                  : (t = s).toLowerCase() === t && Ht(r)
                  ? (o[i] = 0.7)
                  : (o[i] = 0),
                  (s = r);
              }
              return o;
            })(t),
            l = 0;
          l < s;
          l++
        ) {
          (n[l] = new Array(i)), (o[l] = new Array(i));
          for (var u = -1 / 0, d = l === s - 1 ? -0.005 : -0.01, m = 0; m < i; m++)
            if (r[l] === a[m]) {
              var f = -1 / 0;
              l ? m && (f = Math.max(o[l - 1][m - 1] + c[m], n[l - 1][m - 1] + 1)) : (f = -0.005 * m + c[m]),
                (n[l][m] = f),
                (o[l][m] = u = Math.max(f, u + d));
            } else (n[l][m] = -1 / 0), (o[l][m] = u += d);
        }
      }
      function Ct(e, t) {
        (e = e.toLowerCase()), (t = t.toLowerCase());
        for (var n = e.length, o = 0, s = 0; o < n; o += 1) if (0 === (s = t.indexOf(e[o], s) + 1)) return !1;
        return !0;
      }
      const It = (e, t, n) => {
          if (!Ct(e, t)) return -1 / 0;
          const o = (function (e, t) {
            var n = e.length,
              o = t.length;
            if (!n || !o) return -1 / 0;
            if (n === o) return 1 / 0;
            if (o > 1024) return -1 / 0;
            var s = new Array(n),
              i = new Array(n);
            return qt(e, t, s, i), i[n - 1][o - 1];
          })(e, t);
          return o < n ? -1 / 0 : o;
        },
        _t = (e, t, n) => {
          e.innerHTML = '';
          let o = 0;
          for (const s of (function (e, t) {
            var n = e.length,
              o = t.length,
              s = new Array(n);
            if (!n || !o) return s;
            if (n === o) {
              for (var i = 0; i < n; i++) s[i] = i;
              return s;
            }
            if (o > 1024) return s;
            var r = new Array(n),
              a = new Array(n);
            qt(e, t, r, a);
            for (var c = !1, l = ((i = n - 1), o - 1); i >= 0; i--)
              for (; l >= 0; l--)
                if (r[i][l] !== -1 / 0 && (c || r[i][l] === a[i][l])) {
                  (c = i && l && a[i][l] === r[i - 1][l - 1] + 1), (s[i] = l--);
                  break;
                }
            return s;
          })(t, n)) {
            '' !== n.slice(o, s) && e.appendChild(document.createTextNode(n.slice(o, s))), (o = s + 1);
            const t = document.createElement('mark');
            (t.textContent = n[s]), e.appendChild(t);
          }
          e.appendChild(document.createTextNode(n.slice(o)));
        },
        $t = new WeakMap(),
        Nt = new WeakMap(),
        Rt = new WeakMap(),
        Dt = (e) => {
          if (!Rt.has(e) && e instanceof HTMLElement) {
            const t = (e.getAttribute('data-value') || e.textContent || '').trim();
            return Rt.set(e, t), t;
          }
          return Rt.get(e) || '';
        };
      class FuzzyListElement extends HTMLElement {
        connectedCallback() {
          const e = this.querySelector('ul');
          if (!e) return;
          const t = new Set(e.querySelectorAll('li')),
            n = this.querySelector('input');
          n instanceof HTMLInputElement &&
            n.addEventListener('input', () => {
              this.value = n.value;
            });
          const o = new MutationObserver((e) => {
            let n = !1;
            for (const o of e)
              if ('childList' === o.type && o.addedNodes.length)
                for (const e of o.addedNodes)
                  if (e instanceof HTMLLIElement && !t.has(e)) {
                    const o = Dt(e);
                    (n = n || Ct(this.value, o)), t.add(e);
                  }
            n && this.sort();
          });
          o.observe(e, {
            childList: !0,
          });
          const s = {
            handler: o,
            items: t,
            lazyItems: new Map(),
            timer: null,
          };
          Nt.set(this, s);
        }
        disconnectedCallback() {
          const e = Nt.get(this);
          e && (e.handler.disconnect(), Nt.delete(this));
        }
        addLazyItems(e, t) {
          const n = Nt.get(this);
          if (!n) return;
          const { lazyItems: o } = n,
            { value: s } = this;
          let i = !1;
          for (const r of e) o.set(r, t), (i = i || (Boolean(s) && Ct(s, r)));
          i && this.sort();
        }
        sort() {
          const e = $t.get(this);
          e && (e.aborted = !0);
          const t = {
            aborted: !1,
          };
          $t.set(this, t);
          const { minScore: n, markSelector: o, maxMatches: s, value: i } = this,
            r = Nt.get(this);
          if (!r) return;
          if (
            !this.dispatchEvent(
              new CustomEvent('fuzzy-list-will-sort', {
                cancelable: !0,
                detail: i,
              }),
            )
          )
            return;
          const { items: a, lazyItems: c } = r,
            l = this.hasAttribute('mark-selector'),
            u = this.querySelector('ul');
          if (!u) return;
          const d = [];
          if (i) {
            for (const e of a) {
              const t = Dt(e),
                o = It(i, t, n);
              o !== -1 / 0 &&
                d.push({
                  item: e,
                  score: o,
                });
            }
            for (const [e, t] of c) {
              const o = It(i, e, n);
              o !== -1 / 0 &&
                d.push({
                  text: e,
                  render: t,
                  score: o,
                });
            }
            d.sort((e, t) => t.score - e.score).splice(s);
          } else {
            let e = d.length;
            for (const t of a) {
              if (e >= s) break;
              d.push({
                item: t,
                score: 1,
              }),
                (e += 1);
            }
            for (const [t, n] of c) {
              if (e >= s) break;
              d.push({
                text: t,
                render: n,
                score: 1,
              }),
                (e += 1);
            }
          }
          requestAnimationFrame(() => {
            if (t.aborted) return;
            const e = u.querySelector('input[type="radio"]:checked');
            u.innerHTML = '';
            let n = 0;
            const s = () => {
              if (t.aborted) return;
              const r = Math.min(d.length, n + 100),
                m = document.createDocumentFragment();
              for (let e = n; e < r; e += 1) {
                const t = d[e];
                let n = null;
                if ('render' in t && 'text' in t) {
                  const { render: e, text: o } = t;
                  (n = e(o)), a.add(n), Rt.set(n, o), c.delete(o);
                } else 'item' in t && (n = t.item);
                n instanceof HTMLElement &&
                  (l && _t((o && n.querySelector(o)) || n, l ? i : '', Dt(n)), m.appendChild(n));
              }
              n = r;
              let f = !1;
              if (e instanceof HTMLInputElement)
                for (const t of m.querySelectorAll('input[type="radio"]:checked'))
                  t instanceof HTMLInputElement && t.value !== e.value && ((t.checked = !1), (f = !0));
              if (
                (u.appendChild(m),
                e &&
                  f &&
                  e.dispatchEvent(
                    new Event('change', {
                      bubbles: !0,
                    }),
                  ),
                r < d.length)
              )
                requestAnimationFrame(s);
              else {
                u.hidden = 0 === d.length;
                const e = this.querySelector('[data-fuzzy-list-show-on-empty]');
                e && (e.hidden = d.length > 0),
                  this.dispatchEvent(
                    new CustomEvent('fuzzy-list-sorted', {
                      detail: d.length,
                    }),
                  );
              }
            };
            s();
          });
        }
        get value() {
          return this.getAttribute('value') || '';
        }
        set value(e) {
          this.setAttribute('value', e);
        }
        get markSelector() {
          return this.getAttribute('mark-selector') || '';
        }
        set markSelector(e) {
          e ? this.setAttribute('mark-selector', e) : this.removeAttribute('mark-selector');
        }
        get minScore() {
          return Number(this.getAttribute('min-score') || 0);
        }
        set minScore(e) {
          Number.isNaN(e) || this.setAttribute('min-score', String(e));
        }
        get maxMatches() {
          return Number(this.getAttribute('max-matches') || 1 / 0);
        }
        set maxMatches(e) {
          Number.isNaN(e) || this.setAttribute('max-matches', String(e));
        }
        static get observedAttributes() {
          return ['value', 'mark-selector', 'min-score', 'max-matches'];
        }
        attributeChangedCallback(e, t, n) {
          if (t === n) return;
          const o = Nt.get(this);
          o && (o.timer && window.clearTimeout(o.timer), (o.timer = window.setTimeout(() => this.sort(), 100)));
        }
      }
      function Pt() {
        const e = a(document, 'input[type=text].js-advanced-search-prefix', HTMLInputElement),
          t = a(document, 'select.js-advanced-search-prefix', HTMLSelectElement),
          n = a(document, '.js-advanced-search-prefix:checked', HTMLInputElement),
          o = [...Bt(e), ...Bt(t), ...Bt(n)],
          s = o.reduce((e, t) => (t.value && t.type && e[t.type]++, e), {
            Repositories: 0,
            Users: 0,
            Code: 0,
            Issues: 0,
          }),
          i = o.reduce(
            (e, t) =>
              `${e} ${(function ({ prefix: e, value: t }) {
                return '' === e ? '' : t ? `${e}${t}` : '';
              })(t)}`.trim(),
            '',
          ),
          r = c(document, '.js-advanced-search-input', HTMLInputElement).value;
        (c(document, '.js-type-value', HTMLInputElement).value = (function (e) {
          let t = new URLSearchParams(window.location.search).get('type') || 'Repositories',
            n = 0;
          for (const o in e) e[o] > n && ((n = e[o]), (t = o));
          return t;
        })(s)),
          (c(document, '.js-search-query', HTMLInputElement).value = `${r} ${i}`.trim());
        const l = c(document, '.js-advanced-query');
        (l.innerHTML = ''), (l.textContent = i);
        const u = document.createElement('span');
        (u.textContent = r.trim()), l.prepend(u, ' ');
      }
      function Ft(e) {
        return -1 !== e.search(/\s/g) ? `"${e}"` : e;
      }
      function Bt(e) {
        return e
          .map((e) => {
            const t = e.value.trim(),
              n = r(e, 'data-search-prefix'),
              o = e.getAttribute('data-search-type');
            return '' === n
              ? {
                  prefix: n,
                  value: t,
                  type: o,
                }
              : -1 !== t.search(/,/g) && 'location' !== n
              ? t.split(/,/).map((e) => ({
                  prefix: n,
                  value: Ft(e.trim()),
                  type: o,
                }))
              : {
                  prefix: n,
                  value: Ft(t),
                  type: o,
                };
          })
          .flatMap((e) => e);
      }
      function Ot(e, t) {
        const n = e.querySelector('.js-app-logo-with-bgcolor');
        n instanceof HTMLElement && (n.style.backgroundColor = `#${t}`);
      }
      function Ut() {
        return a(document, '.js-selected-repository-field', HTMLInputElement);
      }
      function zt() {
        const e = c(document, '#repository-menu-list'),
          t = Array.from(Ut()).map((e) => e.value);
        let n = !1;
        for (const s of a(e, '[role=menuitem]', HTMLButtonElement)) {
          const e = t.includes(s.value);
          n || e || (n = !0), (s.hidden = e);
        }
        const o = e.querySelector('.js-no-repository-found');
        o instanceof HTMLElement && (o.hidden = n);
      }
      function Wt() {
        const e = !c(document, '.js-select-repositories-radio', HTMLInputElement).checked || Ut().length > 0,
          t = document.querySelector('.js-integrations-install-form-submit');
        t && t instanceof HTMLButtonElement && (t.disabled = !e);
      }
      function Vt() {
        const e = Ut().length,
          t = c(document, '.js-integration-total-repos');
        (t.hidden = 0 === e), (t.textContent = `Selected ${e} ${1 === e ? 'repository' : 'repositories'}.`);
      }
      function Gt(e, t) {
        e.style.visibility = t ? 'hidden' : '';
        const n = r(e, 'data-tab-item');
        c(document, `[data-menu-item=${n}]`).hidden = !t;
      }
      function Jt(e, t) {
        let n = !1;
        const o = c(e, '.js-responsive-underlinenav-overflow');
        for (const s of t) {
          const t = F(s, e);
          t && ((n = e.offsetWidth - (t.left + s.offsetWidth) <= o.offsetWidth), Gt(s, n));
        }
        o.style.visibility = n ? '' : 'hidden';
      }
      window.customElements.get('fuzzy-list') ||
        ((window.FuzzyListElement = FuzzyListElement), window.customElements.define('fuzzy-list', FuzzyListElement)),
        N('.js-advanced-search-prefix', function () {
          Pt();
        }),
        s('change', '.js-advanced-search-prefix', Pt),
        R('.js-advanced-search-input', function (e) {
          const t = i(e, '.js-advanced-search-label');
          t.classList.add('focus'),
            e.addEventListener('blur', () => t.classList.remove('focus'), {
              once: !0,
            });
        }),
        n('.js-advanced-search-input', function () {
          Pt();
        }),
        D('.js-app-bgcolor-form', async function (e, t) {
          const n = e.querySelector('.js-app-bgcolor-save-notice');
          if (!n) return;
          let o;
          try {
            o = await t.html();
          } catch (s) {
            n.classList.remove('visible');
          }
          o && (n.classList.add('visible'), setTimeout(() => n.classList.remove('visible'), 1500));
        }),
        N('.js-app-bgcolor-input', function (e) {
          const t = e.target;
          if (!(t instanceof HTMLInputElement)) return;
          const n = i(t, 'form', HTMLFormElement),
            o = t.value.replace(/^#/, '');
          if (o.length < 1) return t.classList.remove('text-red'), void Ot(n, t.defaultValue);
          t.checkValidity()
            ? (t.classList.remove('text-red'),
              Ot(n, o),
              n.classList.contains('js-app-bgcolor-form') &&
                l(
                  () =>
                    (function (e, t) {
                      t.checkValidity() && P(e);
                    })(n, t),
                  400,
                )())
            : (t.classList.add('text-red'), Ot(n, t.defaultValue));
        }),
        n('.js-apps-install-select-repositories-container remote-input', (e) => {
          e.addEventListener('remote-input-success', zt), e.addEventListener('remote-input-error', zt);
        }),
        s(
          'details-menu-selected',
          '.js-apps-install-select-repositories-menu',
          function (e) {
            const t = e.detail.relatedTarget,
              n = c(document, '.js-integrations-install-repo-picked'),
              o = c(t, 'template', HTMLTemplateElement).content.cloneNode(!0);
            n.prepend(o),
              (c(document, '.js-min-repository-error').hidden = !0),
              (c(document, '.js-max-repository-warning').hidden = !(function () {
                const e = document.querySelector('.js-integrations-install-form');
                if (e instanceof HTMLFormElement) {
                  const t = +(e.getAttribute('data-max-repos') || 0);
                  return t > 0 && Ut().length >= t;
                }
              })()),
              Vt(),
              Wt(),
              zt();
          },
          {
            capture: !0,
          },
        ),
        s('change', '.js-integrations-install-form', Wt),
        s('click', '.js-repository-picker-remove', function (e) {
          i(e.currentTarget, '.js-repository-picker-result').remove(),
            (c(document, '.js-min-repository-error').hidden = Ut().length > 0),
            Vt(),
            Wt(),
            zt();
        }),
        s('change', '.js-installation-repositories-radio', function () {
          const e = c(document, '.js-select-repositories-radio', HTMLInputElement);
          c(document, '.js-integrations-install-repo-selection').classList.toggle('has-removed-contents', !e.checked);
        }),
        n('.js-responsive-underlinenav', {
          constructor: HTMLElement,
          initialize(e) {
            const t = a(e, '.js-responsive-underlinenav-item');
            Jt(e, t),
              window.addEventListener(
                'resize',
                function () {
                  Jt(e, t);
                },
                {
                  passive: !0,
                },
              );
          },
        }),
        s('deprecatedAjaxSend', '[data-remote]', function (e) {
          e.currentTarget === e.target && (e.defaultPrevented || e.currentTarget.classList.add('loading'));
        }),
        s('deprecatedAjaxComplete', '[data-remote]', function (e) {
          e.currentTarget === e.target && e.currentTarget.classList.remove('loading');
        }),
        D('form.js-ajax-pagination, .js-ajax-pagination form', async function (e, t) {
          const n = i(e, '.js-ajax-pagination');
          let o;
          try {
            o = await t.html();
          } catch (s) {
            if (s.response && 404 === s.response.status) return void n.remove();
            throw s;
          }
          n.replaceWith(o.html), u(e, 'page:loaded');
        });
      let Kt = null;
      function Xt(e) {
        Yt(
          (function (e) {
            return (e.getAttribute('aria-label') || e.innerText || '').trim();
          })(e),
        );
      }
      function Yt(e) {
        Kt && ((Kt.textContent = ''), (Kt.textContent = e));
      }
      !(async function () {
        await B,
          (Kt = document.createElement('div')),
          Kt.setAttribute('aria-live', 'polite'),
          Kt.classList.add('sr-only'),
          document.body.append(Kt);
      })();
      const Qt = new WeakMap();
      function Zt(e, t) {
        var n, o, s;
        t.classList.remove('is-loading', 'successed', 'errored', 'warn'),
          e.classList.remove('is-autocheck-loading', 'is-autocheck-successful', 'is-autocheck-errored');
        const i = t.querySelector('p.note');
        if (i) {
          const e = Qt.get(i);
          e && (i.innerHTML = e);
        }
        null === (n = t.querySelector('dd.error')) || void 0 === n || n.remove(),
          null === (o = t.querySelector('dd.warning')) || void 0 === o || o.remove(),
          null === (s = t.querySelector('dd.success')) || void 0 === s || s.remove();
      }
      function en(e) {
        const t = e.closest('form');
        if (!t) return;
        const n = t.querySelector('.js-auto-complete-button');
        n instanceof HTMLButtonElement && (n.disabled = !e.value);
      }
      n('auto-check', function (e) {
        const t = e.querySelector('input');
        if (!t) return;
        const n = t.closest('dl.form-group') || e,
          o = t.form;
        let s;
        function i() {
          return s || (s = `input-check-${(1e4 * Math.random()).toFixed(0)}`), s;
        }
        const r = t.getAttribute('aria-describedby');
        t.addEventListener('focusout:delay', () => {
          t.setAttribute('aria-describedby', [s, r].join(' '));
        });
        const a = n.querySelector('p.note');
        a && (a.id || (a.id = i()), Qt.set(a, a.innerHTML)),
          e.addEventListener('loadstart', () => {
            Zt(t, n), n.classList.add('is-loading'), t.classList.add('is-autocheck-loading'), O(o);
          }),
          e.addEventListener('loadend', () => {
            n.classList.remove('is-loading'), t.classList.remove('is-autocheck-loading');
          }),
          t.addEventListener('auto-check-success', async (e) => {
            t.classList.add('is-autocheck-successful'), n.classList.add('successed'), O(o);
            const { response: s } = e.detail;
            if (!s) return;
            const r = await s.text();
            if (r)
              if (a instanceof HTMLElement) (a.innerHTML = r), Xt(a);
              else {
                const e = 200 === s.status,
                  o = document.createElement('dd');
                (o.id = i()),
                  o.classList.add(e ? 'success' : 'warning'),
                  (o.innerHTML = r),
                  n.append(o),
                  n.classList.add(e ? 'successed' : 'warn'),
                  Xt(o),
                  e && (o.hidden = document.activeElement !== t);
              }
          }),
          t.addEventListener('auto-check-error', async (e) => {
            t.classList.add('is-autocheck-errored'), n.classList.add('errored'), O(o);
            const { response: s } = e.detail;
            if (!s) return;
            const r = await s.text();
            if (a instanceof HTMLElement) (a.innerHTML = r || 'Something went wrong'), Xt(a);
            else {
              const e = document.createElement('dd');
              (e.id = i()), e.classList.add('error'), (e.innerHTML = r || 'Something went wrong'), n.append(e), Xt(e);
            }
          }),
          t.addEventListener('input', () => {
            t.removeAttribute('aria-describedby'), t.value || Zt(t, n);
          }),
          t.addEventListener('blur', () => {
            const e = n.querySelector('dd.success');
            e && (e.hidden = !0);
          }),
          t.addEventListener('focus', () => {
            const e = n.querySelector('dd.success');
            e && (e.hidden = !1);
          }),
          o.addEventListener('reset', () => {
            Zt(t, n);
          });
      }),
        n('auto-complete', function (e) {
          e.addEventListener('loadstart', () => e.classList.add('is-auto-complete-loading')),
            e.addEventListener('loadend', () => e.classList.remove('is-auto-complete-loading'));
        }),
        n('auto-complete', {
          constructor: d,
          initialize: en,
        }),
        s('auto-complete-change', 'auto-complete', function (e) {
          en(e.currentTarget);
        });
      let tn = null;
      function nn(e) {
        const t = e.target;
        if (!(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) return;
        const n = t.form;
        P(n);
      }
      s('submit', '[data-autosearch-results-container]', async function (e) {
        const t = e.currentTarget;
        if (!(t instanceof HTMLFormElement)) return;
        e.preventDefault(), null == tn || tn.abort(), t.classList.add('is-sending');
        const n = new URL(t.action, window.location.origin),
          o = t.method,
          s = U(t);
        let i = null;
        'get' === o ? (n.search = s) : (i = new FormData(t));
        const { signal: r } = (tn = new AbortController()),
          a = new Request(n.toString(), {
            method: o,
            body: i,
            signal: r,
            headers: {
              Accept: 'text/html',
              'X-Requested-With': 'XMLHttpRequest',
            },
          });
        let c;
        try {
          c = await fetch(a);
        } catch (d) {}
        if ((t.classList.remove('is-sending'), !c || !c.ok || r.aborted)) return;
        const l = t.getAttribute('data-autosearch-results-container'),
          u = l ? document.getElementById(l) : null;
        u && ((u.innerHTML = ''), u.appendChild(z(document, await c.text()))), W(null, '', `?${s}`);
      }),
        R('input[data-autoselect], textarea[data-autoselect]', async function (e) {
          await $(), e.select();
        }),
        s('change', 'form[data-autosubmit]', function (e) {
          const t = e.currentTarget;
          P(t);
        }),
        s('change', 'input[data-autosubmit], select[data-autosubmit]', nn);
      const on = l(nn, 300);
      function sn(e) {
        e.preventDefault(), e.stopPropagation();
      }
      n('input[data-throttled-autosubmit]', {
        subscribe: (e) => V(e, 'input', on),
      }),
        n('a.btn.disabled', {
          subscribe: (e) => V(e, 'click', sn),
        }),
        (async () => {
          await G;
          const e =
              (function (e) {
                try {
                  return JSON.parse(window.localStorage.getItem(e) || '{}');
                } catch (t) {
                  return {};
                }
              })('bundle-urls') || {},
            t = (function () {
              const e = {};
              for (const t of document.getElementsByTagName('script')) {
                const n = t.src.match(/\/([\w-]+)-[0-9a-f]{32,}\.js$/);
                n && (e[`${n[1]}.js`] = t.src);
              }
              for (const t of document.getElementsByTagName('link')) {
                const n = t.href.match(/\/([\w-]+)-[0-9a-f]{32,}\.css$/);
                n && (e[`${n[1]}.css`] = t.href);
              }
              return e;
            })();
          !(function (e, t) {
            try {
              window.localStorage.setItem(e, JSON.stringify(t));
            } catch (n) {}
          })('bundle-urls', t);
          const n = Object.keys(t).filter((n) => {
            const o = t[n];
            return e[n] !== o;
          });
          n.length &&
            J({
              downloadedBundles: n,
            });
        })(),
        n('.js-check-all-container', {
          constructor: HTMLElement,
          subscribe: function (e) {
            let t = !1,
              n = null;
            function o(e, t, n, o = !1) {
              t instanceof HTMLInputElement &&
                ((t.indeterminate = o),
                t.checked !== n &&
                  ((t.checked = n),
                  setTimeout(() => {
                    const n = new CustomEvent('change', {
                      bubbles: !0,
                      cancelable: !1,
                      detail: {
                        relatedTarget: e,
                      },
                    });
                    t.dispatchEvent(n);
                  })));
            }
            function s(s) {
              const i = s.target;
              i instanceof Element &&
                (i.hasAttribute('data-check-all')
                  ? (function (t) {
                      if (t instanceof CustomEvent && t.detail) {
                        const { relatedTarget: e } = t.detail;
                        if (e && e.hasAttribute('data-check-all-item')) return;
                      }
                      const s = t.target;
                      if (!(s instanceof HTMLInputElement)) return;
                      n = null;
                      for (const n of e.querySelectorAll('[data-check-all-item]')) o(s, n, s.checked);
                      (s.indeterminate = !1), r();
                    })(s)
                  : i.hasAttribute('data-check-all-item') &&
                    (function (s) {
                      if (s instanceof CustomEvent && s.detail) {
                        const { relatedTarget: e } = s.detail;
                        if (e && (e.hasAttribute('data-check-all') || e.hasAttribute('data-check-all-item'))) return;
                      }
                      const i = s.target;
                      if (!(i instanceof HTMLInputElement)) return;
                      const a = Array.from(e.querySelectorAll('[data-check-all-item]'));
                      if (t && n) {
                        const [e, t] = [a.indexOf(n), a.indexOf(i)].sort();
                        for (const n of a.slice(e, +t + 1 || 9e9)) o(i, n, i.checked);
                      }
                      (t = !1), (n = i);
                      const c = e.querySelector('[data-check-all]');
                      if (c) {
                        const e = a.length,
                          t = a.filter((e) => e instanceof HTMLInputElement && e.checked).length;
                        o(i, c, t === e, e > t && t > 0);
                      }
                      r();
                    })(s));
            }
            function i(e) {
              if (!(e.target instanceof Element)) return;
              ((e.target instanceof HTMLLabelElement && e.target.control) || e.target).hasAttribute(
                'data-check-all-item',
              ) && (t = e.shiftKey);
            }
            function r() {
              const t = e.querySelector('[data-check-all-count]');
              if (t) {
                const n = e.querySelectorAll('[data-check-all-item]:checked').length;
                t.textContent = n.toString();
              }
            }
            return (
              e.addEventListener('mousedown', i),
              e.addEventListener('change', s),
              {
                unsubscribe: () => {
                  e.removeEventListener('mousedown', i), e.removeEventListener('change', s);
                },
              }
            );
          },
        });
      function rn(e) {
        const t = e.querySelector('.js-clipboard-clippy-icon'),
          n = e.querySelector('.js-clipboard-check-icon');
        e.classList.toggle('ClipboardButton--success'),
          t && t.classList.toggle('d-none'),
          n && n.classList.toggle('d-none');
      }
      s('clipboard-copy', '[data-copy-feedback]', (e) => {
        const t = e.currentTarget,
          n = r(t, 'data-copy-feedback'),
          o = t.getAttribute('aria-label'),
          s = t.getAttribute('data-tooltip-direction') || 's';
        t.setAttribute('aria-label', n),
          t.classList.add('tooltipped', `tooltipped-${s}`),
          t instanceof HTMLElement &&
            (Xt(t),
            setTimeout(() => {
              o ? t.setAttribute('aria-label', o) : t.removeAttribute('aria-label'),
                t.classList.remove('tooltipped', `tooltipped-${s}`);
            }, 2e3));
      }),
        s('clipboard-copy', '.js-clipboard-copy', function ({ currentTarget: e }) {
          e instanceof HTMLElement && (rn(e), setTimeout(rn, 2e3, e));
        }),
        D('.js-new-comment-form', async function (e, t) {
          let n;
          !(function (e) {
            const t = e.querySelector('.js-comment-form-error');
            t instanceof HTMLElement && (t.hidden = !0);
          })(e);
          try {
            n = await t.json();
          } catch (i) {
            !(function (e, t) {
              let n = "You can't comment at this time";
              if (t.response && 422 === t.response.status) {
                const e = t.response.json;
                e.errors && (n += ` — your comment ${e.errors.join(', ')}`);
              }
              n += '. ';
              const o = e.querySelector('.js-comment-form-error');
              o instanceof HTMLElement && ((o.textContent = n), (o.hidden = !1));
            })(e, i);
          }
          if (!n) return;
          e.reset();
          for (const r of a(e, '.js-resettable-field', HTMLInputElement))
            K(r, r.getAttribute('data-reset-value') || '');
          const o = e.querySelector('.js-write-tab');
          o instanceof HTMLElement && o.click();
          const s = n.json.updateContent;
          for (const r in s) {
            const e = s[r],
              t = document.querySelector(r);
            t instanceof HTMLElement ? X(t, e) : console.warn(`couldn't find ${r} for immediate update`);
          }
        });
      const an = (e, t) => {
          const n = e.querySelector('.js-form-action-text'),
            o = n || e;
          o.textContent = t ? r(e, 'data-comment-text') : r(o, 'data-default-action-text');
        },
        cn = (e) => {
          let t;
          return (n) => {
            const o = n.currentTarget.value.trim();
            o !== t && ((t = o), an(e, Boolean(o)));
          };
        };
      function ln(e, t) {
        const n = e.closest('.js-write-bucket');
        n && n.classList.toggle('focused', t);
      }
      function un(e) {
        const t = e.currentTarget;
        t instanceof Element && ln(t, !1);
      }
      function dn(e) {
        const t = i(e, '.js-previewable-comment-form'),
          n = e.classList.contains('js-preview-tab');
        if (n) {
          const e = c(t, '.js-write-bucket');
          c(t, '.js-preview-body').style.minHeight = `${e.clientHeight}px`;
        }
        t.classList.toggle('preview-selected', n), t.classList.toggle('write-selected', !n);
        const o = c(t, '.tabnav-tab.selected, .tabnav-tab[aria-selected="true"]');
        o.setAttribute('aria-selected', 'false'),
          o.classList.remove('selected'),
          e.classList.add('selected'),
          e.setAttribute('aria-selected', 'true');
        const s = c(t, '.js-write-tab');
        return n ? s.setAttribute('data-hotkey', 'Control+P,Meta+Shift+p') : s.removeAttribute('data-hotkey'), t;
      }
      n('.js-comment-and-button', {
        constructor: HTMLButtonElement,
        initialize(e) {
          const t = c(e.form, '.js-comment-field'),
            n = cn(e);
          return {
            add() {
              t.addEventListener('input', n), t.addEventListener('change', n);
            },
            remove() {
              t.removeEventListener('input', n), t.removeEventListener('change', n);
            },
          };
        },
      }),
        s('click', '.js-comment-edit-button', function (e) {
          const t = i(e.currentTarget, '.js-comment');
          t.classList.add('is-comment-editing'), c(t, '.js-write-tab').click();
          const n = c(t, '.js-comment-field');
          n.focus(), u(n, 'change');
          const o = e.currentTarget.closest('.js-dropdown-details');
          o && o.removeAttribute('open');
        }),
        s('click', '.js-comment-hide-button', function (e) {
          const t = i(e.currentTarget, '.js-comment').querySelector('.js-minimize-comment');
          t && t.classList.remove('d-none');
          const n = e.currentTarget.closest('.js-dropdown-details');
          n && n.removeAttribute('open');
        }),
        s('click', '.js-comment-hide-minimize-form', function (e) {
          i(e.currentTarget, '.js-minimize-comment').classList.add('d-none');
        }),
        s('click', '.js-comment-cancel-button', function (e) {
          const t = i(e.currentTarget, 'form', HTMLFormElement),
            n = r(e.currentTarget, 'data-confirm-text');
          if (Y(t) && !confirm(n)) return !1;
          for (const s of t.querySelectorAll('input, textarea')) {
            const e = s;
            e.value = e.defaultValue;
          }
          const o = e.currentTarget.closest('.js-comment');
          o && o.classList.remove('is-comment-editing');
        }),
        D(
          '.js-comment-delete, .js-comment .js-comment-update, .js-issue-update, .js-comment-minimize, .js-comment-unminimize',
          function (e, t, n) {
            const o = i(e, '.js-comment');
            o.classList.add('is-comment-loading');
            const s = o.getAttribute('data-body-version');
            s && n.headers.set('X-Body-Version', s);
          },
        ),
        D('.js-comment .js-comment-update', async function (e, t) {
          let n;
          const o = i(e, '.js-comment'),
            s = o.querySelector('.js-comment-update-error');
          s instanceof HTMLElement && (s.hidden = !0);
          try {
            n = await t.json();
          } catch (u) {
            if (422 !== u.response.status) throw u;
            {
              const e = JSON.parse(u.response.text);
              if (e.errors)
                return void (
                  s instanceof HTMLElement &&
                  ((s.textContent = `There was an error posting your comment: ${e.errors.join(', ')}`), (s.hidden = !1))
                );
            }
          }
          if (!n) return;
          const r = n.json,
            a = o.querySelector('.js-comment-body');
          a && r.body && (a.innerHTML = r.body), o.setAttribute('data-body-version', r.newBodyVersion);
          const c = o.querySelector('.js-body-version');
          c instanceof HTMLInputElement && (c.value = r.newBodyVersion);
          for (const i of o.querySelectorAll('input, textarea')) {
            const e = i;
            e.defaultValue = e.value;
          }
          o.classList.remove('is-comment-stale', 'is-comment-editing');
          const l = o.querySelector('.js-comment-edit-history');
          if (l) {
            const e = await Q(document, r.editUrl);
            (l.innerHTML = ''), l.append(e);
          }
        }),
        D(
          '.js-comment .js-comment-delete, .js-comment .js-comment-update, .js-comment-minimize, .js-comment-unminimize',
          async function (e, t) {
            const n = i(e, '.js-comment');
            try {
              await t.text();
            } catch (o) {
              if (422 !== o.response.status) throw o;
              {
                let e;
                try {
                  e = JSON.parse(o.response.text);
                } catch (s) {}
                e && e.stale && n.classList.add('is-comment-stale');
              }
            }
            n.classList.remove('is-comment-loading');
          },
        ),
        D('.js-discussion-comment-unminimize, .js-discussion-comment-minimize', async function (e, t) {
          const n = i(e, '.js-discussion-comment'),
            o = n.querySelector('.js-discussion-comment-error');
          o && (o.hidden = !0);
          try {
            const e = await t.html();
            n.replaceWith(e.html);
          } catch (s) {
            if (!(s.response.status >= 400 && s.response.status < 500)) throw s;
            if (s.response.html) {
              const e = r(c(s.response.html, '.js-discussion-comment'), 'data-error');
              o instanceof HTMLElement && ((o.textContent = e), (o.hidden = !1));
            }
          }
        }),
        D('.js-comment-delete', async function (e, t) {
          await t.json();
          let n = e.closest('.js-comment-delete-container');
          n ||
            ((n = e.closest('.js-comment-container') || e.closest('.js-line-comments')),
            n && 1 !== n.querySelectorAll('.js-comment').length && (n = i(e, '.js-comment'))),
            n.remove();
        }),
        D('.js-issue-update', async function (e, t) {
          const n = i(e, '.js-details-container');
          n.classList.remove('open');
          const o = (await t.json()).json;
          if (null != o.issue_title) {
            c(n, '.js-issue-title').textContent = o.issue_title;
            const e = n.closest('.js-issues-results');
            if (e) {
              if (e.querySelector('.js-merge-pr.is-merging')) {
                const t = e.querySelector('.js-merge-pull-request textarea');
                t instanceof HTMLTextAreaElement &&
                  t.value === t.defaultValue &&
                  (t.value = t.defaultValue = o.issue_title);
              } else if (e.querySelector('.js-merge-pr.is-squashing')) {
                const t = e.querySelector('.js-merge-pull-request .js-merge-title');
                t instanceof HTMLInputElement &&
                  t.value === t.defaultValue &&
                  (t.value = t.defaultValue = o.default_squash_commit_title);
              }
              const t = e.querySelector('button[value=merge]');
              t && t.setAttribute('data-input-message-value', o.issue_title);
              const n = e.querySelector('button[value=squash]');
              n && n.setAttribute('data-input-title-value', o.default_squash_commit_title);
            }
          }
          document.title = o.page_title;
          for (const s of e.elements)
            (s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement) && (s.defaultValue = s.value);
        }),
        D('.js-comment-minimize', async function (e, t) {
          await t.json();
          const n = i(e, '.js-comment'),
            o = n.querySelector('.js-minimize-comment');
          if (o && o.classList.contains('js-update-minimized-content')) {
            const t = e.querySelector('input[type=submit], button[type=submit]');
            t && t.classList.add('disabled');
            const o = n.closest('.js-comment-container');
            o && (await Z(o));
          } else {
            o && o.classList.add('d-none');
            const t = i(e, '.unminimized-comment');
            t.classList.add('d-none'), t.classList.remove('js-comment');
            const n = i(e, '.js-minimizable-comment-group').querySelector('.minimized-comment');
            n && n.classList.remove('d-none'), n && n.classList.add('js-comment');
          }
        }),
        D('.js-comment-unminimize', async function (e, t) {
          await t.json();
          const n = i(e, '.js-minimizable-comment-group'),
            o = n.querySelector('.unminimized-comment'),
            s = n.querySelector('.minimized-comment');
          if (o)
            o.classList.remove('d-none'),
              o.classList.add('js-comment'),
              s && s.classList.add('d-none'),
              s && s.classList.remove('js-comment');
          else {
            if (s) {
              const e = s.querySelector('.timeline-comment-actions');
              e && e.classList.add('d-none'), s.classList.remove('js-comment');
            }
            const e = i(n, '.js-comment-container');
            await Z(e);
          }
        }),
        s(
          'details-menu-select',
          '.js-comment-edit-history-menu',
          (e) => {
            const t = e.detail.relatedTarget.getAttribute('data-edit-history-url');
            if (!t) return;
            e.preventDefault();
            const n = Q(document, t);
            ee({
              content: n,
              dialogClass: 'Box-overlay--wide',
            });
          },
          {
            capture: !0,
          },
        ),
        R('.js-comment-field', function (e) {
          ln(e, !0),
            e.addEventListener('blur', un, {
              once: !0,
            });
        }),
        s('click', '.js-write-tab', function (e) {
          const t = e.currentTarget,
            n = i(t, '.js-previewable-comment-form');
          if (n instanceof m)
            return void setTimeout(() => {
              c(n, '.js-comment-field').focus();
            });
          const o = dn(t);
          setTimeout(() => {
            c(o, '.js-comment-field').focus();
          });
          const s = n.querySelector('markdown-toolbar');
          s instanceof HTMLElement && (s.hidden = !1);
        }),
        s('click', '.js-preview-tab', function (e) {
          const t = e.currentTarget,
            n = i(t, '.js-previewable-comment-form');
          if (n instanceof m) return;
          const o = dn(t);
          setTimeout(() => {
            hn(o);
          });
          const s = n.querySelector('markdown-toolbar');
          s instanceof HTMLElement && (s.hidden = !0), e.stopPropagation(), e.preventDefault();
        }),
        s('tab-container-change', '.js-previewable-comment-form', function (e) {
          const t = e.detail.relatedTarget.classList.contains('js-preview-panel'),
            n = e.currentTarget,
            o = c(n, '.js-write-tab');
          if (t) {
            const e = c(n, '.js-write-bucket'),
              t = c(n, '.js-preview-body');
            t.hasAttribute('data-skip-sizing') || (t.style.minHeight = `${e.clientHeight}px`),
              o.setAttribute('data-hotkey', 'Control+P,Meta+Shift+p'),
              hn(n);
            const s = n.querySelector('markdown-toolbar');
            s instanceof HTMLElement && (s.hidden = !0);
          } else {
            o.removeAttribute('data-hotkey');
            const e = n.querySelector('markdown-toolbar');
            e instanceof HTMLElement && (e.hidden = !1);
          }
          n.classList.toggle('preview-selected', t), n.classList.toggle('write-selected', !t);
        }),
        s('preview:render', '.js-previewable-comment-form', function (e) {
          const t = dn(c(e.target, '.js-preview-tab'));
          setTimeout(() => {
            hn(t);
            const e = t.querySelector('markdown-toolbar');
            e instanceof HTMLElement && (e.hidden = !0);
          });
        });
      const mn = new te();
      function fn(e) {
        var t, n, o, s, r, a, l, u, d;
        const m = c(e, '.js-comment-field', HTMLTextAreaElement).value,
          f = null === (t = e.querySelector('.js-path')) || void 0 === t ? void 0 : t.value,
          p = null === (n = e.querySelector('.js-line-number')) || void 0 === n ? void 0 : n.value,
          g = null === (o = e.querySelector('.js-start-line-number')) || void 0 === o ? void 0 : o.value,
          h = null === (s = e.querySelector('.js-side')) || void 0 === s ? void 0 : s.value,
          j = null === (r = e.querySelector('.js-start-side')) || void 0 === r ? void 0 : r.value,
          b = null === (a = e.querySelector('.js-start-commit-oid')) || void 0 === a ? void 0 : a.value,
          v = null === (l = e.querySelector('.js-end-commit-oid')) || void 0 === l ? void 0 : l.value,
          y = null === (u = e.querySelector('.js-base-commit-oid')) || void 0 === u ? void 0 : u.value,
          L = null === (d = e.querySelector('.js-comment-id')) || void 0 === d ? void 0 : d.value,
          w = new FormData();
        return (
          w.append('text', m),
          w.append(
            'authenticity_token',
            (function (e) {
              const t = e.querySelector('.js-data-preview-url-csrf'),
                n = i(e, 'form', HTMLFormElement).elements.namedItem('authenticity_token');
              if (t instanceof HTMLInputElement) return t.value;
              if (n instanceof HTMLInputElement) return n.value;
              throw new Error('Comment preview authenticity token not found');
            })(e),
          ),
          f && w.append('path', f),
          p && w.append('line_number', p),
          g && w.append('start_line_number', g),
          h && w.append('side', h),
          j && w.append('start_side', j),
          b && w.append('start_commit_oid', b),
          v && w.append('end_commit_oid', v),
          y && w.append('base_commit_oid', y),
          L && w.append('comment_id', L),
          w
        );
      }
      async function pn(e) {
        const t = r(e, 'data-preview-url'),
          n = fn(e);
        return (
          u(e, 'preview:setup', {
            data: n,
          }),
          mn.push(gn(t, n))
        );
      }
      const gn = ne(
        function (e, t) {
          return oe(e, {
            method: 'post',
            body: t,
          });
        },
        function (e, t) {
          const n = [...t.entries()].toString();
          return `${e}:${n}`;
        },
      );
      async function hn(e) {
        const t = c(e, '.comment-body');
        t.innerHTML = '<p>Loading preview&hellip;</p>';
        try {
          const n = await pn(e);
          t.innerHTML = n || '<p>Nothing to preview</p>';
        } catch (n) {
          t.innerHTML = '<p>Error rendering preview</p>';
        }
      }
      n('.js-preview-tab', function (e) {
        e.addEventListener('mouseenter', async () => {
          const t = i(e, '.js-previewable-comment-form');
          try {
            await pn(t);
          } catch (n) {}
        });
      }),
        _('keydown', '.js-comment-field', function (e) {
          const t = e.target;
          if ((e.ctrlKey || e.metaKey) && e.shiftKey && 'P' === e.key.toUpperCase()) {
            const n = i(t, '.js-previewable-comment-form');
            n.classList.contains('write-selected') &&
              (n instanceof m
                ? c(n, '.js-preview-tab').click()
                : (t.blur(),
                  n.dispatchEvent(
                    new CustomEvent('preview:render', {
                      bubbles: !0,
                      cancelable: !1,
                    }),
                  )),
              e.preventDefault(),
              e.stopImmediatePropagation());
          }
        });
      const jn = /^(\+1|-1|:\+1?|:-1?)$/;
      function bn(e) {
        const t = e.target,
          n = t.value,
          o = i(t, '.js-reaction-suggestion');
        if (o)
          if (
            ((e) => {
              let t = !1;
              for (const n of e.split('\n')) {
                const e = n.trim();
                if (e && !e.startsWith('>')) {
                  if (t && !1 === jn.test(e)) return !1;
                  !t && jn.test(e) && (t = !0);
                }
              }
              return t;
            })(n)
          ) {
            o.classList.remove('hide-reaction-suggestion'), o.classList.add('reaction-suggestion');
            const e = r(o, 'data-reaction-markup');
            o.setAttribute('data-reaction-suggestion-message', e);
          } else vn(o);
      }
      function vn(e) {
        e.classList.remove('reaction-suggestion'),
          e.classList.add('hide-reaction-suggestion'),
          e.removeAttribute('data-reaction-suggestion-message');
      }
      s('focusout', '#new_comment_field', function (e) {
        const t = e.currentTarget;
        vn(i(t, '.js-reaction-suggestion'));
      }),
        s('focusin', '#new_comment_field', function (e) {
          bn(e);
        }),
        _('keyup', '#new_comment_field', function (e) {
          bn(e);
        });
      const yn = (e) => {
          (e.disabled = !e.disabled), (e.hidden = !e.hidden);
        },
        Ln = (e) => {
          const t = i(e, '.js-new-comment-form'),
            n = t.querySelector('.js-structured-issue-comment-container');
          return {
            structuredIssueCommentContainer: n,
            structuredIssueCommentBody: n && n.querySelector('.js-structured-issue-comment-body'),
            previewableComment: t.querySelector('.js-previewable-comment-form-fieldset'),
          };
        };
      async function wn(e, t) {
        const n = e ? await oe(e) : '',
          { previewableComment: o, structuredIssueCommentContainer: s, structuredIssueCommentBody: i } = Ln(t);
        if (!o) return;
        if (!s) return;
        if (!i) return;
        yn(o), yn(s), (i.innerHTML = n);
        const r = o.form,
          a = r.querySelector('.js-comment-and-button');
        if ('' === n) {
          const e = c(r, '.js-comment-field').value.trim();
          return void an(a, Boolean(e));
        }
        an(a, !1);
        const l = cn(a);
        for (const c of s.elements) c.addEventListener('input', l), c.addEventListener('change', l);
      }
      async function Tn({ currentTarget: e }) {
        const t = e,
          n = t.hasAttribute('open');
        u(t, n ? 'menu:activate' : 'menu:deactivate'), await $(), u(t, n ? 'menu:activated' : 'menu:deactivated');
      }
      n('.js-structured-issues-template-button', {
        constructor: HTMLButtonElement,
        initialize(e) {
          async function t() {
            wn(e.getAttribute('data-url'), e);
          }
          return {
            add() {
              e.addEventListener('click', t);
            },
            remove() {
              e.removeEventListener('click', t);
            },
          };
        },
      }),
        n('.js-new-comment-form', {
          constructor: HTMLFormElement,
          initialize(e) {
            function t() {
              const { previewableComment: t, structuredIssueCommentContainer: n, structuredIssueCommentBody: o } = Ln(
                e,
              );
              t && n && o && o.innerHTML && (yn(t), yn(n), (o.innerHTML = ''));
            }
            return {
              add() {
                e.addEventListener('reset', t);
              },
              remove() {
                e.removeEventListener('reset', t);
              },
            };
          },
        }),
        n('details.select-menu details-menu include-fragment', function (e) {
          const t = e.closest('details');
          t &&
            (e.addEventListener('loadstart', function () {
              t.classList.add('is-loading'), t.classList.remove('has-error');
            }),
            e.addEventListener('error', function () {
              t.classList.add('has-error');
            }),
            e.addEventListener('loadend', function () {
              t.classList.remove('is-loading');
              const e = t.querySelector('.js-filterable-field');
              e && u(e, 'filterable:change');
            }));
        }),
        n('details details-menu .js-filterable-field', {
          constructor: HTMLInputElement,
          add(e) {
            const t = i(e, 'details');
            t.addEventListener('toggle', function () {
              t.hasAttribute('open') || ((e.value = ''), u(e, 'filterable:change'));
            });
          },
        }),
        n('details-menu[role=menu] [role=menu]', (e) => {
          const t = e.closest('details-menu[role]');
          t && t !== e && t.removeAttribute('role');
        }),
        n('details details-menu remote-input input', {
          constructor: HTMLInputElement,
          add(e) {
            const t = i(e, 'details');
            t.addEventListener('toggle', function () {
              t.hasAttribute('open') || (e.value = '');
            });
          },
        }),
        n('form details-menu', (e) => {
          const t = i(e, 'form');
          t.addEventListener('reset', () => {
            setTimeout(
              () =>
                (function (e) {
                  const t = e.querySelectorAll('details-menu [role=menuitemradio] input[type=radio]:checked');
                  for (const n of t) u(n, 'change');
                })(t),
              0,
            );
          });
        }),
        _('keypress', 'details-menu .js-filterable-field, details-menu filter-input input', (e) => {
          if ('Enter' === e.key) {
            const t = e.currentTarget,
              n = i(t, 'details-menu').querySelector('[role^="menuitem"]:not([hidden])');
            n instanceof HTMLElement && n.click(), e.preventDefault();
          }
        }),
        s(
          'details-menu-selected',
          'details-menu',
          (e) => {
            const t = e.currentTarget.querySelector('.js-filterable-field');
            t instanceof HTMLInputElement && t.value && t.focus();
          },
          {
            capture: !0,
          },
        ),
        s(
          'details-menu-selected',
          '[data-menu-input]',
          (e) => {
            if (!(e.target instanceof Element)) return;
            const t = r(e.target, 'data-menu-input'),
              n = document.getElementById(t);
            (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) &&
              (n.value = e.detail.relatedTarget.value);
          },
          {
            capture: !0,
          },
        ),
        n('details-menu remote-input', {
          constructor: f,
          initialize(e) {
            const t = document.getElementById(e.getAttribute('aria-owns') || '');
            if (!t) return;
            let n = null;
            e.addEventListener('load', () => {
              n =
                document.activeElement && t.contains(document.activeElement) && document.activeElement.id
                  ? document.activeElement.id
                  : null;
            }),
              e.addEventListener('loadend', () => {
                if (n) {
                  const o = t.querySelector(`#${n}`) || t.querySelector('[role^="menu"]');
                  o instanceof HTMLElement ? o.focus() : e.input && e.input.focus();
                }
              });
          },
        }),
        s(
          'details-menu-selected',
          'details-menu[data-menu-max-options]',
          (e) => {
            const t =
              +r(e.currentTarget, 'data-menu-max-options') ===
              e.currentTarget.querySelectorAll('[role="menuitemcheckbox"][aria-checked="true"]').length;
            c(e.currentTarget, '[data-menu-max-options-warning]').hidden = !t;
            for (const n of a(e.currentTarget, '[role="menuitemcheckbox"] input', HTMLInputElement))
              n.disabled = t && !n.checked;
          },
          {
            capture: !0,
          },
        ),
        n('details > details-menu', {
          subscribe(e) {
            const t = i(e, 'details');
            return V(t, 'toggle', Tn);
          },
        });
      const En = new WeakMap(),
        kn = ['input[type=submit][data-disable-with]', 'button[data-disable-with]'].join(', ');
      function Sn(e, t) {
        e instanceof HTMLInputElement ? (e.value = t) : (e.innerHTML = t);
      }
      function Mn(e) {
        for (const t of e.querySelectorAll(kn)) {
          const n = En.get(t);
          null != n &&
            (Sn(t, n),
            (t.hasAttribute('data-disable-invalid') && !e.checkValidity()) || (t.disabled = !1),
            En.delete(t));
        }
      }
      s(
        'submit',
        'form',
        function (e) {
          for (const n of e.currentTarget.querySelectorAll(kn)) {
            En.set(n, (t = n) instanceof HTMLInputElement ? t.value || 'Submit' : t.innerHTML || '');
            const e = n.getAttribute('data-disable-with');
            e && Sn(n, e), (n.disabled = !0);
          }
          var t;
        },
        {
          capture: !0,
        },
      ),
        s('deprecatedAjaxComplete', 'form', function ({ currentTarget: e, target: t }) {
          e === t && Mn(e);
        }),
        se(Mn),
        n('.js-feature-preview-indicator-container', (e) => {
          !(async function (e) {
            const t = r(e, 'data-feature-preview-indicator-src'),
              n = await (async function (e) {
                try {
                  return (await ie(e)).show_indicator;
                } catch (t) {
                  return !1;
                }
              })(t),
              o = e.querySelectorAll('.js-feature-preview-indicator');
            for (const s of o) s.hidden = !n;
          })(e);
        }),
        s('click', '[data-feature-preview-trigger-url]', async (e) => {
          const t = e.currentTarget,
            n = r(t, 'data-feature-preview-trigger-url'),
            o = await ee({
              content: Q(document, n),
              dialogClass: 'feature-preview-dialog',
            }),
            s = r(t, 'data-feature-preview-close-details'),
            i = r(t, 'data-feature-preview-close-hmac');
          o.addEventListener('dialog:remove', () => {
            J(
              {
                hydroEventPayload: s,
                hydroEventHmac: i,
              },
              !0,
            );
          });
          const c = a(document, '.js-feature-preview-indicator');
          for (const r of c) r.hidden = !0;
        }),
        D('.js-feature-preview-unenroll', async (e, t) => {
          await t.text();
          const n = c(e, '.js-feature-preview-slug', HTMLInputElement).value;
          u(e, `feature-preview-unenroll:${n}`);
        }),
        D('.js-feature-preview-enroll', async (e, t) => {
          await t.text();
          const n = c(e, '.js-feature-preview-slug', HTMLInputElement).value;
          u(e, `feature-preview-enroll:${n}`);
        });
      class AttachmentUpload {
        constructor(e, t) {
          (this.attachment = e), (this.policy = t);
        }
        async process(e) {
          const t = new Headers(this.policy.header || {}),
            n = new XMLHttpRequest();
          n.open('POST', this.policy.upload_url, !0);
          for (const [o, s] of t) n.setRequestHeader(o, s);
          (n.onloadstart = () => {
            e.attachmentUploadDidStart(this.attachment, this.policy);
          }),
            (n.upload.onprogress = (t) => {
              if (t.lengthComputable) {
                const n = Math.round((t.loaded / t.total) * 100);
                e.attachmentUploadDidProgress(this.attachment, n);
              }
            }),
            await (function (e, t) {
              return new Promise((n, o) => {
                (e.onload = () => n(e)), (e.onerror = o), e.send(t);
              });
            })(
              n,
              (function (e, t) {
                const n = new FormData();
                t.same_origin && n.append('authenticity_token', t.upload_authenticity_token);
                for (const o in t.form) n.append(o, t.form[o]);
                return n.append('file', e.file), n;
              })(this.attachment, this.policy),
            ),
            204 === n.status
              ? (xn(this.policy), e.attachmentUploadDidComplete(this.attachment, this.policy, {}))
              : 201 === n.status
              ? (xn(this.policy),
                e.attachmentUploadDidComplete(this.attachment, this.policy, JSON.parse(n.responseText)))
              : e.attachmentUploadDidError(this.attachment, {
                  status: n.status,
                  body: n.responseText,
                });
        }
      }
      function xn(e) {
        const t = 'string' == typeof e.asset_upload_url ? e.asset_upload_url : null,
          n = 'string' == typeof e.asset_upload_authenticity_token ? e.asset_upload_authenticity_token : null;
        if (!t || !n) return;
        const o = new FormData();
        o.append('authenticity_token', n),
          fetch(t, {
            method: 'PUT',
            body: o,
            credentials: 'same-origin',
            headers: {
              Accept: 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
            },
          });
      }
      async function An(e, t) {
        const n = (function (e, t) {
          return {
            attachmentUploadDidStart(n, o) {
              n.saving(0),
                In(t, 'is-uploading'),
                u(t, 'upload:start', {
                  batch: e,
                  attachment: n,
                  policy: o,
                });
            },
            attachmentUploadDidProgress(n, o) {
              n.saving(o),
                u(t, 'upload:progress', {
                  batch: e,
                  attachment: n,
                });
            },
            attachmentUploadDidComplete(n, o, s) {
              n.saved(
                (function (e, t) {
                  const n = (null == e.id ? null : String(e.id)) || (null == t.asset.id ? null : String(t.asset.id)),
                    o =
                      ('string' == typeof e.href ? e.href : null) ||
                      ('string' == typeof t.asset.href ? t.asset.href : null);
                  return {
                    id: n,
                    href: o,
                    name: t.asset.name,
                  };
                })(s, o),
              ),
                u(t, 'upload:complete', {
                  batch: e,
                  attachment: n,
                }),
                In(t, 'is-default');
            },
            attachmentUploadDidError(n, o) {
              u(t, 'upload:error', {
                batch: e,
                attachment: n,
              });
              const s = qn(o);
              In(t, s);
            },
          };
        })(e, t);
        for (const s of e.attachments) {
          const i = await Hn(e, s, t);
          if (!i) return;
          try {
            const e = new AttachmentUpload(s, i);
            await e.process(n);
          } catch (o) {
            return (
              u(t, 'upload:error', {
                batch: e,
                attachment: s,
              }),
              void In(t, 'is-failed')
            );
          }
        }
      }
      async function Hn(e, t, n) {
        const o = (function (e, t) {
            const n = c(t, '.js-data-upload-policy-url-csrf', HTMLInputElement).value,
              o = t.getAttribute('data-upload-repository-id'),
              s = e.file,
              i = new FormData();
            i.append('name', s.name),
              i.append('size', String(s.size)),
              i.append('content_type', s.type),
              i.append('authenticity_token', n),
              o && i.append('repository_id', o);
            e.directory && i.append('directory', e.directory);
            return i;
          })(t, n),
          s = [];
        u(n, 'upload:setup', {
          batch: e,
          attachment: t,
          form: o,
          preprocess: s,
        });
        try {
          await Promise.all(s);
          const i = await fetch(
            (function (e, t) {
              return new Request(r(t, 'data-upload-policy-url'), {
                method: 'POST',
                body: e,
                credentials: 'same-origin',
                headers: {
                  Accept: 'application/json',
                  'X-Requested-With': 'XMLHttpRequest',
                },
              });
            })(o, n),
          );
          if (i.ok) return await i.json();
          u(n, 'upload:invalid', {
            batch: e,
            attachment: t,
          });
          const a = await i.text();
          In(
            n,
            qn(
              {
                status: i.status,
                body: a,
              },
              t.file,
            ),
          );
        } catch (i) {
          u(n, 'upload:invalid', {
            batch: e,
            attachment: t,
          }),
            In(n, 'is-failed');
        }
        return null;
      }
      function qn(e, t) {
        if (400 === e.status) return 'is-bad-file';
        if (422 !== e.status) return 'is-failed';
        const n = JSON.parse(e.body);
        if (!n || !n.errors) return 'is-failed';
        for (const o of n.errors)
          switch (o.field) {
            case 'size': {
              const e = t ? t.size : null;
              return null != e && 0 === e ? 'is-empty' : 'is-too-big';
            }
            case 'file_count':
              return 'is-too-many';
            case 'width':
            case 'height':
              return 'is-bad-dimensions';
            case 'name':
              return 'already_exists' === o.code ? 'is-duplicate-filename' : 'is-bad-file';
            case 'content_type':
              return 'is-bad-file';
            case 'uploader_id':
              return 'is-bad-permissions';
            case 'repository_id':
              return 'is-repository-required';
            case 'format':
              return 'is-bad-format';
          }
        return 'is-failed';
      }
      const Cn = [
        'is-default',
        'is-uploading',
        'is-bad-file',
        'is-duplicate-filename',
        'is-too-big',
        'is-too-many',
        'is-hidden-file',
        'is-failed',
        'is-bad-dimensions',
        'is-empty',
        'is-bad-permissions',
        'is-repository-required',
        'is-bad-format',
      ];
      function In(e, t) {
        e.classList.remove(...Cn), e.classList.add(t);
      }
      class Batch {
        constructor(e) {
          (this.attachments = e),
            (this.size = this.attachments.length),
            (this.total = _n(this.attachments, (e) => e.file.size));
        }
        percent() {
          const e = _n(this.attachments, (e) => (e.file.size * e.percent) / 100);
          return Math.round((e / this.total) * 100);
        }
        uploaded() {
          return _n(this.attachments, (e) => (e.isSaved() ? 1 : 0));
        }
        isFinished() {
          return this.attachments.every((e) => e.isSaved());
        }
      }
      function _n(e, t) {
        return e.reduce((e, n) => e + t(n), 0);
      }
      n('file-attachment[hover]', {
        add(e) {
          e.classList.add('dragover');
        },
        remove(e) {
          e.classList.remove('dragover');
        },
      }),
        s('file-attachment-accept', 'file-attachment', function (e) {
          const { attachments: t } = e.detail;
          0 === t.length && (In(e.currentTarget, 'is-hidden-file'), e.preventDefault());
        }),
        s('file-attachment-accepted', 'file-attachment', function (e) {
          const { attachments: t } = e.detail;
          An(new Batch(t), e.currentTarget);
        });
      let $n = 0;
      function Nn(e) {
        return Array.from(e.types).indexOf('Files') >= 0;
      }
      function Rn(e) {
        const t = e.dataTransfer;
        t && Nn(t) && e.preventDefault();
      }
      function Dn(e) {
        const t = e.dataTransfer;
        t && Nn(t) && e.preventDefault();
      }
      function Pn({ currentTarget: e }) {
        In(c(e, 'file-attachment'), 'is-default');
      }
      function Fn(e, t) {
        let n = Un(e, t);
        if (n && -1 === t.indexOf('/')) {
          n += Un(e.substring(e.lastIndexOf('/') + 1), t);
        }
        return n;
      }
      function Bn(e) {
        const t = e.toLowerCase().split('');
        let n = '';
        for (let o = 0; o < t.length; o++) {
          const e = t[o].replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
          n += 0 === o ? `(.*)(${e})` : `([^${e}]*?)(${e})`;
        }
        return new RegExp(`${n}(.*?)$`, 'i');
      }
      function On(e, t, n) {
        if (t) {
          const o = e.innerHTML.trim().match(n || Bn(t));
          if (!o) return;
          let s = !1;
          const i = [];
          for (let e = 1; e < o.length; ++e) {
            const t = o[e];
            t && (e % 2 == 0 ? s || (i.push('<mark>'), (s = !0)) : s && (i.push('</mark>'), (s = !1)), i.push(t));
          }
          e.innerHTML = i.join('');
        } else {
          const t = e.innerHTML.trim(),
            n = t.replace(/<\/?mark>/g, '');
          t !== n && (e.innerHTML = n);
        }
      }
      function Un(e, t) {
        let n = e;
        if (n === t) return 1;
        const o = n.length;
        let s = 0,
          i = 0;
        for (let l = 0; l < t.length; l++) {
          const e = t[l],
            r = n.indexOf(e.toLowerCase()),
            a = n.indexOf(e.toUpperCase()),
            c = Math.min(r, a),
            u = c > -1 ? c : Math.max(r, a);
          if (-1 === u) return 0;
          (s += 0.1),
            n[u] === e && (s += 0.1),
            0 === u && ((s += 0.8), 0 === l && (i = 1)),
            ' ' === n.charAt(u - 1) && (s += 0.8),
            (n = n.substring(u + 1, o));
        }
        const r = t.length,
          a = s / r;
        let c = (a * (r / o) + a) / 2;
        return i && c + 0.1 < 1 && (c += 0.1), c;
      }
      n('file-attachment', {
        add(e) {
          0 == $n++ && (document.addEventListener('drop', Rn), document.addEventListener('dragover', Dn));
          const t = e.closest('form');
          t && t.addEventListener('reset', Pn);
        },
        remove(e) {
          0 == --$n && (document.removeEventListener('drop', Rn), document.removeEventListener('dragover', Dn));
          const t = e.closest('form');
          t && t.removeEventListener('reset', Pn);
        },
      });
      const zn = new WeakMap(),
        Wn = new WeakMap(),
        Vn = new WeakMap();
      function Gn(e, t, n = {}) {
        if (!e) return 0;
        const o = t.toLowerCase(),
          s = null != n.text ? n.text : Kn,
          i = n.limit,
          r = n.score;
        let a = zn.get(e);
        const c = e.querySelector('input[type="radio"]:checked'),
          l = Array.from(e.children);
        a || ((a = Array.from(e.children)), zn.set(e, a));
        for (const g of l) e.removeChild(g), g instanceof HTMLElement && (g.style.display = '');
        const u = document.createDocumentFragment();
        let d = 0,
          m = 0;
        if (o) {
          const e = Array.from(a);
          for (const n of e) {
            null == Wn.get(n) && Wn.set(n, s(n));
            const e = r ? r(Wn.get(n) || '', o, n) : Fn(Wn.get(n) || '', o);
            Vn.set(n, String(e));
          }
          e.sort(Jn);
          const t = Bn(o);
          for (const s of e)
            (null == i || d < i) &&
              parseFloat(Vn.get(s)) > 0 &&
              (m++, !0 === n.mark && (On(s), On(s, o, t)), u.appendChild(s)),
              d++;
        } else for (const g of a) (null == i || d < i) && (m++, !0 === n.mark && On(g), u.appendChild(g)), d++;
        let f = !1;
        if (c instanceof HTMLInputElement)
          for (const g of u.querySelectorAll('input[type="radio"]:checked'))
            g instanceof HTMLInputElement && g.value !== c.value && ((g.checked = !1), (f = !0));
        e.appendChild(u),
          c &&
            f &&
            c.dispatchEvent(
              new Event('change', {
                bubbles: !0,
              }),
            );
        const p = e.querySelectorAll('.js-divider');
        for (const g of p) g.classList.toggle('d-none', Boolean(o && o.trim().length > 0));
        return m;
      }
      function Jn(e, t) {
        const n = parseFloat(Vn.get(e)),
          o = parseFloat(Vn.get(t)),
          s = Wn.get(e) || '',
          i = Wn.get(t) || '';
        return n > o ? -1 : n < o ? 1 : s < i ? -1 : s > i ? 1 : 0;
      }
      function Kn(e) {
        if (e.hasAttribute('data-filter-value')) {
          return (e.getAttribute('data-filter-value') || '').toLowerCase().trim();
        }
        return e.textContent.toLowerCase().trim();
      }
      function Xn(e) {
        return (e.textContent || '').toLowerCase().trim();
      }
      function Yn(e, t) {
        const n = e.innerHTML;
        if (t) {
          const o = new RegExp(t, 'i');
          e.innerHTML = n.replace(o, '<mark>$&</mark>');
        } else {
          const t = n.replace(/<\/?mark>/g, '');
          n !== t && (e.innerHTML = t);
        }
      }
      function Qn(e) {
        return (e.querySelector('[data-filterable-item-text]') || e).textContent.toLowerCase().trim();
      }
      function Zn(e, t) {
        const n = e.innerHTML;
        if (t) {
          const o = new RegExp(t, 'i');
          e.innerHTML = n.replace(o, '<mark>$&</mark>');
        } else {
          const t = n.replace(/<\/?mark>/g, '');
          n !== t && (e.innerHTML = t);
        }
      }
      const eo = ne(ie),
        to = new WeakMap();
      async function no(e, t, n) {
        to.set(e, t), await re();
        const o = await eo(r(e, 'data-filterable-src'));
        if (to.get(e) !== t) return -1;
        const s = n.limit,
          i = c(e, 'template', HTMLTemplateElement),
          l = {};
        for (const r of a(e, 'input[type=hidden]', HTMLInputElement)) l[`${r.name}${r.value}`] = r;
        let u = i.nextElementSibling;
        for (; u; ) {
          const e = u;
          (u = e.nextElementSibling),
            e instanceof HTMLElement &&
            ('true' === e.getAttribute('aria-checked') || e.classList.contains('select-menu-divider'))
              ? (e.hidden = !0)
              : e.remove();
        }
        let d = 0,
          m = document.createDocumentFragment();
        const f = e.querySelector('.js-divider-suggestions'),
          p = e.querySelector('.js-divider-rest');
        function g(e) {
          const n =
            !(null != s && d >= s) &&
            (function (e) {
              return `${e.login} ${e.name}`.toLowerCase().trim();
            })(e).indexOf(t) >= 0;
          if (n || e.selected) {
            const t = (function (e, t, n) {
              if (null != e.element) return e.element;
              const o = t.content.cloneNode(!0),
                s = c(o, 'input[type=checkbox], input[type=radio]', HTMLInputElement);
              e.type && (s.name = `reviewer_${e.type}_ids[]`);
              s.value = e.id;
              const i = `${s.name}${e.id}`;
              let r = e.selected;
              n[i] && ((r = !0), n[i].remove(), delete n[i]);
              const a = c(o, '[role^=menuitem]');
              r && (a.setAttribute('aria-checked', 'true'), (s.checked = !0));
              e.disabled && a.setAttribute('aria-disabled', 'true');
              const l = o.querySelector('.js-username');
              l && (l.textContent = e.login);
              const u = o.querySelector('.js-description');
              u && (u.textContent = e.name);
              const d = o.querySelector('.js-extended-description');
              d && (e.description ? (d.textContent = e.description) : d.remove());
              const m = c(o, '.js-avatar', HTMLImageElement);
              return (m.className = `${m.className} ${e.class}`), (m.src = e.avatar), (e.element = a), e.element;
            })(e, i, l);
            (t.hidden = !n), n && d++, m.appendChild(t);
          }
        }
        if (f && o.suggestions) {
          for (const e of o.suggestions) g(e);
          m.childNodes.length && (f.after(m), (f.hidden = 0 === d), (m = document.createDocumentFragment()));
        }
        const h = d;
        for (const r of o.users) g(r);
        return e.append(m), p && (p.hidden = d === h || 0 === h), d;
      }
      async function oo(e, t) {
        const n = e.hasAttribute('data-filterable-highlight'),
          o = parseInt(e.getAttribute('data-filterable-limit'), 10) || null;
        let s = 0;
        switch (e.getAttribute('data-filterable-type')) {
          case 'fuzzy':
            s = Gn(e, t, {
              mark: n,
              limit: o,
            });
            break;
          case 'substring':
            s =
              (function (e, t, n = {}) {
                let o;
                if (!e) return;
                const s = t.toLowerCase(),
                  i = null != n.text ? n.text : Qn,
                  r = n.limit,
                  a = Array.from(e.children).filter((e) => !e.classList.contains('select-menu-no-results'));
                !0 === n.mark ? (o = Zn) : 'function' == typeof n.mark && (o = n.mark);
                let c = 0;
                for (const l of a)
                  -1 !== i(l).indexOf(s)
                    ? null != r && c >= r
                      ? ((l.style.display = 'none'), (l.hidden = !0))
                      : (c++, (l.style.display = ''), (l.hidden = !1), o && (o(l), o(l, s)))
                    : ((l.style.display = 'none'), (l.hidden = !0));
                return c;
              })(e, t, {
                mark: n,
                limit: o,
              }) || 0;
            break;
          case 'substring-memory':
            s = await no(e, t, {
              limit: o,
            });
            break;
          default:
            s =
              (function (e, t, n = {}) {
                let o;
                if (!e) return;
                const s = t.toLowerCase(),
                  i = null != n.text ? n.text : Xn,
                  r = n.limit;
                !0 === n.mark ? (o = Yn) : 'function' == typeof n.mark && (o = n.mark);
                let a = 0;
                for (const c of e.children)
                  c instanceof HTMLElement &&
                    (0 === i(c).indexOf(s)
                      ? null != r && a >= r
                        ? ((c.style.display = 'none'), (c.hidden = !0))
                        : (a++, (c.style.display = ''), (c.hidden = !1), o && (o(c), o(c, s)))
                      : ((c.style.display = 'none'), (c.hidden = !0)));
                return a;
              })(e, t, {
                mark: n,
                limit: o,
              }) || 0;
        }
        return (
          e.classList.toggle('filterable-active', t.length > 0), e.classList.toggle('filterable-empty', 0 === s), s
        );
      }
      n('.js-filterable-field', {
        constructor: HTMLInputElement,
        initialize(e) {
          e.autocomplete || (e.autocomplete = 'off');
          let t = e.value;
          async function n(e) {
            t !== e.value && ((t = e.value), await $(), u(e, 'filterable:change'));
          }
          async function o() {
            (t = e.value), await $(), u(e, 'filterable:change');
          }
          return {
            add(e) {
              e.addEventListener('focus', o), ae(e, n), document.activeElement === e && o();
            },
            remove(e) {
              e.removeEventListener('focus', o), ce(e, n);
            },
          };
        },
      }),
        s('filterable:change', '.js-filterable-field', async function (e) {
          const t = e.currentTarget,
            n = t.value.trim().toLowerCase(),
            o = document.querySelectorAll(`[data-filterable-for="${t.id}"]`);
          for (const s of o) {
            const e = await oo(s, n);
            if (-1 === e) return;
            document.activeElement && t === document.activeElement && Yt(`${e} results found.`);
            const o = new CustomEvent('filterable:change', {
              bubbles: !0,
              cancelable: !1,
              detail: {
                inputField: t,
              },
            });
            s.dispatchEvent(o);
          }
        }),
        s('filterable:change', 'details-menu .select-menu-list', function (e) {
          const t = e.currentTarget,
            n = t.querySelector('.js-new-item-form');
          n &&
            (function (e, t, n) {
              const o =
                n.length > 0 &&
                !(function (e, t) {
                  for (const n of e.querySelectorAll('[data-menu-button-text]')) {
                    if (n.textContent.toLowerCase().trim() === t.toLowerCase()) return !0;
                  }
                  return !1;
                })(e, n);
              if ((e.classList.toggle('is-showing-new-item-form', o), !o)) return;
              c(t, '.js-new-item-name').textContent = n;
              const s = t.querySelector('.js-new-item-value');
              (s instanceof HTMLInputElement || s instanceof HTMLButtonElement) && (s.value = n);
            })(t, n, e.detail.inputField.value);
        }),
        n('tab-container .select-menu-list .filterable-empty, details-menu .select-menu-list .filterable-empty', {
          add(e) {
            i(e, '.select-menu-list').classList.add('filterable-empty');
          },
          remove(e) {
            i(e, '.select-menu-list').classList.remove('filterable-empty');
          },
        }),
        s('click', '.js-flash-close', function (e) {
          const t = e.currentTarget.closest('.flash-messages');
          e.currentTarget.closest('.flash').remove(), t && !t.querySelector('.flash') && t.remove();
        });
      const so = new WeakMap();
      function io(e) {
        e instanceof CustomEvent && Yt(`${e.detail} results found.`);
      }
      function ro(e, t) {
        const n = e.currentTarget;
        if (n instanceof Element) {
          for (const e of n.querySelectorAll('[data-show-on-error]')) e instanceof HTMLElement && (e.hidden = !t);
          for (const e of n.querySelectorAll('[data-hide-on-error]')) e instanceof HTMLElement && (e.hidden = t);
        }
      }
      function ao(e) {
        ro(e, !1);
      }
      function co(e) {
        ro(e, !0);
      }
      document.addEventListener(
        'focus',
        function (e) {
          const t = e.target;
          t instanceof Element && !so.get(t) && (u(t, 'focusin:delay'), so.set(t, !0));
        },
        {
          capture: !0,
        },
      ),
        document.addEventListener(
          'blur',
          function (e) {
            setTimeout(function () {
              const t = e.target;
              t instanceof Element && t !== document.activeElement && (u(t, 'focusout:delay'), so.delete(t));
            }, 200);
          },
          {
            capture: !0,
          },
        ),
        n('fuzzy-list', {
          constructor: FuzzyListElement,
          subscribe: (e) => V(e, 'fuzzy-list-sorted', io),
        }),
        s('filter-input-updated', 'filter-input', (e) => {
          const t = e.currentTarget.input;
          if (!document.activeElement || document.activeElement !== t) return;
          const { count: n, total: o } = e.detail;
          Yt(`Found ${n} out of ${o} ${1 === o ? 'item' : 'items'}`);
        }),
        s(
          'toggle',
          'details',
          (e) => {
            setTimeout(
              () =>
                (function (e) {
                  const t = e.querySelector('filter-input');
                  t && !e.hasAttribute('open') && t.reset();
                })(e.target),
              0,
            );
          },
          {
            capture: !0,
          },
        ),
        s(
          'tab-container-changed',
          'tab-container',
          (e) => {
            if (!(e.target instanceof HTMLElement)) return;
            const { relatedTarget: t } = e.detail,
              n = e.target.querySelector('filter-input');
            n instanceof p && n.setAttribute('aria-owns', t.id);
          },
          {
            capture: !0,
          },
        ),
        D('.js-immediate-updates', async function (e, t) {
          let n;
          try {
            n = (await t.json()).json.updateContent;
          } catch (o) {
            o.response.json && (n = o.response.json.updateContent);
          }
          if (n)
            for (const s in n) {
              const e = n[s],
                t = document.querySelector(s);
              t instanceof HTMLElement && X(t, e);
            }
        }),
        n('include-fragment, poll-include-fragment', {
          subscribe: (e) => le(V(e, 'error', co), V(e, 'loadstart', ao)),
        }),
        s('click', 'include-fragment button[data-retry-button]', ({ currentTarget: e }) => {
          const t = i(e, 'include-fragment', window.IncludeFragmentElement),
            n = t.src;
          (t.src = ''), (t.src = n);
        }),
        n('[data-indeterminate]', {
          constructor: HTMLInputElement,
          initialize(e) {
            e.indeterminate = !0;
          },
        }),
        D('.js-notice-dismiss', async function (e, t) {
          await t.text(), i(e, '.js-notice').remove();
        });
      class PasswordStrengthElement extends HTMLElement {
        connectedCallback() {
          this.addEventListener('input', lo);
        }
        disconnectedCallback() {
          this.removeEventListener('input', lo);
        }
      }
      function lo(e) {
        const t = e.currentTarget;
        if (!(t instanceof PasswordStrengthElement)) return;
        const n = e.target;
        if (!(n instanceof HTMLInputElement)) return;
        const o = n.form;
        if (!(o instanceof HTMLFormElement)) return;
        const s = (function (e, t) {
          const n = {
            valid: !1,
            hasMinimumCharacterCount: e.length >= t.minimumCharacterCount,
            hasMinimumPassphraseLength: 0 !== t.passphraseLength && e.length >= t.passphraseLength,
            hasLowerCase: /[a-z]/.test(e),
            hasNumber: /\d/.test(e),
          };
          return (
            (n.valid = n.hasMinimumPassphraseLength || (n.hasMinimumCharacterCount && n.hasLowerCase && n.hasNumber)), n
          );
        })(n.value, {
          minimumCharacterCount: Number(r(t, 'minimum-character-count')),
          passphraseLength: Number(t.getAttribute('passphrase-length')),
        });
        if (s.valid) {
          n.setCustomValidity('');
          const e = t.querySelector('dl.form-group');
          e && (e.classList.remove('errored'), e.classList.add('successed'));
        } else n.setCustomValidity(r(t, 'invalid-message'));
        !(function (e, t) {
          const n = e.querySelector('[data-more-than-n-chars]'),
            o = c(e, '[data-min-chars]'),
            s = c(e, '[data-number-requirement]'),
            i = c(e, '[data-letter-requirement]'),
            a = r(e, 'error-class')
              .split(' ')
              .filter((e) => e.length > 0),
            l = r(e, 'pass-class')
              .split(' ')
              .filter((e) => e.length > 0);
          for (const r of [n, o, s, i]) null == r || r.classList.remove(...a, ...l);
          if (t.hasMinimumPassphraseLength && n) n.classList.add(...l);
          else if (t.valid) o.classList.add(...l), s.classList.add(...l), i.classList.add(...l);
          else {
            const e = t.hasMinimumCharacterCount ? l : a,
              r = t.hasNumber ? l : a,
              c = t.hasLowerCase ? l : a;
            null == n || n.classList.add(...a), o.classList.add(...e), s.classList.add(...r), i.classList.add(...c);
          }
        })(t, s),
          O(o);
      }
      function uo(e) {
        return null == e.getAttribute('data-pjax-preserve-scroll') && 0;
      }
      function mo(e) {
        let t = e;
        for (; t; ) {
          const e = t.getAttribute('data-pjax');
          if (e && 'true' !== e) return document.querySelector(e);
          t = t.parentElement && t.parentElement.closest('[data-pjax]');
        }
        return e.closest('[data-pjax-container]');
      }
      window.customElements.get('password-strength') ||
        ((window.PasswordStrengthElement = PasswordStrengthElement),
        window.customElements.define('password-strength', PasswordStrengthElement)),
        s('click', '.js-permalink-shortcut', function (e) {
          const t = e.currentTarget;
          try {
            W(null, '', t.href + window.location.hash);
          } catch (n) {
            window.location.href = t.href + window.location.hash;
          }
          e.preventDefault();
        }),
        s('click', '[data-pjax] a, a[data-pjax]', function (e) {
          const t = e.currentTarget;
          if (t instanceof HTMLAnchorElement) {
            if (null != t.getAttribute('data-skip-pjax')) return;
            if (null != t.getAttribute('data-remote')) return;
            const n = mo(t);
            n &&
              ue(e, {
                container: n,
                scrollTo: uo(t),
              });
          }
        }),
        s('submit', 'form[data-pjax]', function (e) {
          const t = e.target,
            n = mo(t);
          n &&
            de(e, {
              container: n,
              scrollTo: uo(t),
            });
        }),
        s('change', 'select[data-pjax]', function (e) {
          const t = e.currentTarget,
            n = mo(t);
          n &&
            me({
              url: t.value,
              container: n,
            });
        }),
        (async function () {
          await B;
          const e = document.querySelector('.js-pjax-loader-bar');
          if (!e) return;
          const t = e.firstElementChild;
          if (!(t instanceof HTMLElement)) return;
          let n = 0,
            o = null,
            s = null;
          function i(e) {
            t instanceof HTMLElement &&
              (0 === e && (null == s && (s = getComputedStyle(t).transition), (t.style.transition = 'none')),
              (n = e),
              (t.style.width = `${n}%`),
              0 === e && (t.clientWidth, (t.style.transition = s || '')));
          }
          function r() {
            0 === n && (n = 12), i(Math.min(n + 3, 95)), (o = window.setTimeout(r, 500));
          }
          document.addEventListener('pjax:start', function () {
            i(0), e && e.classList.add('is-loading'), (o = window.setTimeout(r, 0));
          }),
            document.addEventListener('pjax:end', function () {
              o && clearTimeout(o), i(100), e && e.classList.remove('is-loading');
            });
        })();
      let fo = null;
      function po(e, t) {
        return e.split('/', 3).join('/') === t.split('/', 3).join('/');
      }
      'getEntriesByName' in window.performance &&
        (document.addEventListener('pjax:start', function (e) {
          e instanceof CustomEvent &&
            e.detail &&
            e.detail.url &&
            (window.performance.mark('pjax_start'), (fo = e.detail.url));
        }),
        document.addEventListener('pjax:end', async function () {
          if ((await $(), !window.performance.getEntriesByName('pjax_start').length)) return;
          window.performance.mark('pjax_end'),
            window.performance.measure('last_pjax_request', 'pjax_start', 'pjax_end');
          const e = window.performance.getEntriesByName('last_pjax_request').pop(),
            t = e ? e.duration : null;
          t &&
            (fo &&
              J({
                requestUrl: fo,
                pjaxDuration: Math.round(t),
              }),
            window.performance.clearMarks('pjax_start'),
            window.performance.clearMarks('pjax_end'),
            window.performance.clearMeasures('last_pjax_request'));
        })),
        document.addEventListener('pjax:click', function (e) {
          if (window.onbeforeunload) return e.preventDefault();
        }),
        s('pjax:click', '#js-repo-pjax-container a[href]', function (e) {
          const t = e.currentTarget.pathname;
          po(t, location.pathname)
            ? (function (e) {
                const t = e.split('/')[3];
                return (
                  [
                    'commit',
                    'commits',
                    'community',
                    'issues',
                    'packages',
                    'projects',
                    'releases',
                    'security',
                    'tags',
                    'wiki',
                  ].includes(t) && po(e, location.pathname)
                );
              })(t) && e.preventDefault()
            : e.preventDefault();
        }),
        s('pjax:click', '.js-comment-body', function (e) {
          const t = e.target;
          t instanceof HTMLAnchorElement && 'files' === t.pathname.split('/')[3] && e.preventDefault();
        });
      const go = {};
      function ho(e) {
        if (null === e.parentNode || !(e.parentNode instanceof HTMLElement)) throw new Error();
        const t = e.parentNode.children;
        for (let n = 0; n < t.length; ++n) if (t[n] === e) return n;
        return 0;
      }
      (async () => {
        await B, (go[document.location.pathname] = Array.from(document.querySelectorAll('head [data-pjax-transient]')));
      })(),
        document.addEventListener('pjax:beforeReplace', function (e) {
          const t = e.detail.contents || [];
          for (let n = 0; n < t.length; n++) {
            const e = t[n];
            if (e instanceof Element)
              if ('pjax-head' === e.id) (go[document.location.pathname] = Array.from(e.children)), (t[n] = null);
              else if ('js-flash-container' === e.id) {
                const o = document.querySelector('#js-flash-container');
                o && o.replaceWith(e), (t[n] = null);
              }
          }
        }),
        document.addEventListener('pjax:end', function () {
          const e = go[document.location.pathname];
          if (!e) return;
          const t = document.head;
          for (const n of document.querySelectorAll('head [data-pjax-transient]')) n.remove();
          for (const n of e)
            n.matches('title, script, link[rel=stylesheet]')
              ? n.matches('link[rel=stylesheet]') && t.append(n)
              : (n.setAttribute('data-pjax-transient', ''), t.append(n));
        }),
        _('keydown', '.js-quick-submit', function (e) {
          !(function (e) {
            const t = e.target;
            if ((e.ctrlKey || e.metaKey) && 'Enter' === e.key) {
              const n = t.form,
                o = n.querySelector('input[type=submit], button[type=submit]');
              if (e.shiftKey) {
                const e = n.querySelector('.js-quick-submit-alternative');
                (e instanceof HTMLInputElement || e instanceof HTMLButtonElement) && !e.disabled && P(n, e);
              } else ((o instanceof HTMLInputElement || o instanceof HTMLButtonElement) && o.disabled) || P(n);
              e.preventDefault();
            }
          })(e);
        });
      let jo = 0;
      function bo(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(/'/g, '&apos;')
          .replace(/"/g, '&quot;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      const vo = {
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
                return !1;
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
      const Lo = new WeakMap();
      let wo = 0;
      const To = /\bEdge\//.test(navigator.userAgent);
      function Eo(e, t) {
        return (
          (function (e, t) {
            const n = 0 === wo;
            wo += Lo.has(e) ? 0 : 1;
            const o = Object.assign(
              {
                quoteMarkdown: !1,
                copyMarkdown: !1,
                scopeSelector: '',
              },
              t,
            );
            Lo.set(e, o), n && document.addEventListener('keydown', xo);
            o.copyMarkdown && e.addEventListener('copy', ko);
          })(e, t),
          {
            unsubscribe: () => {
              !(function (e) {
                const t = Lo.get(e);
                if (null == t) return;
                Lo.delete(e), (wo -= 1), 0 === wo && document.removeEventListener('keydown', xo);
                t.copyMarkdown && e.removeEventListener('copy', ko);
              })(e);
            },
          }
        );
      }
      function ko(e) {
        const t = e.target;
        if (!(t instanceof HTMLElement)) return;
        if (qo(t)) return;
        const n = e.clipboardData;
        if (!n) return;
        const o = window.getSelection();
        if (!o) return;
        let s;
        try {
          s = o.getRangeAt(0);
        } catch (a) {
          return;
        }
        const i = o.toString(),
          r = Ho(i, s, !0);
        r &&
          (n.setData('text/plain', i),
          n.setData('text/x-gfm', r.selectionText),
          e.preventDefault(),
          o.removeAllRanges(),
          o.addRange(s));
      }
      function So(e) {
        let t = e;
        for (; (t = t.parentElement); ) if (Lo.has(t)) return t;
      }
      function Mo(e) {
        for (const n of e.querySelectorAll('textarea'))
          if (n instanceof HTMLTextAreaElement && !((t = n).offsetWidth <= 0 && t.offsetHeight <= 0)) return n;
        var t;
      }
      function xo(e) {
        if (
          (function (e) {
            return (
              e.defaultPrevented ||
              'r' !== e.key ||
              e.metaKey ||
              e.altKey ||
              e.shiftKey ||
              e.ctrlKey ||
              (e.target instanceof HTMLElement && qo(e.target))
            );
          })(e)
        )
          return;
        const t = window.getSelection();
        if (!t) return;
        let n;
        try {
          n = t.getRangeAt(0);
        } catch (o) {
          return;
        }
        Ao(t.toString(), n) && e.preventDefault();
      }
      function Ao(e, t) {
        const n = Ho(e, t, !1);
        if (!n) return !1;
        const { container: o, selectionText: s } = n;
        if (
          !o.dispatchEvent(
            new CustomEvent('quote-selection', {
              bubbles: !0,
              cancelable: !0,
              detail: {
                range: t,
                selectionText: s,
              },
            }),
          )
        )
          return !0;
        const i = Mo(o);
        return (
          !!i &&
          ((function (e, t) {
            let n = `> ${e.replace(/\n/g, '\n> ')}\n\n`;
            t.value && (n = `${t.value}\n\n${n}`);
            (t.value = n),
              t.dispatchEvent(
                new CustomEvent('change', {
                  bubbles: !0,
                  cancelable: !1,
                }),
              ),
              t.focus(),
              (t.selectionStart = t.value.length),
              (t.scrollTop = t.scrollHeight);
          })(s, i),
          !0)
        );
      }
      function Ho(e, t, n) {
        let o = e.trim();
        if (!o) return;
        let s = t.startContainer;
        if (!s) return;
        if ((s.nodeType !== Node.ELEMENT_NODE && (s = s.parentNode), !(s instanceof Element))) return;
        const i = So(s);
        if (!i) return;
        const r = Lo.get(i);
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
                } else if (
                  i &&
                  i.parentNode &&
                  ('OL' === i.parentNode.nodeName && (jo = ho(i)), !s.querySelector('li'))
                ) {
                  const e = document.createElement('li');
                  if (!i.parentNode) throw new Error();
                  const t = document.createElement(i.parentNode.nodeName);
                  e.appendChild(s), t.appendChild(e), (s = document.createDocumentFragment()), s.appendChild(t);
                }
                return s;
              })(t, r.scopeSelector);
              i.dispatchEvent(
                new CustomEvent('quote-selection-markdown', {
                  bubbles: !0,
                  cancelable: !1,
                  detail: {
                    fragment: e,
                    range: t,
                    unwrap: n,
                  },
                }),
              ),
                yo(e),
                (o = (function (e) {
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
            selectionText: o,
            container: i,
          };
        }
      }
      function qo(e) {
        const t = e.nodeName.toLowerCase(),
          n = (e.getAttribute('type') || '').toLowerCase();
        return (
          'select' === t ||
          'textarea' === t ||
          ('input' === t && 'submit' !== n && 'reset' !== n) ||
          e.isContentEditable
        );
      }
      function Co(e) {
        return 'DIV' === e.nodeName && e.classList.contains('highlight');
      }
      n('.js-quote-selection-container', {
        subscribe: (e) =>
          Eo(e, {
            quoteMarkdown: e.hasAttribute('data-quote-markdown'),
            scopeSelector: e.getAttribute('data-quote-markdown') || '',
            copyMarkdown: !1,
          }),
      }),
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
      let _o, $o;
      /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
      function No(e, t, n, o) {
        var s,
          i = arguments.length,
          r = i < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, n)) : o;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, o);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (s = e[a]) && (r = (i < 3 ? s(r) : i > 3 ? s(t, n, r) : s(t, n)) || r);
        return i > 3 && r && Object.defineProperty(t, n, r), r;
      }
      s('click', '.js-comment-quote-reply', function ({ currentTarget: e }) {
        var t;
        const n = i(e, '.js-comment'),
          o = c(n, '.js-comment-body');
        if (n.classList.contains('js-nested-discussion-comment')) {
          null === (t = i(n, '.js-timeline-comment').querySelector('.js-toggle-inline-comment-form')) ||
            void 0 === t ||
            t.click();
        }
        if ($o && 'Range' === $o.type && o.contains($o.anchorNode)) Ao($o.text, $o.range);
        else {
          const e = window.getSelection();
          e.removeAllRanges(), e.selectAllChildren(o), Ao(e.toString(), e.getRangeAt(0));
        }
      }),
        document.addEventListener(
          'selectionchange',
          l(function () {
            const e = window.getSelection();
            let t;
            try {
              t = e.getRangeAt(0);
            } catch (n) {
              return void (_o = null);
            }
            _o = {
              type: e.type,
              anchorNode: e.anchorNode,
              text: e.toString(),
              range: t,
            };
          }, 100),
        ),
        document.addEventListener(
          'toggle',
          function (e) {
            const t = e.target;
            if (!(t instanceof Element && t.hasAttribute('open'))) return;
            $o = _o;
            const n = t.querySelector('.js-comment-quote-reply.d-none');
            if (!n) return;
            const o = So(t);
            o && (o.querySelector('.js-inline-comment-form-container') || Mo(o)) && n.classList.remove('d-none');
          },
          {
            capture: !0,
          },
        );
      const Ro = new Set();
      function Do(e, t, n, o) {
        const s = Object.getOwnPropertyDescriptor(e, n) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), n);
        s &&
          'function' == typeof s.value &&
          t.addEventListener(o, (t) => {
            s.value.call(e, t);
          });
      }
      function Po(e, t) {
        const n = e.tagName.toLowerCase();
        for (const [o, s, i] of (function* (e) {
          for (const t of (e.getAttribute('data-action') || '').split(' ')) {
            const [e, n] = t.split('#');
            if (!n) continue;
            const o = e.lastIndexOf(':');
            o < 0 || (yield [e.slice(0, o), e.slice(o + 1), n]);
          }
        })(t))
          s === n && Do(e, t, i, o);
      }
      function Fo(e, t) {
        Object.defineProperty(e, t, {
          configurable: !0,
          get() {
            return (function (e, t) {
              const n = e.tagName.toLowerCase();
              for (const o of e.querySelectorAll(`[data-target~="${n}.${t}"]`)) if (o.closest(n) === e) return o;
            })(this, t);
          },
        });
      }
      function Bo(e, t) {
        Object.defineProperty(e, t, {
          configurable: !0,
          get() {
            return (function (e, t) {
              const n = e.tagName.toLowerCase(),
                o = [];
              for (const s of e.querySelectorAll(`[data-targets~="${n}.${t}"]`)) s.closest(n) === e && o.push(s);
              return o;
            })(this, t);
          },
        });
      }
      function Oo(e) {
        !(function (e, t, n) {
          if (e[t]) {
            const o = e[t];
            e[t] = function (...e) {
              n.apply(this, e), o.apply(this, e);
            };
          } else e[t] = n;
        })(e.prototype, 'connectedCallback', function () {
          !(function (e) {
            const t = e.tagName.toLowerCase();
            Ro.add(t);
            const n = `[data-action*=":${t}#"]`;
            for (const o of e.querySelectorAll(n)) o.closest(t) === e && Po(e, o);
            e.matches(n) && Po(e, e);
          })(this);
        }),
          (function (e) {
            const t = e.name
              .replace(/([A-Z]($|[a-z]))/g, '-$1')
              .replace(/(^-|-Element$)/g, '')
              .toLowerCase();
            window.customElements.get(t) || ((window[e.name] = e), window.customElements.define(t, e));
          })(e);
      }
      let Uo = class RemotePaginationElement extends HTMLElement {
        constructor() {
          super(), (this.loaderWasFocused = !1);
        }
        connectedCallback() {
          this.setPaginationUrl(this.list);
        }
        get disabled() {
          return this.submitButton.hasAttribute('aria-disabled');
        }
        set disabled(e) {
          e
            ? this.submitButton.setAttribute('aria-disabled', 'true')
            : this.submitButton.removeAttribute('aria-disabled'),
            this.submitButton.classList.toggle('disabled', e);
        }
        load() {
          var e;
          this.setPaginationUrl(this.list),
            this.loaderWasFocused && (null === (e = this.focusMarkers.pop()) || void 0 === e || e.focus()),
            (this.loaderWasFocused = !1);
        }
        loadstart(e) {
          e.target.addEventListener(
            'focus',
            () => {
              this.loaderWasFocused = !0;
            },
            {
              once: !0,
            },
          );
        }
        async submit(e) {
          var t;
          if ((e.preventDefault(), this.disabled)) return;
          let n;
          this.disabled = !0;
          try {
            const e = await fetch(this.form.action);
            if (!e.ok) return;
            n = await e.text();
          } catch (s) {
            return;
          }
          const o = z(document, n);
          this.setPaginationUrl(o),
            this.list.append(o),
            null === (t = this.focusMarkers.pop()) || void 0 === t || t.focus(),
            (this.disabled = !1);
        }
        setPaginationUrl(e) {
          const t = e.querySelector('[data-pagination-src]');
          if (!t) return;
          const n = t.getAttribute('data-pagination-src');
          n ? ((this.form.action = n), (this.form.hidden = !1)) : (this.form.hidden = !0);
        }
      };
      No([Fo], Uo.prototype, 'form', void 0),
        No([Fo], Uo.prototype, 'list', void 0),
        No([Bo], Uo.prototype, 'focusMarkers', void 0),
        No([Fo], Uo.prototype, 'submitButton', void 0),
        (Uo = No([Oo], Uo)),
        n('.has-removed-contents', function () {
          let e;
          return {
            add(t) {
              e = Array.from(t.childNodes);
              for (const o of e) t.removeChild(o);
              const n = t.closest('form');
              n && u(n, 'change');
            },
            remove(t) {
              for (const o of e) t.appendChild(o);
              const n = t.closest('form');
              n && u(n, 'change');
            },
          };
        }),
        D('form[data-replace-remote-form]', async function (e, t) {
          e.classList.remove('is-error'), e.classList.add('is-loading');
          try {
            let n = e;
            const o = await t.html(),
              s = e.closest('[data-replace-remote-form-target]');
            if (s) {
              const e = s.getAttribute('data-replace-remote-form-target');
              n = e ? document.getElementById(e) : s;
            }
            n.replaceWith(o.html);
          } catch (n) {
            e.classList.remove('is-loading'), e.classList.add('is-error');
          }
        });
      let zo = null;
      function Wo(e, t) {
        var n, o;
        const s = null !== (n = null == t ? void 0 : t.selector) && void 0 !== n ? n : '.js-session-resumable',
          i = `${null !== (o = null == t ? void 0 : t.keyPrefix) && void 0 !== o ? o : 'session-resume:'}${e}`,
          r = [];
        for (const l of document.querySelectorAll(s))
          (l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement) && r.push(l);
        const a = r
          .filter((e) =>
            (function (e) {
              return e.id && e.value !== e.defaultValue && e.form !== zo;
            })(e),
          )
          .map((e) => [e.id, e.value]);
        if (a.length)
          try {
            sessionStorage.setItem(i, JSON.stringify(a));
          } catch (c) {}
      }
      function Vo(e, t) {
        var n;
        const o = `${null !== (n = null == t ? void 0 : t.keyPrefix) && void 0 !== n ? n : 'session-resume:'}${e}`;
        let s;
        try {
          s = sessionStorage.getItem(o);
        } catch (r) {}
        if (!s) return;
        try {
          sessionStorage.removeItem(o);
        } catch (a) {}
        const i = [];
        for (const [c, l] of JSON.parse(s)) {
          const e = new CustomEvent('session:resume', {
            bubbles: !0,
            cancelable: !0,
            detail: {
              targetId: c,
              targetValue: l,
            },
          });
          if (document.dispatchEvent(e)) {
            const e = document.getElementById(c);
            e &&
              (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) &&
              e.value === e.defaultValue &&
              ((e.value = l), i.push(e));
          }
        }
        setTimeout(function () {
          for (const e of i)
            e.dispatchEvent(
              new CustomEvent('change', {
                bubbles: !0,
                cancelable: !0,
              }),
            );
        }, 0);
      }
      function Go(e) {
        const t = e || window.location,
          n = document.head && document.head.querySelector('meta[name=session-resume-id]');
        return (n instanceof HTMLMetaElement && n.content) || t.pathname;
      }
      window.addEventListener(
        'submit',
        function (e) {
          (zo = e.target),
            setTimeout(function () {
              e.defaultPrevented && (zo = null);
            }, 0);
        },
        {
          capture: !0,
        },
      ),
        window.addEventListener('pageshow', function () {
          Vo(Go());
        }),
        window.addEventListener('pjax:end', function () {
          Vo(Go());
        }),
        window.addEventListener('pagehide', function () {
          Wo(Go(), {
            selector: '.js-session-resumable',
          });
        }),
        window.addEventListener('pjax:beforeReplace', function (e) {
          const t = e.detail.previousState,
            n = t ? t.url : null;
          if (n)
            Wo(Go(new URL(n, window.location.origin)), {
              selector: '.js-session-resumable',
            });
          else {
            const e = new Error('pjax:beforeReplace event.detail.previousState.url is undefined');
            setTimeout(function () {
              throw e;
            });
          }
        }),
        n('textarea.js-size-to-fit', {
          constructor: HTMLTextAreaElement,
          subscribe: function (e) {
            var t = null,
              n = !1,
              o = void 0,
              s = void 0,
              i = void 0;
            function r(t) {
              if (o !== t.clientX || s !== t.clientY) {
                var a = e.style.height;
                i && i !== a && ((n = !0), (e.style.maxHeight = ''), e.removeEventListener('mousemove', r)), (i = a);
              }
              (o = t.clientX), (s = t.clientY);
            }
            var a = e.ownerDocument,
              c = a.documentElement;
            function l() {
              if (!(n || e.value === t || (e.offsetWidth <= 0 && e.offsetHeight <= 0))) {
                var o = (function () {
                    for (var t = 0, n = e; n !== a.body && null !== n; ) (t += n.offsetTop || 0), (n = n.offsetParent);
                    var o = t - a.defaultView.pageYOffset;
                    return {
                      top: o,
                      bottom: c.clientHeight - (o + e.offsetHeight),
                    };
                  })(),
                  s = o.top,
                  r = o.bottom;
                if (!(s < 0 || r < 0)) {
                  var l = Number(getComputedStyle(e).height.replace(/px/, '')) + r;
                  e.style.maxHeight = l - 100 + 'px';
                  var u = e.parentElement;
                  if (u instanceof HTMLElement) {
                    var d = u.style.height;
                    (u.style.height = getComputedStyle(u).height),
                      (e.style.height = 'auto'),
                      (e.style.height = e.scrollHeight + 'px'),
                      (u.style.height = d),
                      (i = e.style.height);
                  }
                  t = e.value;
                }
              }
            }
            function u() {
              (n = !1), (e.style.height = ''), (e.style.maxHeight = '');
            }
            e.addEventListener('mousemove', r), e.addEventListener('input', l), e.addEventListener('change', l);
            var d = e.form;
            return (
              d && d.addEventListener('reset', u),
              e.value && l(),
              {
                unsubscribe: function () {
                  e.removeEventListener('mousemove', r),
                    e.removeEventListener('input', l),
                    e.removeEventListener('change', l),
                    d && d.removeEventListener('reset', u);
                },
              }
            );
          },
        }),
        D('.js-social-form', async function (e, t) {
          const n = await t.json(),
            o = i(e, '.js-social-container');
          for (const s of o.querySelectorAll('.js-social-count')) s.textContent = n.json.count;
        }),
        s('click', 'tab-container [role="tab"]', function (e) {
          const { currentTarget: t } = e,
            n = i(t, 'tab-container').querySelector('.js-filterable-field, [data-filter-placeholder-input]');
          if (n instanceof HTMLInputElement) {
            const e = t.getAttribute('data-filter-placeholder');
            e && n.setAttribute('placeholder', e), n.focus();
          }
        }),
        s('tab-container-changed', 'tab-container', function (e) {
          const t = e.detail.relatedTarget,
            n = t.getAttribute('data-fragment-url'),
            o = t.querySelector('include-fragment');
          n && o && !o.hasAttribute('src') && (o.src = n);
        });
      class TagInput {
        constructor(e) {
          (this.container = e.container),
            (this.selections = e.selections),
            (this.inputWrap = e.inputWrap),
            (this.input = e.input),
            (this.tagTemplate = e.tagTemplate),
            (this.form = this.input.form),
            (this.autoComplete = e.autoComplete);
        }
        setup() {
          this.container.addEventListener('click', (e) => {
            e.target.matches('.js-remove') ? this.removeTag(e) : this.onFocus();
          }),
            this.input.addEventListener('focus', this.onFocus.bind(this)),
            this.input.addEventListener('blur', this.onBlur.bind(this)),
            this.input.addEventListener('keydown', this.onKeyDown.bind(this)),
            this.form.addEventListener('submit', this.onSubmit.bind(this)),
            this.autoComplete.addEventListener('auto-complete-change', () => {
              this.selectTag(this.autoComplete.value);
            });
        }
        onFocus() {
          this.inputWrap.classList.add('focus'), this.input !== document.activeElement && this.input.focus();
        }
        onBlur() {
          this.inputWrap.classList.remove('focus'), this.autoComplete.open || this.onSubmit();
        }
        onSubmit() {
          this.input.value && (this.selectTag(this.input.value), (this.autoComplete.open = !1));
        }
        onKeyDown(e) {
          switch (fe(e)) {
            case 'Backspace':
              this.onBackspace();
              break;
            case 'Enter':
            case 'Tab':
              this.taggifyValueWhenSuggesterHidden(e);
              break;
            case ',':
            case ' ':
              this.taggifyValue(e);
          }
        }
        taggifyValueWhenSuggesterHidden(e) {
          !this.autoComplete.open && this.input.value && (e.preventDefault(), this.selectTag(this.input.value));
        }
        taggifyValue(e) {
          this.input.value && (e.preventDefault(), this.selectTag(this.input.value), (this.autoComplete.open = !1));
        }
        selectTag(e) {
          const t = this.normalizeTag(e),
            n = this.selectedTags();
          t &&
            n.indexOf(t) < 0 &&
            (this.selections.appendChild(this.templateTag(t)), (this.input.value = ''), u(this.form, 'tags:changed'));
        }
        removeTag(e) {
          const t = e.target;
          e.preventDefault(), i(t, '.js-tag-input-tag').remove(), u(this.form, 'tags:changed');
        }
        templateTag(e) {
          const t = this.tagTemplate.cloneNode(!0);
          return (
            (c(t, 'input', HTMLInputElement).value = e),
            c(t, '.js-placeholder-tag-name').replaceWith(e),
            t.classList.remove('d-none', 'js-template'),
            t
          );
        }
        normalizeTag(e) {
          return e
            .toLowerCase()
            .trim()
            .replace(/[\s,']+/g, '-');
        }
        onBackspace() {
          if (!this.input.value) {
            const e = this.selections.querySelector('li:last-child .js-remove');
            e instanceof HTMLElement && e.click();
          }
        }
        selectedTags() {
          const e = a(this.selections, 'input', HTMLInputElement);
          return Array.from(e)
            .map((e) => e.value)
            .filter((e) => e.length > 0);
        }
      }
      async function Jo(e) {
        const t = e.currentTarget;
        if (
          (function (e) {
            return !!e.getAttribute('data-hovercard-url') && !!e.closest('[data-team-hovercards-enabled]');
          })(t)
        )
          return void t.classList.remove('tooltipped');
        const n = t.getAttribute('data-url');
        if (!n) return;
        const o = ie(n),
          s = r(t, 'data-id'),
          i = document.querySelectorAll(`.js-team-mention[data-id='${s}']`);
        for (const r of i) r.removeAttribute('data-url');
        try {
          const e = await o;
          0 === e.total
            ? e.members.push('This team has no members')
            : e.total > e.members.length && e.members.push(`${e.total - e.members.length} more`),
            Ko(
              i,
              (function (e) {
                if ('ListFormat' in Intl) {
                  return new Intl.ListFormat().format(e);
                }
                if (0 === e.length) return '';
                if (1 === e.length) return e[0];
                if (2 === e.length) return e.join(' and ');
                {
                  const t = e[e.length - 1];
                  return e.slice(0, -1).concat(`and ${t}`).join(', ');
                }
              })(e.members),
            );
        } catch (a) {
          const e = a.response ? a.response.status : 500;
          Ko(i, r(t, 404 === e ? 'data-permission-text' : 'data-error-text'));
        }
      }
      function Ko(e, t) {
        for (const n of e)
          n instanceof HTMLElement &&
            (n.setAttribute('aria-label', t), n.classList.add('tooltipped', 'tooltipped-s', 'tooltipped-multiline'));
      }
      n('.js-tag-input-container', {
        constructor: HTMLElement,
        initialize(e) {
          new TagInput({
            container: e,
            inputWrap: c(e, '.js-tag-input-wrapper'),
            input: c(e, 'input[type="text"], input:not([type])', HTMLInputElement),
            selections: c(e, '.js-tag-input-selected-tags'),
            tagTemplate: c(e, '.js-template'),
            autoComplete: c(e, 'auto-complete', d),
          }).setup();
        },
      }),
        n('.js-team-mention', function (e) {
          e.addEventListener('mouseenter', Jo);
        });
      let Xo = 0;
      const Yo =
        'IntersectionObserver' in window
          ? new IntersectionObserver(
              function (e) {
                for (const t of e) t.isIntersecting && Qo(t.target);
              },
              {
                root: null,
                rootMargin: '0px',
                threshold: 1,
              },
            )
          : null;
      function Qo(e) {
        e.classList.remove('js-unread-item', 'unread-item');
      }
      n('.js-unread-item', {
        constructor: HTMLElement,
        add(e) {
          Xo++, Yo && Yo.observe(e);
        },
        remove(e) {
          Xo--,
            Yo && Yo.unobserve(e),
            0 === Xo &&
              (function () {
                if (!document.hasFocus()) return;
                const e = document.querySelector('.js-timeline-marker-form');
                e && e instanceof HTMLFormElement && P(e);
              })();
        },
      }),
        n('.js-discussion[data-channel-target]', {
          subscribe: (e) =>
            V(e, 'socket:message', function (e) {
              const t = e.target,
                n = e.detail.data;
              if (t.getAttribute('data-channel-target') === n.gid)
                for (const o of document.querySelectorAll('.js-unread-item')) Qo(o);
            }),
        });
      let Zo = 0;
      const es = /^\(\d+\)\s+/;
      function ts() {
        const e = Zo ? `(${Zo}) ` : '';
        document.title.match(es)
          ? (document.title = document.title.replace(es, e))
          : (document.title = `${e}${document.title}`);
      }
      function ns() {
        if (document.querySelector(':target')) return;
        const e = pe(location.hash).toLowerCase(),
          t = ge(document, `user-content-${e}`);
        t && t.scrollIntoView();
      }
      function os(e) {
        e.target.classList.remove('will-transition-once');
      }
      n('.js-unread-item', {
        add() {
          Zo++, ts();
        },
        remove() {
          Zo--, ts();
        },
      }),
        window.addEventListener('hashchange', ns),
        document.addEventListener('pjax:success', ns),
        (async function () {
          await B, ns();
        })(),
        s('click', 'a[href]', function (e) {
          const { currentTarget: t } = e;
          t instanceof HTMLAnchorElement &&
            t.href === location.href &&
            location.hash.length > 1 &&
            setTimeout(function () {
              e.defaultPrevented || ns();
            });
        }),
        n('.will-transition-once', {
          constructor: HTMLElement,
          subscribe: (e) => V(e, 'transitionend', os),
        });
      let ss = null;
      async function is(e) {
        const t = e.getAttribute('data-item-name') || 'items',
          n = e.value,
          o = parseInt(e.getAttribute('data-item-minimum')) || 0,
          s = parseInt(e.getAttribute('data-item-maximum')) || 300,
          i = parseInt(e.getAttribute('data-item-count')) || 0,
          c = Math.max(o, parseInt(n) || 0),
          l = c > s,
          u = document.querySelector('.js-downgrade-button');
        u instanceof HTMLButtonElement && (u.disabled = c === i);
        const d = new URL(r(e, 'data-url'), window.location.origin),
          m = new URLSearchParams(d.search.slice(1));
        m.append(t, c.toString()),
          document.querySelector('.js-transform-user') && m.append('transform_user', '1'),
          (d.search = m.toString()),
          null == ss || ss.abort();
        const { signal: f } = (ss = new AbortController());
        let p = null;
        try {
          const e = await fetch(d.toString(), {
            signal: f,
            headers: {
              Accept: 'application/json',
            },
          });
          if (!e.ok) return;
          p = await e.json();
        } catch (E) {}
        if (f.aborted) return;
        if (!p) return;
        const g = document.querySelector('.js-contact-us');
        g && g.classList.toggle('d-none', !l);
        const h = document.querySelector('.js-payment-summary');
        h && h.classList.toggle('d-none', l);
        const j = document.querySelector('.js-submit-billing');
        j instanceof HTMLElement && (j.hidden = l);
        const b = document.querySelector('.js-billing-section');
        b && b.classList.toggle('has-removed-contents', p.free || p.is_enterprise_cloud_trial);
        const v = document.querySelector('.js-upgrade-info');
        v && v.classList.toggle('d-none', c <= 0);
        const y = document.querySelector('.js-downgrade-info');
        y && y.classList.toggle('d-none', c >= 0);
        const L = document.querySelector('.js-extra-seats-line-item');
        L && L.classList.toggle('d-none', p.no_additional_seats),
          document.querySelector('.js-seat-field') &&
            (function (e) {
              for (const t of a(document, '.js-seat-field', HTMLInputElement)) t.value = e;
            })(n);
        const w = document.querySelector('.js-minimum-seats-disclaimer');
        w && (w.classList.toggle('tooltipped', 5 === p.seats), w.classList.toggle('tooltipped-nw', 5 === p.seats));
        const T = p.selectors;
        for (const r in T) for (const e of document.querySelectorAll(r)) e.innerHTML = T[r];
        W(je(), '', p.url);
      }
      function rs(e, t) {
        t && '0' !== t ? (e.textContent = `(using ${t})`) : e.remove();
      }
      s('click', '.js-org-signup-duration-change', (e) => {
        e.preventDefault();
        const t = e.currentTarget,
          n = r(t, 'data-plan-duration');
        !(function (e) {
          const t = 'year' === e ? 'month' : 'year';
          for (const n of a(document, '.js-plan-duration-text')) n.innerHTML = e;
          for (const n of a(document, '.unstyled-available-plan-duration-adjective')) n.innerHTML = `${e}ly`;
          for (const n of a(document, '.js-org-signup-duration-change')) n.setAttribute('data-plan-duration', t);
        })(n),
          (function (e) {
            for (const t of a(document, '.js-seat-field', HTMLInputElement)) {
              const n = new URL(r(t, 'data-url'), window.location.origin),
                o = new URLSearchParams(n.search.slice(1));
              o.delete('plan_duration'),
                o.append('plan_duration', e),
                (n.search = o.toString()),
                t.setAttribute('data-url', n.toString());
            }
          })(n);
        for (const o of a(document, '.js-seat-field', HTMLInputElement)) is(o);
        !(function () {
          for (const e of a(document, '.js-unit-price')) e.hidden = !e.hidden;
        })();
      }),
        n('.js-addon-purchase-field', {
          constructor: HTMLInputElement,
          add(e) {
            he(e) && is(e),
              ae(e, function () {
                is(e);
              });
          },
        }),
        n('.js-addon-downgrade-field', {
          constructor: HTMLSelectElement,
          add(e) {
            he(e) && is(e),
              e.addEventListener('change', function () {
                is(e);
              });
          },
        }),
        s(
          'details-menu-selected',
          '.js-organization-container',
          function (e) {
            const t = document.querySelector('.js-addon-purchase-field'),
              n = e.target.querySelector('input:checked');
            if (t instanceof HTMLInputElement && n instanceof HTMLInputElement) {
              const e = n.getAttribute('data-upgrade-url');
              e && (t.setAttribute('data-url', e), (t.value = '0'), is(t));
            }
          },
          {
            capture: !0,
          },
        ),
        D('.js-fetch-downgrade-features-count', async function (e, t) {
          const n = (await t.json()).json;
          for (const o in n.counts) {
            const t = c(e, `.js-downgrade-count[data-${o}-count]`);
            t && rs(t, n.counts[o]);
          }
        }),
        n('.js-fetch-downgrade-features-count', {
          constructor: HTMLFormElement,
          add: P,
        }),
        n('.js-repo-health', function (e) {
          const t = i(e, 'form', HTMLFormElement),
            n = c(t, '.js-comment-field', HTMLTextAreaElement),
            o = c(t, '.js-repo-name', HTMLInputElement);
          function s() {
            !(async function (e, t, n) {
              const o = c(document, '.js-repo-health-check', HTMLFormElement);
              (c(o, '.js-repo-health-name', HTMLInputElement).value = n),
                e.classList.remove('d-none'),
                e.classList.add('is-loading'),
                t.setCustomValidity('checking'),
                u(t, 'change');
              const s = await Q(document, o.action, {
                  method: 'POST',
                  body: new FormData(o),
                }),
                i = c(e, '.js-repo-health-results');
              (i.innerHTML = ''),
                i.appendChild(s),
                e.classList.remove('is-loading'),
                t.setCustomValidity(''),
                u(t, 'change');
            })(e, n, o.value);
          }
          'hidden' === o.type ? n.addEventListener('focus', s) : o.addEventListener('change', s);
        }),
        D('.js-audit-log-export-form', async function (e, t) {
          const n = c(document, '.js-audit-log-exporting'),
            o = c(document, '.js-audit-log-export-menu');
          function s(e) {
            (o.hidden = e), (n.hidden = !e);
          }
          let i;
          s(!0);
          try {
            i = await t.json();
          } catch (a) {
            return s(!1), void be();
          }
          const r = i.json;
          try {
            await ve(r.job_url);
          } catch (a) {
            return s(!1), void be();
          }
          s(!1), (window.location = r.export_url);
        });
      let as,
        cs = null;
      function ls(e) {
        const t = document.querySelector('.js-membership-tabs');
        if (t) {
          const n = e.querySelectorAll('.js-bulk-actions-toggle:checked');
          t.classList.toggle('d-none', n.length > 0);
        }
      }
      function us() {
        return c(document, '.js-business-saml-provider-settings-form', HTMLFormElement);
      }
      function ds() {
        return us().querySelector('.js-business-saml-form-inputs');
      }
      function ms(e) {
        e && e.classList.remove('d-none');
      }
      function fs() {
        return (
          '1' === c(document, '.js-business-saml-currently-enabled', HTMLInputElement).value &&
          !c(document, '.js-business-enable-saml', HTMLInputElement).checked
        );
      }
      function ps() {
        return c(document, '.is-submit-button-value', HTMLInputElement);
      }
      function gs() {
        us().submit();
      }
      function hs() {
        const e = document.querySelector('.js-business-enable-saml');
        e && e instanceof HTMLInputElement && ((e.checked = !0), ms(ds()));
      }
      function js() {
        c(document, '#business_saml_provider_saml_deprovisioning_enabled', HTMLInputElement).checked = !1;
      }
      function bs() {
        const e = '0' === c(document, '.js-business-two-factor-currently-enabled', HTMLInputElement).value;
        return c(document, '.js-business-enable-two-factor', HTMLInputElement).checked && e;
      }
      function vs() {
        return {
          packageTypeCheckboxes: a(document, '.js-package-type-checkbox', HTMLInputElement),
          packageTypeList: c(document, '.js-package-types-list', HTMLElement),
          packageSettingsManagedWarning: c(document, '.js-enterprise-package-settings-managed-warning', HTMLElement),
          updateSettingsButton: c(document, '.js-update-enterprise-package-settings', HTMLButtonElement),
          packageSettingsDisabledWarning: c(document, '.js-enterprise-package-settings-disabled-warning', HTMLElement),
        };
      }
      s('change', '.js-bulk-actions-toggle', function (e) {
        const t = e.currentTarget,
          n = i(t, '.js-bulk-actions-container');
        u(n, 'bulk-actions:update');
      }),
        s(
          'bulk-actions:update',
          '.js-bulk-actions-container',
          l(async function (e) {
            const t = e.target;
            if (!(t instanceof HTMLElement)) return;
            const n = c(t, '.js-bulk-actions'),
              o = !!t.querySelector('.js-bulk-actions-toggle:checked');
            null == cs || cs.abort();
            const { signal: s } = (cs = new AbortController());
            let l = '';
            try {
              const e = await fetch(
                (function (e) {
                  const t = new URL(r(e, 'data-bulk-actions-url'), window.location.origin),
                    n = new URLSearchParams(t.search.slice(1)),
                    o = e.getAttribute('data-bulk-actions-parameter'),
                    s = a(e, '.js-bulk-actions-toggle:checked', HTMLInputElement);
                  if (o) {
                    const e = s.map((e) => r(i(e, '.js-bulk-actions-item'), 'data-bulk-actions-id')).sort();
                    for (const t of e) n.append(`${o}[]`, t);
                  } else for (const i of s.sort((e, t) => (e.value > t.value ? 1 : -1))) n.append(i.name, i.value);
                  return (t.search = n.toString()), t.toString();
                })(t),
                {
                  signal: s,
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                  },
                },
              );
              if (!e.ok) return;
              l = await e.text();
            } catch (d) {}
            s.aborted ||
              (l && (o ? (ls(t), (n.innerHTML = l)) : ((n.innerHTML = l), ls(t)), u(t, 'bulk-actions:updated')));
          }, 100),
        ),
        s('click', '.js-preview-message', function (e) {
          const t = (
            document.querySelector('#custom_message_input_value') ||
            document.querySelector('#custom_message_input_value')
          ).value;
          (c(document, '#custom_message_preview_value', HTMLInputElement).value = t), e.currentTarget.form.submit();
        }),
        s('click', '.js-admin-settings-policy-input', function (e) {
          const t = e.currentTarget.form,
            n = c(t, '[aria-checked="true"]', HTMLButtonElement);
          P(t, n);
        }),
        s('click', '.js-business-enable-saml', function (e) {
          e.currentTarget.checked
            ? ms(ds())
            : (function (e) {
                e && e.classList.add('d-none');
              })(ds());
        }),
        s('click', '.js-business-saml-submit', function (e) {
          e.preventDefault();
          const t = e.currentTarget;
          P(us(), t);
        }),
        s('submit', '.js-business-saml-provider-settings-form', function (e) {
          e.preventDefault(),
            'test_settings' === ps().name
              ? gs()
              : 'save_settings' === ps().name &&
                (fs()
                  ? (async function () {
                      (
                        await ee({
                          content: c(document, '#disable-saml-confirmation', HTMLTemplateElement).content.cloneNode(!0),
                        })
                      ).addEventListener('dialog:remove', hs);
                    })()
                  : gs());
        }),
        s('submit', '.js-enterprise-user-provisioning-form', function (e) {
          const t = c(
              e.currentTarget,
              '[name="business_saml_provider_saml_deprovisioning_enabled_previously"]',
              HTMLInputElement,
            ),
            n = c(e.currentTarget, '#business_saml_provider_saml_deprovisioning_enabled', HTMLInputElement);
          '0' === t.value &&
            n.checked &&
            (e.preventDefault(),
            (async function () {
              (
                await ee({
                  content: c(
                    document,
                    '#enable-saml-deprovisioning-confirmation',
                    HTMLTemplateElement,
                  ).content.cloneNode(!0),
                })
              ).addEventListener('dialog:remove', js);
            })());
        }),
        s('click', '.js-enable-enable-saml-provider-button', function () {
          const e = c(document, '.js-enable-saml-provider-button', HTMLButtonElement),
            t = c(document, '.js-enable-saml-provider-instruction', HTMLElement);
          (e.disabled = !1), (t.hidden = !0);
        }),
        s('click', '.js-suggested-org', function (e) {
          const t = e.currentTarget;
          if ('true' === t.getAttribute('aria-disabled')) return;
          const n = i(t, 'form'),
            o = c(t, '.js-suggested-org-details-source');
          c(n, '.js-suggested-org-details-target').innerHTML = o.innerHTML;
        }),
        s('change', '.js-invite-business-org-auto-complete', function (e) {
          const t = e.currentTarget,
            n = i(t, 'form'),
            o = c(n, '.js-suggested-org-details-target');
          t.value || (o.innerHTML = '');
        }),
        s('click', '.js-business-two-factor-submit-button', function (e) {
          bs() || e.preventDefault();
        }),
        s('change', '.js-repo-types-allowed-radio', () => {
          const e = a(document, '.js-repo-type-creation-checkbox', HTMLInputElement),
            t = a(document, '.js-repo-type-creation-label', HTMLElement);
          for (const n of e) n.disabled = !1;
          for (const n of t) n.classList.remove('text-gray-light');
        }),
        s('change', '.js-repo-types-disallowed-radio', () => {
          const e = a(document, '.js-repo-type-creation-checkbox', HTMLInputElement),
            t = a(document, '.js-repo-type-creation-label', HTMLElement);
          for (const n of e) (n.disabled = !0), (n.checked = !1);
          for (const n of t) n.classList.add('text-gray-light');
        }),
        s('change', '.js-provisioning-enabled-checkbox', () => {
          if (
            '0' ===
            c(document, '[name="business_saml_provider_provisioning_enabled_previously"]', HTMLInputElement).value
          )
            return;
          const e = c(document, '.js-provisioning-enabled-checkbox', HTMLInputElement),
            t = a(document, '.js-disable-when-user-provisioning-disabled-checkbox', HTMLInputElement);
          if (e.checked)
            for (const n of t) {
              const e = c(document, `[name='${n.id}_previously']`, HTMLInputElement);
              i(n, '.js-deprovisioning-checkbox', HTMLElement).classList.remove('checkbox-disabled'),
                n.removeAttribute('disabled'),
                '1' === e.value ? (n.checked = !0) : n.removeAttribute('checked');
            }
          else
            for (const n of t)
              n.setAttribute('disabled', 'disabled'),
                (n.checked = !1),
                i(n, '.js-deprovisioning-checkbox', HTMLElement).classList.add('checkbox-disabled');
        }),
        s('change', '.js-enterprise-package-settings-radio', (e) => {
          const t = vs(),
            n = e.currentTarget;
          if (null == n) return;
          const o = n.getAttribute('data-package-setting-value');
          for (const s of t.packageTypeCheckboxes) s.hidden = 'managed' !== o;
          (t.packageTypeList.hidden = 'disabled' === o),
            (t.packageSettingsManagedWarning.hidden = 'managed' !== o),
            (t.packageSettingsDisabledWarning.hidden = 'disabled' !== o),
            (t.updateSettingsButton.disabled = !1);
        }),
        s('change', '.js-package-type-checkbox', () => {
          vs().updateSettingsButton.disabled = !1;
        });
      let ys = !1;
      function Ls() {
        (as = document.activeElement), document.body && document.body.classList.toggle('intent-mouse', ys);
      }
      function ws(e) {
        return e.hasAttribute('data-maxlength') ? parseInt(e.getAttribute('data-maxlength') || '') : e.maxLength;
      }
      function Ts(e) {
        const t = ws(e);
        !(function (e, t, n) {
          const o = n.closest('.js-characters-remaining-container');
          if (!o) return;
          const s = c(o, '.js-characters-remaining'),
            i = String(s.getAttribute('data-suffix')),
            r = t - ye(e);
          r <= 20
            ? ((s.textContent = `${r} ${i}`), s.classList.toggle('text-red', r <= 5), (s.hidden = !1))
            : (s.hidden = !0);
        })(e.value, t, e);
      }
      function Es(e) {
        const t = e.querySelectorAll('.js-characters-remaining-container');
        for (const n of t) {
          Ts(c(n, '.js-characters-remaining-field', HTMLInputElement));
        }
      }
      function ks(e) {
        const t = [];
        for (const n of (function () {
          try {
            return document.cookie.split(';');
          } catch (e) {
            return [];
          }
        })()) {
          const [o, s] = n.trim().split('=');
          e === o &&
            void 0 !== s &&
            t.push({
              key: o,
              value: s,
            });
        }
        return t;
      }
      function Ss(e, t, n = null, o = !1) {
        let s = document.domain;
        if (null == s) throw new Error('Unable to get document domain');
        s.endsWith('.github.com') && (s = 'github.com');
        const i = 'https:' === location.protocol ? '; secure' : '',
          r = n ? `; expires=${n}` : '';
        !1 === o && (s = `.${s}`);
        try {
          document.cookie = `${e}=${t}; path=/; domain=${s}${r}${i}`;
        } catch (a) {}
      }
      function Ms(e, t = !1) {
        let n = document.domain;
        if (null == n) throw new Error('Unable to get document domain');
        n.endsWith('.github.com') && (n = 'github.com');
        const o = new Date().getTime(),
          s = new Date(o - 1).toUTCString(),
          i = 'https:' === location.protocol ? '; secure' : '',
          r = `; expires=${s}`;
        !1 === t && (n = `.${n}`);
        try {
          document.cookie = `${e}=''; path=/; domain=${n}${r}${i}`;
        } catch (a) {}
      }
      function xs(e) {
        if (!window._octo) return;
        const t = Math.floor(new Date().getTime() / 1e3);
        e.timestamp = t;
        if (document.head && document.head.querySelector('meta[name="octolytics-event-url"]')) {
          const t = c(document.head, 'meta[name="octolytics-event-url"]', HTMLMetaElement).content,
            n = JSON.stringify(e);
          navigator.sendBeacon && navigator.sendBeacon(t, n);
        }
      }
      function As() {
        let e = '';
        const t = ks('_octo'),
          n = [];
        for (const o of t) {
          const t = o.value.split('.');
          if ('GH1' === t.shift() && t.length > 1) {
            const o = (t.shift() || '').split('-');
            1 === o.length && (o[1] = '1');
            const s = [Number(o[0]), Number(o[1])];
            (e = t.join('.')), n.push([s, e]);
          }
        }
        return (e = ''), n.length > 0 && (e = String(n.sort().reverse()[0][1])), e;
      }
      document.addEventListener(
        'mousedown',
        function () {
          (ys = !0), as === document.activeElement && Ls();
        },
        {
          capture: !0,
        },
      ),
        document.addEventListener(
          'keydown',
          function () {
            ys = !1;
          },
          {
            capture: !0,
          },
        ),
        document.addEventListener('focusin', Ls, {
          capture: !0,
        }),
        R('.js-characters-remaining-field', function (e) {
          function t() {
            (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && Ts(e);
          }
          t(),
            e.addEventListener('input', t),
            e.addEventListener(
              'blur',
              () => {
                e.removeEventListener('input', t);
              },
              {
                once: !0,
              },
            );
        }),
        s('click', '[data-octo-click]', function (e) {
          if (!window._octo) return;
          const t = e.currentTarget,
            n = (t instanceof HTMLElement && t.getAttribute('data-octo-click')) || '',
            o = {};
          o.event_type = n;
          const s = {},
            i = {},
            r = {};
          let a = [];
          t instanceof HTMLElement &&
            t.hasAttribute('data-octo-dimensions') &&
            (a = (t.getAttribute('data-octo-dimensions') || '').split(','));
          const c = document.head ? document.head.querySelectorAll('meta[name^="octolytics-"]') : [];
          for (const u of c)
            if (u instanceof HTMLMetaElement)
              if (u.name.startsWith('octolytics-dimension-')) {
                s[u.name.replace(/^octolytics-dimension-/, '')] = u.content;
              } else if (u.name.startsWith('octolytics-measure-')) {
                i[u.name.replace(/^octolytics-measure-/, '')] = u.content;
              } else if (u.name.startsWith('octolytics-context-')) {
                r[u.name.replace(/^octolytics-context-/, '')] = u.content;
              } else if (u.name.startsWith('octolytics-actor-')) {
                s[u.name.replace(/^octolytics-/, '').replace(/-/g, '_')] = u.content;
              } else if (u.name.startsWith('octolytics-')) {
                o[u.name.replace(/^octolytics-/, '').replace(/-/g, '_')] = u.content;
              }
          const l = document.querySelector('meta[name=visitor-payload]');
          if (l instanceof HTMLMetaElement) {
            const e = JSON.parse(atob(l.content));
            Object.assign(s, e);
          }
          if (t instanceof HTMLElement && t.hasAttribute('data-ga-click')) {
            const e = (t.getAttribute('data-ga-click') || '').split(',').map((e) => e.trim());
            (s.category = e[0]), (s.action = e[1]);
          }
          for (const u of a) {
            const e = u.split(':'),
              t = e.shift();
            t && (s[t] = e.join(':'));
          }
          (o.dimensions = s), (o.measures = i), (o.context = r), xs(o);
        });
      const Hs = {}.hasOwnProperty,
        qs = {
          host: '',
          type: 'page_view',
          dimensions: {},
          measures: {},
          context: {},
          actor: {},
          image: new Image(),
          performance: {},
          expectedPerformanceTimingKeys: [
            'connectEnd',
            'connectStart',
            'domComplete',
            'domContentLoadedEventEnd',
            'domContentLoadedEventStart',
            'domInteractive',
            'domLoading',
            'domainLookupEnd',
            'domainLookupStart',
            'fetchStart',
            'loadEventEnd',
            'loadEventStart',
            'navigationStart',
            'redirectEnd',
            'redirectStart',
            'requestStart',
            'responseEnd',
            'responseStart',
            'secureConnectionStart',
            'unloadEventEnd',
            'unloadEventStart',
          ],
          recordPageView() {
            return (
              this.applyMetaTags(),
              null != this.app &&
                (null == this.host
                  ? (console && console.warn && console.warn('Host not set, you are doing something wrong'), !1)
                  : ((this.image.src = this._src()), this._clearPerformance(), !0))
            );
          },
          setHost(e) {
            this.host = e;
          },
          setApp(e) {
            this.app = e;
          },
          setDimensions(e) {
            this.dimensions = e;
          },
          addDimensions(e) {
            let t;
            null == this.dimensions && (this.dimensions = {});
            const n = [];
            for (t in e) {
              if (!Hs.call(e, t)) continue;
              const o = e[t];
              n.push((this.dimensions[t] = o));
            }
            return n;
          },
          setMeasures(e) {
            this.measures = e;
          },
          addMeasures(e) {
            let t;
            null == this.measures && (this.measures = {});
            const n = [];
            for (t in e) {
              if (!Hs.call(e, t)) continue;
              const o = e[t];
              n.push((this.measures[t] = o));
            }
            return n;
          },
          setContext(e) {
            this.context = e;
          },
          addContext(e) {
            let t;
            null == this.context && (this.context = {});
            const n = [];
            for (t in e) {
              if (!Hs.call(e, t)) continue;
              const o = e[t];
              n.push((this.context[t] = o));
            }
            return n;
          },
          setActor(e) {
            this.actor = e;
          },
          push(e) {
            return this.applyCall(e);
          },
          enablePerformance() {
            this.performance = this._performanceTiming();
          },
          _recordSrc(e, t, n, o) {
            return `//${this.host}/${this.app}/${e}?${this._queryString(t, n, o)}`;
          },
          _src() {
            return `//${this.host}/${this.app}/${this.type}?${this._queryString()}`;
          },
          _queryString(e, t, n) {
            let o, s;
            const i = this._params(),
              r = [];
            for (o in i) (s = i[o]), r.push(`dimensions[${o}]=${s}`);
            return (
              r.push(this._encodeObject('dimensions', Object.assign({}, this.dimensions, e))),
              r.push(this._encodeObject('measures', Object.assign({}, this.measures, t))),
              null != this.performance &&
                r.push(
                  this._encodeObject('measures', {
                    performance_timing: String(this.performance),
                  }),
                ),
              r.push(this._encodeObject('context', Object.assign({}, this.context, n))),
              r.push(this._actor()),
              r.push(
                this._encodeObject('dimensions', {
                  cid: this._clientId(),
                }),
              ),
              r.join('&')
            );
          },
          _clearPerformance() {
            this.performance = null;
          },
          _performanceTiming() {
            if (
              null == window.performance ||
              null == window.performance.timing ||
              null == window.performance.timing.navigationStart
            )
              return null;
            const e = this.expectedPerformanceTimingKeys.reduce((e, t) => {
                const n = window.performance.timing[t];
                return (e[t] = 'number' == typeof n ? n : 0), e;
              }, {}),
              t = [],
              n = e.navigationStart;
            for (const o in e) {
              const s = e[o],
                i = 0 === s ? null : s - n;
              t.push(i);
            }
            return `1-${t.join('-')}`;
          },
          _params() {
            return {
              page: this._encode(this._page()),
              title: this._encode(this._title()),
              referrer: this._encode(this._referrer()),
              user_agent: this._encode(this._agent()),
              screen_resolution: this._encode(this._screenResolution()),
              pixel_ratio: this._encode(this._pixelRatio()),
              browser_resolution: this._encode(this._browserResolution()),
              tz_seconds: this._encode(this._tzSeconds()),
              timestamp: new Date().getTime(),
            };
          },
          _page() {
            try {
              const e = document.querySelector('meta[name=octolytics-location]');
              return e instanceof HTMLMetaElement ? document.location.origin + e.content : document.location.href;
            } catch (e) {}
          },
          _title() {
            try {
              return document.title;
            } catch (e) {}
          },
          _referrer() {
            let e = '';
            try {
              e = window.top.document.referrer;
            } catch (t) {
              if (window.parent)
                try {
                  e = window.parent.document.referrer;
                } catch (t) {}
            }
            return '' === e && (e = document.referrer), e;
          },
          _agent() {
            try {
              return navigator.userAgent;
            } catch (e) {}
          },
          _screenResolution() {
            try {
              return `${screen.width}x${screen.height}`;
            } catch (e) {
              return 'unknown';
            }
          },
          _pixelRatio: () => window.devicePixelRatio,
          _browserResolution() {
            let e = 0,
              t = 0;
            try {
              return (
                'number' == typeof window.innerWidth
                  ? ((t = window.innerWidth), (e = window.innerHeight))
                  : null != document.documentElement && null != document.documentElement.clientWidth
                  ? ((t = document.documentElement.clientWidth), (e = document.documentElement.clientHeight))
                  : null != document.body &&
                    null != document.body.clientWidth &&
                    ((t = document.body.clientWidth), (e = document.body.clientHeight)),
                `${t}x${e}`
              );
            } catch (n) {
              return 'unknown';
            }
          },
          _tzSeconds() {
            try {
              return -60 * new Date().getTimezoneOffset();
            } catch (e) {
              return '';
            }
          },
          _encodeObject(e, t) {
            const n = [];
            if (Array.isArray(t)) for (const o of t) n.push(this._encodeObject(`${e}[]`, o));
            else if ('object' == typeof t) for (const o in t) n.push(this._encodeObject(`${e}[${o}]`, t[o]));
            else n.push(`${e}=${this._encode(t)}`);
            return n.join('&');
          },
          _actor() {
            let e, t, n;
            const o = [],
              s = this.actor;
            for (t in s) {
              const i = s[t],
                r = `dimensions[actor_${t}]`;
              if (Array.isArray(i))
                for (e = 0, n = i.length; e < n; e++) {
                  const t = i[e];
                  o.push(`${r}[]=${this._encode(t)}`);
                }
              else o.push(`${r}=${this._encode(i)}`);
            }
            return o.join('&');
          },
          _clientId() {
            let e = As();
            return (
              '' === e &&
                (e = (function () {
                  const e = new Date().getTime(),
                    t = `${Math.round(Math.random() * (Math.pow(2, 31) - 1))}.${Math.round(e / 1e3)}`;
                  return Ss('_octo', `GH1.1.${t}`, new Date(e + 31536e6).toUTCString()), t;
                })()),
              e
            );
          },
          _encode: (e) => (null != e ? window.encodeURIComponent(e) : ''),
          applyQueuedCalls(e) {
            const t = [];
            for (const n of e) t.push(this.applyCall(n));
            return t;
          },
          applyCall(e) {
            const t = e[0],
              n = e.slice(1);
            return 'function' == typeof this[t]
              ? this[t](...n)
              : console && console.warn && console.warn(`${t} is not a valid method`);
          },
          applyMetaTags() {
            const e = this.loadMetaTags();
            return (
              e.host && this.setHost(e.host),
              e.app && this.setApp(e.app),
              this._objectIsEmpty(e.actor) || this.setActor(e.actor),
              this.addDimensions(e.dimensions),
              this.addMeasures(e.measures),
              this.addContext(e.context)
            );
          },
          loadMetaTags() {
            let e, t;
            const n = {
                dimensions: {},
                measures: {},
                context: {},
                actor: {},
              },
              o = document.getElementsByTagName('meta');
            for (e = 0, t = o.length; e < t; e++) {
              const t = o[e];
              if (t.name && t.content) {
                const e = t.name.match(this.octolyticsMetaTagName);
                if (e)
                  switch (e[1]) {
                    case 'host':
                      n.host = t.content;
                      break;
                    case 'app-id':
                    case 'app':
                      n.app = t.content;
                      break;
                    case 'dimension':
                      this._addField(n.dimensions, e[2], t);
                      break;
                    case 'measure':
                      this._addField(n.measures, e[2], t);
                      break;
                    case 'context':
                      this._addField(n.context, e[2], t);
                      break;
                    case 'actor':
                      this._addField(n.actor, e[2], t);
                  }
              }
            }
            const s = document.querySelector('meta[name=visitor-payload]');
            if (s instanceof HTMLMetaElement) {
              const e = JSON.parse(atob(s.content));
              this.addDimensions(e);
            }
            return n;
          },
          _addField(e, t, n) {
            e[t] = n.content;
          },
          _objectIsEmpty(e) {
            let t;
            for (t in e) if (Hs.call(e, t)) return !1;
            return !0;
          },
          octolyticsMetaTagName: /^octolytics-(host|app-id|app|dimension|measure|context|actor)-?(.*)/,
        };
      if (window._octo) {
        if (window._octo.slice) {
          const e = window._octo.slice(0);
          (window._octo = qs), window._octo.applyQueuedCalls(e);
        }
      } else window._octo = qs;
      function Cs(e) {
        const t = r(e, 'data-fieldname');
        return document.querySelectorAll(`span[data-fieldname="${t}"]`);
      }
      function Is(e, t) {
        if (e.value) for (const n of t) n.textContent = e.value;
      }
      document.addEventListener('keydown', (e) => {
        if ('Escape' !== e.key) return;
        if (e.target !== document.body) return;
        const t = document.querySelector('.js-targetable-element:target');
        t &&
          Le(t, () => {
            (window.location.hash = ''),
              window.history.replaceState(null, '', window.location.pathname + window.location.search);
          });
      }),
        document.addEventListener('click', (e) => {
          const t = document.querySelector('.js-targetable-element:target');
          t &&
            (e.target instanceof HTMLAnchorElement ||
              (e.target instanceof HTMLElement &&
                (t.contains(e.target) ||
                  Le(t, () => {
                    (window.location.hash = ''),
                      window.history.replaceState(null, '', window.location.pathname + window.location.search);
                  }))));
        }),
        R('.js-template-form-input', function (e) {
          if (!(e instanceof HTMLInputElement)) return;
          const t = Cs(e);
          function n() {
            e instanceof HTMLInputElement && Is(e, t);
          }
          function o(e) {
            for (const n of t) n.classList.toggle('CommunityTemplate-highlight--focus', e);
          }
          o(!0),
            e.addEventListener('input', n),
            e.addEventListener('blur', function t() {
              o(!1), e.removeEventListener('input', n), e.removeEventListener('blur', t);
            });
        }),
        s('click', '.js-template-highlight', function (e) {
          (function (e) {
            const t = r(e, 'data-fieldname');
            return c(document, `input[data-fieldname="${t}"]`, HTMLInputElement);
          })(e.currentTarget).focus();
        }),
        n('.js-templates', function () {
          for (const e of a(document, '.js-template-form-input', HTMLInputElement)) {
            Is(e, Cs(e));
          }
        }),
        s('submit', 'form.js-post-recovery-token', function (e) {
          const t = e.currentTarget;
          t instanceof HTMLFormElement &&
            (e.preventDefault(),
            (async function (e) {
              const t = c(document, '.js-delegated-account-recovery-submit', HTMLButtonElement),
                n = c(document, '.js-create-recovery-token-form', HTMLFormElement);
              e.classList.remove('failed'), e.classList.add('loading'), (t.disabled = !0);
              try {
                const t = await we(n),
                  o = await t.json();
                Te(e, {
                  token: o.token,
                  state: o.state_url,
                }),
                  e.submit();
              } catch (o) {
                e.classList.remove('loading'), e.classList.add('failed'), (t.disabled = !1);
              }
            })(t));
        }),
        n('form.js-recovery-provider-auto-redirect', {
          constructor: HTMLFormElement,
          initialize: function (e) {
            e.submit();
          },
        }),
        s('click', '.js-sub-dependencies', async function ({ currentTarget: e }) {
          const t = e,
            n = t.getAttribute('data-loaded'),
            o = t.querySelector('.js-expanded'),
            s = t.querySelector('.js-collapsed'),
            i = t.closest('.js-details-container');
          if (
            (o && o.classList.toggle('d-none'),
            s && s.classList.toggle('d-none'),
            i && i.classList.toggle('bg-gray-light'),
            !n)
          ) {
            t.setAttribute('data-loaded', 'true');
            const e = r(t, 'data-sub-dependency-url'),
              n = t.closest('.js-dependency'),
              o = await Q(document, e);
            n && n.after(o);
          }
        });
      let _s = null;
      function $s({ currentTarget: e }) {
        const t = e;
        if (t.hasAttribute('open')) {
          const e = t.querySelector('[autofocus]');
          e && e.focus();
        } else {
          const e = t.querySelector('summary');
          e && e.focus();
        }
      }
      function Ns({ currentTarget: e }) {
        const t = e;
        t.hasAttribute('open') ? (_s && _s !== t && _s.removeAttribute('open'), (_s = t)) : t === _s && (_s = null);
      }
      function Rs({ currentTarget: e }) {
        if (!(e instanceof Element)) return;
        const t = i(e, 'details'),
          n = r(t, 'data-deferred-details-content-url');
        t.removeAttribute('data-deferred-details-content-url'),
          (c(t, 'include-fragment, poll-include-fragment', o).src = n);
      }
      function Ds(e) {
        return Array.from(e.types).indexOf('Files') >= 0;
      }
      document.addEventListener('keydown', function (e) {
        !e.defaultPrevented && 'Escape' === e.key && _s && _s.removeAttribute('open');
      }),
        n('.js-dropdown-details', {
          subscribe: (e) => le(V(e, 'toggle', Ns), V(e, 'toggle', $s)),
        }),
        n('[data-deferred-details-content-url]:not([data-details-no-preload-on-hover])', {
          subscribe: (e) => {
            const t = c(e, 'summary');
            return V(t, 'mouseenter', Rs);
          },
        }),
        n('[data-deferred-details-content-url]', {
          subscribe: (e) => V(e, 'toggle', Rs),
        }),
        s('click', '[data-toggle-for]', function (e) {
          const t = e.currentTarget.getAttribute('data-toggle-for') || '',
            n = document.getElementById(t);
          n && (n.hasAttribute('open') ? n.removeAttribute('open') : n.setAttribute('open', 'open'));
        }),
        Ee(function ({ target: e }) {
          if (!e || e.closest('summary')) return;
          let t = e.parentElement;
          for (; t; )
            (t = t.closest('details')),
              t && (t.hasAttribute('open') || t.setAttribute('open', ''), (t = t.parentElement));
        }),
        n('.js-document-dropzone', {
          constructor: HTMLElement,
          add(e) {
            document.body.addEventListener('dragstart', zs),
              document.body.addEventListener('dragend', Ws),
              document.body.addEventListener('dragenter', Fs),
              document.body.addEventListener('dragover', Fs),
              document.body.addEventListener('dragleave', Bs),
              e.addEventListener('drop', Os);
          },
          remove(e) {
            document.body.removeEventListener('dragstart', zs),
              document.body.removeEventListener('dragend', Ws),
              document.body.removeEventListener('dragenter', Fs),
              document.body.removeEventListener('dragover', Fs),
              document.body.removeEventListener('dragleave', Bs),
              e.removeEventListener('drop', Os);
          },
        });
      let Ps = null;
      function Fs(e) {
        if (Us) return;
        const t = e.currentTarget;
        Ps && window.clearTimeout(Ps), (Ps = window.setTimeout(() => t.classList.remove('dragover'), 200));
        const n = e.dataTransfer;
        n && Ds(n) && ((n.dropEffect = 'copy'), t.classList.add('dragover'), e.stopPropagation(), e.preventDefault());
      }
      function Bs(e) {
        if (e.target instanceof Element && e.target.classList.contains('js-document-dropzone')) {
          e.currentTarget.classList.remove('dragover');
        }
      }
      function Os(e) {
        const t = e.currentTarget;
        t.classList.remove('dragover'), document.body.classList.remove('dragover');
        const n = e.dataTransfer;
        n &&
          Ds(n) &&
          (u(t, 'document:drop', {
            transfer: n,
          }),
          e.stopPropagation(),
          e.preventDefault());
      }
      let Us = !1;
      function zs() {
        Us = !0;
      }
      function Ws() {
        Us = !1;
      }
      async function Vs(e) {
        const t = e.getAttribute('data-url') || '';
        if (
          await (async function (e) {
            const t = e;
            if (!t) return !1;
            try {
              return (await ie(t)).has_gravatar;
            } catch (n) {
              return !1;
            }
          })(t)
        ) {
          const t = e.getAttribute('data-gravatar-text');
          null != t && (e.textContent = t);
        }
      }
      function Gs(e) {
        const t = Js();
        if (!t) return;
        Ks(e, t);
        const n = (function (e, t) {
          const n = (function (e, t) {
            const n = /^(diff-[0-9a-f]{32})(?:[L|R]\d+)?$/.exec(t);
            if (!n) return;
            const o = n[1],
              s = e.querySelector(`a[name='${o}']`);
            if (!s) return;
            const i = s.nextElementSibling;
            if (i && !i.querySelector('.js-diff-load-container')) return;
            return i;
          })(e, t);
          if (n) return n;
          return (function (e, t) {
            const n = /^(?:r|commitcomment-)(\d+)$/.exec(t);
            if (!n) return;
            const o = n[1],
              s = e.querySelector(`#diff-with-comment-${o}`);
            if (!s) return;
            return s.closest('.js-file');
          })(e, t);
        })(e, t);
        n && (ke(n), Xs(n));
      }
      function Js() {
        return window.location.hash.slice(1);
      }
      function Ks(e, t) {
        const n = ge(e.ownerDocument, t);
        n && e.contains(n) && ke(n);
      }
      function Xs(e) {
        const t = c(e, '.js-diff-entry-loader', o),
          n = c(e, '.js-diff-placeholder', Element),
          s = c(e, 'button.js-diff-load', HTMLButtonElement),
          i = c(e, '.js-button-text');
        n.setAttribute('fill', "url('#animated-diff-gradient')"),
          (i.textContent = s.getAttribute('data-disable-with') || ''),
          (s.disabled = !0);
        const r = new URL(t.getAttribute('data-fragment-url') || '', window.location.origin);
        return (t.src = r.toString()), t.data;
      }
      function Ys(e, t) {
        return a(document, '.js-details-container.open.Details--on').filter((n) => n.getAttribute(e) === t);
      }
      function Qs(e, t, n, o, s) {
        const i = c(document, '.js-file-filter'),
          r = new URL(window.location.href, window.location.origin);
        if (!e && !o) {
          if (t) return;
          return (r.search = ''), W(Se(), '', r.toString());
        }
        const a = c(i, '.js-file-filter-form', HTMLFormElement),
          l = new FormData(a),
          u = n.filter((e) => !l.getAll('file-filters[]').includes(e)),
          d = s.filter((e) => !l.getAll('owned-by[]').includes(e));
        for (const c of u) l.append('file-filters[]', c);
        for (const c of d) l.append('owned-by[]', c);
        const m = new URLSearchParams();
        for (const [c, f] of l.entries()) 'string' == typeof f && m.append(c, f);
        (m.has('file-filters[]') && '' !== m.toString()) || m.set('file-filters[]', ''),
          t && m.set('w', '1'),
          (r.search = m.toString()),
          W(Se(), '', r.toString());
      }
      function Zs(e) {
        var t;
        (t = e),
          c(document, '.js-file-filter-text', HTMLElement).classList.toggle('text-blue', t),
          (function (e) {
            const t = document.querySelector('.js-reset-filters'),
              n = document.querySelector('.js-commits-filtered');
            null == t || n || (t.hidden = !e);
          })(e),
          (function () {
            const e = ni(),
              t = ui();
            for (const s of e)
              if (t) {
                const e = '0' === r(s, 'data-non-deleted-files-count');
                s.disabled = e;
              } else s.disabled = !1;
            const n = document.querySelector('.js-deleted-files-container'),
              o = oi();
            if (o && n) {
              const t = (function (e) {
                const t = e.find((e) => e.checked && '0' !== r(e, 'data-deleted-files-count'));
                return Boolean(t);
              })(e);
              n.classList.toggle('text-gray', !t), (o.disabled = !t);
            }
          })(),
          (function () {
            const e = ci(),
              t = c(document, '.js-file-filter-select-all-container', HTMLElement),
              n = r(t, e ? 'data-select-all-markup' : 'data-all-selected-markup');
            (t.textContent = n), t.classList.toggle('text-gray', !e), t.classList.toggle('text-blue', e);
          })(),
          (function () {
            const e = document.querySelector('.js-deleted-files-container');
            if (e) {
              const t = ui() ? 'data-show-deleted-markup' : 'data-hide-deleted-markup',
                n = r(e, t);
              e.textContent = n;
            }
          })(),
          (function () {
            const e = a(document, '.js-file-type-count');
            for (const t of e) {
              const e = ui() ? 'data-non-deleted-file-count-markup' : 'data-all-file-count-markup',
                n = t.getAttribute(e);
              n && (t.textContent = n);
            }
          })(),
          Qs(e, li(), ti(), ri(), ai());
      }
      function ei(e) {
        !(function () {
          const e = oi(),
            t = ti(),
            n = a(document, '.js-file'),
            o = ai(),
            s = si();
          for (const i of n) {
            let n = !0;
            const r = i.getAttribute('data-file-type');
            if ((r && (n = t.includes(r)), s && n)) {
              i.hasAttribute('data-file-user-viewed') && (n = !s.checked);
            }
            if (o.length > 0 && n) {
              const e = (i.getAttribute('data-codeowners') || '').split(',');
              n = e.filter((e) => o.includes(e)).length > 0;
            }
            if (e && e.checked && n) {
              'true' === i.getAttribute('data-file-deleted') && (n = !1);
            }
            di(i, n);
          }
        })(),
          Zs(e);
      }
      function ti() {
        return ni()
          .filter((e) => e.checked)
          .map((e) => e.value);
      }
      function ni() {
        return a(document, '.js-diff-file-type-option', HTMLInputElement);
      }
      function oi() {
        const e = document.querySelector('.js-deleted-files-toggle');
        if (e instanceof HTMLInputElement) return e;
      }
      function si() {
        const e = document.querySelector('.js-viewed-files-toggle');
        if (e instanceof HTMLInputElement) return e;
      }
      function ii() {
        return ci() || ui() || ri();
      }
      function ri() {
        return ai().length > 0;
      }
      function ai() {
        return a(document, '.js-diff-owner-option', HTMLInputElement)
          .filter((e) => e.checked)
          .map((e) => e.value);
      }
      function ci() {
        return ti().length !== ni().length;
      }
      function li() {
        return new URLSearchParams(window.location.search).has('w');
      }
      function ui() {
        const e = oi();
        return !!e && e.checked;
      }
      function di(e, t) {
        const n = i(e, '.js-file.js-details-container');
        n.classList.toggle('open', t), n.classList.toggle('Details--on', t);
      }
      function mi(e) {
        const t = ni();
        for (const n of t) n.checked = e;
      }
      async function fi(e, t) {
        const n = await t.html();
        let o = e;
        const s = e.closest('[data-replace-remote-form-target]');
        if (s) {
          const e = s.getAttribute('data-replace-remote-form-target');
          o = e ? document.getElementById(e) : s;
        }
        o.replaceWith(n.html);
      }
      async function pi(e) {
        const t = e.currentTarget;
        if (t) {
          const e = i(t, '.timeline-comment-actions'),
            n = c(e, '.js-discussions-comment-actions-container'),
            o = r(n, 'data-comment-actions-url'),
            s = await Q(document, o);
          if (s && (n.replaceWith(s), n.hasAttribute('data-open-after-click'))) {
            const t = e.querySelector('.js-discussions-comment-actions-rendered-button');
            t && t.click();
          }
        }
      }
      function gi(e) {
        const t = e.currentTarget;
        if (t) {
          const e = i(t, '.timeline-comment-actions');
          c(e, '.js-discussions-comment-actions-container').setAttribute('data-open-after-click', '');
        }
      }
      function hi(e, t, n) {
        const o = document.getElementById(`${e}`).content.cloneNode(!0);
        if (n) {
          const e = Array.from(o.querySelectorAll('[data-replace-attribute]'));
          for (const t of e) {
            const e = r(t, 'data-replace-attribute'),
              o = r(t, 'data-replace-attribute-template');
            t.setAttribute(e, o.replace('$id', n));
          }
          (t.innerHTML = ''), t.appendChild(o);
        }
      }
      function ji(e) {
        const t = e.currentTarget;
        if (t) {
          new OptimisticReactionRenderer(t).render();
        }
      }
      n('.js-detect-gravatar', function (e) {
        Vs(e);
      }),
        n('.js-diff-progressive-container', function (e) {
          Gs(e);
          const t = e.querySelector('.js-diff-progressive-loader');
          t &&
            t.addEventListener('load', function () {
              Gs(e);
            });
        }),
        n('.js-diff-load-container', function (e) {
          const t = e.querySelector('.js-diff-entry-loader');
          t &&
            t.addEventListener('load', function () {
              i(e, '.js-file').classList.remove('hide-file-notes-toggle');
              const t = Js();
              t && Ks(e, t);
            });
        }),
        s('click', '.js-diff-load', function (e) {
          if (e.target.classList.contains('js-ignore-this')) return;
          Xs(i(e.currentTarget, '.js-diff-load-container'));
        }),
        s('click', '.js-rendered, .js-source', function (e) {
          const t = e.currentTarget;
          t.classList.contains('selected')
            ? e.preventDefault()
            : ((function (e) {
                const t = i(e, '.js-file-header'),
                  n = e.classList.contains('js-rendered'),
                  o = e.classList.contains('js-source'),
                  s = r(t, 'data-short-path'),
                  a = r(t, 'data-anchor'),
                  c = new URL(window.location.href, window.location.origin),
                  l = new URLSearchParams(c.search.slice(1));
                (c.hash = a), n ? l.set('short_path', s) : o && l.delete('short_path');
                (c.search = l.toString()), W(null, '', c.toString());
              })(t),
              (function (e) {
                for (const t of document.querySelectorAll('.js-rendered, .js-source'))
                  t.classList.remove('selected'), t.removeAttribute('aria-current');
                e.classList.add('selected'), e.setAttribute('aria-current', 'true');
              })(t));
        }),
        D('.js-prose-diff-toggle-form', async function (e, t) {
          const n = i(e, '.js-details-container'),
            o = c(n, '.js-file-content'),
            s = await t.html();
          for (; o.lastChild; ) o.removeChild(o.lastChild);
          o.append(s.html), n.classList.toggle('display-rich-diff'), n.classList.toggle('show-inline-notes');
        }),
        s('change', '.js-diff-style-toggle input', function (e) {
          if (!(e.target instanceof Element)) return;
          const t = i(e.target, '.js-diff-settings');
          for (const n of a(t, '.js-diff-style-toggle label')) n.classList.toggle('selected');
        }),
        s('click', '.js-toc-retry', function (e) {
          if (!(e.target instanceof Element)) return;
          const t = i(e.target, '.select-menu'),
            n = c(t, 'include-fragment'),
            o = r(n, 'src');
          n.setAttribute('src', ''), n.setAttribute('src', o);
        }),
        s('change', '.js-diff-file-type-option', function () {
          ei(ii());
        }),
        s('change', '.js-diff-owner-option', function () {
          ei(ri());
        }),
        s('click', '.js-file-filter-select-all', function () {
          ci() && (mi(!0), ei(ii()));
        }),
        s('change', '.js-deleted-files-toggle', function () {
          ei(ii());
        }),
        s('change', '.js-viewed-files-toggle', function () {
          ei(ii());
        }),
        n('.js-file-filter', function () {
          ii() ? Zs(!0) : Qs(!1, li(), ti(), ri(), ai());
        }),
        s('click', '.js-file-header .js-details-target', function ({ currentTarget: e }) {
          if (!document.querySelector('.js-file-filter')) return;
          const t = i(e, '.js-details-container'),
            n = (function (e) {
              const t = r(e, 'data-file-type'),
                n = Ys('data-file-type', t),
                o = a(document, '.js-diff-file-type-option', HTMLInputElement).find((e) => e.value === t);
              if (!o) return !1;
              const s = o.checked !== n.length > 0;
              return s && (o.checked = n.length > 0), s;
            })(t),
            o = oi();
          let s = !1;
          o &&
            (s = (function (e, t) {
              let n = !1;
              if ('true' === r(e, 'data-file-deleted')) {
                const e = Ys('data-file-deleted', 'true');
                (n = t.checked !== (0 === e.length)), n && (t.checked = 0 === e.length);
              }
              return n;
            })(t, o));
          const c = si();
          let l = !1;
          c &&
            (l = (function (e, t) {
              let n = !1;
              if ('true' === e.getAttribute('data-file-user-viewed')) {
                const e = Ys('data-file-user-viewed', 'true');
                (n = t.checked !== (0 === e.length)), n && (t.checked = 0 === e.length);
              }
              return n;
            })(t, c)),
            (n || s || l) && Zs(ii());
        }),
        n('.js-discussions-comment-actions-button', {
          subscribe: (e) =>
            le(
              V(e, 'mouseover', pi, {
                capture: !1,
                once: !0,
              }),
              V(e, 'click', gi, {
                capture: !1,
                once: !0,
              }),
            ),
        }),
        D('.js-discussion-comment-mark-answer', async function (e, t) {
          await fi(e, t), document.querySelector('.js-discussion').classList.add('answered');
        }),
        D('.js-discussion-comment-unmark-answer', async function (e, t) {
          await fi(e, t), document.querySelector('.js-discussion').classList.remove('answered');
        }),
        s('click', '.js-discussions-comment-edit-button', function (e) {
          !(function (e) {
            const t = i(e, '.js-comment'),
              n = c(t, '.js-discussions-markdown-toolbar-placeholder'),
              o = n.getAttribute('data-textarea-id');
            o &&
              (hi('js-discussions-markdown-toolbar-template', n, o),
              (function (e, t) {
                e.querySelector('markdown-toolbar[role="toolbar"]').setAttribute('for', t);
              })(n, o));
          })(e.currentTarget);
        }),
        n('.js-optimistic-reaction-render-button', {
          subscribe: (e) =>
            V(e, 'click', ji, {
              capture: !1,
              once: !0,
            }),
        });
      class OptimisticReactionRenderer {
        constructor(e) {
          this.clickedReactionButton = e;
        }
        render() {
          if (!this.isReactionAlreadyRendered) return this.addNewReactionGroup();
          this.isAddingReaction ? this.addReactionToGroup() : this.removeReactionFromGroup();
        }
        addReactionToGroup() {
          this.existingReactionGroupCountContainer &&
            this.existingReactionGroup &&
            this.existingReactionGroupCount &&
            (this.existingReactionGroup.classList.add('user-has-reacted'),
            this.existingReactionGroupCountContainer.replaceWith(`${this.existingReactionGroupCount + 1}`),
            this.addReactionToPopoverReactionButtons());
        }
        removeReactionFromGroup() {
          1 === this.existingReactionGroupCount && this.existingReactionGroup
            ? (this.existingReactionGroup.setAttribute('hidden', ''),
              this.removeReactionFromPopoverReactionButtons(),
              this.isUsingPrimerNext && this.existingReactionGroup.classList.remove('d-md-flex'))
            : this.existingReactionGroupCountContainer &&
              this.existingReactionGroup &&
              this.existingReactionGroupCount &&
              (this.existingReactionGroup.classList.remove('user-has-reacted'),
              this.existingReactionGroupCountContainer.replaceWith(`${this.existingReactionGroupCount - 1}`),
              this.removeReactionFromPopoverReactionButtons());
        }
        addNewReactionGroup() {
          const e = this.newEmojiButtonFromTemplate();
          this.newEmojiButtonTemplateContainer &&
            e &&
            this.commentReactionsContainer &&
            (this.nextButtonGroup
              ? this.reactionGroupsContainer.insertBefore(e, this.nextButtonGroup)
              : this.reactionGroupsContainer.append(e),
            e.classList.add(this.tooltipPositionClass),
            this.addReactionToPopoverReactionButtons(),
            this.commentReactionsContainer.classList.contains('d-md-none') &&
              (this.commentReactionsContainer.classList.add('has-reactions'),
              this.isUsingPrimerNext ||
                (this.commentReactionsContainer.classList.add('d-md-block'),
                this.commentReactionsContainer.classList.remove('d-md-none'))));
        }
        newEmojiButtonFromTemplate() {
          if (this.newEmojiButtonTemplateContainer) {
            const e = this.newEmojiButtonTemplateContainer.content.querySelector('.js-reaction-group-button');
            if (e) return e.cloneNode(!0);
          }
        }
        get nextButtonGroup() {
          if (void 0 !== this.newEmojiButtonFromTemplatePosition && null !== this.newEmojiButtonFromTemplatePosition) {
            const e = this.reactionGroupsContainer.children;
            for (const t of e) {
              if (Number(r(t, 'data-button-index-position')) > this.newEmojiButtonFromTemplatePosition) return t;
            }
          }
        }
        get commentContainer() {
          return i(this.clickedReactionButton, '.js-comment');
        }
        get buttonsContainer() {
          return c(this.commentContainer, '.js-reaction-buttons-container');
        }
        get reactionContent() {
          return r(this.clickedReactionButton, 'data-reaction-content');
        }
        get reactionGroup() {
          return this.buttonsContainer.querySelector(
            `.comment-reactions-options g-emoji[alias='${this.reactionContent}'`,
          );
        }
        get existingReactionGroup() {
          if (this.reactionGroup) return i(this.reactionGroup, '.js-reaction-group-button');
        }
        get existingReactionGroupCountContainer() {
          if (this.existingReactionGroup)
            return this.existingReactionGroup.querySelector('.js-discussion-reaction-group-count');
        }
        get newEmojiButtonTemplateContainer() {
          return document.getElementById(`emoji-reaction-button-template-${this.reactionContent}`);
        }
        get commentReactionsContainer() {
          return i(this.buttonsContainer, '.js-reaction-buttons-container');
        }
        get reactionGroupsContainer() {
          return c(this.buttonsContainer, '.js-comment-reactions-options');
        }
        get isReactionAlreadyRendered() {
          return !!this.reactionGroup;
        }
        get isAddingReaction() {
          if (this.existingReactionGroup) return !this.existingReactionGroup.classList.contains('user-has-reacted');
        }
        get existingReactionGroupCount() {
          if (this.existingReactionGroupCountContainer)
            return Number(this.existingReactionGroupCountContainer.innerHTML);
        }
        get newEmojiButtonFromTemplatePosition() {
          const e = this.newEmojiButtonFromTemplate();
          if (e) return Number(r(e, 'data-button-index-position'));
        }
        get tooltipPositionClass() {
          return this.buttonsContainer.querySelectorAll('button').length > 1 ? 'tooltipped-s' : 'tooltipped-se';
        }
        get isUsingPrimerNext() {
          return this.reactionGroupsContainer.classList.contains('js-use-primer-next');
        }
        addReactionToPopoverReactionButtons() {
          const e = this.commentContainer.querySelectorAll('.js-add-reaction-popover');
          for (const t of e) {
            c(t, `button[data-reaction-content="${this.reactionContent}"]`).classList.add(
              'border',
              'border-gray-dark',
              'bg-blue-light',
            );
          }
        }
        removeReactionFromPopoverReactionButtons() {
          const e = this.commentContainer.querySelectorAll('.js-add-reaction-popover');
          for (const t of e) {
            c(t, `button[data-reaction-content="${this.reactionContent}"]`).classList.remove(
              'border',
              'border-gray-dark',
              'bg-blue-light',
            );
          }
        }
      }
      s('click', '.js-discussions-previewable-comment-form', function (e) {
        !(function (e) {
          const t = i(e, '.js-comment'),
            n = c(t, '.js-discussions-previewable-comment-form-container'),
            o = n.getAttribute('data-parent-comment-id');
          o && hi('js-new-comment-template', n, o);
        })(e.currentTarget);
      });
      let bi,
        vi = class EmojiPickerElement extends HTMLElement {
          open() {
            this.hidden = !1;
            const e = this.querySelector('.js-emoji-picker-filter');
            e && e.focus(), document.addEventListener('keydown', Si);
          }
          close() {
            (this.hidden = !0), document.removeEventListener('keydown', Si);
          }
          disonnectedCallback() {
            document.removeEventListener('keydown', Si);
          }
          filter(e) {
            const t = e.currentTarget;
            this.emojiList.setAttribute('value', t.value);
            const n = yi(this);
            if (
              (n.classList.contains('js-emoji-picker-filter-tab-button') ||
                n.classList.add('emoji-picker-prior-selected-tab-button'),
              t.value)
            ) {
              (this.filterTabButton.hidden = !1),
                'true' === this.filterTabButton.getAttribute('aria-selected') ||
                  (this.filterTabButton.click(), t.focus());
            } else {
              this.filterTabButton.hidden = !0;
              const e = this.querySelector('.emoji-picker-prior-selected-tab-button');
              e && e.click();
            }
          }
        };
      function yi(e) {
        return c(e, '[role="tablist"] [role="tab"][aria-selected="true"]');
      }
      function Li(e) {
        const t = a(e, '[role="tablist"] [role="tab"]'),
          n = yi(e);
        return a(e, '[role="tabpanel"]', HTMLElement)[Array.from(t).indexOf(n)];
      }
      function wi(e) {
        const t = c(e, '.js-original-emoji-category'),
          n = c(e, '.js-original-emoji-category-tab', HTMLElement),
          o = yi(e),
          s = Li(e),
          i = e.querySelector('.js-originally-selected-emoji');
        if (i) {
          const t = e.querySelector('.selected-emoji');
          t && t.classList.remove('selected-emoji'), i.classList.add('selected-emoji');
        }
        o.removeAttribute('aria-selected'), t.setAttribute('aria-selected', 'true'), (s.hidden = !0), (n.hidden = !1);
      }
      function Ti(e) {
        const t = e.querySelector('.selected-emoji');
        t && t.classList.remove('selected-emoji');
      }
      function Ei(e) {
        const t = e.querySelector('.js-emoji-picker-filter'),
          n = c(e, '.js-emoji-picker-filter-tab-button'),
          o = c(e, '.js-emoji-picker-all-emoji');
        t instanceof HTMLInputElement && (t.value = ''), o.setAttribute('value', ''), (n.hidden = !0);
      }
      function ki(e) {
        e.classList.add('selected-emoji');
      }
      function Si(e) {
        if (!(e.target instanceof HTMLElement)) return;
        const t = e.target.closest('.js-emoji-picker');
        if (t && t instanceof HTMLElement && !t.hidden)
          switch (e.key) {
            case 'ArrowRight':
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'ArrowDown':
              e.preventDefault(),
                (function (e, t) {
                  const n = Li(e),
                    o = Array.from(n.querySelectorAll('.js-emoji-button')),
                    s = n.querySelector('.selected-emoji.js-emoji-button'),
                    i = (function (e) {
                      let t,
                        n = 0;
                      const o = e[0].getBoundingClientRect().top;
                      for (const s of e) {
                        if (((t = s.getBoundingClientRect()), o < t.top)) break;
                        n += 1;
                      }
                      return n;
                    })(o),
                    r = (function (e, t) {
                      const n = [[]];
                      let o = 0;
                      for (let s = 0; s < e.length; s++) {
                        const i = e[s];
                        s > 0 && s % t == 0 && ((o += 1), n.push([])), n[o].push(i);
                      }
                      return n;
                    })(o, i);
                  let a = 0,
                    c = 0;
                  if (s) {
                    const e = (function (e, t) {
                      let n = 0,
                        o = 0,
                        s = [],
                        i = -1;
                      for (let r = 0; r < e.length; r++) {
                        if (((s = e[r]), (i = s.indexOf(t)), i > -1)) {
                          o = i;
                          break;
                        }
                        n += 1;
                      }
                      return {
                        row: n,
                        col: o,
                      };
                    })(r, s);
                    switch (((a = e.row), (c = e.col), s.classList.remove('selected-emoji'), t)) {
                      case 'ArrowRight':
                        c += 1;
                        break;
                      case 'ArrowDown':
                        a += 1;
                        break;
                      case 'ArrowLeft':
                        c -= 1;
                        break;
                      case 'ArrowUp':
                        a -= 1;
                    }
                  }
                  const l = r.length - 1,
                    u = c > r[l].length - 1,
                    d = a === l;
                  a < 0 ? ((a = l), u && (a -= 1)) : (a > l || (d && u && 'ArrowDown' === t)) && (a = 0);
                  const m = r[a].length - 1;
                  c < 0 ? (c = m) : c > m && (c = 0);
                  const f = r[a][c];
                  ki(f), f.focus();
                })(t, e.key);
          }
      }
      function Mi(e) {
        const t = xi(e);
        !(async function (e) {
          const t = xi(e),
            n = r(e, 'data-url'),
            o = new URL(n, window.location.origin),
            s = c(t, '.js-discussion-spotlight-form', HTMLFormElement);
          let i;
          o.search += (o.search ? '&' : '') + U(s);
          try {
            i = await Q(document, o.toString());
          } catch (a) {
            return;
          }
          e.replaceWith(i);
        })(c(t, '.js-discussion-spotlight-preview'));
      }
      function xi(e) {
        return i(e, '.js-manage-discussion-spotlight-container');
      }
      function Ai(e) {
        const t = c(e, '.js-discussion-spotlight-original-emoji');
        c(e, '.js-discussion-spotlight-custom-emoji').innerHTML = t.innerHTML;
      }
      function Hi(e, t) {
        const n = document.querySelector('.js-site-favicon[type="image/svg+xml"]'),
          o = document.querySelector('.js-site-favicon[type="image/png"]');
        t || (t = 'light');
        const s = 'light' === t ? '' : '-dark';
        if (n && o)
          if ((null == bi && (bi = n.href), e)) {
            (e = `${(e = e.substr(0, e.lastIndexOf('.')))}${s}.svg`), (n.href = e);
            const t = n.href.substr(0, n.href.lastIndexOf('.'));
            o.href = `${t}.png`;
          } else {
            const e = n.href.indexOf('-dark.svg'),
              t = n.href.substr(0, -1 !== e ? e : n.href.lastIndexOf('.'));
            (n.href = `${t}${s}.svg`), (o.href = `${t}${s}.png`);
          }
      }
      function qi() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      function Ci() {
        Me(document) && xe(document);
      }
      No([Fo], vi.prototype, 'emojiList', void 0),
        No([Fo], vi.prototype, 'filterTabButton', void 0),
        (vi = No([Oo], vi)),
        s('change', '.js-discussion-spotlight-preview-trigger', function (e) {
          const t = e.currentTarget,
            n = i(t, 'form', HTMLFormElement),
            o = a(n, `input[name="${t.name}"]`, HTMLInputElement);
          for (const s of o) {
            const e = i(s, 'label');
            s.checked ? e.setAttribute('aria-selected', 'true') : e.setAttribute('aria-selected', 'false');
          }
          Mi(t);
        }),
        s('click', '.js-toggle-manage-discussion-spotlight', function (e) {
          const t = xi(e.currentTarget);
          e.target instanceof HTMLElement &&
            (function (e, t) {
              !(function (e) {
                return c(e, '.js-discussion-spotlight-details').hasAttribute('open');
              })(e)
                ? (function (e, t) {
                    Ai(e),
                      (function (e, t) {
                        const n = e.querySelector('.js-discussion-spotlight-emoji-picker');
                        if (!(n instanceof window.IncludeFragmentElement)) return;
                        const o = r(n, 'data-url');
                        if (t) {
                          const e = new URL(o, window.location.origin),
                            t = new URLSearchParams(e.search.slice(1));
                          t.append('show_picker', '1'), (e.search = t.toString());
                        }
                        n.setAttribute('src', o.toString());
                      })(e, t);
                  })(e, t)
                : (function (e) {
                    Ai(e),
                      (function (e) {
                        const t = e.querySelector('.js-emoji-picker');
                        t && (wi(t), Ei(t), t.close());
                      })(e);
                  })(e);
            })(t, !!e.target.closest('.js-toggle-discussion-spotlight-emoji-picker'));
        }),
        s('click', '.js-toggle-discussion-spotlight-emoji-picker', function (e) {
          if (!(e.currentTarget instanceof HTMLElement)) return;
          const t = xi(e.currentTarget).querySelector('.js-emoji-picker');
          t instanceof HTMLElement && t.hidden && setTimeout(() => t.open(), 50);
        }),
        s('click', '.js-discussion-spotlight-emoji-button', function (e) {
          const t = e.currentTarget;
          t instanceof HTMLButtonElement &&
            (function (e) {
              const t = i(e, '.js-manage-discussion-spotlight-container'),
                n = t.querySelector('.js-emoji-picker');
              (function (e, t) {
                const n = c(e, '.js-discussion-spotlight-emoji-field', HTMLInputElement);
                (n.value = t.value), Mi(n);
              })(t, e),
                Ti(t),
                ki(e),
                (function (e, t) {
                  c(e, '.js-discussion-spotlight-custom-emoji').innerHTML = t.innerHTML;
                })(t, e),
                n.close();
            })(t);
        }),
        n('[data-favicon-override]', {
          add(e) {
            const t = r(e, 'data-favicon-override');
            setTimeout(() => Hi(t, qi() ? 'dark' : 'light'));
          },
          remove() {
            null != bi && Hi(bi, qi() ? 'dark' : 'light');
          },
        }),
        qi() && Hi(void 0, 'dark'),
        window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
          Hi(void 0, qi() ? 'dark' : 'light');
        }),
        Ee(Ci),
        s('click', 'a[href^="#"]', function (e) {
          const { currentTarget: t } = e;
          t instanceof HTMLAnchorElement && setTimeout(Ci, 0);
        });
      const Ii = ['flash-notice', 'flash-error', 'flash-message', 'flash-warn'];
      function _i(e, t, n) {
        let o;
        try {
          o = atob(decodeURIComponent(n));
        } catch (r) {
          return;
        }
        const s = e.content.cloneNode(!0),
          i = s.querySelector('.js-flash-template-container');
        i.classList.add(t), (i.querySelector('.js-flash-template-message').textContent = o), e.after(s);
      }
      n('template.js-flash-template', {
        constructor: HTMLTemplateElement,
        add(e) {
          !(function (e) {
            for (const { key: t, value: n } of Ii.flatMap(ks)) Ms(t), _i(e, t, n);
          })(e);
        },
      }),
        D('.js-form-toggle-target', async function (e, t) {
          await t.text();
          const n = i(e, '.js-form-toggle-container');
          (c(n, '.js-form-toggle-target[hidden]').hidden = !1), (e.hidden = !0);
        });
      class Theme {
        constructor(e) {
          (this.name = e.getAttribute('data-theme-name') || ''),
            (this.slug = e.getAttribute('data-theme-slug') || ''),
            (this.gem = e.getAttribute('data-theme-gem') || ''),
            (this.selected = e.classList.contains('selected')),
            (this.baseHref = e.getAttribute('href') || '');
        }
      }
      class ThemePicker {
        constructor() {
          (this.pagePreview = c(document, '#page-preview')),
            (this.contextLoader = c(document, '.theme-picker-spinner')),
            (this.fullPicker = c(document, '.theme-picker-thumbs')),
            (this.miniPicker = c(document, '.theme-picker-controls')),
            (this.scrollBackwardsLink = c(document, '.theme-toggle-full-left', HTMLButtonElement)),
            (this.scrollForwardsLink = c(document, '.theme-toggle-full-right', HTMLButtonElement)),
            (this.themeLinksContainer = c(this.fullPicker, '.js-theme-selector')),
            (this.themeLinks = a(this.themeLinksContainer, '.theme-selector-thumbnail')),
            (this.themes = this.themeLinks.map((e) => {
              const t = new Theme(e);
              return t.selected && (this.selectedTheme = t), t;
            })),
            (this.scrolledPage = 0),
            (this.selectedTheme = this.selectedTheme || this.themes[0]),
            this.pagePreview.addEventListener('load', () => this.onPagePreviewLoad()),
            this.scrollBackwardsLink.addEventListener('click', () => this.scrollThemeLinksContainer(-1)),
            this.scrollForwardsLink.addEventListener('click', () => this.scrollThemeLinksContainer(1)),
            c(document, '.theme-picker-prev').addEventListener('click', (e) => this.onThemeNavPrevClick(e)),
            c(document, '.theme-picker-next').addEventListener('click', (e) => this.onThemeNavNextClick(e));
          for (const t of this.themeLinks) t.addEventListener('click', (e) => this.onThemeLinkClick(e));
          c(document, '.theme-picker-view-toggle').addEventListener('click', (e) => this.onHideClick(e));
          const e = document.querySelector('#page-edit');
          e && e.addEventListener('click', (e) => this.onEditClick(e)),
            c(document, '#page-publish').addEventListener('click', (e) => this.onPublishClick(e)),
            this.theme(this.selectedTheme),
            this.updateScrollLinks();
        }
        onPagePreviewLoad() {
          this.contextLoader.classList.remove('visible');
        }
        onThemeNavPrevClick(e) {
          this.theme(this.prevTheme()), e.preventDefault();
        }
        onThemeNavNextClick(e) {
          this.theme(this.nextTheme()), e.preventDefault();
        }
        onThemeLinkClick(e) {
          this.theme(this.themeForLink(e.currentTarget)), e.preventDefault();
        }
        onHideClick(e) {
          const t = e.currentTarget;
          this.fullPicker.classList.toggle('d-none'),
            this.miniPicker.classList.toggle('d-none'),
            this.scrollToTheme(this.theme(), !1),
            t.classList.toggle('open');
        }
        onEditClick(e) {
          P(c(document, '#page-edit-form', HTMLFormElement)), e.preventDefault();
        }
        onPublishClick(e) {
          const t = c(document, '#page-publish-form', HTMLFormElement),
            n = this.theme();
          n && (c(document, 'input[name="page[theme_slug]"]', HTMLInputElement).value = n.slug),
            P(t),
            e.preventDefault();
        }
        scrollThemeLinksContainer(e) {
          this.scrollToTheme(this.themes[e < 0 ? 0 : 6]), this.updateScrollLinks();
        }
        updateScrollLinks() {
          const e = 0 === this.scrolledPage;
          (this.scrollBackwardsLink.disabled = e),
            this.scrollBackwardsLink.classList.toggle('disabled', e),
            (this.scrollForwardsLink.disabled = !e),
            this.scrollForwardsLink.classList.toggle('disabled', !e);
        }
        selectedThemeIndex() {
          return this.themes.indexOf(this.selectedTheme);
        }
        prevTheme() {
          let e = (this.selectedThemeIndex() - 1) % this.themes.length;
          return e < 0 && (e += this.themes.length), this.themes[e];
        }
        nextTheme() {
          return this.themes[(this.selectedThemeIndex() + 1) % this.themes.length];
        }
        themeForLink(e) {
          return this.themes[this.themeLinks.indexOf(e)];
        }
        linkForTheme(e) {
          return this.themeLinks[this.themes.indexOf(e)];
        }
        scrollToTheme(e, t = !0) {
          this.scrolledPage = Math.floor(this.themes.indexOf(e) / 6);
          let n = 0;
          if (this.scrolledPage > 0) {
            const e = this.linkForTheme(this.themes[6 * this.scrolledPage]);
            n = e.offsetLeft;
          }
          const o = this.themeLinksContainer,
            s = n - o.scrollLeft;
          if (t && 0 !== s) {
            const e = 150;
            !(function (e) {
              new Promise((t) => {
                let n = performance.now();
                !(function o() {
                  window.requestAnimationFrame((s) => {
                    !1 !== e(s - n) ? ((n = s), o()) : t();
                  });
                })();
              });
            })((t) => {
              if (t < 0) return;
              const i = o.scrollLeft;
              return (o.scrollLeft = Math[n - i > 0 ? 'min' : 'max'](i + s * (t / e), n)), i !== o.scrollLeft && void 0;
            });
          } else o.scrollLeft = n;
        }
        theme(e) {
          if (!e) return this.selectedTheme;
          (this.selectedTheme = e), this.showPreviewFor(e);
          for (const t of this.themeLinks) t.classList.remove('selected');
          this.linkForTheme(e).classList.add('selected'),
            this.scrollToTheme(e),
            (c(this.miniPicker, '.js-theme-name').textContent = e.name);
        }
        showPreviewFor(e) {
          if ((this.contextLoader.classList.add('visible'), e.gem)) this.pagePreview.setAttribute('src', e.baseHref);
          else {
            const t = c(this.fullPicker, 'form', HTMLFormElement);
            (c(document, 'input[name="theme_slug"]', HTMLInputElement).value = e.slug), P(t);
          }
        }
      }
      function $i() {
        return /Windows/.test(navigator.userAgent) ? 'windows' : /Macintosh/.test(navigator.userAgent) ? 'mac' : null;
      }
      function Ni(e) {
        const t = (e.getAttribute('data-platforms') || '').split(','),
          n = $i();
        return Boolean(n && t.includes(n));
      }
      n('#theme-picker-wrap', function () {
        new ThemePicker();
      }),
        n('.js-remove-unless-platform', function (e) {
          Ni(e) || e.remove();
        }),
        n('.js-show-for-platform', {
          constructor: HTMLElement,
          add(e) {
            Ni(e) && (e.hidden = !1);
          },
        }),
        n('.js-hide-for-platform', {
          constructor: HTMLElement,
          add(e) {
            Ni(e) && (e.hidden = !0);
          },
        });
      let Ri = class GetRepoElement extends HTMLElement {
        showDownloadMessage(e) {
          const t = this.findPlatform(e);
          t && this.showPlatform(t);
        }
        async showCodespaces(e) {
          const t = this.findPlatform(e);
          t &&
            (this.showPlatform(t),
            (this.codespaceList.hidden = !0),
            (this.codespaceLoadingMenu.hidden = !1),
            await Z(this.codespaceList),
            (this.codespaceLoadingMenu.hidden = !0));
        }
        onDetailsToggle() {
          this.modal.hidden = !1;
          for (const e of this.platforms) e.hidden = !0;
        }
        showPlatform(e) {
          this.modal.hidden = !0;
          for (const t of this.platforms) t.getAttribute('data-platform') === e && (t.hidden = !1);
        }
        findPlatform(e) {
          return e.currentTarget.getAttribute('data-open-app') || $i();
        }
      };
      No([Fo], Ri.prototype, 'modal', void 0),
        No([Fo], Ri.prototype, 'codespaceLoadingMenu', void 0),
        No([Fo], Ri.prototype, 'codespaceList', void 0),
        No([Bo], Ri.prototype, 'platforms', void 0),
        (Ri = No([Oo], Ri)),
        s('click', '.email-hidden-toggle', function (e) {
          const t = e.currentTarget.nextElementSibling;
          t instanceof HTMLElement && ((t.style.display = ''), t.classList.toggle('expanded'), e.preventDefault());
        });
      let Di = class GitCloneHelpElement extends HTMLElement {
        updateURL(e) {
          const t = e.currentTarget,
            n = t.getAttribute('data-url') || '';
          if (((this.helpField.value = n), t.matches('.js-git-protocol-clone-url')))
            for (const o of this.helpTexts) o.textContent = n;
          for (const o of this.cloneURLButtons) o.classList.remove('selected');
          t.classList.add('selected');
        }
      };
      function Pi(e) {
        try {
          return sessionStorage.getItem(e);
        } catch (t) {
          return null;
        }
      }
      function Fi(e, t) {
        try {
          sessionStorage.setItem(e, t);
        } catch (n) {}
      }
      function Bi(e) {
        try {
          sessionStorage.removeItem(e);
        } catch (t) {}
      }
      function Oi(e) {
        const t = document.querySelectorAll(e);
        if (t.length > 0) return t[t.length - 1];
      }
      function Ui() {
        return `${window.location.protocol}//${window.location.host}${
          (function () {
            const e = Oi('meta[name=analytics-location]');
            return e ? e.content : window.location.pathname;
          })() +
          (function () {
            let e = '';
            Oi('meta[name=analytics-location-query-strip]') || (e = window.location.search);
            const t = Oi('meta[name=analytics-location-params]');
            t && (e += (e ? '&' : '?') + t.content);
            for (const n of document.querySelectorAll('meta[name=analytics-param-rename]')) {
              const t = n.content.split(':', 2);
              e = e.replace(new RegExp(`(^|[?&])${t[0]}($|=)`, 'g'), `$1${t[1]}$2`);
            }
            return e;
          })()
        }`;
      }
      function zi() {
        He(Ui()), qe(Oi('meta[name=analytics-location]') ? '(masked)' : document.title);
        const e = document.querySelector('meta[name=analytics-ec-payload]');
        e instanceof HTMLMetaElement && Wi(e.content);
        const t = Pi('ga-deferred');
        t && (Wi(t), Bi('ga-deferred'));
        for (const n of a(document, 'meta.js-ga-set', HTMLMetaElement)) Ce(n.name, n.content);
      }
      function Wi(e) {
        if (e) for (const t of JSON.parse(e)) window.ga.apply(null, t);
      }
      function Vi() {
        for (const e of document.querySelectorAll('meta[name=analytics-virtual-pageview]'))
          e instanceof HTMLMetaElement &&
            Ie(e.content, {
              title: '',
            });
        Ie();
      }
      function Gi(e) {
        const [t, n, o, s] = e.trim().split(/\s*,\s*/);
        return s
          ? {
              category: t,
              action: n,
              label: o,
              value: Number(s),
            }
          : {
              category: t,
              action: n,
              label: o,
            };
      }
      No([Fo], Di.prototype, 'helpField', void 0),
        No([Bo], Di.prototype, 'helpTexts', void 0),
        No([Bo], Di.prototype, 'cloneURLButtons', void 0),
        (Di = No([Oo], Di)),
        Ae('octolyticsPlugin', function (e) {
          const t = e.get('sendHitTask');
          e.set('sendHitTask', function (e) {
            if ((t(e), 'event' === e.get('hitType') && window._octo && '' !== window._octo.host)) {
              const t = `//${window._octo.host}/collect`,
                n = new Blob([e.get('hitPayload')], {
                  type: 'application/x-www-form-urlencoded',
                });
              navigator.sendBeacon && navigator.sendBeacon(t, n);
            }
          });
        });
      const Ji = document.querySelector('meta[name=google-analytics]');
      Ji instanceof HTMLMetaElement && (_e(Ji.content, 'auto'), $e('octolyticsPlugin'), $e('ec'), zi()),
        (async function () {
          await B, Vi();
        })(),
        document.addEventListener(
          'pjax:complete',
          () => {
            setTimeout(() => {
              zi(), Vi();
            }, 20);
          },
          !1,
        ),
        n('[data-ga-load]', function (e) {
          const t = Gi(e.getAttribute('data-ga-load') || '');
          (t.interactive = !1), Ne(t);
        }),
        n('meta[name=analytics-event]', {
          constructor: HTMLMetaElement,
          initialize(e) {
            const t = Gi(e.content);
            (t.interactive = !1), Ne(t);
          },
        }),
        s(
          'click',
          '[data-ga-click]',
          function (e) {
            Wi(e.currentTarget.getAttribute('data-ga-ec') || '');
            const t = Gi(e.currentTarget.getAttribute('data-ga-click') || '');
            Ne(t);
          },
          {
            capture: !0,
          },
        ),
        s(
          'click',
          '[data-ga-deferred]',
          function (e) {
            Fi('ga-deferred', e.currentTarget.getAttribute('data-ga-deferred') || '');
          },
          {
            capture: !0,
          },
        ),
        s(
          'change',
          '[data-ga-change]',
          function (e) {
            Wi(e.currentTarget.getAttribute('data-ga-ec') || '');
            const t = Gi(e.currentTarget.getAttribute('data-ga-change') || '');
            Ne(t);
          },
          {
            capture: !0,
          },
        ),
        s('click', '.js-skip-to-content', function (e) {
          const t = document.getElementById('start-of-content');
          if (t) {
            const e = t.nextElementSibling;
            e instanceof HTMLElement && (e.setAttribute('tabindex', '-1'), e.focus());
          }
          e.preventDefault();
        });
      const Ki = 'ontouchstart' in document;
      for (const t of document.querySelectorAll('.HeaderMenu-details'))
        t.addEventListener('toggle', Yi),
          Ki || (t.addEventListener('mouseover', Qi), t.addEventListener('mouseleave', Qi));
      let Xi = !1;
      function Yi(e) {
        if (!Xi) {
          Xi = !0;
          for (const t of document.querySelectorAll('.HeaderMenu-details'))
            t !== e.currentTarget && t.removeAttribute('open');
          setTimeout(() => (Xi = !1));
        }
      }
      function Qi(e) {
        const { currentTarget: t } = e;
        t instanceof HTMLElement &&
          window.innerWidth > 1012 &&
          ('mouseover' === e.type && e instanceof MouseEvent
            ? e.target instanceof Node &&
              e.relatedTarget instanceof Node &&
              t.contains(e.target) &&
              !t.contains(e.relatedTarget) &&
              t.setAttribute('open', '')
            : t.removeAttribute('open'));
      }
      s('click', '.js-video-play, .js-video-close', function (e) {
        e.preventDefault();
        const t = e.currentTarget,
          n = t.classList.contains('js-video-play'),
          o = i(t, '.js-video-container'),
          s = c(o, '.js-video-iframe', HTMLIFrameElement),
          r = document.querySelector('.js-video-bg');
        n ? (s.src = s.getAttribute('data-src') || '') : s.removeAttribute('src'),
          o.classList.toggle('is-expanded', n),
          null != r && r.classList.toggle('is-expanded', n),
          (function (e, t = 0) {
            const n = e.getBoundingClientRect(),
              o = n.top - t,
              s = n.bottom - window.innerHeight + t;
            o < 0 ? window.scrollBy(0, o) : s > 0 && window.scrollBy(0, s);
          })(s, 20);
      });
      const Zi = document.querySelector('.js-hovercard-content'),
        er = ne(Q);
      let tr,
        nr,
        or = null,
        sr = 0;
      function ir(e) {
        return 'Popover-message--' + e;
      }
      function rr() {
        Zi instanceof HTMLElement &&
          ((Zi.style.display = 'none'), (Zi.children[0].innerHTML = ''), (or = null), (tr = null));
      }
      function ar(e) {
        if (!(Zi instanceof HTMLElement))
          throw new Error('invariant violation, cardContentContainer is not HTMLElement');
        const { width: t, height: n } = Zi.getBoundingClientRect(),
          { left: o, top: s, height: i, width: r } = (function (e) {
            const t = e.getClientRects();
            let n = t[0] || {
              top: 0,
              left: 0,
              height: 0,
              width: 0,
            };
            for (const o of t)
              if (o.left < sr && o.right > sr) {
                n = o;
                break;
              }
            return n;
          })(e),
          a = s > n;
        if (e.classList.contains('js-hovercard-left')) {
          const e = s + i / 2;
          return {
            containerTop: a ? e - n + 17 + 8 : e - 17 - 8,
            containerLeft: o - t - 12,
            contentClassSuffix: a ? 'right-bottom' : 'right-top',
          };
        }
        {
          const e = window.innerWidth - o > t,
            c = o + r / 2;
          return {
            containerTop: a ? s - n - 12 : s + i + 12,
            containerLeft: e ? c - 24 : c - t + 24,
            contentClassSuffix: a ? (e ? 'bottom-left' : 'bottom-right') : e ? 'top-left' : 'top-right',
          };
        }
      }
      function cr(e, t) {
        if (!(Zi instanceof HTMLElement)) return;
        const n = Zi.children[0];
        n.innerHTML = '';
        const o = document.createElement('div');
        for (const s of e.children) o.appendChild(s.cloneNode(!0));
        n.appendChild(o),
          (function (e, t) {
            if (!(Zi instanceof HTMLElement)) return;
            (Zi.style.visibility = 'hidden'),
              (Zi.style.display = 'block'),
              t.classList.remove(
                ir('bottom-left'),
                ir('bottom-right'),
                ir('right-top'),
                ir('right-bottom'),
                ir('top-left'),
                ir('top-right'),
              );
            const { containerTop: n, containerLeft: o, contentClassSuffix: s } = ar(e);
            t.classList.add(ir(s)),
              (Zi.style.top = `${n + window.pageYOffset}px`),
              (Zi.style.left = `${o + window.pageXOffset}px`),
              (function (e, t) {
                const n = e.getAttribute('data-hovercard-z-index-override');
                t.style.zIndex = n || '100';
              })(e, Zi),
              (Zi.style.visibility = '');
          })(t, n),
          (function (e) {
            setTimeout(() => {
              if (document.body && document.body.contains(e)) {
                const t = e.querySelector('[data-hovercard-tracking]');
                if (t) {
                  const e = t.getAttribute('data-hovercard-tracking');
                  if (e) {
                    const t = {
                      event_type: 'user-hovercard-load',
                    };
                    (t.dimensions = JSON.parse(e)), xs(t);
                  }
                }
                const n = e.querySelector('[data-hydro-view]');
                n instanceof HTMLElement && Re(n);
              }
            }, 500);
          })(o),
          (Zi.style.display = 'block');
      }
      function lr(e) {
        const t = e.getAttribute('data-hovercard-url');
        if (t) {
          const n = (function (e) {
            const t = e.closest('[data-hovercard-subject-tag]');
            if (t) return t.getAttribute('data-hovercard-subject-tag');
            const n = document.head && document.head.querySelector('meta[name="hovercard-subject-tag"]');
            return n ? n.getAttribute('content') : null;
          })(e);
          if (n) {
            const e = new URL(t, window.location.origin),
              o = new URLSearchParams(e.search.slice(1));
            return (
              o.append('subject', n),
              o.append('current_path', window.location.pathname + window.location.search),
              (e.search = o.toString()),
              e.toString()
            );
          }
          return t;
        }
        return '';
      }
      function ur(e) {
        !(async function (e, t) {
          const n = e.currentTarget;
          if ((e instanceof MouseEvent && (sr = e.clientX), !(n instanceof Element))) return;
          if (tr === n) return;
          if (n.closest('.js-hovercard-content')) return;
          if (
            !(function (e) {
              const t = e.getAttribute('data-hovercard-type');
              return 'pull_request' === t || 'issue' === t
                ? !!e.closest('[data-issue-and-pr-hovercards-enabled]')
                : 'team' === t
                ? !!e.closest('[data-team-hovercards-enabled]')
                : 'repository' === t
                ? !!e.closest('[data-repository-hovercards-enabled]')
                : 'commit' === t
                ? !!e.closest('[data-commit-hovercards-enabled]')
                : 'project' === t
                ? !!e.closest('[data-project-hovercards-enabled]')
                : 'discussion' === t
                ? !!e.closest('[data-discussion-hovercards-enabled]')
                : 'acv_badge' !== t || !!e.closest('[data-acv-badge-hovercards-enabled]');
            })(n)
          )
            return;
          rr(), (tr = n), (or = document.activeElement);
          const o = lr(n);
          let s;
          try {
            const e = new Promise((e) => window.setTimeout(e, t, 0));
            (s = await er(document, o)), await e;
          } catch (i) {
            const e = i.response;
            if (e && 404 === e.status) {
              const e = 'Hovercard is unavailable';
              n.setAttribute('aria-label', e), n.classList.add('tooltipped', 'tooltipped-ne');
            } else if (e && 410 === e.status) {
              const t = await e.clone().json();
              n.setAttribute('aria-label', t.message), n.classList.add('tooltipped', 'tooltipped-ne');
            }
            return;
          }
          n === tr && (cr(s, n), e instanceof KeyboardEvent && Zi instanceof HTMLElement && Zi.focus());
        })(e, 250);
      }
      function dr(e) {
        if (tr) {
          if (e instanceof MouseEvent && e.relatedTarget instanceof HTMLElement) {
            const t = e.relatedTarget;
            if (t.closest('.js-hovercard-content') || t.closest('[data-hovercard-url]')) return;
          } else e instanceof KeyboardEvent && or instanceof HTMLElement && or.focus();
          rr();
        }
      }
      function mr(e) {
        const t = tr;
        nr = window.setTimeout(() => {
          tr === t && dr(e);
        }, 100);
      }
      function fr(e) {
        if (e instanceof KeyboardEvent)
          switch (e.key) {
            case 'Escape':
              dr(e);
          }
      }
      function pr() {
        nr && clearTimeout(nr);
      }
      function gr() {
        return c(document, 'input.js-edit-integration-setup-url', HTMLInputElement);
      }
      function hr() {
        return c(document, '.js-help-text-for-redirect-on-update');
      }
      function jr(e) {
        e &&
          ((function () {
            const e = i(gr(), '.form-group');
            return c(e, '.js-setup-url-hint');
          })().textContent = e);
      }
      function br() {
        const e = document.getElementById('js-update-integration-permissions');
        e && e.removeAttribute('disabled');
      }
      function vr() {
        return (function () {
          const e = a(
            document,
            '[id^=integration_permission_]:checked:not([data-permission="none"])',
            HTMLInputElement,
          );
          return Array.from(e, (e) => e.getAttribute('data-resource'));
        })()
          .map((e) =>
            (function (e) {
              if (e) return a(document, `.js-integration-hook-event[data-resource~="${e}"]:checked`, HTMLInputElement);
            })(e),
          )
          .reduce((e, t) => e.concat(t, []), []);
      }
      function yr(e = !1) {
        const t = c(
            document,
            '.js-integration-permissions-selector [id=integration_permission_metadata_read]',
            HTMLInputElement,
          ),
          n = i(t, '.js-list-group-item');
        e && K(t, !0), (c(n, '.js-mandatory-label').hidden = !e);
        for (const o of a(n, 'input', HTMLInputElement)) o !== t && (o.disabled = e);
      }
      function Lr() {
        const e = c(document, '.js-content-references input', HTMLInputElement),
          t = c(document, '.js-content-references template', HTMLTemplateElement),
          n = c(document, '.js-content-references-domain-list'),
          o = e.value;
        if (!o) return;
        const s = t.content.cloneNode(!0);
        s instanceof DocumentFragment &&
          ((c(s, 'input', HTMLInputElement).value = o),
          (c(s, '.js-content-references-domain-url').textContent = o),
          (e.value = ''),
          n.appendChild(s),
          (i(n, '.Box').hidden = !1),
          br());
      }
      async function wr(e) {
        const t = e.currentTarget,
          n = t.getAttribute('data-url');
        if (
          !n ||
          (function (e) {
            switch (e.getAttribute('data-hovercard-type')) {
              case 'issue':
              case 'pull_request':
                return !!e.closest('[data-issue-and-pr-hovercards-enabled]');
              case 'discussion':
                return !!e.closest('[data-discussion-hovercards-enabled]');
              default:
                return !1;
            }
          })(t)
        )
          return;
        const o = t.getAttribute('data-id') || '',
          s = t.textContent,
          i = document.querySelectorAll(`.js-issue-link[data-id='${o}']`);
        for (const a of i) a.removeAttribute('data-url');
        try {
          Tr(i, `${s}, ${(await ie(n)).title}`);
        } catch (r) {
          const e = (null != r.response ? r.response.status : void 0) || 500;
          Tr(
            i,
            (() => {
              switch (e) {
                case 404:
                  return t.getAttribute('data-permission-text');
                default:
                  return t.getAttribute('data-error-text');
              }
            })() || '',
          );
        }
      }
      function Tr(e, t) {
        for (const n of e)
          n instanceof HTMLElement && (n.classList.add('tooltipped', 'tooltipped-ne'), n.setAttribute('aria-label', t));
      }
      async function Er() {
        return (await t.import('./randomColor.js')).default();
      }
      function kr(e, t) {
        const n = (function (e) {
          const t = 'string' == typeof e ? parseInt(e.replace('#', ''), 16) : e;
          return +((299 * ((t >> 16) & 255) + 587 * ((t >> 8) & 255) + 114 * (255 & t)) / 1e3 / 255).toFixed(2);
        })(t);
        null != n &&
          (n <= 0.55
            ? (e.classList.remove('text-gray-dark'), e.classList.add('text-white'))
            : (e.classList.remove('text-white'), e.classList.add('text-gray-dark')));
      }
      function Sr(e, t) {
        let n = t;
        '#' !== n.charAt(0) && (n = `#${n}`), (e.style.backgroundColor = n);
        const o = e.querySelector('.js-new-label-color-icon');
        o && kr(o, t);
      }
      function Mr(e, t) {
        e.blur();
        const n = i(e, 'form'),
          o = c(n, '.js-new-label-color-input', HTMLInputElement);
        K(o, t), Sr(c(n, '.js-new-label-color', HTMLButtonElement), t);
      }
      function xr(e, t, n) {
        const o = t.querySelector(e);
        o &&
          (n
            ? (function (e, t) {
                i(e, '.js-label-error-container').classList.add('errored'), (e.textContent = t), (e.hidden = !1);
              })(o, n[0])
            : (function (e) {
                i(e, '.js-label-error-container').classList.remove('errored'), (e.hidden = !0);
              })(o));
      }
      function Ar(e, t) {
        xr('.js-label-name-error', e, t.name),
          xr('.js-label-description-error', e, t.description),
          xr('.js-label-color-error', e, t.color);
      }
      function Hr(e) {
        xr('.js-label-name-error', e, null),
          xr('.js-label-description-error', e, null),
          xr('.js-label-color-error', e, null);
      }
      async function qr(e) {
        const t = e.closest('.js-label-preview-container');
        if (!t) return;
        const n = i(e, '.js-label-form', HTMLFormElement),
          o = n.querySelector('.js-new-label-error'),
          s = n.getAttribute('data-label-id'),
          a = c(t, '.js-label-preview', HTMLElement),
          l = (function (e, t) {
            let n = c(e, '.js-new-label-name-input', HTMLInputElement).value.trim();
            return n.length < 1 && (n = r(t, 'data-default-name')), n;
          })(n, a),
          u = (function (e) {
            const t = c(e, '.js-new-label-color-input', HTMLInputElement);
            return t.checkValidity() ? t.value.trim().replace(/^#/, '') : 'ededed';
          })(n),
          d = (function (e) {
            let t = null;
            const n = e.querySelector('.js-new-label-description-input');
            return n instanceof HTMLInputElement && n.value.trim().length > 0 && (t = n.value.trim()), t;
          })(n),
          m = (function (e, t, n, o, s) {
            const i = new URL(`${e}${encodeURIComponent(t)}`, window.location.origin),
              r = new URLSearchParams(i.search.slice(1));
            return (
              r.append('color', n),
              o && r.append('description', o),
              s && r.append('id', s),
              (i.search = r.toString()),
              i.toString()
            );
          })(r(a, 'data-url-template'), l, u, d, s);
        if (t.hasAttribute('data-last-preview-url')) {
          if (m === r(t, 'data-last-preview-url')) return;
        }
        let f;
        try {
          f = await Q(document, m);
        } catch (p) {
          const e = await p.response.json();
          return Ar(n, e), void (o && ((o.textContent = e.message), (o.hidden = !1)));
        }
        o && ((o.textContent = ''), (o.hidden = !0)),
          Hr(n),
          (a.innerHTML = ''),
          a.appendChild(f),
          t.setAttribute('data-last-preview-url', m);
      }
      function Cr(e, t) {
        i(e, '.js-details-container').classList.toggle('is-empty', t);
      }
      function Ir(e) {
        const t = c(document, '.js-labels-count'),
          n = Number(t.textContent) + e;
        t.textContent = n.toString();
        const o = c(document, '.js-labels-label');
        return (o.textContent = o.getAttribute(1 === n ? 'data-singular-string' : 'data-plural-string')), n;
      }
      async function _r(e) {
        const t = e.querySelector('.js-new-label-name-input');
        if (!t) return;
        if (!(t instanceof HTMLInputElement)) throw new Error('invariant');
        const n = c(e, '.js-new-label-color-input', HTMLInputElement);
        let o = await Er();
        if (n.value.length > 0) for (; n.value === o; ) o = await Er();
        n.value = o;
        const s = c(e, '.js-new-label-color', HTMLButtonElement);
        Sr(s, o);
        const i = c(document, '.js-new-label-name').textContent;
        K(t, i), Ts(t), qr(s);
      }
      Zi &&
        (n('[data-hovercard-url]', {
          subscribe: (e) => le(V(e, 'mouseover', ur), V(e, 'mouseleave', mr), V(e, 'keyup', fr)),
        }),
        n('[data-hovercard-url]', {
          remove(e) {
            tr === e && rr();
          },
        }),
        n('.js-hovercard-content', {
          subscribe: (e) => le(V(e, 'mouseover', pr), V(e, 'mouseleave', dr), V(e, 'keyup', fr)),
        }),
        n('.js-hovercard-include-fragment', {
          constructor: HTMLTemplateElement,
          add(e) {
            tr && cr(e.content, tr);
          },
        }),
        s('menu:activated', 'details', rr),
        window.addEventListener('statechange', rr)),
        s('change', '.js-edit-integration-request-oauth-on-install', function (e) {
          const t = e.target,
            n = gr();
          if (t.checked) {
            (n.disabled = !0),
              (n.placeholder = n.getAttribute('data-hint-unavailable-when-install') || ''),
              jr(n.getAttribute('data-hint-same-as-callback-url') || '');
            const e = hr();
            e.textContent = e.getAttribute('data-hint-redirect-on-update-callback-url') || '';
          } else {
            (n.disabled = !1),
              (n.placeholder = ''),
              (n.value = n.getAttribute('data-setup-url') || ''),
              jr(n.getAttribute('data-hint-setup-url') || '');
            const e = hr();
            e.textContent = e.getAttribute('data-hint-redirect-on-update-setup-url') || '';
          }
        }),
        s('change', '.js-integration-permissions-selector [id^=integration_permission_]', function ({
          currentTarget: e,
        }) {
          const t = e.getAttribute('data-permission'),
            n = e.getAttribute('data-resource') || '',
            o = a(document, `.js-integration-hook-event[data-resource~="${n}"]`, HTMLInputElement),
            s = a(document, '.js-integration-single-file-resource', HTMLInputElement),
            r = a(document, `.js-dropdown-container[data-resource~="${n}"]`);
          if ((br(), 'none' !== t)) {
            const t = a(document, `.js-integration-hook-event-permission-error[data-resource~='${n}']`);
            for (const e of t) e.classList.add('d-none');
            const c = a(document, '.js-integration-single-file-permission-error');
            for (const e of c) e.classList.add('d-none');
            for (const e of o) e.readOnly = !1;
            for (const e of s) e.readOnly = !1;
            i(e, '.js-list-group-item').classList.remove('disabled');
            for (const e of r) e.classList.remove('d-none');
          } else {
            for (const e of o)
              (l = e),
                vr().includes(l) ||
                  ((e.readOnly = !0),
                  (e.checked = !1),
                  i(e, '.js-dropdown-container').classList.add('anim-fade-in', 'd-none'));
            if ((i(e, '.js-list-group-item').classList.add('disabled'), 'single_file' === n))
              for (const e of s) (e.readOnly = !0), (e.value = '');
            else
              'content_references' === n &&
                (c(document, `.js-dropdown-container[data-resource~='${n}']`).classList.add('anim-fade-in', 'd-none'),
                'none' === t && (c(document, '.js-content-references-domain-list').innerHTML = ''));
          }
          var l;
        }),
        s('change', '.js-hook-active-checkbox', function (e) {
          const t = e.currentTarget;
          for (const n of document.querySelectorAll('.js-integration-hook-enabled')) {
            if (!(n instanceof HTMLElement)) throw new Error('invariant');
            n.hidden = !t.checked;
          }
        }),
        s(
          'change',
          '.js-integration-permissions-selector [id^=integration_permission_][data-resource-parent^=repository]',
          function ({ currentTarget: e }) {
            const t = e.getAttribute('data-permission');
            'metadata' !== (e.getAttribute('data-resource') || '') &&
              ('none' !== t
                ? yr(!0)
                : (function () {
                    let e = !0;
                    const t = document.querySelectorAll(
                      '.js-integration-permissions-selector [id^=integration_permission_][data-resource-parent=repository]:checked',
                    );
                    for (const n of t) {
                      const t = n.getAttribute('data-permission') || 'none';
                      if ('metadata' !== (n.getAttribute('data-resource') || '') && 'none' !== t) {
                        e = !1;
                        break;
                      }
                    }
                    return e;
                  })() && yr());
          },
        ),
        s('change', '.js-integration-permissions-selector [name^=integration]', br),
        s('click', '.js-integration-permissions-selector .js-integration-hook-event', function (e) {
          const t = e.currentTarget;
          if (t.readOnly) {
            const n = i(t, '.js-send-events');
            c(n, '.js-integration-hook-event-permission-error').classList.remove('d-none'), e.preventDefault();
          }
        }),
        s('click', '.js-integration-permissions-selector .js-integration-single-file-resource', function (e) {
          const t = e.currentTarget;
          if (t.readOnly) {
            const n = i(t, '.js-single-file');
            c(n, '.js-integration-single-file-permission-error').classList.remove('d-none'), e.preventDefault();
          }
        }),
        _('keydown', '.js-content-references input', function (e) {
          'Enter' === e.key && (e.preventDefault(), Lr());
        }),
        s('click', '.js-content-references .js-domain-add', Lr),
        s('click', '.js-content-references .js-close', function (e) {
          if (!(e.target instanceof Element)) return;
          const t = i(e.target, 'li'),
            n = t.parentElement;
          n && (n.removeChild(t), 0 === a(n, 'li').length && (i(n, '.Box').hidden = !0), br());
        }),
        n('.js-issue-link', {
          subscribe: (e) => V(e, 'mouseenter', wr),
        }),
        N('.js-label-filter-field', function (e) {
          const t = e.target,
            n = i(t, 'details-menu').querySelector('.js-new-label-name');
          if (!n) return;
          const o = t.value.trim();
          n.textContent = o;
        }),
        s('filterable:change', '.js-filterable-issue-labels', function (e) {
          const t = i(e.currentTarget, 'details-menu'),
            n = t.querySelector('.js-add-label-button');
          if (!n) return;
          const o = e.detail.inputField.value.trim().toLowerCase(),
            s = a(t, 'input[name="issue[labels][]"]').some(
              (e) => (e.getAttribute('data-label-name') || '').toLowerCase() === o,
            );
          n.hidden = 0 === o.length || s;
        }),
        R('.js-new-label-color-input', function (e) {
          const t = i(e, 'form'),
            n = c(t, '.js-new-label-swatches');
          (n.hidden = !1),
            e.addEventListener(
              'blur',
              function () {
                n.hidden = !0;
              },
              {
                once: !0,
              },
            );
        }),
        N('.js-new-label-color-input', function (e) {
          const t = e.target;
          let n = t.value.trim();
          if (!(n.length < 1))
            if ((0 !== n.indexOf('#') && ((n = `#${n}`), (t.value = n)), t.checkValidity())) {
              t.classList.remove('text-red');
              const e = i(t, 'form');
              Sr(c(e, '.js-new-label-color', HTMLButtonElement), n);
            } else t.classList.add('text-red');
        }),
        _('keyup', '.js-new-label-color-input', function (e) {
          const t = e.target;
          let n = t.value.trim();
          if ((0 !== n.indexOf('#') && ((n = `#${n}`), (t.value = n)), t.checkValidity())) {
            const e = i(t, 'form');
            Sr(c(e, '.js-new-label-color', HTMLButtonElement), n);
          }
          u(t, 'change', !1), Hr(i(t, 'form', HTMLFormElement));
        }),
        _('keyup', '.js-new-label-description-input', function (e) {
          Hr(e.target.form);
        }),
        _('keyup', '.js-new-label-color-input', function (e) {
          Hr(e.target.form);
        }),
        s('click', '.js-new-label-color', async function (e) {
          const t = e.currentTarget;
          Mr(t, await Er()), qr(t);
        }),
        s('mousedown', '.js-new-label-color-swatch', function (e) {
          const t = e.currentTarget;
          Mr(t, r(t, 'data-color')), qr(t), (i(t, '.js-new-label-swatches').hidden = !0);
        }),
        s(
          'toggle',
          '.js-new-label-modal',
          function (e) {
            e.target.hasAttribute('open') && _r(e.target);
          },
          {
            capture: !0,
          },
        ),
        D('.js-new-label-modal-form', async function (e, t) {
          const n = c(e, '.js-new-label-error');
          let o;
          try {
            o = await t.html();
          } catch (a) {
            const e = a.response.json;
            (n.textContent = e.message), (n.hidden = !1);
          }
          if (!o) return;
          (n.hidden = !0), c(document, '.js-new-label-modal').removeAttribute('open');
          const s = c(document, '.js-filterable-issue-labels'),
            i = o.html.querySelector('input');
          s.prepend(o.html),
            i &&
              i.dispatchEvent(
                new Event('change', {
                  bubbles: !0,
                }),
              );
          const r = c(document, '.js-label-filter-field', HTMLInputElement);
          (r.value = r.defaultValue), r.focus();
        }),
        s('click', '.js-edit-label-cancel', function (e) {
          const t = i(e.target, 'form', HTMLFormElement);
          Hr(t), t.reset();
          const n = c(t, '.js-new-label-color-input', HTMLInputElement),
            o = n.value;
          (c(t, '.js-new-label-color', HTMLButtonElement).style.backgroundColor = o), Es(t), qr(n);
          const s = e.currentTarget.closest('.js-labels-list-item');
          if (s) {
            c(s, '.js-update-label', HTMLElement).classList.add('d-none');
            const e = s.querySelector('.js-label-preview');
            if (e) {
              e.classList.add('d-none'), c(s, '.js-label-link', HTMLElement).classList.remove('d-none');
            }
            const t = s.querySelectorAll('.js-hide-on-label-edit.d-none');
            for (const n of t) n.classList.remove('d-none');
          }
        }),
        D('.js-update-label', async function (e, t) {
          let n;
          try {
            n = await t.html();
          } catch (o) {
            return void Ar(e, o.response.json);
          }
          Hr(e), i(e, '.js-labels-list-item').replaceWith(n.html);
        }),
        D('.js-create-label', async function (e, t) {
          let n;
          try {
            n = await t.html();
          } catch (s) {
            return void Ar(e, s.response.json);
          }
          e.reset(),
            Hr(e),
            c(document, '.js-label-list').prepend(n.html),
            Ir(1),
            Cr(e, !1),
            Mr(c(e, '.js-new-label-color', HTMLButtonElement), await Er()),
            qr(c(e, '.js-new-label-name-input', HTMLInputElement)),
            Es(e);
          const o = e.closest('.js-details-container');
          o instanceof HTMLElement && De(o);
        }),
        s('click', '.js-details-target-new-label', function () {
          const e = c(document, '.js-create-label');
          c(e, '.js-new-label-name-input', HTMLInputElement).focus();
        }),
        s('click', '.js-edit-label', function (e) {
          const t = i(e.currentTarget, '.js-labels-list-item'),
            n = c(t, '.js-update-label', HTMLElement);
          n.classList.remove('d-none'), c(n, '.js-new-label-name-input', HTMLInputElement).focus();
          const o = t.querySelector('.js-label-preview');
          if (o) {
            o.classList.remove('d-none'), c(t, '.js-label-link', HTMLElement).classList.add('d-none');
          }
          const s = a(t, '.js-hide-on-label-edit', HTMLElement);
          for (const i of s) i.classList.add('d-none');
        }),
        D('.js-delete-label', async function (e, t) {
          const n = i(e, '.js-labels-list-item');
          (c(n, '.js-label-delete-spinner').hidden = !1), await t.text(), Cr(e, 0 === Ir(-1)), n.remove();
        });
      const $r = l(function (e) {
        qr(e.target);
      }, 500);
      function Nr(e, t, n) {
        const o = e.getAttribute('data-direction'),
          s = Rr(t).indexOf(t);
        'up' === o && t.previousElementSibling
          ? t.previousElementSibling.insertAdjacentElement('beforebegin', t)
          : 'down' === o && t.nextElementSibling && t.nextElementSibling.insertAdjacentElement('afterend', t);
        const i = Rr(t).indexOf(t);
        e.focus(),
          n({
            oldIndex: s,
            newIndex: i,
            item: t,
          });
      }
      function Rr(e) {
        const t = e.parentElement;
        return Array.from(t.children);
      }
      let Dr;
      s('suggester:complete', '.js-new-label-name-input', $r),
        N('.js-new-label-name-input', $r),
        N('.js-new-label-description-input', $r),
        N('.js-new-label-color-input', $r),
        _('keypress', '.js-new-label-name-input', function (e) {
          const t = e.target,
            n = parseInt(t.getAttribute('data-maxlength'));
          ye(t.value) >= n && e.preventDefault();
        }),
        s('click', '.js-issues-label-select-menu-item', function (e) {
          e.altKey &&
            (e.preventDefault(), e.stopPropagation(), (window.location.href = r(e.currentTarget, 'data-excluded-url')));
        }),
        _('keydown', '.js-issues-label-select-menu-item', function (e) {
          if ('Enter' !== e.key) return;
          if (!e.altKey) return;
          const t = e.currentTarget;
          e.preventDefault(),
            e.stopPropagation(),
            t instanceof HTMLAnchorElement && (window.location.href = r(t, 'data-excluded-url'));
        }),
        s(
          'click',
          '.js-open-label-creation-modal',
          async function (e) {
            e.stopImmediatePropagation(),
              _r(
                await ee({
                  content: c(document, '.js-label-creation-template', HTMLTemplateElement).content.cloneNode(!0),
                  detailsClass: 'js-new-label-modal',
                }),
              );
          },
          {
            capture: !0,
          },
        ),
        Ee(function ({ newURL: e }) {
          const t = e.match(/\/issues#issue\/(\d+)$/);
          if (t) {
            const n = t[1];
            window.location.href = e.replace(/\/?#issue\/.+/, `/${n}`);
          }
        }),
        Ee(function ({ newURL: e }) {
          const t = e.match(/\/issues#issue\/(\d+)\/comment\/(\d+)$/);
          if (t) {
            const n = t[1],
              o = t[2];
            window.location.href = e.replace(/\/?#issue\/.+/, `/${n}#issuecomment-${o}`);
          }
        }),
        n('.js-issue-row .js-issues-list-check:checked', {
          add(e) {
            i(e, '.js-issue-row').classList.add('selected');
          },
          remove(e) {
            i(e, '.js-issue-row').classList.remove('selected');
          },
        }),
        s('navigation:keydown', '.js-issue-row', function (e) {
          'x' === e.detail.hotkey &&
            (!(function (e) {
              const t = e.querySelector('.js-issues-list-check');
              t instanceof HTMLInputElement && K(t, !t.checked);
            })(e.currentTarget),
            e.preventDefault(),
            e.stopPropagation());
        }),
        R('#js-issues-search', function (e) {
          const t = e;
          t.value = t.value;
        });
      let Pr = null;
      function Fr(e) {
        const { item: t, oldIndex: n } = e;
        Pr = t.parentNode.children[n + 1];
      }
      async function Br(e) {
        const { oldIndex: t, newIndex: n, item: o } = e;
        if (t === n) return;
        const s = i(o, '.js-pinned-issues-reorder-form', HTMLFormElement),
          r = i(s, '.js-pinned-issues-reorder-container'),
          a = c(r, '.js-pinned-issues-spinner');
        (a.style.display = 'inline-block'), Dr.option('disabled', !0);
        try {
          await oe(s.action, {
            method: s.method,
            body: new FormData(s),
          }),
            (a.style.display = 'none'),
            Dr.option('disabled', !1);
        } catch (l) {
          const e = o.parentNode;
          Pr ? e.insertBefore(o, Pr) : e.appendChild(o);
        }
      }
      function Or() {
        const e = c(document, '.js-reveal-custom-thread-settings', HTMLInputElement).checked,
          t = !document.querySelector('.js-custom-thread-notification-option:checked'),
          n = c(document, '.js-custom-thread-settings'),
          o = c(document, '[data-custom-option-required-text]', HTMLInputElement),
          s = e && t ? r(o, 'data-custom-option-required-text') : '';
        o.setCustomValidity(s), (n.hidden = !e);
      }
      function Ur(e) {
        e instanceof HTMLFormElement ? P(e) : Wr(e);
      }
      function zr(e) {
        const t = e.currentTarget;
        Ur(t.closest('.js-issue-sidebar-form') || t.querySelector('.js-issue-sidebar-form'));
      }
      async function Wr(e, t = 'post', n) {
        const o = (function (e) {
          const t = i(e, 'form', HTMLFormElement),
            n = new FormData(t).entries(),
            o = new FormData();
          for (const [s, i] of n) e.contains(Vr(t, s, i.toString())) && o.append(s, i);
          return o;
        })(e);
        n && o.append(n.name, n.value);
        const s = r(e, 'data-url');
        if (!s) return;
        const a = c(e, '.js-data-url-csrf', HTMLInputElement),
          l = await oe(
            Be(s, a.value, {
              method: t,
              body: o,
            }),
          );
        !(function (e, t) {
          e.replaceWith(z(document, t));
        })(i(e, '.js-discussion-sidebar-item'), l);
      }
      function Vr(e, t, n) {
        for (const o of e.elements)
          if (
            (o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement || o instanceof HTMLButtonElement) &&
            o.name === t &&
            o.value === n
          )
            return o;
        return null;
      }
      n('.js-pinned-issues-reorder-list', function (e) {
        Dr = Pe.create(e, {
          animation: 150,
          item: '.js-pinned-issue-list-item',
          handle: '.js-pinned-issue-reorder',
          onUpdate: Br,
          onStart: Fr,
          chosenClass: 'is-dragging',
        });
      }),
        s('submit', '.js-pinned-issues-reorder-form', function (e) {
          e.preventDefault();
        }),
        s('click', '.js-pinned-issue-list-item .js-sortable-button', function ({ currentTarget: e }) {
          if (!(e instanceof HTMLElement)) throw new Error('invariant');
          Nr(e, i(e, '.js-pinned-issue-list-item'), Br);
        }),
        s(
          'details-menu-select',
          '.js-saved-reply-menu',
          function (e) {
            if (!(e.target instanceof Element)) return;
            const t = e.detail.relatedTarget.querySelector('.js-saved-reply-body');
            if (!t) return;
            const n = (t.textContent || '').trim(),
              o = i(e.target, '.js-previewable-comment-form'),
              s = c(o, 'textarea.js-comment-field', HTMLTextAreaElement);
            Fe(s, n), setTimeout(() => s.focus(), 0);
          },
          {
            capture: !0,
          },
        ),
        _('keydown', '.js-saved-reply-shortcut-comment-field', function (e) {
          if ('Control+.' === fe(e)) {
            const t = i(e.target, '.js-previewable-comment-form');
            c(t, '.js-saved-reply-container').setAttribute('open', ''),
              e.preventDefault(),
              Ne({
                category: 'Markdown Toolbar',
                action: 'shortcut',
                label: 'saved reply',
              });
          }
        }),
        _('keydown', '.js-saved-reply-filter-input', function (e) {
          if (/^Control\+[1-9]$/.test(fe(e))) {
            const t = i(e.target, '.js-saved-reply-container').querySelectorAll('[role="menuitem"]'),
              n = Number(e.key),
              o = t[n - 1];
            o instanceof HTMLElement &&
              (o.click(),
              e.preventDefault(),
              Ne({
                category: 'Saved Replies',
                action: 'shortcut',
                label: `saved reply number ${n}`,
              }));
          }
        }),
        s('change', '.js-thread-notification-setting', Or),
        s('change', '.js-custom-thread-notification-option', Or),
        s('reset', '.js-custom-thread-settings-form', Or),
        s(
          'details-menu-selected',
          '.js-discussion-sidebar-menu',
          function (e) {
            const t = e.detail.relatedTarget,
              n = e.currentTarget,
              o = t.closest('.js-issue-sidebar-form'),
              s = n.hasAttribute('data-multiple');
            if (t.hasAttribute('data-clear-assignees')) {
              const e = a(n, 'input[name="issue[user_assignee_ids][]"]:checked', HTMLInputElement);
              for (const t of e) (t.disabled = !1), (t.checked = !1);
              Ur(o);
            } else
              s
                ? i(n, 'details').addEventListener('toggle', zr, {
                    once: !0,
                  })
                : Ur(o);
          },
          {
            capture: !0,
          },
        ),
        D('.js-issue-sidebar-form', async function (e, t) {
          const n = await t.html();
          i(e, '.js-discussion-sidebar-item').replaceWith(n.html);
        }),
        s('click', 'div.js-issue-sidebar-form .js-suggested-reviewer', function (e) {
          const t = e.currentTarget;
          Wr(i(t, '.js-issue-sidebar-form'), 'post', {
            name: t.name,
            value: t.value,
          }),
            e.preventDefault();
        }),
        s('click', 'div.js-issue-sidebar-form .js-issue-assign-self', function (e) {
          const t = e.currentTarget;
          Wr(i(t, '.js-issue-sidebar-form'), 'post', {
            name: t.name,
            value: t.value,
          }),
            e.preventDefault();
        }),
        s('click', '.js-issue-unassign-self', function (e) {
          Wr(i(e.currentTarget, '.js-issue-sidebar-form'), 'delete'), e.preventDefault();
        }),
        D('.js-pages-preview-toggle-form', async function (e, t) {
          const n = await t.json();
          c(e, 'button.btn').textContent = n.json.new_button_value;
        }),
        s('change', '.js-project-menu-checkbox', function (e) {
          const t = e.currentTarget,
            n = i(t, '.js-project-menu-container');
          for (const o of a(n, '.js-project-menu-checkbox', HTMLInputElement))
            if (o !== t && o.name === t.name) {
              o.checked = t.checked;
              const e = o.closest('.js-navigation-item');
              e && e.classList.toggle('selected', t.checked);
              const n = o.closest('label[aria-checked]');
              n && n.setAttribute('aria-checked', t.checked.toString());
            }
        }),
        s('click', 'div.js-project-column-menu-container .js-project-column-menu-item button', async function (e) {
          const t = e.currentTarget;
          !(function (e) {
            const t = i(e, '.js-project-column-menu-dropdown'),
              n = c(t, '.js-project-column-menu-summary'),
              o = r(e, 'data-column-name');
            n.textContent = o;
          })(t);
          const n = r(t, 'data-url'),
            o = c(t.parentElement, '.js-data-url-csrf', HTMLInputElement),
            s = r(t, 'data-card-id'),
            a = new FormData();
          a.append('card_id', s),
            a.append('use_automation_prioritization', 'true'),
            e.preventDefault(),
            await Oe(
              Be(n, o.value, {
                method: 'put',
                body: a,
              }),
            );
          const l = document.activeElement,
            u = i(t, '.js-project-column-menu-dropdown');
          if (l && u.contains(l))
            try {
              l.blur();
            } catch (d) {}
        }),
        s('click', '.js-prompt-dismiss', function (e) {
          i(e.currentTarget, '.js-prompt').remove();
        }),
        s('click', '.js-convert-to-draft', function (e) {
          const t = r(e.currentTarget, 'data-url'),
            n = c(e.currentTarget.parentElement, '.js-data-url-csrf', HTMLInputElement);
          oe(
            Be(t, n.value, {
              method: 'post',
            }),
          );
        });
      const Gr = new WeakMap(),
        Jr = new WeakMap();
      s('change', '.js-issues-list-check', function () {
        const e = !!document.querySelector('.js-issues-list-check:checked');
        c(document, '#js-issues-toolbar').classList.toggle('triage-mode', e);
        for (const t of document.querySelectorAll('.js-issue-triage-menu')) Gr.set(t, !0);
      }),
        s(
          'toggle',
          '.js-issue-triage-menu',
          function (e) {
            const t = e.currentTarget;
            t.hasAttribute('open')
              ? (function (e) {
                  if (!Gr.has(e)) return;
                  const t = c(document, '.js-triage-loader-template', HTMLTemplateElement),
                    n = c(e, '.js-triage-deferred-content');
                  (n.innerHTML = ''), n.append(t.content.cloneNode(!0));
                  const o = (function (e, t) {
                    const n = new URL(e, window.location.origin),
                      o = new URLSearchParams(n.search);
                    for (const [s, i] of t) o.append(s, i);
                    return (n.search = o.toString()), n.toString();
                  })(
                    r(e, 'data-url'),
                    a(document, '.js-issues-list-check:checked', HTMLInputElement).map((e) => [e.name, e.value]),
                  );
                  c(n, 'include-fragment').setAttribute('src', o), Gr.delete(e);
                })(t)
              : (async function (e) {
                  const t = c(e, 'form', HTMLFormElement);
                  if (!Jr.has(t)) return;
                  !(function (e, t) {
                    const n = i(e, '.js-issues-toolbar-triage');
                    (c(n, '.js-issue-triage-spinner').hidden = !t), (c(n, '.js-issue-triage-error').hidden = !0);
                  })(e, !0);
                  try {
                    const e = await ie(t.action, {
                      method: t.method,
                      body: new FormData(t),
                    });
                    Jr.delete(t),
                      await ve(e.job.url, {
                        headers: {
                          accept: 'application/json',
                        },
                      }),
                      me({
                        url: window.location.href,
                        container: c(document, '#js-repo-pjax-container'),
                        replace: !0,
                      });
                  } catch (n) {
                    !(function (e, t) {
                      const n = i(e, '.js-issues-toolbar-triage');
                      (c(n, '.js-issue-triage-spinner').hidden = !0), (c(n, '.js-issue-triage-error').hidden = !t);
                    })(e, !0);
                  }
                })(t);
          },
          {
            capture: !0,
          },
        ),
        s(
          'details-menu-selected',
          '.js-issue-triage-menu details-menu',
          function (e) {
            const t = e.detail.relatedTarget,
              n = i(t, 'form', HTMLFormElement),
              o = (function (e) {
                const t = 'true' === e.getAttribute('aria-checked'),
                  n = e.getAttribute('name') || e.getAttribute('data-name'),
                  o = e.getAttribute('value') || e.getAttribute('data-value'),
                  s = document.createElement('input');
                switch (((s.type = 'hidden'), (s.name = n), e.getAttribute('role'))) {
                  case 'menuitem':
                  case 'menuitemradio':
                    s.value = o;
                    break;
                  case 'menuitemcheckbox':
                    s.value = t ? o : '0';
                }
                return s;
              })(t),
              s = c(n, '.js-issues-triage-fields'),
              r = s.querySelector(`[name='${o.name}']`);
            r ? r.replaceWith(o) : s.append(o);
            Jr.set(n, !0);
          },
          {
            capture: !0,
          },
        ),
        D('.js-undo-issue-event-form', async (e, t) => {
          await t.text();
          const n = r(e, 'action');
          e.remove();
          const o = document.querySelectorAll(`.js-undo-issue-event-form[action="${n}"]`);
          for (let s = 0; s < o.length; s++) o[s].remove();
        });
      const Kr = /^(team|repository|project):[^/]+\/[^/]+(\/([^/]+))?$/;
      function Xr(e, t) {
        t.setItem('jump_to:page_views', JSON.stringify(e));
      }
      function Yr(e) {
        if (!e) return {};
        const t = e.getItem('jump_to:page_views');
        if (!t) return {};
        let n;
        try {
          n = JSON.parse(t);
        } catch (s) {
          return Xr({}, e), {};
        }
        const o = {};
        for (const i in n) i.match(Kr) && (o[i] = n[i]);
        return o;
      }
      function Qr(e) {
        let t;
        const [n, o] = e.name.split('/') || [];
        switch (e.type) {
          case 'Project':
            if (!e.owner) throw new Error('invariant: suggestion.owner');
            if (null === e.number || void 0 === e.number) throw new Error('invariant: suggestion.number');
            t = ta(e.owner.name, `${e.number}`);
            break;
          case 'Repository':
            t = ea(n, o);
            break;
          case 'Team':
            t = Zr(n, o);
            break;
          default:
            throw new Error(`Invalid Suggestion type: ${e.type}`);
        }
        return t;
      }
      function Zr(e, t) {
        return `team:${e}/${t}`;
      }
      function ea(e, t) {
        return `repository:${e}/${t}`;
      }
      function ta(e, t) {
        return `project:${e}/${t}`;
      }
      function na(e, t, n) {
        const o = new URL(e, window.location.origin),
          s = new URLSearchParams(o.search.slice(1));
        s.set('q', t), n && s.set('unscoped_q', t);
        const i = new URLSearchParams(window.location.search).get('type');
        return i && s.set('type', i), (o.search = s.toString()), o.toString();
      }
      let oa = {};
      function sa(e) {
        const t = r(e, 'data-target-type');
        if ('Search' === t) {
          const e = c(document, '.js-site-search-form', HTMLFormElement),
            t = e.getAttribute('data-scope-type');
          t &&
            ra({
              dimensions: {
                scope_id: parseInt(e.getAttribute('data-scope-id') || ''),
                scope_type: t,
              },
            }),
            ia('search');
        } else
          ra({
            dimensions: {
              target_id: parseInt(e.getAttribute('data-target-id') || ''),
              target_type: t,
            },
            measures: {
              client_rank: parseInt(e.getAttribute('data-client-rank') || ''),
              server_rank: parseInt(e.getAttribute('data-server-rank') || ''),
            },
          }),
            ia('click');
      }
      function ia(e) {
        var t, n;
        const o = parseInt(
          (null ===
            (n =
              null === (t = document.head) || void 0 === t
                ? void 0
                : t.querySelector('meta[name="octolytics-actor-id"]')) || void 0 === n
            ? void 0
            : n.content) || '',
        );
        if (!o) return !1;
        (oa.dimensions = oa.dimensions || {}), (oa.dimensions.actor_id = o);
        let s = oa.dimensions && oa.dimensions.session_id;
        return (
          ('menu-activation' !== e || !s) &&
          !('menu-activation' !== e && !s) &&
          ('menu-activation' === e &&
            ((s = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
              const t = (16 * Math.random()) | 0;
              return ('x' === e ? t : (3 & t) | 8).toString(16);
            })),
            ra({
              dimensions: {
                session_id: s,
              },
            })),
          (oa.event_type = `jump-to-${e}`),
          !!s &&
            ((function (e) {
              Ue('JUMP_TO_LOGGING') && console.log(JSON.stringify(e));
              xs(e);
            })(oa),
            ('menu-deactivation' !== e && 'click' !== e && 'search' !== e) || (oa = {}),
            !0))
        );
      }
      function ra(e) {
        e.context &&
          ((oa.context = Object.assign(oa.context || {}, e.context)),
          (oa.dimensions = Object.assign(oa.dimensions || {}, e.context))),
          e.dimensions && (oa.dimensions = Object.assign(oa.dimensions || {}, e.dimensions)),
          e.measures && (oa.measures = Object.assign(oa.measures || {}, e.measures));
      }
      function aa(e) {
        c(document, '.js-jump-to-suggestions-container').classList.remove('d-none'),
          e.classList.add('jump-to-dropdown-visible'),
          c(document, '.js-jump-to').setAttribute('aria-expanded', 'true');
      }
      function ca() {
        c(document, '.js-jump-to-suggestions-container').classList.add('d-none'),
          c(document, '.js-jump-to-field').classList.remove('jump-to-dropdown-visible'),
          c(document, '.js-jump-to').setAttribute('aria-expanded', 'false'),
          ia('menu-deactivation');
      }
      function la(e) {
        const t = e.form;
        if (!t) throw new Error('invariant: form');
        const n = c(document, '.js-jump-to-suggestions-results-container'),
          o = e.value.trim(),
          s = !(!e.form || !e.form.getAttribute('data-scope-type')),
          i = c(n, '.js-jump-to-scoped-search'),
          a = c(n, '.js-jump-to-global-search');
        if ((i.classList.toggle('d-none', !o || !s), a.classList.toggle('d-none', !o), o && s)) {
          const e = fa(i, o, na(r(t, 'action'), o, s), !0);
          n.replaceChild(e, i);
        }
        if (o) {
          const e = fa(a, o, na(r(t, 'data-unscoped-search-url'), o, !1), !1);
          n.replaceChild(e, a);
        }
      }
      function ua(e, t, n) {
        if (!e.form) return;
        const o = ga('.js-jump-to-suggestions-template-container'),
          s = document.createDocumentFragment();
        if (n.length < 1 && !t)
          !(function () {
            if (
              !Boolean(
                null ===
                  (t =
                    null === (e = document.head) || void 0 === e
                      ? void 0
                      : e.querySelector('meta[name="user-login"]')) || void 0 === t
                  ? void 0
                  : t.content,
              )
            )
              return;
            var e, t;
            const n = ga('.js-jump-to-no-results-template-container').cloneNode(!0);
            n instanceof HTMLElement && n.classList.remove('d-none');
            da(n);
          })();
        else {
          for (const [e, i] of n.entries()) s.appendChild(pa(o, i, t, e));
          da(s);
        }
      }
      function da(e) {
        const t = c(document, '.js-jump-to-suggestions-results-container');
        for (const n of a(t, '.js-jump-to-suggestion')) {
          if (!n.parentNode) throw new Error('invariant: oldResult.parentNode');
          n.parentNode.removeChild(n);
        }
        t.appendChild(e);
      }
      function ma(e, t) {
        const n = c(e, '.js-jump-to-octicon'),
          o = c(n, t, SVGElement);
        n.classList.remove('d-none'), o.classList.remove('d-none');
      }
      function fa(e, t, n, o) {
        const s = e.cloneNode(!0);
        if (!(s instanceof HTMLElement)) throw new Error('invariant: el instanceof HTMLElement');
        s.id = `jump-to-suggestion-search-${o ? 'scoped' : 'global'}`;
        const i = c(s, '.js-jump-to-suggestion-path', HTMLAnchorElement);
        (i.href = n), i.setAttribute('data-target-type', 'Search');
        const r = c(s, '.js-jump-to-suggestion-name');
        (r.textContent = t), r.setAttribute('aria-label', t), ma(s, '.js-jump-to-octicon-search');
        const a = c(s, '.js-jump-to-badge-search');
        return (
          a.classList.remove('d-none'),
          o
            ? c(a, '.js-jump-to-badge-search-text-default').classList.remove('d-none')
            : c(a, '.js-jump-to-badge-search-text-global').classList.remove('d-none'),
          s
        );
      }
      function pa(e, t, n, o) {
        const s = e.cloneNode(!0);
        if (!(s instanceof HTMLElement)) throw new Error('invariant: el instanceof HTMLElement');
        s.id = `jump-to-suggestion-${t.type.toLowerCase()}-${t.databaseId}`;
        const i = c(s, '.js-jump-to-suggestion-path', HTMLAnchorElement);
        (i.href = t.path),
          i.setAttribute('data-target-type', t.type),
          i.setAttribute('data-target-id', `${t.databaseId}`),
          i.setAttribute('data-client-rank', `${o}`),
          i.setAttribute('data-server-rank', `${t.rank}`);
        const r = c(s, '.js-jump-to-suggestion-name');
        switch (((r.textContent = t.name), r.setAttribute('aria-label', t.name), On(r, n.replace(/\s/g, '')), t.type)) {
          case 'Team': {
            const e = c(s, '.js-jump-to-suggestion-avatar', HTMLImageElement);
            (e.alt = t.name), (e.src = t.avatarUrl ? t.avatarUrl : ''), e.classList.remove('d-none');
            break;
          }
          case 'Project':
            ma(s, '.js-jump-to-octicon-project');
            break;
          case 'Repository':
            ma(s, '.js-jump-to-octicon-repo');
        }
        return c(s, '.js-jump-to-badge-jump').classList.remove('d-none'), s;
      }
      function ga(e) {
        const t = c(document, '.js-jump-to-suggestions-container'),
          n = c(t, e).firstElementChild;
        if (!(n instanceof HTMLElement)) throw new Error('invariant: template');
        return n;
      }
      const ha = new WeakMap(),
        ja = new WeakMap();
      function ba(e, t, n) {
        const o = t.toLowerCase(),
          s = n.text,
          i = n.score;
        let r = e;
        if (o) {
          r = [];
          for (const t of e) {
            null == ha.get(t) && ha.set(t, s(t));
            const e = i ? i(ha.get(t) || '', o, t) : Fn(ha.get(t) || '', o);
            ja.set(t, e), e > 0 && r.push(t);
          }
          r.sort(va);
        }
        return null != n.limit ? r.slice(0, n.limit) : r;
      }
      function va(e, t) {
        const n = parseFloat(ja.get(e)),
          o = parseFloat(ja.get(t)),
          s = ha.get(e) || '',
          i = ha.get(t) || '';
        return n > o ? -1 : n < o ? 1 : s < i ? -1 : s > i ? 1 : 0;
      }
      const ya = 0.6,
        La = 0.4;
      function wa(e, t, n) {
        const o = t.get(e) || 0,
          s = n.get(e) || 0;
        return o * ya + s * La;
      }
      function Ta(e) {
        const t = [...Object.keys(e)].reduce((t, n) => t + e[n].visitCount, 0);
        return new Map(Object.keys(e).map((n) => [n, e[n].visitCount / t]));
      }
      function Ea(e) {
        const t = [...Object.keys(e)].sort((t, n) => e[t].lastVisitedAt - e[n].lastVisitedAt),
          n = t.length;
        return new Map(t.map((e, t) => [e, (t + 1) / n]));
      }
      function ka(e) {
        return !!(e ? e.closest('.js-jump-to-field') : document.querySelector('.js-jump-to-field'));
      }
      function Sa(e, t) {
        const n = e.value.trim(),
          o = (function (e, t = null) {
            const n = t || Yr(),
              o = Ta(n),
              s = Ea(n);
            return e
              .map((e) => ({
                suggestion: e,
                score: wa(e.pageKey, o, s),
              }))
              .sort((e, t) => t.score - e.score)
              .map((e) => e.suggestion);
          })(
            (function (e, t, n) {
              const o = e.replace(/\s/g, ''),
                s = t.filter((e) => e.path !== n);
              return o
                ? ba(s, o, {
                    text: (e) => e.name,
                  })
                : s;
            })(n, t, window.location.pathname),
          ),
          s = o.slice(0, 7);
        ra({
          measures: {
            result_count: o.length,
            display_count: s.length,
            filter_count: t.length - o.length,
          },
          context: {
            query: n,
            display_set: s.map((e) => [e.type, e.databaseId]),
          },
        }),
          ua(e, n, s),
          ia('menu-activation') || ia('query');
      }
      function Ma(e, t) {
        const n = e.nextElementSibling;
        return n instanceof HTMLElement ? (n.classList.contains(t) ? n : Ma(n, t)) : null;
      }
      const xa = /^\/orgs\/([a-z0-9-]+)\/teams\/([\w-]+)/,
        Aa = [
          /^\/([^/]+)\/([^/]+)\/?$/,
          /^\/([^/]+)\/([^/]+)\/blob/,
          /^\/([^/]+)\/([^/]+)\/tree/,
          /^\/([^/]+)\/([^/]+)\/issues/,
          /^\/([^/]+)\/([^/]+)\/pulls?/,
          /^\/([^/]+)\/([^/]+)\/pulse/,
        ],
        Ha = [
          ['organization', /^\/orgs\/([a-z0-9-]+)\/projects\/([0-9-]+)/],
          ['repository', /^\/([^/]+)\/([^/]+)\/projects\/([0-9-]+)/],
        ];
      function qa(e) {
        if (Object.keys(e).length <= 100) return e;
        const t = (function (e) {
          const t = Ta(e),
            n = Ea(e);
          return Object.keys(e)
            .map((e) => ({
              pageKey: e,
              score: wa(e, t, n),
            }))
            .sort((e, t) => t.score - e.score)
            .map((e) => e.pageKey);
        })(e).slice(0, 50);
        return Object.fromEntries(t.map((t) => [t, e[t]]));
      }
      function Ca(e, t) {
        const n = Yr(t),
          o = Math.floor(Date.now() / 1e3),
          s = n[e] || {
            lastVisitedAt: o,
            visitCount: 0,
          };
        (s.visitCount += 1), (s.lastVisitedAt = o), (n[e] = s);
        try {
          Xr(qa(n), t);
        } catch (i) {}
      }
      const Ia = () => {
        const e = 'test-storage-availability';
        try {
          return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), window.localStorage;
        } catch (t) {
          return null;
        }
      };
      let _a;
      async function $a(e) {
        const t = r(e, 'data-jump-to-suggestions-path'),
          n = (function () {
            const e = new FormData();
            for (const t of Object.keys(Yr())) e.append('variables[pageViews][]', t);
            return e;
          })(),
          o = Ma(e, 'js-data-jump-to-suggestions-path-csrf');
        if (!o) return [];
        try {
          return (function (e) {
            if ('errors' in e.data) return [];
            let t = 1;
            const n = [];
            for (const o of e.data.suggestions.nodes)
              null != o &&
                ((o.rank = t++), (o.pageKey = Qr(o)), 'Team' === o.type && (o.name = `@${o.name}`), n.push(o));
            return n;
          })(
            await ie(
              Be(t, o.value, {
                method: 'POST',
                body: n,
              }),
            ),
          );
        } catch (s) {
          return [];
        }
      }
      async function Na(e) {
        const t = e;
        !(function (e) {
          e.classList.add('js-navigation-enable'), e.classList.add('jump-to-field-active');
        })(t),
          aa(t),
          _a || (_a = $a(t)),
          la(t),
          Da(t),
          Sa(t, await _a);
      }
      n('.js-header-search-current .js-jump-to-field', {
        constructor: HTMLInputElement,
        add(e) {
          !(function (e, t = Ia()) {
            if (!t) return;
            const n = e.match(xa);
            if (n) return void Ca(Zr(n[1], n[2]), t);
            let o, s;
            for (let i = 0, r = Ha.length; i < r; i++) {
              const [n, s] = Ha[i];
              if (((o = e.match(s)), o)) {
                let e = null,
                  s = null;
                switch (n) {
                  case 'organization':
                    (e = o[1]), (s = o[2]);
                    break;
                  case 'repository':
                    (e = `${o[1]}/${o[2]}`), (s = o[3]);
                }
                return void (e && s && Ca(ta(e, s), t));
              }
            }
            for (let i = 0, r = Aa.length; i < r; i++) if (((s = e.match(Aa[i])), s)) return void Ca(ea(s[1], s[2]), t);
          })(window.location.pathname),
            e.addEventListener(
              'input',
              l(async function () {
                la(e), Da(e), Sa(e, await _a);
              }, 100),
            ),
            document.activeElement && document.activeElement === e && Na(e);
        },
      }),
        R('.js-header-search-current .js-jump-to-field', Na),
        s('navigation:keydown', '.js-header-search-current .js-site-search-form', function (e) {
          const t = e.currentTarget.querySelector('.js-navigation-item.navigation-focus');
          switch (e.detail.hotkey) {
            case 'Enter':
              if (t) sa(c(t, '.js-jump-to-suggestion-path', HTMLElement));
              else {
                const t = e.currentTarget;
                P(t);
              }
              break;
            case 'Escape':
              c(e.currentTarget, '.js-jump-to-field', HTMLInputElement).blur(), ca();
          }
        }),
        s('navigation:focus', '.js-header-search-current .js-site-search-form', function (e) {
          const t = c(document, '.js-jump-to-field', HTMLInputElement),
            n = e.target.id,
            o = i(e.target, '.js-jump-to-suggestions-results-container');
          for (const s of o.querySelectorAll('.js-navigation-item'))
            s.setAttribute('aria-selected', (e.target === s).toString());
          t.setAttribute('aria-activedescendant', n);
        });
      let Ra = null;
      function Da(e) {
        const t = e.value.trim(),
          n = c(document, '.js-jump-to-suggestions-results-container');
        t ? ze(n) : We(n);
      }
      function Pa(e) {
        return e.map((e) => {
          const [t, n] = e.split(':', 2);
          return {
            type: t,
            value: n,
          };
        });
      }
      function Fa(e) {
        const t = e.match(/(repo|user|org):"?[a-z0-9/_-]+"?/gi);
        return t || [];
      }
      s('focusout', '.js-header-search-current-jump-to', function () {
        const e = c(document, '.js-jump-to-field', HTMLInputElement);
        Ra = window.setTimeout(() => {
          !(function (e) {
            e.classList.remove('js-navigation-enable'), e.classList.remove('jump-to-field-active');
          })(e),
            ca();
        }, 200);
      }),
        s('focusin', '.js-header-search-current-jump-to', function () {
          Ra && window.clearTimeout(Ra), aa(c(document, '.js-jump-to-field', HTMLInputElement));
        }),
        s('click', '.js-header-search-current .js-jump-to-suggestion-path', function (e) {
          const t = e.currentTarget;
          if ('Search' === t.getAttribute('data-target-type')) {
            const e = c(document, '.js-jump-to-field', HTMLInputElement);
            t.href = (function (e, t) {
              const n = new URL(t, window.location.origin),
                o = new URLSearchParams(n.search.slice(1));
              return (
                o.get('q') && o.set('q', e),
                o.get('unscoped_q') && o.set('unscoped_q', e),
                (n.search = o.toString()),
                n.toString()
              );
            })(e.value.trim(), t.href);
          }
          sa(t);
        }),
        s('submit', '.js-header-search-current .js-site-search-form', function (e) {
          if (!ka()) return;
          e.target.getAttribute('data-scoped-search-url') && ra({}), ia('search');
        });
      const Ba = /^(team|repository|project):[^/]+\/[^/]+(\/([^/]+))?$/;
      function Oa(e, t) {
        t.setItem('jump_to:page_views', JSON.stringify(e));
      }
      function Ua(e) {
        if (!e) return {};
        const t = e.getItem('jump_to:page_views');
        if (!t) return {};
        let n;
        try {
          n = JSON.parse(t);
        } catch (s) {
          return Oa({}, e), {};
        }
        const o = {};
        for (const i in n) i.match(Ba) && (o[i] = n[i]);
        return o;
      }
      function za(e) {
        let t;
        const [n, o] = e.name.split('/') || [];
        switch (e.type) {
          case 'Project':
            if (!e.owner) throw new Error('invariant: suggestion.owner');
            if (null === e.number || void 0 === e.number) throw new Error('invariant: suggestion.number');
            t = Ga(e.owner.name, `${e.number}`);
            break;
          case 'Repository':
            t = Va(n, o);
            break;
          case 'Team':
            t = Wa(n, o);
            break;
          default:
            throw new Error(`Invalid Suggestion type: ${e.type}`);
        }
        return t;
      }
      function Wa(e, t) {
        return `team:${e}/${t}`;
      }
      function Va(e, t) {
        return `repository:${e}/${t}`;
      }
      function Ga(e, t) {
        return `project:${e}/${t}`;
      }
      function Ja(e, t, n) {
        const o = new URL(e, window.location.origin),
          s = new URLSearchParams(o.search.slice(1));
        s.set('q', t), n && s.set('unscoped_q', t);
        const i = new URLSearchParams(window.location.search).get('type');
        return i && s.set('type', i), (o.search = s.toString()), o.toString();
      }
      let Ka = {};
      function Xa(e) {
        const t = r(e, 'data-target-type');
        if ('Search' === t) {
          const e = c(document, '.js-site-search-form', HTMLFormElement),
            t = e.getAttribute('data-scope-type');
          t &&
            Qa({
              dimensions: {
                scope_id: parseInt(e.getAttribute('data-scope-id') || ''),
                scope_type: t,
              },
            }),
            Ya('search');
        } else
          Qa({
            dimensions: {
              target_id: parseInt(e.getAttribute('data-target-id') || ''),
              target_type: t,
            },
            measures: {
              client_rank: parseInt(e.getAttribute('data-client-rank') || ''),
              server_rank: parseInt(e.getAttribute('data-server-rank') || ''),
            },
          }),
            Ya('click');
      }
      function Ya(e) {
        var t, n;
        const o = parseInt(
          (null ===
            (n =
              null === (t = document.head) || void 0 === t
                ? void 0
                : t.querySelector('meta[name="octolytics-actor-id"]')) || void 0 === n
            ? void 0
            : n.content) || '',
        );
        if (!o) return !1;
        (Ka.dimensions = Ka.dimensions || {}), (Ka.dimensions.actor_id = o);
        let s = Ka.dimensions && Ka.dimensions.session_id;
        return (
          ('menu-activation' !== e || !s) &&
          !('menu-activation' !== e && !s) &&
          ('menu-activation' === e &&
            ((s = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
              const t = (16 * Math.random()) | 0;
              return ('x' === e ? t : (3 & t) | 8).toString(16);
            })),
            Qa({
              dimensions: {
                session_id: s,
              },
            })),
          (Ka.event_type = `jump-to-${e}`),
          !!s &&
            ((function (e) {
              Ue('JUMP_TO_LOGGING') && console.log(JSON.stringify(e));
              xs(e);
            })(Ka),
            ('menu-deactivation' !== e && 'click' !== e && 'search' !== e) || (Ka = {}),
            !0))
        );
      }
      function Qa(e) {
        e.context &&
          ((Ka.context = Object.assign(Ka.context || {}, e.context)),
          (Ka.dimensions = Object.assign(Ka.dimensions || {}, e.context))),
          e.dimensions && (Ka.dimensions = Object.assign(Ka.dimensions || {}, e.dimensions)),
          e.measures && (Ka.measures = Object.assign(Ka.measures || {}, e.measures));
      }
      function Za(e) {
        !1 === c(document, '.js-site-search-refine-details', HTMLDetailsElement).open &&
          (c(document, '.js-jump-to-suggestions-container').classList.remove('d-none'),
          e.classList.add('jump-to-dropdown-visible'),
          c(document, '.js-header-search-prototype').setAttribute('aria-expanded', 'true'));
      }
      function ec() {
        c(document, '.js-jump-to-suggestions-container').classList.add('d-none'),
          c(document, '.js-jump-to-field').classList.remove('jump-to-dropdown-visible'),
          c(document, '.js-header-search-prototype').setAttribute('aria-expanded', 'false'),
          Ya('menu-deactivation');
      }
      function tc(e) {
        const t = e.form;
        if (!t) throw new Error('invariant: form');
        const n = c(document, '.js-jump-to-suggestions-results-container'),
          o = e.value.trim(),
          s = e.form ? e.form.getAttribute('data-scope-type') : '',
          i = !(!e.form || !e.form.getAttribute('data-scope-type')),
          a = c(n, '.js-jump-to-scoped-search'),
          l = c(n, '.js-jump-to-global-search');
        a.classList.toggle('d-none', !o || !i), l.classList.toggle('d-none', !o);
        const u = Pa(Fa(e.value)),
          d = u.length > 0;
        if (o && i && !d) {
          const e = ic(a, o, Ja(r(t, 'action'), o, i), !0);
          n.replaceChild(e, a), (c(e, '.js-jump-to-badge-search-text-default').innerHTML = `In this ${s}`);
        }
        if (o && d) {
          const e = ic(a, o, Ja(r(t, 'action'), o, i), !0);
          (c(e, '.js-jump-to-badge-search-text-default').innerHTML = `In ${u[u.length - 1].value}`),
            n.replaceChild(e, a);
        }
        if (o) {
          const e = ic(l, o, Ja(r(t, 'data-unscoped-search-url'), o, !1), !1);
          d ? e.classList.add('d-none') : e.classList.remove('d-none'), n.replaceChild(e, l);
        }
      }
      function nc(e, t, n) {
        if (!e.form) return;
        const o = ac('.js-jump-to-suggestions-template-container'),
          s = document.createDocumentFragment();
        if (n.length < 1 && !t)
          !(function () {
            if (
              !Boolean(
                null ===
                  (t =
                    null === (e = document.head) || void 0 === e
                      ? void 0
                      : e.querySelector('meta[name="user-login"]')) || void 0 === t
                  ? void 0
                  : t.content,
              )
            )
              return;
            var e, t;
            const n = ac('.js-jump-to-no-results-template-container').cloneNode(!0);
            n instanceof HTMLElement && n.classList.remove('d-none');
            oc(n);
          })();
        else {
          for (const [e, i] of n.entries()) s.appendChild(rc(o, i, t, e));
          oc(s);
        }
      }
      function oc(e) {
        const t = c(document, '.js-jump-to-suggestions-results-container');
        for (const n of a(t, '.js-jump-to-suggestion')) {
          if (!n.parentNode) throw new Error('invariant: oldResult.parentNode');
          n.parentNode.removeChild(n);
        }
        t.appendChild(e);
      }
      function sc(e, t) {
        const n = c(e, '.js-jump-to-octicon'),
          o = c(n, t, SVGElement);
        n.classList.remove('d-none'), o.classList.remove('d-none');
      }
      function ic(e, t, n, o) {
        const s = e.cloneNode(!0);
        if (!(s instanceof HTMLElement)) throw new Error('invariant: el instanceof HTMLElement');
        let i = 'jump-to-suggestion-search-';
        (i += o ? 'scoped' : 'global'), (s.id = i);
        const r = c(s, '.js-jump-to-suggestion-name');
        (r.textContent = t), r.setAttribute('aria-label', t);
        const a = c(s, '.js-jump-to-suggestion-path', HTMLAnchorElement);
        (a.href = n), a.setAttribute('data-target-type', 'Search');
        const l = c(s, '.js-jump-to-badge-search');
        return (
          l.classList.remove('d-none'),
          o
            ? (c(l, '.js-jump-to-badge-search-text-default').classList.remove('d-none'),
              sc(s, '.js-jump-to-octicon-search'))
            : (c(l, '.js-jump-to-badge-search-text-global').classList.remove('d-none'),
              sc(s, '.js-jump-to-octicon-search')),
          s
        );
      }
      function rc(e, t, n, o) {
        const s = e.cloneNode(!0);
        if (!(s instanceof HTMLElement)) throw new Error('invariant: el instanceof HTMLElement');
        s.id = `jump-to-suggestion-${t.type.toLowerCase()}-${t.databaseId}`;
        const i = c(s, '.js-jump-to-suggestion-path', HTMLAnchorElement);
        (i.href = t.path),
          i.setAttribute('data-target-type', t.type),
          i.setAttribute('data-target-id', `${t.databaseId}`),
          i.setAttribute('data-client-rank', `${o}`),
          i.setAttribute('data-server-rank', `${t.rank}`);
        const r = c(s, '.js-jump-to-suggestion-name');
        switch (((r.textContent = t.name), r.setAttribute('aria-label', t.name), On(r, n.replace(/\s/g, '')), t.type)) {
          case 'Team': {
            const e = c(s, '.js-jump-to-suggestion-avatar', HTMLImageElement);
            (e.alt = t.name), (e.src = t.avatarUrl ? t.avatarUrl : ''), e.classList.remove('d-none');
            break;
          }
          case 'Project':
            sc(s, '.js-jump-to-octicon-project');
            break;
          case 'Repository':
            sc(s, '.js-jump-to-octicon-repo');
        }
        return c(s, '.js-jump-to-badge-jump').classList.remove('d-none'), s;
      }
      function ac(e) {
        const t = c(document, '.js-jump-to-suggestions-container'),
          n = c(t, e).firstElementChild;
        if (!(n instanceof HTMLElement)) throw new Error('invariant: template');
        return n;
      }
      function cc(e) {
        c(document, '.js-site-search-refine-details', HTMLDetailsElement).open = e;
      }
      function lc() {
        const e = c(document, '.js-site-search-filter-item');
        e && e.classList.remove('d-none');
      }
      n('.js-header-search-prototype .js-site-search-refine-details', {
        constructor: HTMLElement,
        add(e) {
          e.addEventListener('toggle', () => {
            if (e.hasAttribute('open')) {
              for (const e of document.querySelectorAll('[data-hotkey]')) I(e);
              ec();
            } else for (const e of document.querySelectorAll('[data-hotkey]')) C(e);
            c(document, '.js-header-search-input', HTMLInputElement).focus();
          }),
            e.addEventListener('keypress', () => {
              cc(!1), c(document, '.js-header-search-input', HTMLInputElement).focus();
            });
        },
      }),
        n('.js-header-search-prototype .js-filter-text-expander', {
          constructor: HTMLElement,
          add(e) {
            e.addEventListener('text-expander-value', () => {
              Za(c(document, '.js-header-search-input', HTMLInputElement)),
                window.setTimeout(() => {
                  xc(!1);
                }, 100);
            });
          },
        }),
        n('.js-header-search-prototype .js-site-search-refine-details-menu', {
          constructor: HTMLElement,
          add(e) {
            e.addEventListener('details-menu-select', (e) => {
              var t;
              const n = e.detail.relatedTarget;
              if (n.classList.contains('js-ems-code-search-result-type')) {
                const o = c(n, 'input'),
                  { filters: s, scopes: i, resultType: r } = dc(o);
                c(document, '.js-data-menu-button').textContent =
                  (null === (t = n.textContent) || void 0 === t ? void 0 : t.trim()) || 'Filter';
                const l = a(document, '.js-ems-code-search-result-type', HTMLElement);
                for (const e of l) {
                  (c(e, 'input', HTMLElement).getAttribute('value') || '') === r
                    ? e.setAttribute('aria-checked', 'true')
                    : e.setAttribute('aria-checked', 'false');
                }
                !(function (e, t, n) {
                  const o = c(document, '.js-header-search-input', HTMLInputElement);
                  'all' !== n
                    ? o.setAttribute('placeholder', o.getAttribute('data-refined-search-placeholder') || '')
                    : o.setAttribute('placeholder', o.getAttribute('default-placeholder') || '');
                  mc(e, t, n);
                })(s, i, r),
                  e.preventDefault();
              }
            });
          },
        }),
        R('.js-header-search-prototype .js-jump-to-field', lc);
      let uc = null;
      function dc(e) {
        return {
          filters: e.getAttribute('filters') || '',
          scopes: e.getAttribute('scopes') || '',
          resultType: e.getAttribute('value') || '',
        };
      }
      function mc(e, t, n) {
        if ((n && yc(n), t)) {
          const e = JSON.parse(t);
          hc(), e && e.length > 0 ? vc(e) : bc(!1), fc();
        }
        if (e) {
          const t = JSON.parse(e);
          gc(),
            t && t.length > 0
              ? (function (e) {
                  const t = c(document, '.js-ems-refine-filter-container', HTMLDivElement),
                    n = c(document, '.js-ems-filter-option-container', HTMLDivElement);
                  let o = 0;
                  for (const s of e) {
                    if (((o += 1), o < 9)) {
                      const e = Ec(s);
                      t.appendChild(e);
                    }
                    const e = wc(s);
                    n.appendChild(e);
                  }
                  e.length > 0 ? jc(!0) : jc(!1);
                })(t)
              : jc(!1);
        }
      }
      function fc() {
        const e = c(document, '.js-jump-to-field'),
          t = c(document, '.js-ems-scope-section');
        0 === Pa(Fa(e.value)).length ? (t.hidden = !1) : (t.hidden = !0);
      }
      function pc() {
        var e;
        return null !== (e = c(document, '.js-site-search-type-field', HTMLInputElement).value) && void 0 !== e
          ? e
          : '';
      }
      function gc() {
        const e = a(document, '.js-ems-filter-item', HTMLElement);
        for (const n of e) n.classList.contains('js-ems-filter-item-template') || n.remove();
        const t = a(document, '.js-ems-filter-option', HTMLElement);
        for (const n of t) n.classList.contains('js-ems-filter-option-template') || n.remove();
        jc(!1);
      }
      function hc() {
        const e = a(document, '.js-ems-scope-item', HTMLElement);
        for (const n of e) n.classList.contains('js-ems-scope-item-template') || n.remove();
        const t = a(document, '.js-ems-scope-option', HTMLElement);
        for (const n of t) n.classList.contains('js-ems-scope-option-template') || n.remove();
        bc(!1);
      }
      function jc(e) {
        const t = c(document, '.js-ems-filter-header', HTMLElement),
          n = c(document, '.js-ems-colon-filter-header', HTMLElement);
        e ? ((t.hidden = !1), (n.hidden = !1)) : ((t.hidden = !0), (n.hidden = !0));
      }
      function bc(e) {
        const t = c(document, '.js-ems-scope-header', HTMLElement),
          n = c(document, '.js-ems-colon-scope-header', HTMLElement);
        e ? ((t.hidden = !1), (n.hidden = !1)) : ((t.hidden = !0), (n.hidden = !0));
      }
      function vc(e) {
        const t = c(document, '.js-ems-refine-scope-container', HTMLDivElement),
          n = c(document, '.js-ems-scope-option-container', HTMLDivElement);
        for (const o of e) {
          const e = kc(o);
          t.appendChild(e);
          const s = Tc(o);
          n.appendChild(s);
        }
        e.length > 0 ? bc(!0) : bc(!1);
      }
      function yc(e) {
        c(document, '.js-site-search-type-field', HTMLInputElement).value = e;
      }
      function Lc(e) {
        if (e && '' !== e) {
          const t = c(document, '.js-header-search-input', HTMLInputElement);
          (t.value = `${t.value} ${e}:`), t.focus();
        }
      }
      function wc(e) {
        const t = c(document, '.js-ems-filter-option-template', HTMLElement).cloneNode();
        return (
          t.setAttribute('value', e),
          t.setAttribute('data-value', e),
          t.classList.replace('js-ems-filter-option-template', 'js-ems-filter-option'),
          (t.innerHTML = e),
          (t.hidden = !1),
          t
        );
      }
      function Tc(e) {
        const t = c(document, '.js-ems-scope-option-template', HTMLElement).cloneNode();
        t.setAttribute('value', e),
          t.setAttribute('data-value', e),
          t.classList.replace('js-ems-scope-option-template', 'js-ems-scope-option');
        const n = Sc(e);
        return (t.innerHTML = '' !== n ? `${e}<span class="text-normal">&nbsp;(${n})` : e), (t.hidden = !1), t;
      }
      function Ec(e) {
        const t = c(document, '.js-ems-filter-item-template', HTMLElement).cloneNode();
        return (
          t.setAttribute('value', e),
          t.classList.replace('js-ems-filter-item-template', 'js-ems-filter-item'),
          (t.innerHTML = e),
          (t.hidden = !1),
          t
        );
      }
      function kc(e) {
        const t = c(document, '.js-ems-scope-item-template', HTMLElement).cloneNode();
        t.setAttribute('value', e), t.classList.replace('js-ems-scope-item-template', 'js-ems-scope-item');
        const n = Sc(e);
        return (t.innerHTML = '' !== n ? `${e}<span class="text-normal">&nbsp;(${n})</span>` : e), (t.hidden = !1), t;
      }
      function Sc(e) {
        return (
          {
            org: 'organization',
            user: 'user',
            repo: 'repository',
          }[e] || ''
        );
      }
      function Mc() {
        return c(document, '.js-header-search-prototype');
      }
      function xc(e) {
        const t = Mc(),
          n = c(t, '.js-header-search-input');
        t.setAttribute('data-should-ignore', e.toString()),
          e ? n.classList.remove('js-navigation-enable') : n.classList.add('js-navigation-enable');
      }
      function Ac() {
        return 'true' === Mc().getAttribute('data-should-ignore');
      }
      s('focusout', '.js-header-search-prototype', function () {
        uc = window.setTimeout(() => {
          !(function () {
            const e = c(document, '.js-site-search-filter-item');
            e && e.classList.add('d-none');
          })();
        }, 200);
      }),
        s('focusin', '.js-header-search-prototype', function () {
          uc = window.setTimeout(() => {
            lc();
          }, 200);
        }),
        s('click', '.js-header-search-prototype .js-ems-scope-item', (e) => {
          Lc(e.currentTarget.getAttribute('value'));
        }),
        s('click', '.js-header-search-prototype .js-ems-filter-item', (e) => {
          Lc(e.currentTarget.getAttribute('value'));
        }),
        s('click', '.js-header-search-prototype .js-jump-to-suggestion-path', (e) => {
          if (Ac()) return void e.preventDefault();
          let t = e.currentTarget.getAttribute('href');
          if (t) {
            const n = pc();
            if ('' !== n && 'all' !== n) {
              const o = t.search(/&type=.+$/);
              t = t.slice(0, o);
              const s = `${t}&type=${n}`;
              e.currentTarget.setAttribute('href', s);
            }
          }
        }),
        s('click', '.js-header-search-prototype .js-site-search-close-button', () => {
          const e = c(document, '.js-header-search-input', HTMLInputElement);
          (e.value = ''), yc(''), (c(document, '.js-data-menu-button').textContent = 'Filter');
          const t = a(document, '.js-ems-code-search-result-type', HTMLElement);
          for (const n of t) n.setAttribute('aria-checked', 'false');
          gc(), hc(), vc(['org', 'repo', 'user']), e.focus();
        });
      const Hc = 0.6,
        qc = 0.4;
      function Cc(e, t, n) {
        const o = t.get(e) || 0,
          s = n.get(e) || 0;
        return o * Hc + s * qc;
      }
      function Ic(e) {
        const t = [...Object.keys(e)].reduce((t, n) => t + e[n].visitCount, 0);
        return new Map(Object.keys(e).map((n) => [n, e[n].visitCount / t]));
      }
      function _c(e) {
        const t = [...Object.keys(e)].sort((t, n) => e[t].lastVisitedAt - e[n].lastVisitedAt),
          n = t.length;
        return new Map(t.map((e, t) => [e, (t + 1) / n]));
      }
      function $c(e, t) {
        const n = e.value.trim(),
          o = (function (e, t = null) {
            const n = t || Ua(),
              o = Ic(n),
              s = _c(n);
            return e
              .map((e) => ({
                suggestion: e,
                score: Cc(e.pageKey, o, s),
              }))
              .sort((e, t) => t.score - e.score)
              .map((e) => e.suggestion);
          })(
            (function (e, t, n) {
              const o = e.replace(/\s/g, ''),
                s = t.filter((e) => e.path !== n);
              return o
                ? ba(s, o, {
                    text: (e) => e.name,
                  })
                : s;
            })(n, t, window.location.pathname),
          ),
          s = o.slice(0, 7);
        Qa({
          measures: {
            result_count: o.length,
            display_count: s.length,
            filter_count: t.length - o.length,
          },
          context: {
            query: n,
            display_set: s.map((e) => [e.type, e.databaseId]),
          },
        }),
          nc(e, n, s),
          Ya('menu-activation') || Ya('query');
      }
      const Nc = /^\/orgs\/([a-z0-9-]+)\/teams\/([\w-]+)/,
        Rc = [
          /^\/([^/]+)\/([^/]+)\/?$/,
          /^\/([^/]+)\/([^/]+)\/blob/,
          /^\/([^/]+)\/([^/]+)\/tree/,
          /^\/([^/]+)\/([^/]+)\/issues/,
          /^\/([^/]+)\/([^/]+)\/pulls?/,
          /^\/([^/]+)\/([^/]+)\/pulse/,
        ],
        Dc = [
          ['organization', /^\/orgs\/([a-z0-9-]+)\/projects\/([0-9-]+)/],
          ['repository', /^\/([^/]+)\/([^/]+)\/projects\/([0-9-]+)/],
        ];
      function Pc(e) {
        if (Object.keys(e).length <= 100) return e;
        const t = (function (e) {
          const t = Ic(e),
            n = _c(e);
          return Object.keys(e)
            .map((e) => ({
              pageKey: e,
              score: Cc(e, t, n),
            }))
            .sort((e, t) => t.score - e.score)
            .map((e) => e.pageKey);
        })(e).slice(0, 50);
        return Object.fromEntries(t.map((t) => [t, e[t]]));
      }
      function Fc(e, t) {
        const n = Ua(t),
          o = Math.floor(Date.now() / 1e3),
          s = n[e] || {
            lastVisitedAt: o,
            visitCount: 0,
          };
        (s.visitCount += 1), (s.lastVisitedAt = o), (n[e] = s);
        try {
          Oa(Pc(n), t);
        } catch (i) {}
      }
      const Bc = () => {
        const e = 'test-storage-availability';
        try {
          return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), window.localStorage;
        } catch (t) {
          return null;
        }
      };
      let Oc,
        Uc = !1;
      async function zc(e) {
        const t = r(e, 'data-jump-to-suggestions-path'),
          n = (function () {
            const e = new FormData();
            for (const t of Object.keys(Ua())) e.append('variables[pageViews][]', t);
            return e;
          })(),
          o = Ma(e, 'js-data-jump-to-suggestions-path-csrf');
        if (!o) return [];
        try {
          return (function (e) {
            if ('errors' in e.data) return [];
            let t = 1;
            const n = [];
            for (const o of e.data.suggestions.nodes)
              null != o &&
                ((o.rank = t++), (o.pageKey = za(o)), 'Team' === o.type && (o.name = `@${o.name}`), n.push(o));
            return n;
          })(
            await ie(
              Be(t, o.value, {
                method: 'POST',
                body: n,
              }),
            ),
          );
        } catch (s) {
          return [];
        }
      }
      async function Wc(e) {
        const t = e;
        !(function (e) {
          e.classList.add('js-navigation-enable'),
            e.classList.add('jump-to-field-active'),
            c(document, '.js-site-search-filter-button').classList.add('site-search-filter-button-active'),
            (c(document, '.js-header-search-key-slash').hidden = !0),
            (c(document, '.js-site-search-close-button').hidden = !1);
        })(t),
          Za(t),
          Oc || (Oc = zc(t)),
          tc(t),
          Gc(t),
          $c(t, await Oc);
      }
      n('.js-header-search-prototype .js-jump-to-field', {
        constructor: HTMLInputElement,
        add(e) {
          !(function (e, t = Bc()) {
            if (!t) return;
            const n = e.match(Nc);
            if (n) return void Fc(Wa(n[1], n[2]), t);
            let o, s;
            for (let i = 0, r = Dc.length; i < r; i++) {
              const [n, s] = Dc[i];
              if (((o = e.match(s)), o)) {
                let e = null,
                  s = null;
                switch (n) {
                  case 'organization':
                    (e = o[1]), (s = o[2]);
                    break;
                  case 'repository':
                    (e = `${o[1]}/${o[2]}`), (s = o[3]);
                }
                return void (e && s && Fc(Ga(e, s), t));
              }
            }
            for (let i = 0, r = Rc.length; i < r; i++) if (((s = e.match(Rc[i])), s)) return void Fc(Va(s[1], s[2]), t);
          })(window.location.pathname),
            e.addEventListener(
              'input',
              l(async function () {
                tc(e),
                  Gc(e),
                  $c(e, await Oc),
                  cc(!1),
                  (function (e) {
                    document.querySelector('.code-search-filter-text-expander:not([hidden])')
                      ? (xc(!0), ec())
                      : (Za(e), xc(!1));
                    fc();
                  })(e);
              }, 100),
            ),
            document.activeElement && document.activeElement === e && Wc(e);
        },
      }),
        n('.js-header-search-prototype .js-filter-text-expander', (e) => {
          e.addEventListener('text-expander-change', function (e) {
            const t = c(document, '.js-jump-to-field', HTMLInputElement);
            if (t.selectionStart && t.selectionEnd && t.selectionStart === t.selectionEnd) {
              if (
                (function (e) {
                  const t = ((e = (e = e.replace('\\"', '')).replace("\\'", '')).match(/"/g) || []).length,
                    n = (e.match(/'/g) || []).length;
                  return t % 2 != 0 || n % 2 != 0;
                })(t.value.slice(0, t.selectionEnd)) ||
                'all' === pc() ||
                null === pc()
              )
                return;
            }
            !(function (e) {
              const { key: t, provide: n, text: o } = e.detail;
              if (':' !== t) return;
              const s = c(document, '.js-code-search-filter-text-expander', HTMLElement).cloneNode(!0);
              s.hidden = !1;
              const i = a(s, '.js-ems-filter-option', HTMLElement).filter(
                  (e) => !e.classList.contains('js-ems-filter-option-template'),
                ),
                r = a(s, '.js-ems-scope-option', HTMLElement).filter(
                  (e) => !e.classList.contains('js-ems-scope-option-template'),
                ),
                l = Array.from(i).filter(
                  (e) => !(null === e.textContent ? '' : e.textContent).toLowerCase().startsWith(o.toLowerCase()),
                ),
                u = Array.from(r).filter(
                  (e) => !(null === e.textContent ? '' : e.textContent).toLowerCase().startsWith(o.toLowerCase()),
                ),
                d = c(s, '.js-ems-colon-filter-header', HTMLDivElement);
              l.length === i.length ? (d.hidden = !0) : (d.hidden = !1);
              const m = c(s, '.js-ems-colon-scope-header', HTMLElement);
              u.length === r.length || 0 === r.length ? (m.hidden = !0) : (m.hidden = !1);
              for (const a of l) a.remove();
              for (const a of u) a.remove();
              n(
                Promise.resolve({
                  matched: s.childElementCount > 0,
                  fragment: s,
                }),
              );
            })(e);
          }),
            e.addEventListener('text-expander-value', (e) => {
              const t = e,
                { key: n, item: o } = t.detail;
              ':' === n && ((t.detail.value = `${o.getAttribute('data-value')}:`), (Uc = !0));
            });
        }),
        n('.js-header-search-prototype', () => {
          const e = document.querySelector(
            '.js-header-search-prototype .js-ems-code-search-result-type[aria-checked=true] input',
          );
          if (e) {
            const { filters: t, scopes: n, resultType: o } = dc(e);
            mc(t, n, o);
          }
        }),
        R('.js-header-search-prototype .js-jump-to-field', Wc),
        s('navigation:keydown', '.js-header-search-prototype .js-site-search-form', function (e) {
          const t = e.currentTarget.querySelector('.js-navigation-item.navigation-focus');
          switch (e.detail.hotkey) {
            case 'Enter':
              if (Uc) {
                Uc = !1;
                break;
              }
              if (t) Xa(c(t, '.js-jump-to-suggestion-path', HTMLElement));
              else {
                const t = e.currentTarget;
                P(t);
              }
              break;
            case 'Escape':
              c(e.currentTarget, '.js-jump-to-field', HTMLInputElement).blur(), ec();
          }
        }),
        s('navigation:focus', '.js-header-search-prototype .js-site-search-form', function (e) {
          const t = c(document, '.js-jump-to-field', HTMLInputElement),
            n = e.target.id,
            o = i(e.target, '.js-jump-to-suggestions-results-container');
          for (const s of o.querySelectorAll('.js-navigation-item'))
            s.setAttribute('aria-selected', (e.target === s).toString());
          t.setAttribute('aria-activedescendant', n);
        });
      let Vc = null;
      function Gc(e) {
        const t = e.value.trim(),
          n = c(document, '.js-jump-to-suggestions-results-container');
        t ? ze(n) : We(n);
      }
      s('focusout', '.js-header-search-prototype-jump-to', function () {
        const e = c(document, '.js-jump-to-field', HTMLInputElement);
        Vc = window.setTimeout(() => {
          !(function (e) {
            (c(document, '.js-site-search-refine-details', HTMLDetailsElement).open = !1),
              c(document, '.js-site-search-filter-button').classList.remove('site-search-filter-button-active'),
              (c(document, '.js-header-search-key-slash').hidden = !1),
              (c(document, '.js-site-search-close-button').hidden = !0),
              e.classList.remove('js-navigation-enable'),
              e.classList.remove('jump-to-field-active');
          })(e),
            ec();
        }, 200);
      }),
        s('focusin', '.js-header-search-prototype-jump-to', function () {
          Vc && window.clearTimeout(Vc), Za(c(document, '.js-jump-to-field', HTMLInputElement));
        }),
        s('click', '.js-header-search-prototype .js-jump-to-suggestion-path', function (e) {
          if (Ac()) return;
          const t = e.currentTarget;
          if ('Search' === t.getAttribute('data-target-type')) {
            const e = c(document, '.js-jump-to-field', HTMLInputElement);
            t.href = (function (e, t) {
              const n = new URL(t, window.location.origin),
                o = new URLSearchParams(n.search.slice(1));
              return (
                o.get('q') && o.set('q', e),
                o.get('unscoped_q') && o.set('unscoped_q', e),
                (n.search = o.toString()),
                n.toString()
              );
            })(e.value.trim(), t.href);
          }
          Xa(t);
        }),
        s('submit', '.js-header-search-prototype .js-site-search-form', function (e) {
          if (!(t ? t.closest('.js-jump-to-field') : document.querySelector('.js-jump-to-field'))) return;
          var t;
          e.target.getAttribute('data-scoped-search-url') && Qa({}), Ya('search');
        });
      let Jc = 0,
        Kc = null;
      const Xc = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a',
        'Enter',
      ];
      function Yc(e) {
        (Jc = e),
          (function (e) {
            let t = document.getElementById('konami-overlay');
            t ||
              ((t = document.createElement('div')),
              (t.id = 'konami-overlay'),
              t.classList.add('konami-overlay'),
              document && document.body && document.body.appendChild(t));
            if (!t) return;
            t.style.background = `rgba(0,0,0,${e + 0.24})`;
            const n = 50 * (1 + e),
              o = (e, t) => e + Math.round(Math.random() * (t - e));
            for (let s = 0; s < n; s++) {
              const e = o(0, window.innerHeight),
                n = o(0, window.innerWidth),
                s = document.createElement('div');
              s.classList.add('dot'),
                (s.textContent = `${o(0, 1)}`),
                (s.style.fontSize = `${o(1, 8)}px`),
                (s.style.color = `rgba(255,255,255,${Math.random()})`),
                (s.style.top = `${e}px`),
                (s.style.left = `${n}px`);
              const i = o(0, 300);
              setTimeout(() => t && t.prepend(s), i),
                setTimeout(() => s.parentNode && s.parentNode.removeChild(s), i + o(100, 500));
            }
          })(Jc / Xc.length);
        const t = a(document, '.js-konami-key');
        for (const i of t)
          i.classList.remove('active'),
            i.classList.remove('inactive'),
            i.classList.remove('complete'),
            i.classList.remove('down');
        const n = t.slice(0, Jc),
          o = t.slice(Jc, Jc + 1),
          s = t.slice(Jc + 2);
        for (const i of n) i.classList.add('complete');
        for (const i of o) i.classList.add('active');
        for (const i of s) i.classList.add('inactive');
      }
      function Qc(e) {
        if (
          !(
            (e.target instanceof Node && Ve(e.target)) ||
            Jc >= Xc.length ||
            (Xc.includes(fe(e)) && (e.preventDefault(), e.stopPropagation()), fe(e) !== Xc[Jc])
          )
        ) {
          const e = document.querySelectorAll('.js-konami-key')[Jc];
          e && e.classList.add('down');
        }
      }
      function Zc(e) {
        if (!((e.target instanceof Node && Ve(e.target)) || Jc >= Xc.length)) {
          if (fe(e) === Xc[Jc])
            Yc(Jc + 1),
              Jc === Xc.length - 1 &&
                (function () {
                  const e = document.querySelector('.js-konami-success');
                  e && e.removeAttribute('hidden');
                })(),
              Jc === Xc.length &&
                (function () {
                  const e = document.querySelector('.js-konami-form');
                  if (!(e instanceof HTMLFormElement)) throw new Error('invariant');
                  P(e);
                })();
          else {
            if (!Xc.includes(fe(e))) return;
            Yc(0);
          }
          e.preventDefault(), e.stopPropagation();
        }
      }
      function el() {
        (Kc = null), document.removeEventListener('keydown', Qc), document.removeEventListener('keyup', Zc);
        const e = document.getElementById('konami-overlay');
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function tl(e) {
        const t = e.currentTarget;
        if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;
        const n = parseInt(t.getAttribute('data-input-max-length') || '', 10),
          o = parseInt(t.getAttribute('data-warning-length') || '', 10) || 5,
          s = t.value.replace(/(\r\n|\n|\r)/g, '\r\n');
        let a = n - s.length;
        if (a <= 0) {
          let e = s.substr(0, n);
          e.endsWith('\r') ? ((e = e.substr(0, n - 1)), (a = 1)) : (a = 0), (t.value = e);
        }
        const l = r(t, 'data-warning-text'),
          u = i(t, '.js-length-limited-input-container'),
          d = c(u, '.js-length-limited-input-warning');
        a <= o
          ? ((d.textContent = l.replace(new RegExp('{{remaining}}', 'g'), `${a}`)), d.classList.remove('d-none'))
          : ((d.textContent = ''), d.classList.add('d-none'));
      }
      function nl(e) {
        const t = e.currentTarget;
        if (!(t instanceof HTMLElement)) return;
        const n = c(t, '.js-milestone-edit-cancel'),
          o = n.getAttribute('data-confirm-changes');
        o && (Y(t) ? n.setAttribute('data-confirm', o) : n.removeAttribute('data-confirm'));
      }
      s('click', '.js-konami', async function (e) {
        if ((e.preventDefault(), Kc)) return;
        if (
          (Yc(5),
          document.addEventListener('keydown', Qc),
          document.addEventListener('keyup', Zc),
          !(e.target instanceof HTMLElement))
        )
          return;
        const t = `/site/konami?return_to=${e.target.getAttribute('data-return-to') || ''}`;
        (Kc = await ee({
          content: Q(document, t),
          dialogClass: 'kb-konami-dialog container-xl',
        })),
          Yc(Jc),
          Kc.addEventListener('dialog:remove', el, {
            once: !0,
          });
      }),
        n('.js-length-limited-input', {
          add(e) {
            e.addEventListener('input', tl), e.addEventListener('change', tl);
          },
          remove(e) {
            e.removeEventListener('input', tl), e.removeEventListener('change', tl);
          },
        }),
        n('link[rel=prefetch-viewed]', {
          initialize() {
            window.requestIdleCallback(() => {
              fetch(location.href, {
                method: 'HEAD',
                credentials: 'same-origin',
                headers: {
                  Purpose: 'prefetch-viewed',
                },
              });
            });
          },
        }),
        s('click', '.js-manage-requests-tabs-item', function ({ currentTarget: e }) {
          const t = i(e, '.js-manage-memberships-container');
          c(t, '.js-manage-invitations-tabs-item').classList.remove('selected'), e.classList.add('selected');
          const n = c(t, '.js-manage-invitations-list'),
            o = c(t, '.js-manage-requests-list');
          n.classList.add('d-none'), o.classList.remove('d-none');
        }),
        s('click', '.js-manage-invitations-tabs-item', function ({ currentTarget: e }) {
          const t = i(e, '.js-manage-memberships-container');
          c(t, '.js-manage-requests-tabs-item').classList.remove('selected'), e.classList.add('selected');
          const n = c(t, '.js-manage-requests-list'),
            o = c(t, '.js-manage-invitations-list');
          n.classList.add('d-none'), o.classList.remove('d-none');
        }),
        s('change', '.js-milestone-edit-form', nl),
        s('click', '.js-milestone-edit-form', nl);
      const ol = new WeakMap(),
        sl = new WeakMap();
      n('.js-milestone-issues', {
        subscribe: (e) =>
          V(e, 'socket:message', async function (e) {
            const t = e.currentTarget,
              n = e.detail.data,
              o = c(t, '.js-milestone-issues-container');
            if (sl.has(o)) return void sl.delete(o);
            await re();
            const s = document.querySelector('.js-client-uid');
            (s instanceof HTMLInputElement && s.value === n.client_uid) ||
              (async function (e) {
                if (Ge(e)) return;
                const t = r(e, 'data-url'),
                  n = await Q(document, t);
                Je(document, () => {
                  e.replaceWith(n);
                });
              })(t);
          }),
      }),
        D('.js-milestone-sort-form', async function (e, t) {
          const n = (await t.json()).json,
            o = c(e, '.js-milestone-reorder-feedback');
          (o.textContent = ''),
            n.error
              ? c(e, '.js-milestone-changed').classList.remove('d-none')
              : ((c(e, '.js-timestamp', HTMLInputElement).value = n.updated_at),
                (o.textContent = o.getAttribute('data-success-text') || ''));
        });
      const il = l(function (e) {
        const { newIndex: t, item: n } = e,
          o = i(n, '.js-milestone-issues-container'),
          s = n.getAttribute('data-id') || '',
          r = (function (e, t) {
            return e.querySelectorAll('.js-draggable-issue')[t];
          })(o, t - 1),
          a = r && r.getAttribute('data-id'),
          l = i(o, '.js-milestone-sort-form', HTMLFormElement);
        (c(l, '.js-item-id', HTMLInputElement).value = s),
          (c(l, '.js-prev-id', HTMLInputElement).value = a || ''),
          Ne({
            category: 'Milestone',
            action: 'reorder',
            label: 'string' == typeof e.trackingLabel ? e.trackingLabel : 'drag-and-drop',
          }),
          sl.set(o, !0),
          P(l);
      }, 200);
      function rl(e, t) {
        il({
          oldIndex: void 0,
          item: t,
          newIndex: Array.from(e.querySelectorAll('.js-draggable-issue')).indexOf(t),
          trackingLabel: 'keyboard-shortcut',
        }),
          Ke(i(t, '.js-navigation-container'), t);
      }
      async function al(e) {
        await (function (e) {
          return new Promise(function (t) {
            function n() {
              e.hasFocus() &&
                (t(),
                e.removeEventListener('visibilitychange', n),
                window.removeEventListener('focus', n),
                window.removeEventListener('blur', n));
            }
            e.addEventListener('visibilitychange', n),
              window.addEventListener('focus', n),
              window.addEventListener('blur', n),
              n();
          });
        })(document),
          await new Promise((e) => setTimeout(e, 1e3)),
          e instanceof HTMLButtonElement && (e.disabled = !1);
      }
      function cl(e) {
        const t = i(e, '.js-org-insights-hero-container');
        for (const n of a(t, '[role=tab]')) n.setAttribute('aria-selected', (n === e).toString());
        for (const n of a(t, '[role=tabpanel]')) n.hidden = e.id !== n.getAttribute('aria-labelledby');
        for (const n of a(document, '.js-org-insights-period-selector-link', HTMLAnchorElement)) n.hash = e.hash;
      }
      s('click', '.js-draggable-issue .js-sortable-button', function ({ currentTarget: e }) {
        Nr(e, i(e, '.js-draggable-issue'), il);
      }),
        s('navigation:keydown', '.js-draggable-issues-container .js-draggable-issue', function (e) {
          const t = e.currentTarget,
            n = i(t, '.js-draggable-issues-container');
          if ('J' === e.detail.hotkey) {
            const o = t.nextElementSibling;
            o && (o.after(t), rl(n, t), e.preventDefault(), e.stopPropagation());
          } else if ('K' === e.detail.hotkey) {
            const o = t.previousElementSibling;
            o && (o.before(t), rl(n, t), e.preventDefault(), e.stopPropagation());
          }
        }),
        n('.js-draggable-issues-container', {
          add: function (e) {
            if (ol.has(e)) return;
            const t = Pe.create(e, {
              animation: 150,
              item: '.js-draggable-issue',
              handle: '.js-drag-handle',
              onUpdate: il,
              chosenClass: 'is-dragging',
            });
            ol.set(e, t);
          },
          remove: function (e) {
            const t = ol.get(e);
            t && t.destroy();
          },
        }),
        s('submit', '.js-mobile-preference-form', ({ currentTarget: e }) => {
          c(e, '.js-mobile-preference-anchor-field', HTMLInputElement).value = window.location.hash.substr(1);
        }),
        n('#js-oauth-authorize-btn', (e) => {
          al(e);
        }),
        (async function () {
          await G, window._octo && (window._octo.push(['enablePerformance']), window._octo.push(['recordPageView']));
        })(),
        n('.js-octo-ga-id', (e) => {
          window.ga((t) => {
            t && e.setAttribute('content', t.get('clientId'));
          });
        }),
        n('.js-octo-ga-id-input', (e) => {
          window.ga((t) => {
            t && e.setAttribute('value', t.get('clientId'));
          });
        }),
        document.addEventListener('pjax:complete', function () {
          window._octo && window._octo.push(['recordPageView']);
        }),
        s('change', '.js-two-factor-needs-enforced', function (e) {
          const t = e.currentTarget;
          c(document, '.js-confirm-2fa-modal').classList.toggle('d-none', !t.checked),
            c(document, '.js-2fa-save-button').classList.toggle('d-none', t.checked);
        }),
        n('.js-two-factor-enforcement-poller', function (e) {
          e.addEventListener('load', function () {
            window.location.reload();
          });
        }),
        s('click', '.js-org-insights-hero-container [role=tab]', ({ currentTarget: e }) => {
          e instanceof HTMLAnchorElement && cl(e);
        }),
        Ee(() => {
          const e = document.querySelector('.js-org-insights-hero-container');
          if (!e) return;
          const t = e.querySelector(`[href='${document.location.hash || '#insights-prs'}']`);
          t instanceof HTMLAnchorElement && cl(t);
        });
      const ll = () => a(document, '.js-invitations-team-suggestions-pagination > a', HTMLAnchorElement);
      function ul() {
        const e = document.querySelector('.js-org-reinstate-forms'),
          t = document.querySelectorAll('.js-org-reinstate-option:checked');
        if (!e || 1 !== t.length) return;
        const n = r(t[0], 'data-form'),
          o = e.getElementsByClassName('js-togglable-form');
        for (const s of o) s.classList.add('d-none');
        document.getElementById(n).classList.remove('d-none');
      }
      function dl() {
        const e = document.querySelector('.js-seats');
        if (!e) return gl();
        const t = r(e, 'data-filled-seats');
        return parseInt(t) + gl();
      }
      function ml() {
        (function () {
          if (gl() <= 0) return fl('.js-plan-no-change', !0), fl('.js-plan-changes', !0), !0;
          return !1;
        })() ||
          ((function () {
            const e = document.querySelector('.js-filled-seats'),
              t = dl();
            e && null !== t && (e.textContent = t.toString());
          })(),
          (function () {
            const e = document.querySelector('.js-seats-remaining');
            if (e instanceof HTMLElement) {
              e.hidden = !0;
              const t = hl() - dl(),
                n = c(document, '.js-seats-remaining-zero'),
                o = c(document, '.js-seats-remaining-singular'),
                s = c(document, '.js-seats-remaining-plural');
              if (((n.hidden = 0 !== t), (o.hidden = 1 !== t), t > 1)) {
                c(document, '.js-seats-remaining-update-target').textContent = String(t);
              }
              s.hidden = t <= 1;
            }
          })(),
          (function () {
            const e = document.querySelector('.js-max-seats-warning');
            e instanceof HTMLElement && (e.hidden = !jl());
          })(),
          (function () {
            const e = dl();
            return hl() < e;
          })()
            ? (async function () {
                const e = document.querySelector('.js-seats');
                if (!e) return;
                const t = new URL(r(e, 'data-url'), window.location.origin),
                  n = new URLSearchParams(t.search.slice(1));
                n.append('seats', dl().toString()), (t.search = n.toString()), null == pl || pl.abort();
                const { signal: o } = (pl = new AbortController());
                let s = null;
                try {
                  const e = await fetch(t.toString(), {
                    signal: o,
                    headers: {
                      Accept: 'application/json',
                    },
                  });
                  e.ok && (s = await e.json());
                } catch (u) {}
                if (o.aborted) return;
                if (!s) return;
                const i = s.new_price,
                  a = e.getAttribute('data-original-price');
                if (a && i === a) return void fl('.js-plan-no-change', !0);
                !(function () {
                  const e = c(document, '.js-new-seats'),
                    t = c(document, '.js-new-users-singular'),
                    n = c(document, '.js-new-users-plural'),
                    o = gl();
                  (t.hidden = 1 !== o), (n.hidden = 1 === o), (e.textContent = String(o));
                })();
                const l = s.selectors;
                for (const r in l) for (const e of document.querySelectorAll(r)) e.innerHTML = l[r];
                fl('.js-plan-no-change', !0),
                  fl('.js-plan-changes', !1),
                  fl('.js-complete-button', !0),
                  fl('.js-invite-button', !1);
              })()
            : (fl('.js-plan-no-change', !1),
              fl('.js-plan-changes', !0),
              fl('.js-complete-button', !1),
              fl('.js-invite-button', !0)));
      }
      function fl(e, t) {
        const n = document.querySelector(e);
        n instanceof HTMLElement && (n.hidden = t);
      }
      s('click', '.js-invitation-toggle-team', async function () {
        const e = ((e) => {
          const t = new URLSearchParams(window.location.search),
            n = new Set(t.getAll('team_ids[]')),
            o = a(document, e, HTMLInputElement);
          for (const s of o) s.checked ? n.add(s.value) : n.delete(s.value);
          return [...n];
        })('.js-invitation-toggle-team');
        for (const t of ll()) {
          const n = t.getAttribute('href');
          if (n) {
            const o = new URL(n, window.location.origin),
              s = new URLSearchParams(o.search.slice(1));
            s.delete('team_ids[]');
            for (const t of e) s.append('team_ids[]', t);
            (o.search = s.toString()), t.setAttribute('href', o.toString());
          }
        }
        c(document, '[name="team_ids"]', HTMLInputElement).value = e.join(',');
      }),
        s('click', '.js-invitation-radio-role', async function () {
          const e = (() => {
            let e = '';
            const t = a(document, '.js-invitation-radio-role', HTMLInputElement);
            for (const n of t) n.checked && (e = n.value);
            return e;
          })();
          for (const t of ll()) {
            const n = t.getAttribute('href');
            if (n) {
              const o = new URL(n, window.location.origin),
                s = new URLSearchParams(o.search.slice(1));
              s.set('role', e), (o.search = s.toString()), t.setAttribute('href', o.toString());
            }
          }
        }),
        s('change', '.js-org-reinstate-option', ul),
        n('.js-org-reinstate-forms', ul),
        n('.js-member-suggestion', function () {
          const e = a(document, '.js-badge').map((e) => c(e, 'input', HTMLInputElement).value);
          if (0 !== e.length)
            for (const t of a(document, '.js-member-suggestion', HTMLLIElement)) {
              const n = r(t, 'data-autocomplete-value');
              if (e.includes(n)) {
                t.classList.add('disabled'), t.setAttribute('aria-disabled', 'true');
                const e = t.querySelector('.js-non-member-warning-reason'),
                  n = t.querySelector('.js-non-member-warning-action');
                if (e && n)
                  for (const t of [e, n])
                    (t.textContent = r(t, 'data-markup')), t instanceof HTMLElement && (t.hidden = !1);
              }
            }
        }),
        s('combobox-commit', '.js-badge-container .js-new-org-members-complete-results', (e) => {
          const t = c(document, '.js-badge-input', HTMLInputElement),
            n = c(document, '.js-badges'),
            o = e.target,
            s = a(o, '.js-badge-template', HTMLTemplateElement),
            i = a(document, '.js-badge').map((e) => c(e, 'input', HTMLInputElement).value);
          for (const r of s) {
            const e = r.cloneNode(!0);
            if (!(e instanceof HTMLTemplateElement)) throw new Error('invariant');
            const t = e.content,
              o = c(t, 'input', HTMLInputElement).value;
            i.includes(o) || n.append(t);
          }
          ml(),
            (function (e) {
              const t = e.currentTarget;
              if (t instanceof Element && t.hasAttribute('data-ga-event')) {
                const e = t.getAttribute('data-ga-event-category'),
                  n = t.getAttribute('data-ga-event-action'),
                  o = t.getAttribute('data-ga-event-label');
                window.ga('send', 'event', e, n, o);
              }
              const n = e.target;
              Xe(n);
            })(e),
            (t.value = ''),
            t.setAttribute('placeholder', '');
        }),
        s('click', '.js-badge-search-container .js-badge', (e) => {
          const t = e.currentTarget;
          'true' === r(t, 'aria-pressed')
            ? t.setAttribute('aria-pressed', 'false')
            : t.setAttribute('aria-pressed', 'true');
        }),
        s('click', '.js-badge-search-container', (e) => {
          const t = e.currentTarget;
          c(t, 'input', HTMLInputElement).focus();
        }),
        s('click', '.js-badge-container .js-member-suggestion', () => {
          c(document, '.js-badge-input', HTMLInputElement).focus();
        }),
        _('keydown', '.js-badge-search-container .js-badge-input', (e) => {
          const t = e.target,
            n = i(t, '.js-badge-search-container'),
            o = a(n, '.js-badges .js-badge[aria-pressed="true"]'),
            s = n.getAttribute('data-allow-plan-increase'),
            r = 'Backspace' !== e.key || '' !== t.value;
          if (!s && jl() && r) e.preventDefault();
          else if (!r) {
            if (0 !== o.length) for (const e of o) e.remove(), bl(e);
            else {
              const e = a(n, '.js-badges .js-badge');
              if (0 === e.length) return;
              const t = e[e.length - 1];
              t.remove(), bl(t);
            }
            ml();
          }
        });
      let pl = null;
      function gl() {
        return a(document, '.js-badge').length || 0;
      }
      function hl() {
        const e = document.querySelector('.js-seats');
        if (!e) return 0;
        const t = r(e, 'data-total-seats');
        return parseInt(t);
      }
      function jl() {
        return hl() === dl();
      }
      function bl(e) {
        Xe(e);
      }
      async function vl(e, t, n, o) {
        const s = r(e, 'data-url'),
          i = new URL(s, window.location.origin),
          a = new URLSearchParams(i.search.slice(1));
        a.append('member', t),
          a.append('action_type', n),
          o && a.append('return_to', o),
          (i.search = a.toString()),
          yl(!0),
          (c(document, '.js-add-team-member-form').hidden = !0);
        const l = await Q(document, i.toString());
        yl(!1), (e.innerHTML = ''), e.appendChild(l);
      }
      function yl(e) {
        (c(document, '.js-add-members-loading-state').hidden = !e),
          (c(document, '.js-add-members-modal-content').hidden = e);
      }
      function Ll(e, t) {
        const n = new URL(e.href, window.location.origin),
          o = new URLSearchParams(n.search);
        o.delete('organization_name'),
          o.delete('login'),
          o.append('organization_name', t),
          o.append('login', c(document, '#organization_login', HTMLInputElement).value);
        const s = new URL(e.href, window.location.origin);
        (s.search = o.toString()), (e.href = s.toString());
      }
      function wl(e) {
        for (const t of a(document, '.js-plan-info')) {
          const n = Tl(e);
          t.classList.contains(n)
            ? (t.classList.remove('has-removed-contents'), (t.hidden = !1))
            : (t.classList.add('has-removed-contents'), (t.hidden = !0));
        }
      }
      function Tl(e) {
        return 'business_plus' === e
          ? (function () {
              const e = c(document, '.js-enterprise-choice:checked', HTMLInputElement);
              return 'server' === e.value
                ? 'js-enterprise-server-plan-info'
                : 'cloud-trial' === e.value
                ? 'js-enterprise-cloud-trial-plan-info'
                : 'js-enterprise-cloud-plan-info';
            })()
          : 'free' === e
          ? 'js-free-plan-info'
          : 'business' === e
          ? 'js-business-plan-info'
          : null;
      }
      s('click', '.js-private-repo-creation-allowed', function (e) {
        const t = e.currentTarget;
        if (t instanceof HTMLInputElement) {
          const e = 'true' === t.getAttribute('data-private-only-policy-allowed'),
            n = c(document, '.js-public-repo-creation-allowed', HTMLInputElement),
            o = c(document, '.js-public-disabled-doc-link');
          e ||
            (t.checked ? ((n.disabled = !0), (n.checked = !0), (o.hidden = !1)) : ((n.disabled = !1), (o.hidden = !0)));
        }
      }),
        s('click', '.js-membership-tab', function (e) {
          const t = r(e.currentTarget, 'data-membership'),
            n = c(document, '.js-member-filter-field', HTMLInputElement),
            o = n.value,
            s = new RegExp('membership:[a-z-]+'),
            i = o.toString().trim().replace(s, '');
          (n.value = `${i} ${t}`.replace(/\s\s/, ' ').trim()),
            n.focus(),
            u(n, 'input'),
            c(document, '.js-membership-tabs').classList.remove('selected'),
            e.currentTarget.classList.add('selected');
        }),
        s('click', '.js-member-search-filter', function (e) {
          e.preventDefault();
          const t = r(e.currentTarget, 'data-filter'),
            n = i(e.currentTarget, '[data-filter-on]'),
            o = r(n, 'data-filter-on'),
            s = c(document, '.js-member-filter-field', HTMLInputElement),
            a = s.value,
            l = new RegExp(`${o}:(?:[a-z]|_|((').*(')))+`),
            d = a.toString().trim().replace(l, '');
          (s.value = `${d} ${t}`.replace(/\s\s/, ' ').trim()), s.focus(), u(s, 'input');
        }),
        s('submit', '.js-needs-interstitial .js-approve-membership-request', function (e) {
          const t = e.currentTarget,
            n = r(c(t, '[data-member-name]'), 'data-member-name'),
            o = r(t, 'data-action-type'),
            s = i(t, '.js-add-members-container');
          e.preventDefault(), vl(s, n, o, null);
        }),
        s('submit', '.js-needs-interstitial.js-add-team-member-form', function (e) {
          const t = e.currentTarget,
            n = g(t, 'member');
          if (!n.value) return;
          const o = r(t, 'data-action-type'),
            s = c(document, '.js-add-members-container');
          e.preventDefault();
          const i = t.getAttribute('data-return-to');
          vl(s, n.value, o, i);
        }),
        n('#add-team-member', function (e) {
          const t = c(e, 'details-dialog'),
            n = t.innerHTML;
          e.addEventListener('toggle', function ({ currentTarget: e }) {
            e.hasAttribute('open') || (t.innerHTML = n);
          });
        }),
        D('.js-add-org-member-form', async function (e, t) {
          const n = c(document, '.js-member-list');
          e.classList.add('is-sending');
          const o = document.querySelector('.flash-messages');
          let s;
          o && o.remove();
          try {
            s = await t.json();
          } catch (a) {
            if (!a.response && !a.response.json) return;
            return void n.insertAdjacentHTML('beforebegin', a.response.json.message_html || '');
          }
          e.classList.remove('is-sending'), (c(e, 'auto-complete', d).value = '');
          const i = c(z(document, s.json.list_item_html), '*'),
            r = i.getAttribute('data-login');
          if (r)
            for (const c of n.children)
              if (c.getAttribute('data-login') === r) {
                c.remove();
                break;
              }
          n.prepend(i);
        }),
        s('auto-check-success', '.js-new-organization-name', function (e) {
          const t = e.target;
          for (const o of a(document, '.js-enterprise-trial-link', HTMLAnchorElement)) Ll(o, t.value);
          const n = i(t, 'dd').querySelector('.js-field-hint-name');
          n && (n.textContent = t.value);
        }),
        n('.js-hide-org-name-hint', function (e) {
          const t = e.parentElement;
          t && (t.hidden = !0);
        }),
        N('.js-company-name-input', function (e) {
          const t = e.target,
            n = t.form,
            o = n.querySelectorAll('.js-company-name-text');
          if (0 === o.length) return;
          const s = n.querySelector('.js-corp-tos-link'),
            i = n.querySelector('.js-tos-link');
          i &&
            (i.classList.add('d-none'),
            i.setAttribute('aria-hidden', 'true'),
            s && (s.classList.remove('d-none'), s.setAttribute('aria-hidden', 'false')));
          for (const a of o)
            if (t.value) {
              if (a.hasAttribute('data-wording')) {
                const e = r(a, 'data-wording');
                a.textContent = ` ${e} ${t.value}`;
              } else a.textContent = t.value;
            } else a.textContent = '';
        }),
        n('.js-company-owned:not(:checked)', {
          constructor: HTMLInputElement,
          add(e) {
            const t = e.form,
              n = c(t, '.js-company-name-input', HTMLInputElement),
              o = c(document, '.js-company-name-text'),
              s = c(document, '.js-corp-tos-link'),
              i = c(document, '.js-tos-link');
            e.getAttribute('data-optional') && n.removeAttribute('required'),
              K(n, ''),
              i.classList.remove('d-none'),
              i.setAttribute('aria-hidden', 'false'),
              s.classList.add('d-none'),
              s.setAttribute('aria-hidden', 'true'),
              (o.textContent = '');
          },
        }),
        n('.js-company-owned:checked', {
          constructor: HTMLInputElement,
          add(e) {
            const t = e.form.querySelector('.js-company-name-input');
            t && (t.setAttribute('required', ''), u(t, 'focus'), u(t, 'input'));
          },
        }),
        n('.js-company-owned-autoselect', {
          constructor: HTMLInputElement,
          add(e) {
            const t = e;
            function n() {
              if (t.checked && t.form) {
                const e = c(t.form, '.js-company-owned', HTMLInputElement);
                K(e, !0);
              }
            }
            t.addEventListener('change', n), n();
          },
        }),
        D('.js-org-list-item .js-org-remove-item', async function (e, t) {
          i(e, '.js-org-list-item').classList.add('d-none');
          try {
            await t.text();
          } catch (n) {
            i(e, '.js-org-list-item').classList.remove('d-none');
            const t = e.getAttribute('data-error-message');
            if (t) return void alert(t);
          }
          i(e, '.js-org-list-item').remove();
        }),
        s('click', '.js-plan-choice', (e) => {
          const t = document.querySelector('.SignUpContinueActions'),
            n = e.target.value;
          wl(n), null != t && t.classList.remove('has-removed-contents');
          const o = !(n && 'business_plus' === n);
          for (const s of a(document, '.js-enterprise-choice', HTMLInputElement)) s.disabled = o;
        }),
        s('click', '.js-enterprise-choice', (e) => {
          const t = document.querySelector('.js-billing-section'),
            n = document.querySelector('.SignUpContinueActions'),
            o = document.querySelector('.js-enterprise-contact'),
            s = document.querySelector('.js-enterprise-trial-link'),
            i = e.target.value,
            r = [t, n];
          if (
            (o && o.classList.toggle('has-removed-contents', 'server' !== i),
            s && s.classList.toggle('has-removed-contents', 'server' === i),
            'cloud-trial' === i)
          )
            t && t.classList.add('has-removed-contents');
          else for (const a of r) null != a && a.classList.toggle('has-removed-contents', 'cloud' !== i);
          wl('business_plus');
        }),
        s('change', '.js-enterprise-trial-industry', function (e) {
          const t = e.target.value,
            n = document.querySelector('.js-enterprise-trial-other-industry-field');
          n && (n.hidden = t !== r(n, 'data-trigger-option-value'));
        }),
        n('.js-enterprise-trial-ga-id', {
          constructor: HTMLInputElement,
          initialize(e) {
            const t = r(e, 'data-field');
            window.ga(function (n) {
              n && K(e, n.get(t));
            });
          },
        }),
        D('.js-select-repo-permission', async function (e, t) {
          const n = c(e, '.js-permission-success'),
            o = c(e, '.js-permission-error');
          let s;
          (n.hidden = !0), (o.hidden = !0), e.classList.add('is-loading');
          try {
            s = await t.json();
          } catch (r) {
            return e.classList.remove('is-loading'), void (o.hidden = !1);
          }
          e.classList.remove('is-loading'), (n.hidden = !1);
          const i = e.closest('.js-org-repo');
          if (i) {
            const e = s.json;
            i.classList.toggle('with-higher-access', e.members_with_higher_access);
          }
        }),
        n('.js-role-fgp-input', {
          constructor: HTMLInputElement,
          add(e) {
            e.addEventListener('focus', _l), e.addEventListener('blur', Nl);
          },
          remove(e) {
            e.removeEventListener('focus', _l), e.removeEventListener('blur', Nl);
          },
        }),
        n('#js-fgp-list-items', {
          constructor: HTMLElement,
          add(e) {
            e.addEventListener('mousedown', Rl), Bl();
          },
          remove(e) {
            e.removeEventListener('mousedown', Rl);
          },
        }),
        s('change', '.js-fgp-list-item-checkbox', (e) => {
          const t = e.target;
          if (!(t instanceof HTMLInputElement)) return;
          const n = t.value || '';
          t.checked ? El(n) : kl(n), Ml().focus();
        }),
        n('.js-role-fgp-input', {
          constructor: HTMLInputElement,
          initialize(e) {
            const t = new h(Ml(), xl());
            e.addEventListener('focusin', () => {
              t.start();
            }),
              e.addEventListener('focusout:delay', () => {
                t.stop();
              });
          },
        });
      const El = (e) => {
          const t = Ol(e),
            n = Sl(t),
            o = t.category,
            s = Cl(o);
          s.appendChild(n), (Al().hidden = !1), (ql(o).hidden = !1), (s.hidden = !1);
        },
        kl = (e) => {
          const t = Ol(e),
            n = document.querySelector(`#fgp-item-${e}`),
            o = t.category,
            s = Cl(o);
          n.remove(), Pl(s) && ((s.hidden = !0), (ql(o).hidden = !0));
          const i = Al();
          Dl(i) && (i.hidden = !0);
        };
      s('click', '.js-added-fgp-btn', (e) => {
        const t = e.target;
        if (!(t instanceof Element)) return;
        const n = t.closest('.js-added-fgp-item').getAttribute('data-fgp');
        kl(n),
          ((e) => {
            Il(e).checked = !1;
          })(n);
      });
      const Sl = (e) => {
          const t = Hl().content.cloneNode(!0),
            n = t.querySelector('.js-added-fgp-item');
          return (
            (n.querySelector('.js-added-fgp-description').textContent = e.description),
            n.setAttribute('id', `fgp-item-${e.label}`),
            n.setAttribute('data-fgp', e.label),
            t
          );
        },
        Ml = () => document.querySelector('.js-role-fgp-input'),
        xl = () => document.querySelector('#js-fgp-list-items'),
        Al = () => document.querySelector('#js-fgp-summary'),
        Hl = () => Al().querySelector('#js-fgp-list-item-template'),
        ql = (e) => document.querySelector(`.js-fgp-category-title[data-fgp-category="${e}"]`),
        Cl = (e) => document.querySelector(`.js-fgp-category-list[data-fgp-category="${e}"]`),
        Il = (e) => xl().querySelector(`.js-fgp-list-item-checkbox[value="${e}"]`),
        _l = () => {
          (xl().hidden = !1), Ml().setAttribute('aria-expanded', 'true');
        };
      let $l = !1;
      const Nl = () => {
          $l ? ($l = !1) : ((xl().hidden = !0), Ml().setAttribute('aria-expanded', 'false'));
        },
        Rl = () => ($l = !0),
        Dl = (e) => !e.querySelector('.js-fgp-category-box').querySelector('.js-fgp-category-element:not([hidden])'),
        Pl = (e) => 0 === e.childElementCount;
      let Fl = {};
      const Bl = async () => {
          ((e) => 0 === Object.keys(e).length)(Fl) && (Fl = await ie(Ul())),
            (() => {
              const e = document.querySelectorAll('.js-fgp-list-item-checkbox[data-is-additional-fgp]');
              for (const t of e) t.click();
              document.querySelector('#role-name').focus();
            })();
        },
        Ol = (e) => Fl[e],
        Ul = () => Ml().getAttribute('data-fgp-metadata-url');
      function zl() {
        return c(document, '.js-saml-provider-settings-form', HTMLFormElement);
      }
      function Wl() {
        return zl().querySelector('.js-saml-form-inputs');
      }
      function Vl() {
        return c(document, '.js-org-saml-confirm-enforcement-hidden', HTMLInputElement);
      }
      function Gl(e) {
        e && e.classList.remove('d-none');
      }
      function Jl() {
        return (
          '1' === c(document, '.js-org-saml-currently-enabled', HTMLInputElement).value &&
          !c(document, '.js-org-enable-saml', HTMLInputElement).checked
        );
      }
      function Kl() {
        return c(document, '.is-submit-button-value', HTMLInputElement);
      }
      function Xl() {
        return (
          c(document, '.js-org-saml-enforce', HTMLInputElement).checked &&
          '0' === Vl().value &&
          !('1' === c(document, '.js-org-saml-previously-enforced', HTMLInputElement).value) &&
          '1' === c(document, '.js-org-has-unlinked-saml-members', HTMLInputElement).value
        );
      }
      function Yl() {
        zl().submit();
      }
      function Ql() {
        const e = document.querySelector('.js-org-enable-saml');
        e && e instanceof HTMLInputElement && ((e.checked = !0), Gl(Wl()));
      }
      function Zl(e, t) {
        t > 0
          ? (e.textContent = (function (e) {
              return e > 999 ? `${(e / 1e3).toFixed(1)}k` : e.toLocaleString();
            })(t))
          : e.remove();
      }
      function eu(e, t) {
        (c(e, '.js-add-child-team-loading-state').hidden = !t), (c(e, '.js-add-child-team-modal-content').hidden = t);
      }
      D('.js-per-seat-invite-field, .js-per-seat-invite .js-org-remove-item', async function (e, t) {
        !(function (e) {
          for (const n in e.selectors) {
            const t = e.selectors[n],
              o = document.querySelector(n);
            t && o && (o.textContent = t);
          }
          const t = 100 === e.filled_seats_percent;
          c(document, '.js-need-more-seats').classList.toggle('d-none', !t),
            c(document, '.js-add-org-member-form').classList.toggle('d-none', t);
        })((await t.json()).json);
      }),
        s('click', '.js-org-enable-saml', function (e) {
          e.currentTarget.checked
            ? Gl(Wl())
            : (function (e) {
                e && e.classList.add('d-none');
              })(Wl());
        }),
        s('click', '.js-saml-submit', function (e) {
          e.preventDefault();
          const t = e.currentTarget;
          P(zl(), t);
        }),
        s('click', '.js-org-saml-confirm-enforce-button', function () {
          (Vl().value = 'true'), P(zl());
        }),
        s('submit', '.js-saml-provider-settings-form', function (e) {
          e.preventDefault(),
            'test_settings' === Kl().name
              ? Yl()
              : 'save_settings' === Kl().name &&
                (Jl()
                  ? (async function () {
                      (
                        await ee({
                          content: c(document, '#disable-saml-confirmation', HTMLTemplateElement).content.cloneNode(!0),
                        })
                      ).addEventListener('dialog:remove', Ql);
                    })()
                  : Xl()
                  ? ee({
                      content: c(document, '#enforce-saml-confirmation', HTMLTemplateElement).content.cloneNode(!0),
                    })
                  : Yl());
        }),
        D('.js-fetch-tab-count', async function (e, t) {
          const n = (await t.json()).json;
          for (const o in n.selectors) {
            Zl(c(e, o), n.selectors[o]);
          }
        }),
        n('.js-fetch-tab-count', {
          constructor: HTMLFormElement,
          add: P,
        }),
        s('click', '.js-team-remove-user', function (e) {
          e.preventDefault();
          for (const t of document.querySelectorAll('.js-team-add-user-form')) t.classList.remove('d-none');
          c(document, '.js-team-add-user-name').focus(), i(e.currentTarget, 'li').remove();
        }),
        s('click', '.js-team-add-user-button', function (e) {
          e.preventDefault(),
            (async function (e) {
              const t = i(e, '.js-team-add-user-form'),
                n = c(t, '.js-team-add-user-name', HTMLInputElement),
                o = n.value;
              n.value = '';
              const s = c(document, '.js-team-user-logins');
              for (const i of s.querySelectorAll('li')) if (i.getAttribute('data-login') === o) return;
              if (!(await Ye('low'))) return;
              const r = new URL(t.getAttribute('data-template-url') || '', window.location.origin),
                l = new URLSearchParams(r.search.slice(1));
              l.append('member', o), (r.search = l.toString()), n.focus();
              const u = await Q(document, r.toString());
              s.appendChild(u);
              for (const i of a(document, '.js-login-field', HTMLInputElement)) i.disabled = !1;
              t.classList.add('d-none');
            })(e.currentTarget);
        }),
        s('click', '.js-rename-owners-team-next-btn', function () {
          const e = c(document, '.js-rename-owners-team-about-content');
          e.hidden = !e.hidden;
          const t = c(document, '.js-rename-owners-team-rename-form');
          t.hidden = !t.hidden;
        }),
        s('auto-complete-change', '.js-add-child-team-completer', async function ({ target: e }) {
          if (!(e instanceof d)) return;
          if (!e.value) return;
          const t = i(e, '.js-add-team-container');
          eu(t, !0);
          const n = i(e, '.js-add-child-team-form'),
            o = r(n, 'data-change-parent-summary-path'),
            s = await Q(document, o);
          (c(n, '.js-add-team-search').hidden = !0), c(n, '.js-add-team-warning').append(s), eu(t, !1);
        }),
        s('submit', '.js-add-child-team-form', function (e) {
          const t = e.currentTarget,
            { value: n } = c(t, '.js-add-child-team-completer', d);
          n || e.preventDefault();
        }),
        s('details-dialog-close', '.js-add-team-dialog', function (e) {
          const t = e.currentTarget,
            n = c(t, '.js-add-team-container');
          (c(t, '.js-add-team-search').hidden = !1), (c(t, '.js-add-team-warning').innerHTML = ''), eu(n, !1);
        }),
        s('click', '.js-expandable-team-breadcrumbs .js-team-breadcrumb-trigger', async function (e) {
          const t = i(e.target, '.js-expandable-team-breadcrumbs');
          t.classList.add('is-loading');
          try {
            await Z(t);
          } catch (n) {}
          t.classList.remove('is-loading');
        });
      class DiffPosition {
        constructor(e, t, n) {
          (this.diffId = e), (this.side = t), (this.lineNumber = n), (this.element = ge(document, this.anchor()));
        }
        sideForCommenting() {
          return this.element && this.element.classList.contains('blob-num-context')
            ? 'right'
            : {
                R: 'right',
                L: 'left',
              }[this.side];
        }
        isContext() {
          return !!this.element && this.element.classList.contains('blob-num-context');
        }
        anchor() {
          return `${this.diffId}${this.anchorSuffix()}`;
        }
        anchorSuffix() {
          return `${this.side}${this.lineNumber}`;
        }
        is(e) {
          return this.diffId === e.diffId && this.side === e.side && this.lineNumber === e.lineNumber;
        }
      }
      class DiffRange {
        constructor(e, t, n, o, s) {
          (this.elements = new Set()),
            (this.isParsed = !1),
            (this.isSplit = !1),
            (this._rows = new Set()),
            (this._isAcrossHunks = !1),
            (this._isContextOnly = !0),
            (this._includesExpandedLine = !1),
            (this.diffId = e),
            (this.diffTable = document.querySelector(`.js-diff-table[data-diff-anchor="${e}"]`)),
            this.diffTable && (this.isSplit = this.diffTable.classList.contains('js-file-diff-split')),
            (this.start = new DiffPosition(e, t, n)),
            (this.end = new DiffPosition(e, o, s)),
            (this.lineCount = 0),
            this.parse();
        }
        anchor() {
          const e = [];
          return e.push(this.start.anchor()), this.start.is(this.end) || e.push(this.end.anchorSuffix()), e.join('-');
        }
        parse() {
          if (!this.diffTable) return;
          let e = this.unify(this.diffTable.querySelectorAll('.js-linkable-line-number'));
          (e = this.filterInRange(e)),
            (this.lineCount = e.length),
            (this.elements = this.expandRelatedElements(e)),
            (this.isParsed = !0);
        }
        unify(e) {
          if (!this.isSplit) return Array.from(e);
          const t = [];
          let n = [],
            o = [];
          for (const s of e)
            s.classList.contains('blob-num-addition')
              ? n.push(s)
              : s.classList.contains('blob-num-deletion')
              ? o.push(s)
              : (t.push(...o, ...n, s), (n = []), (o = []));
          return t.push(...o, ...n), t;
        }
        filterInRange(e) {
          if (!this.start.element || !this.end.element) return [];
          let t = e.indexOf(this.start.element),
            n = e.indexOf(this.end.element);
          if (t > n) {
            [t, n] = [n, t];
            const [e, o] = [this.end, this.start];
            (this.start = e), (this.end = o);
          }
          return e.slice(t, n + 1);
        }
        isContextOnly() {
          return this.isParsed || this.parse(), this._isContextOnly;
        }
        isAcrossHunks() {
          return this.isParsed || this.parse(), this._isAcrossHunks;
        }
        includesExpandedLine() {
          return this.isParsed || this.parse(), this._includesExpandedLine;
        }
        rows() {
          return this.isParsed || this.parse(), this._rows;
        }
        expandRelatedElements(e) {
          const t = this.isSplit,
            n = e[0],
            o = e[e.length - 1];
          if (n && o) {
            const e = n.closest('[data-hunk]'),
              t = o.closest('[data-hunk]');
            if (e && t) {
              e.getAttribute('data-hunk') !== t.getAttribute('data-hunk') && (this._isAcrossHunks = !0);
            }
          }
          return e.reduce((e, n) => {
            !this._includesExpandedLine && n.closest('.blob-expanded') && (this._includesExpandedLine = !0);
            const o = n.parentElement;
            o instanceof HTMLElement && this._rows.add(o);
            const s = n.classList.contains('blob-num-deletion') || n.classList.contains('blob-num-addition');
            if ((s && (this._isContextOnly = !1), !o)) return e;
            if (t && s) {
              return Array.from(o.children).indexOf(n) < 2
                ? e.add(o.children[0]).add(o.children[1])
                : e.add(o.children[2]).add(o.children[3]);
            }
            for (const t of Array.from(o.children)) e.add(t);
            return e;
          }, new Set());
        }
      }
      function tu(e) {
        const t = e.match(/^#?(diff-[a-f0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
        if (null != t && 6 === t.length) return t;
        const n = e.match(/^#?(discussion-diff-[0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
        return null != n && 6 === n.length ? n : null;
      }
      let nu = null,
        ou = null,
        su = !1,
        iu = null;
      function ru() {
        return nu;
      }
      function au(e) {
        return !!e.closest('.js-multi-line-comments-enabled');
      }
      function cu(e, t) {
        if (!au(e)) return !1;
        const {
          start: { lineNumber: n },
          end: { lineNumber: o },
        } = t;
        return (n !== o || !t.isContextOnly()) && !t.isAcrossHunks() && !t.includesExpandedLine();
      }
      function lu(e) {
        return i(e, '.js-diff-table').classList.contains('is-selecting');
      }
      function uu() {
        ju(), window.history.replaceState(null, '', '#'), bu();
      }
      function du(e, t) {
        ju();
        let n = e.id;
        if (t) {
          const t = tu(n);
          if (!t) return;
          const o = t[1],
            s = t[2],
            r = t[3];
          if (nu && nu.diffId === o) {
            if (s === nu.start.side && r < nu.start.lineNumber) return;
            const t = new DiffRange(o, nu.start.side, nu.start.lineNumber, s, +r);
            n = t.anchor();
            const a = e.closest('.js-file-content[data-hydro-view]');
            if (
              (a instanceof HTMLElement &&
                (function (e, t) {
                  const n = {
                    starting_diff_position: t.start.side + t.start.lineNumber,
                    ending_diff_position: t.end.side + t.end.lineNumber,
                    line_count: t.lineCount,
                  };
                  e.setAttribute('data-hydro-client-context', JSON.stringify(n)), Re(e);
                })(a, t),
              su && lu(e))
            ) {
              i(e, '.js-diff-table').classList.toggle('is-commenting', cu(e, t));
            }
            ou = function () {
              if (cu(e, t)) {
                const n = `.js-add-line-comment[data-side="${t.end.sideForCommenting()}"]`,
                  o = i(e, 'tr').querySelector(n);
                o && t && o.click();
              }
            };
          }
        }
        window.history.replaceState(null, null, `#${n}`), bu();
      }
      function mu(e) {
        if (!(e instanceof HTMLElement)) return null;
        if (e.classList.contains('js-linkable-line-number')) return e;
        const t = e.previousElementSibling;
        return t ? mu(t) : null;
      }
      function fu(e) {
        nu && (e.target.closest('.js-diff-table') || (window.history.replaceState(null, null, '#'), bu()));
      }
      function pu(e) {
        const t = e.target;
        if (!(t instanceof Element)) return;
        iu &&
          (function () {
            if (!iu) return;
            du(iu, !1);
            const e = i(iu, '.js-diff-table');
            (iu = null),
              e.classList.add('is-selecting'),
              e.classList.add('is-commenting'),
              document.addEventListener(
                'mouseup',
                function (t) {
                  e.classList.remove('is-selecting'),
                    e.classList.remove('is-selecting', 'is-commenting'),
                    ou && ou(),
                    (ou = null),
                    hu(e),
                    t.preventDefault();
                },
                {
                  once: !0,
                },
              );
          })();
        const n = t.closest('.blob-code, .js-linkable-line-number');
        var o;
        return n
          ? n.classList.contains('blob-code')
            ? (function (e) {
                const t = mu(e);
                t && lu(t) && du(t, !0);
              })(n)
            : void (n.classList.contains('js-linkable-line-number') && lu((o = n)) && du(o, !0))
          : void 0;
      }
      function gu(e) {
        e.addEventListener('mouseenter', pu, {
          capture: !0,
        });
      }
      function hu(e) {
        (su = !1),
          e.removeEventListener('mouseenter', pu, {
            capture: !0,
          }),
          setTimeout(() => {
            document.addEventListener('click', fu, {
              once: !0,
            });
          }, 0);
      }
      function ju(e) {
        const t = e || document.querySelector('.js-add-line-comment[data-start_side]');
        t &&
          (t.removeAttribute('data-start_side'),
          t.removeAttribute('data-start_position'),
          t.removeAttribute('data-start_line'),
          t.removeAttribute('data-startiscontext'),
          t.removeAttribute('data-endiscontext'));
      }
      function bu() {
        if (nu) {
          for (const e of nu.elements)
            e.classList.remove(
              'selected-line',
              'selected-line-top',
              'selected-line-bottom',
              'selected-line-left',
              'selected-line-right',
            );
          nu = null;
        }
        const e = tu(window.location.hash);
        if (!e) return;
        const t = e[1],
          n = e[2],
          o = e[3],
          s = e[4] || n,
          r = e[5] || o;
        nu = new DiffRange(t, n, +o, s, +r);
        const a = Array.from(nu.elements)[0];
        a &&
          (i(a, '.js-diff-table').classList.contains('file-diff-split')
            ? (function () {
                if (!nu) return;
                for (const i of nu.elements) i.classList.add('selected-line');
                const e = [],
                  t = [],
                  n = [],
                  o = [];
                for (const i of nu.rows()) {
                  const [s, r, a, c] = i.children;
                  e.push(s), t.push(r), n.push(a), o.push(c);
                }
                function s(e) {
                  for (const [t, n] of e.entries()) {
                    if (n.classList.contains('empty-cell')) continue;
                    const o = e[t - 1];
                    (o && o.classList.contains('selected-line')) || n.classList.add('selected-line-top');
                    const s = e[t + 1];
                    (s && s.classList.contains('selected-line')) || n.classList.add('selected-line-bottom');
                  }
                }
                s(e), s(t), s(n), s(o);
                for (const [i, r] of t.entries())
                  o[i].classList.contains('selected-line') || r.classList.add('selected-line-right');
                for (const [i, r] of n.entries())
                  t[i].classList.contains('selected-line') || r.classList.add('selected-line-left');
              })()
            : (function () {
                if (!nu) return;
                for (const o of nu.elements) o.classList.add('selected-line');
                const e = Array.from(nu.rows()),
                  t = e[0];
                for (const o of t.children) o.classList.add('selected-line-top');
                const n = e[e.length - 1];
                for (const o of n.children) o.classList.add('selected-line-bottom');
              })());
      }
      function vu(e) {
        var t;
        const n = c(e, '.js-inline-comment-form-container');
        n.classList.add('open'),
          null === (t = n.querySelector('.js-write-tab')) || void 0 === t || t.click(),
          c(n, '.js-comment-field').focus(),
          u(n, 'inlinecomment:focus');
      }
      function yu(e) {
        e.reset(), ju();
        const t = i(e, '.js-inline-comment-form-container');
        t.classList.remove('open'), u(t, 'inlinecomment:collapse');
      }
      function Lu(e) {
        const t = e.closest('.js-teams-write-a-post');
        return t
          ? (function (e) {
              const t = c(e, '.js-team-discussions-post-compose');
              t.classList.contains('d-none') ||
                (t.classList.add('d-none'),
                c(e, '.js-post-placeholder').classList.remove('d-none'),
                e.classList.remove('active')),
                c(e, '.js-comment-form-error').classList.add('d-none');
            })(t)
          : e.closest('.js-teams-reply-to-post')
          ? (function (e) {
              yu(e);
            })(e)
          : void 0;
      }
      function wu(e) {
        const t = e.closest('.js-teams-reply-to-post'),
          n = t && t.querySelector('.js-comment-form-error');
        n && n.classList.add('d-none');
      }
      function Tu(e, t) {
        e.textContent = (parseInt(e.textContent) + t).toString();
      }
      function Eu(e, t) {
        e.classList.add('d-none'), c(e.parentElement, t).classList.remove('d-none');
      }
      s('mousedown', '.js-add-line-comment', function (e) {
        const t = e.target.parentElement;
        if (!t) return;
        if (!au(e.target)) return;
        const n = mu(t);
        if (!n) return;
        const o = i(e.target, '.js-diff-table');
        gu(o),
          (iu = n),
          (su = !0),
          e.target.addEventListener(
            'mouseup',
            function () {
              hu(o), (iu = null), (su = !1);
            },
            {
              once: !0,
            },
          ),
          nu && nu.lineCount > 1 && e.preventDefault();
      }),
        s('mousedown', '.js-linkable-line-number', function (e) {
          if (!(e instanceof MouseEvent)) return;
          if (0 !== e.button) return;
          const t = e.target;
          if (!(t instanceof Element)) return;
          const n = i(t, '.js-diff-table');
          n.classList.add('is-selecting'),
            gu(n),
            document.addEventListener(
              'mouseup',
              function () {
                i(t, '.js-diff-table').classList.remove('is-selecting'), hu(n);
              },
              {
                once: !0,
              },
            ),
            du(t, e instanceof MouseEvent && e.shiftKey),
            e.preventDefault();
        }),
        Ee(bu),
        n('.blob-expanded', bu),
        n('.js-diff-progressive-loader', function (e) {
          e.addEventListener('load', bu);
        }),
        n('.js-diff-entry-loader', function (e) {
          e.addEventListener('load', bu);
        }),
        s('click', '.js-toggle-inline-comment-form', function (e) {
          vu(i(e.currentTarget, '.js-line-comments'));
        }),
        s('quote-selection', '.js-line-comments', function (e) {
          vu(e.currentTarget);
        }),
        _('keydown', '.js-inline-comment-form-container form .js-comment-field', function (e) {
          const t = e.target;
          if (!t.classList.contains('js-navigation-enable') && 'Escape' === e.key && 0 === t.value.length) {
            yu(i(t, 'form', HTMLFormElement)), e.preventDefault();
          }
        }),
        s('click', '.js-hide-inline-comment-form', function (e) {
          const t = i(e.currentTarget, 'form', HTMLFormElement),
            n = i(e.currentTarget, '.js-inline-comment-form-container').querySelector('.js-multi-line-preview');
          n && (n.hidden = !0), !Y(t) || confirm(r(e.target, 'data-confirm-cancel-text')) ? yu(t) : e.preventDefault();
        }),
        s('click', '.js-team-discussions-team-description-toggle', function () {
          c(document, '.js-team-discussions-team-description').classList.toggle('d-none'),
            c(document, '.js-team-discussions-team-description-form').classList.toggle('d-none');
        }),
        s('click', '.js-team-discussions-post-toggle', function (e) {
          const t = i(e.target, '.js-teams-write-a-post');
          t.classList.contains('active') ||
            (t.classList.add('active'),
            c(t, '.js-team-discussions-post-compose').classList.remove('d-none'),
            c(t, '.js-post-placeholder').classList.add('d-none'),
            c(t, '.js-title-field').focus());
        }),
        s('click', '.js-hide-post-form', function (e) {
          const t = i(e.target, '.js-new-comment-form', HTMLFormElement);
          !Y(t) || confirm(r(e.target, 'data-confirm-cancel-text')) ? Lu(e.target) : e.preventDefault();
        }),
        s('click', '.js-hide-inline-comment-form', function (e) {
          wu(e.target);
        }),
        D('.js-new-comment-form', async function (e, t) {
          await t.text(), Lu(e), wu(e);
        }),
        D('.js-team-discussions-team-description-form', async function (e, t) {
          try {
            await t.text();
          } catch (i) {}
          const n = c(document, '.js-team-discussions-team-description'),
            o = c(n, '.description'),
            s = c(document, '.js-team-discussions-team-description-field', HTMLTextAreaElement);
          n.classList.toggle('d-none'),
            e.classList.toggle('d-none'),
            s.value.trim()
              ? ((o.textContent = s.value), (s.defaultValue = s.value))
              : ((o.textContent = 'This team has no description'), (s.defaultValue = ''));
        }),
        D('.js-comment-pin', async function (e, t) {
          const n = c(e, 'button[type=submit]');
          n.blur(), await t.text();
          const o = c(e, '.js-pinned-discussion-input', HTMLInputElement),
            s = document.querySelector('#pinned_posts_counter'),
            a = r(n, 'aria-label'),
            l = r(n, 'data-alternate-aria-label');
          n.setAttribute('data-alternate-aria-label', a), n.setAttribute('aria-label', l), n.classList.toggle('pinned');
          const u = n.classList.contains('pinned');
          if (s) {
            Tu(s, u ? 1 : -1);
            const t = i(s, '.js-pinned-post-tab');
            if (!u && t.classList.contains('selected')) {
              !(function (e) {
                e.addEventListener(
                  'transitionend',
                  function (t) {
                    'opacity' === t.propertyName && e.remove();
                  },
                  {
                    once: !0,
                  },
                ),
                  e.classList.add('fade-out');
              })(i(e, '.js-comment-delete-container'));
            }
          }
          o.value = u ? '0' : '1';
        }),
        D('.js-comment-delete', async function (e, t) {
          await t.text();
          const n = e.closest('.discussion-post'),
            o = n && n.querySelector('.js-comment-pin button[type=submit]');
          if (o && o.classList.contains('pinned')) {
            const e = document.querySelector('#pinned_posts_counter');
            e && Tu(e, -1);
          }
        }),
        s('quote-selection', '.js-discussion-post', function (e) {
          const t = c(e.target, '.js-inline-comment-form-container');
          t.classList.add('open'), c(t, '.js-write-tab').click(), c(t, '.js-comment-field').focus();
        }),
        D('.js-comment-subscribe', async function (e, t) {
          await t.text(), Eu(e, '.js-comment-unsubscribe');
        }),
        D('.js-comment-unsubscribe', async function (e, t) {
          await t.text(), Eu(e, '.js-comment-subscribe');
        }),
        D('.js-discussion-post-update', async function (e, t) {
          const n = e.closest('.js-comment');
          if (!n) return;
          const o = n.querySelector('.js-comment-title');
          if (!o) return;
          const s = await t.json();
          o.textContent = s.json.title;
        }),
        (async function () {
          await G;
          const e = document.querySelector('.js-show-discussion .js-mark-notification-form');
          e instanceof HTMLFormElement && P(e);
        })();
      let ku = !1;
      function Su(e) {
        c(document, '.js-selected-group-mappings-container').hidden = e;
      }
      function Mu(e) {
        const t = i(e, 'form', HTMLFormElement),
          n = t.querySelector('.js-selected-team-id'),
          o = n instanceof HTMLInputElement && n.value,
          s = c(t, '.js-team-privacy-closed'),
          r = c(t, '.js-team-privacy-secret'),
          a = c(s, 'input', HTMLInputElement),
          l = c(r, 'input', HTMLInputElement);
        r.classList.toggle('text-gray', !!o), (l.disabled = !!o), o && (a.checked = !0);
      }
      function xu(e) {
        const t = c(e, '.js-team-member-summary');
        c(t, '.js-team-member-summary-text').textContent =
          (function (e) {
            const t = a(e, 'input.js-team-member:checked', HTMLInputElement);
            return 0 === t.length
              ? null
              : t.length <= 3
              ? t.map((e) => r(e, 'data-team-member-text')).join(', ')
              : `${t.length} members selected`;
          })(e) || r(t, 'data-default-label');
      }
      s('click', '.js-open-child-team', function (e) {
        if (ku) return;
        ku = !0;
        const t = e.currentTarget.getAttribute('data-parent-team-slug');
        if (!t) return;
        const n = document.querySelectorAll(`.js-child-team[data-parent-team-slug="${t}"]`),
          o = i(e.currentTarget, '.js-team-row');
        if (o.classList.contains('is-open'))
          e.currentTarget.setAttribute('aria-expanded', 'false'),
            (function (e, t) {
              (function e(t) {
                for (const n of t) {
                  const t = r(n, 'data-team-slug'),
                    o = document.querySelectorAll(`.js-child-team[data-parent-team-slug="${t}"]`);
                  e(o), n.classList.remove('is-open'), n.classList.add('d-none');
                }
              })(t),
                e.classList.remove('is-open'),
                (ku = !1);
            })(o, n);
        else {
          e.currentTarget.setAttribute('aria-expanded', 'true'),
            (async function (e, t, n) {
              if (t.length) {
                for (const e of t) e.classList.remove('d-none');
                e.classList.add('is-open'), (ku = !1);
              } else {
                const t = await Q(document, n);
                e.after(t), e.classList.add('is-open'), (ku = !1);
              }
            })(o, n, r(e.currentTarget, 'data-child-team-url'));
        }
      }),
        s('click', '.js-show-more-child-teams', async function (e) {
          if (ku) return;
          ku = !0;
          const t = e.currentTarget,
            n = i(t, '.js-team-row'),
            o = r(t, 'data-child-team-url'),
            s = n.parentNode,
            a = await Q(document, o);
          n.before(a), s && s.removeChild(n), (ku = !1);
        }),
        N('.js-team-ldap-group-field', function (e) {
          i(e.currentTarget, '.form-group').classList.remove('errored');
        }),
        s('auto-complete-change', '.js-import-ldap-group-completer', function (e) {
          const t = e.target,
            n = i(t, '.js-ldap-group-adder'),
            o = c(t, '.js-team-ldap-group-field', HTMLInputElement),
            s = c(n, '.js-team-ldap-dn-field', HTMLInputElement);
          if (((s.value = ''), t.value)) {
            const { dn: e, cn: n } = JSON.parse(t.value);
            (o.value = n), (s.value = e);
          }
        }),
        D('.js-ldap-group-adder', async function (e, t, n) {
          n.headers.set('X-Context', 'import');
          const o = i(e, '.js-ldap-import-groups-container');
          let s;
          try {
            s = await t.html();
          } catch (a) {
            return void (a.response && c(e, '.form-group').classList.add('errored'));
          }
          const r = document.querySelector('.js-import-form-actions');
          o.classList.remove('is-empty'),
            c(o, '.js-ldap-imported-groups').prepend(s.html),
            e.reset(),
            c(e, '.js-team-ldap-group-field').focus(),
            r && r.classList.remove('d-none');
        }),
        s('submit', '.js-team-remove-group', function (e) {
          i(e.currentTarget, '.js-team').classList.add('is-removing'), c(document, '.js-team-ldap-group-field').focus();
        }),
        D('.js-team-remove-group', async function (e, t) {
          try {
            await t.text();
          } catch (n) {
            return void i(e, '.js-team').classList.remove('is-removing');
          }
          i(e, '.js-team').remove(),
            document.querySelector('.js-team:not(.is-removing)') ||
              (c(document, '.js-ldap-import-groups-container').classList.add('is-empty'),
              c(document, '.js-import-form-actions').classList.add('d-none'));
        }),
        s('click', '.js-edit-team', function (e) {
          const t = i(e.currentTarget, '.js-team');
          t.classList.contains('is-removing') || (t.classList.add('is-editing'), c(t, '.js-team-name-field').focus());
        }),
        s('click', '.js-cancel-team-edit', function (e) {
          const t = i(e.currentTarget, '.js-team'),
            n = c(t, '.js-team-form', HTMLFormElement);
          t.classList.remove('is-editing'), n.reset();
        }),
        D('.js-team-form', async function (e, t, n) {
          n.headers.set('X-Context', 'import');
          const o = await t.html();
          i(e, '.js-team').replaceWith(o.html);
        }),
        s(
          'details-menu-selected',
          '.js-team-group-mapping-menu',
          function (e) {
            const t = e.detail.relatedTarget,
              n = r(t, 'data-id'),
              o = r(t, 'data-name'),
              s = r(t, 'data-description'),
              i = c(document, '.js-team-group-mapping-template', HTMLTemplateElement),
              a = document.importNode(i.content, !0),
              l = c(a, '.js-group-mapping-hidden-name', HTMLInputElement),
              u = c(a, '.js-group-mapping-hidden-description', HTMLInputElement);
            (l.name = l.name.replace('{GROUP_ID}', n)),
              (u.name = u.name.replace('{GROUP_ID}', n)),
              (l.value = o),
              (u.value = s),
              (c(a, '.js-group-mapping-name').textContent = o),
              (c(a, '.js-group-mapping-desc').textContent = s);
            const d = c(document, '.js-selected-group-mappings');
            (function (e, t) {
              return null != t.querySelector(`input[name="team[group_mappings][${e}][name]"]`);
            })(n, d) || (d.append(a), Su(!1));
          },
          {
            capture: !0,
          },
        ),
        s('click', '.js-remove-group-mapping', function (e) {
          i(e.currentTarget, '.js-group-mapping-container').remove(),
            !!document.querySelector('.js-selected-group-mappings .js-group-mapping-container') || Su(!0);
        }),
        n('.js-team-group-mapping-menu', function (e) {
          const t = c(e, 'remote-input'),
            n = document.getElementById(r(t, 'aria-owns'));
          n &&
            t.addEventListener('error', function () {
              n.classList.add('is-error');
            });
        }),
        s('click', '.js-team-search-filter', function (e) {
          e.preventDefault();
          const t = r(e.currentTarget, 'data-filter'),
            n = i(e.currentTarget, '[data-filter-on]'),
            o = r(n, 'data-filter-on'),
            s = c(document, '.js-team-search-field', HTMLInputElement),
            a = new RegExp(`${o}:[a-z]+`),
            l = s.value.trim().replace(a, '');
          (s.value = `${l} ${t}`.replace(/\s\s/, ' ')), s.focus(), u(s, 'input');
        }),
        n('.js-select-team-menu', function (e) {
          Mu(e);
        }),
        s(
          'details-menu-selected',
          '.js-select-team-menu',
          function (e) {
            const t = e.target,
              n = e.detail.relatedTarget;
            (c(t, '.js-selected-team-id', HTMLInputElement).value = n.value),
              (c(t, '.js-already-selected-team-name', HTMLInputElement).value = r(n, 'data-team-name')),
              Mu(t);
          },
          {
            capture: !0,
          },
        ),
        s('click', '.js-create-team-button', function (e) {
          const t = i(e.currentTarget, 'form'),
            n = t.querySelector('.js-already-selected-team-name');
          if (!(n instanceof HTMLInputElement)) return;
          const o = t.querySelector('.js-original-team-visibility'),
            s = t.querySelector('.js-team-privacy-secret');
          if (!s) return;
          const a = c(s, 'input', HTMLInputElement),
            l = (function (e) {
              return e.value !== e.getAttribute('data-original-team-name');
            })(n),
            u = (function (e, t) {
              return (
                null != e && t.checked && !['', 'SECRET'].includes(e.getAttribute('data-original-team-visibility'))
              );
            })(o, a);
          if (l || u) {
            e.preventDefault();
            const o = r(t, 'data-important-changes-summary-url'),
              s = new URL(o, window.location.origin),
              i = new URLSearchParams(s.search.slice(1));
            i.append('parent_team', n.value),
              u && i.append('visibility_changed', u.toString()),
              l && i.append('parent_changed', l.toString()),
              (s.search = i.toString()),
              ee({
                content: Q(document, s.toString()),
                dialogClass: 'p-3',
              });
          }
        }),
        s('click', '.js-confirm-edit-team', function () {
          c(document, '.js-org-team-form', HTMLFormElement).submit();
        }),
        s('auto-complete-change', '.js-team-project-completer', function (e) {
          const t = e.target,
            n = i(t, 'form', HTMLFormElement),
            o = g(n, 'project_id'),
            s = c(n, '.js-team-project-complete-field', HTMLInputElement);
          if (t.value) {
            const { name: e, id: n } = JSON.parse(t.value);
            (o.value = n), (s.value = e);
          } else o.value = '';
        }),
        s(
          'details-menu-selected',
          '.js-team-member-menu',
          function (e) {
            xu(i(e.currentTarget, '.js-team-member-picker'));
          },
          {
            capture: !0,
          },
        ),
        n('.js-team-member-summary', function (e) {
          xu(i(e, '.js-team-member-picker'));
        }),
        n('.js-org-transform-poller', function (e) {
          const t = e.getAttribute('data-redirect-url') || '';
          e.addEventListener('load', function () {
            window.location.href = t;
          });
        }),
        n('.js-transform-notice', {
          constructor: HTMLElement,
          add(e) {
            const t = ks('org_transform_notice');
            for (const o of t) {
              const t = document.createElement('span');
              try {
                (t.textContent = atob(decodeURIComponent(o.value))), Ms(o.key), e.appendChild(t), (e.hidden = !1);
              } catch (n) {}
              return;
            }
          },
        }),
        s('change', '.js-notification-restrictions-confirmation-needed', function (e) {
          const t = e.currentTarget,
            n = c(document, '.js-notification-restrictions-confirm-modal', HTMLElement),
            o = c(document, '.js-notification-restrictions-save', HTMLButtonElement);
          (n.hidden = !t.checked), (o.hidden = t.checked);
        });
      let Au = class PagerFlowElement extends HTMLElement {
        constructor() {
          super(...arguments), (this.currentPage = 0);
        }
        connectedCallback() {
          this.toggleTargets();
        }
        toggleTargets() {
          const e = this.currentPage + 1 >= this.pages.length;
          for (const t of this.hideOnLastPages) t.hidden = e;
          for (const t of this.showOnLastPages) t.hidden = !e;
        }
        next() {
          (this.pages[this.currentPage].hidden = !0),
            (this.currentPage += 1),
            (this.pages[this.currentPage].hidden = !1),
            this.toggleTargets();
        }
      };
      function Hu(e, t) {
        const n = e.value;
        (e.value = t.textContent || ''), (t.textContent = n);
      }
      No([Bo], Au.prototype, 'hideOnLastPages', void 0),
        No([Bo], Au.prototype, 'showOnLastPages', void 0),
        No([Bo], Au.prototype, 'pages', void 0),
        (Au = No([Oo], Au)),
        s('click', '#load-readme', function (e) {
          const t = c(document, '#gollum-editor-body', HTMLTextAreaElement),
            n = c(document, '#editor-body-buffer'),
            o = c(document, '#undo-load-readme'),
            s = n.textContent,
            i = r(e.currentTarget, 'data-readme-name');
          Hu(t, n),
            e.currentTarget instanceof HTMLButtonElement &&
              ((e.currentTarget.disabled = !0),
              (e.currentTarget.textContent = `${i} loaded`),
              o.classList.remove('d-none'),
              t.addEventListener('input', function e() {
                t.value !== s && (o.classList.add('d-none'), t.removeEventListener('input', e));
              }));
        }),
        s('click', '#undo-load-readme', function (e) {
          Hu(c(document, '#gollum-editor-body', HTMLTextAreaElement), c(document, '#editor-body-buffer'));
          const t = c(document, '#load-readme', HTMLButtonElement),
            n = r(t, 'data-readme-name');
          (t.disabled = !1), (t.textContent = `Load ${n}`), e.currentTarget.classList.add('d-none');
        });
      let qu = !1;
      function Cu(e, t) {
        return document.querySelector(`#${e}LC${t}`);
      }
      function Iu({ blobRange: e, anchorPrefix: t }) {
        if (
          0 !== document.querySelectorAll('.js-file-line').length &&
          ((function () {
            for (const e of document.querySelectorAll('.js-file-line.highlighted')) e.classList.remove('highlighted');
            for (const e of document.querySelectorAll('.js-file-line .highlighted')) {
              const t = i(e, '.js-file-line');
              e.replaceWith(...e.childNodes), t.normalize();
            }
          })(),
          e)
        )
          if (null === e.start.column || null === e.end.column)
            for (let n = e.start.line; n <= e.end.line; n += 1) {
              const e = Cu(t, n);
              e && e.classList.add('highlighted');
            }
          else if (e.start.line === e.end.line && null != e.start.column && null != e.end.column) {
            const n = tt(e, (e) => Cu(t, e));
            if (n) {
              const e = document.createElement('span');
              e.classList.add('highlighted'), nt(n, e);
            }
          }
      }
      function _u() {
        const e = Qe(window.location.hash);
        Iu(e),
          (function () {
            const e = document.querySelector('.js-file-line-actions');
            if (!e) return;
            const t = document.querySelectorAll('.js-file-line.highlighted'),
              n = t[0];
            if (n) {
              !(function (e) {
                const t = [];
                for (const o of e) t.push(o.textContent);
                const n = document.getElementById('js-copy-lines');
                if (n instanceof j) {
                  (n.textContent = `Copy ${1 === e.length ? 'line' : 'lines'}`), (n.value = t.join('\n'));
                  const o = `Blob, copyLines, numLines:${e.length.toString()}`;
                  n.setAttribute('data-ga-click', o);
                }
              })(t),
                (function (e) {
                  const t = document.getElementById('js-view-git-blame');
                  if (!t) return;
                  t.setAttribute('data-ga-click', `Blob, viewGitBlame, numLines:${e.toString()}`);
                })(t.length);
              const o = (function (e) {
                const t = document.querySelector('.js-permalink-shortcut');
                if (t instanceof HTMLAnchorElement) {
                  const n = `${t.href}${window.location.hash}`,
                    o = document.getElementById('js-copy-permalink');
                  if (o instanceof j) {
                    o.value = n;
                    const t = `Blob, copyPermalink, numLines:${e.toString()}`;
                    o.setAttribute('data-ga-click', t);
                  }
                  return n;
                }
              })(t.length);
              o &&
                (function (e, t) {
                  const n = document.getElementById('js-new-issue');
                  if (n instanceof HTMLAnchorElement) {
                    if (!n.href) return;
                    const o = new URL(n.href, window.location.origin),
                      s = new URLSearchParams(o.search.slice(1));
                    s.set('permalink', e),
                      (o.search = s.toString()),
                      (n.href = o.toString()),
                      n.setAttribute('data-ga-click', `Blob, newIssue, numLines:${t.toString()}`);
                  }
                })(o, t.length),
                (e.style.top = `${n.offsetTop - 2}px`),
                e.classList.remove('d-none');
            } else e.classList.add('d-none');
          })();
        const { blobRange: t, anchorPrefix: n } = e,
          o = t && Cu(n, t.start.line);
        if (!qu && o) {
          o.scrollIntoView(), (i(o, '.blob-wrapper, .js-blob-wrapper').scrollLeft = 0);
        }
        qu = !1;
      }
      function $u(e) {
        ot(e), ke(e);
      }
      async function Nu(e, t) {
        let n;
        if (t) {
          const o = 'R' === t.slice(-1) ? 'data-right-range' : 'data-left-range',
            s = e.getAttribute(o) || '';
          n = t + parseInt(s.split('-')[0], 10);
        } else n = e.hash.slice(1);
        const o = r(e, 'data-url'),
          s = new URL(o, window.location.origin),
          a = new URLSearchParams(s.search.slice(1));
        a.append('anchor', n), (s.search = a.toString());
        const c = await Q(document, s.toString()),
          l = i(e, '.js-expandable-line'),
          u = (function (e, t) {
            const n = e.nextElementSibling;
            return n instanceof HTMLElement && n.matches(t) ? n : null;
          })(l, '.file-diff-line');
        u
          ? Le(u, () => {
              l.replaceWith(c);
            })
          : l.replaceWith(c);
      }
      function Ru(e, t, n, o) {
        const s = parseInt(n, 10),
          i = parseInt(o || '', 10);
        return a(e, '.js-expand', HTMLAnchorElement).filter((e) => {
          const n = 'R' === t ? 'data-right-range' : 'data-left-range',
            o = (e.getAttribute(n) || '').split('-'),
            r = parseInt(o[0], 10),
            a = parseInt(o[1], 10);
          return (r <= s && s <= a) || (s <= r && a <= i) || (r <= i && i <= a);
        });
      }
      Ee(function () {
        if (document.querySelector('.js-file-line-container')) {
          setTimeout(_u, 0);
          const e = window.location.hash;
          for (const t of document.querySelectorAll('.js-update-url-with-hash'))
            if (t instanceof HTMLAnchorElement) t.hash = e;
            else if (t instanceof HTMLFormElement) {
              const n = new URL(t.action, window.location.origin);
              (n.hash = e), (t.action = n.toString());
            }
        }
      }),
        s('click', '.js-line-number', function (e) {
          const t = Qe(e.currentTarget.id),
            { blobRange: n } = t,
            o = Ze(window.location.hash);
          o &&
            e.shiftKey &&
            (t.blobRange = {
              start: o.start,
              end: n.end,
            }),
            (function (e) {
              const t = window.scrollY;
              (qu = !0), e(), window.scrollTo(0, t);
            })(() => {
              window.location.hash = et(t);
            });
        }),
        s('submit', '.js-jump-to-line-form', function (e) {
          const t = c(e.currentTarget, '.js-jump-to-line-field', HTMLInputElement)
            .value.replace(/[^\d-]/g, '')
            .split('-')
            .map((e) => parseInt(e, 10))
            .filter((e) => e > 0)
            .sort((e, t) => e - t);
          t.length && (window.location.hash = `L${t.join('-L')}`), e.preventDefault();
        }),
        N('.js-csv-filter-field', function (e) {
          const t = e.target.value.toLowerCase();
          for (const n of document.querySelectorAll('.js-csv-data tbody tr'))
            n instanceof HTMLElement && n.textContent && (n.hidden = !!t && !n.textContent.toLowerCase().includes(t));
        }),
        s('navigation:keydown', '.js-commits-list-item', function (e) {
          e.target instanceof Element && 'c' === e.detail.hotkey && c(e.target, '.js-navigation-open').click();
        }),
        Ee(function () {
          const e = (function (e) {
            if (!e) return;
            const t = tu(e);
            if (!t) return;
            const n = t[1],
              o = t[2],
              s = t[3],
              i = t[5];
            return {
              anchor: n,
              side: o,
              line: s,
              lastLine: i,
              hashFragment: n + o + s,
              partialHashFragment: n + o,
            };
          })(window.location.hash);
          e &&
            ((ge(document, e.hashFragment) && !e.lastLine) ||
              (async function e(t, n) {
                const { anchor: o, side: s, line: i, lastLine: r, hashFragment: a, partialHashFragment: c } = t,
                  l = ge(document, o);
                if (!l) return;
                const u = l.nextElementSibling;
                if (!u) return;
                const d = Ru(u, s, i, r);
                if (!d.length) {
                  const e = ge(document, a);
                  if (e) return void $u(e);
                  const t = u.querySelector('.js-diff-load-container');
                  if (!t) return;
                  try {
                    await Xs(t);
                    const e = ge(document, a);
                    e instanceof HTMLElement && $u(e);
                  } catch (f) {
                    $u(u);
                  }
                  return;
                }
                await (function (e, t) {
                  return Promise.all(e.map((e) => Nu(e, t)));
                })(d, c);
                const m = ge(document, a);
                Ru(u, s, i, r).length ? e(t, n) : m ? $u(m) : n < 1 && e(t, n + 1);
              })(e, 0));
        }),
        s('click', '.js-expand', function (e) {
          e.preventDefault(), Nu(e.currentTarget);
        });
      const Du = new RegExp('```suggestion(?:.*)\n', 'i'),
        Pu = new RegExp('```(\n|$)');
      function Fu(e, t) {
        const n = e.slice(0, t).split('\n');
        return e.split('\n')[n.length - 1];
      }
      function Bu(e) {
        const t = /^(\s+)/.exec(e);
        return (t && t[0]) || '';
      }
      function Ou(e, t, n = 0) {
        const o = t.substring(n, t.length),
          s = e.exec(o);
        return s ? s.index + n : -1;
      }
      function Uu(e, t) {
        const n = [];
        let o = 0,
          s = -1;
        for (; (s = Ou(Du, e, o)) > -1; ) {
          o = s + '```suggestion'.length;
          const t = Ou(Pu, e, o);
          if (-1 === t) return !1;
          (o = t + '```'.length), n.push([s, t]);
        }
        return n.some((e) => t > e[0] && t < e[1]);
      }
      const zu = '.js-add-to-batch-enabled',
        Wu = '.js-unchanged-suggestion',
        Vu = '.js-closed-pull',
        Gu = '.js-viewing-subset-changes',
        Ju = '.js-validation-on-left-blob',
        Ku = '.js-validation-on-right-blob',
        Xu = '.js-outdated-comment',
        Yu = '.js-resolved-thread',
        Qu = '.js-pending-review';
      function Zu(e) {
        const t = e.getAttribute('data-lines');
        if (null != t) {
          const n = i(e, '.js-suggested-changes-container');
          !(function (e, t) {
            const n = (function (e) {
                let t = '```suggestion\n';
                return (t += `${e}\n`), (t += '```'), t;
              })(e),
              o = t.selectionStart,
              s = t.value,
              i = Ou(/\n/, s, o),
              r = '' === s.trim(),
              a = Fu(s, o),
              c = '' === a.trim(),
              l = '\n```'.length;
            let u = s,
              d = 0;
            if (r) (u = n), (d = u.length - l);
            else if (-1 === i) c ? ((u = s + n), (d = u.length - l)) : ((u = [s, n].join('\n')), (d = u.length - l));
            else if (c) {
              const e = o - Bu(a).length,
                t = s.substring(0, e),
                r = s.substring(i, s.length);
              (u = [t, n, r].join('')), (d = u.length - r.length - l);
            } else if (Uu(s, o)) {
              const e = Ou(/```/, s, o) + 3,
                t = s.substring(0, e),
                i = s.substring(e, s.length);
              (u = [t, '\n', n, i].join('')), (d = u.length - i.length - l);
            } else {
              const e = s.substring(0, i),
                t = s.substring(i, s.length);
              (u = [e, '\n', n, t].join('')), (d = u.length - t.length - l);
            }
            K(t, u), t.focus(), t.setSelectionRange(d, d);
          })(t, c(n, '.js-comment-field', HTMLTextAreaElement));
        }
      }
      function ed(e, t) {
        const n = document.querySelectorAll('.js-apply-suggestion-button'),
          o = c(e, '.js-disabled-apply-suggestion-button');
        for (const s of n) {
          const e = o.cloneNode(!0);
          nd(e, t), i(s, 'details').replaceWith(e);
        }
      }
      function td(e) {
        const t = document.querySelector('.js-batched-suggested-changes-container');
        t && t.classList.add('d-none');
        for (const n of a(document, '.js-apply-single-suggestion', HTMLInputElement))
          n.classList.remove('d-none'), (n.disabled = !0), n.setAttribute('aria-label', e);
        for (const n of a(document, '.js-batched-suggested-changes-add', HTMLInputElement))
          n.classList.remove('d-none'), (n.disabled = !0), n.setAttribute('aria-label', e);
        for (const n of document.querySelectorAll('.js-batched-suggested-changes-remove')) n.classList.add('d-none');
        for (const n of document.querySelectorAll('.js-focus-commit-suggestions-form-button'))
          n.classList.add('d-none');
        for (const n of document.querySelectorAll('.pending-batched-suggestion-label')) n.classList.add('d-none');
      }
      function nd(e, t) {
        e.setAttribute('aria-label', t), e.classList.remove('d-none');
      }
      function od(e, t) {
        const n = c(document, '.js-suggested-changes-inline-validation-template').cloneNode(!0);
        n.classList.remove('js-suggested-changes-inline-validation-template'),
          (c(n, '.js-suggested-changes-inline-error-message').textContent = e.trim()),
          t.parentNode.insertBefore(n, t.nextSibling);
      }
      function sd(e) {
        if (!document.querySelector('.js-suggested-changes-subset-files')) return;
        const t = a(e, '.js-suggested-change-toolbar-item', HTMLButtonElement),
          n = c(document, Gu).textContent.trim();
        for (const o of t) (o.disabled = !0), o.setAttribute('aria-label', n);
      }
      function id() {
        const e = document.querySelector('.js-batched-suggested-changes-container');
        e &&
          setTimeout(() =>
            (function (e) {
              const t = i(e, '.js-review-state-classes').querySelectorAll('[data-pending-batched-suggestion]').length;
              for (const o of document.querySelectorAll('.js-pending-batched-suggested-changes-count'))
                o.textContent = String(t);
              const n = c(document, '.js-reenable-add-to-batch').textContent;
              for (const o of document.querySelectorAll('[data-batched-suggestion-reenable-sibling]'))
                o.removeAttribute('data-batched-suggestion-reenable-sibling'),
                  o.removeAttribute('disabled'),
                  o.setAttribute('aria-label', n);
              if (t > 0) {
                e.hidden = !1;
                const t = c(e, '.js-batched-suggested-changes-toggle');
                t.classList.add('anim-pulse-in'),
                  t.addEventListener('animationend', () => t.classList.remove('anim-pulse-in'), {
                    once: !0,
                  });
                for (const e of document.querySelectorAll('.js-apply-single-suggestion')) e.classList.add('d-none');
                for (const e of document.querySelectorAll('.js-batched-suggested-changes-add')) {
                  const t = i(e, '.js-suggested-change-form-container');
                  if (
                    ('true' === t.getAttribute('data-pending-batched-suggestion') ||
                    'true' === t.getAttribute('data-comment-pending') ||
                    'true' === t.getAttribute('data-outdated-comment')
                      ? e.classList.add('d-none')
                      : e.classList.remove('d-none'),
                    'true' === e.getAttribute('data-batched-suggestion-disabled-by-sibling'))
                  ) {
                    e.removeAttribute('data-batched-suggestion-disabled-by-sibling'),
                      e.setAttribute('disabled', 'disabled');
                    const t = c(document, '.js-one-suggestion-per-line').textContent;
                    e.setAttribute('aria-label', t);
                  }
                }
                for (const e of document.querySelectorAll('.js-batched-suggested-changes-remove')) {
                  'true' === i(e, '.js-suggested-change-form-container').getAttribute('data-pending-batched-suggestion')
                    ? e.classList.remove('d-none')
                    : e.classList.add('d-none');
                }
                for (const e of document.querySelectorAll('.js-focus-commit-suggestions-form-button')) {
                  const t = i(e, '.js-suggested-change-form-container'),
                    n = 'true' === t.getAttribute('data-comment-pending'),
                    o = 'true' === t.getAttribute('data-outdated-comment'),
                    s = 'true' === t.getAttribute('data-resolved-comment'),
                    r = i(e, '.js-inline-comments-container'),
                    a = 'left' === c(r, 'input[name="side"]', HTMLInputElement).value;
                  n || o || s || a ? e.classList.add('d-none') : e.classList.remove('d-none');
                }
                for (const e of document.querySelectorAll('.pending-batched-suggestion-label')) {
                  'true' === i(e, '.js-suggested-change-form-container').getAttribute('data-pending-batched-suggestion')
                    ? e.classList.remove('d-none')
                    : e.classList.add('d-none');
                }
              } else {
                e.hidden = !0;
                for (const e of document.querySelectorAll('.js-apply-single-suggestion')) e.classList.remove('d-none');
                for (const e of document.querySelectorAll('.js-batched-suggested-changes-add'))
                  e.classList.remove('d-none');
                for (const e of document.querySelectorAll('.js-batched-suggested-changes-remove'))
                  e.classList.add('d-none');
                for (const e of document.querySelectorAll('.js-focus-commit-suggestions-form-button'))
                  e.classList.add('d-none');
                for (const e of document.querySelectorAll('.pending-batched-suggestion-label'))
                  e.classList.add('d-none');
              }
            })(e),
          );
      }
      function rd(e, t) {
        const n = c(e, 'input[name=commit_title]', HTMLInputElement),
          o = c(e, 'textarea[name=commit_message]', HTMLTextAreaElement);
        let s = n.value.trim();
        '' === s && (s = n.defaultValue);
        const i = o.value.trim();
        '' !== i && (s = `${s}\n\n${i}\n`), (n.disabled = !0), (o.disabled = !0);
        const r = document.createElement('input');
        r.setAttribute('type', 'hidden'), r.setAttribute('name', 'message'), (r.value = s), e.appendChild(r);
        const a = document.createElement('input');
        a.setAttribute('type', 'hidden'),
          a.setAttribute('name', 'changes'),
          (a.value = JSON.stringify(t)),
          e.appendChild(a);
      }
      function ad(e, t) {
        const n = e.nextElementSibling;
        return n && n.matches(t) ? n : null;
      }
      function cd(e) {
        const t = e.querySelector('.js-toggle-file-notes');
        t instanceof HTMLInputElement && K(t, !0);
      }
      function ld() {
        for (const e of document.querySelectorAll('.file .js-inline-comments-container')) {
          const t = e.querySelectorAll('.js-comments-holder > *').length > 0,
            n = e.querySelector('.js-inline-comment-form-container'),
            o = !!n && n.classList.contains('open');
          t || o || e.remove();
        }
      }
      function ud(e) {
        const t = c(document, e).firstElementChild.cloneNode(!0),
          n = t.querySelector('textarea');
        return n instanceof HTMLTextAreaElement && (n.value = ''), t;
      }
      async function dd(e) {
        const t = e.querySelector('.js-suggestion-button-placeholder');
        if (!t) return;
        const n = t.getAttribute('data-src-base');
        if (!n) return;
        const o = new URL(n, window.location.origin),
          s = t.closest('.js-inline-comment-form') || t.closest('.js-comment-update');
        if (!(s instanceof HTMLFormElement)) return;
        const i = (function (e, t) {
          const n = new URLSearchParams(e.search.slice(1)),
            o = t.elements.namedItem('in_reply_to') || t.elements.namedItem('comment_id');
          if (o instanceof HTMLInputElement && o.value) return n.append('comment_id', o.value), n;
          const s = t.elements.namedItem('path'),
            i = t.elements.namedItem('start_side'),
            r = t.elements.namedItem('start_line'),
            a = t.elements.namedItem('side'),
            c = t.elements.namedItem('line'),
            l = t.elements.namedItem('start_commit_oid'),
            u = t.elements.namedItem('end_commit_oid'),
            d = t.elements.namedItem('base_commit_oid');
          return s instanceof HTMLInputElement &&
            i instanceof HTMLInputElement &&
            r instanceof HTMLInputElement &&
            a instanceof HTMLInputElement &&
            c instanceof HTMLInputElement &&
            l instanceof HTMLInputElement &&
            u instanceof HTMLInputElement &&
            d instanceof HTMLInputElement
            ? (n.append('path', s.value),
              n.append('start_side', i.value),
              n.append('start_line', r.value),
              n.append('end_side', a.value),
              n.append('end_line', c.value),
              n.append('start_commit_oid', l.value),
              n.append('end_commit_oid', u.value),
              n.append('base_commit_oid', d.value),
              n)
            : null;
        })(o, s);
        if (!i) return;
        o.search = i.toString();
        const r = await Q(document, o.toString());
        (t.innerHTML = ''), t.appendChild(r);
      }
      function md(e, t, n, o) {
        if ((e.classList.remove('bg-green-light', 'bg-red-light'), !o))
          return 'right' === n
            ? (e.classList.add('color-green-6'), void (e.textContent = `+${t}`))
            : 'left' === n
            ? (e.classList.add('text-red'), void (e.textContent = `-${t}`))
            : void (e.textContent = String(t));
        e.textContent = t;
      }
      s('click', '.js-suggested-change-toolbar-item', function (e) {
        const t = e.currentTarget;
        t instanceof HTMLButtonElement && !t.disabled && Zu(t);
      }),
        s('click', '.js-refresh-after-suggestion', function () {
          window.location.reload();
        }),
        n('.js-inline-comments-container', {
          add(e) {
            sd(e);
          },
        }),
        n('.js-preview-body .js-apply-changes', {
          add(e) {
            const t = e.closest('.js-suggested-changes-container');
            if (!t) return e.remove();
            const n = c(document, Ku).textContent,
              o = c(document, Ju).textContent,
              s = i(e, '.js-suggested-changes-blob');
            if ('' !== t.getAttribute('data-thread-side')) {
              if ('left' === t.getAttribute('data-thread-side')) return od(o, s), e.remove();
            } else {
              const t = i(e, '.js-inline-comment-form'),
                n = c(t, 'input[name="side"]', HTMLInputElement);
              if (!t || !n) return e.remove();
              if (t && 'left' === n.value) return od(o, s), e.remove();
            }
            const r = e.previousElementSibling,
              a = r.querySelector('.js-blob-code-deletion'),
              l = r.querySelectorAll('.js-blob-code-addition');
            return a && 0 !== l.length
              ? a.textContent ===
                Array.from(l)
                  .map((e) => e.textContent)
                  .join('\n')
                ? (od(n, s), e.remove())
                : void e.remove()
              : void 0;
          },
        }),
        n('.js-comment-body .js-apply-changes', {
          add(e) {
            const t = e.closest('.js-suggested-changes-container');
            if (!t) return e.remove();
            const n = t.querySelector('.js-suggested-changes-template');
            if (!(n instanceof HTMLTemplateElement)) return e.remove();
            const o = n.content.cloneNode(!0),
              s = c(o, '.js-disabled-apply-suggestion-button');
            let i;
            try {
              i = c(o, '.js-batched-suggested-changes-add');
            } catch (j) {
              if ('QueryError' !== j.name) throw j;
            }
            if (a(document, '.js-suggested-changes-files-tab').length) {
              const e = c(document, zu).textContent;
              i && (i.removeAttribute('disabled'), i.setAttribute('aria-label', e));
            }
            const r = c(document, '.js-pull-header-details'),
              l = r && 'true' === r.getAttribute('data-pull-is-open'),
              u = e.closest('.js-resolvable-timeline-thread-container'),
              d = 'true' === n.getAttribute('data-comment-pending'),
              m = t.classList.contains('js-selection-contains-deletions');
            if (u && 'true' === u.getAttribute('data-resolved')) {
              const t = c(document, Yu).textContent,
                n = o.querySelector('details');
              return (
                n && n.remove(),
                nd(s, t),
                i && (i.setAttribute('disabled', 'disabled'), i.setAttribute('aria-label', t)),
                e.replaceWith(o)
              );
            }
            if (!l) {
              const t = c(document, Vu).textContent;
              return (
                nd(s, t),
                i && (i.setAttribute('disabled', 'disabled'), i.setAttribute('aria-label', t)),
                e.replaceWith(o)
              );
            }
            if (d) {
              const t = c(document, Qu).textContent;
              return (
                c(o, 'details').remove(),
                nd(s, t),
                i && (i.setAttribute('disabled', 'disabled'), i.setAttribute('aria-label', t)),
                e.replaceWith(o)
              );
            }
            if (m) {
              const t = c(document, Ju).textContent;
              return (
                c(o, 'details').remove(),
                nd(s, t),
                i && (i.setAttribute('disabled', 'disabled'), i.setAttribute('aria-label', t)),
                e.replaceWith(o)
              );
            }
            const f = document.querySelector('.js-suggested-changes-subset-files'),
              p = 'true' === n.getAttribute('data-outdated-comment');
            if (f || p) {
              let t;
              return (
                f ? (t = c(document, Gu).textContent) : p && (t = c(document, Xu).textContent),
                c(o, 'details').remove(),
                nd(s, t),
                i && (i.setAttribute('disabled', 'disabled'), i.setAttribute('aria-label', t)),
                e.replaceWith(o)
              );
            }
            const g = c(o, '.js-single-suggested-change-form'),
              h = e.closest('.js-suggested-changes-blob');
            if (h) {
              const e = h.querySelector('.js-blob-code-deletion'),
                t = h.querySelectorAll('.js-blob-code-addition');
              if (!e) return;
              const n = e.textContent,
                r = Array.from(t).map((e) => e.textContent);
              if (r.length > 0 && n === r.join('\n')) {
                const e = c(document, Wu).textContent;
                c(o, 'details').remove(),
                  nd(s, e),
                  i && (i.setAttribute('disabled', 'disabled'), i.setAttribute('aria-label', e));
              } else
                for (const o of r) {
                  const e = document.createElement('input');
                  e.setAttribute('type', 'hidden'), e.setAttribute('name', 'value[]'), (e.value = o), g.appendChild(e);
                }
            }
            e.replaceWith(o);
          },
        }),
        n('.js-pull-header-details', {
          add(e) {
            const t = 'true' === e.getAttribute('data-pull-is-open'),
              n = document.querySelector('.js-suggested-changes-template');
            if (t || !(n instanceof HTMLTemplateElement)) return;
            const o = n.content,
              s = c(document, Vu).textContent;
            ed(o, s), td(s);
          },
        }),
        n('.js-suggested-changes-subset-files', {
          add() {
            const e = document.querySelector('.js-suggested-changes-template');
            if (!(e instanceof HTMLTemplateElement)) return;
            const t = e.content,
              n = c(document, Gu).textContent;
            ed(t, n), td(n);
          },
        }),
        s('click', '.js-apply-suggestion-button', async function (e) {
          const t = e.currentTarget.parentElement;
          if (t) {
            const e = c(t, '.js-suggestion-commit-title');
            setTimeout(() => e.focus(), 1);
          }
        }),
        s('click', '.js-dismiss-suggested-change-onboarding-notice', async function (e) {
          const t = r(e.currentTarget, 'data-url'),
            n = c(e.currentTarget.parentElement, '.js-data-url-csrf', HTMLInputElement),
            o = new FormData();
          o.append('notice', 'suggested_changes_onboarding_prompt'),
            await oe(
              Be(t, n.value, {
                method: 'post',
                body: o,
              }),
            );
          const s = document.querySelectorAll('.js-suggested-change-onboarding-notice');
          for (const i of s) i.remove();
        }),
        _('keypress', '.js-comment-field', function (e) {
          if ('Enter' === e.key) {
            (function (e) {
              const t = e.selectionStart;
              if (!Uu(e.value, t)) return !1;
              const n = e.value,
                o = Fu(n, t);
              if (null === o) return !1;
              const s = `\n${Bu(o)}`,
                i = n.substr(0, t) + s + n.substr(t);
              K(e, i);
              const r = t + s.length;
              return e.setSelectionRange(r, r), !0;
            })(e.target) && e.preventDefault();
          }
        }),
        _('keypress', '.js-suggestion-commit-message', function (e) {
          const t = e.currentTarget;
          'Enter' === e.key && t.setAttribute('rows', '3');
        }),
        s('click', '.js-batched-suggested-changes-add', function (e) {
          const t = e.target,
            n = i(t, '.js-suggested-change-form-container');
          if (
            'true' === n.getAttribute('data-comment-pending') ||
            'true' === n.getAttribute('data-outdated-comment') ||
            'true' === t.getAttribute('data-batched-suggestion-disabled-by-sibling')
          )
            return;
          n.setAttribute('data-pending-batched-suggestion', 'true');
          const o = i(t, '.js-inline-comments-container');
          for (const s of o.querySelectorAll('.js-batched-suggested-changes-add'))
            s.setAttribute('data-batched-suggestion-disabled-by-sibling', 'true');
          t.removeAttribute('data-batched-suggestion-disabled-by-sibling'), id();
        }),
        s('click', '.js-batched-suggested-changes-remove', function (e) {
          i(e.currentTarget, '.js-suggested-change-form-container').removeAttribute('data-pending-batched-suggestion');
          const t = i(e.currentTarget, '.js-inline-comments-container');
          for (const n of t.querySelectorAll('.js-batched-suggested-changes-add'))
            n.setAttribute('data-batched-suggestion-reenable-sibling', 'true');
          id();
        }),
        s('click', '.js-focus-commit-suggestions-form-button', function (e) {
          e.preventDefault(),
            (window.location.href = '#clear-commit-suggestions'),
            (window.location.href = '#commit-suggestions');
        }),
        s('click', '.js-dismiss-batched-suggested-changes-onboarding-notice', async function (e) {
          const t = r(e.currentTarget, 'data-url'),
            n = c(e.currentTarget.parentElement, '.js-data-url-csrf', HTMLInputElement),
            o = new FormData();
          o.append('notice', 'batched_suggested_changes_onboarding_prompt'),
            await oe(
              Be(t, n.value, {
                method: 'post',
                body: o,
              }),
            );
          for (const s of document.querySelectorAll('.js-batched-suggested-change-onboarding-notice')) s.remove();
        }),
        s('click', '.js-single-suggested-change-form .js-suggested-changes-submit', function (e) {
          const t = e.currentTarget,
            n = i(t, '.js-single-suggested-change-form', HTMLFormElement),
            o = a(n, 'input[name="value[]"]', HTMLInputElement).map((e) => e.value);
          rd(n, [
            {
              commentId: c(n, 'input[name=comment_id]', HTMLInputElement).value,
              path: c(n, 'input[name=path]', HTMLInputElement).value,
              suggestion: o,
            },
          ]);
        }),
        D('.js-single-suggested-change-form', async function (e, t) {
          const n = i(e, '.js-suggested-change-form-container'),
            o = i(e, 'details'),
            s = c(n, '.js-suggestion-applied'),
            r = i(e, '.js-suggested-changes-contents'),
            a = c(r, '.js-error-message-placeholder');
          try {
            await t.json(),
              s.classList.remove('d-none'),
              c(n, '.js-batched-suggested-changes-add').classList.add('d-none'),
              o.remove(),
              window.location.reload();
          } catch (l) {
            if ('QueryError' !== l.name) {
              const t = l.response.json && l.response.json.error,
                s = c(a, '.js-error-message');
              (a.hidden = !1), (s.textContent = t), n.prepend(a);
              const r = i(e, '.js-suggested-change-form-container');
              c(r, '.js-batched-suggested-changes-add').classList.add('d-none'), o.remove();
            }
          }
        }),
        s('click', '.js-suggestion-batch-submit', function (e) {
          const t = i(e.currentTarget, '.js-batched-suggested-changes-form', HTMLFormElement),
            n = [];
          for (const o of document.querySelectorAll('[data-pending-batched-suggestion]')) {
            const e = c(o, '.js-single-suggested-change-form', HTMLFormElement),
              t = a(e, 'input[name="value[]"]', HTMLInputElement).map((e) => e.value);
            n.push({
              commentId: c(e, 'input[name=comment_id]', HTMLInputElement).value,
              path: c(e, 'input[name=path]', HTMLInputElement).value,
              suggestion: t,
            });
          }
          rd(t, n);
        }),
        D('.js-batched-suggested-changes-form', async function (e, t) {
          try {
            await t.json(),
              (i(e, '.js-batched-suggested-changes-container', HTMLElement).hidden = !0),
              window.location.reload();
          } catch (n) {
            const t = n.response.json && n.response.json.error,
              o = i(e, '.js-batched-suggested-changes-container'),
              s = c(o, '.js-error-message-container');
            (c(s, '.js-error-message').textContent = t), (s.hidden = !1);
          }
        }),
        n('.js-files-tab-stale', {
          add() {
            const e = document.querySelector('.js-batched-suggested-changes-container');
            e &&
              setTimeout(() => {
                e.hidden = !0;
              });
          },
        }),
        s('click', '.js-add-single-line-comment', function (e) {
          const t = e.currentTarget;
          cd(i(t, '.file'));
          const n =
            (function (e) {
              const t = i(e, 'tr'),
                n = ad(t, '.js-inline-comments-container');
              if (n instanceof Element) {
                const e = c(t, 'button.js-add-line-comment'),
                  o = Array.from(n.querySelectorAll('.js-inline-comment-form')).pop();
                return o instanceof HTMLFormElement && pd(o, e), n;
              }
            })(t) ||
            (function (e) {
              const t = i(e, 'tr'),
                n = ud('#js-inline-comments-single-container-template'),
                o = n.querySelector('.js-inline-comment-form');
              o instanceof HTMLFormElement && pd(o, e);
              return t.after(n), n;
            })(t);
          vu(Array.from(n.querySelectorAll('.js-line-comments')).pop());
        }),
        s('click', '.js-add-split-line-comment', function (e) {
          const t = e.currentTarget;
          cd(i(t, '.file'));
          const n = i(t, 'tr'),
            o = 'addition' === t.getAttribute('data-type') ? 'js-addition' : 'js-deletion',
            s = (function (e, t, n) {
              const o = e.querySelector(`.js-line-comments.${t}`);
              if (o) {
                const e = Array.from(o.querySelectorAll('.js-inline-comment-form')).pop();
                if (!(e instanceof HTMLFormElement)) throw new Error('invariant');
                return pd(e, n), o;
              }
              const s = ud('#js-inline-comments-split-form-container-template');
              s.classList.add(t);
              const i = s.querySelector('.js-inline-comment-form');
              i instanceof HTMLFormElement && pd(i, n);
              const r = e.querySelectorAll(`.${t}`);
              r[r.length - 1].after(s);
              for (const a of r) a.remove();
              return s;
            })(
              (function (e) {
                let t = ad(e, '.js-inline-comments-container');
                return t || ((t = ud('#js-inline-comments-split-container-template')), e.after(t), t);
              })(n),
              o,
              t,
            );
          vu(Array.from(s.querySelectorAll('.js-line-comments')).pop());
        }),
        D('.js-inline-comment-form', async function (e, t) {
          let n;
          !(function (e) {
            const t = e.querySelector('.js-comment-form-error');
            t && ((t.hidden = !0), (t.textContent = null));
          })(e);
          try {
            n = await t.json();
          } catch (a) {
            if (a.response) {
              let t;
              try {
                t = a.response.json;
              } catch (l) {}
              if (t)
                return void (function (e, t) {
                  const n = c(e, '.js-comment-form-error');
                  let o;
                  o = t.errors
                    ? Array.isArray(t.errors)
                      ? t.errors.join(', ')
                      : t.errors
                    : 'There was an error posting your comment.';
                  (n.textContent = o), (n.style.display = 'block'), (n.hidden = !1), n.classList.remove('d-none');
                })(e, t);
            }
            throw a;
          }
          const o = n.json,
            s = o.inline_comment,
            i = e.closest('.js-line-comments');
          if (s) {
            if (!i) throw new Error('invariant');
            c(i, '.js-comments-holder').append(z(document, s));
          }
          const r = o.inline_comment_thread;
          if (r) {
            if (!i) throw new Error('invariant');
            i.replaceWith(z(document, r));
          }
          yu(e);
        }),
        document.addEventListener('session:resume', function (e) {
          if (!(e instanceof CustomEvent)) throw new Error('invariant');
          !(function (e) {
            const [t, n] = e.match(/^new_inline_comment_(?:discussion|diff)_(?:[\w-]+)_(\d+)_(\d+)$/) || [];
            if (!t) return;
            const o = document.querySelector(`.js-inline-comment-form input[name='in_reply_to'][value='${n}']`);
            if (!o) return;
            const s = o.closest('.js-line-comments');
            s && vu(s);
          })(e.detail.targetId),
            (function (e) {
              const [t, n] = e.match(/^new_inline_comment_diff_(?:[\w-]+)_(\d+)$/) || [];
              if (!t) return;
              const o = document.querySelector(`.js-add-line-comment[data-anchor='${t}'][data-position='${n}']`);
              o && o.click();
            })(e.detail.targetId);
        }),
        n('.js-comment', {
          remove: ld,
        }),
        s('inlinecomment:focus', '.js-inline-comment-form-container', function (e) {
          const t = e.target.querySelector('.js-suggested-changes-container');
          t && dd(t);
        }),
        n('.js-suggested-changes-container.is-comment-editing', (e) => {
          dd(e);
        }),
        document.addEventListener('inlinecomment:collapse', () => {
          ld();
        });
      const fd = {
        R: 'right',
        L: 'left',
      };
      function pd(e, t) {
        const n = ['type', 'path', 'position', 'line', 'side', 'original-line'];
        for (const i of n) {
          const n = e.elements.namedItem(i);
          if (n instanceof HTMLInputElement) {
            const e = t.getAttribute(`data-${i}`) || '';
            n.value = e;
          }
        }
        !(function (e, t) {
          const n = ru();
          if (!n) return;
          if (n.end.is(n.start)) return;
          if (!cu(t, n)) return void uu();
          const {
              start: { side: o, lineNumber: s },
              end: { side: r, lineNumber: a },
            } = n,
            l = Number(t.getAttribute('data-line')),
            u = t.getAttribute('data-side');
          if (l !== a || (!n.end.isContext() && u !== fd[r])) return void uu();
          const d = fd[o],
            m = e.elements.namedItem('start_line'),
            f = e.elements.namedItem('start_side'),
            p = e.elements.namedItem('line'),
            g = e.elements.namedItem('side'),
            h = e.elements.namedItem('preview_start_side'),
            j = e.elements.namedItem('preview_side');
          if (
            m instanceof HTMLInputElement &&
            f instanceof HTMLInputElement &&
            p instanceof HTMLInputElement &&
            g instanceof HTMLInputElement &&
            h instanceof HTMLInputElement &&
            j instanceof HTMLInputElement
          ) {
            (m.value = String(s)), (f.value = d), (f.value = h.value = f.value), (j.value = g.value);
            const t = m.value,
              o = f.value,
              r = p.value,
              a = g.value,
              l = i(e, '.js-inline-comment-form-container');
            if (t && r) {
              const e = c(l, '.js-multi-line-preview'),
                s = c(e, '.js-multi-line-preview-start'),
                i = c(e, '.js-multi-line-preview-end'),
                u = n.start.isContext(),
                d = n.end.isContext();
              md(s, t, o, u), md(i, r, a, d), (e.hidden = !1), l.classList.add('is-multiline');
            } else (c(l, '.js-multi-line-preview').hidden = !0), l.classList.remove('is-multiline');
            sd(l);
          }
        })(e, t);
        const o = t.getAttribute('data-position') || '',
          s = t.getAttribute('data-anchor') || '',
          r = c(e, '.js-comment-field'),
          a = r.id
            .replace(/^r\d+ /, '')
            .replace('${anchor}', s)
            .replace('${position}', o);
        for (const i of e.querySelectorAll(`[for="${r.id}"]`)) i.setAttribute('for', a);
        r.id = a;
      }
      function gd(e) {
        return Math.floor(e / 2);
      }
      function hd(e, t) {
        const n = e.parentElement;
        if (!n) return;
        const o = n.children;
        let s;
        if (4 === o.length)
          for (let i = 0, r = o.length; i < r; i++) {
            o[i] === e && (s = gd(i));
          }
        for (let i = 0, r = o.length; i < r; i++) {
          const e = o[i];
          (null != s && gd(i) !== s) || e.classList.toggle('is-hovered', t);
        }
      }
      function jd() {
        const e = document.querySelector('meta[name=diff-view]'),
          t = e && e instanceof HTMLMetaElement ? e.content : '',
          n = document.querySelector('.js-file-diff-split'),
          o = !!(('split' === t && n) || document.querySelector('.wants-full-width-container'));
        document.body.classList.toggle('full-width', o);
      }
      function bd(e) {
        const t = e.parentElement,
          n = t.querySelectorAll('td.js-line-comments').length,
          o = t.querySelectorAll('td.js-line-comments.is-collapsed').length;
        t.classList.toggle('is-collapsed', o > 0 && n === o);
      }
      function vd(e) {
        const t = a(document, '.js-hook-event-checkbox', HTMLInputElement);
        for (const n of t) n.checked = n.matches(e);
      }
      n('.diff-table', function (e) {
        let t = null;
        function n() {
          t && hd(t, !1), (t = null);
        }
        function o(e) {
          t && hd(t, !1), e.target instanceof HTMLElement && ((t = e.target.closest('td.blob-code')), t && hd(t, !0));
        }
        return {
          add: function () {
            e.addEventListener('mouseenter', n),
              e.addEventListener('mouseleave', n),
              e.addEventListener('mouseover', o);
          },
          remove: function () {
            e.removeEventListener('mouseenter', n),
              e.removeEventListener('mouseleave', n),
              e.removeEventListener('mouseover', o);
          },
        };
      }),
        s('click', '.js-rich-diff.collapsed .js-expandable', function (e) {
          if (!(e.target instanceof Element)) return;
          e.preventDefault(), e.target.closest('.js-rich-diff').classList.remove('collapsed');
        }),
        s('click', '.js-show-rich-diff', function (e) {
          const t = e.currentTarget.closest('.js-warn-no-visible-changes');
          if (!t) return;
          t.classList.add('d-none');
          const n = t.parentElement.querySelector('.js-no-rich-changes');
          n && n.classList.remove('d-none');
        }),
        n('meta[name=diff-view]', {
          add: jd,
          remove: jd,
        }),
        n('.js-file-diff-split', {
          add: jd,
          remove: jd,
        }),
        n('.js-compare-tab.selected', {
          add: jd,
          remove: jd,
        }),
        n('.wants-full-width-container', {
          add: jd,
          remove: jd,
        }),
        s('change', '.js-toggle-file-notes', function (e) {
          const t = e.currentTarget;
          i(t, '.file').classList.toggle('show-inline-notes', t.checked);
        }),
        s('click', '.js-toggle-all-file-notes', function (e) {
          const t = a(document, '.js-toggle-file-notes', HTMLInputElement),
            n = t.some((e) => e.checked);
          for (const o of t) K(o, !n);
          e.preventDefault();
        }),
        n('.js-inline-comments-container', function (e) {
          let t;
          const n = e.closest('.file');
          if (n) {
            return {
              add: (t = function () {
                const e = null != n.querySelector('.js-inline-comments-container');
                n.classList.toggle('has-inline-notes', e);
              }),
              remove: t,
            };
          }
        }),
        s('change', '.js-toggle-file-check-annotations', function (e) {
          const t = e.currentTarget,
            n = i(t, '.file').querySelectorAll('.js-inline-annotations');
          for (const o of n) o instanceof HTMLElement && (o.hidden = !t.checked);
        }),
        n('td.js-line-comments.is-collapsed', {
          add: bd,
          remove: bd,
        }),
        n('.js-hook-url-field', {
          constructor: HTMLInputElement,
          add(e) {
            function t() {
              const t = e.form;
              if (!t) return;
              let n;
              try {
                n = new URL(e.value);
              } catch (r) {}
              const o = t.querySelector('.js-invalid-url-notice');
              o instanceof HTMLElement && (o.hidden = !!('' === e.value || (n && /^https?:/.test(n.protocol))));
              const s = t.querySelector('.js-insecure-url-notice');
              s instanceof HTMLElement && n && e.value && (s.hidden = /^https:$/.test(n.protocol));
              const i = t.querySelector('.js-ssl-hook-fields');
              i instanceof HTMLElement && (i.hidden = !(n && 'https:' === n.protocol));
            }
            ae(e, t), t();
          },
        }),
        s('change', '.js-hook-event-choice', function (e) {
          const t = e.currentTarget,
            n = t.checked && 'custom' === t.value,
            o = t.closest('.js-hook-events-field');
          if ((o && o.classList.toggle('is-custom', n), t.checked))
            if (n) {
              c(document, '.js-hook-wildcard-event', HTMLInputElement).checked = !1;
            } else 'push' === t.value ? vd('[value="push"]') : 'all' === t.value && vd('.js-hook-wildcard-event');
        }),
        s('details:toggled', '.js-hook-secret', function (e) {
          const t = e.currentTarget,
            n = c(t, '.hook-secret-field > input[type=text]', HTMLInputElement);
          t.classList.contains('open') && n.focus();
        }),
        s('click', '.js-hook-deliveries-pagination-button', async function (e) {
          const t = e.currentTarget;
          t.disabled = !0;
          const n = t.parentElement,
            o = r(t, 'data-url');
          n.before(await Q(document, o)), n.remove();
        }),
        D('.js-redeliver-hook-form', async function (e, t) {
          let n;
          try {
            n = await t.html();
          } catch (o) {
            return void e.classList.add('failed');
          }
          if ('true' === e.getAttribute('data-use-delivery-api')) {
            c(document, '.js-hook-deliveries-container').replaceWith(n.html);
          } else {
            const t = e.getAttribute('data-delivery-guid') || '',
              o = c(document, `.js-hook-delivery-container[data-delivery-guid="${t}"]`),
              s = o.parentElement;
            o.replaceWith(n.html),
              c(s, 'poll-include-fragment').addEventListener('load', function () {
                const e = c(s, '.js-hook-delivery-container'),
                  t = c(s, '.js-item-status'),
                  n = e.getAttribute('data-status-class');
                t.classList.remove('success', 'pending', 'failure'), n && t.classList.add(n);
                const o = s.querySelector('.js-item-status-tooltip'),
                  i = e.getAttribute('data-status-message');
                o && i && o.setAttribute('aria-label', i);
              });
          }
        }),
        D('.js-test-hook-form', async function (e, t) {
          const n = c(document, '.js-test-hook-message');
          n.classList.remove('error', 'success');
          try {
            await t.text();
          } catch (o) {
            n.classList.add('error');
            const e = c(n, '.js-test-hook-message-errors');
            if (null != o.response) {
              const t = await o.response.json();
              e.textContent = t.errors;
            } else e.textContent = e.getAttribute('data-network-error-message') || '';
            return;
          }
          n.classList.add('success');
        }),
        D('.js-toggler-container .js-set-approval-state', async function (e, t) {
          const n = i(e, '.js-toggler-container');
          n.classList.add('loading');
          const o = await t.json();
          'approved' === o.json.approval_state
            ? n.classList.add('on')
            : 'denied' === o.json.approval_state && (n.classList.add('revoked'), n.classList.remove('on')),
            n.classList.remove('loading');
        }),
        D('.js-request-access-approval-form', async function (e, t) {
          await t.text();
          const n = r(e, 'data-container-id');
          c(document, `#${n}`).classList.add('on');
        }),
        s(
          'details-menu-selected',
          '.js-select-plan-menu',
          function (e) {
            const t = e.detail.relatedTarget,
              n = document.querySelectorAll('.js-plan-card-section');
            for (const r of n) r instanceof HTMLElement && (r.hidden = !0);
            const o = e.currentTarget.querySelectorAll('[role^=menuitem]'),
              s = Array.from(o).indexOf(t),
              i = Array.from(n)[s];
            i instanceof HTMLElement && (i.hidden = !1);
          },
          {
            capture: !0,
          },
        ),
        n('.js-suggested-usernames-container', function (e) {
          const t = a(e, '.js-suggested-username', HTMLInputElement),
            n = document.querySelector('.js-signup-form');
          if (n && 0 !== t.length) for (const o of t) n.appendChild(o);
        }),
        R('.js-email-notice-trigger', function (e) {
          const t = a(document, '.js-email-notice');
          for (const n of t) n.classList.add('notice-highlight');
          e.addEventListener('blur', function () {
            for (const e of t) e.classList.remove('notice-highlight');
          });
        }),
        n('.js-plan-choice:checked', {
          add(e) {
            const t = e.closest('.plan-row');
            t && t.classList.add('selected');
          },
          remove(e) {
            const t = e.closest('.plan-row');
            t && t.classList.remove('selected');
          },
        });
      const yd = new WeakMap();
      function Ld(e) {
        const t = e.target,
          n = i(t, 'form');
        if (t.closest('input[type=text]') && !yd.get(n)) {
          const e = c(n, '.js-signup-source', HTMLInputElement);
          let t = e.value;
          e.hasAttribute('data-ga-label') && (t = `${t}${e.getAttribute('data-ga-label')}`),
            Ne({
              category: 'Sign up',
              action: 'Attempt',
              label: t,
            }),
            yd.set(n, !0);
        }
      }
      function wd() {
        const e = c(document, '.js-password-with-confirmation', HTMLInputElement),
          t = c(document, '.js-password-confirm', HTMLInputElement);
        t.value !== e.value
          ? (function (e) {
              const t = i(e, '.js-form-group');
              t.classList.add('errored');
              const n = e.getAttribute('data-validity-message');
              if (n) {
                e.setCustomValidity(n);
                const t = i(e, 'form', HTMLFormElement);
                O(t);
              }
              const o = t.querySelector('.error'),
                s = e.getAttribute('data-error-message');
              if (!o && s) {
                const e = document.createElement('dd');
                e.classList.add('error'), (e.innerHTML = s), t.appendChild(e);
              }
            })(t)
          : (function (e) {
              const t = i(e, '.js-form-group');
              e.setCustomValidity(''), t.classList.remove('errored');
              const n = i(e, 'form', HTMLFormElement);
              O(n);
              const o = t.querySelector('.error');
              o && t.removeChild(o);
            })(t);
      }
      n('.js-signup-form', {
        subscribe: (e) => V(e, 'input', Ld),
      }),
        s('submit', '.js-signup-form-submit', function (e) {
          const t = e.currentTarget,
            n = c(t, '.js-signup-source', HTMLInputElement);
          let o = n.value;
          n.hasAttribute('data-ga-label') && (o = `${o}${n.getAttribute('data-ga-label')}`),
            Ne({
              category: 'Sign up',
              action: 'Submit',
              label: o,
            });
        }),
        s('submit', '.js-org-survey', function (e) {
          const t = e.currentTarget,
            n = a(t, '.js-other-text', HTMLInputElement);
          for (const o of n) {
            const e = Ma(o, 'js-other-hidden-input');
            e instanceof HTMLInputElement && (e.checked = o.value.length > 0);
          }
        }),
        n('.js-show-next-question-trigger:checked', {
          constructor: HTMLElement,
          add(e) {
            const t = e.closest('.js-show-next-question');
            if (t instanceof HTMLElement) {
              const e = Ma(t, 'js-hidden-question');
              e && (e.hidden = !1);
            }
          },
          remove(e) {
            const t = e.closest('.js-show-next-question');
            if (t instanceof HTMLElement) {
              const e = Ma(t, 'js-hidden-question');
              e && (e.hidden = !0);
            }
          },
        }),
        n('.js-octocaptcha-parent', function (e) {
          if (!(e instanceof HTMLFormElement)) throw new Error('invariant');
          const t = c(e, '.js-octocaptcha-spinner'),
            n = c(e, '.js-octocaptcha-success'),
            o = c(e, '.js-octocaptcha-token', HTMLInputElement),
            s = c(e, '.js-octocaptcha-form-submit', HTMLButtonElement),
            i = c(e, '.js-octocaptcha-frame-container'),
            r = c(e, '.js-octocaptcha-frame'),
            a = o.getAttribute('data-octocaptcha-url');
          let l = !1;
          const u = () => {
              l || ((l = !0), t.classList.add('d-none'), n.classList.remove('d-none'), m());
            },
            d = () => {
              if (l) return;
              const t = document.createElement('input');
              (t.type = 'hidden'),
                (t.id = 'error_loading_captcha'),
                (t.name = 'error_loading_captcha'),
                (t.value = '1'),
                e.appendChild(t),
                u();
            },
            m = () => {
              if (!(e instanceof HTMLFormElement)) throw new Error('invariant');
              e.checkValidity() && (s.disabled = !1);
            };
          setTimeout(d, 2e4),
            r.addEventListener('error', d),
            window.addEventListener('message', (e) => {
              if (e.origin !== a) return;
              const n = e.data && e.data.event;
              'captcha-loaded' === n
                ? l || ((l = !0), t.classList.add('d-none'), i.classList.remove('v-hidden', 'zero-height'))
                : 'captcha-complete' === n
                ? ((o.value = e.data.sessionToken),
                  (() => {
                    const e = i.getAttribute('data-ga-event-category');
                    e &&
                      Ne({
                        category: e,
                        action: 'success',
                        label: 'captcha verified',
                      });
                  })(),
                  m())
                : 'captcha-suppressed' === n && u();
            });
        }),
        n('.js-survey-answer-choice:checked', {
          add(e) {
            const t = e.closest('.js-answer');
            if (t) {
              const e = t.querySelector('.js-answer-choice');
              e &&
                (e.classList.remove('border-black-fade', 'bg-white'), e.classList.add('border-blue', 'bg-blue-light'));
            }
            const n = document.querySelector(
              `.js-other-input-box[data-other-input-for=${e.getAttribute('data-question-short-text')}]`,
            );
            n instanceof HTMLElement && e.classList.contains('js-other-choice') && (n.hidden = !1);
          },
          remove(e) {
            const t = e.closest('.js-answer');
            if (t) {
              const e = t.querySelector('.js-answer-choice');
              e &&
                (e.classList.remove('border-blue', 'bg-blue-light'), e.classList.add('border-black-fade', 'bg-white'));
            }
            const n = document.querySelector(
              `.js-other-input-box[data-other-input-for=${e.getAttribute('data-question-short-text')}]`,
            );
            n instanceof HTMLElement && e.classList.contains('js-other-choice') && (n.hidden = !0);
          },
        }),
        n('.js-allow-multiple:checked', {
          constructor: HTMLInputElement,
          add(e) {
            const t = parseInt(e.getAttribute('data-max-choices') || ''),
              n = i(e, '.js-question'),
              o = a(n, '.js-allow-multiple', HTMLInputElement);
            if (o.filter((e) => !0 === e.checked).length >= t) for (const s of o) !1 === s.checked && (s.disabled = !0);
          },
          remove(e) {
            const t = i(e, '.js-question');
            for (const n of a(t, '.js-allow-multiple', HTMLInputElement)) n.disabled = !1;
          },
        }),
        _('keyup', '.js-password-with-confirmation', () => {
          '' !== c(document, '.js-password-confirm', HTMLInputElement).value && wd();
        }),
        _('keyup', '.js-password-confirm', wd);
      let Td = null;
      s('pjax:click', '.js-pjax-capture-input', function () {
        Td = (function (e) {
          const t = e.createElement('textarea');
          return (
            (t.style.position = 'fixed'),
            (t.style.top = '0'),
            (t.style.left = '0'),
            (t.style.opacity = '0'),
            e.body.appendChild(t),
            t.focus(),
            () => (t.blur(), t.remove(), t.value)
          );
        })(document);
      }),
        s('pjax:end', '#js-repo-pjax-container', function () {
          if (Td) {
            const e = Td(),
              t = document.querySelector('.js-pjax-restore-captured-input');
            t instanceof HTMLInputElement && e && K(t, e), (Td = null);
          }
        }),
        s('pjax:click', '.js-pjax-history-navigate', function (e) {
          e.currentTarget instanceof HTMLAnchorElement &&
            (e.currentTarget.href === st()
              ? (history.back(), e.detail.relatedEvent.preventDefault(), e.preventDefault())
              : e.currentTarget.href === it() &&
                (history.forward(), e.detail.relatedEvent.preventDefault(), e.preventDefault()));
        }),
        n('[data-pjax-container] link[rel=pjax-prefetch]', {
          constructor: HTMLLinkElement,
          initialize(e) {
            const t = rt(e, {
              headers: {
                Purpose: 'prefetch',
              },
            });
            at(e, t);
          },
        });
      class PreciseTimeAgoElement extends b {
        connectedCallback() {
          Ed.push(this), kd || (Sd(), (kd = window.setInterval(Sd, 1e3)));
        }
        disconnectedCallback() {
          const e = Ed.indexOf(this);
          -1 !== e && Ed.splice(e, 1), Ed.length || (window.clearInterval(kd), (kd = void 0));
        }
        getFormattedDate() {
          const e = this.date;
          if (!e) return;
          const t = new Date().getTime() - e.getTime(),
            n = Math.floor(t / 1e3),
            o = Math.floor(n / 60),
            s = Math.floor(o / 60),
            i = Math.floor(s / 24),
            r = n - 60 * o,
            a = o - 60 * s;
          return o < 1
            ? `${n}s`
            : s < 1
            ? `${o}m ${r}s`
            : i < 1
            ? `${s}h ${a}m ${r}s`
            : `${i}d ${s - 24 * i}h ${a}m ${r}s`;
        }
      }
      const Ed = [];
      let kd;
      function Sd() {
        for (const e of Ed) e.textContent = e.getFormattedDate() || '';
      }
      window.customElements.get('precise-time-ago') ||
        ((window.PreciseTimeAgoElement = PreciseTimeAgoElement),
        window.customElements.define('precise-time-ago', PreciseTimeAgoElement)),
        n('body.js-print-popup', () => {
          window.print(), setTimeout(window.close, 1e3);
        }),
        s('click', '.js-new-user-contrib-example', async function (e) {
          const t = c(document, '.js-calendar-graph');
          if (t.classList.contains('sample-graph')) return;
          t.classList.add('sample-graph');
          const n = r(e.currentTarget, 'data-url');
          let o;
          try {
            o = await oe(n);
          } catch (i) {
            return void t.classList.remove('sample-graph');
          }
          const s = document.createElement('div');
          (s.innerHTML = o), t.querySelector('.js-calendar-graph-svg').replaceWith(s.children[0]);
        });
      let Md = null;
      function xd() {
        const e = c(document, '.js-calendar-graph'),
          t = r(e, 'data-url');
        return new URL(t, window.location.origin);
      }
      function Ad(e) {
        const t = e.target;
        t.matches('rect.day') &&
          (Hd(),
          (function (e) {
            const t = r(e, 'data-date'),
              n = (function (e, t) {
                const n = `${qd[t.getUTCMonth()].slice(0, 3)} ${t.getUTCDate()}, ${t.getUTCFullYear()}`,
                  o = 0 === e ? 'No' : new Intl.NumberFormat('en-US').format(e),
                  s = document.createElement('div');
                s.classList.add('svg-tip', 'svg-tip-one-line'), (s.style.pointerEvents = 'none');
                const i = document.createElement('strong');
                return (
                  (i.textContent = `${o} ${1 === e ? 'contribution' : 'contributions'}`), s.append(i, ` on ${n}`), s
                );
              })(parseInt(e.getAttribute('data-count') || ''), Fd(t));
            document.body.appendChild(n);
            const o = e.getBoundingClientRect(),
              s = o.left + window.pageXOffset - n.offsetWidth / 2 + o.width / 2,
              i = o.bottom + window.pageYOffset - n.offsetHeight - 2 * o.height;
            (n.style.top = `${i}px`), (n.style.left = `${s}px`);
          })(t));
      }
      function Hd() {
        const e = document.querySelector('.svg-tip');
        e && e.remove();
      }
      n('.js-calendar-graph-svg', function (e) {
        const t = i(e, '.js-calendar-graph');
        t.addEventListener('mouseover', Ad), t.addEventListener('mouseout', Hd);
        const n = t.getAttribute('data-from');
        n && (Md = Fd(n));
      }),
        s('click', '.js-calendar-graph rect.day', function (e) {
          const t = e.currentTarget,
            n = i(t, '.js-calendar-graph'),
            o = r(n, 'data-org'),
            s = r(t, 'data-date');
          t.classList.contains('active')
            ? Ud(Od())
            : (function (e, t, n) {
                let o, s;
                if (Md && t) {
                  const t = Md.getTime(),
                    n = 26784e5,
                    i = t - n,
                    r = t + n;
                  ([o, s] = e > Md ? [Md, e] : [e, Md]),
                    (o = new Date(Math.max(o.getTime(), i))),
                    (s = new Date(Math.min(s.getTime(), r))),
                    (Md = null);
                } else Md = s = o = e;
                $d(o, s);
                const i = xd(),
                  r = Id(i.search.slice(1), {
                    from: o,
                    to: s,
                    org: n,
                  });
                r.append('tab', 'overview'), (i.search = r.toString()), Cd(i.toString());
              })(Fd(s), e.shiftKey, o);
        });
      const qd = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      async function Cd(e) {
        const t = document.getElementById('js-contribution-activity');
        if (!t) return;
        t.classList.add('loading');
        const n = await Q(document, e);
        t.classList.remove('loading'), (t.innerHTML = ''), t.append(n);
      }
      function Id(e, t) {
        const n = new URLSearchParams(e);
        n.delete('from'), n.delete('to'), n.delete('org');
        let o = t.fromStr;
        t.from && (o = Pd(t.from)), o && n.append('from', o);
        let s = t.toStr;
        t.to && (s = Pd(t.to)), s && n.append('to', s);
        const i = t.org;
        return i && n.append('org', i), n;
      }
      async function _d(e, t, n) {
        const o = c(document, '.js-calendar-graph'),
          s = r(o, 'data-graph-url'),
          i = new URL(s, window.location.origin),
          a = Id(i.search.slice(1), {
            from: e,
            to: t,
            org: n,
          });
        i.search = a.toString();
        const l = await Q(document, i.toString());
        c(document, '.js-yearly-contributions').replaceWith(l);
      }
      function $d(e, t) {
        const n = c(document, '.js-calendar-graph'),
          o = n.querySelectorAll('rect.day');
        for (const i of o) i.classList.remove('active');
        if ((n.classList.remove('days-selected'), e || t)) {
          n.classList.add('days-selected');
          for (const e of o) s(e) && e.classList.add('active');
        }
        function s(n) {
          const o = Fd(n.getAttribute('data-date') || '').getTime();
          return e && t ? e.getTime() <= o && o <= t.getTime() : e ? o === e.getTime() : void 0;
        }
      }
      function Nd() {
        const e = c(document, '.js-calendar-graph').querySelectorAll('rect.active'),
          t = e[0],
          n = e[e.length - 1],
          o = t && r(t, 'data-date'),
          s = n && r(n, 'data-date');
        return o && s
          ? {
              first: o,
              last: s,
            }
          : null;
      }
      function Rd() {
        return (
          Nd() ||
          (function () {
            const e = new URLSearchParams(window.location.search.slice(1)),
              t = e.get('from'),
              n = e.get('to');
            return t && n
              ? {
                  first: t,
                  last: n,
                }
              : null;
          })() ||
          (function () {
            const e = new URL(Od(), window.location.origin),
              t = new URLSearchParams(e.search.slice(1)),
              n = t.get('from'),
              o = t.get('to');
            return n && o
              ? {
                  first: n,
                  last: o,
                }
              : null;
          })()
        );
      }
      function Dd(e) {
        return `0${e}`.slice(-2);
      }
      function Pd(e) {
        return `${e.getUTCFullYear()}-${Dd(e.getUTCMonth() + 1)}-${Dd(e.getUTCDate())}`;
      }
      function Fd(e) {
        const [t, n, o] = e.split('-').map((e) => parseInt(e, 10));
        return new Date(Date.UTC(t, n - 1, o));
      }
      async function Bd(e) {
        const t = Nd(),
          n = (function () {
            const e = c(document, '.js-calendar-graph');
            return {
              first: r(e, 'data-from'),
              last: r(e, 'data-to'),
            };
          })(),
          o = new Date(n.first),
          s = new Date(n.last);
        if ((await _d(o, s, e), t)) {
          $d(new Date(t.first), new Date(t.last));
        }
      }
      function Od() {
        return c(document, '.js-profile-timeline-year-list .js-year-link.selected', HTMLAnchorElement).href || '';
      }
      function Ud(e) {
        const t = new URL(e, window.location.origin).search,
          n = new URLSearchParams(t.slice(1)),
          o = n.get('org'),
          s = n.get('from'),
          i = n.get('to'),
          r = new Date(s),
          a = new Date(i);
        _d(r, a, o);
        const c = xd(),
          l = Id(c.search.slice(1), {
            from: r,
            to: a,
            org: o,
          });
        l.append('tab', 'overview'), (c.search = l.toString()), Cd(c.toString());
      }
      function zd(e) {
        const t = e.closest('.js-details-container');
        t && t.classList.add('open');
        const n = e.getBoundingClientRect(),
          o = window.scrollY + n.top - 62 - 10;
        window.scrollTo(0, o);
      }
      function Wd(e, t) {
        return e.length < t.length ? -1 : e.length > t.length ? 1 : e.localeCompare(t);
      }
      function Vd(e, t) {
        const n = e.getBoundingClientRect();
        return (t.getBoundingClientRect().width - n.width) / 2;
      }
      function Gd(e, t) {
        const n = e.querySelector('svg');
        if (!n) return;
        const o = n.querySelector('.js-highlight-blob'),
          s = Math.floor(e.clientWidth),
          i = Math.max(s, 250),
          r = i,
          a = n.querySelector('.js-highlight-label-top'),
          c = n.querySelector('.js-highlight-label-bottom'),
          l = n.querySelector('.js-highlight-label-right'),
          u = n.querySelector('.js-highlight-label-left'),
          d = n.querySelector('.js-highlight-percent-top'),
          m = n.querySelector('.js-highlight-percent-bottom'),
          f = n.querySelector('.js-highlight-percent-right'),
          p = n.querySelector('.js-highlight-percent-left'),
          g = n.querySelector('.js-highlight-x-axis'),
          h = n.querySelector('.js-highlight-y-axis'),
          j = n.querySelector('.js-highlight-top-ellipse'),
          b = n.querySelector('.js-highlight-right-ellipse'),
          v = n.querySelector('.js-highlight-bottom-ellipse'),
          y = n.querySelector('.js-highlight-left-ellipse'),
          L = e.querySelector('.js-activity-overview-graph-spinner'),
          w = n.querySelector('g');
        w.removeAttribute('transform'),
          n.classList.remove('d-none'),
          n.classList.add('d-block'),
          L.classList.remove('d-block'),
          L.classList.add('d-none'),
          (a.innerHTML = ''),
          (l.innerHTML = ''),
          (c.innerHTML = ''),
          (u.innerHTML = ''),
          (d.innerHTML = '&nbsp;'),
          (f.innerHTML = '&nbsp;'),
          (m.innerHTML = '&nbsp;'),
          (p.innerHTML = '&nbsp;');
        const T = Object.keys(t.percentages).sort(Wd),
          [E, k] = T.slice(0, 2).sort(),
          [S, M] = T.slice(2, 4).sort(),
          x = t.percentages[S],
          A = t.percentages[k],
          H = t.percentages[M],
          q = t.percentages[E];
        let C = null;
        const I = (e, n) => {
            const o = t.percentages[e];
            if (o > 0) return (C = n), `${o}%`;
          },
          _ = I(S, d);
        _ && (d.textContent = _);
        const $ = I(k, f);
        $ && (f.textContent = $);
        const N = I(M, m);
        N && (m.textContent = N);
        const R = I(E, p);
        R && (p.textContent = R);
        const D = i / 2,
          P = i / 2;
        a.appendChild(document.createTextNode(S)),
          a.setAttribute('dx', D.toString()),
          c.appendChild(document.createTextNode(M)),
          c.setAttribute('dx', P.toString()),
          d.setAttribute('dx', D.toString()),
          m.setAttribute('dx', P.toString());
        const F = a.getBoundingClientRect().height;
        let B = 0;
        C && (B = C.getBoundingClientRect().height);
        let O = r / 2 + F / 4,
          U = r / 2 + F / 4;
        q > 0 && (O = O + B / 2 + 2.5),
          A > 0 && (U = U + B / 2 + 2.5),
          u.appendChild(document.createTextNode(E)),
          u.setAttribute('dy', O.toString()),
          l.appendChild(document.createTextNode(k)),
          l.setAttribute('dy', U.toString());
        const z = O - F,
          W = U - F;
        p.setAttribute('dy', z.toString()), f.setAttribute('dy', W.toString());
        let V = x / 100,
          G = H / 100,
          J = q / 100,
          K = A / 100;
        const X = Math.max(V, G, J, K),
          Y = (e) => (1 * e) / X + 0;
        (V = Y(V)), (G = Y(G)), (J = Y(J)), (K = Y(K));
        const Q =
            (function (e) {
              let t = 0;
              for (const n of e) {
                const e = n.getBoundingClientRect();
                e.width > t && (t = e.width);
              }
              return t;
            })([u, l, a, c]) + 10,
          Z = Math.max(Q, F),
          ee = i / 2,
          te = r / 2,
          ne = ee,
          oe = Z,
          se = ee,
          ie = r - Z,
          re = Z,
          ae = te,
          ce = i - Z,
          le = te,
          ue = ee - re,
          de = te - oe;
        let me = oe + (1 - V) * de,
          fe = Math.max(ie - (1 - G) * de, te),
          pe = re + (1 - J) * ue,
          ge = ce - (1 - K) * ue;
        g.setAttribute('x1', re.toString()),
          g.setAttribute('y1', te.toString()),
          g.setAttribute('x2', ce.toString()),
          g.setAttribute('y2', te.toString()),
          h.setAttribute('x1', ee.toString()),
          h.setAttribute('y1', oe.toString()),
          h.setAttribute('x2', ee.toString()),
          h.setAttribute('y2', ie.toString()),
          me + 4 < te && (me += 4),
          fe - 4 > te && (fe -= 4),
          pe + 4 < ee && (pe += 4),
          ge - 4 > ee && (ge -= 4);
        const he = oe - 10,
          je = ce + 10;
        let be = ie + 10 + 8;
        H > 0 && (be += B);
        const ve = re - 12;
        a.setAttribute('dy', he.toString()),
          l.setAttribute('dx', je.toString()),
          c.setAttribute('dy', be.toString()),
          u.setAttribute('dx', ve.toString());
        const ye = ve - Vd(p, u),
          Le = je + Vd(f, l);
        p.setAttribute('dx', ye.toString()), f.setAttribute('dx', Le.toString());
        const we = he - F,
          Te = be - F;
        d.setAttribute('dy', we.toString()), m.setAttribute('dy', Te.toString());
        0 === x
          ? j.classList.add('d-none')
          : (j.setAttribute('cx', ne.toString()), j.setAttribute('cy', (me - 2).toString())),
          0 === A
            ? b.classList.add('d-none')
            : (b.setAttribute('cx', (ge + 2).toString()), b.setAttribute('cy', le.toString())),
          0 === H
            ? v.classList.add('d-none')
            : (v.setAttribute('cx', se.toString()), v.setAttribute('cy', (fe + 2).toString())),
          0 === q
            ? y.classList.add('d-none')
            : (y.setAttribute('cx', (pe - 2).toString()), y.setAttribute('cy', ae.toString()));
        const Ee = w.getBoundingClientRect(),
          ke = n.getBoundingClientRect(),
          Se = 0 - (Ee.top - ke.top),
          Me = 0 - (Ee.left - ke.left);
        w.setAttribute('transform', `translate(${Me}, ${Se})`);
        const xe = Math.ceil(Ee.width),
          Ae = Math.ceil(Ee.height);
        n.setAttribute('width', xe.toString()), n.setAttribute('height', Ae.toString());
        const He = `M${ne},${me} ${[
          [ge, le],
          [se, fe],
          [pe, ae],
        ]
          .map((e) => `L${e[0]},${e[1]}`)
          .join(' ')} z`;
        x + A + H + q !== 0 && o.setAttribute('d', He);
      }
      function Jd(e) {
        (c(document, '.js-profile-editable-area').hidden = e),
          (c(document, '.js-profile-editable-form').hidden = !e),
          (c(document, '.js-profile-editable-error').textContent = '');
      }
      s('click', '.js-org-filter-link', function (e) {
        e.stopPropagation(), e.preventDefault();
        const t = e.currentTarget,
          n = i(t, '.js-org-filter-links-container').querySelector('.js-org-filter-link.selected'),
          o = new URL(t.href, window.location.origin),
          s = new URLSearchParams(o.search.slice(1)),
          r = s.get('org'),
          a = Rd(),
          c = new Date(a.first),
          l = new Date(a.last);
        n && n.classList.remove('selected'), t !== n && t.classList.add('selected'), Bd(r);
        const u = xd(),
          d = {
            org: r,
            from: null,
            to: null,
          };
        s.has('from') && (d.from = c), s.has('to') && (d.to = l);
        const m = Id(u.search.slice(1), d);
        (u.search = m.toString()),
          Cd(u.toString()),
          (async function (e, t) {
            const n = document.getElementById('year-list-container');
            if (!n) return;
            t.append('year_list', '1'), (e.search = t.toString());
            const o = await Q(document, e.toString());
            (n.innerHTML = ''), n.append(o);
          })(u, m),
          ct(null, '', u.toString());
      }),
        s('click', '.js-year-link', function (e) {
          e.stopPropagation(), e.preventDefault();
          const t = e.currentTarget,
            n = i(t, 'ul');
          c(n, '.js-year-link.selected').classList.remove('selected'),
            t.classList.add('selected'),
            Ud(t.href),
            ct(null, '', t.href);
        }),
        (function () {
          const e = window.location.hash;
          if (!e || e.indexOf('#event-') < 0) return;
          const t = e.slice(1, e.length),
            n = document.getElementById(t);
          n && zd(n);
        })(),
        window.addEventListener('hashchange', function (e) {
          const t = e.newURL || window.location.href,
            n = t.slice(t.indexOf('#') + 1, t.length),
            o = document.getElementById(n);
          o && (e.stopPropagation(), zd(o));
        }),
        D('.js-show-more-timeline-form', async function (e, t) {
          await t.text();
          const n = document.querySelector('.js-show-more-timeline-form');
          if (n) {
            const t = r(n, 'data-year'),
              o = c(document, '.js-year-link.selected'),
              s = c(document, `#year-link-${t}`);
            if ((o.classList.remove('selected'), s.classList.add('selected'), t !== e.getAttribute('data-year'))) {
              const e = r(n, 'data-from'),
                t = new Date(e),
                o = r(n, 'data-to');
              _d(t, new Date(o), n.getAttribute('data-org'));
            }
          }
          (document.title = e.getAttribute('data-title') || ''), ct(null, '', e.getAttribute('data-url') || '');
        }),
        n('.js-activity-overview-graph-container', (e) => {
          !(async function (e) {
            await G;
            const t = r(e, 'data-percentages'),
              n = {
                percentages: JSON.parse(t),
              };
            if ((Gd(e, n), 'true' === e.getAttribute('data-responsive-graph'))) {
              const t = v(Gd.bind(null, e, n), 100);
            }
          })(e);
        }),
        s('click', '.js-profile-editable-edit-button', function () {
          !(function () {
            const e = c(document, '.js-user-profile-bio').textContent;
            'string' == typeof e && (c(document, '.js-user-profile-bio-edit', HTMLTextAreaElement).value = e);
          })(),
            Jd(!0);
        }),
        s('click', '.js-profile-editable-cancel', function () {
          Jd(!1);
        }),
        D('.js-profile-editable-form', async (e, t) => {
          let n;
          try {
            n = await t.html();
          } catch (o) {
            if (422 === o.response.status) {
              c(document, '.js-profile-editable-error').textContent = o.response.json.message;
            }
            return;
          }
          !(function (e) {
            c(document, '.js-profile-editable-area').replaceWith(e);
          })(n.html),
            Jd(!1);
        });
      const Kd = new WeakMap();
      async function Xd(e) {
        const t = c(document, '.js-pinned-items-selection-form');
        if (e) {
          if ((Kd.get(t) || 0) > 100) return;
        }
        const n = t.querySelector('.js-more-pinnable-items-button');
        if (!(n instanceof HTMLButtonElement)) return;
        if (((n.textContent = r(n, 'data-disable-with')), (n.disabled = !0), e)) {
          const e = Kd.get(t) || 0;
          Kd.set(t, e + 1);
        }
        const o = r(n, 'data-url'),
          s = await Q(document, o);
        c(t, '.js-more-pinnable-items-replace-target').replaceWith(s), Yd(), Qd();
      }
      function Yd() {
        u(c(document, '.js-pinned-items-filter-input'), 'change');
      }
      async function Qd() {
        const e = c(document, '.js-pinned-items-selection-form');
        await $();
        const t = a(e, '.js-pinnable-checkbox', HTMLInputElement),
          n = t.filter((e) => e.checked).length,
          o = parseInt(e.getAttribute('data-max-repo-count') || '', 10);
        for (const s of t) s.disabled = n === o && !s.checked;
        !(function (e, t) {
          const n = c(document, '.js-remaining-pinned-items-count'),
            o = r(n, 'data-remaining-label'),
            s = t - e;
          (n.textContent = `${s} ${o}`), n.classList.toggle('text-red', s < 1);
        })(n, o);
      }
      n('.js-more-pinnable-items-button', function () {
        (function () {
          const e = document.querySelector('.js-pinned-items-filter-input');
          return e instanceof HTMLInputElement && (document.activeElement === e || e.defaultValue.trim().length > 0);
        })() && Xd(!0);
      }),
        s('click', '.js-more-pinnable-items-button', function () {
          Xd(!1);
        }),
        s('filter-input-start', '.js-pinned-items-filter', (e) => {
          e.currentTarget.filter = (function () {
            const e = a(document, '.js-pinned-items-type-filter:checked', HTMLInputElement).map((e) => e.value);
            return (t, n, o) => {
              const s = o.toLowerCase().trim();
              if (t.querySelector('input:checked'))
                return {
                  match: !0,
                };
              const i = !s || n.toLowerCase().indexOf(s.toLowerCase()) > -1,
                r = t.getAttribute('data-pinnable-type'),
                a = !(e.length > 0 && r) || e.includes(r);
              return {
                match: i && a,
              };
            };
          })();
        }),
        R('.js-pinned-items-filter-input', function () {
          Xd(!0);
        }),
        s('change', '.js-pinned-items-type-filter', Yd),
        s('change', '.js-pinned-items-type-filter', function () {
          const e = a(document, '.js-pinned-items-type-filter:checked', HTMLInputElement);
          for (const t of e) t.disabled = 1 === e.length;
        }),
        s('change', '.js-pinned-items-selection-form', Qd),
        s('reset', '.js-pinned-items-selection-form', Qd),
        n('.js-pinned-items-selection-form', Yd);
      let Zd = null,
        em = null;
      function tm(e) {
        const { item: t, oldIndex: n } = e,
          { parentNode: o } = t;
        em = o.children[n + 1];
      }
      async function nm(e) {
        const { oldIndex: t, newIndex: n, item: o } = e;
        if (t === n) return;
        const s = i(o, '.js-pinned-items-reorder-form', HTMLFormElement),
          r = i(s, '.js-pinned-items-reorder-container'),
          a = c(r, '.js-pinned-items-spinner'),
          l = c(r, '.js-pinned-items-reorder-message');
        (l.textContent = ''), (a.style.display = 'inline-block'), Zd.option('disabled', !0);
        try {
          await oe(s.action, {
            method: s.method,
            body: new FormData(s),
          }),
            (l.textContent = l.getAttribute('data-success-text') || ''),
            (a.style.display = 'none'),
            Zd.option('disabled', !1);
        } catch (u) {
          (l.textContent = l.getAttribute('data-error-text') || ''), (a.style.display = 'none');
          const e = o.parentNode;
          em ? e.insertBefore(o, em) : e.appendChild(o);
        }
      }
      function om(e, t) {
        t > 0
          ? ((e.textContent = (function (e) {
              return e > 999 ? `${(e / 1e3).toFixed(1)}k` : e.toLocaleString();
            })(t)),
            (e.hidden = !1))
          : e.remove();
      }
      n('.js-pinned-items-reorder-list', function (e) {
        Zd = Pe.create(e, {
          animation: 150,
          item: '.js-pinned-item-list-item',
          handle: '.js-pinned-item-reorder',
          onUpdate: nm,
          onStart: tm,
          chosenClass: 'is-dragging',
        });
      }),
        s('submit', '.js-pinned-items-reorder-form', function (e) {
          e.preventDefault();
        }),
        s('click', '.js-pinned-item-list-item .js-sortable-button', function ({ currentTarget: e }) {
          Nr(e, i(e, '.js-pinned-item-list-item'), nm);
        }),
        n('.js-user-profile-sticky-fields.is-stuck', function () {
          const e = c(document, '.js-user-profile-sticky-bar');
          return {
            add() {
              e.classList.add('is-stuck');
            },
            remove() {
              e.classList.remove('is-stuck');
            },
          };
        }),
        n('.js-user-profile-follow-button.is-stuck', function () {
          const e = c(document, '.js-user-profile-sticky-bar');
          return {
            add() {
              e.classList.add('is-follow-stuck');
            },
            remove() {
              e.classList.remove('is-follow-stuck');
            },
          };
        }),
        n('.js-user-profile-following-toggle .js-toggler-container.on', function () {
          return {
            add() {
              const e = document.querySelector('.js-user-profile-following-mini-toggle .js-toggler-container');
              e && e.classList.add('on');
            },
            remove() {
              const e = document.querySelector('.js-user-profile-following-mini-toggle .js-toggler-container');
              e && e.classList.remove('on');
            },
          };
        }),
        n('.js-user-profile-following-mini-toggle .js-toggler-container.on', function () {
          const e = c(document, '.js-user-profile-following-toggle .js-toggler-container');
          return {
            add() {
              e.classList.add('on');
            },
            remove() {
              e.classList.remove('on');
            },
          };
        }),
        n('.js-profile-tab-count-container', function (e) {
          !(async function (e) {
            const t = new URL(r(e, 'data-url'), window.location.origin),
              n = new URLSearchParams(t.search.slice(1)),
              o = e.querySelector('.js-profile-repository-count'),
              s = e.querySelector('.js-profile-project-count'),
              i = e.querySelector('.js-profile-package-count'),
              a = e.querySelector('.js-profile-team-count'),
              c = e.querySelector('.js-profile-member-count');
            o && n.append('repo', '1'),
              s && n.append('project', '1'),
              i && n.append('package', '1'),
              a && n.append('team', '1'),
              c && n.append('member', '1'),
              (t.search = n.toString());
            const l = await Oe(t.toString()),
              u = (await l.json()).data;
            o && u.repositories && om(o, u.repositories.totalCount),
              s && u.projects && om(s, u.projects.totalCount),
              i && u.registryPackages && om(i, u.registryPackages.totalCount),
              a && u.teams && om(a, u.teams.totalCount),
              c && u.members && om(c, u.members.totalCount);
          })(e);
        });
      function sm(e) {
        return e.split('\n').reduce(function (e, t) {
          var n =
            (function (e) {
              var t = im.exec(e);
              if (!t) return null;
              var n = t[2] && 0 === t[2].indexOf('native'),
                o = t[2] && 0 === t[2].indexOf('eval'),
                s = rm.exec(t[2]);
              o && null != s && ((t[2] = s[1]), (t[3] = s[2]), (t[4] = s[3]));
              return {
                file: n ? null : t[2],
                methodName: t[1] || '<unknown>',
                arguments: n ? [t[2]] : [],
                lineNumber: t[3] ? +t[3] : null,
                column: t[4] ? +t[4] : null,
              };
            })(t) ||
            (function (e) {
              var t = am.exec(e);
              if (!t) return null;
              return {
                file: t[2],
                methodName: t[1] || '<unknown>',
                arguments: [],
                lineNumber: +t[3],
                column: t[4] ? +t[4] : null,
              };
            })(t) ||
            (function (e) {
              var t = cm.exec(e);
              if (!t) return null;
              var n = t[3] && t[3].indexOf(' > eval') > -1,
                o = lm.exec(t[3]);
              n && null != o && ((t[3] = o[1]), (t[4] = o[2]), (t[5] = null));
              return {
                file: t[3],
                methodName: t[1] || '<unknown>',
                arguments: t[2] ? t[2].split(',') : [],
                lineNumber: t[4] ? +t[4] : null,
                column: t[5] ? +t[5] : null,
              };
            })(t) ||
            (function (e) {
              var t = dm.exec(e);
              if (!t) return null;
              return {
                file: t[2],
                methodName: t[1] || '<unknown>',
                arguments: [],
                lineNumber: +t[3],
                column: t[4] ? +t[4] : null,
              };
            })(t) ||
            (function (e) {
              var t = um.exec(e);
              if (!t) return null;
              return {
                file: t[3],
                methodName: t[1] || '<unknown>',
                arguments: [],
                lineNumber: +t[4],
                column: t[5] ? +t[5] : null,
              };
            })(t);
          return n && e.push(n), e;
        }, []);
      }
      var im = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        rm = /\((\S*)(?::(\d+))(?::(\d+))\)/;
      var am = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
      var cm = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
        lm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
      var um = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
      var dm = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
      let mm = !1,
        fm = 0;
      const pm = Date.now();
      function gm(e) {
        var t;
        const n = (function (e) {
            return sm(e.stack || '').map((e) => ({
              filename: e.file || '',
              function: String(e.methodName),
              lineno: (e.lineNumber || 0).toString(),
              colno: (e.column || 0).toString(),
            }));
          })(e),
          o = null !== (t = e.framesToPop) && void 0 !== t ? t : 0;
        return 0 === o ? n : n.slice(o);
      }
      const hm = /(chrome|moz|safari)-extension:\/\//;
      function jm() {
        var e, t;
        const n =
          null ===
            (t = null === (e = document.head) || void 0 === e ? void 0 : e.querySelector('meta[name="user-login"]')) ||
          void 0 === t
            ? void 0
            : t.content;
        if (n) return n;
        const o = As();
        return o ? `anonymous-${o}` : null;
      }
      let bm = !1;
      window.addEventListener('pageshow', () => (bm = !1)), window.addEventListener('pagehide', () => (bm = !0));
      const vm = document.querySelector('meta[name=js-proxy-site-detection-payload]'),
        ym = document.querySelector('meta[name=expected-hostname]');
      if (vm instanceof HTMLMetaElement && ym instanceof HTMLMetaElement && lt(document)) {
        const e = {
            url: window.location.href,
            expectedHostname: ym.content,
            documentHostname: document.location.hostname,
            proxyPayload: vm.content,
          },
          t = new Error(),
          n = {};
        (n.$__ = btoa(JSON.stringify(e))),
          (function (e, t = {}) {
            !(async function (e) {
              var t, n;
              if (
                !(
                  !bm &&
                  !mm &&
                  fm < 10 &&
                  'function' == typeof Blob &&
                  'undefined' != typeof Intl &&
                  'undefined' != typeof MutationObserver &&
                  'undefined' != typeof URLSearchParams &&
                  'undefined' != typeof WebSocket &&
                  'undefined' != typeof IntersectionObserver &&
                  'undefined' != typeof AbortController &&
                  'entries' in FormData.prototype &&
                  'append' in Element.prototype
                ) ||
                lt(document)
              )
                return;
              const o =
                null ===
                  (n =
                    null === (t = document.head) || void 0 === t
                      ? void 0
                      : t.querySelector('meta[name="browser-errors-url"]')) || void 0 === n
                  ? void 0
                  : n.content;
              if (!o) return;
              if (((s = e.error.stacktrace), s.some((e) => hm.test(e.filename) || hm.test(e.function))))
                return void (mm = !0);
              var s;
              fm++;
              try {
                await fetch(o, {
                  method: 'post',
                  body: JSON.stringify(e),
                });
              } catch (i) {}
            })(
              (function (e, t = {}) {
                return Object.assign(
                  {
                    error: e,
                    sanitizedUrl: Ui() || window.location.href,
                    readyState: document.readyState,
                    referrer: document.referrer,
                    timeSinceLoad: Math.round(Date.now() - pm),
                    user: jm() || void 0,
                  },
                  t,
                );
              })(
                (function (e) {
                  return {
                    type: e.name,
                    value: e.message,
                    stacktrace: gm(e),
                  };
                })(e),
                t,
              ),
            );
          })(t, n);
      }
      function Lm(e, t, n) {
        const o = Array.from(e.querySelectorAll('[role="menuitem"]'));
        let s = o.indexOf(t),
          i = o.indexOf(n);
        if (-1 === s) throw new Error("Couldn't find startIndex in container");
        if (-1 === i) throw new Error("Couldn't find endItem in container");
        wm(e), o[i].classList.add('is-last-in-range'), s > i && ([s, i] = [i, s]);
        for (const r of o.slice(s, i + 1)) r.classList.add('is-range-selected');
      }
      function wm(e) {
        for (const t of e.querySelectorAll('[role="menuitem"]'))
          t.classList.remove('is-range-selected', 'is-last-in-range');
      }
      s(
        'details-menu-select',
        '.js-pull-base-branch-menu',
        function () {
          const e = c(document, '.js-change-base-template', HTMLTemplateElement).content.cloneNode(!0);
          e instanceof DocumentFragment &&
            ee({
              content: e,
            });
        },
        {
          capture: !0,
        },
      ),
        n('.js-diffbar-range-menu .js-diffbar-range-list', {
          subscribe: function (e) {
            const t = i(e, 'details-menu'),
              n = e.classList.contains('js-diffbar-invert-range');
            let o = !1;
            function s(e) {
              (o = e.shiftKey), o && e.preventDefault();
            }
            function a(t) {
              if (!o) return;
              if ((t.preventDefault(), !(t instanceof CustomEvent))) throw new Error('invariant');
              const s = t.detail.relatedTarget;
              if (!(s instanceof Element)) throw new Error('invariant');
              if (s.classList.contains('is-range-selected')) {
                t.stopPropagation();
                const o = e.querySelectorAll('.is-range-selected'),
                  s = n ? o.length - 1 : 0,
                  i = n ? 0 : o.length - 1,
                  a = o[s],
                  l = o[i],
                  u = r(e, 'data-range-url'),
                  d = a.getAttribute('data-parent-commit'),
                  m = r(l, 'data-commit'),
                  f = d && m ? `${d}..${m}` : m,
                  p = u.replace('$range', f);
                me({
                  url: p,
                  container: c(document, '#js-repo-pjax-container'),
                });
              } else
                t.stopImmediatePropagation(),
                  (async function (e, t) {
                    function n(n) {
                      Lm(e, t, i(n.target, '[role="menuitem"]'));
                    }
                    Lm(e, t, t),
                      e.addEventListener('mouseover', n),
                      await new Promise((e) =>
                        window.addEventListener('keyup', e, {
                          once: !0,
                        }),
                      ),
                      e.removeEventListener('mouseover', n),
                      wm(e);
                  })(e, s);
            }
            return (
              e.addEventListener('click', s, {
                capture: !0,
              }),
              t.addEventListener('details-menu-select', a),
              {
                unsubscribe: () => {
                  e.removeEventListener('click', s, {
                    capture: !0,
                  }),
                    t.removeEventListener('details-menu-select', a);
                },
              }
            );
          },
        }),
        s(
          'toggle',
          '.js-diffbar-range-menu',
          function (e) {
            const t = e.currentTarget;
            if (!t.hasAttribute('open')) return;
            const n = t.querySelector('.in-range');
            n && n.focus();
          },
          {
            capture: !0,
          },
        ),
        s('click', '.js-compare-tab', function (e) {
          for (const n of document.querySelectorAll('.js-compare-tab.selected')) n.classList.remove('selected');
          e.currentTarget.classList.add('selected');
          for (const n of document.querySelectorAll('#commits_bucket, #files_bucket, #commit_comments_bucket'))
            n.classList.add('d-none');
          const t = e.currentTarget.hash;
          c(document, t).classList.remove('d-none'), e.preventDefault();
        }),
        Ee(function ({ target: e }) {
          if (!(e instanceof HTMLElement)) return;
          const t = e.closest('#commits_bucket, #files_bucket, #commit_comments_bucket');
          t && t instanceof HTMLElement && !he(t) && c(document, `.js-compare-tab[href="#${t.id}"]`).click();
        }),
        s('click', '.js-toggle-range-editor-cross-repo', function () {
          c(document, '.js-range-editor').classList.toggle('is-cross-repo');
        }),
        s('pjax:click', '.js-range-editor', function (e) {
          const t = document.querySelector('.js-compare-pr');
          if (t && t.classList.contains('open')) {
            const t = e.detail.options,
              n = new URL(t.url, window.location.origin);
            n.search.match(/expand=1/) || ((n.search += `${n.search ? '&' : ''}expand=1`), (t.url = n.toString()));
          }
        }),
        n('.js-compare-pr.open', {
          add() {
            document.body.classList.add('is-pr-composer-expanded');
          },
          remove() {
            document.body.classList.remove('is-pr-composer-expanded');
          },
        }),
        s('change', '.js-collab-checkbox', function ({ currentTarget: e }) {
          const t = e.form;
          for (const s of t.querySelectorAll('.errored')) s.classList.remove('errored');
          const n = i(e, '.js-collab-option'),
            o = c(n, '.js-status-indicator');
          o.classList.remove('status-indicator-success', 'status-indicator-failed'),
            o.classList.add('status-indicator-loading');
        }),
        D('.js-collab-form', async function (e, t) {
          try {
            await t.text();
          } catch (n) {
            for (const t of e.querySelectorAll('.status-indicator-loading')) {
              t.classList.remove('status-indicator-loading'), t.classList.add('status-indicator-failed');
              const e = i(t, '.js-collab-option');
              e.classList.add('errored');
              const n = c(e, '.js-collab-checkbox', HTMLInputElement);
              n.checked = !n.checked;
            }
            for (const t of e.querySelectorAll('.status-indicator-success'))
              t.classList.remove('status-indicator-success');
            return;
          }
          for (const o of e.querySelectorAll('.errored')) o.classList.remove('errored');
          for (const o of e.querySelectorAll('.status-indicator-loading'))
            o.classList.remove('status-indicator-loading'), o.classList.add('status-indicator-success');
        }),
        s(
          'details-menu-selected',
          '.js-pull-request-menu',
          function (e) {
            const t = c(document, '.js-pull-request-button'),
              n = c(e.detail.relatedTarget, 'span[data-menu-button-text]').textContent;
            (t.textContent = n), t.focus();
          },
          {
            capture: !0,
          },
        ),
        n('.js-timeline-item > .js-commit-group', {
          constructor: HTMLElement,
          add(e) {
            if (e.querySelector('.js-commit-group-header')) return;
            const t = e.closest('.js-timeline-item');
            if (!(t instanceof HTMLElement)) return;
            let n = t.previousElementSibling;
            n instanceof HTMLElement &&
              (n.classList.contains('js-timeline-item') ||
                ((n = n.previousElementSibling), n instanceof HTMLElement)) &&
              n.querySelector('.js-commit-group') &&
              (function (e, t) {
                const n = c(e, '.js-commit-group-commits'),
                  o = t.querySelectorAll('.js-commit-group-commits > .js-commit');
                for (const i of o) i.classList.toggle('py-3'), n.appendChild(i);
                const s = e.querySelector('.js-commit-group-count');
                s instanceof HTMLElement && (s.textContent = `${n.querySelectorAll('.js-commit').length}`), t.remove();
              })(n, t);
          },
        }),
        s('click', '.js-file-header .js-details-target', function (e) {
          if (!(e instanceof MouseEvent && e.altKey && e.currentTarget instanceof HTMLElement)) {
            const t = i(e.currentTarget, '.js-file');
            return void (t.getBoundingClientRect().top < 0 && ke(t));
          }
          const { currentTarget: t } = e,
            n = i(t, '.js-details-container');
          n.addEventListener(
            'details:toggled',
            function (e) {
              if (!(e instanceof CustomEvent)) throw new Error('invariant');
              const { open: t } = e.detail;
              Le(n, () => {
                for (const e of document.querySelectorAll('.js-file.js-details-container'))
                  e !== n && (e.classList.toggle('open', t), e.classList.toggle('Details--on', t));
              }),
                (function (e) {
                  if (!document.querySelector('.js-file-filter')) return;
                  mi(e);
                  const t = oi();
                  t && (t.checked = !e), Zs(ii());
                })(t);
            },
            {
              once: !0,
            },
          );
        }),
        Ee(() => {
          const e = window.location.hash.slice(1);
          if (!e) return;
          const t = document.getElementsByName(e)[0];
          if (!t) return;
          const n = t.nextElementSibling;
          n && n.matches('.js-file.js-details-container') && (n.classList.add('open'), n.classList.add('Details--on'));
        }),
        n('.js-file-header-dropdown', {
          subscribe: (e) =>
            V(e, 'toggle', function ({ currentTarget: e }) {
              const t = e,
                n = t.hasAttribute('open'),
                o = i(t, '.js-file-header');
              if (!(o instanceof HTMLElement)) throw new Error('invariant');
              o.classList.toggle('has-open-dropdown', n);
            }),
        }),
        s('click', '.js-fork-cleanup-select-item', function ({ currentTarget: e }) {
          const t = i(e, '.js-fork-cleanup-select-menu');
          for (const s of a(t, '.js-fork-cleanup-select-item')) s.classList.remove('selected');
          e.classList.add('selected');
          const n = i(t, '.js-fork-cleanup-button-group'),
            o = e.getAttribute('data-toggles-button');
          'branch' === o
            ? (c(n, '.js-fork-cleanup-branch-button').classList.remove('d-none'),
              c(n, '.js-fork-cleanup-fork-button').classList.add('d-none'))
            : 'fork' === o &&
              (c(n, '.js-fork-cleanup-branch-button').classList.add('d-none'),
              c(n, '.js-fork-cleanup-fork-button').classList.remove('d-none'));
        }),
        s('details:toggled', '.js-pull-merging', function ({ currentTarget: e }) {
          const t = a(e, '.js-merge-pull-request'),
            n = t.some(he);
          for (const o of t) o.classList.toggle('is-dirty', n);
        }),
        s('click', '.js-merge-box-try-again', async function ({ currentTarget: e }) {
          const t = c(i(e, '.js-pull-merging'), '.js-tryable-again', HTMLFormElement);
          u(t, 'submit');
        }),
        document.addEventListener('session:resume', function (e) {
          const t = document.getElementById(e.detail.targetId);
          if (t) {
            const e = t.closest('.js-merge-pull-request');
            if (e) {
              const t = e.closest('.js-details-container');
              t && t.classList.add('open');
            }
          }
        }),
        s('change', '.js-merge-button-toggle', function ({ currentTarget: e }) {
          const t = i(e, '.js-merge-pr'),
            n = !e.checked;
          for (const o of a(t, '.js-merge-commit-button', HTMLButtonElement)) o.disabled = n;
        }),
        s(
          'details-menu-selected',
          '.js-merge-method-menu',
          function (e) {
            const t = e.detail.relatedTarget,
              n = i(t, '.js-merge-pr'),
              o = c(n, '.js-merge-pull-request', HTMLFormElement),
              s = c(n, '.js-merge-method-menu-button'),
              l = s.getAttribute('data-merge-button-class');
            s.classList.toggle('btn-danger', t.hasAttribute('data-merge-commit-warning')),
              l && s.classList.toggle(l, !t.hasAttribute('data-unsafe-rebase'));
            const u = c(n, '.js-merge-title', HTMLInputElement),
              d = c(n, '.js-merge-message', HTMLTextAreaElement);
            u.defaultValue === u.value && (u.defaultValue = u.value = r(t, 'data-input-title-value'));
            d.defaultValue === d.value && (d.defaultValue = d.value = r(t, 'data-input-message-value'));
            n.classList.toggle('is-merging', 'merge' === t.value),
              n.classList.toggle('is-squashing', 'squash' === t.value),
              n.classList.toggle('is-rebasing', 'rebase' === t.value);
            const m =
                (o.classList.contains('js-admin-override-merge') && 'merge' === t.value) ||
                (o.classList.contains('js-admin-override-squash') && 'squash' === t.value) ||
                (o.classList.contains('js-admin-override-rebase') && 'rebase' === t.value),
              f = a(n, '.js-admin-override');
            for (const i of f) i.hidden = !m;
            const p = m && !c(n, '.js-merge-button-toggle', HTMLInputElement).checked,
              g = a(n, '.js-merge-pull-request .js-merge-commit-button', HTMLButtonElement);
            for (const i of g) (i.type = t.value === i.value ? 'submit' : 'button'), (i.disabled = p);
            o.classList.toggle('text-red', m);
            const h = i(n, '.js-pull-merging'),
              j = new URL(r(h, 'data-url'), window.location.origin),
              b = new URLSearchParams(j.search);
            b.set('merge_type', t.value), (j.search = b.toString()), h.setAttribute('data-url', j.toString());
          },
          {
            capture: !0,
          },
        ),
        s('details:toggled', '.js-merge-pr', function (e) {
          const t = e.currentTarget.querySelector('.js-merge-message');
          t && u(t, 'change');
        }),
        n('.branch-action-item.js-details-container.open', {
          add(e) {
            for (const t of e.querySelectorAll('.js-merge-review-section')) t.setAttribute('open', '');
          },
          remove(e) {
            for (const t of e.querySelectorAll('.js-merge-review-section')) t.removeAttribute('open');
          },
        }),
        s(
          'toggle',
          '.js-details-container .js-merge-review-section',
          function ({ currentTarget: e }) {
            const t = i(e, '.js-details-container'),
              n = t.querySelectorAll('.js-merge-review-section').length,
              o = t.querySelectorAll('.js-merge-review-section[open]').length,
              s = o === n;
            0 === o ? De(t, !1) : s && De(t, !0);
          },
          {
            capture: !0,
          },
        ),
        n('poll-include-fragment[data-to-be-polled]', {
          constructor: o,
          add(e) {
            function t() {
              (e.src = r(e, 'data-to-be-polled')), e.removeAttribute('data-to-be-polled');
            }
            document.hidden
              ? document.addEventListener('visibilitychange', t, {
                  once: !0,
                })
              : t();
          },
        });
      let Tm = !1;
      function Em() {
        const e = document.querySelectorAll('.pull-request-ref-restore');
        for (let t = 0; t < e.length; t++) e[t].classList.toggle('last', t === e.length - 1);
      }
      function km() {
        const e = null != document.querySelector('#js-pull-restorable'),
          t = document.querySelector('.js-pull-discussion-timeline');
        t && t.classList.toggle('is-pull-restorable', e);
      }
      function Sm() {
        const e = document.querySelector('.js-reviews-container');
        e &&
          setTimeout(() =>
            (function (e) {
              const t = i(e, '.js-review-state-classes'),
                n = t.querySelectorAll('.js-pending-review-comment').length,
                o = c(document, '.js-review-changes');
              t.classList.toggle('is-review-pending', n > 0);
              for (const s of document.querySelectorAll('.js-pending-review-comment-count')) s.textContent = String(n);
              for (const s of document.querySelectorAll('.js-pending-comment-count-type'))
                s instanceof HTMLElement &&
                  (s.textContent = s.getAttribute(1 === n ? 'data-singular-string' : 'data-plural-string'));
              if (n > 0) {
                o.textContent = o.getAttribute('data-pending-message') || '';
                const t = c(e, '.js-reviews-toggle');
                t.classList.add('anim-pulse-in'),
                  t.addEventListener('animationend', () => t.classList.remove('anim-pulse-in'), {
                    once: !0,
                  });
              } else o.textContent = o.getAttribute('data-message') || '';
            })(e),
          );
      }
      function Mm(e) {
        return e.getAttribute('ratio').split('/');
      }
      function xm(e) {
        if (e) {
          const [t, n] = Mm(e),
            o = parseInt(t) / parseInt(n),
            s = e.querySelector('.js-review-progress'),
            i = e.querySelector('.js-review-count');
          s instanceof HTMLElement && i && ((s.style.width = `${100 * o}%`), (i.textContent = `${t} / ${n}`));
        }
      }
      document.addEventListener('keydown', function (e) {
        'Alt' === e.key && (Tm = !0);
      }),
        document.addEventListener('keyup', function (e) {
          'Alt' === e.key && (Tm = !1);
        }),
        s('click', '.js-toggle-outdated-comments', function (e) {
          if (!(((e instanceof MouseEvent && e.altKey) || Tm) && e.currentTarget instanceof HTMLElement)) return;
          const t = e.currentTarget,
            n = i(t, 'details');
          function o() {
            const e = n.hasAttribute('open');
            for (const n of document.querySelectorAll('.js-toggle-outdated-comments'))
              if (n !== t) {
                i(n, 'details').toggleAttribute('open', e);
              }
          }
          setTimeout(() => {
            Le(t, o);
          });
        }),
        n('.pull-request-ref-restore', {
          add: Em,
          remove: Em,
        }),
        n('#js-pull-restorable', {
          add: km,
          remove: km,
        }),
        D('.js-inline-comment-form', async function (e, t) {
          await t.text(), Sm();
        }),
        D('.js-pending-review-comment .js-comment-delete', async function (e, t) {
          await t.text(), Sm();
        }),
        D('.js-resolvable-timeline-thread-form', async function (e, t) {
          try {
            const n = await t.html();
            i(e, '.js-resolvable-timeline-thread-container').replaceWith(n.html);
          } catch (n) {
            be();
          }
        }),
        s('click', '.js-resolvable-thread-toggler', function (e) {
          if (!(e.target instanceof HTMLElement)) return;
          const t = i(e.target, '.js-resolvable-timeline-thread-container');
          i(e.target, '.js-resolvable-thread-toggler-container').classList.toggle('border-bottom'),
            c(t, '.js-resolvable-thread-contents').classList.toggle('d-none');
          for (const n of t.querySelectorAll('.js-resolvable-thread-toggler')) n.classList.toggle('d-none');
        }),
        D('.js-toggle-user-reviewed-file-form', async function (e, t) {
          const n = i(e, '.js-details-container'),
            o = !!n.querySelector('.js-reviewed-file'),
            s = n.classList.contains('open'),
            r = n.querySelector('.js-file-header'),
            a = !!r && 60 === r.getBoundingClientRect().top;
          ((!o && s) || (o && !s)) && (De(n), a && ke(n));
          const l = c(e, '.js-reviewed-toggle');
          o
            ? (l.classList.remove('bg-blue-2', 'border-blue-light'), l.classList.add('text-gray', 'border-gray-dark'))
            : (l.classList.remove('text-gray', 'border-gray-dark'), l.classList.add('bg-blue-2', 'border-blue-light')),
            (c(l, '.js-reviewed-checkbox', HTMLInputElement).disabled = !0);
          const u = document.querySelector('progress-bar');
          u instanceof ProgressBarElement && (o ? u.decrement() : u.increment());
          const d = await t.html(),
            m = e.closest('.js-replace-file-header-review');
          m &&
            (m.replaceWith(d.html),
            n.hasAttribute('data-file-user-viewed')
              ? n.removeAttribute('data-file-user-viewed')
              : n.setAttribute('data-file-user-viewed', 'true'));
        });
      class ProgressBarElement extends HTMLElement {
        static get observedAttributes() {
          return ['ratio'];
        }
        attributeChangedCallback(e) {
          'ratio' === e && xm(this);
        }
        connectedCallback() {
          xm(this);
        }
        increment() {
          const [e, t] = Mm(this),
            n = Math.min(parseInt(e) + 1, parseInt(t));
          this.setAttribute('ratio', `${n}/${t}`);
        }
        decrement() {
          const [e, t] = Mm(this),
            n = Math.min(parseInt(e) - 1, parseInt(t));
          this.setAttribute('ratio', `${n}/${t}`);
        }
      }
      function Am(e) {
        const t = e.target,
          n = r(t, 'data-reaction-label'),
          o = i(t, '.js-add-reaction-popover'),
          s = c(o, '.js-reaction-description');
        s.hasAttribute('data-default-text') || s.setAttribute('data-default-text', s.textContent || ''),
          (s.textContent = n);
      }
      function Hm(e) {
        const t = i(e.target, '.js-add-reaction-popover'),
          n = c(t, '.js-reaction-description'),
          o = n.getAttribute('data-default-text');
        o && (n.textContent = o);
      }
      function qm(e, t) {
        e && e.postMessage && e.postMessage(JSON.stringify(t), '*');
      }
      window.customElements.get('progress-bar') ||
        ((window.ProgressBarElement = ProgressBarElement),
        window.customElements.define('progress-bar', ProgressBarElement)),
        document.addEventListener('pjax:end', function () {
          for (const e of document.querySelectorAll('.js-pull-refresh-on-pjax')) Z(e);
        }),
        n('.js-multi-line-callout', function (e) {
          const t = document.querySelector('.js-linkable-line-number');
          if (!t) return;
          if (i(t, '.js-diff-table').offsetHeight < 343) return;
          const n = t.closest('tr');
          if (!n) return;
          const o = n.lastElementChild;
          o && (e.remove(), o.prepend(e), e.removeAttribute('hidden'));
        }),
        s('submit', '.js-multi-line-callout', function (e) {
          if (!(e.target instanceof Element)) return;
          i(e.target, '.js-multi-line-callout').hidden = !0;
        }),
        s('click', '.js-dismiss-multi-line-suggestion-onboarding-notice', async function (e) {
          const t = r(e.currentTarget, 'data-url'),
            n = c(e.currentTarget.parentElement, '.js-data-url-csrf', HTMLInputElement),
            o = new FormData();
          o.append('notice', 'multi_line_suggestions'),
            await oe(
              Be(t, n.value, {
                method: 'post',
                body: o,
              }),
            );
          const s = document.querySelectorAll('.js-multi-line-suggestion-onboarding-notice');
          for (const i of s) i.remove();
        }),
        n('.js-updating-pull-request-commits-count', {
          add(e) {
            const t = e.textContent,
              n = a(document, '.js-updateable-pull-request-commits-count');
            for (const o of n) o.textContent = t;
          },
        }),
        (async () => {
          if (
            (await B,
            window.performance &&
              window.performance.navigation &&
              window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD)
          ) {
            const e = document.getElementById('js-report-pull-request-refresh');
            e && Re(e);
          }
        })(),
        D('.js-pick-reaction', async function (e, t) {
          const n = await t.json(),
            o = i(e, '.js-comment'),
            s = c(o, '.js-reactions-container'),
            r = c(o, '.js-comment-header-reaction-button'),
            a = z(document, n.json.reactions_container.trim()),
            l = z(document, n.json.comment_header_reaction_button.trim());
          s.replaceWith(a), r.replaceWith(l), o.classList.remove('is-reacting');
        }),
        s(
          'toggle',
          '.js-reaction-popover-container',
          function (e) {
            const t = e.currentTarget.hasAttribute('open');
            for (const n of a(e.target, '.js-reaction-option-item'))
              t
                ? (n.addEventListener('mouseenter', Am), n.addEventListener('mouseleave', Hm))
                : (n.removeEventListener('mouseenter', Am), n.removeEventListener('mouseleave', Hm));
            i(e.target, '.js-comment').classList.toggle('is-reacting', t);
          },
          {
            capture: !0,
          },
        );
      const Cm = 'render:hook:message',
        Im = 'render:hook:afterready',
        _m = ['is-render-pending', 'is-render-ready', 'is-render-loading', 'is-render-loaded'],
        $m = new WeakMap();
      function Nm(e) {
        if (null == e) return;
        const t = $m.get(e);
        null != t &&
          ((t.load = t.hello = null),
          t.helloTimer && (clearTimeout(t.helloTimer), (t.helloTimer = null)),
          t.loadTimer && (clearTimeout(t.loadTimer), (t.loadTimer = null)));
      }
      function Rm(e) {
        if (null != e) return e.classList.remove(..._m), e.classList.add('is-render-failed'), Nm(e);
      }
      function Dm() {
        return !0;
      }
      function Pm(e, t = Dm) {
        return function () {
          if (
            he(e) &&
            !e.classList.contains('is-render-ready') &&
            !e.classList.contains('is-render-failed') &&
            !e.classList.contains('is-render-failed-fatally') &&
            (!t || t())
          )
            return Rm(e);
        };
      }
      n('.js-render-target', {
        constructor: HTMLElement,
        initialize: function (e) {
          const t = $m.get(e);
          (null != t && t.load) ||
            (Nm(e),
            (function (e) {
              if ($m.get(e)) return;
              const t = {
                load: null,
                hello: null,
                helloTimer: null,
                loadTimer: null,
              };
              (t.load = Date.now()),
                (t.helloTimer = window.setTimeout(
                  Pm(e, function () {
                    return !t.hello;
                  }),
                  1e4,
                )),
                (t.loadTimer = window.setTimeout(Pm(e), 45e3)),
                $m.set(e, t);
            })(e),
            e.classList.add('is-render-automatic'),
            e.classList.add('is-render-requested'));
        },
      }),
        window.addEventListener('message', function (e) {
          const t = e.data;
          if (!t) return;
          const n =
            (function (e) {
              if ('string' == typeof e)
                try {
                  return JSON.parse(e);
                } catch (t) {
                  return;
                }
            })(t) || t;
          if ('string' != typeof n.type && 'render' !== n.type) return;
          const o = n.type;
          if ('string' != typeof n.identity) return;
          const s = n.identity;
          if ('string' != typeof n.body) return;
          const i = n.body,
            r = (function (e) {
              return Array.from(document.querySelectorAll('.js-render-target')).filter(
                (t) => !e || t.getAttribute('data-identity') === e,
              )[0];
            })(s);
          r &&
            e.origin === r.getAttribute('data-host') &&
            (function (e, t, n, o, s) {
              switch (o) {
                case 'hello':
                  {
                    (
                      $m.get(e) || {
                        untimed: !0,
                      }
                    ).hello = Date.now();
                    const t = {
                        type: 'render:cmd',
                        body: {
                          cmd: 'ack',
                          ack: !0,
                        },
                      },
                      n = {
                        type: 'render:cmd',
                        body: {
                          cmd: 'branding',
                          branding: !1,
                        },
                      },
                      o = (function (e) {
                        const t = e.querySelector('iframe');
                        return t instanceof HTMLIFrameElement ? t.contentWindow : null;
                      })(e);
                    if (
                      (qm(o, t), qm(o, n), e.classList.contains('is-local') && o && 'function' == typeof o.postMessage)
                    ) {
                      const t = o,
                        n = e.closest('.js-code-editor'),
                        s = n instanceof HTMLElement ? ut(n) : null;
                      if (s) {
                        let e = null;
                        const n = (n, o) => {
                          if (
                            (function (e) {
                              return e && 'setValue' === e.origin;
                            })(o)
                          )
                            return;
                          const i = s.code();
                          i !== e &&
                            ((e = i),
                            qm(t, {
                              type: 'render:data',
                              body: i,
                            }));
                        };
                        s.editor.on('change', n), n();
                      }
                    }
                  }
                  break;
                case 'error':
                  return Rm(e);
                case 'error:fatal':
                  return Rm(e), e.classList.add('is-render-failed-fatal');
                case 'error:invalid':
                  return Rm(e), e.classList.add('is-render-failed-invalid');
                case 'loading':
                  return e.classList.remove(..._m), e.classList.add('is-render-loading');
                case 'loaded':
                  return e.classList.remove(..._m), e.classList.add('is-render-loaded');
                case 'ready':
                  e.classList.remove(..._m),
                    e.classList.add('is-render-ready'),
                    s && 'number' == typeof s.height && (e.style.height = `${s.height}px`),
                    u(e, Im, {
                      container: e,
                      payload: s,
                    });
                  break;
                case 'resize':
                  s && 'number' == typeof s.height && (e.style.height = `${s.height}px`);
                  break;
                case 'data':
                  u(e, 'edit:visual', s);
                  break;
                default:
                  u(e, Cm, {
                    type: t,
                    body: o,
                    payload: s,
                  });
              }
            })(r, o, 0, i, null != n.payload ? n.payload : void 0);
        });
      let Fm = class BranchFilterElement extends HTMLElement {
        constructor() {
          super(...arguments), (this.abortSearch = null), (this.originalSelectedItem = null);
        }
        submit(e) {
          e.preventDefault();
        }
        resetField(e) {
          if ('Escape' !== fe(e)) return;
          const t = this.field.value.trim();
          (this.field.value = ''), t && this.search();
        }
        reset() {
          this.field.focus(), (this.field.value = ''), u(this.field, 'input');
        }
        get activeFilter() {
          var e;
          return null !== (e = this.filters.find((e) => e.classList.contains('selected'))) && void 0 !== e ? e : null;
        }
        async search() {
          var e;
          this.originalSelectedItem || (this.originalSelectedItem = this.activeFilter);
          const t = this.field.value.trim().length > 0,
            n = (function (e) {
              const t = e.form;
              if (e.value.trim()) {
                const n = new URL(t.action, window.location.origin),
                  o = new URLSearchParams(n.search.slice(1)),
                  s = t.elements.namedItem('utf8');
                return (
                  s instanceof HTMLInputElement && o.append('utf8', s.value),
                  o.append('query', e.value),
                  (n.search = o.toString()),
                  n.toString()
                );
              }
              return r(t, 'data-reset-url');
            })(this.field);
          this.classList.toggle('is-search-mode', t), this.classList.add('is-loading');
          for (const i of this.filters) i.classList.remove('selected');
          t
            ? this.allFilter.classList.add('selected')
            : this.originalSelectedItem &&
              (this.originalSelectedItem.classList.add('selected'), (this.originalSelectedItem = null)),
            null === (e = this.abortSearch) || void 0 === e || e.abort();
          const { signal: o } = (this.abortSearch = new AbortController());
          try {
            const e = await Q(document, n, {
              signal: o,
            });
            W(null, '', n), (this.result.innerHTML = ''), this.result.appendChild(e);
          } catch (s) {}
          o.aborted || this.classList.remove('is-loading');
        }
      };
      No([Fo], Fm.prototype, 'field', void 0),
        No([Fo], Fm.prototype, 'result', void 0),
        No([Fo], Fm.prototype, 'allFilter', void 0),
        No([Bo], Fm.prototype, 'filters', void 0),
        No([y(100)], Fm.prototype, 'search', null),
        (Fm = No([Oo], Fm));
      let Bm = class BranchFilterItemElement extends HTMLElement {
        get branch() {
          return this.getAttribute('branch');
        }
        get branches() {
          const e = this.closest('branch-filter').querySelectorAll('branch-filter-item');
          return Array.from(e).filter((e) => e.branch === this.branch);
        }
        loading(e) {
          for (const t of this.branches) (t.spinner.hidden = !e), t.destroyButton && (t.destroyButton.hidden = e);
        }
        set mode(e) {
          for (const t of this.branches) t.classList.toggle('Details--on', 'restore' === e);
        }
        async restore(e) {
          e.preventDefault(), this.loading(!0);
          try {
            await we(e.target);
          } catch (t) {
            location.reload();
          } finally {
            this.loading(!1);
          }
          this.mode = 'destroy';
        }
        async destroy(e) {
          e.preventDefault(), this.loading(!0);
          try {
            await we(e.target);
          } catch (t) {
            location.reload();
          } finally {
            this.loading(!1);
          }
          this.mode = 'restore';
        }
      };
      No([Fo], Bm.prototype, 'destroyButton', void 0),
        No([Fo], Bm.prototype, 'spinner', void 0),
        (Bm = No([Oo], Bm)),
        n('.repository-import', {
          subscribe: (e) =>
            V(e, 'socket:message', function (e) {
              const t = e.detail.data;
              t.redirect_to && ((document.location.href = t.redirect_to), e.stopImmediatePropagation());
            }),
        }),
        s('change', 'input.js-repository-import-lfs-opt', function ({ currentTarget: e }) {
          const t = parseInt(e.getAttribute('data-percent-used') || ''),
            n = i(e, '.js-repository-import-lfs-container'),
            o = e.getAttribute('data-used') || '';
          c(n, '.js-repository-import-lfs-warn').classList.toggle('d-none', !(t > 100)),
            c(n, '.js-usage-bar').classList.toggle('exceeded', t >= 100),
            c(n, '.js-usage-bar').setAttribute('aria-label', `${t}%`),
            (c(n, '.js-repository-import-lfs-progress').style.width = `${t}%`),
            (c(n, 'span.js-usage-text').textContent = o);
        }),
        D('.js-repository-import-author-form', async function (e, t) {
          const n = await t.html();
          i(e, '.js-repository-import-author').replaceWith(n.html);
        }),
        s('click', '.js-repository-import-projects-cancel-button', function () {
          const e = c(document, '.js-repository-import-projects-cancel-form', HTMLFormElement);
          P(e);
        });
      let Om = !1;
      function Um() {
        const e = c(document, '.js-repo-name');
        u(e, 'input');
        const t = c(document, '.js-owner-container [aria-checked="true"]'),
          n = 'false' !== t.getAttribute('data-org-allow-public-repos'),
          o = c(document, '.js-privacy-toggle[value=public]', HTMLInputElement);
        zm(
          n,
          o,
          document.querySelector('.js-privacy-toggle-label-public'),
          document.querySelector('.js-public-description'),
          document.querySelector('.js-public-restricted-by-policy-description'),
        );
        const s = (function (e, t) {
            let n = !1;
            const o = document.querySelectorAll('.js-new-repo-internal-visibility');
            for (const s of o) {
              s.hidden = !0;
              const e = s.querySelector('.js-privacy-toggle[value=internal]');
              e instanceof HTMLInputElement && e.checked && (n = !0);
            }
            if (e) {
              const o = document.querySelector(`#new-repo-internal-visibility-${e}`);
              if (o) {
                o.hidden = !1;
                const e = o.querySelector('.js-privacy-toggle-label-internal'),
                  s = o.querySelector('.js-internal-description'),
                  i = o.querySelector('.js-internal-restricted-by-policy-description'),
                  r = o.querySelector('.js-privacy-toggle[value=internal]');
                if (r instanceof HTMLInputElement)
                  return (
                    'false' === t.getAttribute('data-org-allow-internal-repos')
                      ? ((r.disabled = !0),
                        e && e.classList.add('text-gray-light'),
                        s && (s.hidden = !0),
                        i && (i.hidden = !1))
                      : (n && ((r.checked = !0), u(r, 'change')),
                        (r.disabled = !1),
                        e && e.classList.remove('text-gray-light'),
                        s && (s.hidden = !1),
                        i && (i.hidden = !0)),
                    r
                  );
              }
            }
            return null;
          })(t.getAttribute('data-business-id'), t),
          i = 'false' !== t.getAttribute('data-org-allow-private-repos'),
          r = c(document, '.js-privacy-toggle[value=private]', HTMLInputElement),
          a = document.querySelector('.js-privacy-toggle-label-private'),
          l = document.querySelector('.js-private-description'),
          d = document.querySelector('.js-private-restricted-by-policy-description');
        zm(i, r, a, l, d),
          (function () {
            const e = document.querySelectorAll('.js-org-upgrade-link:not([hidden=""]');
            for (const t of e) t.hidden = !0;
          })();
        const m = 'false' !== t.getAttribute('data-org-private-restricted-by-plan'),
          f = document.querySelector('.js-upgrade-private-description'),
          p = 'false' !== t.getAttribute('data-org-show-upgrade'),
          g = t.getAttribute('data-org-name'),
          h = g ? document.querySelector(`a[data-upgrade-link="${g}"]`) : null,
          j = document.querySelector('.js-ask-owner-message');
        i || !m
          ? (f && (f.hidden = !0), h && (h.hidden = !0), j && (j.hidden = !0))
          : (d && (d.hidden = m), f && (f.hidden = !1), h && (h.hidden = !p), j && (j.hidden = p));
        const b = 'true' === t.getAttribute('data-org-show-trade-controls'),
          v = 'true' === t.getAttribute('data-viewer-is-org-admin'),
          y = 'true' === t.getAttribute('data-user-show-trade-controls'),
          L = b && !i,
          w = document.querySelector('.js-trade-controls-description'),
          T = document.querySelector('.js-individual-trade-controls-description');
        if (y || L) {
          const e = !y && !v && L;
          d && (d.hidden = !e),
            (r.disabled = !0),
            l && (l.hidden = !0),
            f && (f.hidden = !0),
            h && (h.hidden = !0),
            j && (j.hidden = !0);
        } else w && (w.hidden = !0), T && (T.hidden = !0);
        y ? (w && (w.hidden = !0), T && (T.hidden = !1)) : L && w && (w.hidden = !v),
          (function (e, t, n, o) {
            let s = null;
            'private' !== e.getAttribute('data-default') || o.disabled
              ? 'internal' === e.getAttribute('data-default') && n && !n.disabled
                ? (s = n)
                : t.disabled
                ? n && !n.disabled && (s = n)
                : (s = t)
              : (s = o);
            if (!s) return;
            const i = (t.disabled && t.checked) || (o.disabled && o.checked) || (n && n.disabled && n.checked),
              r = !(t.checked || (n && n.checked) || o.checked);
            (!1 !== Om && !0 !== i && !0 !== r) || ((s.checked = !0), u(s, 'change'));
          })(t, o, s, r),
          (function (e) {
            for (const o of document.querySelectorAll('.js-with-permission-fields')) o.hidden = !e;
            for (const o of document.querySelectorAll('.js-without-permission-fields')) o.hidden = e;
            const t = document.querySelector('.errored'),
              n = document.querySelector('dl.warn');
            t && (t.hidden = !e);
            n && (n.hidden = !e);
          })('yes' === t.getAttribute('data-permission')),
          (function () {
            const e = document.querySelector('#js-upgrade-container');
            if (!e) return;
            const t = c(document, '#js-payment-methods-form');
            e.firstElementChild && t.appendChild(e.firstElementChild);
            const n = c(document, 'input[name=owner]:checked', HTMLInputElement).value,
              o = t.querySelector(`.js-upgrade[data-login="${n}"]`);
            o && e.appendChild(o);
          })(),
          Wm();
        const E = document.querySelector('.js-quick-install-container');
        if (E) {
          const e = c(E, '.js-quick-install-divider');
          e.hidden = !0;
          const t = c(document, 'input[name=owner]:checked', HTMLInputElement).parentElement;
          if (t) {
            const n = t.querySelector('.js-quick-install-list-template');
            if (n instanceof HTMLTemplateElement) {
              const t = c(E, '.js-account-apps');
              (t.innerHTML = ''), t.append(n.content.cloneNode(!0)), n.children.length > 0 && (e.hidden = !1);
            }
          }
        }
      }
      function zm(e, t, n, o, s) {
        e
          ? ((t.disabled = !1), n && n.classList.remove('text-gray-light'), o && (o.hidden = !1), s && (s.hidden = !0))
          : ((t.disabled = !0), n && n.classList.add('text-gray-light'), o && (o.hidden = !0), s && (s.hidden = !1));
      }
      function Wm(e) {
        const t = document.querySelector('#js-upgrade-container');
        if (!t) return;
        const n = t.querySelector('.js-billing-section'),
          o = t.querySelector('.js-confirm-upgrade-checkbox');
        let s = e ? e.target : null;
        if ((s || (s = document.querySelector('.js-privacy-toggle:checked')), !(s instanceof HTMLInputElement)))
          throw new Error('invariant');
        if ('false' === s.value) {
          if (((t.hidden = !1), n && n.classList.remove('has-removed-contents'), o)) {
            if (!(o instanceof HTMLInputElement)) throw new Error('invariant');
            o.checked = !0;
          }
        } else if (((t.hidden = !0), n && n.classList.add('has-removed-contents'), o)) {
          if (!(o instanceof HTMLInputElement)) throw new Error('invariant');
          o.checked = !1;
        }
        Vm();
      }
      function Vm() {
        const e = c(document, '.js-repo-form'),
          t = e.querySelector('.js-repository-owner-choice:checked'),
          n = e.querySelector('.js-repo-name'),
          o = e.querySelector('.js-repo-url');
        let s = !o || !o.classList.contains('is-autocheck-errored');
        (s = s && !!t),
          s &&
            n &&
            ((s = n.classList.contains('is-autocheck-successful')),
            'private' === c(document, '.js-privacy-toggle:checked', HTMLInputElement).value &&
              (s =
                s &&
                (function () {
                  const e = document.querySelector('#js-upgrade-container');
                  if (!e) return !0;
                  if (e.querySelector('.js-ofac-sanction-notice')) return !1;
                  const t = e.querySelector('.js-confirm-upgrade-checkbox');
                  if (t instanceof HTMLInputElement && !t.checked) return !1;
                  const n = e.querySelector('.js-zuora-billing-info');
                  if (n && n.classList.contains('d-none')) return !1;
                  return !0;
                })())),
          (c(e, 'button[type=submit]', HTMLButtonElement).disabled = !s);
      }
      async function Gm(e) {
        const t = e.form;
        (c(t, '#release_draft', HTMLInputElement).value = '1'), Km(e, 'saving');
        try {
          const n = await ie(t.action, {
            method: t.method,
            body: new FormData(t),
          });
          return (
            Km(e, 'saved'),
            setTimeout(Km, 5e3, e, 'default'),
            u(t, 'release:saved', {
              release: n,
            }),
            n
          );
        } catch (n) {
          throw (Km(e, 'failed'), n);
        }
      }
      function Jm(e) {
        const t = i(e, '.js-releases-marketplace-publish-container'),
          n = c(t, '.js-releases-marketplace-publish-preview');
        e.checked ? n.classList.remove('d-none') : n.classList.add('d-none');
      }
      function Km(e, t) {
        for (const n of e.querySelectorAll('.js-save-draft-button-state'))
          n.hidden = n.getAttribute('data-state') !== t;
        e.disabled = 'saving' === t;
      }
      function Xm(e) {
        const t = document.querySelector('.js-release-target-wrapper');
        if (null != t) {
          switch (e) {
            case 'valid':
              t.classList.add('d-none');
              break;
            case 'loading':
              break;
            default:
              t.classList.remove('d-none');
          }
          for (const t of document.querySelectorAll('.js-tag-status-message'))
            t.hidden = t.getAttribute('data-state') !== e;
        }
      }
      n('#js-upgrade-container .js-zuora-billing-info:not(.d-none)', Vm),
        n('.page-new-repo', function () {
          const e = document.querySelector('#js-upgrade-container');
          e && (e.hidden = !0), Um();
          const t = c(document, '.js-repo-form'),
            n = t.querySelector('.js-repo-url');
          if (n) return void n.focus();
          const o = t.querySelector('.js-template-repository-select');
          if (o) return void o.focus();
          const s = t.querySelector('.js-owner-select');
          s && s.focus();
        }),
        s('click', '.js-reponame-suggestion', function (e) {
          const t = c(document, '.js-repo-name', HTMLInputElement);
          (t.value = e.currentTarget.textContent), u(t, 'input', !1);
        }),
        s('click', '.js-privacy-toggle', function () {
          Om = !0;
        }),
        s('change', '.js-privacy-toggle', Wm),
        s('details-menu-selected', '.js-owner-container', Um, {
          capture: !0,
        }),
        s('change', '#js-upgrade-container input', Vm),
        N('#js-upgrade-container input', Vm),
        N('.js-owner-reponame .js-repo-name', function (e) {
          const t = document.querySelector('.js-personal');
          if (t) {
            const n = document.querySelector('.js-owner-container input.js-repository-owner-is-viewer'),
              o = e.target,
              s = !(n && n.checked && n.defaultValue === o.value);
            (t.hidden = s), (c(document, '#repo-name-suggestion').hidden = !s);
          }
          Vm();
        }),
        s('auto-check-send', '.js-repo-name-auto-check', function (e) {
          const t = e.currentTarget.form,
            n = c(t, 'input[name=owner]:checked', HTMLInputElement).value;
          e.detail.body.append('owner', n);
        }),
        s('auto-check-complete', '#repository_name', function () {
          Vm();
        }),
        N('.js-repo-url', function (e) {
          const t = e.target;
          if (!(t instanceof HTMLInputElement)) return;
          const n = t.closest('.form-group');
          if (!(n instanceof HTMLDListElement)) return;
          const o = c(document, '.js-insecure-url-warning'),
            s = c(document, '.js-svn-url-error'),
            i = c(document, '.js-git-url-error'),
            r = t.value.toLowerCase();
          (o.hidden = !r.startsWith('http://')),
            (s.hidden = !r.startsWith('svn://')),
            (i.hidden = !r.startsWith('git://')),
            r.startsWith('svn://') || r.startsWith('git://')
              ? (t.classList.add('is-autocheck-errored'), n.classList.add('errored'))
              : (t.classList.remove('is-autocheck-errored'), n.classList.remove('errored')),
            Vm();
        }),
        s('tab-container-changed', '.js-branches-tags-tabs', async function (e) {
          const t = e.detail.relatedTarget,
            n = e.currentTarget;
          if (!n) return;
          let o, s;
          for (const a of n.querySelectorAll('[data-controls-ref-menu-id]')) {
            if (!(a instanceof p || a instanceof f)) return;
            const e = r(a, 'data-controls-ref-menu-id'),
              n = t.id === e;
            (a.hidden = !n), n ? (s = a) : o || (o = a.input ? a.input.value : '');
          }
          const i = s && s.input;
          i && (s && void 0 !== o && (i.value = o), i.focus());
        }),
        n('.js-pulse-contribution-data', (e) => {
          !(async function (e) {
            const t = e.getAttribute('data-pulse-diffstat-summary-url');
            let n;
            try {
              t &&
                ((n = await (async function (e) {
                  return Q(document, e);
                })(t)),
                (function (e, t) {
                  (t.innerHTML = ''), t.appendChild(e);
                })(n, e));
            } catch (o) {
              const t = c(e, '.js-blankslate-loading'),
                n = c(e, '.js-blankslate-error');
              t.classList.add('d-none'), n.classList.remove('d-none');
            }
          })(e);
        }),
        s('change', '.js-releases-marketplace-publish-field', function (e) {
          Jm(e.currentTarget);
        }),
        n('.js-releases-marketplace-publish-field', function (e) {
          Jm(e);
        }),
        s('click', '.js-save-draft', function (e) {
          Gm(e.currentTarget), e.preventDefault();
        }),
        s('click', '.js-timeline-tags-expander', function (e) {
          const t = e.currentTarget;
          i(t, '.js-timeline-tags').classList.remove('is-collapsed');
        }),
        s('release:saved', '.js-release-form', function (e) {
          const t = e.detail.release,
            n = e.currentTarget,
            o = n.getAttribute('data-repo-url'),
            s = t.update_url || Zm('tag', o, t.tag_name);
          if ((n.setAttribute('action', s), t.update_authenticity_token)) {
            n.querySelector('input[name=authenticity_token]').value = t.update_authenticity_token;
          }
          const i = t.edit_url || Zm('edit', o, t.tag_name);
          W(je(), document.title, i);
          const r = document.querySelector('#delete_release_confirm form');
          if (r) {
            const e = t.delete_url || Zm('tag', o, t.tag_name);
            if ((r.setAttribute('action', e), t.delete_authenticity_token)) {
              c(r, 'input[name=authenticity_token]', HTMLInputElement).value = t.delete_authenticity_token;
            }
          }
          const a = n.querySelector('#release_id');
          if (!a.value) {
            a.value = t.id;
            const e = document.createElement('input');
            (e.type = 'hidden'), (e.name = '_method'), (e.value = 'put'), n.appendChild(e);
          }
        }),
        s('click', '.js-publish-release', function () {
          c(document, '#release_draft', HTMLInputElement).value = '0';
        });
      const Ym = new WeakMap();
      async function Qm(e) {
        if (!e.value) return;
        if (e.value === Ym.get(e)) return;
        Xm('loading'), Ym.set(e, e.value);
        const t = r(e, 'data-url'),
          n = new URL(t, window.location.origin),
          o = new URLSearchParams(n.search.slice(1));
        o.append('tag_name', e.value), (n.search = o.toString());
        try {
          const t = await ie(n.toString());
          'duplicate' === t.status && parseInt(e.getAttribute('data-existing-id')) === parseInt(t.release_id)
            ? Xm('valid')
            : (c(document, '.js-release-tag .js-edit-release-link').setAttribute('href', t.url), Xm(t.status));
        } catch (s) {
          Xm('invalid');
        }
      }
      function Zm(e, t, n) {
        return `${t}/releases/${e}/${n}`;
      }
      function ef(e) {
        const t = i(e, 'form', HTMLFormElement).querySelector('.js-previewable-comment-form');
        if (!t) return;
        let n = t.getAttribute('data-base-preview-url');
        n || ((n = String(t.getAttribute('data-preview-url'))), t.setAttribute('data-base-preview-url', n));
        const o = a(
            e,
            'input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked',
            HTMLInputElement,
          ),
          s = new URL(n, window.location.origin),
          r = new URLSearchParams(s.search.slice(1));
        for (const i of o) i.value && r.append(i.name, i.value);
        (s.search = r.toString()), t.setAttribute('data-preview-url', s.toString());
      }
      function tf(e) {
        return !!e.value && e.value !== e.defaultValue;
      }
      async function nf(e) {
        c(document, '.js-cooper-enter-prompt').hidden = !e;
      }
      n('input.js-release-tag-field', {
        constructor: HTMLInputElement,
        initialize(e) {
          Qm(e),
            e.addEventListener('blur', function () {
              Qm(e);
            });
        },
      }),
        s('change', '.js-release-tag', function (e) {
          ef(e.currentTarget);
        }),
        n('.js-release-form .js-previewable-comment-form', function (e) {
          ef(c(i(e, 'form'), '.js-release-tag'));
        }),
        n('.js-cooper-query', {
          constructor: HTMLInputElement,
          add(e) {
            (e.selectionStart = e.selectionEnd = e.value.length),
              nf(tf(e)),
              e.addEventListener('focus', (e) => {
                nf(tf(e.currentTarget));
              }),
              e.addEventListener('blur', () => {
                nf(!1);
              });
          },
        }),
        s('submit', '.js-cooper-form', () => {
          const e = c(document, '.js-cooper-query', HTMLInputElement),
            t = c(document, '.js-cooper-results'),
            n = c(document, '.js-cooper-shimmer-cards'),
            o = c(n, '.js-cooper-label-placeholder'),
            s = c(o, 'span', HTMLSpanElement),
            i = c(o, 'h3', HTMLHeadingElement),
            r = c(i, 'span', HTMLSpanElement);
          (t.hidden = !0), (n.hidden = !1), (s.hidden = !0), (i.hidden = !1), (r.textContent = e.value);
        }),
        _('keyup', '.js-cooper-query', (e) => {
          const t = e.currentTarget;
          if ('Escape' === e.key) {
            const n = t.form.getAttribute('data-esc-to');
            n &&
              me({
                url: n,
                container: c(document, '#js-repo-pjax-container'),
              }),
              e.preventDefault();
          } else nf(tf(t));
        }),
        n('.js-security-tab-count', function (e) {
          e instanceof HTMLElement &&
            (async function (e) {
              const t = e.getAttribute('data-url');
              if (!t) return;
              let n;
              try {
                n = (await ie(t)).count;
              } catch (o) {
                return;
              }
              (e.textContent = n), (e.hidden = !1);
            })(e);
        }),
        _('keydown', '.js-tree-finder-field', (e) => {
          'Escape' === e.key && (e.preventDefault(), history.back());
        });
      n('.js-tree-finder', (e) => {
        const t = c(e, '.js-tree-finder-field', HTMLInputElement),
          n = c(e, '.js-tree-browser-results');
        if (n.childElementCount > 0) return;
        (async (e) => {
          if (!(e instanceof FuzzyListElement)) return;
          const t = r(e, 'data-url'),
            n = c(e, '.js-tree-browser-result-template', HTMLTemplateElement),
            { paths: o } = await ie(t);
          e.addLazyItems(o, (e) => {
            const t = n.content.cloneNode(!0).firstElementChild,
              o = c(t, '.js-tree-browser-result-anchor', HTMLAnchorElement),
              s = c(o, '.js-tree-browser-result-path'),
              i = new URL(o.href, window.location.origin);
            return (
              (i.pathname = `${i.pathname}/${encodeURI(e)}`),
              (o.href = String(i)),
              (o.id = `entry-${Math.random().toString().substr(2, 5)}`),
              (s.textContent = e),
              t
            );
          }),
            e.sort();
        })(e);
        const o = new h(t, n);
        o.start(),
          e.addEventListener('fuzzy-list-will-sort', () => {
            o.stop();
          }),
          e.addEventListener('fuzzy-list-sorted', () => {
            o.start(), o.navigate();
          });
      });
      let of = null;
      function sf(e) {
        const t = document.createElement('input');
        return t.setAttribute('type', 'hidden'), t.setAttribute('name', e.name), t.setAttribute('value', e.value), t;
      }
      function rf(e, t) {
        if (ka(e)) return;
        const n = c(document, '.js-site-search-form', HTMLFormElement);
        let o, s;
        c(document, '.js-site-search').classList.toggle('scoped-search', t),
          t
            ? ((o = r(n, 'data-scoped-search-url')), (s = r(e, 'data-scoped-placeholder')))
            : ((o = r(n, 'data-unscoped-search-url')), (s = r(e, 'data-unscoped-placeholder'))),
          n.setAttribute('action', o),
          e.setAttribute('placeholder', s);
      }
      n('.js-pjax-files', (e) => {
        if (!of) return void (of = window.location.pathname);
        const t = e.querySelector(`a[href='${of}']`);
        t &&
          setTimeout(function () {
            (document.activeElement && document.activeElement !== document.body) || t.focus();
          }, 200),
          (of = window.location.pathname);
      }),
        n('.js-highlight-code-snippet-columns', function (e) {
          const t = (function (e) {
            const t = parseInt(r(e, 'data-start-line')),
              n = parseInt(r(e, 'data-end-line')),
              o = parseInt(r(e, 'data-start-column')),
              s = parseInt(r(e, 'data-end-column'));
            return t !== n
              ? null
              : t === n && o === s
              ? null
              : {
                  start: {
                    line: t,
                    column: o,
                  },
                  end: {
                    line: n,
                    column: 0 !== s ? s : null,
                  },
                };
          })(e);
          null !== t &&
            (function (e, t) {
              const n = tt(e, (e) =>
                (function (e, t) {
                  return e.querySelector(`#LC${t}`);
                })(t, e),
              );
              if (n) {
                const e = document.createElement('span');
                e.classList.add('bg-yellow-3'), nt(n, e);
              }
            })(t, e);
        }),
        s('change', '.js-scanning-alert-check', function ({ currentTarget: e }) {
          const t = i(e, '.js-scanning-alert-list'),
            n = null != t.querySelector('.js-scanning-alert-check:checked');
          (c(t, '.js-scanning-alert-bulk-actions').hidden = !n),
            (c(t, '.js-scanning-alert-links').hidden = n),
            (function (e) {
              for (const t of a(e, '.js-scanning-bulk-action-items', HTMLElement)) {
                t.innerHTML = '';
                const n = a(e, '.js-scanning-alert-list [data-check-all-item]:checked', HTMLInputElement);
                for (const e of n) t.appendChild(sf(e));
              }
            })(t);
        }),
        s(
          'details-menu-selected',
          '.js-scanning-code-path-menu',
          function (e) {
            const t = r(e.detail.relatedTarget, 'data-target-code-path');
            for (const n of document.querySelectorAll('.js-scanning-code-path'))
              n.hidden = t !== r(n, 'data-code-path');
          },
          {
            capture: !0,
          },
        ),
        n('.js-codesearch-nav', function (e) {
          const t = e.querySelector('.selected');
          if (!(t instanceof HTMLElement)) return;
          const n = t.offsetLeft,
            o = t.offsetWidth,
            s = n + o,
            i = window.innerWidth;
          (s - e.scrollLeft > i || s < e.scrollLeft) && (e.scrollLeft = n - i / 2 + o / 2);
        }),
        n('.js-codesearch-count', function (e) {
          const t = e.getAttribute('data-search-type');
          for (const n of document.querySelectorAll('.js-codesearch-deferred-count'))
            if (t && n.getAttribute('data-search-type') === t) {
              const t = e.cloneNode(!0);
              if (!(t instanceof Element)) return;
              t.classList.remove('js-codesearch-count'), n.replaceWith(t);
            }
        }),
        _('keyup', '.js-site-search-field', function (e) {
          const t = e.target,
            n = 0 === t.value.length;
          n && 'Backspace' === e.key && t.classList.contains('is-clearable') && rf(t, !1),
            n && 'Escape' === e.key && rf(t, !0),
            t.classList.toggle('is-clearable', n);
        }),
        R('.js-site-search-focus', function (e) {
          const t = i(e, '.js-chromeless-input-container');
          t.classList.add('focus'),
            e.addEventListener('blur', function n() {
              t.classList.remove('focus'),
                0 === e.value.length && e.classList.contains('js-site-search-field') && rf(e, !0),
                e.removeEventListener('blur', n);
            });
        }),
        s('submit', '.js-site-search-form', function (e) {
          if (!(e.target instanceof Element)) return;
          c(e.target, '.js-site-search-type-field', HTMLInputElement).value =
            new URLSearchParams(window.location.search).get('type') || '';
        });
      function af() {
        document.body.classList.add('is-sending'), document.body.classList.remove('is-sent', 'is-not-sent');
      }
      function cf() {
        document.body.classList.add('is-sent'), document.body.classList.remove('is-sending');
      }
      function lf(e) {
        e && (c(document, '.js-sms-error').textContent = e),
          document.body.classList.add('is-not-sent'),
          document.body.classList.remove('is-sending');
      }
      function uf(e) {
        const t = c(document, '.js-stale-session-flash'),
          n = c(t, '.js-stale-session-flash-signed-in'),
          o = c(t, '.js-stale-session-flash-signed-out');
        (t.hidden = !1),
          (n.hidden = 'false' === e),
          (o.hidden = 'true' === e),
          window.addEventListener('popstate', function (e) {
            e.state && null != e.state.container && location.reload();
          }),
          document.addEventListener('submit', function (e) {
            e.preventDefault();
          });
      }
      let df;
      if (
        (D('.js-ems-beta-tag-toggle', async function (e, t) {
          let n;
          dt();
          try {
            n = await t.json();
          } catch (s) {
            return void be();
          }
          var o;
          n &&
            ((o = n.json.enrolled),
            (c(document, '.js-ems-beta-tag-enrolled').hidden = !o),
            (c(document, '.js-ems-beta-tag-unenrolled').hidden = o),
            window.location.reload());
        }),
        s('click', '.js-segmented-nav-button', function (e) {
          e.preventDefault();
          const t = e.currentTarget,
            n = r(t, 'data-selected-tab'),
            o = i(t, '.js-segmented-nav'),
            s = o.parentElement;
          for (const i of a(o, '.js-segmented-nav-button')) i.classList.remove('selected');
          t.classList.add('selected');
          for (const i of a(s, '.js-selected-nav-tab')) i.parentElement === s && i.classList.remove('active');
          c(document, `.${n}`).classList.add('active');
        }),
        D('.js-send-auth-code', async (e, t) => {
          let n;
          af();
          try {
            n = await t.text();
          } catch (o) {
            lf(o.response.text);
          }
          n && cf();
        }),
        s('click', '.js-send-two-factor-code', async function (e) {
          const t = e.currentTarget,
            n = t.form,
            o = `${c(n, '.js-country-code-select', HTMLSelectElement).value} ${
              c(n, '.js-sms-number', HTMLInputElement).value
            }`;
          af();
          const s = c(t.parentElement, '.js-data-url-csrf', HTMLInputElement),
            i = new FormData();
          i.append('number', o);
          try {
            const e = r(t, 'data-url');
            await Oe(
              Be(e, s.value, {
                method: 'post',
                body: i,
              }),
            ),
              cf();
            for (const t of n.querySelectorAll('.js-2fa-enable'))
              (t instanceof HTMLInputElement || t instanceof HTMLButtonElement) && (t.disabled = !1);
            c(n, '.js-2fa-otp').focus();
          } catch (a) {
            if (a.response) {
              lf(await a.response.text());
            }
            for (const e of n.querySelectorAll('.js-2fa-enable'))
              (e instanceof HTMLInputElement || e instanceof HTMLButtonElement) && (e.disabled = !0);
          }
        }),
        s('click', '.js-enable-enable-two-factor-auth-button', function () {
          const e = c(document, '.js-enable-two-factor-auth-button', HTMLButtonElement);
          (e.disabled = !1), e.removeAttribute('aria-label'), e.classList.remove('tooltipped');
        }),
        n('.js-two-factor-sms-fallback-button', function (e) {
          e.addEventListener('toggle', function (e) {
            const t = e.currentTarget;
            for (const n of t.querySelectorAll('.flash')) n instanceof HTMLElement && (n.hidden = !0);
            (c(t, '.js-configure-sms-fallback').hidden = !1), (c(t, '.js-verify-sms-fallback').hidden = !0);
          });
        }),
        D('.js-two-factor-set-sms-fallback', async (e, t) => {
          let n;
          try {
            n = await t.text();
          } catch (o) {
            const t = c(e, '.js-configure-sms-fallback'),
              n = c(e, '.js-verify-sms-fallback'),
              s = t.hidden ? n : t,
              i = c(s, '.flash');
            switch (o.response.status) {
              case 422:
              case 429:
                (i.textContent = o.response.text), (i.hidden = !1);
            }
          }
          if (n)
            switch (n.status) {
              case 200:
              case 201:
                window.location.reload();
                break;
              case 202:
                (c(e, '.js-configure-sms-fallback').hidden = !0),
                  (c(e, '.js-verify-sms-fallback').hidden = !1),
                  c(e, '.js-fallback-otp').focus();
            }
        }),
        'function' == typeof BroadcastChannel)
      )
        try {
          (df = new BroadcastChannel('stale-session')),
            (df.onmessage = (e) => {
              'string' == typeof e.data && uf(e.data);
            });
        } catch (Hg) {}
      if (!df) {
        let e = !1;
        (df = {
          postMessage(t) {
            e = !0;
            try {
              window.localStorage.setItem('logged-in', t);
            } finally {
              e = !1;
            }
          },
        }),
          window.addEventListener('storage', function (t) {
            if (!e && t.storageArea === window.localStorage && 'logged-in' === t.key)
              try {
                ('true' !== t.newValue && 'false' !== t.newValue) || uf(t.newValue);
              } finally {
                window.localStorage.removeItem(t.key);
              }
          });
      }
      const mf = document.querySelector('.js-stale-session-flash[data-signedin]');
      if (mf) {
        const e = mf.getAttribute('data-signedin') || '';
        df.postMessage(e);
      }
      function ff(e) {
        if (!(e instanceof HTMLInputElement)) return;
        const t = e.closest('.checkable-input-container');
        if (!t) return;
        const n = t.querySelector('.js-checkable-input-target');
        n && (t.classList.toggle('checked', e.checked), n instanceof HTMLElement && (n.hidden = !e.checked));
      }
      document.addEventListener('pjax:end', function () {
        const e = document.querySelector('meta[name="selected-link"]'),
          t = e && e.getAttribute('value');
        if (t)
          for (const n of document.querySelectorAll('.js-sidenav-container-pjax .js-selected-navigation-item')) {
            const e = (n.getAttribute('data-selected-links') || '').split(' ').indexOf(t) >= 0;
            n.classList.toggle('selected', e);
          }
      }),
        n('.js-contact-javascript-flag', {
          constructor: HTMLInputElement,
          add(e) {
            e.value = 'true';
          },
        }),
        s('click', '.js-launch-sales-chat', function (e) {
          const t = window.screenX,
            n = window.screenY,
            o = 440,
            s = 500,
            i = [
              `width=${o}`,
              `height=${s}`,
              'location=no',
              'resizable=yes',
              'scrollbars=yes',
              `left=${window.innerWidth + t - (o + 16)}`,
              `top=${window.innerHeight + n - (s - 64)}`,
            ],
            r = window.location.pathname
              .split('/')
              .filter(function (e) {
                return '' !== e;
              })
              .slice(-1)[0];
          window.open(`https://sales-chat.github.com/${r}`, 'Sales_Chat', i.join(',')), e.preventDefault();
        }),
        n('.js-checkable-input-trigger', ff),
        s('change', '.js-checkable-input-trigger', (e) => ff(e.target));
      const pf = ['notification_referrer_id', 'notifications_before', 'notifications_after', 'notifications_query'];
      function gf(e, t = null) {
        return e.has('notification_referrer_id')
          ? ((function (e, t) {
              const n = hf(t);
              if (!n) return;
              const o = {
                pathname: n,
              };
              for (const s of pf) {
                const t = e.get(s);
                t && (o[s] = t);
              }
              Fi('notification_shelf', JSON.stringify(o));
            })(e, t),
            (function (e) {
              for (const t of pf) e.delete(t);
              return e;
            })(e))
          : null;
      }
      function hf(e) {
        const t = (e = e || window.location.pathname).match(/^(\/[^/]+\/[^/]+\/pull\/[^/]+)/);
        return t ? t[0] : null;
      }
      async function jf(e) {
        try {
          await e.text();
        } catch (t) {}
      }
      n('.js-notification-indicator', {
        subscribe: (e) =>
          V(e, 'socket:message', function (e) {
            const t = e.currentTarget,
              n = e.detail.data;
            t.setAttribute('aria-label', n.aria_label),
              t.setAttribute('data-ga-click', n.ga_click),
              (t.querySelector('.js-indicator-modifier') || c(t, 'span')).setAttribute('class', n.span_class);
          }),
      }),
        (async function () {
          D('.js-notification-shelf .js-notification-action form', async function (e, t) {
            if (e.hasAttribute('data-redirect-to-inbox-on-submit')) {
              await jf(t);
              const e = c(document, '.js-notifications-back-to-inbox', HTMLAnchorElement);
              e && e.click();
            } else mt(e, e), await jf(t);
          });
        })(),
        (function () {
          const e = (function () {
            const e = gf(new URLSearchParams(window.location.search));
            if (e) {
              const t = new URL(window.location.href, window.location.origin);
              return (t.search = e.toString()), t.toString();
            }
          })();
          e && W(null, '', e);
        })(),
        n('.js-notification-shelf-include-fragment', function (e) {
          if (!(e instanceof o)) return;
          const t = (function (e = null) {
            const t = hf(e);
            if (!t) return Bi('notification_shelf'), null;
            try {
              const e = Pi('notification_shelf');
              if (!e) return null;
              const n = JSON.parse(e);
              if (!n || !n.pathname) throw new Error('Must have a pathname');
              if (n.pathname !== t) throw new Error('Stored pathname does not match current pathname.');
              const o = {};
              for (const t of pf) o[t] = n[t];
              return o;
            } catch (n) {
              return Bi('notification_shelf'), null;
            }
          })();
          if (!t) return;
          const n = e.getAttribute('data-base-src');
          if (!n) return;
          const s = new URL(n, window.location.origin),
            i = new URLSearchParams(s.search);
          for (const [o, r] of Object.entries(t)) 'string' == typeof r && i.set(o, r);
          (s.search = i.toString()), e.setAttribute('src', s.toString());
        });
      let bf = !1;
      async function vf() {
        if (bf) return;
        bf = !0;
        const e = {
            contexts: c(document, 'meta[name=github-keyboard-shortcuts]', HTMLMetaElement).content,
          },
          t = `/site/keyboard_shortcuts?${new URLSearchParams(e).toString()}`;
        (
          await ee({
            content: Q(document, t),
            dialogClass: 'hx_Box--overlay--wide container-xl',
          })
        ).addEventListener(
          'dialog:remove',
          function () {
            bf = !1;
          },
          {
            once: !0,
          },
        );
      }
      s('click', '.js-keyboard-shortcuts', vf),
        document.addEventListener('keydown', (e) => {
          (e.target instanceof Node && Ve(e.target)) || ('?' === fe(e) && vf());
        }),
        n('.js-modifier-key', {
          constructor: HTMLElement,
          add(e) {
            if (/Macintosh/.test(navigator.userAgent)) {
              let t = e.textContent;
              t && ((t = t.replace(/ctrl/, '⌘')), (t = t.replace(/alt/, '⌥')), (e.textContent = t));
            }
          },
        }),
        n('.js-modifier-label-key', {
          add(e) {
            if (/Macintosh/.test(navigator.userAgent)) {
              let t = r(e, 'aria-label');
              (t = t.replace(/ctrl\+/, 'cmd-')), (t = t.replace(/alt\+/, 'option-')), e.setAttribute('aria-label', t);
            }
          },
        }),
        n('.js-site-status-container', {
          initialize(e) {
            !(async function (e) {
              var t, n;
              const o =
                  (null ===
                    (n =
                      null === (t = document.head) || void 0 === t
                        ? void 0
                        : t.querySelector('meta[name="site-status-api-url"]')) || void 0 === n
                    ? void 0
                    : n.content) || '',
                s = await window.fetch(o),
                i = await s.json(),
                r = i.status.indicator;
              if ('none' !== r && e instanceof HTMLElement) {
                (c(e, '.js-site-status-message').textContent = i.status.description),
                  c(e, '.js-site-status-time').setAttribute('datetime', i.page.updated_at);
                const t = 'minor' === r ? 'flash-warn' : 'flash-error';
                c(e, '.flash').classList.add(t), (e.hidden = !1);
              }
            })(e);
          },
        });
      const yf = [
        {
          sectionName: 'actions-events',
          percent: 95,
        },
        {
          sectionName: 'actions-workflow-logs',
          percent: 100,
        },
        {
          sectionName: 'actions-templates',
          percent: 100,
        },
        {
          sectionName: 'security-vulnerability',
          percent: 60,
        },
        {
          sectionName: 'security-workspace',
          percent: 70,
        },
        {
          sectionName: 'security-alerts-graph',
          percent: 60,
        },
        {
          sectionName: 'security-alerts',
          percent: 60,
        },
        {
          sectionName: 'security-dependabot',
          percent: 50,
        },
        {
          sectionName: 'security-patches-graph',
          percent: 70,
        },
        {
          sectionName: 'security-token-scanning',
          percent: 70,
        },
        {
          sectionName: 'security-lgtm',
          percent: 60,
        },
        {
          sectionName: 'mobile-notification',
          percent: 90,
        },
        {
          sectionName: 'mobile',
          percent: 50,
        },
        {
          sectionName: 'hide-notification',
          percent: 50,
        },
        {
          sectionName: 'mobile-triage',
          percent: 50,
        },
        {
          sectionName: 'mobile-work',
          percent: 50,
        },
        {
          sectionName: 'mobile-contribute',
          percent: 50,
        },
        {
          sectionName: 'mobile-nightmode',
          percent: 70,
        },
        {
          sectionName: 'mobile-beta',
          percent: 50,
        },
        {
          sectionName: 'enterprise-nav',
          percent: 0,
        },
        {
          sectionName: 'insights-dashboard',
          percent: 70,
        },
        {
          sectionName: 'codespaces-code',
          percent: 60,
        },
        {
          sectionName: 'codespaces-simplify',
          percent: 60,
        },
        {
          sectionName: 'codespaces-extensions',
          percent: 60,
        },
        {
          sectionName: 'codespaces-dependencies',
          percent: 50,
        },
        {
          sectionName: 'packages-install',
          percent: 60,
        },
        {
          sectionName: 'packages-pillars',
          percent: 60,
        },
        {
          sectionName: 'packages-actions',
          percent: 60,
        },
        {
          sectionName: 'packages-quote-1',
          percent: 50,
        },
        {
          sectionName: 'packages-quote-2',
          percent: 50,
        },
        {
          sectionName: 'packages-quote-3',
          percent: 50,
        },
        {
          sectionName: 'team-hero',
          percent: 50,
        },
        {
          sectionName: 'team-testimonial',
          percent: 90,
        },
        {
          sectionName: 'team-pillars',
          percent: 90,
        },
        {
          sectionName: 'team-collaboration',
          percent: 90,
        },
        {
          sectionName: 'team-automation',
          percent: 30,
        },
        {
          sectionName: 'team-security',
          percent: 30,
        },
        {
          sectionName: 'team-rocket',
          percent: 70,
        },
        {
          sectionName: 'team-developers',
          percent: 90,
        },
        {
          sectionName: 'testimonial-dow-jones',
          percent: 90,
        },
        {
          sectionName: 'testimonial-pinterest',
          percent: 90,
        },
        {
          sectionName: 'testimonial-engie',
          percent: 90,
        },
        {
          sectionName: 'testimonial-american-airlines',
          percent: 90,
        },
        {
          sectionName: 'enterprise-hero',
          percent: 100,
        },
        {
          sectionName: 'enterprise-security',
          percent: 90,
        },
        {
          sectionName: 'enterprise-devops-ci',
          percent: 90,
        },
        {
          sectionName: 'enterprise-devops-actions',
          percent: 90,
        },
        {
          sectionName: 'enterprise-devops-automation',
          percent: 90,
        },
        {
          sectionName: 'enterprise-collaboration',
          percent: 90,
        },
        {
          sectionName: 'enterprise-talent',
          percent: 90,
        },
        {
          sectionName: 'enterprise-services',
          percent: 90,
        },
        {
          sectionName: 'enterprise-transformation',
          percent: 90,
        },
      ];
      function Lf(e) {
        e.map(({ sectionName: e, percent: t }) => {
          !(function (e, t, n, o) {
            const s = window.innerHeight || (document.documentElement && document.documentElement.clientHeight);
            e.map((e) => {
              const i = a(document, `.${t}`),
                r = e.getBoundingClientRect().top,
                c = e.getBoundingClientRect().bottom,
                l = Math.round((r / s) * 100),
                u = Math.round((c / s) * 100);
              l <= o && c >= u
                ? e.classList.contains(t)
                  ? e.classList.add(n)
                  : i.map((e) => e.classList.add(n))
                : (e.classList.remove(n), e.classList.contains(t) || i.map((e) => e.classList.remove(n)));
            });
          })(a(document, `.section-${e}`), `target-${e}`, `animate-${e}`, t);
        });
      }
      function wf(e) {
        const t = (function (e) {
          return a(document, '.js-pricing-plan-card').indexOf(e);
        })(e);
        return Array.from(a(document, '.js-pricing-plan-tab'))[t];
      }
      let Tf;
      function Ef() {
        const e = window.innerWidth / 2;
        let t = c(document, '.js-pricing-plan-card'),
          n = window.innerWidth;
        for (const o of Tf) {
          const s = o.getBoundingClientRect().left + o.getBoundingClientRect().width / 2,
            i = Math.abs(e - s);
          s > 0 && s < window.innerWidth && i < n && ((t = o), (n = i));
        }
        c(document, '.pricing-plan-tab-active').classList.remove('pricing-plan-tab-active'),
          wf(t).classList.add('pricing-plan-tab-active');
      }
      function kf(e) {
        const t = e.currentTarget;
        if (!(t instanceof HTMLElement)) return;
        if (t.classList.contains('pricing-testimonial-logo-active')) return;
        const n = (function (e) {
            const t = Sf(e);
            return Array.from(a(document, '.js-pricing-testimonial-quote'))[t];
          })(t),
          o = (function (e) {
            const t = Sf(e);
            return Array.from(a(document, '.js-pricing-testimonial-img'))[t];
          })(t);
        c(document, '.pricing-testimonial-logo-active').classList.remove('pricing-testimonial-logo-active'),
          t.classList.add('pricing-testimonial-logo-active');
        for (const s of a(document, '.pricing-testimonial-content-active'))
          s.classList.remove('pricing-testimonial-content-active');
        n.classList.add('pricing-testimonial-content-active'), o.classList.add('pricing-testimonial-content-active');
      }
      function Sf(e) {
        return a(document, '.js-pricing-testimonial-logo').indexOf(e);
      }
      window.addEventListener('scroll', () => Lf(yf), !1),
        window.addEventListener('resize', () => Lf(yf), !1),
        window.addEventListener('load', () => Lf(yf), !1),
        s('click', '.js-pricing-plan-tab', function (e) {
          const t = e.currentTarget;
          if (!(t instanceof HTMLElement)) return;
          c(document, '.pricing-plan-tab-active').classList.remove('pricing-plan-tab-active'),
            t.classList.add('pricing-plan-tab-active');
          const n = (function (e) {
              const t = (function (e) {
                return a(document, '.js-pricing-plan-tab').indexOf(e);
              })(e);
              return Array.from(a(document, '.js-pricing-plan-card'))[t];
            })(t),
            o = n.offsetLeft - (window.innerWidth - n.clientWidth) / 2;
          c(document, '.js-pricing-plans-container').scrollTo({
            top: 0,
            left: o,
            behavior: 'smooth',
          });
        }),
        n('.js-pricing-plans-container', () => {
          c(document, '.js-pricing-plans-container').addEventListener('wheel', Ef, {
            capture: !1,
            passive: !0,
          }),
            'ontouchstart' in window &&
              c(document, '.js-pricing-plans-container').addEventListener('scroll', Ef, {
                capture: !1,
                passive: !0,
              });
        }),
        n('.js-pricing-plans-container .js-pricing-plan-card', () => {
          Tf = a(document, '.js-pricing-plans-container .js-pricing-plan-card');
        }),
        s('click', '.js-pricing-learn-more-gh1', function () {
          for (const e of a(document, '.js-pricing-github-one-container'))
            e.classList.remove('pricing-github-one-container-hidden');
          for (const e of a(document, '.js-pricing-learn-more-container'))
            e.classList.add('pricing-learn-more-container-collapsed');
          for (const e of a(document, '.js-pricing-github-one-details'))
            e.classList.remove('pricing-github-one-details-collapsed');
        }),
        n('.js-pricing-testimonial-logo', () => {
          for (const e of a(document, '.js-pricing-testimonial-logo')) e.addEventListener('mouseenter', kf);
        }),
        s('click', '.js-pricing-testimonial-logo', (e) => {
          kf(e);
        }),
        s('click', '.js-toggle-pricing-details', (e) => {
          e.stopPropagation();
          const t = i(e.currentTarget, '.js-pricing-matrix-row');
          c(t, '.js-pricing-matrix-details').classList.toggle('pricing-matrix-details-visible'),
            c(t, '.js-pricing-expand-arrow').classList.toggle('pricing-expand-arrow-open');
        }),
        n('.js-section-codespaces-develop', (e) => {
          setInterval(() => {
            e.classList.toggle('section-codespaces-develop-night');
          }, 7100);
        });
      const Mf = ['Update the headers', 'Tweak the spacing', 'Clean up unused selectors'],
        xf = ['c9de5ce', '2cde51f', 'b6d9310'];
      let Af,
        Hf = 0,
        qf = !1,
        Cf = !1;
      n('.js-codespaces-illo-commit-msg', (e) => {
        setTimeout(
          () =>
            (function e(t) {
              const n = t.textContent;
              if (null === n) return;
              if (Hf < Mf.length && n.length < Mf[Hf].length) {
                t.textContent = Mf[Hf].slice(0, n.length + 1);
                const o = n.length === Mf[Hf].length - 1 ? 200 : 0;
                return void setTimeout(() => e(t), 45 + o);
              }
              t.textContent = '';
              const o = c(document, '.js-codespaces-notif');
              o.classList.add('codespaces-notif-visible'),
                (c(document, '.js-codespaces-notif-hash').textContent = xf[Hf]),
                (Hf = Hf === Mf.length - 1 ? 0 : Hf + 1),
                setTimeout(() => {
                  o.classList.remove('codespaces-notif-visible'), e(t);
                }, 3700);
            })(e),
          45,
        );
      }),
        n('.js-codespaces-hero-video', () => {
          (Af = c(document, '.js-codespaces-hero-video')),
            Af.addEventListener('timeupdate', () => {
              const e = Af.currentTime;
              if (e > 5 && !1 === qf) {
                (qf = !0),
                  (Cf = !1),
                  c(document, '.js-codespaces-code-zoom').classList.add('codespaces-code-zoom-visible'),
                  c(document, '.js-codespaces-code-explore-zoom').classList.remove(
                    'codespaces-code-explore-zoom-visible',
                  );
              } else if (e < 5 && !1 === Cf) {
                (qf = !1),
                  (Cf = !0),
                  c(document, '.js-codespaces-code-zoom').classList.remove('codespaces-code-zoom-visible'),
                  c(document, '.js-codespaces-code-explore-zoom').classList.add('codespaces-code-explore-zoom-visible');
              }
            });
        });
      const If = new WeakMap();
      n('.js-insights-hero-block', {
        add(e) {
          If.set(
            e,
            setTimeout(function t() {
              const n = a(document, '.js-insights-hero-chart'),
                o = c(document, '.js-insights-hero-chart.js-show'),
                s = n.indexOf(o) + 1,
                i = n[s === n.length ? 0 : s];
              for (const e of n) e.classList.toggle('js-show', i === e);
              If.set(e, setTimeout(t, 4e3));
            }, 4e3),
          );
        },
        remove(e) {
          const t = If.get(e);
          clearTimeout(t);
        },
      }),
        s('click', '.js-smoothscroll-anchor', function (e) {
          const t = e.currentTarget;
          if (!(t instanceof HTMLAnchorElement)) return;
          const n = ft(document, t.hash);
          n &&
            (n.scrollIntoView({
              behavior: 'smooth',
            }),
            e.preventDefault());
        });
      class SubscriptionSet {
        constructor() {
          (this.subscriptions = new L()), (this.signatures = new Map());
        }
        add(...e) {
          const t = [];
          for (const { subscriber: n, topic: o } of e)
            this.subscriptions.has(o.name) || (t.push(o), this.signatures.set(o.name, o)),
              this.subscriptions.set(o.name, n);
          return t;
        }
        delete(...e) {
          const t = [];
          for (const { subscriber: n, topic: o } of e) {
            this.subscriptions.delete(o.name, n) &&
              !this.subscriptions.has(o.name) &&
              (t.push(o), this.signatures.delete(o.name));
          }
          return t;
        }
        drain(...e) {
          const t = [];
          for (const n of e)
            for (const e of this.subscriptions.drain(n)) {
              const n = this.signatures.get(e);
              this.signatures.delete(e), t.push(n);
            }
          return t;
        }
        topics() {
          return this.signatures.values();
        }
        topic(e) {
          return this.signatures.get(e) || null;
        }
        subscribers(e) {
          return this.subscriptions.get(e).values();
        }
      }
      class Topic {
        constructor(e, t) {
          (this.name = e), (this.signed = t), (this.offset = '');
        }
        static parse(e) {
          const [t, n] = e.split('--');
          if (!t || !n) return null;
          const o = JSON.parse(atob(t));
          return o.c && o.t ? new Topic(o.c, e) : null;
        }
      }
      function* _f(e, t) {
        for (let n = 0; n < e.length; n += t) yield e.slice(n, n + t);
      }
      class AliveSession {
        constructor(e, t, n, o) {
          (this.subscriptions = new SubscriptionSet()),
            (this.state = 'online'),
            (this.retrying = null),
            (this.refreshUrl = t),
            (this.notify = o),
            (this.shared = n),
            (this.socket = this.connect(e));
        }
        subscribe(e) {
          const t = this.subscriptions.add(...e);
          this.sendSubscribe(t);
        }
        unsubscribe(e) {
          const t = this.subscriptions.delete(...e);
          this.sendUnsubscribe(t);
        }
        unsubscribeAll(...e) {
          const t = this.subscriptions.drain(...e);
          this.sendUnsubscribe(t);
        }
        online() {
          var e;
          (this.state = 'online'), null === (e = this.retrying) || void 0 === e || e.abort(), this.socket.open();
        }
        offline() {
          var e;
          (this.state = 'offline'), null === (e = this.retrying) || void 0 === e || e.abort(), this.socket.close();
        }
        socketDidOpen() {
          this.sendSubscribe(this.subscriptions.topics());
        }
        socketDidClose() {}
        socketDidFinish() {
          'offline' !== this.state && this.reconnect();
        }
        socketDidReceiveMessage(e, t) {
          const n = JSON.parse(t);
          if ('e' in n)
            switch (n.e) {
              case 'ack': {
                const e = n;
                return this.handleAck(e);
              }
              case 'msg': {
                const e = n;
                return this.handleMessage(e);
              }
              default:
                return;
            }
        }
        handleAck(e) {
          for (const t of this.subscriptions.topics()) t.offset = e.off;
        }
        handleMessage(e) {
          const t = e.ch,
            n = this.subscriptions.topic(t);
          n &&
            ((n.offset = e.off),
            e.data.wait || (e.data.wait = 0),
            this.notify(this.subscriptions.subscribers(t), t, e.data));
        }
        async reconnect() {
          if (!this.retrying)
            try {
              this.retrying = new AbortController();
              const e = () =>
                  (async function (e) {
                    const t = await fetch(e);
                    if (t.ok) return await t.text();
                    throw new Error('fetch error');
                  })(this.refreshUrl),
                t = await pt(e, 1 / 0, 6e4, this.retrying.signal);
              this.socket = this.connect(t);
            } catch (e) {
              if ('AbortError' !== e.name) throw e;
            } finally {
              this.retrying = null;
            }
        }
        connect(e) {
          const t = new URL(e, self.location.origin);
          t.searchParams.set('shared', this.shared.toString());
          const n = new gt(
            new ht(t.toString(), this, {
              timeout: 4e3,
              attempts: 7,
            }),
          );
          return n.open(), n;
        }
        sendSubscribe(e) {
          const t = [...e].map((e) => [e.signed, e.offset]);
          for (const n of _f(t, 25))
            this.socket.send(
              JSON.stringify({
                subscribe: Object.fromEntries(n),
              }),
            );
        }
        sendUnsubscribe(e) {
          const t = [...e].map((e) => e.signed);
          for (const n of _f(t, 25))
            this.socket.send(
              JSON.stringify({
                unsubscribe: n,
              }),
            );
        }
      }
      function $f(e) {
        return (e.getAttribute('data-channel') || '').trim().split(/\s+/).map(Topic.parse).filter(Nf);
      }
      function Nf(e) {
        return null != e;
      }
      function Rf(e, t, n) {
        for (const o of e)
          o.dispatchEvent(
            new CustomEvent('socket:message', {
              bubbles: !1,
              cancelable: !1,
              detail: {
                name: t,
                data: n,
              },
            }),
          );
      }
      class AliveSessionProxy {
        constructor(e, t, n) {
          (this.subscriptions = new SubscriptionSet()),
            (this.notify = n),
            (this.worker = new SharedWorker('/socket-worker.js', 'socket-worker-v4')),
            (this.worker.port.onmessage = ({ data: e }) => this.receive(e)),
            this.worker.port.postMessage({
              connect: {
                url: e,
                refresh: t,
              },
            });
        }
        subscribe(e) {
          const t = this.subscriptions.add(...e);
          t.length &&
            this.worker.port.postMessage({
              subscribe: t,
            });
        }
        unsubscribeAll(...e) {
          const t = this.subscriptions.drain(...e);
          t.length &&
            this.worker.port.postMessage({
              unsubscribe: t,
            });
        }
        online() {
          this.worker.port.postMessage({
            online: !0,
          });
        }
        offline() {
          this.worker.port.postMessage({
            online: !1,
          });
        }
        hangup() {
          this.worker.port.postMessage({
            hangup: !0,
          });
        }
        receive(e) {
          const { name: t, data: n } = e;
          this.notify(this.subscriptions.subscribers(t), t, n);
        }
      }
      function Df() {
        const e =
          null !==
            (o =
              null === (t = document.head.querySelector('link[rel=shared-web-socket]')) || void 0 === t
                ? void 0
                : t.href) && void 0 !== o
            ? o
            : null;
        var t, o;
        if (!e) return;
        const s = (function () {
          var e, t;
          return null !==
            (t =
              null === (e = document.head.querySelector('link[rel=shared-web-socket]')) || void 0 === e
                ? void 0
                : e.getAttribute('data-refresh-url')) && void 0 !== t
            ? t
            : null;
        })();
        if (!s) return;
        const i = 'SharedWorker' in window ? new AliveSessionProxy(e, s, Rf) : new AliveSession(e, s, !1, Rf),
          r = jt((e) => i.subscribe(e.reduce((e, t) => e.concat(t), []))),
          a = jt((e) => i.unsubscribeAll(...e));
        n('.js-socket-channel[data-channel]', {
          add: (e) =>
            r(
              (function (e) {
                return $f(e).map((t) => ({
                  subscriber: e,
                  topic: t,
                }));
              })(e),
            ),
          remove: (e) => a(e),
        }),
          window.addEventListener('online', () => i.online()),
          window.addEventListener('offline', () => i.offline()),
          window.addEventListener('unload', () => {
            'hangup' in i && i.hangup();
          });
      }
      (async () => {
        await B, Df();
      })();
      const Pf = new Map();
      function Ff(e, t) {
        const n = [];
        for (const o of e) {
          const e = Pf.get(o.name);
          e && e.arrived > t && n.push(e);
        }
        return n;
      }
      function Bf() {
        return !!document.head.querySelector('link[rel=shared-web-socket]');
      }
      function Of(e, t, n) {
        const o = e.getBoundingClientRect().height,
          s = t.getBoundingClientRect(),
          i = n.getBoundingClientRect();
        let r = i.top;
        r + s.height + 10 >= o && (r = Math.max(o - s.height - 10, 0));
        let a = i.right;
        null != n.closest('.js-build-status-to-the-left') && (a = Math.max(i.left - s.width - 10, 0)),
          (t.style.top = `${r}px`),
          (t.style.left = `${a}px`),
          (t.style.right = 'auto');
      }
      async function Uf(e) {
        const t = e.querySelector('.js-dropdown-details'),
          n = e.querySelector('.js-status-dropdown-menu') || e.closest('.js-status-dropdown-menu');
        if (!(n instanceof HTMLElement)) return;
        const o = n.querySelector('.js-status-loader');
        if (!o) return;
        const s = c(n, '.js-status-loading'),
          i = c(n, '.js-status-error'),
          a = r(o, 'data-contents-url');
        let l;
        s.classList.remove('d-none'), i.classList.add('d-none');
        try {
          await re(), (l = await Q(document, a));
        } catch (u) {
          s.classList.add('d-none'), i.classList.remove('d-none');
        }
        l &&
          (o.replaceWith(l),
          c(n, '.js-details-container').classList.add('open'),
          t && n.classList.contains('js-append-menu-to-body') && Of(document.body, n, t));
      }
      function zf(e) {
        Uf(e.currentTarget);
      }
      async function Wf(e) {
        const t = e.currentTarget;
        if (!(t instanceof HTMLElement)) return;
        const n = t.getAttribute('data-sudo-required');
        n &&
          (e.stopPropagation(),
          e.preventDefault(),
          (await Ye(n)) && (t.removeAttribute('data-sudo-required'), t instanceof HTMLFormElement ? P(t) : t.click()));
      }
      document.addEventListener(
        'socket:message',
        function (e) {
          if (!Bf()) return;
          const { name: t, data: n, cached: o } = e.detail;
          if (o) return;
          const s = {
            name: t,
            data: Object.assign({}, n),
            arrived: Date.now(),
          };
          (s.data.wait = 0), Pf.set(t, s);
        },
        {
          capture: !0,
        },
      ),
        document.addEventListener('pjax:popstate', function (e) {
          if (!Bf()) return;
          const t = e.target,
            n = e.detail.cachedAt;
          n &&
            setTimeout(() =>
              (function (e, t) {
                for (const n of e.querySelectorAll('.js-socket-channel[data-channel]'))
                  for (const e of Ff($f(n), t))
                    n.dispatchEvent(
                      new CustomEvent('socket:message', {
                        bubbles: !1,
                        cancelable: !1,
                        detail: {
                          name: e.name,
                          data: e.data,
                          cached: !0,
                        },
                      }),
                    );
              })(t, n),
            );
        }),
        n('form.js-auto-replay-enforced-sso-request', {
          constructor: HTMLFormElement,
          initialize(e) {
            P(e);
          },
        }),
        s(
          'toggle',
          '.js-build-status .js-dropdown-details',
          function (e) {
            const t = e.currentTarget,
              n = t.querySelector('.js-status-dropdown-menu');
            function o() {
              t.hasAttribute('open') || i();
            }
            function s(e) {
              n.contains(e.target) || i();
            }
            function i() {
              t.removeAttribute('open'),
                n.classList.add('d-none'),
                t.appendChild(n),
                t.removeEventListener('toggle', o),
                window.removeEventListener('scroll', s);
            }
            n &&
              (t.addEventListener('toggle', o),
              n.classList.contains('js-close-menu-on-scroll') &&
                window.addEventListener('scroll', s, {
                  capture: !0,
                  passive: !0,
                }),
              n.classList.remove('d-none'),
              c(n, '.js-details-container').classList.add('open'),
              n.classList.contains('js-append-menu-to-body') &&
                (document.body.appendChild(n), Of(document.body, n, t)));
          },
          {
            capture: !0,
          },
        ),
        s('click', '.js-status-retry', ({ currentTarget: e }) => {
          Uf(e);
        }),
        n('.js-build-status', {
          add(e) {
            e.addEventListener('mouseenter', zf, {
              once: !0,
            });
          },
          remove(e) {
            e.removeEventListener('mouseenter', zf);
          },
        }),
        s('click', 'button[data-sudo-required], summary[data-sudo-required]', Wf),
        n('form[data-sudo-required]', {
          constructor: HTMLFormElement,
          subscribe: (e) => V(e, 'submit', Wf),
        });
      const Vf = {
        'actor:': 'ul.js-user-suggestions',
        'user:': 'ul.js-user-suggestions',
        'operation:': 'ul.js-operation-suggestions',
        'org:': 'ul.js-org-suggestions',
        'action:': 'ul.js-action-suggestions',
        'repo:': 'ul.js-repo-suggestions',
        'country:': 'ul.js-country-suggestions',
      };
      function Gf(e) {
        if (!(e instanceof CustomEvent)) throw new Error('invariant');
        const { key: t, item: n } = e.detail;
        if (!Kf(t)) return;
        const o = r(n, 'data-value');
        e.detail.value = `${t}${o}`;
      }
      function Jf(e) {
        if (!(e instanceof CustomEvent)) throw new Error('invariant');
        const { key: t, provide: n } = e.detail;
        if (!Kf(t)) return;
        const o = e.target;
        n(
          (async function (e, t, n) {
            const o = (await Xf(e)).querySelector(
              (function (e) {
                const t = Vf[e];
                if (!t) throw new Error(`Unknown audit log expander key: ${e}`);
                return t;
              })(t),
            );
            if (!(o instanceof HTMLElement))
              return {
                matched: !1,
              };
            const s = Gn(o, n, {
              limit: 5,
            });
            return {
              fragment: o.cloneNode(!0),
              matched: s > 0,
            };
          })(r(o, 'data-audit-url'), t, e.detail.text),
        );
      }
      function Kf(e) {
        return Object.getOwnPropertyNames(Vf).includes(e);
      }
      n('text-expander[data-audit-url]', {
        subscribe: (e) => le(V(e, 'text-expander-change', Jf), V(e, 'text-expander-value', Gf)),
      });
      const Xf = ne(async function (e) {
        const t = await Q(document, e),
          n = document.createElement('div');
        return n.append(t), n;
      });
      const Yf = {};
      function Qf(e) {
        const t = e.getAttribute('data-emoji-name') || '';
        return (
          (Yf[t] = ` ${(function (e) {
            return (e.getAttribute('data-text') || '').trim().toLowerCase();
          })(e).replace(/_/g, ' ')}`),
          t
        );
      }
      function Zf(e, t) {
        const n = Yf[e].indexOf(t);
        return n > -1 ? 1e3 - n : 0;
      }
      function ep(e) {
        if (!(e instanceof CustomEvent)) throw new Error('invariant');
        ':' === e.detail.key &&
          (e.detail.value = (function (e) {
            if (e.hasAttribute('data-use-colon-emoji')) return e.getAttribute('data-value');
            const t = e.firstElementChild;
            return t && 'G-EMOJI' === t.tagName && !t.firstElementChild ? t.textContent : e.getAttribute('data-value');
          })(e.detail.item));
      }
      function tp(e) {
        if (!(e instanceof CustomEvent)) throw new Error('invariant');
        const { key: t, provide: n } = e.detail;
        if (':' !== t) return;
        const o = e.target;
        if (!(o instanceof Element)) throw new Error('invariant');
        n(
          (async function (e, t) {
            const n = await np(e),
              o = (function (e, t) {
                return Gn(t, ` ${e.toLowerCase().replace(/_/g, ' ')}`, {
                  limit: 5,
                  text: Qf,
                  score: Zf,
                });
              })(t, n);
            return {
              fragment: n,
              matched: o > 0,
            };
          })(r(o, 'data-emoji-url'), e.detail.text),
        );
      }
      n('text-expander[data-emoji-url]', {
        subscribe: (e) => le(V(e, 'text-expander-change', tp), V(e, 'text-expander-value', ep)),
      });
      const np = ne(async function (e) {
        const t = (await Q(document, e)).firstElementChild;
        if (!(t instanceof HTMLElement)) throw new Error('invariant');
        return t;
      });
      function op(e, t, n) {
        const o = new RegExp(`\\b${((s = e), s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))}`);
        var s;
        const i = /^\d+$/.test(e)
            ? (e) =>
                (function (e, t) {
                  const n = e.search(t);
                  return n > -1 ? 1e3 - n : 0;
                })(e, o)
            : (t) => Fn(t, e),
          r = ba(n.suggestions, e, {
            limit: 5,
            text: (e) => `${e.number} ${e.title.trim().toLowerCase()}`,
            score: i,
          });
        return (
          (function (e, t, n) {
            const o = (e) => {
              const t = e.type in n ? z(document, n[e.type]) : '';
              return T`
    <li role="option" id="suggester-issue-${e.id}" data-value="${e.number}">
      <span class="d-inline-block mr-1">${t}</span> <small>#${e.number}</small> ${e.title}
    </li>
  `;
            };
            w(
              ((s = e),
              T`
  <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
    ${s.map(o)}
  </ul>
`),
              t,
            );
            var s;
          })(r, t, n.icons),
          r.length
        );
      }
      function sp(e) {
        if (!(e instanceof CustomEvent)) throw new Error('invariant');
        if ('#' !== e.detail.key) return;
        const t = r(e.detail.item, 'data-value');
        e.detail.value = `#${t}`;
      }
      function ip(e) {
        if (!(e instanceof CustomEvent)) throw new Error('invariant');
        const { key: t, provide: n } = e.detail;
        if ('#' !== t) return;
        const o = e.target;
        n(
          (async function (e, t) {
            const n = await rp(e),
              o = document.createElement('div'),
              s = op(t, o, n),
              i = o.firstElementChild;
            if (!(i instanceof HTMLElement)) throw new Error('invariant');
            return {
              fragment: i,
              matched: s > 0,
            };
          })(r(o, 'data-issue-url'), e.detail.text),
        );
      }
      n('text-expander[data-issue-url]', {
        subscribe: (e) => le(V(e, 'text-expander-change', ip), V(e, 'text-expander-value', sp)),
      });
      const rp = ne(ie);
      function ap(e, t, n) {
        const o = ba(n, e, {
          limit: 5,
          score: cp(e).score,
          text: (e) =>
            e.description
              ? `${e.name} ${e.description}`.trim().toLowerCase()
              : `${e.login} ${e.name}`.trim().toLowerCase(),
        });
        return (
          (function (e, t) {
            const n = (e) => {
              const t = 'user' === e.type ? e.login : e.name,
                n = 'user' === e.type ? e.name : e.description;
              return T`
    <li role="option" id="suggester-${e.id}-${e.type}-${t}" data-value="${t}">
      <span>${t}</span>
      <small>${n}</small>
    </li>
  `;
            };
            w(
              ((o = e),
              T`
  <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
    ${o.map(n)}
  </ul>
`),
              t,
            );
            var o;
          })(o, t),
          o.length
        );
      }
      function cp(e) {
        let t;
        if (e) {
          const n = e.toLowerCase().split('');
          t = function (t) {
            if (!t) return 0;
            const o = (function (e, t) {
              let n, o, s, i;
              const r = (function (e, t) {
                let n = 0;
                const o = [];
                for (; (n = e.indexOf(t, n)) > -1; ) o.push(n++);
                return o;
              })(e, t[0]);
              if (0 === r.length) return null;
              if (1 === t.length) return [r[0], 1, []];
              for (i = null, o = 0, s = r.length; o < s; o++) {
                const s = r[o];
                if (!(n = lp(e, t, s + 1))) continue;
                const a = n[n.length - 1] - s;
                (!i || a < i[1]) && (i = [s, a, n]);
              }
              return i;
            })(t, n);
            if (!o) return 0;
            let s = e.length / o[1];
            return (s /= o[0] / 2 + 1), s;
          };
        } else t = () => 2;
        return {
          score: t,
        };
      }
      function lp(e, t, n) {
        let o = n;
        const s = [];
        for (let i = 1; i < t.length; i += 1) {
          if (((o = e.indexOf(t[i], o)), -1 === o)) return;
          s.push(o++);
        }
        return s;
      }
      function up(e) {
        if (!(e instanceof CustomEvent)) throw new Error('invariant');
        if ('@' !== e.detail.key) return;
        const t = r(e.detail.item, 'data-value');
        e.detail.value = `@${t}`;
      }
      function dp(e) {
        if (!(e instanceof CustomEvent)) throw new Error('invariant');
        const { key: t, provide: n } = e.detail;
        if ('@' !== t) return;
        const o = e.target;
        n(
          (async function (e, t) {
            const n = await mp(e),
              o = document.createElement('div'),
              s = ap(t, o, n),
              i = o.firstElementChild;
            if (!(i instanceof HTMLElement)) throw new Error('invariant');
            return {
              fragment: i,
              matched: s > 0,
            };
          })(r(o, 'data-mention-url'), e.detail.text),
        );
      }
      n('text-expander[data-mention-url]', {
        subscribe: (e) => le(V(e, 'text-expander-change', dp), V(e, 'text-expander-value', up)),
      });
      const mp = ne(ie);
      function fp(e) {
        return (e.getAttribute('data-text') || '').trim().toLowerCase();
      }
      async function pp(e) {
        if (!(e instanceof CustomEvent)) throw new Error('invariant');
        if ('/' !== e.detail.key) return;
        const t = e.detail.item.getAttribute('data-value');
        if (!t) return;
        const n = e.currentTarget;
        if (!(n instanceof HTMLElement)) throw new Error('invariant');
        wn(t, n);
      }
      function gp(e) {
        if (!(e instanceof CustomEvent)) throw new Error('invariant');
        const { key: t, provide: n } = e.detail;
        if ('/' !== t) return;
        const o = e.target;
        if (!(o instanceof Element)) throw new Error('invariant');
        n(
          (async function (e, t) {
            const n = await (async function (e) {
                const t = (await Q(document, e)).firstElementChild;
                if (!(t instanceof HTMLUListElement)) throw new Error('invariant');
                return t;
              })(e),
              o = (function (e, t) {
                const n = e.toLowerCase().trim();
                return Gn(t, n, {
                  limit: 5,
                  text: fp,
                  score: (e) => (n ? Fn(e, n) : 1),
                });
              })(t, n);
            return {
              fragment: n,
              matched: o > 0,
            };
          })(r(o, 'data-slash-command-url'), e.detail.text),
        );
      }
      function hp(e, t) {
        const n = i(e, '.js-survey-question-form'),
          o = c(n, 'input.js-survey-other-text', HTMLInputElement),
          s = t && !n.classList.contains('is-other-selected');
        n.classList.toggle('is-other-selected', s),
          (o.hidden = !t),
          s ? ((o.required = !0), o.focus()) : (o.required = !1),
          u(o, 'change');
      }
      n('text-expander[data-slash-command-url]', {
        subscribe: (e) => le(V(e, 'text-expander-change', gp), V(e, 'text-expander-value', pp)),
      }),
        s('change', 'select.js-survey-select', function (e) {
          const t = e.currentTarget;
          hp(t, t.options[t.selectedIndex].classList.contains('js-survey-option-other'));
        }),
        s('change', 'input.js-survey-radio', function ({ currentTarget: e }) {
          hp(e, e.classList.contains('js-survey-radio-other'));
        }),
        s('change', 'input.js-survey-contact-checkbox', function (e) {
          const t = e.currentTarget,
            n = i(t, '.js-survey-question-form'),
            o = c(n, '.js-survey-contact-checkbox-hidden');
          t.checked ? o.setAttribute('disabled', 'true') : o.removeAttribute('disabled');
        }),
        s('click', '.js-tagsearch-nav-item', (e) => {
          i(e.currentTarget, '.js-tagsearch-popover-content').scrollTop = 0;
        }),
        n('.js-file-line-container, .js-code-block-container', {
          constructor: HTMLElement,
          subscribe(e) {
            const t = document.querySelector('.js-tagsearch-popover');
            if (!(t instanceof HTMLElement))
              return {
                unsubscribe() {},
              };
            const n = c(t, '.js-tagsearch-popover-content'),
              o = new WeakMap(),
              s = new WeakMap();
            let i;
            async function a(n) {
              const i = (function (e, t, n) {
                let o, s;
                if (document.caretPositionFromPoint) {
                  const e = document.caretPositionFromPoint(t, n);
                  e && ((o = e.offsetNode), (s = e.offset));
                } else if (document.caretRangeFromPoint) {
                  const e = document.caretRangeFromPoint(t, n);
                  e && ((o = e.startContainer), (s = e.startOffset));
                }
                if (!o || 'number' != typeof s || o.nodeType !== Node.TEXT_NODE) return;
                const i = o.textContent;
                if (!i) return null;
                const r = (function (e, t, n) {
                  let o;
                  for (; (o = t.exec(e)); ) {
                    const e = o.index + o[0].length;
                    if (o.index < n && n < e) return [o[0], o.index, e];
                  }
                  return null;
                })(i, e, s);
                if (!r) return null;
                const a = document.createRange();
                return a.setStart(o, r[1]), a.setEnd(o, r[2]), a;
              })(/\w+[!?]?/g, n.clientX, n.clientY);
              if (!i) return;
              const a = i.commonAncestorContainer.parentElement;
              for (const e of a.classList) if (['pl-token', 'pl-c', 'pl-s', 'pl-k'].includes(e)) return;
              const c = i.toString();
              if (!c || c.match(/\n|\s|[();&.=",]/)) return;
              let l = s.get(a);
              if ((l || ((l = new Set()), s.set(a, l)), l.has(c))) return;
              l.add(c);
              let d = r(t, 'data-tagsearch-lang');
              if ('HTML+ERB' === d) {
                if (!a.closest('.pl-sre')) return;
                d = 'Ruby';
              }
              if (
                e.classList.contains('js-code-block-container') &&
                ((d = (function (e) {
                  const t = e.closest('.highlight');
                  if (t)
                    for (const n of t.classList)
                      switch (n) {
                        case 'highlight-source-go':
                          return 'Go';
                        case 'highlight-source-js':
                          return 'JavaScript';
                        case 'highlight-source-python':
                          return 'Python';
                        case 'highlight-source-ruby':
                          return 'Ruby';
                        case 'highlight-source-ts':
                          return 'TypeScript';
                      }
                  return null;
                })(a)),
                !d)
              )
                return;
              const m = (function (e) {
                  let t = e.startContainer,
                    n = e.startOffset;
                  for (;;) {
                    let e = t.previousSibling;
                    for (; e; ) (n += (e.textContent || '').length), (e = e.previousSibling);
                    const o = t.parentElement;
                    if (!o) return [0, 0];
                    if (o.classList.contains('js-file-line')) {
                      const e = o.previousElementSibling;
                      if (!e.classList.contains('js-line-number')) throw new Error('invariant');
                      return [parseInt(e.getAttribute('data-line-number') || '1', 10) - 1, n];
                    }
                    t = o;
                  }
                })(i),
                f = await (async function (e, t, n, o) {
                  const s = r(e, 'data-tagsearch-url'),
                    i = r(e, 'data-tagsearch-path'),
                    a = r(e, 'data-tagsearch-ref'),
                    c = new URL(s, window.location.origin),
                    l = new URLSearchParams();
                  l.set('q', t),
                    l.set('blob_path', i),
                    l.set('ref', a),
                    l.set('language', n),
                    l.set('row', o[0].toString()),
                    l.set('col', o[1].toString()),
                    (c.search = l.toString());
                  const u = await oe(c.toString());
                  return /js-tagsearch-no-definitions/.test(u) ? '' : u;
                })(t, c, d, m);
              if (!f) return;
              const p = document.createElement('span');
              p.classList.add('pl-token'),
                p.addEventListener('click', u),
                p.setAttribute('data-hydro-click', r(t, 'data-hydro-click')),
                p.setAttribute('data-hydro-click-hmac', r(t, 'data-hydro-click-hmac')),
                o.set(p, f),
                i.surroundContents(p);
            }
            function l() {
              n.scrollTop = 0;
            }
            function u(e) {
              if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
              const s = e.currentTarget;
              s === i
                ? m()
                : ((function (e) {
                    i && i.classList.remove('active');
                    (i = e), i.classList.add('active'), (n.innerHTML = o.get(e) || ''), d(e);
                  })(s),
                  (function () {
                    if (!t.hidden) return void l();
                    (t.hidden = !1),
                      l(),
                      document.addEventListener('click', p),
                      document.addEventListener('keyup', g),
                      window.addEventListener('resize', f, {
                        passive: !0,
                      });
                  })()),
                e.preventDefault();
            }
            function d(e) {
              const n = e.getClientRects()[0] || {
                bottom: 0,
                left: 0,
              };
              (t.style.position = 'absolute'),
                (t.style.top = `${window.scrollY + n.bottom + 7}px`),
                (t.style.left = `${window.scrollX + n.left}px`);
            }
            function m() {
              t.hidden ||
                ((t.hidden = !0),
                i && i.classList.remove('active'),
                (i = void 0),
                document.removeEventListener('click', p),
                document.removeEventListener('keyup', g),
                window.removeEventListener('resize', f));
            }
            function f() {
              i instanceof HTMLElement && d(i);
            }
            function p(e) {
              const { target: n } = e;
              n instanceof Node && (t.contains(n) || i.contains(n) || m());
            }
            function g(e) {
              switch (e.key) {
                case 'Escape':
                  m();
              }
            }
            return (
              e.addEventListener('mousemove', a),
              {
                unsubscribe() {
                  e.removeEventListener('mousemove', a);
                },
              }
            );
          },
        }),
        s('details:toggled', '.js-ssws-token', function (e) {
          const t = e.currentTarget,
            n = c(t, 'input[type=password]', HTMLInputElement);
          t.classList.contains('open') && n.focus();
        });
      let jp = null;
      const bp = l(async function () {
        const e = c(document, '.js-quick-pull-new-branch-name', HTMLInputElement),
          t = e.value,
          n = e.getAttribute('data-generated-branch'),
          o = c(document, '.js-quick-pull-normalization-info'),
          s = new FormData();
        s.append('ref', t);
        const i = r(e, 'data-check-url'),
          a = c(e.parentElement, '.js-data-check-url-csrf', HTMLInputElement);
        null == jp || jp.abort();
        const { signal: l } = (jp = new AbortController());
        try {
          const r = await fetch(i, {
            mode: 'same-origin',
            method: 'POST',
            body: s,
            headers: {
              Accept: 'application/json',
              'Scoped-CSRF-Token': a.value,
              'X-Requested-With': 'XMLHttpRequest',
            },
          });
          if (r.ok) {
            const s = await r.json();
            if (t !== e.value) return;
            const i = s.normalized_ref;
            if (((o.innerHTML = null == s.message_html ? '' : s.message_html), !i)) {
              c(o, 'code').textContent = n;
            }
            null;
          }
        } catch (Hg) {}
        l.aborted || e.value;
      }, 200);
      function vp() {
        return document.querySelectorAll('.js-template-editor').length > 0;
      }
      function yp() {
        return document.querySelectorAll('.js-template-form.is-loading').length > 0
          ? 'loading'
          : document.querySelectorAll('.js-template-form.is-errored').length > 0
          ? 'error'
          : 'ok';
      }
      function Lp() {
        const e = c(document, '.js-commit-templates-form', HTMLFormElement),
          t = c(e, '.js-blob-submit', HTMLButtonElement),
          n = c(document, '.js-template-commit-form-error-message'),
          o = c(document, '.js-template-commit-form-loading-message');
        switch (yp()) {
          case 'loading':
            n.classList.add('d-none'),
              o.classList.remove('d-none'),
              e.setAttribute('disabled', 'disabled'),
              t.setAttribute('disabled', 'disabled');
            break;
          case 'error':
            n.classList.remove('d-none'),
              o.classList.add('d-none'),
              e.setAttribute('disabled', 'disabled'),
              t.setAttribute('disabled', 'disabled');
            break;
          default:
            n.classList.add('d-none'),
              o.classList.add('d-none'),
              e.removeAttribute('disabled'),
              t.removeAttribute('disabled');
        }
      }
      async function wp(e) {
        e.classList.add('is-loading'), Lp();
        const t = c(e, '[name="filename"]', HTMLInputElement).value,
          n = {};
        for (const i of a(document, '.js-template-form', HTMLFormElement)) {
          const e = c(i, '[name="filename"]', HTMLInputElement).value;
          n[e] = {};
          const t = new FormData(i);
          for (const [o, s] of t.entries()) n[e][o] = s.toString();
        }
        const o = new FormData(e);
        o.append('current', t), o.append('templates', JSON.stringify(n));
        const s = await fetch(e.action, {
          method: 'POST',
          body: o,
          headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          },
        });
        if (!s.ok) return;
        const r = await s.json(),
          l = z(document, r.html);
        i(e, '.js-template-preview').replaceWith(l);
        const u = c(document, '.js-hidden-template-fields'),
          d = u.querySelector(`[data-filename="${r.filename}"]`);
        if (d instanceof HTMLInputElement) d.value = r.markdown;
        else {
          const e = document.createElement('input');
          (e.type = 'hidden'),
            (e.name = `templates[][${r.filename}]`),
            e.setAttribute('data-filename', r.filename),
            (e.value = r.markdown),
            u.append(e);
        }
        e.classList.remove('is-loading'), Lp();
      }
      function Tp() {
        for (const e of a(document, '.js-template-form', HTMLFormElement)) wp(e);
      }
      function Ep(e) {
        if (
          (function (e) {
            let t;
            try {
              t = new URL(e.url);
            } catch (n) {
              return !0;
            }
            return t.host !== window.location.host;
          })(e) ||
          (function (e) {
            return /[?&]_pjax=/.test(e.url);
          })(e)
        )
          return;
        const t = (function () {
          const e = document.querySelector('.js-timeline-marker');
          return null != e ? e.getAttribute('data-last-modified') : null;
        })();
        t && e.headers.set('X-Timeline-Last-Modified', t);
      }
      function kp(e) {
        !(function (e) {
          const t = e.closest('details, .js-details-container');
          if (!t) return;
          if (!(t instanceof HTMLElement)) throw new Error('invariant');
          'DETAILS' === t.nodeName ? t.setAttribute('open', 'open') : bt(t) || De(t);
        })(e);
        const t = e.querySelector(`[href='#${e.id}']`);
        t && t.click();
      }
      function Sp() {
        return window.location.hash.slice(1);
      }
      function Mp(e) {
        const { name: t, value: n } = e,
          o = {
            name: window.location.href,
          };
        switch (t) {
          case 'CLS':
            o.cls = n;
            break;
          case 'FCP':
            o.fcp = n;
            break;
          case 'FID':
            o.fid = n;
            break;
          case 'LCP':
            o.lcp = n;
            break;
          case 'TTFB':
            o.ttfb = n;
        }
        J({
          webVitalTimings: [o],
        });
      }
      function xp(e) {
        const t = i(e, '.js-topic-save-notice-container'),
          n = c(t, '.js-repo-topics-save-notice');
        n.classList.remove('d-none'),
          n.classList.add('d-inline-block', 'anim-fade-in'),
          setTimeout(() => {
            n.classList.remove('d-inline-block'), n.classList.add('d-none');
          }, 1900);
      }
      function Ap(e) {
        const t = c(e, '.js-topic-suggestions-box');
        t.querySelector('.js-topic-suggestion') || t.remove();
      }
      async function Hp(e) {
        const t = e.querySelector('.js-topic-suggestions-container');
        if (!t) return;
        const n = r(t, 'data-url'),
          o = await Q(document, n);
        (t.innerHTML = ''), t.appendChild(o);
      }
      function qp() {
        return c(document, '.js-use-security-key', HTMLButtonElement);
      }
      function Cp(e, t) {
        for (const n of document.querySelectorAll('.js-u2f-message')) n instanceof HTMLElement && (n.hidden = !0);
        if (((c(document, e).hidden = !1), t)) {
          const e = qp();
          e.textContent = r(e, 'data-retry-message');
        }
      }
      function Ip() {
        return c(document, '.js-u2f-auth-form', HTMLFormElement);
      }
      async function _p() {
        try {
          Cp('.js-webauthn-auth-waiting', !1);
          const e = JSON.parse(r(Ip(), 'data-webauthn-sign-request')),
            t = await wt(e);
          Cp('.js-webauthn-auth-success', !1),
            (qp().disabled = !0),
            (function (e) {
              const t = Ip();
              (c(t, '.js-u2f-auth-response', HTMLInputElement).value = JSON.stringify(e)), P(t);
            })(t);
        } catch (e) {
          throw (Cp('.js-webauthn-auth-error', !0), e);
        }
      }
      n('.js-template-form .js-issue-labels', {
        add(e) {
          const t = e.closest('.js-issue-template-labels-container');
          if (!t) return;
          const n = c(t, '.js-issue-template-labels', HTMLInputElement);
          n.value = '';
          for (const o of e.children) {
            const e = o.getAttribute('data-name');
            e && !n.value.includes(e) && ('' === n.value ? (n.value = e) : (n.value = `${n.value}, ${e}`));
          }
        },
      }),
        n('.js-template-form .js-issue-assignees', {
          add(e) {
            const t = e.closest('.js-issue-template-assignees-container');
            if (!(t instanceof HTMLElement)) throw new Error('invariant');
            const n = c(t, '.js-issue-template-assignees', HTMLInputElement);
            n.value = '';
            for (const o of e.children) {
              const e = o.querySelector('span');
              if (e) {
                const t = e.getAttribute('data-assignee-name');
                t && !n.value.includes(t) && ('' === n.value ? (n.value = t) : (n.value = `${n.value}, ${t}`));
              }
            }
          },
        }),
        s('change', '.js-quick-pull-choice-option', function (e) {
          if (!vp()) return;
          const t = e.currentTarget;
          c(document, '.js-quick-pull-new-branch-name').toggleAttribute('required', 'quick-pull' === t.value);
        }),
        N('.js-quick-pull-new-branch-name', function (e) {
          if (!vp()) return;
          const t = e.target.value;
          (c(document, '.js-quick-pull-target-branch', HTMLInputElement).value = t), t.length && bp();
        }),
        N('.js-synced-template-input', function (e) {
          const t = e.target,
            n = t.getAttribute('data-sync');
          if (!n) return;
          const o = i(t, '.js-sync-container'),
            s = a(o, `[data-sync-with="${n}"]`),
            r = t.value;
          if ('' !== r.trim()) {
            for (const e of s) e.textContent = t.value;
            if ('name' === n) {
              c(o, '.js-sync-filename', HTMLInputElement).value = `${r.replace(/[^\w]/g, '-')}.md`.toLowerCase();
            }
          } else
            for (const i of s) {
              const e = i.getAttribute('data-sync-blank');
              e && (i.innerHTML = `<span class="text-gray">${e}</span>`);
            }
        }),
        s('submit', '.js-template-form', function (e) {
          e.preventDefault(), wp(e.currentTarget);
        }),
        s('click', '.js-toggle-template-commit', function () {
          const e = c(document, '.js-template-commit-pane');
          e.classList.toggle('d-none'), e.classList.contains('d-none') || Tp();
        }),
        s('submit', '.js-commit-templates-form', function (e) {
          'ok' !== yp() && e.preventDefault(), Lp();
        }),
        s('click', '.js-refresh-template-content', async function (e) {
          const t = e.currentTarget,
            n = i(t, '.js-template-form'),
            o = c(n, '.js-template-content-preview');
          o.innerHTML = '<span class="text-gray">Loading preview...</span>';
          const s = c(n, '.js-template-content-textarea', HTMLTextAreaElement).value,
            r = t.getAttribute('data-markdown-preview-url');
          if (!r) return;
          const a = c(t.parentElement, '.js-data-markdown-preview-url-csrf', HTMLInputElement),
            l = new FormData();
          l.append('markdown', s);
          const u = await fetch(r, {
            mode: 'same-origin',
            method: 'POST',
            body: l,
            headers: {
              'Scoped-CSRF-Token': a.value,
              'X-Requested-With': 'XMLHttpRequest',
            },
          });
          if (!u.ok) return;
          const d = await u.text();
          o.innerHTML = d;
        }),
        s('click', '.js-custom-template-toggle', (e) => {
          const t = e.target,
            n = i(t, '.js-template-preview'),
            o = !n.classList.contains('expand-preview');
          if (
            ((function () {
              const e = document.querySelectorAll('.js-template-preview');
              for (const t of e) t.classList.remove('expand-preview');
            })(),
            o)
          )
            n.classList.add('expand-preview'),
              n.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
          else {
            wp(c(n, '.js-template-form', HTMLFormElement));
          }
        }),
        s('click', '.js-remove-template-button', function (e) {
          const t = i(e.target, '.js-template-preview'),
            n = r(t, 'data-filename'),
            o = c(document, '.js-hidden-template-fields'),
            s = c(document, '.js-toggle-template-commit', HTMLButtonElement),
            a = o.querySelector(`[data-filename="${n}"]`);
          a && a.remove(), (s.disabled = !1), t.remove(), Tp();
        }),
        s('click', '.js-edit-custom-field-header', function (e) {
          i(e.target, '.js-custom-field-header').classList.toggle('section-focus'),
            (c(document, '.js-toggle-template-commit', HTMLButtonElement).disabled = !1);
        }),
        s(
          'details-menu-selected',
          '.js-add-template',
          function (e) {
            const t = c(document, '.js-templates-container'),
              n = c(document, '.js-toggle-template-commit', HTMLButtonElement),
              o = e.detail.relatedTarget.getAttribute('data-source');
            if (!o) return;
            n.disabled = !1;
            const s = c(document, `#${o}`);
            t.insertAdjacentHTML('beforeend', s.innerHTML);
          },
          {
            capture: !0,
          },
        ),
        s('change', '.js-template-repository-choice', function (e) {
          const t = e.target,
            n = t.checked && '' !== t.value,
            o = t.form;
          c(o, '.js-repository-auto-init-options').classList.toggle('has-removed-contents', n);
          const s = a(o, '.js-template-repository-setting'),
            l = a(o, '.js-template-repository-name-display');
          if (n) {
            const e = i(t, '.js-template-repository-choice-container'),
              n = c(e, '.js-template-repository-name'),
              s = r(t, 'data-owner'),
              a = o.querySelector(`.js-repository-owner-choice[value="${s}"]`);
            if (a instanceof HTMLInputElement) (a.checked = !0), u(a, 'change');
            else {
              const e = c(o, '.js-repository-owner-choice.js-repository-owner-is-viewer', HTMLInputElement);
              (e.checked = !0), u(e, 'change');
            }
            for (const t of l) t.textContent = n.textContent;
          } else for (const i of l) i.textContent = '';
          for (const i of s) i.hidden = !n;
        }),
        s(
          'details-menu-selected',
          '.js-timeline-scoping-menu',
          async function (e) {
            const t = e.detail.relatedTarget,
              n = r(t, 'data-url');
            let o;
            !(function (e) {
              const t = document.querySelector('.js-new-comment-form');
              if (!(t instanceof HTMLFormElement)) return;
              const n = t.querySelector('input.js-scope-issue-timeline-input');
              if (!(n instanceof HTMLInputElement)) return;
              n.value = e ? '0' : '1';
            })(t.hasAttribute('data-full-timeline'));
            try {
              o = await Q(document, n);
            } catch (s) {
              return;
            }
            c(document, '.js-issue-timeline-container').replaceWith(o);
          },
          {
            capture: !0,
          },
        ),
        D('.js-needs-timeline-marker-header', function (e, t, n) {
          Ep(n);
        }),
        s('deprecatedAjaxSend', '[data-remote]', function (e) {
          const { request: t } = e.detail;
          Ep(t);
        }),
        Ee(function ({ target: e }) {
          const t = Sp();
          t &&
            !e &&
            (async function (e) {
              const t = document.getElementById('js-timeline-progressive-loader');
              if (!t) return;
              const n = t.getAttribute('data-timeline-item-src');
              if (!n) return;
              const o = new URL(n, window.location.origin),
                s = new URLSearchParams(o.search.slice(1));
              let i;
              s.append('anchor', e), (o.search = s.toString());
              try {
                i = await Q(document, o.toString());
              } catch (u) {
                return;
              }
              const r = i.querySelector('.js-timeline-item');
              if (!r) return;
              const a = r.getAttribute('data-gid');
              if (!a) return;
              const c = document.querySelector(`.js-timeline-item[data-gid='${a}']`),
                l = document.querySelector('.js-timeline-scoping-menu .js-full-timeline-select');
              if (c) {
                c.replaceWith(r);
                const t = document.getElementById(e);
                t && kp(t);
              } else if (l) l.click();
              else {
                const t = document.getElementById('js-progressive-timeline-item-container');
                t && t.replaceWith(i);
                const n = document.getElementById(e);
                n && kp(n);
              }
            })(t);
        }),
        n('.js-timeline-progressive-focus-container', function (e) {
          const t = Sp();
          if (!t) return;
          const n = document.getElementById(t);
          n && e.contains(n) && kp(n);
        }),
        n('.js-discussion', function () {
          let e = new WeakSet();
          function t() {
            e = new WeakSet(document.querySelectorAll('.js-timeline-item'));
          }
          t(),
            document.addEventListener('pjax:end', t),
            n('.js-timeline-item', (t) => {
              t instanceof HTMLElement && (e.has(t) || Xt(t));
            });
        }),
        (async function () {
          if (!(window.performance && window.performance.timing && window.performance.getEntriesByType)) return;
          await G, await new Promise((e) => setTimeout(e));
          const e = window.performance.getEntriesByType('resource');
          e.length &&
            J({
              resourceTimings: e,
            });
          const t = window.performance.getEntriesByType('navigation');
          t.length &&
            J({
              navigationTimings: t,
            });
        })(),
        E(Mp),
        k(Mp),
        S(Mp),
        M(Mp),
        x(Mp),
        s('click', '.js-toggler-container .js-toggler-target', function (e) {
          if (0 !== e.button) return;
          const t = e.currentTarget.closest('.js-toggler-container');
          t && t.classList.toggle('on');
        }),
        D('.js-toggler-container', async (e, t) => {
          e.classList.remove('success', 'error'), e.classList.add('loading');
          try {
            await t.text(), e.classList.add('success');
          } catch (n) {
            e.classList.add('error');
          } finally {
            e.classList.remove('loading');
          }
        }),
        D('.js-accept-topic-form', async function (e, t) {
          await t.html();
          const n = i(e, '.js-topic-form-area'),
            o = i(e, '.js-topic-suggestion'),
            s = c(n, '.js-template'),
            r = c(n, '.js-tag-input-selected-tags'),
            a = s.cloneNode(!0),
            l = c(o, 'input[name="input[name]"]', HTMLInputElement).value;
          (c(a, 'input', HTMLInputElement).value = l),
            c(a, '.js-placeholder-tag-name').replaceWith(l),
            a.classList.remove('d-none', 'js-template'),
            r.appendChild(a),
            o.remove(),
            Hp(n),
            Ap(n),
            xp(e);
        }),
        D('.js-decline-topic-form', async function (e, t) {
          await t.html(), xp(e);
          const n = i(e, '.js-topic-form-area');
          i(e, '.js-topic-suggestion').remove(), Hp(n), Ap(n);
        }),
        D('.js-repo-topics-edit-form', async function (e, t) {
          const n = i(e, '.js-topic-form-area');
          n.classList.remove('errored'), (c(n, '.js-topic-error').textContent = '');
          for (const s of n.querySelectorAll('.js-tag-input-tag.invalid-topic')) s.classList.remove('invalid-topic');
          try {
            await t.json(), xp(e), Hp(n);
          } catch (o) {
            const t = o.response.json;
            if (
              (t.message && (n.classList.add('errored'), (c(n, '.js-topic-error').textContent = t.message)),
              t.invalidTopics)
            ) {
              const n = a(e, '.js-topic-input', HTMLInputElement);
              for (const e of t.invalidTopics)
                for (const t of n)
                  if (t.value === e) {
                    i(t, '.js-tag-input-tag').classList.add('invalid-topic');
                  }
            }
          }
        }),
        s('tags:changed', '.js-repo-topics-edit-form', function (e) {
          const t = e.target;
          P(t);
        }),
        s('click', '.js-reveal-hidden-topics', function (e) {
          const t = e.target,
            n = i(t, '.js-hidden-topics-container').querySelector('.js-hidden-topics');
          n && (n.classList.remove('d-none'), t.remove());
        }),
        s('click', '.js-hide-content-attachment', function (e) {
          e.preventDefault(),
            (function (e) {
              const t = i(e, '.js-content-attachment'),
                n = i(e, '[data-unfurl-hide-url]'),
                o = r(n, 'data-unfurl-hide-url'),
                s = c(n, '.js-data-unfurl-hide-url-csrf', HTMLInputElement),
                a = r(e, 'data-id'),
                l = new XMLHttpRequest();
              (l.onload = function () {
                l.status >= 200 && l.status < 300 && t.remove();
              }),
                l.open('POST', o);
              const u = new FormData();
              u.append('id', a), u.append('authenticity_token', s.value), l.send(u);
            })(e.currentTarget);
        }),
        n('.js-content-attachment .max--md', function (e) {
          const t = c(e, '.markdown-body');
          var n;
          (t.clientHeight < 188 ||
            ('' === ((n = t).textContent || '').trim() && 1 === (n.querySelectorAll('img') || []).length)) &&
            (e.classList.remove('max--md'),
            (c(e, '.Details-content--closed').hidden = !0),
            (c(e, '.Details-content--open').hidden = !0));
        }),
        window.requestIdleCallback(() => {
          const e = (function () {
            if ('Intl' in window)
              try {
                return new window.Intl.DateTimeFormat().resolvedOptions().timeZone;
              } catch (Hg) {}
          })();
          e && Ss('tz', encodeURIComponent(e));
        }),
        n('.js-webauthn-support', {
          constructor: HTMLInputElement,
          add: function (e) {
            K(e, vt());
          },
        }),
        n('.js-webauthn-iuvpaa-support', {
          constructor: HTMLInputElement,
          add: function (e) {
            !(async function () {
              K(e, await yt());
            })();
          },
        }),
        n('.js-u2f-auth-form-body', function (e) {
          if (!e) return;
          const t = Lt();
          if ((e.classList.toggle('unavailable', !t), t)) {
            const e = qp();
            (e.hidden = !1), e.classList.contains('js-webauthn-autofocus') && e.focus();
          }
        }),
        s('click', '.js-use-security-key', function (e) {
          !(function (e) {
            e && e.preventDefault(), Lt() && _p();
          })(e);
        });
      function $p() {
        let e = [];
        try {
          e = (window.localStorage.getItem('dismissed_prompts') || '').split(',');
        } catch (Hg) {}
        return e;
      }
      let Np = class SignupPromptElement extends HTMLElement {
        get promptType() {
          return this.getAttribute('data-prompt') || '';
        }
        connectedCallback() {
          this.hidden = $p().includes(this.promptType);
        }
        dismiss() {
          try {
            const e = $p().concat(this.promptType || []);
            window.localStorage.setItem('dismissed_prompts', e.join(','));
          } catch (Hg) {
          } finally {
            this.hidden = !0;
          }
        }
      };
      (Np = No([Oo], Np)),
        window.addEventListener('beforeunload', function () {
          if (Object.keys(Tt).length > 0) {
            const e = history.state || {};
            (e.staleRecords = Tt), W(e, '', location.href);
          }
        });
      try {
        !(async function () {
          if (history.state && history.state.staleRecords) {
            await B;
            for (const e in history.state.staleRecords)
              for (const t of document.querySelectorAll(
                `.js-updatable-content [data-url='${e}'], .js-updatable-content[data-url='${e}']`,
              )) {
                const n = history.state.staleRecords[e];
                t instanceof HTMLElement && X(t, n, !0);
              }
            W(null, '', location.href);
          }
        })();
      } catch (Hg) {}
      n('.js-socket-channel.js-updatable-content', {
        subscribe: (e) =>
          V(e, 'socket:message', function (e) {
            const { gid: t, wait: n } = e.detail.data,
              o = e.target,
              s = t
                ? (function (e, t) {
                    if (e.getAttribute('data-gid') === t) return e;
                    for (const n of e.querySelectorAll('[data-url][data-gid]'))
                      if (n.getAttribute('data-gid') === t) return n;
                    return null;
                  })(o, t)
                : o;
            s && setTimeout(Z, n || 0, s);
          }),
      }),
        s('upload:setup', '.js-upload-avatar-image', function (e) {
          const { form: t } = e.detail,
            n = e.currentTarget.getAttribute('data-alambic-organization'),
            o = e.currentTarget.getAttribute('data-alambic-owner-type'),
            s = e.currentTarget.getAttribute('data-alambic-owner-id');
          n && t.append('organization_id', n), o && t.append('owner_type', o), s && t.append('owner_id', s);
        }),
        s('upload:complete', '.js-upload-avatar-image', function (e) {
          const { attachment: t } = e.detail,
            n = `/settings/avatars/${t.id}`;
          ee({
            content: Q(document, n),
          });
        });
      class PNGScanner {
        constructor(e) {
          (this.dataview = new DataView(e)), (this.pos = 0);
        }
        static fromFile(e) {
          return new Promise(function (t, n) {
            const o = new FileReader();
            (o.onload = function () {
              if (!(o.result instanceof ArrayBuffer)) throw new Error('invariant');
              t(new PNGScanner(o.result));
            }),
              (o.onerror = function () {
                n(o.error);
              }),
              o.readAsArrayBuffer(e);
          });
        }
        advance(e) {
          this.pos += e;
        }
        readInt(e) {
          const t = this,
            n = (function () {
              switch (e) {
                case 1:
                  return t.dataview.getUint8(t.pos);
                case 2:
                  return t.dataview.getUint16(t.pos);
                case 4:
                  return t.dataview.getUint32(t.pos);
                default:
                  throw new Error('bytes parameter must be 1, 2 or 4');
              }
            })();
          return this.advance(e), n;
        }
        readChar() {
          return this.readInt(1);
        }
        readShort() {
          return this.readInt(2);
        }
        readLong() {
          return this.readInt(4);
        }
        readString(e) {
          const t = [];
          for (let n = 0; n < e; n++) t.push(String.fromCharCode(this.readChar()));
          return t.join('');
        }
        scan(e) {
          if (2303741511 !== this.readLong()) throw new Error('invalid PNG');
          for (this.advance(4); ; ) {
            const t = this.readLong(),
              n = this.readString(4),
              o = this.pos + t + 4;
            if (!1 === e.call(this, n, t) || 'IEND' === n) break;
            this.pos = o;
          }
        }
      }
      function Rp(e, t) {
        const n = e.value.substring(0, e.selectionStart || 0),
          o = e.value.substring(e.selectionEnd || 0),
          s = 0 === n.length || n.match(/\n$/) ? '' : '\n',
          i = n + s + t;
        (e.value = i + o),
          (e.selectionStart = i.length),
          (e.selectionEnd = e.selectionStart),
          e.dispatchEvent(
            new CustomEvent('change', {
              bubbles: !0,
              cancelable: !1,
            }),
          ),
          e.focus();
      }
      function Dp(e) {
        const t = e.dataTransfer;
        if (!t) return;
        if (
          (function (e) {
            return Array.from(e.types).indexOf('Files') >= 0;
          })(t)
        )
          return;
        if (!Op(t)) return;
        const n = Up(t);
        if (!n.some(Wp)) return;
        e.stopPropagation(), e.preventDefault();
        const o = e.currentTarget;
        o instanceof HTMLTextAreaElement && Rp(o, n.map(Bp).join(''));
      }
      function Pp(e) {
        const t = e.dataTransfer;
        t && (t.dropEffect = 'link');
      }
      function Fp(e) {
        const t = e.clipboardData;
        if (!t || !Op(t)) return;
        const n = Up(t);
        if (!n.some(Wp)) return;
        e.stopPropagation(), e.preventDefault();
        const o = e.currentTarget;
        o instanceof HTMLTextAreaElement && Rp(o, n.map(Bp).join(''));
      }
      function Bp(e) {
        return Wp(e) ? `\n![](${e})\n` : e;
      }
      function Op(e) {
        return Array.from(e.types).indexOf('text/uri-list') >= 0;
      }
      function Up(e) {
        return (e.getData('text/uri-list') || '').split('\r\n');
      }
      const zp = /\.(gif|png|jpe?g)$/i;
      function Wp(e) {
        return zp.test(e);
      }
      function Vp(e) {
        const t = e.dataTransfer;
        if (!t) return;
        if (
          (function (e) {
            return Array.from(e.types).indexOf('Files') >= 0;
          })(t)
        )
          return;
        const n = Yp(t);
        if (!n) return;
        e.stopPropagation(), e.preventDefault();
        const o = e.currentTarget;
        o instanceof HTMLTextAreaElement && Rp(o, Xp(n));
      }
      function Gp(e) {
        const t = e.dataTransfer;
        t && (t.dropEffect = 'copy');
      }
      function Jp(e) {
        if (!e.clipboardData) return;
        const t = Yp(e.clipboardData);
        if (!t) return;
        e.stopPropagation(), e.preventDefault();
        const n = e.currentTarget;
        n instanceof HTMLTextAreaElement && Rp(n, Xp(t));
      }
      function Kp(e) {
        return (e.textContent || '').trim().replace(/\|/g, '\\|').replace(/\n/g, ' ') || ' ';
      }
      function Xp(e) {
        const t = Array.from(e.querySelectorAll('tr')),
          n = t.shift();
        if (!n) return '';
        const o = ((s = n), Array.from(s.querySelectorAll('td, th')).map(Kp));
        var s;
        const i = o.map(() => '--');
        return `\n${`${o.join(' | ')}\n${i.join(' | ')}\n`}${t
          .map((e) => Array.from(e.querySelectorAll('td')).map(Kp).join(' | '))
          .join('\n')}\n\n`;
      }
      function Yp(e) {
        if (-1 === Array.from(e.types).indexOf('text/html')) return null;
        const t = e.getData('text/html');
        if (!/<table/i.test(t)) return null;
        const n = (function (e) {
          const t = document.createElement('div');
          return (t.innerHTML = e), t.querySelector('table');
        })(t);
        return !n || n.closest('[data-paste-markdown-skip]') ? null : n;
      }
      function Qp(e) {
        const t = e.clipboardData;
        if (
          !t ||
          !(function (e) {
            return Array.from(e.types).indexOf('text/x-gfm') >= 0;
          })(t)
        )
          return;
        const n = e.currentTarget;
        if (!(n instanceof HTMLTextAreaElement)) return;
        const o = t.getData('text/x-gfm');
        o && (e.stopPropagation(), e.preventDefault(), Rp(n, o));
      }
      function Zp(e) {
        return `${e.isImage() ? '!' : ''}[Uploading ${e.file.name}…]()`;
      }
      n('.js-paste-markdown', {
        constructor: HTMLElement,
        subscribe: function (e) {
          return (
            (function (e) {
              e.addEventListener('dragover', Gp), e.addEventListener('drop', Vp), e.addEventListener('paste', Jp);
            })(e),
            (function (e) {
              e.addEventListener('dragover', Pp), e.addEventListener('drop', Dp), e.addEventListener('paste', Fp);
            })(e),
            (function (e) {
              e.addEventListener('paste', Qp);
            })(e),
            {
              unsubscribe: () => {
                !(function (e) {
                  e.removeEventListener('dragover', Gp),
                    e.removeEventListener('drop', Vp),
                    e.removeEventListener('paste', Jp);
                })(e),
                  (function (e) {
                    e.removeEventListener('dragover', Pp),
                      e.removeEventListener('drop', Dp),
                      e.removeEventListener('paste', Fp);
                  })(e),
                  (function (e) {
                    e.removeEventListener('paste', Qp);
                  })(e);
              },
            }
          );
        },
      });
      function eg(e) {
        const t = i(e, 'form', HTMLFormElement);
        return c(t, '#release_id', HTMLInputElement).value;
      }
      s('upload:setup', '.js-upload-markdown-image', function (e) {
        const t = c(e.currentTarget, '.js-comment-field', HTMLTextAreaElement);
        t.setCustomValidity('uploading'), Fe(t, `${Zp(e.detail.attachment)}\n`);
      }),
        s('upload:complete', '.js-upload-markdown-image', async function (e) {
          const { attachment: t } = e.detail,
            n = c(e.currentTarget, '.js-comment-field', HTMLTextAreaElement),
            o = t.isImage()
              ? await (async function (e) {
                  const t = await (async function (e) {
                      var t;
                      const n = {
                        width: 0,
                        height: 0,
                        ppi: 0,
                      };
                      try {
                        return null !==
                          (t = await (async function (e) {
                            if ('image/png' !== e.type) return null;
                            const t = e.slice(0, 10240, e.type),
                              n = await PNGScanner.fromFile(t),
                              o = {
                                width: 0,
                                height: 0,
                                ppi: 1,
                              };
                            return (
                              n.scan(function (e) {
                                switch (e) {
                                  case 'IHDR':
                                    return (o.width = this.readLong()), (o.height = this.readLong()), !0;
                                  case 'pHYs': {
                                    const e = this.readLong(),
                                      t = this.readLong();
                                    let n;
                                    return (
                                      1 === this.readChar() && (n = 0.0254),
                                      n && (o.ppi = Math.round(((e + t) / 2) * n)),
                                      !1
                                    );
                                  }
                                  case 'IDAT':
                                    return !1;
                                }
                                return !0;
                              }),
                              o
                            );
                          })(e)) && void 0 !== t
                          ? t
                          : n;
                      } catch (o) {
                        return n;
                      }
                    })(e.file),
                    n =
                      ((s = e.file.name),
                      (function (e) {
                        return e
                          .replace(/[[\]\\"<>&]/g, '.')
                          .replace(/\.{2,}/g, '.')
                          .replace(/^\.|\.$/gi, '');
                      })(s)
                        .replace(/\.[^.]+$/, '')
                        .replace(/\./g, ' ')),
                    o = e.href;
                  var s;
                  if (144 === t.ppi) {
                    return `<img width="${Math.round(t.width / 2)}" alt="${n}" src="${o}">`;
                  }
                  return `![${n}](${o})`;
                })(t)
              : (function (e) {
                  return `[${e.file.name}](${e.href})`;
                })(t);
          n.setCustomValidity(''), Et(n, Zp(t), o);
        }),
        s('upload:error', '.js-upload-markdown-image', function (e) {
          const t = c(e.currentTarget, '.js-comment-field', HTMLTextAreaElement),
            n = Zp(e.detail.attachment);
          t.setCustomValidity(''), Et(t, n, '');
        }),
        s('upload:invalid', '.js-upload-markdown-image', function (e) {
          const t = c(e.currentTarget, '.js-comment-field', HTMLTextAreaElement),
            n = Zp(e.detail.attachment);
          t.setCustomValidity(''), Et(t, n, '');
        }),
        s('upload:setup', '.js-upload-marketplace-listing-screenshot', function (e) {
          const { form: t } = e.detail,
            n = e.currentTarget.getAttribute('data-marketplace-listing-id');
          n && t.append('marketplace_listing_id', n);
        }),
        s('upload:complete', '.js-upload-marketplace-listing-screenshot', async function (e) {
          const t = r(e.currentTarget, 'data-screenshots-url'),
            n = c(document, '.js-marketplace-listing-screenshots-container'),
            o = await Q(document, t);
          (n.innerHTML = ''), n.appendChild(o);
        }),
        s('upload:setup', '.js-upload-marketplace-listing-hero-card-background', function (e) {
          const { form: t } = e.detail,
            n = e.currentTarget.getAttribute('data-marketplace-listing-id');
          n && t.append('marketplace_listing_id', n);
        }),
        s('upload:complete', '.js-upload-marketplace-listing-hero-card-background', function (e) {
          const { attachment: t } = e.detail;
          (c(document, '.js-marketplace-listing-hero-card-background-id', HTMLInputElement).value = t.id),
            (c(document, '.js-hero-listing-container').style.backgroundImage = `url(${t.href})`);
        }),
        s('click', '.js-release-remove-file', function (e) {
          const t = i(e.currentTarget, '.js-release-file');
          t.classList.add('delete'), (c(t, 'input.destroy', HTMLInputElement).value = 'true');
        }),
        s('click', '.js-release-undo-remove-file', function (e) {
          const t = i(e.currentTarget, '.js-release-file');
          t.classList.remove('delete'), (c(t, 'input.destroy', HTMLInputElement).value = '');
        });
      let tg = null;
      function ng(e, t) {
        t.append('release_id', eg(e));
        const n = a(document, '.js-releases-field .js-release-file.delete .id', HTMLInputElement);
        if (n.length) {
          const e = n.map((e) => e.value);
          t.append('deletion_candidates', e.join(','));
        }
      }
      s('release:saved', '.js-release-form', function (e) {
        const t = e.currentTarget;
        tg = null;
        let n = !1;
        for (const s of t.querySelectorAll('.js-releases-field .js-release-file'))
          s.classList.contains('delete') ? s.remove() : s.classList.contains('js-template') || (n = !0);
        const o = c(t, '.js-releases-field');
        o.classList.toggle('not-populated', !n), o.classList.toggle('is-populated', n);
      }),
        s('upload:setup', '.js-upload-release-file', function (e) {
          const { form: t, preprocess: n } = e.detail,
            o = e.currentTarget;
          if (eg(o)) return void ng(o, t);
          if (!tg) {
            const e = c(document, '.js-save-draft', HTMLButtonElement);
            tg = Gm(e);
          }
          const s = ng.bind(null, o, t);
          n.push(tg.then(s));
        }),
        s('upload:start', '.js-upload-release-file', function (e) {
          const t = e.detail.policy;
          c(e.currentTarget, '.js-upload-meter').classList.remove('d-none');
          const n = t.asset.replaced_asset;
          if (n)
            for (const o of a(document, '.js-releases-field .js-release-file .id', HTMLInputElement))
              Number(o.value) === n && i(o, '.js-release-file').remove();
        }),
        s('upload:complete', '.js-upload-release-file', function (e) {
          const { attachment: t } = e.detail,
            n = c(document, '.js-releases-field'),
            o = c(n, '.js-template').cloneNode(!0);
          o.classList.remove('d-none', 'js-template'), (c(o, 'input.id', HTMLInputElement).value = t.id);
          const s = t.name || t.href.split('/').pop();
          for (const r of o.querySelectorAll('.js-release-asset-filename'))
            r instanceof HTMLInputElement ? (r.value = s) : (r.textContent = s);
          const i = `(${(t.file.size / 1048576).toFixed(2)} MB)`;
          (c(o, '.js-release-asset-filesize').textContent = i),
            n.appendChild(o),
            n.classList.remove('not-populated'),
            n.classList.add('is-populated'),
            c(e.currentTarget, '.js-upload-meter').classList.add('d-none');
        }),
        s('upload:progress', '.js-upload-release-file', function (e) {
          const { attachment: t } = e.detail;
          c(e.currentTarget, '.js-upload-meter').style.width = `${t.percent}%`;
        }),
        s('upload:setup', '.js-upload-repository-image', function () {
          c(document, '.js-remove-repository-image-button').hidden = !0;
        }),
        s('upload:complete', '.js-upload-repository-image', function (e) {
          const { attachment: t } = e.detail;
          (c(document, '.js-repository-image-id', HTMLInputElement).value = t.id),
            (c(document, '.js-remove-repository-image-button').hidden = !1),
            (c(document, '.js-repository-image-container').style.backgroundImage = `url(${t.href})`);
        });
      let og = null;
      const sg = new WeakMap();
      function ig(e) {
        e.classList.remove('is-progress-bar');
        const t = i(e, '.js-upload-manifest-file-container');
        (c(t, '.js-upload-progress').hidden = !0),
          (c(t, '.js-upload-meter-text .js-upload-meter-filename').textContent = '');
      }
      function rg(e) {
        ig(e.currentTarget);
      }
      function ag(e) {
        return c(e, '.js-user-status-details').hasAttribute('open');
      }
      function cg(e) {
        const t = c(e, '.js-user-status-original-emoji'),
          n = c(e, '.js-user-status-custom-emoji'),
          o = c(e, '.js-user-status-no-emoji-icon');
        (n.innerHTML = t.innerHTML), (o.hidden = n.hasChildNodes());
      }
      function lg(e) {
        const t = c(e, '.js-user-status-message-field', HTMLInputElement);
        cg(e),
          (function (e) {
            const t = e.querySelector('.js-emoji-picker');
            t && (wi(t), Ei(t), t.close());
          })(e),
          (t.value = t.defaultValue),
          Es(e);
      }
      function ug(e, t) {
        cg(e),
          (function (e, t) {
            const n = e.querySelector('.js-user-status-emoji-picker');
            if (!(n instanceof window.IncludeFragmentElement)) return;
            const o = r(n, 'data-url');
            if (t) {
              const e = new URL(o, window.location.origin),
                t = new URLSearchParams(e.search.slice(1));
              t.append('show_picker', '1'), (e.search = t.toString());
            }
            n.setAttribute('src', o.toString());
          })(e, t),
          (function (e) {
            const t = e.querySelector('.js-user-status-org-picker');
            if (!(t instanceof window.IncludeFragmentElement)) return;
            const n = r(t, 'data-url');
            t.src = n.toString();
          })(e);
      }
      function dg(e) {
        const t = c(e, '.js-user-status-suggestions'),
          n = c(e, '.js-user-status-message-field', HTMLInputElement).value.trim().length > 0;
        t.classList.toggle('collapsed', n), t.setAttribute('aria-expanded', n.toString());
      }
      function mg(e, t) {
        ag(e) ? lg(e) : ug(e, t), hg(e);
      }
      function fg(e, t) {
        (c(e, '.js-user-status-custom-emoji').innerHTML = t.innerHTML),
          (c(e, '.js-user-status-no-emoji-icon').hidden = !0);
      }
      function pg(e, t) {
        c(e, '.js-user-status-emoji-field', HTMLInputElement).value = t.value;
      }
      function gg(e, t) {
        if ('Escape' === fe(t)) {
          const t = e.closest('.js-user-status-container');
          if (!(t instanceof HTMLElement)) return;
          (e.value = e.defaultValue), mg(t, !1);
        }
      }
      function hg(e) {
        const t = c(e, '.js-user-status-submit', HTMLButtonElement),
          n = c(e, '.js-clear-user-status-button', HTMLButtonElement),
          o = c(e, '.js-user-status-message-field', HTMLInputElement),
          s = c(e, '.js-user-status-emoji-field', HTMLInputElement),
          i = o.value.trim(),
          r = s.value.trim();
        let a = !1,
          l = !1;
        var u;
        ws((u = o)) - ye(u.value) < 0 && (a = !0),
          i.length < 1 && r.length < 1 && ((a = !0), n.classList.contains('js-user-status-exists') || (l = !0)),
          (t.disabled = a),
          (n.disabled = l);
      }
      function jg(e) {
        return i(e, '.js-user-status-container');
      }
      function bg(e, t) {
        if (ag(e)) return;
        const n = e.querySelectorAll('.js-toggle-user-status-edit.Details-content--closed');
        for (const o of n) o.classList.toggle('text-blue', t), o.classList.toggle('link-gray-dark', !t);
      }
      function vg(e) {
        if (!(e.target instanceof Element)) return;
        bg(i(e.target, '.js-user-status-container'), !0);
      }
      function yg(e) {
        if (!(e.target instanceof Element)) return;
        bg(i(e.target, '.js-user-status-container'), !1);
      }
      function Lg(e) {
        const t = e.currentTarget;
        Y(t)
          ? (function (e) {
              const t = e.getAttribute('data-warn-unsaved-changes') || 'Changes you made may not be saved.';
              window.onbeforeunload = function (e) {
                return (e.returnValue = t), t;
              };
            })(t)
          : wg();
      }
      function wg() {
        window.onbeforeunload = null;
      }
      function Tg({ currentTarget: e }) {
        e.hasAttribute('open') || wg();
      }
      function Eg(e) {
        const t = e.currentTarget;
        if (!t.closest('details[open]')) return;
        let n = !0;
        const o = a(t, 'form[data-warn-unsaved-changes]', HTMLFormElement);
        for (const s of o)
          if (Y(s)) {
            const e = r(s, 'data-warn-unsaved-changes');
            n = confirm(e);
            break;
          }
        n || e.preventDefault();
      }
      s('file-attachment-accept', '.js-upload-manifest-file', function (e) {
        const { attachments: t } = e.detail,
          n = parseInt(e.currentTarget.getAttribute('data-directory-upload-max-files') || '', 10);
        t.length > n && (e.preventDefault(), e.currentTarget.classList.add('is-too-many'));
      }),
        s('document:drop', '.js-upload-manifest-tree-view', async function (e) {
          const { transfer: t } = e.detail,
            n = e.currentTarget,
            o = await A.traverse(t, !0),
            s = c(document, '#js-repo-pjax-container');
          s.addEventListener(
            'pjax:success',
            () => {
              c(s, '.js-upload-manifest-file', H).attach(o);
            },
            {
              once: !0,
            },
          );
          const i = r(n, 'data-drop-url');
          me({
            url: i,
            container: s,
          });
        }),
        s('upload:setup', '.js-upload-manifest-file', async function (e) {
          const { batch: t, form: n, preprocess: o } = e.detail,
            s = e.currentTarget;
          function r() {
            n.append('upload_manifest_id', sg.get(s));
          }
          if (
            ((function (e, t) {
              const n = i(e, '.js-upload-manifest-file-container'),
                o = c(n, '.js-upload-progress');
              (o.hidden = !1), e.classList.add('is-progress-bar');
              const s = c(o, '.js-upload-meter-text');
              (c(s, '.js-upload-meter-range-start').textContent = String(t.uploaded() + 1)),
                (c(s, '.js-upload-meter-range-end').textContent = String(t.size));
            })(s, t),
            sg.get(s))
          )
            return void r();
          if (og) return void o.push(og.then(r));
          const a = i(s, '.js-upload-manifest-file-container').querySelector('.js-upload-manifest-form');
          og = fetch(a.action, {
            method: a.method,
            body: new FormData(a),
            headers: {
              Accept: 'application/json',
            },
          });
          const [l, u] = (function () {
            let e;
            return [
              new Promise((t) => {
                e = t;
              }),
              e,
            ];
          })();
          o.push(l.then(r));
          const d = await og;
          if (!d.ok) return;
          const m = await d.json(),
            f = c(document, '.js-manifest-commit-form', HTMLFormElement).elements.namedItem('manifest_id');
          if (!(f instanceof HTMLInputElement)) throw new Error('invariant');
          (f.value = m.upload_manifest.id), sg.set(s, m.upload_manifest.id), (og = null), u();
        }),
        s('upload:start', '.js-upload-manifest-file', function (e) {
          const { attachment: t, batch: n } = e.detail,
            o = i(e.currentTarget, '.js-upload-manifest-file-container'),
            s = c(o, '.js-upload-progress'),
            r = c(s, '.js-upload-meter-text');
          (c(r, '.js-upload-meter-range-start').textContent = n.uploaded() + 1),
            (c(r, '.js-upload-meter-filename').textContent = t.fullPath);
        }),
        s('upload:complete', '.js-upload-manifest-file', function (e) {
          const { attachment: t, batch: n } = e.detail,
            o = c(document, '.js-manifest-commit-file-template', HTMLElement),
            s = c(o, '.js-manifest-file-entry').cloneNode(!0);
          c(s, '.js-filename').textContent = t.fullPath;
          const i = t.id,
            r = c(s, '.js-remove-manifest-file-form', HTMLFormElement).elements.namedItem('file_id');
          if (!(r instanceof HTMLInputElement)) throw new Error('invariant');
          r.value = i;
          const a = c(document, '.js-manifest-file-list');
          (a.hidden = !1),
            e.currentTarget.classList.add('is-file-list'),
            c(a, '.js-manifest-file-list-root').appendChild(s),
            n.isFinished() && ig(e.currentTarget);
        }),
        s('upload:progress', '.js-upload-manifest-file', function (e) {
          const { batch: t } = e.detail,
            n = i(e.currentTarget, '.js-upload-manifest-file-container');
          c(n, '.js-upload-meter').style.width = `${t.percent()}%`;
        }),
        s('upload:error', '.js-upload-manifest-file', rg),
        s('upload:invalid', '.js-upload-manifest-file', rg),
        D('.js-remove-manifest-file-form', async function (e, t) {
          await t.html();
          const n = i(e, '.js-manifest-file-list-root');
          if ((i(e, '.js-manifest-file-entry').remove(), !n.hasChildNodes())) {
            (i(n, '.js-manifest-file-list').hidden = !0),
              c(document, '.js-upload-manifest-file').classList.remove('is-file-list');
          }
        }),
        n('.js-manifest-ready-check', {
          initialize(e) {
            !(async function (e) {
              const t = r(e, 'data-redirect-url');
              try {
                await ve(r(e, 'data-poll-url')), (window.location.href = t);
              } catch (n) {
                (c(document, '.js-manifest-ready-check').hidden = !0),
                  (c(document, '.js-manifest-ready-check-failed').hidden = !1);
              }
            })(e);
          },
        }),
        s('upload:setup', '.js-upload-enterprise-installation-user-accounts-upload', function (e) {
          const { form: t } = e.detail,
            n = e.currentTarget.getAttribute('data-business-id');
          n && t.append('business_id', n);
          const o = e.currentTarget.getAttribute('data-enterprise-installation-id');
          o && t.append('enterprise_installation_id', o);
        }),
        s('upload:complete', '.js-upload-enterprise-installation-user-accounts-upload', function (e) {
          const { attachment: t } = e.detail,
            n = c(e.currentTarget, '.js-enterprise-installation-user-accounts-upload-id', HTMLInputElement);
          n.value = t.id;
          const o = c(e.currentTarget, '.js-enterprise-installation-id', HTMLInputElement),
            s = e.currentTarget.getAttribute('data-enterprise-installation-id');
          s && (o.value = s);
          const i = n.form;
          i && i.submit();
        }),
        s('click', '.js-user-status-expire-button', function (e) {
          const t = e.currentTarget;
          t instanceof HTMLButtonElement &&
            (function (e, t) {
              const n = c(e, '.js-user-status-expiration-interval-selected'),
                o = c(e, '.js-user-status-expire-drop-down'),
                s = c(e, '.js-user-status-expiration-date-input', HTMLInputElement);
              (n.textContent = t.title), (s.value = t.value), o.removeAttribute('open');
            })(jg(t), t);
        }),
        s('click', '.js-toggle-user-status-edit', function (e) {
          if (!(e.currentTarget instanceof HTMLElement)) return;
          const t = jg(e.currentTarget);
          e.target instanceof HTMLElement && mg(t, !!e.target.closest('.js-toggle-user-status-emoji-picker'));
        }),
        s('click', '.js-toggle-user-status-emoji-picker', function (e) {
          if (!(e.currentTarget instanceof HTMLElement)) return;
          const t = jg(e.currentTarget).querySelector('.js-emoji-picker');
          t instanceof HTMLElement && t.hidden && setTimeout(() => t.open(), 50);
        }),
        s('click', '.js-user-status-emoji-button', function (e) {
          const t = e.currentTarget;
          t instanceof HTMLButtonElement &&
            (function (e) {
              const t = i(e, '.js-user-status-container'),
                n = t.querySelector('.js-emoji-picker');
              pg(t, e), Ti(t), ki(e), fg(t, e), hg(t), n.close();
            })(t);
        }),
        s('click', '.js-emoji-tab', function (e) {
          const t = e.currentTarget;
          t instanceof HTMLElement &&
            (function (e) {
              const t = i(e, '.js-emoji-picker'),
                n = t.querySelector('.js-emoji-picker-filter');
              Ei(t), !t.hidden && n instanceof HTMLInputElement && n.focus();
            })(t);
        }),
        R('.js-user-status-message-field', function (e) {
          dg(jg(e));
        }),
        _('keyup', '.js-user-status-message-field', (e) => {
          const t = e.target;
          t instanceof HTMLInputElement && gg(t, e);
        }),
        _('keyup', '.js-emoji-picker-filter', (e) => {
          const t = e.target;
          t instanceof HTMLInputElement && gg(t, e);
        }),
        s('click', '.js-clear-user-status-button', function (e) {
          const t = e.currentTarget;
          t instanceof HTMLButtonElement &&
            (function (e) {
              (e.hidden = !0),
                (c(e, '.js-user-status-emoji-field', HTMLInputElement).value = ''),
                (c(e, '.js-user-status-no-emoji-icon').hidden = !1),
                (c(e, '.js-user-status-custom-emoji').innerHTML = '');
              const t = c(e, '.js-user-status-message-field', HTMLInputElement);
              (t.value = ''), t.classList.contains('js-characters-remaining-field') && Ts(t);
              const n = e.querySelector('.selected-emoji.js-user-status-emoji-button');
              n && n.classList.remove('selected-emoji'),
                (c(e, '.js-user-status-limited-availability-checkbox', HTMLInputElement).checked = !1);
              const o = e.querySelector('.js-user-status-expiration-date-input');
              o && o instanceof HTMLInputElement && (o.value = ''), hg(e), dg(e);
              const s = c(e, '.js-user-status-form', HTMLFormElement);
              P(s);
            })(i(t, '.js-user-status-container'));
        }),
        s('click', '.js-predefined-user-status', function (e) {
          const t = e.currentTarget;
          t instanceof HTMLButtonElement &&
            (function (e) {
              const t = i(e, '.js-user-status-container'),
                n = c(e, '.js-predefined-user-status-emoji'),
                o = c(e, '.js-predefined-user-status-message'),
                s = c(t, '.js-user-status-message-field', HTMLInputElement);
              (s.value = (o.textContent || '').trim()),
                fg(t, n),
                pg(t, e),
                hg(t),
                dg(t),
                s.classList.contains('js-characters-remaining-field') && Ts(s);
            })(t);
        }),
        N('.js-user-status-message-field', function (e) {
          const t = e.target;
          if (!(t instanceof HTMLElement)) return;
          const n = i(t, '.js-user-status-form');
          hg(n), dg(n);
        }),
        s('click', '.js-user-status-org-button', function (e) {
          const t = e.currentTarget;
          t instanceof HTMLButtonElement &&
            (function (e) {
              const t = i(e, '.js-user-status-container'),
                n = c(t, '.js-user-status-org-id-field', HTMLInputElement),
                o = c(t, '.js-user-status-org-details'),
                s = c(t, '.js-user-status-selected-org'),
                a = c(e, '.js-user-status-org-display'),
                l = c(t, '.js-user-status-org-message'),
                u = e.value,
                d = '' !== u,
                m = c(t, '.js-user-status-message-field', HTMLInputElement),
                f = t.querySelector('.js-user-status-org-button.selected');
              let p = '';
              f && f.classList.remove('selected'), e.classList.add('selected'), (n.value = u), (s.innerHTML = '');
              const g = a.cloneNode(!0);
              if ((g instanceof HTMLElement && (g.hidden = !1), s.appendChild(g), o.removeAttribute('open'), d)) {
                const t = r(l, 'data-prefix'),
                  n = r(l, 'data-suffix'),
                  o = r(e, 'data-org');
                (l.textContent = `${t}${o}${n}`), (l.hidden = !1);
                const s = new URL(r(m, 'data-org-url'), window.location.origin),
                  i = new URLSearchParams(s.search.slice(1));
                i.append('global_id', u), (s.search = i.toString()), (p = s.toString());
              } else (l.textContent = r(l, 'data-none')), (l.hidden = !0), (p = r(m, 'data-no-org-url'));
              i(m, 'text-expander').setAttribute('data-mention-url', p);
            })(t);
        }),
        s('change', '.js-user-status-limited-availability-checkbox', function (e) {
          const t = e.target;
          if (!(t instanceof HTMLInputElement)) return;
          const n = i(t, '.js-user-status-form'),
            o = t.checked,
            s = r(t, 'data-default-message'),
            a = c(n, '.js-user-status-message-field', HTMLInputElement);
          o && a.value.length < 1 ? (a.value = s) : o || a.value !== s || (a.value = ''), hg(n), dg(n);
        }),
        D('.js-user-status-form', async function (e, t) {
          const n = c(e, '.js-user-status-form-group');
          let o;
          n.classList.remove('errored');
          try {
            o = await t.html();
          } catch (u) {
            return void n.classList.add('errored');
          }
          const s = i(e, '.js-user-status-container'),
            a = o.html.querySelector('.js-user-status-container');
          s.replaceWith(o.html);
          const l = document.querySelectorAll('.js-user-status-container');
          for (const i of l)
            if (a !== i) {
              const e = i.closest('.js-user-status-context');
              if (e) {
                const t = r(e, 'data-url'),
                  n = await Q(document, t);
                i.replaceWith(n);
              }
            }
        }),
        n('.js-toggle-user-status-edit', function (e) {
          e.addEventListener('mouseenter', vg), e.addEventListener('mouseleave', yg);
        }),
        n('.js-emoji-picker', (e) => {
          !(function (e) {
            document.addEventListener('click', (t) => {
              if (t.target instanceof HTMLElement) {
                t.target.closest('.js-emoji-picker') !== e && e.close();
              }
            });
            const t = c(e, '.js-emoji-picker-all-emoji'),
              n = c(e, '.js-emoji-picker-no-results'),
              o = c(e, '.js-emoji-picker-results-header');
            t.addEventListener('fuzzy-list-sorted', (e) => {
              const s = Number(e.detail) > 0;
              (n.hidden = s), (t.hidden = !s), (o.hidden = !s);
            });
          })(e);
        }),
        n('[data-warn-unsaved-changes]', {
          add(e) {
            e.addEventListener('input', Lg), e.addEventListener('change', Lg), e.addEventListener('submit', wg);
            const t = e.closest('details-dialog');
            t && (i(t, 'details').addEventListener('toggle', Tg), t.addEventListener('details-dialog-close', Eg));
          },
          remove(e) {
            e.removeEventListener('input', Lg),
              e.removeEventListener('change', Lg),
              e.removeEventListener('submit', wg);
            const t = e.closest('details-dialog');
            t &&
              (i(t, 'details').removeEventListener('toggle', Tg),
              t.removeEventListener('details-dialog-close', Eg),
              wg());
          },
        }),
        s('submit', '.js-toggle-hidden-codespace-form', function (e) {
          const t = e.currentTarget.querySelectorAll('.js-toggle-hidden');
          for (const o of t) o.hidden = !o.hidden;
          const n = e.currentTarget.querySelectorAll('.js-toggle-disabled');
          for (const o of n)
            o.getAttribute('aria-disabled')
              ? o.removeAttribute('aria-disabled')
              : o.setAttribute('aria-disabled', 'true');
        }),
        s('submit', '.js-prefetch-codespace-location', async function (e) {
          const t = e.currentTarget,
            n = t.querySelector('[name="codespace[location]"]');
          if (!(n instanceof HTMLInputElement)) throw new Error('invariant');
          if ('' !== n.value) return;
          e.preventDefault();
          const o = t.querySelector('button[type=submit]');
          o instanceof HTMLInputElement && (o.disabled = !0);
          const s = t.getAttribute('data-codespace-locations-url');
          if (!s) return;
          const i = await (async function (e) {
            const t = await ie(e);
            if (t) return t.current;
          })(s);
          i && (n.value = i), t.submit();
        });
      const kg = new WeakMap();
      function Sg(e) {
        const t = i(e, '.js-repository-advisory-form-container'),
          n = c(t, '.js-advisory-credits-blankslate'),
          o = a(e, '.js-advisory-credit-row').every((e) => e.hidden);
        (e.hidden = o), (n.hidden = !o);
      }
      s('click', '.js-markdown-link-button', async function ({ currentTarget: e }) {
        const t = c(document, '.js-markdown-link-dialog', HTMLTemplateElement).content.cloneNode(!0);
        if (!(t instanceof DocumentFragment)) return;
        const n = await ee({
          content: t,
        });
        e instanceof HTMLElement &&
          kg.set(
            n,
            (function (e) {
              const t = i(e, 'markdown-toolbar', q).field;
              if (!t) throw new Error('invariant: textarea');
              return t;
            })(e).selectionEnd,
          );
      }),
        s('click', '.js-markdown-link-insert', ({ currentTarget: e }) => {
          const t = i(e, 'details-dialog'),
            n = c(document, `#${r(e, 'data-for-textarea')}`, HTMLTextAreaElement),
            o = kg.get(t) || 0,
            s = c(t, '#js-dialog-link-href', HTMLInputElement).value,
            a = `[${c(t, '#js-dialog-link-text', HTMLInputElement).value}](${s}) `,
            l = n.value.slice(0, o),
            u = n.value.slice(o);
          (n.value = l + a + u), n.focus(), (n.selectionStart = n.selectionEnd = o + a.length);
        }),
        D('.js-repository-advisory-title-update', async function (e, t) {
          i(e, '.js-details-container').classList.remove('open');
          const n = (await t.json()).json;
          document.title = n.page_title;
          for (const o of e.elements)
            (o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement) && (o.defaultValue = o.value);
        }),
        D('.js-add-repository-advisory-collaborator', async function (e, t) {
          t.html(), e.reset();
        }),
        s(
          'details-menu-selected',
          '.js-advisory-menu',
          function (e) {
            const t = e.detail.relatedTarget,
              n = r(t, 'data-advisory-info-show'),
              o = a(document, '.js-show-if-publishing, .js-show-if-requesting-cve');
            for (const s of o) s.hidden = !s.classList.contains(n);
          },
          {
            capture: !0,
          },
        ),
        D('.js-repository-advisory-add-credit-form', async function (e, t) {
          const n = i(e, '.js-repository-advisory-form-container');
          (c(n, '.js-add-credit-button', HTMLButtonElement).disabled = !0), e.reset();
          const o = await t.html();
          o &&
            (function (e, t) {
              const n = c(t.html, '.js-advisory-credit-row'),
                o = n.getAttribute('data-recipient-id'),
                s = c(e, '.js-advisory-credits-list'),
                i = s.querySelector(`.js-advisory-credit-row[data-recipient-id='${o}']`);
              if (i) {
                const e = c(i, '.js-advisory-credit-destroy-field', HTMLInputElement);
                i.hidden || i.classList.add('user-already-added'), (e.value = 'false'), (i.hidden = !1);
              } else {
                const t = c(e, '.js-next-credit-index-field', HTMLInputElement);
                s.append(n), (t.value = String(Number(t.value) + 1));
              }
              Sg(s);
            })(n, o);
        }),
        s('click', '.js-advisory-credit-remove-button', function (e) {
          !(function (e) {
            const t = c(e, '.js-advisory-credit-destroy-field', HTMLInputElement),
              n = i(e, '.js-advisory-credits-list');
            (t.value = 'true'), (e.hidden = !0), e.classList.remove('user-already-added'), Sg(n);
          })(i(e.currentTarget, '.js-advisory-credit-row'));
        }),
        s('click', '.js-repository-advisory-credit-popover-edit-button', function (e) {
          const t = e.target;
          if (!t) return;
          const n = i(t, 'form');
          P(n);
        });
      let Mg = !1;
      function xg(e) {
        const t = document.importNode(e.content, !0),
          n = c(document, '#js-flash-container');
        for (const o of n.children) n.removeChild(o);
        n.appendChild(t);
      }
      function Ag() {
        for (const e of document.querySelectorAll('.js-selected-check-run')) e.remove();
        (c(document, '.js-zen-blankslate').hidden = !1), (Mg = !0);
      }
      D('.js-check-suite-rerequest-form', async function (e, t) {
        const n = e.closest('details');
        if (!n) return;
        n.removeAttribute('open');
        const o = document.querySelector('#js-selected-check-run');
        if (null !== o) {
          const t = 'true' === c(e, 'input[name=only_failed_check_runs]', HTMLInputElement).value,
            n = 'true' === r(o, 'data-failed');
          (t && !n) || Ag();
        }
        try {
          await t.text(), xg(c(document, '#js-check-suite-rerequest-form-success', HTMLTemplateElement));
        } catch (s) {
          throw (xg(c(document, '#js-check-suite-rerequest-form-error', HTMLTemplateElement)), s);
        }
      }),
        D('.js-check-run-rerequest-form', async function (e, t) {
          (Mg = !0), c(document, '#js-selected-check-run').contains(e) && Ag();
          try {
            await t.text(), xg(c(e, '.js-check-run-rerequest-form-success', HTMLTemplateElement));
          } catch (n) {
            throw (xg(c(e, '.js-check-run-rerequest-form-error', HTMLTemplateElement)), n);
          }
        }),
        n('.js-latest-run-link', {
          constructor: HTMLElement,
          add(e) {
            Mg && e.click();
          },
        }),
        s('click', '.js-timeout-flash-close', function (e) {
          e.target instanceof HTMLElement && (i(e.target, '.js-interactive-component-timeout').hidden = !0);
        }),
        s('click', '.js-interactive-component-button', function (e) {
          const t = e.target;
          if (t instanceof HTMLButtonElement) {
            const e = t.querySelector('.js-loading-spinner');
            e instanceof HTMLElement && (e.hidden = !1);
          }
        }),
        D('.js-interactive-component-form', async function (e, t) {
          const n = c(e, '.js-interactive-component-timeout'),
            o = i(e, '.js-component-container');
          if (n) {
            n.hidden = !0;
            const t = a(o, '.js-interactive-component-button', HTMLButtonElement);
            for (const e of t) e.disabled = !0;
            const s = parseInt(r(e, 'data-timeout'));
            setTimeout(() => {
              if (n) {
                n.hidden = !1;
                const e = a(o, '.js-interactive-component-button[disabled]', HTMLButtonElement);
                for (const t of e) {
                  t.disabled = !1;
                  const e = t.querySelector('.loading-spinner');
                  e instanceof HTMLElement && (e.hidden = !0);
                }
              }
            }, s);
          }
          await t.text();
        }),
        s(
          'click',
          ['form button:not([type])', 'form button[type=submit]', 'form input[type=submit]'].join(', '),
          function (e) {
            const t = e.currentTarget;
            t.form && !e.defaultPrevented && kt(t);
          },
        ),
        D('form[data-remote]', function (e, t, n) {
          'json' === e.getAttribute('data-type') && n.headers.set('Accept', 'application/json'),
            u(e, 'deprecatedAjaxSend', {
              request: n,
            }),
            t
              .text()
              .catch((e) => {
                if (e.response) return e.response;
                throw e;
              })
              .then(
                (t) => {
                  t.status < 300
                    ? u(e, 'deprecatedAjaxSuccess')
                    : u(e, 'deprecatedAjaxError', {
                        error: t.statusText,
                        status: t.status,
                        text: t.text,
                      });
                },
                (t) => {
                  u(e, 'deprecatedAjaxError', {
                    error: t.message,
                    status: 0,
                    text: null,
                  });
                },
              )
              .then(() => {
                u(e, 'deprecatedAjaxComplete');
              });
        }),
        s('deprecatedAjaxComplete', 'form', function ({ currentTarget: e }) {
          const t = St(e);
          t && t.remove();
        }),
        se((e) => {
          const t = St(e);
          t && t.remove();
        }),
        Mt(re);
    },
  };
});
//# sourceMappingURL=github-bootstrap-0505f489.js.map
