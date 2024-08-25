"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [339], {
        3541: function(e, t, n) {
            n.d(t, {
                Ry: function() {
                    return c
                }
            });
            var r = new WeakMap,
                o = new WeakMap,
                i = {},
                l = 0,
                a = function(e) {
                    return e && (e.host || a(e.parentNode))
                },
                u = function(e, t, n, u) {
                    var c = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = a(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return Boolean(e)
                    });
                    i[n] || (i[n] = new WeakMap);
                    var s = i[n],
                        d = [],
                        f = new Set,
                        p = new Set(c),
                        m = function(e) {
                            !e || f.has(e) || (f.add(e), m(e.parentNode))
                        };
                    c.forEach(m);
                    var v = function(e) {
                        !e || p.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (f.has(e)) v(e);
                            else {
                                var t = e.getAttribute(u),
                                    i = null !== t && "false" !== t,
                                    l = (r.get(e) || 0) + 1,
                                    a = (s.get(e) || 0) + 1;
                                r.set(e, l), s.set(e, a), d.push(e), 1 === l && i && o.set(e, !0), 1 === a && e.setAttribute(n, "true"), i || e.setAttribute(u, "true")
                            }
                        })
                    };
                    return v(t), f.clear(), l++,
                        function() {
                            d.forEach(function(e) {
                                var t = r.get(e) - 1,
                                    i = s.get(e) - 1;
                                r.set(e, t), s.set(e, i), t || (o.has(e) || e.removeAttribute(u), o.delete(e)), i || e.removeAttribute(n)
                            }), --l || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
                        }
                },
                c = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), u(r, o, n, "aria-hidden")) : function() {
                        return null
                    }
                }
        },
        6010: function(e, t, n) {
            function r() {
                for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
                    var n, r, o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t))
                            for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (o && (o += " "), o += r);
                        else
                            for (n in t) t[n] && (o && (o += " "), o += n)
                    }
                    return o
                }(e)) && (r && (r += " "), r += t);
                return r
            }
            n.d(t, {
                W: function() {
                    return r
                }
            }), t.Z = r
        },
        6354: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(7294),
                o = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                };
            let i = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                l = (e, t) => {
                    let n = (0, r.forwardRef)(({
                        color: n = "currentColor",
                        size: l = 24,
                        strokeWidth: a = 2,
                        absoluteStrokeWidth: u,
                        children: c,
                        ...s
                    }, d) => (0, r.createElement)("svg", {
                        ref: d,
                        ...o,
                        width: l,
                        height: l,
                        stroke: n,
                        strokeWidth: u ? 24 * Number(a) / Number(l) : a,
                        className: `lucide lucide-${i(e)}`,
                        ...s
                    }, [...t.map(([e, t]) => (0, r.createElement)(e, t)), ...(Array.isArray(c) ? c : [c]) || []]));
                    return n.displayName = `${e}`, n
                }
        },
        1757: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("Book", [
                ["path", {
                    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
                    key: "126fyg"
                }],
                ["path", {
                    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
                    key: "1msh16"
                }]
            ])
        },
        8909: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("Briefcase", [
                ["rect", {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "7",
                    rx: "2",
                    ry: "2",
                    key: "eto64e"
                }],
                ["path", {
                    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
                    key: "zwj3tp"
                }]
            ])
        },
        3742: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("Check", [
                ["polyline", {
                    points: "20 6 9 17 4 12",
                    key: "10jjfj"
                }]
            ])
        },
        4998: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("ChevronRight", [
                ["polyline", {
                    points: "9 18 15 12 9 6",
                    key: "1rtp27"
                }]
            ])
        },
        316: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("Circle", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        },
        4077: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("Edit", [
                ["path", {
                    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
                    key: "1qinfi"
                }],
                ["path", {
                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
                    key: "1cs3r3"
                }]
            ])
        },
        3766: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("FileText", [
                ["path", {
                    d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
                    key: "1nnpy2"
                }],
                ["polyline", {
                    points: "14 2 14 8 20 8",
                    key: "1ew0cm"
                }],
                ["line", {
                    x1: "16",
                    x2: "8",
                    y1: "13",
                    y2: "13",
                    key: "14keom"
                }],
                ["line", {
                    x1: "16",
                    x2: "8",
                    y1: "17",
                    y2: "17",
                    key: "17nazh"
                }],
                ["line", {
                    x1: "10",
                    x2: "8",
                    y1: "9",
                    y2: "9",
                    key: "1a5vjj"
                }]
            ])
        },
        1197: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("Home", [
                ["path", {
                    d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
                    key: "y5dka4"
                }],
                ["polyline", {
                    points: "9 22 9 12 15 12 15 22",
                    key: "e2us08"
                }]
            ])
        },
        8051: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("LogOut", [
                ["path", {
                    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
                    key: "1uf3rs"
                }],
                ["polyline", {
                    points: "16 17 21 12 16 7",
                    key: "1gabdz"
                }],
                ["line", {
                    x1: "21",
                    x2: "9",
                    y1: "12",
                    y2: "12",
                    key: "1uyos4"
                }]
            ])
        },
        8368: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("PanelLeftClose", [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2",
                    key: "1m3agn"
                }],
                ["path", {
                    d: "M9 3v18",
                    key: "fh3hqa"
                }],
                ["path", {
                    d: "m16 15-3-3 3-3",
                    key: "14y99z"
                }]
            ])
        },
        8652: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("PanelLeftOpen", [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2",
                    key: "1m3agn"
                }],
                ["path", {
                    d: "M9 3v18",
                    key: "fh3hqa"
                }],
                ["path", {
                    d: "m14 9 3 3-3 3",
                    key: "8010ee"
                }]
            ])
        },
        3043: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("Receipt", [
                ["path", {
                    d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",
                    key: "wqdwcb"
                }],
                ["path", {
                    d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
                    key: "1h4pet"
                }],
                ["path", {
                    d: "M12 17V7",
                    key: "pyj7ub"
                }]
            ])
        },
        4933: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(6354);
            let o = (0, r.Z)("User", [
                ["path", {
                    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
                    key: "975kel"
                }],
                ["circle", {
                    cx: "12",
                    cy: "7",
                    r: "4",
                    key: "17ys0d"
                }]
            ])
        },
        2779: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return H
                }
            });
            var r, o, i, l, a, u, c = function() {
                    return (c = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                s = n(7294),
                d = "right-scroll-bar-position",
                f = "width-before-scroll-bar",
                p = function() {
                    return (p = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                m = (void 0 === r && (r = {}), (void 0 === o && (o = function(e) {
                    return e
                }), i = [], l = !1, a = {
                    read: function() {
                        if (l) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return i.length ? i[i.length - 1] : null
                    },
                    useMedium: function(e) {
                        var t = o(e, l);
                        return i.push(t),
                            function() {
                                i = i.filter(function(e) {
                                    return e !== t
                                })
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (l = !0; i.length;) {
                            var t = i;
                            i = [], t.forEach(e)
                        }
                        i = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return i
                            }
                        }
                    },
                    assignMedium: function(e) {
                        l = !0;
                        var t = [];
                        if (i.length) {
                            var n = i;
                            i = [], n.forEach(e), t = i
                        }
                        var r = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            o = function() {
                                return Promise.resolve().then(r)
                            };
                        o(), i = {
                            push: function(e) {
                                t.push(e), o()
                            },
                            filter: function(e) {
                                return t = t.filter(e), i
                            }
                        }
                    }
                }).options = p({
                    async: !0,
                    ssr: !1
                }, r), a),
                v = function() {},
                h = s.forwardRef(function(e, t) {
                    var n, r, o, i = s.useRef(null),
                        l = s.useState({
                            onScrollCapture: v,
                            onWheelCapture: v,
                            onTouchMoveCapture: v
                        }),
                        a = l[0],
                        u = l[1],
                        d = e.forwardProps,
                        f = e.children,
                        p = e.className,
                        h = e.removeScrollBar,
                        g = e.enabled,
                        b = e.shards,
                        w = e.sideCar,
                        y = e.noIsolation,
                        x = e.inert,
                        E = e.allowPinchZoom,
                        C = e.as,
                        M = function(e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                            return n
                        }(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        S = (n = [i, t], r = function(e) {
                            return n.forEach(function(t) {
                                var n;
                                return "function" == typeof(n = t) ? n(e) : n && (n.current = e), n
                            })
                        }, (o = (0, s.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = r, o.facade),
                        R = c(c({}, M), a);
                    return s.createElement(s.Fragment, null, g && s.createElement(w, {
                        sideCar: m,
                        removeScrollBar: h,
                        shards: b,
                        noIsolation: y,
                        inert: x,
                        setCallbacks: u,
                        allowPinchZoom: !!E,
                        lockRef: i
                    }), d ? s.cloneElement(s.Children.only(f), c(c({}, R), {
                        ref: S
                    })) : s.createElement(void 0 === C ? "div" : C, c({}, R, {
                        className: p,
                        ref: S
                    }), f))
                });
            h.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, h.classNames = {
                fullWidth: f,
                zeroRight: d
            };
            var g = function(e) {
                var t = e.sideCar,
                    n = function(e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                        return n
                    }(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return s.createElement(r, p({}, n))
            };
            g.isSideCarExport = !0;
            var b = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(r) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = u || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var o, i;
                                (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), i = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                w = function() {
                    var e = b();
                    return function(t, n) {
                        s.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                y = function() {
                    var e = w();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                x = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                E = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                C = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [E(n), E(r), E(o)]
                },
                M = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return x;
                    var t = C(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                S = y(),
                R = function(e, t, n, r) {
                    var o = e.left,
                        i = e.top,
                        l = e.right,
                        a = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(d, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(f, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(d, " .").concat(d, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(f, " .").concat(f, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
                },
                k = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r,
                        i = s.useMemo(function() {
                            return M(o)
                        }, [o]);
                    return s.createElement(S, {
                        styles: R(i, !t, o, n ? "" : "!important")
                    })
                },
                _ = !1;
            if ("undefined" != typeof window) try {
                var P = Object.defineProperty({}, "passive", {
                    get: function() {
                        return _ = !0, !0
                    }
                });
                window.addEventListener("test", P, P), window.removeEventListener("test", P, P)
            } catch (T) {
                _ = !1
            }
            var A = !!_ && {
                    passive: !1
                },
                O = function(e, t) {
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
                },
                D = function(e, t) {
                    var n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), L(e, n)) {
                            var r = Z(e, n);
                            if (r[1] > r[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== document.body);
                    return !1
                },
                L = function(e, t) {
                    return "v" === e ? O(t, "overflowY") : O(t, "overflowX")
                },
                Z = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                I = function(e, t, n, r, o) {
                    var i, l = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                        a = l * r,
                        u = n.target,
                        c = t.contains(u),
                        s = !1,
                        d = a > 0,
                        f = 0,
                        p = 0;
                    do {
                        var m = Z(e, u),
                            v = m[0],
                            h = m[1] - m[2] - l * v;
                        (v || h) && L(e, u) && (f += h, p += v), u = u.parentNode
                    } while (!c && u !== document.body || c && (t.contains(u) || t === u));
                    return d && (o && 0 === f || !o && a > f) ? s = !0 : !d && (o && 0 === p || !o && -a > p) && (s = !0), s
                },
                W = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                F = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                N = function(e) {
                    return e && "current" in e ? e.current : e
                },
                z = 0,
                V = [],
                j = (m.useMedium(function(e) {
                    var t = s.useRef([]),
                        n = s.useRef([0, 0]),
                        r = s.useRef(),
                        o = s.useState(z++)[0],
                        i = s.useState(function() {
                            return y()
                        })[0],
                        l = s.useRef(e);
                    s.useEffect(function() {
                        l.current = e
                    }, [e]), s.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var t = (function(e, t, n) {
                                if (n || 2 == arguments.length)
                                    for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                                return e.concat(r || Array.prototype.slice.call(t))
                            })([e.lockRef.current], (e.shards || []).map(N), !0).filter(Boolean);
                            return t.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(o))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(o))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var a = s.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !l.current.allowPinchZoom;
                            var o, i = W(e),
                                a = n.current,
                                u = "deltaX" in e ? e.deltaX : a[0] - i[0],
                                c = "deltaY" in e ? e.deltaY : a[1] - i[1],
                                s = e.target,
                                d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === s.type) return !1;
                            var f = D(d, s);
                            if (!f) return !0;
                            if (f ? o = d : (o = "v" === d ? "h" : "v", f = D(d, s)), !f) return !1;
                            if (!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o) return !0;
                            var p = r.current || o;
                            return I(p, t, e, "h" === p ? u : c, !0)
                        }, []),
                        u = s.useCallback(function(e) {
                            if (V.length && V[V.length - 1] === i) {
                                var n = "deltaY" in e ? F(e) : W(e),
                                    r = t.current.filter(function(t) {
                                        var r;
                                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    })[0];
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var o = (l.current.shards || []).map(N).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (o.length > 0 ? a(e, o[0]) : !l.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        c = s.useCallback(function(e, n, r, o) {
                            var i = {
                                name: e,
                                delta: n,
                                target: r,
                                should: o
                            };
                            t.current.push(i), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== i
                                })
                            }, 1)
                        }, []),
                        d = s.useCallback(function(e) {
                            n.current = W(e), r.current = void 0
                        }, []),
                        f = s.useCallback(function(t) {
                            c(t.type, F(t), t.target, a(t, e.lockRef.current))
                        }, []),
                        p = s.useCallback(function(t) {
                            c(t.type, W(t), t.target, a(t, e.lockRef.current))
                        }, []);
                    s.useEffect(function() {
                        return V.push(i), e.setCallbacks({
                                onScrollCapture: f,
                                onWheelCapture: f,
                                onTouchMoveCapture: p
                            }), document.addEventListener("wheel", u, A), document.addEventListener("touchmove", u, A), document.addEventListener("touchstart", d, A),
                            function() {
                                V = V.filter(function(e) {
                                    return e !== i
                                }), document.removeEventListener("wheel", u, A), document.removeEventListener("touchmove", u, A), document.removeEventListener("touchstart", d, A)
                            }
                    }, []);
                    var m = e.removeScrollBar,
                        v = e.inert;
                    return s.createElement(s.Fragment, null, v ? s.createElement(i, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, m ? s.createElement(k, {
                        gapMode: "margin"
                    }) : null)
                }), g),
                B = s.forwardRef(function(e, t) {
                    return s.createElement(h, c({}, e, {
                        ref: t,
                        sideCar: j
                    }))
                });
            B.classNames = h.classNames;
            var H = B
        },
        3250: function(e, t, n) {
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(7294),
                o = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                i = r.useState,
                l = r.useEffect,
                a = r.useLayoutEffect,
                u = r.useDebugValue;

            function c(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !o(e, n)
                } catch (r) {
                    return !0
                }
            }
            var s = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    r = i({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    o = r[0].inst,
                    s = r[1];
                return a(function() {
                    o.value = n, o.getSnapshot = t, c(o) && s({
                        inst: o
                    })
                }, [e, n, t]), l(function() {
                    return c(o) && s({
                        inst: o
                    }), e(function() {
                        c(o) && s({
                            inst: o
                        })
                    })
                }, [e]), u(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : s
        },
        6742: function(e, t, n) {
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(7294),
                o = n(1688),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                l = o.useSyncExternalStore,
                a = r.useRef,
                u = r.useEffect,
                c = r.useMemo,
                s = r.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
                var d = a(null);
                if (null === d.current) {
                    var f = {
                        hasValue: !1,
                        value: null
                    };
                    d.current = f
                } else f = d.current;
                d = c(function() {
                    function e(e) {
                        if (!u) {
                            if (u = !0, l = e, e = r(e), void 0 !== o && f.hasValue) {
                                var t = f.value;
                                if (o(t, e)) return a = t
                            }
                            return a = e
                        }
                        if (t = a, i(l, e)) return t;
                        var n = r(e);
                        return void 0 !== o && o(t, n) ? t : (l = e, a = n)
                    }
                    var l, a, u = !1,
                        c = void 0 === n ? null : n;
                    return [function() {
                        return e(t())
                    }, null === c ? void 0 : function() {
                        return e(c())
                    }]
                }, [t, n, r, o]);
                var p = l(e, d[0], d[1]);
                return u(function() {
                    f.hasValue = !0, f.value = p
                }, [p]), s(p), p
            }
        },
        1688: function(e, t, n) {
            e.exports = n(3250)
        },
        2798: function(e, t, n) {
            e.exports = n(6742)
        },
        7462: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });

            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
        },
        6206: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return r
                }
            });

            function r(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (null == e || e(r), !1 === n || !r.defaultPrevented) return null == t ? void 0 : t(r)
                }
            }
        },
        952: function(e, t, n) {
            n.d(t, {
                Ee: function() {
                    return b
                },
                NY: function() {
                    return w
                },
                fC: function() {
                    return g
                }
            });
            var r = n(7462),
                o = n(7294),
                i = n(5360),
                l = n(9698),
                a = n(9981),
                u = n(5320);
            let c = "Avatar",
                [s, d] = (0, i.b)(c),
                [f, p] = s(c),
                m = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeAvatar: n,
                        ...i
                    } = e, [l, a] = (0, o.useState)("idle");
                    return (0, o.createElement)(f, {
                        scope: n,
                        imageLoadingStatus: l,
                        onImageLoadingStatusChange: a
                    }, (0, o.createElement)(u.WV.span, (0, r.Z)({}, i, {
                        ref: t
                    })))
                }),
                v = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeAvatar: n,
                        src: i,
                        onLoadingStatusChange: c = () => {},
                        ...s
                    } = e, d = p("AvatarImage", n), f = function(e) {
                        let [t, n] = (0, o.useState)("idle");
                        return (0, o.useEffect)(() => {
                            if (!e) {
                                n("error");
                                return
                            }
                            let t = !0,
                                r = new window.Image,
                                o = e => () => {
                                    t && n(e)
                                };
                            return n("loading"), r.onload = o("loaded"), r.onerror = o("error"), r.src = e, () => {
                                t = !1
                            }
                        }, [e]), t
                    }(i), m = (0, l.W)(e => {
                        c(e), d.onImageLoadingStatusChange(e)
                    });
                    return (0, a.b)(() => {
                        "idle" !== f && m(f)
                    }, [f, m]), "loaded" === f ? (0, o.createElement)(u.WV.img, (0, r.Z)({}, s, {
                        ref: t,
                        src: i
                    })) : null
                }),
                h = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeAvatar: n,
                        delayMs: i,
                        ...l
                    } = e, a = p("AvatarFallback", n), [c, s] = (0, o.useState)(void 0 === i);
                    return (0, o.useEffect)(() => {
                        if (void 0 !== i) {
                            let e = window.setTimeout(() => s(!0), i);
                            return () => window.clearTimeout(e)
                        }
                    }, [i]), c && "loaded" !== a.imageLoadingStatus ? (0, o.createElement)(u.WV.span, (0, r.Z)({}, l, {
                        ref: t
                    })) : null
                }),
                g = m,
                b = v,
                w = h
        },
        5936: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return a
                }
            });
            var r = n(7294),
                o = n(5360),
                i = n(8771),
                l = n(8426);

            function a(e) {
                let t = e + "CollectionProvider",
                    [n, a] = (0, o.b)(t),
                    [u, c] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    s = e => {
                        let {
                            scope: t,
                            children: n
                        } = e, o = r.useRef(null), i = r.useRef(new Map).current;
                        return r.createElement(u, {
                            scope: t,
                            itemMap: i,
                            collectionRef: o
                        }, n)
                    },
                    d = e + "CollectionSlot",
                    f = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o
                        } = e, a = c(d, n), u = (0, i.e)(t, a.collectionRef);
                        return r.createElement(l.g7, {
                            ref: u
                        }, o)
                    }),
                    p = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    v = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o,
                            ...a
                        } = e, u = r.useRef(null), s = (0, i.e)(t, u), d = c(p, n);
                        return r.useEffect(() => (d.itemMap.set(u, {
                            ref: u,
                            ...a
                        }), () => void d.itemMap.delete(u))), r.createElement(l.g7, {
                            [m]: "",
                            ref: s
                        }, o)
                    });
                return [{
                    Provider: s,
                    Slot: f,
                    ItemSlot: v
                }, function(t) {
                    let n = c(e + "CollectionConsumer", t),
                        o = r.useCallback(() => {
                            let e = n.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll(`[${m}]`)),
                                r = Array.from(n.itemMap.values()),
                                o = r.sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                            return o
                        }, [n.collectionRef, n.itemMap]);
                    return o
                }, a]
            }
        },
        8771: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return o
                },
                e: function() {
                    return i
                }
            });
            var r = n(7294);

            function o(...e) {
                return t => e.forEach(e => {
                    var n;
                    "function" == typeof(n = e) ? n(t): null != n && (n.current = t)
                })
            }

            function i(...e) {
                return (0, r.useCallback)(o(...e), e)
            }
        },
        5360: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return i
                },
                k: function() {
                    return o
                }
            });
            var r = n(7294);

            function o(e, t) {
                let n = (0, r.createContext)(t);

                function o(e) {
                    let {
                        children: t,
                        ...o
                    } = e, i = (0, r.useMemo)(() => o, Object.values(o));
                    return (0, r.createElement)(n.Provider, {
                        value: i
                    }, t)
                }
                return o.displayName = e + "Provider", [o, function(o) {
                    let i = (0, r.useContext)(n);
                    if (i) return i;
                    if (void 0 !== t) return t;
                    throw Error(`\`${o}\` must be used within \`${e}\``)
                }]
            }

            function i(e, t = []) {
                let n = [],
                    o = () => {
                        let t = n.map(e => (0, r.createContext)(e));
                        return function(n) {
                            let o = (null == n ? void 0 : n[e]) || t;
                            return (0, r.useMemo)(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: o
                                }
                            }), [n, o])
                        }
                    };
                return o.scopeName = e, [function(t, o) {
                    let i = (0, r.createContext)(o),
                        l = n.length;

                    function a(t) {
                        let {
                            scope: n,
                            children: o,
                            ...a
                        } = t, u = (null == n ? void 0 : n[e][l]) || i, c = (0, r.useMemo)(() => a, Object.values(a));
                        return (0, r.createElement)(u.Provider, {
                            value: c
                        }, o)
                    }
                    return n = [...n, o], a.displayName = t + "Provider", [a, function(n, a) {
                        let u = (null == a ? void 0 : a[e][l]) || i,
                            c = (0, r.useContext)(u);
                        if (c) return c;
                        if (void 0 !== o) return o;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => {
                                let o = n(e),
                                    i = o[`__scope${r}`];
                                return { ...t,
                                    ...i
                                }
                            }, {});
                            return (0, r.useMemo)(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(o, ...t)]
            }
        },
        8990: function(e, t, n) {
            n.d(t, {
                gm: function() {
                    return i
                }
            });
            var r = n(7294);
            let o = (0, r.createContext)(void 0);

            function i(e) {
                let t = (0, r.useContext)(o);
                return e || t || "ltr"
            }
        },
        6063: function(e, t, n) {
            let r;
            n.d(t, {
                XB: function() {
                    return f
                }
            });
            var o = n(7462),
                i = n(7294),
                l = n(6206),
                a = n(5320),
                u = n(8771),
                c = n(9698);
            let s = "dismissableLayer.update",
                d = (0, i.createContext)({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                f = (0, i.forwardRef)((e, t) => {
                    var n;
                    let {
                        disableOutsidePointerEvents: f = !1,
                        onEscapeKeyDown: v,
                        onPointerDownOutside: h,
                        onFocusOutside: g,
                        onInteractOutside: b,
                        onDismiss: w,
                        ...y
                    } = e, x = (0, i.useContext)(d), [E, C] = (0, i.useState)(null), M = null !== (n = null == E ? void 0 : E.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document, [, S] = (0, i.useState)({}), R = (0, u.e)(t, e => C(e)), k = Array.from(x.layers), [_] = [...x.layersWithOutsidePointerEventsDisabled].slice(-1), P = k.indexOf(_), T = E ? k.indexOf(E) : -1, A = x.layersWithOutsidePointerEventsDisabled.size > 0, O = T >= P, D = function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, c.W)(e),
                            r = (0, i.useRef)(!1),
                            o = (0, i.useRef)(() => {});
                        return (0, i.useEffect)(() => {
                            let e = e => {
                                    if (e.target && !r.current) {
                                        let i = {
                                            originalEvent: e
                                        };

                                        function l() {
                                            m("dismissableLayer.pointerDownOutside", n, i, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
                                            once: !0
                                        })) : l()
                                    }
                                    r.current = !1
                                },
                                i = window.setTimeout(() => {
                                    t.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
                            }
                        }, [t, n]), {
                            onPointerDownCapture: () => r.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...x.branches].some(e => e.contains(t));
                        !O || n || (null == h || h(e), null == b || b(e), e.defaultPrevented || null == w || w())
                    }, M), L = function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, c.W)(e),
                            r = (0, i.useRef)(!1);
                        return (0, i.useEffect)(() => {
                            let e = e => {
                                e.target && !r.current && m("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }, [t, n]), {
                            onFocusCapture: () => r.current = !0,
                            onBlurCapture: () => r.current = !1
                        }
                    }(e => {
                        let t = e.target,
                            n = [...x.branches].some(e => e.contains(t));
                        n || (null == g || g(e), null == b || b(e), e.defaultPrevented || null == w || w())
                    }, M);
                    return ! function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, c.W)(e);
                        (0, i.useEffect)(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e), () => t.removeEventListener("keydown", e)
                        }, [n, t])
                    }(e => {
                        let t = T === x.layers.size - 1;
                        t && (null == v || v(e), !e.defaultPrevented && w && (e.preventDefault(), w()))
                    }, M), (0, i.useEffect)(() => {
                        if (E) return f && (0 === x.layersWithOutsidePointerEventsDisabled.size && (r = M.body.style.pointerEvents, M.body.style.pointerEvents = "none"), x.layersWithOutsidePointerEventsDisabled.add(E)), x.layers.add(E), p(), () => {
                            f && 1 === x.layersWithOutsidePointerEventsDisabled.size && (M.body.style.pointerEvents = r)
                        }
                    }, [E, M, f, x]), (0, i.useEffect)(() => () => {
                        E && (x.layers.delete(E), x.layersWithOutsidePointerEventsDisabled.delete(E), p())
                    }, [E, x]), (0, i.useEffect)(() => {
                        let e = () => S({});
                        return document.addEventListener(s, e), () => document.removeEventListener(s, e)
                    }, []), (0, i.createElement)(a.WV.div, (0, o.Z)({}, y, {
                        ref: R,
                        style: {
                            pointerEvents: A ? O ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, l.M)(e.onFocusCapture, L.onFocusCapture),
                        onBlurCapture: (0, l.M)(e.onBlurCapture, L.onBlurCapture),
                        onPointerDownCapture: (0, l.M)(e.onPointerDownCapture, D.onPointerDownCapture)
                    }))
                });

            function p() {
                let e = new CustomEvent(s);
                document.dispatchEvent(e)
            }

            function m(e, t, n, {
                discrete: r
            }) {
                let o = n.originalEvent.target,
                    i = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n
                    });
                t && o.addEventListener(e, t, {
                    once: !0
                }), r ? (0, a.jH)(o, i) : o.dispatchEvent(i)
            }
        },
        6169: function(e, t, n) {
            n.d(t, {
                Ee: function() {
                    return V
                },
                Rk: function() {
                    return j
                },
                Tr: function() {
                    return U
                },
                Uv: function() {
                    return Z
                },
                VY: function() {
                    return I
                },
                Z0: function() {
                    return H
                },
                ZA: function() {
                    return W
                },
                __: function() {
                    return F
                },
                ck: function() {
                    return N
                },
                fC: function() {
                    return D
                },
                fF: function() {
                    return K
                },
                oC: function() {
                    return z
                },
                tu: function() {
                    return Y
                },
                wU: function() {
                    return B
                },
                xz: function() {
                    return L
                }
            });
            var r = n(7462),
                o = n(7294),
                i = n(6206),
                l = n(8771),
                a = n(5360),
                u = n(7342),
                c = n(5320),
                s = n(686),
                d = n(1276);
            let f = "DropdownMenu",
                [p, m] = (0, a.b)(f, [s.Wf]),
                v = (0, s.Wf)(),
                [h, g] = p(f),
                b = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: n,
                        dir: i,
                        open: l,
                        defaultOpen: a,
                        onOpenChange: c,
                        modal: f = !0
                    } = e, p = v(t), m = (0, o.useRef)(null), [g = !1, b] = (0, u.T)({
                        prop: l,
                        defaultProp: a,
                        onChange: c
                    });
                    return (0, o.createElement)(h, {
                        scope: t,
                        triggerId: (0, d.M)(),
                        triggerRef: m,
                        contentId: (0, d.M)(),
                        open: g,
                        onOpenChange: b,
                        onOpenToggle: (0, o.useCallback)(() => b(e => !e), [b]),
                        modal: f
                    }, (0, o.createElement)(s.fC, (0, r.Z)({}, p, {
                        open: g,
                        onOpenChange: b,
                        dir: i,
                        modal: f
                    }), n))
                },
                w = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        disabled: a = !1,
                        ...u
                    } = e, d = g("DropdownMenuTrigger", n), f = v(n);
                    return (0, o.createElement)(s.ee, (0, r.Z)({
                        asChild: !0
                    }, f), (0, o.createElement)(c.WV.button, (0, r.Z)({
                        type: "button",
                        id: d.triggerId,
                        "aria-haspopup": "menu",
                        "aria-expanded": d.open,
                        "aria-controls": d.open ? d.contentId : void 0,
                        "data-state": d.open ? "open" : "closed",
                        "data-disabled": a ? "" : void 0,
                        disabled: a
                    }, u, {
                        ref: (0, l.F)(t, d.triggerRef),
                        onPointerDown: (0, i.M)(e.onPointerDown, e => {
                            a || 0 !== e.button || !1 !== e.ctrlKey || (d.onOpenToggle(), d.open || e.preventDefault())
                        }),
                        onKeyDown: (0, i.M)(e.onKeyDown, e => {
                            !a && (["Enter", " "].includes(e.key) && d.onOpenToggle(), "ArrowDown" === e.key && d.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                        })
                    })))
                }),
                y = e => {
                    let {
                        __scopeDropdownMenu: t,
                        ...n
                    } = e, i = v(t);
                    return (0, o.createElement)(s.h_, (0, r.Z)({}, i, n))
                },
                x = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...l
                    } = e, a = g("DropdownMenuContent", n), u = v(n), c = (0, o.useRef)(!1);
                    return (0, o.createElement)(s.VY, (0, r.Z)({
                        id: a.contentId,
                        "aria-labelledby": a.triggerId
                    }, u, l, {
                        ref: t,
                        onCloseAutoFocus: (0, i.M)(e.onCloseAutoFocus, e => {
                            var t;
                            c.current || null === (t = a.triggerRef.current) || void 0 === t || t.focus(), c.current = !1, e.preventDefault()
                        }),
                        onInteractOutside: (0, i.M)(e.onInteractOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey,
                                r = 2 === t.button || n;
                            (!a.modal || r) && (c.current = !0)
                        }),
                        style: { ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                E = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...i
                    } = e, l = v(n);
                    return (0, o.createElement)(s.ZA, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                C = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...i
                    } = e, l = v(n);
                    return (0, o.createElement)(s.__, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                M = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...i
                    } = e, l = v(n);
                    return (0, o.createElement)(s.ck, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                S = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...i
                    } = e, l = v(n);
                    return (0, o.createElement)(s.oC, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                R = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...i
                    } = e, l = v(n);
                    return (0, o.createElement)(s.Ee, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                k = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...i
                    } = e, l = v(n);
                    return (0, o.createElement)(s.Rk, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                _ = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...i
                    } = e, l = v(n);
                    return (0, o.createElement)(s.wU, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                P = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...i
                    } = e, l = v(n);
                    return (0, o.createElement)(s.Z0, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                T = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: n,
                        open: i,
                        onOpenChange: l,
                        defaultOpen: a
                    } = e, c = v(t), [d = !1, f] = (0, u.T)({
                        prop: i,
                        defaultProp: a,
                        onChange: l
                    });
                    return (0, o.createElement)(s.Tr, (0, r.Z)({}, c, {
                        open: d,
                        onOpenChange: f
                    }), n)
                },
                A = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...i
                    } = e, l = v(n);
                    return (0, o.createElement)(s.fF, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                O = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...i
                    } = e, l = v(n);
                    return (0, o.createElement)(s.tu, (0, r.Z)({}, l, i, {
                        ref: t,
                        style: { ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                D = b,
                L = w,
                Z = y,
                I = x,
                W = E,
                F = C,
                N = M,
                z = S,
                V = R,
                j = k,
                B = _,
                H = P,
                U = T,
                K = A,
                Y = O
        },
        7552: function(e, t, n) {
            n.d(t, {
                EW: function() {
                    return i
                }
            });
            var r = n(7294);
            let o = 0;

            function i() {
                (0, r.useEffect)(() => {
                    var e, t;
                    let n = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : l()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : l()), o++, () => {
                        1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
                    }
                }, [])
            }

            function l() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
        },
        5420: function(e, t, n) {
            let r;
            n.d(t, {
                M: function() {
                    return f
                }
            });
            var o = n(7462),
                i = n(7294),
                l = n(8771),
                a = n(5320),
                u = n(9698);
            let c = "focusScope.autoFocusOnMount",
                s = "focusScope.autoFocusOnUnmount",
                d = {
                    bubbles: !1,
                    cancelable: !0
                },
                f = (0, i.forwardRef)((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: f,
                        onUnmountAutoFocus: g,
                        ...b
                    } = e, [w, y] = (0, i.useState)(null), x = (0, u.W)(f), E = (0, u.W)(g), C = (0, i.useRef)(null), M = (0, l.e)(t, e => y(e)), S = (0, i.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    (0, i.useEffect)(() => {
                        if (r) {
                            function e(e) {
                                if (S.paused || !w) return;
                                let t = e.target;
                                w.contains(t) ? C.current = t : v(C.current, {
                                    select: !0
                                })
                            }

                            function t(e) {
                                if (S.paused || !w) return;
                                let t = e.relatedTarget;
                                null === t || w.contains(t) || v(C.current, {
                                    select: !0
                                })
                            }
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                let t = document.activeElement;
                                for (let n of e) n.removedNodes.length > 0 && !(null != w && w.contains(t)) && v(w)
                            });
                            return w && n.observe(w, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, w, S.paused]), (0, i.useEffect)(() => {
                        if (w) {
                            h.add(S);
                            let e = document.activeElement,
                                t = w.contains(e);
                            if (!t) {
                                let n = new CustomEvent(c, d);
                                w.addEventListener(c, x), w.dispatchEvent(n), n.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let r of e)
                                        if (v(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(p(w).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && v(w))
                            }
                            return () => {
                                w.removeEventListener(c, x), setTimeout(() => {
                                    let t = new CustomEvent(s, d);
                                    w.addEventListener(s, E), w.dispatchEvent(t), t.defaultPrevented || v(null != e ? e : document.body, {
                                        select: !0
                                    }), w.removeEventListener(s, E), h.remove(S)
                                }, 0)
                            }
                        }
                    }, [w, x, E, S]);
                    let R = (0, i.useCallback)(e => {
                        if (!n && !r || S.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let i = e.currentTarget,
                                [l, a] = function(e) {
                                    let t = p(e),
                                        n = m(t, e),
                                        r = m(t.reverse(), e);
                                    return [n, r]
                                }(i);
                            l && a ? e.shiftKey || o !== a ? e.shiftKey && o === l && (e.preventDefault(), n && v(a, {
                                select: !0
                            })) : (e.preventDefault(), n && v(l, {
                                select: !0
                            })) : o === i && e.preventDefault()
                        }
                    }, [n, r, S.paused]);
                    return (0, i.createElement)(a.WV.div, (0, o.Z)({
                        tabIndex: -1
                    }, b, {
                        ref: M,
                        onKeyDown: R
                    }))
                });

            function p(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode(e) {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function m(e, t) {
                for (let n of e)
                    if (! function(e, {
                            upTo: t
                        }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function v(e, {
                select: t = !1
            } = {}) {
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            let h = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && (null == t || t.pause()), (r = g(r, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (r = g(r, e))[0]) || void 0 === t || t.resume()
                }
            });

            function g(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
        },
        1276: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return u
                }
            });
            var r, o = n(7294),
                i = n(9981);
            let l = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
                a = 0;

            function u(e) {
                let [t, n] = o.useState(l());
                return (0, i.b)(() => {
                    e || n(e => null != e ? e : String(a++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        686: function(e, t, n) {
            n.d(t, {
                ee: function() {
                    return tz
                },
                Eh: function() {
                    return tq
                },
                oC: function() {
                    return tK
                },
                VY: function() {
                    return tj
                },
                ZA: function() {
                    return tB
                },
                ck: function() {
                    return tU
                },
                wU: function() {
                    return tX
                },
                __: function() {
                    return tH
                },
                h_: function() {
                    return tV
                },
                Ee: function() {
                    return tY
                },
                Rk: function() {
                    return tG
                },
                fC: function() {
                    return tN
                },
                Z0: function() {
                    return t$
                },
                Tr: function() {
                    return tJ
                },
                tu: function() {
                    return t0
                },
                fF: function() {
                    return tQ
                },
                Wf: function() {
                    return e1
                }
            });
            var r = n(7462),
                o = n(7294),
                i = n(6206),
                l = n(5936),
                a = n(8771),
                u = n(5360),
                c = n(8990),
                s = n(6063),
                d = n(7552),
                f = n(5420),
                p = n(1276);

            function m(e) {
                return e.split("-")[1]
            }

            function v(e) {
                return "y" === e ? "height" : "width"
            }

            function h(e) {
                return e.split("-")[0]
            }

            function g(e) {
                return ["top", "bottom"].includes(h(e)) ? "x" : "y"
            }

            function b(e, t, n) {
                let r, {
                        reference: o,
                        floating: i
                    } = e,
                    l = o.x + o.width / 2 - i.width / 2,
                    a = o.y + o.height / 2 - i.height / 2,
                    u = g(t),
                    c = v(u),
                    s = o[c] / 2 - i[c] / 2,
                    d = "x" === u;
                switch (h(t)) {
                    case "top":
                        r = {
                            x: l,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: l,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        r = {
                            x: o.x + o.width,
                            y: a
                        };
                        break;
                    case "left":
                        r = {
                            x: o.x - i.width,
                            y: a
                        };
                        break;
                    default:
                        r = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (m(t)) {
                    case "start":
                        r[u] -= s * (n && d ? -1 : 1);
                        break;
                    case "end":
                        r[u] += s * (n && d ? -1 : 1)
                }
                return r
            }
            let w = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = n, a = i.filter(Boolean), u = await (null == l.isRTL ? void 0 : l.isRTL(t)), c = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: s,
                    y: d
                } = b(c, r, u), f = r, p = {}, m = 0;
                for (let v = 0; v < a.length; v++) {
                    let {
                        name: h,
                        fn: g
                    } = a[v], {
                        x: w,
                        y: y,
                        data: x,
                        reset: E
                    } = await g({
                        x: s,
                        y: d,
                        initialPlacement: r,
                        placement: f,
                        strategy: o,
                        middlewareData: p,
                        rects: c,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    s = null != w ? w : s, d = null != y ? y : d, p = { ...p,
                        [h]: { ...p[h],
                            ...x
                        }
                    }, E && m <= 50 && (m++, "object" == typeof E && (E.placement && (f = E.placement), E.rects && (c = !0 === E.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : E.rects), {
                        x: s,
                        y: d
                    } = b(c, f, u)), v = -1)
                }
                return {
                    x: s,
                    y: d,
                    placement: f,
                    strategy: o,
                    middlewareData: p
                }
            };

            function y(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function x(e) {
                return { ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }
            async function E(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: o,
                    platform: i,
                    rects: l,
                    elements: a,
                    strategy: u
                } = e, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: s = "viewport",
                    elementContext: d = "floating",
                    altBoundary: f = !1,
                    padding: p = 0
                } = t, m = y(p), v = a[f ? "floating" === d ? "reference" : "floating" : d], h = x(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(v))) || n ? v : v.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: c,
                    rootBoundary: s,
                    strategy: u
                })), g = "floating" === d ? { ...l.floating,
                    x: r,
                    y: o
                } : l.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), w = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
                    x: 1,
                    y: 1
                }, E = x(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: g,
                    offsetParent: b,
                    strategy: u
                }) : g);
                return {
                    top: (h.top - E.top + m.top) / w.y,
                    bottom: (E.bottom - h.bottom + m.bottom) / w.y,
                    left: (h.left - E.left + m.left) / w.x,
                    right: (E.right - h.right + m.right) / w.x
                }
            }
            let C = Math.min,
                M = Math.max,
                S = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            element: n,
                            padding: r = 0
                        } = e || {}, {
                            x: o,
                            y: i,
                            placement: l,
                            rects: a,
                            platform: u,
                            elements: c
                        } = t;
                        if (null == n) return {};
                        let s = y(r),
                            d = {
                                x: o,
                                y: i
                            },
                            f = g(l),
                            p = v(f),
                            h = await u.getDimensions(n),
                            b = "y" === f,
                            w = b ? "top" : "left",
                            x = b ? "bottom" : "right",
                            E = b ? "clientHeight" : "clientWidth",
                            S = a.reference[p] + a.reference[f] - d[f] - a.floating[p],
                            R = d[f] - a.reference[f],
                            k = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(n)),
                            _ = k ? k[E] : 0;
                        _ && await (null == u.isElement ? void 0 : u.isElement(k)) || (_ = c.floating[E] || a.floating[p]);
                        let P = s[w],
                            T = _ - h[p] - s[x],
                            A = _ / 2 - h[p] / 2 + (S / 2 - R / 2),
                            O = M(P, C(A, T)),
                            D = null != m(l) && A != O && a.reference[p] / 2 - (A < P ? s[w] : s[x]) - h[p] / 2 < 0;
                        return {
                            [f]: d[f] - (D ? A < P ? P - A : T - A : 0),
                            data: {
                                [f]: O,
                                centerOffset: A - O
                            }
                        }
                    }
                }),
                R = ["top", "right", "bottom", "left"],
                k = (R.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []), {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                });

            function _(e) {
                return e.replace(/left|right|bottom|top/g, e => k[e])
            }
            let P = {
                start: "end",
                end: "start"
            };

            function T(e) {
                return e.replace(/start|end/g, e => P[e])
            }

            function A(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function O(e) {
                return R.some(t => e[t] >= 0)
            }

            function D(e) {
                return "x" === e ? "y" : "x"
            }

            function L(e) {
                var t;
                return (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function Z(e) {
                return L(e).getComputedStyle(e)
            }

            function I(e) {
                return e instanceof L(e).Node
            }

            function W(e) {
                return I(e) ? (e.nodeName || "").toLowerCase() : ""
            }

            function F(e) {
                return e instanceof L(e).HTMLElement
            }

            function N(e) {
                return e instanceof L(e).Element
            }

            function z(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof L(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function V(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = Z(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function j(e) {
                let t = B(),
                    n = Z(e);
                return "none" !== n.transform || "none" !== n.perspective || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function B() {
                return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function H(e) {
                return ["html", "body", "#document"].includes(W(e))
            }
            let U = Math.min,
                K = Math.max,
                Y = Math.round;

            function G(e) {
                let t = Z(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = F(e),
                    i = o ? e.offsetWidth : n,
                    l = o ? e.offsetHeight : r,
                    a = Y(n) !== i || Y(r) !== l;
                return a && (n = i, r = l), {
                    width: n,
                    height: r,
                    fallback: a
                }
            }

            function X(e) {
                return N(e) ? e : e.contextElement
            }
            let $ = {
                x: 1,
                y: 1
            };

            function q(e) {
                let t = X(e);
                if (!F(t)) return $;
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        fallback: i
                    } = G(t),
                    l = (i ? Y(n.width) : n.width) / r,
                    a = (i ? Y(n.height) : n.height) / o;
                return l && Number.isFinite(l) || (l = 1), a && Number.isFinite(a) || (a = 1), {
                    x: l,
                    y: a
                }
            }
            let J = {
                x: 0,
                y: 0
            };

            function Q(e, t, n) {
                var r, o;
                if (void 0 === t && (t = !0), !B()) return J;
                let i = e ? L(e) : window;
                return !n || t && n !== i ? J : {
                    x: (null == (r = i.visualViewport) ? void 0 : r.offsetLeft) || 0,
                    y: (null == (o = i.visualViewport) ? void 0 : o.offsetTop) || 0
                }
            }

            function ee(e, t, n, r) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let o = e.getBoundingClientRect(),
                    i = X(e),
                    l = $;
                t && (r ? N(r) && (l = q(r)) : l = q(e));
                let a = Q(i, n, r),
                    u = (o.left + a.x) / l.x,
                    c = (o.top + a.y) / l.y,
                    s = o.width / l.x,
                    d = o.height / l.y;
                if (i) {
                    let f = L(i),
                        p = r && N(r) ? L(r) : r,
                        m = f.frameElement;
                    for (; m && r && p !== f;) {
                        let v = q(m),
                            h = m.getBoundingClientRect(),
                            g = getComputedStyle(m);
                        h.x += (m.clientLeft + parseFloat(g.paddingLeft)) * v.x, h.y += (m.clientTop + parseFloat(g.paddingTop)) * v.y, u *= v.x, c *= v.y, s *= v.x, d *= v.y, u += h.x, c += h.y, m = L(m).frameElement
                    }
                }
                return x({
                    width: s,
                    height: d,
                    x: u,
                    y: c
                })
            }

            function et(e) {
                return ((I(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function en(e) {
                return N(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function er(e) {
                return ee(et(e)).left + en(e).scrollLeft
            }

            function eo(e) {
                if ("html" === W(e)) return e;
                let t = e.assignedSlot || e.parentNode || z(e) && e.host || et(e);
                return z(t) ? t.host : t
            }

            function ei(e, t) {
                var n;
                void 0 === t && (t = []);
                let r = function e(t) {
                        let n = eo(t);
                        return H(n) ? n.ownerDocument.body : F(n) && V(n) ? n : e(n)
                    }(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = L(r);
                return o ? t.concat(i, i.visualViewport || [], V(r) ? r : []) : t.concat(r, ei(r))
            }

            function el(e, t, n) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let n = L(e),
                        r = et(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        l = r.clientHeight,
                        a = 0,
                        u = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let c = B();
                        (!c || c && "fixed" === t) && (a = o.offsetLeft, u = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: u
                    }
                }(e, n);
                else if ("document" === t) r = function(e) {
                    let t = et(e),
                        n = en(e),
                        r = e.ownerDocument.body,
                        o = K(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = K(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        l = -n.scrollLeft + er(e),
                        a = -n.scrollTop;
                    return "rtl" === Z(r).direction && (l += K(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: l,
                        y: a
                    }
                }(et(e));
                else if (N(t)) r = function(e, t) {
                    let n = ee(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = F(e) ? q(e) : {
                            x: 1,
                            y: 1
                        };
                    return {
                        width: e.clientWidth * i.x,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    let o = Q(e);
                    r = { ...t,
                        x: t.x - o.x,
                        y: t.y - o.y
                    }
                }
                return x(r)
            }

            function ea(e, t) {
                return F(e) && "fixed" !== Z(e).position ? t ? t(e) : e.offsetParent : null
            }

            function eu(e, t) {
                let n = L(e);
                if (!F(e)) return n;
                let r = ea(e, t);
                for (; r && ["table", "td", "th"].includes(W(r)) && "static" === Z(r).position;) r = ea(r, t);
                return r && ("html" === W(r) || "body" === W(r) && "static" === Z(r).position && !j(r)) ? n : r || function(e) {
                    let t = eo(e);
                    for (; F(t) && !H(t);) {
                        if (j(t)) return t;
                        t = eo(t)
                    }
                    return null
                }(e) || n
            }
            let ec = {
                getClippingRect: function(e) {
                    let {
                        element: t,
                        boundary: n,
                        rootBoundary: r,
                        strategy: o
                    } = e, i = "clippingAncestors" === n ? function(e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = ei(e).filter(e => N(e) && "body" !== W(e)),
                            o = null,
                            i = "fixed" === Z(e).position,
                            l = i ? eo(e) : e;
                        for (; N(l) && !H(l);) {
                            let a = Z(l),
                                u = j(l);
                            u || "fixed" !== a.position || (o = null), (i ? !u && !o : !u && "static" === a.position && o && ["absolute", "fixed"].includes(o.position) || V(l) && !u && function e(t, n) {
                                let r = eo(t);
                                return !(r === n || !N(r) || H(r)) && ("fixed" === Z(r).position || e(r, n))
                            }(e, l)) ? r = r.filter(e => e !== l) : o = a, l = eo(l)
                        }
                        return t.set(e, r), r
                    }(t, this._c) : [].concat(n), l = [...i, r], a = l[0], u = l.reduce((e, n) => {
                        let r = el(t, n, o);
                        return e.top = K(r.top, e.top), e.right = U(r.right, e.right), e.bottom = U(r.bottom, e.bottom), e.left = K(r.left, e.left), e
                    }, el(t, a, o));
                    return {
                        width: u.right - u.left,
                        height: u.bottom - u.top,
                        x: u.left,
                        y: u.top
                    }
                },
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {
                        rect: t,
                        offsetParent: n,
                        strategy: r
                    } = e, o = F(n), i = et(n);
                    if (n === i) return t;
                    let l = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        a = {
                            x: 1,
                            y: 1
                        },
                        u = {
                            x: 0,
                            y: 0
                        };
                    if ((o || !o && "fixed" !== r) && (("body" !== W(n) || V(i)) && (l = en(n)), F(n))) {
                        let c = ee(n);
                        a = q(n), u.x = c.x + n.clientLeft, u.y = c.y + n.clientTop
                    }
                    return {
                        width: t.width * a.x,
                        height: t.height * a.y,
                        x: t.x * a.x - l.scrollLeft * a.x + u.x,
                        y: t.y * a.y - l.scrollTop * a.y + u.y
                    }
                },
                isElement: N,
                getDimensions: function(e) {
                    return G(e)
                },
                getOffsetParent: eu,
                getDocumentElement: et,
                getScale: q,
                async getElementRects(e) {
                    let {
                        reference: t,
                        floating: n,
                        strategy: r
                    } = e, o = this.getOffsetParent || eu, i = this.getDimensions;
                    return {
                        reference: function(e, t, n) {
                            let r = F(t),
                                o = et(t),
                                i = "fixed" === n,
                                l = ee(e, !0, i, t),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                u = {
                                    x: 0,
                                    y: 0
                                };
                            if (r || !r && !i) {
                                if (("body" !== W(t) || V(o)) && (a = en(t)), F(t)) {
                                    let c = ee(t, !0, i, t);
                                    u.x = c.x + t.clientLeft, u.y = c.y + t.clientTop
                                } else o && (u.x = er(o))
                            }
                            return {
                                x: l.left + a.scrollLeft - u.x,
                                y: l.top + a.scrollTop - u.y,
                                width: l.width,
                                height: l.height
                            }
                        }(t, await o(n), r),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await i(n)
                        }
                    }
                },
                getClientRects: e => Array.from(e.getClientRects()),
                isRTL: e => "rtl" === Z(e).direction
            };

            function es(e, t, n, r) {
                void 0 === r && (r = {});
                let {
                    ancestorScroll: o = !0,
                    ancestorResize: i = !0,
                    elementResize: l = !0,
                    animationFrame: a = !1
                } = r, u = o || i ? [...N(e) ? ei(e) : e.contextElement ? ei(e.contextElement) : [], ...ei(t)] : [];
                u.forEach(e => {
                    let t = !N(e) && e.toString().includes("V");
                    o && (!a || t) && e.addEventListener("scroll", n, {
                        passive: !0
                    }), i && e.addEventListener("resize", n)
                });
                let c, s = null;
                l && (s = new ResizeObserver(() => {
                    n()
                }), N(e) && !a && s.observe(e), N(e) || !e.contextElement || a || s.observe(e.contextElement), s.observe(t));
                let d = a ? ee(e) : null;
                return a && function t() {
                    let r = ee(e);
                    d && (r.x !== d.x || r.y !== d.y || r.width !== d.width || r.height !== d.height) && n(), d = r, c = requestAnimationFrame(t)
                }(), n(), () => {
                    var e;
                    u.forEach(e => {
                        o && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
                    }), null == (e = s) || e.disconnect(), s = null, a && cancelAnimationFrame(c)
                }
            }
            let ed = (e, t, n) => {
                let r = new Map,
                    o = {
                        platform: ec,
                        ...n
                    },
                    i = { ...o.platform,
                        _c: r
                    };
                return w(e, t, { ...o,
                    platform: i
                })
            };
            var ef = n(3935);
            let ep = e => {
                let {
                    element: t,
                    padding: n
                } = e;
                return {
                    name: "arrow",
                    options: e,
                    fn(e) {
                        if (t && ({}).hasOwnProperty.call(t, "current")) {
                            if (null != t.current) return S({
                                element: t.current,
                                padding: n
                            }).fn(e)
                        } else if (t) return S({
                            element: t,
                            padding: n
                        }).fn(e);
                        return {}
                    }
                }
            };
            var em = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;

            function ev(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) != t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!ev(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let i = o[r];
                        if (("_owner" !== i || !e.$$typeof) && !ev(e[i], t[i])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function eh(e) {
                if ("undefined" == typeof window) return 1;
                let t = e.ownerDocument.defaultView || window;
                return t.devicePixelRatio || 1
            }

            function eg(e, t) {
                let n = eh(e);
                return Math.round(t * n) / n
            }

            function eb(e) {
                let t = o.useRef(e);
                return em(() => {
                    t.current = e
                }), t
            }
            var ew = n(5320);
            let ey = (0, o.forwardRef)((e, t) => {
                let {
                    children: n,
                    width: i = 10,
                    height: l = 5,
                    ...a
                } = e;
                return (0, o.createElement)(ew.WV.svg, (0, r.Z)({}, a, {
                    ref: t,
                    width: i,
                    height: l,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none"
                }), e.asChild ? n : (0, o.createElement)("polygon", {
                    points: "0,0 30,0 15,10"
                }))
            });
            var ex = n(9698),
                eE = n(9981);
            let eC = "Popper",
                [eM, eS] = (0, u.b)(eC),
                [eR, ek] = eM(eC),
                e_ = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [r, i] = (0, o.useState)(null);
                    return (0, o.createElement)(eR, {
                        scope: t,
                        anchor: r,
                        onAnchorChange: i
                    }, n)
                },
                eP = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: i,
                        ...l
                    } = e, u = ek("PopperAnchor", n), c = (0, o.useRef)(null), s = (0, a.e)(t, c);
                    return (0, o.useEffect)(() => {
                        u.onAnchorChange((null == i ? void 0 : i.current) || c.current)
                    }), i ? null : (0, o.createElement)(ew.WV.div, (0, r.Z)({}, l, {
                        ref: s
                    }))
                }),
                eT = "PopperContent",
                [eA, eO] = eM(eT),
                eD = (0, o.forwardRef)((e, t) => {
                    var n, i, l, u, c, s, d, f, p, b, w, y, x, S;
                    let {
                        __scopePopper: R,
                        side: k = "bottom",
                        sideOffset: P = 0,
                        align: L = "center",
                        alignOffset: Z = 0,
                        arrowPadding: I = 0,
                        collisionBoundary: W = [],
                        collisionPadding: F = 0,
                        sticky: N = "partial",
                        hideWhenDetached: z = !1,
                        avoidCollisions: V = !0,
                        onPlaced: j,
                        ...B
                    } = e, H = ek(eT, R), [U, K] = (0, o.useState)(null), Y = (0, a.e)(t, e => K(e)), [G, X] = (0, o.useState)(null), $ = function(e) {
                        let [t, n] = (0, o.useState)(void 0);
                        return (0, eE.b)(() => {
                            if (e) {
                                n({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let r, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let i = t[0];
                                    if ("borderBoxSize" in i) {
                                        let l = i.borderBoxSize,
                                            a = Array.isArray(l) ? l[0] : l;
                                        r = a.inlineSize, o = a.blockSize
                                    } else r = e.offsetWidth, o = e.offsetHeight;
                                    n({
                                        width: r,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            n(void 0)
                        }, [e]), t
                    }(G), q = null !== (n = null == $ ? void 0 : $.width) && void 0 !== n ? n : 0, J = null !== (i = null == $ ? void 0 : $.height) && void 0 !== i ? i : 0, Q = "number" == typeof F ? F : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...F
                    }, ee = Array.isArray(W) ? W : [W], et = ee.length > 0, en = {
                        padding: Q,
                        boundary: ee.filter(eI),
                        altBoundary: et
                    }, {
                        refs: er,
                        floatingStyles: eo,
                        placement: ei,
                        isPositioned: el,
                        middlewareData: ea
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: r = [],
                            platform: i,
                            elements: {
                                reference: l,
                                floating: a
                            } = {},
                            transform: u = !0,
                            whileElementsMounted: c,
                            open: s
                        } = e, [d, f] = o.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [p, m] = o.useState(r);
                        ev(p, r) || m(r);
                        let [v, h] = o.useState(null), [g, b] = o.useState(null), w = o.useCallback(e => {
                            e != C.current && (C.current = e, h(e))
                        }, [h]), y = o.useCallback(e => {
                            e !== M.current && (M.current = e, b(e))
                        }, [b]), x = l || v, E = a || g, C = o.useRef(null), M = o.useRef(null), S = o.useRef(d), R = eb(c), k = eb(i), _ = o.useCallback(() => {
                            if (!C.current || !M.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: p
                            };
                            k.current && (e.platform = k.current), ed(C.current, M.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !0
                                };
                                P.current && !ev(S.current, t) && (S.current = t, ef.flushSync(() => {
                                    f(t)
                                }))
                            })
                        }, [p, t, n, k]);
                        em(() => {
                            !1 === s && S.current.isPositioned && (S.current.isPositioned = !1, f(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [s]);
                        let P = o.useRef(!1);
                        em(() => (P.current = !0, () => {
                            P.current = !1
                        }), []), em(() => {
                            if (x && (C.current = x), E && (M.current = E), x && E) {
                                if (R.current) return R.current(x, E, _);
                                _()
                            }
                        }, [x, E, _, R]);
                        let T = o.useMemo(() => ({
                                reference: C,
                                floating: M,
                                setReference: w,
                                setFloating: y
                            }), [w, y]),
                            A = o.useMemo(() => ({
                                reference: x,
                                floating: E
                            }), [x, E]),
                            O = o.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!A.floating) return e;
                                let t = eg(A.floating, d.x),
                                    r = eg(A.floating, d.y);
                                return u ? { ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...eh(A.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, u, A.floating, d.x, d.y]);
                        return o.useMemo(() => ({ ...d,
                            update: _,
                            refs: T,
                            elements: A,
                            floatingStyles: O
                        }), [d, _, T, A, O])
                    }({
                        strategy: "fixed",
                        placement: k + ("center" !== L ? "-" + L : ""),
                        whileElementsMounted: es,
                        elements: {
                            reference: H.anchor
                        },
                        middleware: [{
                            name: "offset",
                            options: p = {
                                mainAxis: P + J,
                                alignmentAxis: Z
                            },
                            async fn(e) {
                                let {
                                    x: t,
                                    y: n
                                } = e, r = await async function(e, t) {
                                    let {
                                        placement: n,
                                        platform: r,
                                        elements: o
                                    } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), l = h(n), a = m(n), u = "x" === g(n), c = ["left", "top"].includes(l) ? -1 : 1, s = i && u ? -1 : 1, d = "function" == typeof t ? t(e) : t, {
                                        mainAxis: f,
                                        crossAxis: p,
                                        alignmentAxis: v
                                    } = "number" == typeof d ? {
                                        mainAxis: d,
                                        crossAxis: 0,
                                        alignmentAxis: null
                                    } : {
                                        mainAxis: 0,
                                        crossAxis: 0,
                                        alignmentAxis: null,
                                        ...d
                                    };
                                    return a && "number" == typeof v && (p = "end" === a ? -1 * v : v), u ? {
                                        x: p * s,
                                        y: f * c
                                    } : {
                                        x: f * c,
                                        y: p * s
                                    }
                                }(e, p);
                                return {
                                    x: t + r.x,
                                    y: n + r.y,
                                    data: r
                                }
                            }
                        }, V && {
                            name: "shift",
                            options: w = {
                                mainAxis: !0,
                                crossAxis: !1,
                                limiter: "partial" === N ? (void 0 === b && (b = {}), {
                                    options: b,
                                    fn(e) {
                                        let {
                                            x: t,
                                            y: n,
                                            placement: r,
                                            rects: o,
                                            middlewareData: i
                                        } = e, {
                                            offset: l = 0,
                                            mainAxis: a = !0,
                                            crossAxis: u = !0
                                        } = b, c = {
                                            x: t,
                                            y: n
                                        }, s = g(r), d = D(s), f = c[s], p = c[d], m = "function" == typeof l ? l(e) : l, v = "number" == typeof m ? {
                                            mainAxis: m,
                                            crossAxis: 0
                                        } : {
                                            mainAxis: 0,
                                            crossAxis: 0,
                                            ...m
                                        };
                                        if (a) {
                                            let w = "y" === s ? "height" : "width",
                                                y = o.reference[s] - o.floating[w] + v.mainAxis,
                                                x = o.reference[s] + o.reference[w] - v.mainAxis;
                                            f < y ? f = y : f > x && (f = x)
                                        }
                                        if (u) {
                                            var E, C;
                                            let M = "y" === s ? "width" : "height",
                                                S = ["top", "left"].includes(h(r)),
                                                R = o.reference[d] - o.floating[M] + (S && (null == (E = i.offset) ? void 0 : E[d]) || 0) + (S ? 0 : v.crossAxis),
                                                k = o.reference[d] + o.reference[M] + (S ? 0 : (null == (C = i.offset) ? void 0 : C[d]) || 0) - (S ? v.crossAxis : 0);
                                            p < R ? p = R : p > k && (p = k)
                                        }
                                        return {
                                            [s]: f,
                                            [d]: p
                                        }
                                    }
                                }) : void 0,
                                ...en
                            },
                            async fn(e) {
                                let {
                                    x: t,
                                    y: n,
                                    placement: r
                                } = e, {
                                    mainAxis: o = !0,
                                    crossAxis: i = !1,
                                    limiter: l = {
                                        fn(e) {
                                            let {
                                                x: t,
                                                y: n
                                            } = e;
                                            return {
                                                x: t,
                                                y: n
                                            }
                                        }
                                    },
                                    ...a
                                } = w, u = {
                                    x: t,
                                    y: n
                                }, c = await E(e, a), s = g(h(r)), d = D(s), f = u[s], p = u[d];
                                o && (f = M(f + c["y" === s ? "top" : "left"], C(f, f - c["y" === s ? "bottom" : "right"]))), i && (p = M(p + c["y" === d ? "top" : "left"], C(p, p - c["y" === d ? "bottom" : "right"])));
                                let m = l.fn({ ...e,
                                    [s]: f,
                                    [d]: p
                                });
                                return { ...m,
                                    data: {
                                        x: m.x - t,
                                        y: m.y - n
                                    }
                                }
                            }
                        }, V && {
                            name: "flip",
                            options: y = { ...en
                            },
                            async fn(e) {
                                var t, n, r, o;
                                let {
                                    placement: i,
                                    middlewareData: l,
                                    rects: a,
                                    initialPlacement: u,
                                    platform: c,
                                    elements: s
                                } = e, {
                                    mainAxis: d = !0,
                                    crossAxis: f = !0,
                                    fallbackPlacements: p,
                                    fallbackStrategy: b = "bestFit",
                                    fallbackAxisSideDirection: w = "none",
                                    flipAlignment: x = !0,
                                    ...C
                                } = y, M = h(i), S = h(u) === u, R = await (null == c.isRTL ? void 0 : c.isRTL(s.floating)), k = p || (S || !x ? [_(u)] : function(e) {
                                    let t = _(e);
                                    return [T(e), t, T(t)]
                                }(u));
                                p || "none" === w || k.push(... function(e, t, n, r) {
                                    let o = m(e),
                                        i = function(e, t, n) {
                                            let r = ["left", "right"],
                                                o = ["right", "left"];
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    return n ? t ? o : r : t ? r : o;
                                                case "left":
                                                case "right":
                                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                                default:
                                                    return []
                                            }
                                        }(h(e), "start" === n, r);
                                    return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(T)))), i
                                }(u, x, w, R));
                                let P = [u, ...k],
                                    A = await E(e, C),
                                    O = [],
                                    D = (null == (t = l.flip) ? void 0 : t.overflows) || [];
                                if (d && O.push(A[M]), f) {
                                    let {
                                        main: L,
                                        cross: Z
                                    } = function(e, t, n) {
                                        void 0 === n && (n = !1);
                                        let r = m(e),
                                            o = g(e),
                                            i = v(o),
                                            l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                        return t.reference[i] > t.floating[i] && (l = _(l)), {
                                            main: l,
                                            cross: _(l)
                                        }
                                    }(i, a, R);
                                    O.push(A[L], A[Z])
                                }
                                if (D = [...D, {
                                        placement: i,
                                        overflows: O
                                    }], !O.every(e => e <= 0)) {
                                    let I = ((null == (n = l.flip) ? void 0 : n.index) || 0) + 1,
                                        W = P[I];
                                    if (W) return {
                                        data: {
                                            index: I,
                                            overflows: D
                                        },
                                        reset: {
                                            placement: W
                                        }
                                    };
                                    let F = null == (r = D.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : r.placement;
                                    if (!F) switch (b) {
                                        case "bestFit":
                                            {
                                                let N = null == (o = D.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : o[0];N && (F = N);
                                                break
                                            }
                                        case "initialPlacement":
                                            F = u
                                    }
                                    if (i !== F) return {
                                        reset: {
                                            placement: F
                                        }
                                    }
                                }
                                return {}
                            }
                        }, {
                            name: "size",
                            options: x = { ...en,
                                apply({
                                    elements: e,
                                    rects: t,
                                    availableWidth: n,
                                    availableHeight: r
                                }) {
                                    let {
                                        width: o,
                                        height: i
                                    } = t.reference, l = e.floating.style;
                                    l.setProperty("--radix-popper-available-width", `${n}px`), l.setProperty("--radix-popper-available-height", `${r}px`), l.setProperty("--radix-popper-anchor-width", `${o}px`), l.setProperty("--radix-popper-anchor-height", `${i}px`)
                                }
                            },
                            async fn(e) {
                                let t, n;
                                let {
                                    placement: r,
                                    rects: o,
                                    platform: i,
                                    elements: l
                                } = e, {
                                    apply: a = () => {},
                                    ...u
                                } = x, c = await E(e, u), s = h(r), d = m(r), f = "x" === g(r), {
                                    width: p,
                                    height: v
                                } = o.floating;
                                "top" === s || "bottom" === s ? (t = s, n = d === (await (null == i.isRTL ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (n = s, t = "end" === d ? "top" : "bottom");
                                let b = v - c[t],
                                    w = p - c[n],
                                    y = !e.middlewareData.shift,
                                    S = b,
                                    R = w;
                                if (f) {
                                    let k = p - c.left - c.right;
                                    R = d || y ? C(w, k) : k
                                } else {
                                    let _ = v - c.top - c.bottom;
                                    S = d || y ? C(b, _) : _
                                }
                                if (y && !d) {
                                    let P = M(c.left, 0),
                                        T = M(c.right, 0),
                                        A = M(c.top, 0),
                                        O = M(c.bottom, 0);
                                    f ? R = p - 2 * (0 !== P || 0 !== T ? P + T : M(c.left, c.right)) : S = v - 2 * (0 !== A || 0 !== O ? A + O : M(c.top, c.bottom))
                                }
                                await a({ ...e,
                                    availableWidth: R,
                                    availableHeight: S
                                });
                                let D = await i.getDimensions(l.floating);
                                return p !== D.width || v !== D.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }, G && ep({
                            element: G,
                            padding: I
                        }), eW({
                            arrowWidth: q,
                            arrowHeight: J
                        }), z && {
                            name: "hide",
                            options: S = {
                                strategy: "referenceHidden"
                            },
                            async fn(e) {
                                let {
                                    strategy: t = "referenceHidden",
                                    ...n
                                } = S, {
                                    rects: r
                                } = e;
                                switch (t) {
                                    case "referenceHidden":
                                        {
                                            let o = A(await E(e, { ...n,
                                                elementContext: "reference"
                                            }), r.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: o,
                                                    referenceHidden: O(o)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let i = A(await E(e, { ...n,
                                                altBoundary: !0
                                            }), r.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: i,
                                                    escaped: O(i)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }]
                    }), [eu, ec] = eF(ei), ey = (0, ex.W)(j);
                    (0, eE.b)(() => {
                        el && (null == ey || ey())
                    }, [el, ey]);
                    let eC = null === (l = ea.arrow) || void 0 === l ? void 0 : l.x,
                        eM = null === (u = ea.arrow) || void 0 === u ? void 0 : u.y,
                        eS = (null === (c = ea.arrow) || void 0 === c ? void 0 : c.centerOffset) !== 0,
                        [eR, e_] = (0, o.useState)();
                    return (0, eE.b)(() => {
                        U && e_(window.getComputedStyle(U).zIndex)
                    }, [U]), (0, o.createElement)("div", {
                        ref: er.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...eo,
                            transform: el ? eo.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: eR,
                            "--radix-popper-transform-origin": [null === (s = ea.transformOrigin) || void 0 === s ? void 0 : s.x, null === (d = ea.transformOrigin) || void 0 === d ? void 0 : d.y].join(" ")
                        },
                        dir: e.dir
                    }, (0, o.createElement)(eA, {
                        scope: R,
                        placedSide: eu,
                        onArrowChange: X,
                        arrowX: eC,
                        arrowY: eM,
                        shouldHideArrow: eS
                    }, (0, o.createElement)(ew.WV.div, (0, r.Z)({
                        "data-side": eu,
                        "data-align": ec
                    }, B, {
                        ref: Y,
                        style: { ...B.style,
                            animation: el ? void 0 : "none",
                            opacity: null !== (f = ea.hide) && void 0 !== f && f.referenceHidden ? 0 : void 0
                        }
                    }))))
                }),
                eL = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                eZ = (0, o.forwardRef)(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...i
                    } = e, l = eO("PopperArrow", n), a = eL[l.placedSide];
                    return (0, o.createElement)("span", {
                        ref: l.onArrowChange,
                        style: {
                            position: "absolute",
                            left: l.arrowX,
                            top: l.arrowY,
                            [a]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[l.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[l.placedSide],
                            visibility: l.shouldHideArrow ? "hidden" : void 0
                        }
                    }, (0, o.createElement)(ey, (0, r.Z)({}, i, {
                        ref: t,
                        style: { ...i.style,
                            display: "block"
                        }
                    })))
                });

            function eI(e) {
                return null !== e
            }
            let eW = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, i, l;
                    let {
                        placement: a,
                        rects: u,
                        middlewareData: c
                    } = t, s = (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, d = s ? 0 : e.arrowWidth, f = s ? 0 : e.arrowHeight, [p, m] = eF(a), v = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[m], h = (null !== (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + d / 2, g = (null !== (i = null === (l = c.arrow) || void 0 === l ? void 0 : l.y) && void 0 !== i ? i : 0) + f / 2, b = "", w = "";
                    return "bottom" === p ? (b = s ? v : `${h}px`, w = `${-f}px`) : "top" === p ? (b = s ? v : `${h}px`, w = `${u.floating.height+f}px`) : "right" === p ? (b = `${-f}px`, w = s ? v : `${g}px`) : "left" === p && (b = `${u.floating.width+f}px`, w = s ? v : `${g}px`), {
                        data: {
                            x: b,
                            y: w
                        }
                    }
                }
            });

            function eF(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            var eN = n(2651),
                ez = n(9115),
                eV = n(6681),
                ej = n(8426),
                eB = n(3541),
                eH = n(2779);
            let eU = ["Enter", " "],
                eK = ["ArrowUp", "PageDown", "End"],
                eY = ["ArrowDown", "PageUp", "Home", ...eK],
                eG = {
                    ltr: [...eU, "ArrowRight"],
                    rtl: [...eU, "ArrowLeft"]
                },
                eX = {
                    ltr: ["ArrowLeft"],
                    rtl: ["ArrowRight"]
                },
                e$ = "Menu",
                [eq, eJ, eQ] = (0, l.B)(e$),
                [e0, e1] = (0, u.b)(e$, [eQ, eS, eV.Pc]),
                e2 = eS(),
                e6 = (0, eV.Pc)(),
                [e4, e9] = e0(e$),
                [e7, e5] = e0(e$),
                e3 = e => {
                    let {
                        __scopeMenu: t,
                        open: n = !1,
                        children: r,
                        dir: i,
                        onOpenChange: l,
                        modal: a = !0
                    } = e, u = e2(t), [s, d] = (0, o.useState)(null), f = (0, o.useRef)(!1), p = (0, ex.W)(l), m = (0, c.gm)(i);
                    return (0, o.useEffect)(() => {
                        let e = () => {
                                f.current = !0, document.addEventListener("pointerdown", t, {
                                    capture: !0,
                                    once: !0
                                }), document.addEventListener("pointermove", t, {
                                    capture: !0,
                                    once: !0
                                })
                            },
                            t = () => f.current = !1;
                        return document.addEventListener("keydown", e, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("keydown", e, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", t, {
                                capture: !0
                            }), document.removeEventListener("pointermove", t, {
                                capture: !0
                            })
                        }
                    }, []), (0, o.createElement)(e_, u, (0, o.createElement)(e4, {
                        scope: t,
                        open: n,
                        onOpenChange: p,
                        content: s,
                        onContentChange: d
                    }, (0, o.createElement)(e7, {
                        scope: t,
                        onClose: (0, o.useCallback)(() => p(!1), [p]),
                        isUsingKeyboardRef: f,
                        dir: m,
                        modal: a
                    }, r)))
                },
                e8 = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...i
                    } = e, l = e2(n);
                    return (0, o.createElement)(eP, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                te = "MenuPortal",
                [tt, tn] = e0(te, {
                    forceMount: void 0
                }),
                tr = e => {
                    let {
                        __scopeMenu: t,
                        forceMount: n,
                        children: r,
                        container: i
                    } = e, l = e9(te, t);
                    return (0, o.createElement)(tt, {
                        scope: t,
                        forceMount: n
                    }, (0, o.createElement)(ez.z, {
                        present: n || l.open
                    }, (0, o.createElement)(eN.h, {
                        asChild: !0,
                        container: i
                    }, r)))
                },
                to = "MenuContent",
                [ti, tl] = e0(to),
                ta = (0, o.forwardRef)((e, t) => {
                    let n = tn(to, e.__scopeMenu),
                        {
                            forceMount: i = n.forceMount,
                            ...l
                        } = e,
                        a = e9(to, e.__scopeMenu),
                        u = e5(to, e.__scopeMenu);
                    return (0, o.createElement)(eq.Provider, {
                        scope: e.__scopeMenu
                    }, (0, o.createElement)(ez.z, {
                        present: i || a.open
                    }, (0, o.createElement)(eq.Slot, {
                        scope: e.__scopeMenu
                    }, u.modal ? (0, o.createElement)(tu, (0, r.Z)({}, l, {
                        ref: t
                    })) : (0, o.createElement)(tc, (0, r.Z)({}, l, {
                        ref: t
                    })))))
                }),
                tu = (0, o.forwardRef)((e, t) => {
                    let n = e9(to, e.__scopeMenu),
                        l = (0, o.useRef)(null),
                        u = (0, a.e)(t, l);
                    return (0, o.useEffect)(() => {
                        let e = l.current;
                        if (e) return (0, eB.Ry)(e)
                    }, []), (0, o.createElement)(ts, (0, r.Z)({}, e, {
                        ref: u,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: n.open,
                        disableOutsideScroll: !0,
                        onFocusOutside: (0, i.M)(e.onFocusOutside, e => e.preventDefault(), {
                            checkForDefaultPrevented: !1
                        }),
                        onDismiss: () => n.onOpenChange(!1)
                    }))
                }),
                tc = (0, o.forwardRef)((e, t) => {
                    let n = e9(to, e.__scopeMenu);
                    return (0, o.createElement)(ts, (0, r.Z)({}, e, {
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        onDismiss: () => n.onOpenChange(!1)
                    }))
                }),
                ts = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        loop: l = !1,
                        trapFocus: u,
                        onOpenAutoFocus: c,
                        onCloseAutoFocus: p,
                        disableOutsidePointerEvents: m,
                        onEntryFocus: v,
                        onEscapeKeyDown: h,
                        onPointerDownOutside: g,
                        onFocusOutside: b,
                        onInteractOutside: w,
                        onDismiss: y,
                        disableOutsideScroll: x,
                        ...E
                    } = e, C = e9(to, n), M = e5(to, n), S = e2(n), R = e6(n), k = eJ(n), [_, P] = (0, o.useState)(null), T = (0, o.useRef)(null), A = (0, a.e)(t, T, C.onContentChange), O = (0, o.useRef)(0), D = (0, o.useRef)(""), L = (0, o.useRef)(0), Z = (0, o.useRef)(null), I = (0, o.useRef)("right"), W = (0, o.useRef)(0), F = x ? eH.Z : o.Fragment, N = x ? {
                        as: ej.g7,
                        allowPinchZoom: !0
                    } : void 0, z = e => {
                        var t, n;
                        let r = D.current + e,
                            o = k().filter(e => !e.disabled),
                            i = document.activeElement,
                            l = null === (t = o.find(e => e.ref.current === i)) || void 0 === t ? void 0 : t.textValue,
                            a = o.map(e => e.textValue),
                            u = function(e, t, n) {
                                var r;
                                let o = t.length > 1 && Array.from(t).every(e => e === t[0]),
                                    i = o ? t[0] : t,
                                    l = n ? e.indexOf(n) : -1,
                                    a = (r = Math.max(l, 0), e.map((t, n) => e[(r + n) % e.length])),
                                    u = 1 === i.length;
                                u && (a = a.filter(e => e !== n));
                                let c = a.find(e => e.toLowerCase().startsWith(i.toLowerCase()));
                                return c !== n ? c : void 0
                            }(a, r, l),
                            c = null === (n = o.find(e => e.textValue === u)) || void 0 === n ? void 0 : n.ref.current;
                        ! function e(t) {
                            D.current = t, window.clearTimeout(O.current), "" !== t && (O.current = window.setTimeout(() => e(""), 1e3))
                        }(r), c && setTimeout(() => c.focus())
                    };
                    (0, o.useEffect)(() => () => window.clearTimeout(O.current), []), (0, d.EW)();
                    let V = (0, o.useCallback)(e => {
                        var t, n;
                        let r = I.current === (null === (t = Z.current) || void 0 === t ? void 0 : t.side);
                        return r && function(e, t) {
                            if (!t) return !1;
                            let n = {
                                x: e.clientX,
                                y: e.clientY
                            };
                            return function(e, t) {
                                let {
                                    x: n,
                                    y: r
                                } = e, o = !1;
                                for (let i = 0, l = t.length - 1; i < t.length; l = i++) {
                                    let a = t[i].x,
                                        u = t[i].y,
                                        c = t[l].x,
                                        s = t[l].y,
                                        d = u > r != s > r && n < (c - a) * (r - u) / (s - u) + a;
                                    d && (o = !o)
                                }
                                return o
                            }(n, t)
                        }(e, null === (n = Z.current) || void 0 === n ? void 0 : n.area)
                    }, []);
                    return (0, o.createElement)(ti, {
                        scope: n,
                        searchRef: D,
                        onItemEnter: (0, o.useCallback)(e => {
                            V(e) && e.preventDefault()
                        }, [V]),
                        onItemLeave: (0, o.useCallback)(e => {
                            var t;
                            V(e) || (null === (t = T.current) || void 0 === t || t.focus(), P(null))
                        }, [V]),
                        onTriggerLeave: (0, o.useCallback)(e => {
                            V(e) && e.preventDefault()
                        }, [V]),
                        pointerGraceTimerRef: L,
                        onPointerGraceIntentChange: (0, o.useCallback)(e => {
                            Z.current = e
                        }, [])
                    }, (0, o.createElement)(F, N, (0, o.createElement)(f.M, {
                        asChild: !0,
                        trapped: u,
                        onMountAutoFocus: (0, i.M)(c, e => {
                            var t;
                            e.preventDefault(), null === (t = T.current) || void 0 === t || t.focus()
                        }),
                        onUnmountAutoFocus: p
                    }, (0, o.createElement)(s.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: m,
                        onEscapeKeyDown: h,
                        onPointerDownOutside: g,
                        onFocusOutside: b,
                        onInteractOutside: w,
                        onDismiss: y
                    }, (0, o.createElement)(eV.fC, (0, r.Z)({
                        asChild: !0
                    }, R, {
                        dir: M.dir,
                        orientation: "vertical",
                        loop: l,
                        currentTabStopId: _,
                        onCurrentTabStopIdChange: P,
                        onEntryFocus: (0, i.M)(v, e => {
                            M.isUsingKeyboardRef.current || e.preventDefault()
                        })
                    }), (0, o.createElement)(eD, (0, r.Z)({
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": tZ(C.open),
                        "data-radix-menu-content": "",
                        dir: M.dir
                    }, S, E, {
                        ref: A,
                        style: {
                            outline: "none",
                            ...E.style
                        },
                        onKeyDown: (0, i.M)(E.onKeyDown, e => {
                            let t = e.target,
                                n = t.closest("[data-radix-menu-content]") === e.currentTarget,
                                r = e.ctrlKey || e.altKey || e.metaKey,
                                o = 1 === e.key.length;
                            n && ("Tab" === e.key && e.preventDefault(), !r && o && z(e.key));
                            let i = T.current;
                            if (e.target !== i || !eY.includes(e.key)) return;
                            e.preventDefault();
                            let l = k().filter(e => !e.disabled),
                                a = l.map(e => e.ref.current);
                            eK.includes(e.key) && a.reverse(),
                                function(e) {
                                    let t = document.activeElement;
                                    for (let n of e)
                                        if (n === t || (n.focus(), document.activeElement !== t)) return
                                }(a)
                        }),
                        onBlur: (0, i.M)(e.onBlur, e => {
                            e.currentTarget.contains(e.target) || (window.clearTimeout(O.current), D.current = "")
                        }),
                        onPointerMove: (0, i.M)(e.onPointerMove, tF(e => {
                            let t = e.target,
                                n = W.current !== e.clientX;
                            if (e.currentTarget.contains(t) && n) {
                                let r = e.clientX > W.current ? "right" : "left";
                                I.current = r, W.current = e.clientX
                            }
                        }))
                    })))))))
                }),
                td = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...i
                    } = e;
                    return (0, o.createElement)(ew.WV.div, (0, r.Z)({
                        role: "group"
                    }, i, {
                        ref: t
                    }))
                }),
                tf = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...i
                    } = e;
                    return (0, o.createElement)(ew.WV.div, (0, r.Z)({}, i, {
                        ref: t
                    }))
                }),
                tp = "MenuItem",
                tm = "menu.itemSelect",
                tv = (0, o.forwardRef)((e, t) => {
                    let {
                        disabled: n = !1,
                        onSelect: l,
                        ...u
                    } = e, c = (0, o.useRef)(null), s = e5(tp, e.__scopeMenu), d = tl(tp, e.__scopeMenu), f = (0, a.e)(t, c), p = (0, o.useRef)(!1), m = () => {
                        let e = c.current;
                        if (!n && e) {
                            let t = new CustomEvent(tm, {
                                bubbles: !0,
                                cancelable: !0
                            });
                            e.addEventListener(tm, e => null == l ? void 0 : l(e), {
                                once: !0
                            }), (0, ew.jH)(e, t), t.defaultPrevented ? p.current = !1 : s.onClose()
                        }
                    };
                    return (0, o.createElement)(th, (0, r.Z)({}, u, {
                        ref: f,
                        disabled: n,
                        onClick: (0, i.M)(e.onClick, m),
                        onPointerDown(t) {
                            var n;
                            null === (n = e.onPointerDown) || void 0 === n || n.call(e, t), p.current = !0
                        },
                        onPointerUp: (0, i.M)(e.onPointerUp, e => {
                            var t;
                            p.current || null === (t = e.currentTarget) || void 0 === t || t.click()
                        }),
                        onKeyDown: (0, i.M)(e.onKeyDown, e => {
                            let t = "" !== d.searchRef.current;
                            !n && (!t || " " !== e.key) && eU.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                        })
                    }))
                }),
                th = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        disabled: l = !1,
                        textValue: u,
                        ...c
                    } = e, s = tl(tp, n), d = e6(n), f = (0, o.useRef)(null), p = (0, a.e)(t, f), [m, v] = (0, o.useState)(!1), [h, g] = (0, o.useState)("");
                    return (0, o.useEffect)(() => {
                        let e = f.current;
                        if (e) {
                            var t;
                            g((null !== (t = e.textContent) && void 0 !== t ? t : "").trim())
                        }
                    }, [c.children]), (0, o.createElement)(eq.ItemSlot, {
                        scope: n,
                        disabled: l,
                        textValue: null != u ? u : h
                    }, (0, o.createElement)(eV.ck, (0, r.Z)({
                        asChild: !0
                    }, d, {
                        focusable: !l
                    }), (0, o.createElement)(ew.WV.div, (0, r.Z)({
                        role: "menuitem",
                        "data-highlighted": m ? "" : void 0,
                        "aria-disabled": l || void 0,
                        "data-disabled": l ? "" : void 0
                    }, c, {
                        ref: p,
                        onPointerMove: (0, i.M)(e.onPointerMove, tF(e => {
                            if (l) s.onItemLeave(e);
                            else if (s.onItemEnter(e), !e.defaultPrevented) {
                                let t = e.currentTarget;
                                t.focus()
                            }
                        })),
                        onPointerLeave: (0, i.M)(e.onPointerLeave, tF(e => s.onItemLeave(e))),
                        onFocus: (0, i.M)(e.onFocus, () => v(!0)),
                        onBlur: (0, i.M)(e.onBlur, () => v(!1))
                    }))))
                }),
                tg = (0, o.forwardRef)((e, t) => {
                    let {
                        checked: n = !1,
                        onCheckedChange: l,
                        ...a
                    } = e;
                    return (0, o.createElement)(tC, {
                        scope: e.__scopeMenu,
                        checked: n
                    }, (0, o.createElement)(tv, (0, r.Z)({
                        role: "menuitemcheckbox",
                        "aria-checked": tI(n) ? "mixed" : n
                    }, a, {
                        ref: t,
                        "data-state": tW(n),
                        onSelect: (0, i.M)(a.onSelect, () => null == l ? void 0 : l(!!tI(n) || !n), {
                            checkForDefaultPrevented: !1
                        })
                    })))
                }),
                [tb, tw] = e0("MenuRadioGroup", {
                    value: void 0,
                    onValueChange() {}
                }),
                ty = (0, o.forwardRef)((e, t) => {
                    let {
                        value: n,
                        onValueChange: i,
                        ...l
                    } = e, a = (0, ex.W)(i);
                    return (0, o.createElement)(tb, {
                        scope: e.__scopeMenu,
                        value: n,
                        onValueChange: a
                    }, (0, o.createElement)(td, (0, r.Z)({}, l, {
                        ref: t
                    })))
                }),
                tx = (0, o.forwardRef)((e, t) => {
                    let {
                        value: n,
                        ...l
                    } = e, a = tw("MenuRadioItem", e.__scopeMenu), u = n === a.value;
                    return (0, o.createElement)(tC, {
                        scope: e.__scopeMenu,
                        checked: u
                    }, (0, o.createElement)(tv, (0, r.Z)({
                        role: "menuitemradio",
                        "aria-checked": u
                    }, l, {
                        ref: t,
                        "data-state": tW(u),
                        onSelect: (0, i.M)(l.onSelect, () => {
                            var e;
                            return null === (e = a.onValueChange) || void 0 === e ? void 0 : e.call(a, n)
                        }, {
                            checkForDefaultPrevented: !1
                        })
                    })))
                }),
                tE = "MenuItemIndicator",
                [tC, tM] = e0(tE, {
                    checked: !1
                }),
                tS = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        forceMount: i,
                        ...l
                    } = e, a = tM(tE, n);
                    return (0, o.createElement)(ez.z, {
                        present: i || tI(a.checked) || !0 === a.checked
                    }, (0, o.createElement)(ew.WV.span, (0, r.Z)({}, l, {
                        ref: t,
                        "data-state": tW(a.checked)
                    })))
                }),
                tR = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...i
                    } = e;
                    return (0, o.createElement)(ew.WV.div, (0, r.Z)({
                        role: "separator",
                        "aria-orientation": "horizontal"
                    }, i, {
                        ref: t
                    }))
                }),
                tk = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...i
                    } = e, l = e2(n);
                    return (0, o.createElement)(eZ, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                t_ = "MenuSub",
                [tP, tT] = e0(t_),
                tA = e => {
                    let {
                        __scopeMenu: t,
                        children: n,
                        open: r = !1,
                        onOpenChange: i
                    } = e, l = e9(t_, t), a = e2(t), [u, c] = (0, o.useState)(null), [s, d] = (0, o.useState)(null), f = (0, ex.W)(i);
                    return (0, o.useEffect)(() => (!1 === l.open && f(!1), () => f(!1)), [l.open, f]), (0, o.createElement)(e_, a, (0, o.createElement)(e4, {
                        scope: t,
                        open: r,
                        onOpenChange: f,
                        content: s,
                        onContentChange: d
                    }, (0, o.createElement)(tP, {
                        scope: t,
                        contentId: (0, p.M)(),
                        triggerId: (0, p.M)(),
                        trigger: u,
                        onTriggerChange: c
                    }, n)))
                },
                tO = "MenuSubTrigger",
                tD = (0, o.forwardRef)((e, t) => {
                    let n = e9(tO, e.__scopeMenu),
                        l = e5(tO, e.__scopeMenu),
                        u = tT(tO, e.__scopeMenu),
                        c = tl(tO, e.__scopeMenu),
                        s = (0, o.useRef)(null),
                        {
                            pointerGraceTimerRef: d,
                            onPointerGraceIntentChange: f
                        } = c,
                        p = {
                            __scopeMenu: e.__scopeMenu
                        },
                        m = (0, o.useCallback)(() => {
                            s.current && window.clearTimeout(s.current), s.current = null
                        }, []);
                    return (0, o.useEffect)(() => m, [m]), (0, o.useEffect)(() => {
                        let e = d.current;
                        return () => {
                            window.clearTimeout(e), f(null)
                        }
                    }, [d, f]), (0, o.createElement)(e8, (0, r.Z)({
                        asChild: !0
                    }, p), (0, o.createElement)(th, (0, r.Z)({
                        id: u.triggerId,
                        "aria-haspopup": "menu",
                        "aria-expanded": n.open,
                        "aria-controls": u.contentId,
                        "data-state": tZ(n.open)
                    }, e, {
                        ref: (0, a.F)(t, u.onTriggerChange),
                        onClick(t) {
                            var r;
                            null === (r = e.onClick) || void 0 === r || r.call(e, t), e.disabled || t.defaultPrevented || (t.currentTarget.focus(), n.open || n.onOpenChange(!0))
                        },
                        onPointerMove: (0, i.M)(e.onPointerMove, tF(t => {
                            c.onItemEnter(t), t.defaultPrevented || e.disabled || n.open || s.current || (c.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
                                n.onOpenChange(!0), m()
                            }, 100))
                        })),
                        onPointerLeave: (0, i.M)(e.onPointerLeave, tF(e => {
                            var t, r;
                            m();
                            let o = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                            if (o) {
                                let i = null === (r = n.content) || void 0 === r ? void 0 : r.dataset.side,
                                    l = "right" === i,
                                    a = o[l ? "left" : "right"],
                                    u = o[l ? "right" : "left"];
                                c.onPointerGraceIntentChange({
                                    area: [{
                                        x: e.clientX + (l ? -5 : 5),
                                        y: e.clientY
                                    }, {
                                        x: a,
                                        y: o.top
                                    }, {
                                        x: u,
                                        y: o.top
                                    }, {
                                        x: u,
                                        y: o.bottom
                                    }, {
                                        x: a,
                                        y: o.bottom
                                    }],
                                    side: i
                                }), window.clearTimeout(d.current), d.current = window.setTimeout(() => c.onPointerGraceIntentChange(null), 300)
                            } else {
                                if (c.onTriggerLeave(e), e.defaultPrevented) return;
                                c.onPointerGraceIntentChange(null)
                            }
                        })),
                        onKeyDown: (0, i.M)(e.onKeyDown, t => {
                            let r = "" !== c.searchRef.current;
                            if (!e.disabled && (!r || " " !== t.key) && eG[l.dir].includes(t.key)) {
                                var o;
                                n.onOpenChange(!0), null === (o = n.content) || void 0 === o || o.focus(), t.preventDefault()
                            }
                        })
                    })))
                }),
                tL = (0, o.forwardRef)((e, t) => {
                    let n = tn(to, e.__scopeMenu),
                        {
                            forceMount: l = n.forceMount,
                            ...u
                        } = e,
                        c = e9(to, e.__scopeMenu),
                        s = e5(to, e.__scopeMenu),
                        d = tT("MenuSubContent", e.__scopeMenu),
                        f = (0, o.useRef)(null),
                        p = (0, a.e)(t, f);
                    return (0, o.createElement)(eq.Provider, {
                        scope: e.__scopeMenu
                    }, (0, o.createElement)(ez.z, {
                        present: l || c.open
                    }, (0, o.createElement)(eq.Slot, {
                        scope: e.__scopeMenu
                    }, (0, o.createElement)(ts, (0, r.Z)({
                        id: d.contentId,
                        "aria-labelledby": d.triggerId
                    }, u, {
                        ref: p,
                        align: "start",
                        side: "rtl" === s.dir ? "left" : "right",
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus(e) {
                            var t;
                            s.isUsingKeyboardRef.current && (null === (t = f.current) || void 0 === t || t.focus()), e.preventDefault()
                        },
                        onCloseAutoFocus: e => e.preventDefault(),
                        onFocusOutside: (0, i.M)(e.onFocusOutside, e => {
                            e.target !== d.trigger && c.onOpenChange(!1)
                        }),
                        onEscapeKeyDown: (0, i.M)(e.onEscapeKeyDown, e => {
                            s.onClose(), e.preventDefault()
                        }),
                        onKeyDown: (0, i.M)(e.onKeyDown, e => {
                            let t = e.currentTarget.contains(e.target),
                                n = eX[s.dir].includes(e.key);
                            if (t && n) {
                                var r;
                                c.onOpenChange(!1), null === (r = d.trigger) || void 0 === r || r.focus(), e.preventDefault()
                            }
                        })
                    })))))
                });

            function tZ(e) {
                return e ? "open" : "closed"
            }

            function tI(e) {
                return "indeterminate" === e
            }

            function tW(e) {
                return tI(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }

            function tF(e) {
                return t => "mouse" === t.pointerType ? e(t) : void 0
            }
            let tN = e3,
                tz = e8,
                tV = tr,
                tj = ta,
                tB = td,
                tH = tf,
                tU = tv,
                tK = tg,
                tY = ty,
                tG = tx,
                tX = tS,
                t$ = tR,
                tq = tk,
                tJ = tA,
                tQ = tD,
                t0 = tL
        },
        5132: function(e, t, n) {
            n.d(t, {
                Ee: function() {
                    return et
                },
                Rk: function() {
                    return en
                },
                Tr: function() {
                    return ei
                },
                VY: function() {
                    return $
                },
                Z0: function() {
                    return eo
                },
                ZA: function() {
                    return q
                },
                __: function() {
                    return J
                },
                ck: function() {
                    return Q
                },
                fC: function() {
                    return K
                },
                fF: function() {
                    return el
                },
                h_: function() {
                    return X
                },
                oC: function() {
                    return ee
                },
                tu: function() {
                    return ea
                },
                v2: function() {
                    return Y
                },
                wU: function() {
                    return er
                },
                xz: function() {
                    return G
                }
            });
            var r = n(7462),
                o = n(7294),
                i = n(5936),
                l = n(8990),
                a = n(6206),
                u = n(8771),
                c = n(5360),
                s = n(1276),
                d = n(686),
                f = n(6681),
                p = n(5320),
                m = n(7342);
            let v = "Menubar",
                [h, g, b] = (0, i.B)(v),
                [w, y] = (0, c.b)(v, [b, f.Pc]),
                x = (0, d.Wf)(),
                E = (0, f.Pc)(),
                [C, M] = w(v),
                S = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        value: i,
                        onValueChange: a,
                        defaultValue: u,
                        loop: c = !0,
                        dir: s,
                        ...d
                    } = e, v = (0, l.gm)(s), g = E(n), [b = "", w] = (0, m.T)({
                        prop: i,
                        onChange: a,
                        defaultProp: u
                    }), [y, x] = (0, o.useState)(null);
                    return (0, o.createElement)(C, {
                        scope: n,
                        value: b,
                        onMenuOpen: (0, o.useCallback)(e => {
                            w(e), x(e)
                        }, [w]),
                        onMenuClose: (0, o.useCallback)(() => w(""), [w]),
                        onMenuToggle: (0, o.useCallback)(e => {
                            w(t => Boolean(t) ? "" : e), x(e)
                        }, [w]),
                        dir: v,
                        loop: c
                    }, (0, o.createElement)(h.Provider, {
                        scope: n
                    }, (0, o.createElement)(h.Slot, {
                        scope: n
                    }, (0, o.createElement)(f.fC, (0, r.Z)({
                        asChild: !0
                    }, g, {
                        orientation: "horizontal",
                        loop: c,
                        dir: v,
                        currentTabStopId: y,
                        onCurrentTabStopIdChange: x
                    }), (0, o.createElement)(p.WV.div, (0, r.Z)({
                        role: "menubar"
                    }, d, {
                        ref: t
                    }))))))
                }),
                R = "MenubarMenu",
                [k, _] = w(R),
                P = e => {
                    let {
                        __scopeMenubar: t,
                        value: n,
                        ...i
                    } = e, l = (0, s.M)(), a = n || l || "LEGACY_REACT_AUTO_VALUE", u = M(R, t), c = x(t), f = (0, o.useRef)(null), p = (0, o.useRef)(!1), m = u.value === a;
                    return (0, o.useEffect)(() => {
                        m || (p.current = !1)
                    }, [m]), (0, o.createElement)(k, {
                        scope: t,
                        value: a,
                        triggerId: (0, s.M)(),
                        triggerRef: f,
                        contentId: (0, s.M)(),
                        wasKeyboardTriggerOpenRef: p
                    }, (0, o.createElement)(d.fC, (0, r.Z)({}, c, {
                        open: m,
                        onOpenChange(e) {
                            e || u.onMenuClose()
                        },
                        modal: !1,
                        dir: u.dir
                    }, i)))
                },
                T = "MenubarTrigger",
                A = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        disabled: i = !1,
                        ...l
                    } = e, c = E(n), s = x(n), m = M(T, n), v = _(T, n), g = (0, o.useRef)(null), b = (0, u.e)(t, g, v.triggerRef), [w, y] = (0, o.useState)(!1), C = m.value === v.value;
                    return (0, o.createElement)(h.ItemSlot, {
                        scope: n,
                        value: v.value,
                        disabled: i
                    }, (0, o.createElement)(f.ck, (0, r.Z)({
                        asChild: !0
                    }, c, {
                        focusable: !i,
                        tabStopId: v.value
                    }), (0, o.createElement)(d.ee, (0, r.Z)({
                        asChild: !0
                    }, s), (0, o.createElement)(p.WV.button, (0, r.Z)({
                        type: "button",
                        role: "menuitem",
                        id: v.triggerId,
                        "aria-haspopup": "menu",
                        "aria-expanded": C,
                        "aria-controls": C ? v.contentId : void 0,
                        "data-highlighted": w ? "" : void 0,
                        "data-state": C ? "open" : "closed",
                        "data-disabled": i ? "" : void 0,
                        disabled: i
                    }, l, {
                        ref: b,
                        onPointerDown: (0, a.M)(e.onPointerDown, e => {
                            i || 0 !== e.button || !1 !== e.ctrlKey || (m.onMenuOpen(v.value), C || e.preventDefault())
                        }),
                        onPointerEnter: (0, a.M)(e.onPointerEnter, () => {
                            let e = Boolean(m.value);
                            if (e && !C) {
                                var t;
                                m.onMenuOpen(v.value), null === (t = g.current) || void 0 === t || t.focus()
                            }
                        }),
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            !i && (["Enter", " "].includes(e.key) && m.onMenuToggle(v.value), "ArrowDown" === e.key && m.onMenuOpen(v.value), ["Enter", " ", "ArrowDown"].includes(e.key) && (v.wasKeyboardTriggerOpenRef.current = !0, e.preventDefault()))
                        }),
                        onFocus: (0, a.M)(e.onFocus, () => y(!0)),
                        onBlur: (0, a.M)(e.onBlur, () => y(!1))
                    })))))
                }),
                O = e => {
                    let {
                        __scopeMenubar: t,
                        ...n
                    } = e, i = x(t);
                    return (0, o.createElement)(d.h_, (0, r.Z)({}, i, n))
                },
                D = "MenubarContent",
                L = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        align: i = "start",
                        ...l
                    } = e, u = x(n), c = M(D, n), s = _(D, n), f = g(n), p = (0, o.useRef)(!1);
                    return (0, o.createElement)(d.VY, (0, r.Z)({
                        id: s.contentId,
                        "aria-labelledby": s.triggerId,
                        "data-radix-menubar-content": ""
                    }, u, l, {
                        ref: t,
                        align: i,
                        onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, e => {
                            let t = Boolean(c.value);
                            if (!t && !p.current) {
                                var n;
                                null === (n = s.triggerRef.current) || void 0 === n || n.focus()
                            }
                            p.current = !1, e.preventDefault()
                        }),
                        onFocusOutside: (0, a.M)(e.onFocusOutside, e => {
                            let t = e.target,
                                n = f().some(e => {
                                    var n;
                                    return null === (n = e.ref.current) || void 0 === n ? void 0 : n.contains(t)
                                });
                            n && e.preventDefault()
                        }),
                        onInteractOutside: (0, a.M)(e.onInteractOutside, () => {
                            p.current = !0
                        }),
                        onEntryFocus(e) {
                            s.wasKeyboardTriggerOpenRef.current || e.preventDefault()
                        },
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            if (["ArrowRight", "ArrowLeft"].includes(e.key)) {
                                var t, n;
                                let r = e.target,
                                    o = r.hasAttribute("data-radix-menubar-subtrigger"),
                                    i = r.closest("[data-radix-menubar-content]") !== e.currentTarget,
                                    l = "rtl" === c.dir ? "ArrowRight" : "ArrowLeft",
                                    a = l === e.key;
                                if (!a && o || i && a) return;
                                let u = f().filter(e => !e.disabled),
                                    d = u.map(e => e.value);
                                a && d.reverse();
                                let p = d.indexOf(s.value);
                                d = c.loop ? (t = d, n = p + 1, t.map((e, r) => t[(n + r) % t.length])) : d.slice(p + 1);
                                let [m] = d;
                                m && c.onMenuOpen(m)
                            }
                        }, {
                            checkForDefaultPrevented: !1
                        }),
                        style: { ...e.style,
                            "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                Z = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        ...i
                    } = e, l = x(n);
                    return (0, o.createElement)(d.ZA, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                I = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        ...i
                    } = e, l = x(n);
                    return (0, o.createElement)(d.__, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                W = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        ...i
                    } = e, l = x(n);
                    return (0, o.createElement)(d.ck, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                F = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        ...i
                    } = e, l = x(n);
                    return (0, o.createElement)(d.oC, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                N = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        ...i
                    } = e, l = x(n);
                    return (0, o.createElement)(d.Ee, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                z = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        ...i
                    } = e, l = x(n);
                    return (0, o.createElement)(d.Rk, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                V = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        ...i
                    } = e, l = x(n);
                    return (0, o.createElement)(d.wU, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                j = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        ...i
                    } = e, l = x(n);
                    return (0, o.createElement)(d.Z0, (0, r.Z)({}, l, i, {
                        ref: t
                    }))
                }),
                B = e => {
                    let {
                        __scopeMenubar: t,
                        children: n,
                        open: i,
                        onOpenChange: l,
                        defaultOpen: a
                    } = e, u = x(t), [c = !1, s] = (0, m.T)({
                        prop: i,
                        defaultProp: a,
                        onChange: l
                    });
                    return (0, o.createElement)(d.Tr, (0, r.Z)({}, u, {
                        open: c,
                        onOpenChange: s
                    }), n)
                },
                H = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        ...i
                    } = e, l = x(n);
                    return (0, o.createElement)(d.fF, (0, r.Z)({
                        "data-radix-menubar-subtrigger": ""
                    }, l, i, {
                        ref: t
                    }))
                }),
                U = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenubar: n,
                        ...i
                    } = e, l = x(n);
                    return (0, o.createElement)(d.tu, (0, r.Z)({}, l, {
                        "data-radix-menubar-content": ""
                    }, i, {
                        ref: t,
                        style: { ...e.style,
                            "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                K = S,
                Y = P,
                G = A,
                X = O,
                $ = L,
                q = Z,
                J = I,
                Q = W,
                ee = F,
                et = N,
                en = z,
                er = V,
                eo = j,
                ei = B,
                el = H,
                ea = U
        },
        2651: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return a
                }
            });
            var r = n(7462),
                o = n(7294),
                i = n(3935),
                l = n(5320);
            let a = (0, o.forwardRef)((e, t) => {
                var n;
                let {
                    container: a = null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body,
                    ...u
                } = e;
                return a ? i.createPortal((0, o.createElement)(l.WV.div, (0, r.Z)({}, u, {
                    ref: t
                })), a) : null
            })
        },
        9115: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return a
                }
            });
            var r = n(7294),
                o = n(3935),
                i = n(8771),
                l = n(9981);
            let a = e => {
                let {
                    present: t,
                    children: n
                } = e, a = function(e) {
                    var t;
                    let [n, i] = (0, r.useState)(), a = (0, r.useRef)({}), c = (0, r.useRef)(e), s = (0, r.useRef)("none"), [d, f] = (t = {
                        mounted: {
                            UNMOUNT: "unmounted",
                            ANIMATION_OUT: "unmountSuspended"
                        },
                        unmountSuspended: {
                            MOUNT: "mounted",
                            ANIMATION_END: "unmounted"
                        },
                        unmounted: {
                            MOUNT: "mounted"
                        }
                    }, (0, r.useReducer)((e, n) => {
                        let r = t[e][n];
                        return null != r ? r : e
                    }, e ? "mounted" : "unmounted"));
                    return (0, r.useEffect)(() => {
                        let e = u(a.current);
                        s.current = "mounted" === d ? e : "none"
                    }, [d]), (0, l.b)(() => {
                        let t = a.current,
                            n = c.current;
                        if (n !== e) {
                            let r = s.current,
                                o = u(t);
                            e ? f("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? f("UNMOUNT") : n && r !== o ? f("ANIMATION_OUT") : f("UNMOUNT"), c.current = e
                        }
                    }, [e, f]), (0, l.b)(() => {
                        if (n) {
                            let e = e => {
                                    let t = u(a.current),
                                        r = t.includes(e.animationName);
                                    e.target === n && r && (0, o.flushSync)(() => f("ANIMATION_END"))
                                },
                                t = e => {
                                    e.target === n && (s.current = u(a.current))
                                };
                            return n.addEventListener("animationstart", t), n.addEventListener("animationcancel", e), n.addEventListener("animationend", e), () => {
                                n.removeEventListener("animationstart", t), n.removeEventListener("animationcancel", e), n.removeEventListener("animationend", e)
                            }
                        }
                        f("ANIMATION_END")
                    }, [n, f]), {
                        isPresent: ["mounted", "unmountSuspended"].includes(d),
                        ref: (0, r.useCallback)(e => {
                            e && (a.current = getComputedStyle(e)), i(e)
                        }, [])
                    }
                }(t), c = "function" == typeof n ? n({
                    present: a.isPresent
                }) : r.Children.only(n), s = (0, i.e)(a.ref, c.ref);
                return "function" == typeof n || a.isPresent ? (0, r.cloneElement)(c, {
                    ref: s
                }) : null
            };

            function u(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            a.displayName = "Presence"
        },
        5320: function(e, t, n) {
            n.d(t, {
                WV: function() {
                    return a
                },
                jH: function() {
                    return u
                }
            });
            var r = n(7462),
                o = n(7294),
                i = n(3935),
                l = n(8426);
            let a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                let n = (0, o.forwardRef)((e, n) => {
                    let {
                        asChild: i,
                        ...a
                    } = e, u = i ? l.g7 : t;
                    return (0, o.useEffect)(() => {
                        window[Symbol.for("radix-ui")] = !0
                    }, []), (0, o.createElement)(u, (0, r.Z)({}, a, {
                        ref: n
                    }))
                });
                return n.displayName = `Primitive.${t}`, { ...e,
                    [t]: n
                }
            }, {});

            function u(e, t) {
                e && (0, i.flushSync)(() => e.dispatchEvent(t))
            }
        },
        6681: function(e, t, n) {
            n.d(t, {
                Pc: function() {
                    return x
                },
                ck: function() {
                    return T
                },
                fC: function() {
                    return P
                }
            });
            var r = n(7462),
                o = n(7294),
                i = n(6206),
                l = n(5936),
                a = n(8771),
                u = n(5360),
                c = n(1276),
                s = n(5320),
                d = n(9698),
                f = n(7342),
                p = n(8990);
            let m = "rovingFocusGroup.onEntryFocus",
                v = {
                    bubbles: !1,
                    cancelable: !0
                },
                h = "RovingFocusGroup",
                [g, b, w] = (0, l.B)(h),
                [y, x] = (0, u.b)(h, [w]),
                [E, C] = y(h),
                M = (0, o.forwardRef)((e, t) => (0, o.createElement)(g.Provider, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(g.Slot, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(S, (0, r.Z)({}, e, {
                    ref: t
                }))))),
                S = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        orientation: l,
                        loop: u = !1,
                        dir: c,
                        currentTabStopId: h,
                        defaultCurrentTabStopId: g,
                        onCurrentTabStopIdChange: w,
                        onEntryFocus: y,
                        ...x
                    } = e, C = (0, o.useRef)(null), M = (0, a.e)(t, C), S = (0, p.gm)(c), [R = null, k] = (0, f.T)({
                        prop: h,
                        defaultProp: g,
                        onChange: w
                    }), [P, T] = (0, o.useState)(!1), A = (0, d.W)(y), O = b(n), D = (0, o.useRef)(!1), [L, Z] = (0, o.useState)(0);
                    return (0, o.useEffect)(() => {
                        let e = C.current;
                        if (e) return e.addEventListener(m, A), () => e.removeEventListener(m, A)
                    }, [A]), (0, o.createElement)(E, {
                        scope: n,
                        orientation: l,
                        dir: S,
                        loop: u,
                        currentTabStopId: R,
                        onItemFocus: (0, o.useCallback)(e => k(e), [k]),
                        onItemShiftTab: (0, o.useCallback)(() => T(!0), []),
                        onFocusableItemAdd: (0, o.useCallback)(() => Z(e => e + 1), []),
                        onFocusableItemRemove: (0, o.useCallback)(() => Z(e => e - 1), [])
                    }, (0, o.createElement)(s.WV.div, (0, r.Z)({
                        tabIndex: P || 0 === L ? -1 : 0,
                        "data-orientation": l
                    }, x, {
                        ref: M,
                        style: {
                            outline: "none",
                            ...e.style
                        },
                        onMouseDown: (0, i.M)(e.onMouseDown, () => {
                            D.current = !0
                        }),
                        onFocus: (0, i.M)(e.onFocus, e => {
                            let t = !D.current;
                            if (e.target === e.currentTarget && t && !P) {
                                let n = new CustomEvent(m, v);
                                if (e.currentTarget.dispatchEvent(n), !n.defaultPrevented) {
                                    let r = O().filter(e => e.focusable),
                                        o = r.find(e => e.active),
                                        i = r.find(e => e.id === R),
                                        l = [o, i, ...r].filter(Boolean),
                                        a = l.map(e => e.ref.current);
                                    _(a)
                                }
                            }
                            D.current = !1
                        }),
                        onBlur: (0, i.M)(e.onBlur, () => T(!1))
                    })))
                }),
                R = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        focusable: l = !0,
                        active: a = !1,
                        tabStopId: u,
                        ...d
                    } = e, f = (0, c.M)(), p = u || f, m = C("RovingFocusGroupItem", n), v = m.currentTabStopId === p, h = b(n), {
                        onFocusableItemAdd: w,
                        onFocusableItemRemove: y
                    } = m;
                    return (0, o.useEffect)(() => {
                        if (l) return w(), () => y()
                    }, [l, w, y]), (0, o.createElement)(g.ItemSlot, {
                        scope: n,
                        id: p,
                        focusable: l,
                        active: a
                    }, (0, o.createElement)(s.WV.span, (0, r.Z)({
                        tabIndex: v ? 0 : -1,
                        "data-orientation": m.orientation
                    }, d, {
                        ref: t,
                        onMouseDown: (0, i.M)(e.onMouseDown, e => {
                            l ? m.onItemFocus(p) : e.preventDefault()
                        }),
                        onFocus: (0, i.M)(e.onFocus, () => m.onItemFocus(p)),
                        onKeyDown: (0, i.M)(e.onKeyDown, e => {
                            if ("Tab" === e.key && e.shiftKey) {
                                m.onItemShiftTab();
                                return
                            }
                            if (e.target !== e.currentTarget) return;
                            let t = function(e, t, n) {
                                var r;
                                let o = (r = e.key, "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                                if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return k[o]
                            }(e, m.orientation, m.dir);
                            if (void 0 !== t) {
                                e.preventDefault();
                                let n = h().filter(e => e.focusable),
                                    r = n.map(e => e.ref.current);
                                if ("last" === t) r.reverse();
                                else if ("prev" === t || "next" === t) {
                                    var o, i;
                                    "prev" === t && r.reverse();
                                    let l = r.indexOf(e.currentTarget);
                                    r = m.loop ? (o = r, i = l + 1, o.map((e, t) => o[(i + t) % o.length])) : r.slice(l + 1)
                                }
                                setTimeout(() => _(r))
                            }
                        })
                    })))
                }),
                k = {
                    ArrowLeft: "prev",
                    ArrowUp: "prev",
                    ArrowRight: "next",
                    ArrowDown: "next",
                    PageUp: "first",
                    Home: "first",
                    PageDown: "last",
                    End: "last"
                };

            function _(e) {
                let t = document.activeElement;
                for (let n of e)
                    if (n === t || (n.focus(), document.activeElement !== t)) return
            }
            let P = M,
                T = R
        },
        4418: function(e, t, n) {
            n.d(t, {
                Ns: function() {
                    return Y
                },
                fC: function() {
                    return U
                },
                gb: function() {
                    return x
                },
                q4: function() {
                    return O
                },
                l_: function() {
                    return K
                }
            });
            var r = n(7462),
                o = n(7294),
                i = n(5320),
                l = n(9115),
                a = n(5360),
                u = n(8771),
                c = n(9698),
                s = n(8990),
                d = n(9981),
                f = n(6206);
            let p = "ScrollArea",
                [m, v] = (0, a.b)(p),
                [h, g] = m(p),
                b = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeScrollArea: n,
                        type: l = "hover",
                        dir: a,
                        scrollHideDelay: c = 600,
                        ...d
                    } = e, [f, p] = (0, o.useState)(null), [m, v] = (0, o.useState)(null), [g, b] = (0, o.useState)(null), [w, y] = (0, o.useState)(null), [x, E] = (0, o.useState)(null), [C, M] = (0, o.useState)(0), [S, R] = (0, o.useState)(0), [k, _] = (0, o.useState)(!1), [P, T] = (0, o.useState)(!1), A = (0, u.e)(t, e => p(e)), O = (0, s.gm)(a);
                    return (0, o.createElement)(h, {
                        scope: n,
                        type: l,
                        dir: O,
                        scrollHideDelay: c,
                        scrollArea: f,
                        viewport: m,
                        onViewportChange: v,
                        content: g,
                        onContentChange: b,
                        scrollbarX: w,
                        onScrollbarXChange: y,
                        scrollbarXEnabled: k,
                        onScrollbarXEnabledChange: _,
                        scrollbarY: x,
                        onScrollbarYChange: E,
                        scrollbarYEnabled: P,
                        onScrollbarYEnabledChange: T,
                        onCornerWidthChange: M,
                        onCornerHeightChange: R
                    }, (0, o.createElement)(i.WV.div, (0, r.Z)({
                        dir: O
                    }, d, {
                        ref: A,
                        style: {
                            position: "relative",
                            "--radix-scroll-area-corner-width": C + "px",
                            "--radix-scroll-area-corner-height": S + "px",
                            ...e.style
                        }
                    })))
                }),
                w = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeScrollArea: n,
                        children: l,
                        ...a
                    } = e, c = g("ScrollAreaViewport", n), s = (0, o.useRef)(null), d = (0, u.e)(t, s, c.onViewportChange);
                    return (0, o.createElement)(o.Fragment, null, (0, o.createElement)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                        }
                    }), (0, o.createElement)(i.WV.div, (0, r.Z)({
                        "data-radix-scroll-area-viewport": ""
                    }, a, {
                        ref: d,
                        style: {
                            overflowX: c.scrollbarXEnabled ? "scroll" : "hidden",
                            overflowY: c.scrollbarYEnabled ? "scroll" : "hidden",
                            ...e.style
                        }
                    }), (0, o.createElement)("div", {
                        ref: c.onContentChange,
                        style: {
                            minWidth: "100%",
                            display: "table"
                        }
                    }, l)))
                }),
                y = "ScrollAreaScrollbar",
                x = (0, o.forwardRef)((e, t) => {
                    let {
                        forceMount: n,
                        ...i
                    } = e, l = g(y, e.__scopeScrollArea), {
                        onScrollbarXEnabledChange: a,
                        onScrollbarYEnabledChange: u
                    } = l, c = "horizontal" === e.orientation;
                    return (0, o.useEffect)(() => (c ? a(!0) : u(!0), () => {
                        c ? a(!1) : u(!1)
                    }), [c, a, u]), "hover" === l.type ? (0, o.createElement)(E, (0, r.Z)({}, i, {
                        ref: t,
                        forceMount: n
                    })) : "scroll" === l.type ? (0, o.createElement)(C, (0, r.Z)({}, i, {
                        ref: t,
                        forceMount: n
                    })) : "auto" === l.type ? (0, o.createElement)(M, (0, r.Z)({}, i, {
                        ref: t,
                        forceMount: n
                    })) : "always" === l.type ? (0, o.createElement)(S, (0, r.Z)({}, i, {
                        ref: t
                    })) : null
                }),
                E = (0, o.forwardRef)((e, t) => {
                    let {
                        forceMount: n,
                        ...i
                    } = e, a = g(y, e.__scopeScrollArea), [u, c] = (0, o.useState)(!1);
                    return (0, o.useEffect)(() => {
                        let e = a.scrollArea,
                            t = 0;
                        if (e) {
                            let n = () => {
                                    window.clearTimeout(t), c(!0)
                                },
                                r = () => {
                                    t = window.setTimeout(() => c(!1), a.scrollHideDelay)
                                };
                            return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
                                window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r)
                            }
                        }
                    }, [a.scrollArea, a.scrollHideDelay]), (0, o.createElement)(l.z, {
                        present: n || u
                    }, (0, o.createElement)(M, (0, r.Z)({
                        "data-state": u ? "visible" : "hidden"
                    }, i, {
                        ref: t
                    })))
                }),
                C = (0, o.forwardRef)((e, t) => {
                    var n;
                    let {
                        forceMount: i,
                        ...a
                    } = e, u = g(y, e.__scopeScrollArea), c = "horizontal" === e.orientation, s = B(() => p("SCROLL_END"), 100), [d, p] = (n = {
                        hidden: {
                            SCROLL: "scrolling"
                        },
                        scrolling: {
                            SCROLL_END: "idle",
                            POINTER_ENTER: "interacting"
                        },
                        interacting: {
                            SCROLL: "interacting",
                            POINTER_LEAVE: "idle"
                        },
                        idle: {
                            HIDE: "hidden",
                            SCROLL: "scrolling",
                            POINTER_ENTER: "interacting"
                        }
                    }, (0, o.useReducer)((e, t) => {
                        let r = n[e][t];
                        return null != r ? r : e
                    }, "hidden"));
                    return (0, o.useEffect)(() => {
                        if ("idle" === d) {
                            let e = window.setTimeout(() => p("HIDE"), u.scrollHideDelay);
                            return () => window.clearTimeout(e)
                        }
                    }, [d, u.scrollHideDelay, p]), (0, o.useEffect)(() => {
                        let e = u.viewport,
                            t = c ? "scrollLeft" : "scrollTop";
                        if (e) {
                            let n = e[t],
                                r = () => {
                                    let r = e[t],
                                        o = n !== r;
                                    o && (p("SCROLL"), s()), n = r
                                };
                            return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
                        }
                    }, [u.viewport, c, p, s]), (0, o.createElement)(l.z, {
                        present: i || "hidden" !== d
                    }, (0, o.createElement)(S, (0, r.Z)({
                        "data-state": "hidden" === d ? "hidden" : "visible"
                    }, a, {
                        ref: t,
                        onPointerEnter: (0, f.M)(e.onPointerEnter, () => p("POINTER_ENTER")),
                        onPointerLeave: (0, f.M)(e.onPointerLeave, () => p("POINTER_LEAVE"))
                    })))
                }),
                M = (0, o.forwardRef)((e, t) => {
                    let n = g(y, e.__scopeScrollArea),
                        {
                            forceMount: i,
                            ...a
                        } = e,
                        [u, c] = (0, o.useState)(!1),
                        s = "horizontal" === e.orientation,
                        d = B(() => {
                            if (n.viewport) {
                                let e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                                    t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                                c(s ? e : t)
                            }
                        }, 10);
                    return H(n.viewport, d), H(n.content, d), (0, o.createElement)(l.z, {
                        present: i || u
                    }, (0, o.createElement)(S, (0, r.Z)({
                        "data-state": u ? "visible" : "hidden"
                    }, a, {
                        ref: t
                    })))
                }),
                S = (0, o.forwardRef)((e, t) => {
                    let {
                        orientation: n = "vertical",
                        ...i
                    } = e, l = g(y, e.__scopeScrollArea), a = (0, o.useRef)(null), u = (0, o.useRef)(0), [c, s] = (0, o.useState)({
                        content: 0,
                        viewport: 0,
                        scrollbar: {
                            size: 0,
                            paddingStart: 0,
                            paddingEnd: 0
                        }
                    }), d = F(c.viewport, c.content), f = { ...i,
                        sizes: c,
                        onSizesChange: s,
                        hasThumb: Boolean(d > 0 && d < 1),
                        onThumbChange: e => a.current = e,
                        onThumbPointerUp: () => u.current = 0,
                        onThumbPointerDown: e => u.current = e
                    };

                    function p(e, t) {
                        return function(e, t, n, r = "ltr") {
                            let o = N(n),
                                i = t || o / 2,
                                l = n.scrollbar.paddingStart + i,
                                a = n.scrollbar.size - n.scrollbar.paddingEnd - (o - i),
                                u = n.content - n.viewport,
                                c = V([l, a], "ltr" === r ? [0, u] : [-1 * u, 0]);
                            return c(e)
                        }(e, u.current, c, t)
                    }
                    return "horizontal" === n ? (0, o.createElement)(R, (0, r.Z)({}, f, {
                        ref: t,
                        onThumbPositionChange() {
                            if (l.viewport && a.current) {
                                let e = l.viewport.scrollLeft,
                                    t = z(e, c, l.dir);
                                a.current.style.transform = `translate3d(${t}px, 0, 0)`
                            }
                        },
                        onWheelScroll(e) {
                            l.viewport && (l.viewport.scrollLeft = e)
                        },
                        onDragScroll(e) {
                            l.viewport && (l.viewport.scrollLeft = p(e, l.dir))
                        }
                    })) : "vertical" === n ? (0, o.createElement)(k, (0, r.Z)({}, f, {
                        ref: t,
                        onThumbPositionChange() {
                            if (l.viewport && a.current) {
                                let e = l.viewport.scrollTop,
                                    t = z(e, c);
                                a.current.style.transform = `translate3d(0, ${t}px, 0)`
                            }
                        },
                        onWheelScroll(e) {
                            l.viewport && (l.viewport.scrollTop = e)
                        },
                        onDragScroll(e) {
                            l.viewport && (l.viewport.scrollTop = p(e))
                        }
                    })) : null
                }),
                R = (0, o.forwardRef)((e, t) => {
                    let {
                        sizes: n,
                        onSizesChange: i,
                        ...l
                    } = e, a = g(y, e.__scopeScrollArea), [c, s] = (0, o.useState)(), d = (0, o.useRef)(null), f = (0, u.e)(t, d, a.onScrollbarXChange);
                    return (0, o.useEffect)(() => {
                        d.current && s(getComputedStyle(d.current))
                    }, [d]), (0, o.createElement)(T, (0, r.Z)({
                        "data-orientation": "horizontal"
                    }, l, {
                        ref: f,
                        sizes: n,
                        style: {
                            bottom: 0,
                            left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            "--radix-scroll-area-thumb-width": N(n) + "px",
                            ...e.style
                        },
                        onThumbPointerDown: t => e.onThumbPointerDown(t.x),
                        onDragScroll: t => e.onDragScroll(t.x),
                        onWheelScroll(t, n) {
                            if (a.viewport) {
                                let r = a.viewport.scrollLeft + t.deltaX;
                                e.onWheelScroll(r), r > 0 && r < n && t.preventDefault()
                            }
                        },
                        onResize() {
                            d.current && a.viewport && c && i({
                                content: a.viewport.scrollWidth,
                                viewport: a.viewport.offsetWidth,
                                scrollbar: {
                                    size: d.current.clientWidth,
                                    paddingStart: W(c.paddingLeft),
                                    paddingEnd: W(c.paddingRight)
                                }
                            })
                        }
                    }))
                }),
                k = (0, o.forwardRef)((e, t) => {
                    let {
                        sizes: n,
                        onSizesChange: i,
                        ...l
                    } = e, a = g(y, e.__scopeScrollArea), [c, s] = (0, o.useState)(), d = (0, o.useRef)(null), f = (0, u.e)(t, d, a.onScrollbarYChange);
                    return (0, o.useEffect)(() => {
                        d.current && s(getComputedStyle(d.current))
                    }, [d]), (0, o.createElement)(T, (0, r.Z)({
                        "data-orientation": "vertical"
                    }, l, {
                        ref: f,
                        sizes: n,
                        style: {
                            top: 0,
                            right: "ltr" === a.dir ? 0 : void 0,
                            left: "rtl" === a.dir ? 0 : void 0,
                            bottom: "var(--radix-scroll-area-corner-height)",
                            "--radix-scroll-area-thumb-height": N(n) + "px",
                            ...e.style
                        },
                        onThumbPointerDown: t => e.onThumbPointerDown(t.y),
                        onDragScroll: t => e.onDragScroll(t.y),
                        onWheelScroll(t, n) {
                            if (a.viewport) {
                                let r = a.viewport.scrollTop + t.deltaY;
                                e.onWheelScroll(r), r > 0 && r < n && t.preventDefault()
                            }
                        },
                        onResize() {
                            d.current && a.viewport && c && i({
                                content: a.viewport.scrollHeight,
                                viewport: a.viewport.offsetHeight,
                                scrollbar: {
                                    size: d.current.clientHeight,
                                    paddingStart: W(c.paddingTop),
                                    paddingEnd: W(c.paddingBottom)
                                }
                            })
                        }
                    }))
                }),
                [_, P] = m(y),
                T = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeScrollArea: n,
                        sizes: l,
                        hasThumb: a,
                        onThumbChange: s,
                        onThumbPointerUp: d,
                        onThumbPointerDown: p,
                        onThumbPositionChange: m,
                        onDragScroll: v,
                        onWheelScroll: h,
                        onResize: b,
                        ...w
                    } = e, x = g(y, n), [E, C] = (0, o.useState)(null), M = (0, u.e)(t, e => C(e)), S = (0, o.useRef)(null), R = (0, o.useRef)(""), k = x.viewport, P = l.content - l.viewport, T = (0, c.W)(h), A = (0, c.W)(m), O = B(b, 10);

                    function D(e) {
                        if (S.current) {
                            let t = e.clientX - S.current.left,
                                n = e.clientY - S.current.top;
                            v({
                                x: t,
                                y: n
                            })
                        }
                    }
                    return (0, o.useEffect)(() => {
                        let e = e => {
                            let t = e.target,
                                n = null == E ? void 0 : E.contains(t);
                            n && T(e, P)
                        };
                        return document.addEventListener("wheel", e, {
                            passive: !1
                        }), () => document.removeEventListener("wheel", e, {
                            passive: !1
                        })
                    }, [k, E, P, T]), (0, o.useEffect)(A, [l, A]), H(E, O), H(x.content, O), (0, o.createElement)(_, {
                        scope: n,
                        scrollbar: E,
                        hasThumb: a,
                        onThumbChange: (0, c.W)(s),
                        onThumbPointerUp: (0, c.W)(d),
                        onThumbPositionChange: A,
                        onThumbPointerDown: (0, c.W)(p)
                    }, (0, o.createElement)(i.WV.div, (0, r.Z)({}, w, {
                        ref: M,
                        style: {
                            position: "absolute",
                            ...w.style
                        },
                        onPointerDown: (0, f.M)(e.onPointerDown, e => {
                            if (0 === e.button) {
                                let t = e.target;
                                t.setPointerCapture(e.pointerId), S.current = E.getBoundingClientRect(), R.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", D(e)
                            }
                        }),
                        onPointerMove: (0, f.M)(e.onPointerMove, D),
                        onPointerUp: (0, f.M)(e.onPointerUp, e => {
                            let t = e.target;
                            t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = R.current, S.current = null
                        })
                    })))
                }),
                A = "ScrollAreaThumb",
                O = (0, o.forwardRef)((e, t) => {
                    let {
                        forceMount: n,
                        ...i
                    } = e, a = P(A, e.__scopeScrollArea);
                    return (0, o.createElement)(l.z, {
                        present: n || a.hasThumb
                    }, (0, o.createElement)(D, (0, r.Z)({
                        ref: t
                    }, i)))
                }),
                D = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeScrollArea: n,
                        style: l,
                        ...a
                    } = e, c = g(A, n), s = P(A, n), {
                        onThumbPositionChange: d
                    } = s, p = (0, u.e)(t, e => s.onThumbChange(e)), m = (0, o.useRef)(), v = B(() => {
                        m.current && (m.current(), m.current = void 0)
                    }, 100);
                    return (0, o.useEffect)(() => {
                        let e = c.viewport;
                        if (e) {
                            let t = () => {
                                if (v(), !m.current) {
                                    let t = j(e, d);
                                    m.current = t, d()
                                }
                            };
                            return d(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
                        }
                    }, [c.viewport, v, d]), (0, o.createElement)(i.WV.div, (0, r.Z)({
                        "data-state": s.hasThumb ? "visible" : "hidden"
                    }, a, {
                        ref: p,
                        style: {
                            width: "var(--radix-scroll-area-thumb-width)",
                            height: "var(--radix-scroll-area-thumb-height)",
                            ...l
                        },
                        onPointerDownCapture: (0, f.M)(e.onPointerDownCapture, e => {
                            let t = e.target,
                                n = t.getBoundingClientRect(),
                                r = e.clientX - n.left,
                                o = e.clientY - n.top;
                            s.onThumbPointerDown({
                                x: r,
                                y: o
                            })
                        }),
                        onPointerUp: (0, f.M)(e.onPointerUp, s.onThumbPointerUp)
                    }))
                }),
                L = "ScrollAreaCorner",
                Z = (0, o.forwardRef)((e, t) => {
                    let n = g(L, e.__scopeScrollArea),
                        i = Boolean(n.scrollbarX && n.scrollbarY),
                        l = "scroll" !== n.type && i;
                    return l ? (0, o.createElement)(I, (0, r.Z)({}, e, {
                        ref: t
                    })) : null
                }),
                I = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeScrollArea: n,
                        ...l
                    } = e, a = g(L, n), [u, c] = (0, o.useState)(0), [s, d] = (0, o.useState)(0), f = Boolean(u && s);
                    return H(a.scrollbarX, () => {
                        var e;
                        let t = (null === (e = a.scrollbarX) || void 0 === e ? void 0 : e.offsetHeight) || 0;
                        a.onCornerHeightChange(t), d(t)
                    }), H(a.scrollbarY, () => {
                        var e;
                        let t = (null === (e = a.scrollbarY) || void 0 === e ? void 0 : e.offsetWidth) || 0;
                        a.onCornerWidthChange(t), c(t)
                    }), f ? (0, o.createElement)(i.WV.div, (0, r.Z)({}, l, {
                        ref: t,
                        style: {
                            width: u,
                            height: s,
                            position: "absolute",
                            right: "ltr" === a.dir ? 0 : void 0,
                            left: "rtl" === a.dir ? 0 : void 0,
                            bottom: 0,
                            ...e.style
                        }
                    })) : null
                });

            function W(e) {
                return e ? parseInt(e, 10) : 0
            }

            function F(e, t) {
                let n = e / t;
                return isNaN(n) ? 0 : n
            }

            function N(e) {
                let t = F(e.viewport, e.content),
                    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
                    r = (e.scrollbar.size - n) * t;
                return Math.max(r, 18)
            }

            function z(e, t, n = "ltr") {
                let r = N(t),
                    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
                    i = t.scrollbar.size - o,
                    l = t.content - t.viewport,
                    a = function(e, [t, n]) {
                        return Math.min(n, Math.max(t, e))
                    }(e, "ltr" === n ? [0, l] : [-1 * l, 0]),
                    u = V([0, l], [0, i - r]);
                return u(a)
            }

            function V(e, t) {
                return n => {
                    if (e[0] === e[1] || t[0] === t[1]) return t[0];
                    let r = (t[1] - t[0]) / (e[1] - e[0]);
                    return t[0] + r * (n - e[0])
                }
            }
            let j = (e, t = () => {}) => {
                let n = {
                        left: e.scrollLeft,
                        top: e.scrollTop
                    },
                    r = 0;
                return ! function o() {
                    let i = {
                            left: e.scrollLeft,
                            top: e.scrollTop
                        },
                        l = n.left !== i.left,
                        a = n.top !== i.top;
                    (l || a) && t(), n = i, r = window.requestAnimationFrame(o)
                }(), () => window.cancelAnimationFrame(r)
            };

            function B(e, t) {
                let n = (0, c.W)(e),
                    r = (0, o.useRef)(0);
                return (0, o.useEffect)(() => () => window.clearTimeout(r.current), []), (0, o.useCallback)(() => {
                    window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
                }, [n, t])
            }

            function H(e, t) {
                let n = (0, c.W)(t);
                (0, d.b)(() => {
                    let t = 0;
                    if (e) {
                        let r = new ResizeObserver(() => {
                            cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
                        });
                        return r.observe(e), () => {
                            window.cancelAnimationFrame(t), r.unobserve(e)
                        }
                    }
                }, [e, n])
            }
            let U = b,
                K = w,
                Y = Z
        },
        8426: function(e, t, n) {
            n.d(t, {
                g7: function() {
                    return l
                }
            });
            var r = n(7462),
                o = n(7294),
                i = n(8771);
            let l = (0, o.forwardRef)((e, t) => {
                let {
                    children: n,
                    ...i
                } = e, l = o.Children.toArray(n), u = l.find(c);
                if (u) {
                    let s = u.props.children,
                        d = l.map(e => e !== u ? e : o.Children.count(s) > 1 ? o.Children.only(null) : (0, o.isValidElement)(s) ? s.props.children : null);
                    return (0, o.createElement)(a, (0, r.Z)({}, i, {
                        ref: t
                    }), (0, o.isValidElement)(s) ? (0, o.cloneElement)(s, void 0, d) : null)
                }
                return (0, o.createElement)(a, (0, r.Z)({}, i, {
                    ref: t
                }), n)
            });
            l.displayName = "Slot";
            let a = (0, o.forwardRef)((e, t) => {
                let {
                    children: n,
                    ...r
                } = e;
                return (0, o.isValidElement)(n) ? (0, o.cloneElement)(n, { ... function(e, t) {
                        let n = { ...t
                        };
                        for (let r in t) {
                            let o = e[r],
                                i = t[r],
                                l = /^on[A-Z]/.test(r);
                            l ? o && i ? n[r] = (...e) => {
                                i(...e), o(...e)
                            } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                                ...i
                            } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                        }
                        return { ...e,
                            ...n
                        }
                    }(r, n.props),
                    ref: t ? (0, i.F)(t, n.ref) : n.ref
                }) : o.Children.count(n) > 1 ? o.Children.only(null) : null
            });
            a.displayName = "SlotClone";
            let u = ({
                children: e
            }) => (0, o.createElement)(o.Fragment, null, e);

            function c(e) {
                return (0, o.isValidElement)(e) && e.type === u
            }
        },
        9698: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return o
                }
            });
            var r = n(7294);

            function o(e) {
                let t = (0, r.useRef)(e);
                return (0, r.useEffect)(() => {
                    t.current = e
                }), (0, r.useMemo)(() => (...e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
                }, [])
            }
        },
        7342: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return i
                }
            });
            var r = n(7294),
                o = n(9698);

            function i({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [i, l] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let n = (0, r.useState)(e),
                        [i] = n,
                        l = (0, r.useRef)(i),
                        a = (0, o.W)(t);
                    return (0, r.useEffect)(() => {
                        l.current !== i && (a(i), l.current = i)
                    }, [i, l, a]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), a = void 0 !== e, u = (0, o.W)(n), c = (0, r.useCallback)(t => {
                    if (a) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && u(n)
                    } else l(t)
                }, [a, e, l, u]);
                return [a ? e : i, c]
            }
        },
        9981: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return o
                }
            });
            var r = n(7294);
            let o = Boolean(null == globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {}
        },
        2003: function(e, t, n) {
            n.d(t, {
                j: function() {
                    return l
                }
            });
            var r = n(6010);
            let o = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
                i = r.Z,
                l = (e, t) => n => {
                    var r;
                    if ((null == t ? void 0 : t.variants) == null) return i(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                    let {
                        variants: l,
                        defaultVariants: a
                    } = t, u = Object.keys(l).map(e => {
                        let t = null == n ? void 0 : n[e],
                            r = null == a ? void 0 : a[e];
                        if (null === t) return null;
                        let i = o(t) || o(r);
                        return l[e][i]
                    }), c = n && Object.entries(n).reduce((e, t) => {
                        let [n, r] = t;
                        return void 0 === r || (e[n] = r), e
                    }, {}), s = null == t ? void 0 : null === (r = t.compoundVariants) || void 0 === r ? void 0 : r.reduce((e, t) => {
                        let {
                            class: n,
                            className: r,
                            ...o
                        } = t;
                        return Object.entries(o).every(e => {
                            let [t, n] = e;
                            return Array.isArray(n) ? n.includes({ ...a,
                                ...c
                            }[t]) : ({ ...a,
                                ...c
                            })[t] === n
                        }) ? [...e, n, r] : e
                    }, []);
                    return i(e, u, s, null == n ? void 0 : n.class, null == n ? void 0 : n.className)
                }
        },
        7851: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return D
                }
            });
            var r = /^\[(.+)\]$/;

            function o(e, t) {
                var n = e;
                return t.split("-").forEach(function(e) {
                    n.nextPart.has(e) || n.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), n = n.nextPart.get(e)
                }), n
            }
            var i = /\s+/;

            function l() {
                for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
                    if ("string" == typeof t) return t;
                    for (var n, r = "", o = 0; o < t.length; o++) t[o] && (n = e(t[o])) && (r && (r += " "), r += n);
                    return r
                }(e)) && (r && (r += " "), r += t);
                return r
            }

            function a(e) {
                var t = function(t) {
                    return t[e] || []
                };
                return t.isThemeGetter = !0, t
            }
            var u = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                c = /^\d+\/\d+$/,
                s = new Set(["px", "full", "screen"]),
                d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                f = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/,
                p = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;

            function m(e) {
                return y(e) || s.has(e) || c.test(e) || v(e)
            }

            function v(e) {
                return k(e, "length", _)
            }

            function h(e) {
                return k(e, "size", P)
            }

            function g(e) {
                return k(e, "position", P)
            }

            function b(e) {
                return k(e, "url", T)
            }

            function w(e) {
                return k(e, "number", y)
            }

            function y(e) {
                return !Number.isNaN(Number(e))
            }

            function x(e) {
                return e.endsWith("%") && y(e.slice(0, -1))
            }

            function E(e) {
                return A(e) || k(e, "number", A)
            }

            function C(e) {
                return u.test(e)
            }

            function M() {
                return !0
            }

            function S(e) {
                return d.test(e)
            }

            function R(e) {
                return k(e, "", O)
            }

            function k(e, t, n) {
                var r = u.exec(e);
                return !!r && (r[1] ? r[1] === t : n(r[2]))
            }

            function _(e) {
                return f.test(e)
            }

            function P() {
                return !1
            }

            function T(e) {
                return e.startsWith("url(")
            }

            function A(e) {
                return Number.isInteger(Number(e))
            }

            function O(e) {
                return p.test(e)
            }
            var D = function() {
                for (var e, t, n, a = arguments.length, u = Array(a), c = 0; c < a; c++) u[c] = arguments[c];
                var s = function(i) {
                    var l = u[0];
                    return t = (e = function(e) {
                        var t, n, i, l, a, u, c, s, d, f, p;
                        return {
                            cache: function(e) {
                                if (e < 1) return {
                                    get: function() {},
                                    set: function() {}
                                };
                                var t = 0,
                                    n = new Map,
                                    r = new Map;

                                function o(o, i) {
                                    n.set(o, i), ++t > e && (t = 0, r = n, n = new Map)
                                }
                                return {
                                    get: function(e) {
                                        var t = n.get(e);
                                        return void 0 !== t ? t : void 0 !== (t = r.get(e)) ? (o(e, t), t) : void 0
                                    },
                                    set: function(e, t) {
                                        n.has(e) ? n.set(e, t) : o(e, t)
                                    }
                                }
                            }(e.cacheSize),
                            splitModifiers: (n = 1 === (t = e.separator || ":").length, i = t[0], l = t.length, function(e) {
                                for (var r, o = [], a = 0, u = 0, c = 0; c < e.length; c++) {
                                    var s = e[c];
                                    if (0 === a) {
                                        if (s === i && (n || e.slice(c, c + l) === t)) {
                                            o.push(e.slice(u, c)), u = c + l;
                                            continue
                                        }
                                        if ("/" === s) {
                                            r = c;
                                            continue
                                        }
                                    }
                                    "[" === s ? a++ : "]" === s && a--
                                }
                                var d = 0 === o.length ? e : e.substring(u),
                                    f = d.startsWith("!"),
                                    p = f ? d.substring(1) : d;
                                return {
                                    modifiers: o,
                                    hasImportantModifier: f,
                                    baseClassName: p,
                                    maybePostfixModifierPosition: r && r > u ? r - u : void 0
                                }
                            }),
                            ...(s = e.theme, d = e.prefix, f = {
                                nextPart: new Map,
                                validators: []
                            }, (p = Object.entries(e.classGroups), d ? p.map(function(e) {
                                return [e[0], e[1].map(function(e) {
                                    return "string" == typeof e ? d + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(function(e) {
                                        return [d + e[0], e[1]]
                                    })) : e
                                })]
                            }) : p).forEach(function(e) {
                                var t = e[0];
                                (function e(t, n, r, i) {
                                    t.forEach(function(t) {
                                        if ("string" == typeof t) {
                                            ("" === t ? n : o(n, t)).classGroupId = r;
                                            return
                                        }
                                        if ("function" == typeof t) {
                                            if (t.isThemeGetter) {
                                                e(t(i), n, r, i);
                                                return
                                            }
                                            n.validators.push({
                                                validator: t,
                                                classGroupId: r
                                            });
                                            return
                                        }
                                        Object.entries(t).forEach(function(t) {
                                            var l = t[0];
                                            e(t[1], o(n, l), r, i)
                                        })
                                    })
                                })(e[1], f, t, s)
                            }), a = e.conflictingClassGroups, c = void 0 === (u = e.conflictingClassGroupModifiers) ? {} : u, {
                                getClassGroupId: function(e) {
                                    var t = e.split("-");
                                    return "" === t[0] && 1 !== t.length && t.shift(),
                                        function e(t, n) {
                                            if (0 === t.length) return n.classGroupId;
                                            var r = t[0],
                                                o = n.nextPart.get(r),
                                                i = o ? e(t.slice(1), o) : void 0;
                                            if (i) return i;
                                            if (0 !== n.validators.length) {
                                                var l = t.join("-");
                                                return n.validators.find(function(e) {
                                                    return (0, e.validator)(l)
                                                }) ? .classGroupId
                                            }
                                        }(t, f) || function(e) {
                                            if (r.test(e)) {
                                                var t = r.exec(e)[1],
                                                    n = t ? .substring(0, t.indexOf(":"));
                                                if (n) return "arbitrary.." + n
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, t) {
                                    var n = a[e] || [];
                                    return t && c[e] ? [].concat(n, c[e]) : n
                                }
                            })
                        }
                    }(u.slice(1).reduce(function(e, t) {
                        return t(e)
                    }, l()))).cache.get, n = e.cache.set, s = d, d(i)
                };

                function d(r) {
                    var o, l, a, u, c = t(r);
                    if (c) return c;
                    var s = (o = e.splitModifiers, l = e.getClassGroupId, a = e.getConflictingClassGroupIds, u = new Set, r.trim().split(i).map(function(e) {
                        var t = o(e),
                            n = t.modifiers,
                            r = t.hasImportantModifier,
                            i = t.baseClassName,
                            a = t.maybePostfixModifierPosition,
                            u = l(a ? i.substring(0, a) : i),
                            c = Boolean(a);
                        if (!u) {
                            if (!a || !(u = l(i))) return {
                                isTailwindClass: !1,
                                originalClassName: e
                            };
                            c = !1
                        }
                        var s = (function(e) {
                            if (e.length <= 1) return e;
                            var t = [],
                                n = [];
                            return e.forEach(function(e) {
                                "[" === e[0] ? (t.push.apply(t, n.sort().concat([e])), n = []) : n.push(e)
                            }), t.push.apply(t, n.sort()), t
                        })(n).join(":");
                        return {
                            isTailwindClass: !0,
                            modifierId: r ? s + "!" : s,
                            classGroupId: u,
                            originalClassName: e,
                            hasPostfixModifier: c
                        }
                    }).reverse().filter(function(e) {
                        if (!e.isTailwindClass) return !0;
                        var t = e.modifierId,
                            n = e.classGroupId,
                            r = e.hasPostfixModifier,
                            o = t + n;
                        return !u.has(o) && (u.add(o), a(n, r).forEach(function(e) {
                            return u.add(t + e)
                        }), !0)
                    }).reverse().map(function(e) {
                        return e.originalClassName
                    }).join(" "));
                    return n(r, s), s
                }
                return function() {
                    return s(l.apply(null, arguments))
                }
            }(function() {
                var e = a("colors"),
                    t = a("spacing"),
                    n = a("blur"),
                    r = a("brightness"),
                    o = a("borderColor"),
                    i = a("borderRadius"),
                    l = a("borderSpacing"),
                    u = a("borderWidth"),
                    c = a("contrast"),
                    s = a("grayscale"),
                    d = a("hueRotate"),
                    f = a("invert"),
                    p = a("gap"),
                    k = a("gradientColorStops"),
                    _ = a("gradientColorStopPositions"),
                    P = a("inset"),
                    T = a("margin"),
                    A = a("opacity"),
                    O = a("padding"),
                    D = a("saturate"),
                    L = a("scale"),
                    Z = a("sepia"),
                    I = a("skew"),
                    W = a("space"),
                    F = a("translate"),
                    N = function() {
                        return ["auto", "contain", "none"]
                    },
                    z = function() {
                        return ["auto", "hidden", "clip", "visible", "scroll"]
                    },
                    V = function() {
                        return ["auto", t]
                    },
                    j = function() {
                        return ["", m]
                    },
                    B = function() {
                        return ["auto", y, C]
                    },
                    H = function() {
                        return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
                    },
                    U = function() {
                        return ["solid", "dashed", "dotted", "double", "none"]
                    },
                    K = function() {
                        return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
                    },
                    Y = function() {
                        return ["start", "end", "center", "between", "around", "evenly", "stretch"]
                    },
                    G = function() {
                        return ["", "0", C]
                    },
                    X = function() {
                        return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
                    },
                    $ = function() {
                        return [y, w]
                    },
                    q = function() {
                        return [y, C]
                    };
                return {
                    cacheSize: 500,
                    theme: {
                        colors: [M],
                        spacing: [m],
                        blur: ["none", "", S, v],
                        brightness: $(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", S, v],
                        borderSpacing: [t],
                        borderWidth: j(),
                        contrast: $(),
                        grayscale: G(),
                        hueRotate: q(),
                        invert: G(),
                        gap: [t],
                        gradientColorStops: [e],
                        gradientColorStopPositions: [x, v],
                        inset: V(),
                        margin: V(),
                        opacity: $(),
                        padding: [t],
                        saturate: $(),
                        scale: $(),
                        sepia: G(),
                        skew: q(),
                        space: [t],
                        translate: [t]
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", C]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [S]
                        }],
                        "break-after": [{
                            "break-after": X()
                        }],
                        "break-before": [{
                            "break-before": X()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [].concat(H(), [C])
                        }],
                        overflow: [{
                            overflow: z()
                        }],
                        "overflow-x": [{
                            "overflow-x": z()
                        }],
                        "overflow-y": [{
                            "overflow-y": z()
                        }],
                        overscroll: [{
                            overscroll: N()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": N()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": N()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [P]
                        }],
                        "inset-x": [{
                            "inset-x": [P]
                        }],
                        "inset-y": [{
                            "inset-y": [P]
                        }],
                        start: [{
                            start: [P]
                        }],
                        end: [{
                            end: [P]
                        }],
                        top: [{
                            top: [P]
                        }],
                        right: [{
                            right: [P]
                        }],
                        bottom: [{
                            bottom: [P]
                        }],
                        left: [{
                            left: [P]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", E]
                        }],
                        basis: [{
                            basis: [t]
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", C]
                        }],
                        grow: [{
                            grow: G()
                        }],
                        shrink: [{
                            shrink: G()
                        }],
                        order: [{
                            order: ["first", "last", "none", E]
                        }],
                        "grid-cols": [{
                            "grid-cols": [M]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: [E]
                            }, C]
                        }],
                        "col-start": [{
                            "col-start": B()
                        }],
                        "col-end": [{
                            "col-end": B()
                        }],
                        "grid-rows": [{
                            "grid-rows": [M]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [E]
                            }, C]
                        }],
                        "row-start": [{
                            "row-start": B()
                        }],
                        "row-end": [{
                            "row-end": B()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", C]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", C]
                        }],
                        gap: [{
                            gap: [p]
                        }],
                        "gap-x": [{
                            "gap-x": [p]
                        }],
                        "gap-y": [{
                            "gap-y": [p]
                        }],
                        "justify-content": [{
                            justify: ["normal"].concat(Y())
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal"].concat(Y(), ["baseline"])
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [].concat(Y(), ["baseline"])
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [O]
                        }],
                        px: [{
                            px: [O]
                        }],
                        py: [{
                            py: [O]
                        }],
                        ps: [{
                            ps: [O]
                        }],
                        pe: [{
                            pe: [O]
                        }],
                        pt: [{
                            pt: [O]
                        }],
                        pr: [{
                            pr: [O]
                        }],
                        pb: [{
                            pb: [O]
                        }],
                        pl: [{
                            pl: [O]
                        }],
                        m: [{
                            m: [T]
                        }],
                        mx: [{
                            mx: [T]
                        }],
                        my: [{
                            my: [T]
                        }],
                        ms: [{
                            ms: [T]
                        }],
                        me: [{
                            me: [T]
                        }],
                        mt: [{
                            mt: [T]
                        }],
                        mr: [{
                            mr: [T]
                        }],
                        mb: [{
                            mb: [T]
                        }],
                        ml: [{
                            ml: [T]
                        }],
                        "space-x": [{
                            "space-x": [W]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [W]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", t]
                        }],
                        "min-w": [{
                            "min-w": ["min", "max", "fit", m]
                        }],
                        "max-w": [{
                            "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                                screen: [S]
                            }, S, v]
                        }],
                        h: [{
                            h: [t, "auto", "min", "max", "fit"]
                        }],
                        "min-h": [{
                            "min-h": ["min", "max", "fit", m]
                        }],
                        "max-h": [{
                            "max-h": [t, "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", S, v]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", w]
                        }],
                        "font-family": [{
                            font: [M]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", v]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", y, w]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", m]
                        }],
                        "list-image": [{
                            "list-image": ["none", C]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", C]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [A]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [A]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [].concat(U(), ["wavy"])
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", m]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", m]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        indent: [{
                            indent: [t]
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", v]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", C]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [A]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [].concat(H(), [g])
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", h]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, b]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [_]
                        }],
                        "gradient-via-pos": [{
                            via: [_]
                        }],
                        "gradient-to-pos": [{
                            to: [_]
                        }],
                        "gradient-from": [{
                            from: [k]
                        }],
                        "gradient-via": [{
                            via: [k]
                        }],
                        "gradient-to": [{
                            to: [k]
                        }],
                        rounded: [{
                            rounded: [i]
                        }],
                        "rounded-s": [{
                            "rounded-s": [i]
                        }],
                        "rounded-e": [{
                            "rounded-e": [i]
                        }],
                        "rounded-t": [{
                            "rounded-t": [i]
                        }],
                        "rounded-r": [{
                            "rounded-r": [i]
                        }],
                        "rounded-b": [{
                            "rounded-b": [i]
                        }],
                        "rounded-l": [{
                            "rounded-l": [i]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [i]
                        }],
                        "rounded-se": [{
                            "rounded-se": [i]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [i]
                        }],
                        "rounded-es": [{
                            "rounded-es": [i]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [i]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [i]
                        }],
                        "rounded-br": [{
                            "rounded-br": [i]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [i]
                        }],
                        "border-w": [{
                            border: [u]
                        }],
                        "border-w-x": [{
                            "border-x": [u]
                        }],
                        "border-w-y": [{
                            "border-y": [u]
                        }],
                        "border-w-s": [{
                            "border-s": [u]
                        }],
                        "border-w-e": [{
                            "border-e": [u]
                        }],
                        "border-w-t": [{
                            "border-t": [u]
                        }],
                        "border-w-r": [{
                            "border-r": [u]
                        }],
                        "border-w-b": [{
                            "border-b": [u]
                        }],
                        "border-w-l": [{
                            "border-l": [u]
                        }],
                        "border-opacity": [{
                            "border-opacity": [A]
                        }],
                        "border-style": [{
                            border: [].concat(U(), ["hidden"])
                        }],
                        "divide-x": [{
                            "divide-x": [u]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [u]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [A]
                        }],
                        "divide-style": [{
                            divide: U()
                        }],
                        "border-color": [{
                            border: [o]
                        }],
                        "border-color-x": [{
                            "border-x": [o]
                        }],
                        "border-color-y": [{
                            "border-y": [o]
                        }],
                        "border-color-t": [{
                            "border-t": [o]
                        }],
                        "border-color-r": [{
                            "border-r": [o]
                        }],
                        "border-color-b": [{
                            "border-b": [o]
                        }],
                        "border-color-l": [{
                            "border-l": [o]
                        }],
                        "divide-color": [{
                            divide: [o]
                        }],
                        "outline-style": [{
                            outline: [""].concat(U())
                        }],
                        "outline-offset": [{
                            "outline-offset": [m]
                        }],
                        "outline-w": [{
                            outline: [m]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: j()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [A]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [m]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", S, R]
                        }],
                        "shadow-color": [{
                            shadow: [M]
                        }],
                        opacity: [{
                            opacity: [A]
                        }],
                        "mix-blend": [{
                            "mix-blend": K()
                        }],
                        "bg-blend": [{
                            "bg-blend": K()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [n]
                        }],
                        brightness: [{
                            brightness: [r]
                        }],
                        contrast: [{
                            contrast: [c]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", S, C]
                        }],
                        grayscale: [{
                            grayscale: [s]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [d]
                        }],
                        invert: [{
                            invert: [f]
                        }],
                        saturate: [{
                            saturate: [D]
                        }],
                        sepia: [{
                            sepia: [Z]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [n]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [r]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [c]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [s]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [d]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [f]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [A]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [D]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [Z]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [l]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [l]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [l]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", C]
                        }],
                        duration: [{
                            duration: q()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", C]
                        }],
                        delay: [{
                            delay: q()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", C]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [L]
                        }],
                        "scale-x": [{
                            "scale-x": [L]
                        }],
                        "scale-y": [{
                            "scale-y": [L]
                        }],
                        rotate: [{
                            rotate: [E, C]
                        }],
                        "translate-x": [{
                            "translate-x": [F]
                        }],
                        "translate-y": [{
                            "translate-y": [F]
                        }],
                        "skew-x": [{
                            "skew-x": [I]
                        }],
                        "skew-y": [{
                            "skew-y": [I]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", C]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: ["appearance-none"],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", C]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": [t]
                        }],
                        "scroll-mx": [{
                            "scroll-mx": [t]
                        }],
                        "scroll-my": [{
                            "scroll-my": [t]
                        }],
                        "scroll-ms": [{
                            "scroll-ms": [t]
                        }],
                        "scroll-me": [{
                            "scroll-me": [t]
                        }],
                        "scroll-mt": [{
                            "scroll-mt": [t]
                        }],
                        "scroll-mr": [{
                            "scroll-mr": [t]
                        }],
                        "scroll-mb": [{
                            "scroll-mb": [t]
                        }],
                        "scroll-ml": [{
                            "scroll-ml": [t]
                        }],
                        "scroll-p": [{
                            "scroll-p": [t]
                        }],
                        "scroll-px": [{
                            "scroll-px": [t]
                        }],
                        "scroll-py": [{
                            "scroll-py": [t]
                        }],
                        "scroll-ps": [{
                            "scroll-ps": [t]
                        }],
                        "scroll-pe": [{
                            "scroll-pe": [t]
                        }],
                        "scroll-pt": [{
                            "scroll-pt": [t]
                        }],
                        "scroll-pr": [{
                            "scroll-pr": [t]
                        }],
                        "scroll-pb": [{
                            "scroll-pb": [t]
                        }],
                        "scroll-pl": [{
                            "scroll-pl": [t]
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "pinch-zoom", "manipulation", {
                                pan: ["x", "left", "right", "y", "up", "down"]
                            }]
                        }],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", C]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [m, w]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        },
        4529: function(e, t, n) {
            n.d(t, {
                Ue: function() {
                    return c
                }
            });
            let r = e => {
                    let t;
                    let n = new Set,
                        r = (e, r) => {
                            let o = "function" == typeof e ? e(t) : e;
                            if (!Object.is(o, t)) {
                                let i = t;
                                t = (null != r ? r : "object" != typeof o) ? o : Object.assign({}, t, o), n.forEach(e => e(t, i))
                            }
                        },
                        o = () => t,
                        i = e => (n.add(e), () => n.delete(e)),
                        l = () => {
                            console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
                        },
                        a = {
                            setState: r,
                            getState: o,
                            subscribe: i,
                            destroy: l
                        };
                    return t = e(r, o, a), a
                },
                o = e => e ? r(e) : r;
            var i = n(7294),
                l = n(2798);
            let {
                useSyncExternalStoreWithSelector: a
            } = l, u = e => {
                "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
                let t = "function" == typeof e ? o(e) : e,
                    n = (e, n) => (function(e, t = e.getState, n) {
                        let r = a(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
                        return (0, i.useDebugValue)(r), r
                    })(t, e, n);
                return Object.assign(n, t), n
            }, c = e => e ? u(e) : u
        }
    }
]);