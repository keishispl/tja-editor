!function (e) {
     function t(t) {
          for (var o, r, l = t[0], c = t[1], i = t[2], d = 0, p = [];
               d < l.length;
               d++)r = l[d], Object.prototype.hasOwnProperty.call(n, r) && n[r] && p.push(n[r][0]), n[r] = 0;
          for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
          for (f && f(t);
               p.length;)p.shift()();
          return s.push.apply(s, i || []), a()
     } function a() {
          for (var e, t = 0;
               t < s.length;
               t++) {
               for (var a = s[t], o = !0, l = 1;
                    l < a.length;
                    l++) {
                    var c = a[l];
                    0 !== n[c] && (o = !1)
               } o && (s.splice(t--, 1), e = r(r.s = a[0]))
          } return e
     } var o = {}, n = {
          0: 0
     }, s = [];
     function r(t) {
          if (o[t]) return o[t].exports;
          var a = o[t] = {
               i: t, l: !1, exports: {}
          };
          return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports
     } r.m = e, r.c = o, r.d = function (e, t, a) {
          r.o(e, t) || Object.defineProperty(e, t, {
               enumerable: !0, get: a
          })
     }, r.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
               value: "Module"
          }), Object.defineProperty(e, "__esModule", {
               value: !0
          })
     }, r.t = function (e, t) {
          if (1 & t && (e = r(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var a = Object.create(null);
          if (r.r(a), Object.defineProperty(a, "default", {
               enumerable: !0, value: e
          }), 2 & t && "string" != typeof e)
               for (var o in e)
                    r.d(a, o, function (t) {
                         return e[t]
                    }.bind(null, o));
          return a
     }, r.n = function (e) {
          var t = e && e.__esModule ? function () {
               return e.default
          } : function () {
               return e
          };
          return r.d(t, "a", t), t
     }, r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
     }, r.p = "dist/";
     var l = window.webpackJsonp = window.webpackJsonp || [], c = l.push.bind(l);
     l.push = t, l = l.slice();
     for (var i = 0;
          i < l.length;
          i++)t(l[i]);
     var f = c;
     s.push([103, 1]), a()
}({
     100: function (e, t) { },
     101: function (e, t, a) { },
     102: function (e, t, a) { },
     103: function (e, t, a) {
          "use strict";
          a.r(t);
          var o = a(6), n = a(0), s = a.n(n), r = a(3), l = a(26), c = a.n(l), i = a(27), f = a.n(i);
          function d(e) {
               const t = ["TITLE", "SUBTITLE", "BPM", "WAVE", "OFFSET", "DEMOSTART", "GENRE"], a = ["COURSE", "LEVEL", "BALLOON", "SCOREINIT", "SCOREDIFF", "TTROWBEAT"], o = ["START", "END", "GOGOSTART", "GOGOEND", "MEASURE", "SCROLL", "BPMCHANGE", "DELAY", "BRANCHSTART", "BRANCHEND", "SECTION", "N", "E", "M", "LEVELHOLD", "BMSCROLL", "HBSCROLL", "BARLINEOFF", "BARLINEON", "TTBREAK"];
               let n;
               if ((n = e.match(/\/\/.*/)) && (e = e.substr(0, n.index).trim()), n = e.match(/^([A-Z]+):(.+)/i)) {
                    const e = n[1].toUpperCase(), o = n[2];
                    if (t.includes(e)) return {
                         type: "header", scope: "global", name: e, value: o.trim()
                    };
                    if (a.includes(e)) return {
                         type: "header", scope: "course", name: e, value: o.trim()
                    }
               } else if (n = e.match(/^#([A-Z]+)(?:\s+(.+))?/i)) {
                    const e = n[1].toUpperCase(), t = n[2] || "";
                    if (o.includes(e)) return {
                         type: "command", name: e, value: t.trim()
                    }
               } else if (n = e.match(/^(([0-9]|A|B|C|F|G)*,?)$/)) {
                    return {
                         type: "data", data: n[1]
                    }
               } return {
                    type: "unknown", value: e
               }
          } function p(e, t) {
               const a = {
                    course: "Oni",
                    level: 0,
                    balloon: [],
                    scoreInit: 100,
                    scoreDiff: 100,
                    ttRowBeat: 16
               }, o = [];
               let n = 4, s = 4, r = {}, l = "", c = [], i = "N", f = "N", d = !1;
               for (const e of t) if ("header" === e.type) switch (e.name) {
                    case "COURSE": a.course = e.value;
                         break;
                    case "LEVEL": a.level = parseInt(e.value, 10);
                         break;
                    case "BALLOON": const t = e.value.split(/[^0-9]/).filter(e => "" !== e).map(e => parseInt(e, 10));
                         a.balloon = t;
                         break;
                    case "SCOREINIT": a.scoreInit = parseInt(e.value, 10);
                         break;
                    case "SCOREDIFF": a.scoreDiff = parseInt(e.value, 10);
                         break;
                    case "TTROWBEAT": a.ttRowBeat = parseInt(e.value, 10)
               } else if ("command" === e.type) switch (e.name) {
                    case "BRANCHSTART": if (d) break;
                         let t = e.value.split(",");
                         "r" === t[0] ? f = t.length >= 3 ? "M" : 2 === t.length ? "E" : "N" : "p" === t[0] && (f = t.length >= 3 && parseFloat(t[2]) <= 100 ? "M" : t.length >= 2 && parseFloat(t[1]) <= 100 ? "E" : "N");
                         break;
                    case "BRANCHEND": i = f;
                         break;
                    case "N": i = "N";
                         break;
                    case "E": i = "E";
                         break;
                    case "M": i = "M";
                         break;
                    case "START": case "END": i = "N", f = "N", d = !1;
                         break;
                    default: if (i != f) break;
                         switch (e.name) {
                              case "MEASURE": let t = e.value.match(/(\d+)\/(\d+)/);
                                   if (!t) break;
                                   n = parseInt(t[1], 10), s = parseInt(t[2], 10);
                                   break;
                              case "GOGOSTART": c.push({
                                   name: "gogoStart", position: l.length
                              });
                                   break;
                              case "GOGOEND": c.push({
                                   name: "gogoEnd", position: l.length
                              });
                                   break;
                              case "SCROLL": c.push({
                                   name: "scroll", position: l.length, value: parseFloat(e.value)
                              });
                                   break;
                              case "BPMCHANGE": c.push({
                                   name: "bpm", position: l.length, value: parseFloat(e.value)
                              });
                                   break;
                              case "TTBREAK": r.ttBreak = !0;
                                   break;
                              case "LEVELHOLD": d = !0
                         }
               } else if ("data" === e.type && i === f) {
                    let t = e.data;
                    if (t.endsWith(",")) {
                         l += t.slice(0, -1);
                         const e = {
                              length: [n, s], properties: r, data: l, events: c
                         };
                         o.push(e), l = "", c = [], r = {}
                    } else l += t
               } if (o.length) {
                    let t = !1;
                    for (let e = 0;
                         e < o[0].events.length;
                         e++) {
                         const a = o[0].events[e];
                         if ("bpm" === a.name && 0 === a.position) {
                              t = !0;
                              break
                         }
                    } t || o[0].events.unshift({
                         name: "bpm", position: 0, value: e.bpm
                    })
               } let p = 0;
               switch (a.course.toLowerCase()) {
                    case "easy": case "0": p = 0;
                         break;
                    case "normal": case "1": p = 1;
                         break;
                    case "hard": case "2": p = 2;
                         break;
                    case "oni": case "3": p = 3;
                         break;
                    case "edit": case "ura": case "4": p = 4
               }
               if (l)
                    o.push({
                         length: [n, s], properties: r, data: l, events: c
                    });
               else for (let e of c)
                    e.position = o[o.length - 1].data.length, o[o.length - 1].events.push(e);
               return console.log(o[o.length - 1]), {
                    course: p, headers: a, measures: o
               }
          } function u(e, t, a, o, n, s, r) {
               e.beginPath(), e.moveTo(t, a), e.lineTo(o, n), e.lineWidth = s, e.strokeStyle = r, e.stroke(), e.closePath()
          } function h(e, t, a, o, n) {
               e.beginPath(), e.arc(t, a, o, 0, 2 * Math.PI, !1), e.fillStyle = n, e.fill(), e.closePath()
          } function g(e, t, a, o, n, s) {
               e.fillStyle = s, e.fillRect(t, a, o, n)
          } function b(e, t, a, o, n, s) {
               let r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "middle", l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "center";
               e.font = n, e.textBaseline = r, e.textAlign = l, e.fillStyle = s, e.fillText(o, t, a)
          } function m(e, t, a, o, n) {
               let s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "middle", r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "center";
               b(e, t, a, o, '5px "Pixel 3x5"', n, s, r)
          } const v = e => 64 + 66 * e, y = e => 24 + 48 * e;
          function k(e, t) {
               return {
                    x: y(t), y: v(e) + 34
               }
          } function E(e, t, a, o) {
               let n = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
               const {
                    x: s, y: r
               } = k(t, a);
               h(e, s, r, 9, "#000"), n ? (h(e, s, r, 8, "#fff"), h(e, s, r, 7, o)) : h(e, s, r, 8, o)
          } function x(e, t, a, o) {
               const {
                    x: n, y: s
               } = k(t, a);
               h(e, n, s, 12, "#000"), h(e, n, s, 11, "#fff"), h(e, n, s, 9, o)
          } function B(e, t, a, o, n, s, r) {
               let l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "body", {
                    x: c, y: i
               } = k(a, o), {
                    x: f, y: d
               } = k(n, s);
               const p = "gogo" === l, u = "bodyBig" === l, h = p ? 34 : 9 + (u ? 3 : 0);
               i -= h, d -= h;
               const b = p ? 18 : 18 + (u ? 6 : 0);
               if (a === n) {
                    const t = f - c;
                    p ? g(e, c, i, t, b, r) : (g(e, c, i, t, b, "#000"), g(e, c, i + 1, t, b - 2, "#fff"), g(e, c, i + 2, t, b - 4, r))
               } else {
                    const o = t[a].totalBeat, l = y(o) - c + 24;
                    p ? g(e, c, i, l, b, r) : (g(e, c, i, l, b, "#000"), g(e, c, i + 1, l, b - 2, "#fff"), g(e, c, i + 2, l, b - 4, r));
                    for (let o = a + 1;
                         o < n;
                         o++) {
                         let a = v(o), n = y(t[o].totalBeat) + 24;
                         p ? g(e, 0, a, n, b, r) : (a += 25 - (u ? 3 : 0), g(e, 0, a, n, b, "#000"), g(e, 0, a + 1, n, b - 2, "#fff"), g(e, 0, a + 2, n, b - 4, r))
                    } const f = y(s);
                    p ? g(e, 0, d, f, b, r) : (g(e, 0, d, f, b, "#000"), g(e, 0, d + 1, f, b - 2, "#fff"), g(e, 0, d + 2, f, b - 4, r))
               }
          } function O(e, t, a, o, n, s) {
               E(e, a, o, "#fe4"), E(e, n, s, "#fe4"), B(e, t, a, o, n, s, "#fe4", "body")

          } function S(e, t, a, o, n, s) {
               x(e, a, o, "#fe4"), x(e, n, s, "#fe4"), B(e, t, a, o, n, s, "#fe4", "bodyBig")

          } function T(e, t, a, o, n, s, r) {
               E(e, n, s, "#fb4"), B(e, t, a, o, n, s, "#fb4", "body"), E(e, a, o, "#fb4", !1);
               const {
                    x: l, y: c
               } = k(a, o);
               m(e, l, c + .5, r.toString(), "#000")
          } var A = function (e, t) {
               const a = function (e) {
                    const t = [], a = [];
                    let o = 0, n = 0, s = !1;
                    for (let r = 0;
                         r < e.measures.length;
                         r++) {
                         const l = e.measures[r], c = l.length[0] / l.length[1] * 4;
                         for (let e = 0;
                              e < l.events.length;
                              e++) {
                              const a = l.events[e], n = c / (l.data.length || 1) * a.position;
                              "bpm" === a.name ? t.push({
                                   type: "bpm", value: a.value, beat: o + n

                              }) : "gogoStart" === a.name ? t.push({
                                   type: "gogoStart", beat: o + n

                              }) : "gogoEnd" === a.name && t.push({
                                   type: "gogoEnd", beat: o + n
                              })
                         } for (let t = 0;
                              t < l.data.length;
                              t++) {
                              const r = l.data.charAt(t);
                              let i = {
                                   type: "", beat: o + c / l.data.length * t
                              };
                              switch (r) {
                                   case "1": i.type = "don";
                                        break;
                                   case "2": i.type = "kat";
                                        break;
                                   case "3": case "A": i.type = "donBig";
                                        break;
                                   case "4": case "B": i.type = "katBig";
                                        break;
                                   case "5": i.type = "renda";
                                        break;
                                   case "6": i.type = "rendaBig";
                                        break;
                                   case "7": i.type = "balloon", i.count = e.headers.balloon[n++];
                                        break;
                                   case "8": i.type = "end", s && (s = !1);
                                        break;
                                   case "9": !1 === s && (i.type = "balloon", i.count = e.headers.balloon[n++], s = !0)
                              }i.type && a.push(i)
                         } o += c
                    } return function (e, t) {
                         let a = 120, o = 0, n = 0, s = 0, r = 0, l = [];
                         for (;
                              r < t.length;) {
                              let c = e[s], i = t[r];
                              for (;
                                   c && c.beat <= i;) {
                                   if ("bpm" === c.type) {
                                        let e = c.beat - o;
                                        o += e, n += 60 / a * e, a = c.value
                                   } s++, c = e[s]
                              } let f = i - o, d = 60 / a * f;
                              l.push(n + d), o += f, n += d, r++
                         } return l
                    }(t, a.map(e => e.beat)).forEach((e, t) => {
                         a[t].time = e
                    }), {
                         headers: e.headers, events: t, notes: a
                    }
               }(e.courses[t]);
               return {
                    statistics: function (e) {
                         const t = [0, 0, 0, 0], a = [], o = [];
                         let n = 0, s = 0, r = 0, l = !1, c = !1, i = 0, f = 0, d = 0, p = e.events[d], u = 0, h = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], g = [0, 0], b = [0, 0], m = 0;
                         const v = ["don", "kat", "donBig", "katBig"];
                         for (let y = 0;
                              y < e.notes.length;
                              y++) {
                              const k = e.notes[y];
                              if (p && p.beat <= k.beat) do {
                                   "gogoStart" === p.type ? u = 1 : "gogoEnd" === p.type && (u = 0), d += 1, p = e.events[d]
                              } while (p && p.beat <= k.beat);
                              const E = v.indexOf(k.type);
                              if (-1 === E)
                                   if ("renda" !== k.type && "rendaBig" !== k.type) if ("balloon" !== k.type) {
                                        if ("end" === k.type) if (l) a.push(k.time - l), l = !1;
                                        else if (c) {
                                             const e = k.time - c, t = i / e;
                                             o.push([e, i]), c = !1, t <= 60 && (g[f] += i - 1, b[f] += 1)
                                        }
                                   } else c = k.time, i = k.count, f = u;
                                   else {
                                        l = k.time;
                                   }
                              else {
                                   0 === y && (n = k.time), s = k.time, t[E] += 1, r += 1;
                                   const a = 2 === E || 3 === E, o = r < 10 ? 0 : r < 30 ? 1 : r < 50 ? 2 : r < 100 ? 3 : 4;
                                   h[u][o] += a ? 2 : 1;
                                   let l = e.headers.scoreInit + e.headers.scoreDiff * (r < 10 ? 0 : r < 30 ? 1 : r < 50 ? 2 : r < 100 ? 4 : 8), c = 10 * Math.floor(l / 10);
                                   u && (c = 10 * Math.floor(1.2 * c / 10)), a && (c *= 2), m += c
                              }
                         } return {
                              totalCombo: r, notes: t, length: s - n, rendas: a, balloons: o, score: {
                                   score: m, notes: h, balloon: g, balloonPop: b
                              }
                         }
                    }(a), graph: function (e) {
                         const t = [];
                         let a = {
                              don: 0, kat: 0
                         }, o = 0;
                         const n = e.notes[e.notes.length - 1].time / 100, s = ["don", "kat", "donBig", "katBig"];
                         for (let r = 0;
                              r < e.notes.length;
                              r++) {
                              const l = e.notes[r];
                              if (-1 !== s.indexOf(l.type)) {
                                   for (;
                                        (t.length + 1) * n <= l.time;) {
                                        const e = a.don + a.kat;
                                        o < e && (o = e), t.push(a), a = {
                                             don: 0, kat: 0
                                        }
                                   } "don" === l.type || "donBig" === l.type ? a.don += 1 : "kat" !== l.type && "katBig" !== l.type || (a.kat += 1)
                              }
                         } for (;
                              t.length < 100;)t.push({
                                   don: 0, kat: 0
                              });
                         return {
                              timeframe: n, max: o, data: t
                         }
                    }(a)
               }
          };
          a(101), a(102);
          const w = s()("#charset-utf-8").first(), C = s()("#charset-shift-jis").first(), R = s()("#charset-gb18030").first(), N = s()("#editor-live").first(), L = s()("#auto-scroll-to-bottom").first(), F = s()(".editor-process"), I = s()(".area-editor .input"), M = s()(".area-errors .errors");
          let P = null, D = "", j = "preview";
          function G(e) {
               M.text(e)
          } function H() {
               s()(".area-pages .page").addClass("is-hidden"), s()(".area-pages .page-".concat(j)).removeClass("is-hidden"), "preview" === j && "" !== D ? V() : s()("#tja-preview").remove(), "statistics" === j && function () {
                    if ("" === D) return;
                    try {
                         !function (e) {
                              const {
                                   statistics: t, graph: a
                              } = e;
                              s()(".stat-total-combo").text(t.totalCombo);
                              const o = P.courses[D], {
                                   scoreInit: n, scoreDiff: l
                              } = o.headers, c = e => 10 * Math.floor(e / 10), i = [0, 1, 2, 4, 8].map(e => c(n + l * e)), f = i.map(e => c(1.2 * e)), d = i.map((e, a) => t.score.notes[0][a] * e).reduce((e, t) => e + t, 0) + f.map((e, a) => t.score.notes[1][a] * e).reduce((e, t) => e + t, 0) + 300 * t.score.balloon[0] + 360 * t.score.balloon[1] + 5e3 * t.score.balloonPop[0] + 6e3 * t.score.balloonPop[1] + 1e4 * Math.floor(t.totalCombo / 100);
                              t.rendas.length ? s()(".stat-max-score").text("".concat(d)) : s()(".stat-max-score").text("".concat(d));
                              s()(".stat-don-small").text(t.notes[0]), s()(".stat-don-big").text(t.notes[2]), s()(".stat-kat-small").text(t.notes[1]), s()(".stat-kat-big").text(t.notes[3]);
                              const p = t.notes[0] + t.notes[2], u = t.notes[1] + t.notes[3];
                              s()(".stat-don").text(p), s()(".stat-kat").text(u);
                              const h = p / t.totalCombo * 100, g = 100 - h;
                              s()(".stat-don-ratio").text(h.toFixed(2) + "%"), s()(".stat-kat-ratio").text(g.toFixed(2) + "%"), s()(".stat-density").text((t.totalCombo / t.length).toFixed(3)), s()(".stat-length").text(t.length.toFixed(2)), s()(".stat-renda").text(t.rendas.map(e => e.toFixed(3) + "s").join(" + ")), s()(".stat-renda-total").text(t.rendas.reduce((e, t) => e + t, 0).toFixed(3) + "s"), s()(".stat-balloon").html(t.balloons.map(e => "".concat(e[1], "hit(s) / ").concat(e[0].toFixed(3), "s = ").concat((e[1] / e[0]).toFixed(3), " hit/s")).join("<br>"));
                              const b = r.b().rangeRound([0, 600]), m = r.c().rangeRound([200, 0]), v = 5 * Math.ceil(a.max / 5), y = [...Array(v / 5 + 1).keys()].map(e => 5 * e);
                              s()(".stat-graph").empty();
                              const k = r.d(".stat-graph").attr("width", 650).attr("height", 240).append("g").attr("transform", "translate(30, 20)"), E = r.e().keys(["don", "kat"])(a.data);
                              b.domain(E[0].map((e, t) => t)), m.domain([0, 5 * Math.ceil(a.max / 5)]);
                              const x = () => r.a(m).ticks(5).tickValues(y);
                              k.append("g").attr("class", "grid").call(x().tickSize(-600).tickFormat(""));
                              k.selectAll(".layer").data(E).enter().append("g").attr("class", "layer").style("fill", (e, t) => ["#f44e", "#4fe"][t]).selectAll("rect").data(e => e).enter().append("rect").attr("x", (e, t) => b(t)).attr("y", e => m(e[1])).attr("height", e => m(e[0]) - m(e[1])).attr("width", b.bandwidth), k.append("g").attr("class", "axis-y").call(x())
                         }(A(P, D))
                    } catch (e) {
                         console.error(e), G(e.message)
                    }
               }()
          } function U() {
               try {
                    P = function (e) {
                         const t = e.split(/(\r\n|\r|\n)/).map(e => e.trim()), a = {
                              title: "", subtitle: "", bpm: 120, wave: "", offset: 0, demoStart: 0, genre: ""
                         }, o = {};
                         let n, s = [];
                         for (n = 0;
                              n < t.length;
                              n++) {
                              const e = t[n];
                              if ("" === e) continue;
                              const r = d(e);
                              if ("header" === r.type && "global" === r.scope) switch (r.name) {
                                   case "TITLE": a.title = r.value;
                                        break;
                                   case "SUBTITLE": a.subtitle = r.value;
                                        break;
                                   case "BPM": a.bpm = parseFloat(r.value);
                                        break;
                                   case "WAVE": a.wave = r.value;
                                        break;
                                   case "OFFSET": a.offset = parseFloat(r.value);
                                        break;
                                   case "DEMOSTART": a.demoStart = parseFloat(r.value);
                                        break;
                                   case "GENRE": a.genre = r.value
                              } else if ("header" === r.type && "course" === r.scope) {
                                   if ("COURSE" === r.name && s.length) {
                                        const e = p(a, s);
                                        o[e.course] = e, s = []
                                   } s.push(r)
                              } else ("command" === r.type || "data" === r.type) && s.push(r)
                         } if (s.length) {
                              const e = p(a, s);
                              o[e.course] = e
                         } return {
                              headers: a, courses: o
                         }
                    }(I.first().value);
                    for (let e in P.courses);
                    G("No error")
               } catch (e) {
                    console.error(e), G(e.message)
               }
          } function V() {
               "" !== D && (s()("#tja-preview").remove(), document.fonts.load('5px "Pixel 3x5"').then(() => {
                    try {
                         const e = function (e, t) {
                              const a = e.courses[t], o = a.headers.ttRowBeat, n = [];
                              let s = [], r = 0;
                              for (let e = 0;
                                   e < a.measures.length;
                                   e++) {
                                   const t = a.measures[e], l = t.length[0] / t.length[1] * 4;
                                   (o < r + l || t.properties.ttBreak) && (n.push({
                                        beats: r, measures: s
                                   }), s = [], r = 0), s.push(t), r += l
                              } s.length && n.push({
                                   beats: r, measures: s
                              });
                              const l = 24 + 48 * o + 24, c = 64 + 66 * n.length + 8, i = document.createElement("canvas");
                              i.width = l, i.height = c, document.body.appendChild(i);
                              const f = i.getContext("2d");
                              try {
                                   g(f, 0, 0, l, c, "#323232");
                                   for (let e = 0;
                                        e < n.length;
                                        e++) {
                                        const t = n[e], a = t.beats;
                                        t.measures;
                                        t.totalBeat = a;
                                        const o = 24 + 48 * a + 24, s = v(e);
                                        g(f, 0, s + 18, o, 32, "#fff"), g(f, 0, s + 18 + 2, o, 28, "#fff"), g(f, 0, s + 18 + 4, o, 24, "#323232")
                                   }
                                   b(f, 8, 8, e.headers.title, "bold 28px sans-serif", "#fff", "top", "left");
                                   const t = [10, 10, 10, 10, 10];
                                   b(f, 8, 40, ["Easy", "Normal", "Hard", "Oni", "Ura"][a.course] + ' ' + "★".repeat(a.headers.level) + "☆".repeat(Math.max(t[a.course] - a.headers.level, 0)) + ' | ' + e.headers.subtitle.replace("--", ""), "bold 18px sans-serif", "#fff", "top", "left");
                                   let o = !1, s = 1;
                                   for (let e = 0;
                                        e < n.length;
                                        e++) {
                                        const t = n[e].measures;
                                        let a = 0;
                                        for (let s = 0;
                                             s < t.length;
                                             s++) {
                                             const r = t[s], l = r.length[0] / r.length[1] * 4;
                                             r.rowBeat = a;
                                             for (let t = 0;
                                                  t < r.events.length;
                                                  t++) {
                                                  const s = r.events[t], c = a + l / (r.data.length || 1) * s.position;
                                                  "gogoStart" !== s.name || o ? "gogoEnd" === s.name && o && (B(f, n, o[0], o[1], e, c, "#f90", "gogo"), o = !1) : o = [e, c]
                                             } a += l
                                        }
                                   } for (let e = 0;
                                        e < n.length;
                                        e++) {
                                        const t = n[e].measures;
                                        let a = 0;
                                        const o = v(e);
                                        for (let e = 0;
                                             e < t.length;
                                             e++) {
                                             const n = y(a), r = t[e], l = r.length[0] / r.length[1] * 4, c = o + 18;
                                             for (let e = 1;
                                                  e < 2 * r.length[0];
                                                  e++) {
                                                  const t = e / r.length[1] * 2, o = y(a + t);
                                                  u(f, o, c, o, c + 32, 2, "#fff" + (e % 2 ? "4" : "8"))
                                             } for (let e = 0;
                                                  e < r.events.length;
                                                  e++) {
                                                  const t = r.events[e], n = l / (r.data.length || 1) * t.position, s = y(a + n);
                                                  "scroll" === t.name ? (u(f, s, o, s, o + 50, 2, "#fff"), b(f, s + 2, o + 18 - 13, "HS " + t.value.toString(), "10px sans-serif", "#fff", "bottom", "left")) : "bpm" === t.name && (u(f, s, o, s, o + 50, 2, "#fff"), b(f, s + 2, o + 18 - 7, "BPM " + t.value.toString(), "10px sans-serif", "#fff", "bottom", "left"))

                                             } if (u(f, n, o, n, o + 50, 2, "#fff"), m(f, n + 2, o + 18 - 1, s.toString(), "#fff", "bottom", "left"), s += 1, a += l, e + 1 === t.length) {
                                                  const e = y(a);
                                                  u(f, e, o, e, o + 50, 2, "#fff")
                                             }
                                        }
                                   } let r = 0, d = !1;
                                   for (let e = 0;
                                        e < n.length;
                                        e++) {
                                        const t = n[e].measures;
                                        for (let e = 0;
                                             e < t.length;
                                             e++) {
                                             const a = t[e];
                                             for (let e = a.data.length;
                                                  e >= 0;
                                                  e--) {
                                                  const t = a.data.charAt(e);
                                                  "7" === t ? r += 1 : "9" !== t || d ? "8" === t && d && (d = !1) : (d = 1, r += 1)
                                             }
                                        }
                                   } if (a.headers.balloon.length < r) throw new Error("BALLOON count mismatch");
                                   let p = !1, h = !1;
                                   for (let e = n.length - 1;
                                        e >= 0;
                                        e--) {
                                        const t = n[e].measures;
                                        for (let o = t.length - 1;
                                             o >= 0;
                                             o--) {
                                             const s = t[o], l = s.length[0] / s.length[1] * 4;
                                             for (let t = s.data.length;
                                                  t >= 0;
                                                  t--) {
                                                  const o = s.data.charAt(t), c = s.rowBeat + l / s.data.length * t;
                                                  if ("0" !== o && "9" !== o && h) {
                                                       h[0];
                                                       const e = h[h.length - 1], t = a.headers.balloon[r - 1];
                                                       T(f, n, e[0], e[1], p[0], p[1], t), r -= 1, p = !1, h = !1
                                                  } switch (o) {
                                                       case "1": E(f, e, c, "#f33");
                                                            break;
                                                       case "2": E(f, e, c, "#5cf");
                                                            break;
                                                       case "3": case "A": x(f, e, c, "#f33");
                                                            break;
                                                       case "4": case "B": x(f, e, c, "#5cf");
                                                            break;
                                                       case "5": O(f, n, e, c, p[0], p[1]), p = !1;
                                                            break;
                                                       case "6": S(f, n, e, c, p[0], p[1]), p = !1;
                                                            break;
                                                       case "7": const t = a.headers.balloon[r - 1];
                                                            T(f, n, e, c, p[0], p[1], t), r -= 1, p = !1;
                                                            break;
                                                       case "8": p = [e, c];
                                                            break;
                                                       case "9": h || (h = []), h.push([e, c]);
                                                            break;
                                                       case "C": E(f, e, c, "#000");
                                                            break;
                                                       case "F": E(f, e, c, "#ddd");
                                                            break;
                                                       case "G": x(f, e, c, "#f3f")
                                                  }
                                             }
                                        }
                                   } return document.body.removeChild(i), i
                              } catch (e) {
                                   throw document.body.removeChild(i), e
                              }
                         }(P, D);
                         e.id = "tja-preview", s()(".page-preview").append(e), G("No error")
                    } catch (e) {
                         console.error(e), G(e.message)
                    }
               }))
          } F.on("click", () => {
               U(), V()
          }), I.on("input", () => {
               N.checked && (U(), H(), L.checked && setTimeout(() => {
                    let e = document.getElementById("area-pages");
                    e.scrollTo(0, e.scrollHeight)
               }, 100))
          }), I.on("dragover", e => {
               e.stopPropagation(), e.preventDefault(), e.dataTransfer.dropEffect = "cppy"
          }), I.on("drop", e => {
               e.stopPropagation(), e.preventDefault();
               const t = e.dataTransfer.files[0], a = new FileReader;
               a.onload = e => {
                    const t = e.target.result, a = new Uint8Array(t), n = o.Buffer.from(a);
                    let s;
                    s = w.checked ? "UTF-8" : C.checked ? "Shift-JIS" : R.checked ? "GB18030" : c.a.detect(n);
                    const r = f.a.decode(n, s);
                    I.first().value = r, D = "", U(), H()
               }, a.readAsArrayBuffer(t)
          }), s()(".controls-diff .button").on("click", e => {
               const t = s()(e.target).data("value");
               D = t, H()
          }), s()(".controls-page .button").on("click", e => {
               const t = s()(e.target).data("value");
               j = t, H()
          }), I.first().value && U(), H()
     }, 99: function (e, t) { }
});
