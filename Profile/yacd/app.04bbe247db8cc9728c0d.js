(self.webpackChunkyacd = self.webpackChunkyacd || []).push([
  [143],
  {
    50497: function (e, n, t) {
      "use strict";
      t.d(n, {
        T: function () {
          return f;
        },
        w: function () {
          return h;
        },
      });
      t(41539), t(88674);
      var r = t(96156),
        o = t(87757),
        i = t.n(o),
        c = (t(35666), t(92137)),
        s = t(97943);
      function a(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function u(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? a(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var l = "/configs";
      function f(e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = (0, c.Z)(
          i().mark(function e(n) {
            var t, r, o;
            return i().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = (0, s.g)(n)),
                      (r = t.url),
                      (o = t.init),
                      (e.next = 3),
                      fetch(r + l, o)
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function d(e) {
        return "socks-port" in e && (e["socket-port"] = e["socks-port"]), e;
      }
      function h(e, n) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = (0, c.Z)(
          i().mark(function e(n, t) {
            var r, o, c, a;
            return i().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = (0, s.g)(n)),
                      (o = r.url),
                      (c = r.init),
                      (a = JSON.stringify(d(t))),
                      (e.next = 4),
                      fetch(
                        o + l,
                        u(u({}, c), {}, { body: a, method: "PATCH" })
                      )
                    );
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    97750: function (e, n, t) {
      "use strict";
      t.d(n, {
        rQ: function () {
          return d;
        },
        PI: function () {
          return v;
        },
        $K: function () {
          return g;
        },
        Sm: function () {
          return y;
        },
      });
      t(89554), t(82772), t(40561), t(41539), t(88674);
      var r = t(87757),
        o = t.n(r),
        i = t(96156),
        c = (t(35666), t(92137)),
        s = t(97943);
      function a(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function u(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? a(Object(t), !0).forEach(function (n) {
                (0, i.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var l,
        f = "/connections",
        p = [];
      function d(e, n) {
        if (1 === l && n) return h(n);
        l = 1;
        var t = (0, s.P)(e, f),
          r = new WebSocket(t);
        return (
          r.addEventListener("error", function () {
            return (l = 3);
          }),
          r.addEventListener("message", function (e) {
            return (function (e) {
              var n;
              try {
                n = JSON.parse(e);
              } catch (n) {
                console.log("JSON.parse error", JSON.parse(e));
              }
              p.forEach(function (e) {
                return e(n);
              });
            })(e.data);
          }),
          n ? h(n) : void 0
        );
      }
      function h(e) {
        return (
          p.push(e),
          function () {
            var n = p.indexOf(e);
            p.splice(n, 1);
          }
        );
      }
      function v(e) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = (0, c.Z)(
          o().mark(function e(n) {
            var t, r, i;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = (0, s.g)(n)),
                      (r = t.url),
                      (i = t.init),
                      (e.next = 3),
                      fetch(r + f, u(u({}, i), {}, { method: "DELETE" }))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function g(e) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = (0, c.Z)(
          o().mark(function e(n) {
            var t, r, i;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = (0, s.g)(n)),
                      (r = t.url),
                      (i = t.init),
                      (e.next = 3),
                      fetch(r + f, u({}, i))
                    );
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function y(e, n) {
        return j.apply(this, arguments);
      }
      function j() {
        return (j = (0, c.Z)(
          o().mark(function e(n, t) {
            var r, i, c, a;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = (0, s.g)(n)),
                      (i = r.url),
                      (c = r.init),
                      (a = `${i}${f}/${t}`),
                      (e.next = 4),
                      fetch(a, u(u({}, c), {}, { method: "DELETE" }))
                    );
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    41289: function (e, n, t) {
      "use strict";
      t.d(n, {
        r: function () {
          return d;
        },
      });
      t(89554), t(82772), t(40561), t(41539), t(88674), t(23123), t(54747);
      var r,
        o = t(97943),
        i = "/traffic",
        c = new TextDecoder("utf-8"),
        s = 150,
        a = {
          labels: Array(s),
          up: Array(s),
          down: Array(s),
          size: s,
          subscribers: [],
          appendData(e) {
            this.up.push(e.up), this.down.push(e.down);
            var n = new Date(),
              t = "" + n.getMinutes() + n.getSeconds();
            this.labels.push(t),
              this.up.length > this.size && this.up.shift(),
              this.down.length > this.size && this.down.shift(),
              this.labels.length > this.size && this.labels.shift(),
              this.subscribers.forEach(function (n) {
                return n(e);
              });
          },
          subscribe(e) {
            var n = this;
            return (
              this.subscribers.push(e),
              function () {
                var t = n.subscribers.indexOf(e);
                n.subscribers.splice(t, 1);
              }
            );
          },
        },
        u = !1,
        l = "";
      function f(e) {
        a.appendData(JSON.parse(e));
      }
      function p(e) {
        return e.read().then(function (n) {
          for (
            var t = n.done,
              r = n.value,
              o = c.decode(r, { stream: !t }),
              i = (l += o).split("\n"),
              s = i[i.length - 1],
              a = 0;
            a < i.length - 1;
            a++
          )
            f(i[a]);
          return t
            ? (f(s),
              (l = ""),
              console.log("GET /traffic streaming done"),
              void (u = !1))
            : ((l = s), p(e));
        });
      }
      function d(e) {
        if (u || 1 === r) return a;
        r = 1;
        var n = (0, o.P)(e, i),
          t = new WebSocket(n);
        return (
          t.addEventListener("error", function (e) {
            r = 3;
          }),
          t.addEventListener("close", function (n) {
            (r = 3),
              (function (e) {
                if (u) return a;
                u = !0;
                var n = (0, o.g)(e),
                  t = n.url,
                  r = n.init;
                fetch(t + i, r).then(
                  function (e) {
                    e.ok ? p(e.body.getReader()) : (u = !1);
                  },
                  function (e) {
                    console.log("fetch /traffic error", e), (u = !1);
                  }
                );
              })(e);
          }),
          t.addEventListener("message", function (e) {
            f(e.data);
          }),
          a
        );
      }
    },
    10028: function (e, n, t) {
      "use strict";
      var r = t(85893),
        o = (t(41539), t(88674), t(47412)),
        i = t(37110),
        c = t(83554),
        s = t(68718),
        a = {
          zh: t.e(965).then(t.bind(t, 19965)),
          en: t.e(36).then(t.bind(t, 66036)),
        };
      o.Z.use(c.Z)
        .use(s.Db)
        .use(i.Z)
        .init({
          debug: !1,
          backend: {
            loadPath: "/__{{lng}}/{{ns}}.json",
            request: function (e, n, t, r) {
              var o;
              switch (n) {
                case "/__zh/translation.json":
                case "/__zh-CN/translation.json":
                  o = a.zh;
                  break;
                case "/__en/translation.json":
                default:
                  o = a.en;
              }
              o &&
                o.then(function (e) {
                  r(null, { status: 200, data: e.data });
                });
            },
          },
          supportedLngs: ["en", "zh-CN"],
          fallbackLng: "en",
          interpolation: { escapeValue: !1 },
        });
      var u = t(67294),
        l = t(73935),
        f = t(83253),
        p = t.n(f),
        d = (t(57327), t(39711)),
        h = t(96974),
        v = t(2804),
        b = t(46702),
        g = t(29326),
        x = t(87757),
        y = t.n(x),
        j = (t(35666), t(92137)),
        m = t(97943);
      function w(e, n) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = (0, j.Z)(
          y().mark(function e(n, t) {
            var r, o, i, c, s;
            return y().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = {}),
                        (e.prev = 1),
                        (o = (0, m.g)(t)),
                        (i = o.url),
                        (c = o.init),
                        (e.next = 5),
                        fetch(i + n, c)
                      );
                    case 5:
                      if (!(s = e.sent).ok) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 9), s.json();
                    case 9:
                      r = e.sent;
                    case 10:
                      e.next = 15;
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t0 = e.catch(1)),
                        console.log("failed to fetch " + n, e.t0);
                    case 15:
                      return e.abrupt("return", r);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 12]]
            );
          })
        )).apply(this, arguments);
      }
      var P = t(82569),
        C = t(85295),
        k = t(6055),
        Z = "cHbZy_rAHf",
        N = "_2SNe_x81Ib",
        S = "LUI6m76ply";
      function D(e) {
        var n = e.name,
          t = e.link,
          o = e.version;
        return (0, r.jsxs)("div", {
          className: Z,
          children: [
            (0, r.jsx)("h2", { children: n }),
            (0, r.jsxs)("p", {
              children: [
                (0, r.jsx)("span", { children: "Version " }),
                (0, r.jsx)("span", { className: N, children: o }),
              ],
            }),
            (0, r.jsx)("p", {
              children: (0, r.jsxs)("a", {
                className: S,
                href: t,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  (0, r.jsx)(b.Z, { size: 20 }),
                  (0, r.jsx)("span", { children: "Source" }),
                ],
              }),
            }),
          ],
        });
      }
      var E = (0, C.$j)(function (e) {
          return { apiConfig: (0, k.Y$)(e) };
        })(function (e) {
          var n = (0, g.aM)(["/version", e.apiConfig], w, { suspense: !0 })
            .data;
          return (0,
          r.jsxs)(r.Fragment, { children: [(0, r.jsx)(P.Z, { title: "About" }), n && n.version ? (0, r.jsx)(D, { name: "Clash", version: n.version, link: "https://github.com/Dreamacro/clash" }) : null, (0, r.jsx)(D, { name: "Yacd", version: "0.2.13", link: "https://github.com/haishanh/yacd" })] });
        }),
        L = (t(66992), t(33948), t(60285), t(64593));
      var R = (0, C.$j)(function (e) {
          return { apiConfig: (0, k.Y$)(e) };
        })(function (e) {
          var n = e.apiConfig,
            t = "yacd";
          try {
            t = new URL(n.baseURL).host;
          } catch (e) {}
          return (0,
          r.jsx)(L.q, { children: (0, r.jsx)("title", { children: t }) });
        }),
        I = t(92669),
        A = t(49522),
        T = t(81125),
        U = t(71218),
        _ = {
          app: (0, k.E3)(),
          modals: T.E3,
          configs: I.E3,
          proxies: U.E3,
          logs: A.E3,
        },
        $ = {
          selectChartStyleIndex: k.Pw,
          updateAppConfig: k.N,
          app: {
            updateCollapsibleIsOpen: k.iB,
            updateAppConfig: k.N,
            removeClashAPIConfig: k.aj,
            selectClashAPIConfig: k.O4,
          },
          proxies: U.Nw,
        },
        M = t(34699),
        B = t(50497),
        F = (t(21249), t(86010)),
        z = t(44309),
        W = t(12590),
        q = t(78268),
        J = u.useState,
        G = u.useCallback;
      var V = {
          ul: "_1MP9tbO2C9",
          li: "_39O4-s-qNw",
          close: "_3U13UgV7Z1",
          eye: "ipx6os2H89",
          hasSecret: "_3GP8CDySTd",
          url: "PK8GjRW5ZI",
          secret: "_2-iwpHoCB6",
          btn: "S1-PNvCcRP",
        },
        H = (0, C.$j)(function (e) {
          return {
            apiConfigs: (0, k.AJ)(e),
            selectedClashAPIConfigIndex: (0, k.I4)(e),
          };
        })(function (e) {
          var n = e.apiConfigs,
            t = e.selectedClashAPIConfigIndex,
            o = (0, C.WX)().app,
            i = o.removeClashAPIConfig,
            c = o.selectClashAPIConfig,
            s = u.useCallback(
              function (e) {
                i(e);
              },
              [i]
            ),
            a = u.useCallback(
              function (e) {
                c(e);
              },
              [c]
            );
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsx)("ul", {
              className: V.ul,
              children: n.map(function (e, n) {
                return (0,
                r.jsx)("li", { className: (0, F.Z)(V.li, { [V.hasSecret]: e.secret, [V.isSelected]: n === t }), children: (0, r.jsx)(Y, { disableRemove: n === t, baseURL: e.baseURL, secret: e.secret, onRemove: s, onSelect: a }) }, e.baseURL + e.secret);
              }),
            }),
          });
        });
      function Y(e) {
        var n = e.baseURL,
          t = e.secret,
          o = e.disableRemove,
          i = e.onRemove,
          c = e.onSelect,
          s = (function () {
            var e = J(
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              ),
              n = (0, M.Z)(e, 2),
              t = n[0],
              r = n[1],
              o = G(function () {
                return r(function (e) {
                  return !e;
                });
              }, []);
            return [t, o];
          })(),
          a = (0, M.Z)(s, 2),
          l = a[0],
          f = a[1],
          p = l ? z.Z : W.Z,
          d = u.useCallback(function (e) {
            e.stopPropagation();
          }, []);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(Q, {
              disabled: o,
              onClick: function () {
                return i({ baseURL: n, secret: t });
              },
              className: V.close,
              children: (0, r.jsx)(q.Z, { size: 20 }),
            }),
            (0, r.jsx)("span", {
              className: V.url,
              tabIndex: 0,
              role: "button",
              onClick: function () {
                return c({ baseURL: n, secret: t });
              },
              onKeyUp: d,
              children: n,
            }),
            (0, r.jsx)("span", {}),
            t
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("span", {
                      className: V.secret,
                      children: l ? t : "***",
                    }),
                    (0, r.jsx)(Q, {
                      onClick: f,
                      className: V.eye,
                      children: (0, r.jsx)(p, { size: 20 }),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      function Q(e) {
        var n = e.children,
          t = e.onClick,
          o = e.className,
          i = e.disabled;
        return (0, r.jsx)("button", {
          disabled: i,
          className: (0, F.Z)(o, V.btn),
          onClick: t,
          children: n,
        });
      }
      var K = "_2-70itbuF1",
        X = "JKE-0c5hxF",
        ee = "o2VhY_cs6Z",
        ne = "_3QDGxJ_pWs",
        te = "tTZzzcEsTA",
        re = "_2cCgtjpQZP",
        oe = "_3OT00Mqmrw",
        ie = t(25904),
        ce = t(96156),
        se = t(17375),
        ae = "_2uN43zExEi",
        ue = "_2gQ0j5OHC8";
      function le(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function fe(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? le(Object(t), !0).forEach(function (n) {
                (0, ce.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : le(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var pe = u.useCallback;
      function de(e) {
        var n = e.id,
          t = e.label,
          o = e.value,
          i = e.onChange,
          c = (0, se.Z)(e, ["id", "label", "value", "onChange"]),
          s = pe(
            function (e) {
              return i(e);
            },
            [i]
          ),
          a = (0, F.Z)({ [ue]: "string" == typeof o && "" !== o });
        return (0, r.jsxs)("div", {
          className: ae,
          children: [
            (0, r.jsx)("input", fe({ id: n, value: o, onChange: s }, c)),
            (0, r.jsx)("label", { htmlFor: n, className: a, children: t }),
          ],
        });
      }
      var he = t(4541),
        ve = u.useState,
        be = u.useRef,
        ge = u.useCallback;
      var xe = (0, C.$j)(function (e) {
        return { apiConfig: (0, k.Y$)(e) };
      })(function (e) {
        var n = e.dispatch,
          t = ve(""),
          o = (0, M.Z)(t, 2),
          i = o[0],
          c = o[1],
          s = ve(""),
          a = (0, M.Z)(s, 2),
          u = a[0],
          l = a[1],
          f = ve(""),
          p = (0, M.Z)(f, 2),
          d = p[0],
          h = p[1],
          v = be(!1),
          b = be(null),
          g = ge(function (e) {
            (v.current = !0), h("");
            var n = e.target,
              t = n.name,
              r = n.value;
            switch (t) {
              case "baseURL":
                c(r);
                break;
              case "secret":
                l(r);
                break;
              default:
                throw new Error("unknown input name " + t);
            }
          }, []),
          x = ge(
            function () {
              (function (e) {
                return ye.apply(this, arguments);
              })({ baseURL: i, secret: u }).then(function (e) {
                0 !== e[0] ? h(e[1]) : n((0, k.sv)({ baseURL: i, secret: u }));
              });
            },
            [i, u, n]
          ),
          y = ge(
            function (e) {
              (e.target instanceof Element &&
                (!e.target.tagName ||
                  "INPUT" !== e.target.tagName.toUpperCase())) ||
                ("Enter" === e.key && x());
            },
            [x]
          );
        return (0,
        r.jsxs)("div", { className: K, ref: b, onKeyDown: y, children: [(0, r.jsx)("div", { className: X, children: (0, r.jsx)("div", { className: ee, children: (0, r.jsx)(he.Z, { width: 160, height: 160 }) }) }), (0, r.jsx)("div", { className: ne, children: (0, r.jsxs)("div", { className: te, children: [(0, r.jsx)(de, { id: "baseURL", name: "baseURL", label: "API Base URL", type: "text", value: i, onChange: g }), (0, r.jsx)(de, { id: "secret", name: "secret", label: "Secret(optional)", value: u, type: "text", onChange: g })] }) }), (0, r.jsx)("div", { className: re, children: d || null }), (0, r.jsx)("div", { className: oe, children: (0, r.jsx)(ie.Z, { label: "Add", onClick: x }) }), (0, r.jsx)("div", { style: { height: 20 } }), (0, r.jsx)(H, {})] });
      });
      function ye() {
        return (ye = (0, j.Z)(
          y().mark(function e(n) {
            var t, r;
            return y().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (e.prev = 0), new URL(n.baseURL), (e.next = 11);
                      break;
                    case 4:
                      if (((e.prev = 4), (e.t0 = e.catch(0)), !n.baseURL)) {
                        e.next = 10;
                        break;
                      }
                      if (
                        "http://" === (t = n.baseURL.substring(0, 7)) ||
                        "https:/" === t
                      ) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt("return", [
                        1,
                        "Must starts with http:// or https://",
                      ]);
                    case 10:
                      return e.abrupt("return", [1, "Invalid URL"]);
                    case 11:
                      return (e.prev = 11), (e.next = 14), (0, B.T)(n);
                    case 14:
                      if (!((r = e.sent).status > 399)) {
                        e.next = 17;
                        break;
                      }
                      return e.abrupt("return", [1, r.statusText]);
                    case 17:
                      return e.abrupt("return", [0]);
                    case 20:
                      return (
                        (e.prev = 20),
                        (e.t1 = e.catch(11)),
                        e.abrupt("return", [1, "Failed to connect"])
                      );
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [0, 4],
                [11, 20],
              ]
            );
          })
        )).apply(this, arguments);
      }
      var je = {
        0: {
          message: "Browser not supported!",
          detail:
            'This browser does not support "fetch", please choose another one.',
        },
        default: { message: "Oops, something went wrong!" },
      };
      var me = "_2vs8ks4GvR",
        we = "Z8vSJz0PbL",
        Oe = "EWfRQXOK8M",
        Pe = t(93621);
      function Ce(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function ke(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Ce(Object(t), !0).forEach(function (n) {
                (0, ce.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Ce(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function Ze(e) {
        var n = e.isOpen,
          t = e.onRequestClose,
          o = e.className,
          i = e.overlayClassName,
          c = e.children,
          s = (0, se.Z)(e, [
            "isOpen",
            "onRequestClose",
            "className",
            "overlayClassName",
            "children",
          ]),
          a = (0, F.Z)(o, Pe.Z.content),
          u = (0, F.Z)(i, Pe.Z.overlay);
        return (0, r.jsx)(
          p(),
          ke(
            ke(
              {
                isOpen: n,
                onRequestClose: t,
                className: a,
                overlayClassName: u,
              },
              s
            ),
            {},
            { children: c }
          )
        );
      }
      var Ne = u.memo(Ze),
        Se = u.useCallback,
        De = u.useEffect;
      var Ee = (0, C.$j)(function (e) {
          return { modals: e.modals, apiConfig: (0, k.Y$)(e) };
        })(function (e) {
          var n = e.dispatch,
            t = e.apiConfig,
            o = e.modals;
          if (!window.fetch) {
            var i = je[0].detail,
              c = new Error(i);
            throw ((c.code = 0), c);
          }
          var s = Se(
            function () {
              n((0, T.Mr)("apiConfig"));
            },
            [n]
          );
          return (
            De(
              function () {
                n((0, I.Tj)(t));
              },
              [n, t]
            ),
            (0, r.jsx)(Ne, {
              isOpen: o.apiConfig,
              className: me,
              overlayClassName: Oe,
              shouldCloseOnOverlayClick: !1,
              shouldCloseOnEsc: !1,
              onRequestClose: s,
              children: (0, r.jsx)("div", {
                className: we,
                children: (0, r.jsx)(xe, {}),
              }),
            })
          );
        }),
        Le = (t(92222), t(6610)),
        Re = t(5991),
        Ie = t(63349),
        Ae = t(65255),
        Te = t(46070),
        Ue = t(77608),
        _e = "_113JVByWGF",
        $e = "_1m2ZsnzFvt",
        Me = "_3TKFOM4Tgj";
      function Be() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.width,
          t = void 0 === n ? 24 : n,
          o = e.height,
          i = void 0 === o ? 24 : o;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: t,
          height: i,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: (0, r.jsx)("path", {
            d:
              "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
          }),
        });
      }
      var Fe = function (e) {
        var n = e.message,
          t = e.detail;
        return (0, r.jsxs)("div", {
          className: _e,
          children: [
            (0, r.jsx)("div", {
              className: $e,
              children: (0, r.jsx)(he.Z, { width: 150, height: 150 }),
            }),
            n ? (0, r.jsx)("h1", { children: n }) : null,
            t ? (0, r.jsx)("p", { children: t }) : null,
            (0, r.jsx)("p", {
              children: (0, r.jsxs)("a", {
                className: Me,
                href: "https://github.com/haishanh/yacd/issues",
                children: [
                  (0, r.jsx)(Be, { width: 16, height: 16 }),
                  "haishanh/yacd",
                ],
              }),
            }),
          ],
        });
      };
      function ze(e) {
        var n = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = (0, Ue.Z)(e);
          if (n) {
            var o = (0, Ue.Z)(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return (0, Te.Z)(this, t);
        };
      }
      var We = (function (e) {
          (0, Ae.Z)(t, e);
          var n = ze(t);
          function t() {
            var e;
            (0, Le.Z)(this, t);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              (e = n.call.apply(n, [this].concat(o))),
              (0, ce.Z)((0, Ie.Z)(e), "state", { error: null }),
              e
            );
          }
          return (
            (0, Re.Z)(
              t,
              [
                {
                  key: "render",
                  value: function () {
                    if (this.state.error) {
                      var e =
                          ((o = this.state.error),
                          "number" == typeof (i = o.code) ? je[i] : je.default),
                        n = e.message,
                        t = e.detail;
                      return (0, r.jsx)(Fe, { message: n, detail: t });
                    }
                    return this.props.children;
                    var o, i;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
              ]
            ),
            t
          );
        })(u.Component),
        qe = t(64478),
        Je = { root: "_2kr0S-YLqE" },
        Ge = "_12V5kDiPEH",
        Ve = "_2FcudZSVil",
        He = function (e) {
          var n = e.height,
            t = n ? { height: n } : {};
          return (0, r.jsx)("div", {
            className: Ge,
            style: t,
            children: (0, r.jsx)("div", { className: Ve }),
          });
        },
        Ye = t(41289),
        Qe = t(66728),
        Ke = t(35227);
      function Xe(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function en(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Xe(Object(t), !0).forEach(function (n) {
                (0, ce.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Xe(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var nn = u.useMemo,
        tn = { position: "relative", maxWidth: 1e3 },
        rn = (0, C.$j)(function (e) {
          return {
            apiConfig: (0, k.Y$)(e),
            selectedChartStyleIndex: (0, k.AM)(e),
          };
        })(function (e) {
          var n = e.apiConfig,
            t = e.selectedChartStyleIndex,
            o = Ke.A8.read(),
            i = (0, Ye.r)(n),
            c = (0, qe.$)().t,
            s = nn(
              function () {
                return {
                  labels: i.labels,
                  datasets: [
                    en(
                      en(en({}, Ke.IE), Ke.Eu[t].up),
                      {},
                      { label: c("Up"), data: i.up }
                    ),
                    en(
                      en(en({}, Ke.IE), Ke.Eu[t].down),
                      {},
                      { label: c("Down"), data: i.down }
                    ),
                  ],
                };
              },
              [i, t, c]
            );
          return (
            (0, Qe.Z)(o, "trafficChart", s, i),
            (0, r.jsx)("div", {
              style: tn,
              children: (0, r.jsx)("canvas", { id: "trafficChart" }),
            })
          );
        });
      var on = t(97750),
        cn = t(11534),
        sn = "_2n4kL7wLDR",
        an = u.useState,
        un = u.useEffect,
        ln = u.useCallback,
        fn = (0, C.$j)(function (e) {
          return { apiConfig: (0, k.Y$)(e) };
        })(function (e) {
          var n = e.apiConfig,
            t = (0, qe.$)().t,
            o = (function (e) {
              var n = an({ upStr: "0 B/s", downStr: "0 B/s" }),
                t = (0, M.Z)(n, 2),
                r = t[0],
                o = t[1];
              return (
                un(
                  function () {
                    return (0, Ye.r)(e).subscribe(function (e) {
                      return o({
                        upStr: (0, cn.Z)(e.up) + "/s",
                        downStr: (0, cn.Z)(e.down) + "/s",
                      });
                    });
                  },
                  [e]
                ),
                r
              );
            })(n),
            i = o.upStr,
            c = o.downStr,
            s = (function (e) {
              var n = an({ upTotal: "0 B", dlTotal: "0 B", connNumber: 0 }),
                t = (0, M.Z)(n, 2),
                r = t[0],
                o = t[1],
                i = ln(
                  function (e) {
                    var n = e.downloadTotal,
                      t = e.uploadTotal,
                      r = e.connections;
                    o({
                      upTotal: (0, cn.Z)(t),
                      dlTotal: (0, cn.Z)(n),
                      connNumber: r.length,
                    });
                  },
                  [o]
                );
              return (
                un(
                  function () {
                    return on.rQ(e, i);
                  },
                  [e, i]
                ),
                r
              );
            })(n),
            a = s.upTotal,
            u = s.dlTotal,
            l = s.connNumber;
          return (0,
          r.jsxs)("div", { className: sn, children: [(0, r.jsxs)("div", { className: "sec", children: [(0, r.jsx)("div", { children: t("Upload") }), (0, r.jsx)("div", { children: i })] }), (0, r.jsxs)("div", { className: "sec", children: [(0, r.jsx)("div", { children: t("Download") }), (0, r.jsx)("div", { children: c })] }), (0, r.jsxs)("div", { className: "sec", children: [(0, r.jsx)("div", { children: t("Upload Total") }), (0, r.jsx)("div", { children: a })] }), (0, r.jsxs)("div", { className: "sec", children: [(0, r.jsx)("div", { children: t("Download Total") }), (0, r.jsx)("div", { children: u })] }), (0, r.jsxs)("div", { className: "sec", children: [(0, r.jsx)("div", { children: t("Active Connections") }), (0, r.jsx)("div", { children: l })] })] });
        });
      function pn() {
        var e = (0, qe.$)().t;
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)(P.Z, { title: e("Overview") }),
            (0, r.jsxs)("div", {
              className: Je.root,
              children: [
                (0, r.jsx)("div", { children: (0, r.jsx)(fn, {}) }),
                (0, r.jsx)("div", {
                  className: Je.chart,
                  children: (0, r.jsx)(u.Suspense, {
                    fallback: (0, r.jsx)(He, { height: "200px" }),
                    children: (0, r.jsx)(rn, {}),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var dn = "_2fg1R7Zu62";
      var hn = function () {
          return (0, r.jsx)("div", {
            className: dn,
            children: (0, r.jsx)(he.Z, {
              width: 280,
              height: 280,
              animate: !0,
              c0: "transparent",
              c1: "#646464",
            }),
          });
        },
        vn = "_1X99PPGcn7",
        bn = "_2oV8uPP0dj",
        gn = t(86756),
        xn = t(73973),
        yn = t(59467),
        jn = t(88757),
        mn = "_3sTuXodYya",
        wn = "_1WdrygzFVZ",
        On = "q9nBJwAvlz",
        Pn = "_3yqSXpep4D",
        Cn = "_3wqPc_btNi",
        kn = "_2sd59kze-t",
        Zn = "_2o6aUGu--S",
        Nn = "_11NITPe4W7",
        Sn = "_1kzEILbWHq",
        Dn = u.useCallback,
        En = {
          activity: yn.o_x,
          globe: yn.XUT,
          command: yn.e71,
          file: yn.NFo,
          settings: yn.cKh,
          link: yn.wWA,
        },
        Ln = u.memo(function (e) {
          var n = e.isActive,
            t = e.to,
            o = e.iconId,
            i = e.labelText,
            c = En[o],
            s = (0, F.Z)(Pn, n ? Cn : null);
          return (0,
          r.jsxs)(d.rU, { to: t, className: s, children: [(0, r.jsx)(c, {}), (0, r.jsx)("div", { className: kn, children: i })] });
        }),
        Rn = [
          { to: "/", iconId: "activity", labelText: "Overview" },
          { to: "/proxies", iconId: "globe", labelText: "Proxies" },
          { to: "/rules", iconId: "command", labelText: "Rules" },
          { to: "/connections", iconId: "link", labelText: "Conns" },
          { to: "/configs", iconId: "settings", labelText: "Config" },
          { to: "/logs", iconId: "file", labelText: "Logs" },
        ];
      function In() {
        var e = jn.U.read().motion;
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: (0, r.jsx)(e.path, {
            d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
            initial: { rotate: -30 },
            animate: { rotate: 0 },
            transition: { duration: 0.7 },
          }),
        });
      }
      function An() {
        var e = jn.U.read().motion;
        return (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            (0, r.jsx)("circle", { cx: "12", cy: "12", r: "5" }),
            (0, r.jsxs)(e.g, {
              initial: { scale: 0.8 },
              animate: { scale: 1 },
              transition: { duration: 0.7 },
              children: [
                (0, r.jsx)("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
                (0, r.jsx)("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
                (0, r.jsx)("line", {
                  x1: "4.22",
                  y1: "4.22",
                  x2: "5.64",
                  y2: "5.64",
                }),
                (0, r.jsx)("line", {
                  x1: "18.36",
                  y1: "18.36",
                  x2: "19.78",
                  y2: "19.78",
                }),
                (0, r.jsx)("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
                (0, r.jsx)("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
                (0, r.jsx)("line", {
                  x1: "4.22",
                  y1: "19.78",
                  x2: "5.64",
                  y2: "18.36",
                }),
                (0, r.jsx)("line", {
                  x1: "18.36",
                  y1: "5.64",
                  x2: "19.78",
                  y2: "4.22",
                }),
              ],
            }),
          ],
        });
      }
      var Tn = (0, C.$j)(function (e) {
          return { theme: (0, k.gh)(e) };
        })(function (e) {
          var n = e.dispatch,
            t = e.theme,
            o = (0, qe.$)().t,
            i = (0, h.TH)(),
            c = Dn(
              function () {
                n((0, k.tj)());
              },
              [n]
            );
          return (0, r.jsxs)("div", {
            className: mn,
            children: [
              (0, r.jsx)("div", { className: wn }),
              (0, r.jsx)("div", {
                className: On,
                children: Rn.map(function (e) {
                  var n = e.to,
                    t = e.iconId,
                    c = e.labelText;
                  return (0,
                  r.jsx)(Ln, { to: n, isActive: i.pathname === n, iconId: t, labelText: o(c) }, n);
                }),
              }),
              (0, r.jsxs)("div", {
                className: Zn,
                children: [
                  (0, r.jsx)(gn.ZP, {
                    label: o("theme"),
                    "aria-label":
                      "switch to " +
                      ("light" === t ? "dark" : "light") +
                      " theme",
                    children: (0, r.jsx)("button", {
                      className: (0, F.Z)(Nn, Sn),
                      onClick: c,
                      children:
                        "light" === t ? (0, r.jsx)(In, {}) : (0, r.jsx)(An, {}),
                    }),
                  }),
                  (0, r.jsx)(gn.ZP, {
                    label: o("about"),
                    children: (0, r.jsx)(d.rU, {
                      to: "/about",
                      className: Nn,
                      children: (0, r.jsx)(xn.Z, { size: 20 }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        Un = t(34588),
        _n = t(68970),
        $n = t(17132),
        Mn = t(26512),
        Bn = t(97148);
      function Fn(e) {
        var n = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = (0, Ue.Z)(e);
          if (n) {
            var o = (0, Ue.Z)(this).constructor;
            t = Reflect.construct(r, arguments, o);
          } else t = r.apply(this, arguments);
          return (0, Te.Z)(this, t);
        };
      }
      function zn(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function Wn(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? zn(Object(t), !0).forEach(function (n) {
                (0, ce.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : zn(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var qn = function () {},
        Jn = { padding: "20px 0" },
        Gn = [
          { label: "Global", value: "Global" },
          { label: "Rule", value: "Rule" },
          { label: "Direct", value: "Direct" },
        ],
        Vn = function (e) {
          var n = e.children,
            t = e.style;
          return (0, r.jsx)("div", { style: Wn(Wn({}, Jn), t), children: n });
        };
      function Hn() {
        var e = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              n = u.useState(e),
              t = (0, M.Z)(n, 2),
              r = t[0],
              o = t[1],
              i = u.useCallback(function () {
                o(function (e) {
                  return !e;
                });
              }, []);
            return [r, i];
          })(!1),
          n = (0, M.Z)(e, 2),
          t = n[0],
          o = n[1];
        return (0, r.jsx)(Mn.Z, { checked: t, onChange: o });
      }
      u.PureComponent;
      var Yn = (0, u.lazy)(function () {
          return Promise.all([t.e(576), t.e(331), t.e(170)]).then(
            t.bind(t, 64997)
          );
        }),
        Qn = (0, u.lazy)(function () {
          return t.e(497).then(t.bind(t, 9546));
        }),
        Kn = (0, u.lazy)(function () {
          return Promise.all([t.e(237), t.e(507)]).then(t.bind(t, 77098));
        }),
        Xn = (0, u.lazy)(function () {
          return Promise.all([t.e(576), t.e(869), t.e(641)]).then(
            t.bind(t, 18002)
          );
        }),
        et = (0, u.lazy)(function () {
          return Promise.all([t.e(576), t.e(237), t.e(981)]).then(
            t.bind(t, 66008)
          );
        }),
        nt = [
          { path: "/", element: (0, r.jsx)(pn, {}) },
          { path: "/connections", element: (0, r.jsx)(Yn, {}) },
          { path: "/configs", element: (0, r.jsx)(Qn, {}) },
          { path: "/logs", element: (0, r.jsx)(Kn, {}) },
          { path: "/proxies", element: (0, r.jsx)(Xn, {}) },
          { path: "/rules", element: (0, r.jsx)(et, {}) },
          { path: "/about", element: (0, r.jsx)(E, {}) },
          !1,
        ].filter(Boolean);
      function tt() {
        return (0, h.V$)(nt);
      }
      function rt() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(Ee, {}),
            (0, r.jsx)(Tn, {}),
            (0, r.jsx)("div", {
              className: bn,
              children: (0, r.jsx)(u.Suspense, {
                fallback: (0, r.jsx)(hn, {}),
                children: (0, r.jsx)(tt, {}),
              }),
            }),
          ],
        });
      }
      function ot() {
        return (0, h.V$)([
          { path: "/backend", element: (0, r.jsx)(xe, {}) },
          { path: "*", element: (0, r.jsx)(rt, {}) },
        ]);
      }
      var it = function () {
          return (0, r.jsx)(We, {
            children: (0, r.jsx)(v.Wh, {
              children: (0, r.jsx)(C.ZP, {
                initialState: _,
                actions: $,
                children: (0, r.jsx)(d.UT, {
                  children: (0, r.jsxs)("div", {
                    className: vn,
                    children: [
                      (0, r.jsx)(R, {}),
                      (0, r.jsx)(u.Suspense, {
                        fallback: (0, r.jsx)(hn, {}),
                        children: (0, r.jsx)(ot, {}),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        ct =
          (t(82772),
          t(4723),
          Boolean(
            "localhost" === window.location.hostname ||
              "[::1]" === window.location.hostname ||
              window.location.hostname.match(
                /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
              )
          ));
      function st(e, n) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var t = e.installing;
              null != t &&
                (t.onstatechange = function () {
                  "installed" === t.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."
                        ),
                        n && n.onUpdate && n.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        n && n.onSuccess && n.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      var at = document.getElementById("app");
      p().setAppElement(at),
        l.unstable_createRoot(at).render((0, r.jsx)(it, {})),
        (function (e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var n = "/sw.js";
              ct
                ? (!(function (e, n) {
                    fetch(e, { headers: { "Service-Worker": "script" } })
                      .then(function (t) {
                        var r = t.headers.get("content-type");
                        404 === t.status ||
                        (null != r && -1 === r.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : st(e, n);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(n, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker"
                    );
                  }))
                : st(n, e);
            });
          }
        })(),
        console.log("Checkout the repo: https://github.com/haishanh/yacd"),
        console.log("Version:", "0.2.13");
    },
    25904: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var r = t(96156),
        o = t(17375),
        i = t(85893),
        c = t(86010),
        s = t(67294),
        a = "_796AqwOFs_",
        u = "_1bLZvI40oA",
        l = "_1SrCTG7yDt",
        f = "_39VuJRXAmL",
        p = t(17132);
      function d(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function h(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? d(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var v = s.forwardRef,
        b = s.useCallback;
      function g(e) {
        var n = e.children,
          t = e.label,
          r = e.text,
          o = e.start;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            o
              ? (0, i.jsx)("span", {
                  className: l,
                  children: "function" == typeof o ? o() : o,
                })
              : null,
            n || t || r,
          ],
        });
      }
      var x = v(function (e, n) {
        var t = e.onClick,
          r = e.disabled,
          s = void 0 !== r && r,
          l = e.isLoading,
          d = e.kind,
          v = void 0 === d ? "primary" : d,
          x = e.className,
          y = e.children,
          j = e.label,
          m = e.text,
          w = e.start,
          O = (0, o.Z)(e, [
            "onClick",
            "disabled",
            "isLoading",
            "kind",
            "className",
            "children",
            "label",
            "text",
            "start",
          ]),
          P = { children: y, label: j, text: m, start: w },
          C = b(
            function (e) {
              l || (t && t(e));
            },
            [l, t]
          ),
          k = (0, c.Z)(a, { [u]: "minimal" === v }, x);
        return (0,
        i.jsx)("button", h(h({ className: k, ref: n, onClick: C, disabled: s }, O), {}, { children: l ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("span", { style: { display: "inline-flex", opacity: 0 }, children: (0, i.jsx)(g, h({}, P)) }), (0, i.jsx)("span", { className: f, children: (0, i.jsx)(p.M, {}) })] }) : (0, i.jsx)(g, h({}, P)) }));
      });
    },
    82569: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(85893),
        o = t(67294),
        i = "_24ddJm1Q5s",
        c = "B4QNkMu-0t";
      function s(e) {
        var n = e.title;
        return (0, r.jsx)("div", {
          className: i,
          children: (0, r.jsx)("h1", { className: c, children: n }),
        });
      }
      var a = o.memo(s);
    },
    68970: function (e, n, t) {
      "use strict";
      t.d(n, {
        N: function () {
          return b;
        },
        Z: function () {
          return v;
        },
      });
      var r = t(34699),
        o = t(17375),
        i = t(96156),
        c = t(85893),
        s = t(67294),
        a = "_2DECxrOsTa";
      function u(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function l(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? u(Object(t), !0).forEach(function (n) {
                (0, i.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var f = s.useState,
        p = s.useRef,
        d = s.useEffect,
        h = s.useCallback;
      function v(e) {
        return (0, c.jsx)("input", l({ className: a }, e));
      }
      function b(e) {
        var n = e.value,
          t = (0, o.Z)(e, ["value"]),
          i = f(n),
          s = (0, r.Z)(i, 2),
          u = s[0],
          v = s[1],
          b = p(n);
        d(
          function () {
            b.current !== n && v(n), (b.current = n);
          },
          [n]
        );
        var g = h(
          function (e) {
            return v(e.target.value);
          },
          [v]
        );
        return (0, c.jsx)(
          "input",
          l({ className: a, value: u, onChange: g }, t)
        );
      }
    },
    85295: function (e, n, t) {
      "use strict";
      t.d(n, {
        WX: function () {
          return m;
        },
        ZP: function () {
          return w;
        },
        $j: function () {
          return O;
        },
      });
      var r = t(96156),
        o = t(34699),
        i = t(85893),
        c = t(18172),
        s = t(67294);
      function a(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function u(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? a(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      c.Fl(!1);
      var l = s.createContext,
        f = s.memo,
        p = s.useMemo,
        d = s.useRef,
        h = s.useEffect,
        v = s.useCallback,
        b = s.useContext,
        g = s.useState,
        x = l(null),
        y = l(null),
        j = l(null);
      function m() {
        return b(j);
      }
      function w(e) {
        var n = e.initialState,
          t = e.actions,
          r = void 0 === t ? {} : t,
          s = e.children,
          a = d(n),
          u = g(n),
          l = (0, o.Z)(u, 2),
          f = l[0],
          b = l[1],
          m = v(function () {
            return a.current;
          }, []);
        h(
          function () {
            0;
          },
          [m]
        );
        var w = v(
            function (e, n) {
              if ("function" == typeof e) return e(w, m);
              var t = (0, c.ZP)(m(), n);
              t !== a.current && ((a.current = t), b(t));
            },
            [m]
          ),
          O = p(
            function () {
              return C(r, w);
            },
            [r, w]
          );
        return (0, i.jsx)(x.Provider, {
          value: f,
          children: (0, i.jsx)(y.Provider, {
            value: w,
            children: (0, i.jsx)(j.Provider, { value: O, children: s }),
          }),
        });
      }
      function O(e) {
        return function (n) {
          var t = f(n);
          return function (n) {
            var r = b(x),
              o = b(y),
              c = e(r, n),
              s = u(u({ dispatch: o }, n), c);
            return (0, i.jsx)(t, u({}, s));
          };
        };
      }
      function P(e, n) {
        return function () {
          for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
            r[o] = arguments[o];
          return n(e.apply(this, r));
        };
      }
      function C(e, n) {
        var t = {};
        for (var r in e) {
          var o = e[r];
          "function" == typeof o
            ? (t[r] = P(o, n))
            : "object" == typeof o && (t[r] = C(o, n));
        }
        return t;
      }
    },
    4541: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(85893),
        o = t(86010),
        i = (t(67294), "_3MvgliBN_D");
      var c = function (e) {
        var n = e.width,
          t = void 0 === n ? 320 : n,
          c = e.height,
          s = void 0 === c ? 320 : c,
          a = e.animate,
          u = void 0 !== a && a,
          l = e.c0,
          f = void 0 === l ? "currentColor" : l,
          p = e.c1,
          d = void 0 === p ? "#eee" : p,
          h = (0, o.Z)({ [i]: u });
        return (0, r.jsx)("svg", {
          width: t,
          height: s,
          viewBox: "0 0 320 320",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
              (0, r.jsx)("path", {
                d:
                  "M71.689 53.055c9.23-1.487 25.684 27.263 41.411 56.663 18.572-8.017 71.708-7.717 93.775 0 4.714-15.612 31.96-57.405 41.626-56.663 3.992.088 13.07 31.705 23.309 94.96 2.743 16.949 7.537 47.492 14.38 91.63-42.339 17.834-84.37 26.751-126.095 26.751-41.724 0-83.756-8.917-126.095-26.751C52.973 116.244 65.536 54.047 71.689 53.055z",
                stroke: d,
                strokeWidth: "4",
                strokeLinecap: "round",
                fill: f,
                className: h,
              }),
              (0, r.jsx)("circle", {
                fill: d,
                cx: "216.5",
                cy: "181.5",
                r: "14.5",
              }),
              (0, r.jsx)("circle", {
                fill: d,
                cx: "104.5",
                cy: "181.5",
                r: "14.5",
              }),
              (0, r.jsx)("g", {
                stroke: d,
                strokeLinecap: "round",
                strokeWidth: "4",
                children: (0, r.jsx)("path", {
                  d:
                    "M175.568 218.694c-2.494 1.582-5.534 2.207-8.563 1.508-3.029-.7-5.487-2.594-7.035-5.11M143.981 218.694c2.494 1.582 5.534 2.207 8.563 1.508 3.03-.7 5.488-2.594 7.036-5.11",
                }),
              }),
            ],
          }),
        });
      };
    },
    26512: function (e, n, t) {
      "use strict";
      var r = t(85893),
        o = (t(67294), t(59936)),
        i = t(6055),
        c = t(85295);
      n.Z = (0, c.$j)(function (e) {
        return { theme: (0, i.gh)(e) };
      })(function (e) {
        var n = e.checked,
          t = void 0 !== n && n,
          i = e.onChange,
          c = e.theme,
          s = e.name,
          a = "dark" === c ? "#393939" : "#e9e9e9";
        return (0,
        r.jsx)(o.default, { onChange: i, checked: t, uncheckedIcon: !1, checkedIcon: !1, offColor: a, onColor: "#047aff", offHandleColor: "#fff", onHandleColor: "#fff", handleDiameter: 24, height: 28, width: 44, className: "rs", name: s });
      });
    },
    97148: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      t(82772), t(21249);
      var r = t(85893),
        o = t(67294),
        i = "_2IgDTE__bQ",
        c = "_2IfOm9qQ_4";
      function s(e) {
        var n = e.options,
          t = e.value,
          s = e.name,
          a = e.onChange,
          u = (0, o.useMemo)(
            function () {
              return n
                .map(function (e) {
                  return e.value;
                })
                .indexOf(t);
            },
            [n, t]
          ),
          l = (0, o.useCallback)(
            function (e) {
              var t = Math.floor(100 / n.length);
              return e === n.length - 1
                ? 100 - n.length * t + t
                : e > -1
                ? t
                : void 0;
            },
            [n]
          ),
          f = (0, o.useMemo)(
            function () {
              return { width: l(u) + "%", left: u * l(0) + "%" };
            },
            [u, l]
          );
        return (0, r.jsxs)("div", {
          className: i,
          children: [
            (0, r.jsx)("div", { className: c, style: f }),
            n.map(function (e, n) {
              var o = `${s}-${e.label}`,
                i = 0 === n ? "" : "border-left";
              return (0,
              r.jsxs)("label", { htmlFor: o, className: i, style: { width: l(n) + "%" }, children: [(0, r.jsx)("input", { id: o, name: s, type: "radio", value: e.value, checked: t === e.value, onChange: a }), (0, r.jsx)("div", { children: e.label })] }, o);
            }),
          ],
        });
      }
      var a = o.memo(s);
    },
    17132: function (e, n, t) {
      "use strict";
      t.d(n, {
        M: function () {
          return s;
        },
        $: function () {
          return c;
        },
      });
      var r = t(85893),
        o = (t(67294), "Q-CsP5Y3FT"),
        i = "_3GL3LmFL_E";
      function c(e) {
        var n = e.name,
          t = e.type;
        return (0, r.jsxs)("h2", {
          className: o,
          children: [
            (0, r.jsx)("span", { children: n }),
            (0, r.jsx)("span", { children: t }),
          ],
        });
      }
      function s() {
        return (0, r.jsx)("span", { className: i });
      }
    },
    66728: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(96156),
        o = t(67294),
        i = t(35227);
      function c(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function s(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? c(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var a = o.useEffect,
        u = i.SB;
      function l(e, n, t, r) {
        var o =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        a(
          function () {
            var i = document.getElementById(n).getContext("2d"),
              c = new e(i, { type: "line", data: t, options: s(s({}, u), o) }),
              a =
                r &&
                r.subscribe(function () {
                  return c.update();
                });
            return function () {
              a && a(), c.destroy();
            };
          },
          [e, n, t, r, o]
        );
      }
    },
    35227: function (e, n, t) {
      "use strict";
      t.d(n, {
        A8: function () {
          return i;
        },
        IE: function () {
          return c;
        },
        SB: function () {
          return s;
        },
        Eu: function () {
          return a;
        },
      });
      t(41539), t(88674);
      var r = t(4374),
        o = t(11534),
        i = (0, r.unstable_createResource)(function () {
          return t
            .e(736)
            .then(t.t.bind(t, 72037, 23))
            .then(function (e) {
              return e.default;
            });
        }),
        c = { borderWidth: 1, lineTension: 0, pointRadius: 0 },
        s = {
          responsive: !0,
          maintainAspectRatio: !0,
          title: { display: !1 },
          legend: {
            display: !0,
            position: "top",
            labels: { fontColor: "#ccc", boxWidth: 20 },
          },
          tooltips: {
            enabled: !1,
            mode: "index",
            intersect: !1,
            animationDuration: 100,
          },
          hover: { mode: "nearest", intersect: !0 },
          scales: {
            xAxes: [{ display: !1, gridLines: { display: !1 } }],
            yAxes: [
              {
                display: !0,
                gridLines: {
                  display: !0,
                  color: "#555",
                  borderDash: [3, 6],
                  drawBorder: !1,
                },
                ticks: { callback: (e) => (0, o.Z)(e) + "/s " },
              },
            ],
          },
        },
        a = [
          {
            down: {
              backgroundColor: "rgba(176, 209, 132, 0.8)",
              borderColor: "rgb(176, 209, 132)",
            },
            up: {
              backgroundColor: "rgba(181, 220, 231, 0.8)",
              borderColor: "rgb(181, 220, 231)",
            },
          },
          {
            up: {
              backgroundColor: "rgb(98, 190, 100)",
              borderColor: "rgb(78,146,79)",
            },
            down: {
              backgroundColor: "rgb(160, 230, 66)",
              borderColor: "rgb(110, 156, 44)",
            },
          },
          {
            up: {
              backgroundColor: "rgba(94, 175, 223, 0.3)",
              borderColor: "rgb(94, 175, 223)",
            },
            down: {
              backgroundColor: "rgba(139, 227, 195, 0.3)",
              borderColor: "rgb(139, 227, 195)",
            },
          },
          {
            up: {
              backgroundColor: "rgba(242, 174, 62, 0.3)",
              borderColor: "rgb(242, 174, 62)",
            },
            down: {
              backgroundColor: "rgba(69, 154, 248, 0.3)",
              borderColor: "rgb(69, 154, 248)",
            },
          },
        ];
    },
    88757: function (e, n, t) {
      "use strict";
      t.d(n, {
        U: function () {
          return r;
        },
      });
      t(41539), t(88674);
      var r = (function (e) {
        var n = {},
          t = {},
          r = {};
        function o() {
          var o =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "default";
          return (
            (t[o] = e(o)
              .then(function (e) {
                delete t[o], (n[o] = e);
              })
              .catch(function (e) {
                r[o] = e;
              })),
            t[o]
          );
        }
        return {
          preload: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "default";
            void 0 !== n[e] || t[e] || o(e);
          },
          read: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "default";
            if (void 0 !== n[e]) return n[e];
            throw r[e] ? r[e] : t[e] ? t[e] : o(e);
          },
          clear: function (e) {
            e ? delete n[e] : (n = {});
          },
        };
      })(function () {
        return t.e(888).then(t.bind(t, 55888));
      });
    },
    11534: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      function o(e) {
        if (e < 1e3) return e + " B";
        var n = Math.min(Math.floor(Math.log10(e) / 3), r.length - 1);
        return (e = Number((e / Math.pow(1e3, n)).toPrecision(3))) + " " + r[n];
      }
    },
    97943: function (e, n, t) {
      "use strict";
      t.d(n, {
        g: function () {
          return a;
        },
        P: function () {
          return u;
        },
      });
      t(66992), t(41539), t(33948), t(60285);
      var r = t(96156),
        o = t(53062);
      function i(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var c = { "Content-Type": "application/json" };
      function s(e) {
        var n = e.secret,
          t = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {};
              n % 2
                ? i(Object(t), !0).forEach(function (n) {
                    (0, r.Z)(e, n, t[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : i(Object(t)).forEach(function (n) {
                    Object.defineProperty(
                      e,
                      n,
                      Object.getOwnPropertyDescriptor(t, n)
                    );
                  });
            }
            return e;
          })({}, c);
        return n && (t.Authorization = "Bearer " + n), t;
      }
      function a(e) {
        return { url: e.baseURL, init: { headers: s({ secret: e.secret }) } };
      }
      function u(e, n) {
        var t = e.baseURL,
          r = e.secret,
          i = "";
        "string" == typeof r &&
          "" !== r &&
          (i += "?token=" + encodeURIComponent(r));
        var c = new URL(t);
        return (
          "https:" === c.protocol
            ? (c.protocol = "wss:")
            : (c.protocol = "ws:"),
          `${(0, o.Os)(c.href)}${n}${i}`
        );
      }
    },
    53062: function (e, n, t) {
      "use strict";
      t.d(n, {
        Ds: function () {
          return r;
        },
        Os: function () {
          return o;
        },
      });
      t(15306);
      function r(e, n) {
        var t;
        return function () {
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          t && clearTimeout(t),
            (t = setTimeout(function () {
              e.apply(void 0, o);
            }, n));
        };
      }
      function o(e) {
        return e.replace(/\/$/, "");
      }
    },
    6055: function (e, n, t) {
      "use strict";
      t.d(n, {
        sv: function () {
          return k;
        },
        xE: function () {
          return O;
        },
        Y$: function () {
          return h;
        },
        AJ: function () {
          return b;
        },
        VR: function () {
          return j;
        },
        sU: function () {
          return w;
        },
        Bg: function () {
          return y;
        },
        S3: function () {
          return m;
        },
        AM: function () {
          return x;
        },
        I4: function () {
          return v;
        },
        gh: function () {
          return g;
        },
        E3: function () {
          return T;
        },
        aj: function () {
          return Z;
        },
        Pw: function () {
          return L;
        },
        O4: function () {
          return N;
        },
        tj: function () {
          return E;
        },
        N: function () {
          return R;
        },
        iB: function () {
          return I;
        },
      });
      t(92222),
        t(66992),
        t(47042),
        t(41539),
        t(15306),
        t(64765),
        t(23123),
        t(33948),
        t(60285);
      var r = t(96156),
        o = t(34699),
        i = t(87329),
        c = t(87757),
        s = t.n(c),
        a = (t(35666), t(92137)),
        u = "yacd.haishan.me";
      function l(e) {
        try {
          var n = JSON.stringify(e);
          localStorage.setItem(u, n);
        } catch (e) {}
      }
      var f = t(53062);
      t(92669), t(81125);
      function p(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function d(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? p(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var h = function (e) {
          var n = e.app.selectedClashAPIConfigIndex;
          return e.app.clashAPIConfigs[n];
        },
        v = function (e) {
          return e.app.selectedClashAPIConfigIndex;
        },
        b = function (e) {
          return e.app.clashAPIConfigs;
        },
        g = function (e) {
          return e.app.theme;
        },
        x = function (e) {
          return e.app.selectedChartStyleIndex;
        },
        y = function (e) {
          return e.app.latencyTestUrl;
        },
        j = function (e) {
          return e.app.collapsibleIsOpen;
        },
        m = function (e) {
          return e.app.proxySortBy;
        },
        w = function (e) {
          return e.app.hideUnavailableProxies;
        },
        O = function (e) {
          return e.app.autoCloseOldConns;
        },
        P = (0, f.Ds)(l, 600);
      function C(e, n) {
        for (
          var t = n.baseURL, r = n.secret, o = b(e()), i = 0;
          i < o.length;
          i++
        ) {
          var c = o[i];
          if (c.baseURL === t && c.secret === r) return i;
        }
      }
      function k(e) {
        var n = e.baseURL,
          t = e.secret;
        return (function () {
          var e = (0, a.Z)(
            s().mark(function e(r, o) {
              var i;
              return s().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!C(o, { baseURL: n, secret: t })) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      (i = { baseURL: n, secret: t, addedAt: Date.now() }),
                        r("addClashAPIConfig", function (e) {
                          e.app.clashAPIConfigs.push(i);
                        }),
                        l(o().app);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (n, t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function Z(e) {
        var n = e.baseURL,
          t = e.secret;
        return (function () {
          var e = (0, a.Z)(
            s().mark(function e(r, o) {
              var c;
              return s().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (c = C(o, { baseURL: n, secret: t })),
                        r("removeClashAPIConfig", function (e) {
                          e.app.clashAPIConfigs = [].concat(
                            (0, i.Z)(e.app.clashAPIConfigs.slice(0, c)),
                            (0, i.Z)(e.app.clashAPIConfigs.slice(c + 1))
                          );
                        }),
                        l(o().app);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (n, t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function N(e) {
        var n = e.baseURL,
          t = e.secret;
        return (function () {
          var e = (0, a.Z)(
            s().mark(function e(r, o) {
              var i;
              return s().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (i = C(o, { baseURL: n, secret: t })),
                        v(o()) !== i &&
                          r("selectClashAPIConfig", function (e) {
                            e.app.selectedClashAPIConfigIndex = i;
                          }),
                        l(o().app);
                      try {
                        window.location.reload();
                      } catch (e) {}
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (n, t) {
            return e.apply(this, arguments);
          };
        })();
      }
      var S = document.body;
      function D() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "dark";
        "dark" === e
          ? (S.classList.remove("light"), S.classList.add("dark"))
          : (S.classList.remove("dark"), S.classList.add("light"));
      }
      function E() {
        return function (e, n) {
          var t = "light" === g(n()) ? "dark" : "light";
          D(t),
            e("storeSwitchTheme", function (e) {
              e.app.theme = t;
            }),
            l(n().app);
        };
      }
      function L(e) {
        return function (n, t) {
          n("appSelectChartStyleIndex", function (n) {
            n.app.selectedChartStyleIndex = Number(e);
          }),
            l(t().app);
        };
      }
      function R(e, n) {
        return function (t, r) {
          t("appUpdateAppConfig", function (t) {
            t.app[e] = n;
          }),
            l(r().app);
        };
      }
      function I(e, n, t) {
        return function (r, o) {
          r("updateCollapsibleIsOpen", function (r) {
            r.app.collapsibleIsOpen[`${e}:${n}`] = t;
          }),
            P(o().app);
        };
      }
      var A = {
        selectedClashAPIConfigIndex: 0,
        clashAPIConfigs: [
          { baseURL: "http://127.0.0.1:9090", secret: "", addedAt: 0 },
        ],
        latencyTestUrl: "http://www.gstatic.com/generate_204",
        selectedChartStyleIndex: 0,
        theme: "dark",
        collapsibleIsOpen: {},
        proxySortBy: "Natural",
        hideUnavailableProxies: !1,
        autoCloseOldConns: !1,
      };
      function T() {
        var e = (function () {
          try {
            var e = localStorage.getItem(u);
            if (!e) return;
            return JSON.parse(e);
          } catch (e) {
            return;
          }
        })();
        e = d(d({}, A), e);
        var n = (function () {
            var e = window.location.search,
              n = {};
            if ("string" != typeof e || "" === e) return n;
            for (
              var t = e.replace(/^\?/, "").split("&"), r = 0;
              r < t.length;
              r++
            ) {
              var i = t[r].split("="),
                c = (0, o.Z)(i, 2),
                s = c[0],
                a = c[1];
              n[s] = encodeURIComponent(a);
            }
            return n;
          })(),
          t = e.clashAPIConfigs[e.selectedClashAPIConfigIndex];
        if (t) {
          var r = new URL(t.baseURL);
          n.hostname && (r.hostname = n.hostname),
            n.port && (r.port = n.port),
            (t.baseURL = (0, f.Os)(r.href)),
            n.secret && (t.secret = n.secret);
        }
        return (
          ("dark" !== n.theme && "light" !== n.theme) || (e.theme = n.theme),
          D(e.theme),
          e
        );
      }
    },
    92669: function (e, n, t) {
      "use strict";
      t.d(n, {
        G_: function () {
          return p;
        },
        ZO: function () {
          return d;
        },
        Tj: function () {
          return h;
        },
        wf: function () {
          return v;
        },
        E3: function () {
          return b;
        },
      });
      var r = t(96156),
        o = t(87757),
        i = t.n(o),
        c = (t(35666), t(92137)),
        s = t(50497),
        a = t(41289),
        u = t(81125);
      function l(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function f(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? l(Object(t), !0).forEach(function (n) {
                (0, r.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var p = function (e) {
          return e.configs.configs;
        },
        d = function (e) {
          return e.configs.configs["log-level"];
        };
      function h(e) {
        return (function () {
          var n = (0, c.Z)(
            i().mark(function n(t, r) {
              var o, c;
              return i().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.prev = 0), (n.next = 3), s.T(e);
                      case 3:
                        (o = n.sent), (n.next = 10);
                        break;
                      case 6:
                        return (
                          (n.prev = 6),
                          (n.t0 = n.catch(0)),
                          t((0, u.h7)("apiConfig")),
                          n.abrupt("return")
                        );
                      case 10:
                        if (o.ok) {
                          n.next = 14;
                          break;
                        }
                        return (
                          console.log("Error fetch configs", o.statusText),
                          t((0, u.h7)("apiConfig")),
                          n.abrupt("return")
                        );
                      case 14:
                        return (n.next = 16), o.json();
                      case 16:
                        (c = n.sent),
                          t("store/configs#fetchConfigs", function (e) {
                            e.configs.configs = c;
                          }),
                          (i = r()),
                          i.configs.haveFetchedConfig
                            ? a.r(e)
                            : t(function (e) {
                                e(
                                  "store/configs#markHaveFetchedConfig",
                                  function (e) {
                                    e.configs.haveFetchedConfig = !0;
                                  }
                                );
                              });
                      case 20:
                      case "end":
                        return n.stop();
                    }
                  var i;
                },
                n,
                null,
                [[0, 6]]
              );
            })
          );
          return function (e, t) {
            return n.apply(this, arguments);
          };
        })();
      }
      function v(e, n) {
        return (function () {
          var t = (0, c.Z)(
            i().mark(function t(r) {
              return i().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      s
                        .w(e, n)
                        .then(
                          function (e) {
                            !1 === e.ok &&
                              console.log("Error update configs", e.statusText);
                          },
                          function (e) {
                            throw (console.log("Error update configs", e), e);
                          }
                        )
                        .then(function () {
                          r(h(e));
                        }),
                        r("storeConfigsOptimisticUpdateConfigs", function (e) {
                          e.configs.configs = f(f({}, e.configs.configs), n);
                        });
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      var b = {
        configs: {
          port: 7890,
          "socks-port": 7891,
          "redir-port": 0,
          "allow-lan": !1,
          mode: "Rule",
          "log-level": "info",
        },
        haveFetchedConfig: !1,
      };
    },
    49522: function (e, n, t) {
      "use strict";
      t.d(n, {
        Rv: function () {
          return c;
        },
        Xs: function () {
          return s;
        },
        AR: function () {
          return a;
        },
        TH: function () {
          return u;
        },
        E3: function () {
          return l;
        },
      });
      t(57327), t(82772);
      var r = t(22222),
        o = function (e) {
          return e.logs.logs;
        },
        i = function (e) {
          return e.logs.tail;
        },
        c = function (e) {
          return e.logs.searchText;
        },
        s = (0, r.P1)(o, i, c, function (e, n, t) {
          for (var r = [], o = n; o >= 0; o--) r.push(e[o]);
          if (300 === e.length) for (var i = 299; i > n; i--) r.push(e[i]);
          return "" === t
            ? r
            : r.filter(function (e) {
                return e.payload.toLowerCase().indexOf(t) >= 0;
              });
        });
      function a(e) {
        return function (n) {
          n("logsUpdateSearchText", function (n) {
            n.logs.searchText = e.toLowerCase();
          });
        };
      }
      function u(e) {
        return function (n, t) {
          var r = t(),
            c = o(r),
            s = i(r),
            a = s >= 299 ? 0 : s + 1;
          (c[a] = e),
            n("logsAppendLog", function (e) {
              e.logs.tail = a;
            });
        };
      }
      var l = { searchText: "", logs: [], tail: -1 };
    },
    81125: function (e, n, t) {
      "use strict";
      function r(e) {
        return function (n) {
          n("openModal:" + e, function (n) {
            n.modals[e] = !0;
          });
        };
      }
      function o(e) {
        return function (n) {
          n("closeModal:" + e, function (n) {
            n.modals[e] = !1;
          });
        };
      }
      t.d(n, {
        h7: function () {
          return r;
        },
        Mr: function () {
          return o;
        },
        E3: function () {
          return i;
        },
      });
      var i = { apiConfig: !1 };
    },
    71218: function (e, n, t) {
      "use strict";
      t.d(n, {
        SJ: function () {
          return R;
        },
        Nw: function () {
          return te;
        },
        Ry: function () {
          return M;
        },
        sj: function () {
          return A;
        },
        yi: function () {
          return I;
        },
        P_: function () {
          return T;
        },
        a: function () {
          return U;
        },
        DP: function () {
          return $;
        },
        IA: function () {
          return W;
        },
        E3: function () {
          return E;
        },
        RE: function () {
          return re;
        },
        $3: function () {
          return X;
        },
        hU: function () {
          return Y;
        },
        kL: function () {
          return B;
        },
      });
      t(57327),
        t(82772),
        t(66992),
        t(21249),
        t(2707),
        t(41539),
        t(88674),
        t(33948);
      var r = t(87757),
        o = t.n(r),
        i = t(96156),
        c = t(34699),
        s = (t(35666), t(92137)),
        a = t(2804),
        u = t(97750),
        l = t(97943);
      function f(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function p(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? f(Object(t), !0).forEach(function (n) {
                (0, i.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var d = "/proxies";
      function h(e) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = (0, s.Z)(
          o().mark(function e(n) {
            var t, r, i, c;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = (0, l.g)(n)),
                      (r = t.url),
                      (i = t.init),
                      (e.next = 3),
                      fetch(r + d, i)
                    );
                  case 3:
                    return (c = e.sent), (e.next = 6), c.json();
                  case 6:
                    return e.abrupt("return", e.sent);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function b(e, n, t) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, s.Z)(
          o().mark(function e(n, t, r) {
            var i, c, s, a, u;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = { name: r }),
                      (c = (0, l.g)(n)),
                      (s = c.url),
                      (a = c.init),
                      (u = `${s}/proxies/${t}`),
                      (e.next = 5),
                      fetch(
                        u,
                        p(
                          p({}, a),
                          {},
                          { method: "PUT", body: JSON.stringify(i) }
                        )
                      )
                    );
                  case 5:
                    return e.abrupt("return", e.sent);
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function x(e, n) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = (0, s.Z)(
          o().mark(function e(n, t) {
            var r,
              i,
              c,
              s,
              a,
              u = arguments;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r =
                        u.length > 2 && void 0 !== u[2]
                          ? u[2]
                          : "http://www.gstatic.com/generate_204"),
                      (i = (0, l.g)(n)),
                      (c = i.url),
                      (s = i.init),
                      (a = `${c}/proxies/${t}/delay?${
                        "timeout=1000&url=" + r
                      }`),
                      (e.next = 6),
                      fetch(a, s)
                    );
                  case 6:
                    return e.abrupt("return", e.sent);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function j(e) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = (0, s.Z)(
          o().mark(function e(n) {
            var t, r, i, c;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = (0, l.g)(n)),
                      (r = t.url),
                      (i = t.init),
                      (e.next = 3),
                      fetch(r + "/providers/proxies", i)
                    );
                  case 3:
                    if (404 !== (c = e.sent).status) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return", { providers: {} });
                  case 6:
                    return (e.next = 8), c.json();
                  case 8:
                    return e.abrupt("return", e.sent);
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function w(e, n) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = (0, s.Z)(
          o().mark(function e(n, t) {
            var r, i, c, s;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = (0, l.g)(n)),
                      (i = r.url),
                      (c = r.init),
                      (s = p(p({}, c), {}, { method: "PUT" })),
                      (e.next = 4),
                      fetch(i + "/providers/proxies/" + t, s)
                    );
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function P(e, n) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = (0, s.Z)(
          o().mark(function e(n, t) {
            var r, i, c, s;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = (0, l.g)(n)),
                      (i = r.url),
                      (c = r.init),
                      (s = p(p({}, c), {}, { method: "GET" })),
                      (e.next = 4),
                      fetch(i + "/providers/proxies/" + t + "/healthcheck", s)
                    );
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var k = t(6055);
      function Z(e, n) {
        var t;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (t = (function (e, n) {
              if (!e) return;
              if ("string" == typeof e) return N(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === t && e.constructor && (t = e.constructor.name);
              if ("Map" === t || "Set" === t) return Array.from(e);
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return N(e, n);
            })(e)) ||
            (n && e && "number" == typeof e.length)
          ) {
            t && (e = t);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          c = !0,
          s = !1;
        return {
          s: function () {
            t = e[Symbol.iterator]();
          },
          n: function () {
            var e = t.next();
            return (c = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              c || null == t.return || t.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function N(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function S(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function D(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? S(Object(t), !0).forEach(function (n) {
                (0, i.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var E = {
          proxies: {},
          delay: {},
          groupNames: [],
          showModalClosePrevConns: !1,
        },
        L = function () {
          return null;
        },
        R = [
          "Direct",
          "Fallback",
          "Reject",
          "Selector",
          "URLTest",
          "LoadBalance",
          "Unknown",
        ],
        I = function (e) {
          return e.proxies.proxies;
        },
        A = function (e) {
          return e.proxies.delay;
        },
        T = function (e) {
          return e.proxies.groupNames;
        },
        U = function (e) {
          return e.proxies.proxyProviders || [];
        },
        _ = function (e) {
          return e.proxies.dangleProxyNames;
        },
        $ = function (e) {
          return e.proxies.showModalClosePrevConns;
        };
      function M(e) {
        return (function () {
          var n = (0, s.Z)(
            o().mark(function n(t, r) {
              var i,
                s,
                a,
                u,
                l,
                f,
                p,
                d,
                v,
                b,
                g,
                x,
                y,
                m,
                w,
                O,
                P,
                C,
                k,
                N,
                S,
                E,
                L;
              return o().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), Promise.all([h(e), j(e)]);
                    case 2:
                      for (
                        i = n.sent,
                          s = (0, c.Z)(i, 2),
                          a = s[0],
                          u = s[1],
                          l = ne(u.providers),
                          f = l.providers,
                          p = l.proxies,
                          d = D(D({}, p), a.proxies),
                          v = ee(d),
                          b = (0, c.Z)(v, 2),
                          g = b[0],
                          x = b[1],
                          y = A(r()),
                          m = D({}, y),
                          w = 0;
                        w < x.length;
                        w++
                      )
                        (O = x[w]),
                          (P = d[O] || { history: [] }),
                          (C = P.history),
                          (k = C[C.length - 1]) &&
                            "number" == typeof k.delay &&
                            (m[O] = { number: k.delay });
                      (N = []), (S = Z(x));
                      try {
                        for (S.s(); !(E = S.n()).done; )
                          (L = E.value), p[L] || N.push(L);
                      } catch (e) {
                        S.e(e);
                      } finally {
                        S.f();
                      }
                      t("store/proxies#fetchProxies", function (e) {
                        (e.proxies.proxies = d),
                          (e.proxies.groupNames = g),
                          (e.proxies.delay = m),
                          (e.proxies.proxyProviders = f),
                          (e.proxies.dangleProxyNames = N);
                      });
                    case 16:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          );
          return function (e, t) {
            return n.apply(this, arguments);
          };
        })();
      }
      function B(e, n) {
        return (function () {
          var t = (0, s.Z)(
            o().mark(function t(r) {
              return o().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.prev = 0), (t.next = 3), w(e, n);
                      case 3:
                        t.next = 7;
                        break;
                      case 5:
                        (t.prev = 5), (t.t0 = t.catch(0));
                      case 7:
                        r(M(e));
                      case 8:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 5]]
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function F(e, n) {
        return z.apply(this, arguments);
      }
      function z() {
        return (z = (0, s.Z)(
          o().mark(function e(n, t) {
            return o().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), P(n, t);
                    case 3:
                      e.next = 7;
                      break;
                    case 5:
                      (e.prev = 5), (e.t0 = e.catch(0));
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 5]]
            );
          })
        )).apply(this, arguments);
      }
      function W(e, n) {
        return (function () {
          var t = (0, s.Z)(
            o().mark(function t(r) {
              return o().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), F(e, n);
                    case 2:
                      return (t.next = 4), r(M(e));
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function q() {
        return (q = (0, s.Z)(
          o().mark(function e(n, t, r) {
            var i, c, s, a, l, f, p;
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), u.$K(n);
                  case 2:
                    return (
                      (i = e.sent).ok ||
                        console.log(
                          "unable to fetch all connections",
                          i.statusText
                        ),
                      (e.next = 6),
                      i.json()
                    );
                  case 6:
                    (c = e.sent), (s = c.connections), (a = []), (l = Z(s));
                    try {
                      for (l.s(); !(f = l.n()).done; )
                        (p = f.value).chains.indexOf(t) > -1 &&
                          p.chains.indexOf(r) < 0 &&
                          a.push(p.id);
                    } catch (e) {
                      l.e(e);
                    } finally {
                      l.f();
                    }
                    return (
                      (e.next = 13),
                      Promise.all(
                        a.map(function (e) {
                          return u.Sm(n, e).catch(L);
                        })
                      )
                    );
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function J(e, n, t, r, o) {
        return G.apply(this, arguments);
      }
      function G() {
        return (G = (0, s.Z)(
          o().mark(function e(n, t, r, i, c) {
            var s;
            return o().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), b(r, i, c);
                    case 3:
                      if (!1 !== e.sent.ok) {
                        e.next = 6;
                        break;
                      }
                      throw new Error("failed to switch proxy: res.statusText");
                    case 6:
                      e.next = 12;
                      break;
                    case 8:
                      throw (
                        ((e.prev = 8),
                        (e.t0 = e.catch(0)),
                        console.log(e.t0, "failed to swith proxy"),
                        e.t0)
                      );
                    case 12:
                      n(M(r)),
                        (0, k.xE)(t()) &&
                          ((s = I(t())),
                          H(r, s, { groupName: i, itemName: c }));
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8]]
            );
          })
        )).apply(this, arguments);
      }
      function V() {
        return function (e) {
          e("closeModalClosePrevConns", function (e) {
            e.proxies.showModalClosePrevConns = !1;
          });
        };
      }
      function H(e, n, t) {
        var r = (function (e, n, t) {
          for (var r, o = [t, n], i = t; (r = e[i]) && r.now; )
            o.unshift(r.now), (i = r.now);
          return o;
        })(n, t.groupName, t.itemName);
        !(function (e, n, t) {
          q.apply(this, arguments);
        })(e, t.groupName, r[0]);
      }
      function Y(e, n, t) {
        return (function () {
          var r = (0, s.Z)(
            o().mark(function r(i, c) {
              return o().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      J(i, c, e, n, t).catch(L),
                        i("store/proxies#switchProxy", function (e) {
                          var r = e.proxies.proxies;
                          r[n] && r[n].now && (r[n].now = t);
                        });
                    case 2:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          );
          return function (e, n) {
            return r.apply(this, arguments);
          };
        })();
      }
      function Q(e, n) {
        return (function () {
          var t = (0, s.Z)(
            o().mark(function t(r, i) {
              var c, s, a, u, l, f, p;
              return o().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (c = (0, k.Bg)(i())), (t.next = 3), x(e, n, c);
                    case 3:
                      return (
                        (s = t.sent),
                        (a = ""),
                        !1 === s.ok && (a = s.statusText),
                        (t.next = 8),
                        s.json()
                      );
                    case 8:
                      (u = t.sent),
                        (l = u.delay),
                        (f = A(i())),
                        (p = D(D({}, f), {}, { [n]: { error: a, number: l } })),
                        r("requestDelayForProxyOnce", function (e) {
                          e.proxies.delay = p;
                        });
                    case 13:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })();
      }
      function K(e, n) {
        return (function () {
          var t = (0, s.Z)(
            o().mark(function t(r) {
              return o().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), r(Q(e, n));
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function X(e) {
        return (function () {
          var n = (0, s.Z)(
            o().mark(function n(t, r) {
              var i, c, s, a, u;
              return o().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (i = _(r())),
                          (n.next = 3),
                          Promise.all(
                            i.map(function (n) {
                              return t(K(e, n));
                            })
                          )
                        );
                      case 3:
                        (c = U(r())), (s = Z(c)), (n.prev = 5), s.s();
                      case 7:
                        if ((a = s.n()).done) {
                          n.next = 13;
                          break;
                        }
                        return (u = a.value), (n.next = 11), F(e, u.name);
                      case 11:
                        n.next = 7;
                        break;
                      case 13:
                        n.next = 18;
                        break;
                      case 15:
                        (n.prev = 15), (n.t0 = n.catch(5)), s.e(n.t0);
                      case 18:
                        return (n.prev = 18), s.f(), n.finish(18);
                      case 21:
                        return (n.next = 23), t(M(e));
                      case 23:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[5, 15, 18, 21]]
              );
            })
          );
          return function (e, t) {
            return n.apply(this, arguments);
          };
        })();
      }
      function ee(e) {
        var n,
          t = [],
          r = [];
        for (var o in e) {
          var i = e[o];
          i.all && Array.isArray(i.all)
            ? (t.push(o), "GLOBAL" === o && (n = i.all))
            : R.indexOf(i.type) < 0 && r.push(o);
        }
        return (
          n &&
            (n.push("GLOBAL"),
            (t = t
              .map(function (e) {
                return [n.indexOf(e), e];
              })
              .sort(function (e, n) {
                return e[0] - n[0];
              })
              .map(function (e) {
                return e[1];
              }))),
          [t, r]
        );
      }
      function ne(e) {
        for (var n = Object.keys(e), t = [], r = {}, o = 0; o < n.length; o++) {
          var i = e[n[o]];
          if ("default" !== i.name && "Compatible" !== i.vehicleType) {
            for (var c = i.proxies, s = [], a = 0; a < c.length; a++) {
              var u = c[a];
              (r[u.name] = u), s.push(u.name);
            }
            (i.proxies = s), t.push(i);
          }
        }
        return { providers: t, proxies: r };
      }
      var te = {
          requestDelayForProxies: function (e, n) {
            return (function () {
              var t = (0, s.Z)(
                o().mark(function t(r, i) {
                  var c, s;
                  return o().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = _(i())),
                            (s = n
                              .filter(function (e) {
                                return c.indexOf(e) > -1;
                              })
                              .map(function (n) {
                                return r(K(e, n));
                              })),
                            (t.next = 4),
                            Promise.all(s)
                          );
                        case 4:
                          return (t.next = 6), r(M(e));
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
          closeModalClosePrevConns: V,
          closePrevConnsAndTheModal: function (e) {
            return (function () {
              var n = (0, s.Z)(
                o().mark(function n(t, r) {
                  var i, c, s, a;
                  return o().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            ((c = r()),
                            (s =
                              null === (i = c.proxies.switchProxyCtx) ||
                              void 0 === i
                                ? void 0
                                : i.to))
                          ) {
                            n.next = 5;
                            break;
                          }
                          return (
                            t(function (e) {
                              e("closeModalClosePrevConns", function (e) {
                                e.proxies.showModalClosePrevConns = !1;
                              });
                            }),
                            n.abrupt("return")
                          );
                        case 5:
                          (a = c.proxies.proxies),
                            H(e, a, s),
                            t("closePrevConnsAndTheModal", function (e) {
                              (e.proxies.showModalClosePrevConns = !1),
                                (e.proxies.switchProxyCtx = void 0);
                            });
                        case 8:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e, t) {
                return n.apply(this, arguments);
              };
            })();
          },
        },
        re = (0, a.cn)({ key: "proxyFilterText", default: "" });
    },
    93621: function (e, n) {
      "use strict";
      n.Z = { overlay: "_2ueF0jmjym", content: "UZ5fqyDCOb" };
    },
  },
  function (e) {
    "use strict";
    var n;
    (n = e.x),
      (e.x = function () {
        var t = n();
        return [576, 331, 170, 869, 641, 237, 981, 507, 497, 736].map(e.E), t;
      });
  },
  [[10028, 714, 944, 977, 935, 545, 486, 623]],
]);
//# sourceMappingURL=app.04bbe247db8cc9728c0d.js.map
