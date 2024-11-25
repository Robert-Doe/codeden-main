/*! For license information please see analytics-facade.v4.10.0-beta.2.js.LICENSE.txt */
window.AnalyticsFacade = function (t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {i: n, l: !1, exports: {}};
        return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    return r.m = t, r.c = e, r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o, function (e) {
            return t[e]
        }.bind(null, o));
        return n
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 2)
}([function (t, e, r) {
    t.exports = r(3)
}, function (t, e, r) {
   // "use strict";
    var n = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;

    function a(t) {
        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }

    t.exports = function () {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
                return e[t]
            })).join("")) return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach((function (t) {
                n[t] = t
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function (t, e) {
        for (var r, c, u = a(t), s = 1; s < arguments.length; s++) {
            for (var p in r = Object(arguments[s])) o.call(r, p) && (u[p] = r[p]);
            if (n) {
                c = n(r);
                for (var f = 0; f < c.length; f++) i.call(r, c[f]) && (u[c[f]] = r[c[f]])
            }
        }
        return u
    }
}, function (t, e, r) {
    t.exports = r(5)
}, function (t, e, r) {
    var n = function (t) {
       // "use strict";
        var e, r = Object.prototype, n = r.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";

        function u(t, e, r) {
            return Object.defineProperty(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}), t[e]
        }

        try {
            u({}, "")
        } catch (t) {
            u = function (t, e, r) {
                return t[e] = r
            }
        }

        function s(t, e, r, n) {
            var o = e && e.prototype instanceof v ? e : v, i = Object.create(o.prototype), a = new S(n || []);
            return i._invoke = function (t, e, r) {
                var n = f;
                return function (o, i) {
                    if (n === h) throw new Error("Generator is already running");
                    if (n === d) {
                        if ("throw" === o) throw i;
                        return A()
                    }
                    for (r.method = o, r.arg = i; ;) {
                        var a = r.delegate;
                        if (a) {
                            var c = E(a, r);
                            if (c) {
                                if (c === y) continue;
                                return c
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                            if (n === f) throw n = d, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        n = h;
                        var u = p(t, e, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? d : l, u.arg === y) continue;
                            return {value: u.arg, done: r.done}
                        }
                        "throw" === u.type && (n = d, r.method = "throw", r.arg = u.arg)
                    }
                }
            }(t, r, a), i
        }

        function p(t, e, r) {
            try {
                return {type: "normal", arg: t.call(e, r)}
            } catch (t) {
                return {type: "throw", arg: t}
            }
        }

        t.wrap = s;
        var f = "suspendedStart", l = "suspendedYield", h = "executing", d = "completed", y = {};

        function v() {
        }

        function w() {
        }

        function m() {
        }

        var g = {};
        g[i] = function () {
            return this
        };
        var b = Object.getPrototypeOf, x = b && b(b(N([])));
        x && x !== r && n.call(x, i) && (g = x);
        var O = m.prototype = v.prototype = Object.create(g);

        function k(t) {
            ["next", "throw", "return"].forEach((function (e) {
                u(t, e, (function (t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function j(t, e) {
            function r(o, i, a, c) {
                var u = p(t[o], t, i);
                if ("throw" !== u.type) {
                    var s = u.arg, f = s.value;
                    return f && "object" == typeof f && n.call(f, "__await") ? e.resolve(f.__await).then((function (t) {
                        r("next", t, a, c)
                    }), (function (t) {
                        r("throw", t, a, c)
                    })) : e.resolve(f).then((function (t) {
                        s.value = t, a(s)
                    }), (function (t) {
                        return r("throw", t, a, c)
                    }))
                }
                c(u.arg)
            }

            var o;
            this._invoke = function (t, n) {
                function i() {
                    return new e((function (e, o) {
                        r(t, n, e, o)
                    }))
                }

                return o = o ? o.then(i, i) : i()
            }
        }

        function E(t, r) {
            var n = t.iterator[r.method];
            if (n === e) {
                if (r.delegate = null, "throw" === r.method) {
                    if (t.iterator.return && (r.method = "return", r.arg = e, E(t, r), "throw" === r.method)) return y;
                    r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return y
            }
            var o = p(n, t.iterator, r.arg);
            if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, y;
            var i = o.arg;
            return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, y) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y)
        }

        function P(t) {
            var e = {tryLoc: t[0]};
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function _(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function S(t) {
            this.tryEntries = [{tryLoc: "root"}], t.forEach(P, this), this.reset(!0)
        }

        function N(t) {
            if (t) {
                var r = t[i];
                if (r) return r.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var o = -1, a = function r() {
                        for (; ++o < t.length;) if (n.call(t, o)) return r.value = t[o], r.done = !1, r;
                        return r.value = e, r.done = !0, r
                    };
                    return a.next = a
                }
            }
            return {next: A}
        }

        function A() {
            return {value: e, done: !0}
        }

        return w.prototype = O.constructor = m, m.constructor = w, w.displayName = u(m, c, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, u(t, c, "GeneratorFunction")), t.prototype = Object.create(O), t
        }, t.awrap = function (t) {
            return {__await: t}
        }, k(j.prototype), j.prototype[a] = function () {
            return this
        }, t.AsyncIterator = j, t.async = function (e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new j(s(e, r, n, o), i);
            return t.isGeneratorFunction(r) ? a : a.next().then((function (t) {
                return t.done ? t.value : a.next()
            }))
        }, k(O), u(O, c, "Generator"), O[i] = function () {
            return this
        }, O.toString = function () {
            return "[object Generator]"
        }, t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return e.reverse(), function r() {
                for (; e.length;) {
                    var n = e.pop();
                    if (n in t) return r.value = n, r.done = !1, r
                }
                return r.done = !0, r
            }
        }, t.values = N, S.prototype = {
            constructor: S, reset: function (t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(_), !t) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
            }, stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            }, dispatchException: function (t) {
                if (this.done) throw t;
                var r = this;

                function o(n, o) {
                    return c.type = "throw", c.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o
                }

                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i], c = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                        var u = n.call(a, "catchLoc"), s = n.call(a, "finallyLoc");
                        if (u && s) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        } else if (u) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        }
                    }
                }
            }, abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a)
            }, complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
            }, finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), _(r), y
                }
            }, catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            _(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            }, delegateYield: function (t, r, n) {
                return this.delegate = {
                    iterator: N(t),
                    resultName: r,
                    nextLoc: n
                }, "next" === this.method && (this.arg = e), y
            }
        }, t
    }(t.exports);
    try {
        regeneratorRuntime = n
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(n)
    }
}, function (t, e) {
    !function () {
        if ("function" == typeof window.CustomEvent) return !1;

        function t(t, e) {
            e = e || {bubbles: !1, cancelable: !1, detail: null};
            var r = document.createEvent("CustomEvent");
            return r.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), r
        }

        t.prototype = window.Event.prototype, window.CustomEvent = t
    }()
}, function (t, e, r) {
   // "use strict";
    r.r(e);
    var n = r(0), o = r.n(n);
    r(4);

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t) {
        return null != t && "object" === i(t) && !1 === Array.isArray(t)
    }

    function c(t) {
        return "string" == typeof t
    }

    var u = r(1), s = r.n(u), p = "https://app-stage.pluralsight.com/web-analytics/api/v1/dvs",
        f = "https://app.pluralsight.com/web-analytics/api/v1/dvs", l = "https://app.pluralsight.com",
        h = "https://app-stage.pluralsight.com", d = "AMCV_70D658CC558978FF7F000101%40AdobeOrg",
        y = ["app-stage", "compass-staging", "stage", "levelup-staging", "flow-staging"], v = ["next.tech"],
        w = ["app", "compass", "www", "levelup", "flow"], m = "track_experiment", g = "conditional_feature";

    function b(t, e) {
        t = t || [], e = e || {};
        var r = {};
        return Object.keys(e).forEach((function (n) {
            t.indexOf(n) > -1 && (r[n] = e[n])
        })), r
    }

    var x = O;

    function O(t, e) {
        this.debug = e, this.name = "ps_analytics";
        var r = b(this.persistantKeys, window[this.name]);
        window[this.name] = s()({}, r)
    }

    O.prototype.persistantKeys = ["user", "page", "eventData"], O.prototype.update = function (t) {
        t = t || {};
        var e = b(this.persistantKeys, window[this.name]);
        window[this.name] = s()({}, e, t)
    }, O.prototype.identify = function (t, e) {
        this.update({user: s()({id: t}, e)}), this.debug("identify", window[this.name])
    }, O.prototype.page = function (t) {
        this.update({page: s()({}, t)}), this.debug("pageview", window[this.name])
    }, O.prototype.track = function (t, e) {
        this.update({eventData: s()({}, e)}), this.debug(t, window[this.name])
    };
    var k, j = E;

    function E() {
    }

    function P(t, e) {
        window.localStorage.setItem(t, e)
    }

    function _(t) {
        return window.localStorage.getItem(t)
    }

    function S(t, e, r, n, o, i, a) {
        try {
            var c = t[i](a), u = c.value
        } catch (t) {
            return void r(t)
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o)
    }

    function N(t) {
        return function () {
            var e = this, r = arguments;
            return new Promise((function (n, o) {
                var i = t.apply(e, r);

                function a(t) {
                    S(i, n, o, a, c, "next", t)
                }

                function c(t) {
                    S(i, n, o, a, c, "throw", t)
                }

                a(void 0)
            }))
        }
    }

    function A(t, e) {
        return C.apply(this, arguments)
    }

    function C() {
        return (C = N(o.a.mark((function t(e, r) {
            return o.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return t.abrupt("return", window.fetch(e, r));
                    case 1:
                    case"end":
                        return t.stop()
                }
            }), t)
        })))).apply(this, arguments)
    }

    function L(t, e) {
        if (null == t) return {};
        var r, n, o = function (t, e) {
            if (null == t) return {};
            var r, n, o = {}, i = Object.keys(t);
            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
        }
        return o
    }

    function F(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function D(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? F(Object(r), !0).forEach((function (e) {
                I(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : F(Object(r)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function I(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function T(t, e, r, n, o, i, a) {
        try {
            var c = t[i](a), u = c.value
        } catch (t) {
            return void r(t)
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o)
    }

    function q(t) {
        return function () {
            var e = this, r = arguments;
            return new Promise((function (n, o) {
                var i = t.apply(e, r);

                function a(t) {
                    T(i, n, o, a, c, "next", t)
                }

                function c(t) {
                    T(i, n, o, a, c, "throw", t)
                }

                a(void 0)
            }))
        }
    }

    E.prototype.identify = function () {
        this.track("identify")
    }, E.prototype.page = function () {
        this.track("pageview")
    }, E.prototype.resetSCode = function () {
        if (window._satellite && window._satellite.getToolsByType) {
            var t = window._satellite.getToolsByType("sc");
            if (Array.isArray(t) && !(t.length < 1)) {
                var e = t[0].getS();
                e && e.clearVars && e.clearVars()
            }
        }
    }, E.prototype.track = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = t.startsWith("experiments:");
        if (this.resetSCode(), !window._satellite || r) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !1, e), document.body.dispatchEvent(n)
        } else window._satellite.track(t, e)
    };
    var G = U;

    function U(t) {
        var e = t.contextName, r = t.dvsUrl;
        if (!c(e)) throw new Error("contextName is required");
        this.debug = "true" === _("ps_debug"), this.contextName = e, this.dvsUrl = function (t) {
            var e = window.location.host.split(".")[0];
            if (c(t)) return t;
            if (-1 !== y.indexOf(e)) return p;
            if (-1 !== w.indexOf(e)) return f
        }(r)
    }

    function M(t) {
        var e, r = navigator.userAgent, n = document.location, o = n.href, i = n.pathname, a = n.search, c = document,
            u = c.referrer, s = c.title, p = (e = function (t) {
                if (k && k[t]) return k[t];
                var e = document.cookie.split(" ");
                return k = {}, e.forEach((function (t) {
                    var e = t.split("=");
                    k[e[0]] = e[1]
                })), k[t]
            }(d), decodeURI(e).split("|")[4]);
        return Object.assign({}, t, {
            adobeVisitorId: p,
            timestamp: new Date,
            path: i,
            referrer: u,
            search: a,
            title: s,
            url: o,
            userAgent: r
        })
    }

    function V(t) {
        return function (t) {
            if (Array.isArray(t)) return J(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return J(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return J(t, e)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function J(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function Q(t, e, r, n, o, i, a) {
        try {
            var c = t[i](a), u = c.value
        } catch (t) {
            return void r(t)
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o)
    }

    function R(t) {
        return function () {
            var e = this, r = arguments;
            return new Promise((function (n, o) {
                var i = t.apply(e, r);

                function a(t) {
                    Q(i, n, o, a, c, "next", t)
                }

                function c(t) {
                    Q(i, n, o, a, c, "throw", t)
                }

                a(void 0)
            }))
        }
    }

    U.prototype.log = function (t, e) {
        this.debug && console.log("DVS:", t, e)
    }, U.prototype.post = function () {
        var t = q(o.a.mark((function t(e, r, n) {
            var i, a, c;
            return o.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (this.dvsUrl) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return");
                    case 2:
                        return i = this.contextName, a = this.dvsUrl, c = M(r), t.next = 6, A("".concat(a, "/").concat(e), {
                            method: "POST",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify(D(D({}, c), {}, {context: i, eventName: n})),
                            credentials: "include"
                        });
                    case 6:
                        this.debug && this.log(e, c);
                    case 7:
                    case"end":
                        return t.stop()
                }
            }), t, this)
        })));
        return function (e, r, n) {
            return t.apply(this, arguments)
        }
    }(), U.prototype.identify = function () {
        var t = q(o.a.mark((function t(e, r) {
            var n, i, a;
            return o.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return n = r.created_at, i = L(r, ["created_at"]), a = D(D({type: "identify"}, i), {}, {createdAt: n}), t.abrupt("return", this.post("identify", a));
                    case 3:
                    case"end":
                        return t.stop()
                }
            }), t, this)
        })));
        return function (e, r) {
            return t.apply(this, arguments)
        }
    }(), U.prototype.page = q(o.a.mark((function t() {
        var e;
        return o.a.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
                case 0:
                    return e = {type: "page"}, t.abrupt("return", this.post("page", e));
                case 2:
                case"end":
                    return t.stop()
            }
        }), t, this)
    }))), U.prototype.track = function () {
        var t = q(o.a.mark((function t(e, r) {
            var n;
            return o.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return n = D({eventName: e, type: "track"}, r), t.abrupt("return", this.post("track", n, e));
                    case 2:
                    case"end":
                        return t.stop()
                }
            }), t, this)
        })));
        return function (e, r) {
            return t.apply(this, arguments)
        }
    }();
    var B = z;

    function z() {
    }

    z.prototype.identify = R(o.a.mark((function t() {
        var e = arguments;
        return o.a.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
                case 0:
                    if (window.analytics) {
                        t.next = 2;
                        break
                    }
                    return t.abrupt("return");
                case 2:
                    return P("ajs_user_traits", JSON.stringify({})), t.abrupt("return", new Promise((function (t) {
                        window.analytics.identify.apply(null, [].concat(V(e), [t]))
                    })));
                case 4:
                case"end":
                    return t.stop()
            }
        }), t)
    }))), z.prototype.page = R(o.a.mark((function t() {
        var e = arguments;
        return o.a.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
                case 0:
                    if (window.analytics) {
                        t.next = 2;
                        break
                    }
                    return t.abrupt("return");
                case 2:
                    return t.abrupt("return", new Promise((function (t) {
                        window.analytics.page.apply(null, [].concat(V(e), [t]))
                    })));
                case 3:
                case"end":
                    return t.stop()
            }
        }), t)
    }))), z.prototype.track = function () {
        var t = R(o.a.mark((function t(e) {
            var r, n, i, a, c = arguments, u = arguments;
            return o.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        for (r = u.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = u[i];
                        if (a = [m, g], window.analytics && !a.some((function (t) {
                            return e.endsWith(":".concat(t))
                        }))) {
                            t.next = 4;
                            break
                        }
                        return t.abrupt("return");
                    case 4:
                        return t.abrupt("return", new Promise((function (t) {
                            window.analytics.track.apply(null, [].concat(V(c), [t]))
                        })));
                    case 5:
                    case"end":
                        return t.stop()
                }
            }), t)
        })));
        return function (e) {
            return t.apply(this, arguments)
        }
    }();
    var K = function (t) {
        var e = Math.round(20);
        return new Promise((function (r, n) {
            var o = 0, i = setInterval((function () {
                o++, a(window[t]) ? c() : o > e && u()
            }), 100), c = function () {
                clearInterval(i), r(window[t])
            }, u = function () {
                clearInterval(i), n(new Error("window.".concat(t, " unavailable within ").concat(2e3, "ms")))
            }
        }))
    };

    function $(t, e, r, n, o, i, a) {
        try {
            var c = t[i](a), u = c.value
        } catch (t) {
            return void r(t)
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o)
    }

    function W(t) {
        return function () {
            var e = this, r = arguments;
            return new Promise((function (n, o) {
                var i = t.apply(e, r);

                function a(t) {
                    $(i, n, o, a, c, "next", t)
                }

                function c(t) {
                    $(i, n, o, a, c, "throw", t)
                }

                a(void 0)
            }))
        }
    }

    var Y = function (t, e) {
        return H.apply(this, arguments)
    };

    function H() {
        return (H = W(o.a.mark((function t(e, r) {
            var n;
            return o.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return n = e.track, t.prev = 1, t.next = 4, K("Appcues");
                    case 4:
                        t.sent.on("all", (function (t, e) {
                            n("generic_click", e, {contextName: "appcues"})
                        })), t.next = 11;
                        break;
                    case 8:
                        t.prev = 8, t.t0 = t.catch(1), r(t.t0, {}, "warn");
                    case 11:
                    case"end":
                        return t.stop()
                }
            }), t, null, [[1, 8]])
        })))).apply(this, arguments)
    }

    var X = Z;

    function Z() {
        !function (t, e, r, n, o) {
            var i, a, c, u, s;
            for ((o = t[n] = t[n] || {})._q = o._q || [], a = 0, c = (i = ["initialize", "identify", "updateOptions", "pageLoad", "track"]).length; a < c; ++a) !function (t) {
                o[t] = o[t] || function () {
                    o._q[t === i[0] ? "unshift" : "push"]([t].concat([].slice.call(arguments, 0)))
                }
            }(i[a]);
            (u = e.createElement(r)).async = !0, u.src = "https://content.pendo-cdn.pluralsight.com/agent/static/a0897c02-daf0-42c3-704b-aac71be04852/pendo.js", (s = e.getElementsByTagName(r)[0]) && s.parentNode.insertBefore(u, s)
        }(window, document, "script", "pendo")
    }

    Z.prototype.initializePendo = function (t) {
        window.pendo.initialize({jwt: t.signedJwt, signingKeyName: "a_cl-skil-TDTAG"})
    }, Z.prototype.identify = function (t, e, r) {
        this.initializePendo(r)
    }, Z.prototype.track = function (t, e) {
        window.pendo.track(t, e)
    }, Z.prototype.page = function (t) {
    };
    var tt = function (t) {
        return "true" === t
    }, et = "ps_debug", rt = function () {
    }, nt = function (t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "log";
        return console[r]("[DEBUG]", t, e)
    };

    function ot() {
        var t = tt(_(et));
        return window.location.href.indexOf("ps_debug") > -1 && (t = tt(function (t, e) {
            e || (e = window.location.href), t = t.replace(/[[\]]/g, "\\$&");
            var r = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
            return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
        }("ps_debug")), P(et, t)), t ? nt : rt
    }

    function it() {
        var t = window.location.host, e = t.split(".")[0];
        return -1 !== w.indexOf(e) || -1 !== v.indexOf(t)
    }

    function at(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function ct(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? at(Object(r), !0).forEach((function (e) {
                ut(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : at(Object(r)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function ut(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }

    function st(t, e, r, n, o, i, a) {
        try {
            var c = t[i](a), u = c.value
        } catch (t) {
            return void r(t)
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o)
    }

    function pt(t) {
        return function () {
            var e = this, r = arguments;
            return new Promise((function (n, o) {
                var i = t.apply(e, r);

                function a(t) {
                    st(i, n, o, a, c, "next", t)
                }

                function c(t) {
                    st(i, n, o, a, c, "throw", t)
                }

                a(void 0)
            }))
        }
    }

    e.default = ht;
    var ft = function (t) {
        return "web-analytics-user-".concat(t)
    }, lt = function (t) {
        return "pendo-analytics-user-".concat(t)
    };

    function ht(t) {
        var e = ot();
        if (!c(t.contextName)) throw new Error("AnalyticsFacade: contextName is required");
        if (this.context = t.contextName, this.dvsUrl = t.dvsUrl, this.queue = [], this.identifyCompleted = !1, this.waitForIdentify = t.waitForIdentify || !1, this.integrations = [new x({}, e), new B, new j, new G(t), new X], this.bootstrap(), !function () {
            var t = !1;
            try {
                t = void 0 !== window.ps_appcues_bootstrapped
            } catch (t) {
                console.warn(t)
            }
            return t
        }()) try {
            window.ps_appcues_bootstrapped = !0;
            var r = {track: this.track.bind(this)};
            Y(r, e)
        } catch (t) {
            console.warn(t)
        }
    }

    function dt(t) {
        return yt.apply(this, arguments)
    }

    function yt() {
        return (yt = pt(o.a.mark((function t(e) {
            var r, n;
            return o.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (!(r = vt(e))) {
                            t.next = 3;
                            break
                        }
                        return t.abrupt("return", r);
                    case 3:
                        return t.prev = 3, t.next = 6, wt();
                    case 6:
                        return n = t.sent, gt(e, n), t.abrupt("return", n);
                    case 11:
                        return t.prev = 11, t.t0 = t.catch(3), console.warn(t.t0), t.abrupt("return", {});
                    case 15:
                    case"end":
                        return t.stop()
                }
            }), t, null, [[3, 11]])
        })))).apply(this, arguments)
    }

    function vt(t) {
        try {
            var e = JSON.parse(_(ft(t)));
            return e && new Date(e.ttl) > new Date ? e.data : null
        } catch (t) {
            return null
        }
    }

    function wt(t) {
        return mt.apply(this, arguments)
    }

    function mt() {
        return (mt = pt(o.a.mark((function t(e) {
            var r, n;
            return o.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return r = it() ? "".concat(l, "/web-analytics/api/v1/users/current") : "".concat(h, "/web-analytics/api/v1/users/current"), t.next = 3, A(r, {
                            method: "GET",
                            headers: {"Content-Type": "application/json"},
                            credentials: "include"
                        });
                    case 3:
                        if ((n = t.sent).ok) {
                            t.next = 6;
                            break
                        }
                        throw new Error("Unable to fetch identity information. Error with status ".concat(n.status));
                    case 6:
                        return t.abrupt("return", n.json());
                    case 7:
                    case"end":
                        return t.stop()
                }
            }), t)
        })))).apply(this, arguments)
    }

    function gt(t, e) {
        var r = new Date((new Date).setMinutes((new Date).getMinutes() + 15));
        try {
            P(ft(t), JSON.stringify({data: e, ttl: r}))
        } catch (t) {
        }
    }

    function bt(t) {
        return xt.apply(this, arguments)
    }

    function xt() {
        return (xt = pt(o.a.mark((function t(e) {
            var r, n;
            return o.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (!(r = Ot(e))) {
                            t.next = 3;
                            break
                        }
                        return t.abrupt("return", r);
                    case 3:
                        return t.prev = 3, t.next = 6, kt();
                    case 6:
                        return n = t.sent, Et(e, n), t.abrupt("return", n);
                    case 11:
                        return t.prev = 11, t.t0 = t.catch(3), console.warn(t.t0), t.abrupt("return", {});
                    case 15:
                    case"end":
                        return t.stop()
                }
            }), t, null, [[3, 11]])
        })))).apply(this, arguments)
    }

    function Ot(t) {
        try {
            var e = JSON.parse(_(lt(t)));
            return e && new Date(e.ttl) > new Date ? e.data : null
        } catch (t) {
            return null
        }
    }

    function kt(t) {
        return jt.apply(this, arguments)
    }

    function jt() {
        return (jt = pt(o.a.mark((function t(e) {
            var r, n;
            return o.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return r = it() ? "".concat(l, "/web-analytics/api/v1/users/pendo") : "".concat(h, "/web-analytics/api/v1/users/pendo"), t.next = 3, A(r, {
                            method: "GET",
                            headers: {"Content-Type": "application/json"},
                            credentials: "include"
                        });
                    case 3:
                        if ((n = t.sent).ok) {
                            t.next = 6;
                            break
                        }
                        throw new Error("Unable to fetch identity information. Error with status ".concat(n.status));
                    case 6:
                        return t.abrupt("return", n.json());
                    case 7:
                    case"end":
                        return t.stop()
                }
            }), t)
        })))).apply(this, arguments)
    }

    function Et(t, e) {
        var r = new Date((new Date).setMinutes((new Date).getMinutes() + 15));
        try {
            P(lt(t), JSON.stringify({data: e, ttl: r}))
        } catch (t) {
        }
    }

    ht.VERSION = "4.10.0-beta.2", ht.prototype.bootstrap = pt(o.a.mark((function t() {
        var e;
        return o.a.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
                case 0:
                    return e = this.integrations.filter((function (t) {
                        return "function" == typeof t.bootstrap
                    })).map((function (t) {
                        return t.bootstrap()
                    })), t.next = 3, Promise.all(e);
                case 3:
                case"end":
                    return t.stop()
            }
        }), t, this)
    }))), ht.prototype.identify = function () {
        var t = pt(o.a.mark((function t(e, r) {
            var n, i;
            return o.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (r = r || {}, c(e)) {
                            t.next = 3;
                            break
                        }
                        throw new Error("AnalyticsFacade identify: id is required");
                    case 3:
                        if (a(r)) {
                            t.next = 5;
                            break
                        }
                        throw new Error("AnalyticsFacade identify: traits should be an object");
                    case 5:
                        return t.next = 7, dt(e);
                    case 7:
                        return n = t.sent, t.next = 10, bt(e);
                    case 10:
                        return i = t.sent, t.next = 13, this._callIntegrationsIdentify(e, r, n, i);
                    case 13:
                        return t.next = 15, this._processQueue();
                    case 15:
                        this.identifyCompleted = !0;
                    case 16:
                    case"end":
                        return t.stop()
                }
            }), t, this)
        })));
        return function (e, r) {
            return t.apply(this, arguments)
        }
    }(), ht.prototype.page = function (t) {
        if (t && !a(t)) throw new Error("AnalyticsFacade page: properties should be an object");
        this.waitForIdentify && !this.identifyCompleted ? this.queue.push({
            type: "page",
            properties: t
        }) : this.integrations.forEach((function (e) {
            e.page(t)
        }))
    }, ht.prototype.track = function (t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!c(t)) throw new Error("AnalyticsFacade track: event name is required");
        if (!a(e)) throw new Error("AnalyticsFacade track: properties should be an object");
        var n = r.contextName || this.context, o = n + ":" + t;
        this.waitForIdentify && !this.identifyCompleted ? this.queue.push({
            type: "track",
            fullEventName: o,
            properties: e
        }) : this.integrations.forEach((function (t) {
            t.track(o, e)
        }))
    }, ht.prototype.trackExperiment = function (t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!c(t)) throw new Error("AnalyticsFacade trackExperiment: name is required");
        if (void 0 === e) throw new Error("AnalyticsFacade trackExperiment: variation is required");
        var n = ct(ct({}, r), {}, {experiment_name: t, experiment_variation: e, context: this.context});
        this.track(m, n, {contextName: "experiments"})
    }, ht.prototype.trackConditionalFeature = function (t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!c(t)) throw new Error("AnalyticsFacade trackConditionalFeature: featureName is required");
        if (void 0 === e) throw new Error("AnalyticsFacade trackConditionalFeature: featureVariation is required");
        var n = ct(ct({}, r), {}, {featureName: t, featureVariation: e, context: this.context});
        this.track(g, n, {contextName: "conditional-feature"})
    }, ht.prototype._callIntegrationsIdentify = function (t, e, r, n) {
        var o = ct(ct({}, e), r);
        return Promise.all(this.integrations.map((function (e) {
            return e.identify(t, o, n)
        })))
    }, ht.prototype._processQueue = function () {
        var t = pt(o.a.mark((function t(e, r, n) {
            return o.a.wrap((function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, this._processQueuePageCalls();
                    case 2:
                        return t.next = 4, this._processQueueTrackCalls();
                    case 4:
                        this.queue = [];
                    case 5:
                    case"end":
                        return t.stop()
                }
            }), t, this)
        })));
        return function (e, r, n) {
            return t.apply(this, arguments)
        }
    }(), ht.prototype._processQueuePageCalls = function () {
        var t = this.queue.filter((function (t) {
            return "page" === t.type
        }));
        return Promise.all(this.integrations.map((function (e) {
            return Promise.all(t.map((function (t) {
                return e.page(t.properties)
            })))
        })))
    }, ht.prototype._processQueueTrackCalls = function () {
        var t = this.queue.filter((function (t) {
            return "track" === t.type
        }));
        return Promise.all(this.integrations.map((function (e) {
            return Promise.all(t.map((function (t) {
                return e.track(t.fullEventName, t.properties)
            })))
        })))
    }
}]).default;