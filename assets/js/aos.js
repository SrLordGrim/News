!function(e, t) {
    // UMD (Universal Module Definition) pattern for compatibility with different module systems
    "object" == typeof exports && "object" == typeof module ? module.exports = t() :
    "function" == typeof define && define.amd ? define([], t) :
    "object" == typeof exports ? exports.AOS = t() :
    e.AOS = t()
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = { exports: {}, id: o, loaded: !1 };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0)
    }([function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : { default: e }
        }

        // Helper function to merge objects
        var i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };

        var r = n(1),
            a = (o(r), n(6)),
            u = o(a),
            c = n(7),
            f = o(c),
            s = n(8),
            d = o(s),
            l = n(9),
            p = o(l),
            m = n(10),
            b = o(m),
            v = n(11),
            y = o(v),
            g = n(14),
            h = o(g);

        // State variables
        var w = [],
            k = !1,
            x = document.all && !window.atob,
            j = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            };

        // Initialize AOS animations
        var O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (e && (k = !0), k) return w = (0, y.default)(w, j), (0, b.default)(w, j.once), w
        };

        // Refresh AOS animations
        var _ = function() {
            w = (0, h.default)(), O()
        };

        // Reset AOS attributes
        var S = function() {
            w.forEach(function(e, t) {
                e.node.removeAttribute("data-aos");
                e.node.removeAttribute("data-aos-easing");
                e.node.removeAttribute("data-aos-duration");
                e.node.removeAttribute("data-aos-delay")
            })
        };

        // Check if AOS should be disabled
        var z = function(e) {
            return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
        };

        // Main function to initialize AOS
        var A = function(e) {
            return j = i(j, e), w = (0, h.default)(), z(j.disable) || x ? S() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function() { O(!0) }) : document.addEventListener(j.startEvent, function() { O(!0) }), window.addEventListener("resize", (0, f.default)(O, j.debounceDelay, !0)), window.addEventListener("orientationchange", (0, f.default)(O, j.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() { (0, b.default)(w, j.once) }, j.throttleDelay)), j.disableMutationObserver || (0, d.default)("[data-aos]", _), w)
        };

        e.exports = { init: A, refresh: O, refreshHard: _ }
    }, function(e, t) {},,,,, function(e, t) {
        (function(t) {
            "use strict";

            function n(e, t, n) {
                function o(t) {
                    var n = b, o = v;
                    return b = v = void 0, k = t, g = e.apply(o, n)
                }

                function r(e) {
                    return k = e, h = setTimeout(s, t), _ ? o(e) : g
                }

                function a(e) {
                    var n = e - w, o = e - k, i = t - n;
                    return S ? j(i, y - o) : i
                }

                function c(e) {
                    var n = e - w, o = e - k;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }

                function s() {
                    var e = O();
                    return c(e) ? d(e) : void (h = setTimeout(s, a(e)))
                }

                function d(e) {
                    return h = void 0, z && b ? o(e) : (b = v = void 0, g)
                }

                function l() {
                    void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0
                }

                function p() {
                    return void 0 === h ? g : d(O())
                }

                function m() {
                    var e = O(), n = c(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return r(w);
                        if (S) return h = setTimeout(s, t), o(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)), g
                }

                var b, v, y, g, h, w, k = 0, _ = !1, S = !1, z = !0;

                if ("function" != typeof e) throw new TypeError(f);
                return t = u(t) || 0, i(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
            }

            function o(e, t, o) {
                var r = !0, a = !0;
                if ("function" != typeof e) throw new TypeError(f);
                return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, { leading: r, maxWait: t, trailing: a })
            }

            function i(e) {
                var t = "undefined" == typeof e ? "undefined" : c(e);
                return !!e && ("object" == t || "function" == t)
            }

            function r(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
            }

            function a(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
            }

            function u(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return s;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(l, "");
                var n = m.test(e);
                return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
            }

            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                f = "Expected a function",
                s = NaN,
                d = "[object Symbol]",
                l = /^\s+|\s+$/g,
                p = /^[-+]0x[0-9a-f]+$/i,
                m = /^0b[01]+$/i,
                b = /^0o[0-7]+$/i,
                v = parseInt,
                y = Math.max,
                g = Date.now,
                h = setTimeout,
                w = clearTimeout,
                k = function() {},
                x = Math.min,
                j = Math.max,
                O = Date.now,
                _ = !1,
                S = !1,
                z = !0;

            e.exports = o
        }).call(this)
    },,, function(e, t) {
        "use strict";
        var n = function(e) {
            return (0, e.default)()
        };

        function o(e, t) {
            return t && t.__esModule ? t : { default: t }
        }

        var i = o(n), r = function() {
            var e = document.querySelectorAll("[data-aos]");
            return Array.prototype.map.call(e, function(e) { return { node: e, options: o(e.dataset).default } })
        };

        e.exports = r
    }, function(e, t) {
        "use strict";
        var n = function(e) {
            return (0, e.default)()
        };

        function o(e, t) {
            return t && t.__esModule ? t : { default: t }
        }

        var i = o(n), r = function(e) {
            return e && e.__esModule ? e : { default: e }
        };

        e.exports = function(e) {
            var t = function(e) {
                var t = document.querySelectorAll(e);
                return Array.prototype.map.call(t, function(e) { return { node: e } })
            };
            return r(t(e)).default
        }
    }])
});
