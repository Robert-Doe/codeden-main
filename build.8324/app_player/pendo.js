// Pendo Agent Wrapper
// Environment:    production
// Agent Version:  2.134.1
// Installed:      2022-04-28T18:16:28Z
(function (PendoConfig) {
    !function (window, document, undefined) {
        !function () {
            function getDefaultExportFromCjs(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e
            }

            function getDefaultExportFromNamespaceIfPresent(e) {
                return e && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e
            }

            function getDefaultExportFromNamespaceIfNotNamed(e) {
                return e && Object.prototype.hasOwnProperty.call(e, "default") && 1 === Object.keys(e).length ? e["default"] : e
            }

            function getAugmentedNamespace(e) {
                if (e.__esModule) return e;
                var t = Object.defineProperty({}, "__esModule", {value: !0});
                return Object.keys(e).forEach(function (n) {
                    var i = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, i.get ? i : {
                        enumerable: !0, get: function () {
                            return e[n]
                        }
                    })
                }), t
            }

            function commonjsRequire(e) {
                throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
            }

            function loadAsModule(e) {
                return e.loadAsModule
            }

            function createPendoObject(e) {
                var t = loadAsModule(e) ? {} : window;
                return pendo$1 = t.pendo = t.pendo || {}
            }

            function isStagingEnvironment(e) {
                return "staging" === e.environmentName
            }

            function isStagingServer(e, t) {
                if (e || (e = getPendoConfig()), isStagingEnvironment(e)) return !0;
                if (t || (t = window.location), hasHashedStagingServers(e)) for (var n = getHash(t.host), i = 0, r = e[STAGING_SERVER_HASHES].length; r > i; ++i) {
                    var o = e[STAGING_SERVER_HASHES][i];
                    if (o === n) return !0
                }
                if (hasStagingServerConfig(e)) for (var a = 0, s = e.stagingServers.length; s > a; ++a) {
                    var d = e.stagingServers[a];
                    if ("string" == typeof d && (d = new RegExp("^" + d + "$")), d instanceof RegExp && d.test(t.host)) return !0
                }
                return !1
            }

            function getHash(e) {
                return b64.uint8ToBase64(sha1.create().update(e).digest())
            }

            function hasHashedStagingServers(e) {
                return e && e.stagingAgentUrl && e[STAGING_SERVER_HASHES]
            }

            function hasStagingServerConfig(e) {
                return e && e.stagingAgentUrl && e.stagingServers
            }

            function enqueueCall(e, t, n) {
                var i = e._q = e._q || [], r = "initialize" === t ? "unshift" : "push";
                i[r]([].concat.apply([t], n))
            }

            function captureCall(e, t) {
                t[e] = t[e] || function () {
                    enqueueCall(t, e, arguments)
                }
            }

            function loadStagingAgent(e, t) {
                if (isStagingEnvironment(e)) return !1;
                if (isStagingServer(e)) {
                    if (!t._q) {
                        var n, i, r = METHODS_TO_CAPTURE;
                        for (n = 0, i = r.length; i > n; ++n) captureCall(r[n], t)
                    }
                    return includeScript(e.stagingAgentUrl), !0
                }
                return !1
            }

            function includeScript(e) {
                var t = "script", n = document.createElement(t);
                n.async = !0, n.src = e;
                var i = document.getElementsByTagName(t)[0];
                i && i.parentNode ? i.parentNode.insertBefore(n, i) : (document.head || document.body).appendChild(n)
            }

            function setPendoConfig(e) {
                _pendoConfig = e
            }

            function getPendoConfig() {
                return _pendoConfig
            }

            function getPendoConfigFromEnclosingScope() {
                return "undefined" == typeof PendoConfig ? {} : PendoConfig
            }

            function getPendoConfigValue(e) {
                var t = getPendoConfig();
                return t[e]
            }

            function doesExist(e) {
                return !("undefined" == typeof e || null === e)
            }

            function get(e, t, n) {
                if (_.isString(t)) {
                    if (doesExist(e) && doesExist(e[t])) return e[t];
                    for (var i = t.split("."), r = 0, o = i.length; o > r; ++r) {
                        if (!doesExist(e)) return n;
                        e = e[i[r]]
                    }
                    return doesExist(e) ? e : n
                }
                return n
            }

            function getInstallType() {
                var e = ConfigReader.get("installType");
                return e || NATIVE_INSTALL_TYPE
            }

            function subscriptionBucketPrefix(e) {
                return e === PROD ? "pendo-static" : globalBucket(e)
            }

            function globalBucket(e) {
                if (e === PROD) return "pendo-io-static";
                var t = /^prod-(.+)$/.exec(e), n = t && t.length > 1 ? t[1] : e;
                return "pendo-" + n + "-static"
            }

            function pint(e) {
                return parseInt(e, 10)
            }

            function isMiniumumIEVersion(e) {
                var t = this;
                return isNaN(t.msie) || null == t.msie ? !0 : t.msie >= e
            }

            function isString(e) {
                return "string" == typeof e
            }

            function isUndefined(e) {
                return "undefined" == typeof e
            }

            function isNativeCode(e) {
                return /native/.test(e)
            }

            function shouldWrapNativeHistory() {
                var e = window.history && isNativeCode(window.history.pushState) && isNativeCode(window.history.replaceState),
                    t = !(4 > android), n = getInstallType() === EXTENSION_INSTALL_TYPE;
                return !(!e || !t || boxee || n)
            }

            function shouldWrapHashChange() {
                var e = "onhashchange" in window, t = !documentMode || documentMode > 7,
                    n = getInstallType() === EXTENSION_INSTALL_TYPE;
                return !(!e || !t || n)
            }

            function isProdAgent() {
                return _.contains(["prod", "prod-eu", "prod-us1", "gov-prod"], ENV)
            }

            function isBetaAgent(e, t) {
                return !/prod/.test(e) || isStagingServer(t)
            }

            function findIndex(e, t) {
                var n = -1;
                return _.find(e, function (e, i) {
                    return t(e, i) ? (n = i, !0) : void 0
                }), n
            }

            function randomElement(e) {
                return e[Math.floor(Math.random() * e.length)]
            }

            function randomString(e) {
                for (var t = "abcdefghijklmnopqrstuvwxyz", n = t + t.toUpperCase() + "1234567890", i = "", r = n.split(""), o = 0; e > o; o++) i += randomElement(r);
                return i
            }

            function backupObjectState(e, t) {
                var n = {};
                return t || (t = _.keys(e)), _.each(t, function (t) {
                    var i = e[t];
                    _.isArray(i) ? n[t] = i.slice() : _.isFunction(i) || (n[t] = i)
                }), function () {
                    _.each(n, function (t, n) {
                        e[n] = t
                    })
                }
            }

            function getNow() {
                return (new Date).getTime()
            }

            function isSfdcLightning() {
                return "undefined" != typeof $A && _.isFunction($A.get) && _.isString($A.get("$Browser.formFactor"))
            }

            function createStatefulIterator(e) {
                function t(t, n) {
                    if (null == n) return t;
                    for (var i = 0, o = t.length; o > i; ++i) if (e(t[i], i) === n) {
                        var a = t.slice(i + 1);
                        return r.circular ? a.concat(t.slice(0, i + 1)) : a
                    }
                    return r.circular ? t : []
                }

                function n(n, i) {
                    if (n && n.length) {
                        n = t(n, this.lastKey);
                        for (var o = 0; o < n.length; ++o) if (i(n[o], o)) return this.lastKey = e(n[o], o), r.circular
                    }
                    return this.lastKey = null, !0
                }

                function i() {
                    this.lastKey = null
                }

                _.isFunction(e) || (e = function (e, t) {
                    return t
                });
                var r = {circular: !0, lastKey: null, eachUntil: n, reset: i};
                return r
            }

            function throttleIterator(e, t) {
                return t.eachUntil = _.wrap(t.eachUntil, function (t, n, i) {
                    var r = getNow();
                    return t.call(this, n, function () {
                        return i.apply(this, arguments) || Math.abs(getNow() - r) >= e
                    })
                }), t
            }

            function getZoneSafeMethod(e) {
                var t = "__symbol__";
                if ("undefined" != typeof Zone && _.isFunction(Zone[t])) {
                    var n = window[Zone[t](e)];
                    if (_.isFunction(n)) return n
                }
                return window[e]
            }

            function getIsFiniteImpl(e) {
                return _.isFunction(e.isFinite) ? e.isFinite : e.Number && _.isFunction(e.Number.isFinite) ? e.Number.isFinite : function (e) {
                    return e != 1 / 0 && e != -(1 / 0) && !isNaN(e)
                }
            }

            function isInteger(e) {
                return "number" == typeof e && isFinite$1(e) && Math.floor(e) === e
            }

            function poll(e, t, n, i) {
                t = t || {}, t.maxRetries = isInteger(t.maxRetries) ? t.maxRetries : 10, t.delay = isInteger(t.delay) ? t.delay : 50, t.exponentialBackoff = t.exponentialBackoff || !1;
                var r = function (e) {
                    return e && "[object Function]" === {}.toString.call(e)
                }, o = r(n) ? n : function () {
                }, a = r(i) ? i : function () {
                }, s = e();
                s ? o(s) : t.maxRetries > 0 ? setTimeout(function () {
                    t.maxRetries = --t.maxRetries, t.delay = t.exponentialBackoff ? 2 * t.delay : t.delay, poll(e, t, o, a)
                }, t.delay) : (a || function () {
                })()
            }

            function flux(e) {
                function t(e, t) {
                    var n = g[e];
                    if (!n) throw new Error("mutation " + e + " not found");
                    n(t), _.each(l, function (n) {
                        n({type: e, payload: t}, c)
                    })
                }

                function n(e, t) {
                    var n = h[e];
                    if (!n) throw new Error("action " + e + " not found");
                    var i = n(t);
                    return _.each(f, function (n) {
                        n({type: e, payload: t}, c)
                    }), i
                }

                function i(e, t) {
                    return _.isFunction(t) ? (e.push(t), r(e, t)) : _.noop
                }

                function r(e, t) {
                    return function () {
                        var n = e.indexOf(t);
                        n >= 0 && e.splice(n, 1)
                    }
                }

                function o(e) {
                    return _.isFunction(e) || _.isRegExp(e) ? e : _.isArray(e) ? _.map(e, o) : _.isObject(e) ? _.reduce(e, function (e, t, n) {
                        return e[n] = o(t), e
                    }, {}) : e
                }

                function a(e) {
                    var t = e.state || {};
                    return _.each(e.modules, function (e, n) {
                        t[n] = a(e)
                    }), t
                }

                function s(e, t) {
                    var n = {};
                    return _.each(e.mutations, function (i, r) {
                        n[t + r] = _.partial(i, e.state)
                    }), _.each(e.modules, function (e, i) {
                        _.extend(n, s(e, t + i + "/"))
                    }), n
                }

                function d(e, t, n) {
                    function i(e, i, r) {
                        var o = r && r.root ? e : n + e;
                        t.commit(o, i)
                    }

                    function r(e, i, r) {
                        var o = r && r.root ? e : n + e;
                        return t.dispatch(o, i)
                    }

                    function o(e) {
                        return _.reduce(e, function (e, t, i) {
                            return 0 !== i.indexOf(n) ? e : (e[i.replace(n, "")] = t, e)
                        }, {})
                    }

                    var a = {}, s = {
                        state: e.state,
                        rootState: t.state,
                        commit: i,
                        dispatch: r,
                        getters: o(t.getters),
                        rootGetters: t.getters
                    };
                    return _.each(e.actions, function (e, t) {
                        a[n + t] = _.partial(e, s)
                    }), _.each(e.modules, function (e, i) {
                        _.extend(a, d(e, t, n + i + "/"))
                    }), a
                }

                function u(e, t, n, i) {
                    var r = {}, o = {};
                    return _.each(e.getters, function (e, a) {
                        o[a] = r[i + a] = function () {
                            return e(n, o, t.state, t.getters)
                        }
                    }), _.each(e.modules, function (e, o) {
                        _.extend(r, u(e, t, n[o], i + o + "/"))
                    }), r
                }

                e = o(e);
                var c = a(e), l = [], f = [], p = {
                    state: c,
                    commit: t,
                    dispatch: n,
                    subscribe: _.partial(i, l),
                    subscribeAction: _.partial(i, f)
                };
                p.getters = u(e, p, p.state, "");
                var g = s(e, ""), h = d(e, p, "");
                return p
            }

            function wrapStorageMethod(e, t) {
                return function () {
                    try {
                        return t.apply(e, arguments)
                    } catch (n) {
                    }
                }
            }

            function wrapStorageObject(e) {
                return {
                    getItem: wrapStorageMethod(e, e.getItem),
                    setItem: wrapStorageMethod(e, e.setItem),
                    removeItem: wrapStorageMethod(e, e.removeItem)
                }
            }

            function createStorageShim(e) {
                var t = _.noop, n = {getItem: t, setItem: t, removeItem: t};
                try {
                    var i = e();
                    return i ? wrapStorageObject(i) : n
                } catch (r) {
                    return n
                }
            }

            function qAllObject(e) {
                var t = q.defer(), n = _.isArray(e) ? [] : {}, i = _.size(e);
                if (!i) return q.resolve(e);
                var r = !1;
                return _.each(e, function (e, o) {
                    q.resolve(e).then(function (e) {
                        n[o] = e, 0 !== --i || r || t.resolve(n)
                    }, function (e) {
                        r || (r = !0, t.reject(e))
                    })
                }), t.promise
            }

            function Eventable() {
                var e = this._handlers = {};
                return this.on = function (t, n) {
                    if (_.isString(t) || _.isFunction(n)) {
                        var i = e[t];
                        i || (i = e[t] = []), _.indexOf(i, n) < 0 && i.push(n)
                    }
                    return this
                }, this.one = function (e, t) {
                    var n = this, i = function () {
                        n.off(e, i), t.apply(this, arguments)
                    };
                    return this.on(e, i)
                }, this.off = function (t, n) {
                    var i = e[t];
                    if (_.isFunction(n)) {
                        var r = _.indexOf(i, n);
                        i && r >= 0 && i.splice(r, 1)
                    } else i && n === undefined && (i.length = 0);
                    return this
                }, this.trigger = function (t) {
                    var n = e[t] ? e[t].slice() : [], i = _.toArray(arguments).slice(1);
                    return _.map(n, function (e) {
                        return e.apply(pendo$1, i)
                    })
                }, this.triggerAsync = function () {
                    var e = _.map(this.trigger.apply(this, arguments), function (e) {
                        return e === !1 ? q.reject() : e
                    });
                    return q.all(e)
                }, this
            }

            function createEventTracer(e) {
                function t(e, t) {
                    t.clear(e)
                }

                function n(e, t) {
                    var n = _.isFunction(t) ? t() : t;
                    return n.getItem(e)
                }

                function i(e, t, n) {
                    var i = _.isFunction(n) ? n() : n;
                    i.setItem(e, t)
                }

                function r(e, t) {
                    var r = n(e, t);
                    return r || (r = randomString(16), i(e, r, t)), r
                }

                function o() {
                    return n(y, d)
                }

                function a(e) {
                    i(y, e, d)
                }

                function s() {
                    var e = randomString(16);
                    return i(b, e, d), e
                }

                function d() {
                    return pendoSessionStorage
                }

                function u(e) {
                    pendoSessionStorage.setItem(S, e)
                }

                function c(e) {
                    return pendoSessionStorage.getItem(S) !== e
                }

                function l(t) {
                    if (sniffer.addEventListener) {
                        var n = function (e) {
                            e.key === b && t()
                        };
                        return e.addEventListener("storage", n), function () {
                            e.removeEventListener("storage", n)
                        }
                    }
                }

                var f = _.partial, p = _.compose, g = _.extend, h = _.omit, m = "pendo_sessionId", v = "pendo_frameId",
                    b = "pendo_tabId", y = "pendo_parentTabId", S = "pendo_cd", w = {
                        data: {}, getItem: function (e) {
                            return w.data[e]
                        }, setItem: function (e, t) {
                            w.data[e] = t
                        }, clear: function (e) {
                            w.data[e] = null, delete w.data[e]
                        }
                    }, E = f(r, b, d), C = f(r, v, w), I = f(r, m, w);
                return Events.on("guideListChanged", p(I, f(t, m, w))), {
                    addTracerIds: function (e) {
                        return h(g(e, {
                            parentTabId: o(),
                            tabId: E(),
                            frameId: C(),
                            sessionId: w.getItem(m)
                        }), function (e) {
                            return e === undefined
                        })
                    },
                    setParentTabId: a,
                    newTabId: s,
                    getTabId: E,
                    detectClonedSession: u,
                    isClonedSession: c,
                    tabIdChanged: l
                }
            }

            function hasComposedPath(e) {
                return e && _.isFunction(e.composedPath)
            }

            function getComposedPath(e) {
                return hasComposedPath(e) ? e.composedPath() : null
            }

            function getShadowRoot(e) {
                return e.shadowRoot
            }

            function isElementShadowRoot(e, t) {
                return t || (t = window), "undefined" != typeof t.ShadowRoot && e instanceof t.ShadowRoot && e.host
            }

            function getParent(e, t) {
                return isElementShadowRoot(e, t) ? e.host : e.parentNode
            }

            function getRenderParent(e, t) {
                return e.assignedSlot ? e.assignedSlot : getParent(e, t)
            }

            function dom(e, t) {
                var n, i, r = this;
                if (e && e instanceof dom) return e;
                if (!(r instanceof dom)) return new dom(e, t);
                if (e) if (e.nodeType) n = [e]; else if (i = /^<(\w+)\/?>$/.exec(e)) n = [document.createElement(i[1])]; else if (/^<[\w\W]+>$/.test(e)) {
                    var o = document.createElement("div");
                    o.innerHTML = e, n = _.toArray(o.childNodes)
                } else _.isString(e) ? (t instanceof dom && (t = t.length > 0 ? t[0] : null), n = ShadowSizzle(e, t)) : n = [e]; else n = [];
                return _.each(n, function (e, t) {
                    r[t] = e
                }), r.context = t, r.length = n.length, r
            }

            function DomData() {
                this.ownerKey = "_pendo_" + randomString(8)
            }

            function isCapturingPhase(e) {
                return _.isNumber(e.eventPhase) && e.eventPhase === CAPTURING_PHASE
            }

            function isAtTargetPhase(e) {
                return _.isNumber(e.eventPhase) && e.eventPhase === AT_TARGET
            }

            function attachEventInternal(e, t, n, i) {
                e && t && n && (e !== window || "error" !== t) && (i || (i = !1), e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent("on" + t, n))
            }

            function detachEventInternal(e, t, n, i) {
                e && t && n && (i || (i = !1), e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent("on" + t, n))
            }

            function isElementNode(e) {
                return e && e.nodeType === ELEMENT
            }

            function getComputedStyle_safe(e) {
                if (isElementNode(e)) try {
                    if (window.getComputedStyle) return getComputedStyle(e);
                    if (e.currentStyle) return e.currentStyle
                } catch (t) {
                }
            }

            function hasCssTransform(e, t) {
                if (e && _.isFunction(e.getPropertyValue)) {
                    var n = [e.getPropertyValue("transform")];
                    return "undefined" != typeof t && _.isString(t) && n.push(e.getPropertyValue("-" + t.toLowerCase() + "-transform")), _.any(n, function (e) {
                        return e && "none" !== e
                    })
                }
                return !1
            }

            function getNumber(e) {
                return _.isNumber(e) ? e : 0
            }

            function isOffsetParent(e) {
                if (!e || !e.childNodes) return !1;
                var t = _.find(e.childNodes, function (e) {
                    return isElementNode(e) && null != e.offsetParent
                });
                if (t) return t.offsetParent === e;
                var n = getComputedStyle_safe(e);
                return n && (_.contains(["relative", "absolute", "fixed"], n.position) || hasCssTransform(n, vendorPrefix))
            }

            function getAbsolutePosition(e, t, n) {
                var i;
                if (!e) return {width: 0, height: 0};
                i = {width: getNumber(e.offsetWidth), height: getNumber(e.offsetHeight)};
                for (var r = isOffsetParent(t) ? t : t.offsetParent, o = e, a = 0, s = 0; o && !isNaN(o.offsetLeft) && !isNaN(o.offsetTop) && o !== r;) a += getNumber(o.offsetLeft) + getNumber(o.clientLeft), s += getNumber(o.offsetTop) + getNumber(o.clientTop), o = o.offsetParent;
                for (i.top = s, i.left = a, o = e; o && o !== r;) i.top -= getNumber(o.scrollTop), i.left -= getNumber(o.scrollLeft), o = getRenderParent(o, n);
                return i.bottom = i.top + i.height, i.right = i.left + i.width, i
            }

            function getScreenPosition(e) {
                if (!_.isFunction(e.getBoundingClientRect)) return {width: e.offsetWidth, height: e.offsetHeight};
                var t = e.getBoundingClientRect();
                return {
                    top: t.top,
                    left: t.left,
                    bottom: t.bottom,
                    right: t.right,
                    width: t.width || e.offsetWidth,
                    height: t.height || e.offsetHeight
                }
            }

            function documentScrollTop(e) {
                e = e || window;
                var t = e.document, n = t.documentElement;
                return (e.pageYOffset || n.scrollTop || getBody(t).scrollTop) - (n.clientTop || 0)
            }

            function documentScrollLeft(e) {
                e = e || window;
                var t = e.document, n = t.documentElement;
                return (e.pageXOffset || n.scrollLeft || getBody(t).scrollLeft) - (n.clientLeft || 0)
            }

            function hasDocumentScrolling(e, t) {
                return t.scrollHeight <= e.documentElement.scrollHeight
            }

            function bodyOffset(e) {
                e = e || window;
                var t = e.document, n = getBody(t);
                if (n) {
                    var i = getComputedStyle_safe(n),
                        r = i && ("relative" === i.position || "absolute" === i.position || hasCssTransform(i, vendorPrefix)),
                        o = hasDocumentScrolling(t, n);
                    if ((r || !o) && (!r || o)) {
                        var a = n.getBoundingClientRect();
                        return {top: a.top + documentScrollTop(e), left: a.left + documentScrollLeft(e)}
                    }
                }
                return {top: 0, left: 0}
            }

            function positionFixedActsLikePositionAbsolute() {
                return hasCssTransform(getComputedStyle_safe(getBody()), vendorPrefix) && isNaN(msie)
            }

            function applyBodyOffset(e) {
                var t = bodyOffset();
                return e.left -= t.left, e.top -= t.top, _.isNumber(e.right) && (e.right -= t.left), _.isNumber(e.bottom) && (e.bottom -= t.top), e
            }

            function roundOffsetPosition(e) {
                return _.each(["left", "top", "width", "height"], function (t) {
                    e[t] = Math.round(e[t])
                }), e
            }

            function getOffsetPosition(e) {
                var t, n, i;
                if (!e) return {width: 0, height: 0};
                if (t = {
                    width: _.isNumber(e.offsetWidth) ? e.offsetWidth : 0,
                    height: _.isNumber(e.offsetHeight) ? e.offsetHeight : 0
                }, n = 0, i = 0, e.getBoundingClientRect) {
                    var r;
                    try {
                        r = e.getBoundingClientRect()
                    } catch (o) {
                        return {width: 0, height: 0}
                    }
                    return t.top = r.top, t.left = r.left, t.width = Math.max(t.width, _.isNumber(r.width) ? r.width : 0), t.height = Math.max(t.height, _.isNumber(r.height) ? r.height : 0), isPositionFixed(e) ? t.fixed = !0 : (t.top += documentScrollTop(), t.left += documentScrollLeft(), t = applyBodyOffset(t)), roundOffsetPosition(t)
                }
                for (; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) n += e.offsetLeft, i += e.offsetTop, e = e.offsetParent;
                return t.top = i, t.left = n, roundOffsetPosition(t)
            }

            function isInDocument(e) {
                if (ShadowSizzle.contains(document, e)) return !0;
                for (; e && e.parentNode || shadowAPI.isElementShadowRoot(e);) e = shadowAPI.getParent(e);
                return e === document
            }

            function hasParentWithCssTransform(e) {
                for (var t, n = e && e.parentNode; n;) {
                    if (t = getComputedStyle_safe(n), hasCssTransform(t, vendorPrefix)) return !0;
                    n = n.parentNode
                }
                return !1
            }

            function isPositionFixed(e) {
                for (var t, n = e; n;) {
                    if (t = getComputedStyle_safe(n), !t) return !1;
                    if ("fixed" === t.position) return isNaN(msie) ? !hasParentWithCssTransform(n) : !0;
                    n = n.parentNode
                }
                return !1
            }

            function getOverflowDirection(e, t) {
                var n = getComputedStyle_safe(e);
                return t = t || /(auto|scroll|hidden)/, n ? "inline" === n.display ? OverflowDirection.NONE : t.test(n.overflowY) && t.test(n.overflowX) ? OverflowDirection.BOTH : t.test(n.overflowY) ? OverflowDirection.Y : t.test(n.overflowX) ? OverflowDirection.X : t.test(n.overflow) ? OverflowDirection.BOTH : OverflowDirection.NONE : OverflowDirection.NONE
            }

            function isVisibleInScrollParent(e, t, n) {
                var i = getClientRect(t), r = getOverflowDirection(t, n);
                if (r === OverflowDirection.BOTH && !intersectRect(e, i)) return !1;
                if (r === OverflowDirection.Y) {
                    if (e.top >= i.bottom) return !1;
                    if (e.bottom <= i.top) return !1
                }
                if (r === OverflowDirection.X) {
                    if (e.left >= i.right) return !1;
                    if (e.right <= i.left) return !1
                }
                return !0
            }

            function isBodyElement(e) {
                return e && e.nodeName && "body" === e.nodeName.toLowerCase() && ShadowSizzle.contains(document, e)
            }

            function isElementVisibleInBody(e) {
                if (!e) return !1;
                if (isBodyElement(e)) return !0;
                var t = getClientRect(e);
                if (0 === t.width || 0 === t.height) return !1;
                var n = getComputedStyle_safe(e);
                if (n && "hidden" === n.visibility) return !1;
                for (var i = e; i && n;) {
                    if ("none" === n.display) return !1;
                    if (parseFloat(n.opacity) <= 0) return !1;
                    i = i.parentNode, n = getComputedStyle_safe(i)
                }
                return !0
            }

            function isElementVisible(e, t) {
                if (!isElementVisibleInBody(e)) return !1;
                if (isBodyElement(e)) return !0;
                var n = getClientRect(e);
                t = t || /hidden/;
                for (var i = getScrollParent(e, t), r = null; i && i !== document && i !== r;) {
                    if (!isVisibleInScrollParent(n, i, t)) return !1;
                    r = i, i = getScrollParent(i, t)
                }
                if (e.getBoundingClientRect) {
                    var o = e.getBoundingClientRect(), a = o.right, s = o.bottom;
                    if (n.fixed || (a += documentScrollLeft(), s += documentScrollTop()), 0 >= a || 0 >= s) return !1
                }
                return !0
            }

            function scrollIntoView(e) {
                var t, n, i, r, o, a, s = /(auto|scroll)/, d = getBody();
                for (n = getScrollParent(e, s); n && n !== d;) t = getClientRect(e), i = getClientRect(n), r = 0, o = 0, t.bottom > i.bottom && (r += t.bottom - i.bottom, t.top -= r, t.bottom -= r), t.top < i.top && (a = i.top - t.top, r -= a, t.top += a, t.bottom += a), t.right > i.right && (o += t.right - i.right, t.left -= o, t.right -= o), t.left < i.left && (a = i.left - t.left, o -= a, t.left += a, t.right += a), n.scrollTop += r, n.scrollLeft += o, n = getScrollParent(n, s)
            }

            function evalScript(e) {
                var t = document.createElement("script"),
                    n = document.head || document.getElementsByTagName("head")[0] || document.body;
                t.type = "text/javascript", e.src ? t.src = e.src : t.text = e.text || e.textContent || e.innerHTML || "", n.appendChild(t), n.removeChild(t)
            }

            function isElemInViewport(e) {
                var t = getScreenPosition(e), n = getScreenDimensions();
                return _.extend(n, {top: 0, left: 0, bottom: n.height, right: n.width}), intersectRect(n, t)
            }

            function isElemIsFocusable(e) {
                var t = ["A", "INPUT", "LABEL", "SELECT", "TEXTAREA", "BUTTON", "FIELDSET", "LEGEND", "DATALIST", "OUTPUT", "OPTION", "OPTGROUP"],
                    n = _.contains(t, e.nodeName), i = !!e.tabIndex, r = n || i, o = !e.hidden, a = !e.disabled;
                return r && o && a
            }

            function LauncherSearch() {
                function e(e) {
                    return i.text ? (e || "").replace(new RegExp(i.text, "gi"), "<strong>$&</strong>") : e
                }

                function t() {
                    dom(SEARCHBOX_CSS_SELECTOR).each(function () {
                        this.value = ""
                    })
                }

                var n = this, i = {text: "", highlight: e, clear: t};
                return n.data && n.data.enableSearch && n.data.enableSearch && (n.data.search = i, pendo$1.disableGuideCenterContentSearch || n.before("update", prefetchGuideContentForSearch), n.before("update", function () {
                    i.text = getLauncherSearchText().join(" ");
                    var e = dom("._pendo-launcher_");
                    i.text ? e.addClass(LAUNCHER_SEARCHING_CLASS) : e.removeClass(LAUNCHER_SEARCHING_CLASS)
                })), n
            }

            function isSearchEnabled() {
                if (!pendo$1.guideWidget) return !1;
                var e = pendo$1.guideWidget.data;
                return !!e && !!e.enableSearch
            }

            function launcherHasActiveSearch() {
                return getLauncherSearchText().length > 0
            }

            function getLauncherSearchText() {
                if (!isSearchEnabled()) return [];
                var e = dom(SEARCHBOX_CSS_SELECTOR)[0];
                if (!e) return [];
                var t = e.value;
                return t.length > 0 ? (t = trim.call(t), [].concat(_.compact(t.split(" ")))) : []
            }

            function prefetchGuideContentForSearch(e) {
                return ConfigReader.get("disablePrefetch") ? void 0 : q.all(_.map(e, function (e) {
                    return e.fetchContent()
                }))
            }

            function applySearch(e) {
                var t = getLauncherSearchText();
                if (0 === t.length) return e;
                var n = _.map(t, _.partial(doSearch, e));
                return n = _.union.apply(_, n)
            }

            function doSearch(e, t) {
                function n(e) {
                    return e.searchFor(t)
                }

                function i(e) {
                    var t = ["tag", "name", "content"];
                    return _.indexOf(t, e.field)
                }

                return log("doing search on " + t, "launcher", "search", "guides"), e = e || getActiveGuides(), t && 0 !== t.length ? _.chain(e).filter(isLauncher).map(n).compact().sortBy(i).pluck("guide").value() : e
            }

            function base32Encode(e) {
                for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", n = e.length, i = 0, r = 0, o = "", a = 0; n > a; a++) for (r = r << 8 | e[a], i += 8; i >= 5;) o += t[r >>> i - 5 & 31], i -= 5;
                return i > 0 && (o += t[r << 5 - i & 31]), o
            }

            function replaceWithContentHost(e) {
                var t = ConfigReader.getLocalConfig("contentHost");
                if (!t || !e) return e;
                var n = new RegExp("(https:)?\\/\\/" + subscriptionBucketPrefix(ENV) + "-\\d+\\.storage\\.googleapis\\.com", "g"),
                    i = new RegExp("(https:)?\\/\\/" + globalBucket(ENV) + "\\.storage\\.googleapis\\.com", "g");
                return e.replace(n, t).replace(i, t).replace(new RegExp("(https:)?\\/\\/" + escapeRegExp(ASSET_HOST), "g"), t)
            }

            function replaceObjectWithContentHost(e) {
                var t = ConfigReader.getLocalConfig("contentHost");
                return t ? JSON.parse(replaceWithContentHost(JSON.stringify(e))) : e
            }

            function getContentHostRegex() {
                var e = escapeRegExp(ConfigReader.getHostedConfig("contentHost"));
                return e ? e + "*" : void 0
            }

            function escapeRegExp(e) {
                return e ? e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : void 0
            }

            function isValidGuideResponse(e) {
                return _.isObject(e) && e.hasOwnProperty("type") && e.hasOwnProperty("children") && e.hasOwnProperty("props") ? !0 : !1
            }

            function filterPendoAgentXhrRequests(e, t) {
                var n = HOST.replace(/\./g, "\\.").replace(/\//g, "\\/"), i = new RegExp("^" + n + "\\/data\\/"),
                    r = get(e, "request_url", "");
                i.test(r) || t(e)
            }

            function createXhrEventQueue(e) {
                var t = e.cache, n = createSendQueue(e, defaultSendEvent),
                    i = createSendQueue(e, reliableSendEventForUnload),
                    r = pipeline(filterPendoAgentXhrRequests, siloReducer(t), filterSiloLength, n);
                return {
                    push: function (e) {
                        r(e, _.noop)
                    }, clear: function () {
                        t.length = 0
                    }, flush: function (e) {
                        if (0 !== t.length) {
                            var r = t.slice();
                            t.length = 0;
                            var o = (e || {}).guaranteed ? i : n;
                            o(r, _.noop)
                        }
                    }
                }
            }

            function callLater(e, t) {
                if (t = parseInt(t, 10) || 0, e[t]) return e[t];
                var n = window.setTimeout(function () {
                    e(), e[t]()
                }, t);
                return e[t] = function () {
                    window.clearTimeout(n), delete e[t]
                }
            }

            function flushNow(e, t) {
                try {
                    eventQueue.flush(t), trackEventQueue.flush(t)
                } catch (n) {
                    writeException(n, "unhandled error while flushing event cache")
                }
            }

            function flushLater(e) {
                return callLater(_.partial(flushNow, !0), e)
            }

            function flushEvery(e) {
                if (e = parseInt(e, 10) || 0, _.isObject(flushEvery.intervals) || (flushEvery.intervals = {}), !flushEvery.intervals[e]) {
                    var t = window.setInterval(flushNow, e);
                    return flushEvery.intervals[e] = function () {
                        clearInterval(t), delete flushEvery.intervals[e]
                    }
                }
            }

            function flushStop() {
                var e = _.values(flushEvery.intervals).concat([flushNow]);
                _.map(e, function (e) {
                    _.isFunction(e) && e()
                })
            }

            function buffersClearAll() {
                eventQueue.clear(), trackEventQueue.clear(), xhrEventQueue.clear(), flushStop()
            }

            function eventCreate(e, t, n, i, r) {
                var o = {
                    type: e,
                    browser_time: getNow(),
                    visitor_id: get_visitor_id(),
                    account_id: get_account_id(),
                    url: pendoDotUrl.externalizeURL(n),
                    props: t
                };
                return o = EventTracer.addTracerIds(o), "track" === e ? o.track_event_name = i || defaultTrackName : "click" === e && r && (o.eventProperties = r), o
            }

            function collectEvent(e, t, n, i, r) {
                if (pendoCore) {
                    var o = eventCreate(e, t, n, i, r);
                    if (isURLValid(o.url) && eventIsWhitelisted(o)) return "track" === e ? void trackEventQueue.push(o) : void eventQueue.push(attachMonitoringData(store, o))
                }
            }

            function attachMonitoringData(e, t) {
                try {
                    if (!e.getters["monitoring/shouldFlush"]()) return t;
                    var n = e.getters["monitoring/payload"]();
                    e.dispatch("monitoring/flush"), _.isEmpty(n) || (t.ops = n)
                } catch (i) {
                }
                return t
            }

            function eventIsWhitelisted(e) {
                return ConfigReader.get("freeNPSData") ? _.contains(WHITELIST_FREE_NPS, e.type) : !0
            }

            function pipeline() {
                var e = _.toArray(arguments);
                return function (t, n) {
                    var i = e.concat([n]);
                    !function r(e, t) {
                        e < i.length && i[e](t, function (t) {
                            r(e + 1, t)
                        })
                    }(0, t)
                }
            }

            function reducer(e, t) {
                var n = t;
                return function (t, i) {
                    n = e(n, t), i(n)
                }
            }

            function siloReducer(e) {
                return reducer(function (e, t) {
                    return e.push(t), e
                }, e)
            }

            function eventAddBytes(e) {
                return null == e.bytes && (e.bytes = JSON.stringify(e).length), e
            }

            function filterAccountIdsForSendQueue(e, t) {
                var n = ConfigReader.get("trainingPartner");
                return n ? splitSiloOnFieldChange("account_id")(e, t) : t(e)
            }

            function splitSiloOnFieldChange(e) {
                return function (t, n) {
                    if (!t.length) return n(t);
                    var i, r = get(t[0], e), o = !0;
                    for (i = 1; i < t.length; i++) if (r !== get(t[i], e)) {
                        o = !1;
                        break
                    }
                    if (o) return n(t);
                    var a = t.slice(0, i), s = t.slice(i);
                    n(a), n(s)
                }
            }

            function filterSiloCapacity(e, t) {
                for (var n, i = 0, r = 0; r < e.length; ++r) {
                    var o = eventAddBytes(e[r]).bytes;
                    i + o > SILO_MAX_BYTES && (n = r), i += o
                }
                if (0 === n && 1 === e.length && (n = 1), n) {
                    var a = e.slice(0, n), s = e.slice(n);
                    e.length = 0, e.push.apply(e, s), t(a)
                }
            }

            function filterSiloLength(e, t) {
                if (e.length > MAX_NUM_EVENTS) {
                    var n = e.slice();
                    e.length = 0, t(n)
                }
            }

            function shortenFields(e) {
                return e = _.defaults(e || {}, {
                    fields: ["url"],
                    fieldMaxLength: URL_MAX_LENGTH,
                    siloMaxLength: ENCODED_EVENT_MAX_POST_LENGTH
                }), function (t, n) {
                    if (1 === t.length && t.JZB.length > e.siloMaxLength) {
                        var i = t[0];
                        debug("Max length exceeded for an event"), _.each(e.fields, function (n) {
                            var r = i[n];
                            r && r.length > e.fieldMaxLength && (debug("shortening " + n + " and retrying"), i[n] = limitURLSize(e.fieldMaxLength, r), delete t.JZB)
                        })
                    }
                    n(t)
                }
            }

            function compressSilo(e, t) {
                if (0 !== e.length) {
                    if (e.JZB) return t(e);
                    if (e.JZB = pendo$1.squeezeAndCompress(e.slice()), e.JZB.length <= ENCODED_EVENT_MAX_LENGTH) return t(e);
                    if (1 === e.length) return t(e);
                    var n = e.length / 2;
                    compressSilo(e.slice(0, n), t), compressSilo(e.slice(n), t)
                }
            }

            function filterAnalyticsDisabled(e, t) {
                isUnlocked() && (isInPreviewMode() || t(e))
            }

            function errorLogger(e) {
                return function (t, n) {
                    1 === t.length && t.JZB.length > ENCODED_EVENT_MAX_LENGTH ? (debug("Couldn't write event"), writeMessage("Single item is: " + t.JZB.length + ". Dropping."), writeErrorPOST(t.JZB)) : store.commit("monitoring/incrementCounter", e.beacon + "GifFailures")
                }
            }

            function getApiKeysFromOptions(e) {
                return _.isFunction(e.apiKey) ? [].concat(e.apiKey()) : [].concat(e.apiKey)
            }

            function buildGetRequestUrls(e) {
                return _.map(e.apiKeys, function (t) {
                    return buildBaseDataUrl(e.beacon + ".gif", t, _.extend({
                        v: VERSION,
                        ct: getNow(),
                        jzb: e.JZB
                    }, e.params, e.auth))
                })
            }

            function buildPostRequestUrls(e) {
                return _.map(e.apiKeys, function (t) {
                    return buildBaseDataUrl(e.beacon + ".gif", t, _.extend({
                        v: VERSION,
                        ct: getNow(),
                        s: e.JZB.length
                    }, e.params))
                })
            }

            function addSiloParams(e) {
                return function (t, n) {
                    t.apiKeys = getApiKeysFromOptions(e), t.params = _.extend({}, t.params, e.params), t.beacon = e.beacon, t.eventLength = t.JZB.length;
                    var i = getJwtInfoCopy();
                    _.isEmpty(i) || (t.auth = i, t.eventLength += i.jwt.length, t.eventLength += i.signingKeyName.length), n(t)
                }
            }

            function addAccountIdParamIfAdoptPartner(e, t) {
                var n = ConfigReader.get("trainingPartner"), i = _.first(e), r = get(i, "account_id");
                n && r && (e.params = _.extend({}, e.params, {acc: base64EncodeString(r)})), t(e)
            }

            function addSourceParamIfPresent(e, t) {
                var n = _.first(e), i = get(n, "props.source");
                i && (e.params = _.extend({}, e.params, {source: i})), t(e)
            }

            function createPostBody(e) {
                return _.extend({events: e.JZB}, e.auth)
            }

            function sendWithImg(e, t) {
                return e.failed ? t(e) : e.eventLength > ENCODED_EVENT_MAX_LENGTH ? t(e) : void (e.auth ? t(e) : _.each(buildGetRequestUrls(e), function (n) {
                    writeImgTag(n)["catch"](markSiloFailed(e, t))
                }))
            }

            function sendWithFetch(e, t) {
                return e.failed ? t(e) : e.eventLength > ENCODED_EVENT_MAX_LENGTH ? t(e) : void (!e.auth && fetchKeepalive.supported() ? _.each(buildGetRequestUrls(e), function (n) {
                    fetchKeepalive(n)["catch"](markSiloFailed(e, t))
                }) : t(e))
            }

            function postWithFetch(e, t) {
                return e.failed ? t(e) : e.eventLength > ENCODED_EVENT_MAX_POST_LENGTH ? t(e) : void (fetchKeepalive.supported() ? _.each(buildPostRequestUrls(e), function (n) {
                    fetch(n, {
                        method: "POST",
                        keepalive: !0,
                        body: JSON.stringify(createPostBody(e)),
                        headers: {"Content-Type": "application/json"}
                    })["catch"](markSiloFailed(e, t))
                }) : t(e))
            }

            function postWithSendBeacon(e, t) {
                return e.failed ? t(e) : e.eventLength > ENCODED_EVENT_MAX_POST_LENGTH ? t(e) : void (sendBeacon.supported() ? _.each(buildPostRequestUrls(e), function (n) {
                    var i = createPostBody(e);
                    sendBeacon(n, i) || markSiloFailed(e, t)()
                }) : t(e))
            }

            function sendWithXhr(e, t) {
                return e.failed ? t(e) : e.eventLength > ENCODED_EVENT_MAX_LENGTH ? t(e) : void _.each(buildGetRequestUrls(e), function (n) {
                    ajax({method: "GET", url: n})["catch"](markSiloFailed(e, t))
                })
            }

            function postWithXhr(e, t) {
                return e.failed ? t(e) : e.eventLength > ENCODED_EVENT_MAX_POST_LENGTH ? t(e) : void _.each(buildPostRequestUrls(e), function (n) {
                    var i = {"Content-Type": "application/json"};
                    ajax({
                        method: "POST",
                        url: n,
                        data: JSON.stringify(createPostBody(e)),
                        headers: i
                    })["catch"](markSiloFailed(e, t))
                })
            }

            function markSiloFailed(e, t) {
                return function () {
                    e.failed = !0, t(e)
                }
            }

            function sendWithSyncXhr(e, t) {
                return e.failed ? t(e) : e.eventLength > ENCODED_EVENT_MAX_LENGTH ? t(e) : void (sniffer.msie <= 11 ? _.each(buildGetRequestUrls(e), function (n) {
                    ajax({method: "GET", url: n, sync: !0})["catch"](markSiloFailed(e, t))
                }) : t(e))
            }

            function postWithSyncXhr(e, t) {
                return e.failed ? t(e) : e.eventLength > ENCODED_EVENT_MAX_POST_LENGTH ? t(e) : void (sniffer.msie <= 11 ? _.each(buildPostRequestUrls(e), function (n) {
                    var i = {"Content-Type": "application/json"};
                    ajax({
                        method: "POST",
                        url: n,
                        data: JSON.stringify(createPostBody(e)),
                        sync: !0,
                        headers: i
                    })["catch"](markSiloFailed(e, t))
                }) : t(e))
            }

            function defaultSendEvent(e) {
                return function (t, n) {
                    var i = t.JZB;
                    if (!i) return n(t);
                    if (t.failed) return n(t);
                    var r = [addSiloParams(e), addAccountIdParamIfAdoptPartner, addSourceParamIfPresent];
                    e.preferFetch && r.push(sendWithFetch), r.push(sendWithImg, sendWithXhr), e.allowPost && (e.preferFetch && r.push(postWithFetch), r.push(postWithSendBeacon, postWithXhr)), pipeline.apply(null, r)(t, function (e) {
                        n(e)
                    })
                }
            }

            function reliableSendEventForUnload(e) {
                return function (t, n) {
                    var i = t.JZB;
                    if (!i) return n(t);
                    if (t.failed) return n(t);
                    var r = [addSiloParams(e), addAccountIdParamIfAdoptPartner, addSourceParamIfPresent, sendWithFetch, sendWithSyncXhr];
                    e.allowPost && r.push(postWithFetch, postWithSendBeacon, postWithSyncXhr), pipeline.apply(null, r)(t, function (e) {
                        n(e)
                    })
                }
            }

            function createSendQueue(e, t) {
                return pipeline(filterAnalyticsDisabled, filterAccountIdsForSendQueue, compressSilo, shortenFields(e.shorten), compressSilo, t(e), errorLogger(e))
            }

            function filterNonGuideAnalytics(e) {
                return function (t, n) {
                    var i = ConfigReader.get("excludeNonGuideAnalytics");
                    "ptm" === e && i || n(t)
                }
            }

            function createEventQueue(e) {
                var t = e.cache, n = e.silos, i = createSendQueue(e, defaultSendEvent),
                    r = createSendQueue(e, reliableSendEventForUnload),
                    o = pipeline(filterNonGuideAnalytics(e.beacon), siloReducer(t), filterSiloCapacity, function (e) {
                        n.push(e)
                    });
                return {
                    push: function (e) {
                        o(e, _.noop)
                    }, clear: function () {
                        t.length = 0, n.length = 0
                    }, flush: function (e) {
                        if (0 !== t.length || 0 !== n.length) {
                            n.push(t.slice()), t.length = 0;
                            var o = n.slice();
                            n.length = 0;
                            var a = (e || {}).guaranteed ? r : i;
                            _.each(o, function (e) {
                                a(e, _.noop)
                            })
                        }
                    }
                }
            }

            function onTurbolinksPageLoad(e, t) {
                if ("undefined" != typeof Turbolinks) {
                    var n = Turbolinks && Turbolinks.EVENTS && Turbolinks.EVENTS.LOAD;
                    if (n) return attachEventInternal(e, n, t), function () {
                        detachEventInternal(e, n, t)
                    }
                }
                return function () {
                }
            }

            function getAttributeValue(e, t) {
                return e.getAttribute ? e.getAttribute(t) : e[t]
            }

            function getHtmlAttributeTester(e) {
                if (_.isRegExp(e) && _.isFunction(e.test)) return function (t) {
                    return e.test(t)
                };
                if (_.isArray(e)) {
                    var t = _.map(_.filter(e, _.isObject), function (e) {
                        if (e.regexp) {
                            var t = /\/([a-z]*)$/.exec(e.value), n = t && t[1] || "";
                            return new RegExp(e.value.replace(/^\//, "").replace(/\/[a-z]*$/, ""), n)
                        }
                        return new RegExp("^" + e.value + "$", "i")
                    });
                    return function (e) {
                        return _.any(t, function (t) {
                            return t.test(e)
                        })
                    }
                }
                if (_.isObject(e) && e.regexp) {
                    var n = /\/([a-z]*)$/.exec(e.value), i = n && n[1] || "",
                        r = new RegExp(e.value.replace(/^\//, "").replace(/\/[a-z]*$/, ""), i);
                    return function (e) {
                        return r.test(e)
                    }
                }
                return _.constant(!1)
            }

            function filterAttributeList(e, t, n, i) {
                var r = _.indexBy(t), o = _.filter(_.filter(e, function (e) {
                    return n(e.nodeName) || r[e.nodeName]
                }), function (e) {
                    return !i(e.nodeName)
                });
                if (o.length <= MAX_ATTRIBUTES) return _.pluck(o, "nodeName");
                var a = _.groupBy(e, function (e) {
                    return r[e.nodeName] ? "defaults" : _.isString(e.value) && e.value.length > MAX_ATTRIBUTE_LENGTH ? "large" : "small";
                });
                return _.pluck([].concat(_.sortBy(a.defaults, "nodeName")).concat(_.sortBy(a.small, "nodeName")).concat(_.sortBy(a.large, "nodeName")).slice(0, MAX_ATTRIBUTES), "nodeName")
            }

            function collectEventPropertiesForTarget(e) {
                if (pendo$1.eventProperties && pendo$1.eventProperties.length && e) {
                    for (var t, n = getNow(), i = 50, r = {}, o = 0; o < pendo$1.eventProperties.length && getNow() - n < i; o++) {
                        t = pendo$1.eventProperties[o];
                        var a = _.any(t.featureRules, function (t) {
                            try {
                                return ShadowSizzle.matchesSelector(e, t)
                            } catch (n) {
                                return !1
                            }
                        });
                        if (a) for (var s = 0; s < t.eventPropertyRules.length && getNow() - n < i; s++) {
                            var d = t.eventPropertyRules[s];
                            if (!d.name) return;
                            r[d.name] = collectEventProperty(d, e)
                        }
                    }
                    var u = getNow() - n;
                    if (u > i) {
                        log("event property collection disabled; collection took greater than " + i + " milliseconds.");
                        var c = "ERROR event property collection exceeded time limit.";
                        t && (c += "\n For feature with id: " + t.featureId), writeException({}, c), pendo$1.eventProperties = []
                    }
                    return r
                }
            }

            function collectEventProperty(e, t) {
                if (e.path) {
                    var n = getEventPropertyTarget(e, t);
                    return get(n, e.path, undefined)
                }
            }

            function getEventPropertyTarget(e, t) {
                var n = e.source || e.selector;
                return n ? nearestTargeter(n, t) : window
            }

            function nearestTargeter(e, t) {
                for (var n, i = t; !n && i;) {
                    try {
                        if (n = ShadowSizzle(e, i)[0], n && ("password" === n.type || "hidden" === n.type)) return
                    } catch (r) {
                        return
                    }
                    i = shadowAPI.getParent(i)
                }
                return n
            }

            function wireSyntheticClicks(e, t, n) {
                var i, r, o = [], a = {
                    cloneEvent: function (e) {
                        var t = dom.event.clone(e);
                        return t.type = "click", t.from = "mousedown", t.bubbles = !0, t
                    }, mousedown: function (e) {
                        r = !1, e && (i = a.cloneEvent(e), n && a.intercept(e))
                    }, mouseup: function (t) {
                        r = !1, t && i && getTarget(i) !== getTarget(t) && (r = !0, e(i))
                    }, click: function (e) {
                        i = null, r && dom.data.set(e, "ignore", !0), r = !1, a.unwrap()
                    }, intercept: function (e) {
                        var t = getParentTree(getTarget(e));
                        _.each(t, function (e) {
                            var t = interceptRemove(e, a.remove);
                            o.push(t)
                        })
                    }, remove: function () {
                        i && (e(i), i = null), a.unwrap()
                    }, unwrap: function () {
                        o.length > 0 && (_.each(o, function (e) {
                            e()
                        }), o = [])
                    }
                };
                return t && (attachEventInternal(document, "mousedown", a.mousedown, !0), attachEventInternal(document, "mouseup", a.mouseup, !0), attachEventInternal(document, "click", a.click, !0)), a
            }

            function getParentTree(e) {
                for (var t = []; e && !isNodeTheRoot(e);) t.push(e), e = e.parentNode;
                return t
            }

            function interceptRemove(e, t) {
                var n = ["remove", "removeChild"];
                try {
                    if (!e) return _.noop;
                    _.each(n, function (n) {
                        var i = e[n];
                        return i ? (e[n] = _.wrap(i, function (e) {
                            return t && t(), e.apply(this, _.toArray(arguments).slice(1))
                        }), void (e[n]._pendoUnwrap = function () {
                            return e ? (e[n] = i, void delete e[n]._pendoUnwrap) : _.noop
                        })) : _.noop
                    })
                } catch (i) {
                    writeException(i, "ERROR in interceptRemove")
                }
                return function () {
                    _.each(n, function (t) {
                        if (!e[t]) return _.noop;
                        var n = e[t]._pendoUnwrap;
                        _.isFunction(n) && n()
                    })
                }
            }

            function interceptStopPropagation(e, t) {
                var n = ["stopPropagation", "stopImmediatePropagation"];
                try {
                    if (!e || !e.prototype) return _.noop;
                    var i = _.indexBy(t);
                    _.each(n, function (t) {
                        var n = e.prototype[t];
                        n && (e.prototype[t] = _.wrap(n, function (e) {
                            var t = e.apply(this, arguments);
                            return i[this.type] && (dom.data.set(this, "stopped", !0), dom.event.trigger(this)), t
                        }), e.prototype[t]._pendoUnwrap = function () {
                            e.prototype[t] = n, delete e.prototype[t]._pendoUnwrap
                        })
                    })
                } catch (r) {
                    writeException(r, "ERROR in interceptStopPropagation")
                }
                return function () {
                    _.each(n, function (t) {
                        var n = e.prototype[t]._pendoUnwrap;
                        _.isFunction(n) && n()
                    })
                }
            }

            function interceptPreventDefault(e, t) {
                try {
                    if (!e || !e.prototype) return _.noop;
                    var n = _.indexBy(t), i = e.prototype.preventDefault;
                    if (!i) return _.noop;
                    e.prototype.preventDefault = _.wrap(i, function (e) {
                        var t = e.apply(this, arguments);
                        if (n[this.type]) {
                            var i = dom.event.clone(this);
                            i.type = "click", i.from = this.type, i.bubbles = !0, i.eventPhase = CAPTURING_PHASE, dom.event.trigger(i)
                        }
                        return t
                    }), e.prototype.preventDefault._pendoUnwrap = function () {
                        e.prototype.preventDefault = i, delete e.prototype.preventDefault._pendoUnwrap
                    }
                } catch (r) {
                    writeException(r, "ERROR in interceptPreventDefault")
                }
                return function () {
                    var t = e.prototype.preventDefault._pendoUnwrap;
                    _.isFunction(t) && t()
                }
            }

            function attachEvent(e, t, n, i) {
                e && t && n && (e !== window || "error" !== t) && (i && !sniffer.addEventListener && (i = !1), dom.event.add(e, {
                    type: t,
                    handler: n,
                    capture: i
                }))
            }

            function detachEvent(e, t, n, i) {
                e && t && n && (i && !sniffer.addEventListener && (i = !1), dom.event.remove(e, t, n, i))
            }

            function horizontal(e, t, n) {
                if (n === RIGHT || n === LEFT) return n;
                var i = e.left, r = t.width, o = r / 3, a = o, s = 2 * o;
                return i > a && s > i ? CENTER : r / 2 > i ? RIGHT : LEFT
            }

            function vertical(e, t, n) {
                if (n === TOP || n === BOTTOM) return n;
                var i = e.top, r = t.height, o = r / 3, a = o, s = 2 * o;
                return i > a && s > i ? CENTER : r / 2 > i ? BOTTOM : TOP
            }

            function scrollToTooltip(e, t, n) {
                var i = getOffsetPosition(e), r = getOffsetPosition(t), o = function (e, t) {
                    var n = Math.min(e.top, t.top), i = Math.min(e.left, t.left),
                        r = Math.max(e.top + e.height, t.top + t.height),
                        o = Math.max(e.left + e.width, t.left + t.width);
                    return {height: Math.abs(r - n), width: Math.abs(o - i), top: n, left: i}
                }(i, r);
                if (_isInViewport(o) === !1 && !r.fixed) {
                    var a = getScreenDimensions(), s = getOverflowDirection(getBody(), /hidden/),
                        d = calculateScrollAmount(o, a, n, s);
                    window.scrollTo(d.x, d.y)
                }
            }

            function calculateScrollAmount(e, t, n, i) {
                var r = {x: e.left + e.width - t.width, y: 0};
                return "top" === n ? r.y = e.top : r.y = e.top + e.height - t.height, r.y = Math.max(r.y, 0), r.x = Math.max(r.x, 0), _.contains([OverflowDirection.X, OverflowDirection.BOTH], i) && (r.x = 0), _.contains([OverflowDirection.Y, OverflowDirection.BOTH], i) && (r.y = 0), r
            }

            function clearLastBlock() {
                lastBlockBox = null, lastBodySize = null, lastScreenCoords = null
            }

            function computeBlockOutOverlayPositions(e, t, n) {
                var i = {}, r = t.top - e.top, o = t.left - e.left;
                i.top = r - n, i.left = o - n, i.height = t.height + 2 * n, i.width = t.width + 2 * n;
                var a = {left: 0, top: 0};
                return positionFixedActsLikePositionAbsolute() && (a = bodyOffset(), i.left += documentScrollLeft(), i.top += documentScrollTop()), i.bottom = i.top + i.height, i.right = i.left + i.width, {
                    north: {
                        height: Math.max(i.top, 0),
                        left: -a.left,
                        top: -a.top,
                        right: 0
                    },
                    east: {top: i.top - a.top, bottom: 0, right: 0, left: i.right - a.left},
                    south: {top: i.bottom - a.top, width: Math.max(i.right, 0), bottom: 0, left: -a.left},
                    west: {top: i.top - a.top, height: Math.max(i.height, 0), left: -a.left, width: Math.max(i.left, 0)}
                }
            }

            function computeBlockOutBoundingBox(e) {
                var t = _.reduce(e, function (e, t) {
                    if (!isElementVisible(t)) return e;
                    var n = getClientRect(t);
                    return e.fixed = e.fixed && n.fixed, _.each([["top", isLessThan], ["right", isGreaterThan], ["bottom", isGreaterThan], ["left", isLessThan]], function (t) {
                        var i = t[0], r = t[1];
                        (!e[i] || r(n[i], e[i])) && (e[i] = n[i])
                    }), e
                }, {fixed: !0});
                t.height = t.bottom - t.top, t.width = t.right - t.left;
                var n = bodyOffset();
                return t.fixed || (t.left += n.left, t.right += n.left, t.top += n.top, t.bottom += n.top), t.fixed = !!t.fixed, t
            }

            function wouldBeVisibleAfterAutoScroll(e) {
                var t, n, i, r, o, a = /(auto|scroll)/, s = /(auto|scroll|hidden)/, d = getClientRect(e),
                    u = getScrollParent(e, s);
                if (!isElementVisibleInBody(e)) return !1;
                for (; u;) {
                    if (t = getClientRect(u), o = getOverflowDirection(u, a), o !== OverflowDirection.NONE && (n = 0, i = 0, (o === OverflowDirection.Y || o === OverflowDirection.BOTH) && (d.bottom > t.bottom && (n += d.bottom - t.bottom, d.top -= n, d.bottom -= n), d.top < t.top && (r = t.top - d.top, n -= r, d.top += r, d.bottom += r)), (o === OverflowDirection.X || o === OverflowDirection.BOTH) && (d.right > t.right && (i += d.right - t.right, d.left -= i, d.right -= i), d.left < t.left && (r = t.left - d.left, i -= r, d.left += r, d.right += r))), !isVisibleInScrollParent(d, u, s)) return !1;
                    u = getScrollParent(u, s)
                }
                return !0
            }

            function Wrappable() {
                var e = {}, t = function (e, t, n) {
                    return function () {
                        var i, r, o = _.toArray(arguments);
                        for (i = 0, r = t.length; r > i; ++i) if (t[i].apply(this, o) === !1) return;
                        var a = e.apply(this, o);
                        for (i = 0, r = n.length; r > i && n[i].apply(this, o) !== !1; ++i) ;
                        return a
                    }
                };
                return _.each(["after", "before"], function (n) {
                    this[n] = function (i, r) {
                        if (this[i]) {
                            var o = e[i];
                            o || (o = e[i] = {
                                before: [],
                                after: []
                            }, this[i] = t(this[i], o.before, o.after)), o[n].push(r)
                        }
                    }
                }, this), this
            }

            function writeLastStepSeenCache(e) {
                store.dispatch("guideState/updateLastGuideStepSeen", e), store.dispatch("guideState/write"), store.dispatch("frames/changeLastGuideStepSeen", e)
            }

            function listenForGuideStateChange() {
                store.dispatch("guideState/init"), attachEventInternal(window, "focus", regainFocus), sniffer.addEventListener && window.addEventListener("storage", function (e) {
                    store.dispatch("guideState/storageChanged", e)
                })
            }

            function regainFocus() {
                store.dispatch("guideState/regainFocus")
            }

            function getLastGuideStepSeen() {
                return store.state.guideState.lastGuideStepSeen
            }

            function prefetchBadgeActivatedGuideContent(e, t) {
                if (!ConfigReader.get("disablePrefetch")) {
                    var n = _.keys(t);
                    if (n.length) {
                        var i = _.indexBy(e, "id");
                        _.each(n, function (e) {
                            var t = i[e];
                            if (t) {
                                var n = _.first(t.steps);
                                n && _.isFunction(n.fetchContent) && n.fetchContent()
                            }
                        })
                    }
                }
            }

            function setDefaultCursorStyle(e) {
                if (e) {
                    var t = e.props = e.props || {}, n = t.style = t.style || {};
                    n.cursor = n.cursor || "pointer"
                }
                return e
            }

            function Badge(e, t) {
                var n, i = getElementForTargeting(t);
                if ("building-block" === e.attributes.type) {
                    var r = BuildingBlockGuides.buildNodeFromJSON(replaceObjectWithContentHost(setDefaultCursorStyle(this.domJson)))[0];
                    n = r.parentNode.removeChild(r), -1 === n.className.indexOf("_pendo-badge_") && (n.className += " _pendo-badge_"), this.isP2Badge = !0
                } else {
                    n = document.createElement("img"), n.src = replaceWithContentHost(this.imageUrl), n.className = "_pendo-badge " + BADGE_CSS_NAME;
                    var o = this.width || 13, a = this.height || 13, s = "width:" + o + "px;height:" + a + "px;";
                    setStyle(n, s)
                }
                return n.id = "_pendo-badge_" + t.id, this.activate = function () {
                    var e = _.isFunction(t.getGuide) && t.getGuide(), n = isGuideRCType(e);
                    if (!e.isShown() || store.getters["frames/isShownInAnotherFrame"]()(t)) showGuide(t, "badge"); else if (n) t.eventRouter.eventable.trigger("pendoEvent", {
                        step: t,
                        action: "dismissGuide"
                    }); else {
                        var i = _.find(e.steps, function (e) {
                            return e.isShown()
                        });
                        onGuideDismissed(i)
                    }
                }, this.show = function () {
                }, this.hide = function () {
                    n && n.parentNode && n.parentNode.removeChild(n)
                }, isGuideRCType(e) && (this.toggleAriaExpanded = function () {
                    var e = !!ShadowSizzle("#pendo-resource-center-container")[0],
                        t = dom("button._pendo-resource-center-badge-container"),
                        n = t[0] || dom('._pendo-resource-center-badge-container [id^="pendo-image-badge-"]')[0];
                    n && n.setAttribute("aria-expanded", e)
                }, n.checkAriaExpanded = this.toggleAriaExpanded), this.step = _.constant(t), this.target = _.constant(i), this.element = _.constant(n), this
            }

            function InlinePosition() {
                return ("inline" === this.position || "inline-right" === this.position || "inline-left" === this.position) && this.before("show", function () {
                    var e = this.target(), t = this.element();
                    if (this.isP2Badge && setStyle(t, "display:inline-block;vertical-align:text-bottom;"), this.css && setStyle(t, this.css), e && e.tagName) {
                        var n = e.tagName.toLowerCase();
                        if (/br|input|img|select|textarea/.test(n)) {
                            if (t.parentNode === e.parentNode) return;
                            e.parentNode.insertBefore(t, e.nextSibling)
                        } else t.parentNode !== e && ("inline" === this.position || "inline-right" === this.position ? e.appendChild(t) : "inline-left" === this.position && e.prepend(t))
                    }
                }), this
            }

            function AbsolutePosition() {
                return this.position && "top-right" !== this.position && "top-left" !== this.position || this.before("show", function () {
                    var e = this.element(), t = getOffsetPosition(this.target()), n = 0, i = 0, r = 0;
                    this.offsets && (n = this.offsets.top || 0, i = this.offsets.right || 0, r = this.offsets.left || 0);
                    var o = "position:" + (t.fixed ? "fixed" : "absolute") + ";top:" + (t.top + n) + "px;";
                    switch (this.position) {
                        case"top-right":
                            o += "left:" + (t.left + t.width - i) + "px";
                            break;
                        case"top-left":
                            o += "left:" + (t.left + r) + "px"
                    }
                    setStyle(e, o), e.parentNode || getGuideAttachPoint().appendChild(e)
                }), this
            }

            function ClickActivation() {
                var e = this, t = e.element(), n = !1, i = function (t) {
                    e.activate(), e.toggleAriaExpanded && e.toggleAriaExpanded(), stopEvent(t)
                };
                return e.after("show", function () {
                    n || (attachEvent(t, "click", i), n = !0)
                }), e.after("hide", function () {
                    detachEvent(t, "click", i), n = !1
                }), e
            }

            function HoverActivation() {
                var e = this, t = e.element(), n = e.step(), i = !1;
                if ("yes" === e.useHover || e.showGuideOnBadgeHover) {
                    var r = function (e) {
                        for (; e;) {
                            if (/_pendo-guide_|_pendo-guide-tt_|_pendo-backdrop_|_pendo-badge_/.test(e.className)) return !0;
                            if (/pendo-guide-container/.test(e.id)) return !0;
                            e = e.parentNode
                        }
                        return !1
                    }, o = _.throttle(function (e) {
                        getTarget(e) === t || r(getTarget(e)) || s()
                    }, 50, {trailing: !1}), a = function (e) {
                        n.isShown() || showGuide(n, "badge"), attachEvent(document, "mousemove", o), stopEvent(e)
                    }, s = function (e) {
                        detachEvent(document, "mousemove", o), isPreviewing() || onGuideDismissed(n)
                    };
                    e.after("show", function () {
                        i || (attachEvent(t, "mouseover", a), i = !0)
                    }), e.after("hide", function () {
                        detachEvent(t, "mouseover", a), detachEvent(document, "mousemove", o), i = !1
                    })
                }
                return e
            }

            function ShowOnHover() {
                var e = this, t = e.element(), n = e.target(), i = !1,
                    r = e.showBadgeOnlyOnElementHover || /hover/.test(e.showOnEvent);
                if (r && !isPreviewing()) {
                    var o = "inline" === e.position ? "visibility:visible;" : "display:inline;",
                        a = "inline" === e.position ? "visibility:hidden;" : "display:none;", s = function (e, i) {
                            var r = getClientRect(n), o = getClientRect(t), a = {
                                left: Math.min(r.left, o.left),
                                top: Math.min(r.top, o.top),
                                right: Math.max(r.right, o.right),
                                bottom: Math.max(r.bottom, o.bottom)
                            }, s = i + document.documentElement.scrollTop;
                            return e >= a.left && e <= a.right && s >= a.top && s <= a.bottom
                        }, d = _.throttle(function (e) {
                            getTarget(e) === n || getTarget(e) === t || _hasClass(t, "triggered") || s(e.clientX, e.clientY) || c()
                        }, 50, {trailing: !1}), u = function () {
                            setStyle(t, o), attachEvent(document, "mousemove", d)
                        }, c = function () {
                            detachEvent(document, "mousemove", d), setStyle(t, a)
                        };
                    e.after("show", function () {
                        i || (attachEvent(n, "mouseover", u), i = !0, c())
                    }), e.after("hide", function () {
                        i && (detachEvent(n, "mouseover", u), i = !1), c()
                    })
                }
                return e
            }

            function PermalinkConstructor(e, t) {
                function n() {
                    var t = pendoDotUrl.get(), n = parseQueryString(t).substring(1), i = queryStringToObject(n),
                        r = t.indexOf("#");
                    if (!i.pendo && r >= 0) {
                        var o = parseQueryString(t.substring(r + 1)).substring(1);
                        _.extend(i, queryStringToObject(o))
                    }
                    var a = i.pendo || i.c__pendo;
                    return a ? e(a) : null
                }

                function i(e) {
                    t(e.id, "permalink"), e.shownFromPermalink = !0
                }

                function r(e) {
                    return !e.shownFromPermalink
                }

                function o() {
                    var e = this.getGuideFromUrl();
                    return e && this.shouldShowPermalinkGuide(e) ? (this.showPermalinkGuide(e), !0) : !1
                }

                return {tryDisplay: o, getGuideFromUrl: n, showPermalinkGuide: i, shouldShowPermalinkGuide: r}
            }

            function clearMode() {
                setMode(store.getters["frames/isFollower"]() ? PASSIVE_MODE : currentMode === PAUSED_MODE ? PAUSED_MODE : "default")
            }

            function continueOrCompleteUpdate() {
                store.getters["guideUpdate/isUpdating"]() ? waitThenLoop(50) : (!store.state.guideUpdate.useObserver || store.state.guideUpdate.needsUpdate) && waitThenLoop()
            }

            function runGuidePhase(e, t) {
                var n = function () {
                    store.commit("guideUpdate/completePhase", {phase: e, time: getNow()})
                };
                if (!store.getters["guideUpdate/isPhaseComplete"]()(e) && (store.dispatch("guideUpdate/startPhase", e), !store.getters["guideUpdate/exceededIterationTime"]())) return t(n)
            }

            function guideShowingProc() {
                var e = getActiveGuide();
                e && (_.each(e.steps, function (t) {
                    stepShowingProc(e.guide, t)
                }), e.guide.checkForHiddenGroupSteps())
            }

            function stepShowingProc(e, t) {
                if (!t.isLocked() && !store.getters["frames/isShownInAnotherFrame"]()(t)) {
                    var n = t.element, i = t.targetElement, r = t.guideElement, o = dom("." + GUIDE_CSS_NAME),
                        a = r.find("#pendo-guide-container")[0], s = a && a.textContent;
                    if (s) {
                        var d = getComputedStyle_safe(a).fontSize, u = t.attributes.currentTextZoomFontSize !== d;
                        u && (t.attributes.currentTextZoomFontSize && t.redraw(), t.attributes.currentTextZoomFontSize = d)
                    }
                    if (t.elementPathRule && i && !ShadowSizzle.matchesSelector(i, t.elementPathRule)) return void t.hide();
                    var c = isElementVisible(n), l = !0;
                    if (i && c && t.elementContainsRulesList && (l = doesElementMatchContainsRules(i, t.elementContainsRulesList), c = l), n && (c || o.hasClass("mouseover"))) return "tooltip" == t.type && placeTooltip(t), void (t.domJson && ("tooltip" === t.attributes.calculatedType && BuildingBlockTooltips.placeBBTooltip(t), t.attributes.blockOutUI && t.attributes.blockOutUI.enabled && BuildingBlockGuides.updateBackdrop(t)));
                    var f = "tooltip" === t.type || "tooltip" === t.attributes.calculatedType;
                    f && wouldBeVisibleAfterAutoScroll(n) && l || t.hide()
                }
            }

            function resourceCenterShowingProc(e, t) {
                if (!BuildingBlockResourceCenter.isFullyCustom(e)) {
                    var n = !1, i = [], r = _.filter(e.modules, function (t) {
                        if (!t) return !1;
                        if (BuildingBlockResourceCenter.isIframeModule(t)) return !0;
                        if (BuildingBlockResourceCenter.isSandboxModule(t)) return !0;
                        if (BuildingBlockResourceCenter.isIntegrationModule(t)) return BuildingBlockResourceCenter.integrationModuleHasContent(t) ? !0 : (t.hasResourceCenterContent = !1, !1);
                        var r = _.filter(t.guidesInModule, function (e) {
                            return e.shouldBeAddedToResourceCenter() ? (e.ineligibleForRC = !1, !0) : (e.ineligibleForRC = !0, e.control && i.push(e), !1)
                        }), o = r.length;
                        if (t.hasResourceCenterContent = !!o, e.activeModule && t.id === e.activeModule.id) {
                            var a = crc32(_.map(r, function (e) {
                                var t = e.isAnnouncement() || e.isWhatsNew(),
                                    n = t ? null : _.pluck(e.steps, "seenState");
                                return {id: e.id, seenState: n}
                            }));
                            t.eligibleGuidesInModuleHash && a !== t.eligibleGuidesInModuleHash && (n = !0), t.eligibleGuidesInModuleHash = a
                        }
                        return o
                    }), o = !1;
                    if (!e.activeModule) {
                        var a = crc32(_.map(r, function (e) {
                            return {id: e.id}
                        }));
                        e.eligibleModulesHash && e.eligibleModulesHash !== a && (o = !0, BuildingBlockResourceCenter.replaceResourceCenterContent(e.id, undefined, !0)), e.eligibleModulesHash = a
                    }
                    if (t(e, r, i), 1 === r.length) {
                        e.skipResourceCenterHomeView = !0, e.moduleIdToReplaceHomeViewWith = r[0].id;
                        var s = !e.activeModule && o, d = e.activeModule && e.activeModule.id !== r[0].id;
                        (s || d || n) && BuildingBlockResourceCenter.replaceResourceCenterContent(e.moduleIdToReplaceHomeViewWith, undefined, !0)
                    }
                    if (r) {
                        var u = _.find(r, function (e) {
                                return e.isContinuation(getLastGuideStepSeen())
                            }), c = get(u, "attributes.doNotResume"),
                            l = get(u, "attributes.resourceCenter.integrationProvider"),
                            f = BuildingBlockResourceCenter.isSupportedNativeIntegration(l);
                        f && !c && e && (e.continueToNativeModule = !0, u.continueToNativeModule = !0)
                    }
                    var p;
                    e.activeModule && (p = _.find(r, function (t) {
                        return t.id === e.activeModule.id
                    }), p && n && BuildingBlockResourceCenter.replaceResourceCenterContent(e.activeModule.id, undefined, !0), p || BuildingBlockResourceCenter.replaceResourceCenterContent(e.id)), BuildingBlockResourceCenter.repositionResourceCenter()
                }
            }

            function resourceCenterNotShowingProc(e, t) {
                if (!BuildingBlockResourceCenter.isFullyCustom(e)) {
                    var n = [], i = [], r = _.find(e.modules, function (e) {
                        return BuildingBlockResourceCenter.isIframeModule(e) ? !0 : BuildingBlockResourceCenter.isSandboxModule(e) ? !0 : BuildingBlockResourceCenter.isIntegrationModule(e) ? BuildingBlockResourceCenter.integrationModuleHasContent(e) ? !0 : (e.hasResourceCenterContent = !1, !1) : !1
                    });
                    r && n.push(r);
                    var o = _.flatten(_.pluck(e.modules, "guidesInModule"));
                    if (i = _.filter(_.compact(o), function (e) {
                        return e.control
                    }), !n.length) {
                        var a = _.reduce(e.modules, function (e, t) {
                            return _.each(t.guidesInModule, function (n) {
                                e[n.id] = t
                            }), e
                        }, {}), s = _.filter(o, function (e) {
                            return e && e.steps && e.steps.length
                        }), d = _.sortBy(s, function (e) {
                            return e.steps[0].elementPathRule ? 1 : 0
                        }), u = _.find(d, function (e) {
                            return e.shouldBeAddedToResourceCenter()
                        }), c = a[u && u.id];
                        c && n.push(c)
                    }
                    t(e, n, i)
                }
            }

            function resourceCenterBadgeProc(e, t, n) {
                var i = badgesShown[e.id];
                if (!t || !t.length) {
                    var r = -1 !== e.launchMethod.indexOf("badge"), o = -1 !== e.launchMethod.indexOf("dom"),
                        a = -1 !== e.launchMethod.indexOf("extensionIcon");
                    e.hasResourceCenterContent = !1, r ? (e.isShown() && e.hide(), i && i.hide(), _.each(n, function (e) {
                        e.hasGuideBeenControlled() || e.steps[0].onControlGuide("control")
                    }), e.badgeHidden = !0, delete e.activeModule) : (o || a) && (e.showEmptyState = !0, e.controlGuidesInAllModules = n)
                }
                e.badgeHidden && e.hasResourceCenterContent && !e.isNativeModuleActive && (i || (_.isFunction(e.placeBadge) && e.placeBadge(), i = badgesShown[e.id]), i && i.show(), e.badgeHidden = !1)
            }

            function resourceCenterProc(e) {
                if (e) {
                    e.skipResourceCenterHomeView = !1, e.hasResourceCenterContent = !0, delete e.moduleIdToReplaceHomeViewWith;
                    var t = e.activeModule, n = get(t, "attributes.resourceCenter.integrationProvider");
                    if (e.isNativeModuleActive = t && BuildingBlockResourceCenter.isSupportedNativeIntegration(n), BuildingBlockResourceCenter.isFullyCustom(e)) return e.hasResourceCenterContent = !0, !0;
                    if (e.isShown() || !store.getters["frames/isLeader"]() ? resourceCenterShowingProc(e, resourceCenterBadgeProc) : resourceCenterNotShowingProc(e, resourceCenterBadgeProc), e.isNativeModuleActive) {
                        e.isShown() && e.hide();
                        var i = badgesShown[e.id];
                        i && i.hide()
                    }
                    "dom" === e.launchMethod && (BuildingBlockResourceCenter.updateNotificationBubbles(), BuildingBlockResourceCenter.adjustNotificationBubbleForResize())
                }
            }

            function RemoteFrameGuide() {
                return _.isFunction(this.isAnnouncement) && this.isAnnouncement() ? this : (this.shouldBeAddedToLauncher = _.wrap(this.shouldBeAddedToLauncher, function (e) {
                    return store.getters["frames/hasFrames"]() ? store.getters["frames/isGuideInThisFrame"]()(this) && e.apply(this, arguments) ? !0 : store.getters["frames/isGuideInDifferentFrame"]()(this) ? store.getters["frames/shouldBeAddedToLauncher"]()(this) : !1 : e.apply(this, arguments)
                }), this.shouldBeAddedToResourceCenter = _.wrap(this.shouldBeAddedToResourceCenter, function (e) {
                    return store.getters["frames/hasFrames"]() ? store.getters["frames/isGuideInThisFrame"]()(this) && e.apply(this, arguments) ? !0 : store.getters["frames/isGuideInDifferentFrame"]()(this) ? store.getters["frames/shouldBeAddedToResourceCenter"]()(this) : !1 : e.apply(this, arguments)
                }), this)
            }

            function RemoteFrameStep(e) {
                var t = this;
                return "whatsnew" === t.type ? t : _.isFunction(e.isAnnouncement) && e.isAnnouncement() ? t : (t.isShown = _.wrap(t.isShown, function (e) {
                    return e.apply(this, arguments) || store.getters["frames/isShownInAnotherFrame"]()(t)
                }), t)
            }

            function AdvanceTrigger(e, t, n) {
                this.element = e, "element" == t ? this.method = "click" : "hover" == t ? this.method = "mouseover" : this.method = t, this.step = n, this.guide = n.getGuide()
            }

            function Tooltip(e) {
                if ("tooltip" === this.type) {
                    var t = this;
                    t.attributes.height = t.attributes.height || pendo$1.TOOLTIP_DEFAULT_HEIGHT, t.attributes.width = t.attributes.width || pendo$1.TOOLTIP_DEFAULT_WIDTH, t.attributes.layoutDir = t.attributes.layoutDir || "DEFAULT", this.getTriggers = function (e) {
                        var t = this, n = t.element || getElementForGuideStep(t);
                        if (!n && e) return [];
                        var i = t.advanceMethod || "", r = i.split(",");
                        return this.triggers = _.map(r, function (e) {
                            return new AdvanceTrigger(n, e, t)
                        }), this.triggers
                    }, this.removeTrigger = function (e) {
                        this.triggers = _.without(this.triggers, e), 0 === this.triggers.length && (this.triggers = null)
                    }, this.canShow = function () {
                        return isDismissedUntilReload(t) ? !1 : e.canShowOnDevice() ? !t.isShown() && t.canShowOnPage(getNormalizedUrl()) && canStepBeRendered(t) : !1
                    }, this.after("render", function () {
                        var e = this;
                        showTooltipGuide(e, e.elements) && (_.each(e.getTriggers(), function (e) {
                            e.add()
                        }), BuildingBlockTooltips.attachScrollHandlers(e, e.onscroll))
                    }), this.reposition = function () {
                        var e = this, t = e.attributes.width, n = e.attributes.height, i = e.attributes.layoutDir,
                            r = e.guideElement, o = dom("._pendo-guide-container_", r),
                            a = getOffsetPosition(e.element), s = getTooltipDimensions(a, n, t, i);
                        o.removeClass("top right bottom left").removeClass("_pendo-guide-container-top_ _pendo-guide-container-right_ _pendo-guide-container-bottom_ _pendo-guide-container-left_").addClass(s.arrowPosition).addClass("_pendo-guide-container-" + s.arrowPosition + "_"), dom("._pendo-guide-arrow_,._pendo-guide-arrow-border_", r).remove(), buildAndAppendArrow(r, s), r.css({
                            top: s.top,
                            left: s.left,
                            height: s.height,
                            width: s.width,
                            position: a.fixed ? "fixed" : ""
                        }), e.dim = s
                    }, this.onscroll = function (e, t, n) {
                        var i = getClientRect(e.element), r = e.dim;
                        isVisibleInScrollParent(i, t, n) ? (r = getTooltipDimensions(i, e.attributes.height, e.attributes.width, r.arrowPosition), setStyle(e.elements[0], "display:block;top:" + r.top + "px;left:" + r.left + "px"), e.dim = r) : setStyle(e.elements[0], "display:none")
                    }, this.teardownElementEvent = function () {
                        _.each(this.triggers, function (e) {
                            e.remove()
                        })
                    }, this.after("hide", function () {
                        dom("._pendo-guide-tt-region-block_").remove(), clearLastBlock()
                    })
                }
                return this
            }

            function Lightbox() {
                var e = this;
                return /lightbox/i.test(e.type) && (e.attributes.height = e.attributes.height || pendo$1.LB_DEFAULT_HEIGHT, e.attributes.width = e.attributes.width || pendo$1.LB_DEFAULT_WIDTH, e.after("render", function () {
                    isMobileUserAgent() ? showMobileLightboxGuide(e, e.elements) : showLightboxGuide(e, e.elements)
                }), e.reposition = function () {
                    isMobileUserAgent() || e.guideElement.css({
                        "margin-left": -Math.floor(e.attributes.width / 2),
                        "margin-top": -Math.floor(e.attributes.height / 2)
                    })
                }), e
            }

            function Banner() {
                var e = this;
                return "banner" === e.type && (e.attributes.height = e.attributes.height || BANNER_DEFAULT_HEIGHT, e.attributes.position = e.attributes.position || "top", e.after("render", function () {
                    var t = e.guideElement, n = pendo$1.TOOLTIP_ARROW_SIZE;
                    t.css({width: ""}).addClass(BANNER_CSS_NAME).addClass("_pendo-guide-banner-" + e.attributes.position + "_"), isPreviewing() || t.addClass("_pendo-in_"), dom("._pendo-guide-container_", t).css({
                        bottom: n,
                        right: n
                    }), e.element = getElementForGuideStep(e), e.elements.push(t[0]), t.appendTo(getGuideAttachPoint())
                })), e
            }

            function WhatsNew(e) {
                function t() {
                    return !!s.guideElement
                }

                function n() {
                    var t = s.guideElement;
                    t && !isInDocument(t[0]) && (dom("._pendo-launcher_ #launcher-" + s.guideId).html("").append(t), _.isFunction(s.script) && s.script(s, e))
                }

                function i() {
                    var e = s.guideElement, t = s.attributes.height;
                    e && e.html() || (e = dom("<div>").attr("id", getStepDivId(s)).addClass("_pendo-guide-whatsnew_").html(s.getContent()), _.isNumber(t) && !s.attributes.autoHeight && e.height(t), s.seenState === c && e.addClass(u), s.guideElement = e)
                }

                function r() {
                    isPreviewing() || t() && s.seenState !== c && o(s.guideElement[0]) && (seenGuide(s.guideId, s.id, get_visitor_id(), d, e.language, {last_updated_at: s.lastUpdatedAt}), s.seenState = c, _.delay(function () {
                        s.guideElement.addClass(u + " out")
                    }, _.isNumber(s.attributes.seenDelay) ? s.attributes.seenDelay : l))
                }

                function o(e) {
                    if (isElementVisible(e, /(auto|scroll|hidden)/)) {
                        var t = getScrollParent(e), n = getClientRect(t), i = getClientRect(e),
                            r = n.top + Math.floor(n.height / 3);
                        return i.bottom <= n.bottom || i.top <= r
                    }
                }

                function a() {
                }

                var s = this, d = "whatsnew", u = "_pendo-guide-whatsnew-seen_", c = "active", l = 1e3;
                return s.type === d && (_.extend(s, {
                    isShown: _.constant(!1),
                    launch: a,
                    onShown: a,
                    render: i,
                    seen: r
                }), _.extend(e, {addToLauncher: n, isReady: t}), s.after("show", r)), s
            }

            function Poll(e) {
                var t = this;
                if (t.pollIds && t.pollIds.length) {
                    var n, i = "_pendo-poll-selected_", r = _.indexBy(e.polls, "id"),
                        o = _.map(t.pollIds, function (e) {
                            return r[e]
                        }), a = function (e, t) {
                            return e && t !== undefined ? e.numericResponses ? parseInt(t, 10) : t : void 0
                        }, s = function () {
                            var n = e.id, i = t.id, r = getNow();
                            advancedGuide(n, i, get_visitor_id(), t.seenReason, e.language), _updateGuideStepStatus(n, i, "advanced", r), writeLastStepSeenCache({
                                guideId: n,
                                guideStepId: i,
                                time: r,
                                state: "advanced"
                            })
                        }, d = function () {
                            var e = dom("._pendo-poll_"), n = dom("._pendo-poll-message_");
                            n.length ? (e.addClass("_pendo-poll-submitted_"), n.css("margin-top:-" + n.height() / 2 + "px"), s()) : t.advance()
                        }, u = function (e, t) {
                            return t && t.polls && t.polls.length ? _.find(t.polls, function (t) {
                                return t.id === e
                            }) : void 0
                        };
                    t.after("render", function () {
                        var e = ShadowSizzle("._pendo-poll_")[0], n = ShadowSizzle("._pendo-poll-submit_", e)[0];
                        n ? t.attachEvent(n, "click", function (n) {
                            var i = ShadowSizzle("._pendo-poll-question_", e), r = _.map(i, function (e, t) {
                                var n = ShadowSizzle("textarea,input:text,select,input:radio:checked", e);
                                if (n && n.length && n[0].value) {
                                    var i = o[t];
                                    return {pollId: i.id, value: a(i, n[0].value)}
                                }
                            });
                            t.response(_.compact(r)), d()
                        }) : t.attachEvent(e, "click", function (e) {
                            var n = dom(getTarget(e)).closest("._pendo-poll-question_ :button,._pendo-poll-question_ :radio");
                            if (n.length) {
                                var i = o[0], r = a(i, n.attr("data-pendo-poll-value") || n.attr("value"));
                                t.response([{pollId: i.id, value: r}]), d()
                            }
                        })
                    }), t.after("render", function () {
                        var e = ShadowSizzle("._pendo-poll_ ._pendo-poll-npsrating_")[0],
                            n = dom("._pendo-poll_ ._pendo-poll-submit_"), r = "_pendo-poll-npsrating-selected_";
                        e && (n.css({display: "none"}), t.attachEvent(e, "click", function (o) {
                            var a = ShadowSizzle(":radio:checked", e)[0], s = dom("._pendo-poll_");
                            dom("label", e).removeClass(i), s.removeClass(r), a && (dom('label[for="' + a.id + '"]').addClass(i), s.addClass(r), n.css({display: ""})), _.isFunction(t.resize) && t.resize()
                        }))
                    }), t.after("show", function () {
                        n = (new Date).getTime()
                    }), t.response = function (i, r) {
                        i && i.length && (_.each(i, function (i, o) {
                            var a = u(i.pollId, e),
                                s = createGuideEvent("pollResponse", t.guideId, t.id, get_visitor_id(), undefined, e.language);
                            _.extend(s.props, {
                                poll_id: i.pollId,
                                poll_response: i.value,
                                duration: (new Date).getTime() - n
                            }, r), a && a.attributes && a.attributes.type && _.extend(s.props, {poll_type: a.attributes.type}), pollEventQueue.push(s)
                        }), pollEventQueue.flush())
                    }
                }
                return t
            }

            function GuideStep(e) {
                var t = !1, n = !1;
                return this.guide = e, this.elements = [], this.handlers = [], this.attributes = this.attributes || {}, this.getGuide = function () {
                    return this.guide
                }, this.getContent = function () {
                    var e = this, t = this.getGuide(), n = t && t.steps || [], i = _.indexOf(n, e), r = getMetadata();
                    _.isObject(r) || (r = prepareOptions());
                    try {
                        var o = e.attributes.variables || {}, a = {
                            step: {
                                id: e.id,
                                isFirst: 0 === i,
                                isLast: i === n.length - 1,
                                index: i,
                                number: i + 1
                            },
                            guide: {
                                id: t.id,
                                name: t.name,
                                publishedAt: t.publishedAt,
                                showsAfter: t.showsAfter,
                                percentComplete: n.length ? Math.round((i + 1) / n.length * 100) : 0,
                                stepCount: n.length
                            },
                            metadata: escapeStringsInObject(r),
                            template: o
                        };
                        return e.template || (e.template = _.template(e.content || "")), replaceWithContentHost(e.template(a).replace(/#_pendo_g_undefined/g, "#_pendo_g_" + e.id).replace(/pendo-src="([^"]+)"/g, function (e, t) {
                            return /<%=[^>]+>/.test(t) ? e : 'src="' + t + '"'
                        }))
                    } catch (s) {
                        return e.content
                    }
                }, this.isLocked = function () {
                    return t
                }, this.lock = function () {
                    t = !0
                }, this.unlock = function () {
                    t = !1
                }, this.isTimedOut = function () {
                    return n
                }, this.timeout = function () {
                    n = !0
                }, this.isRendered = function () {
                    return this.elements && this.elements.length > 0
                }, this.isShown = function () {
                    return this.isRendered() || this.isLocked()
                }, this.canShow = function () {
                    var t = this;
                    return get(t, "guide.attributes.isAnnouncement") ? !1 : e.canShowOnDevice() ? t.isShown() ? !1 : t.canShowOnPage(getNormalizedUrl()) && canStepBeRendered(t) : !1
                }, this.canShowOnPage = function (e) {
                    return testUrlForStep(this.regexUrlRule, e)
                }, this.shouldAutoDisplay = function () {
                    return this.shouldRepeat() || !this.hasBeenControlled() && !this.isSnoozed() && !_.contains(["dismissed", "advanced"], this.seenState)
                }, this.autoDisplay = function () {
                    var e = this;
                    if (e.shouldAutoDisplay()) {
                        var t = e.shouldRepeat() ? "repeatGuide" : "auto";
                        e.show(t)
                    }
                }, this._preRenderHealthCheck = function () {
                    var t = this;
                    if (pendo$1.designer || isPreviewing() || isInPreviewMode()) return !0;
                    var n = getNormalizedUrl(), i = {guideId: t.guideId, stepId: t.id};
                    return t.regexUrlRule && !testUrlForStep(t.regexUrlRule, n) ? (Tombstone.addGuide(e), writeException(new Error('attempted display on page "' + n + '"'), "pendo.io page rule exception", i), !1) : store.getters["healthCheck/isMissingPageRule"]()(t) ? (Tombstone.addGuide(e), writeException(new Error('missing regexUrlRule"'), "pendo.io page rule exception", i), !1) : t.pageId && !t.regexUrlRule ? (Tombstone.addGuide(e), writeException(new Error("missing regexUrlRule for page " + t.pageId + '"'), "pendo.io page rule exception", i), !1) : !0
                }, this.render = function () {
                    var t = this;
                    if (this._preRenderHealthCheck()) {
                        if (t.domJson) {
                            if (t.eventRouter = new EventRouter, e.skipResourceCenterHomeView && e.moduleIdToReplaceHomeViewWith && e.hasEligibleNativeIntegrationModule) {
                                var n = _.find(pendo$1.guides, function (t) {
                                    return t.id === e.moduleIdToReplaceHomeViewWith
                                }), i = get(n, "attributes.resourceCenter.integrationProvider");
                                return BuildingBlockResourceCenter.renderNativeIntegration(i, n)
                            }
                            if (e.continueToNativeModule) return BuildingBlockResourceCenter.handleNativeIntegrationContinuation(e);
                            if (get(e, "attributes.resourceCenter") && resourceCenterShowingProc(BuildingBlockResourceCenter.getResourceCenter(), resourceCenterBadgeProc), e.isModule) return BuildingBlockGuides.renderResourceCenterModule(e);
                            var r = BuildingBlockGuides.renderGuideFromJSON(t.domJson, t);
                            return get(e, "attributes.resourceCenter") && BuildingBlockResourceCenter.adjustResourceCenterWidth(), r
                        }
                        var o = t.attributes.width, a = t.attributes.height, s = pendo$1.TOOLTIP_ARROW_SIZE,
                            d = "_pendo-group-id-" + e.id + "_",
                            u = dom("<div>").attr("id", getStepDivId(t)).addClass(GUIDE_CSS_NAME + " " + d),
                            c = dom("<div/>").addClass("_pendo-guide-content_").html(t.getContent()),
                            l = dom("<div/>").addClass("_pendo-guide-container_"),
                            f = dom("<div/>").addClass("_pendo-backdrop_");
                        u.width(o), u.height(a), l.css({
                            left: s,
                            top: s
                        }), t.isEditable && c.attr("contenteditable", "true"), c.appendTo(l), l.appendTo(u), e && _.isFunction(e.isOnboarding) && e.isOnboarding() && u.addClass("_pendo-onboarding_"), t.overlayDiv = f, t.guideElement = u
                    }
                }, this.teardown = function () {
                    log("guide step teardown", "guide", "render"), _.each(this.handlers, function (e) {
                        detachEvent(e.element, e.type, e.fn, !0)
                    }), this.hasBeenScrolledTo = !1, clearInterval(this.timeoutTimer), delete this.timeoutTimer, this.handlers.length = 0, this.attributes.imgCount = 0
                }, this.show = function (t) {
                    var n = this;
                    if (_.contains(["auto", "continue"], t) && store.getters["healthCheck/isRedisplay"]()(this)) return void store.dispatch("healthCheck/fixSeenStateAndLogError", {
                        step: this, reason: t
                    });
                    if (!isPreviewing() && e.control) return void (n.hasBeenControlled() || n.onControlGuide("control"));
                    var i = GuideDisplay.show(n, t);
                    i && i["catch"] && i["catch"](_.noop)
                }, this.redraw = function () {
                    var t = this;
                    if (t.guideElement && !pendo$1.designer) {
                        var n = get(e, "attributes.resourceCenter"),
                            i = n && BuildingBlockResourceCenter.isFullyCustom(e),
                            r = e.activeModule ? e.activeModule.activeStep().domJson.props.id : t.containerId,
                            o = t.guideElement.find("#" + r),
                            a = e.activeModule && "AnnouncementsModule" === get(e.activeModule, "attributes.resourceCenter.moduleId");
                        Events.beforeUpdate.trigger(t), i || a || (BuildingBlockGuides.recalculateGuideWidth(r), BuildingBlockGuides.adjustGuideContentWidth(r)), n ? (BuildingBlockResourceCenter.adjustResourceCenterWidth(), a && e.activeModule.guidesInModule ? _.forEach(e.activeModule.guidesInModule, function (e) {
                            if (_.isUndefined(e.steps[0].attributes.imgCount) || 0 === get(e.steps[0], "attributes.imgCount")) {
                                var t = e.steps[0].id, n = dom(o).find("#pendo-g-" + t)[0] ? t : e.id;
                                BuildingBlockGuides.adjustGuideContentWidth("pendo-g-" + n), BuildingBlockGuides.flexAllThings("pendo-g-" + n)
                            }
                        }) : BuildingBlockGuides.flexAllThings("pendo-resource-center-container")) : BuildingBlockGuides.flexAllThings(r), i || BuildingBlockGuides.recalculateGuideHeight(r), Events.updated.trigger(t)
                    }
                }, this._show = function (t) {
                    var n = this;
                    if (!n.canShow()) {
                        var i = ["dom", "launcher", "badge", "api"], r = _.indexOf(i, t) > -1;
                        if (!ConfigReader.get("enableGuideTimeout")) return;
                        if ("active" === n.seenState) return;
                        if (this.isTimedOut()) return;
                        var o = e && e.steps;
                        if (!o) return;
                        var a = _.indexOf(o, n);
                        if (0 === a && !r) return;
                        return void n.beginTimeoutTimer()
                    }
                    n.render(), n.isShown() && n.onShown(t)
                }, this.shouldStartTimer = function () {
                    return e.canShowOnDevice() && !e.attributes.isAnnouncement && !isDismissedUntilReload(this)
                }, this.getStepPollTypes = function (e, t) {
                    if (t.pollIds && t.pollIds.length) {
                        var n = [];
                        return _.forEach(t.pollIds, function (t) {
                            var i = _.find(e.polls, function (e) {
                                return e.id === t
                            });
                            i && i.attributes && i.attributes.type && n.push(i.attributes.type)
                        }), n
                    }
                }, this.onControlGuide = function (t) {
                    var n = this;
                    if (!isPreviewing()) {
                        n.seenReason = t, setSeenTime(getNow());
                        var i = this.getStepPollTypes(e, n);
                        n.hasBeenControlled() || (controlledGuide(n.guideId, n.id, get_visitor_id(), t, e.language, i), _.each(e.steps, function (e) {
                            e.seenState = "notSeen"
                        }))
                    }
                }, this.onShown = function (t) {
                    var n = this;
                    if (n.overrideElement && (dom.addClass(n.overrideElement, "triggered"), n.overrideElement.checkAriaExpanded && n.overrideElement.checkAriaExpanded()), !isPreviewing()) {
                        n.seenReason = t, n.seenState = "active", setSeenTime(getNow());
                        var i = {last_updated_at: n.lastUpdatedAt}, r = this.getStepPollTypes(e, n);
                        if (r && (i.step_poll_types = r), seenGuide(n.guideId, n.id, get_visitor_id(), t, e.language, i), store.dispatch("guideState/updateLastGuideStepSeen", {
                            guideId: e.id,
                            guideStepId: n.id,
                            time: getSeenTime(),
                            state: n.seenState,
                            seenReason: t,
                            visitorId: get_visitor_id()
                        }), _.each(e.steps, function (n) {
                            "snoozed" === n.seenState && (n.snoozeEndTime = 0, snoozeCanceledGuide(e.id, n.id, get_visitor_id(), t, e.language))
                        }), _.isFunction(n.script)) try {
                            n.script.call(GuideRuntime.getContext(n), n, e)
                        } catch (o) {
                            writeException(o, "Exception thrown running code block for: " + JSON.stringify({
                                guideId: e.id,
                                stepId: n.id
                            }))
                        }
                    }
                    store.dispatch("frames/guideStepShownInFrame", {
                        guideId: e.id,
                        stepId: n.id,
                        isShown: n.isShown()
                    }), n.attachEvent(n.guideElement[0], "focusin", function (e) {
                        ("TEXTAREA" === e.target.tagName || "INPUT" === e.target.tagName) && (pendo$1.ignoreResize = !0, setTimeout(function () {
                            pendo$1.ignoreResize = !1
                        }, 500))
                    })
                }, this.hide = function (t) {
                    var n = this;
                    n.unlock(), Events.beforeUnmount.trigger(n), n.teardown(), _.each(n.elements, function (e) {
                        removeNode(e)
                    }), Events.unmounted.trigger(n), n.attributes && t && t.stayHidden && (n.attributes.stayHidden = t.stayHidden), n.elements.length = 0, n.element = null, n.guideElement = null, n.overrideElement && (dom.removeClass(n.overrideElement, "triggered"), n.overrideElement.checkAriaExpanded && n.overrideElement.checkAriaExpanded()), store.dispatch("frames/guideStepHiddenInFrame", {
                        guideId: e.id,
                        stepId: n.id
                    })
                }, this.advance = function () {
                    ("advanced" !== this.seenState || this.isRendered()) && onGuideAdvanced(this)
                }, this.dismiss = function () {
                    ("dismissed" !== this.seenState || this.isRendered()) && onGuideDismissed(this)
                }, this.isPoweredByEnabled = function () {
                    return this.hideCredits !== !0
                }, this.isSnoozed = function () {
                    var e = "snoozed" === this.seenState,
                        t = this.snoozeEndTime ? (new Date).getTime() > this.snoozeEndTime : !0;
                    return e && !t
                }, this.shouldRepeat = function () {
                    return !!this.lastSeenAt && e.redisplay && !e.isExpired() && !this.isSnoozed() && getNow() - this.lastSeenAt >= e.redisplay.interval
                }, this.hasBeenControlled = function () {
                    return e.isControlGroup() && "notSeen" === this.seenState
                }, this.attachEvent = function (e, t, n) {
                    var i = {element: e, type: t, fn: n};
                    attachEvent(e, t, n, !0), this.handlers.push(i)
                }, this.searchFor = function (e) {
                    return e.length < 3 ? !1 : strContains(this.content, e, !0)
                }, this.hasBeenSeen = function () {
                    return "advanced" == this.seenState || "dismissed" == this.seenState
                }, this.reposition = function () {
                }, this.beginTimeoutTimer = function () {
                    if (this.shouldStartTimer()) {
                        var e = getGuideSeenTimeoutLength(), t = _.bind(function () {
                            var t = this.getGuide();
                            if (!t.isShown()) {
                                var n;
                                n = this.canShowOnPage(getNormalizedUrl()) ? canStepBeRendered(this) ? "other" : "element" : "page", timeoutGuide(t.id, this.id, get_visitor_id(), n, t.language, e), log("Guide Timed Out"), this.timeout()
                            }
                            delete this.timeoutTimer
                        }, this);
                        this.timeoutTimer || (this.timeoutTimer = setTimeout(function () {
                            t()
                        }, e))
                    }
                }, this
            }

            function AutoHeight() {
                var e = this;
                if (e.attributes && e.attributes.autoHeight) {
                    var t = function () {
                        return "tooltip" == e.type || isBrowserInQuirksmode() && "lightbox" == e.type
                    };
                    e.after("render", function () {
                        e.resize(), e.attachEvent(e.guideElement[0], "load", function () {
                            e.resize()
                        })
                    }), e.resize = function () {
                        var n = pendo$1.TOOLTIP_ARROW_SIZE, i = e.guideElement, r = dom("._pendo-guide-container_", i);
                        t() ? r.css({width: e.attributes.width - 2 * n, height: ""}) : r.css({
                            right: n,
                            bottom: ""
                        }), e.attributes.height = r.height() + 2 * n, i.height(e.attributes.height), e.reposition()
                    }
                }
                return e
            }

            function CloseButton(e) {
                var t = this;
                return t.domJson || t.domJsonpUrl ? t : (t.after("render", function () {
                    addCloseButton(t.guideElement[0], function () {
                        (!e.isOnboarding() || confirm("Are you sure you want to stop this tutorial?")) && onGuideDismissed(t)
                    })
                }), t)
            }

            function Credits() {
                var e = this;
                return e.hideCredits || e.domJson || e.domJsonpUrl || e.after("render", function () {
                    _addCredits(e.guideElement[0])
                }), e
            }

            function PreviewMode() {
                var e = this;
                return e.after("render", function () {
                    adjustPreviewBarPosition(document)
                }), e
            }

            function GroupGuide() {
                var e = this;
                return e.attributes && "group" == e.attributes.type && (e.checkForHiddenGroupSteps = function () {
                    _.each(e.steps, function (e) {
                        e.isShown() || e.autoDisplay()
                    })
                }), e
            }

            function WalkthroughGuide() {
                var e = !1;
                if (this.isMultiStep || this.isModule || this.isTopLevel) {
                    _.each(this.steps, function (e) {
                        e.after("render", function () {
                            _.each(e.elements, function (e) {
                                dom(e).addClass("_pendo-guide-walkthrough_")
                            })
                        })
                    });
                    var t = function (e, t) {
                        if (!e) return !0;
                        var n = _.last(e);
                        return n.attributes.isRequired != t.attributes.isRequired && n.attributes.isRequired ? !0 : !1
                    }, n = null;
                    this.sections = _.reduce(this.steps, function (e, i) {
                        return t(n, i) ? (e.push(n), n = [i]) : n.push(i), e
                    }, []), this.sections = _.compact(this.sections.concat([n])), this.findSectionForStep = function (e) {
                        return _.find(this.sections, function (t) {
                            return _.contains(t, e)
                        })
                    }, this.getSubSection = function (e, t) {
                        var n = _.indexOf(e, t);
                        return e.slice(n + 1)
                    }, this.isContinuation = function (e) {
                        var t = this.isTopLevel || this.isModule, n = this.hasResourceCenterContent;
                        return t ? n && !!this.nextStep(e) : !!this.nextStep(e)
                    };
                    var i = 432e5;
                    this.nextStep = function (t) {
                        var n = null, r = this;
                        if (r.isGuideSnoozed()) return null;
                        t = t || {};
                        for (var o = 0; o < r.steps.length; o++) if (r.steps[o].id === t.guideStepId) {
                            if ("dismissed" === t.state) break;
                            if ("active" === t.state || "snoozed" === t.state) {
                                n = r.steps[o];
                                break
                            }
                            if ("advanced" === t.state && t.destinationStepId) {
                                n = _.find(r.steps, function (e) {
                                    return e.id === t.destinationStepId
                                });
                                break
                            }
                            if (o + 1 < r.steps.length) {
                                n = r.steps[o + 1];
                                break
                            }
                        }
                        if (n) {
                            var a = (new Date).getTime(), s = t.time;
                            return s && a - s > i && !isOB(r) ? (e || (log("Multi-step continuation has expired", "guides", "info"), e = !0), null) : n
                        }
                        return null
                    }, this.shouldAutoDisplay = function () {
                        var e = this;
                        return e.hasLaunchMethod("auto") && (e.shouldShowSnoozedGuide() || e.shouldRepeatGuide() || _.all(e.steps, function (e) {
                            return e.shouldAutoDisplay()
                        }))
                    }, this.autoDisplay = function () {
                        var e = this;
                        if (e.shouldAutoDisplay()) {
                            var t = e.shouldRepeatGuide(), n = _.first(e.steps),
                                i = e.nextStep(getLastGuideStepSeen()) || n, r = e.shouldShowSnoozedGuide() || t;
                            if (r) {
                                var o = t ? "repeatGuide" : "auto";
                                i.show(o)
                            } else n.autoDisplay()
                        }
                    }, this.launch = function (e) {
                        var t = _.first(this.steps);
                        t.show(e)
                    }, this.show = function (e) {
                        var t = this, n = getLastGuideStepSeen(), i = _.first(t.steps), r = t.nextStep(n) || i;
                        r.show(r === i && "auto" === get(n, "seenReason") ? "auto" : e)
                    }, this.isComplete = function () {
                        var e = ["advanced", "dismissed"], t = _.last(this.steps);
                        return t ? _.contains(e, t.seenState) : !1
                    }, this.activeStep = function () {
                        var e = [].concat(this.steps).reverse();
                        return _.findWhere(e, {seenState: "active"})
                    }
                }
                return this
            }

            function GuideErrorThrottle() {
                function e(e) {
                    var n = [];
                    return function (i) {
                        try {
                            return i.apply(t, _.toArray(arguments).slice(1))
                        } catch (r) {
                            var o = 5, a = "ERROR in guide " + e + ' (ID="' + t.id + '")';
                            if (n.push(getNow()), n.length >= o) {
                                var s = _.last(n) - _.first(n), d = s > 0 ? (n.length - 1) / (s / 6e4) : 1 / 0;
                                d >= GuideErrorThrottle.MAX_ERRORS_PER_MINUTE && (a = "Exceeded error rate limit, dropping guide.\n" + a, Tombstone.addGuide(t), Events.trigger("renderFail", t)), n.shift()
                            }
                            throw writeException(r, a), r
                        }
                    }
                }

                var t = this;
                return _.each(["canShow", "placeBadge", "show"], function (n) {
                    t[n] = _.wrap(t[n], e(n))
                }), t
            }

            function Guide() {
                if (this.elements = [], this.attributes = this.attributes || {}, this.attributes.device && this.attributes.device.type) if ("all" == this.attributes.device.type) this.attributes.device = {
                    desktop: !0,
                    mobile: !0
                }; else {
                    var e = this.attributes.device.type;
                    this.attributes.device = {mobile: !1, desktop: !1}, this.attributes.device[e] = !0
                } else this.attributes.device = this.attributes.device || {};
                _.each(this.steps, function (e) {
                    "mobile-lightbox" === e.type && (this.attributes.device.desktop = !1, this.attributes.device.mobile = !0), GuideStep.create(e, this)
                }, this), this.isActivatedByEvent = function (e) {
                    var t = this;
                    return !!(t.hasLaunchMethod("dom") && t.attributes && t.attributes.activation && _.contains(t.attributes.activation.event, e) && this.canEventActivatedGuideBeShown())
                }, this.isContinuation = function (e) {
                    return !1
                }, this.isGuideWidget = function () {
                    var e = this;
                    return e.attributes && "launcher" === e.attributes.type
                }, this.isOnboarding = function () {
                    var e = this;
                    return e.attributes && !!e.attributes.isOnboarding
                }, this.isWhatsNew = function () {
                    var e = _.first(this.steps);
                    return e && "whatsnew" === e.type
                }, this.isAnnouncement = function () {
                    return get(this, "attributes.isAnnouncement")
                }, this.isHelpGuide = function () {
                    return !this.isOnboarding() && !this.isWhatsNew() && !this.isGuideWidget()
                }, this.nextStep = function (e) {
                    return null
                }, this.hasLaunchMethod = function (e) {
                    return this.launchMethod && this.launchMethod.indexOf(e) >= 0
                }, this.shouldAutoDisplay = function () {
                    var e = this;
                    return !e.isExpired() && e.hasLaunchMethod("auto") && _.any(e.steps, function (e) {
                        return e.shouldAutoDisplay()
                    })
                }, this.autoDisplay = function () {
                    var e = this;
                    e.shouldAutoDisplay() && _.each(e.steps, function (e) {
                        e.autoDisplay()
                    })
                }, this.isShown = function () {
                    return _.any(this.steps, function (e) {
                        return e.isShown()
                    })
                }, this.canShowOnDevice = function () {
                    var e = this;
                    if (!isPreviewing()) {
                        var t = isMobileUserAgent(), n = !t, i = e.attributes && e.attributes.device || {};
                        if (n && i.desktop === !1) return !1;
                        if (t && i.mobile !== !0) return !1
                    }
                    return !0
                }, this.canShow = function () {
                    var e = this;
                    return e.canShowOnDevice() && _.any(e.steps, function (e) {
                        return e.canShow()
                    })
                }, this.launch = function (e) {
                    var t = this;
                    return t.hasGuideBeenControlled() || t.show(e), t.isShown() ? void _.each(t.steps, function (e) {
                        e.seenState = "active"
                    }) : !t.isShown() && t.isControlGroup() ? void _.each(t.steps, function (e) {
                        e.seenState = "notSeen"
                    }) : void 0
                }, this.show = function (e) {
                    var t = this;
                    _.each(t.steps, function (t) {
                        t.show(e)
                    })
                }, this.checkForHiddenGroupSteps = function () {
                }, this.hide = function (e) {
                    var t = this;
                    _.each(t.steps, function (t) {
                        t.hide(e)
                    })
                }, this.hasBeenSeen = function () {
                    var e = this;
                    return _.all(e.steps, function (e) {
                        return e.hasBeenSeen()
                    })
                }, this.canBadgeBeShown = function () {
                    var e = this.attributes.badge;
                    return e && e.isOnlyShowOnce && this.hasBeenSeen() ? !1 : !0
                }, this.placeBadge = function () {
                    if (this.canShowOnDevice() && this.hasLaunchMethod("badge") && this.canBadgeBeShown()) {
                        var e = get(this, "attributes.resourceCenter");
                        if (this.isControlGroup() && !e) return void (this.hasGuideBeenControlled() || this.steps[0].onControlGuide("control"));
                        var t = _.first(this.steps);
                        t && _.isFunction(t.canShowOnPage) && t.canShowOnPage(getNormalizedUrl()) && placeBadge(this)
                    } else removeBadgeForGuide(this)
                }, this.findStepById = function (e) {
                    return _.find(this.steps, function (t) {
                        return t.id === e
                    })
                }, this.isPoweredByEnabled = function () {
                    return !!_.find(this.steps, function (e) {
                        return e.isPoweredByEnabled()
                    })
                }, this.searchFor = function (e) {
                    var t = this, n = null;
                    if (strContains(this.name, e, !0)) n = "name"; else {
                        var i = [], r = !1;
                        if (this.attributes && this.attributes.launcher && this.attributes.launcher.keywords && (i = this.attributes.launcher.keywords), i.length > 0 && (r = _.find(i, function (t) {
                            return strContains(t.text, e, !0)
                        })), r) n = "tag"; else {
                            var o = _.map(this.steps, function (t) {
                                return t.searchFor(e)
                            }), a = _.compact(o).length > 0;
                            a && (n = "content")
                        }
                    }
                    return n ? {guide: t, field: n} : !1
                }, this.shouldBeAddedToResourceCenter = function () {
                    var e = this;
                    if (!e.steps || !e.steps.length) return !1;
                    if (e.control) return !1;
                    if (e.eligibleInFrame) return !0;
                    if (!e.steps[0].content && !_.isFunction(e.steps[0].fetchContent)) return !1;
                    var t = e.steps[0];
                    return (e.hasLaunchMethod("launcher") || e.isWhatsNew()) && t.canShowOnPage(getNormalizedUrl()) && e.canShowOnDevice() && canStepBeRendered(t) ? !0 : !1
                }, this.shouldBeAddedToLauncher = function () {
                    var e = this;
                    if (!e.steps || !e.steps.length) return !1;
                    var t = e.steps[0];
                    return (e.hasLaunchMethod("launcher") || e.isWhatsNew()) && t.canShowOnPage(getNormalizedUrl()) && e.canShowOnDevice() && canStepBeRendered(t) ? !0 : !1
                };
                var t = "PENDO_HELPER_STEP";
                return this.getPositionOfStep = function (e) {
                    var n = this, i = _.reject(n.steps, function (e) {
                        return strContains(e.content, t)
                    });
                    return _.indexOf(i, e) + 1
                }, this.getTotalSteps = function () {
                    var e = this, n = _.reject(e.steps, function (e) {
                        return strContains(e.content, t)
                    });
                    return n.length
                }, this.getSeenSteps = function () {
                    return _.size(_.filter(this.steps, function (e) {
                        return e.hasBeenSeen()
                    }))
                }, this.isComplete = function () {
                    var e = ["advanced", "dismissed"];
                    return _.all(this.steps, function (t) {
                        return _.contains(e, t.seenState)
                    })
                }, this.isInProgress = function () {
                    var e = ["active", "advanced", "dismissed"];
                    return !this.isComplete() && _.any(this.steps, function (t) {
                        return _.contains(e, t.seenState)
                    })
                }, this.isNotStarted = function () {
                    return !this.isInProgress() && !this.isComplete()
                }, this.fetchContent = function () {
                    return q.all(_.map(this.steps, function (e) {
                        return _.isFunction(e.fetchContent) ? e.fetchContent() : void 0
                    }))
                }, this.canEventActivatedGuideBeShown = function () {
                    var e = this;
                    return e.attributes.dom && e.attributes.dom.isOnlyShowOnce && e.steps[0].hasBeenSeen() ? !1 : !0
                }, this.isGuideSnoozed = function () {
                    var e = this;
                    return _.any(e.steps, function (e) {
                        return e.isSnoozed()
                    })
                }, this.hasGuideBeenControlled = function () {
                    var e = this;
                    return _.any(e.steps, function (e) {
                        return e.hasBeenControlled()
                    })
                }, this.isControlGroup = function () {
                    var e = this;
                    return e.control
                }, this.shouldShowSnoozedGuide = function () {
                    var e = this, t = !1;
                    return !e.isExpired() && _.any(e.steps, function (e) {
                        return "dismissed" === e.seenState && (t = !0), !t && "snoozed" === e.seenState && e.snoozeEndTime && (new Date).getTime() > e.snoozeEndTime
                    })
                }, this.shouldRepeatGuide = function () {
                    var e = this;
                    if (!e.redisplay || e.isExpired() || e.isGuideSnoozed()) return !1;
                    var t = 0;
                    return _.forEach(e.steps, function (e) {
                        t = Math.max(t, e.lastSeenAt || 0)
                    }), !!t && getNow() - t >= e.redisplay.interval
                }, this.isExpired = function () {
                    return this.expiresAfter ? getNow() > this.expiresAfter : !1
                }, this
            }

            function GuideFactory(e) {
                return Guide.create(e)
            }

            function defaultLauncher(e, t) {
                defaultLauncherTemplate = t
            }

            function getLauncherGuideList(e) {
                var t = _.filter(e || getActiveGuides(), isLauncher);
                return applySearch(t)
            }

            function computeLauncherHash(e) {
                return crc32(_.map(e, function (e) {
                    var t = e.isWhatsNew() ? [] : _.pluck(e.steps, "seenState");
                    return {id: e.id, seenState: t}
                }))
            }

            function LauncherBadge(e) {
                function t(e) {
                    var t = e.position || "bottom-right", n = document.createElement("img");
                    s.element = n, dom(n).addClass("_pendo-launcher-badge_").addClass("_pendo-launcher-badge-" + t + "_"), e.launcherBadgeUrl && (n.src = replaceWithContentHost(e.launcherBadgeUrl)), n.onerror = function (t) {
                        log("[Agent] Error! Unable to load guide center image " + e.launcherBadgeUrl), writeException({imgSrc: e.launcherBadgeUrl}, "ERROR in when attempting to render guide center badge image")
                    }, isBrowserInQuirksmode() && (attachEvent(n, "mouseover", function (e) {
                        dom(n).addClass("_pendo-launcher-badge-active_")
                    }), attachEvent(n, "mouseout", function (e) {
                        dom(n).removeClass("_pendo-launcher-badge-active_")
                    }), dom(n).css({position: "absolute"})), getGuideAttachPoint().appendChild(n)
                }

                function n() {
                    "badge" === d && dom(s.element).css("display: ;")
                }

                function i() {
                    dom(s.element).css("display: none;")
                }

                function r() {
                    var e = s.element;
                    if (e && /^img$/i.test(e.nodeName)) {
                        var t = dom("<div>").addClass(e.className).append(e).appendTo(getGuideAttachPoint());
                        e.className = "", s.element = t[0]
                    }
                }

                function o() {
                    dom.removeNode(s.element)
                }

                function a(e) {
                    e ? dom(s.element).addClass(launcherActiveClass) : dom(s.element).removeClass(launcherActiveClass)
                }

                var s = this, d = e.launchType ? e.launchType : "badge";
                _.extend(s, {show: n, hide: i, wrap: r, dispose: o, setActive: a}), t(e)
            }

            function LauncherElement(e) {
                function t() {
                    return dom(n())[0]
                }

                function n() {
                    return "element" === e.launchType && e.launchElement ? e.launchElement : "._pendo-launcher-badge_"
                }

                function i(e) {
                    attachEvent(document, "click", r)
                }

                function r(e) {
                    var t = getTarget(e), i = n(), r = dom(t).closest(i);
                    r.length && (isLauncherVisible() ? agentStorage.write("launcher-closed", "yes", 864e6) : pendo$1.guideWidget.position(t), toggleLauncher())
                }

                function o() {
                    detachEvent(document, "click", r), e && e.whatsnew && e.whatsnew.enabled && removeCountBadge()
                }

                var a = this;
                pendo$1.guideWidget.removeCountBadge = function () {
                    dom("._pendo-launcher-whatsnew-count_").remove()
                }, e && e.elementMatch && (e.launchElement = e.elementMatch.selection), _.extend(a, {
                    getLauncherTarget: t,
                    dispose: o
                }), i(e)
            }

            function Launcher() {
                var e, t = "bottom-right", n = "bottom-left", i = "top-left", r = "top-right";
                return this.update = function (t, n) {
                    var i;
                    i = n ? t : getLauncherGuideList(t);
                    var r = computeLauncherHash(i) + crc32(getLauncherSearchText());
                    return r !== e && (e = r, this.updateLauncherContent(i)), showHideLauncher(), i.length > 0
                }, this.updateLauncherContent = updateLauncherContent, this.guideStatus = function (e) {
                    return e.isComplete() ? "complete" : e.isInProgress() ? "in-progress" : "not-started"
                }, this.render = function () {
                    var e = this.data || {};
                    launcherBadge = new LauncherBadge(e);
                    var t = e.height || LAUNCHER_DEFAULT_HEIGHT;
                    e.enableSearch && (t += isBrowserInQuirksmode() ? 50 : 39), this && !this.hidePoweredBy && (t += 40), e.addHeight && (t += e.addHeight), this.height = t;
                    var n = e.width || LAUNCHER_DEFAULT_WIDTH;
                    e.addWidth && (n += e.addWidth), this.width = n;
                    var i = dom("<div>").addClass("_pendo-launcher_");
                    launcherTooltipDiv = i[0];
                    var r = getOffsetPosition(launcherBadge.element), o = getTooltipDimensions(r, t, n);
                    i.css({width: n, height: t});
                    var a = pendo$1.TOOLTIP_ARROW_SIZE,
                        s = dom("<div/>").addClass("_pendo-guide-container_ " + o.arrowPosition).addClass("_pendo-guide-container-" + o.arrowPosition + "_").css({
                            top: a,
                            left: a,
                            width: n - 2 * a,
                            height: t - 2 * a
                        }).appendTo(i), d = getLauncherContext(),
                        u = replaceWithContentHost(replaceInlineStyles(this.template(d))),
                        c = dom("<div/>").addClass("_pendo-guide-content_").html(u).appendTo(s);
                    if (e.addUISection && e.addUISection(i[0]), addCloseButton(i[0], function () {
                        toggleLauncher(), agentStorage.write("launcher-closed", "yes", 288e5)
                    }), c.on("click", function (e) {
                        var t = dom(getTarget(e)).closest("._pendo-launcher-item_");
                        if (t && t.length) {
                            var n = /^launcher-(.+)$/.exec(trim.call(t.attr("id"))), i = n && n[1],
                                r = findGuideById(i);
                            r && !r.isWhatsNew() && (showGuide(r.steps[0], "launcher"), toggleLauncher(), stopEvent(e))
                        }
                    }), isBrowserInQuirksmode() && (dom("._pendo-launcher-header_", i).css({
                        padding: "10px",
                        "margin-right": "10px",
                        "margin-left": "10px"
                    }), dom("._pendo-launcher-footer_", i).css({"border-top": "1px solid #bbb"}), i.css({position: "absolute"})), i.find("[pendo-style]").each(function () {
                        var e = this.getAttribute("pendo-style");
                        dom(this).css(e)
                    }), i.appendTo(getGuideAttachPoint()), _.isFunction(this.script) && this.script(this), e.autoHeight && e.autoHeight.enabled && !isOldIE(9, 6)) {
                        var l = e.autoHeight.offset || 100;
                        i.css({
                            height: "calc(100% - " + l + "px)",
                            maxHeight: e.height,
                            minHeight: e.height / 2
                        }), dom("._pendo-guide-container_." + o.arrowPosition).css({
                            maxHeight: e.height - 30,
                            minHeight: e.height / 2 - 30,
                            height: "calc(100% - 30px)"
                        })
                    }
                }, this.position = function (e) {
                    if (e) {
                        var o = this.data, a = getOffsetPosition(e),
                            s = getTooltipDimensions(a, this.height, this.width), d = dom(launcherTooltipDiv),
                            u = o.launchType ? o.launchType : "badge";
                        if ("badge" === u) {
                            var c = o.position, l = [t, n, i, r];
                            _.indexOf(l, o.position) < 0 && (c = t), _.each(l, function (e) {
                                d.removeClass("_pendo-launcher-" + e + "_")
                            }), d.addClass("_pendo-launcher-" + c + "_"), s.arrow = s.arrow || {}, s.arrowPosition = _.contains([t, n], c) ? "bottom" : "top", s.arrow.hbias = _.contains([n, i], c) ? "left" : "right", s.arrow.floating = !1
                        } else "element" === u && d.css({
                            top: s.top,
                            left: s.left,
                            height: s.height,
                            width: s.width,
                            position: a.fixed ? "fixed" : "absolute"
                        });
                        dom("._pendo-guide-arrow_,._pendo-guide-arrow-border_", d).remove(), buildArrowDimensions(s, a, {
                            width: 1 / 0,
                            height: 1 / 0
                        }), buildAndAppendArrow(d[0], s), d.find("._pendo-guide-container_").removeClass("top left bottom right").addClass(s.arrowPosition)
                    }
                }, this.toggle = toggleLauncher, this
            }

            function Onboarding() {
                var e = this;
                if (e.data && e.data.onboarding) {
                    var t = e.onboarding = e.onboarding || {};
                    e.before("update", function (n) {
                        var i = _.filter(n, isOB), r = _.filter(i, function (t) {
                            return "complete" == e.guideStatus(t)
                        }), o = t.total = i.length;
                        t.percentComplete = o > 0 ? Math.round(r.length / o * 100) : 0;
                        var a = dom("._pendo-launcher_,._pendo-launcher-badge_");
                        o ? (a.addClass("onboarding"), a.addClass("_pendo-launcher-onboarding_")) : (a.removeClass("onboarding"), a.removeClass("_pendo-launcher-onboarding_"))
                    }), e.getOnboardingState = function (e) {
                        return e.isComplete() ? "complete" : e.isInProgress() ? "in-progress" : e.isNotStarted() ? "not-started" : null
                    }
                }
                return e
            }

            function WhatsNewList() {
                function e(e, i) {
                    var r = t(e, i);
                    return 0 === r ? n(e, i) : r
                }

                function t(e, t) {
                    var n = e.showsAfter || e.publishedAt || 0, i = t.showsAfter || t.publishedAt || 0;
                    return i - n
                }

                function n(e, t) {
                    var n = e.name.toLowerCase(), i = t.name.toLowerCase();
                    return n > i ? 1 : i > n ? -1 : 0
                }

                var i = this, r = dom("<div>").addClass("_pendo-launcher-whatsnew-count_");
                return i.data && i.data.whatsnew && i.data.whatsnew.enabled && (i.before("updateLauncherContent", function (t) {
                    var n = _.filter(t, function (e) {
                        return e.isWhatsNew()
                    });
                    n.sort(e), i.data.whatsnew.total = n.length, i.data.whatsnew.guides = n
                }), i.after("update", function (e) {
                    var t = i.data.whatsnew.guides;
                    _.each(t, function (e) {
                        e.show()
                    }), _.find(t, function (e) {
                        return e.isReady() ? void e.addToLauncher() : !0
                    });
                    var n = _.filter(t, function (e) {
                        return "active" !== e.steps[0].seenState
                    }).length;
                    n !== i.data.whatsnew.unseenCount && (r.html(n).css({display: n ? "" : "none"}), i.data.whatsnew.unseenCount = n, dom("span._pendo-launcher-whatsnew-count_").text(i.data.whatsnew.unseenCount))
                }), i.after("render", function () {
                    isLauncherOnElement() ? r.appendTo(this.data.launchElement) : (launcherBadge.wrap(), r.appendTo(launcherBadge.element))
                })), i
            }

            function replaceInlineStyles(e) {
                return _.isString(e) && (e = e.replace(/\s+(style)=/gi, " pendo-style=")), e
            }

            function upgradeLauncher(e, t) {
                var n = e && e.data, i = _.filter(t, function (e) {
                    var t = _.first(e.steps);
                    return t && "launcher" === t.type
                }), r = _.first(_.sortBy(i, function (e) {
                    return -e.lastUpdatedAt
                }));
                if (r && n) {
                    var o = _.first(r.steps);
                    _.extend(n, _.pick(o, "contentUrl", "contentUrlCss", "contentUrlJs"), o.attributes), _.defaults(n, {
                        whatsnew: {},
                        knowledgebase: {}
                    }), n.id = o.guideId + o.id
                }
                return e
            }

            function loadLauncherContent(e) {
                var t = e && e.data || {};
                return ConfigReader.get("preventCodeInjection") === !0 ? q.resolve() : t.contentUrlJs || t.contentUrl ? ContentVerifier.verify(t).then(function () {
                    return ContentLoader.load(t)
                }).then(function (n) {
                    return t.template = n.content, _.extend(e, n)
                }) : q.resolve()
            }

            function fixContentHostUrl(e, t) {
                var n = ConfigReader.getLocalConfig("contentHost");
                return n ? (e = e.replace(/^pendo-static-\d+\.storage\.googleapis\.com$/, n).replace(/^pendo-\w+-static\.storage\.googleapis\.com$/, n).replace(/^cdn\.pendo\.io$/, n), e = e.replace(/^https?:/, "").replace(/^\/\//, ""), /\./.test(e) || /^localhost/.test(e) ? e : /^\//.test(e) ? t.host + e : e) : e
            }

            function createLauncher(e, t) {
                if (!isPreventLauncher) {
                    e.contentHostUrl && (e.contentHostUrl = fixContentHostUrl(e.contentHostUrl, location)), launcherElement = new LauncherElement(e);
                    var n = Launcher.create(pendo$1.guideWidget);
                    return _.isFunction(n.template) || (n.template = e.template ? _.template(e.template) : defaultLauncherTemplate), n.render(), n.position(launcherElement.getLauncherTarget()), t && n.toggle(), n
                }
            }

            function updateLauncherContent(e) {
                var t = pendo$1.guideWidget, n = t.template || defaultLauncherTemplate, i = getLauncherContext(e),
                    r = dom("<div>").html(replaceInlineStyles(n(i))), o = r.find("._pendo-launcher-guide-listing_"),
                    a = r.find("._pendo-launcher-footer_").html(),
                    s = r.find("._pendo-launcher-search-results_").html();
                dom("._pendo-launcher_ ._pendo-launcher-guide-listing_").each(function (e, t) {
                    dom(e).html(o.eq(t).html())
                }), dom("._pendo-launcher_ ._pendo-launcher-footer_").html(a), dom("._pendo-launcher_ ._pendo-launcher-search-results_").html(s)
            }

            function removeCountBadge() {
                dom("._pendo-launcher-whatsnew-count_").remove()
            }

            function debuggerExports() {
                return {
                    store: store,
                    getEventCache: function () {
                        return [].concat(eventCache)
                    },
                    getAllGuides: function () {
                        return [].concat(getActiveGuides())
                    },
                    getAutoGuides: function () {
                        return AutoDisplay.sortAndFilter(getActiveGuides(), pendo$1.autoOrdering)
                    },
                    getBadgeGuides: function () {
                        return _.filter(getActiveGuides(), isBadge)
                    },
                    getLauncherGuides: function () {
                        return _.filter(getActiveGuides(), isLauncher)
                    },
                    getEventHistory: function () {
                        return []
                    },
                    getOriginalOptions: function () {
                        return ConfigReader.getOriginalOptions()
                    },
                    setActiveGuides: setActiveGuides,
                    getBody: dom.getBody,
                    isMobileUserAgent: isMobileUserAgent,
                    areGuidesDelayed: areGuidesDelayed,
                    doesElementMatchContainsRules: doesElementMatchContainsRules,
                    getMetadata: getMetadata,
                    isStagingServer: isStagingServer,
                    AutoDisplay: AutoDisplay,
                    isLeader: isLeader
                }
            }

            function isDebuggingEnabled(e) {
                e = e || !1;
                var t = "true" === agentStorage.read("debug-enabled", !0);
                return e ? t : t ? "Yes" : "No"
            }

            function startDebuggingModuleIfEnabled() {
                if (isDebuggingEnabled(!0)) {
                    addDebuggingFunctions();
                    var e = !isProdAgent() && ConfigReader.get("forceParentDesigner");
                    (!detectMaster() || e) && loadResource(getDebuggerAssetUrl(), function () {
                        log("Debug module loaded")
                    })
                }
            }

            function addDebuggingFunctions() {
                debugging || (debugging = debuggerExports()), pendo$1.debugging = debugging
            }

            function enableDebugging(e) {
                return isDebuggingEnabled(!0) ? e ? debugging : "debugging already enabled" : (agentStorage.write("debug-enabled", "true", null, !0), startDebuggingModuleIfEnabled(), e ? debugging : "debugging enabled")
            }

            function disableDebugging() {
                return isDebuggingEnabled(!0) ? (agentStorage.write("debug-enabled", "false", null, !0), pendo$1.debugging = null, delete pendo$1.debugging, "debugging disabled") : "debugging already disabled"
            }

            function debug(e) {
                log(e, "debug")
            }

            function initLogging() {
                activeContexts = getDefaultActiveContexts(), logOverride = getDefaultLogOverride(ENV)
            }

            function logError() {
                canWeLog("error") && console.error.apply(console, arguments)
            }

            function startPoller(e, t) {
                !function n() {
                    _.map(pollFns, function (e) {
                        e()
                    }), pollTimeout = t(n, e)
                }()
            }

            function fireUrlChange() {
                var e = url();
                lastBrowserUrl != e && (lastBrowserUrl = e, _.map(urlChangeListeners, function (e) {
                    e(url())
                }))
            }

            function sanitizeUrl(e) {
                var t = ConfigReader.get("sanitizeUrl");
                return _.isFunction(t) ? t(e) : e
            }

            function annotateUrl(e) {
                e = e || getWindowLocation().href;
                var t = ConfigReader.get("annotateUrl");
                if (t) {
                    if (_.isFunction(t)) {
                        var n = t();
                        if (!n || !_.isObject(n) && !_.isArray(n)) return e;
                        var i = n.exclude, r = n.include, o = n.fragment;
                        return delete n.fragment, (i && _.isArray(i) || r && (_.isArray(r) || _.isObject(r))) && (i && (e = adjustUrl(e, null, i, !0)), n = r || {}), ajax.urlFor(e, n, o)
                    }
                    log("customer-provided `annotateUrl` must be of type: function")
                }
                return e
            }

            function parseQueryString(e) {
                if (!e) return "";
                var t = e.indexOf("?");
                if (0 > t) return "";
                var n = e.indexOf("#");
                return 0 > n ? e.substring(t) : t > n ? "" : e.substring(t, n)
            }

            function adjustUrl(e, t, n, i) {
                e = e || url(), t = t || parseQueryString(e).substring(1);
                var r, o;
                r = e.indexOf(t), o = r + t.length;
                var a = e.substring(0, r), s = e.substring(o);
                return _.isArray(n) && (t = adjustQueryStringParams(t, n, i)), t.length || "?" !== a.charAt(a.length - 1) || (a = a.substr(0, a.length - 1)), a + t + s
            }

            function loadGlobalScript(e) {
                var t = q.defer();
                return loadResource(e, function () {
                    t.resolve()
                }), t.promise
            }

            function validateGlobalScript(e, t) {
                return _.size(pendoDotEvents._handlers.validateGlobalScript) > 0 ? ajax.get(t).then(function (e) {
                    return pendoDotEvents.validateGlobalScript(e.data)
                }).then(function () {
                    return e(t)
                }) : e(t)
            }

            function ignoreEmptyGlobalScript(e, t) {
                return t ? e(t) : q.resolve()
            }

            function connectChannelToStore(e, t) {
                function n(e) {
                    try {
                        if (!e.action) return;
                        if (i) return;
                        var n = e.agentInstallType === EXTENSION_INSTALL_TYPE,
                            r = t.getters["frames/inExtensionLeadershipMode"](), o = n || r,
                            a = e.apiKey === pendo$1.apiKey;
                        if (!a && !o) return;
                        if (!/^frames\//.test(e.action)) return;
                        t.dispatch(e.action, e)
                    } catch (s) {
                        writeException(s, "ERROR in cross frame channel")
                    }
                }

                var i = !1;
                return e.addEventListener("message", function (e) {
                    n(e.data), t.state.guideUpdate.useObserver && t.dispatch("guideUpdate/documentChanged")
                }), {
                    postMessage: function (t) {
                        if (!i) {
                            var r = _.extend({apiKey: pendo$1.apiKey, agentInstallType: getInstallType()}, t);
                            e.postMessage(r), setTimeout(function () {
                                n(r)
                            }, 0)
                        }
                    }, close: function () {
                        i = !0, _.isFunction(e.close) && e.close()
                    }
                }
            }

            function tryParseJson(e) {
                if (!_.isString(e)) return e;
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }

            function TopFrameRelay(e, t, n) {
                this.init(e, t, n)
            }

            function createSingletonMessageHandler(e, t) {
                function n(e) {
                    (!r || t(e.origin)) && _.each(i, function (t) {
                        _.isFunction(t) && t(e)
                    })
                }

                var i = [], r = !1;
                return {
                    targetOrigin: function () {
                        return r ? location.origin : "*"
                    }, secure: function (e) {
                        r = e
                    }, addEventListener: function (t) {
                        0 === i.length && e.addEventListener("message", n), i.push(t)
                    }, removeEventListener: function (t) {
                        var r = i.indexOf(t);
                        r >= 0 && i.splice(r, 1), 0 === i.length && e.removeEventListener("message", n)
                    }
                }
            }

            function createCrossFrameChannel(e) {
                if (!sniffer.addEventListener) return {addEventListener: _.noop, postMessage: _.noop, close: _.noop};
                var t = !!window.__pendoExtensions, n = ConfigReader.get("preferBroadcastChannel") && !t;
                if (n && _.isFunction(window.BroadcastChannel)) {
                    e.commit("frames/setChannelType", "BroadcastChannel");
                    var i = new BroadcastChannel("pendo");
                    if (i && _.isFunction(i.postMessage)) return i
                }
                return e.commit("frames/setChannelType", "TopFrameRelay"), new TopFrameRelay(e, window, SingletonMessageHandler)
            }

            function getAssetHost() {
                var e = ConfigReader.getHostedConfig("contentHost"), t = getProtocol() + "//";
                return e ? t + e : ConfigReader.getLocalConfig("contentHost", t + ASSET_HOST)
            }

            function getDefaultCssUrl() {
                var e = getAssetHost(), t = ConfigReader.get("guideCssAssetPath");
                return t ? t : /local\.pendo\.io/.test(e) ? e + "/dist/guide.css" : e + "/agent/releases/" + PACKAGE_VERSION + "/guide.css"
            }

            function getDebuggerAssetUrl() {
                var e = getAssetHost();
                return /local\.pendo\.io/.test(e) ? e + "/dist/pendo.debugger.min.js" : e + "/agent/releases/" + PACKAGE_VERSION + "/pendo.debugger.min.js"
            }

            function getPreviewModeAssetUrl() {
                var e = getAssetHost(), t = ConfigReader.get("previewModeAssetPath");
                return t ? t : /local\.pendo\.io/.test(e) ? e + "/dist/pendo.preview.min.js" : e + "/agent/releases/" + PACKAGE_VERSION + "/pendo.preview.min.js"
            }

            function getActiveGuides() {
                return activeGuides
            }

            function setActiveGuides(e) {
                return _.isArray(e) ? (activeGuides = e, void Events.guideListChanged.trigger({guideIds: _.pluck(e, "id")})) : void log("bad guide array iput to `setActiveGuides`")
            }

            function getGuideSeenTimeoutLength() {
                return ConfigReader.get("guideSeenTimeoutLength") || DEFAULT_GUIDE_SEEN_TIMEOUT_LENGTH
            }

            function setSeenTime(e) {
                seenTime = e
            }

            function getSeenTime() {
                return seenTime
            }

            function hideGuides(e) {
                _.each(getActiveGuides(), function (t) {
                    _.isFunction(t.isShown) && t.isShown() && t.hide(e)
                })
            }

            function checkLockedStep(e) {
                return e.isLocked() ? e.elements && e.elements.length ? (writeErrorPOST('guide "' + e.guideId + '", step "' + e.id + '" locked and rendered', "pendo.io locked step exception"), !1) : !0 : !1
            }

            function isDismissedUntilReload(e) {
                return e && e.attributes && e.attributes.stayHidden;
            }

            function pullContentsFromTargetElement(e) {
                var t = dom(e), n = t.text() || "", i = n.trim().toLowerCase(), r = e.value, o = i || r;
                return o
            }

            function doesElementMatchContainsRules(e, t) {
                for (var n = pullContentsFromTargetElement(e), i = 0; i < t.length; i++) {
                    var r = t[i], o = doesElementContentMatchRule(n, r);
                    if (!o) return !1
                }
                return !0
            }

            function doesElementContentMatchRule(e, t) {
                var n = t.matchType, i = t.matchValue, r = t.dataType, o = e || "";
                if ("number" === r) {
                    var a = getNumberFromText(o);
                    if (null == a) return !1;
                    o = parseFloat(a), i = parseFloat(i);
                    var s = isNaN(o) || isNaN(i);
                    if (s) return !1
                } else "string" === r && (o = o.toLowerCase(), i = i.toLowerCase());
                return "equal" === n ? o === i : "notEqual" === n ? o !== i : "contains" === n ? String(o).indexOf(i) > -1 : "notContains" === n ? -1 === String(o).indexOf(i) : "greaterThan" === n ? o > i : "lessThan" === n ? i > o : !1
            }

            function getDefaultSeenReason(e) {
                var t = "auto";
                if (!e) return t;
                var n = (e.launchMethod || t).split("-");
                return _.contains(n, t) ? t : n.length ? _.first(n) : t
            }

            function dismissedGuide(e, t, n, i, r) {
                var o = createGuideEvent({
                    type: "guideDismissed",
                    guideId: e,
                    stepId: t,
                    visitorId: n,
                    seen_reason: i,
                    language: r
                });
                stageGuideEvent(o), Events.guideDismissed.trigger(o)
            }

            function snoozedGuide(e, t, n, i, r, o) {
                var a = createGuideEvent({
                    type: "guideSnoozed",
                    guideId: e,
                    stepId: t,
                    visitorId: n,
                    seen_reason: i,
                    language: r,
                    snooze_duration: o
                });
                stageGuideEvent(a), Events.guideSnoozed.trigger(a)
            }

            function advancedGuide(e, t, n, i, r, o, a) {
                var s = {type: "guideAdvanced", guideId: e, stepId: t, visitorId: n, seen_reason: i, language: r};
                a && (s.destinationStepId = a);
                var d = createGuideEvent(s);
                stageGuideEvent(d, null, o), Events.guideAdvanced.trigger(d)
            }

            function timeoutGuide(e, t, n, i, r, o) {
                var a = createGuideEvent({
                    type: "guideTimeout",
                    guideId: e,
                    stepId: t,
                    visitorId: n,
                    seen_reason: i,
                    language: r,
                    guideSeenTimeoutLength: o
                });
                stageGuideEvent(a), Events.guideTimeout.trigger(a)
            }

            function snoozeCanceledGuide(e, t, n, i, r) {
                var o = createGuideEvent({
                    type: "guideSnoozeCanceled",
                    guideId: e,
                    stepId: t,
                    visitorId: n,
                    seen_reason: i,
                    language: r
                });
                stageGuideEvent(o, null, !0), Events.guideSnoozeCancelled.trigger(o)
            }

            function writeThrottlingStateCache(e, t) {
                _writeThrottlingStateCache(e, t);
                var n = {};
                n[t] = e, store.dispatch("frames/changeThrottlingState", n)
            }

            function _writeThrottlingStateCache(e, t) {
                _.contains(_.values(THROTTLING_STATE), t) && (_.isFunction(e.getTime) && (e = e.getTime()), pendo$1[t] = e, agentStorage.write(t, e, GUIDE_STATE_TTL))
            }

            function createGuideEvent(e, t, n, i, r, o) {
                var a = e;
                "object" != typeof a && (a = {
                    type: e,
                    guideId: t,
                    stepId: n,
                    visitorId: i,
                    language: o
                }), r && (a.reason = r), _.isString(a.language) || delete a.language;
                var s = _.extend({
                    guide_id: a.guideId,
                    guide_step_id: a.stepId
                }, _.omit(a, "type", "guideId", "stepId", "visitorId"));
                return EventTracer.addTracerIds({
                    type: a.type,
                    visitor_id: a.visitorId,
                    account_id: get_account_id(),
                    browser_time: (new Date).getTime(),
                    url: pendoDotUrl.externalizeURL(),
                    props: s
                })
            }

            function applyTimerCache(e, t) {
                return t = parseInt(t, 10), isNaN(t) || !_.isNumber(t) ? e : _.isNumber(e) && t > e ? t : _.isNumber(e) ? e : t
            }

            function postLoadGuideJs(e, t, n) {
                return ajax.postJSON(e, t).then(function (e) {
                    var t = findStoredPreviewConfig(localStorage);
                    return _.extend(pendo$1, e.data), t ? previewGuideRequest(t).then(n)["catch"](function () {
                        log("Fail to request guide preview"), n()
                    }) : n()
                })
            }

            function sortGuidesByPriority(e) {
                return _.each(e, function (e, t) {
                    e.attributes || (e.attributes = {}), (isNaN(e.attributes.priority) || !_.isNumber(e.attributes.priority)) && (e.attributes.priority = t)
                }), e.sort(function (e, t) {
                    return t.attributes.priority - e.attributes.priority
                }), e
            }

            function saveGuideShownState(e) {
                var t = _.find(e, function (e) {
                    return _.isFunction(e.isShown) && e.isShown() && !e.isTopLevel
                });
                if (!t) return function () {
                };
                var n = _.chain(t.steps).filter(function (e) {
                    return e.isShown()
                }).indexBy("id").value();
                return function (e) {
                    var i = _.findWhere(e, {id: t.id});
                    i && (get(i, "attributes.doNotResume") || _.each(i.steps, function (e) {
                        var t = n[e.id];
                        t && (e.seenState && "active" !== e.seenState || e.show(t.seenReason))
                    }))
                }
            }

            function loadExternalCss(e, t) {
                var n = document.getElementById(e);
                if (n && n.href && n.href.indexOf(t) >= 0) return q.resolve();
                var i = q.defer();
                dom(n).remove();
                var r = pendo$1.loadResource(t, function () {
                    i.resolve()
                });
                return r.id = e, i.promise
            }

            function waitForGlobalCssToLoad(e, t, n) {
                function i(n) {
                    setTimeout(function () {
                        r(o[0]) ? (o.remove(), s.resolve()) : t() - a > e ? (o.remove(), s.reject()) : i(100)
                    }, n)
                }

                function r(e) {
                    var t = getComputedStyle_safe(e);
                    if (t) return "none" === t.display
                }

                if (!shouldLoadGlobalCSS() || !hasLegacyGuides(activeGuides)) return q.resolve();
                t = t || getNow, n = n || "_pendo-hidden_";
                var o = dom("<div>").addClass(n).css({
                    position: "absolute",
                    bottom: "0px",
                    right: "0px",
                    width: "0px",
                    height: "0px",
                    visibility: "hidden"
                }).appendTo(getGuideAttachPoint()), a = t(), s = q.defer();
                return i(0), s.promise
            }

            function hasLegacyGuides(e, t) {
                return t && t.designer ? !0 : _.any(e, function (e) {
                    return _.any(e.steps, function (e) {
                        return !(e.domUrl || e.domJsonpUrl)
                    })
                })
            }

            function loadGuideCss() {
                var e = [];
                if (!shouldLoadGlobalCSS()) return q.resolve();
                hasLegacyGuides(activeGuides, pendo$1) && e.push(loadExternalCss("_pendo-default-css_", getDefaultCssUrl()));
                var t = pendo$1.guideWidget || {}, n = t.data || {}, i = n.guideCssUrl, r = "_pendo-css_";
                return i ? e.push(loadExternalCss(r, replaceWithContentHost(i))) : dom("#" + r).remove(), q.all(e)
            }

            function createGuideEventQueue(e) {
                function t(e, t) {
                    return pipeline(filterAnalyticsDisabled, splitSiloOnFieldChange("visitor_id"), splitSiloOnFieldChange("props.guide_id"), splitSiloOnFieldChange("props.source"), compressSilo, t(e), errorLogger(e))
                }

                var n = e.cache, i = t(e, defaultSendEvent), r = t(e, reliableSendEventForUnload), o = siloReducer(n);
                return {
                    push: function (e) {
                        o(e, _.noop)
                    }, clear: function () {
                        n.length = 0
                    }, flush: function (e) {
                        if (0 !== n.length) {
                            var t = n.slice();
                            n.length = 0;
                            var o = (e || {}).guaranteed ? r : i;
                            o(t, _.noop)
                        }
                    }
                }
            }

            function getGuideAttachPoint() {
                var e = getGuideAttachPoint.attachPoint;
                if (null == e) {
                    var t = ConfigReader.get("guides.attachPoint");
                    if (t) {
                        try {
                            e = ShadowSizzle(t)[0]
                        } catch (n) {
                            log('Error finding guide attach point "' + t + '"')
                        }
                        e || (e = document.createElement("div"))
                    } else e = !1;
                    getGuideAttachPoint.attachPoint = e
                }
                return e || getBody()
            }

            function listenForTabIdChange() {
                EventTracer.tabIdChanged(function () {
                    var e = EventTracer.getTabId();
                    store.commit("frames/setTabId", e), store.dispatch("frames/join")
                })
            }

            function updateMasterGuideList(e) {
                var t = _.indexBy(_.filter(getActiveGuides(), function (e) {
                    return !e.isFrameProxy
                }), "id"), n = _.chain(e.frames).filter(function (t) {
                    return t.id !== e.frameId
                }).map(function (e) {
                    return _.toArray(get(e, "guides", []))
                }).flatten(!0).unique("id").filter(function (e) {
                    return !t[e.id]
                }).map(function (e) {
                    return _.extend(JSON.parse(JSON.stringify(e)), {isFrameProxy: !0})
                }).map(GuideFactory).value(), i = _.toArray(t).concat(n);
                sortGuidesByPriority(i), initializeResourceCenter(i), setActiveGuides(i), e.guidesLoaded && 0 === _.size(get(e, "frames." + e.frameId + ".guides", [])) && startGuides()
            }

            function guidePassiveRenderer(e) {
                if (e = e.filter(function (e) {
                    return !e.isFrameProxy
                }), e.length) {
                    placeBadgesProc(e), DOMActivation.update(e), isGuideShown() && guideShowingProc(), hideLauncher();
                    var t = getLauncherGuideList(e), n = computeLauncherHash(t);
                    n !== lastLauncherHash && store.dispatch("frames/changeGuideList", e), lastLauncherHash = n, store.dispatch("frames/updateFrameVisibility"), prefetchBadgeActivatedGuideContent(activeGuides, badgesShown), resourceCenterProc(BuildingBlockResourceCenter.getResourceCenter())
                }
            }

            function isLeader() {
                return store.getters["frames/isLeader"]()
            }

            function IntervalJob(e, t) {
                this.state = {duration: e, isPaused: !1, handle: null, cb: t}
            }

            function UrlAttrTransform(e, t, n) {
                var i = {
                    search: ["AllowOnlyKeys", "ExcludeKeys", "AddTo", "Replace", "Clear"],
                    hash: ["Replace", "Clear"],
                    pathname: ["Replace"],
                    hostname: ["Replace"],
                    href: ["Replace", "ForceSecure"],
                    protocol: ["ForceSecure"]
                };
                if (_.isObject(e) && (t = e.action, n = e.data, e = e.attr), !i[e]) throw new Error("Invalid URL attribute type: " + e);
                if (!_.contains(i[e], t)) throw new Error("Invalid transform (" + t + ") for attribute (" + e + ")");
                this.attr = e, this.action = t, this.data = n
            }

            function isURL(e) {
                return e instanceof URL$1 || e instanceof HTMLAnchorElement
            }

            function LocationPublic(e) {
                if ("function" == typeof LocationPublic[e]) {
                    var t = _.toArray(arguments).slice(1);
                    return LocationPublic[e].apply(LocationPublic, t)
                }
            }

            function createStore() {
                return flux({
                    modules: {
                        config: ConfigModule,
                        errorLog: ErrorLogModule,
                        frames: FramesModule,
                        guideUpdate: GuideUpdateModule,
                        guideState: GuideStateModule,
                        healthCheck: HealthCheckModule,
                        location: LocationModule,
                        monitoring: MonitoringModule,
                        metadata: MetadataModule
                    }
                })
            }

            function getDataHost() {
                var e = ConfigReader.getHostedConfig("dataHost");
                return e ? "https://" + e : ConfigReader.getLocalConfig("dataHost", SERVER)
            }

            function initDataHost() {
                HOST = getDataHost()
            }

            function exportDataHost(e) {
                e.HOST = HOST
            }

            function getAllApiKeys() {
                return _.compact([pendo$1.apiKey].concat(pendo$1.additionalApiKeys))
            }

            function writeErrorPOST(e) {
                try {
                    var t, n = HOST + "/data/errorlog?apiKey=" + pendo$1.apiKey,
                        i = {error: e, version: "v" + VERSION, visitorId: get_visitor_id()};
                    return t = fetchKeepalive.supported() ? fetch(n, {
                        method: "POST",
                        keepalive: !0,
                        body: JSON.stringify(i),
                        headers: {"Content-Type": "application/json"}
                    }) : ajax.postJSON(n, i), t.then(function () {
                        log("successfully wrote error")
                    }, function (e) {
                        log("error writing error:" + e)
                    })
                } catch (r) {
                    return log("Failed to write error to server using POST endpoint: " + r), writeMessage("Failed to write error to server using POST endpoint: " + r)
                }
            }

            function writeImgTag(e) {
                if (!isUnlocked()) return q.resolve();
                if (isInPreviewMode()) return q.resolve();
                var t = q.defer(), n = new Image;
                return attachEventInternal(n, "load", t.resolve), attachEventInternal(n, "error", t.reject), n.src = e, t.promise
            }

            function fetchKeepalive(e) {
                return fetch(e, {method: "GET", keepalive: !0})
            }

            function sendBeacon(e, t) {
                return navigator.sendBeacon(e, new Blob([JSON.stringify(t)], {type: "text/plain"}))
            }

            function getHashFromContentUrl(e) {
                var t = parseContentUrl(e);
                return t ? t.filename : void 0
            }

            function parseContentUrl(e) {
                if (_.isString(e)) {
                    var t = parseQueryString(e).substring(1), n = t && t.length ? queryStringToObject(t) : {},
                        i = _.last(_.first(e.split("?")).split("/")), r = i.split(".");
                    return {filename: _.first(r), extension: r.slice(1).join("."), query: n}
                }
            }

            function designerExports() {
                return {
                    dom: dom,
                    placeBadge: placeBadge,
                    showPreview: showPreview,
                    stopGuides: stopGuides,
                    removeAllBadges: removeAllBadges,
                    _: _,
                    sizzle: ShadowSizzle,
                    tellMaster: tellMaster,
                    tell: tellMaster,
                    log: log,
                    attachEvent: attachEvent,
                    createLauncher: createLauncher,
                    removeLauncher: removeLauncher,
                    addGuideToLauncher: addGuideToLauncher,
                    updateLauncherContent: updateLauncherContent,
                    DEFAULT_TIMER_LENGTH: DEFAULT_TIMER_LENGTH,
                    getOffsetPosition: getOffsetPosition,
                    getScreenDimensions: getScreenDimensions,
                    registerMessageHandler: registerMessageHandler,
                    whenLoadedCall: whenLoadedCall,
                    loadResource: loadResource,
                    loadGuideCss: loadGuideCss,
                    GuideFactory: GuideFactory,
                    GuideStep: GuideStep,
                    extractElementTreeContext: extractElementTreeContext,
                    previewGuideFromJSON: BuildingBlockGuides.previewGuideFromJSON,
                    hidePreviewedGuide: BuildingBlockGuides.hidePreviewedGuide,
                    shadowAPI: shadowAPI,
                    getTarget: getTarget,
                    pullContentsFromTargetElement: pullContentsFromTargetElement,
                    doesElementMatchContainsRules: doesElementMatchContainsRules,
                    doesElementContentMatchRule: doesElementContentMatchRule
                }
            }

            function launchDesignerListener(e) {
                if (e && e.data && e.data.token && e.data.type === pendoDesignerLaunchKey + "::launch") {
                    var t = e.data.token, n = t.DADesigner ? "da-designer" : "in-app-designer", i = {
                        lookaside: t.baseUrl,
                        host: t.host,
                        target: t.target || "latest",
                        DADesigner: !!t.DADesigner,
                        gcsBucket: t.gcsBucket || n
                    };
                    DesignerV2.launchInAppDesigner(i)
                }
            }

            function getTrustedOriginPattern(e, t) {
                return new RegExp("^(" + _.chain(e).unique().map(function (e) {
                    return e = e.replace(/\./g, "\\."), t || (e = e.replace(/^https?:/, "https?:")), e
                }).value().join("|") + ")$")
            }

            function isTrustedOriginOld(e) {
                return trustedOrigin || (trustedOrigin = function () {
                    var e = [HOST, "https://demo.pendo-dev.com", SERVER, "https://([a-zA-Z0-9-]+-dot-)?pendo-(dev|test|io|" + ENV + ").appspot.com"];
                    return isProdAgent() || e.push("https://local.pendo.io:\\d{4}"), getTrustedOriginPattern(e, ConfigReader.get("requireHTTPS"))
                }()), trustedOrigin.test(e)
            }

            function isTrustedOrigin2(e) {
                if (!e) return !1;
                if (e === window.location.origin) return !0;
                if (e === getDataHost()) return !0;
                if (e === getAssetHost()) return !0;
                var t = [/^https:\/\/(app|via|adopt)(\.eu|\.us)?\.pendo\.io$/, /^https:\/\/(us1\.|gov\.)?(app|via)\.pendo\.io$/, /^https:\/\/([0-9]{8}t[0-9]{4}-dot-)pendo-(io|eu|us1)\.appspot\.com$/, /^https:\/\/hotfix-(ops|app)-([0-9]+-dot-)pendo-(io|eu|us1)\.appspot\.com$/, /^https:\/\/pendo-(io|eu|us1)-static\.storage\.googleapis\.com$/];
                _.contains(["prod", "prod-eu", "prod-us1"], ENV) || (t = t.concat([/^https:\/\/([a-zA-Z0-9-]+\.)*pendo-dev\.com$/, /^https:\/\/([a-zA-Z0-9-]+-dot-)?pendo-(dev|test|io|gov-prod|batman|magic|atlas|wildlings|ionchef|mobile-guides|mobile-hummus|mobile-plat|eu|eu-dev|apollo|security|perfserf|freeze|armada|voc|calypso|dap|scrum-ops|ml|helix)\.appspot\.com$/, /^https:\/\/via\.pendo\.local:\d{4}$/, /^https:\/\/adopt\.pendo\.local:\d{4}$/, /^https:\/\/local\.pendo\.io:\d{4}$/, new RegExp("^https://pendo-" + ENV + "-static\\.storage\\.googleapis\\.com$")]));
                var n = ConfigReader.get("adoptHost");
                if (n) {
                    var i = "https://" + n;
                    if (e === i) return !0
                }
                return _.contains(ConfigReader.get("allowedOriginServers", []), e) ? !0 : _.any(t, function (t) {
                    return t.test(e)
                })
            }

            function messageOriginTester2(e) {
                return function (t) {
                    return t && isTrustedOrigin2(t.origin) ? e.apply(this, arguments) : void 0
                }
            }

            function validateModuleURL(e) {
                var t = {"/js/lib/ckeditor/ckeditor.js": 1};
                _.each(["depres.js", "tether.js", "sortable.js", "selection.js", "selection.css", "html2canvas.js"], function (e) {
                    t["/modules/pendo.designer/plugins/" + e] = 1
                }), e = e.replace(/^https:\/\//, "");
                var n = e.substring(0, e.indexOf("/")), i = e.substring(e.indexOf("/"));
                return isTrustedOriginOld("https://" + n) && !!t[i]
            }

            function ensureHttps(e) {
                return e.replace(/^[a-zA-Z-:]*\/\//, "https://")
            }

            function startPreviewMode(e) {
                var t = ConfigReader.get("forceParentDesigner");
                if (detectMaster()) {
                    if (isProdAgent()) return;
                    if (!t) return
                }
                var n = findStoredPreviewConfig(pendoLocalStorage);
                if (n) {
                    var i = document.getElementById(pendoPreview);
                    return i ? !0 : (pendoLocalStorage && _.isFunction(pendoLocalStorage.setItem) && pendoLocalStorage.setItem(pendoPreview, JSON.stringify(_.extend(n, {apiKey: pendo$1.apiKey}))), _.isFunction(e.addEventListener) && e.addEventListener("message", previewMessageHandler), agentStorage.clear(LAST_STEP_ADVANCED_COOKIE), getBody().appendChild(createPreviewBar()), Events.startPreview.trigger(), !0)
                }
            }

            function launchPreviewListener(e) {
                e && e.data && e.data.type === pendoPreview + "::launch" && (pendoLocalStorage.removeItem("current-guide-preview"), pendoLocalStorage.setItem(pendoPreview, JSON.stringify(_.extend({}, e.data.config, {
                    apiKey: pendo$1.apiKey,
                    origin: e.origin
                }))), startPreviewMode(window) && (e.source.postMessage({
                    type: pendoPreview + "::ready",
                    apiKey: pendo$1.apiKey,
                    accountId: pendo$1.accountId
                }, e.origin), forceGuideReload(), store.dispatch("frames/startPreview")))
            }

            function restartPreview(e, t, n, i) {
                hideGuides(), store.commit("healthCheck/resetStepStatus", null, {root: !0}), AsyncContent.reset(), forceGuideReload();
                var r = t[0];
                r && _.each(r.steps, function (e) {
                    e.seenState = null
                }), agentStorage.clear(LAST_STEP_ADVANCED_COOKIE), setPreviewState(null, e);
                var o = findStoredPreviewConfig(e), a = o && e && _.isFunction(e.setItem);
                if (a) {
                    var s = _.findWhere(t, {id: o.guideId});
                    if (s) {
                        var d = {stepId: s.steps[0].id};
                        i && (d.language = i), e.setItem(pendoPreview, JSON.stringify(_.extend(o, d)))
                    }
                }
                var u = preparePreviewLastGuideStepSeen(e, t, n);
                return u
            }

            function resizePreview(e) {
                var t = document.getElementById(pendoPreview);
                t && (t.style.height = e)
            }

            function previewMessageHandler(e) {
                if (e.origin === location.origin) {
                    var t = e.data.type, n = !!e.data.preventWindowClose;
                    if (t === pendoPreview + "::exit") exitPreviewMode({preventWindowClose: n}), store.dispatch("frames/stopPreview", {preventWindowClose: n}); else if (t === pendoPreview + "::restart") {
                        var i = restartPreview(pendoLocalStorage, activeGuides, getLastGuideStepSeen(), e.data.language);
                        store.dispatch("guideState/forceExpire"), store.dispatch("guideState/updateLastGuideStepSeen", i), store.dispatch("frames/restartPreview")
                    } else if (t === pendoPreview + "::resize") resizePreview(e.data.height); else if (t === pendoPreview + "::request-preview-mode-type") {
                        var r = document.getElementById(pendoPreview),
                            o = findStoredDesignerPreviewConfig(pendoLocalStorage);
                        if (!r || !o) return;
                        r.contentWindow.postMessage({
                            mutation: "preview/setPreviewModeType",
                            payload: {previewModeType: o.previewModeType || "NEW_TAB"}
                        }, location.origin)
                    }
                }
            }

            function isInPreviewMode() {
                try {
                    return !!findStoredPreviewConfig(pendoLocalStorage)
                } catch (e) {
                    return !1
                }
            }

            function prepareDesignerPreviewGuide() {
                var e = findStoredDesignerPreviewConfig(pendoLocalStorage);
                e && isInDesignerPreviewMode() && (pendo$1.guides = [e.guide])
            }

            function isInDesignerPreviewMode() {
                var e = findStoredDesignerPreviewConfig(pendoLocalStorage);
                return isInPreviewMode() && !!e
            }

            function setPreviewState(e, t) {
                var n = findStoredPreviewConfig(t);
                n && (n.state = e, t && _.isFunction(t.setItem) && t.setItem(pendoPreview, JSON.stringify(n)))
            }

            function getPreviewState(e) {
                var t = findStoredPreviewConfig(e);
                if (t) return t.state
            }

            function createPreviewBar() {
                var e = document.createElement("iframe");
                e.id = pendoPreview, e.src = "about:blank";
                var t = "70px";
                return setStyles(e, {
                    border: "none",
                    display: "block !important",
                    height: t,
                    left: 0,
                    position: "fixed",
                    right: 0,
                    top: 0,
                    visibility: "visible !important",
                    width: "100%",
                    "z-index": 4e5
                }), e.onload = function () {
                    var t = document.createElement("script");
                    t.src = getPreviewModeAssetUrl(), e.contentDocument.body.appendChild(t)
                }, e
            }

            function preparePreviewGuides(e) {
                var t = findStoredPreviewConfig(pendoLocalStorage);
                return t ? t.isResourceCenter ? formatResourceCenterGuidesForPreview(e, t) : formatNormalGuidesForPreview(e, t) : e
            }

            function formatResourceCenterGuidesForPreview(e, t) {
                var n = BuildingBlockResourceCenter.findResourceCenterHomeView(e), i = _.filter(e, function (e) {
                    return e.id !== n.id
                });
                formatGuideSeenStateForPreviewGuide(n, t.stepId);
                var r = _.map(i, function (e) {
                    return e.launchMethod = "launcher", e
                }), o = [n].concat(r);
                return o
            }

            function formatNormalGuidesForPreview(e, t) {
                var n = _.find(e, function (e) {
                    return e.id === t.guideId
                });
                return "launcher" === n.launchMethod && (n.launchMethod = "auto-launcher"), "api" === n.launchMethod && (n.launchMethod = "auto"), formatGuideSeenStateForPreviewGuide(n, t.stepId), [n]
            }

            function formatGuideSeenStateForPreviewGuide(e, t) {
                for (var n = _.find(e.steps, function (e) {
                    return e.id === t
                }), i = n ? e.steps.indexOf(n) : 0, r = 0; r < e.steps.length; r++) i > r ? (e.steps[r].seenState = "advanced", e.steps[r].seenReason = "continue") : (e.steps[r].seenState = null, e.steps[r].seenReason = null);
                return e
            }

            function preparePreviewLastGuideStepSeen(e, t, n) {
                null == n && (n = {});
                var i = findStoredPreviewConfig(e);
                if (!i) return n;
                var r = _.findWhere(t, {id: i.guideId});
                if (!r) return n;
                if (i.state) return i.state;
                var o = r.launchMethod.indexOf("auto") > -1, a = i.stepId === r.steps[0].id;
                return a && !o ? {} : {guideId: i.guideId, guideStepId: i.stepId, state: "active"}
            }

            function sendPreviewModeFailureMessage(e, t) {
                var n = e.getElementById(pendoPreview);
                n && n.contentWindow.postMessage({
                    mutation: "preview/setGuideLoadError",
                    payload: {guideLoadError: t}
                }, location.origin)
            }

            function updatePreview(e, t, n) {
                if (isInPreviewMode()) {
                    var i = findStoredPreviewConfig(pendoLocalStorage);
                    if (i) {
                        var r = e.getElementById(pendoPreview);
                        if (r && r.contentWindow) {
                            if (!t || !t.length) return void sendPreviewModeFailureMessage(e, {
                                status: 404,
                                data: "Guide not found"
                            });
                            r.contentWindow.postMessage({
                                mutation: "preview/setGuideLoaded",
                                payload: {guideLoaded: !0}
                            }, location.origin);
                            var o = _.find(t, function (e) {
                                return e.id === i.guideId
                            }), a = 0, s = o.steps.length, d = n || {};
                            _.find(o.steps, function (e, t) {
                                return d.guideStepId !== e.id ? !1 : ("dismissed" === d.state || "active" === d.state ? a = t : "advanced" === d.state && d.destinationStepId ? a = _.indexOf(o.steps, _.find(o.steps, function (e) {
                                    return e.id === d.destinationStepId
                                })) : "advanced" === d.state && t === s - 1 && (a = s), !0)
                            });
                            var u = "dismissed" === d.state, c = a >= s - 1, l = u || c, f = c ? s - 1 : a,
                                p = o.steps[f];
                            r.contentWindow.postMessage({
                                mutation: "preview/setHostname",
                                payload: {hostname: SERVER}
                            }, location.origin), r.contentWindow.postMessage({
                                mutation: "preview/setGuidePages",
                                payload: {guidePages: o.previewPages}
                            }, location.origin), r.contentWindow.postMessage({
                                mutation: "preview/setGuideProgress",
                                payload: {
                                    guideName: o.name,
                                    guideAttributes: JSON.stringify(o.attributes),
                                    guideLaunchMethod: o.launchMethod,
                                    guideActivationSelector: DOMActivation.getActivationSelector(o),
                                    isAdoptGuide: o.isTraining,
                                    isResourceCenter: i.isResourceCenter,
                                    stepId: p && p.id,
                                    currentStepIndex: f,
                                    stepCount: s,
                                    elementPathRule: p.elementPathRule,
                                    elementContainsRulesList: p.elementContainsRulesList,
                                    pageId: p.pageId,
                                    completed: l,
                                    languageOptions: get(i, "languageOptions", []),
                                    currentLanguage: i.language
                                }
                            }, location.origin), checkForGuidePreviewError(p, f, r)
                        }
                    }
                }
            }

            function adjustPreviewBarPosition(e) {
                var t = e.getElementById(pendoPreview);
                if (t) {
                    var n = _.first(ShadowSizzle('#pendo-resource-center-container, [id^="pendo-g-"]'));
                    if (n) {
                        var i = getComputedStyle_safe(n);
                        if (i) {
                            var r = {mutation: "preview/setIsPreviewBarTop", payload: {isPreviewBarTop: !1}};
                            "0px" === i.top ? (t.style.top = "auto", t.style.bottom = "0px", t.contentWindow.postMessage(r, location.origin)) : "0px" !== i.bottom && t.style.top || (t.style.top = "0px", t.style.bottom = "auto", r.payload.isPreviewBarTop = !0, t.contentWindow.postMessage(r, location.origin))
                        }
                    }
                }
            }

            function checkForGuidePreviewError(e, t, n) {
                if (e) {
                    var i = [];
                    if (0 === t) {
                        var r = DOMActivation.getActivationSelector(e.getGuide());
                        if (r) {
                            var o = _.first(ShadowSizzle(r));
                            o ? isElementVisible(o) || i.push("ACTIVATION:elementNotVisible") : i.push("ACTIVATION:elementNotFound")
                        }
                    }
                    if (_.isFunction(e.canShowOnPage) && !e.canShowOnPage(getNormalizedUrl()) && i.push("PAGE:pageMismatch"), e.elementPathRule) {
                        var a = _.first(ShadowSizzle(e.elementPathRule));
                        a ? isElementVisible(a) ? e.elementContainsRulesList && !doesElementMatchContainsRules(a, e.elementContainsRulesList) && i.push("ELEMENT:elementContainsRulesDoNotMatch") : i.push("ELEMENT:elementNotVisible") : i.push("ELEMENT:elementNotFound")
                    }
                    n.contentWindow.postMessage({mutation: "preview/setErrors", payload: {errors: i}}, location.origin)
                }
            }

            function exitPreviewMode(e) {
                var t = findStoredDesignerPreviewConfig(pendoLocalStorage), n = !1;
                t && (n = "SAME_TAB" === t.previewModeType);
                var i = pendoLocalStorage.getItem("pendo-navigation-state");
                if (pendoLocalStorage && _.isFunction(pendoLocalStorage.removeItem) && pendoLocalStorage.removeItem(pendoPreview), buffersClearAll(), dom("#" + pendoPreview).remove(), forceGuideReload(), n && i) {
                    pendoLocalStorage.setItem(designerPreview, JSON.stringify(_.extend(t, {isExitBackToDesigner: !0})));
                    try {
                        var r = JSON.parse(i), o = {lookaside: r.baseUrl, preloader: !0, host: r.host};
                        DesignerV2.launchInAppDesigner(o)
                    } catch (a) {
                        pendoLocalStorage.removeItem(designerPreview)
                    }
                } else e && !e.preventWindowClose && window.close()
            }

            function findStoredPreviewConfig(e) {
                try {
                    var t = JSON.parse(e.getItem(pendoPreview));
                    if (t.apiKey === pendo$1.apiKey) return t
                } catch (n) {
                }
            }

            function findStoredDesignerPreviewConfig(e) {
                var t = e.getItem(designerPreview);
                return t ? JSON.parse(t) : void 0
            }

            function getGuideUrl(e) {
                if (e.subscriptionId && e.guideId) {
                    var t = e.isResourceCenter ? "/resourcecenter/" : "/guide/";
                    return "/api/s/" + encodeURIComponent(e.subscriptionId) + t + encodeURIComponent(e.guideId) + "/preview"
                }
            }

            function previewGuideRequest(e) {
                if (!isTrustedOrigin2(e.origin)) return log("Invalid origin, exiting preview"), q.reject("invalid origin");
                var t = getGuideUrl(e);
                if (!t) return log("Invalid guide url, exiting preview"), q.reject("invalid guide url");
                var n = {url: e.origin + t + "?url=" + encodeURIComponent(pendoDotUrl.get()), withCredentials: !0};
                e.headers && (n.headers = e.headers);
                var i = [];
                return ajax(n).then(function (t) {
                    var n = t.data;
                    return isInDesignerPreviewMode() || (e.isResourceCenter ? i = n.guide : (n.guide.previewPages = n.pages, i = [n.guide])), e.language && e.language !== get(i, "[0].authoredLanguage") && updateStepUrlsForLanguage(i, e.language.value), e.watermarkConfig && (n.guide.isTraining = !0), pendo$1.guideWidget = {
                        enabled: !1,
                        data: {guideCssUrl: n.guideCssUrl}
                    }, pendo$1.guideCssUrl = n.guideCssUrl, pendo$1.normalizedUrl = n.normalizedUrl, pendo$1.throttling = undefined, n.guide
                }).then(function (t) {
                    if (e.watermarkConfig) {
                        var n = JSON.parse(JSON.stringify(e)), i = Object.assign(n, e.watermarkConfig);
                        return watermarkGuideRequest(i)
                    }
                    return t
                }).then(function (e) {
                    e.attributes && e.attributes.isWatermark && i.push(e), isInDesignerPreviewMode() || (pendo$1.guides = i)
                })
            }

            function previewGuideLoaderWrapper(e, t) {
                return {
                    endpoint: e.endpoint, load: function (n, i) {
                        var r = findStoredPreviewConfig(t);
                        return r && getGuideUrl(r) ? previewGuideRequest(r).then(i) : e.load(n, i)
                    }
                }
            }

            function updateStepUrlsForLanguage(e, t) {
                _.forEach(e, function (e) {
                    _.forEach(e.steps, function (n) {
                        var i = get(e, "translationStates." + t + ".stepTranslations." + n.id + ".domHash"),
                            r = get(e, "translationStates." + t + ".stepTranslations." + n.id + ".domJsonpHash"),
                            o = get(e, "translationStates." + t + ".stepTranslations." + n.id + ".translationHash");
                        i && r && o && (n.domUrl = n.domUrl.replace(".dom.json", "-" + i + "-" + t + ".dom.json"), n.domJsonpUrl = n.domJsonpUrl.replace(".dom.jsonp", "-" + r + "-" + t + ".dom.jsonp"), n.buildingBlocksUrl = n.buildingBlocksUrl.replace(".buildingBlocks.json", "-" + o + "-" + t + ".buildingBlocks.json"))
                    })
                })
            }

            function setCookieDomain(e, t) {
                if (!e) return void (cookieDomain = e);
                if (_.isString(e)) {
                    t = t.replace(/:\d+$/, ""), e = e.replace(/^\./, "");
                    var n = new RegExp("\\." + e.replace(/\./g, "\\.") + "$"),
                        i = new RegExp("^" + e.replace(/\./g, "\\.") + "$");
                    (n.test(t) || i.test(t)) && (cookieDomain = "." + e)
                }
            }

            function hasCookieDomain() {
                return !!cookieDomain
            }

            function clearCookie(e) {
                return hasCookieDomain() ? void setCookie(e, "") : void (document.cookie = e + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT")
            }

            function isStringWhiteSpace(e) {
                return e && "string" == typeof e && 0 === trim.call(e).length
            }

            function clearSession() {
                removeIdentificationCookies(["visitorId", "accountId", OPTIONS_HASH_KEY_NAME, LAST_STEP_ADVANCED_COOKIE]), delete pendo$1.visitorId, delete pendo$1.accountId, store.commit("metadata/reset"), get_visitor_id(), queueGuideReload()
            }

            function getPendoCore() {
                var e = ConfigReader.get("pendoCore");
                return "undefined" == typeof e ? !0 : e
            }

            function shouldInitializeFeedback(e) {
                return isFeedbackOn() && !isDisableFeedbackAutoInitOn() && !isAnonymousVisitor(e) && !ConfigReader.get("disableFeedback", !1)
            }

            function shouldReloadGuides(e, t, n, i) {
                return e && pendo$1.apiKey ? areGuidesDisabled() && "true" !== pendoLocalStorage.getItem("pendo-designer-mode") ? !1 : e !== reloadGuides.lastUrl || t !== reloadGuides.lastVisitorId || n !== reloadGuides.lastAccountId || i !== reloadGuides.lastMetadataHash : !1
            }

            function reloadGuides(e) {
                var t = get_visitor_id(), n = get_account_id();
                e = e || pendoDotUrl.get(), shouldReloadGuides(e, t, n, metadataHash) && (reloadGuides.lastUrl = e, reloadGuides.lastVisitorId = t, reloadGuides.lastAccountId = n, reloadGuides.lastMetadataHash = metadataHash, loadGuides(pendo$1.apiKey, t, e)["catch"](_.noop))
            }

            function forceGuideReload() {
                reloadGuides.lastUrl = null, queueGuideReload()
            }

            function getApiKey(e) {
                var t = ConfigReader.get("apiKey");
                return t ? t : e.apiKey ? e.apiKey : void 0
            }

            function getAdditionalApiKeys(e) {
                var t, n = ConfigReader.get("additionalApiKeys");
                return t = n ? n : e.additionalApiKeys ? e.additionalApiKeys : [], t && !_.isArray(t) && (t = [t]), t
            }

            function registerEventHandlers(e) {
                _.each(e.events, function (e, t) {
                    pendoDotEvents[t] && pendoDotEvents[t](e)
                })
            }

            function launchDesignerOrPreview(e) {
                _.find([_.partial(DesignerV2.launchOnToken, window.location), _.partial(startPreviewMode, window)], function (e) {
                    return e()
                }), (e.enableDesignerKeyboardShortcut || !ConfigReader.get("disableDesignerKeyboardShortcut")) && P2AutoLaunch.listen()
            }

            function localStorageNavigation(e) {
                if (!e.ignoreLocalStorageNavigation) {
                    var t = pendoLocalStorage.getItem("pendo-navigation-state"), n = isInDesignerPreviewMode();
                    if (t && !n && store.getters["frames/isLeader"]()) try {
                        var i = JSON.parse(t), r = i.isDADesigner ? "da-designer" : "in-app-designer", o = {
                            lookaside: i.baseUrl,
                            preloader: !0,
                            host: i.host,
                            gcsBucket: i.gcsBucket || r,
                            DADesigner: i.isDADesigner
                        };
                        DesignerV2.launchInAppDesigner(o)
                    } catch (a) {
                    }
                }
            }

            function announceFrameToDesignerPlugin() {
                window.parent && window.parent.postMessage && "function" == typeof window.parent.postMessage && window.parent.postMessage({
                    type: "announce-frame-initialized",
                    destination: "pendo-designer-agent",
                    source: "pendo-designer-agent",
                    localStorageRouter: !0
                }, SingletonMessageHandler.targetOrigin())
            }

            function isCallQueueEmpty(e) {
                return !_.isArray(e) || _.isEmpty(e)
            }

            function findQueuedInitialize(e) {
                if (!isCallQueueEmpty(e)) {
                    var t = _.find(e, function (e) {
                        return "initialize" === e[0]
                    });
                    return t
                }
            }

            function flushCallQueue(e) {
                if (e || (e = pendo$1), isCallQueueEmpty(e._q)) return q.resolve();
                var t = !!findQueuedInitialize(e._q);
                if (!isReady(e) && !t) return q.resolve();
                var n = e._q.splice(0, e._q.length), i = _.reduce(n, function (t, n) {
                    if (!_.isArray(n)) return t;
                    var i = e[n.shift()];
                    return _.isFunction(i) ? t.then(function () {
                        return i.apply(e, n)
                    }) : t
                }, q.resolve());
                return i.then(flushCallQueue)
            }

            function autoInitialize() {
                return isReady() ? void log("already running") : (window.pendo_options && initialize(window.pendo_options), flushCallQueue(), void flushEvery(SEND_INTERVAL))
            }

            function startup(e, t, n) {
                var i = ConfigReader.get("disableAutoInitialize");
                if (!i) {
                    var r = findQueuedInitialize(e), o = r && r.length > 1 ? r[1] : {}, a = "initializeImmediately";
                    get(o, a) || ConfigReader.get(a) ? t() : n(t)
                }
            }

            function track(e, t) {
                if (!e || !_.isString(e)) return void logError("Must provide valid name string for event tracking");
                var n = pendoDotUrl.get();
                collectEvent("track", t, n, e)
            }

            function exportPublicApi(e) {
                e.getVersion = getVersion, e.isReady = isReady, e.pageLoad = pageLoad, e.getVisitorId = get_visitor_id, e.getAccountId = get_account_id, e.clearSession = clearSession, e.VERSION = VERSION, e.flushNow = function () {
                    return flushNow(!0)
                }, e.initGuides = initGuides, e.loadGuides = loadGuides, e.findGuideByName = findGuideByName, e.hideGuides = hideGuides, e.onGuideDismissed = onGuideDismissed, e.goToStep = goToStep, e.onGuideAdvanced = onGuideAdvanced, e.onGuidePrevious = onGuidePrevious, e.onGuideSnoozed = onGuideSnoozed, e.startGuides = manuallyStartGuides, e.stopGuides = manuallyStopGuides, e.toggleLauncher = toggleLauncher, e.showLauncher = expandLauncherList, e.hideLauncher = collapseLauncherList, e.removeLauncher = removeLauncher, e.defaultCssUrl = getDefaultCssUrl(), e.getActiveGuides = getActiveGuides, e.getActiveGuide = getActiveGuide, e.guideSeenTimeoutLength = getGuideSeenTimeoutLength(), e.areGuidesDisabled = areGuidesDisabled, e.setGuidesDisabled = setGuidesDisabled, e.buildNodeFromJSON = BuildingBlockGuides.buildNodeFromJSON, e.flexElement = BuildingBlockGuides.flexElement, e.GuideFactory = GuideFactory, e.dom = dom, e.attachEvent = attachEvent, e.detactEvent = detachEvent, e.getEventPropertyTarget = getEventPropertyTarget, e.previewEventProperty = collectEventProperty, e.log = log, e.enableLogging = enableLogging, e.disableLogging = disableLogging, e.setActiveContexts = setActiveContexts, e.showLogHistory = showLogHistory, e.getLoggedContexts = getLoggedContexts, e.isDebuggingEnabled = isDebuggingEnabled, e.enableDebugging = enableDebugging, e.disableDebugging = disableDebugging, e.addDebuggingFunctions = addDebuggingFunctions, e.stopSendingEvents = lockEvents, e.startSendingEvents = unlockEvents, e.isSendingEvents = isUnlocked, e.fromByteArray = b64.uint8ToBase64, e.getMode = getMode, e.events = pendoDotEvents, e.track = track, e.validateInstall = validateInstall, e.validateNativeMethods = validateNativeMethods, e.validateBuiltInGlobals = validateBuiltInGlobals, e.validateEnvironment = validateEnvironment, e.getFeedbackSettings = getFeedbackSettings, e.doesExist = doesExist, e.generate_unique_id = generate_unique_id, e.TEMP_PREFIX = TEMP_PREFIX, e.SIZE_UNIQUE_ID = SIZE_UNIQUE_ID, e.defaultLauncher = defaultLauncher, e.identify = identify, e.get_visitor_id = get_visitor_id, e.set_visitor_id = set_visitor_id, e.get_account_id = get_account_id, e.set_account_id = set_account_id, e.getSerializedMetadata = getSerializedMetadata, e.compress = compress, e.squeezeAndCompress = compress, e.randomElement = randomElement, e.randomString = randomString, e.toUTF8Array = toUTF8Array, e.getNumberFromText = getNumberFromText, e._addCredits = _addCredits, e.getCurrentUrl = getNormalizedUrl, e.getNormalizedUrl = getNormalizedUrl, e.testUrlForStep = testUrlForStep, e.showGuideByName = showGuideByName, e.showGuideById = showGuideById, e.designerv2 = DesignerV2, e.P2AutoLaunch = P2AutoLaunch, e.BuildingBlocks = BuildingBlocks, e.buffers = buffers, e.guideDev = guideDev, e.feedback = Feedback, e.badgesShown = badgesShown, e.get_pendo_cookie = get_pendo_cookie, e.DEFAULT_EXPIRE_LEN = DEFAULT_EXPIRE_LEN, e.set_pendo_cookie = set_pendo_cookie, e.loadResource = loadResource, e.loadWatcher = loadWatcher, e.messageLogger = messageLogger, e.messageReceiver = messageReceiver, e.messageValidator = messageValidator, e.messageOriginTester = messageOriginTester, e.onConnectMessage = onConnectMessage, e.MESSAGE_TYPES = MESSAGE_TYPES, e.messageDispatcher = messageDispatcher,e.moduleRegistry = moduleRegistry,
                e.addModule = addModule,e.hasModule = hasModule,e.findModuleByName = findModuleByName,e.modulesWaiting = modulesWaiting,e.loadModules = loadModules,e.moduleLoader = moduleLoader,e.TOOLTIP_DEFAULT_WIDTH = TOOLTIP_DEFAULT_WIDTH,e.TOOLTIP_DEFAULT_HEIGHT = TOOLTIP_DEFAULT_HEIGHT,e.TOOLTIP_ARROW_SIZE = TOOLTIP_ARROW_SIZE,e.LB_DEFAULT_WIDTH = LB_DEFAULT_WIDTH,e.LB_DEFAULT_HEIGHT = LB_DEFAULT_HEIGHT,e.sniffer = sniffer,e.url = pendoDotUrl,e.location = LocationPublic,e.Sizzle = ShadowSizzle,e._ = _,e.ajax = ajax,e.Zlib = Zlib,e.guideContent = ContentLoader.guideContent,e.receiveDomStructureJson = ContentLoader.receiveDomStructureJson,e.addExtension = addExtension
            }

            function deprecateFn(e, t, n) {
                return function () {
                    return memoizedWarnDep(t, n), (e || _.noop).apply(null, arguments)
                }
            }

            function exportDeprecated(e) {
                e.SHADOW_STYLE = "", _.extend(e, {
                    _showElementGuide: deprecateFn(showTooltipGuide, "_showElementGuide", "is going away"),
                    flushNow: deprecateFn(flushNow, "pendo.flushNow", "is going away"),
                    flushEventCache: deprecateFn(null, "pendo.flushEventCache", "is gone"),
                    HOST: HOST,
                    MAX_LENGTH: ENCODED_EVENT_MAX_LENGTH,
                    MAX_NUM_EVENTS: MAX_NUM_EVENTS,
                    _createToolTip: deprecateFn(createTooltipGuide, "pendo._createToolTip", "is going away"),
                    _get_tooltip_dimensions: deprecateFn(getTooltipDimensions, "pendo._get_tooltip_dimensions", "is going away"),
                    _isOldIE: deprecateFn(isOldIE, "pendo._isOldIE", "is going away"),
                    _logMessage: deprecateFn(writeMessage, "pendo._logMessage", "is going away"),
                    _sendEvent: deprecateFn(null, "pendo._sendEvent", "is gone"),
                    _sendGuideEvent: deprecateFn(null, "pendo._sendGuideEvent", "is gone"),
                    _stopEvents: locked,
                    _storeInCache: deprecateFn(null, "pendo._storeInCache", "is gone"),
                    _writeEventImgTag: deprecateFn(null, "pendo._writeEventImgTag", "is gone"),
                    _writeImgTag: deprecateFn(writeImgTag, "pendo._writeImgTag", "is going away"),
                    getText: deprecateFn(TextCapture.getText, "pendo.getText", "is going away"),
                    getUA: deprecateFn(getUA, "pendo.getUA", "is going away"),
                    ifDebugThen: deprecateFn(null, "pendo.ifDebugThen", "is gone"),
                    send_event: deprecateFn(collectEvent, "pendo.send_event", "has changed to pendo.cache.createEvent"),
                    wire_page: deprecateFn(wirePage, "pendo.wire_page", "is going away"),
                    findGuideBy: findGuideBy,
                    findGuideById: findGuideById,
                    findStepInGuide: findStepInGuide,
                    _updateGuideStepStatus: _updateGuideStepStatus,
                    _addCloseButton: addCloseButton,
                    initialize: initialize,
                    getEventCache: getGuideEventCache,
                    processEventCache: processGuideEventCache,
                    isGuideShown: isGuideShown,
                    _getNextStepInMultistep: getNextStepInMultistep,
                    badgeDiv: launcherBadge && launcherBadge.element,
                    launcherToolTipDiv: launcherTooltipDiv,
                    attachEvent: attachEvent,
                    detachEvent: detachEvent,
                    updateOptions: updateOptions,
                    createLauncher: createLauncher,
                    initLauncher: initLauncher,
                    _addGuideToLauncher: addGuideToLauncher,
                    isAnonymousVisitor: isAnonymousVisitor,
                    DEFAULT_VISITOR_ID: DEFAULT_VISITOR_ID,
                    shouldIdentityChange: _.constant(!1),
                    read: agentStorage.read,
                    write: agentStorage.write,
                    _delete_cookie: agentStorage.clear,
                    _set_cookie: setCookie,
                    _get_cookie: getCookie,
                    get_cookie_key: getPendoCookieKey,
                    ENV: ENV,
                    eventCache: eventCache,
                    _getOpacityStyles: deprecateFn(function () {
                    }, "pendo._getOpacityStyles", "is going away"),
                    setStyle: setStyle,
                    _createGuideEvent: createGuideEvent,
                    seenGuide: seenGuide,
                    dismissedGuide: dismissedGuide,
                    advancedGuide: advancedGuide,
                    seenTime: 0,
                    placeBadge: placeBadge,
                    isBadge: isBadge,
                    showPreview: deprecateFn(showPreview, "pendo.showPreview", "is going away"),
                    removeAllBadges: removeAllBadges,
                    tellMaster: tellMaster,
                    DEFAULT_TIMER_LENGTH: DEFAULT_TIMER_LENGTH,
                    registerMessageHandler: registerMessageHandler,
                    _get_offset: getOffsetPosition,
                    _shouldAutoDisplayGuide: function () {
                        return !1
                    },
                    removeBadge: removeBadge,
                    _showLightboxGuide: showLightboxGuide,
                    _showGuide: showGuide,
                    getElementForGuideStep: getElementForGuideStep,
                    isElementVisible: isElementVisible,
                    getTooltipDivId: getStepDivId,
                    setupWatchOnTooltip: setupWatchOnElement,
                    letters: "",
                    charset: "",
                    detectMaster: detectMaster,
                    listenToMaster: listenToMaster,
                    start: whenLoadedCall,
                    SEND_INTERVAL: SEND_INTERVAL,
                    stageGuideEvent: stageGuideEvent,
                    startStagedTimer: startStagedTimer,
                    isURLValid: isURLValid,
                    getURL: getURL,
                    _get_screen_dim: getScreenDimensions,
                    _isInViewport: _isInViewport,
                    _getCss3Prop: _getCss3Prop,
                    waitThenStartGuides: waitThenLoop,
                    guidesProcessingThreadHandle: guidesProcessingThreadHandle
                })
            }

            function disableUnusedMethodsPendoCoreOff(e, t) {
                _.each(t, function (t) {
                    e[t] && (e[t] = function () {
                        console.warn("This functionality is not supported by your subscription.")
                    })
                })
            }

            function disablePendoCoreIfNeeded(e, t) {
                if (!t) {
                    var n = ["initGuides", "loadGuides", "findGuideByName", "hideGuides", "onGuideDismissed", "onGuideAdvanced", "onGuidePrevious", "startGuides", "stopGuides", "toggleLauncher", "showLauncher", "hideLauncher", "removeLauncher", "defaultCssUrl", "areGuidesDisabled", "setGuidesDisabled", "flexElement", "GuideFactory", "P2AutoLaunch", "BuildingBlocks", "designer", "advancedGuide", "dismissedGuide", "findGuideBy", "findGuideById", "findStepInGuide", "getElementForGuideStep", "guideContent", "guideDev", "isGuideShown", "seenGuide", "showGuideById", "showGuideByName", "showGuideByName", "showPreview", "stageGuideEvent", "waitThenStartGuides", "_addCloseButton", "_addGuideToLauncher", "_shouldAutoDisplayGuide", "_showElementGuide", "_showGuide", "_showLightboxGuide", "_updateGuideStepStatus", "badgeDiv", "badgesShown", "isBadge", "placeBadge", "removeAllBadges", "_addCredits", "_createGuideEvent", "_createToolTip", "_getNextStepInMultistep", "_getOpacityStyles", "_get_offset", "_get_screen_dim", "_get_tooltip_dimensions", "_isInViewport", "_isOldIE", "_sendGuideEvent", "findModuleByName", "guidesProcessingThreadHandle", "initLauncher", "getTooltipDivId", "receiveDomStructureJson", "setupWatchOnTooltip", "testUrlForStep", "hasModule"],
                        i = ["flushEventCache", "flushNow", "getEventCache", "isSendingEvents", "processEventCache", "send_event", "startSendingEvents", "stopSendingEvents", "track", "_sendEvent", "_stopEvents", "_storeInCache", "_writeEventImgTag", "_writeImgTag", "events", "eventCache", "attachEvent", "detachEvent", "getText"],
                        r = n.concat(i);
                    disableUnusedMethodsPendoCoreOff(e, r)
                }
            }

            function populatePendoObject(e) {
                exportPublicApi(e), exportDeprecated(e), _.each(["identify", "updateOptions", "pageLoad"], function (t) {
                    var n = e[t];
                    e[t] = function () {
                        try {
                            isReady() ? n.apply(this, arguments) : enqueueCall(e, t, arguments)
                        } catch (i) {
                            writeException(i)
                        }
                    }
                }), disablePendoCoreIfNeeded(e, getPendoCore())
            }

            function initAgent(e, t) {
                return setPendoConfig(t), !loadAsModule(t) && loadStagingAgent(t, e) ? !1 : e && e.VERSION ? !1 : (initDataHost(), initGuideFactory(), store.dispatch("frames/init"), log.init(), DesignerV2.listenForParentSelectionRequests(), populatePendoObject(e), Events.appUsage.on(GuideActivity.handler), Events.appUsage.on(ResourceCenterActivity.handler), startup(e._q, autoInitialize, whenLoadedCall), !0)
            }

            function patchJSONstringify() {
                var e = JSON.stringify;
                JSON.stringify = function (t, n, i) {
                    var r = Array.prototype.toJSON;
                    delete Array.prototype.toJSON;
                    var o = e(t, n, i);
                    return Array.prototype.toJSON = r, o
                }
            }

            function isPrototypeOlderThan(e) {
                return "undefined" != typeof Prototype && parseFloat(Prototype.Version.substr(0, 3)) < e && "undefined" != typeof Array.prototype.toJSON
            }

            function applyPrototypeJsonShim() {
                isPrototypeOlderThan(1.7) && patchJSONstringify()
            }

            var _slice = Array.prototype.slice;
            try {
                _slice.call(document.documentElement)
            } catch (e) {
                Array.prototype.slice = function (e, t) {
                    if (t = "undefined" != typeof t ? t : this.length, "[object Array]" === Object.prototype.toString.call(this)) return _slice.call(this, e, t);
                    var n, i, r = [], o = this.length, a = e || 0;
                    a = a >= 0 ? a : o + a;
                    var s = t ? t : o;
                    if (0 > t && (s = o + t), i = s - a, i > 0) if (r = new Array(i), this.charAt) for (n = 0; i > n; n++) r[n] = this.charAt(a + n); else for (n = 0; i > n; n++) r[n] = this[a + n];
                    return r
                }
            }
            String.prototype.trim || (String.prototype.trim = function () {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            });
            var b64 = function () {
                   // "use strict";

                    function e(e) {
                        function n(e) {
                            return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[63 & e]
                        }

                        var i, r, o, a = e.length % 3, s = "";
                        for (i = 0, o = e.length - a; o > i; i += 3) r = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2], s += n(r);
                        switch (a) {
                            case 1:
                                r = e[e.length - 1], s += t[r >> 2], s += t[r << 4 & 63];
                                break;
                            case 2:
                                r = (e[e.length - 2] << 8) + e[e.length - 1], s += t[r >> 10], s += t[r >> 4 & 63], s += t[r << 2 & 63]
                        }
                        return s
                    }

                    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
                    return {uint8ToBase64: e}
                }(),
                commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
                sha1$1 = {exports: {}};
            !function (module) {
                !function () {
                   // "use strict";

                    function Sha1(e) {
                        e ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, this.h4 = 3285377520, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                    }

                    var root = "object" == typeof window ? window : {},
                        NODE_JS = !root.JS_SHA1_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                    NODE_JS && (root = commonjsGlobal);
                    var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && !0 && module.exports,
                        AMD = "function" == typeof undefined && undefined.amd, HEX_CHARS = "0123456789abcdef".split(""),
                        EXTRA = [-2147483648, 8388608, 32768, 128], SHIFT = [24, 16, 8, 0],
                        OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"], blocks = [],
                        createOutputMethod = function (e) {
                            return function (t) {
                                return new Sha1(!0).update(t)[e]()
                            }
                        }, createMethod = function () {
                            var e = createOutputMethod("hex");
                            NODE_JS && (e = nodeWrap(e)), e.create = function () {
                                return new Sha1
                            }, e.update = function (t) {
                                return e.create().update(t)
                            };
                            for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                                var n = OUTPUT_TYPES[t];
                                e[n] = createOutputMethod(n)
                            }
                            return e
                        }, nodeWrap = function (method) {
                            var crypto = eval("require('crypto')"), Buffer = eval("require('buffer').Buffer"),
                                nodeMethod = function (e) {
                                    if ("string" == typeof e) return crypto.createHash("sha1").update(e, "utf8").digest("hex");
                                    if (e.constructor === ArrayBuffer) e = new Uint8Array(e); else if (e.length === undefined) return method(e);
                                    return crypto.createHash("sha1").update(new Buffer(e)).digest("hex")
                                };
                            return nodeMethod
                        };
                    Sha1.prototype.update = function (e) {
                        if (!this.finalized) {
                            var t = "string" != typeof e;
                            t && e.constructor === root.ArrayBuffer && (e = new Uint8Array(e));
                            for (var n, i, r = 0, o = e.length || 0, a = this.blocks; o > r;) {
                                if (this.hashed && (this.hashed = !1, a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), t) for (i = this.start; o > r && 64 > i; ++r) a[i >> 2] |= e[r] << SHIFT[3 & i++]; else for (i = this.start; o > r && 64 > i; ++r) n = e.charCodeAt(r), 128 > n ? a[i >> 2] |= n << SHIFT[3 & i++] : 2048 > n ? (a[i >> 2] |= (192 | n >> 6) << SHIFT[3 & i++], a[i >> 2] |= (128 | 63 & n) << SHIFT[3 & i++]) : 55296 > n || n >= 57344 ? (a[i >> 2] |= (224 | n >> 12) << SHIFT[3 & i++], a[i >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & i++], a[i >> 2] |= (128 | 63 & n) << SHIFT[3 & i++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++r)), a[i >> 2] |= (240 | n >> 18) << SHIFT[3 & i++], a[i >> 2] |= (128 | n >> 12 & 63) << SHIFT[3 & i++], a[i >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & i++], a[i >> 2] |= (128 | 63 & n) << SHIFT[3 & i++]);
                                this.lastByteIndex = i, this.bytes += i - this.start, i >= 64 ? (this.block = a[16], this.start = i - 64, this.hash(), this.hashed = !0) : this.start = i
                            }
                            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                        }
                    }, Sha1.prototype.finalize = function () {
                        if (!this.finalized) {
                            this.finalized = !0;
                            var e = this.blocks, t = this.lastByteIndex;
                            e[16] = this.block, e[t >> 2] |= EXTRA[3 & t], this.block = e[16], t >= 56 && (this.hashed || this.hash(), e[0] = this.block, e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.hBytes << 3 | this.bytes >>> 29, e[15] = this.bytes << 3, this.hash()
                        }
                    }, Sha1.prototype.hash = function () {
                        var e, t, n, i = this.h0, r = this.h1, o = this.h2, a = this.h3, s = this.h4, d = this.blocks;
                        for (t = 16; 80 > t; ++t) n = d[t - 3] ^ d[t - 8] ^ d[t - 14] ^ d[t - 16], d[t] = n << 1 | n >>> 31;
                        for (t = 0; 20 > t; t += 5) e = r & o | ~r & a, n = i << 5 | i >>> 27, s = n + e + s + 1518500249 + d[t] << 0, r = r << 30 | r >>> 2, e = i & r | ~i & o, n = s << 5 | s >>> 27, a = n + e + a + 1518500249 + d[t + 1] << 0, i = i << 30 | i >>> 2, e = s & i | ~s & r, n = a << 5 | a >>> 27, o = n + e + o + 1518500249 + d[t + 2] << 0, s = s << 30 | s >>> 2, e = a & s | ~a & i, n = o << 5 | o >>> 27, r = n + e + r + 1518500249 + d[t + 3] << 0, a = a << 30 | a >>> 2, e = o & a | ~o & s, n = r << 5 | r >>> 27, i = n + e + i + 1518500249 + d[t + 4] << 0, o = o << 30 | o >>> 2;
                        for (; 40 > t; t += 5) e = r ^ o ^ a, n = i << 5 | i >>> 27, s = n + e + s + 1859775393 + d[t] << 0, r = r << 30 | r >>> 2, e = i ^ r ^ o, n = s << 5 | s >>> 27, a = n + e + a + 1859775393 + d[t + 1] << 0, i = i << 30 | i >>> 2, e = s ^ i ^ r, n = a << 5 | a >>> 27, o = n + e + o + 1859775393 + d[t + 2] << 0, s = s << 30 | s >>> 2, e = a ^ s ^ i, n = o << 5 | o >>> 27, r = n + e + r + 1859775393 + d[t + 3] << 0, a = a << 30 | a >>> 2, e = o ^ a ^ s, n = r << 5 | r >>> 27, i = n + e + i + 1859775393 + d[t + 4] << 0, o = o << 30 | o >>> 2;
                        for (; 60 > t; t += 5) e = r & o | r & a | o & a, n = i << 5 | i >>> 27, s = n + e + s - 1894007588 + d[t] << 0, r = r << 30 | r >>> 2, e = i & r | i & o | r & o, n = s << 5 | s >>> 27, a = n + e + a - 1894007588 + d[t + 1] << 0, i = i << 30 | i >>> 2, e = s & i | s & r | i & r, n = a << 5 | a >>> 27, o = n + e + o - 1894007588 + d[t + 2] << 0, s = s << 30 | s >>> 2, e = a & s | a & i | s & i, n = o << 5 | o >>> 27, r = n + e + r - 1894007588 + d[t + 3] << 0, a = a << 30 | a >>> 2, e = o & a | o & s | a & s, n = r << 5 | r >>> 27, i = n + e + i - 1894007588 + d[t + 4] << 0, o = o << 30 | o >>> 2;
                        for (; 80 > t; t += 5) e = r ^ o ^ a, n = i << 5 | i >>> 27, s = n + e + s - 899497514 + d[t] << 0, r = r << 30 | r >>> 2, e = i ^ r ^ o, n = s << 5 | s >>> 27, a = n + e + a - 899497514 + d[t + 1] << 0, i = i << 30 | i >>> 2, e = s ^ i ^ r, n = a << 5 | a >>> 27, o = n + e + o - 899497514 + d[t + 2] << 0, s = s << 30 | s >>> 2, e = a ^ s ^ i, n = o << 5 | o >>> 27, r = n + e + r - 899497514 + d[t + 3] << 0, a = a << 30 | a >>> 2, e = o ^ a ^ s, n = r << 5 | r >>> 27, i = n + e + i - 899497514 + d[t + 4] << 0, o = o << 30 | o >>> 2;
                        this.h0 = this.h0 + i << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + o << 0, this.h3 = this.h3 + a << 0, this.h4 = this.h4 + s << 0
                    }, Sha1.prototype.hex = function () {
                        this.finalize();
                        var e = this.h0, t = this.h1, n = this.h2, i = this.h3, r = this.h4;
                        return HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r]
                    }, Sha1.prototype.toString = Sha1.prototype.hex, Sha1.prototype.digest = function () {
                        this.finalize();
                        var e = this.h0, t = this.h1, n = this.h2, i = this.h3, r = this.h4;
                        return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r]
                    }, Sha1.prototype.array = Sha1.prototype.digest, Sha1.prototype.arrayBuffer = function () {
                        this.finalize();
                        var e = new ArrayBuffer(20), t = new DataView(e);
                        return t.setUint32(0, this.h0), t.setUint32(4, this.h1), t.setUint32(8, this.h2), t.setUint32(12, this.h3), t.setUint32(16, this.h4), e
                    };
                    var exports = createMethod();
                    COMMON_JS ? module.exports = exports : (root.sha1 = exports, AMD && undefined(function () {
                        return exports
                    }))
                }()
            }(sha1$1);
            var sha1 = sha1$1.exports, STAGING_SERVER_HASHES = "stagingServerHashes", pendo$1, _pendoConfig = {},
                METHODS_TO_CAPTURE = ["initialize", "identify", "updateOptions", "pageLoad", "track", "clearSession"],
                underscore = {exports: {}};
            !function (e, t) {
                (function () {
                    var n = this, i = n._, r = Array.prototype, o = Object.prototype, a = Function.prototype,
                        s = r.push, d = r.slice, u = r.concat, c = o.toString, l = o.hasOwnProperty, f = Array.isArray,
                        p = Object.keys, g = a.bind, h = function (e) {
                            return e instanceof h ? e : this instanceof h ? void (this._wrapped = e) : new h(e)
                        };
                    e.exports && (t = e.exports = h), t._ = h, h.VERSION = "1.7.0";
                    var m = function (e, t, n) {
                        if (void 0 === t) return e;
                        switch (null == n ? 3 : n) {
                            case 1:
                                return function (n) {
                                    return e.call(t, n)
                                };
                            case 2:
                                return function (n, i) {
                                    return e.call(t, n, i)
                                };
                            case 3:
                                return function (n, i, r) {
                                    return e.call(t, n, i, r)
                                };
                            case 4:
                                return function (n, i, r, o) {
                                    return e.call(t, n, i, r, o)
                                }
                        }
                        return function () {
                            return e.apply(t, arguments)
                        }
                    };
                    h.iteratee = function (e, t, n) {
                        return null == e ? h.identity : h.isFunction(e) ? m(e, t, n) : h.isObject(e) ? h.matches(e) : h.property(e)
                    }, h.each = h.forEach = function (e, t, n) {
                        if (null == e) return e;
                        t = m(t, n);
                        var i, r = e.length;
                        if (r === +r) for (i = 0; r > i; i++) t(e[i], i, e); else {
                            var o = h.keys(e);
                            for (i = 0, r = o.length; r > i; i++) t(e[o[i]], o[i], e)
                        }
                        return e
                    }, h.map = h.collect = function (e, t, n) {
                        if (null == e) return [];
                        t = h.iteratee(t, n);
                        for (var i, r = e.length !== +e.length && h.keys(e), o = (r || e).length, a = Array(o), s = 0; o > s; s++) i = r ? r[s] : s, a[s] = t(e[i], i, e);
                        return a
                    };
                    var v = "Reduce of empty array with no initial value";
                    h.reduce = h.foldl = h.inject = function (e, t, n, i) {
                        null == e && (e = []), t = m(t, i, 4);
                        var r, o = e.length !== +e.length && h.keys(e), a = (o || e).length, s = 0;
                        if (arguments.length < 3) {
                            if (!a) throw new TypeError(v);
                            n = e[o ? o[s++] : s++]
                        }
                        for (; a > s; s++) r = o ? o[s] : s, n = t(n, e[r], r, e);
                        return n
                    }, h.reduceRight = h.foldr = function (e, t, n, i) {
                        null == e && (e = []), t = m(t, i, 4);
                        var r, o = e.length !== +e.length && h.keys(e), a = (o || e).length;
                        if (arguments.length < 3) {
                            if (!a) throw new TypeError(v);
                            n = e[o ? o[--a] : --a]
                        }
                        for (; a--;) r = o ? o[a] : a, n = t(n, e[r], r, e);
                        return n
                    }, h.find = h.detect = function (e, t, n) {
                        var i;
                        return t = h.iteratee(t, n), h.some(e, function (e, n, r) {
                            return t(e, n, r) ? (i = e, !0) : void 0
                        }), i
                    }, h.filter = h.select = function (e, t, n) {
                        var i = [];
                        return null == e ? i : (t = h.iteratee(t, n), h.each(e, function (e, n, r) {
                            t(e, n, r) && i.push(e)
                        }), i)
                    }, h.reject = function (e, t, n) {
                        return h.filter(e, h.negate(h.iteratee(t)), n)
                    }, h.every = h.all = function (e, t, n) {
                        if (null == e) return !0;
                        t = h.iteratee(t, n);
                        var i, r, o = e.length !== +e.length && h.keys(e), a = (o || e).length;
                        for (i = 0; a > i; i++) if (r = o ? o[i] : i, !t(e[r], r, e)) return !1;
                        return !0
                    }, h.some = h.any = function (e, t, n) {
                        if (null == e) return !1;
                        t = h.iteratee(t, n);
                        var i, r, o = e.length !== +e.length && h.keys(e), a = (o || e).length;
                        for (i = 0; a > i; i++) if (r = o ? o[i] : i, t(e[r], r, e)) return !0;
                        return !1
                    }, h.contains = h.include = function (e, t) {
                        return null == e ? !1 : (e.length !== +e.length && (e = h.values(e)), h.indexOf(e, t) >= 0)
                    }, h.invoke = function (e, t) {
                        var n = d.call(arguments, 2), i = h.isFunction(t);
                        return h.map(e, function (e) {
                            return (i ? t : e[t]).apply(e, n)
                        })
                    }, h.pluck = function (e, t) {
                        return h.map(e, h.property(t))
                    }, h.where = function (e, t) {
                        return h.filter(e, h.matches(t))
                    }, h.findWhere = function (e, t) {
                        return h.find(e, h.matches(t))
                    }, h.max = function (e, t, n) {
                        var i, r, o = -(1 / 0), a = -(1 / 0);
                        if (null == t && null != e) {
                            e = e.length === +e.length ? e : h.values(e);
                            for (var s = 0, d = e.length; d > s; s++) i = e[s], i > o && (o = i)
                        } else t = h.iteratee(t, n), h.each(e, function (e, n, i) {
                            r = t(e, n, i), (r > a || r === -(1 / 0) && o === -(1 / 0)) && (o = e, a = r)
                        });
                        return o
                    }, h.min = function (e, t, n) {
                        var i, r, o = 1 / 0, a = 1 / 0;
                        if (null == t && null != e) {
                            e = e.length === +e.length ? e : h.values(e);
                            for (var s = 0, d = e.length; d > s; s++) i = e[s], o > i && (o = i)
                        } else t = h.iteratee(t, n), h.each(e, function (e, n, i) {
                            r = t(e, n, i), (a > r || r === 1 / 0 && o === 1 / 0) && (o = e, a = r)
                        });
                        return o
                    }, h.shuffle = function (e) {
                        for (var t, n = e && e.length === +e.length ? e : h.values(e), i = n.length, r = Array(i), o = 0; i > o; o++) t = h.random(0, o), t !== o && (r[o] = r[t]), r[t] = n[o];
                        return r
                    }, h.sample = function (e, t, n) {
                        return null == t || n ? (e.length !== +e.length && (e = h.values(e)), e[h.random(e.length - 1)]) : h.shuffle(e).slice(0, Math.max(0, t))
                    }, h.sortBy = function (e, t, n) {
                        return t = h.iteratee(t, n), h.pluck(h.map(e, function (e, n, i) {
                            return {value: e, index: n, criteria: t(e, n, i)}
                        }).sort(function (e, t) {
                            var n = e.criteria, i = t.criteria;
                            if (n !== i) {
                                if (n > i || void 0 === n) return 1;
                                if (i > n || void 0 === i) return -1
                            }
                            return e.index - t.index
                        }), "value")
                    };
                    var b = function (e) {
                        return function (t, n, i) {
                            var r = {};
                            return n = h.iteratee(n, i), h.each(t, function (i, o) {
                                var a = n(i, o, t);
                                e(r, i, a)
                            }), r
                        }
                    };
                    h.groupBy = b(function (e, t, n) {
                        h.has(e, n) ? e[n].push(t) : e[n] = [t]
                    }), h.indexBy = b(function (e, t, n) {
                        e[n] = t
                    }), h.countBy = b(function (e, t, n) {
                        h.has(e, n) ? e[n]++ : e[n] = 1
                    }), h.sortedIndex = function (e, t, n, i) {
                        n = h.iteratee(n, i, 1);
                        for (var r = n(t), o = 0, a = e.length; a > o;) {
                            var s = o + a >>> 1;
                            n(e[s]) < r ? o = s + 1 : a = s
                        }
                        return o
                    }, h.toArray = function (e) {
                        return e ? h.isArray(e) ? d.call(e) : e.length === +e.length ? h.map(e, h.identity) : h.values(e) : []
                    }, h.size = function (e) {
                        return null == e ? 0 : e.length === +e.length ? e.length : h.keys(e).length
                    }, h.partition = function (e, t, n) {
                        t = h.iteratee(t, n);
                        var i = [], r = [];
                        return h.each(e, function (e, n, o) {
                            (t(e, n, o) ? i : r).push(e)
                        }), [i, r]
                    }, h.first = h.head = h.take = function (e, t, n) {
                        return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : d.call(e, 0, t)
                    }, h.initial = function (e, t, n) {
                        return d.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
                    }, h.last = function (e, t, n) {
                        return null == e ? void 0 : null == t || n ? e[e.length - 1] : d.call(e, Math.max(e.length - t, 0))
                    }, h.rest = h.tail = h.drop = function (e, t, n) {
                        return d.call(e, null == t || n ? 1 : t)
                    }, h.compact = function (e) {
                        return h.filter(e, h.identity)
                    };
                    var _ = function (e, t, n, i) {
                        if (t && h.every(e, h.isArray)) return u.apply(i, e);
                        for (var r = 0, o = e.length; o > r; r++) {
                            var a = e[r];
                            h.isArray(a) || h.isArguments(a) ? t ? s.apply(i, a) : _(a, t, n, i) : n || i.push(a)
                        }
                        return i
                    };
                    h.flatten = function (e, t) {
                        return _(e, t, !1, [])
                    }, h.without = function (e) {
                        return h.difference(e, d.call(arguments, 1))
                    }, h.uniq = h.unique = function (e, t, n, i) {
                        if (null == e) return [];
                        h.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = h.iteratee(n, i));
                        for (var r = [], o = [], a = 0, s = e.length; s > a; a++) {
                            var d = e[a];
                            if (t) a && o === d || r.push(d), o = d; else if (n) {
                                var u = n(d, a, e);
                                h.indexOf(o, u) < 0 && (o.push(u), r.push(d))
                            } else h.indexOf(r, d) < 0 && r.push(d)
                        }
                        return r
                    }, h.union = function () {
                        return h.uniq(_(arguments, !0, !0, []))
                    }, h.intersection = function (e) {
                        if (null == e) return [];
                        for (var t = [], n = arguments.length, i = 0, r = e.length; r > i; i++) {
                            var o = e[i];
                            if (!h.contains(t, o)) {
                                for (var a = 1; n > a && h.contains(arguments[a], o); a++) ;
                                a === n && t.push(o)
                            }
                        }
                        return t
                    }, h.difference = function (e) {
                        var t = _(d.call(arguments, 1), !0, !0, []);
                        return h.filter(e, function (e) {
                            return !h.contains(t, e)
                        })
                    }, h.zip = function (e) {
                        if (null == e) return [];
                        for (var t = h.max(arguments, "length").length, n = Array(t), i = 0; t > i; i++) n[i] = h.pluck(arguments, i);
                        return n
                    }, h.object = function (e, t) {
                        if (null == e) return {};
                        for (var n = {}, i = 0, r = e.length; r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
                        return n
                    }, h.indexOf = function (e, t, n) {
                        if (null == e) return -1;
                        var i = 0, r = e.length;
                        if (n) {
                            if ("number" != typeof n) return i = h.sortedIndex(e, t), e[i] === t ? i : -1;
                            i = 0 > n ? Math.max(0, r + n) : n
                        }
                        for (; r > i; i++) if (e[i] === t) return i;
                        return -1
                    }, h.lastIndexOf = function (e, t, n) {
                        if (null == e) return -1;
                        var i = e.length;
                        for ("number" == typeof n && (i = 0 > n ? i + n + 1 : Math.min(i, n + 1)); --i >= 0;) if (e[i] === t) return i;
                        return -1
                    }, h.range = function (e, t, n) {
                        arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;
                        for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), o = 0; i > o; o++, e += n) r[o] = e;
                        return r
                    };
                    var y = function () {
                    };
                    h.bind = function (e, t) {
                        var n, i;
                        if (g && e.bind === g) return g.apply(e, d.call(arguments, 1));
                        if (!h.isFunction(e)) throw new TypeError("Bind must be called on a function");
                        return n = d.call(arguments, 2), i = function () {
                            if (!(this instanceof i)) return e.apply(t, n.concat(d.call(arguments)));
                            y.prototype = e.prototype;
                            var r = new y;
                            y.prototype = null;
                            var o = e.apply(r, n.concat(d.call(arguments)));
                            return h.isObject(o) ? o : r
                        }
                    }, h.partial = function (e) {
                        var t = d.call(arguments, 1);
                        return function () {
                            for (var n = 0, i = t.slice(), r = 0, o = i.length; o > r; r++) i[r] === h && (i[r] = arguments[n++]);
                            for (; n < arguments.length;) i.push(arguments[n++]);
                            return e.apply(this, i)
                        }
                    }, h.bindAll = function (e) {
                        var t, n, i = arguments.length;
                        if (1 >= i) throw new Error("bindAll must be passed function names");
                        for (t = 1; i > t; t++) n = arguments[t], e[n] = h.bind(e[n], e);
                        return e
                    }, h.memoize = function (e, t) {
                        var n = function (i) {
                            var r = n.cache, o = t ? t.apply(this, arguments) : i;
                            return h.has(r, o) || (r[o] = e.apply(this, arguments)), r[o]
                        };
                        return n.cache = {}, n
                    }, h.delay = function (e, t) {
                        var n = d.call(arguments, 2);
                        return setTimeout(function () {
                            return e.apply(null, n)
                        }, t)
                    }, h.defer = function (e) {
                        return h.delay.apply(h, [e, 1].concat(d.call(arguments, 1)))
                    }, h.throttle = function (e, t, n) {
                        var i, r, o, a = null, s = 0;
                        n || (n = {});
                        var d = function () {
                            s = n.leading === !1 ? 0 : h.now(), a = null, o = e.apply(i, r), a || (i = r = null)
                        };
                        return function () {
                            var u = h.now();
                            s || n.leading !== !1 || (s = u);
                            var c = t - (u - s);
                            return i = this, r = arguments, 0 >= c || c > t ? (clearTimeout(a), a = null, s = u, o = e.apply(i, r), a || (i = r = null)) : a || n.trailing === !1 || (a = setTimeout(d, c)), o
                        }
                    }, h.debounce = function (e, t, n) {
                        var i, r, o, a, s, d = function () {
                            var u = h.now() - a;
                            t > u && u > 0 ? i = setTimeout(d, t - u) : (i = null, n || (s = e.apply(o, r), i || (o = r = null)))
                        };
                        return function () {
                            o = this, r = arguments, a = h.now();
                            var u = n && !i;
                            return i || (i = setTimeout(d, t)), u && (s = e.apply(o, r), o = r = null), s
                        }
                    }, h.wrap = function (e, t) {
                        return h.partial(t, e)
                    }, h.negate = function (e) {
                        return function () {
                            return !e.apply(this, arguments)
                        }
                    }, h.compose = function () {
                        var e = arguments, t = e.length - 1;
                        return function () {
                            for (var n = t, i = e[t].apply(this, arguments); n--;) i = e[n].call(this, i);
                            return i
                        }
                    }, h.after = function (e, t) {
                        return function () {
                            return --e < 1 ? t.apply(this, arguments) : void 0
                        }
                    }, h.before = function (e, t) {
                        var n;
                        return function () {
                            return --e > 0 ? n = t.apply(this, arguments) : t = null, n
                        }
                    }, h.once = h.partial(h.before, 2), h.keys = function (e) {
                        if (!h.isObject(e)) return [];
                        if (p) return p(e);
                        var t = [];
                        for (var n in e) h.has(e, n) && t.push(n);
                        return t
                    }, h.values = function (e) {
                        for (var t = h.keys(e), n = t.length, i = Array(n), r = 0; n > r; r++) i[r] = e[t[r]];
                        return i
                    }, h.pairs = function (e) {
                        for (var t = h.keys(e), n = t.length, i = Array(n), r = 0; n > r; r++) i[r] = [t[r], e[t[r]]];
                        return i
                    }, h.invert = function (e) {
                        for (var t = {}, n = h.keys(e), i = 0, r = n.length; r > i; i++) t[e[n[i]]] = n[i];
                        return t
                    }, h.functions = h.methods = function (e) {
                        var t = [];
                        for (var n in e) h.isFunction(e[n]) && t.push(n);
                        return t.sort()
                    }, h.extend = function (e) {
                        if (!h.isObject(e)) return e;
                        for (var t, n, i = 1, r = arguments.length; r > i; i++) {
                            t = arguments[i];
                            for (n in t) l.call(t, n) && (e[n] = t[n])
                        }
                        return e
                    }, h.pick = function (e, t, n) {
                        var i, r = {};
                        if (null == e) return r;
                        if (h.isFunction(t)) {
                            t = m(t, n);
                            for (i in e) {
                                var o = e[i];
                                t(o, i, e) && (r[i] = o)
                            }
                        } else {
                            var a = u.apply([], d.call(arguments, 1));
                            e = new Object(e);
                            for (var s = 0, c = a.length; c > s; s++) i = a[s], i in e && (r[i] = e[i])
                        }
                        return r
                    }, h.omit = function (e, t, n) {
                        if (h.isFunction(t)) t = h.negate(t); else {
                            var i = h.map(u.apply([], d.call(arguments, 1)), String);
                            t = function (e, t) {
                                return !h.contains(i, t)
                            }
                        }
                        return h.pick(e, t, n)
                    }, h.defaults = function (e) {
                        if (!h.isObject(e)) return e;
                        for (var t = 1, n = arguments.length; n > t; t++) {
                            var i = arguments[t];
                            for (var r in i) void 0 === e[r] && (e[r] = i[r])
                        }
                        return e
                    }, h.clone = function (e) {
                        return h.isObject(e) ? h.isArray(e) ? e.slice() : h.extend({}, e) : e
                    }, h.tap = function (e, t) {
                        return t(e), e
                    };
                    var S = function (e, t, n, i) {
                        if (e === t) return 0 !== e || 1 / e === 1 / t;
                        if (null == e || null == t) return e === t;
                        e instanceof h && (e = e._wrapped), t instanceof h && (t = t._wrapped);
                        var r = c.call(e);
                        if (r !== c.call(t)) return !1;
                        switch (r) {
                            case"[object RegExp]":
                            case"[object String]":
                                return "" + e == "" + t;
                            case"[object Number]":
                                return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                            case"[object Date]":
                            case"[object Boolean]":
                                return +e === +t
                        }
                        if ("object" != typeof e || "object" != typeof t) return !1;
                        for (var o = n.length; o--;) if (n[o] === e) return i[o] === t;
                        var a = e.constructor, s = t.constructor;
                        if (a !== s && "constructor" in e && "constructor" in t && !(h.isFunction(a) && a instanceof a && h.isFunction(s) && s instanceof s)) return !1;
                        n.push(e), i.push(t);
                        var d, u;
                        if ("[object Array]" === r) {
                            if (d = e.length, u = d === t.length) for (; d-- && (u = S(e[d], t[d], n, i));) ;
                        } else {
                            var l, f = h.keys(e);
                            if (d = f.length, u = h.keys(t).length === d) for (; d-- && (l = f[d], u = h.has(t, l) && S(e[l], t[l], n, i));) ;
                        }
                        return n.pop(), i.pop(), u
                    };
                    h.isEqual = function (e, t) {
                        return S(e, t, [], [])
                    }, h.isEmpty = function (e) {
                        if (null == e) return !0;
                        if (h.isArray(e) || h.isString(e) || h.isArguments(e)) return 0 === e.length;
                        for (var t in e) if (h.has(e, t)) return !1;
                        return !0
                    }, h.isElement = function (e) {
                        return !(!e || 1 !== e.nodeType)
                    }, h.isArray = f || function (e) {
                        return "[object Array]" === c.call(e)
                    }, h.isObject = function (e) {
                        var t = typeof e;
                        return "function" === t || "object" === t && !!e
                    }, h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
                        h["is" + e] = function (t) {
                            return c.call(t) === "[object " + e + "]"
                        }
                    }), h.isArguments(arguments) || (h.isArguments = function (e) {
                        return h.has(e, "callee")
                    }), "function" != typeof /./ && (h.isFunction = function (e) {
                        return "function" == typeof e || !1
                    }), h.isFinite = function (e) {
                        return isFinite(e) && !isNaN(parseFloat(e))
                    }, h.isNaN = function (e) {
                        return h.isNumber(e) && e !== +e
                    }, h.isBoolean = function (e) {
                        return e === !0 || e === !1 || "[object Boolean]" === c.call(e)
                    }, h.isNull = function (e) {
                        return null === e
                    }, h.isUndefined = function (e) {
                        return void 0 === e
                    }, h.has = function (e, t) {
                        return null != e && l.call(e, t)
                    }, h.noConflict = function () {
                        return n._ = i, this
                    }, h.identity = function (e) {
                        return e
                    }, h.constant = function (e) {
                        return function () {
                            return e
                        }
                    }, h.noop = function () {
                    }, h.property = function (e) {
                        return function (t) {
                            return t[e]
                        }
                    }, h.matches = function (e) {
                        var t = h.pairs(e), n = t.length;
                        return function (e) {
                            if (null == e) return !n;
                            e = new Object(e);
                            for (var i = 0; n > i; i++) {
                                var r = t[i], o = r[0];
                                if (r[1] !== e[o] || !(o in e)) return !1
                            }
                            return !0
                        }
                    }, h.times = function (e, t, n) {
                        var i = Array(Math.max(0, e));
                        t = m(t, n, 1);
                        for (var r = 0; e > r; r++) i[r] = t(r);
                        return i
                    }, h.random = function (e, t) {
                        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
                    }, h.now = Date.now || function () {
                        return (new Date).getTime()
                    };
                    var w = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"},
                        E = h.invert(w), C = function (e) {
                            var t = function (t) {
                                return e[t]
                            }, n = "(?:" + h.keys(e).join("|") + ")", i = RegExp(n), r = RegExp(n, "g");
                            return function (e) {
                                return e = null == e ? "" : "" + e, i.test(e) ? e.replace(r, t) : e
                            }
                        };
                    h.escape = C(w), h.unescape = C(E), h.result = function (e, t) {
                        if (null == e) return void 0;
                        var n = e[t];
                        return h.isFunction(n) ? e[t]() : n
                    };
                    var I = 0;
                    h.uniqueId = function (e) {
                        var t = ++I + "";
                        return e ? e + t : t
                    }, h.templateSettings = {
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g,
                        escape: /<%-([\s\S]+?)%>/g
                    };
                    var T = /(.)^/,
                        A = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
                        x = /\\|'|\r|\n|\u2028|\u2029/g, R = function (e) {
                            return "\\" + A[e]
                        };
                    h.template = function (e, t, n) {
                        !t && n && (t = n), t = h.defaults({}, t, h.templateSettings);
                        var i = RegExp([(t.escape || T).source, (t.interpolate || T).source, (t.evaluate || T).source].join("|") + "|$", "g"),
                            r = 0, o = "__p+='";
                        e.replace(i, function (t, n, i, a, s) {
                            return o += e.slice(r, s).replace(x, R), r = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
                        }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                        try {
                            var a = new Function(t.variable || "obj", "_", o)
                        } catch (s) {
                            throw s.source = o, s
                        }
                        var d = function (e) {
                            return a.call(this, e, h)
                        }, u = t.variable || "obj";
                        return d.source = "function(" + u + "){\n" + o + "}", d
                    }, h.chain = function (e) {
                        var t = h(e);
                        return t._chain = !0, t
                    };
                    var G = function (e) {
                        return this._chain ? h(e).chain() : e
                    };
                    h.mixin = function (e) {
                        h.each(h.functions(e), function (t) {
                            var n = h[t] = e[t];
                            h.prototype[t] = function () {
                                var e = [this._wrapped];
                                return s.apply(e, arguments), G.call(this, n.apply(h, e))
                            }
                        })
                    }, h.mixin(h), h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                        var t = r[e];
                        h.prototype[e] = function () {
                            var n = this._wrapped;
                            return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], G.call(this, n)
                        }
                    }), h.each(["concat", "join", "slice"], function (e) {
                        var t = r[e];
                        h.prototype[e] = function () {
                            return G.call(this, t.apply(this._wrapped, arguments))
                        }
                    }), h.prototype.value = function () {
                        return this._wrapped
                    }, "function" == typeof undefined && undefined.amd && undefined("underscore", [], function () {
                        return h
                    })
                }).call(commonjsGlobal)
            }(underscore, underscore.exports);
            var _ = underscore.exports, originalOptions, ConfigReader = function () {
                    function e(e) {
                        return get(e, "supportedSources", [m, v, b])
                    }

                    function t(e) {
                        return get(e, "key") || get(e, "name")
                    }

                    function n(e, n) {
                        if (n) {
                            var i = n(), r = get(i.lookup, t(e));
                            return doesExist(r) ? r : undefined
                        }
                    }

                    function i(e, t) {
                        var i = n(e, w[t]);
                        return new s(e.name, i, t)
                    }

                    function r(t, n) {
                        return n = n || e(t), l(g(n, _.partial(i, t)), function (e) {
                            return doesExist(e.value)
                        })
                    }

                    function o(e, t, n) {
                        var i = E(e);
                        t = t || get(i, "defaultValue", null);
                        var o = new s(e, t, y), a = r(i, n);
                        return i.useAnySource && doesExist(t) ? p(a, function (e) {
                            return e.value !== t
                        }) || o : f(a) || o
                    }

                    function a(e) {
                        var t = E(e), n = l(r(t), function (e) {
                            return e.source !== y
                        });
                        return n.length < 2 ? [] : u(h(n, "value"), function (e) {
                            return e === n[0].value
                        }) ? [] : n
                    }

                    function s(e, t, n) {
                        this.name = e, this.value = t, this.source = n
                    }

                    function d() {
                        var e = [];
                        return c(S, function (t) {
                            e.push({name: t.name, active: o(t.name), conflicts: a(t.name)})
                        }), e
                    }

                    var u = _.all, c = _.each, l = _.filter, f = _.first, p = _.find, g = _.map, h = _.pluck, m = "snippet",
                        v = "pendoconfig", b = "global", y = "default", S = [{
                            name: "preventCodeInjection",
                            defaultValue: !1,
                            supportedSources: [v, m, b]
                        }, {name: "pendoCore", defaultValue: !0, supportedSources: [v]}, {
                            name: "apiKey",
                            supportedSources: [v, m]
                        }, {name: "additionalApiKeys", supportedSources: [v, m]}, {
                            name: "adoptPrioritizeAdoptGuides",
                            defaultValue: !1,
                            supportedSources: [v]
                        }, {
                            name: "enableDesignerKeyboardShortcut",
                            supportedSources: [m]
                        }, {
                            name: "disableDesignerKeyboardShortcut",
                            defaultValue: !1,
                            supportedSources: [v]
                        }, {name: "pendoFeedback", defaultValue: !1, supportedSources: [v]}, {
                            name: "disableFeedback",
                            supportedSources: [m]
                        }, {name: "disableFeedbackAutoInit", supportedSources: [v]}, {
                            name: "cookieDomain",
                            supportedSources: [m, v]
                        }, {name: "feedbackSettings", supportedSources: [v]}, {
                            name: "htmlAttributes",
                            supportedSources: [v]
                        }, {name: "htmlAttributeBlacklist", supportedSources: [v]}, {
                            name: "xhrTimings",
                            supportedSources: [v]
                        }, {name: "localStorageOnly", supportedSources: [m, v]}, {
                            name: "disableCookies",
                            supportedSources: [m, v]
                        }, {name: "freeNPSData", supportedSources: [v]}, {
                            name: "feedbackSettings",
                            supportedSources: [v],
                            defaultValue: {}
                        }, {name: "contentHost", supportedSources: [m, v]}, {
                            name: "guideSeenTimeoutLength",
                            supportedSources: [v, m],
                            defaultValue: 1e4
                        }, {name: "disableGlobalCSS", supportedSources: [m, v], defaultValue: !1}, {
                            name: "disablePersistence",
                            supportedSources: [v, m]
                        }, {
                            name: "enableSignedMetadata",
                            supportedSources: [v],
                            defaultValue: !1
                        }, {name: "requireSignedMetadata", supportedSources: [v], defaultValue: !1}, {
                            name: "guideValidation",
                            supportedSources: [m, v],
                            defaultValue: !1
                        }, {
                            name: "enableGuideTimeout",
                            supportedSources: [v, m],
                            defaultValue: !1
                        }, {name: "blockAgentMetadata", supportedSources: [v], defaultValue: !1}, {
                            name: "adoptHost",
                            supportedSources: [v]
                        }, {name: "allowedText", supportedSources: [m, v], defaultValue: []}, {
                            name: "excludeAllText",
                            supportedSources: [v, m],
                            defaultValue: !1,
                            useAnySource: !0
                        }, {name: "dataHost", supportedSources: [v, m]}, {
                            name: "ignoreHashRouting",
                            supportedSources: [v, m]
                        }, {name: "xhrWhitelist", supportedSources: [v]}, {
                            name: "preferBroadcastChannel",
                            supportedSources: [m, v],
                            defaultValue: !1
                        }, {
                            name: "preferMutationObserver",
                            supportedSources: [m, v],
                            defaultValue: !1
                        }, {
                            name: "preventUnloadListener",
                            supportedSources: [m, v],
                            defaultValue: !1
                        }, {
                            name: "guideValidation",
                            supportedSources: [m, v],
                            defaultValue: !1
                        }, {name: "disableGuidePseudoStyles", supportedSources: [m, v], defaultValue: !1}, {
                            name: "annotateUrl",
                            supportedSources: [m]
                        }, {name: "sanitizeUrl", supportedSources: [m]}, {
                            name: "queryStringWhitelist",
                            supportedSources: [m]
                        }, {name: "delayGuides", supportedSources: [m]}, {
                            name: "guides.delay",
                            supportedSources: [m]
                        }, {name: "guideTimeout", supportedSources: [m]}, {
                            name: "guides.timeout",
                            supportedSources: [m]
                        }, {name: "disableGuides", supportedSources: [m]}, {
                            name: "guides.disabled",
                            supportedSources: [m]
                        }, {name: "guides.tooltip.arrowSize", supportedSources: [m]}, {
                            name: "guides.attachPoint",
                            supportedSources: [m]
                        }, {name: "disablePrefetch", supportedSources: [m, v]}, {
                            name: "initializeImmediately",
                            supportedSources: [m, v],
                            defaultValue: !1
                        }, {name: "disableAutoInitialize", supportedSources: [v]}, {
                            name: "enableDebugEvents",
                            supportedSources: [m, v]
                        }, {name: "previewModeAssetPath", supportedSources: [v]}, {
                            name: "installType",
                            supportedSources: [v]
                        }, {name: "designerAgentPluginsLoader", supportedSources: [v]}, {
                            name: "trainingPartner",
                            supportedSources: [v]
                        }, {name: "guideCssAssetPath", supportedSources: [v]}, {
                            name: "forceParentDesigner",
                            supportedSources: [m]
                        }, {name: "siblingSelectors", supportedSources: [v]}, {
                            name: "allowedOriginServers",
                            supportedSources: [v]
                        }, {name: "selfHosted", supportedSources: [v]}, {
                            name: "interceptElementRemoval",
                            supportedSources: [v, m],
                            defaultValue: !1
                        }, {name: "excludeNonGuideAnalytics", supportedSources: [v], defaultValue: !1}], w = {};
                    w[m] = function () {
                        return {lookup: originalOptions || window.pendo_options, name: m}
                    }, w[v] = function () {
                        var e = getPendoConfig();
                        return {lookup: e, name: v}
                    }, w[b] = function () {
                        return {lookup: pendo$1, name: b}
                    };
                    var E = _.partial(function (e, t) {
                        return t[e] || {name: e}
                    }, _, _.indexBy(S, "name"));
                    return s.prototype.toString = function () {
                        return "Config option `" + this.name + "` with value `" + this.value + "` from source `" + this.source + "`"
                    }, {
                        audit: d, get: function (e, t) {
                            var n = o(e, t);
                            return n.value
                        }, getLocalConfig: function (e, t) {
                            return o(e, t, [m]).value
                        }, getHostedConfig: function (e, t) {
                            return o(e, t, [v]).value
                        }, getOriginalOptions: function () {
                            return originalOptions
                        }, setOriginalOptions: function (e) {
                            originalOptions = e
                        }, options: h(S, "name"), validate: function (e) {
                            e.groupCollapsed("Validate Config options"), c(d(), function (t) {
                                e.log(String(t.active)), t.conflicts.length > 0 && (e.warn("Multiple sources found with values for " + t.name), c(t.conflicts, function (t) {
                                    e.warn(String(t))
                                }))
                            }), e.groupEnd()
                        }
                    }
                }(), PROD = "prod", EXTENSION_INSTALL_TYPE = "extension", NATIVE_INSTALL_TYPE = "native",
                isOldIE = function (e, t) {
                    return e = e || 10, t = isNaN(trident) ? !1 : t ? t > trident : !0, t && e > msie
                }, msie, trident, lowercase = function (e) {
                    return isString(e) ? e.toLowerCase() : e
                }, determineMSIE = function (e) {
                    var t = pint((/msie (\d+)/.exec(lowercase(e)) || [])[1]);
                    return isNaN(t) && (t = pint((/trident\/.*; rv:(\d+)/.exec(lowercase(e)) || [])[1])), t
                };
            msie = determineMSIE(navigator.userAgent);
            var determineTrident = function (e, t) {
                var n = pint((/trident\/(\d+)/.exec(lowercase(e)) || [])[1]);
                return isNaN(n) && 7 == t && (n = 3), n
            };
            trident = determineTrident(navigator.userAgent, msie);
            var eventSupport = {},
                android = pint((/android (\d+)/.exec(lowercase((window.navigator || {}).userAgent)) || [])[1]),
                boxee = /Boxee/i.test((window.navigator || {}).userAgent), pdocument = window.document || {},
                documentMode = pdocument.documentMode, vendorPrefix, vendorRegex = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                bodyStyle = pdocument.body && pdocument.body.style, transitions = !1, animations = !1, match;
            if (bodyStyle) {
                for (var prop in bodyStyle) if (match = vendorRegex.exec(prop)) {
                    vendorPrefix = match[0], vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
                    break
                }
                vendorPrefix || (vendorPrefix = "WebkitOpacity" in bodyStyle && "webkit"), transitions = !!("transition" in bodyStyle || vendorPrefix + "Transition" in bodyStyle), animations = !!("animation" in bodyStyle || vendorPrefix + "Animation" in bodyStyle), !android || transitions && animations || (transitions = isString(pdocument.body.style.webkitTransition), animations = isString(pdocument.body.style.webkitAnimation))
            }
            var sniffer = {
                    supportsHistoryApi: shouldWrapNativeHistory,
                    supportsHashChange: shouldWrapHashChange,
                    hasEvent: function (e) {
                        if ("input" == e && 9 == msie) return !1;
                        if (isUndefined(eventSupport[e])) {
                            var t = pdocument.createElement("div");
                            eventSupport[e] = "on" + e in t
                        }
                        return eventSupport[e]
                    },
                    vendorPrefix: vendorPrefix,
                    transitions: transitions,
                    animations: animations,
                    android: android,
                    msie: msie,
                    msieDocumentMode: documentMode,
                    safari: /apple/i.test(navigator.vendor),
                    sri: "integrity" in document.createElement("script"),
                    addEventListener: _.isFunction(window.addEventListener),
                    MutationObserver: isNativeCode(window.MutationObserver),
                    isMiniumumIEVersion: isMiniumumIEVersion
                }, isBrowserInQuirksmode = function () {
                    return isNaN(msie) ? !1 : 11 == msie ? !1 : "CSS1Compat" !== document.compatMode
                }, buildArrowDimensionsQM = function (e, t) {
                    var n = e.height, i = e.width;
                    if ("top" == e.arrowPosition || "bottom" == e.arrowPosition) {
                        var r = 10, o = 0;
                        return "top" == e.arrowPosition ? (e.top = t.top + t.height, o = -1, e.arrow.top = 3, 9 >= msie && (e.arrow.top = 6)) : "bottom" == e.arrowPosition && (e.top = t.top - (n + pendo$1.TOOLTIP_ARROW_SIZE), e.arrow.top = n - pendo$1.TOOLTIP_ARROW_SIZE, 10 == msie ? e.arrow.top-- : 9 >= msie && (e.arrow.top += 4), o = 1), "left" == e.arrow.hbias ? (e.left = t.left + t.width / 2 - (r + 2 * pendo$1.TOOLTIP_ARROW_SIZE), e.arrow.left = r + pendo$1.TOOLTIP_ARROW_SIZE) : "right" == e.arrow.hbias ? (e.left = t.left - i + t.width / 2 + (r + 2 * pendo$1.TOOLTIP_ARROW_SIZE), e.arrow.left = i - 3 * pendo$1.TOOLTIP_ARROW_SIZE - r) : (e.left = t.left + t.width / 2 - i / 2, e.arrow.left = i / 2 - pendo$1.TOOLTIP_ARROW_SIZE), e.arrow.border.top = e.arrow.top + o, e.arrow.border.left = e.arrow.left, e
                    }
                    return "left" == e.arrow.hbias ? (e.left = t.left + t.width, e.arrow.left = 1, e.arrow.left += 5, e.arrow.border.left = e.arrow.left - 1) : "right" == e.arrow.hbias && (e.left = Math.max(0, t.left - i - pendo$1.TOOLTIP_ARROW_SIZE), e.arrow.left = i - pendo$1.TOOLTIP_ARROW_SIZE - 1, e.arrow.left += 5, e.arrow.border.left = e.arrow.left + 1), e.top = t.top + t.height / 2 - n / 2, e.arrow.top = n / 2 - pendo$1.TOOLTIP_ARROW_SIZE, e.arrow.border.top = e.arrow.top, e
                }, ENV = "prod", SERVER = "https://app.pendo.io", ASSET_HOST = "cdn.pendo.io", DESIGNER_ENV = "prod",
                VERSION = "2.134.1_prod", PACKAGE_VERSION = "2.134.1", getUA = function () {
                    return navigator.userAgent
                }, getVersion = function () {
                    return isBrowserInQuirksmode() ? VERSION + "+quirksmode" : VERSION
                }, JSON = window.JSON;
            JSON && "function" == typeof JSON.stringify && '{"props":{}}' === JSON.stringify({props: {}}) || (JSON = {}), function () {
                function f(e) {
                    return 10 > e ? "0" + e : e
                }

                function quote(e) {
                    return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
                        var t = meta[e];
                        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + e + '"'
                }

                function str(e, t) {
                    var n, i, r, o, a, s = gap, d = t[e];
                    switch (d && "object" == typeof d && "function" == typeof d.toJSON && (d = d.toJSON(e)), "function" == typeof rep && (d = rep.call(t, e, d)), typeof d) {
                        case"string":
                            return quote(d);
                        case"number":
                            return isFinite(d) ? String(d) : "null";
                        case"boolean":
                        case"null":
                            return String(d);
                        case"object":
                            if (!d) return "null";
                            if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(d)) {
                                for (o = d.length, n = 0; o > n; n += 1) a[n] = str(n, d) || "null";
                                return r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, r
                            }
                            if (rep && "object" == typeof rep) for (o = rep.length, n = 0; o > n; n += 1) "string" == typeof rep[n] && (i = rep[n], r = str(i, d), r && a.push(quote(i) + (gap ? ": " : ":") + r)); else for (i in d) Object.prototype.hasOwnProperty.call(d, i) && (r = str(i, d), r && a.push(quote(i) + (gap ? ": " : ":") + r));
                            return r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, r
                    }
                }

                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (e) {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
                    return this.valueOf()
                });
                var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    gap, indent, meta = {
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    }, rep;
                "function" != typeof JSON.stringify && (JSON.stringify = function (e, t, n) {
                    var i;
                    if (gap = "", indent = "", "number" == typeof n) for (i = 0; n > i; i += 1) indent += " "; else "string" == typeof n && (indent = n);
                    if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                    return str("", {"": e})
                }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                    function walk(e, t) {
                        var n, i, r = e[t];
                        if (r && "object" == typeof r) for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (i = walk(r, n), i !== undefined ? r[n] = i : delete r[n]);
                        return reviver.call(e, t, r)
                    }

                    var j;
                    if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
                    throw new SyntaxError("JSON.parse")
                })
            }();
            var deflate_min = {exports: {}};
            !function (e) {
                (function () {
                   // "use strict";

                    function e(e, t) {
                        var n = e.split("."), i = g;
                        !(n[0] in i) && i.execScript && i.execScript("var " + n[0]);
                        for (var r; n.length && (r = n.shift());) n.length || t === f ? i = i[r] ? i[r] : i[r] = {} : i[r] = t
                    }

                    function t(e, t) {
                        if (this.index = "number" == typeof t ? t : 0, this.e = 0, this.buffer = e instanceof (h ? Uint8Array : Array) ? e : new (h ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index) throw Error("invalid index");
                        this.buffer.length <= this.index && n(this)
                    }

                    function n(e) {
                        var t, n = e.buffer, i = n.length, r = new (h ? Uint8Array : Array)(i << 1);
                        if (h) r.set(n); else for (t = 0; i > t; ++t) r[t] = n[t];
                        return e.buffer = r
                    }

                    function i(e) {
                        this.buffer = new (h ? Uint16Array : Array)(2 * e), this.length = 0
                    }

                    function r(e, t) {
                        this.d = E, this.i = 0, this.input = h && e instanceof Array ? new Uint8Array(e) : e, this.c = 0, t && (t.lazy && (this.i = t.lazy), "number" == typeof t.compressionType && (this.d = t.compressionType), t.outputBuffer && (this.a = h && t.outputBuffer instanceof Array ? new Uint8Array(t.outputBuffer) : t.outputBuffer), "number" == typeof t.outputIndex && (this.c = t.outputIndex)), this.a || (this.a = new (h ? Uint8Array : Array)(32768))
                    }

                    function o(e, t) {
                        this.length = e, this.k = t
                    }

                    function a(e, t) {
                        function n(e, t) {
                            var n, i = e.k, r = [], o = 0;
                            n = A[e.length], r[o++] = 65535 & n, r[o++] = n >> 16 & 255, r[o++] = n >> 24;
                            var a;
                            switch (p) {
                                case 1 === i:
                                    a = [0, i - 1, 0];
                                    break;
                                case 2 === i:
                                    a = [1, i - 2, 0];
                                    break;
                                case 3 === i:
                                    a = [2, i - 3, 0];
                                    break;
                                case 4 === i:
                                    a = [3, i - 4, 0];
                                    break;
                                case 6 >= i:
                                    a = [4, i - 5, 1];
                                    break;
                                case 8 >= i:
                                    a = [5, i - 7, 1];
                                    break;
                                case 12 >= i:
                                    a = [6, i - 9, 2];
                                    break;
                                case 16 >= i:
                                    a = [7, i - 13, 2];
                                    break;
                                case 24 >= i:
                                    a = [8, i - 17, 3];
                                    break;
                                case 32 >= i:
                                    a = [9, i - 25, 3];
                                    break;
                                case 48 >= i:
                                    a = [10, i - 33, 4];
                                    break;
                                case 64 >= i:
                                    a = [11, i - 49, 4];
                                    break;
                                case 96 >= i:
                                    a = [12, i - 65, 5];
                                    break;
                                case 128 >= i:
                                    a = [13, i - 97, 5];
                                    break;
                                case 192 >= i:
                                    a = [14, i - 129, 6];
                                    break;
                                case 256 >= i:
                                    a = [15, i - 193, 6];
                                    break;
                                case 384 >= i:
                                    a = [16, i - 257, 7];
                                    break;
                                case 512 >= i:
                                    a = [17, i - 385, 7];
                                    break;
                                case 768 >= i:
                                    a = [18, i - 513, 8];
                                    break;
                                case 1024 >= i:
                                    a = [19, i - 769, 8];
                                    break;
                                case 1536 >= i:
                                    a = [20, i - 1025, 9];
                                    break;
                                case 2048 >= i:
                                    a = [21, i - 1537, 9];
                                    break;
                                case 3072 >= i:
                                    a = [22, i - 2049, 10];
                                    break;
                                case 4096 >= i:
                                    a = [23, i - 3073, 10];
                                    break;
                                case 6144 >= i:
                                    a = [24, i - 4097, 11];
                                    break;
                                case 8192 >= i:
                                    a = [25, i - 6145, 11];
                                    break;
                                case 12288 >= i:
                                    a = [26, i - 8193, 12];
                                    break;
                                case 16384 >= i:
                                    a = [27, i - 12289, 12];
                                    break;
                                case 24576 >= i:
                                    a = [28, i - 16385, 13];
                                    break;
                                case 32768 >= i:
                                    a = [29, i - 24577, 13];
                                    break;
                                default:
                                    throw"invalid distance"
                            }
                            n = a, r[o++] = n[0], r[o++] = n[1], r[o++] = n[2];
                            var s, d;
                            for (s = 0, d = r.length; d > s; ++s) v[b++] = r[s];
                            y[r[0]]++, S[r[3]]++, _ = e.length + t - 1, l = null
                        }

                        var i, r, o, a, d, u, c, l, g, m = {}, v = h ? new Uint16Array(2 * t.length) : [], b = 0, _ = 0,
                            y = new (h ? Uint32Array : Array)(286), S = new (h ? Uint32Array : Array)(30), w = e.i;
                        if (!h) {
                            for (o = 0; 285 >= o;) y[o++] = 0;
                            for (o = 0; 29 >= o;) S[o++] = 0
                        }
                        for (y[256] = 1, i = 0, r = t.length; r > i; ++i) {
                            for (o = d = 0, a = 3; a > o && i + o !== r; ++o) d = d << 8 | t[i + o];
                            if (m[d] === f && (m[d] = []), u = m[d], !(0 < _--)) {
                                for (; 0 < u.length && 32768 < i - u[0];) u.shift();
                                if (i + 3 >= r) {
                                    for (l && n(l, -1), o = 0, a = r - i; a > o; ++o) g = t[i + o], v[b++] = g, ++y[g];
                                    break
                                }
                                0 < u.length ? (c = s(t, i, u), l ? l.length < c.length ? (g = t[i - 1], v[b++] = g, ++y[g], n(c, 0)) : n(l, -1) : c.length < w ? l = c : n(c, 0)) : l ? n(l, -1) : (g = t[i], v[b++] = g, ++y[g])
                            }
                            u.push(i)
                        }
                        return v[b++] = 256, y[256]++, e.m = y, e.l = S, h ? v.subarray(0, b) : v
                    }

                    function s(e, t, n) {
                        var i, r, a, s, d, u, c = 0, l = e.length;
                        s = 0, u = n.length;
                        e:for (; u > s; s++) {
                            if (i = n[u - s - 1], a = 3, c > 3) {
                                for (d = c; d > 3; d--) if (e[i + d - 1] !== e[t + d - 1]) continue e;
                                a = c
                            }
                            for (; 258 > a && l > t + a && e[i + a] === e[t + a];) ++a;
                            if (a > c && (r = i, c = a), 258 === a) break
                        }
                        return new o(c, t - r)
                    }

                    function d(e, t) {
                        var n, r, o, a, s, d = e.length, c = new i(572), l = new (h ? Uint8Array : Array)(d);
                        if (!h) for (a = 0; d > a; a++) l[a] = 0;
                        for (a = 0; d > a; ++a) 0 < e[a] && c.push(a, e[a]);
                        if (n = Array(c.length / 2), r = new (h ? Uint32Array : Array)(c.length / 2), 1 === n.length) return l[c.pop().index] = 1, l;
                        for (a = 0, s = c.length / 2; s > a; ++a) n[a] = c.pop(), r[a] = n[a].value;
                        for (o = u(r, r.length, t), a = 0, s = n.length; s > a; ++a) l[n[a].index] = o[a];
                        return l
                    }

                    function u(e, t, n) {
                        function i(e) {
                            var n = p[e][g[e]];
                            n === t ? (i(e + 1), i(e + 1)) : --l[n], ++g[e]
                        }

                        var r, o, a, s, d, u = new (h ? Uint16Array : Array)(n), c = new (h ? Uint8Array : Array)(n),
                            l = new (h ? Uint8Array : Array)(t), f = Array(n), p = Array(n), g = Array(n),
                            m = (1 << n) - t, v = 1 << n - 1;
                        for (u[n - 1] = t, o = 0; n > o; ++o) v > m ? c[o] = 0 : (c[o] = 1, m -= v), m <<= 1, u[n - 2 - o] = (u[n - 1 - o] / 2 | 0) + t;
                        for (u[0] = c[0], f[0] = Array(u[0]), p[0] = Array(u[0]), o = 1; n > o; ++o) u[o] > 2 * u[o - 1] + c[o] && (u[o] = 2 * u[o - 1] + c[o]), f[o] = Array(u[o]), p[o] = Array(u[o]);
                        for (r = 0; t > r; ++r) l[r] = n;
                        for (a = 0; a < u[n - 1]; ++a) f[n - 1][a] = e[a], p[n - 1][a] = a;
                        for (r = 0; n > r; ++r) g[r] = 0;
                        for (1 === c[n - 1] && (--l[0], ++g[n - 1]), o = n - 2; o >= 0; --o) {
                            for (s = r = 0, d = g[o + 1], a = 0; a < u[o]; a++) s = f[o + 1][d] + f[o + 1][d + 1], s > e[r] ? (f[o][a] = s, p[o][a] = t, d += 2) : (f[o][a] = e[r], p[o][a] = r, ++r);
                            g[o] = 0, 1 === c[o] && i(o)
                        }
                        return l
                    }

                    function c(e) {
                        var t, n, i, r, o = new (h ? Uint16Array : Array)(e.length), a = [], s = [], d = 0;
                        for (t = 0, n = e.length; n > t; t++) a[e[t]] = (0 | a[e[t]]) + 1;
                        for (t = 1, n = 16; n >= t; t++) s[t] = d, d += 0 | a[t], d <<= 1;
                        for (t = 0, n = e.length; n > t; t++) for (d = s[e[t]], s[e[t]] += 1, i = o[t] = 0, r = e[t]; r > i; i++) o[t] = o[t] << 1 | 1 & d, d >>>= 1;
                        return o
                    }

                    function l(e, t) {
                        this.input = e, this.a = new (h ? Uint8Array : Array)(32768), this.d = x.g;
                        var n, i = {};
                        !t && (t = {}) || "number" != typeof t.compressionType || (this.d = t.compressionType);
                        for (n in t) i[n] = t[n];
                        i.outputBuffer = this.a, this.j = new r(this.input, i)
                    }

                    var f = void 0, p = !0, g = this,
                        h = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array;
                    t.prototype.b = function (e, t, i) {
                        var r, o = this.buffer, a = this.index, s = this.e, d = o[a];
                        if (i && t > 1 && (e = t > 8 ? (S[255 & e] << 24 | S[e >>> 8 & 255] << 16 | S[e >>> 16 & 255] << 8 | S[e >>> 24 & 255]) >> 32 - t : S[e] >> 8 - t), 8 > t + s) d = d << t | e, s += t; else for (r = 0; t > r; ++r) d = d << 1 | e >> t - r - 1 & 1, 8 === ++s && (s = 0, o[a++] = S[d], d = 0, a === o.length && (o = n(this)));
                        o[a] = d, this.buffer = o, this.e = s, this.index = a
                    }, t.prototype.finish = function () {
                        var e, t = this.buffer, n = this.index;
                        return 0 < this.e && (t[n] <<= 8 - this.e, t[n] = S[t[n]], n++), h ? e = t.subarray(0, n) : (t.length = n, e = t), e
                    };
                    var m, v = new (h ? Uint8Array : Array)(256);
                    for (m = 0; 256 > m; ++m) {
                        for (var b = m, _ = b, y = 7, b = b >>> 1; b; b >>>= 1) _ <<= 1, _ |= 1 & b, --y;
                        v[m] = (_ << y & 255) >>> 0
                    }
                    var S = v;
                    i.prototype.getParent = function (e) {
                        return 2 * ((e - 2) / 4 | 0)
                    }, i.prototype.push = function (e, t) {
                        var n, i, r, o = this.buffer;
                        for (n = this.length, o[this.length++] = t, o[this.length++] = e; n > 0 && (i = this.getParent(n), o[n] > o[i]);) r = o[n], o[n] = o[i], o[i] = r, r = o[n + 1], o[n + 1] = o[i + 1], o[i + 1] = r, n = i;
                        return this.length
                    }, i.prototype.pop = function () {
                        var e, t, n, i, r, o = this.buffer;
                        for (t = o[0], e = o[1], this.length -= 2, o[0] = o[this.length], o[1] = o[this.length + 1], r = 0; (i = 2 * r + 2, !(i >= this.length)) && (i + 2 < this.length && o[i + 2] > o[i] && (i += 2), o[i] > o[r]);) n = o[r], o[r] = o[i], o[i] = n, n = o[r + 1], o[r + 1] = o[i + 1], o[i + 1] = n, r = i;
                        return {index: e, value: t, length: this.length}
                    };
                    var w, E = 2, C = {NONE: 0, h: 1, g: E, n: 3}, I = [];
                    for (w = 0; 288 > w; w++) switch (p) {
                        case 143 >= w:
                            I.push([w + 48, 8]);
                            break;
                        case 255 >= w:
                            I.push([w - 144 + 400, 9]);
                            break;
                        case 279 >= w:
                            I.push([w - 256 + 0, 7]);
                            break;
                        case 287 >= w:
                            I.push([w - 280 + 192, 8]);
                            break;
                        default:
                            throw"invalid literal: " + w
                    }
                    r.prototype.f = function () {
                        var e, n, i, r, o = this.input;
                        switch (this.d) {
                            case 0:
                                for (i = 0, r = o.length; r > i;) {
                                    n = h ? o.subarray(i, i + 65535) : o.slice(i, i + 65535), i += n.length;
                                    var s = n, u = i === r, l = f, g = f, m = f, v = f, b = f, _ = this.a, y = this.c;
                                    if (h) {
                                        for (_ = new Uint8Array(this.a.buffer); _.length <= y + s.length + 5;) _ = new Uint8Array(_.length << 1);
                                        _.set(this.a)
                                    }
                                    if (l = u ? 1 : 0, _[y++] = 0 | l, g = s.length, m = ~g + 65536 & 65535, _[y++] = 255 & g, _[y++] = g >>> 8 & 255, _[y++] = 255 & m, _[y++] = m >>> 8 & 255, h) _.set(s, y), y += s.length, _ = _.subarray(0, y); else {
                                        for (v = 0, b = s.length; b > v; ++v) _[y++] = s[v];
                                        _.length = y
                                    }
                                    this.c = y, this.a = _
                                }
                                break;
                            case 1:
                                var S = new t(h ? new Uint8Array(this.a.buffer) : this.a, this.c);
                                S.b(1, 1, p), S.b(1, 2, p);
                                var w, C, T, A = a(this, o);
                                for (w = 0, C = A.length; C > w; w++) if (T = A[w], t.prototype.b.apply(S, I[T]), T > 256) S.b(A[++w], A[++w], p), S.b(A[++w], 5), S.b(A[++w], A[++w], p); else if (256 === T) break;
                                this.a = S.finish(), this.c = this.a.length;
                                break;
                            case E:
                                var x, R, G, L, O, N, B, k, P, D, F, M, U, H, z,
                                    W = new t(h ? new Uint8Array(this.a.buffer) : this.a, this.c),
                                    j = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                                    V = Array(19);
                                for (x = E, W.b(1, 1, p), W.b(x, 2, p), R = a(this, o), N = d(this.m, 15), B = c(N), k = d(this.l, 7), P = c(k), G = 286; G > 257 && 0 === N[G - 1]; G--) ;
                                for (L = 30; L > 1 && 0 === k[L - 1]; L--) ;
                                var $, J, q, K, X, Y, Z = G, Q = L, ee = new (h ? Uint32Array : Array)(Z + Q),
                                    te = new (h ? Uint32Array : Array)(316), ne = new (h ? Uint8Array : Array)(19);
                                for ($ = J = 0; Z > $; $++) ee[J++] = N[$];
                                for ($ = 0; Q > $; $++) ee[J++] = k[$];
                                if (!h) for ($ = 0, K = ne.length; K > $; ++$) ne[$] = 0;
                                for ($ = X = 0, K = ee.length; K > $; $ += J) {
                                    for (J = 1; K > $ + J && ee[$ + J] === ee[$]; ++J) ;
                                    if (q = J, 0 === ee[$]) if (3 > q) for (; 0 < q--;) te[X++] = 0, ne[0]++; else for (; q > 0;) Y = 138 > q ? q : 138, Y > q - 3 && q > Y && (Y = q - 3), 10 >= Y ? (te[X++] = 17, te[X++] = Y - 3, ne[17]++) : (te[X++] = 18, te[X++] = Y - 11, ne[18]++), q -= Y; else if (te[X++] = ee[$], ne[ee[$]]++, q--, 3 > q) for (; 0 < q--;) te[X++] = ee[$], ne[ee[$]]++; else for (; q > 0;) Y = 6 > q ? q : 6, Y > q - 3 && q > Y && (Y = q - 3), te[X++] = 16, te[X++] = Y - 3, ne[16]++, q -= Y
                                }
                                for (e = h ? te.subarray(0, X) : te.slice(0, X), D = d(ne, 7), H = 0; 19 > H; H++) V[H] = D[j[H]];
                                for (O = 19; O > 4 && 0 === V[O - 1]; O--) ;
                                for (F = c(D), W.b(G - 257, 5, p), W.b(L - 1, 5, p), W.b(O - 4, 4, p), H = 0; O > H; H++) W.b(V[H], 3, p);
                                for (H = 0, z = e.length; z > H; H++) if (M = e[H], W.b(F[M], D[M], p), M >= 16) {
                                    switch (H++, M) {
                                        case 16:
                                            U = 2;
                                            break;
                                        case 17:
                                            U = 3;
                                            break;
                                        case 18:
                                            U = 7;
                                            break;
                                        default:
                                            throw"invalid code: " + M
                                    }
                                    W.b(e[H], U, p)
                                }
                                var ie, re, oe, ae, se, de, ue, ce, le = [B, N], fe = [P, k];
                                for (se = le[0], de = le[1], ue = fe[0], ce = fe[1], ie = 0, re = R.length; re > ie; ++ie) if (oe = R[ie], W.b(se[oe], de[oe], p), oe > 256) W.b(R[++ie], R[++ie], p), ae = R[++ie], W.b(ue[ae], ce[ae], p), W.b(R[++ie], R[++ie], p); else if (256 === oe) break;
                                this.a = W.finish(), this.c = this.a.length;
                                break;
                            default:
                                throw"invalid compression type"
                        }
                        return this.a
                    };
                    var T = function () {
                        function e(e) {
                            switch (p) {
                                case 3 === e:
                                    return [257, e - 3, 0];
                                case 4 === e:
                                    return [258, e - 4, 0];
                                case 5 === e:
                                    return [259, e - 5, 0];
                                case 6 === e:
                                    return [260, e - 6, 0];
                                case 7 === e:
                                    return [261, e - 7, 0];
                                case 8 === e:
                                    return [262, e - 8, 0];
                                case 9 === e:
                                    return [263, e - 9, 0];
                                case 10 === e:
                                    return [264, e - 10, 0];
                                case 12 >= e:
                                    return [265, e - 11, 1];
                                case 14 >= e:
                                    return [266, e - 13, 1];
                                case 16 >= e:
                                    return [267, e - 15, 1];
                                case 18 >= e:
                                    return [268, e - 17, 1];
                                case 22 >= e:
                                    return [269, e - 19, 2];
                                case 26 >= e:
                                    return [270, e - 23, 2];
                                case 30 >= e:
                                    return [271, e - 27, 2];
                                case 34 >= e:
                                    return [272, e - 31, 2];
                                case 42 >= e:
                                    return [273, e - 35, 3];
                                case 50 >= e:
                                    return [274, e - 43, 3];
                                case 58 >= e:
                                    return [275, e - 51, 3];
                                case 66 >= e:
                                    return [276, e - 59, 3];
                                case 82 >= e:
                                    return [277, e - 67, 4];
                                case 98 >= e:
                                    return [278, e - 83, 4];
                                case 114 >= e:
                                    return [279, e - 99, 4];
                                case 130 >= e:
                                    return [280, e - 115, 4];
                                case 162 >= e:
                                    return [281, e - 131, 5];
                                case 194 >= e:
                                    return [282, e - 163, 5];
                                case 226 >= e:
                                    return [283, e - 195, 5];
                                case 257 >= e:
                                    return [284, e - 227, 5];
                                case 258 === e:
                                    return [285, e - 258, 0];
                                default:
                                    throw"invalid length: " + e
                            }
                        }

                        var t, n, i = [];
                        for (t = 3; 258 >= t; t++) n = e(t), i[t] = n[2] << 24 | n[1] << 16 | n[0];
                        return i
                    }(), A = h ? new Uint32Array(T) : T, x = C;
                    l.prototype.f = function () {
                        var e, t, n, i, r, o, a = 0;
                        switch (o = this.a, e = Math.LOG2E * Math.log(32768) - 8, t = e << 4 | 8, o[a++] = t, this.d) {
                            case x.NONE:
                                i = 0;
                                break;
                            case x.h:
                                i = 1;
                                break;
                            case x.g:
                                i = 2;
                                break;
                            default:
                                throw Error("unsupported compression type")
                        }
                        n = i << 6 | 0, o[a++] = n | 31 - (256 * t + n) % 31;
                        var s = this.input;
                        if ("string" == typeof s) {
                            var d, u, c = s.split("");
                            for (d = 0, u = c.length; u > d; d++) c[d] = (255 & c[d].charCodeAt(0)) >>> 0;
                            s = c
                        }
                        for (var l, f = 1, p = 0, g = s.length, m = 0; g > 0;) {
                            l = g > 1024 ? 1024 : g, g -= l;
                            do f += s[m++], p += f; while (--l);
                            f %= 65521, p %= 65521
                        }
                        return r = (p << 16 | f) >>> 0, this.j.c = a, o = this.j.f(), a = o.length, h && (o = new Uint8Array(o.buffer), o.length <= a + 4 && (this.a = new Uint8Array(o.length + 4), this.a.set(o), o = this.a), o = o.subarray(0, a + 4)), o[a++] = r >> 24 & 255, o[a++] = r >> 16 & 255, o[a++] = r >> 8 & 255, o[a++] = 255 & r, o
                    }, e("Zlib.Deflate", l), e("Zlib.Deflate.compress", function (e, t) {
                        return new l(e, t).f()
                    }), e("Zlib.Deflate.prototype.compress", l.prototype.f);
                    var R, G, L, O, N = {NONE: x.NONE, FIXED: x.h, DYNAMIC: x.g};
                    if (Object.keys) R = Object.keys(N); else for (G in R = [], L = 0, N) R[L++] = G;
                    for (L = 0, O = R.length; O > L; ++L) G = R[L], e("Zlib.Deflate.CompressionType." + G, N[G])
                }).call(e.exports)
            }(deflate_min);
            var ZLibDeflate = deflate_min.exports, crc32_min = {exports: {}};
            !function (e) {
                (function () {
                   // "use strict";

                    function e(e, n) {
                        var i = e.split("."), r = t;
                        !(i[0] in r) && r.execScript && r.execScript("var " + i[0]);
                        for (var o; i.length && (o = i.shift());) i.length || void 0 === n ? r = r[o] ? r[o] : r[o] = {} : r[o] = n
                    }

                    var t = this, n = {
                        c: function (e, t, i) {
                            return n.update(e, 0, t, i)
                        },
                        update: function (e, t, i, r) {
                            var o = n.a, a = "number" == typeof i ? i : i = 0, s = "number" == typeof r ? r : e.length;
                            for (t ^= 4294967295, a = 7 & s; a--; ++i) t = t >>> 8 ^ o[255 & (t ^ e[i])];
                            for (a = s >> 3; a--; i += 8) t = t >>> 8 ^ o[255 & (t ^ e[i])], t = t >>> 8 ^ o[255 & (t ^ e[i + 1])], t = t >>> 8 ^ o[255 & (t ^ e[i + 2])], t = t >>> 8 ^ o[255 & (t ^ e[i + 3])], t = t >>> 8 ^ o[255 & (t ^ e[i + 4])], t = t >>> 8 ^ o[255 & (t ^ e[i + 5])], t = t >>> 8 ^ o[255 & (t ^ e[i + 6])], t = t >>> 8 ^ o[255 & (t ^ e[i + 7])];
                            return (4294967295 ^ t) >>> 0
                        },
                        d: function (e, t) {
                            return (n.a[255 & (e ^ t)] ^ e >>> 8) >>> 0
                        },
                        b: [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]
                    };
                    n.a = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array ? new Uint32Array(n.b) : n.b, e("Zlib.CRC32", n), e("Zlib.CRC32.calc", n.c), e("Zlib.CRC32.update", n.update)
                }).call(e.exports)
            }(crc32_min);
            var ZlibCRC32 = crc32_min.exports, Zlib = {Deflate: ZLibDeflate.Zlib.Deflate, CRC32: ZlibCRC32.Zlib.CRC32},
                rtrim = /^\s+|\s+$/g, trim = String.prototype.trim;
            trim || (trim = function () {
                return this.replace(rtrim, "")
            });
            var escapeStringsInObject = function (e, t) {
                    if (t || (t = 0), t >= 200) return e;
                    if (_.isArray(e)) return _.map(e, function (e) {
                        return escapeStringsInObject(e, t + 1)
                    });
                    if (!_.isObject(e) || _.isDate(e) || _.isRegExp(e) || _.isElement(e)) return _.isString(e) ? _.escape(e) : e;
                    var n = {};
                    return _.each(e, function (e, i) {
                        n[i] = escapeStringsInObject(e, t + 1)
                    }), n
                }, compress = function (e) {
                    var t = toUTF8Array(JSON.stringify(e)), n = new Zlib.Deflate(t), i = n.compress(),
                        r = b64.uint8ToBase64(i);
                    return r
                }, base64EncodeString = function (e) {
                    var t = toUTF8Array(e);
                    return b64.uint8ToBase64(t)
                }, crc32 = function (e) {
                    if ("undefined" != typeof e) {
                        _.isString(e) || (e = JSON.stringify(e));
                        var t = toUTF8Array(e);
                        return Zlib.CRC32.calc(t, 0, t.length)
                    }
                }, toUTF8Array = function (e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n);
                        128 > i ? t.push(i) : 2048 > i ? t.push(192 | i >> 6, 128 | 63 & i) : 55296 > i || i >= 57344 ? t.push(224 | i >> 12, 128 | i >> 6 & 63, 128 | 63 & i) : (n++, i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(n)), t.push(240 | i >> 18, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i))
                    }
                    return t
                }, strContains = function (e, t, n) {
                    return doesExist(e) && doesExist(t) ? (n && (e = e.toLowerCase(), t = t.toLowerCase()), e.indexOf(t) > -1) : !1
                }, isFinite$1 = getIsFiniteImpl(window), getNumberFromText = function (e) {
                    var t = /-?[\d,]+\.?([\d,]+)*/, n = e.match(t);
                    return n ? parseFloat(n[0].replace(/,/g, "")) : null
                }, decodeURIComponent = _.isFunction(window.decodeURIComponent) ? window.decodeURIComponent : _.identity,
                encodeURIComponent = _.isFunction(window.encodeURIComponent) ? window.encodeURIComponent : _.identity,
                URL = window.URL;
            URL = function (e, t) {
                var n = e.URL;
                return "function" == typeof n && /native/.test(n) ? n : t(document)
            }(window, function (e) {
                return function (t) {
                    var n = e.createElement("a");
                    if (n.href = t, ":" === n.protocol) throw new Error("Uncaught TypeError: Failed to construct 'URL': Invalid URL");
                    if (n.href !== t && n.href !== encodeURI(t)) throw new Error("Uncaught TypeError: Failed to construct 'URL': Invalid URL");
                    return n.toString || (n.toString = function () {
                        return n.href
                    }), n
                }
            });
            var URL$1 = URL, ConfigModule = function () {
                var e = {config: {}}, t = {}, n = {
                    setConfig: function (e, t) {
                        t && (e.config = t)
                    }, setConfigProperty: function (e, t, n) {
                        t && n && (e.config[t] = n)
                    }, reset: function (e) {
                        e.config = {}
                    }
                }, i = {
                    config: function (e) {
                        return e.config
                    }, configProperty: function (e) {
                        return function (t) {
                            return t && e.config[t] ? e.config[t] : void 0
                        }
                    }
                };
                return {state: e, actions: t, mutations: n, getters: i}
            }(), ErrorLogModule = function () {
                var e = {errorCount: 0, errors: {}}, t = {
                    write: function (e, t) {
                        t && t.message && (e.getters.hasLogged()(t) || e.commit("addError", t), e.commit("incrementError", t))
                    }
                }, n = {
                    addError: function (e, t) {
                        e.errors[t.message] = {count: 0, stack: t.stack}
                    }, incrementError: function (e, t) {
                        e.errors[t.message].count++, e.errorCount++
                    }
                }, i = {
                    hasLogged: function (e) {
                        return function (t) {
                            return !!e.errors[t.message]
                        }
                    }
                };
                return {state: e, actions: t, mutations: n, getters: i}
            }(), pendoLocalStorage = createStorageShim(function () {
                return window.localStorage
            }), pendoSessionStorage = createStorageShim(function () {
                return window.sessionStorage
            }), Promise$1 = window.Promise;
            Promise$1 = function (e, t) {
                var n = e.Promise;
                return "function" == typeof n && /native/.test(n) ? n : t()
            }(window, function () {
               // "use strict";

                function e(e) {
                    var t = this.constructor;
                    return this.then(function (n) {
                        return t.resolve(e()).then(function () {
                            return n
                        })
                    }, function (n) {
                        return t.resolve(e()).then(function () {
                            return t.reject(n)
                        })
                    })
                }

                function t(e) {
                    var t = this;
                    return new t(function (t, n) {
                        function i(e, n) {
                            if (n && ("object" == typeof n || "function" == typeof n)) {
                                var a = n.then;
                                if ("function" == typeof a) return void a.call(n, function (t) {
                                    i(e, t)
                                }, function (n) {
                                    r[e] = {status: "rejected", reason: n}, 0 === --o && t(r)
                                })
                            }
                            r[e] = {status: "fulfilled", value: n}, 0 === --o && t(r)
                        }

                        if (!e || "undefined" == typeof e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                        var r = Array.prototype.slice.call(e);
                        if (0 === r.length) return t([]);
                        for (var o = r.length, a = 0; a < r.length; a++) i(a, r[a])
                    })
                }

                function n(e) {
                    return Boolean(e && "undefined" != typeof e.length)
                }

                function i() {
                }

                function r(e, t) {
                    return function () {
                        e.apply(t, arguments)
                    }
                }

                function o(e) {
                    if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], l(e, this)
                }

                function a(e, t) {
                    for (; 3 === e._state;) e = e._value;
                    return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void o._immediateFn(function () {
                        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                        if (null === n) return void (1 === e._state ? s : d)(t.promise, e._value);
                        var i;
                        try {
                            i = n(e._value)
                        } catch (r) {
                            return void d(t.promise, r)
                        }
                        s(t.promise, i)
                    }))
                }

                function s(e, t) {
                    try {
                        if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof o) return e._state = 3, e._value = t, void u(e);
                            if ("function" == typeof n) return void l(r(n, t), e)
                        }
                        e._state = 1, e._value = t, u(e)
                    } catch (i) {
                        d(e, i)
                    }
                }

                function d(e, t) {
                    e._state = 2, e._value = t, u(e)
                }

                function u(e) {
                    2 === e._state && 0 === e._deferreds.length && o._immediateFn(function () {
                        e._handled || o._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0, n = e._deferreds.length; n > t; t++) a(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function c(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                }

                function l(e, t) {
                    var n = !1;
                    try {
                        e(function (e) {
                            n || (n = !0, s(t, e))
                        }, function (e) {
                            n || (n = !0, d(t, e))
                        })
                    } catch (i) {
                        if (n) return;
                        n = !0, d(t, i)
                    }
                }

                var f = setTimeout;
                return o.prototype["catch"] = function (e) {
                    return this.then(null, e)
                }, o.prototype.then = function (e, t) {
                    var n = new this.constructor(i);
                    return a(this, new c(e, t, n)), n
                }, o.prototype["finally"] = e, o.all = function (e) {
                    return new o(function (t, i) {
                        function r(e, n) {
                            try {
                                if (n && ("object" == typeof n || "function" == typeof n)) {
                                    var s = n.then;
                                    if ("function" == typeof s) return void s.call(n, function (t) {
                                        r(e, t)
                                    }, i)
                                }
                                o[e] = n, 0 === --a && t(o)
                            } catch (d) {
                                i(d)
                            }
                        }

                        if (!n(e)) return i(new TypeError("Promise.all accepts an array"));
                        var o = Array.prototype.slice.call(e);
                        if (0 === o.length) return t([]);
                        for (var a = o.length, s = 0; s < o.length; s++) r(s, o[s])
                    })
                }, o.allSettled = t, o.resolve = function (e) {
                    return e && "object" == typeof e && e.constructor === o ? e : new o(function (t) {
                        t(e)
                    })
                }, o.reject = function (e) {
                    return new o(function (t, n) {
                        n(e)
                    })
                }, o.race = function (e) {
                    return new o(function (t, i) {
                        if (!n(e)) return i(new TypeError("Promise.race accepts an array"));
                        for (var r = 0, a = e.length; a > r; r++) o.resolve(e[r]).then(t, i)
                    })
                }, o._immediateFn = "function" == typeof setImmediate && function (e) {
                    setImmediate(e)
                } || function (e) {
                    f(e, 0)
                }, o._unhandledRejectionFn = function (e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }, o
            });
            var ayepromise = function () {
               // "use strict";
                var e = {}, t = function () {
                    var e = !1;
                    return function (t) {
                        return function () {
                            e || (e = !0, t.apply(null, arguments))
                        }
                    }
                }, n = function (e) {
                    var t = e && e.then;
                    return "object" == typeof e && "function" == typeof t ? function () {
                        return t.apply(e, arguments)
                    } : void 0
                }, i = function (t, n) {
                    var i = e.defer(), r = function (e, t) {
                        setTimeout(function () {
                            var n;
                            try {
                                n = e(t)
                            } catch (r) {
                                return void i.reject(r)
                            }
                            n === i.promise ? i.reject(new TypeError("Cannot resolve promise with itself")) : i.resolve(n)
                        }, 1)
                    }, a = function (e) {
                        t && t.call ? r(t, e) : i.resolve(e)
                    }, s = function (e) {
                        n && n.call ? r(n, e) : i.reject(e)
                    };
                    return {
                        promise: i.promise, handle: function (e, t) {
                            e === o ? a(t) : s(t)
                        }
                    }
                }, r = 0, o = 1, a = 2;
                return e.defer = function () {
                    var e, s = r, d = [], u = function (t, n) {
                        s = t, e = n, _.each(d, function (t) {
                            t.handle(s, e)
                        }), d = null
                    }, c = function (e) {
                        u(o, e)
                    }, l = function (e) {
                        u(a, e)
                    }, f = function (t, n) {
                        var o = i(t, n);
                        return s === r ? d.push(o) : o.handle(s, e), o.promise
                    }, p = function (e) {
                        var n = t();
                        try {
                            e(n(g), n(l))
                        } catch (i) {
                            n(l)(i)
                        }
                    }, g = function (e) {
                        var t;
                        try {
                            t = n(e)
                        } catch (i) {
                            return void l(i)
                        }
                        t ? p(t) : c(e)
                    }, h = t();
                    return {
                        resolve: h(g), reject: h(l), promise: {
                            then: f, "catch": function (e) {
                                return f(null, e)
                            }
                        }
                    }
                }, e
            }(), q;
            isBetaAgent(ENV, getPendoConfig()) && sniffer.isMiniumumIEVersion(11) ? (q = {}, q.all = function (e) {
                return _.isArray(e) ? Promise$1.all.apply(Promise$1, arguments) : qAllObject(e)
            }, q.reject = function () {
                return Promise$1.reject.apply(Promise$1, arguments)
            }, q.resolve = function () {
                return Promise$1.resolve.apply(Promise$1, arguments)
            }, q.defer = function () {
                var e = {};
                return e.promise = new Promise$1(function (t, n) {
                    e.resolve = t, e.reject = n
                }), e
            }) : (q = ayepromise, q.all = qAllObject, q.reject = function (e) {
                var t = q.defer();
                return t.reject(e), t.promise
            }, q.resolve = function (e) {
                var t = q.defer();
                return t.resolve(e), t.promise
            });
            var pendoDotEvents = function () {
                    var e = Eventable.call({}), t = {validateGuide: 1, validateLauncher: 1, validateGlobalScript: 1};
                    return _.each(["ready", "deliverablesLoaded", "guidesFailed", "guidesLoaded", "validateGuide", "validateLauncher", "validateGlobalScript"], function (n) {
                        e[n] = function (i) {
                            if (_.isFunction(i)) return e.on(n, i);
                            var r = t[n] ? "triggerAsync" : "trigger";
                            return e[r].apply(e, [n].concat(_.toArray(arguments)))
                        }
                    }), e
                }(), Events = function () {
                    function e(e, t) {
                        this.name = e, this.groups = t || []
                    }

                    function t(e, t) {
                        var n = {type: e, ts: getNow()};
                        return doesExist(t) && _.isObject(t) && (n.data = t), n
                    }

                    function n(e) {
                        d[e] = {on: _.partial(d.on, e), one: _.partial(d.one, e), off: _.partial(d.off, e)}
                    }

                    function i(e) {
                        var n = _.findWhere(s, {name: e}), i = _.toArray(arguments).slice(1);
                        _.each(n.groups, function (t) {
                            var n = u[t](e, i);
                            c.apply(d, [t].concat(n))
                        });
                        var r = t(e, i);
                        return c.apply(d, [e].concat(r))
                    }

                    function r(e) {
                        var t = e.name;
                        d[t] = {
                            on: _.partial(d.on, t),
                            one: _.partial(d.one, t),
                            off: _.partial(d.off, t),
                            trigger: _.partial(i, t)
                        }
                    }

                    var o = {DEBUG: "debug", LIFECYCLE: "lifecycle", RUNTIME: "runtime"}, a = o,
                        s = [new e("guideListChanged", [a.DEBUG, a.LIFECYCLE]), new e("guideSeen", [a.DEBUG, a.LIFECYCLE]), new e("guideAdvanced", [a.DEBUG, a.LIFECYCLE]), new e("guideDismissed", [a.DEBUG, a.LIFECYCLE]), new e("guideSnoozed", [a.DEBUG, a.LIFECYCLE]), new e("beforeUnmount", [a.RUNTIME]), new e("unmounted", [a.RUNTIME]), new e("beforeUpdate", [a.RUNTIME]), new e("updated", [a.RUNTIME]), new e("guideSnoozeCancelled", [a.DEBUG, a.LIFECYCLE]), new e("guideTimeout", [a.DEBUG, a.LIFECYCLE]), new e("guideLoopStarted", [a.DEBUG, a.LIFECYCLE]), new e("identify", [a.DEBUG, a.LIFECYCLE]), new e("metadata", [a.DEBUG, a.LIFECYCLE]), new e("appUnloaded", [a.DEBUG, a.LIFECYCLE]), new e("startPreview", [a.DEBUG]), new e("resourceFetchFail", [a.DEBUG]), new e("contentVerificationFail", [a.DEBUG]), new e("contentValidationFail", [a.DEBUG]), new e("renderFail", [a.DEBUG]), new e("appUsage", [a.LIFECYCLE])],
                        d = Eventable.call({}), u = {
                            debug: function () {
                                return EventTracer.addTracerIds(t.apply(null, arguments))
                            }, lifecycle: t, runtime: t
                        }, c = d.trigger;
                    return d.trigger = i, _.each(_.values(o), n), _.each(s, r), d
                }(), EventTracer = createEventTracer(window), eventCache = [], trackEventCache = [], SEND_INTERVAL = 12e4,
                MAX_NUM_EVENTS = 16, URL_MAX_LENGTH = 2e3, ENCODED_EVENT_MAX_LENGTH = 1900,
                ENCODED_EVENT_MAX_POST_LENGTH = 65536, limitURLSize = function (e, t) {
                    return t = t || getURL(), t.substring(0, e)
                }, isURLValid = function (e) {
                    return !(!e || "" === e)
                }, getURL = function () {
                    return pendoDotUrl.get()
                }, AutoDisplay = function () {
                    function e() {
                        p.reset()
                    }

                    function t(e) {
                        return e && /auto/.test(e.launchMethod)
                    }

                    function n(e) {
                        return e.attributes && e.attributes.overrideAutoThrottling
                    }

                    function i(e) {
                        return n(e) || _.isFunction(e.shouldShowSnoozedGuide) && e.shouldShowSnoozedGuide()
                    }

                    function r(e) {
                        var t = _.defaults(_.groupBy(e, function (e) {
                            return i(e) ? "override" : "auto"
                        }), {override: [], auto: []});
                        return t.override.concat(t.auto)
                    }

                    function o(e, t) {
                        function n(e, t) {
                            return i[t] ? (e.push(i[t]), delete i[t], e) : e
                        }

                        if (!_.isArray(t) || !t.length) return e;
                        var i = _.indexBy(e, "id"), r = _.reduce(t, n, []);
                        return _.chain(e).pluck("id").reduce(n, r).value()
                    }

                    function a(e, n) {
                        var i = o(_.filter(e, t), n), a = r(i), d = _.find(e, function (e) {
                            return e.isTraining
                        });
                        if (!d) return a;
                        var u = ConfigReader.get("adoptPrioritizeAdoptGuides");
                        return s(a, u)
                    }

                    function s(e, t) {
                        var n = [], i = [];
                        return _.each(e, function (e) {
                            e.isTraining ? n.push(e) : i.push(e)
                        }), t ? n.concat(i) : i.concat(n)
                    }

                    function d(e) {
                        return Math.max(e.latestDismissedAutoAt || -(1 / 0), e.finalAdvancedAutoAt || -(1 / 0), e.latestSnoozedAutoAt || -(1 / 0))
                    }

                    function u(e, t) {
                        var n = new Date(Math.max(e, 0));
                        return n.setHours(0, 0, 0, 0), n.setDate(n.getDate() + t), n.getTime()
                    }

                    function c(e, t) {
                        var n = t.interval, i = (t.unit || "").toLowerCase();
                        if (_.isNumber(n) && isFinite$1(e)) {
                            if ("minute" === i) return 6e4 * n + e + 1;
                            if ("hour" === i) return 36e5 * n + e + 1;
                            if ("day" === i) return u(e, n)
                        } else if (_.isNumber(n)) return (new Date).getTime()
                    }

                    function l(e, t, n) {
                        if (n && n.enabled) {
                            var i = c(t, n);
                            if (_.isNumber(i) && !isNaN(i)) return e >= i
                        }
                        return !0
                    }

                    function f(e, t, n) {
                        var r, o = AutoDisplay.lastDismissedTime(t), a = AutoDisplay.sortAndFilter(e, t.autoOrdering),
                            s = AutoDisplay.canDisplay(getNow(), o, t.throttling), d = p.eachUntil(a, function (e) {
                                return i(e) || s ? (e.shouldAutoDisplay() && e.autoDisplay(), e.isShown() ? (r = e, !0) : void 0) : void 0
                            });
                        return (d || r) && n(), r
                    }

                    var p = throttleIterator(50, createStatefulIterator(function (e) {
                        return e.id
                    }));
                    return {
                        reset: e,
                        canDisplay: l,
                        lastDismissedTime: d,
                        sortAndFilter: a,
                        tryDisplay: f,
                        getNextAutoDisplayTime: c,
                        iterator: p
                    }
                }(), sizzle = {exports: {}};
            !function (e) {
                !function (t) {
                    function n(e, t, n, i) {
                        var r, o, a, s, d, u, c, l = t && t.ownerDocument, p = t ? t.nodeType : 9;
                        if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
                        if (!i && (N(t), t = t || B, P)) {
                            if (11 !== p && (d = ye.exec(e))) if (r = d[1]) {
                                if (9 === p) {
                                    if (!(a = t.getElementById(r))) return n;
                                    if (a.id === r) return n.push(a), n
                                } else if (l && (a = l.getElementById(r)) && U(t, a) && a.id === r) return n.push(a), n
                            } else {
                                if (d[2]) return ee.apply(n, t.getElementsByTagName(e)), n;
                                if ((r = d[3]) && E.getElementsByClassName && t.getElementsByClassName) return ee.apply(n, t.getElementsByClassName(r)), n
                            }
                            if (E.qsa && !q[e + " "] && (!D || !D.test(e)) && (1 !== p || "object" !== t.nodeName.toLowerCase())) {
                                if (c = e, l = t, 1 === p && (fe.test(e) || le.test(e))) {
                                    for (l = Se.test(e) && f(t.parentNode) || t, l === t && E.scope || ((s = t.getAttribute("id")) ? s = s.replace(Ce, Ie) : t.setAttribute("id", s = H)), u = A(e), o = u.length; o--;) u[o] = (s ? "#" + s : ":scope") + " " + g(u[o]);
                                    c = u.join(",")
                                }
                                try {
                                    return ee.apply(n, l.querySelectorAll(c)), n
                                } catch (h) {
                                    q(e, !0)
                                } finally {
                                    s === H && t.removeAttribute("id")
                                }
                            }
                        }
                        return R(e.replace(ue, "$1"), t, n, i)
                    }

                    function i() {
                        function e(n, i) {
                            return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
                        }

                        var t = [];
                        return e
                    }

                    function r(e) {
                        return e[H] = !0, e
                    }

                    function o(e) {
                        var t = B.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (n) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function a(e, t) {
                        for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
                    }

                    function s(e, t) {
                        var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (i) return i;
                        if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function d(e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return "input" === n && t.type === e
                        }
                    }

                    function u(e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function c(e) {
                        return function (t) {
                            return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ae(t) === e : t.disabled === e : "label" in t ? t.disabled === e : !1
                        }
                    }

                    function l(e) {
                        return r(function (t) {
                            return t = +t, r(function (n, i) {
                                for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                            })
                        })
                    }

                    function f(e) {
                        return e && "undefined" != typeof e.getElementsByTagName && e
                    }

                    function p() {
                    }

                    function g(e) {
                        for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                        return i
                    }

                    function h(e, t, n) {
                        var i = t.dir, r = t.next, o = r || i, a = n && "parentNode" === o, s = j++;
                        return t.first ? function (t, n, r) {
                            for (; t = t[i];) if (1 === t.nodeType || a) return e(t, n, r);
                            return !1
                        } : function (t, n, d) {
                            var u, c, l, f = [W, s];
                            if (d) {
                                for (; t = t[i];) if ((1 === t.nodeType || a) && e(t, n, d)) return !0
                            } else for (; t = t[i];) if (1 === t.nodeType || a) if (l = t[H] || (t[H] = {}), c = l[t.uniqueID] || (l[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t; else {
                                if ((u = c[o]) && u[0] === W && u[1] === s) return f[2] = u[2];
                                if (c[o] = f, f[2] = e(t, n, d)) return !0
                            }
                            return !1
                        }
                    }

                    function m(e) {
                        return e.length > 1 ? function (t, n, i) {
                            for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                            return !0
                        } : e[0]
                    }

                    function v(e, t, i) {
                        for (var r = 0, o = t.length; o > r; r++) n(e, t[r], i);
                        return i
                    }

                    function b(e, t, n, i, r) {
                        for (var o, a = [], s = 0, d = e.length, u = null != t; d > s; s++) (o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
                        return a
                    }

                    function _(e, t, n, i, o, a) {
                        return i && !i[H] && (i = _(i)), o && !o[H] && (o = _(o, a)), r(function (r, a, s, d) {
                            var u, c, l, f = [], p = [], g = a.length, h = r || v(t || "*", s.nodeType ? [s] : s, []),
                                m = !e || !r && t ? h : b(h, f, e, s, d), _ = n ? o || (r ? e : g || i) ? [] : a : m;
                            if (n && n(m, _, s, d), i) for (u = b(_, p), i(u, [], s, d), c = u.length; c--;) (l = u[c]) && (_[p[c]] = !(m[p[c]] = l));
                            if (r) {
                                if (o || e) {
                                    if (o) {
                                        for (u = [], c = _.length; c--;) (l = _[c]) && u.push(m[c] = l);
                                        o(null, _ = [], u, d)
                                    }
                                    for (c = _.length; c--;) (l = _[c]) && (u = o ? ne(r, l) : f[c]) > -1 && (r[u] = !(a[u] = l))
                                }
                            } else _ = b(_ === a ? _.splice(g, _.length) : _), o ? o(null, a, _, d) : ee.apply(a, _)
                        })
                    }

                    function y(e) {
                        for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, d = h(function (e) {
                            return e === t
                        }, a, !0), u = h(function (e) {
                            return ne(t, e) > -1
                        }, a, !0), c = [function (e, n, i) {
                            var r = !o && (i || n !== G) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                            return t = null, r
                        }]; r > s; s++) if (n = C.relative[e[s].type]) c = [h(m(c), n)]; else {
                            if (n = C.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                                for (i = ++s; r > i && !C.relative[e[i].type]; i++) ;
                                return _(s > 1 && m(c), s > 1 && g(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ue, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && g(e))
                            }
                            c.push(n)
                        }
                        return m(c)
                    }

                    function S(e, t) {
                        var i = t.length > 0, o = e.length > 0, a = function (r, a, s, d, u) {
                            var c, l, f, p = 0, g = "0", h = r && [], m = [], v = G, _ = r || o && C.find.TAG("*", u),
                                y = W += null == v ? 1 : Math.random() || .1, S = _.length;
                            for (u && (G = a == B || a || u); g !== S && null != (c = _[g]); g++) {
                                if (o && c) {
                                    for (l = 0, a || c.ownerDocument == B || (N(c), s = !P); f = e[l++];) if (f(c, a || B, s)) {
                                        d.push(c);
                                        break
                                    }
                                    u && (W = y)
                                }
                                i && ((c = !f && c) && p--, r && h.push(c))
                            }
                            if (p += g, i && g !== p) {
                                for (l = 0; f = t[l++];) f(h, m, a, s);
                                if (r) {
                                    if (p > 0) for (; g--;) h[g] || m[g] || (m[g] = Z.call(d));
                                    m = b(m)
                                }
                                ee.apply(d, m), u && !r && m.length > 0 && p + t.length > 1 && n.uniqueSort(d)
                            }
                            return u && (W = y, G = v), h
                        };
                        return i ? r(a) : a
                    }

                    var w, E, C, I, T, A, x, R, G, L, O, N, B, k, P, D, F, M, U, H = "sizzle" + 1 * new Date,
                        z = t.document, W = 0, j = 0, V = i(), $ = i(), J = i(), q = i(), K = function (e, t) {
                            return e === t && (O = !0), 0
                        }, X = {}.hasOwnProperty, Y = [], Z = Y.pop, Q = Y.push, ee = Y.push, te = Y.slice,
                        ne = function (e, t) {
                            for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
                            return -1
                        },
                        ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        re = "[\\x20\\t\\r\\n\\f]",
                        oe = "(?:\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",
                        ae = "\\[" + re + "*(" + oe + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
                        se = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                        de = new RegExp(re + "+", "g"),
                        ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
                        ce = new RegExp("^" + re + "*," + re + "*"),
                        le = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"), fe = new RegExp(re + "|>"),
                        pe = new RegExp(se), ge = new RegExp("^" + oe + "$"), he = {
                            ID: new RegExp("^#(" + oe + ")"),
                            CLASS: new RegExp("^\\.(" + oe + ")"),
                            TAG: new RegExp("^(" + oe + "|[*])"),
                            ATTR: new RegExp("^" + ae),
                            PSEUDO: new RegExp("^" + se),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + ie + ")$", "i"),
                            needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
                        }, me = /HTML$/i, ve = /^(?:input|select|textarea|button)$/i, be = /^h\d$/i, _e = {
                            test: function (e) {
                                return /native code/.test(t.ShadowRoot) || "function" != typeof e ? /^[^{]+\{\s*\[native \w/.test(e) : !0
                            }
                        }, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Se = /[+~]/,
                        we = new RegExp("\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\([^\\r\\n\\f])", "g"),
                        Ee = function (e, t) {
                            var n = "0x" + e.slice(1) - 65536;
                            return t ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                        }, Ce = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Ie = function (e, t) {
                            return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        }, Te = function () {
                            N()
                        }, Ae = h(function (e) {
                            return e.disabled === !0 && "fieldset" === e.nodeName.toLowerCase()
                        }, {dir: "parentNode", next: "legend"});
                    try {
                        ee.apply(Y = te.call(z.childNodes), z.childNodes), Y[z.childNodes.length].nodeType
                    } catch (xe) {
                        ee = {
                            apply: Y.length ? function (e, t) {
                                Q.apply(e, te.call(t))
                            } : function (e, t) {
                                for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                                e.length = n - 1
                            }
                        }
                    }
                    E = n.support = {}, T = n.isXML = function (e) {
                        var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
                        return !me.test(t || n && n.nodeName || "HTML")
                    }, N = n.setDocument = function (e) {
                        var t, n, i = e ? e.ownerDocument || e : z;
                        return i != B && 9 === i.nodeType && i.documentElement ? (B = i, k = B.documentElement, P = !T(B), z != B && (n = B.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), E.scope = o(function (e) {
                            return k.appendChild(e).appendChild(B.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        }), E.attributes = o(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), E.getElementsByTagName = o(function (e) {
                            return e.appendChild(B.createComment("")), !e.getElementsByTagName("*").length
                        }), E.getElementsByClassName = _e.test(B.getElementsByClassName), E.getById = o(function (e) {
                            return k.appendChild(e).id = H, !B.getElementsByName || !B.getElementsByName(H).length
                        }), E.getById ? (C.filter.ID = function (e) {
                            var t = e.replace(we, Ee);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }, C.find.ID = function (e, t) {
                            if ("undefined" != typeof t.getElementById && P) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (C.filter.ID = function (e) {
                            var t = e.replace(we, Ee);
                            return function (e) {
                                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, C.find.ID = function (e, t) {
                            if ("undefined" != typeof t.getElementById && P) {
                                var n, i, r, o = t.getElementById(e);
                                if (o) {
                                    if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
                                    for (r = t.getElementsByName(e), i = 0; o = r[i++];) if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
                                }
                                return []
                            }
                        }), C.find.TAG = E.getElementsByTagName ? function (e, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : E.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                            var n, i = [], r = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return o
                        }, C.find.CLASS = E.getElementsByClassName && function (e, t) {
                            return "undefined" != typeof t.getElementsByClassName && P ? t.getElementsByClassName(e) : void 0
                        }, F = [], D = [], (E.qsa = _e.test(B.querySelectorAll)) && (o(function (e) {
                            var t;
                            k.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + re + "*(?:value|" + ie + ")"), e.querySelectorAll("[id~=" + H + "-]").length || D.push("~="), t = B.createElement("input"), t.setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || D.push("\\[" + re + "*name" + re + "*=" + re + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || D.push(".#.+[+~]"), e.querySelectorAll("\\\f"), D.push("[\\r\\n\\f]")
                        }), o(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = B.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + re + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && D.push(":enabled", ":disabled"), k.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
                        })), (E.matchesSelector = _e.test(M = k.matches || k.webkitMatchesSelector || k.mozMatchesSelector || k.oMatchesSelector || k.msMatchesSelector)) && o(function (e) {
                            E.disconnectedMatch = M.call(e, "*"), M.call(e, "[s!='']:x"), F.push("!=", se)
                        }), D = D.length && new RegExp(D.join("|")), F = F.length && new RegExp(F.join("|")), t = _e.test(k.compareDocumentPosition), U = t || _e.test(k.contains) ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function (e, t) {
                            if (t) for (; t = t.parentNode;) if (t === e) return !0;
                            return !1
                        }, K = t ? function (e, t) {
                            if (e === t) return O = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n ? n : (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !E.sortDetached && t.compareDocumentPosition(e) === n ? e == B || e.ownerDocument == z && U(z, e) ? -1 : t == B || t.ownerDocument == z && U(z, t) ? 1 : L ? ne(L, e) - ne(L, t) : 0 : 4 & n ? -1 : 1)
                        } : function (e, t) {
                            if (e === t) return O = !0, 0;
                            var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], d = [t];
                            if (!r || !o) return e == B ? -1 : t == B ? 1 : r ? -1 : o ? 1 : L ? ne(L, e) - ne(L, t) : 0;
                            if (r === o) return s(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) d.unshift(n);
                            for (; a[i] === d[i];) i++;
                            return i ? s(a[i], d[i]) : a[i] == z ? -1 : d[i] == z ? 1 : 0
                        }, B) : B
                    }, n.matches = function (e, t) {
                        return n(e, null, null, t)
                    }, n.matchesSelector = function (e, t) {
                        if (N(e), E.matchesSelector && P && !q[t + " "] && (!F || !F.test(t)) && (!D || !D.test(t))) try {
                            var i = M.call(e, t);
                            if (i || E.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                        } catch (r) {
                            q(t, !0)
                        }
                        return n(t, B, null, [e]).length > 0
                    }, n.contains = function (e, t) {
                        return (e.ownerDocument || e) != B && N(e), U(e, t)
                    }, n.attr = function (e, t) {
                        (e.ownerDocument || e) != B && N(e);
                        var n = C.attrHandle[t.toLowerCase()],
                            i = n && X.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !P) : undefined;
                        return i !== undefined ? i : E.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, n.escape = function (e) {
                        return (e + "").replace(Ce, Ie)
                    }, n.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, n.uniqueSort = function (e) {
                        var t, n = [], i = 0, r = 0;
                        if (O = !E.detectDuplicates, L = !E.sortStable && e.slice(0), e.sort(K), O) {
                            for (; t = e[r++];) t === e[r] && (i = n.push(r));
                            for (; i--;) e.splice(n[i], 1)
                        }
                        return L = null, e
                    }, I = n.getText = function (e) {
                        var t, n = "", i = 0, r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += I(e)
                            } else if (3 === r || 4 === r) return e.nodeValue
                        } else for (; t = e[i++];) n += I(t);
                        return n
                    }, C = n.selectors = {
                        cacheLength: 50,
                        createPseudo: r,
                        match: he,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {dir: "parentNode", first: !0},
                            " ": {dir: "parentNode"},
                            "+": {dir: "previousSibling", first: !0},
                            "~": {dir: "previousSibling"}
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(we, Ee), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            }, CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                            }, PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(we, Ee).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            }, CLASS: function (e) {
                                var t = V[e + " "];
                                return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && V(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                })
                            }, ATTR: function (e, t, i) {
                                return function (r) {
                                    var o = n.attr(r, e);
                                    return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o.replace(de, " ") + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                                }
                            }, CHILD: function (e, t, n, i, r) {
                                var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                                return 1 === i && 0 === r ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, d) {
                                    var u, c, l, f, p, g, h = o !== a ? "nextSibling" : "previousSibling",
                                        m = t.parentNode, v = s && t.nodeName.toLowerCase(), b = !d && !s, _ = !1;
                                    if (m) {
                                        if (o) {
                                            for (; h;) {
                                                for (f = t; f = f[h];) if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                                g = h = "only" === e && !g && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (g = [a ? m.firstChild : m.lastChild], a && b) {
                                            for (f = m, l = f[H] || (f[H] = {}), c = l[f.uniqueID] || (l[f.uniqueID] = {}), u = c[e] || [], p = u[0] === W && u[1], _ = p && u[2], f = p && m.childNodes[p]; f = ++p && f && f[h] || (_ = p = 0) || g.pop();) if (1 === f.nodeType && ++_ && f === t) {
                                                c[e] = [W, p, _];
                                                break
                                            }
                                        } else if (b && (f = t, l = f[H] || (f[H] = {}), c = l[f.uniqueID] || (l[f.uniqueID] = {}), u = c[e] || [], p = u[0] === W && u[1], _ = p), _ === !1) for (; (f = ++p && f && f[h] || (_ = p = 0) || g.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++_ || (b && (l = f[H] || (f[H] = {}), c = l[f.uniqueID] || (l[f.uniqueID] = {}), c[e] = [W, _]), f !== t));) ;
                                        return _ -= r, _ === i || _ % i === 0 && _ / i >= 0
                                    }
                                }
                            }, PSEUDO: function (e, t) {
                                var i,
                                    o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                                return o[H] ? o(t) : o.length > 1 ? (i = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, n) {
                                    for (var i, r = o(e, t), a = r.length; a--;) i = ne(e, r[a]), e[i] = !(n[i] = r[a])
                                }) : function (e) {
                                    return o(e, 0, i)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: r(function (e) {
                                var t = [], n = [], i = x(e.replace(ue, "$1"));
                                return i[H] ? r(function (e, t, n, r) {
                                    for (var o, a = i(e, null, r, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                                }) : function (e, r, o) {
                                    return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                                }
                            }), has: r(function (e) {
                                return function (t) {
                                    return n(e, t).length > 0
                                }
                            }), contains: r(function (e) {
                                return e = e.replace(we, Ee), function (t) {
                                    return (t.textContent || I(t)).indexOf(e) > -1
                                }
                            }), lang: r(function (e) {
                                return ge.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(we, Ee).toLowerCase(), function (t) {
                                    var n;
                                    do if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                            }), target: function (e) {
                                var n = t.location && t.location.hash;
                                return n && n.slice(1) === e.id
                            }, root: function (e) {
                                return e === k
                            }, focus: function (e) {
                                return e === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            }, enabled: c(!1), disabled: c(!0), checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            }, selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                            }, empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                return !0
                            }, parent: function (e) {
                                return !C.pseudos.empty(e)
                            }, header: function (e) {
                                return be.test(e.nodeName)
                            }, input: function (e) {
                                return ve.test(e.nodeName)
                            }, button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            }, text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            }, first: l(function () {
                                return [0]
                            }), last: l(function (e, t) {
                                return [t - 1]
                            }), eq: l(function (e, t, n) {
                                return [0 > n ? n + t : n]
                            }), even: l(function (e, t) {
                                for (var n = 0; t > n; n += 2) e.push(n);
                                return e
                            }), odd: l(function (e, t) {
                                for (var n = 1; t > n; n += 2) e.push(n);
                                return e
                            }), lt: l(function (e, t, n) {
                                for (var i = 0 > n ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                                return e
                            }), gt: l(function (e, t, n) {
                                for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                                return e
                            })
                        }
                    }, C.pseudos.nth = C.pseudos.eq;
                    for (w in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) C.pseudos[w] = d(w);
                    for (w in {submit: !0, reset: !0}) C.pseudos[w] = u(w);
                    p.prototype = C.filters = C.pseudos, C.setFilters = new p, A = n.tokenize = function (e, t) {
                        var i, r, o, a, s, d, u, c = $[e + " "];
                        if (c) return t ? 0 : c.slice(0);
                        for (s = e, d = [], u = C.preFilter; s;) {
                            (!i || (r = ce.exec(s))) && (r && (s = s.slice(r[0].length) || s), d.push(o = [])), i = !1, (r = le.exec(s)) && (i = r.shift(), o.push({
                                value: i,
                                type: r[0].replace(ue, " ")
                            }), s = s.slice(i.length));
                            for (a in C.filter) C.filter.hasOwnProperty(a) && (r = he[a].exec(s)) && (!u[a] || (r = u[a](r))) && (i = r.shift(), o.push({
                                value: i,
                                type: a,
                                matches: r
                            }), s = s.slice(i.length));
                            if (!i) break
                        }
                        return t ? s.length : s ? n.error(e) : $(e, d).slice(0)
                    }, x = n.compile = function (e, t) {
                        var n, i = [], r = [], o = J[e + " "];
                        if (!o) {
                            for (t || (t = A(e)), n = t.length; n--;) o = y(t[n]), o[H] ? i.push(o) : r.push(o);
                            o = J(e, S(r, i)), o.selector = e
                        }
                        return o
                    }, R = n.select = function (e, t, n, i) {
                        var r, o, a, s, d, u = "function" == typeof e && e, c = !i && A(e = u.selector || e);
                        if (n = n || [], 1 === c.length) {
                            if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && P && C.relative[o[1].type]) {
                                if (t = (C.find.ID(a.matches[0].replace(we, Ee), t) || [])[0], !t) return n;
                                u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                            }
                            for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);) if ((d = C.find[s]) && (i = d(a.matches[0].replace(we, Ee), Se.test(o[0].type) && f(t.parentNode) || t))) {
                                if (o.splice(r, 1), e = i.length && g(o), !e) return ee.apply(n, i), n;
                                break
                            }
                        }
                        return (u || x(e, c))(i, t, !P, n, !t || Se.test(e) && f(t.parentNode) || t), n
                    }, E.sortStable = H.split("").sort(K).join("") === H, E.detectDuplicates = !!O, N(), E.sortDetached = o(function (e) {
                        return 1 & e.compareDocumentPosition(B.createElement("fieldset"))
                    }), o(function (e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    }) || a("type|href|height|width", function (e, t, n) {
                        return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }), E.attributes && o(function (e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    }) || a("value", function (e, t, n) {
                        return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                    }), o(function (e) {
                        return null == e.getAttribute("disabled")
                    }) || a(ie, function (e, t, n) {
                        var i;
                        return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    });
                    var Re = t.Sizzle;
                    n.noConflict = function () {
                        return t.Sizzle === n && (t.Sizzle = Re), n
                    }, "function" == typeof undefined && undefined.amd ? undefined(function () {
                        return n
                    }) : e.exports ? e.exports = n : t.Sizzle = n
                }(window)
            }(sizzle);
            var Sizzle = sizzle.exports, shadowAPI = function () {
                function e(e) {
                    return e ? e.indexOf(shadowAPI.PSEUDO_ELEMENT) > -1 : !1
                }

                function t(e) {
                    var t = e.split(shadowAPI.PSEUDO_ELEMENT), n = t.splice(0, 1)[0],
                        i = t.join(shadowAPI.PSEUDO_ELEMENT);
                    return {baseCss: n, shadowCss: i}
                }

                return {
                    PSEUDO_ELEMENT: "::shadow",
                    getComposedPath: getComposedPath,
                    getShadowRoot: getShadowRoot,
                    isElementShadowRoot: isElementShadowRoot,
                    getParent: getParent,
                    isShadowSelector: e,
                    wrapSizzle: function (n) {
                        var i = _.extend(function r(i, o, a, s) {
                            if (e(i) && !_.isFunction(document.documentElement.attachShadow)) return n(i.replace(new RegExp(shadowAPI.PSEUDO_ELEMENT, "g"), ""), o, a, s);
                            if (e(i)) {
                                var d = t(i), u = r(d.baseCss, o);
                                return _.reduce(u, function (e, t) {
                                    return shadowAPI.getShadowRoot(t) ? e.concat(r(d.shadowCss, shadowAPI.getShadowRoot(t), a, s)) : e
                                }, [])
                            }
                            return n(i, o, a, s)
                        }, n);
                        return i.matchesSelector = _.wrap(i.matchesSelector, function (t, n, r) {
                            return shadowAPI.isElementShadowRoot(n) ? !1 : e(r) ? i(r, document, null, [n]).length > 0 : t(n, r)
                        }), i
                    }
                }
            }(), ShadowSizzle = shadowAPI.wrapSizzle(Sizzle);
            _.extend(DomData.prototype, {
                cache: function (e) {
                    if (!_.isObject(e)) return {};
                    var t = e[this.ownerKey];
                    return t || (t = {}, e[this.ownerKey] = t), t
                }, set: function (e, t, n) {
                    var i = this.cache(e);
                    return i[t] = n, i
                }, get: function (e, t) {
                    return t === undefined ? this.cache(e) : e[this.ownerKey] && e[this.ownerKey][t]
                }, remove: function (e, t) {
                    var n = this.cache(e);
                    delete n[t], (t === undefined || _.isEmpty(n)) && (e[this.ownerKey] = undefined)
                }
            });
            var DomData$1 = new DomData, CAPTURING_PHASE = 1, AT_TARGET = 2, BUBBLING_PHASE = 3,
                getTarget = function (e) {
                    var t = shadowAPI.getComposedPath(e);
                    return t && t.length > 0 ? t[0] : e.target || e.srcElement
                }, DomEvent = {
                    add: function (e, t) {
                        var n = DomData$1.get(e);
                        n.handle || (n.handle = function (t) {
                            DomEvent.dispatch(e, t)
                        }), t.id = _.uniqueId();
                        var i = t.capture ? "captureEvents" : "bubbleEvents", r = n[i] = n[i] || {},
                            o = r[t.type] = r[t.type] || [];
                        o.length || attachEventInternal(e, t.type, n.handle, t.capture), o.push(t)
                    }, dispatch: function (e, t) {
                        if (e) {
                            var n = (DomData$1.get(e, "captureEvents") || {})[t.type] || [],
                                i = (DomData$1.get(e, "bubbleEvents") || {})[t.type] || [], r = n.concat(i);
                            if (r.length) {
                                var o = DomData$1.get(t);
                                o.ignore || (o.handled = o.handled || {}, _.each(r.slice(), function (n) {
                                    var i = !!n.capture === isCapturingPhase(t), r = isAtTargetPhase(t), a = !i && !r;
                                    if (!(getTarget(t) !== e && a || o.handled[n.id])) {
                                        o.handled[n.id] = !0;
                                        try {
                                            doesExist(n.selector) ? dom(getTarget(t)).closest(n.selector).length > 0 && n.handler.call(e, t) : n.handler.call(e, t)
                                        } catch (s) {
                                            logError(s)
                                        }
                                    }
                                }))
                            }
                        }
                    }, remove: function (e, t, n, i) {
                        var r = DomData$1.get(e);
                        if (r) {
                            if (_.isFunction(n)) {
                                var o = i ? r.captureEvents : r.bubbleEvents;
                                if (!o) return;
                                var a = o[t];
                                if (!a) return;
                                var s = findIndex(a, function (e) {
                                    return e.handler === n
                                });
                                s >= 0 && a.splice(s, 1), a.length || (delete o[t], detachEventInternal(e, t, r.handle, i))
                            } else n === undefined && (r.captureEvents && r.captureEvents[t] && (delete r.captureEvents[t], detachEventInternal(e, t, r.handle, !0)), r.bubbleEvents && r.bubbleEvents[t] && (delete r.bubbleEvents[t], detachEventInternal(e, t, r.handle)));
                            _.isEmpty(r.captureEvents) && _.isEmpty(r.bubbleEvents) && (DomData$1.remove(e, "captureEvents"), DomData$1.remove(e, "bubbleEvents"), DomData$1.remove(e, "handle"))
                        }
                    }, trigger: function (e) {
                        var t = DomData$1.get(e);
                        if (!t.pendoStopped) {
                            if (!e.bubbles) return void DomEvent.dispatch(getTarget(e), e);
                            var n = getTarget(e);
                            if (n) {
                                for (var i = n, r = []; i;) r.unshift(i), i = shadowAPI.isElementShadowRoot(i) ? i.host : i.parentNode;
                                r.unshift(window);
                                var o;
                                if (isCapturingPhase(e)) {
                                    for (o = 0; o < r.length - 1 && !t.pendoStopped; ++o) DomEvent.dispatch(r[o], e);
                                    e = DomEvent.clone(e), e.eventPhase = AT_TARGET
                                }
                                for (e.eventPhase !== AT_TARGET || t.pendoStopped || (DomEvent.dispatch(n, e), e = DomEvent.clone(e), e.eventPhase = BUBBLING_PHASE), o = r.length - (null == e.eventPhase ? 1 : 2); o >= 0 && !t.pendoStopped; --o) DomEvent.dispatch(r[o], e)
                            }
                        }
                    }, clone: function (e) {
                        var t = _.pick(e, ["type", "target", "path", "srcElement", "altKey", "ctrlKey", "shiftKey", "metaKey", "button", "which", "eventPhase", "bubbles", DomData$1.ownerKey]),
                            n = shadowAPI.getComposedPath(e);
                        return n && (t.composedPath = _.constant(n)), t
                    }
                };
            DomEvent.$ = {
                on: function (e, t, n, i) {
                    return _.isFunction(t) && (i = n, n = t, t = null), e = e.split(" "), this.each(function (r) {
                        _.each(e, function (e) {
                            DomEvent.add(r, {type: e, selector: t, handler: n, capture: i})
                        })
                    })
                }
            };
            var TEXT = 3, ELEMENT = 1, DOCUMENT = 9, DOCUMENT_FRAGMENT = 11, CDATA_SECTION = 4,
                _hasClass = function (e, t) {
                    try {
                        var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                        return n.test(_getClass(e))
                    } catch (i) {
                        return !1
                    }
                }, _addClass = function (e, t) {
                    try {
                        if (!_hasClass(e, t)) {
                            var n = trim.call(_getClass(e)) + " " + t;
                            _setClass(e, n)
                        }
                    } catch (i) {
                    }
                }, _removeClass = function (e, t) {
                    try {
                        if (_hasClass(e, t)) {
                            var n = new RegExp("(\\s|^)" + t + "(\\s|$)"), i = _getClass(e).replace(n, " ");
                            _setClass(e, i)
                        }
                    } catch (r) {
                    }
                }, _setClass = function (e, t) {
                    _.isString(e.className) ? e.className = t : e.setAttribute("class", t)
                }, _getClass = function (e) {
                    try {
                        var t = e.className;
                        return t = _.isString(t) || !doesExist(t) ? t : e.getAttribute("class"), t || ""
                    } catch (n) {
                        return ""
                    }
                }, _getCss3Prop = function (e) {
                    function t(e) {
                        return e.replace(/-([a-z])/gi, function (e, t) {
                            return t.toUpperCase()
                        })
                    }

                    var n = t(e), i = n.substr(0, 1);
                    return n = i.toLowerCase() + n.substr(1)
                }, cssNumber = {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                }, setStyle = function (e, t) {
                    var n = styleToObject(t);
                    setStyles(e, n)
                }, styleToObject = function (e) {
                    if (_.isString(e)) {
                        var t, n, i, r, o = e.split(";");
                        for (e = {}, i = 0; i < o.length; i++) t = o[i], r = t.indexOf(":"), n = t.substring(0, r), e[n] = t.substring(r + 1)
                    }
                    return e
                }, setStyles = function (e, t) {
                    _.each(t, function (t, n) {
                        if (n = trim.call(n), "" !== n) {
                            var i = _getCss3Prop(n);
                            !_.isNumber(t) || isNaN(t) || cssNumber[i] ? _.isString(t) || (t = "" + t) : t = "" + t + "px";
                            var r = t.indexOf("!important");
                            if (-1 !== r) try {
                                var o = trim.call(o.substring(0, r));
                                return void e.style.setProperty(n, o, "important")
                            } catch (a) {
                                return void (e.style.cssText += ";" + n + ":" + t)
                            } else try {
                                e.style[i] = trim.call(t)
                            } catch (a) {
                                log("failed to set style: " + n + " with value " + t)
                            }
                        }
                    })
                }, getScreenDimensions = function () {
                    if (isBrowserInQuirksmode()) return {
                        width: document.documentElement.offsetWidth || 0,
                        height: document.documentElement.offsetHeight || 0
                    };
                    var e = window.innerWidth || document.documentElement.clientWidth,
                        t = window.innerHeight || document.documentElement.clientHeight;
                    return {width: e, height: t}
                }, _isInViewport = function (e) {
                    var t = getScreenDimensions(), n = documentScrollTop(), i = documentScrollLeft();
                    return e.top >= n && e.left >= i && e.top + e.height <= n + t.height && e.left + e.width <= i + t.width
                }, removeClass = function (e, t) {
                    if ("string" == typeof e) {
                        var n = dom(e);
                        _.map(n, function (e) {
                            _removeClass(e, t)
                        })
                    } else _removeClass(e, t)
                }, addClass = function (e, t) {
                    if ("string" == typeof e) {
                        var n = dom(e);
                        _.map(n, function (e) {
                            _addClass(e, t)
                        })
                    } else _addClass(e, t)
                }, removeNode = function (e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }, getElements = _.compose(function (e) {
                    return Array.prototype.slice.call(e)
                }, function (e, t) {
                    try {
                        return ShadowSizzle(e, t)
                    } catch (n) {
                        return writeMessage("error using sizzle: " + n), t.getElementsByTagName(e)
                    }
                }), pickBestBODY = function (e, t) {
                    try {
                        var n = t.children.length + t.offsetHeight + t.offsetWidth,
                            i = e.children.length + e.offsetHeight + e.offsetWidth;
                        return n - i
                    } catch (r) {
                        return log("error interrogating body elements: " + r), writeMessage("error picking best body:" + r), 0
                    }
                }, getBody = function (e) {
                    e = e || document;
                    try {
                        var t = getElements("body");
                        return t && t.length > 1 ? (t.sort(pickBestBODY), t[0] || e.body) : e.body && e.body.tagName && "body" !== e.body.tagName.toLowerCase() ? e.documentElement : e.body
                    } catch (n) {
                        return writeMessage("Error getting body element: " + n), e.body
                    }
                }, getClientRect = function (e) {
                    var t = getBody();
                    if (null !== e) {
                        if (e !== t && e !== document && e !== window || !hasDocumentScrolling(document, t)) {
                            var n = getOffsetPosition(e);
                            return n.right = n.left + n.width, n.bottom = n.top + n.height, n
                        }
                        var i = {
                            left: window.pageXOffset || t.scrollLeft,
                            top: window.pageYOffset || t.scrollTop,
                            width: window.innerWidth,
                            height: window.innerHeight
                        };
                        return i.right = i.left + i.width, i.bottom = i.top + i.height, i
                    }
                }, intersectRect = function (e, t) {
                    return e.top >= t.bottom ? !1 : e.bottom <= t.top ? !1 : e.left >= t.right ? !1 : e.right <= t.left ? !1 : !0
                }, getScrollParent = function (e, t) {
                    t = t || /(auto|scroll|hidden)/;
                    var n, i, r, o = getBody();
                    if (e === o || !isInDocument(e)) return null;
                    for (i = e; i && i != o;) if (i.assignedSlot && (i = i.assignedSlot), shadowAPI.isElementShadowRoot(i)) i = i.host; else {
                        if (n = getComputedStyle_safe(i), !n) return null;
                        if (r = n.position, i !== e && t.test(n.overflow + n.overflowY + n.overflowX)) return i;
                        if ("absolute" === r || "fixed" === r && hasParentWithCssTransform(i)) i = i.offsetParent; else {
                            if ("fixed" === r) return null;
                            i = i.parentNode
                        }
                    }
                    return o
                }, OverflowDirection = {X: "x", Y: "y", BOTH: "both", NONE: "none"}, DomQuery = {};
            DomQuery.$ = {
                findOrCreate: function (e) {
                    return this.length > 0 ? this : dom(e)
                }, find: function (e) {
                    var t = dom();
                    return t.context = this.context, this.each(function () {
                        dom(e, this).each(function () {
                            t[t.length++] = this
                        })
                    }), t
                }, each: function (e) {
                    for (var t = this, n = 0, i = t.length; i > n; ++n) e.call(t[n], t[n], n);
                    return t
                }, html: function (e) {
                    return e === undefined ? this.length ? this[0].innerHTML : this : this.each(function () {
                        this.innerHTML = e
                    })
                }, text: function (e) {
                    var t = "innerText" in document.body;
                    return e === undefined ? t ? this.length ? this[0].innerText : this : this.length ? this[0].textContent : this : this.each(function () {
                        return setStyle(this, {"white-space": "pre-wrap"}), t ? void (this.innerText = e) : void (this.textContent = e)
                    })
                }, addClass: function (e) {
                    return e = e.split(/\s+/), this.each(function (t) {
                        _.each(e, function (e) {
                            _addClass(t, e)
                        })
                    })
                }, removeClass: function (e) {
                    return e = e.split(/\s+/), this.each(function (t) {
                        _.each(e, function (e) {
                            _removeClass(t, e)
                        })
                    })
                }, hasClass: function (e) {
                    e = e.split(/\s+/);
                    var t = !0;
                    return 0 === this.length ? !1 : (this.each(function (n) {
                        _.each(e, function (e) {
                            t = t && _hasClass(n, e)
                        })
                    }), t)
                }, toggleClass: function (e) {
                    return e = e.split(/\s+/), this.each(function (t) {
                        _.each(e, function (e) {
                            _hasClass(t, e) ? _removeClass(t, e) : _addClass(t, e)
                        })
                    })
                }, css: function (e) {
                    return this.each(function () {
                        setStyle(this, e)
                    }), this
                }, appendTo: function (e) {
                    return dom(e).append(this), this
                }, append: function (e) {
                    var t = this;
                    return dom(e).each(function () {
                        t.length && t[0].appendChild(this), isInDocument(this) && _.each(ShadowSizzle("script", this), evalScript)
                    }), t
                }, prependTo: function (e) {
                    return dom(e).prepend(this), this
                }, prepend: function (e) {
                    var t = this;
                    if (t.length) {
                        var n = t[0], i = n.childNodes[0];
                        dom(e).each(function () {
                            i ? dom(this).insertBefore(i) : dom(this).appendTo(n)
                        })
                    }
                    return t
                }, getParent: function () {
                    var e = dom(this)[0];
                    return e && e.parentNode ? dom(e.parentNode) : void 0
                }, insertBefore: function (e) {
                    var t = dom(e)[0];
                    t && t.parentNode && (t.parentNode.insertBefore(this[0], t), isInDocument(document, this) && _.each(ShadowSizzle("script", this), evalScript))
                }, remove: function () {
                    return this.each(function () {
                        this.parentNode && this.parentNode.removeChild(this)
                    }), this
                }, attr: function (e, t) {
                    return _.isObject(e) ? (this.each(function () {
                        _.each(e, function (e, t) {
                            this.setAttribute(t, e)
                        }, this)
                    }), this) : t !== undefined ? (this.each(function () {
                        this.setAttribute(e, t)
                    }), this) : this.length > 0 ? this[0].getAttribute(e) : void 0
                }, closest: function (e, t) {
                    for (var n = this[0]; n && !ShadowSizzle.matchesSelector(n, e);) if (n = n.parentNode, n === document || t && ShadowSizzle.matchesSelector(n, t)) return dom();
                    return dom(n)
                }, eq: function (e) {
                    return dom(this[e])
                }, height: function (e) {
                    return this.length ? e === undefined ? this[0].offsetHeight : (this[0].style.height = e + "px", this) : void 0
                }, width: function (e) {
                    return this.length ? e === undefined ? this[0].offsetWidth : (this[0].style.width = e + "px", this) : void 0
                }, focus: function () {
                    return this.each(function () {
                        _.isFunction(this.focus) && this.focus()
                    })
                }
            }, _.extend(dom, {
                data: DomData$1,
                event: DomEvent,
                removeNode: removeNode,
                getClass: _getClass,
                hasClass: _hasClass,
                addClass: addClass,
                removeClass: removeClass,
                getBody: getBody,
                getComputedStyle: getComputedStyle_safe,
                getClientRect: getClientRect,
                intersectRect: intersectRect,
                getScrollParent: getScrollParent,
                isElementVisible: isElementVisible,
                scrollIntoView: scrollIntoView
            }), _.extend(dom.prototype, DomEvent.$, DomQuery.$);
            var LAUNCHER_SEARCHING_CLASS = "_pendo-launcher-searching_", ScriptGuideLoader = {
                    load: function (e, t) {
                        return q.resolve(pendo$1.loadResource(e, t))
                    }, endpoint: function () {
                        return "guide.js"
                    }, usesXhr: function () {
                        return !1
                    }
                }, ajax = function () {
                   // "use strict";

                    function e(e) {
                        var t = {status: e.status};
                        try {
                            t.data = JSON.parse(e.responseText)
                        } catch (n) {
                            t.data = e.responseText
                        }
                        return t
                    }

                    function t(t) {
                        var i = q.defer(), r = window.XMLHttpRequest || ActiveXObject, o = new r("MSXML2.XMLHTTP.3.0");
                        return o.open(t.method || "GET", t.url, !t.sync), _.each(t.headers, function (e, t) {
                            o.setRequestHeader(t.toLowerCase(), e)
                        }), o.onreadystatechange = function () {
                            if (4 === o.readyState) {
                                var t = e(o);
                                o.status >= 200 && o.status < 300 ? i.resolve(t) : i.reject(t)
                            }
                        }, t.withCredentials && (o.withCredentials = !0), t.data ? o.send(t.data) : o.send(), n(i.promise)
                    }

                    function n(e) {
                        var t = e.then, i = e["catch"];
                        return e.then = function () {
                            return n(t.apply(this, arguments))
                        }, e["catch"] = function () {
                            return n(i.apply(this, arguments))
                        }, e.fail = e["catch"], e
                    }

                    function i(e, n) {
                        return t({method: "GET", url: e, headers: n})
                    }

                    function r(e, n, i) {
                        return t({method: "POST", url: e, data: n, headers: i})
                    }

                    function o(e, t, n) {
                        return n || (n = {}), n["content-type"] = "application/json", t = JSON.stringify(t), r(e, t, n)
                    }

                    function a(e, t, n) {
                        var i;
                        if (_.isArray(t)) i = t; else {
                            if (!_.isObject(t)) return e || "";
                            i = _.keys(t)
                        }
                        var r = _.map(i, function (e) {
                            return _.isArray(t) ? encodeURIComponent(e) : encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                        }).join("&"), o = e.split("#", 2), a = o[0], s = _.contains(a, "?");
                        return n = "undefined" != typeof n ? n : o[1], [encodeURI(a), r ? (s ? "&" : "?") + r : "", n ? "#" + n : ""].join("")
                    }

                    return _.extend(t, {get: i, post: r, postJSON: o, urlFor: a})
                }(), ContentLoader = function (e) {
                    function t(e) {
                        if (!isInDesignerPreviewMode()) try {
                            var t = d[e.id];
                            if (t && t.language !== e.language && delete d[e.id], !d[e.id]) {
                                var n = [], i = {deferred: {}, language: e.language}, r = !1;
                                if (d[e.id] = i, ScriptGuideLoader.usesXhr() && e.domUrl) i.deferred.domJson = q.defer(), ajax.get(u(e.domUrl)).then(function (e) {
                                    i.domJson = replaceObjectWithContentHost(e.data);
                                    var t = e.data;
                                    isValidGuideResponse(t) ? i.deferred.domJson.resolve() : (writeException(new Error("Response from the guide was not in proper JSON format")), i.deferred.domJson.reject())
                                }), n.push(i.deferred.domJson.promise), r = !0; else if (e.domJsonpUrl) {
                                    i.deferred.domJson = q.defer();
                                    var o = loadResource(u(e.domJsonpUrl), function () {
                                        dom.removeNode(o)
                                    });
                                    n.push(i.deferred.domJson.promise), r = !0
                                }
                                if (e.contentUrlJs && !ConfigReader.get("preventCodeInjection")) {
                                    i.deferred.content = q.defer();
                                    var c = loadResource(u(a(e.contentUrlJs)), function () {
                                        dom.removeNode(c)
                                    });
                                    n.push(i.deferred.content.promise), e.contentUrlCss && (i.deferred.css = q.defer(), loadResource({
                                        url: u(e.contentUrlCss),
                                        type: "text/css"
                                    }, function () {
                                        i.deferred.css.resolve()
                                    }), n.push(i.deferred.css.promise))
                                } else if (e.contentUrl && !ConfigReader.get("preventCodeInjection")) {
                                    i.deferred.content = q.defer();
                                    var l = loadResource(s(u(e.contentUrl), ".js"), function () {
                                        dom.removeNode(l)
                                    });
                                    n.push(i.deferred.content.promise)
                                } else if (!r) return q.reject();
                                i.deferred.promise = q.all(n).then(function () {
                                    return _.omit(i, "deferred")
                                })
                            }
                            return d[e.id].deferred.promise
                        } catch (f) {
                            throw Events.resourceFetchFail.trigger(e, f), f
                        }
                    }

                    function n() {
                        d = {}
                    }

                    function i(e, t, n, i, o) {
                        if (_.isString(n)) {
                            _.isFunction(i) || (i = r(n) ? _.template(n) : _.constant(n));
                            var a = d[e + t];
                            a && a.deferred.content && (a.content = n, a.template = i, a.script = o, a.deferred.content.resolve())
                        }
                    }

                    function r(e) {
                        return /<%/.test(e) && /%>/.test(e)
                    }

                    function o(e, t, n) {
                        var i = d[e + t];
                        i && i.deferred.domJson && (i.domJson = replaceObjectWithContentHost(n), i.deferred.domJson.resolve())
                    }

                    function a(e) {
                        if (isSfdcLightning()) {
                            var t = e.replace(/^https?:\/\/[^/]+\/guide-content\//, "").split("/"), n = t[0],
                                i = $A.get("$Resource.pendoGuide" + base32Encode(toUTF8Array(n)));
                            if (_.isString(i)) return i + "/" + t.join("/")
                        }
                        return e
                    }

                    function s(e, t) {
                        if (!_.isString(e)) return e;
                        var n = _.indexOf(e, "?");
                        return 0 > n ? e + t : e.substring(0, n) + t + e.substring(n)
                    }

                    var d = {}, u = _.compose(function (e) {
                        var t = getContentHostRegex();
                        if (t) {
                            var n = new RegExp(t);
                            n.test(e) || writeException(new Error("Failed to verify URL: " + e + " vs " + t), "cname contentHost verification")
                        }
                        return e
                    }, replaceWithContentHost);
                    return {load: t, reset: n, guideContent: i, receiveDomStructureJson: o}
                }(pendo$1), TextCapture = function () {
                    function e() {
                        pendo$1.excludeAllText = ConfigReader.get(c);
                        var e = ConfigReader.get(u);
                        l = g(e, function (e, t) {
                            return p(t) ? (e[t] = !0, e) : e
                        }, {})
                    }

                    function t() {
                        return !pendo$1.excludeAllText
                    }

                    function n(e) {
                        var n = trim.call(e);
                        return t() || f(l, n) || f(l, e)
                    }

                    function i() {
                        return h(l) > 0
                    }

                    function r(e, t) {
                        var n, i = "", a = e.nodeType;
                        if (t = t || 128, a === TEXT || a === CDATA_SECTION) return e.nodeValue;
                        if (!o(e) && (a === ELEMENT || a === DOCUMENT || a === DOCUMENT_FRAGMENT)) for (e = e.firstChild; e; e = e.nextSibling) {
                            if (n = r(e, t - i.length), (i + n).length >= t) return i + d(n.substring(0, t - i.length));
                            i += n
                        }
                        return i
                    }

                    function o(e) {
                        return !e.tagName || "textarea" == e.tagName.toLowerCase()
                    }

                    function a(e) {
                        return e >= 55296 && 56319 >= e
                    }

                    function s(e) {
                        return e >= 56320 && 57343 >= e
                    }

                    function d(e) {
                        if (e.length < 1) return e;
                        var t = e.slice(-1).charCodeAt(0);
                        if (!a(t) && !s(t)) return e;
                        if (1 === e.length) return e.slice(0, -1);
                        if (a(t)) return e.slice(0, -1);
                        if (s(t)) {
                            var n = e.slice(-2).charCodeAt(0);
                            if (!a(n)) return e.slice(0, -1)
                        }
                        return e
                    }

                    var u = "allowedText", c = "excludeAllText", l = {}, f = _.has, p = _.isString, g = _.reduce,
                        h = _.size;
                    return {initialize: e, isEnabled: t, isTextCapturable: n, hasWhitelist: i, getText: r}
                }(), xhrEventCache = [], xhrEventQueue = createXhrEventQueue({
                    cache: xhrEventCache,
                    apiKey: function () {
                        return pendo$1.apiKey
                    },
                    beacon: "xhr",
                    shorten: {fields: ["request_url", "browser_url"], siloMaxLength: ENCODED_EVENT_MAX_LENGTH}
                }), openXhrIntercept = function () {
                    attachEventInternal(window, "unload", function () {
                        flushXhrNow({guaranteed: !0})
                    }), function (e) {
                        XMLHttpRequest.prototype.open = function (t, n, i, r, o) {
                            var a = {};
                            this.addEventListener("readystatechange", function () {
                                var e = arguments[0].target || arguments[0].srcElement || arguments[0].currentTarget;
                                modifyXhrData(a, this.readyState, n, t, e)
                            }, !1), e.apply(this, arguments)
                        }
                    }(XMLHttpRequest.prototype.open)
                }, modifyXhrData = function (e, t, n, i, r) {
                    if (1 === t) {
                        var o = get_visitor_id();
                        e.visitor_id = o;
                        var a = get_account_id();
                        e.account_id = a, e.browser_url = getScrubbedXhrUrl(getHref()), e.browser_time = (new Date).getTime(), e.request_method = i, e.type = "xhr"
                    } else 4 === t && (e.request_url = getScrubbedXhrUrl(r.responseURL), e.response_status = r.status, e.duration = (new Date).getTime() - e.browser_time, xhrEventQueue.push(e))
                }, getScrubbedXhrUrl = function (e) {
                    var t = e ? e.indexOf("?") : -1, n = -1 === t ? "" : e.slice(t + 1, e.length);
                    return externalizeURL(e, n, ConfigReader.get("xhrWhitelist"))
                }, flushXhrNow = function (e) {
                    try {
                        xhrEventQueue.flush(e)
                    } catch (t) {
                        writeException(t, "error while flushing xhr cache")
                    }
                }, buffers = {
                    flush: _.noop,
                    flushBy: _.noop,
                    flushEvents: flushNow,
                    flushTrackEvents: flushNow,
                    flushSilos: flushNow,
                    flushTrackEventSilos: flushNow,
                    flushBeacons: flushNow,
                    flushNow: flushNow,
                    flushLater: flushLater,
                    flushEvery: flushEvery,
                    flushStop: flushStop,
                    beacons: [],
                    silos: [],
                    trackEventSilos: []
                }, defaultTrackName = "_PENDO_UNNAMED_", SILO_AVG_COMPRESSION_RATIO = 5,
                SILO_MAX_BYTES = ENCODED_EVENT_MAX_LENGTH * SILO_AVG_COMPRESSION_RATIO,
                events = buffers.events = eventCache, trackEvents = buffers.trackEvents = trackEventCache,
                eventQueue = createEventQueue({
                    cache: events,
                    silos: buffers.silos,
                    apiKey: getAllApiKeys,
                    beacon: "ptm",
                    allowPost: !0
                }), trackEventQueue = createEventQueue({
                    cache: trackEvents,
                    silos: buffers.trackEventSilos,
                    apiKey: getAllApiKeys,
                    beacon: "ptm",
                    allowPost: !0,
                    params: {type: "track"}
                }), WHITELIST_FREE_NPS = ["load", "meta", "identify"], makeSafe = function (e, t) {
                    return t = !!t, function () {
                        try {
                            return e.apply(this, arguments)
                        } catch (n) {
                            t || writeException(n)
                        }
                    }
                }, EventErrorLogger = function () {
                    function e(e) {
                        ConfigReader.get("enableDebugEvents") && t(Events.debug, e)
                    }

                    function t(e, t) {
                        s = [], e.on(function (e) {
                            o(e)
                        }), d = setInterval(r, t || 5e3)
                    }

                    function n() {
                        clearInterval(d)
                    }

                    function i() {
                        detachEventInternal(window, "unload", r)
                    }

                    function r() {
                        if (s && 0 !== s.length) {
                            var e = s;
                            s = [], writeErrorPOST("[" + e.join(",") + "]")
                        }
                    }

                    function o(e) {
                        var t = JSON.stringify(e);
                        s.push(t)
                    }

                    function a() {
                        n(), i()
                    }

                    var s, d;
                    return {flush: r, run: e, stop: a}
                }(), MAX_ATTRIBUTE_LENGTH = 256, MAX_ATTRIBUTES = 64, evt_map = {
                    a: {events: ["click"], attr: ["href"]},
                    button: {events: ["click"], attr: ["value", "name"]},
                    img: {events: ["click"], attr: ["src", "alt"]},
                    select: {events: ["mouseup"], attr: ["name", "type", "selectedIndex"]},
                    textarea: {events: ["mouseup"], attr: ["name"]},
                    'input[type="submit"]': {events: ["click"], attr: ["name", "type", "value"]},
                    'input[type="button"]': {events: ["click"], attr: ["name", "type", "value"]},
                    'input[type="radio"]': {events: ["click"], attr: ["name", "type"]},
                    'input[type="checkbox"]': {events: ["click"], attr: ["name", "type"]},
                    'input[type="password"]': {events: ["click"], attr: ["name", "type"]},
                    'input[type="text"]': {events: ["click"], attr: ["name", "type"]}
                }, handleEmbeddedData = function (e) {
                    return e && 0 === e.indexOf("data:") ? (debug("Embedded data provided in URI."), e.substring(0, e.indexOf(","))) : e + ""
                }, extractAttribute = function (e, t, n) {
                    if (!e || !e.nodeName) return null;
                    var i = e.nodeName.toLowerCase();
                    if ("img" == i && "src" == t || "a" == i && "href" == t) {
                        var r = e.getAttribute(t);
                        return sanitizeUrl(handleEmbeddedData(r))
                    }
                    var o = getAttributeValue(e, t);
                    return n && typeof o !== n ? null : o ? _.isString(o) ? trim.call(o).substring(0, MAX_ATTRIBUTE_LENGTH) : o : null
                }, asString = function (e) {
                    return doesExist(e) ? "" + e : ""
                }, extractElementContext = function (e, t) {
                    var n = {};
                    if (!e) return n;
                    var i = getHtmlAttributeTester(ConfigReader.get("htmlAttributes")),
                        r = getHtmlAttributeTester(ConfigReader.get("htmlAttributeBlacklist"));
                    n.tag = shadowAPI.isElementShadowRoot(e) ? "#shadow-root" : e.nodeName || "", n.id = asString(e.id), n.cls = asString(dom.getClass(e)), r("title") || (n.title = extractAttribute(e, "title", "string"));
                    var o = (n.tag || "").toLowerCase();
                    "input" === o && (o += '[type="' + e.type + '"]'), n.attrs = {};
                    var a = filterAttributeList(e.attributes, evt_map[o] && evt_map[o].attr, i, r);
                    if (_.each(a, function (t) {
                        n.attrs[t.toLowerCase()] = extractAttribute(e, t)
                    }), e.parentNode && e.parentNode.childNodes) {
                        var s = _.chain(e.parentNode.childNodes);
                        n.myIndex = s.indexOf(e).value(), n.childIndex = s.filter(function (e) {
                            return e.nodeType == ELEMENT
                        }).indexOf(e).value()
                    }
                    return t && e.previousElementSibling && populatePreviousSibling(n, e), n
                }, populatePreviousSibling = function (e, t) {
                    var n = "_pendo_sibling_", i = extractElementContext(t.previousElementSibling, !1);
                    if (_.each(i, function (t, i) {
                        var r = "cls" === i ? "class" : i;
                        _.isEmpty(t) || (_.isObject(t) ? _.each(t, function (t, i) {
                            t && !_.isEmpty(t) && (e.attrs[n + r + "_" + i] = t)
                        }) : e.attrs[n + r] = t)
                    }), TextCapture.isEnabled() || !TextCapture.isEnabled() && TextCapture.hasWhitelist()) {
                        var r = t.previousElementSibling && TextCapture.getText(t.previousElementSibling, 128);
                        r && TextCapture.isTextCapturable(r) && (e.attrs[n + "pendo_text"] = TextCapture.hasWhitelist() ? trim.call(r) : r)
                    }
                }, isNodeTheRoot = function (e) {
                    return "BODY" === e.nodeName || null === e.parentNode && !shadowAPI.isElementShadowRoot(e)
                }, PENDO_IGNORE_CLASS = "pendo-ignore", extractElementTreeContext = function (e) {
                    var t, n = {}, i = n, r = e, o = !1;
                    if (!e) return n;
                    do {
                        t = r;
                        var a = extractElementContext(t, ConfigReader.get("siblingSelectors"));
                        !o && strContains(a.cls, PENDO_IGNORE_CLASS) && (o = !0), i.parentElem = a, i = a, r = shadowAPI.getParent(t)
                    } while (r && !isNodeTheRoot(t));
                    if (TextCapture.isEnabled() || !TextCapture.isEnabled() && TextCapture.hasWhitelist()) {
                        var s = TextCapture.getText(e, 128);
                        TextCapture.isTextCapturable(s) && (n.parentElem.txt = TextCapture.hasWhitelist() ? trim.call(s) : s)
                    }
                    return !TextCapture.isEnabled() && n.parentElem.value && (n.parentElem.value = null), o && (n.parentElem.ignore = !0), n.parentElem
                }, buttonNumMap = ["", "left", "right", "middle"], buttonLookup = function (e, t) {
                    return buttonNumMap[t]
                }, retTrue = function () {
                    return !0
                }, getButtonType = function (e) {
                    return e.which || e.button
                }, identity = function (e) {
                    return e
                }, propGet = function (e, t) {
                    return e[t]
                },
                COMMON_CLICK_ATTRS = [["button", getButtonType, retTrue, buttonLookup], ["altKey", propGet, identity, identity], ["ctrlKey", propGet, identity, identity], ["metaKey", propGet, identity, identity], ["shiftKey", propGet, identity, identity]],
                determineClickFlags = function (e, t) {
                    for (var n = [], i = 0; i < COMMON_CLICK_ATTRS.length; i++) {
                        var r = COMMON_CLICK_ATTRS[i], o = r[0], a = r[1], s = r[2], d = r[3], u = a(e, o);
                        s(u) && n.push(d(o, u))
                    }
                    return t.flags = n, t
                }, evtHandlerExtFn = {click: determineClickFlags}, getValidTarget = function (e) {
                    return e.nodeType === TEXT ? e.parentNode : e.nodeType === CDATA_SECTION ? null : e.correspondingUseElement ? e.correspondingUseElement : e
                }, handle_event = function (e) {
                    try {
                        if (dom.data.get(e, "counted")) return;
                        dom.data.set(e, "counted", !0);
                        var t = getTarget(e), n = e.type, i = {}, r = evtHandlerExtFn[n];
                        if (r && (i = r(e, i)), dom.data.get(e, "stopped") && (i.stopped = !0), e.from && (i.from = e.from), t = getValidTarget(t), !t) return void log("Invalid HTML target", "event", "dom", "processing");
                        var o = extractElementTreeContext(t);
                        if (_.extend(o, i), pageLoad(), o.ignore) return;
                        if ("click" === n) {
                            var a = collectEventProperties(t);
                            collectEvent(n, {target: o}, undefined, undefined, a)
                        } else collectEvent(n, {target: o});
                        Events.trigger("appUsage", o, e)
                    } catch (s) {
                        writeException(s, "pendo.io while handling event")
                    }
                }, collectEventProperties = makeSafe(collectEventPropertiesForTarget), listenForEvents = function (e) {
                    _.each(e, function (e) {
                        attachEvent(document, e, handle_event, !0)
                    })
                }, DEBOUNCE_INTERVAL_CHANGE = 5e3,
                handle_change_event = _.debounce(handle_event, DEBOUNCE_INTERVAL_CHANGE, !0), wirePage = function (e) {
                    e = e || ["click", "focus", "submit", "change"], _.contains(e, "change") && (e = _.without(e, "change"), attachEventInternal(document, "change", handle_change_event, !0));
                    var t = ConfigReader.get("interceptElementRemoval");
                    wireSyntheticClicks(dom.event.trigger, sniffer.addEventListener, t), listenForEvents(e), ConfigReader.get("xhrTimings") && openXhrIntercept(), ConfigReader.get("preventUnloadListener") !== !0 && attachEventInternal(window, "unload", function () {
                        flushNow(!0, {guaranteed: !0}), Events.appUnloaded.trigger(), EventErrorLogger.flush()
                    }), onTurbolinksPageLoad(document, function () {
                        pendoDotUrl.get() === reloadGuides.lastUrl && forceGuideReload()
                    }), interceptStopPropagation(window.Event, e), interceptPreventDefault(window.Event, ["touchend"])
                }, stopEvent = function (e) {
                    dom.data.set(e, "pendoStopped", !0), e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1
                }, whenLoadedCall = function (e, t) {
                    t = t || window;
                    var n = t.document;
                    "complete" === n.readyState ? e() : attachEventInternal(t, "load", e)
                }, TOP = "top", BOTTOM = "bottom", LEFT = "left", RIGHT = "right", CENTER = "center",
                TOOLTIP_DEFAULT_WIDTH = 430, TOOLTIP_DEFAULT_HEIGHT = 200, TOOLTIP_ARROW_SIZE = 15,
                TOOLTIP_CSS_NAME = "_pendo-guide-tt_", MOBILE_TOOLTIP_CSS_NAME = "_pendo-guide-mobile-tt_",
                lastElementPos = null, buildTooltipCSSName = function () {
                    return isMobileUserAgent() ? MOBILE_TOOLTIP_CSS_NAME : TOOLTIP_CSS_NAME
                }, buildTooltipCSSSelector = function (e) {
                    return "#_pendo_g_" + e.id
                }, createTooltipGuide = function (e, t) {
                    lastElementPos = null;
                    var n = getOffsetPosition(e);
                    if (0 === n.height && 0 === n.width) return null;
                    var i = t.guideElement, r = t.attributes.height, o = t.attributes.width, a = t.attributes.layoutDir;
                    i.addClass(buildTooltipCSSName());
                    var s = getTooltipDimensions(n, r, o, a);
                    return t && (t.dim = s), i.css({
                        width: s.width,
                        height: s.height,
                        left: s.left,
                        top: s.top
                    }), n.fixed && i.css({position: "fixed"}), dom("._pendo-guide-container_", i).addClass(s.arrowPosition).css({
                        top: s.content.top,
                        left: s.content.left,
                        width: s.content.width,
                        height: s.content.height
                    }), buildAndAppendArrow(i[0], s), i[0]
                }, buildAndAppendArrow = function (e, t) {
                    var n = ["top", "right", "bottom", "left"], i = "_pendo-guide-arrow-", r = i + "border-",
                        o = t.arrowPosition, a = _.chain(n).filter(function (e) {
                            return e !== o
                        }).map(function (e) {
                            return "border-" + e + "-width:" + pendo$1.TOOLTIP_ARROW_SIZE + "px;"
                        }).value().join(""),
                        s = dom("div._pendo-guide-arrow_", e).remove().findOrCreate("<div class='_pendo-guide-arrow_'></div>"),
                        d = dom("div._pendo-guide-arrow-border_ ", e).remove().findOrCreate("<div class='_pendo-guide-arrow-border_'></div>");
                    _.each(n, function (e) {
                        s.removeClass(i + e + "_").removeClass(e), d.removeClass(r + e + "_").removeClass(e)
                    }), s.addClass(i + o + "_").addClass(o).css(a + "top:" + t.arrow.top + "px;left:" + t.arrow.left + "px;"), d.addClass(r + o + "_").addClass(o).css(a + "top:" + t.arrow.border.top + "px;left:" + t.arrow.border.left + "px;"), dom(e).append(s).append(d)
                }, showTooltipGuide = function (e, t) {
                    if (!canStepBeRendered(e)) return null;
                    t === undefined && (t = activeElements), e.element = getElementForGuideStep(e);
                    var n = e.element;
                    if (!n) return log("No element found for step: " + e.id), null;
                    scrollIntoView(n);
                    var i = createTooltipGuide(n, e);
                    return null === i ? null : (i.id = pendo$1.getTooltipDivId(e), addCloseButton(i, function () {
                        var t = e.getGuide();
                        (!t.isOnboarding() || confirm("Are you sure you want to stop this tutorial?")) && onGuideDismissed(e)
                    }), e.hideCredits || _addCredits(i), dom(i).appendTo(getGuideAttachPoint()), t.push(i), attachEvent(i, "mouseover", _.partial(dom.addClass, i, "mouseover")), attachEvent(i, "mouseout", _.partial(dom.removeClass, i, "mouseover")), scrollToTooltip(n, i), addBlockOutUI(e), n)
                }, isLessThan = function (e, t) {
                    return t > e
                }, isGreaterThan = _.negate(isLessThan), lastBlockBox = null, hasBlockBoxChanged = function (e) {
                    var t = !_.isEqual(e, lastBlockBox);
                    return lastBlockBox = e, t
                }, lastBodySize = null, hasBodyDimensionsChanged = function (e) {
                    var t = !_.isEqual(e, lastBodySize);
                    return lastBodySize = e, t
                }, lastScreenCoords = null, haveScreenCoordsChanged = function (e) {
                    var t = !_.isEqual(e, lastScreenCoords);
                    return lastScreenCoords = e, t
                }, addBlockOutUI = function (e) {
                    try {
                        if (!e.attributes || !e.attributes.blockOutUI || !e.attributes.blockOutUI.enabled) return;
                        var t = e.attributes.blockOutUI, n = [];
                        n.push(e.element), n = n.concat(_.compact(_.flatten(_.map([].concat(t.additionalElements), function (e) {
                            return ShadowSizzle(e)
                        }))));
                        var i = computeBlockOutBoundingBox(n), r = t.padding || 0, o = getClientRect(getBody());
                        i.fixed && (o.top = 0, o.bottom = o.height, o.left = 0, o.right = o.width);
                        var a = computeBlockOutOverlayPositions(o, i, r);
                        if (!hasBlockBoxChanged(i) && !hasBodyDimensionsChanged(o) && !haveScreenCoordsChanged(a)) return;
                        var s = {"z-index": t.zindex || 1e4, position: "fixed"};
                        t.bgColor && (s["background-color"] = t.bgColor), t.opacity && (s.opacity = t.opacity);
                        var d = dom("body");
                        _.each(a, function (e, t) {
                            d.append(buildBackdropDiv(t, _.extend({}, e, s)))
                        })
                    } catch (u) {
                        log("Failed to add BlockOut ui", "error")
                    }
                }, buildBackdropDiv = function (e, t) {
                    var n = dom("div._pendo-guide-tt-region-block_._pendo-region-" + e + "_");
                    return n = n.length > 0 ? n[0] : dom('<div class="_pendo-guide-tt-region-block_ _pendo-region-' + e + '_"></div>'), dom(n).css(t), n
                }, checkPlacementChanged = function (e) {
                    var t = _.isEqual(e, lastElementPos);
                    return lastElementPos = e, !t
                }, placeTooltip = function (e) {
                    var t = e.element || getElementForGuideStep(e), n = getOffsetPosition(t);
                    if (addBlockOutUI(e), checkPlacementChanged(n)) {
                        var i = e.attributes.height, r = e.attributes.width, o = e.attributes.layoutDir,
                            a = getTooltipDimensions(n, i, r, o), s = dom(buildTooltipCSSSelector(e));
                        s.css({top: a.top, left: a.left, position: n.fixed ? "fixed" : ""}), buildAndAppendArrow(s, a)
                    }
                }, getTooltipDimensions = function (e, t, n, i) {
                    var r = pendo$1.TOOLTIP_ARROW_SIZE, o = {arrow: {border: {}}, content: {top: r, left: r}},
                        a = getScreenDimensions();
                    return o.width = Math.min(n, a.width), o.height = t, o.content.width = o.width - 2 * r, o.content.height = o.height - 2 * r, i || (i = "auto"), o = determineHorizontalBias(o, e, a, i), o = determineArrowPosition(o, e, a, i), o = buildArrowDimensions(o, e, a)
                }, determineHorizontalBias = function (e, t, n, i) {
                    return e.arrow.hbias = horizontal(t, n, i), e
                }, determineArrowPosition = function (e, t, n, i) {
                    if (i && "DEFAULT" != i && "auto" != i && (e.arrowPosition = i), !e.arrowPosition) {
                        var r = t.top - documentScrollTop(), o = t.left - documentScrollLeft(), a = o + t.width;
                        r < n.height / 3 ? e.arrowPosition = "top" : r > 2 * n.height / 3 || "center" == e.arrow.hbias ? e.arrowPosition = "bottom" : o < e.width && n.width - a < e.width ? e.arrowPosition = "top" : e.arrowPosition = e.arrow.hbias
                    }
                    return e
                }, buildArrowDimensions = function (e, t, n) {
                    var i = e.height, r = e.width;
                    if (isBrowserInQuirksmode()) return buildArrowDimensionsQM(e, t, n);
                    if ("top" == e.arrowPosition || "bottom" == e.arrowPosition) {
                        var o = 10, a = 0;
                        "top" == e.arrowPosition ? (e.top = t.top + t.height, e.arrow.top = isOldIE(9, 6) ? 6 : 2, a = -1) : "bottom" == e.arrowPosition && (e.top = t.top - i, e.arrow.top = i - pendo$1.TOOLTIP_ARROW_SIZE - 1, e.arrow.top += isOldIE(9, 6) ? 6 : 0, e.arrow.top += 8 == msie ? -1 : 0, a = 1);
                        var s = o + pendo$1.TOOLTIP_ARROW_SIZE, d = r - 3 * pendo$1.TOOLTIP_ARROW_SIZE - o;
                        if (e.arrow.hbias == LEFT ? (e.left = t.left + t.width / 2 - (o + 2 * pendo$1.TOOLTIP_ARROW_SIZE), e.arrow.left = s) : e.arrow.hbias == RIGHT ? (e.left = t.left - r + t.width / 2 + (o + 2 * pendo$1.TOOLTIP_ARROW_SIZE), e.arrow.left = d) : (e.left = t.left + t.width / 2 - r / 2, e.arrow.left = r / 2 - pendo$1.TOOLTIP_ARROW_SIZE), e.arrow.floating !== !1) {
                            var u = e.left + r - n.width;
                            u -= Math.max(0, e.arrow.left + u - d), u > 0 && (e.left -= u, e.arrow.left += u);
                            var c = -e.left;
                            c -= Math.max(0, s - (e.arrow.left - c)), c > 0 && (e.left += c, e.arrow.left -= c)
                        }
                        return e.arrow.border.top = e.arrow.top + a, e.arrow.border.left = e.arrow.left, e
                    }
                    return e.arrow.hbias == LEFT ? (e.left = t.left + t.width, e.arrow.left = 1, e.arrow.left += isOldIE(10, 6) ? 5 : 0, e.arrow.border.left = e.arrow.left - 1) : e.arrow.hbias == RIGHT && (e.left = Math.max(0, t.left - r), e.arrow.left = r - pendo$1.TOOLTIP_ARROW_SIZE - 1, e.arrow.left += isOldIE(10, 6) ? 5 : 0, e.arrow.left += 7 == msie && trident >= 6 ? 1 : 0, e.arrow.border.left = e.arrow.left + 1), e.top = t.top - i / 2 + t.height / 2, e.arrow.top = i / 2 - pendo$1.TOOLTIP_ARROW_SIZE, e.arrow.border.top = e.arrow.top, e
                }, BuildingBlockWatermark = function () {
                    function e(e) {
                        var t = _.filter(e, function (e) {
                            return e && e.attributes && e.attributes.isWatermark
                        });
                        BuildingBlockWatermark.watermarkGuides = t;
                        var n = _.map(t, function (e) {
                            return e.fetchContent()
                        });
                        return q.all(n)
                    }

                    function t(e) {
                        return _.find(BuildingBlockWatermark.watermarkGuides, function (t) {
                            return e === t.appId
                        })
                    }

                    function n(e) {
                        return _.find(BuildingBlockWatermark.watermarkGuides, function (t) {
                            return e === t.targetAccount
                        })
                    }

                    function i(e, i) {
                        if (e = e || {}, e.isTraining) {
                            var r = e.targetAccount ? n(e.targetAccount) : t(e.appId);
                            if (r && r.steps) {
                                var o = r.steps[0];
                                if (o && o.domJson) {
                                    var a = o.domJson, s = i(a, o);
                                    return s.css({
                                        position: "absolute",
                                        left: "auto",
                                        top: e.isBottomAligned ? "auto" : "100%",
                                        bottom: e.isBottomAligned ? "100%" : "auto",
                                        right: "0"
                                    }), s
                                }
                            }
                        }
                    }

                    return {initializeWatermark: e, buildWatermark: i}
                }(), BuildingBlockTooltips = function () {
                    function e(e, n, o, a) {
                        if (o.guideElement) {
                            var s = o.guideElement;
                            s.addClass(buildTooltipCSSName());
                            var d = getOffsetPosition(n);
                            if (0 === d.height && 0 === d.width) return null;
                            var c = function (e) {
                                return "pendo-guide-container" === e.props.id
                            }, l = BuildingBlockGuides.findDomBlockInDomJson(e, c);
                            if (l) {
                                var f = o.attributes.layoutDir, p = {height: a.offsetHeight, width: a.offsetWidth}, g = {
                                    height: parseInt(l.props["data-caret-height"], 10) || 0,
                                    width: parseInt(l.props["data-caret-width"], 10) || 0,
                                    backgroundColor: l.props.style["background-color"],
                                    offset: 10
                                };
                                if (i(o), l.props.style.border) {
                                    var h = l.props.style.border.split(" ");
                                    g.borderColor = h[2], g.borderWidth = parseInt(h[0], 10)
                                }
                                var m = r(d, p, g, f);
                                o && (o.dim = m);
                                var v;
                                o && _.isFunction(o.getGuide) && (v = o.getGuide());
                                var b = get(v, "attributes.resourceCenter");
                                d.fixed ? (s.css({position: "fixed"}), a.style.position = "absolute") : o && b || (a.style.position = "absolute"), g.height && g.width && u(s, m, g);
                                var S = "300000";
                                return a && a.style && a.style["z-index"] && (S = a.style["z-index"]), s.css({"z-index": S}), b || s.css({
                                    height: "auto",
                                    width: "auto",
                                    overflow: "visible"
                                }), o.elementPathRule && s.css({
                                    left: m.left,
                                    top: m.top,
                                    position: d.fixed ? "fixed" : "absolute"
                                }), "top" === m.layoutDir && m.hbias === LEFT && s.find("#pendo-watermark").css({
                                    top: "auto",
                                    bottom: "100%"
                                }), t(o, y), s[0]
                            }
                        }
                    }

                    function t(e, t) {
                        for (var n = e.element, i = /(auto|scroll)/, r = getScrollParent(n, i), o = getBody(); r && r !== o;) e.attachEvent(r, "scroll", _.throttle(_.bind(t, e, e, r, i), 10)), r = getScrollParent(r, i);
                        hasDocumentScrolling(document, o) || (r = document.documentElement, e.attachEvent(r, "scroll", _.throttle(_.bind(t, e, e, r, i), 10)))
                    }

                    function n(e, t) {
                        var n = ShadowSizzle(t.elementPathRule)[0], i = function (n) {
                            dom.data.set(n, "advanced", !0), onGuideAdvanced(e, t)
                        };
                        t.attachEvent(n, e, i)
                    }

                    function i(e) {
                        e.attributes && e.attributes.advanceActions && e.elementPathRule && (e.attributes.advanceActions.elementHover ? n("mouseover", e) : e.attributes.advanceActions.elementClick && n("click", e))
                    }

                    function r(e, t, n, i) {
                        var r = getScreenDimensions(), s = i || "auto",
                            d = {width: Math.min(t.width, r.width), height: t.height};
                        d.layoutDir = s, d.hbias = horizontal(e, r, s), d.vbias = vertical(e, r, s), d.layoutDir = o(d, r, e, s);
                        var u = a(d, e, r);
                        return d.top = u.top, d.left = u.left, "top" === d.layoutDir ? d.top -= n.height : "bottom" === d.layoutDir ? d.top += n.height : "right" === d.layoutDir ? d.left += n.height : "left" === d.layoutDir && (d.left -= n.height), d
                    }

                    function o(e, t, n, i) {
                        if (i && "auto" !== i) return i;
                        var r = n.fixed, o = n.top - documentScrollTop(), a = n.left - documentScrollLeft(),
                            s = a + n.width, d = getClientRect(getBody()), u = n.top - e.height < 0,
                            c = n.top + n.height + e.height > (r ? d.height : d.bottom), l = n.left - e.width < 0,
                            f = n.left + n.width + e.width > (r ? d.width : d.right), p = c && u && l && f;
                        if (p) return "bottom";
                        var g;
                        o < t.height / 3 && (g = "bottom");
                        var h = o > 2 * t.height / 3;
                        if ((h || e.hbias === CENTER) && (g = "top"), a < e.width && t.width - s < e.width && (g = "bottom"), "bottom" === g) {
                            var m = getOffsetPosition(document.body);
                            n.top + e.height > m.height && (g = "top")
                        }
                        return "top" === g && n.top - e.height < 0 && (g = "bottom"), c && u && (e.hbias !== CENTER && (g = e.hbias), l && f || (f || (g = "right"), l || (g = "left"))), g && "bottom" !== g || !c || u || (g = "top"), g ? g : e.hbias ? e.hbias : "bottom"
                    }

                    function a(e, t, n) {
                        return "top" === e.layoutDir || "bottom" === e.layoutDir ? s(e, n, t, e.layoutDir, e.hbias) : d(e, n, t, e.vbias)
                    }

                    function s(e, t, n, i, r) {
                        var o = e.height, a = e.width, s = {top: null, left: null};
                        if ("bottom" === i ? s.top = n.top + n.height : "top" === i && (s.top = n.top - o), "right" === r) {
                            var d = n.left + n.width / 2;
                            d + e.width > t.width && (d -= d + e.width - t.width), s.left = d
                        } else "left" === r ? s.left = n.left - a + n.width / 2 : s.left = n.left + n.width / 2 - a / 2;
                        return s
                    }

                    function d(e, t, n, i) {
                        var r = e.height, o = e.width, a = {top: null, left: null};
                        if ("right" === e.layoutDir ? a.left = n.left + n.width : "left" === e.layoutDir && (a.left = Math.max(0, n.left - o)), "bottom" === i) {
                            var s = n.top + n.height / 2;
                            s + e.height > t.height && (s -= s + e.height - t.height), a.top = s
                        } else "top" === i ? a.top = n.top - r + n.height / 2 : a.top = n.top - r / 2 + n.height / 2;
                        return a
                    }

                    function u(e, t, n) {
                        var i = document.createElement("div");
                        i.setAttribute("class", "pendo-tooltip-caret"), i.style.position = "absolute", i.style.zIndex = 11, c(i, t, n);
                        var r = e.find("#pendo-guide-container")[0].parentNode;
                        if (r.appendChild(i), n.borderWidth) {
                            var o = p(i, n, t.layoutDir);
                            r.appendChild(o)
                        }
                    }

                    function c(e, t, n) {
                        b(e), ("top" === t.layoutDir || "bottom" === t.layoutDir) && l(e, t, n), ("left" === t.layoutDir || "right" === t.layoutDir) && f(e, t, n)
                    }

                    function l(e, t, n) {
                        var i = getScreenDimensions();
                        if (e.style["border-left"] = n.width + "px solid transparent", e.style["border-right"] = n.width + "px solid transparent",
                        t.hbias === LEFT) {
                            var r = t.width - 2 * n.width - n.offset - n.borderWidth;
                            e.style.left = r + "px", t.left += n.offset + n.width + n.borderWidth
                        } else t.hbias === RIGHT ? (e.style.left = n.offset + n.borderWidth + "px", t.left -= n.offset + n.width + n.borderWidth, t.left + t.width > i.width && (t.left = t.left - (t.left + t.width - i.width)), t.left = Math.max(0, t.left)) : e.style.left = t.width / 2 - n.width + "px";
                        if ("bottom" === t.layoutDir) {
                            e.style["border-bottom"] = n.height + "px solid " + n.backgroundColor;
                            var o = -1 * n.height;
                            n.borderWidth && (o += n.borderWidth), e.style.top = o + "px"
                        }
                        if ("top" === t.layoutDir) {
                            e.style["border-top"] = n.height + "px solid " + n.backgroundColor;
                            var a = -1 * n.height;
                            n.borderWidth && (a += n.borderWidth), e.style.bottom = a + "px"
                        }
                        return e
                    }

                    function f(e, t, n) {
                        var i = getScreenDimensions();
                        if (e.style["border-top"] = n.width + "px solid transparent", e.style["border-bottom"] = n.width + "px solid transparent", t.vbias === TOP) {
                            var r = t.height - 2 * n.width - n.offset - n.borderWidth;
                            e.style.top = r + "px", t.top += n.offset + n.width + n.borderWidth
                        } else t.vbias === BOTTOM ? (e.style.top = n.offset + n.borderWidth + "px", t.top -= n.offset + n.width + n.borderWidth, t.top + t.height > i.height && (t.top = t.top - (t.top + t.height - i.height)), t.top = Math.max(0, t.top)) : e.style.top = t.height / 2 - n.width + "px";
                        if ("left" === t.layoutDir) {
                            e.style["border-left"] = n.height + "px solid " + n.backgroundColor;
                            var o = -1 * n.height;
                            n.borderWidth && (o += n.borderWidth), e.style.right = o + "px"
                        }
                        if ("right" === t.layoutDir) {
                            e.style["border-right"] = n.height + "px solid " + n.backgroundColor;
                            var a = -1 * n.height;
                            n.borderWidth && (a += n.borderWidth), e.style.left = a + "px"
                        }
                        return e
                    }

                    function p(e, t, n) {
                        var i = e.cloneNode();
                        return i.setAttribute("class", "pendo-tooltip-caret-border"), i.style.zIndex = 10, g(i, t, n, e), i
                    }

                    function g(e, t, n, i) {
                        b(e);
                        for (var r = ["Top", "Right", "Bottom", "Left"], o = 0; o < r.length; o++) {
                            var a = "border" + r[o] + "Width", s = "border" + r[o] + "Color", d = "border" + r[o] + "Style";
                            i.style[a] && (e.style[a] = parseInt(i.style[a], 10) + t.borderWidth + "px", e.style[s] = h(i.style[s], t.borderColor), e.style[d] = "solid")
                        }
                        "top" === n && (e.style.left = parseInt(i.style.left, 10) - t.borderWidth + "px", e.style.bottom = parseInt(i.style.bottom, 10) - t.borderWidth + "px"), "bottom" === n && (e.style.left = parseInt(i.style.left, 10) - t.borderWidth + "px", e.style.top = parseInt(i.style.top, 10) - t.borderWidth + "px"), "right" === n && (e.style.top = parseInt(i.style.top, 10) - t.borderWidth + "px", e.style.left = parseInt(i.style.left, 10) - t.borderWidth + "px"), "left" === n && (e.style.top = parseInt(i.style.top, 10) - t.borderWidth + "px", e.style.right = parseInt(i.style.right, 10) - t.borderWidth + "px")
                    }

                    function h(e, t) {
                        return "transparent" === e ? e : t
                    }

                    function m(e) {
                        if (e.guideElement) {
                            var t = "pendo-resource-center-container" === e.guideElement.attr("id"),
                                n = BuildingBlockGuides.findGuideContainerJSON(e.domJson),
                                i = t ? e.guideElement : e.guideElement.find("#" + n.props.id);
                            return i[0]
                        }
                    }

                    function v(e, t) {
                        const n = t || m(e);
                        if (n) {
                            var i = e.element || getElementForGuideStep(e), r = getOffsetPosition(i);
                            if ("none" !== getComputedStyle_safe(e.elements[0]).display) {
                                var o = e.attributes.layoutDir, a = e.guideElement,
                                    s = dom(n).find("#pendo-guide-container"), d = s[0].style, u = getComputedStyle_safe(n),
                                    l = {height: parseInt(u.height, 10), width: parseInt(u.width, 10)}, f = {
                                        height: parseInt(s[0].getAttribute("data-caret-height"), 10) || 0,
                                        width: parseInt(s[0].getAttribute("data-caret-width"), 10) || 0,
                                        backgroundColor: s[0].style["background-color"],
                                        offset: 10,
                                        borderColor: d.borderColor,
                                        borderWidth: parseInt(d.borderWidth, 10)
                                    }, p = this.getBBTooltipDimensions(r, l, f, o);
                                if (f.height && f.width) {
                                    var h = a.find(".pendo-tooltip-caret")[0], v = a.find(".pendo-tooltip-caret-border")[0];
                                    h && c(h, p, f), v && g(v, f, p.layoutDir, h)
                                }
                                a.css({top: p.top, left: p.left, position: r.fixed ? "fixed" : a[0].style.position})
                            }
                        }
                    }

                    function b(e) {
                        var t = ["top", "right", "bottom", "left"];
                        _.each(t, function (t) {
                            e.style[t] = "", e.style["border-" + t] = ""
                        })
                    }

                    function y(e, t, n) {
                        var i = getClientRect(e.element);
                        isVisibleInScrollParent(i, t, n) ? (BuildingBlockTooltips.placeBBTooltip(e), dom(e.elements[0]).css({display: "block"})) : dom(e.elements[0]).css({display: "none"})
                    }

                    return {
                        createBBTooltip: e,
                        getBBTooltipDimensions: r,
                        determineBBHorizontalBias: horizontal,
                        determineTooltipPosition: o,
                        positionBBTooltipWithBias: a,
                        calculateToolTipPositionForTopBottom: s,
                        calculateToolTipPositionForLeftRight: d,
                        buildTooltipCaret: u,
                        styleTopOrBottomCaret: l,
                        styleLeftOrRightCaret: f,
                        buildBorderCaret: p,
                        determineBorderCaretColor: h,
                        placeBBTooltip: v,
                        attachBBAdvanceActions: i,
                        attachScrollHandlers: t
                    }
                }(), AsyncContent = function () {
                    function e(t) {
                        function n(e) {
                            r(a)
                        }

                        function i() {
                            return e.fetchContent(o)
                        }

                        function r(e) {
                            var n = _.indexOf(t.steps, o);
                            _.chain(t.steps).rest(n + 1).first(e).each(function (e) {
                                e.fetchContent()
                            }).value()
                        }

                        var o = this, a = 1;
                        return (o.contentUrl || o.domJsonpUrl) && (_.extend(o, {fetchContent: i}), o.after("render", n)), o
                    }

                    function t(e) {
                        var t = e.getGuide(), n = t && t.language ? t.language : "default";
                        return e.id + "." + n
                    }

                    return e.state = {}, e.reset = function () {
                        ContentLoader.reset(), e.state = {}
                    }, e.fetchContent = function (n) {
                        var i = t(n), r = e.state[i];
                        if (!r) {
                            r = {};
                            var o = n.getGuide();
                            if (o.control) return;
                            var a, s, d;
                            o && o.language && (a = o.language, a !== o.authoredLanguage && (s = get(o, "translationStates." + a + ".stepTranslations." + n.id + ".domHash"), d = get(o, "translationStates." + a + ".stepTranslations." + n.id + ".domJsonpHash")));
                            var u = n.guideId + n.id, c = _.extend({
                                id: u,
                                language: a,
                                domHash: s,
                                domJsonpHash: d
                            }, _.pick(n, "contentUrl", "contentUrlCss", "contentUrlJs", "domJsonpUrl", "domUrl"));
                            r.promise = ContentVerifier.verify(c).then(function () {
                                return r.verified = !0, ContentLoader.load(c)
                            }).then(function (e) {
                                return r.loaded = !0, e
                            }), e.state[i] = r
                        }
                        return r.promise.then(function (e) {
                            _.extend(n, e)
                        })
                    }, e.hasContent = function (e) {
                        return doesExist(e.content) || doesExist(e.domJson)
                    }, e.reset(), e
                }(), JWT = function () {
                    function e(e) {
                        try {
                            return JSON.parse(atob(e.split(".")[1]))
                        } catch (t) {
                            return null
                        }
                    }

                    function t(e) {
                        return _.isString(e) ? /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/.test(e) : !1
                    }

                    function n(e, n) {
                        return n = n ? n + ": " : "", e.jwt || e.signingKeyName ? e.jwt && !e.signingKeyName ? (debug(n + "The jwt is supplied but missing signingKeyName."), !1) : e.signingKeyName && !e.jwt ? (debug(n + "The signingKeyName is supplied but missing jwt."), !1) : t(e.jwt) ? !0 : (debug(n + "The jwt is invalid."), !1) : (debug(n + "Missing jwt and signingKeyName."), !1)
                    }

                    function i(t, i) {
                        if (i = i || "", !ConfigReader.get("enableSignedMetadata")) return !1;
                        var r = n(t, i);
                        return ConfigReader.get("requireSignedMetadata") && !r ? (debug("Pendo will not " + i + "."), !1) : r ? e(t.jwt) : void debug("JWT is enabled but not being used, falling back to unsigned metadata.")
                    }

                    return {getJwtOptions: i}
                }(), metadataHash, getLocale = function () {
                    var e = window.navigator;
                    return ((_.isArray(e.languages) ? e.languages[0] : e.language || e.browserLanguage || e.systemLanguage || e.userLanguage) || "").split("-").join("_")
                }, OPTIONS_HASH_KEY_NAME = "meta", haveOptionsChanged = function (e) {
                    "object" == typeof e && (e = crc32(e)), "undefined" != typeof e && e.toString && (e = e.toString());
                    var t = _.isNumber(metadataHash) ? metadataHash : agentStorage.read(OPTIONS_HASH_KEY_NAME);
                    return "" + t !== e ? !0 : !1
                }, isScalar = function (e) {
                    return _.any(["Number", "Boolean", "Date", "String", "Null", "NaN", "Undefined"], function (t) {
                        return _["is" + t](e)
                    })
                }, cleanupMetadata = function (e) {
                    var t = {};
                    return _.each(e, function (e, n) {
                        isScalar(e) ? t[n] = e : _.isArray(e) && (t[n] = _.filter(e, isScalar))
                    }), t
                }, prepareOptions = function (e) {
                    return _.isObject(e) || (e = {}), _.isObject(e.visitor) || (e.visitor = {}), _.isObject(e.account) || (e.account = {}), _.isObject(e.parentAccount) || (e.parentAccount = {}), e.visitor.id === DEFAULT_VISITOR_ID && (log("Missing visitor id."), delete e.visitor.id), isValidId(e.account.id) && isValidId(e.parentAccount.id) && (isSubaccount(e.account.id) ? e.parentAccount.id = e.account.id.split(SUBACCOUNT_DELIMITER)[0] : e.account.id = "" + e.parentAccount.id + SUBACCOUNT_DELIMITER + e.account.id), isValidId(e.account.id) && (set_account_id(e.account.id), e.account.id = get_account_id()), isValidId(e.visitor.id) && pendo$1.identify(e.visitor.id, e.account.id), e.visitor.id = get_visitor_id(), e.visitor.language = getLocale(), {
                        visitor: e.visitor,
                        account: cleanupMetadata(e.account),
                        parentAccount: e.parentAccount,
                        date: getDateForOptions(),
                        version: pendo$1.VERSION
                    }
                }, getDateForOptions = function () {
                    var e = new Date, t = e.getDate(), n = e.getMonth() + 1, i = e.getFullYear();
                    return 10 > t && (t = "0" + t), 10 > n && (n = "0" + n), e = t + "/" + n + "/" + i
                }, validateOptions = function (e) {
                    return e && _.keys(e).length > 0
                }, updateOptions = makeSafe(function (e) {
                    if (validateOptions(e)) {
                        if (e.jwt && e.signingKeyName) {
                            var t = JWT.getJwtOptions(e, "updateOptions");
                            t && (setJwtInfo(_.pick(e, "jwt", "signingKeyName")), e = t)
                        }
                        e = prepareOptions(e), store.getters["metadata/selfHosted"]() && (e.selfHosted = !0), setUpdatedOptions(e), store.commit("metadata/setMetadata", e);
                        var n = crc32(e), i = isMetadataBlocked();
                        haveOptionsChanged(n) && !i && (agentStorage.write(OPTIONS_HASH_KEY_NAME, n), metadataHash = n, collectEvent("meta", e), flushLater(), queueGuideReload(), Events.metadata.trigger())
                    }
                }), isSelfHosted = function () {
                    var e = ShadowSizzle("script"), t = isSelfHostedUrl(e) && "extension" !== getInstallType();
                    return t
                }, isSelfHostedUrl = function (e) {
                    var t = new RegExp("/agent/static/" + pendo$1.apiKey + "/pendo\\.js$");
                    return !_.any(e, function (e) {
                        return t.test(e.src)
                    })
                }, isMetadataBlocked = function () {
                    var e = ConfigReader.get("blockAgentMetadata");
                    return e !== undefined ? e : !1
                }, getMetadata = function () {
                    return store.getters["metadata/metadata"]()
                }, getSerializedMetadata = function () {
                    return JSON.parse(JSON.stringify(getMetadata()))
                }, DOMActivation = function () {
                    function e(e, t, i) {
                        var r = e[f], o = r ? i[r] : null;
                        o || (r = r || "target" + _.uniqueId(), o = {target: e, events: {}}, i[r] = o, e[f] = r);
                        var a = i[t.id] || [];
                        a.push(r), i[t.id] = a, _.each(t.events, function (i) {
                            var r = o.events[i];
                            r || (r = {guideIds: {}}, r.fn = _.partial(n, _, r.guideIds), "mouseover" === i && (i = "mouseenter"), attachEvent(e, i, r.fn), o.events[i] = r), r.guideIds[t.id] = 1
                        })
                    }

                    function t(e, t) {
                        _.each(t[e.id], function (n) {
                            var i = n ? t[n] : null;
                            i && (_.each(i.events, function (t, n) {
                                t && t.guideIds && (delete t.guideIds[e.id], _.size(t.guideIds) <= 0 && ("mouseover" === n && (n = "mouseenter"), detachEvent(i.target, n, t.fn), delete i.events[n]))
                            }), _.size(i.events) <= 0 && (delete i.target[f], i.target = null, delete t[n]))
                        }), delete t[e.id]
                    }

                    function n(e, t) {
                        if (!e.pendoActivatedGuide && !dom.data.get(e, "advanced")) {
                            var n = ConfigReader.get("adoptPrioritizeAdoptGuides"),
                                i = _.compact(_.map(_.keys(t), function (e) {
                                    return findGuideById(e)
                                }));
                            i = _.filter(i, function (e) {
                                return e.steps && e.steps.length ? get(e, "attributes.dom.isOnlyShowOnce") ? !e.steps[0].hasBeenSeen() : !0 : !1
                            }), i = _(i).chain().sortBy(function (e) {
                                return "staged" === e.state ? 0 : 1
                            }).sortBy(function (e) {
                                var t = e.isTraining;
                                return n ? t ? 0 : 1 : t ? 1 : 0
                            }).value();
                            var r = _.find(i, function (e) {
                                var t = _.first(e.steps), n = get(e, "attributes.resourceCenter", !1);
                                return n && e.isShown() ? BuildingBlockResourceCenter.dismissResourceCenter() : t.canShow() ? e.isShown() ? !0 : showGuide(t, "dom") : !1
                            });
                            r && (e.pendoActivatedGuide = r.id)
                        }
                    }

                    function i() {
                        _.each(g, function (e) {
                            t(e, h), e.targets = []
                        }), g.length = 0, l = null
                    }

                    function r() {
                        l && l.reset()
                    }

                    function o(e) {
                        if (e.id && e.steps && e.steps.length && e.hasLaunchMethod("dom") && e.steps[0].canShowOnPage(getNormalizedUrl())) {
                            var t = get(e, "attributes.activation.event", []);
                            if (t && t.length) {
                                var n = a(e);
                                if (n) return {id: e.id, events: t, selector: n, targets: []}
                            }
                        }
                    }

                    function a(e) {
                        var t = get(e, "attributes.activation.selector");
                        return t ? t : e.steps[0].elementPathRule
                    }

                    function s(e) {
                        l || (_.each(e, function (e) {
                            var t = o(e);
                            t && g.push(t)
                        }), l = throttleIterator(50, createStatefulIterator()), l.circular = DOMActivation.circular)
                    }

                    function d(e, t) {
                        return e.length != t.length ? !1 : _.all(e, function (e, n) {
                            return e === t[n]
                        })
                    }

                    function u(n) {
                        return s(n), l.eachUntil(g, function (n) {
                            var i = ShadowSizzle(n.selector);
                            i.length > p && (i.length = p), d(i, n.targets) || (n.targets = i, t(n, h), _.each(i, function (t) {
                                e(t, n, h)
                            }))
                        })
                    }

                    function c(e) {
                        ConfigReader.get("disablePrefetch") || _.each(e, function (e) {
                            _.isFunction(e.hasLaunchMethod) && e.hasLaunchMethod("dom") && e.steps && e.steps.length && _.isFunction(e.steps[0].fetchContent) && e.steps[0].fetchContent()
                        })
                    }

                    var l, f = "pendoTargetId", p = 50, g = [], h = {};
                    return {
                        circular: !0,
                        key: f,
                        guides: g,
                        getActivationSelector: a,
                        targets: h,
                        reset: i,
                        resetIterator: r,
                        init: s,
                        update: u,
                        attach: e,
                        detach: t,
                        handler: n,
                        activates: o,
                        prefetch: c
                    }
                }(), GUIDE_STATE_TTL = 1e4, LAST_STEP_ADVANCED_COOKIE = "lastStepAdvanced", GuideStateModule = function () {
                    var e = {
                        steps: {},
                        expired: {},
                        ttl: GUIDE_STATE_TTL,
                        storageKey: LAST_STEP_ADVANCED_COOKIE,
                        guideRequestExpiration: 36e5,
                        scopedStorageKey: null,
                        receivedStateChangeAt: null,
                        receivedLastGuideStepSeen: null,
                        lastGuideStepSeen: null,
                        lastGuideRequestAt: null
                    }, t = {
                        init: function (e) {
                            e.commit("setScopedStorageKey", getPendoCookieKey(e.state.storageKey))
                        }, load: function (e, t) {
                            if (t) {
                                var n;
                                try {
                                    n = JSON.parse(t)
                                } catch (i) {
                                }
                                n && _.each([].concat(n), function (t) {
                                    e.commit("setStepState", t)
                                })
                            }
                        }, forceExpire: function (e) {
                            _.each(e.state.steps, function (t, n) {
                                e.commit("expireStepState", n)
                            })
                        }, expire: function (e) {
                            var t = e.getters.now();
                            _.each(e.state.steps, function (n, i) {
                                t - n.time > e.state.ttl && e.commit("expireStepState", i)
                            })
                        }, apply: function (e) {
                            var t, n = _.indexBy(e.getters.guideList(), "id");
                            e.dispatch("expire"), _.each(e.state.steps, function (i) {
                                var r = i.guideId, o = i.guideStepId;
                                if (!i.visitorId || i.visitorId === e.getters.visitorId()) {
                                    (!t || i.time > t.time) && (t = i);
                                    var a = n[r];
                                    if (a) {
                                        var s = _.first(a.steps);
                                        s && i.seenReason && (s.seenReason = i.seenReason);
                                        var d = _.findWhere(a.steps, {id: o});
                                        if (d) {
                                            var u = e.state.storageKey;
                                            d.seenState != i.state && (log("making sure that seenState = '" + i.state + "' for " + u + ": " + o), d.seenState = i.state), d.snoozeEndTime != i.snoozeEndTime && (log("making sure that snoozeEndTime = '" + i.snoozeEndTime + "' for " + u + ": " + o), d.snoozeEndTime = i.snoozeEndTime);
                                            var c = _.indexOf(a.steps, d);
                                            _.each(a.steps.slice(0, c), function (e) {
                                                _.contains(["advanced", "dismissed"], e.seenState) || (e.seenState = "advanced")
                                            })
                                        }
                                    }
                                }
                            }), t && e.dispatch("updateLastGuideStepSeen", _.extend({}, e.state.lastGuideStepSeen, t))
                        }, receiveLastGuideStepSeen: function (e, t) {
                            e.commit("setReceivedLastGuideStepSeen", t), e.commit("setLastGuideStepSeen", t)
                        }, updateLastGuideStepSeen: function (e, t) {
                            t.visitorId && t.visitorId !== e.getters.visitorId() || (t.guideStepId && e.commit("setStepState", t), e.commit("setLastGuideStepSeen", t), pendo$1.lastGuideStepSeen = t)
                        }, write: function (e) {
                            e.dispatch("expire");
                            var t = e.rootState.frames.tabId, n = e.state.storageKey, i = e.state.ttl,
                                r = e.getters.storage(), o = JSON.stringify(_.map(e.state.steps, function (e) {
                                    return _.extend({tabId: t}, e)
                                }));
                            log("writing " + o + " to a cookie named " + n + " for " + i), r.write(n, o, i), setPreviewState(e.state.lastGuideStepSeen, pendoLocalStorage)
                        }, storageChanged: function (e, t) {
                            if (t.key === e.state.scopedStorageKey) {
                                var n, i;
                                try {
                                    var r = e.getters.storage();
                                    n = r.read(e.state.storageKey), i = [].concat(JSON.parse(n))
                                } catch (o) {
                                }
                                e.getters.storageChangedInOtherTab()(i) && (clearLoopTimer(), e.dispatch("load", n), e.dispatch("apply"), e.state.receivedStateChangeAt || e.commit("setReceivedStateChange", e.getters.now()))
                            }
                        }, regainFocus: function (e) {
                            var t = e.getters.tabLostFocus(), n = e.getters.isGuideRequestStale();
                            t && (e.commit("setReceivedStateChange", null), n || (stopGuides(), startGuides())), n && forceGuideReload()
                        }
                    }, n = {
                        expireStepState: function (e, t) {
                            e.expired[t] = e.steps[t], delete e.steps[t]
                        }, setStepState: function (e, t) {
                            e.steps[t.guideStepId] = t
                        }, setScopedStorageKey: function (e, t) {
                            e.scopedStorageKey = t
                        }, setLastGuideStepSeen: function (e, t) {
                            e.lastGuideStepSeen = t
                        }, setReceivedLastGuideStepSeen: function (e, t) {
                            e.receivedLastGuideStepSeen = t
                        }, setReceivedStateChange: function (e, t) {
                            e.receivedStateChangeAt = t
                        }, setLastGuideRequestAt: function (e, t) {
                            e.lastGuideRequestAt = t
                        }
                    }, i = {
                        now: function () {
                            return getNow()
                        }, storage: function () {
                            return agentStorage
                        }, guideList: function () {
                            return activeGuides
                        }, tabLostFocus: function (e) {
                            return !!e.receivedStateChangeAt
                        }, isGuideRequestStale: function (e, t) {
                            return null == e.lastGuideRequestAt ? !1 : t.now() - e.lastGuideRequestAt > e.guideRequestExpiration
                        }, storageChangedInOtherTab: function (e, t, n) {
                            return function (t) {
                                var i = get(n, "frames.tabId");
                                if (!t) return !1;
                                var r = _.max(_.compact(t), "time");
                                return r && r.tabId && i && r.tabId !== i && (!e.lastGuideStepSeen || !e.lastGuideStepSeen.time || r.time > e.lastGuideStepSeen.time) ? !0 : !1
                            }
                        }, visitorId: function () {
                            return get_visitor_id()
                        }
                    };
                    return {actions: t, mutations: n, state: e, getters: i}
                }(), badgesShown = {}, BADGE_CSS_NAME = "_pendo-badge_";
            Badge.create = function (e) {
                var t = Badge.findStep(e);
                return t ? _.reduce(Badge.behaviors, function (n, i) {
                    return i.call(n, e, t)
                }, e.attributes.badge) : void 0
            }, Badge.findStep = function (e) {
                var t = _.find(e.steps, function (e) {
                    return !!e.elementPathRule
                });
                return t && e.attributes && e.attributes.badge ? t : void 0
            }, Badge.behaviors = [Wrappable, Badge, InlinePosition, AbsolutePosition, ClickActivation, HoverActivation, ShowOnHover];
            var placeBadge = function (e, t) {
                t = t || badgesShown;
                var n = t[e.id], i = n ? n.step() : Badge.findStep(e);
                if (i) {
                    var r = n ? n.target() : getElementForTargeting(i), o = get(e, "attributes.resourceCenter");
                    if (o && !store.getters["frames/canShowRCBadge"]()) return void (n && _.isFunction(n.hide) && (i.overrideElement = undefined, t[e.id] = undefined, n.hide()));
                    if (!o || e.hasResourceCenterContent) {
                        BuildingBlockResourceCenter.updateNotificationBubbles();
                        var a = !0;
                        i.elementContainsRulesList && (a = r && doesElementMatchContainsRules(r, i.elementContainsRulesList)), i.elementPathRule && isElementVisible(r) && ShadowSizzle.matchesSelector(r, i.elementPathRule) && a ? (n || (n = Badge.create(e)), n.show(), t[e.id] = n) : n && (i.isShown() || (i.overrideElement = undefined, t[e.id] = undefined, n.hide())), BuildingBlockResourceCenter.repositionDoubleResourceCenterBadge()
                    }
                }
            }, removeAllBadges = function () {
                _.map(badgesShown, removeBadge), badgesShown = {}
            }, removeBadge = function (e) {
                e && _.isFunction(e.hide) && e.hide()
            }, removeBadgeForGuide = function (e) {
                var t = badgesShown[e.id];
                t && removeBadge(t)
            }, adjustBadgesForResize = function () {
                debug("adjustBadgesForResize firing"), _.map(badgesShown, function (e) {
                    e && e.show()
                })
            }, getActiveGuide = function () {
                var e, t, n, i = _.find(getActiveGuides(), function (e) {
                    return e.isShown()
                });
                return i ? (get(i, "attributes.resourceCenter.isModule") && (i = BuildingBlockResourceCenter.getResourceCenter()), e = _.find(i.steps, function (e, t) {
                    return n = t, e.isShown()
                }), t = _.filter(i.steps, function (e, t) {
                    return e.isShown()
                }), {guide: i, steps: t, step: e, stepIndex: n}) : null
            }, smartNextStep = function (e) {
                var t = getActiveGuide();
                if (t) {
                    var n = t.guide.steps[t.stepIndex + 1], i = function () {
                        var e = ShadowSizzle(n.elementPathRule);
                        onGuideAdvanced(0 !== e.length && _.some(e, isElementVisible) ? t.step : n)
                    };
                    e = e || 0, setTimeout(i, e)
                }
            }, advanceOn = function (e, t) {
                var n = getActiveGuide();
                t = t || n.step.elementPathRule;
                var i = ShadowSizzle(t)[0], r = function () {
                    onGuideAdvanced(), detachEvent(i, e, r, !0)
                };
                attachEvent(i, e, r, !0)
            }, smartFirstStep = function () {
                dom("._pendo-guide_").css("display:none;");
                var e = getNormalizedUrl(), t = getActiveGuide(), n = t.guide.steps,
                    i = _.filter(_.rest(n), function (e) {
                        return !!e.pageId
                    }), r = _.indexOf(n, _.find(i, function (t) {
                        return testUrlForStep(t.regexUrlRule, e)
                    }));
                if (log("startingPoint is " + r), -1 == r) return void dom("._pendo-guide_").css("display:block;");
                var o = n[Math.max(0, r - 1)];
                log("found starting step to be " + o.id), onGuideAdvanced(o)
            }, renderStepPosition = function (e, t, n) {
                if (t) {
                    if (!n) {
                        var i = [].concat(t.steps).reverse();
                        n = _.findWhere(i, {seenState: "active"})
                    }
                } else {
                    var r = getActiveGuide();
                    if (!r) return;
                    t = r.guide, n = r.step
                }
                e = e || "Step <%= currPos %> of <%= total %>", e = _.template(e);
                var o = {currPos: t.getPositionOfStep(n), total: t.getTotalSteps()};
                return e(o)
            }, guideDev = {
                getActiveGuide: getActiveGuide,
                smartNextStep: smartNextStep,
                smartFirstStep: smartFirstStep,
                advanceOn: advanceOn,
                renderStepPosition: renderStepPosition
            }, Permalink = _.memoize(function () {
                return PermalinkConstructor(findGuideById, showGuideById)
            }), guidesProcessingThreadHandle = null, DEFAULT_TIMER_LENGTH = 500, waitThenLoop = function (e) {
                e = e || DEFAULT_TIMER_LENGTH, guidesProcessingThreadHandle = _.delay(function () {
                    guidesProcessingThreadHandle = null, startGuides()
                }, e), pendo$1.guidesProcessingThreadHandle = guidesProcessingThreadHandle
            }, clearLoopTimer = function () {
                guidesProcessingThreadHandle && (clearTimeout(guidesProcessingThreadHandle), guidesProcessingThreadHandle = null, pendo$1.guidesProcessingThreadHandle = guidesProcessingThreadHandle), store.dispatch("guideUpdate/stopScheduledUpdate")
            }, stopGuides = function () {
                AutoDisplay.reset(), badgeIterator.reset(), DOMActivation.resetIterator(), hideGuides(), store.commit("guideUpdate/completeUpdate", getNow());
                for (var e = 0; e < activeElements.length; e++) {
                    var t = activeElements[e];
                    t.parentNode.removeChild(t)
                }
                activeElements.length = 0, store.dispatch("guideUpdate/stopObserver")
            }, currentMode = "default", modeProcMap = {}, registerMode = function (e, t) {
                modeProcMap[e] = t
            }, setMode = function (e) {
                return e && "default" != e ? modeProcMap[e] ? void (currentMode = e) : void alert("Bad Mode: " + e) : void (currentMode = "default")
            }, getMode = function () {
                return currentMode
            }, startGuides = function () {
                if (clearLoopTimer(), areGuidesDisabled()) return void log("guides are disabled.", "guides", "disabled");
                if (areGuidesDelayed()) return void log("guides are delayed.", "guides", "delayed");
                if (!store.getters["guideState/tabLostFocus"]()) try {
                    var e = getActiveGuides();
                    if (!e || 0 === e.length) return;
                    store.dispatch("guideUpdate/startObserverIfNeeded"), store.dispatch("guideUpdate/startIteration", getNow()), getLoopProc()(e)
                } catch (t) {
                    store.commit("guideUpdate/completeUpdate", getNow()), writeException(t, "ERROR in guide-loop")
                } finally {
                    store.dispatch("guideUpdate/completeIteration", getNow()), continueOrCompleteUpdate()
                }
            }, manuallyStartGuides = function () {
                var e = ConfigReader.getOriginalOptions();
                ConfigReader.get("delayGuides") && (delete e.delayGuides, ConfigReader.setOriginalOptions(e)), ConfigReader.get("guides.delay") && (delete e.guides.delay, ConfigReader.setOriginalOptions(e)), startGuides()
            }, manuallyStopGuides = function () {
                areGuidesDisabled() || setGuidesDelayed(!0), stopGuides(), resetPendoUI()
            }, getLoopProc = function () {
                return modeProcMap[currentMode] ? modeProcMap[currentMode] : defaultLoopProc
            }, defaultLoopProc = function (e) {
                runGuidePhase("badge", function (t) {
                    placeBadgesProc(e) && t()
                }), runGuidePhase("dom", function (t) {
                    DOMActivation.update(e) && t()
                }), runGuidePhase("guideCenter", function (t) {
                    launcherProc(e), t()
                }), runGuidePhase("resourceCenter", function (e) {
                    resourceCenterProc(BuildingBlockResourceCenter.getResourceCenter()), e()
                }), runGuidePhase("frameVisibility", function (e) {
                    store.dispatch("frames/updateFrameVisibility"), e()
                }), isGuideShown() ? runGuidePhase("guideShowing", function (e) {
                    guideShowingProc(), e()
                }) : noGuideShowingProc(e), runGuidePhase("preview", function (t) {
                    updatePreview(document, e, getLastGuideStepSeen()), t()
                }), prefetchBadgeActivatedGuideContent(activeGuides, badgesShown)
            }, badgeIterator = throttleIterator(50, createStatefulIterator(function (e) {
                return e.id
            })), placeBadgesProc = function (e) {
                var t = _.filter(e, isBadge);
                return badgeIterator.eachUntil(t, function (e) {
                    e.placeBadge()
                })
            }, launcherProc = function (e) {
                if (pendo$1.guideWidget && pendo$1.guideWidget.enabled) {
                    var t = getLauncherGuideList(e);
                    updateLauncher(t, !0)
                }
            }, noGuideShowingProc = function (e) {
                _.find([function () {
                    return runGuidePhase("permalink", function (e) {
                        var t = Permalink().tryDisplay(pendo$1);
                        return e(), t
                    })
                }, function () {
                    return runGuidePhase("walkthrough", function (t) {
                        var n = _.find(e, function (e) {
                            return e.isContinuation(getLastGuideStepSeen())
                        }), i = n && n.attributes && n.attributes.doNotResume;
                        return n && !i ? (n.show("continue"), t(), !0) : void t()
                    })
                }, function () {
                    return runGuidePhase("autoDisplay", function (t) {
                        return AutoDisplay.tryDisplay(e, pendo$1, t)
                    })
                }], function (e) {
                    return !!e()
                })
            }, GuideDisplay = function () {
                function e(e) {
                    return {
                        then: function (t) {
                            return t(e)
                        }
                    }
                }

                function t(t) {
                    if (!t.getGuide().isModule) return e();
                    var i = BuildingBlockResourceCenter.getResourceCenter();
                    return i ? n(i.steps[0], "badge") : e()
                }

                function n(t, n) {
                    if (AsyncContent.hasContent(t) && ContentValidation.valid(t)) return t._show(n), e(t.isShown());
                    if (AsyncContent.hasContent(t) && ContentValidation.invalid(t)) return e(!1);
                    var i = t.getGuide();
                    return i.canShowOnDevice() && t.canShowOnPage(getNormalizedUrl()) ? (t.lock(), AsyncContent.fetchContent(t).then(function () {
                        return "whatsnew" === t.type || t.isShown() ? ContentValidation.validate(t.getGuide()) : !1
                    }).then(function () {
                        return "whatsnew" === t.type || t.isShown() ? (t.unlock(), t._show(n), t.isShown()) : !1
                    })) : e(!1)
                }

                function i(i, o) {
                    if (isPreviewing() && _.isFunction(i._show)) return i._show(o), e(i.isShown());
                    var a = i.getGuide();
                    return "whatsnew" === i.type ? n(i, o) : !store.getters["frames/hasFrames"]() || store.getters["frames/isGuideInThisFrame"]()(a) ? t(i).then(function () {
                        return n(i, o)
                    }).then(function (e) {
                        return e ? !0 : r(i, o)
                    }) : r(i, o)
                }

                function r(t, n) {
                    var i = t.getGuide();
                    return store.getters["frames/hasFrames"]() && store.getters["frames/isGuideInDifferentFrame"]()(i) ? (t.lock(), store.dispatch("frames/showGuideStep", {
                        guideId: t.guideId,
                        stepId: t.id,
                        reason: n
                    }).then(function (e) {
                        return t.unlock(), e.isShown
                    }, function () {
                        return t.unlock(), !1
                    }).then(function (e) {
                        return e && (clearInterval(t.timeoutTimer), delete t.timeoutTimer), e
                    })) : e(!1)
                }

                return {show: i, showLocal: n}
            }(), GuideRuntime = function (e) {
                function t(e) {
                    return "active" === e.seenState ? "hidden" : e.seenState
                }

                function n(e) {
                    return new r(e, o)
                }

                function i(e) {
                    return s.indexOf(e) > -1
                }

                function r(e, t) {
                    this.step = e;
                    var n = _.bind(function () {
                        this.purge()
                    }, this);
                    this.purge = _.partial(a.off, "afterUnmounted", n), a.on("afterUnmounted", n)
                }

                var o = e.runtime, a = Eventable.call({}),
                    s = ["beforeUnmount", "beforeUpdate", "unmounted", "updated", "advanced", "dismissed", "snoozed", "hidden"];
                return o.on(function (e) {
                    var n = e.data[0];
                    if (e.step = n, delete e.data, ["beforeUnmount", "unmounted"].indexOf(e.type) > -1) {
                        var i = t(n);
                        e.reason = i, "unmounted" === e.type && a.trigger(i, e)
                    }
                    a.trigger(e.type, e), "unmounted" === e.type && a.trigger("afterUnmounted")
                }), r.prototype.on = function (e, t) {
                    return i(e) ? (t = makeSafe(t), a.on(e, t), void (this.purge = _.compose(this.purge, _.partial(a.off, e, t)))) : void log("GUIDE-RUNTIME: Warning! Unregisterable event type " + e)
                }, {getContext: n}
            }(Events);
            AdvanceTrigger.prototype.add = function () {
                (0 !== _.indexOf(this.guide.steps, this.step) || AdvanceTrigger.shouldAttachHandler(this.guide, this.method)) && (!isBadge(this.guide) || isWalkthrough(this.guide)) && this.setupElementEvent(this.element, this.method)
            }, AdvanceTrigger.prototype.remove = function () {
                this.teardownElementEvent(this.element, this.method)
            }, AdvanceTrigger.prototype.setupElementEvent = function (e, t) {
                this.advanceFn || (this.advanceFn = _.compose(_.bind(this.teardownElementEvent, this, e, t), _.bind(this.step.advance, this.step))), AdvanceTrigger.attach(this.step, e, t, this.advanceFn)
            }, AdvanceTrigger.prototype.teardownElementEvent = function (e, t) {
                log("detach onGuideAdvanced", "guide"), detachEvent(e, t, this.advanceFn, !0), this.step.removeTrigger(this)
            }, AdvanceTrigger.shouldAttachHandler = function (e, t) {
                return !e.isActivatedByEvent(t) || DOMActivation.activates(e) || e.attributes.activation.selector !== e.steps[0].elementPathRule && !!e.attributes.activation.selector
            }, AdvanceTrigger.attach = function (e, t, n, i) {
                if (e) {
                    for (var r = AdvanceTrigger.handlers = AdvanceTrigger.handlers || {}, o = r[e.id] = r[e.id] || [], a = 0; a < o.length; ++a) {
                        var s = o[a];
                        t === s[0] && n === s[1] && (detachEvent(t, n, s[2], !0), o.splice(_.indexOf(o, s), 1), a--)
                    }
                    o.push([t, n, i]), detachEvent(t, n, i, !0), attachEvent(t, n, i, !0)
                }
            };
            var LB_DEFAULT_WIDTH = 500, LB_DEFAULT_HEIGHT = 500, LIGHTBOX_CSS_NAME = "_pendo-guide-lb_",
                canLightboxStepBeShown = function (e) {
                    return canStepBeRendered(e)
                }, addOverlay = function (e, t) {
                    var n = !!dom("._pendo-backdrop_")[0];
                    return get(t, "overlayDiv[0]") || (t.overlayDiv = dom("<div/>").addClass("_pendo-backdrop_")), n === !1 && (t.elements.push(t.overlayDiv[0]), t.overlayDiv.appendTo(getGuideAttachPoint())), isBrowserInQuirksmode() && t.overlayDiv.css({
                        height: "100%",
                        width: "100%",
                        position: "absolute"
                    }), e && dom(t.overlayDiv).addClass("_pendo-onboarding_"), t.overlayDiv
                }, renderLightboxGuide = function (e) {
                    var t = e.guideElement, n = pendo$1.TOOLTIP_ARROW_SIZE, i = e.attributes.height, r = e.attributes.width,
                        o = Math.floor(r / 2), a = Math.floor(i / 2);
                    t.addClass(LIGHTBOX_CSS_NAME).css({
                        top: "50%",
                        left: "50%",
                        "margin-top": -a,
                        "margin-left": -o
                    }), dom("._pendo-guide-container_", t).css({
                        bottom: n,
                        right: n
                    }), isBrowserInQuirksmode() && t.css({position: "absolute"})
                }, showLightboxGuide = function (e, t) {
                    if (!canLightboxStepBeShown(e)) return null;
                    t === undefined && (t = activeElements), e.element = getElementForGuideStep(e), renderLightboxGuide(e);
                    var n = e.getGuide() ? e.getGuide().isOnboarding() : !1;
                    addOverlay(n, e);
                    var i = e.guideElement;
                    t.push(i[0]), i.appendTo(getGuideAttachPoint())
                }, MOBILE_LIGHTBOX_CSS_NAME = "_pendo-guide-mobile-lb_", renderMobileLightboxGuide = function (e) {
                    var t = e.guideElement;
                    t.addClass(MOBILE_LIGHTBOX_CSS_NAME)
                }, showMobileLightboxGuide = function (e, t) {
                    function n(e) {
                        e.preventDefault()
                    }

                    if (!canLightboxStepBeShown(e)) return null;
                    t === undefined && (t = activeElements), e.element = getElementForGuideStep(e), renderMobileLightboxGuide(e);
                    var i = e.getGuide() ? e.getGuide().isOnboarding() : !1, r = addOverlay(i, e), o = e.guideElement,
                        a = pendo$1.TOOLTIP_ARROW_SIZE;
                    o.css({width: "", height: ""});
                    var s = dom("._pendo-guide-container_", o).css({bottom: a, right: a});
                    dom("._pendo-close-guide_", o).remove().prependTo(s), o.appendTo(getGuideAttachPoint()), t.push(o[0]), attachEvent(r[0], "touchmove", n), attachEvent(o[0], "touchmove", n)
                }, BANNER_DEFAULT_HEIGHT = 500, BANNER_CSS_NAME = "_pendo-guide-banner_";
            GuideStep.create = function (e, t) {
                return _.reduce(GuideStep.behaviors, function (e, n) {
                    return n.call(e, t)
                }, e)
            }, GuideStep.isGuideStep = function (e) {
                return !!e && _.isFunction(e.render)
            }, GuideStep.init = function () {
                GuideStep.behaviors = [Wrappable, GuideStep, RemoteFrameStep, AsyncContent, ContentValidation.Step, CloseButton, Credits, Tooltip, Lightbox, Banner, WhatsNew, Poll, AutoHeight, PreviewMode]
            };
            var isOB = function (e) {
                return e && e.attributes && !!e.attributes.isOnboarding
            };
            GuideErrorThrottle.MAX_ERRORS_PER_MINUTE = 30, Guide.create = function (e) {
                return _.reduce(Guide.behaviors, function (e, t) {
                    return t.call(e)
                }, e)
            }, Guide.init = function () {
                Guide.behaviors = [Wrappable, Guide, ContentValidation.Guide, GroupGuide, WalkthroughGuide, GuideErrorThrottle, RemoteFrameGuide]
            };
            var BuildingBlockTemplates = function () {
                    function e(e, t) {
                        var n = e.attributes.resourceCenter.children;
                        return _.reduce(n, function (e, n, i) {
                            var r = o(t, n);
                            return r ? (e.push(r), e) : e
                        }, [])
                    }

                    function t(e, t, n, i) {
                        var o = i || getActiveGuides();
                        switch (e) {
                            case"pendo_resource_center_module_list_item":
                                return r(t, n, o);
                            case"pendo_resource_center_guide_list_item":
                                return a(t, n, o);
                            case"pendo_resource_center_onboarding_item":
                                return s(t, n, o);
                            case"pendo_resource_center_onboarding_progress_bar":
                                return d(t, n, o);
                            case"pendo_resource_center_announcement_item":
                                return u(t, n, o);
                            case"pendo_guide_data_text_block":
                                return p(t, n, o);
                            default:
                                return []
                        }
                    }

                    function n(e, t) {
                        var n = /<%=\s*([A-Za-z_0-9$]+)\s*%>/gi;
                        return e.replace(n, function (e, n) {
                            return _.isNull(t[n]) || _.isUndefined(t[n]) ? e : t[n]
                        })
                    }

                    function i(e, t, r) {
                        if (e.content && (e.content = n(e.content, t)), e.props && e.props.id && e.props.id.indexOf("pendo-right-caret") >= 0 && (e.props["aria-labelledby"] = r), e.children) for (var o = 0; o < e.children.length; o++) i(e.children[o], t, r);
                        return e
                    }

                    function r(e, t, n) {
                        var r = e.templateChildren;
                        return _.reduce(r, function (r, o, a) {
                            var s = BuildingBlockResourceCenter.findResourceCenterHomeView(n), d = _.find(n, function (e) {
                                return e.id === o.id
                            });
                            if (pendo$1.designer) d = o, s = _.find(n, function (e) {
                                return get(e, "attributes.resourceCenter.isTopLevel")
                            }); else {
                                if (!d) return r;
                                if (!d.hasResourceCenterContent) return _.each(d.children, function (e) {
                                    var t = findGuideById(e);
                                    t && t.control && t.steps[0].onControlGuide("control")
                                }), r
                            }
                            var u = JSON.parse(JSON.stringify(e));
                            delete u.templateChildren, u.props.id = u.props.id + "-" + a, u.props["data-pendo-module-guide-id"] = d.id, u.actions || (u.actions = []);
                            var c = {
                                action: "renderResourceCenterModule",
                                source: u.props.id,
                                destination: "EventRouter",
                                parameters: [{name: "guideId", type: "string", value: d.id}],
                                uiMetadata: {},
                                eventType: "click"
                            };
                            pendo$1.designer || u.actions.push(c);
                            var l = get(s, "attributes.notificationBubble"), f = get(s, "attributes.notifications");
                            if (l && f) {
                                var p;
                                "AnnouncementsModule" === get(d, "attributes.resourceCenter.moduleId") && (p = d.id), "chat" === get(d, "attributes.resourceCenter.integrationName") && (p = "chat"), p && (u.props["data-pendo-notification-id"] = p, g(u, s, l, p, s.attributes.notifications.individualCounts[p]))
                            }
                            return u = i(u, o, u.props.id), r.concat(BuildingBlockGuides.buildNodeFromJSON(u, t, n))
                        }, [])
                    }

                    function o(e, t) {
                        var n = _.find(e, function (e) {
                            return e.id === (t.id ? t.id : t)
                        });
                        if (pendo$1.designer) return t;
                        if (n) return n.ineligibleForRC ? void (n.control && n.steps[0].onControlGuide("control")) : n
                    }

                    function a(e, t, n) {
                        var r = e.templateChildren;
                        return _.reduce(r, function (r, a, s) {
                            var d = o(n, a);
                            if (!d) return r;
                            var u = JSON.parse(JSON.stringify(e));
                            a.keywords && (u.props["data-_pendo-text-list-item-1"] = a.keywords), delete u.templateChildren, u.props.id = u.props.id + "-" + s, u.actions || (u.actions = []);
                            var c = {
                                action: "showGuide", source: u.props.id, destination: "EventRouter", parameters: [{
                                    name: "guideId", type: "string",
                                    value: d.id
                                }, {name: "reason", type: "string", value: "launcher"}], uiMetadata: {}, eventType: "click"
                            };
                            return pendo$1.designer || u.actions.push(c), u = i(u, a), r.concat(BuildingBlockGuides.buildNodeFromJSON(u, t, n))
                        }, [])
                    }

                    function s(e, t, r) {
                        var a = e.templateChildren;
                        return _.reduce(a, function (a, s, d) {
                            var u = o(r, s);
                            if (!u) return a;
                            var c = JSON.parse(JSON.stringify(e));
                            delete c.templateChildren, c.props.id = c.props.id + "-" + d, c.actions || (c.actions = []);
                            var l = {
                                action: "showGuide",
                                source: c.props.id,
                                destination: "EventRouter",
                                parameters: [{name: "guideId", type: "string", value: u.id}, {
                                    name: "reason",
                                    type: "string",
                                    value: "launcher"
                                }],
                                uiMetadata: {},
                                eventType: "click"
                            };
                            pendo$1.designer || c.actions.push(l);
                            var f = u.getTotalSteps(), p = u.getSeenSteps();
                            u.isComplete() && (p = f);
                            var g = parseInt(p / f * 100, 10),
                                h = BuildingBlockGuides.findDomBlockInDomJson(c, function (e) {
                                    return e.svgWidgetId
                                });
                            if (h.svgAttributes.fillCircle.percentComplete = g, s.hasOwnProperty("subtitle")) s.stepProgress = n(s.subtitle, {
                                currentStep: p,
                                totalSteps: f
                            }); else {
                                var m = "Step " + p + " of " + f;
                                s.stepProgress = m
                            }
                            return c = i(c, s), a.concat(BuildingBlockGuides.buildNodeFromJSON(c, t, r))
                        }, [])
                    }

                    function d(e, t, n) {
                        var r = t.getGuide().attributes.resourceCenter.children, a = 0, s = 0;
                        _.forEach(r, function (e) {
                            var t = o(n, e);
                            t && (t.isComplete() ? (a += t.getTotalSteps(), s += t.getTotalSteps()) : (a += t.getTotalSteps(), s += t.getSeenSteps()))
                        });
                        var d = parseInt(s / a * 100, 10);
                        isNaN(d) && (d = 0);
                        var u = {totalPercentComplete: d + "%"}, c = JSON.parse(JSON.stringify(e));
                        c = i(c, u);
                        var l = BuildingBlockGuides.findDomBlockInDomJson(c, function (e) {
                            return e.props && e.props.id && -1 !== e.props.id.indexOf("pendo-progress-bar-fill")
                        });
                        return l.props.style.width = u.totalPercentComplete, [BuildingBlockGuides.buildNodeFromJSON(c, t, n)]
                    }

                    function u(e, t, n) {
                        var i = t.getGuide().attributes.resourceCenter.children, r = _.reduce(i, function (e, t) {
                            var i = o(n, t);
                            return i && i.steps && i.steps.length ? e.concat(i) : e
                        }, []), a = _.every(r, function (e) {
                            var t = e.steps[0];
                            return AsyncContent.hasContent(t) ? !0 : !1
                        });
                        if (!a) return [];
                        var s = BuildingBlockResourceCenter.getResourceCenter(),
                            d = get(s, "attributes.notificationBubble");
                        return _.map(r, function (n, i) {
                            var r = "whatsnew" === get(n, "attributes.type"), o = JSON.parse(JSON.stringify(e)),
                                a = n.steps[0];
                            return a.eventRouter = new EventRouter, o.props.id = o.props.id + "-" + i, o.props["data-pendo-announcement-guide-id"] = n.id, r ? l(n, o, d) : c(n, o, d, t)
                        })
                    }

                    function c(e, t, n, i) {
                        var r, o = GuideFactory(e), a = e.steps[0];
                        _.isFunction(a.script) && a.script(a, o);
                        var s = a.domJson;
                        if (t.children = [s], n) {
                            r = f(n);
                            var d = function (e) {
                                    return "pendo-guide-container" === e.props.id
                                }, u = BuildingBlockGuides.findDomBlockInDomJson(t, d),
                                c = parseInt(t.props.style["padding-top"], 10),
                                l = parseInt(u.props.style["padding-top"], 10);
                            r.props.style.top = l + c + 5 + "px"
                        }
                        !BuildingBlockResourceCenter.hasAnnouncementBeenSeen(e) && r && (t.props["class"] += " pendo-unseen-announcement", t.children.unshift(r)), delete t.templateName;
                        var p = BuildingBlockGuides.buildNodeFromJSON(t, a);
                        return p
                    }

                    function l(e, t, n) {
                        var i, r = GuideFactory(e), o = r.steps[0];
                        o.render(), _.isFunction(o.script) && o.script(o, r);
                        var a = o.guideElement, s = a[0].id, d = "#" + s + " h1::after { display:none; }",
                            u = a[0].appendChild(document.createElement("style"));
                        u.innerHTML = d, n && (i = f(n), i.props.style.top = "20px"), !BuildingBlockResourceCenter.hasAnnouncementBeenSeen(e) && i && (t.props["class"] += " pendo-unseen-announcement", t.children = [i]);
                        var c = BuildingBlockGuides.buildNodeFromJSON(t, o);
                        return a.appendTo(c), c
                    }

                    function f(e) {
                        return {
                            type: "div",
                            children: [],
                            props: {
                                "class": "pendo-unread-announcement-mini-bubble",
                                style: {
                                    position: "absolute",
                                    "border-radius": "5px",
                                    height: "10px",
                                    width: "10px",
                                    "line-height": "0px",
                                    left: "0px",
                                    top: "30px",
                                    "box-sizing": "content-box",
                                    "background-color": e["background-color"],
                                    "z-index": "10"
                                }
                            }
                        }
                    }

                    function p(e, t, n) {
                        var r, o = t.getGuide ? t.getGuide() : _.find(n, function (e) {
                            return e.id === t.guideId
                        }), a = get(o, "attributes.dates." + o.language, !1);
                        if (a) r = {showsAfter: a}; else {
                            var s = get(o, "showsAfter") || get(o, "publishedAt");
                            s = s ? new Date(s) : new Date;
                            var d = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                u = d[s.getMonth()] + " " + s.getDate() + ", " + s.getFullYear();
                            r = {showsAfter: u}
                        }
                        var c = JSON.parse(JSON.stringify(e));
                        return c = i(c, r), [BuildingBlockGuides.buildNodeFromJSON(c, t, n)]
                    }

                    function g(e, t, n, i, r) {
                        var o = BuildingBlockGuides.findDomBlockInDomJson(e, function (e) {
                            return e && e.props && e.props.id && -1 !== e.props.id.indexOf("pendo-row")
                        });
                        if (o) {
                            var a = _.find(o.children, function (e) {
                                return e && e.props && e.props.id && -1 !== e.props.id.indexOf("pendo-text")
                            });
                            if (a && a.props && a.props.style) {
                                var s = parseInt(a.props.style.width, 10);
                                if (s && !isNaN(s)) {
                                    var d = o.children.indexOf(a), u = s - 40 + "px";
                                    "100%" !== a.props.style.width && (a.props.style.width = u), a.props.style["padding-right"] = "40px", a.props.style["box-sizing"] = "content-box";
                                    var c = {
                                        type: "div",
                                        children: [{
                                            type: "div",
                                            content: String(t.attributes.notifications.individualCounts[i]),
                                            props: {
                                                style: {
                                                    position: "relative",
                                                    top: "50%",
                                                    "font-weight": n["font-weight"],
                                                    "font-family": n["font-family"],
                                                    color: n.color
                                                }
                                            }
                                        }],
                                        props: {
                                            "class": "_pendo-home-view-bubble",
                                            style: {
                                                position: "absolute",
                                                "border-radius": "20px",
                                                height: "26px",
                                                "line-height": "0px",
                                                padding: "0px 10px",
                                                right: "20px",
                                                top: "50%",
                                                "margin-top": "-14px",
                                                "box-sizing": "content-box",
                                                "background-color": n["background-color"],
                                                display: r ? "block" : "none"
                                            }
                                        }
                                    };
                                    o.children.splice(d + 1, 0, c)
                                }
                            }
                        }
                    }

                    return {
                        buildNodesFromTemplate: t,
                        generateUnreadAnnouncementMiniBubble: f,
                        getGuidesInResourceCenterModule: e
                    }
                }(), BuildingBlockSvgs = function () {
                    function e(e, n) {
                        switch (e) {
                            case"onboardingProgressCircle":
                                return t(n)
                        }
                    }

                    function t(e) {
                        if (isOldIE(9)) return r(e);
                        var t = e.svgAttributes, o = t.fillCircle.percentComplete || 0, a = o >= 100;
                        return a ? n(t) : i(t)
                    }

                    function n(e) {
                        var t = e.fillCircle.stroke,
                            n = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="pendo-progress-circle-fill" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
                            i = dom(n);
                        return i[0].setAttributeNS(null, "stroke", t), i
                    }

                    function i(e) {
                        var t = e.fillCircle.stroke, n = e.backgroundCircle.stroke, i = e.fillCircle.percentComplete || 0,
                            r = 100 / (2 * Math.PI),
                            o = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" version="1.1" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid"><circle class="pendo-progress-circle-background" cx="20" cy="20" r="' + r + '" stroke-width="6px" stroke-linecap="round" fill="none"></circle><circle class="pendo-progress-circle-fill" cx="20" cy="20" r="' + r + '" stroke-width="6px" stroke-linecap="round" transform="rotate(-90 20 20)" fill="none"></circle></svg>',
                            a = dom(o), s = a.find(".pendo-progress-circle-fill")[0],
                            d = a.find(".pendo-progress-circle-background")[0];
                        return d.setAttributeNS(null, "stroke", n), 0 >= i ? s.setAttributeNS(null, "stroke-width", "0px") : (s.setAttributeNS(null, "stroke", t), s.setAttributeNS(null, "stroke-dasharray", i + ", 100")), a
                    }

                    function r(e) {
                        var t = e.svgAttributes, n = t.fillCircle.stroke, i = t.backgroundCircle.stroke,
                            r = t.fillCircle.percentComplete || 0, o = r >= 100,
                            a = '<div aria-hidden="true" focusable="false" class="pendo-progress-circle-ie"><div class="pendo-progress-circle-fill"></div></div>',
                            s = dom(a), d = s.find(".pendo-progress-circle-fill");
                        return o ? d.css({
                            border: "3px solid " + n,
                            height: "10px",
                            width: "10px"
                        }) : d.css({border: "3px solid " + i, height: "10px", width: "10px"}), s
                    }

                    return {buildSvgNode: e, createProgressCircleSvg: t}
                }(), DesignerV2 = function () {
                    function e(e) {
                        return e ? isTrustedOrigin2(e) : !1
                    }

                    function t(t) {
                        t || (t = {});
                        var n = t.host || C, i = e(n), r = i ? n : SERVER;
                        return i || log("Invalid host, falling back to " + SERVER), r
                    }

                    function n(e) {
                        return "in-app-designer" === e || "da-designer" === e || "adopt-studio" === e
                    }

                    function i(e) {
                        e || (e = {});
                        var t = e.gcsBucket || I, i = n(t), r = i ? t : I;
                        return i || log("Invalid bucket, falling back to " + I), r
                    }

                    function r(e) {
                        if ("latest" === e || "beta" === e || "via" === e || "mobile" === e) return !0;
                        var t = new RegExp("^[0-9]+.[0-9]+.[0-9]+(-[a-z0-9-]+[a-z0-9]+)?$");
                        return t.test(e)
                    }

                    function o(e) {
                        e || (e = {});
                        var t = e.target || T, n = r(t), i = n ? t : T;
                        return n || log("Invalid target, falling back to " + T), i
                    }

                    function a(e) {
                        if (!S()) {
                            var n = /pendo-designer=([A-Za-z0-9-]+)/;
                            if (n.test(e)) {
                                var i = n.exec(e);
                                if (i) {
                                    var r = s(i[1]), a = t(r), u = o(r);
                                    return window.localStorage.removeItem("pendo-navigation-state"), window.localStorage.removeItem("pendo-designer-mode"), d({
                                        target: u,
                                        host: a,
                                        preloader: !1
                                    }), !0
                                }
                            }
                        }
                    }

                    function s(e) {
                        try {
                            return JSON.parse(atob(decodeURIComponent(e))) || {}
                        } catch (t) {
                            return {}
                        }
                    }

                    function d(e) {
                        if (!S() && !pendo$1.designerLaunched) {
                            var n = !1;
                            try {
                                n = !!window.top.pendo
                            } catch (r) {
                            }
                            if (DesignerV2.crossFrameChannel === undefined && (DesignerV2.crossFrameChannel = crossFrameChannel, DesignerV2.useCrossFrameChannel = !0), detectMaster() && n && !e.allowChildFrame && !e.selectionOnly) return void log("skipping designer launch from a child frame. pass `allowChildFrame: true` to override");
                            if (!isReady()) return void logError("Unable to launch the designer, the agent has not been initialized. Please use `pendo.initialize` prior to launching the designer");
                            pendo$1.designerLaunchTime = (new Date).getTime(), e || (e = {});
                            var a = t(e), s = i(e), d = o(e), u = e.preloader ? "preloader.js" : "plugin.js",
                                c = e.preloader ? "preloader-shims" : "designer-shims", l = a + "/" + s + "/" + d + "/" + u;
                            DesignerV2.hostConfig = {
                                gcsBucket: s,
                                baseFolder: d,
                                uniqueWindowId: e.uniqueWindowId,
                                host: a,
                                adoptv2: e.adoptv2,
                                DADesigner: e.DADesigner
                            };
                            var f = {};
                            e.selectionOnly && (f["selection-only"] = !0);
                            var p = ConfigReader.get("designerAgentPluginsLoader");
                            _.isFunction(p) ? p(c, l, f) : v(c, l, f), pendo$1.designerLaunched = !0
                        }
                    }

                    function u() {
                        var e = "@keyframes pendoExtensionSlideIn{from{transform:translate3d(-300px,0,0)}to{transform:translate3d(0,0,0);}}",
                            t = "#pendo-draggable-handle{z-index:11;line-height: 15px;text-align:center;font-size:20px;letter-spacing:1.5px;position:absolute;width:100%;height:65px;font-size:16px;background-color:transparent;color:#ABE7DB;user-select:none;cursor: move;cursor: grab;cursor: -moz-grab;cursor: -webkit-grab;}#pendo-draggable-handle:active{cursor: grabbing;cursor: -moz-grabbing;cursor: -webkit-grabbing !important;}#pendo-draggable-handle.hidden{display:none;}#pendo-draggable-handle:hover{color:#2EA2A0;}",
                            n = "#pendo-mousemove-cover{position:absolute;height:100%;width:100%;top:0;left:0;z-index:9999999999;display:none;}",
                            i = "#pendo-designer-container{animation-duration:375ms;animation-name:pendoExtensionSlideIn;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1); box-shadow: 0px 2px 10px rgba(0,0,0,0.15);height:100vh;width:400px;position:fixed;top:0;left:0;overflow:hidden;border-radius:3px;z-index:1000000;}",
                            r = "#pendo-designer-container.fullscreen{width:100%;opacity:0.98;}",
                            o = "#pendo-designer-container.closed{left:-400px;}",
                            a = "#pendo-designer-iframe{background:#3a3c45;border:0px;height:100%;left:0;z-index:10;top:0;width:100%;}";
                        return e + t + i + n + r + o + a
                    }

                    function c(e) {
                        e || (e = {});
                        var t = "latest", n = "designer";
                        m("designer-styles", u(t));
                        var i = C + "/" + n + "/" + t + "/plugin.js";
                        if (v("designer-shims", i), pendo$1.DESIGNER_VERSION) return void f(t, n);
                        var r = window.setInterval(function () {
                            pendo$1.DESIGNER_VERSION && (f(t, n), clearInterval(r))
                        }, 100)
                    }

                    function l(e, t) {
                        e || (e = {}), _.isFunction(t) || (t = _.noop);
                        var n = o(e), r = i(e), a = (new Date).getTime();
                        DesignerV2.windowCommunicationId = a;
                        var s = "pendo-designer-communication-iframe";
                        if (!document.getElementById(s)) {
                            var d = "pendo-designer-communication-embedded", u = "communication.html";
                            d += "__" + a;
                            var c = C + "/" + r + "/" + n + "/" + u, l = g(s, c, "border-width:0;height:0;width:0;");
                            return l.setAttribute("name", d), l.onload = t, document.body.appendChild(l), l
                        }
                        return t(), document.getElementById(s)
                    }

                    function f(e, t) {
                        b(), p(e, t)
                    }

                    function p(e, t) {
                        if (!document.getElementById("pendo-designer-container")) {
                            var n = "pendo-designer-embedded", i = "designer.html";
                            n += "__" + DesignerV2.windowCommunicationId;
                            var r = C + "/" + t + "/" + e + "/" + i, o = g("pendo-designer-iframe", r);
                            o.setAttribute("name", n);
                            var a = h(o);
                            document.body.appendChild(a)
                        }
                    }

                    function g(e, t, n) {
                        var i = document.createElement("iframe");
                        return i.setAttribute("id", e), n && setStyle(i, n), i.setAttribute("sandbox", "allow-scripts allow-same-origin allow-top-navigation allow-forms allow-pointer-lock allow-popups"), i.src = t, i
                    }

                    function h(e) {
                        var t = document.createElement("div");
                        return t.setAttribute("id", "pendo-designer-container"), t.appendChild(e), t
                    }

                    function m(e, t) {
                        if (!document.getElementById(e)) {
                            var n = document.createElement("style");
                            n.setAttribute("id", e), n.type = "text/css";
                            var i = document.createTextNode(t);
                            n.appendChild(i), document.getElementsByTagName("head")[0].appendChild(n)
                        }
                    }

                    function v(e, t, n) {
                        if (!document.getElementById(e)) {
                            var i = document.createElement("script");
                            i.setAttribute("charset", "utf-8"), i.setAttribute("id", e), i.src = t, n && _.forEach(n, function (e, t) {
                                i.setAttribute(t, e)
                            }), document.body.appendChild(i)
                        }
                    }

                    function b() {
                        window.postMessage({
                            type: "connect",
                            source: "pendo-designer-content-script",
                            destination: "pendo-designer-agent"
                        }, location.origin)
                    }

                    function y(e) {
                        var t = document.getElementById("pendo-designer-communication-iframe");
                        t && t.contentWindow.postMessage(e.data, DesignerV2.hostConfig.host)
                    }

                    function S() {
                        return /pendo/.test(window.name)
                    }

                    function w() {
                        _.isFunction(window.addEventListener) && detectMaster() && window.addEventListener("message", E)
                    }

                    function E(e) {
                        if (e && e.data) {
                            var t = e.data.destination;
                            if (t && "pendo-designer-agent" === t) {
                                var n = e.data.type;
                                if (n && "addSelectionCode" === n) {
                                    var i = e.data.options;
                                    i && (i.selectionOnly = !0, d(i), window.removeEventListener("message", E))
                                }
                            }
                        }
                    }

                    var C = SERVER, I = "in-app-designer", T = "latest";
                    return "local" === DESIGNER_ENV && (C = "https://local.pendo.io:8080"), {
                        launchDesigner: c,
                        launchInAppDesigner: d,
                        launchOnToken: a,
                        sendMessageToLocalStorage: y,
                        isValidDesignerHost: e,
                        isValidTarget: r,
                        launchSelectionModeFromMessage: E,
                        listenForParentSelectionRequests: w,
                        addCommunicationIframe: l,
                        addStylesToPage: m,
                        hostConfig: {host: C}
                    }
                }(), FlexboxPolyfill = function () {
                    function e(e) {
                        var t = e.cloneNode(), n = i(e), r = FlexboxPolyfill.getPendoInlineUIElements(e.children);
                        if (1 === n.length && 0 === n[0].id.indexOf("pendo-text")) return e;
                        t.innerHTML = "";
                        for (var o = 0; o < n.length; o++) BuildingBlockGuides.isElementHiddenInGuide(n[o]) ? t.appendChild(n[o]) : t.appendChild(FlexboxPolyfill.wrapElementInMockFlexboxContainer(n[o], e));
                        for (var a = 0; a < r.length; a++) t.appendChild(r[a]);
                        return e.parentNode.replaceChild(t, e), t
                    }

                    function t(e, t, n) {
                        if (!(e.length < 1)) switch (n) {
                            case"space-between":
                                FlexboxPolyfill.spaceBetween(e, t);
                                break;
                            case"space-around":
                                FlexboxPolyfill.spaceAround(e, t);
                                break;
                            case"space-evenly":
                                FlexboxPolyfill.spaceEvenly(e, t);
                                break;
                            case"center":
                                FlexboxPolyfill.center(e, t);
                                break;
                            case"flex-start":
                                FlexboxPolyfill.flexStart(e);
                                break;
                            case"flex-end":
                                FlexboxPolyfill.flexEnd(e, t)
                        }
                    }

                    function n(e, t, n) {
                        switch (n) {
                            case"top":
                                FlexboxPolyfill.topAlignment(e);
                                break;
                            case"center":
                                FlexboxPolyfill.centerAlignment(e, t);
                                break;
                            case"bottom":
                                FlexboxPolyfill.bottomAlignment(e)
                        }
                    }

                    function i(e) {
                        return ShadowSizzle(["._pendo-button", ".pendo-block-wrapper", "._pendo-multi-choice-poll-select-border", "._pendo-text-subTitle", "._pendo-text-paragraph", "._pendo-text-title", "._pendo-text-custom", "._pendo-close-guide", "> ._pendo-simple-text", "div._pendo-resource-center-module-list-item-text-container", "._pendo-resource-center-right-caret", '[id^="pendo-onboarding-guide-progress-circle"]', "button#pendo-a11y-list-item-button-block", "._pendo-resource-center-onboarding-module-listed-guide-link", "._pendo-home-view-bubble"].join(","), e)
                    }

                    function r(e) {
                        var t = e.getAttribute("class");
                        return !!(t && t.indexOf("pendo-inline-ui") > -1)
                    }

                    function o(e) {
                        return _.filter(e, function (e) {
                            return !r(e)
                        })
                    }

                    function a(e) {
                        return _.filter(e, function (e) {
                            return r(e)
                        })
                    }

                    function s(e) {
                        return _.filter(e, function (e) {
                            var t = e.getAttribute("class") || "";
                            return t && t.indexOf("pendo-mock-flexbox-element") > -1
                        })
                    }

                    function d(e) {
                        var t = document.createElement("div");
                        return t.style.display = "inline-block", e || (t.style.position = "absolute"), t.style["vertical-align"] = "top", t.setAttribute("class", "pendo-mock-flexbox-element"), t
                    }

                    function u() {
                        var e = document.createElement("div");
                        return e.setAttribute("class", "pendo-mock-flexbox-row"), e.style.display = "block", e.style.position = "relative", e.style.width = "100%", e
                    }

                    function c(e, t) {
                        var n = e.getAttribute("class") || "", i = -1 !== n.indexOf("pendo-block-wrapper"),
                            r = e.style && "absolute" === e.style.position, o = get(e.style, "width", ""),
                            a = getComputedStyle_safe(e).width,
                            s = -1 !== n.indexOf("_pendo-open-text-poll-wrapper") || -1 !== n.indexOf("_pendo-image-wrapper") || -1 !== n.indexOf("pendo-video-wrapper") || -1 !== n.indexOf("_pendo-number-scale-poll-wrapper");
                        if (i && !s) {
                            var d = o ? a : null;
                            o = d ? d : getComputedStyle_safe(e.children[0]).width
                        }
                        if (n && n.indexOf("_pendo-resource-center-onboarding-module-guide-complete-circle-container") >= 0) {
                            var u = parseInt(getComputedStyle_safe(t).width, 10),
                                c = parseInt(getComputedStyle_safe(e).width, 10) + parseInt(e.style.marginRight || 0, 10) + parseInt(e.style.marginLeft || 0, 10),
                                l = dom(t).find("._pendo-simple-text").getParent()[0], f = u - c;
                            "border-box" !== get(l, "style.boxSizing") && (f = f - parseInt(l.style.paddingLeft || 0, 10) - parseInt(l.style.paddingRight || 0, 10)), l.style.width = f.toString() + "px"
                        }
                        if (!n || n.indexOf("pendo-mock-flexbox-element") < 0) {
                            var p = FlexboxPolyfill.createFlexContainer(r);
                            p.appendChild(e);
                            var g = get(e, "children"), h = g[0];
                            if (i && h) {
                                var m = h.getAttribute("class") || "", v = -1 !== m.indexOf("image-preview-placeholder");
                                v && (p.children[0].style.width = o)
                            }
                            return !i || s || e.style.width || (p.children[0].children[0].style.width = o), p
                        }
                        return e
                    }

                    function l(e, t) {
                        for (var n = [], i = 0; i < e.length; i++) {
                            if (t) {
                                var r = e[i].children[0].children[0].getAttribute("class") || "",
                                    o = -1 !== r.indexOf("pendo-block-wrapper");
                                if (o) {
                                    var a = e[i].children[0].offsetHeight + "px";
                                    e[i].style.height = a
                                }
                            }
                            n.push(e[i].offsetHeight)
                        }
                        return _.reduce(n, function (e, t) {
                            return Math.max(e, t)
                        }, 20)
                    }

                    function f(e, t) {
                        e = Array.prototype.slice.call(e);
                        for (var n = e.slice(0, t), i = 0, r = 0; r < n.length; r++) {
                            var o = n[r].offsetWidth;
                            i += o
                        }
                        return i
                    }

                    function p(e) {
                        for (var t = 0; t < e.length; t++) e[t].style.top = "0px"
                    }

                    function g(e, t) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n], r = i.offsetHeight, o = t / 2, a = Math.round(o - r / 2);
                            i.style.top = a + "px"
                        }
                    }

                    function h(e) {
                        for (var t = 0; t < e.length; t++) e[t].style.bottom = "0px"
                    }

                    function m(e, t) {
                        for (var n = t / Math.max(e.length - 1, 1), i = e[0], r = e[e.length - 1], o = 1; o < e.length - 1; o++) {
                            var a = f(e, o);
                            e[o].style.left = o * n + a + "px"
                        }
                        i.style.left = "0px", r.style.right = "0px"
                    }

                    function v(e, t) {
                        for (var n = t / (2 * e.length), i = e[0], r = e[e.length - 1], o = 1; o < e.length - 1; o++) {
                            var a = f(e, o);
                            e[o].style.left = 2 * n + a + "px"
                        }
                        i.style.left = n + "px", r.style.right = n + "px"
                    }

                    function b(e, t) {
                        for (var n = t / (e.length + 1), i = e[0], r = e[e.length - 1], o = 1; o < e.length - 1; o++) {
                            var a = f(e, o);
                            e[o].style.left = n + a + "px"
                        }
                        i.style.left = n + "px", r.style.right = n + "px"
                    }

                    function y(e, t) {
                        for (var n = t / 2, i = e[0], r = e[e.length - 1], o = 1; o < e.length - 1; o++) {
                            var a = f(e, o);
                            e[o].style.left = n + a + "px"
                        }
                        e.length > 1 && (r.style.right = n + "px"), i.style.left = n + "px"
                    }

                    function S(e) {
                        var t = e[0];
                        t.style.left = "0px";
                        for (var n = 1; n < e.length; n++) {
                            var i = f(e, n);
                            e[n].style.left = i + "px"
                        }
                    }

                    function w(e, t) {
                        for (var n = t, i = e[0], r = e[e.length - 1], o = 1; o < e.length - 1; o++) {
                            var a = f(e, o);
                            e[o].style.left = n + a + "px"
                        }
                        e.length > 1 && (i.style.left = n + "px"), r.style.right = "0px"
                    }

                    function E(e) {
                        var t = getComputedStyle_safe(e);
                        return parseInt(t.width, 10) - parseInt(t.paddingLeft, 10) - parseInt(t.paddingRight, 10)
                    }

                    function C(e, t, n) {
                        var i = s(e.children);
                        if (0 !== i.length) {
                            var r = FlexboxPolyfill.wrapFlexElementsInFlexRows(i, e);
                            FlexboxPolyfill.formatFlexRows(r, e, t, n)
                        }
                    }

                    function I(e, t) {
                        for (var n = E(t), i = FlexboxPolyfill.createFlexRow(), r = {
                            row: i,
                            rowWidthUsed: 0
                        }, o = [r], a = 0; a < e.length; a++) {
                            var s = e[a], d = parseInt(getComputedStyle_safe(s).width, 10);
                            r.rowWidthUsed += d, r.rowWidthUsed > n && 0 !== _.indexOf(e, s) && (r.rowWidthUsed -= d, i = FlexboxPolyfill.createFlexRow(), i.appendChild(s), r = {
                                row: i,
                                rowWidthUsed: d
                            }, o.push(r)), r.row.appendChild(s)
                        }
                        return o
                    }

                    function T(e, t, n, i) {
                        for (var r = E(t), o = 0; o < e.length; o++) {
                            var a = e[o];
                            t.appendChild(a.row);
                            var s = !1, d = FlexboxPolyfill.findMaxChildHeight(a.row.children, s);
                            a.row.style["min-height"] = d + "px";
                            var u = r - parseInt(a.rowWidthUsed, 10);
                            FlexboxPolyfill.setElementHorizontalAlignment(a.row.children, u, n), FlexboxPolyfill.setElementVerticalAlignment(a.row.children, d, i)
                        }
                    }

                    return {
                        calculateTotalOffsetWidth: f,
                        center: y,
                        createFlexContainer: d,
                        createFlexRow: u,
                        findMaxChildHeight: l,
                        flexEnd: w,
                        flexStart: S,
                        getPendoInlineUIElements: a,
                        getPendoVisualElements: o,
                        initializeFlexElements: e,
                        isPendoInlineUIElement: r,
                        setElementHorizontalAlignment: t,
                        setElementVerticalAlignment: n,
                        spaceAround: v,
                        spaceBetween: m,
                        spaceEvenly: b,
                        topAlignment: p,
                        centerAlignment: g,
                        bottomAlignment: h,
                        wrapElementInMockFlexboxContainer: c,
                        getVisualElementsWrappedInFlexElements: i,
                        initializeFlexRows: C,
                        wrapFlexElementsInFlexRows: I,
                        formatFlexRows: T
                    }
                }(), BuildingBlockGuides = function () {
                    function e(t) {
                        return t.props && t.props.id && 0 === t.props.id.indexOf("pendo-g-") ? t : t.children ? _.find(t.children, function (t) {
                            return e(t)
                        }) : void 0
                    }

                    function t(e, t) {
                        for (var n = e.parentNode.children, i = 0, r = 0; r < n.length; r++) n[r] !== e && (i += n[r].offsetHeight);
                        var o = t.offsetHeight, a = Math.max(o - i, 0);
                        e.style.height = a + "px"
                    }

                    function n(e, n, i, r) {
                        r = r || {};
                        var o = n.getGuide(), a = BuildingBlockGuides.findGuideContainerJSON(e),
                            s = get(o, "attributes.resourceCenter"), d = s && BuildingBlockResourceCenter.isFullyCustom(o),
                            u = "AnnouncementsModule" === get(o, "attributes.resourceCenter.moduleId");
                        n.hasEscapeListener = !1, n.containerId = a && a.props && a.props.id, n.element = getElementForGuideStep(n);
                        var c = BuildingBlockGuides.buildNodeFromJSON(e, n, i);
                        n.guideElement = c;
                        var l = c.find("#" + n.containerId), p = "data-vertical-alignment",
                            g = "Relative to Element" === l.attr(p);
                        g && !s && dom(n.guideElement).css({
                            overflow: "hidden",
                            height: "0",
                            width: "0"
                        }), l.css({visibility: "hidden"});
                        var h = BuildingBlockWatermark.buildWatermark({
                            appId: o.appId,
                            targetAccount: o.targetAccount,
                            isTraining: o.isTraining,
                            isBottomAligned: "Bottom Aligned" === l.attr(p)
                        }, BuildingBlockGuides.buildNodeFromJSON);
                        h && l.append(h);
                        var m = n && n.attributes && n.attributes.imgCount;
                        c.appendTo(getGuideAttachPoint());
                        var v = l.find('[data-pendo-grow-height="true"]')[0];
                        if (v && t(v, c[0]), d || u || (BuildingBlockGuides.recalculateGuideWidth(n.containerId), BuildingBlockGuides.adjustGuideContentWidth(n.containerId)), m || s || BuildingBlockGuides.flexAllThings(n.containerId), d || BuildingBlockGuides.recalculateGuideHeight(n.containerId), g ? n.attributes.calculatedType = "tooltip" : BuildingBlockTooltips.attachBBAdvanceActions(n), g && !m && f(n, e, l[0]), s) {
                            BuildingBlockResourceCenter.showHomeViewOrEmptyState(o);
                            var b = [];
                            u ? b = [o.attributes.resourceCenter] : BuildingBlockGuides.flexAllThings(n.containerId), b.length && _.forEach(b, function (e) {
                                var t = get(e, "children", []);
                                _.forEach(t, function (e) {
                                    if (e) {
                                        var t = e.steps[0];
                                        if (_.isUndefined(t.attributes.imgCount)) {
                                            var i = get(t, "id", n.id), r = get(e, "id", o.id),
                                                a = ShadowSizzle("#pendo-g-" + i).length ? i : r;
                                            BuildingBlockGuides.flexAllThings("pendo-g-" + a)
                                        }
                                    }
                                })
                            })
                        }
                        return m || l.css({visibility: "visible"}), n.elements.push(n.guideElement[0]), BuildingBlockGuides.autofocusStep(n, l), BuildingBlockGuides.trapFocusStep(n, l), c
                    }

                    function i(e, t) {
                        if (!pendo$1.designer && get(e, "attributes.isAutoFocus")) {
                            var n = "autofocus for guide id: " + e.getGuide().id + " step id: " + e.id + " ",
                                i = function () {
                                    var e = dom(t).find("#pendo-guide-container");
                                    return e = e[0] || e, e && isElementVisible(e) && isElemInViewport(e) && isElemIsFocusable(e) ? e : null
                                }, r = function (e) {
                                    return e && e.focus(), e === document.activeElement
                                }, o = {maxRetries: 100, delay: 50, exponentialBackoff: !1};
                            poll(i, o, function (e) {
                                poll(function () {
                                    return r(e)
                                }, o, function () {
                                }, function () {
                                    writeErrorPOST(n + "#pendo-guide-container is available on page but could not capture focus")
                                })
                            }, function () {
                                writeErrorPOST(n + "#pendo-guide-container did not render or become visible in time to focus")
                            })
                        }
                    }

                    function r(e, t) {
                        if (!pendo$1.designer && get(e, "attributes.isAutoFocus")) {
                            var n = t.find("#pendo-guide-container");
                            o(n)
                        }
                    }

                    function o(e) {
                        var t = e[0];
                        if (t) {
                            var n = ["a[href]:not([disabled])", "button:not([disabled])", "textarea:not([disabled])", 'input[type="text"]:not([disabled])', 'input[type="radio"]:not([disabled])', 'input[type="checkbox"]:not([disabled])', "select:not([disabled])", "[tabindex]", "iframe"].join(", "),
                                i = e.find(n);
                            if (i.length) {
                                var r = i[0], o = i[i.length - 1], s = a(e), d = s[0], u = s[1], c = function (e) {
                                    var n = 9, i = "Tab" === e.key || e.keyCode === n, a = e.shiftKey;
                                    i && (a ? document.activeElement === d && (o.focus(), e.preventDefault()) : (document.activeElement === t && (r.focus(), e.preventDefault()), document.activeElement === u && (r.focus(), e.preventDefault())))
                                };
                                attachEvent(t, "keyup", c), attachEvent(t, "keydown", c)
                            }
                        }
                    }

                    function a(e) {
                        var t = {
                            margin: 0,
                            padding: 0,
                            outline: "none",
                            border: "none",
                            "box-shadow": "none",
                            shadow: "none"
                        }, n = {
                            type: "style",
                            props: {type: "text/css", scoped: "scoped", id: "pendo-focus-bumper-styles" + Date.now()},
                            css: [{
                                selector: ".pendo-start-focus-bumper",
                                styles: _.extend({}, t, {tabIndex: 0})
                            }, {
                                selector: ".pendo-start-focus-bumper:hover",
                                styles: t
                            }, {
                                selector: ".pendo-start-focus-bumper:focus",
                                styles: t
                            }, {
                                selector: ".pendo-end-focus-bumper",
                                styles: _.extend({}, t, {tabIndex: 0})
                            }, {
                                selector: ".pendo-end-focus-bumper:hover",
                                styles: t
                            }, {selector: ".pendo-end-focus-bumper:focus", styles: t}]
                        }, i = BuildingBlockGuides.buildNodeFromJSON(n);
                        e.prepend(i);
                        var r = document.createElement("div");
                        r.setAttribute("id", "pendo-start-focus-bumper-" + Date.now()), r.setAttribute("class", "pendo-start-focus-bumper"), r.setAttribute("tabIndex", 0), e.prepend(r);
                        var o = document.createElement("div");
                        return o.setAttribute("id", "pendo-end-focus-bumper-" + Date.now()), o.setAttribute("class", "pendo-end-focus-bumper"), o.setAttribute("tabIndex", 0), e.append(o), [r, o]
                    }

                    function s(e) {
                        BuildingBlockResourceCenter.replaceResourceCenterContent(e.id, undefined, !0)
                    }

                    function d(e, t, n) {
                        if (e && e.templateName) return BuildingBlockTemplates.buildNodesFromTemplate(e.templateName, e, t, n);
                        var i = !pendo$1.designer && "style" === e.type && ConfigReader.get("disableGuidePseudoStyles");
                        return i ? [] : [l(e, t, n)]
                    }

                    function u(e, t, n, i) {
                        var r = 'illegal building block key "' + e + '" found on guide "' + t + '" step "' + n + '"';
                        throw i && (r += ' for node type "' + i + '"'), log(r), new Error(r)
                    }

                    function c(e, t, n, i) {
                        var r = {
                            allow: !0,
                            allowfullscreen: !0,
                            alt: !0,
                            "alt-text": !0,
                            autofocus: !0,
                            "class": !0,
                            cols: !0,
                            contenteditable: !0,
                            dir: !0,
                            "for": !0,
                            frameborder: !0,
                            href: !0,
                            id: !0,
                            name: !0,
                            placeholder: !0,
                            placement: !0,
                            rows: !0,
                            role: !0,
                            sandbox: !0,
                            scoped: !0,
                            src: !0,
                            start: !0,
                            style: !0,
                            tabindex: !0,
                            target: !0,
                            title: !0,
                            type: !0,
                            value: !0
                        }, o = {embed: {src: !0}}, a = /^data-/, s = /^aria-/, d = _.keys(e);
                        return _.reduce(d, function (d, c) {
                            var l = o[i] && o[i][c];
                            return l && u(c, n, t, i), r[c] || a.test(c) || s.test(c) || u(c, n, t), d[c] = e[c], d
                        }, {})
                    }

                    function l(e, t, n) {
                        t = t || {id: "unknown", guideId: "unknown"}, e.props = c(e.props, t.id, t.guideId, e.type);
                        var i = dom("<" + e.type + "></" + e.type + ">"), r = e.props && e.props.id;
                        if ("pendo-backdrop" === r) {
                            if (t.attributes && t.attributes.blockOutUI && t.attributes.blockOutUI.enabled) {
                                var o = _.throttle(_.partial(q, t), 10);
                                t.attachEvent(window, "scroll", o, !0)
                            }
                            return H(t)
                        }
                        if (_.each(e.props, function (n, r) {
                            "style" === r ? i.css(e.props.style) : "data-pendo-code-block" !== r || n !== !0 || ConfigReader.get("preventCodeInjection") ? i.attr(r, n) : i.addClass("pendo-code-block").html(t.getContent())
                        }), e.content && i.text(e.content), "style" === e.type && (pendo$1.designer || (e.css = m(e.css)), i.styleSheet ? i.styleSheet.cssText = BuildingBlockGuides.buildStyleTagContent(e.css) : i.text(BuildingBlockGuides.buildStyleTagContent(e.css))), e.svgWidgetId) {
                            var a = BuildingBlockSvgs.buildSvgNode(e.svgWidgetId, e);
                            a.appendTo(i)
                        }
                        var s = e.props.id && -1 !== e.props.id.indexOf("badge"), d = !!e.props.src,
                            u = e.props["class"] && e.props["class"].indexOf("bb-control") >= 0;
                        if (("img" === e.type && d && !s && !u || "iframe" === e.type && t) && (t.attributes && !t.attributes.imgCount ? t.attributes.imgCount = 1 : t.attributes && t.attributes.imgCount && t.attributes.imgCount++, BuildingBlockGuides.recalculateGuideHeightOnImgLoad(i, t)), e.actions && e.actions.length) for (var l = 0; l < e.actions.length; l++) if (BuildingBlockGuides.bindActionToNode(i, e.actions[l], t), "renderGuidesListItem" === e.actions[l].action) {
                            var f = findGuideById(e.actions[l].parameters[0]);
                            f ? i.text(f.name) : i.attr("style", "display: none;")
                        }
                        var p = _.find(e.actions, function (e) {
                            return "dismissGuide" === e.action
                        });
                        if (p && !t.hasEscapeListener && (t.hasEscapeListener = !0, t.attachEvent(window, "keyup", function (e) {
                            27 === e.keyCode && t.eventRouter.eventable.trigger("pendoEvent", {
                                step: t,
                                action: "dismissGuide"
                            })
                        }, !0)), e.children) for (var g = 0; g < e.children.length; g++) {
                            var h = BuildingBlockGuides.buildNodesFromJSON(e.children[g], t, n);
                            _.each(h, function (e) {
                                e && e.appendTo(i)
                            })
                        }
                        return i
                    }

                    function f(e, t, n) {
                        BuildingBlockTooltips.createBBTooltip(t, e.element, e, n), e.hasBeenScrolledTo || (scrollIntoView(e.element), scrollToTooltip(e.element, n, e.attributes.layoutDir), e.hasBeenScrolledTo = !0)
                    }

                    function p(t, n) {
                        t.on("load", function () {
                            var t = {};
                            !n.containerId && n.domJson && (t = e(n.domJson));
                            var i = n.containerId || t.props && t.props.id || "", r = i ? document.getElementById(i) : i;
                            if (n && n.attributes && n.attributes.imgCount && (n.attributes.imgCount--, r && n.attributes.imgCount <= 0)) {
                                BuildingBlockGuides.recalculateGuideWidth(i), BuildingBlockGuides.adjustGuideContentWidth(i), BuildingBlockGuides.flexAllThings(i);
                                var o = n.getGuide();
                                get(o, "attributes.isAnnouncement") || "AnnouncementsModule" === get(o, "attributes.resourceCenter.moduleId") || BuildingBlockGuides.recalculateGuideHeight(i), r.style.visibility = "visible", "tooltip" === n.attributes.calculatedType && BuildingBlockGuides.positionStepForTooltip(n, n.domJson, r)
                            }
                        }), t.on("error", function () {
                            var e = document.getElementById(n.containerId);
                            return e ? void (e.style.visibility = "visible") : void log("Failed to find guideContainer for id: " + n.containerId)
                        })
                    }

                    function g(e, t, n) {
                        e.on(t.eventType, function (i) {
                            if (t.designerAction) DesignerV2.designerActions[t.action](e, t.parameters); else {
                                var r = {
                                    action: t.action,
                                    params: t.parameters,
                                    step: n,
                                    ignore: !!t.ignore,
                                    srcElement: i.srcElement
                                };
                                "showElements" === t.action || "hideElements" === t.action ? i.srcElement && i.srcElement.getAttribute("id") === t.source ? n.eventRouter.eventable.trigger("pendoEvent", r) : i.target && i.target.getAttribute("id") === t.source && n.eventRouter.eventable.trigger("pendoEvent", r) : n.eventRouter.eventable.trigger("pendoEvent", r)
                            }
                        })
                    }

                    function h(e) {
                        var t = "";
                        return _.each(e, function (e, n) {
                            t = t + n + ":" + e + ";"
                        }), t
                    }

                    function m(e) {
                        for (var t = ["button:focus"], n = [], i = 0; i < e.length; i++) _.contains(t, e[i].selector) || n.push(e[i]);
                        return n
                    }

                    function v(e) {
                        for (var t = "", n = 0; n < e.length; n++) t += e[n].selector + "{", _.each(e[n].styles, function (e, n) {
                            t += n + ":" + e, t += "!important;"
                        }), t += "}";
                        return t
                    }

                    function b(e) {
                        for (var t = ["pendo-base", "pendo-resource-center-container"], n = 0; 20 > n; n++) {
                            var i = _.find(t, function (t) {
                                return e.id === t
                            });
                            if (i) return e;
                            if (e === document.body) return document.body;
                            e.parentNode && (e = e.parentNode)
                        }
                        return document.body
                    }

                    function y(e) {
                        var t = ShadowSizzle("[data-pendo-display-flex]", e);
                        _.each(t, function (e) {
                            var t = FlexboxPolyfill.initializeFlexElements(e),
                                n = e.getAttribute("data-pendo-justify-content"),
                                i = e.getAttribute("data-row-vertical-alignment");
                            FlexboxPolyfill.initializeFlexRows(t, n, i)
                        })
                    }

                    function S() {
                    }

                    function w(e) {
                        var t = document.getElementById(e);
                        t && (E(t), BuildingBlockGuides.flexElement(t))
                    }

                    function E(e) {
                        var t = "data-aspect-ratio", n = ShadowSizzle("[" + t + "]", e);
                        _.each(n, function (e) {
                            var n, i = e.getAttribute(t).split(":");
                            n = i.length > 1 ? parseInt(i[0], 10) / parseInt(i[1], 10) : parseFloat(i[0]), isNaN(n) || (e.style.height = e.offsetWidth / n + "px")
                        })
                    }

                    function C(e) {
                        I(e);
                        var t = getClientRect(e);
                        if (0 === t.width || 0 === t.height) return !0;
                        if (e.style && "visible" === e.style.visibility) return !1;
                        for (var n = e, i = e.id || "", r = 0; 0 !== i.indexOf("pendo-g-") && (I(n), n = n.parentNode, i = n.id || "", r++, !(r > 10));) ;
                        return !1
                    }

                    function I(e) {
                        return e.style && "none" === e.style.display ? !0 : e.style && "0" === e.style.opacity ? !0 : e.style && "hidden" === e.style.visibility ? !0 : !1
                    }

                    function T(e) {
                        var t = document.getElementById(e);
                        if (t) {
                            var n = dom(t), i = n.find("#pendo-guide-container")[0], r = dom(i), o = t.style.height,
                                a = parseInt(o, 10), s = t.getAttribute("data-pendo-static-height");
                            n.css({height: "auto"}), s || r.css({"max-height": "none"});
                            var d = parseInt(getComputedStyle_safe(t).height, 10), u = getScreenDimensions().height,
                                c = parseInt(t.style.top, 10);
                            c = isNaN(c) ? 0 : c;
                            var l = parseInt(t.style.bottom, 10);
                            l = isNaN(l) ? 0 : l;
                            var f = u - c - l;
                            if (d > f && (r.css({"max-height": f + "px", overflow: "auto"}), d = f), d !== a) {
                                var p = d;
                                s && a && (p = a), n.css({height: p + "px"});
                                var g = t.getAttribute("data-vertical-alignment");
                                if ("Centered" === g || "Left Aligned" === g || "Right Aligned" === g) {
                                    var h = d > f ? f : p;
                                    n.css({"margin-top": "-" + h / 2 + "px"})
                                }
                            } else n.css({height: o})
                        }
                    }

                    function A(e) {
                        var t = document.getElementById(e);
                        if (t) {
                            var n = t.getAttribute("data-pendo-mobile-layout");
                            if (!n) {
                                var i = dom(t), r = i.find("#pendo-guide-container")[0], o = dom(r),
                                    a = parseInt(t.style.width, 10);
                                o.css({"max-width": "none"}), i.css({
                                    "margin-right": "0px"
                                });
                                var s = parseInt(getComputedStyle_safe(t).width, 10), d = getScreenDimensions().width,
                                    u = parseInt(t.style.left || 0, 10), c = parseInt(t.style.right || 0, 10),
                                    l = d - u - c;
                                if (s > l && (o.css({"max-width": l + "px"}), s = l), !isNaN(a)) {
                                    var f = t.getAttribute("data-vertical-alignment");
                                    switch (f) {
                                        case"Centered":
                                        case"Top Aligned":
                                        case"Bottom Aligned":
                                            var p = parseInt(i.css("margin-left"), 10), g = s / 2;
                                            p !== g && i.css({"margin-left": "-" + g + "px"});
                                            break;
                                        case"Right Aligned":
                                        case"Top Right Aligned":
                                        case"Bottom Right Aligned":
                                            var h = parseInt(i.css("margin-right"), 10), m = a - s;
                                            h !== m && i.css({"margin-right": "-" + m + "px"})
                                    }
                                }
                            }
                        }
                    }

                    function x(e) {
                        var t = document.getElementById(e);
                        if (t) {
                            var n = t.getAttribute("data-pendo-mobile-layout");
                            if (!n) {
                                var i = dom(t), r = i.find("#pendo-guide-container")[0];
                                R(r), G(r), L(r)
                            }
                        }
                    }

                    function R(e) {
                        var t = ShadowSizzle(['[class*="_pendo-text-"]:not([class*="_pendo-resource-center-"])', '.pendo-mock-flexbox-element > [class*="_pendo-button-"]', "._pendo-multi-choice-poll-select"].join(","), e);
                        t && t.length && _.each(t, function (e) {
                            var t = dom(e), n = k(t[0]), i = n.marginLeft + n.marginRight, r = B(t);
                            if (r) {
                                var o = r.paddingLeft + r.paddingRight, a = r.width - i - o;
                                O(t, a)
                            }
                        })
                    }

                    function G(e) {
                        var t = ShadowSizzle("._pendo-open-text-poll-input", e);
                        t && t.length && _.each(t, function (e) {
                            var t = dom(e), n = t.attr("data-_pendo-open-text-poll-resize-base-width");
                            n || (n = e.style.width, t.attr("data-_pendo-open-text-poll-resize-base-width", n));
                            var i = k(t[0]), r = i.marginLeft + i.marginRight, o = B(t);
                            if (o) {
                                var a = o.paddingLeft + o.paddingRight, s = o.width - r - a;
                                -1 !== n.indexOf("%") && N(t, i.width, n, s), -1 === n.indexOf("%") && (n = parseInt(n, 10), s > n && t.css({width: n})), O(t, s)
                            }
                        })
                    }

                    function L(e) {
                        var t = ShadowSizzle(["._pendo-video", "._pendo-image"].join(","), e);
                        t && t.length && _.each(t, function (e) {
                            var t = dom(e), n = k(t[0]), i = n.width, r = n.marginLeft + n.marginRight,
                                o = t.attr("data-_pendo-media-resize-base-width");
                            o || (o = e.style.width, t.attr("data-_pendo-media-resize-base-width", o));
                            var a = -1 !== o.indexOf("%");
                            if (t.hasClass("_pendo-image")) {
                                var s = a && parseInt(o, 10) > 100, d = t.attr("data-pendo-accessible-element");
                                if (s || !d) return void t.css({width: i});
                                t.css({height: "auto"})
                            }
                            var u = B(t);
                            if (u) {
                                var c = u.width, l = u.paddingLeft + u.paddingRight, f = c - l - r;
                                a && N(t, i, o, f), O(t, f)
                            }
                        })
                    }

                    function O(e, t) {
                        e.css({"max-width": "none"});
                        var n = k(e[0]), i = n.width;
                        i >= t && e.css({"max-width": t})
                    }

                    function N(e, t, n, i) {
                        var r = -1 !== e[0].style.width.indexOf("%"), o = parseInt(n, 10) / 100, a = i * o;
                        (r || a > t) && (a = 0 > a ? 0 : a, e.css({width: a}))
                    }

                    function B(e) {
                        var t = e.closest("._pendo-row");
                        if (t) {
                            var n = getComputedStyle_safe(t[0]);
                            if (n) return {
                                width: parseFloat(n.width),
                                paddingLeft: parseInt(n.paddingLeft, 10),
                                paddingRight: parseInt(n.paddingRight, 10)
                            }
                        }
                    }

                    function k(e) {
                        var t = getComputedStyle_safe(e);
                        return {
                            width: parseFloat(t.width),
                            marginLeft: parseInt(t.marginLeft || 0, 10),
                            marginRight: parseInt(t.marginRight || 0, 10)
                        }
                    }

                    function P(e) {
                        var t = get(e, "value", ""), n = get(e, "parentElement.className", ""),
                            i = -1 !== n.indexOf("_pendo-nps-poll-" + t + "-wrapper");
                        if (i) {
                            var r = pendo$1.Sizzle("._pendo-nps-open-text-poll-question"),
                                o = ShadowSizzle("._pendo-nps-open-text-poll-input")[0];
                            _.forEach(r, function (e) {
                                var t = get(e, "style.display", "none");
                                "none" !== t && o && o.setAttribute("aria-labelledby", e.id)
                            })
                        }
                    }

                    function D(e, t) {
                        if (t(e)) return e;
                        if (!e.children) return !1;
                        for (var n = 0; n < e.children.length; n++) {
                            var i = D(e.children[n], t);
                            if (i) return i
                        }
                        return !1
                    }

                    function F(e) {
                        var t = [], n = get(e, "attributes.blockOutUI", {});
                        if (n.additionalElements = n.additionalElements || "", n.enabled && e.element !== getBody()) {
                            t.push(e.element);
                            for (var i = n.additionalElements.replace(/\s/g, "").split(","), r = 0; r < n.additionalElements.length; r++) try {
                                var o = ShadowSizzle(i[r]);
                                o && _.each(o, function (e) {
                                    t.push(e)
                                })
                            } catch (a) {
                                log("Additional element for blockOutUI is invalid selector", "error")
                            }
                        }
                        return t
                    }

                    function M(e) {
                        return {top: 0, left: 0, right: e.width, bottom: e.height, width: 0, height: 0}
                    }

                    function U(e, t) {
                        return t.fixed && (e.top = 0, e.bottom = e.height, e.left = 0, e.right = e.width), e
                    }

                    function H(e) {
                        try {
                            if (j()) return;
                            var t = getClientRect(getBody()), n = z(e) || M(t);
                            t = U(t, n);
                            var i = get(e, "attributes.blockOutUI.padding", {left: 0, right: 0, top: 0, bottom: 0}),
                                r = V(t, n, i), o = {"z-index": 1e4, position: "fixed"}, a = [];
                            _.each(r, function (e, t) {
                                var n = W(t, _.extend({}, e, o));
                                a.push(n)
                            });
                            var s = $(a, e);
                            return e.backdrop = s[0], s
                        } catch (d) {
                            log("Failed to add BlockOut ui", "error")
                        }
                    }

                    function z(e) {
                        var t = F(e);
                        if (t && t.length) {
                            var n = _.reduce(t, function (e, t) {
                                if (!isElementVisible(t)) return e;
                                var n = getClientRect(t);
                                if (n) return e.fixed = e.fixed && n.fixed, _.each([["top", isLessThan], ["right", isGreaterThan], ["bottom", isGreaterThan], ["left", isLessThan]], function (t) {
                                    var i = t[0], r = t[1];
                                    (!e[i] || r(n[i], e[i])) && (e[i] = n[i])
                                }), e
                            }, {fixed: !0});
                            n.height = n.bottom - n.top, n.width = n.right - n.left;
                            var i = bodyOffset();
                            return n.fixed || (n.left += i.left, n.right += i.left, n.top += i.top, n.bottom += i.top), n.fixed = !!n.fixed, n
                        }
                    }

                    function W(e, t) {
                        var n = dom("div.pendo-backdrop-region-" + e);
                        return n.length || (n = dom('<div class="pendo-backdrop-region-' + e + '"></div>')), dom(n).css(t).attr("pendo-region", e), n
                    }

                    function j() {
                        var e = dom("._pendo-guide-backdrop_");
                        return e.length > 0
                    }

                    function V(e, t, n) {
                        var i = {}, r = t.top - e.top, o = t.left - e.left;
                        i.top = r - n.top, i.left = o - n.left, i.height = t.height + n.top + n.bottom, i.width = t.width + n.left + n.right;
                        var a = {left: 0, top: 0};
                        return positionFixedActsLikePositionAbsolute() && (a = bodyOffset(), i.left += documentScrollLeft(), i.top += documentScrollTop()), i.bottom = i.top + i.height, i.right = i.left + i.width, {
                            top: {
                                top: 0,
                                height: Math.max(i.top - a.top, 0),
                                left: i.left,
                                width: i.width
                            },
                            right: {top: -a.top, bottom: 0, left: i.right - a.left, right: 0},
                            bottom: {top: i.bottom - a.top, bottom: 0, left: i.left - a.left, width: i.width},
                            left: {top: -a.top, bottom: 0, left: -a.left, width: i.left}
                        }
                    }

                    function $(e, t) {
                        var n = J("pendo-backdrop", t.domJson);
                        delete n.props.style.left, delete n.props.style.right, delete n.props.style.width, delete n.props.style.height, delete n.props.style.bottom, delete n.props.style.top;
                        var i = dom('<div class="_pendo-guide-backdrop_">');
                        return _.each(n.props, function (t, r) {
                            _.each(e, function (e) {
                                "style" === r ? e.css(n.props.style) : "class" === r ? e.addClass(t) : e.attr(r, t), i.append(e)
                            })
                        }), i
                    }

                    function J(e, t) {
                        if (t.props && t.props.id === e) return t;
                        if (t.children) for (var n = 0; n < t.children.length; n++) {
                            var i = J(e, t.children[n]);
                            if (i) return i
                        }
                    }

                    function q(e) {
                        try {
                            var t = getClientRect(getBody()), n = z(e) || M(t);
                            t = U(t, n);
                            var i = get(e, "attributes.blockOutUI.padding", {left: 0, right: 0, top: 0, bottom: 0}),
                                r = V(t, n, i);
                            (hasBodyDimensionsChanged(t) || hasBlockBoxChanged(n) || haveScreenCoordsChanged(r)) && _.each(e.backdrop.children, function (e) {
                                var t = e.getAttribute("pendo-region"), n = r[t];
                                _.each(n, function (t, n) {
                                    e.style[n] = t + "px"
                                })
                            })
                        } catch (o) {
                            log("Failed to update BlockOut ui", "error")
                        }
                    }

                    function K(t) {
                        if (!t.domJson || !_.isObject(t.domJson)) return !1;
                        var n = e(t.domJson);
                        return n ? "Relative to Element" === n.props["data-vertical-alignment"] : !1
                    }

                    return {
                        renderGuideFromJSON: n,
                        autofocusStep: i,
                        trapFocusStep: r,
                        renderResourceCenterModule: s,
                        buildNodeFromJSON: l,
                        recalculateGuideHeightOnImgLoad: p,
                        buildStyleString: h,
                        buildStyleTagContent: v,
                        bindActionToNode: g,
                        recalculateGuideHeight: T,
                        recalculateGuideWidth: A,
                        adjustGuideContentWidth: x,
                        findDomBlockInDomJson: D,
                        isElementHiddenInGuide: C,
                        positionStepForTooltip: f,
                        flexAllThings: w,
                        flexElement: y,
                        findTopLevelContainer: b,
                        updateBackdrop: q,
                        buildNodesFromJSON: d,
                        findGuideContainerJSON: e,
                        maintainAspectRatios: E,
                        sizeElement: t,
                        getAllowedAttributes: c,
                        repositionFlexElementsInFullWidthGuides: S,
                        isBuildingBlockGuideRelativeToElement: K,
                        updateAriaLabelledbyForActiveFollowupQuestion: P
                    }
                }(), P2AutoLaunch = function () {
                    function e() {
                        _.isFunction(document.addEventListener) && document.addEventListener("keyup", function (e) {
                            e.shiftKey && e.altKey && "Digit7" === e.code && l(!0), e.shiftKey && e.altKey && "Digit8" === e.code && l(!1, !0)
                        }, !1)
                    }

                    function t(e, t) {
                        var o = {
                            "background-color": b.WHITE,
                            height: u(y.MODAL_HEIGHT),
                            "min-height": u(y.MODAL_HEIGHT),
                            width: u(y.MODAL_WIDTH),
                            position: "fixed",
                            top: u(y.MODAL_TOP_OFFSET),
                            left: "50%",
                            "margin-left": u(-y.MODAL_WIDTH / 2),
                            "border-radius": u(4),
                            "box-shadow": "0px 13px 28px rgba(0, 0, 0, 0.17)",
                            overflow: "hidden",
                            "z-index": "300000",
                            "box-sizing": "border-box"
                        }, a = d("div", v.container, o);
                        a.appendChild(s()), a.appendChild(n(t)), a.appendChild(i()), a.appendChild(r(e)), document.body.appendChild(a)
                    }

                    function n(e) {
                        var t = d("div", v.header, {
                            "background-color": b.GRAY_PRIMARY,
                            height: u(y.HEADER_HEIGHT),
                            "min-height": u(y.HEADER_HEIGHT),
                            width: "100%",
                            padding: u(10) + " " + u(20),
                            display: "flex",
                            "align-items": "center",
                            "box-sizing": "border-box"
                        }), n = d("div", v.logoContainer, {
                            height: u(38),
                            width: u(44),
                            "background-color": b.PENDO_PINK,
                            padding: u(8),
                            "border-radius": u(3),
                            "box-sizing": "border-box"
                        });
                        n.innerHTML = S, t.appendChild(n);
                        var i = d("div", v.title, {
                            width: "100%",
                            display: "flex",
                            "align-items": "center",
                            "font-family": E.PRIMARY_FONT,
                            "font-size": u(18),
                            color: b.WHITE,
                            "margin-left": u(10),
                            "box-sizing": "border-box"
                        });
                        return i.innerText = e ? "VIA Designer" : "Pendo Designer", t.appendChild(i), t
                    }

                    function i() {
                        var e = d("div", v.body, {
                            height: y.BODY_HEIGHT,
                            "min-height": y.BODY_HEIGHT,
                            width: "100%",
                            display: "flex",
                            padding: u(32) + " " + u(20),
                            "font-family": E.PRIMARY_FONT,
                            "font-size": u(14),
                            "box-sizing": "border-box"
                        });
                        return e.innerText = "Thanks for letting us know you're here. We're ready to try this again. Launch Designer below to begin.", e
                    }

                    function r(e) {
                        var t = d("div", v.footer, {
                            "align-items": "center",
                            "border-top": "1px solid" + b.GRAY_LIGHTER_6,
                            display: "flex",
                            height: u(y.FOOTER_HEIGHT),
                            "justify-content": "flex-end",
                            "min-height": u(y.FOOTER_HEIGHT),
                            padding: u(10),
                            width: "100%",
                            "box-sizing": "border-box"
                        }), n = d("button", v.closeButton, {
                            "border-radius": u(3),
                            border: "none",
                            height: u(y.BUTTON_HEIGHT),
                            "padding-right": u(10),
                            "padding-left": u(10),
                            "font-family": E.PRIMARY_FONT,
                            "font-size": u(14),
                            display: "flex",
                            "line-height": "120%",
                            "margin-right": u(10),
                            "min-width": "90px",
                            "justify-content": "center",
                            "box-sizing": "border-box"
                        });
                        n.innerHTML = "Close", n.onclick = function () {
                            p(v.container), p(v.commIframeId)
                        };
                        var i = d("button", v.launchButton, {
                            "background-color": b.TEAL_PRIMARY,
                            "border-radius": u(3),
                            color: b.WHITE,
                            border: "none",
                            height: u(y.BUTTON_HEIGHT),
                            "padding-right": u(10),
                            "padding-left": u(10),
                            "font-family": E.PRIMARY_FONT,
                            "font-size": u(14),
                            display: "flex",
                            "line-height": "120%",
                            "min-width": "90px",
                            "justify-content": "center",
                            "box-sizing": "border-box"
                        });
                        return i.innerHTML = "Launch Designer", i.onclick = function () {
                            m(e)
                        }, t.appendChild(n), t.appendChild(i), t
                    }

                    function o(e) {
                        return _.reduce(_.pairs(e), function (e, t) {
                            var n = t[0], i = t[1];
                            return e + n + ":" + i + ";"
                        }, "")
                    }

                    function a(e) {
                        return _.reduce(_.pairs(e), function (e, t) {
                            var n = t[0], i = t[1];
                            return e + n + "{" + o(i) + "} "
                        }, "")
                    }

                    function s() {
                        var e = document.createElement("style");
                        e.setAttribute("id", v.style), e.type = "text/css";
                        var t = document.createTextNode(a(w));
                        return e.appendChild(t), e
                    }

                    function d(e, t, n) {
                        var i = document.createElement(e);
                        return i.setAttribute("id", t), _.extend(i.style, n), i
                    }

                    function u(e) {
                        return e + "px"
                    }

                    function c(e) {
                        return "#" + e
                    }

                    function l(e, n) {
                        if (!pendo$1.designerLaunched) {
                            var i, r, o = _.once(function (i) {
                                e || !n ? m(i) : t(i, e), g()
                            });
                            addSafeWindowMessageListener(function (e) {
                                if ("pendo-designer-launch-modal" === e.data.destination) {
                                    if (clearInterval(i), e.data.viaconfirmed) return void clearInterval(r);
                                    if (!e.data.token) return void g();
                                    o(e.data.token);
                                    var t = JSON.parse(e.data.token);
                                    _.contains(t.host, "via") && !t.visitorId && (r || (r = setInterval(function () {
                                        document.getElementById(v.commIframeId) && h()
                                    }, 100)))
                                }
                            }), DesignerV2.addCommunicationIframe({defaultBucket: "in-app-designer"}, function () {
                                h(), i = window.setInterval(h, 50)
                            })
                        }
                    }

                    function f() {
                        if (!pendo$1.designerLaunched) {
                            var e = _.once(function (e) {
                                m(e, !0)
                            });
                            addSafeWindowMessageListener(function (t) {
                                "pendo-designer-launch-modal" === t.data.destination && t.data.token && e(t.data.token)
                            })
                        }
                    }

                    function p(e) {
                        document.getElementById(e) && document.getElementById(e).remove()
                    }

                    function g() {
                        var e = document.querySelector("#" + v.commIframeId + '[src*="pendo"]');
                        e && e.remove()
                    }

                    function h() {
                        var e = document.getElementById(v.commIframeId);
                        e && e.contentWindow && _.isFunction(e.contentWindow.postMessage) && e.contentWindow.postMessage({
                            destination: "pendo-designer-ls",
                            source: "pendo-designer-launch-modal",
                            visitorId: pendo$1.visitorId
                        }, get(pendo$1, "designerv2.hostConfig.host", SERVER))
                    }

                    function m(e, t) {
                        var n = {}, i = JSON.parse(e);
                        n.target = i.target || "latest", i.host && (n.host = i.host), i.lookaside && (n.lookaside = i.lookaside), t && (n.selectionOnly = t), p(v.container), DesignerV2.launchInAppDesigner(n)
                    }

                    var v = {
                        body: "pendo-launch-modal-body",
                        closeButton: "pendo-launch-modal-close-button",
                        container: "pendo-launch-modal",
                        footer: "pendo-launch-modal-footer",
                        header: "pendo-launch-modal-header",
                        launchButton: "pendo-launch-modal-launch-button",
                        title: "pendo-launch-modal-title",
                        logoContainer: "pendo-launch-modal-logo-container",
                        style: "pendo-launch-modal-style",
                        commIframeId: "pendo-designer-communication-iframe"
                    }, b = {
                        GRAY_LIGHTER_6: "#EAECF1",
                        GRAY_PRIMARY: "#2A2C35",
                        PENDO_PINK: "#FF4876",
                        TEAL_DARKER: "#036463",
                        TEAL_PRIMARY: "#008180",
                        WHITE: "#FFFFFF"
                    }, y = {
                        BUTTON_HEIGHT: 35,
                        HEADER_HEIGHT: 60,
                        MODAL_HEIGHT: 235,
                        MODAL_TOP_OFFSET: 150,
                        MODAL_WIDTH: 370
                    };
                    y.FOOTER_HEIGHT = 1.25 * y.HEADER_HEIGHT, y.BODY_HEIGHT = "calc(100% - " + u(y.HEADER_HEIGHT) + " - " + u(y.FOOTER_HEIGHT) + ")";
                    var S = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.12 164.12"><defs><style>.cls-1{fill:#fff;}</style></defs><title>chevron</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="82.06 0 0 82.06 82.06 82.06 82.06 164.13 164.13 82.06 164.13 0 82.06 0"/></g></g></svg>',
                        w = {};
                    w[c(v.closeButton) + ":hover"] = {"background-color": b.GRAY_LIGHTER_6}, w[c(v.launchButton) + ":hover"] = {"background-color": b.TEAL_DARKER + " !important"};
                    var E = {PRIMARY_FONT: "Helvetica Neue"};
                    return {
                        listen: e,
                        launchOnLocalStorageToken: m,
                        ids: v,
                        removeElement: p,
                        attemptToLaunch: l,
                        loadPluginJs: f
                    }
                }(), Feedback = function () {
                    function e() {
                        oe = "", ae = "", se = "", de = "", ue = !1, ce = "", le = !1
                    }

                    function t() {
                        return se + "/html/widget/notLoaded.html"
                    }

                    function n(e) {
                        var t, n;
                        return "left" === e ? (t = me, n = ye) : (t = he, n = _e), fe + pe + ge + t + ve + be + n + Se
                    }

                    function i() {
                        agentStorage.write(ie, o(), re)
                    }

                    function r() {
                        return agentStorage.read(ie) === o()
                    }

                    function o() {
                        return get_account_id() + "_" + get_visitor_id()
                    }

                    function a(e) {
                        return oe + e
                    }

                    function s(e) {
                        if (!r()) {
                            var t = d(e);
                            if (t.data && "{}" !== t.data && "null" !== t.data) return ajax.postJSON(a("/widget/pendo_ping"), t).then(f)
                        }
                        return q.resolve()
                    }

                    function d(e) {
                        return e || (e = Q(getOptionsCopy())), {data: JSON.stringify(e)}
                    }

                    function u() {
                        var e = agentStorage.read(ne) || 0;
                        return parseInt(e, 10)
                    }

                    function c(e) {
                        agentStorage.write(ne, e)
                    }

                    function l() {
                        var e = ShadowSizzle("#feedback-trigger-notification");
                        if (0 !== e.length) {
                            var t = u();
                            t > 0 ? _.forEach(e, function (e) {
                                dom(e).css({visibility: "visible"})
                            }) : _.forEach(e, function (e) {
                                dom(e).css({visibility: "hidden"})
                            })
                        }
                    }

                    function f(e) {
                        i(), c(e.data.notifications), l()
                    }

                    function p() {
                        return le && r() ? q.resolve() : X(getOptionsCopy(), ConfigReader.get("feedbackSettings"))
                    }

                    function g(e, t) {
                        return p().then(function () {
                            return _.isUndefined(e) && (e = {}), "A" === get(e, "anchor.nodeName", "").toUpperCase() ? (h(), !1) : void b().then(function (e) {
                                window.location.href = e
                            })
                        }, function () {
                        })
                    }

                    function h() {
                        var e = window.open(t(), Math.random().toString(36).substring(7));
                        b().then(function (t) {
                            e.location = t
                        })
                    }

                    function m(e) {
                        var t = document.createElement("a");
                        return t.href = e, t.host
                    }

                    function v(e) {
                        de = m(e)
                    }

                    function b() {
                        var e = d();
                        return e.data && "{}" !== e.data && "null" !== e.data ? ajax.postJSON(a("/widget/token"), e).then(function (e) {
                            return v(e.data.login_url), e.data.login_url
                        }) : void 0
                    }

                    function y() {
                        return document.getElementById(we.feedbackWidget)
                    }

                    function S() {
                        return document.getElementById(we.feedbackIframe)
                    }

                    function w() {
                        var e = S();
                        return e || ($(), e = S()), e
                    }

                    function E() {
                        var e = navigator.userAgent.toLowerCase();
                        return -1 != e.indexOf("msie") && parseInt(e.split("msie")[1], 10) < 10
                    }

                    function C(e) {
                        if (K()) {
                            e && e.preventDefault && e.preventDefault();
                            var n = w();
                            n.src && n.src !== t() || b().then(function (e) {
                                n.src = e + "&inWidget=true"
                            }), A(), dom.addClass(y(), "visible"), T("user.widget.opened")
                        }
                    }

                    function I() {
                        x(), dom.removeClass(y(), "visible"), T("user.widget.closed")
                    }

                    function T(e) {
                        var t = d();
                        return t.event = e, ajax.postJSON(a("/analytics"), t)
                    }

                    function A() {
                        var e = document.getElementById(we.feedbackWidget);
                        if (e) {
                            var t = {
                                    position: "fixed",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    left: "0",
                                    background: "rgba(0, 0, 0, 0.4)",
                                    "z-index": "9000",
                                    opacity: "0",
                                    animation: "pendoFeedbackFadeIn 0.5s 0s 1 alternate both",
                                    "-webkit-animation": "pendoFeedbackFadeIn 0.5s 0s 1 alternate both"
                                }, n = P("feedback-overlay", t, "div"), i = BuildingBlockGuides.buildNodeFromJSON(n),
                                r = e.parentNode;
                            i.appendTo(r)
                        }
                    }

                    function x() {
                        var e = document.getElementById(we.feedbackWidget), t = document.getElementById(we.feedbackOverlay);
                        if (e && t) {
                            var n = document.getElementById(we.feedbackOverlay);
                            n.parentNode.removeChild(n)
                        }
                    }

                    function R(e) {
                        return de ? m(e) === de : m(e) === m(se)
                    }

                    function G() {
                        window.addEventListener("message", function (e) {
                            var t = e.origin || e.originalEvent.origin;
                            R(t) && L(e.data.message, e.data.data)
                        }, !1)
                    }

                    function L(e, n) {
                        switch (e) {
                            case"close-receptive-widget":
                                I();
                                break;
                            case"open-receptive":
                                g();
                                break;
                            case"update-receptive-notification-count":
                                agentStorage.write("receptiveNotificationCount", n.count), l();
                                break;
                            case"handle-logout":
                                w().src = t(), I();
                                break;
                            case"loaded-receptive-widget":
                                ue = !0
                        }
                    }

                    function O(e, t) {
                        if (e.visitor.id) {
                            var i = _.extend(t, {
                                triggerColor: "#" + t.triggerColor,
                                triggerPosition: t.triggerPosition.toLowerCase()
                            });
                            z();
                            var r = N(i);
                            DesignerV2.addStylesToPage("pendo-feedback-styles", n(r.horizontalPosition)), t.customTrigger || H(i, r), $(r.horizontalPosition)
                        }
                    }

                    function N(e) {
                        var t = e.triggerPosition.split("_");
                        return {horizontalPosition: t[1], verticalPosition: t[0]}
                    }

                    function B(e) {
                        return "left" === e.horizontalPosition ? {
                            "transform-origin": "center left",
                            left: "23px",
                            animation: "pendoFeedbackSlideIn-left 0.2s 0s 1 alternate forwards",
                            "-webkit-animation": "pendoFeedbackSlideIn-left 0.2s 0s 1 alternate forwards"
                        } : {
                            right: "0px",
                            animation: "pendoFeedbackSlideIn 0.2s 0s 1 alternate forwards",
                            "-webkit-animation": "pendoFeedbackSlideIn 0.2s 0s 1 alternate forwards"
                        }
                    }

                    function k(e) {
                        switch (e.verticalPosition) {
                            case"top":
                                return {top: " 10%"};
                            case"middle":
                                return {top: " 45%"};
                            case"bottom":
                                return {bottom: " 20%"}
                        }
                    }

                    function P(e, t, n) {
                        return {props: {id: e, style: t}, type: n}
                    }

                    function D() {
                        return {"data-turbolinks-permanent": ""}
                    }

                    function F(e) {
                        var t = B(e), n = k(e),
                            i = {position: "fixed", height: "43px", opacity: "1 !important", "z-index": "9001"},
                            r = P(we.feedbackTrigger, i, "div");
                        return _.extend(r.props, D()), _.extend(r.props.style, t), _.extend(r.props.style, n), r
                    }

                    function M() {
                        var e = {
                            "background-color": "#D85039",
                            color: "#fff",
                            "border-radius": "50%",
                            height: "17px",
                            width: "17px",
                            position: "absolute",
                            right: "-6px",
                            top: "-8px",
                            visibility: "hidden",
                            "z-index": "1",
                            animation: "pendoFeedbackPulse",
                            "animation-fill-mode": "both",
                            "animation-duration": "1s",
                            "animation-delay": "1s",
                            "animation-iteration-count": "1"
                        }, t = P("feedback-trigger-notification", e, "span");
                        return t
                    }

                    function U(e, t) {
                        var n;
                        n = "left" === t.horizontalPosition ? "0 0 5px 5px" : "3px 3px 0 0";
                        var i = {
                            border: "none",
                            padding: "11px 18px 14px 18px",
                            "background-color": e.triggerColor,
                            "border-radius": n,
                            "font-size": "15px",
                            color: "#fff",
                            "box-shadow": "0 -5px 9px rgba(0,0,0,.16)",
                            cursor: "pointer",
                            "text-align": "left"
                        }, r = {
                            actions: [{
                                action: "openFeedback",
                                destination: "Global",
                                eventType: "click",
                                parameters: [],
                                source: we.feedbackTriggerButton,
                                uiMetadata: {}
                            }]
                        }, o = P(we.feedbackTriggerButton, i, "button");
                        return _.extend(o, r), _.extend(o, {content: e.triggerText})
                    }

                    function H(e, t) {
                        var n = F(t), i = M(), r = U(e, t), o = {
                            type: "style",
                            props: {type: "text/css", scoped: "scoped"},
                            css: [{
                                selector: "#feedback-trigger button:hover",
                                styles: {
                                    "box-shadow": "0 -5px 20px rgba(0,0,0,.19)",
                                    outline: "none",
                                    background: "#3e566f"
                                }
                            }, {
                                selector: "#feedback-trigger button:focus",
                                styles: {
                                    "box-shadow": "0 -5px 20px rgba(0,0,0,.19)",
                                    outline: "none",
                                    background: "#3e566f"
                                }
                            }]
                        };
                        _.extend(n, {children: [i, r, o]});
                        var a = {};
                        a.eventRouter = new EventRouter;
                        var s = BuildingBlockGuides.buildNodeFromJSON(n, a);
                        s.appendTo(getBody())
                    }

                    function z() {
                        "undefined" != typeof Turbolinks && document.addEventListener("turbolinks:before-visit", function (e) {
                            var n = document.getElementById(we.feedbackIframe);
                            n && (n.src = t())
                        })
                    }

                    function W(e) {
                        var t = P(we.feedbackWidget, J(), "div");
                        return _.extend(t, {"data-turbolinks-permanent": "true"}), _.extend(t.props, {"class": "buttonIs-" + e}), t
                    }

                    function j() {
                        var e = {width: "100%", height: "99.6%", border: "0 none"}, n = P(we.feedbackIframe, e, "iframe");
                        return _.extend(n.props, {src: t()}), n
                    }

                    function V(e) {
                        var t;
                        return t = "left" === e ? {
                            selector: ".buttonIs-left.visible",
                            styles: {
                                left: "0px",
                                width: "470px",
                                "animation-direction": "alternate-reverse",
                                animation: "pendoFeedbackSlideFromLeft 0.5s 0s 1 alternate both",
                                "-webkit-animation": "pendoFeedbackSlideFromLeft 0.5s 0s 1 alternate both",
                                "z-index": "9002"
                            }
                        } : {
                            selector: ".buttonIs-right.visible",
                            styles: {
                                right: "0",
                                width: "470px",
                                "animation-direction": "alternate-reverse",
                                animation: "pendoFeedbackSlideFromRight 0.5s 0s 1 alternate both",
                                "-webkit-animation": "pendoFeedbackSlideFromRight 0.5s 0s 1 alternate both",
                                "z-index": "9002"
                            }
                        }, {type: "style", props: {type: "text/css", scoped: "scoped"}, css: [t]}
                    }

                    function $(e) {
                        var t = V(e), n = W(e);
                        _.extend(n, {children: [j(), t]});
                        var i = BuildingBlockGuides.buildNodeFromJSON(n);
                        i.appendTo(getBody()), G()
                    }

                    function J() {
                        return {
                            height: "100%",
                            position: "fixed",
                            right: "0",
                            top: "0",
                            width: "0",
                            "background-color": "#f7f7f7",
                            transition: "animation 0.4s ease-in-out",
                            "box-shadow": "0 5px 40px rgba(0,0,0,.46)",
                            display: "block !important",
                            "-webkit-overflow-scrolling": "touch",
                            "overflow-y": "hidden"
                        }
                    }

                    function K(e) {
                        var t = e || getOptionsCopy();
                        if (!E() && ae && oe && se && ce) {
                            if (!_.has(t.visitor, "id")) return void log("Not valid visitor id");
                            if (!isAnonymousVisitor(t.visitor.id)) return _.has(t.account, "id") ? !0 : void log("The current visitor is not associated with an account.")
                        }
                    }

                    function X(e, t) {
                        if (ae = t.vendorId, oe = t.apiUrl, se = t.siteUrl, ce = t.productId, !K(e)) return q.reject();
                        var n = Q(e);
                        try {
                            return "WIDGET" === t.type && O(e, t), l(), le = !0, s(n)
                        } catch (i) {
                            return le = !1, log(i, "unhandled error while initializing feedback"), q.reject(i)
                        }
                    }

                    function Y(e) {
                        return _.isUndefined(e.user) || _.isUndefined(e.user.id) ? "noemail+" + randomString(32) + "@pendo.io" : "noemail+" + e.user.id + "@pendo.io"
                    }

                    function Z(e) {
                        if (!_.isUndefined(e.user.firstName) || !_.isUndefined(e.user.lastName)) {
                            var t = [];
                            return _.isUndefined(e.user.firstName) || t.push(e.user.firstName), _.isUndefined(e.user.lastName) || t.push(e.user.lastName), t.join(" ")
                        }
                        return _.isUndefined(e.user) || _.isUndefined(e.user.id) ? "No Name Provided" + randomString(32) : "No Name Provided" + e.user.id
                    }

                    function Q(e) {
                        var t = getJwtInfoCopy();
                        if (_.isEmpty(t)) {
                            var n = JSON.parse(JSON.stringify(e)), i = n.visitor;
                            return delete n.visitor, n.user = i, _.extend(n, {vendor: {id: ae}}), _.extend(n.user, {allowed_products: [{id: ce}]}), _.isUndefined(n.account.is_paying) && (n.account.is_paying = !0), _.isUndefined(n.user.email) && (n.user.email = Y(n)), _.isUndefined(n.user.full_name) && (n.user.full_name = Z(n)), n
                        }
                        var r = JSON.parse(JSON.stringify(t));
                        return _.extend(r, {vendor: {id: ae}}), _.extend(r, {allowed_products: [{id: ce}]}), r
                    }

                    function ee() {
                        return le
                    }

                    function te() {
                        P2AutoLaunch.removeElement("feedback-trigger"), P2AutoLaunch.removeElement("feedback-widget"), P2AutoLaunch.removeElement("pendo-feedback-styles"), P2AutoLaunch.removeElement("feedback-overlay"), P2AutoLaunch.removeElement("feedback-widget_iframe"), e()
                    }

                    var ne = "feedback_notification_count", ie = "feedback_ping_sent", re = 36e5, oe = "", ae = "", se = "",
                        de = "", ue = !1, ce = "", le = !1,
                        fe = "@media only screen and (max-device-width:1112px){#feedback-widget{overflow-y:scroll}}",
                        pe = "@-webkit-keyframes pendoFeedbackSlideIn{from{opacity:0;transform:translate(145px,0) rotate(270deg) translateY(-50%)}to{opacity:1;transform:translate(50%,0) rotate(270deg) translateY(-50%)}}@keyframes pendoFeedbackSlideIn{from{opacity:0;transform:translate(145px,0) rotate(270deg) translateY(-50%)}to{opacity:1;transform:translate(50%,0) rotate(270deg) translateY(-50%)}}",
                        ge = "@-webkit-keyframes pendoFeedbackSlideIn-left{from{opacity:0;transform:rotate(270deg) translateX(-55%) translateY(-55%)}to{opacity:1;transform:rotate(270deg) translateX(-55%) translateY(0)}}@keyframes pendoFeedbackSlideIn-left{from{opacity:0;transform:rotate(270deg) translateX(-55%) translateY(-55%)}to{opacity:1;transform:rotate(270deg) translateX(-55%) translateY(0)}}",
                        he = "@-webkit-keyframes pendoFeedbackSlideFromRight{from{transform:translate(-460px,0)}to{transform:translate(0,0)}}@keyframes pendoFeedbackSlideFromRight{from{opacity:0;transform:translate(460px,0)}to{opacity:1;transform:translate(0,0)}}",
                        me = "@-webkit-keyframes pendoFeedbackSlideFromLeft{from{opacity:0;transform:translate(-460px,0)}to{opacity:1;transform:translate(0,0)}}@keyframes pendoFeedbackSlideFromLeft{from{opacity:0;transform:translate(-460px,0)}to{opacity:1;transform:translate(0,0)}}",
                        ve = "@-webkit-keyframes pendoFeedbackPulse{from{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{-webkit-transform:scale(1.15,1.15);transform:scale(1.15,1.15)}to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes pendoFeedbackPulse{from{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{-webkit-transform:scale(1.15,1.15);transform:scale(1.15,1.15)}to{-webkit-transform:scale(1,1);transform:scale(1,1)}}",
                        be = "@-webkit-keyframes pendoFeedbackFadeIn{from{opacity:0}to{opacity:1}}@keyframes pendoFeedbackFadeIn{from{opacity:0}to{opacity:1}}",
                        _e = "@media only screen and (max-width:470px){#feedback-widget.buttonIs-right.visible{width:100%;right:2%}}",
                        ye = "@media only screen and (max-width:470px){#feedback-widget.buttonIs-left.visible{width:100%}}",
                        Se = "#feedback-trigger button:focus,#feedback-trigger button:hover{box-shadow:0 -5px 20px rgba(0,0,0,.19);outline:0;background:#3e566f}",
                        we = {
                            feedbackIframe: "feedback-widget_iframe",
                            feedbackTrigger: "feedback-trigger",
                            feedbackWidget: "feedback-widget",
                            feedbackOverlay: "feedback-overlay",
                            feedbackTriggerButton: "feedback-trigger-button"
                        }, Ee = function () {
                            return ue
                        };
                    return {
                        ping: s,
                        init: X,
                        initialized: ee,
                        loginAndRedirect: g,
                        openFeedback: C,
                        initializeFeedbackOnce: p,
                        isFeedbackLoaded: Ee,
                        convertPendoToFeedbackOptions: Q,
                        isUnsupportedIE: E,
                        removeFeedbackWidget: te
                    }
                }(), EventRouter = function () {
                    function e(e) {
                        var n;
                        if (!e.ignore) switch (e.action) {
                            case u.advanceGuide:
                                onGuideAdvanced(e, e.step);
                                break;
                            case u.previousStep:
                                onGuidePrevious(e, e.step);
                                break;
                            case u.goToStep:
                                goToStep(e);
                                break;
                            case u.submitPoll:
                                this.submitPoll(e);
                                break;
                            case u.guideSnoozed:
                                var i = e && e.params && e.params[0] && e.params[0].value;
                                onGuideSnoozed(e, e.step, i);
                                break;
                            case u.dismissGuide:
                                BuildingBlockResourceCenter.attemptToPreserveIntegrationIframes(e), t(e);
                                break;
                            case u.showElements:
                                this.setElementDisplay(e, "block"), e.srcElement && BuildingBlockGuides.updateAriaLabelledbyForActiveFollowupQuestion(e.srcElement), n = BuildingBlockGuides.findGuideContainerJSON(e.step.domJson), BuildingBlockGuides.recalculateGuideWidth(n.props.id), BuildingBlockGuides.adjustGuideContentWidth(n.props.id), BuildingBlockGuides.flexAllThings(n.props.id), BuildingBlockGuides.recalculateGuideHeight(n.props.id);
                                break;
                            case u.hideElements:
                                this.setElementDisplay(e, "none"), n = BuildingBlockGuides.findGuideContainerJSON(e.step.domJson), BuildingBlockGuides.recalculateGuideWidth(n.props.id), BuildingBlockGuides.adjustGuideContentWidth(n.props.id), BuildingBlockGuides.flexAllThings(n.props.id), BuildingBlockGuides.recalculateGuideHeight(n.props.id);
                                break;
                            case u.slideElement:
                                this.setElementAnimation(e);
                                break;
                            case u.showGuide:
                                var r = _.find(e.params, function (e) {
                                    return "reason" === e.name
                                });
                                showGuideById(e.params[0].value, r && r.value);
                                break;
                            case u.launchGuide:
                                if (!pendo$1.designer) {
                                    onGuideDismissed(e, e.step);
                                    var o = e && e.params && e.params[0] && e.params[0].value;
                                    o && showGuideById(e.params[0].value)
                                }
                                break;
                            case u.renderResourceCenterModule:
                                BuildingBlockResourceCenter.replaceResourceCenterContent(e.params[0].value);
                                break;
                            case u.returnToResourceCenterHome:
                                var a = BuildingBlockResourceCenter.findResourceCenterHomeView(pendo$1.guides);
                                if (!a) return;
                                BuildingBlockResourceCenter.attemptToPreserveIntegrationIframes(e), BuildingBlockResourceCenter.replaceResourceCenterContent(a.id, e.params);
                                break;
                            case u.openFeedback:
                                Feedback.openFeedback(e);
                                break;
                            case u.openLink:
                                !pendo$1.designer && this.openLink(e);
                                break;
                            case u.searchGuides:
                                this.searchGuides(e);
                                break;
                            case u.submitPollAndGoToStep:
                                this.submitPoll(e), goToStep(e)
                        }
                    }

                    function t(e) {
                        if (!e || !e.step) return onGuideDismissed();
                        var t = e.step.getGuide();
                        return t && t.attributes && t.attributes.resourceCenter ? BuildingBlockResourceCenter.dismissResourceCenter(t) : void onGuideDismissed(e, e.step)
                    }

                    function n(e) {
                        var t = e && e.action, n = e.step, i = [];
                        if (e.srcElement && e.srcElement.getAttribute("data-pendo-poll-type") && "yesNo" === e.srcElement.getAttribute("data-pendo-poll-type")) {
                            var r = e.srcElement.getAttribute("data-pendo-poll-id"), o = e.srcElement.value;
                            i.push({pollId: r, value: parseInt(o, 10)})
                        }
                        var a = ShadowSizzle("[data-pendo-poll-id]", n.guideElement[0]);
                        i = i.concat(_.map(a, function (e) {
                            var t = ShadowSizzle("textarea,input:text,select,input:radio:checked", e);
                            if (t && t.length && t[0].value) {
                                var i = e.getAttribute("data-pendo-poll-id"), r = _.find(n.guide.polls, function (e) {
                                    return e.id === i
                                }), o = t[0].value;
                                return r && r.numericResponses && (o = parseInt(o, 10)), {pollId: i, value: o}
                            }
                        })), n.response && i ? n.response(_.compact(i)) : log("[Agent] Error! Trying to submit a poll response but step does not have response function!"), t !== u.submitPollAndGoToStep && n.advance()
                    }

                    function i(e, t) {
                        var n = e.step, i = _.find(e.params, function (e) {
                            return "selectors" === e.name
                        }).value, r = dom(i, n.guideElement[0]);
                        _.each(r, function (e) {
                            e.style.display = t
                        })
                    }

                    function r(e) {
                        var t = _.find(e.params, function (e) {
                            return "selector" === e.name
                        }).value, n = dom(t, e.step.guideElement[0])[0], i = _.find(e.params, function (e) {
                            return "transition" === e.name
                        }).value, r = _.find(e.params, function (e) {
                            return "left" === e.name
                        }).value;
                        n.style.transition = i, n.style.left = r
                    }

                    function o(e) {
                        var t = _.find(e.params, function (e) {
                            return "url" === e.name
                        }).value, n = _.find(e.params, function (e) {
                            return "target" === e.name
                        }).value;
                        "_self" === n && detectMaster() && (n = "_top"), window.open(t, n)
                    }

                    function a(e, t, n) {
                        return t ? t.some(function (t) {
                            return _.contains(e, t) && t === n
                        }) : !1
                    }

                    function s(e) {
                        var t = "", n = e.srcElement.value, i = ShadowSizzle("#pendo-resource-center-container")[0],
                            r = dom(i).find('[id^="pendo-list-item-"]'),
                            o = dom(i).find('[id^="pendo-no-matches-container"]'), a = [],
                            s = _.find(e.params, function (e) {
                                return "searchTextInfo" === e.name
                            });
                        dom(o[0].childNodes[0]).text(s.value);
                        var d = !0;
                        if (r) for (var u in r) if (u && r[u]) {
                            dom(r[u]).text() && (-1 !== dom(r[u]).text().toLowerCase().indexOf(n.toLowerCase()) ? (dom(r[u]).css({display: "list-item"}), d = !1) : dom(r[u]).css({display: "none"})), _.isFunction(r[u].getAttribute) && (t = r[u].getAttribute("data-_pendo-text-list-item-1").split(","), _.forEach(t, function (e) {
                                _.contains(a, e) || a.push(e)
                            }));
                            var c = this.searchAllTerms(a, t, n);
                            c && r[u] && (dom(r[u]).css({display: "list-item"}), d = !1), t = ""
                        }
                        d ? dom(o[0]).css({display: "block"}) : dom(o[0]).css({display: "none"})
                    }

                    var d = this;
                    this.eventable = Eventable.call({}), this.eventable.on("pendoEvent", function (e) {
                        try {
                            d.eventHandler(e)
                        } catch (t) {
                            var n = e && e.action || "NO ACTION DEFINED";
                            writeException(t, "Error in Action " + n)
                        }
                    }), this.eventHandler = e, this.submitPoll = n, this.setElementDisplay = i, this.setElementAnimation = r, this.openLink = o, this.goToStep = goToStep, this.searchGuides = s, this.searchAllTerms = a;
                    var u = {
                        advanceGuide: "advanceGuide",
                        previousStep: "previousStep",
                        goToStep: "goToStep",
                        submitPoll: "submitPoll",
                        guideSnoozed: "guideSnoozed",
                        dismissGuide: "dismissGuide",
                        showElements: "showElements",
                        hideElements: "hideElements",
                        slideElement: "slideElement",
                        showGuide: "showGuide",
                        launchGuide: "launchGuide",
                        renderResourceCenterModule: "renderResourceCenterModule",
                        returnToResourceCenterHome: "returnToResourceCenterHome",
                        openFeedback: "openFeedback",
                        openLink: "openLink",
                        searchGuides: "searchGuides",
                        submitPollAndGoToStep: "submitPollAndGoToStep"
                    };
                    return this
                }, ExtensionAPI = {
                    Launcher: {
                        addBehavior: function (e) {
                            Launcher.behaviors.push(e)
                        }
                    },
                    Metadata: {getMetadata: getMetadata},
                    Util: {
                        documentScrollTop: documentScrollTop,
                        documentScrollLeft: documentScrollLeft,
                        getOffsetPosition: getOffsetPosition
                    },
                    Events: Events
                }, ExtensionService = {}, addExtension = function (e) {
                    function t(e) {
                        e = [].concat(e);
                        var t = _.filter(e, i);
                        t.length && (s = n(s.concat(t)))
                    }

                    function n(e) {
                        if (!e.length) return e;
                        var t = _.filter(e, a);
                        return t.length ? n(_.difference(e, t)) : e
                    }

                    function i(e) {
                        var t = ["name", "version", "use", "type", "uri"];
                        if (!_.every(t, _.partial(_.has, e))) return !1;
                        var n = o(e.use);
                        return _.every(_.map(n, function (t) {
                            return t(e)
                        }))
                    }

                    function r(e) {
                        return u[e] ? u[e].handler || _.identity : null
                    }

                    function o(e) {
                        return u[e] ? u[e].validators : []
                    }

                    function a(t) {
                        if ("behavior" === t.use) {
                            var n = t.uri(e, ExtensionAPI);
                            return n ? (d.push(t), !0) : !1
                        }
                        var i = r(t.use);
                        if (!i) return !1;
                        var o = i(t);
                        return o && d.push(o), !!o
                    }

                    var s = [], d = [], u = {};
                    return e.tagExtension = function (t, n) {
                        var i = e.findExtensionByName(t);
                        i.tags = [].concat(i.tags || [], n)
                    }, e.findExtensionByTag = function (e) {
                        return _.find(d, function (t) {
                            return _.contains(t.tags, e)
                        })
                    }, e.findExtensionByName = function (e) {
                        return _.findWhere(d, {name: e})
                    }, e.filterExtensionsByUse = function (e) {
                        return _.filter(d, function (t) {
                            return t.use === e
                        })
                    }, e.findExtensionByNameAndProvider = function (e, t) {
                        return _.find(d, function (n) {
                            var i = n.data;
                            return i ? i.name === e && i.provider && i.provider.name === t : !1
                        })
                    }, e.registerExtensionsByUse = function (e, t, n) {
                        n = n ? [].concat(n) : [], u[e] = {handler: t, validators: n}
                    }, e.getExtensionFrames = function () {
                        return _.reduce(d, function (e, t) {
                            return t.frame && t.frame[0] && e.push(t.frame[0]), e
                        }, [])
                    }, t
                }(ExtensionService), BuildingBlockResourceCenter = function () {
                    function e(e) {
                        return e.steps && e.steps.length && _.isFunction(e.steps[0].fetchContent)
                    }

                    function t(t) {
                        if (ae = n(t), !ae) return q.resolve();
                        if (store.getters["frames/isShownInAnotherFrame"]()(ae.steps[0])) return q.resolve();
                        var r = BuildingBlockResourceCenter.isFullyCustom(ae);
                        if (r) return ae.hasResourceCenterContent = !0, q.resolve();
                        var o = i(ae, t), a = _.reduce(o, function (t, n) {
                            return e(n) ? t.concat(n.steps[0].fetchContent()) : t
                        }, []);
                        return a.push(ContentValidation.validate(ae).then(_.noop, function () {
                            ae.launchMethod = "api"
                        })), ae.attributes.notifications = {
                            totalUnseenCount: 0,
                            individualCounts: {chat: 0}
                        }, v(), _.forEach(o, function (e) {
                            var n = e.attributes.resourceCenter, i = n.children, r = n.moduleId;
                            "IframeModule" === r && (e.hasResourceCenterContent = !0), "SandboxModule" === r && (e.hasResourceCenterContent = !0), "IntegrationModule" === r && (e.integrationConfig = l(n.integrationName, n.integrationProvider), e.hasResourceCenterContent = !!e.integrationConfig, e.integrationConfig && "chat" === e.integrationConfig.name && p(n.integrationName, n.integrationProvider));
                            var o = _.reduce(i, function (e, n) {
                                var i = _.find(t, function (e) {
                                    return e.id === n
                                });
                                return i ? e.concat(i) : e
                            }, []);
                            "AnnouncementsModule" === r && (ae.attributes.notifications.individualCounts[e.id] = 0, _.forEach(o, function (t) {
                                W(t) || t.isControlGroup() || ae.attributes.notifications.individualCounts[e.id]++
                            }));
                            var a = ["GuideListModule", "OnboardingModule", "AnnouncementsModule"];
                            if (_.indexOf(a, r) > -1) {
                                var s = _.filter(o, function (e) {
                                    return e.shouldBeAddedToResourceCenter() ? (e.ineligibleForRC = !1, !0) : (e.ineligibleForRC = !0, !1)
                                });
                                s.length && (e.hasResourceCenterContent = !0)
                            }
                            e.guidesInModule = o
                        }), ae.modules = o, ae.badgeHidden = !0, q.all(a)
                    }

                    function n(e) {
                        var t = _.filter(e, function (e) {
                            return get(e, "attributes.resourceCenter.isTopLevel")
                        }), n = _.find(t, function (e) {
                            return "staged" === e.state
                        });
                        return n ? n : t[0]
                    }

                    function i(e, t) {
                        return _.filter(t, function (t) {
                            return t && get(t, "attributes.resourceCenter.isModule", !1) && t.state === e.state
                        })
                    }

                    function r(e, t, n) {
                        if (!de) {
                            var i = "left 200ms", r = "left";
                            t && (i = t[0].value, r = t[1].value);
                            var a = ShadowSizzle("#pendo-resource-center-container")[0];
                            if (a) {
                                var d = dom(a).find('[id^="pendo-g-"]')[0];
                                if (d) {
                                    var u, c = d.getAttribute("data-pendo-guide-id"),
                                        l = _.find(pendo$1.guides, function (t) {
                                            return t.id === e
                                        });
                                    e !== ae.id ? ae.activeModule = l : (u = ae.activeModule, delete ae.activeModule);
                                    var f = get(l, "attributes.resourceCenter.integrationProvider");
                                    h(f) && C(f);
                                    var p = l.steps[0];
                                    p.eventRouter = new EventRouter;
                                    var g = p.domJson;
                                    g.props["data-pendo-guide-id"] = l.id;
                                    var m = BuildingBlockGuides.buildNodeFromJSON(g, p), v = m[0];
                                    -1 === v.id.indexOf("pendo-g-") && (v = m.find('[id^="pendo-g-"]')[0]), n || (v.style.transition = i, d.style.transition = i, "left" === r ? v.style.left = a.offsetWidth + "px" : "right" === r && (v.style.left = -1 * a.offsetWidth + "px")), n && (dom(d).remove(), u && u.steps && u.steps.length && (u.steps[0].elements.length = 0)), dom(v).appendTo(a), p.guideElement = dom(a), p.elements.push(p.guideElement[0]), BuildingBlockResourceCenter.adjustResourceCenterWidth(v), "AnnouncementsModule" === Z(l) && p.guide.guidesInModule ? _.forEach(p.guide.guidesInModule, function (e) {
                                        if (_.isUndefined(e.steps[0].attributes.imgCount)) {
                                            var t = e.steps[0].id, n = dom(v).find("#pendo-g-" + t)[0] ? t : e.id;
                                            BuildingBlockGuides.adjustGuideContentWidth("pendo-g-" + n), BuildingBlockGuides.flexAllThings("pendo-g-" + n)
                                        }
                                    }) : BuildingBlockGuides.flexAllThings("pendo-resource-center-container");
                                    var b = dom(v).find('[data-pendo-grow-height="true"]')[0];
                                    if (b && BuildingBlockGuides.sizeElement(b, a), v.style.left = "0px", !n) {
                                        de = !0;
                                        try {
                                            "left" === r ? d.style.left = -1 * a.offsetWidth + "px" : "right" === r && (d.style.left = a.offsetWidth + "px"), window.setTimeout(function () {
                                                dom(d).remove(), u && u.steps && u.steps.length && (u.steps[0].elements.length = 0), de = !1
                                            }, 200)
                                        } catch (y) {
                                            throw de = !1, y
                                        }
                                    }
                                    var S = "AnnouncementsModule" === Z(l);
                                    if (S) {
                                        s();
                                        var w = BuildingBlockTemplates.getGuidesInResourceCenterModule(l, pendo$1.guides),
                                            E = _.reduce(w, function (e, t) {
                                                return t.steps && t.steps.length && AsyncContent.hasContent(t.steps[0]) || e.push(t.fetchContent()), e
                                            }, []);
                                        if (E.length) {
                                            var I = o();
                                            I && m.find("ol").append(I), q.all(E).then(function () {
                                                var e = q.defer();
                                                return setTimeout(e.resolve, 500), e.promise
                                            }).then(function () {
                                                ae.activeModule === l && BuildingBlockGuides.renderResourceCenterModule(l)
                                            })
                                        }
                                    }
                                    return BuildingBlockResourceCenter.setFocusForResoureCenterModule(m, c), p.onShown("launcher"), m
                                }
                            }
                        }
                    }

                    function o() {
                        if (_.isFunction(document.createElementNS)) {
                            var e = "http://www.w3.org/2000/svg", t = function (t, n) {
                                var i = dom(document.createElementNS(e, "circle")).attr({
                                    cx: t,
                                    cy: n,
                                    fill: "#9a9ca5",
                                    r: 5
                                });
                                return _.each(_.toArray(arguments).slice(2), function (e) {
                                    i.append(e)
                                }), i
                            }, n = function (t) {
                                return dom(document.createElementNS(e, "animate")).attr({
                                    attributeName: "fill-opacity",
                                    values: "0;1;0;0",
                                    keyTimes: "0;0.4;0.8;1",
                                    dur: "1.4s",
                                    repeatCount: "indefinite",
                                    calcMode: "spline",
                                    keySplines: "0 0 0.58 1; 0 0 0.58 1; 0 0 0.58 1",
                                    begin: t
                                })
                            }, i = dom(document.createElementNS(e, "svg")).attr({
                                viewBox: "0 0 70 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "70",
                                height: "20"
                            }).append(t(21, 10, n("-0.32s"))).append(t(35, 10, n("-0.16s"))).append(t(49, 10, n("0s")));
                            return dom("<li>").css({
                                padding: "5px 20px",
                                "list-style-type": "none",
                                "list-style-position": "inside",
                                position: "relative",
                                "margin-left": "0em",
                                "border-width": "0px",
                                "border-style": "solid",
                                "border-color": "rgb(255, 255, 255)",
                                "float": "none",
                                "vertical-align": "baseline",
                                "text-align": "center"
                            }).append(i)
                        }
                    }

                    function a() {
                        window.clearInterval(se), se = null
                    }

                    function s() {
                        se || (se = window.setInterval(function () {
                            var e = ShadowSizzle("#pendo-resource-center-container");
                            if (!e.length) return a();
                            var t = dom(e[0]).find('[data-layout="AnnouncementsModule"]');
                            if (!t.length) return a();
                            var n = dom(t).find('ol[id^="pendo-list"]');
                            if (!n.length) return a();
                            var i = getClientRect(n[0]), r = dom(n).find("li.pendo-unseen-announcement");
                            if (!r.length) return a();
                            for (var o = t.attr("data-pendo-guide-id"), s = A().attributes.notifications.individualCounts[o], d = i.height / 3, u = getClientRect(r[r.length - 1]), c = u.bottom - 30 < i.top + i.height, l = 0; l < r.length; l++) {
                                var f = r[l], p = getClientRect(f), g = p.top - i.top > i.height - d;
                                if (g && !c) break;
                                dom(f).removeClass("pendo-unseen-announcement");
                                var h = dom(f).find(".pendo-unread-announcement-mini-bubble");
                                isOldIE(10) ? dom(f).find(".pendo-unread-announcement-mini-bubble").remove() : (h[0].style.visibility = "hidden", h[0].style.opacity = "0", h[0].style.transition = "visibility 0s 2s, opacity 2s linear");
                                var m = dom(f).attr("data-pendo-announcement-guide-id"),
                                    v = _.find(pendo$1.guides, function (e) {
                                        return e.id === m
                                    });
                                if (!v) break;
                                W(v) || s--, v.steps[0].seenState = "advanced", seenGuide(v.id, v.steps[0].id, get_visitor_id(), "whatsnew", v.language, {last_updated_at: v.steps[0].lastUpdatedAt}), advancedGuide(v.id, v.steps[0].id, get_visitor_id(), "advanced", v.language)
                            }
                            z(s, o)
                        }, 500))
                    }

                    function d() {
                        var e = dom("#pendo-resource-center-container._pendo-guide-walkthrough_");
                        e.remove()
                    }

                    function u(e) {
                        d(), delete e.activeModule, e.hasResourceCenterContent && e.skipResourceCenterHomeView ? BuildingBlockResourceCenter.replaceResourceCenterContent(e.moduleIdToReplaceHomeViewWith, [{value: "none"}, {value: "left"}]) : e.showEmptyState && (BuildingBlockResourceCenter.showResourceCenterEmptyState(), _.each(e.controlGuidesInAllModules, function (e) {
                            e.hasGuideBeenControlled() || e.steps[0].onControlGuide("control")
                        }))
                    }

                    function c() {
                        var e = ShadowSizzle("#pendo-resource-center-container");
                        if (e && e.length) {
                            var t = ShadowSizzle("#pendo-resource-center-empty-state-container");
                            t && t.length && dom(t[0]).css({display: "block"})
                        }
                    }

                    function l(e, t) {
                        return ExtensionService.findExtensionByNameAndProvider(e, t)
                    }

                    function f(e, t, n) {
                        var i = ExtensionService.findExtensionByNameAndProvider(e, t);
                        if (!i) return log(t + " integration has not been loaded into the agent");
                        var r = dom(n);
                        if (!r) return log("could not find target element for " + t + " integration");
                        var o = i.getFrame();
                        o.appendTo(r), o.css({display: "block"})
                    }

                    function p(e, t) {
                        var n = ExtensionService.findExtensionByNameAndProvider(e, t);
                        if (!n) return log(t + " integration has not been loaded into the agent");
                        if (h(t) && m(t)) return void (ae.hasEligibleNativeIntegrationModule = !0);
                        var i = n.getFrame();
                        isInDocument(i[0]) || i.appendTo(getGuideAttachPoint()), i.css({display: "none"})
                    }

                    function g() {
                        return ["zendesk-chat", "intercom-chat", "zendesk-native-kb"]
                    }

                    function h(e) {
                        return e ? g().indexOf(e) >= 0 : !1
                    }

                    function m(e) {
                        if (!e) return !1;
                        switch (e) {
                            case"zendesk-chat":
                            case"zendesk-native-kb":
                                return _.isFunction(window.zE);
                            case"intercom-chat":
                                return _.isFunction(window.Intercom);
                            default:
                                return !1
                        }
                    }

                    function v() {
                        _.forEach(g(), function (e) {
                            var t = ExtensionService.findExtensionByNameAndProvider("chat", e),
                                n = ExtensionService.findExtensionByNameAndProvider("helpcenter", e);
                            m(e) && (t && b(e, t), n && b(e, n))
                        })
                    }

                    function b(e, t) {
                        if (e && m(e)) switch (e) {
                            case"zendesk-chat":
                            case"zendesk-native-kb":
                                y(t);
                                break;
                            case"intercom-chat":
                                S(t)
                        }
                    }

                    function y(e) {
                        var t = w(e);
                        window.zE("webWidget", "hide"), window.zE("webWidget", "updateSettings", {
                            webWidget: {
                                navigation: {popoutButton: {enabled: !1}},
                                position: {vertical: t ? t[0] : "bottom", horizontal: t ? t[1] : "right"}
                            }
                        }), window.zE("webWidget:on", "close", function () {
                            window.zE("webWidget", "hide"), E()
                        }), window.zE("webWidget:on", "chat:unreadMessages", function (e) {
                            z(e, "chat")
                        })
                    }

                    function S(e) {
                        var t = w(e);
                        window.Intercom("update", {
                            hide_default_launcher: !0,
                            alignment: t ? t[1] : "right"
                        }), window.Intercom("onHide", function () {
                            E()
                        })
                    }

                    function w(e) {
                        var t = get(e, "data.options.labels.position");
                        return t && (t = t.split("-")), t
                    }

                    function E() {
                        V(ae.activeModule), delete ae.activeModule, ae.continueToNativeModule = !1
                    }

                    function C(e, t) {
                        if (e) {
                            var n = getMetadata();
                            ae.isShown() && ae.hide();
                            var i = badgesShown[ae.id];
                            switch (i && i.hide(), e) {
                                case"zendesk-native-kb":
                                    window.zE("webWidget", "updateSettings", {
                                        webWidget: {
                                            helpCenter: {suppress: !1},
                                            chat: {suppress: !0}
                                        }
                                    }), window.zE("webWidget", "show"), window.zE("webWidget", "open");
                                    break;
                                case"zendesk-chat":
                                    window.zE("webWidget", "updateSettings", {
                                        webWidget: {
                                            chat: {suppress: !1},
                                            helpCenter: {suppress: !0}
                                        }
                                    }), window.$zopim.livechat.window.show(), n && n.visitor && n.visitor.email && window.zE("webWidget", "prefill", {email: {value: n.visitor.email}});
                                    break;
                                case"intercom-chat":
                                    window.Intercom("show"), n && n.visitor && n.visitor.email && window.Intercom("update", {email: n.visitor.email})
                            }
                            z(0, "chat"), !ae.activeModule && t && (ae.activeModule = t, t.steps[0].onShown("launcher"))
                        }
                    }

                    function I(e) {
                        if (e && !e.isTopLevel) {
                            var t = get(e, "attributes.resourceCenter.integrationProvider");
                            C(t), ae.activeModule || (ae.activeModule = e), e.steps[0].onShown("continue"), e.attributes.doNotResume = !0
                        }
                    }

                    function T(e) {
                        if (e.step) {
                            var t = e.step.getGuide();
                            if (t.attributes && t.attributes.resourceCenter) {
                                var n = dom("#pendo-resource-center-container");
                                if (n && n.length) {
                                    var i = n.find('iframe[id^="_pendo-launcher-ext-frame-chat"]');
                                    i && i.length && i.each(function (e) {
                                        var t = dom(e);
                                        t.css({display: "none"}), t.appendTo(getGuideAttachPoint())
                                    })
                                }
                            }
                        }
                    }

                    function A() {
                        return ae
                    }

                    function x(e) {
                        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                        return t ? {r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16)} : null
                    }

                    function R(e) {
                        return e ? _.all(e, function (e) {
                            return ShadowSizzle.contains(document, e && e.length ? e[0] : e)
                        }) : !1
                    }

                    function G() {
                        var e = A(), t = get(e, "attributes.notifications");
                        if (t) {
                            var n = O(t.individualCounts);
                            if (0 >= n) return n !== t.totalUnseenCount && H(), void (t.totalUnseenCount = n);
                            N();
                            var i = n !== t.totalUnseenCount;
                            if (i || !R(ue)) {
                                if ("badge" === e.launchMethod) {
                                    var r = dom("._pendo-resource-center-badge-container");
                                    if (!r.length) return;
                                    k(r[0], e.attributes.notificationBubble, n)
                                }
                                if ("dom" === e.launchMethod && e.attributes && e.attributes.activation && e.attributes.activation.selector) {
                                    var o = ShadowSizzle(e.attributes.activation.selector);
                                    if (!o.length) return;
                                    P(o[0], e.attributes.notificationBubble, n), attachEventInternal(window, "resize", _.debounce(L, 50))
                                }
                                t.totalUnseenCount = n
                            }
                        }
                    }

                    function L() {
                        var e = BuildingBlockResourceCenter.getResourceCenter(), t = get(e, "attributes.notifications");
                        if (t) {
                            var n = BuildingBlockResourceCenter.calculateTotalNotificationCount(t.individualCounts);
                            if ("dom" === e.launchMethod && get(e, "attributes.activation.selector")) {
                                var i = ShadowSizzle(e.attributes.activation.selector);
                                if (!i.length) return;
                                BuildingBlockResourceCenter.addNotificationBubbleToTargetElement(i[0], e.attributes.notificationBubble, n)
                            }
                        }
                    }

                    function O(e) {
                        return _.reduce(e, function (e, t) {
                            return e + t
                        }, 0)
                    }

                    function N() {
                        var e = A();
                        if (e) {
                            var t = get(e, "attributes.notifications");
                            if (t) {
                                var n = ShadowSizzle('[data-layout="HomeViewModule"]');
                                if (n.length) {
                                    var i = dom(n[0]).find("._pendo-resource-center-home-list");
                                    i.length && _.each(t.individualCounts, function (e, t) {
                                        B(e, t)
                                    })
                                }
                            }
                        }
                    }

                    function B(e, t) {
                        var n = ShadowSizzle("#pendo-resource-center-container");
                        if (n.length) {
                            var i = dom(n[0]).find('[data-pendo-notification-id="' + t + '"]');
                            if (i.length) {
                                var r = dom(i[0]).find("._pendo-home-view-bubble"), o = dom(r[0].children[0]),
                                    a = e !== parseInt(o.text(), 10);
                                a && (e > 0 ? (o.text(e), dom(r[0]).css({
                                    display: "block",
                                    "margin-right": "0"
                                })) : dom(r[0]).css({display: "none"}))
                            }
                        }
                    }

                    function k(e, t, n) {
                        var i = get(t, "position", "top-left"), r = getComputedStyle_safe(e),
                            o = parseInt(r.width, 10) || 56, a = o / 2, s = a / Math.sqrt(2), d = Math.round(a - s) - 10,
                            u = d - 10, c = Math.round(2 * s), l = {
                                "top-left": {
                                    top: d + "px",
                                    left: u + "px",
                                    padding: "0px 10px",
                                    "margin-left": "0px",
                                    "margin-top": "0px"
                                },
                                "top-right": {
                                    top: d + "px",
                                    left: u + c + 10 + "px",
                                    padding: "0px 10px",
                                    "margin-left": "0px",
                                    "margin-top": "0px"
                                },
                                "bottom-left": {
                                    top: d + c,
                                    left: u + "px",
                                    padding: "0px 10px",
                                    "margin-left": "0px",
                                    "margin-top": "0px"
                                },
                                "bottom-right": {
                                    top: d + c,
                                    left: u + c + 10 + "px",
                                    padding: "0px 10px",
                                    "margin-left": "0px",
                                    "margin-top": "0px"
                                }
                            }, f = l[i];
                        D(e, t, n, f)
                    }

                    function P(e, t, n) {
                        var i = getAbsolutePosition(e, e), r = getAbsolutePosition(e, getBody()), o = {
                            width: "28px",
                            top: i.top - Math.min(r.top, 14) + "px",
                            left: i.left - Math.min(r.left, 14) + "px",
                            position: "absolute"
                        }, a = {
                            width: "28px",
                            "font-size": "16px",
                            "text-align": "center",
                            position: "absolute",
                            right: "0px"
                        };
                        D(e, t, n, o, a)
                    }

                    function D(e, t, n, i, r) {
                        if (R(ue)) {
                            var o = F(t), a = o.defaultBubbleCss, s = o.defaultUnseenCountCss, d = _.extend(a, i),
                                u = _.extend(s, r);
                            return ue.bubbleEle.css(d), ue.unseenCountEle.css(u), void (ue.unseenCountEle.text() != "" + n && ue.unseenCountEle.text(n))
                        }
                        var c = document.getElementsByClassName("pendo-resource-center-badge-notification-bubble");
                        if (c.length) {
                            var l = c[0].getElementsByClassName("pendo-notification-bubble-unread-count");
                            l[0].textContent = n
                        } else n && (ue = M(t, n, i, r), U(ue, e))
                    }

                    function F(e) {
                        return {
                            defaultBubbleCss: {
                                position: "absolute",
                                "border-radius": "20px",
                                "line-height": "0px",
                                height: "26px",
                                "box-sizing": "content-box",
                                "background-color": e["background-color"]
                            },
                            defaultUnseenCountCss: {
                                "font-weight": e["font-weight"],
                                "font-family": e["font-family"],
                                height: "100%",
                                position: "relative",
                                top: "50%",
                                color: e.color
                            }
                        }
                    }

                    function M(e, t, n, i) {
                        var r = F(e), o = r.defaultBubbleCss, a = r.defaultUnseenCountCss;
                        t = t || 0;
                        var s = dom('<div class="pendo-resource-center-badge-notification-bubble"></div>'),
                            d = dom('<div class="pendo-notification-bubble-unread-count"></div>'), u = _.extend(o, n),
                            c = _.extend(a, i);
                        s.css(u), d.css(c);
                        var l = dom('<style id="pendo-resource-center-bubble-animation"></style>');
                        if (!isOldIE(10)) {
                            var f = x(e["background-color"]), p = "rgb(" + f.r + ", " + f.g + ", " + f.b + ")",
                                g = "@keyframes pulse { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(1.6) } }",
                                h = '.pendo-resource-center-badge-notification-bubble::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: ' + p + "; border-radius: 100%; z-index: -1; animation: pulse 2s infinite; will-change: transform; }",
                                m = g + " " + h;
                            l.styleSheet ? l.styleSheet.cssText = m : l[0].innerHTML = m
                        }
                        return d.text(t), {bubbleEle: s, unseenCountEle: d, styleEle: l}
                    }

                    function U(e, t) {
                        e.styleEle.appendTo(t), e.unseenCountEle.appendTo(e.bubbleEle), e.bubbleEle.appendTo(t)
                    }

                    function H() {
                        var e = ue ? ue.bubbleEle : ShadowSizzle(".pendo-resource-center-badge-notification-bubble"),
                            t = ue ? ue.styleEle : ShadowSizzle("#pendo-resource-center-bubble-animation");
                        e && _.each(e, function (t, n) {
                            if (e[n]) {
                                var i = e[n];
                                i && i.parentNode && i.parentNode.removeChild(i)
                            }
                        }), t && _.each(t, function (e, n) {
                            if (t[n]) {
                                var i = t[n];
                                i && i.parentNode && i.parentNode.removeChild(i)
                            }
                        }), ue = null
                    }

                    function z(e, t) {
                        var n = A();
                        if (n) {
                            var i = get(n, "attributes.notifications");
                            i && i.individualCounts[t] !== e && (i.individualCounts[t] = e, BuildingBlockResourceCenter.updateNotificationBubbles())
                        }
                    }

                    function W(e) {
                        return _.isFunction(e.hasBeenSeen) && e.hasBeenSeen() ? !0 : "active" === e.steps[0].seenState ? !0 : !1
                    }

                    function j() {
                        var e = ShadowSizzle("#pendo-resource-center-container")[0];
                        if (e) {
                            var t = dom(e).find('[id^="pendo-g-"]');
                            if (t) {
                                var n = t.attr("data-pendo-guide-id"), i = _.find(pendo$1.guides, function (e) {
                                    return e.id === n
                                }), r = get(i, "attributes.resourceCenter.isModule", !1);
                                if (r) return i
                            }
                        }
                    }

                    function V(e) {
                        var t = get(e, "attributes.resourceCenter.isModule", !1) ? e : BuildingBlockResourceCenter.findShownResourceCenterModule();
                        if (t) {
                            var n = _.first(t.steps);
                            onGuideDismissed(n)
                        }
                        var i = get(e, "attributes.resourceCenter.isTopLevel", !1) ? e : BuildingBlockResourceCenter.findResourceCenterHomeView(pendo$1.guides),
                            r = i.steps[0];
                        return onGuideDismissed(r)
                    }

                    function $() {
                        var e = ShadowSizzle("#pendo-resource-center-container")[0],
                            t = ShadowSizzle("._pendo-resource-center-badge-container")[0];
                        if (e && t) {
                            var n = BuildingBlockResourceCenter.findResourceCenterHomeView(pendo$1.guides).steps[0],
                                i = get(n, "domJson.props.style.height");
                            i = parseInt(i, 10), i = isNaN(i) ? 0 : i;
                            var r = parseInt(get(n, "domJson.props.style.bottom", 0), 10),
                                o = parseInt(get(n, "domJson.props.style.top", 0), 10);
                            r = isNaN(r) ? 0 : r, o = isNaN(o) ? 0 : o;
                            var a = getScreenDimensions().height, s = a - r - o;
                            i >= s && (e.style.height = (s - 10).toString() + "px");
                            var d = parseInt(e.style.height, 10);
                            d = isNaN(d) ? 0 : d, s > i && i !== d && (e.style.height = i.toString() + "px")
                        }
                        var u = dom("#pendo-resource-center-container").find('[data-pendo-grow-height="true"]')[0];
                        u && BuildingBlockGuides.sizeElement(u, e)
                    }

                    function J(e) {
                        var t = getClientRect(e[0]), n = getClientRect(e[1]);
                        return intersectRect(t, n)
                    }

                    function K() {
                        if (store.getters["frames/isLeader"]()) {
                            var e = ShadowSizzle("._pendo-resource-center-badge-container");
                            if (e.length > 1 && J(e)) {
                                var t = getOffsetPosition(e[0]).width + 5,
                                    n = getOffsetPosition(e[1]).left - t < 0 ? "" : "-";
                                e[1].style.transform = "translateX(" + n + t + "px)"
                            }
                        }
                    }

                    function X(e) {
                        var t = pendo$1.Sizzle("#pendo-resource-center-container")[0];
                        if (t) {
                            var n = getScreenDimensions().width, i = dom(t), r = dom(e ? e : i.find('[id^="pendo-g-"]')[0]);
                            i.css({"max-width": "none"}), r.css({"max-width": "none"});
                            var o = parseInt(getComputedStyle_safe(i[0]).width, 10);
                            if (o > n) {
                                var a = parseInt(t.style.left, 10);
                                a = isNaN(a) ? 0 : a;
                                var s = parseInt(t.style.right, 10);
                                s = isNaN(s) ? 0 : s;
                                var d = n - s - a;
                                i.css({"max-width": d + "px"}), r.css({"max-width": d + "px"})
                            }
                            Y(i)
                        }
                    }

                    function Y(e) {
                        var t = pendo$1.Sizzle("button#pendo-a11y-list-item-button-block");
                        if (t && t.length) {
                            var n = pendo$1.Sizzle("ol._pendo-text-list-ordered")[0], i = 0, r = 0;
                            if (n) {
                                var o = getComputedStyle_safe(n);
                                r = parseInt(o.paddingLeft, 10), i = parseInt(o.paddingRight, 10)
                            }
                            var a = pendo$1.Sizzle('[id^="pendo-onboarding-guide-progress-circle"]')[0], s = 0, d = 0,
                                u = 0;
                            if (a) {
                                var c = getComputedStyle_safe(a);
                                s = parseInt(c.width, 10), d = parseInt(c.marginRight, 10), u = parseInt(c.marginLeft, 10)
                            }
                            for (var l = r + i + s + u + d, f = parseInt(getComputedStyle_safe(e[0]).width, 10), p = 0; p < t.length; p++) {
                                var g = t[p], h = dom(g);
                                h.css({"max-width": "none"});
                                var m = getComputedStyle_safe(g), v = parseInt(m.width, 10),
                                    b = f - l - (parseInt(m.paddingLeft, 10) + parseInt(m.paddingRight, 10));
                                v >= b && h.css({"max-width": b})
                            }
                        }
                    }

                    function Z(e) {
                        return get(e, "attributes.resourceCenter.moduleId")
                    }

                    function Q(e) {
                        return "IframeModule" === Z(e) && e.hasResourceCenterContent
                    }

                    function ee(e) {
                        return "SandboxModule" === Z(e) && e.hasResourceCenterContent
                    }

                    function te(e) {
                        return "IntegrationModule" === Z(e) && e.hasResourceCenterContent
                    }

                    function ne(e) {
                        return "FullyCustomModule" === Z(e)
                    }

                    function ie(e) {
                        var t = e.attributes.resourceCenter;
                        return !BuildingBlockResourceCenter.isSupportedNativeIntegration(t.integrationProvider) || BuildingBlockResourceCenter.isProviderInstalled(t.integrationProvider)
                    }

                    function re(t, r) {
                        if (ae = n(t), !ae) return q.resolve();
                        if (r.getters["frames/isShownInAnotherFrame"]()(ae.steps[0])) return q.resolve();
                        var o = BuildingBlockResourceCenter.isFullyCustom(ae);
                        if (o) return q.resolve();
                        var a = i(ae, t), s = [], d = _.indexBy(t, "id");
                        return _.each(a, function (t) {
                            var n = t.attributes.resourceCenter, i = n.moduleId;
                            if ("AnnouncementsModule" === i) {
                                var r = n.children, o = _.reduce(r, function (e, t) {
                                    var n = d[t];
                                    return n ? e.concat(n) : e
                                }, []);
                                _.each(o, function (t) {
                                    e(t) && s.push(t.steps[0].fetchContent())
                                })
                            }
                        }), q.all(s)
                    }

                    function oe(e, t) {
                        var n;
                        if ("HomeViewModule" === e[0].getAttribute("data-layout")) {
                            if (t) {
                                var i = dom('[data-pendo-module-guide-id="' + t + '"]');
                                n = i.find('button[id^="pendo-right-caret-"]')[0]
                            }
                        } else {
                            var r = dom('[id="pendo-resource-center-module-title-container"]');
                            n = r.find('button[id^="pendo-left-caret-"')[0]
                        }
                        n && n.focus()
                    }

                    return {
                        initializeResourceCenter: t,
                        findResourceCenterHomeView: n,
                        findResourceCenterModules: i,
                        replaceResourceCenterContent: r,
                        showHomeViewOrEmptyState: u,
                        showResourceCenterEmptyState: c,
                        launchIntegrationByNameAndProvider: f,
                        appendIntegrationToBodyByNameAndProvider: p,
                        attemptToPreserveIntegrationIframes: T,
                        getResourceCenter: A,
                        addNotificationBubbleToResourceCenterBadge: k,
                        addNotificationBubbleToTargetElement: P,
                        updateNotificationBubbles: G,
                        removeNotificationBubble: H,
                        updateNotificationBubbleCount: z,
                        updateNotificationBubbleOnHomeView: B,
                        updateOrCreateNotificationBubble: D,
                        hexToRgb: x,
                        doesIntegrationExist: l,
                        calculateTotalNotificationCount: O,
                        updateNotificationBubblesOnHomeView: N,
                        createNotification: M,
                        appendNotificationBubble: U,
                        hasAnnouncementBeenSeen: W,
                        clearAnnouncementUnseenInterval: a,
                        createAnnouncementUnseenInterval: s,
                        findShownResourceCenterModule: j,
                        dismissResourceCenter: V,
                        repositionResourceCenter: $,
                        repositionDoubleResourceCenterBadge: K,
                        adjustResourceCenterWidth: X,
                        setNativeIntegrationDefaults: b,
                        renderNativeIntegration: C,
                        isSupportedNativeIntegration: h,
                        handleNativeIntegrationContinuation: I,
                        isProviderInstalled: m,
                        adjustNotificationBubbleForResize: L,
                        getNotificationBubbleDefaultCss: F,
                        getModuleId: Z,
                        isIframeModule: Q,
                        isSandboxModule: ee,
                        isIntegrationModule: te,
                        isFullyCustom: ne,
                        integrationModuleHasContent: ie,
                        fetchAnnouncementGuidesContent: re,
                        setFocusForResoureCenterModule: oe
                    };
                    var ae, se, de, ue
                }(), ContentValidation = function () {
                    function e(e) {
                        if (!f()) return !0;
                        var t = l[e.guideId];
                        return t ? t.status === d : !1
                    }

                    function t(e) {
                        if (!f()) return !1;
                        var t = l[e.guideId];
                        return t ? t.status === u : !1
                    }

                    function n(e) {
                        return get(e, "attributes.resourceCenter.isTopLevel", !1)
                    }

                    function i(e) {
                        var t = BuildingBlockResourceCenter.findResourceCenterModules(e, activeGuides), n = [e].concat(t);
                        return q.all(_.map(n, r))
                    }

                    function r(e) {
                        var t = l[e.id];
                        return t || (t = {}, l[e.id] = t), t.contentPromise || (t.contentPromise = e.fetchContent()), t.contentPromise.then(function () {
                            var n = JSON.stringify(e.signature()), i = e.id + "-" + crc32(n);
                            t[i] || (t[i] = {status: c}, t.status = c);
                            var r = t[i].promise;
                            return r ? r : (r = pendoDotEvents.validateGuide(n, e).then(function () {
                                t[i].status = d, t.status = d
                            }, function (e) {
                                return t[i].status = u, t.status = u, q.reject(e)
                            }), t[i].promise = r, r)
                        })
                    }

                    function o(e) {
                        function t(e, t) {
                            var n = get(e, "guide.translationStates." + e.language + ".stepTranslations." + e.id);
                            return {
                                contentUrl: e.contentUrl,
                                contentUrlCss: e.contentUrlCss,
                                contentUrlJs: e.contentUrlJs,
                                domUrl: e.domUrl,
                                domJsonpUrl: e.domJsonpUrl,
                                domHash: n && n.domHash,
                                domJsonpHash: n && n.domJsonpHash
                            }
                        }

                        function n(e) {
                            return _.filter([["content", getHashFromContentUrl(e.contentUrl)], ["contentCss", getHashFromContentUrl(e.contentUrlCss)], ["contentJs", getHashFromContentUrl(e.contentUrlJs)], ["dom", get(e, "domHash", getHashFromContentUrl(e.domUrl))], ["domJsonp", get(e, "domJsonpHash", getHashFromContentUrl(e.domJsonpUrl))]], function (e) {
                                return e[1]
                            })
                        }

                        var i = this;
                        return this.signature = function () {
                            if (this.domUrl) {
                                if (this.guide.authoredLanguage === this.language) return n(this);
                                var e = t(i);
                                return n(e)
                            }
                            var r = [["content", this.content]], o = this.attributes && this.attributes.variables;
                            if (o) {
                                var a = g(o);
                                a.length && (a = _.sortBy(a, function (e) {
                                    return e[0]
                                }), r.push(["variables", a]))
                            }
                            return r
                        }, i
                    }

                    function a() {
                        return this.signature = function () {
                            return _.map(this.steps, function (e) {
                                return e.signature()
                            })
                        }, this
                    }

                    function s() {
                        var e = this, t = !1, n = function () {
                            return _.size(pendoDotEvents._handlers.validateLauncher) > 0 && e.data.template
                        }, i = function () {
                            var t = JSON.stringify(e.signature()), n = "launcher-" + crc32(t);
                            return pendoDotEvents.validateLauncher(t).then(function () {
                                l[n] = d
                            }, function () {
                                l[n] = u
                            })
                        }, r = function () {
                            var t = "launcher-" + crc32(e.signature());
                            return l[t]
                        };
                        return e.before("update", function () {
                            return n() && t ? !1 : void 0
                        }), e.before("render", function () {
                            if (n()) {
                                if (t) return !1;
                                var o = r();
                                if (o === u) return !1;
                                if (o !== d) return t = !0, i().then(function () {
                                    t = !1, e.render(), e.update(getActiveGuides())
                                }, function () {
                                    t = !1
                                }), !1
                            }
                        }), e.signature = function () {
                            var e = [], t = g(this.data);
                            return t.length && (t = _.chain(t).filter(function (e) {
                                return !/^contentUrl/.test(e[0])
                            }).sortBy(function (e) {
                                return e[0]
                            }).value(), e.push(["variables", t])), e
                        }, e
                    }

                    var d = "allow", u = "deny", c = "pending", l = {}, f = function () {
                        return _.size(pendoDotEvents._handlers.validateGuide) > 0
                    }, p = function (e) {
                        if (!f()) return q.resolve();
                        try {
                            return n(e) ? i(e) : r(e)
                        } catch (t) {
                            throw Events.contentValidationFail.trigger(e, t), t
                        }
                    }, g = function (e, t) {
                        var n = [];
                        return _.each(e, function (e, i) {
                            var r = i;
                            t && (r = t + "." + r), _.isObject(e) ? _.each(g(e, r), function (e) {
                                n.push(e)
                            }) : n.push([r, e])
                        }), n
                    };
                    return {
                        state: l,
                        Step: o,
                        Guide: a,
                        Launcher: s,
                        validate: p,
                        valid: e,
                        invalid: t,
                        reset: function () {
                            l = {}
                        }
                    }
                }(), SEARCHBOX_CSS_NAME = "_pendo-launcher-search-box_",
                SEARCHBOX_CSS_SELECTOR = "." + SEARCHBOX_CSS_NAME + " input", LAUNCHER_DEFAULT_WIDTH = 330,
                LAUNCHER_DEFAULT_HEIGHT = 310, launcherBadge = null, launcherTooltipDiv = null, isPreventLauncher = !1,
                launcherHash = null, launcherActiveClass = "_pendo-launcher-active_", launcherElement = null,
                defaultLauncherTemplate = function () {
                    return ""
                };
            Launcher.create = function (e) {
                return _.reduce(Launcher.behaviors, function (e, t) {
                    return t.call(e)
                }, e)
            }, Launcher.behaviors = [Wrappable, Launcher, ContentValidation.Launcher, LauncherSearch, Onboarding, WhatsNewList];
            var removeLauncher = function () {
                launcherTooltipDiv && (dom.removeNode(launcherTooltipDiv), launcherTooltipDiv = null), launcherElement && (launcherElement.dispose(), launcherElement = null), launcherBadge && (launcherBadge.dispose(), launcherBadge = null)
            }, showHideLauncher = function () {
                isLauncherOnElement() || !doesLauncherHaveGuides() && !launcherHasActiveSearch() ? hideLauncher() : showLauncher()
            }, showLauncher = function () {
                launcherBadge && launcherBadge.show()
            }, hideLauncher = function () {
                isLauncherOnElement() || collapseLauncherList(), launcherBadge && launcherBadge.hide()
            }, isLauncher = function (e) {
                return e && _.isFunction(e.shouldBeAddedToLauncher) ? e.shouldBeAddedToLauncher() : e && e.launchMethod && e.launchMethod.indexOf("launcher") >= 0
            }, isLauncherOnElement = function () {
                return pendo$1.guideWidget && pendo$1.guideWidget.data && "element" === pendo$1.guideWidget.data.launchType ? !0 : !1
            }, updateLauncher = function (e, t) {
                return pendo$1.guideWidget && _.isFunction(pendo$1.guideWidget.update) ? pendo$1.guideWidget.update(e, t) : void 0
            }, getLauncherContext = function (e) {
                var t = getMetadata();
                _.isObject(t) || (t = prepareOptions());
                var n = _.extend({
                    hidePoweredBy: !1,
                    guides: [],
                    guide: {},
                    step: {},
                    metadata: escapeStringsInObject(t)
                }, pendo$1.guideWidget);
                return n.data = _.extend({}, n.data), e && (n.guides = e), n
            }, buildLauncherItem = function (e) {
                var t = document.createElement("div");
                dom(t).addClass("_pendo-launcher-item_"), dom(t).attr("id", "launcher-" + e.id);
                var n = document.createElement("a");
                return n.href = "#", n.innerHTML = e.name, t.appendChild(n), t
            }, addGuideToLauncher = _.compose(showHideLauncher, function (e, t) {
                if (isLauncher(e)) {
                    var n = ShadowSizzle("._pendo-launcher_ ._pendo-launcher-guide-listing_")[0];
                    if (n) {
                        var i, r = ShadowSizzle("#launcher-" + e.id);
                        if (i = r.length ? r[0] : buildLauncherItem(e), r = r.length > 0, _.isNumber(t)) {
                            var o = ShadowSizzle("._pendo-launcher-item_");
                            o[t] ? i.id != o[t].id && n.insertBefore(i, o[t]) : n.appendChild(i)
                        } else n.appendChild(i)
                    }
                }
            }), isLauncherAvailable = function () {
                return !!launcherTooltipDiv && !isPreventLauncher
            }, isLauncherVisible = function () {
                var e = dom(launcherTooltipDiv);
                return e.hasClass(launcherActiveClass)
            }, doesLauncherHaveGuides = function () {
                return ShadowSizzle("._pendo-launcher-item_").length > 0
            }, collapseLauncherList = function () {
                var e = dom(launcherTooltipDiv);
                e.hasClass(launcherActiveClass) && (e.removeClass(launcherActiveClass), launcherBadge && launcherBadge.setActive(!1))
            }, expandLauncherList = function () {
                var e = dom(launcherTooltipDiv);
                e.hasClass(launcherActiveClass) || (e.addClass(launcherActiveClass), launcherBadge && launcherBadge.setActive(!0))
            }, toggleLauncher = function () {
                isLauncherAvailable() && (isLauncherVisible() ? collapseLauncherList() : expandLauncherList())
            }, initLauncher = function () {
                try {
                    var e = pendo$1.guideWidget || {}, t = e.data || {},
                        n = t.device || {desktop: !0, mobile: !1, iframe: !1};
                    if (removeLauncher(), !isMobileUserAgent() && !n.desktop) return;
                    if (isMobileUserAgent() && !n.mobile) return;
                    if (detectMaster() && !n.iframe) return;
                    e.enabled && (createLauncher(t), hideLauncher())
                } catch (i) {
                    writeException(i, "ERROR while initializing launcher")
                }
            }, debugging;
            _.extend(debug, debugging);
            var activeContexts, logOverride, MAX_HISTORY = 100, logHistory = [], getDefaultLogOverride = function (e) {
                var t = agentStorage.read("log-enabled", !0);
                return null !== t ? "true" == t : !_.contains(["prod", "prod-eu", "prod-us1", "gov-prod", "rc"], e)
            }, getDefaultActiveContexts = function () {
                var e = agentStorage.read("active-contexts", !0);
                return e ? e.split(",") : []
            }, enableLogging = function () {
                return canWeLog() ? logOverride ? "logging already enabled" : (agentStorage.write("log-enabled", "true", null, !0), logOverride = !0, "logging enabled") : "logging unavailable"
            }, disableLogging = function () {
                return logOverride ? (agentStorage.write("log-enabled", "false", null, !0), logOverride = !1, "logging disabled") : "logging already disabled"
            }, createContexts = function (e, t) {
                return _.compact([].concat(e, t))
            }, canWeLog = function (e) {
                return e = e || "log", "undefined" != typeof console && _.isFunction(console[e])
            }, shouldWeLog = function (e) {
                return e = createContexts(e), activeContexts.length > 0 ? _.intersection(activeContexts, e).length > 0 : !!logOverride || !!isDebuggingEnabled(!0)
            }, log = function (e, t) {
                t = createContexts(t, _.tail(arguments, 2)), canWeLog() && (shouldWeLog(t) && doConsoleLog(e), addToLogHistory(e, t))
            }, addToLogHistory = function (e, t) {
                _.contains(t, "debug") || (logHistory.length == MAX_HISTORY && logHistory.shift(), logHistory.push([e, t]))
            }, showLogHistory = function (e) {
                e = createContexts(e), _.each(_.map(_.filter(logHistory, function (t) {
                    return 0 === e.length || _.intersection(e, t[1]).length > 0
                }), function (e) {
                    return e[0]
                }), function (e) {
                    doConsoleLog(e, "[Pendo-History] ")
                })
            }, getLoggedContexts = function () {
                return _.union.apply(_, _.map(logHistory, function (e) {
                    return e[1]
                }))
            }, getActiveContexts = function () {
                return activeContexts
            }, setActiveContexts = function (e) {
                activeContexts = createContexts(e), agentStorage.write("active-contexts", activeContexts.join(","), null, !0)
            }, doConsoleLog = function (e, t) {
                if (canWeLog()) if (t = t || "[Agent] ", e && e.length) {
                    var n = e.length > 1e3 ? e.length - 1e3 : 0;
                    n && (t += "..."), console.log(t + e.substring(n))
                } else console.log(t + e)
            };
            log.init = initLogging, log.enableLogging = enableLogging, log.disableLogging = disableLogging, log.getActiveContexts = getActiveContexts, log.setActiveContexts = setActiveContexts, log.showLogHistory = showLogHistory, log.getLoggedContexts = getLoggedContexts;
            var pSetTimeout = window.setTimeout, isElectron = function () {
                    return window && window.process && window.process.versions && window.process.versions.electron
                }, electronResourcesPath = function () {
                    return window.process.resourcesPath || ""
                }, electronUserDirectory = function () {
                    return window.process.env.PWD || ""
                }, electronUserHomeDirectory = function () {
                    return window.process.env.HOME || ""
                }, electronAppName = function () {
                    return window.process.env.npm_package_name || ""
                }, useLegacyGetHref = function () {
                    return ConfigReader.get("annotateUrl") || shouldIgnoreHashRouting() || ConfigReader.get("sanitizeUrl") || ConfigReader.get(URL_WHITELIST_KEY) || ConfigReader.get("xhrWhitelist");
                }, getWindowLocation = function () {
                    return shouldIgnoreHashRouting() ? {
                        href: getHrefWithoutHash(location.href),
                        origin: location.origin
                    } : store.getters["location/url"]()
                }, getBrowserLocationSafe = function () {
                    return new URL$1(window.location.href)
                }, getHref = function () {
                    if (useLegacyGetHref()) {
                        var e = getBrowserLocationSafe();
                        if (shouldIgnoreHashRouting() && (e.href = getHrefWithoutHash(e.href)), isElectron()) {
                            var t = pendoDotUrl.electronResourcesPath(), n = pendoDotUrl.electronUserDirectory(),
                                i = pendoDotUrl.electronAppName(), r = "https://" + e.href.replace(t, i);
                            return r = r.replace(e.origin + n, i), r = r.replace(pendoDotUrl.electronUserHomeDirectory(), ""), r = r.replace("file:///", "")
                        }
                        return annotateUrl(e.href)
                    }
                    return store.getters["location/href"]()
                }, getHrefWithoutHash = function (e) {
                    return e.match(/(.+?)(?:#|$)/)[1]
                }, shouldIgnoreHashRouting = function () {
                    return ConfigReader.get("ignoreHashRouting") === !0
                }, pollFns = [], pollTimeout, addPollFn = function (e) {
                    return isUndefined(pollTimeout) && startPoller(100, pSetTimeout), pollFns.push(e), e
                }, url = function (e) {
                    var t;
                    try {
                        t = getHref()
                    } catch (n) {
                    }
                    return t
                }, urlChangeListeners = [], urlChangeInit = !1, lastBrowserUrl = null, onUrlChange = function (e) {
                    if (log("Initializing Pendo URL Watcher"), !urlChangeInit) {
                        if (sniffer.supportsHistoryApi()) {
                            var t = window.history;
                            _.each(["pushState", "replaceState"], function (e) {
                                t[e] = _.wrap(t[e], function (e) {
                                    var n = e.apply(t, _.toArray(arguments).slice(1));
                                    return getZoneSafeMethod("setTimeout")(fireUrlChange, 0), n
                                })
                            }), attachEventInternal(window, "popstate", fireUrlChange)
                        }
                        sniffer.supportsHashChange() && attachEventInternal(window, "hashchange", fireUrlChange), sniffer.supportsHistoryApi() && sniffer.supportsHashChange() || addPollFn(fireUrlChange), urlChangeInit = !0
                    }
                    return urlChangeListeners.push(e), e
                }, clearList = function () {
                    urlChangeListeners = []
                }, getProtocol = function () {
                    return "https:"
                }, URL_WHITELIST_KEY = "queryStringWhitelist", externalizeURL = function (e, t, n) {
                    var i = n || ConfigReader.get(URL_WHITELIST_KEY);
                    _.isFunction(i) && (i = i());
                    var r = adjustUrl(e, t, i, !1);
                    return r = sanitizeUrl(r)
                }, adjustQueryStringParams = function (e, t, n) {
                    if (n && _.contains(t, "*")) return "";
                    var i = queryStringToObject(e);
                    return i = n ? _.omit(i, t) : _.pick(i, t), objectToQueryString(i)
                }, queryStringToObject = function (e) {
                    var t = e.split("&");
                    return _.reduce(t, function (e, t) {
                        return t = t.split("="), e[t[0]] = t[1], e
                    }, {})
                }, objectToQueryString = function (e) {
                    return _.reduce(e, function (e, t, n) {
                        var i = n;
                        return t && (i += "=" + t), e && (e += "&"), e + i
                    }, "")
                }, pendoDotUrl = {
                    watch: onUrlChange,
                    get: url,
                    externalizeURL: externalizeURL,
                    getWindowLocation: getWindowLocation,
                    clear: clearList,
                    isElectron: isElectron,
                    electronUserDirectory: electronUserDirectory,
                    electronAppName: electronAppName,
                    electronUserHomeDirectory: electronUserHomeDirectory,
                    electronResourcesPath: electronResourcesPath
                },
                loadGlobalScriptOnce = _.wrap(_.once(_.wrap(loadGlobalScript, validateGlobalScript)), ignoreEmptyGlobalScript),
                REMOVE_FRAME_ACTION = "frames/removeFrame";
            _.extend(TopFrameRelay.prototype, {
                init: function (e, t, n) {
                    this._store = e, this._window = t, this._singletonMessageHandler = n, this._ports = {}, this._isTop = this._window == this._window.top, this._listeners = [], this._targetOrigin = n.targetOrigin(), this._singletonMessageHandler.addEventListener(_.bind(this._controlMessageHandler, this));
                    var i = getInstallType() === NATIVE_INSTALL_TYPE, r = !!t.__pendoExtensions, o = i && r;
                    this._connectedToExtension = o, (!this._isTop || this._connectedToExtension) && this._connectToTop(250, 21)
                }, _controlMessageHandler: function (e) {
                    var t = tryParseJson(e.data);
                    if (t) {
                        if ("pendo::connect" === t.action) {
                            var n = this._createMessagePort({
                                ports: e.ports,
                                destination: e.source,
                                destinationId: t.frameId
                            });
                            this._ports[t.frameId] = n, n.addEventListener("message", _.bind(this._topMessageHandler, this, n)), n.start(), n.postMessage({action: "pendo::connectSuccess"})
                        }
                        t.action === REMOVE_FRAME_ACTION && this._topMessageHandler(null, e)
                    }
                }, _topMessageHandler: function (e, t) {
                    t.data && (/^pendo::/.test(t.data.action) || this._closed || (t.data.action === REMOVE_FRAME_ACTION && delete this._ports[t.data.frameId], _.each(this._ports, function (n) {
                        e !== n && n.postMessage(t.data)
                    }), e !== this && _.each(this._listeners, function (e) {
                        e(t)
                    })))
                }, _openChannel: function () {
                    this._channel = this._createMessageChannel({
                        destination: this._window.top,
                        sourceId: this._store.state.frames.frameId
                    }), this._port = this._channel.port1, this._boundFrameConnectHandler = _.bind(this._frameConnectHandler, this), this._port.addEventListener("message", this._boundFrameConnectHandler), this._port.start()
                }, _closeChannel: function () {
                    this._port && _.isFunction(this._port.close) && (this._port.close(), this._port = null, this._channel = null)
                }, _connectToTop: function (e, t) {
                    this._closeChannel(), this._openChannel();
                    var n = [];
                    this._channel.port2 && n.push(this._channel.port2), this._window.top.postMessage(JSON.stringify({
                        action: "pendo::connect",
                        frameId: this._store.state.frames.frameId
                    }), this._targetOrigin, n), setTimeout(_.bind(function () {
                        this._connected || (this._closeChannel(), 0 === t ? this._store.commit("frames/setConnectFailed") : t > 0 && this._connectToTop(Math.min(2 * e, 1e4), t - 1))
                    }, this), e)
                }, _frameConnectHandler: function (e) {
                    e.data && "pendo::connectSuccess" === e.data.action && (this._connected = !0, this._port.removeEventListener("message", this._boundFrameConnectHandler), _.each(this._listeners, function (e) {
                        this._port.addEventListener("message", e)
                    }, this), this._listeners.length = 0, this._store.dispatch("frames/join"))
                }, _createMessageChannel: function (e) {
                    if (_.isFunction(this._window.MessageChannel)) return new this._window.MessageChannel;
                    var t = this._createMessagePort(e);
                    return {port1: t}
                }, _createMessagePort: function (e) {
                    function t(e, t) {
                        return e ? function (n) {
                            get(n, "data._sourceFrameId") == e && t.apply(this, arguments)
                        } : t
                    }

                    function n(e) {
                        return function (t) {
                            if (_.isString(t.data)) {
                                var n = _.pick(t, "type", "origin", "source", "ports", "lastEventId");
                                n.data = tryParseJson(t.data), e.call(this, n)
                            } else e.apply(this, arguments)
                        }
                    }

                    if (e.ports && e.ports.length) return e.ports[0];
                    var i = e.destination, r = e.destinationId, o = e.sourceId, a = this._singletonMessageHandler,
                        s = [], d = [], u = this._targetOrigin;
                    return {
                        start: _.noop, close: function () {
                            this._closed = !0, _.each(s, function (e) {
                                this.removeEventListener("message", e)
                            }, this), s.length = 0, d.length = 0
                        }, addEventListener: function (e, i) {
                            if ("message" === e) {
                                var o = n(t(r, i));
                                s.push(i), d.push(o), a.addEventListener(o)
                            }
                        }, removeEventListener: function (e, t) {
                            var n = s.indexOf(t);
                            0 > n || (a.removeEventListener(d[n]), d.splice(n, 1), s.splice(n, 1))
                        }, postMessage: function (e) {
                            if (!this._closed) {
                                var t = JSON.stringify(_.extend({_sourceFrameId: o}, e));
                                i.postMessage(t, u)
                            }
                        }
                    }
                }, addEventListener: function (e, t) {
                    "message" === e && (this._isTop && !this._connectedToExtension ? this._listeners.push(t) : this._connected ? this._port.addEventListener(e, t) : this._listeners.push(t))
                }, postMessage: function (e) {
                    this._closed || (this._isTop && !this._connectedToExtension ? this._topMessageHandler(this, {data: e}) : this._port && this._port.postMessage(e), e.action === REMOVE_FRAME_ACTION && this._window.top.postMessage(e, this._targetOrigin))
                }, close: function () {
                    this._closed = !0, this._listeners.length = 0, _.each(this._ports, function (e) {
                        e.close()
                    }), this._ports = {}, this._port && _.isFunction(this._port.close) && this._port.close()
                }
            });
            var SingletonMessageHandler = createSingletonMessageHandler(window, isTrustedOrigin2), guideEvtCache = [],
                activeElements = [], detachGuideEventHandlers, activeGuides = [],
                controlGuideLogMessage = "Guide was not shown because this visitor is in a control group of an active experiment for the guide",
                Tombstone = function () {
                    var e = [];
                    return {
                        addGuide: function (t) {
                            return e.push(t), setActiveGuides(_.difference(getActiveGuides(), e)), e
                        }
                    }
                }(), DEFAULT_GUIDE_SEEN_TIMEOUT_LENGTH = 1e4, GUIDE_CSS_NAME = "_pendo-guide_",
                GUIDE_ID_PREFIX = "_pendo_g_", seenTime = 0, isGuideShown = function () {
                    return _.any(getActiveGuides(), function (e) {
                        return e.isShown()
                    })
                }, addCloseButton = function (e, t) {
                    var n = dom("._pendo-close-guide_", e);
                    if (n.length) return n[0];
                    n = dom("<button>").attr("id", "_pendo-close-guide_").attr("aria-label", "close").addClass("_pendo-close-guide_").html("&times;"), isBrowserInQuirksmode() ? msie > 9 && n.css({top: 3}) : 8 === msie ? n.css({
                        top: 9,
                        right: 2
                    }) : 9 === msie ? n.css({right: 2, top: 3}) : msie > 9 && n.css({top: 3});
                    var i = dom("._pendo-guide-container_", e)[0] || e;
                    return n.appendTo(i), n[0].onclick = function () {
                        t()
                    }, n[0]
                }, findAllItemsInGuidelistBy = function (e) {
                    return _.reduce(getActiveGuides(), function (t, n) {
                        return e(n) && t.push(n), t
                    }, [])
                }, findGuideBy = function (e, t) {
                    return _.find(getActiveGuides(), function (n) {
                        return get(n, e) === t
                    }) || null
                }, findGuideById = function (e) {
                    return findGuideBy("id", e)
                }, findGuideByName = function (e) {
                    return findGuideBy("name", e)
                }, findStepInGuide = function (e, t) {
                    return e && e.id ? (e = findGuideById(e.id), e.findStepById(t)) : null
                }, _updateGuideStepStatus = function (e, t, n, i) {
                    var r = findStepInGuide(findGuideById(e), t);
                    r && (r.seenState = n, r.lastSeenAt = i)
                }, getStepIdFromElement = function (e) {
                    for (var t = new RegExp("^" + GUIDE_ID_PREFIX); e;) {
                        if (_.isString(e.id) && t.test(e.id)) return e.id.replace(t, "");
                        e = e.parentNode
                    }
                    return null
                }, isStepType = function (e) {
                    return e && e.guideId
                }, findStepForGuideEvent = function (e, t) {
                    if (isStepType(e) && (t = e, e = null), GuideStep.isGuideStep(t)) return t;
                    if (t) {
                        var n = findGuideById(t.guideId);
                        return n && n.findStepById(t.id)
                    }
                    var i = _.find(getActiveGuides(), function (e) {
                        return e.isShown()
                    });
                    if (i) {
                        var r;
                        return e && (r = getStepIdFromElement(e.target || e.srcElement || e)), r ? (t = i.findStepById(r), t || writeMessage("findStepForGuideEvent: step with id " + r)) : (t = _.find(i.steps, function (e) {
                            return e.isShown()
                        }), t || writeMessage("findStepForGuideEvent: no step shown")), t
                    }
                }, removeGuideEventListeners = function (e) {
                    var t = "element" === e.advanceMethod ? "click" : "mouseover", n = getElementForGuideStep(e);
                    "tooltip" === e.type && _.isFunction(e.teardownElementEvent) ? e.teardownElementEvent(n, t) : detachEvent(n, t, onGuideAdvanced, !0)
                }, setFocusToActivationElement = function (e) {
                    if (!pendo$1.designer && e && "building-block" === get(e, "attributes.type", "")) {
                        var t = e.steps[0], n = get(e, "launchMethod", "").split("-"), i = _.contains(n, "dom"),
                            r = _.contains(n, "badge");
                        if ("badge" === t.seenReason && r) {
                            var o = dom("#_pendo-badge_" + t.id), a = o.find("input");
                            if (a.length < 1) return;
                            a[0].focus()
                        }
                        if ("dom" === t.seenReason && i) {
                            var s = get(e, "attributes.activation.selector", ""), d = dom(s);
                            if (d.length < 1) return;
                            d[0].focus()
                        }
                    }
                }, onGuideDismissed = function (e, t) {
                    var n = null;
                    if (e && e instanceof Object && e.until && (n = e.until), t = findStepForGuideEvent(e, t), !t || !t.id) return void stopGuides();
                    if (!checkLockedStep(t)) {
                        if (n) return void t.hide({stayHidden: !0});
                        removeGuideEventListeners(t);
                        var i = t.id, r = t.guideId, o = findGuideById(r), a = _.first(o && o.steps), s = a && a.seenReason,
                            d = o && o.language;
                        dismissedGuide(r, i, get_visitor_id(), s, d);
                        var u = getNow();
                        _updateGuideStepStatus(r, i, "dismissed", u);
                        var c = _.isFunction(t.getGuide) && t.getGuide(), l = c && c.attributes && c.attributes.doNotResume;
                        l || writeLastStepSeenCache({
                            guideId: r,
                            guideStepId: i,
                            time: u,
                            state: "dismissed",
                            seenReason: s,
                            visitorId: get_visitor_id()
                        }), ("auto" === s || "repeatGuide" === s) && writeThrottlingStateCache(u, THROTTLING_STATE.DISMISSED), t.hide(), setFocusToActivationElement(c), isGuideShown() || (stopGuides(), startGuides())
                    }
                }, onGuideSnoozed = function (e, t, n) {
                    if (log("onGuideSnoozed called", "guides"), t = findStepForGuideEvent(e, t), !t) return log("missing step.  can't snooze", ["guides", "error"]), stopGuides(), void writeMessage("onGuideSnoozed: missing step");
                    if (n || (n = 864e5, log("no snooze duration provided, defaulting to 1 day")), !checkLockedStep(t)) {
                        removeGuideEventListeners(t);
                        var i = t.id, r = t.guideId, o = get_visitor_id(), a = findGuideById(r), s = a && a.language,
                            d = _.first(a && a.steps), u = d && d.seenReason, c = getNow();
                        log("snoozing guide for " + n + " ms");
                        var l = c + n;
                        t.snoozeEndTime = l, snoozedGuide(r, i, o, u, s, n), _updateGuideStepStatus(r, i, "snoozed", c);
                        var f = a && a.attributes && a.attributes.doNotResume;
                        f || writeLastStepSeenCache({
                            guideId: r,
                            guideStepId: i,
                            time: c,
                            state: "snoozed",
                            seenReason: u,
                            visitorId: get_visitor_id(),
                            snoozeEndTime: l
                        }), ("auto" === u || "repeatGuide" === u) && writeThrottlingStateCache(c, THROTTLING_STATE.SNOOZED), t.hide(), setFocusToActivationElement(a), isGuideShown() || (stopGuides(), startGuides())
                    }
                }, cleanupActiveGuide = function () {
                    var e = getActiveGuide();
                    e && _.each(e.steps, function (e) {
                        var t = "element" == e.advanceMethod ? "click" : "mouseover", n = getElementForGuideStep(e);
                        "tooltip" === e.type && _.isFunction(e.teardownElementEvent) ? e.teardownElementEvent(n, t) : detachEvent(n, t, onGuideAdvanced, !0)
                    })
                }, goToStep = function (e) {
                    var t = e && e.step;
                    if (t || (t = findStepForGuideEvent(e)), !t) return void log("[goToStep] missing current step", ["guides", "error"]);
                    var n = e && e.params, i = _.find(n, function (e) {
                        return "goToStepId" === e.name
                    }), r = i && i.value;
                    if (e && e.destinationStepId && (r = e.destinationStepId), !r) return void log("[goToStep] missing step id to go to", ["guides", "error"]);
                    if (r === t.id) return void log("[goToStep] step id matches the current step", ["guides", "error"]);
                    var o = findGuideById(t.guideId), a = _.find(o.steps, function (e) {
                        return e.id === r
                    });
                    if (!a) return void log("[goToStep] guide has no step matching the step id", ["guides", "error"]);
                    var s = _.indexOf(o.steps, a), d = _.indexOf(o.steps, t);
                    e.steps = Math.abs(s - d), e.action = e.action || "goToStep", e.destinationStepId = r, s > d ? onGuideAdvanced(e, t, !1) : onGuidePrevious(e, t)
                }, onGuideAdvanced = function (e, t, n) {
                    if (cleanupActiveGuide(), 1 === arguments.length && isStepType(e)) {
                        var i = findGuideBy(e.guideId), r = findStepForGuideEvent();
                        i && r && _.first(i.steps).id === r.id && _.last(i.steps).id === e.id && (log("Cannot skip to last step from first step"), e = null)
                    }
                    if (log("onGuideAdvanced called", "guides"), t = findStepForGuideEvent(e, t), !t) return log("missing step.  can't advance", ["guides", "error"]), stopGuides(), void writeMessage("onGuideAdvanced: missing step");
                    if (!checkLockedStep(t)) {
                        var o = e && e.action && "goToStep" === e.action || !1, a = findGuideById(t.guideId),
                            s = a && a.language, d = a && a.steps && _.indexOf(a.steps, t);
                        if (e && _.isNumber(e.steps) && e.steps > 1 && !o) {
                            var u = e.steps - 1, c = d + u;
                            c >= a.steps.length && (c = a.steps.length - 1);
                            var l = c;
                            e.skip === !0 && (l = d + 1);
                            for (var f = d; l > f; ++f) {
                                t = a.steps[f], advancedGuide(a.id, t.id, get_visitor_id(), t.seenReason, s, f !== d);
                                var p = getNow();
                                writeLastStepSeenCache({
                                    guideId: t.guideId,
                                    guideStepId: t.id,
                                    time: p,
                                    state: "advanced",
                                    seenReason: t.seenReason,
                                    visitorId: get_visitor_id()
                                }), _updateGuideStepStatus(a.id, t.id, "advanced", p)
                            }
                            return onGuideAdvanced(a.steps[c], t, !0)
                        }
                        var g = t.id, h = t.guideId, m = _.first(a && a.steps), v = m && m.seenReason,
                            b = e && e.destinationStepId;
                        if (!b) {
                            var y = e && _.isNumber(e.steps) && e.steps > 1 ? e.steps : 1,
                                S = _.isNumber(d) && a && a.steps && a.steps[d + y];
                            b = S && S.id || null
                        }
                        b || log("missing destination step id"), log("advancing guide"), advancedGuide(h, g, get_visitor_id(), v, s, n, b), log("update guide status");
                        var w = (new Date).getTime();
                        _updateGuideStepStatus(h, g, "advanced", w);
                        var E = _.isFunction(t.getGuide) && t.getGuide(), C = E && E.attributes && E.attributes.doNotResume;
                        C || writeLastStepSeenCache({
                            guideId: h,
                            guideStepId: g,
                            time: w,
                            state: "advanced",
                            seenReason: v,
                            visitorId: get_visitor_id(),
                            destinationStepId: b
                        }), !m || "auto" !== m.seenReason && "repeatGuide" !== m.seenReason || writeThrottlingStateCache(w, THROTTLING_STATE.ADVANCED), log("stop guide"), stopGuides(), log("start guides"), startGuides()
                    }
                }, onGuidePrevious = function (e, t) {
                    if (t = findStepForGuideEvent(e, t), !t) return stopGuides(), void writeMessage("onGuidePrevious: missing step");
                    var n = t.guideId, i = findGuideById(n), r = e && e.action && "goToStep" === e.action || !1,
                        o = _.indexOf(i.steps, t);
                    if (0 !== o) {
                        var a = "element" == t.advanceMethod ? "click" : "mouseover", s = getElementForGuideStep(t);
                        "tooltip" === t.type && _.isFunction(t.teardownElementEvent) ? t.teardownElementEvent(s, a) : detachEvent(s, a, onGuideAdvanced, !0);
                        var d = e && _.isNumber(e.steps) ? e.steps : 1, u = _.first(i && i.steps), c = o - d,
                            l = c >= 0 ? i.steps[c] : u, f = u && u.seenReason, p = i && i.language, g = l.id;
                        r && e && e.destinationStepId && (g = e.destinationStepId), g || log("missing destination step id"), log("advancing guide"), advancedGuide(n, t.id, get_visitor_id(), f, p, !1, g), log("update guide status");
                        var h = (new Date).getTime();
                        _updateGuideStepStatus(t.guideId, t.id, "advanced", h);
                        var m = _.isFunction(t.getGuide) && t.getGuide(), v = m && m.attributes && m.attributes.doNotResume;
                        v || writeLastStepSeenCache({
                            guideId: t.guideId,
                            guideStepId: t.id,
                            time: h,
                            state: "advanced",
                            seenReason: f,
                            visitorId: get_visitor_id(),
                            destinationStepId: g
                        }), stopGuides(), startGuides()
                    }
                }, _addCredits = function (e) {
                    if (!dom("._pendo-credits_", e).length) {
                        var t = dom("<div>").addClass("_pendo-credits_").html('<img src="' + getAssetHost() + '/img/tiny-logo.png" />').css({
                            bottom: 0,
                            right: pendo$1.TOOLTIP_ARROW_SIZE
                        });
                        activeElements.push(t[0]), t.appendTo(e)
                    }
                }, getElementForGuideStep = function (e) {
                    if (!e) return log("Can't get element for null step"), null;
                    var t = e.getGuide(), n = "building-block" === get(t, "attributes.type"), i = n || !isWalkthrough(t);
                    return !e.overrideElement && i && (e.overrideElement = findBadgeForStep(e)), e.targetElement = getElementForTargeting(e), e.overrideElement ? e.overrideElement : e.targetElement
                }, getElementForTargeting = function (e) {
                    try {
                        var t, n = e.elementPathRule || null;
                        return t = n ? ShadowSizzle(n) : [getBody()], 0 === t.length ? null : _.first(t)
                    } catch (i) {
                        log("Invalid selector expression")
                    }
                }, canStepBeRendered = function (e) {
                    if (isDismissedUntilReload(e)) return !1;
                    if (!e.elementPathRule && ("lightbox" === e.type || "whatsnew" === e.type)) return !0;
                    var t = getElementForGuideStep(e), n = e.targetElement;
                    if (n && e.elementContainsRulesList && !doesElementMatchContainsRules(n, e.elementContainsRulesList)) return !1;
                    var i = "tooltip" === e.type || BuildingBlockGuides.isBuildingBlockGuideRelativeToElement(e),
                        r = isElementVisible(t);
                    return i ? e.hasBeenScrolledTo ? r : r || wouldBeVisibleAfterAutoScroll(t) : r
                }, getStepDivId = function (e) {
                    return GUIDE_ID_PREFIX + e.id
                }, setupWatchOnElement = function (e) {
                    var t = e.element, n = _.first(ShadowSizzle("#" + getStepDivId(e)));
                    if (t && n) {
                        var i = isElementVisible(t);
                        if (i || dom.hasClass(n, "mouseover")) return void setTimeout(function () {
                            setupWatchOnElement(e)
                        }, DEFAULT_TIMER_LENGTH);
                        e.hide ? (e.hide(), isGuideShown() || (stopGuides(), startGuides())) : (stopGuides(), startGuides())
                    } else !t && n && (e.hide ? (e.hide(), isGuideShown() || (stopGuides(), startGuides())) : (stopGuides(), startGuides()))
                }, showPreview = function () {
                    return !1
                }, findBadgeForStep = function (e) {
                    var t = badgesShown[e.guideId];
                    if (t) {
                        var n = t.element();
                        if (isInDocument(n) && n.id === "_pendo-badge_" + e.id) return n
                    }
                }, isGuideRCType = _.partial(get, _, "attributes.resourceCenter"), showGuide = function (e, t) {
                    if (!e || !e.guideId) return !1;
                    var n = findGuideById(e.guideId);
                    if (!n) return !1;
                    if (isGuideShown()) {
                        var i = findStepForGuideEvent();
                        if (removeGuideEventListeners(i), isGuideRCType(n)) {
                            var r = findAllItemsInGuidelistBy(isGuideRCType), o = function (e) {
                                return e.id !== n.id
                            }, a = _.filter(r, o);
                            a.length && store.dispatch("frames/hideGuides", _.pluck(a, "id"))
                        } else hideGuides(), store.dispatch("frames/hideGuides")
                    }
                    return n.launch(t), n.isShown()
                }, controlledGuide = function (e, t, n, i, r, o) {
                    var a = createGuideEvent({
                        type: "guideNotSeen",
                        guideId: e,
                        stepId: t,
                        visitorId: n,
                        reason: i,
                        language: r
                    });
                    o && _.extend(a.props, {step_poll_types: o}), stageGuideEvent(a)
                }, seenGuide = function (e, t, n, i, r, o) {
                    i || (writeException(new Error("seenGuide called without seen reason"), "pendo.io guideSeen exception", {
                        guideId: e,
                        stepId: t
                    }), i = getDefaultSeenReason(findGuideById(e)));
                    var a = createGuideEvent({
                        type: "guideSeen",
                        guideId: e,
                        stepId: t,
                        visitorId: n,
                        reason: i,
                        language: r
                    });
                    _.extend(a.props, o), stageGuideEvent(a), writeLastStepSeenCache({
                        guideId: e,
                        guideStepId: t,
                        time: getNow(),
                        state: "active",
                        seenReason: i,
                        visitorId: get_visitor_id()
                    }), Events.guideSeen.trigger(a)
                }, THROTTLING_STATE = {
                    DISMISSED: "latestDismissedAutoAt",
                    SNOOZED: "latestSnoozedAutoAt",
                    ADVANCED: "finalAdvancedAutoAt"
                }, stagedEventsTimer = null, startStagedTimer = function (e) {
                    window.clearTimeout(stagedEventsTimer), stagedEventsTimer = window.setTimeout(processGuideEventCache, e)
                }, stageGuideEvent = function (e, t, n) {
                    t = t || 500, e.props.duration = n ? 0 : (new Date).getTime() - getSeenTime(), guideEventQueue.push(e), startStagedTimer(t)
                }, getNextStepInMultistep = function (e, t) {
                    if ("dismissed" === e.state) return null;
                    var n = findGuideById(e.guideId);
                    return n.nextStep(e, t || getNormalizedUrl())
                }, getNormalizedUrl = function () {
                    return pendo$1.normalizedUrl || sortSearch(pendoDotUrl.get())
                }, sortSearch = function (e) {
                    try {
                        var t = new URL$1(e), n = _.tail(t.search).join(""), i = n.split("&");
                        return t.search = i.sort().join("&"), t.href
                    } catch (r) {
                        return logError("Invalid URL provided to normalize"), e
                    }
                }, isBadge = function (e) {
                    return e && e.launchMethod && e.launchMethod.indexOf("badge") >= 0
                }, isWalkthrough = function (e) {
                    return e && e.isMultiStep && !(e.attributes && "group" === e.attributes.type)
                }, testUrlForStep = function (e, t) {
                    if (!doesExist(e)) return !0;
                    var n = new RegExp(e);
                    return n.test(t)
                }, showGuideByName = function (e, t) {
                    var n = findGuideByName(e);
                    if (n) {
                        var i = showGuide(_.first(n.steps), t || "api");
                        return !i && n.control && log(controlGuideLogMessage), i
                    }
                    return !1
                }, showGuideById = function (e, t) {
                    var n = findGuideById(e);
                    if (n) {
                        var i = showGuide(_.first(n.steps), t || "api");
                        return !i && n.control && log(controlGuideLogMessage), i
                    }
                    return !1
                }, isMobileUserAgent = function () {
                    return isPreviewing() && getScreenDimensions().width <= 320 ? !0 : /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(getUA())
                }, isPreviewing = function () {
                    return "undefined" != typeof selmo && !!selmo.isPreviewing
                }, resetPendoUI = function () {
                    stopGuides(), clearLoopTimer(), BuildingBlockResourceCenter.removeNotificationBubble(), removeAllBadges(), DOMActivation.reset(), hideLauncher(), flushLater()
                }, resetPendoContent = function () {
                    pendo$1.guides && (activeGuides.length = 0, pendo$1.guides.length = 0), clearMode()
                }, loadGuideJs = function () {
                    var e, t;
                    return function (n, i, r) {
                        var o = ConfigReader.get("trainingPartner"), a = _.uniqueId();
                        if (e = a, !isMetadataBlocked()) {
                            var s = getMetadata();
                            s ? (log("sending metadata: " + JSON.stringify(s), ["guides", "metadata"]), i.metadata = s) : log("no metadata to send", ["guides", "metadata"])
                        }
                        var d = compress(i), u = {jzb: d, v: VERSION, ct: (new Date).getTime()};
                        o && i.accountId && "ACCOUNT-UNIQUE-ID" !== i.accountId && (u.acc = base64EncodeString(i.accountId)), isDebuggingEnabled(!0) && (u.debug = !0);
                        var c = previewGuideLoaderWrapper(ScriptGuideLoader, pendoLocalStorage),
                            l = buildBaseDataUrl(c.endpoint(), n, u), f = 1e3;
                        l.length > f && (debug("Max length exceeded for a guide.js request"), i.url = limitURLSize(f, i.url), u.jzb = compress(i), l = buildBaseDataUrl(c.endpoint(), n, u));
                        var p, g = function () {
                            a === e ? (r.apply(this, arguments), t = backupObjectState(pendo$1, ["guides", "normalizedUrl", "lastGuideStepSeen", "guideWidget", "throttling", "autoOrdering", "olark", "globalJsUrl", "segmentFlags", "latestDismissedAutoAt", "finalAdvancedAutoAt"])) : _.isFunction(t) && t()
                        }, h = getJwtInfoCopy();
                        if (l.length > URL_MAX_LENGTH || !_.isEmpty(h)) {
                            delete u.jzb, l = buildBaseDataUrl("guide.json", n, u);
                            var m = _.extend({events: d}, h);
                            p = postLoadGuideJs(l, m, g)
                        } else p = c.load(l, g);
                        return p["catch"](function (e) {
                            return 451 === e.status && (stopGuides(), lockEvents(), log("not tracking visitor due to 451 response")), sendPreviewModeFailureMessage(document, e), q.reject(e)
                        })
                    }
                }(), shouldLoadGlobalCSS = function () {
                    return !ConfigReader.get("disableGlobalCSS")
                }, loadGuides = function (e, t, n, i) {
                    var r, o = q.defer(), a = !1;
                    log("loading guides for " + n + "...", "guides"), e = e || pendo$1.apiKey, t = t || get_visitor_id(), n = pendoDotUrl.externalizeURL(n);
                    var s = loadGuides.lastVisitorId === t ? saveGuideShownState(activeGuides) : _.noop;
                    if (loadGuides.lastVisitorId = t, resetPendoUI(), resetPendoContent(), store.commit("guideState/setLastGuideRequestAt", getNow()), !isURLValid(getURL())) return log("bad url:  probably local file system", "guides", "error"), _.isFunction(i) && i("error: invalid url"), o.reject(), o.promise;
                    var d = {visitorId: t, accountId: get_account_id(), url: n};
                    loadGuideJs(e, d, function () {
                        if (!a && isUnlocked()) {
                            pendoDotEvents.deliverablesLoaded(), log("successfully loaded guides for " + n, "guides"), pendo$1.designerEnabled && "true" !== pendoLocalStorage.getItem("pendo-designer-mode") && P2AutoLaunch.loadPluginJs(), resetPendoUI(), store.dispatch("guideState/receiveLastGuideStepSeen", pendo$1.lastGuideStepSeen), prepareDesignerPreviewGuide();
                            var e = preparePreviewLastGuideStepSeen(pendoLocalStorage, pendo$1.guides, pendo$1.lastGuideStepSeen);
                            e.visitorId = t, store.dispatch("guideState/updateLastGuideStepSeen", e), store.commit("guideState/setLastGuideRequestAt", getNow()), activeGuides = _.map(pendo$1.guides, GuideFactory), activeGuides = preparePreviewGuides(activeGuides), activeGuides = sortGuidesByPriority(activeGuides), setActiveGuides(activeGuides), store.dispatch("guideState/load", agentStorage.read(LAST_STEP_ADVANCED_COOKIE) || JSON.stringify(getPreviewState(pendoLocalStorage))), store.dispatch("guideState/apply"), pendo$1.latestDismissedAutoAt = applyTimerCache(pendo$1.latestDismissedAutoAt, agentStorage.read("latestDismissedAutoAt")), pendo$1.finalAdvancedAutoAt = applyTimerCache(pendo$1.finalAdvancedAutoAt, agentStorage.read("finalAdvancedAutoAt")), pendo$1.latestSnoozedAutoAt = applyTimerCache(pendo$1.latestSnoozedAutoAt, agentStorage.read("latestSnoozedAutoAt")), store.dispatch("healthCheck/init", activeGuides), store.dispatch("frames/changeGuideList", activeGuides), pendo$1.eventProperties = createEventPropertiesFromFeatures(pendo$1.features), activeGuides.length ? q.all([loadGuideCss(), loadGlobalScriptOnce(replaceWithContentHost(pendo$1.globalJsUrl)), loadLauncherContent(upgradeLauncher(pendo$1.guideWidget, activeGuides)), initializeResourceCenter(pendo$1.guides), BuildingBlockWatermark.initializeWatermark(pendo$1.guides), waitForGlobalCssToLoad(5e3)]).then(function () {
                                initLauncher(), store.getters["frames/isLeader"]() && s(activeGuides), pendoDotEvents.guidesLoaded(), Events.guideLoopStarted.trigger(), startGuides(), DOMActivation.prefetch(activeGuides), BuildingBlockResourceCenter.fetchAnnouncementGuidesContent(activeGuides, store), clearTimeout(r), _.isFunction(i) && i(), o.resolve()
                            }, function () {
                                pendoDotEvents.guidesFailed(), o.reject()
                            }) : (pendoDotEvents.guidesLoaded(), o.resolve())
                        }
                    });
                    var u = ConfigReader.get("guideTimeout") || ConfigReader.get("guides.timeout");
                    return _.isNumber(u) && (r = setTimeout(function () {
                        a = !0, o.reject()
                    }, u)), o.promise
                }, processGuideEventCache = function (e) {
                    guideEventQueue.flush(e)
                }, getGuideEventCache = function () {
                    return guideEvtCache
                }, guideEventQueue = createGuideEventQueue({
                    cache: guideEvtCache, apiKey: function () {
                        return pendo$1.apiKey
                    }, beacon: "guide", allowPost: !0, preferFetch: sniffer.safari
                }), pollEventQueue = createGuideEventQueue({
                    cache: [], apiKey: function () {
                        return pendo$1.apiKey
                    }, beacon: "poll", allowPost: !0, preferFetch: sniffer.safari
                }), initializeResourceCenter = function (e) {
                    return BuildingBlockResourceCenter.initializeResourceCenter(e)
                }, crossFrameChannel = {postMessage: _.noop, close: _.noop}, initGuideFactory = function () {
                    Guide.init(), GuideStep.init()
                }, initGuides = function () {
                    guideEventQueue.clear(), ConfigReader.get("preventUnloadListener") !== !0 && (attachEventInternal(window, "unload", function () {
                        processGuideEventCache({guaranteed: !0})
                    }), attachEventInternal(window, "unload", function () {
                        _.isFunction(stopListenToMaster) && stopListenToMaster(), store.dispatch("frames/leave")
                    }));
                    var e = ConfigReader.get("guides.tooltip.arrowSize");
                    if (_.isNumber(e) && (pendo$1.TOOLTIP_ARROW_SIZE = e), crossFrameChannel = connectChannelToStore(createCrossFrameChannel(store), store), store.dispatch("frames/init"), store.dispatch("frames/join"), listenForGuideStateChange(), attachEventInternal(window, "resize", _.debounce(adjustGuidesOnResize, 50)), createVideoFullScreenListeners(), ConfigReader.get("preferMutationObserver") && sniffer.MutationObserver) {
                        var t = function () {
                            store.dispatch("guideUpdate/documentChanged")
                        };
                        attachEvent(window, "animationend", t), attachEvent(window, "transitionend", t), attachEvent(window, "mouseover", _.debounce(t, 50)), AutoDisplay.iterator.circular = !1, badgeIterator.circular = !1, DOMActivation.circular = !1, store.commit("guideUpdate/setUseObserver"), store.commit("guideUpdate/setIterationTimeLimit", 50)
                    }
                }, areGuidesDisabled = function () {
                    return ConfigReader.get("guides.disabled", !1) || ConfigReader.get("disableGuides", !1) || !pendoCore
                }, areGuidesDelayed = function () {
                    return ConfigReader.get("guides.delay", !1) || ConfigReader.get("delayGuides", !1)
                }, setGuidesDisabled = function (e) {
                    var t = ConfigReader.getOriginalOptions();
                    t.disableGuides = e
                }, setGuidesDelayed = function (e) {
                    var t = ConfigReader.getOriginalOptions();
                    t.delayGuides = e
                }, createEventPropertiesFromFeatures = makeSafe(function (e) {
                    if (e && e.length) {
                        for (var t = [], n = 0; n < e.length; n++) {
                            var i = e[n].featureRule, r = _.map(e[n].eventProperties, function (e) {
                                return e.selector ? e : JSON && JSON.parse && e.rule ? JSON.parse(e.rule) : void 0
                            });
                            t.push({featureRules: i, eventPropertyRules: r, featureId: e[n].featureId})
                        }
                        return t
                    }
                }), getFullScreenElement = function () {
                    return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement
                }, adjustActiveGuideOnResize = function () {
                    debug("adjustActiveGuideOnResize firing");
                    var e = getActiveGuide();
                    e && e.step && !pendo$1.ignoreResize && e.step.redraw()
                }, resizeHandler = function () {
                    var e = get(document, "activeElement.id", "");
                    if (e.indexOf("pendo-video-") > -1) {
                        var t = getFullScreenElement();
                        (!t || t.id.indexOf("pendo-video-") < 0) && setTimeout(function () {
                            adjustActiveGuideOnResize()
                        }, 150)
                    } else adjustActiveGuideOnResize()
                }, adjustGuidesOnResize = function () {
                    resizeHandler(), adjustBadgesForResize()
                }, createVideoFullScreenListeners = function () {
                    for (var e = ["fullscreenchange", "webkitfullscreenchange", "MSFullscreenChange"], t = 0; t < e.length; t++) attachEventInternal(document, e[t], handleResizeOnVideoFullScreenChange)
                }, handleResizeOnVideoFullScreenChange = function () {
                    var e = get(document, "activeElement.id", "");
                    if (e.indexOf("pendo-video-") > -1) {
                        var t = getFullScreenElement();
                        t ? pendo$1.ignoreResize = !0 : setTimeout(function () {
                            pendo$1.ignoreResize = !1
                        }, 1e3)
                    }
                }, PASSIVE_MODE = "passive", PAUSED_MODE = "paused", FramesModule = function () {
                    function e(e) {
                        var t = _.pick(e, "id", "name", "launchMethod", "isMultiStep", "steps", "control");
                        return t.attributes = _.pick(e.attributes, "overrideAutoThrottling", "priority", "isAnnouncement", "resourceCenter"), t._shouldBeAddedToLauncher = _.isFunction(e.shouldBeAddedToLauncher) ? e.shouldBeAddedToLauncher() : e._shouldBeAddedToLauncher || !1, t._shouldBeAddedToResourceCenter = _.isFunction(e.shouldBeAddedToResourceCenter) ? e.shouldBeAddedToResourceCenter() : e._shouldBeAddedToLauncher || !1, t.steps = _.map(e.steps, function (e) {
                            return _.pick(e, "id", "guideId", "type", "seenReason", "seenState", "lastSeenAt", "snoozeEndTime", "regexUrlRule", "elementPathRule")
                        }), t
                    }

                    function t(t) {
                        return _.map(t, e)
                    }

                    var n = {}, i = {
                        frameId: null,
                        leaderId: null,
                        tabId: null,
                        agentInstallType: null,
                        leadershipMode: null,
                        topId: null,
                        frames: {},
                        guidesLoaded: !1,
                        channelType: null
                    }, r = {
                        init: function (e) {
                            var t = EventTracer.addTracerIds({}), n = getInstallType();
                            e.commit("setFrameId", t.frameId), e.commit("setTabId", t.tabId), e.commit("setAgentInstallType", n), e.commit("setLeadershipMode", n), listenForTabIdChange()
                        }, changeGuideList: function (e, n) {
                            var i = e.state, r = t(n);
                            crossFrameChannel.postMessage({
                                action: "frames/receiveGuideList",
                                frameId: i.frameId,
                                tabId: i.tabId,
                                guides: r
                            })
                        }, receiveGuideList: function (e, t) {
                            e.getters.isCurrentTab()(t.tabId) && (e.commit("setGuideList", t), t.frameId === e.state.frameId && e.commit("setGuidesLoaded"), updateMasterGuideList(e.state))
                        }, join: function (e) {
                            if (!e.state.disabled) {
                                stopGuides(), registerMode(PASSIVE_MODE, guidePassiveRenderer), registerMode(PAUSED_MODE, _.noop), setMode(PAUSED_MODE);
                                var n = e.state, i = window.top == window, r = n.frames[n.frameId];
                                e.commit("removeFrame", n.frameId), e.commit("setGuideList", {
                                    frameId: n.frameId,
                                    guides: t(getActiveGuides())
                                });
                                var o = n.frameId;
                                EventTracer.detectClonedSession(o), e.dispatch("receiveFrame", {
                                    tabId: n.tabId,
                                    cd: o,
                                    frame: _.extend({
                                        agentInstallType: n.agentInstallType,
                                        id: n.frameId,
                                        joinedAt: getNow(),
                                        isTop: i,
                                        visibility: i ? "visible" : "unknown"
                                    }, r)
                                })
                            }
                        }, receiveFrame: function (e, t) {
                            if (e.getters.isCurrentTab()(t.tabId)) {
                                var n = e.state;
                                if (!n.frames[t.frame.id] || !n.frames[t.frame.id].id) {
                                    if (e.getters.isBroadcastChannel() && t.cd && EventTracer.isClonedSession(t.cd)) return void crossFrameChannel.postMessage({
                                        action: "frames/changeTabId",
                                        tabId: t.tabId,
                                        cd: t.cd
                                    });
                                    e.commit("addFrame", t.frame), e.commit("setGuideList", {
                                        frameId: t.frame.id,
                                        guides: _.toArray(get(t, "frame.guides", []))
                                    });
                                    var i = e.getters.inExtensionLeadershipMode(),
                                        r = t.frame.agentInstallType === EXTENSION_INSTALL_TYPE,
                                        o = i && r && t.frame.isTop, a = !i && t.frame.isTop;
                                    (o || a) && e.commit("setTopId", t.frame.id), e.commit("setLeadershipMode", t.frame.agentInstallType), crossFrameChannel.postMessage({
                                        action: "frames/receiveFrame",
                                        tabId: n.tabId,
                                        frame: n.frames[n.frameId],
                                        cd: t.cd
                                    }), e.dispatch("waitThenElectLeader")
                                }
                            }
                        }, changeTabId: function (e, t) {
                            if (e.getters.isCurrentTab()(t.tabId) && t.cd === e.state.frameId) {
                                var n = e.state.tabId;
                                n === EventTracer.getTabId() && (EventTracer.setParentTabId(n), EventTracer.newTabId()), e.commit("setTabId", EventTracer.getTabId())
                            }
                        }, leave: function (e) {
                            var t = e.state;
                            crossFrameChannel.postMessage({
                                action: "frames/removeFrame",
                                frameId: t.frameId, tabId: t.tabId
                            }), _.each(t.frames, function (t) {
                                e.commit("removeFrame", t.id)
                            }), crossFrameChannel.close(), clearMode()
                        }, removeFrame: function (e, t) {
                            e.getters.isCurrentTab()(t.tabId) && e.getters.hasFrame()(t.frameId) && (e.commit("removeFrame", t.frameId), _.each(n, function (e, i) {
                                0 === i.indexOf(t.frameId + "/") && (e.reject(), delete n[i])
                            }), e.dispatch("electLeader"))
                        }, waitThenElectLeader: _.debounce(function (e) {
                            e.dispatch("electLeader")
                        }, 50), electLeader: function (e) {
                            var t = e.state;
                            if (t.topId) e.dispatch("followLeader", {tabId: t.tabId, leaderId: t.topId}); else {
                                var n = _.min(t.frames, "joinedAt");
                                e.dispatch("followLeader", {tabId: t.tabId, leaderId: n.id})
                            }
                            updateMasterGuideList(e.state)
                        }, followLeader: function (e, t) {
                            if (e.getters.isCurrentTab()(t.tabId)) {
                                e.commit("setLeaderId", t.leaderId), e.dispatch("setRenderMode");
                                var n = {ignoreLocalStorageNavigation: /pendo-/.test(window.name)};
                                localStorageNavigation(n)
                            }
                        }, setRenderMode: function (e) {
                            setMode(e.getters.isLeader() ? "default" : PASSIVE_MODE)
                        }, showGuideStep: function (e, t) {
                            function n() {
                                var r = i.shift();
                                return r ? e.dispatch("requestShowGuideStepInFrame", _.extend({frameId: r.id}, t)).then(function (e) {
                                    return e.error ? q.reject(e.error) : e.isShown ? e : n()
                                }) : q.resolve({isShown: !1})
                            }

                            var i = _.filter(e.state.frames, function (n) {
                                return n.id !== e.state.frameId && "hidden" !== n.visibility && n.guides && n.guides[t.guideId]
                            });
                            return n()
                        }, requestShowGuideStepInFrame: function (e, t) {
                            var i = t.frameId + "/" + randomString(32), r = q.defer();
                            return n[i] = r, crossFrameChannel.postMessage(_.extend({
                                action: "frames/showGuideStepInFrame",
                                tabId: e.state.tabId,
                                requestId: i
                            }, t)), r.promise
                        }, showGuideStepInFrame: function (e, t) {
                            if (e.getters.isCurrentTab()(t.tabId) && e.state.frameId === t.frameId) {
                                var n = findGuideById(t.guideId), i = n && n.findStepById(t.stepId);
                                if (i) {
                                    var r = GuideDisplay.showLocal(i, t.reason).then(function (n) {
                                        e.dispatch("guideStepShownInFrame", {
                                            action: "frames/receiveGuideStepShownInFrame",
                                            requestId: t.requestId,
                                            guideId: t.guideId,
                                            stepId: t.stepId,
                                            isShown: n
                                        })
                                    });
                                    r && r["catch"] && r["catch"](_.noop)
                                } else e.dispatch("guideStepShownInFrame", {
                                    action: "frames/receiveGuideStepShownInFrame",
                                    requestId: t.requestId,
                                    guideId: t.guideId,
                                    stepId: t.stepId,
                                    isShown: !1
                                })
                            }
                        }, guideStepShownInFrame: function (e, t) {
                            e.commit("setStepShown", {
                                frameId: e.state.frameId,
                                stepId: t.stepId,
                                shown: t.isShown
                            }), crossFrameChannel.postMessage(_.extend({
                                action: "frames/receiveGuideStepShownInFrame",
                                tabId: e.state.tabId,
                                frameId: e.state.frameId
                            }, t))
                        }, receiveGuideStepShownInFrame: function (e, t) {
                            if (e.getters.isCurrentTab()(t.tabId)) {
                                var i = n[t.requestId];
                                i && (i.resolve(t), delete n[t.requestId]), e.getters.isShownInFrame()(t.frameId, {id: t.stepId}) !== t.isShown && e.commit("setStepShown", {
                                    frameId: t.frameId,
                                    stepId: t.stepId,
                                    shown: t.isShown
                                })
                            }
                        }, hideGuides: function (e, t) {
                            t = _.isArray(t) ? t : [], crossFrameChannel.postMessage({
                                action: "frames/receiveHideGuides",
                                tabId: e.state.tabId,
                                frameId: e.state.frameId,
                                guideIds: t
                            }), e.commit("hideGuides")
                        }, receiveHideGuides: function (e, t) {
                            e.getters.isCurrentTab()(t.tabId) && e.state.frameId !== t.frameId && (t.guideIds.length ? _.each(_.compact(_.map(t.guideIds, findGuideById)), function (e) {
                                e.hide()
                            }) : hideGuides(), e.commit("hideGuides"))
                        }, guideStepHiddenInFrame: function (e, t) {
                            var n = e.getters.isShownInFrame()(e.state.frameId, {id: t.stepId});
                            e.commit("setStepShown", {
                                frameId: e.state.frameId,
                                stepId: t.stepId,
                                shown: !1
                            }), crossFrameChannel.postMessage(_.extend({
                                action: "frames/receiveGuideStepHiddenInFrame",
                                tabId: e.state.tabId,
                                frameId: e.state.frameId
                            }, t)), n && e.dispatch("fixDoubleDisplay", t)
                        }, receiveGuideStepHiddenInFrame: function (e, t) {
                            e.getters.isCurrentTab()(t.tabId) && e.state.frameId !== t.frameId && e.getters.isShownInFrame()(t.frameId, {id: t.stepId}) && e.commit("setStepShown", {
                                frameId: t.frameId,
                                stepId: t.stepId,
                                shown: !1
                            })
                        }, fixDoubleDisplay: function (e, t) {
                            _.each(e.state.frames, function (n, i) {
                                i !== e.state.frameId && e.getters.isShownInFrame()(i, {id: t.stepId}) && crossFrameChannel.postMessage(_.extend({
                                    action: "frames/receiveHideGuideInFrame",
                                    tabId: e.state.tabId,
                                    frameId: i,
                                    guideId: t.guideId,
                                    stepId: t.stepId
                                }, t))
                            })
                        }, receiveHideGuideInFrame: function (e, t) {
                            if (e.getters.isCurrentTab()(t.tabId) && e.state.frameId === t.frameId) {
                                var n = findGuideById(t.guideId), i = n && n.findStepById(t.stepId);
                                i && i.hide()
                            }
                        }, changeLastGuideStepSeen: function (e, t) {
                            crossFrameChannel.postMessage({
                                action: "frames/receiveLastGuideStepSeen",
                                tabId: e.state.tabId,
                                frameId: e.state.frameId,
                                lastGuideStepSeen: t
                            }), e.commit("updateLastGuideStepSeen", t), e.commit("healthCheck/updateStepState", {
                                id: t.guideStepId,
                                seenState: t.state
                            }, {root: !0})
                        }, receiveLastGuideStepSeen: function (e, t) {
                            if (e.getters.isCurrentTab()(t.tabId) && t.frameId !== e.state.frameId) {
                                var n = e.state.frames[t.frameId], i = get(n, "agentInstallType");
                                i && i !== e.state.agentInstallType && delete t.lastGuideStepSeen.visitorId, e.dispatch("guideState/updateLastGuideStepSeen", t.lastGuideStepSeen, {root: !0}), e.dispatch("guideState/write", null, {root: !0});
                                var r = e.rootState.guideState.lastGuideStepSeen, o = findGuideById(r.guideId),
                                    a = o && o.findStepById(r.guideStepId);
                                a && (a.seenState = r.state, a.seenReason = r.seenReason, r.snoozeEndTime && (a.snoozeEndTime = r.snoozeEndTime), e.commit("updateLastGuideStepSeen", r), e.commit("healthCheck/updateStepState", a, {root: !0}))
                            }
                        }, changeThrottlingState: function (e, t) {
                            crossFrameChannel.postMessage(_.extend({
                                action: "frames/receiveThrottlingState",
                                tabId: e.state.tabId,
                                frameId: e.state.frameId
                            }, t))
                        }, receiveThrottlingState: function (e, t) {
                            e.getters.isCurrentTab()(t.tabId) && t.frameId !== e.state.frameId && _.each(THROTTLING_STATE, function (e) {
                                t[e] && _writeThrottlingStateCache(t[e], e)
                            })
                        }, startPreview: function () {
                            crossFrameChannel.postMessage({
                                action: "frames/receiveStartPreview",
                                "pendo-preview": pendoLocalStorage.getItem(pendoPreview)
                            })
                        }, restartPreview: function () {
                            crossFrameChannel.postMessage({
                                action: "frames/receiveRestartPreview",
                                "pendo-preview": pendoLocalStorage.getItem(pendoPreview)
                            })
                        }, stopPreview: function (e, t) {
                            crossFrameChannel.postMessage(_.extend({action: "frames/receiveStopPreview"}, t))
                        }, receiveStartPreview: function (e, t) {
                            pendoLocalStorage.setItem(pendoPreview, t[pendoPreview]), forceGuideReload()
                        }, receiveRestartPreview: function (e, t) {
                            pendoLocalStorage.setItem(pendoPreview, t[pendoPreview]);
                            var n = restartPreview(pendoLocalStorage, activeGuides, getLastGuideStepSeen());
                            store.dispatch("guideState/updateLastGuideStepSeen", n, {root: !0})
                        }, receiveStopPreview: function (e, t) {
                            var n = !!t.preventWindowClose;
                            exitPreviewMode({preventWindowClose: n})
                        }, updateFrameVisibility: function (e, t) {
                            if (!e.getters.isTop() && !e.state.disableFrameVisibilityCheck) try {
                                var n = "unknown";
                                null == t && (t = window);
                                var i = t.frameElement;
                                if (!i) return void e.commit("disableFrameVisibilityCheck");
                                n = isElementVisible(i) ? "visible" : "hidden", e.getters.frameVisibility() !== n && (e.commit("setFrameVisibility", {
                                    frameId: e.state.frameId,
                                    visibility: n
                                }), crossFrameChannel.postMessage({
                                    action: "frames/receiveFrameVisibility",
                                    tabId: e.state.tabId,
                                    frameId: e.state.frameId,
                                    visibility: n
                                }))
                            } catch (r) {
                                e.commit("disableFrameVisibilityCheck")
                            }
                        }, receiveFrameVisibility: function (e, t) {
                            e.getters.isCurrentTab()(t.tabId) && e.commit("setFrameVisibility", t)
                        }, addSelectionModeToFrames: function (e, t) {
                            var n = t.options;
                            DesignerV2.launchInAppDesigner(n)
                        }
                    }, o = {
                        addFrame: function (e, t) {
                            var n = t.id;
                            e.frames[n] = _.extend({}, e.frames[n], t)
                        }, removeFrame: function (e, t) {
                            delete e.frames[t]
                        }, setGuideList: function (e, n) {
                            var i = n.frameId;
                            e.frames[i] = _.extend({}, e.frames[i], {guides: _.indexBy(t(n.guides), "id")})
                        }, setStepShown: function (e, t) {
                            var n = t.frameId, i = e.frames[n] = _.extend({}, e.frames[n]);
                            i.shown = _.extend({}, i.shown), i.shown[t.stepId] = t.shown
                        }, setLeaderId: function (e, t) {
                            e.leaderId = t
                        }, setFrameId: function (e, t) {
                            e.frameId = t
                        }, setTabId: function (e, t) {
                            e.tabId = t
                        }, setTopId: function (e, t) {
                            e.topId = t
                        }, setAgentInstallType: function (e, t) {
                            e.agentInstallType = t
                        }, setLeadershipMode: function (e, t) {
                            e.leadershipMode !== EXTENSION_INSTALL_TYPE && (e.leadershipMode = t)
                        }, setFrameVisibility: function (e, t) {
                            var n = t.frameId;
                            e.frames[n] = _.extend({}, e.frames[n], {visibility: t.visibility})
                        }, disableFrameVisibilityCheck: function (e) {
                            e.disableFrameVisibilityCheck = !0
                        }, hideGuides: function (e) {
                            _.each(e.frames, function (e) {
                                _.each(e.shown, function (t, n) {
                                    e.shown[n] = !1
                                })
                            })
                        }, setChannelType: function (e, t) {
                            e.channelType = t
                        }, setGuidesLoaded: function (e) {
                            e.guidesLoaded = !0
                        }, setConnectFailed: function (e) {
                            e.connectFailed = !0
                        }, updateLastGuideStepSeen: function (e, t) {
                            t && _.each(e.frames, function (e) {
                                if (e.guides) {
                                    var n = e.guides[t.guideId];
                                    if (n) {
                                        var i = _.findWhere(n.steps, {id: t.guideStepId});
                                        i && (i.seenState = t.state, i.lastSeenAt = t.time, i.seenReason = t.seenReason, t.snoozeEndTime && (i.snoozeEndTime = t.snoozeEndTime))
                                    }
                                }
                            })
                        }
                    }, a = {
                        isLeader: function (e) {
                            return e.leaderId === e.frameId
                        }, isFollower: function (e) {
                            return !!e.leaderId && e.leaderId !== e.frameId
                        }, inExtensionLeadershipMode: function (e) {
                            return e.leadershipMode === EXTENSION_INSTALL_TYPE
                        }, isCurrentTab: function (e) {
                            return function (t) {
                                return "TopFrameRelay" === e.channelType ? !0 : e.tabId === t
                            }
                        }, isTop: function (e) {
                            return e.topId === e.frameId || window == window.top
                        }, frameVisibility: function (e) {
                            var t = e.frames ? e.frames[e.frameId] : {};
                            return t.visibility || "unknown"
                        }, isGuideInThisFrame: function (e) {
                            return function (t) {
                                var n = e.frames && e.frames[e.frameId], i = n && n.guides || {};
                                return !!i[t.id]
                            }
                        }, isGuideInDifferentFrame: function (e) {
                            return function (t) {
                                return _.any(e.frames, function (n, i) {
                                    return i === e.frameId ? !1 : n.guides && n.guides[t.id]
                                })
                            }
                        }, isShownInAnotherFrame: function (e) {
                            return function (t) {
                                return _.any(e.frames, function (n, i) {
                                    return i === e.frameId ? !1 : n.shown && n.shown[t.id]
                                })
                            }
                        }, isShownInFrame: function (e) {
                            return function (t, n) {
                                var i = e.frames && e.frames[t], r = i && i.shown || {};
                                return !(!r || !r[n.id])
                            }
                        }, hasFrame: function (e) {
                            return function (t) {
                                return e.frames && e.frames[t]
                            }
                        }, hasFrames: function (e) {
                            return _.size(e.frames) > 1
                        }, shouldBeAddedToLauncher: function (e, t) {
                            return function (n) {
                                return t.isLeader() && _.any(e.frames, function (t, i) {
                                    if (i === e.frameId) return !1;
                                    var r = t.guides && t.guides[n.id];
                                    return r && r._shouldBeAddedToLauncher
                                })
                            }
                        }, shouldBeAddedToResourceCenter: function (e, t) {
                            return function (n) {
                                return t.isLeader() && _.any(e.frames, function (t, i) {
                                    if (i === e.frameId) return !1;
                                    var r = t.guides && t.guides[n.id];
                                    return r && r._shouldBeAddedToResourceCenter
                                })
                            }
                        }, isBroadcastChannel: function (e) {
                            return "BroadcastChannel" === e.channelType
                        }, canShowRCBadge: function (e, t) {
                            var n = _.any(e.frames, function (e) {
                                return e.isTop
                            });
                            return n ? t.isTop() : t.isLeader()
                        }
                    };
                    return {actions: r, mutations: o, getters: a, state: i, requests: n}
                }(), lastLauncherHash, GuideUpdateModule = function () {
                    function e() {
                        store.dispatch("guideUpdate/documentChanged")
                    }

                    function t() {
                        store.dispatch("guideUpdate/handleScheduledUpdate")
                    }

                    var n, i = {
                        useObserver: !1,
                        observing: !1,
                        needsUpdate: !1,
                        scheduledUpdate: null,
                        updateId: null,
                        updateStartTime: null,
                        updateTotalTime: 0,
                        updateCompleteTime: 0,
                        iterationCount: 0,
                        iterationStartTime: null,
                        iterationTimeLimit: 1 / 0,
                        phases: {}
                    }, r = {
                        documentChanged: function (e) {
                            if (e.getters.isUpdating()) return void e.commit("setNeedsUpdate");
                            if (!e.state.scheduledUpdate) {
                                var n = e.getters.now() - e.state.updateCompleteTime,
                                    i = Math.min(Math.max(0, DEFAULT_TIMER_LENGTH - n), DEFAULT_TIMER_LENGTH),
                                    r = setTimeout(t, i);
                                e.commit("setScheduledUpdate", r)
                            }
                        }, handleScheduledUpdate: function (e) {
                            e.dispatch("stopScheduledUpdate"), startGuides()
                        }, stopScheduledUpdate: function (e) {
                            e.state.scheduledUpdate && (clearTimeout(e.state.scheduledUpdate), e.commit("setScheduledUpdate", null))
                        }, startObserverIfNeeded: function (t, i) {
                            if (t.state.useObserver) {
                                var r = t.getters.observer();
                                r || (r = new (i || MutationObserver)(e), n = r), t.state.observing || (r.observe(document.documentElement, {
                                    subtree: !0,
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0
                                }), t.commit("setObserving", !0))
                            }
                        }, stopObserver: function (e) {
                            var t = e.getters.observer();
                            t && _.isFunction(t.disconnect) && t.disconnect(), e.commit("setObserving", !1), e.dispatch("stopScheduledUpdate")
                        }, startIteration: function (e, t) {
                            e.getters.isUpdating() || e.commit("startUpdate", t), e.commit("startIteration", t)
                        }, completeIteration: function (e, t) {
                            e.commit("completeIteration", t), e.getters.isUpdateComplete() && e.commit("completeUpdate", t)
                        }, startPhase: function (e, t) {
                            e.getters.isPhaseInProgress()(t) || e.commit("startPhase", t)
                        }
                    }, o = {
                        setUseObserver: function (e) {
                            e.useObserver = !0
                        }, setObserving: function (e, t) {
                            e.observing = t
                        }, setIterationTimeLimit: function (e, t) {
                            e.iterationTimeLimit = t
                        }, setNeedsUpdate: function (e) {
                            e.needsUpdate = !0
                        }, setScheduledUpdate: function (e, t) {
                            e.scheduledUpdate = t
                        }, startUpdate: function (e, t) {
                            e.needsUpdate = !1, e.updateId = randomString(16), e.updateStartTime = t
                        }, completeUpdate: function (e, t) {
                            e.updateId = null, e.updateStartTime = null, e.updateTotalTime = 0, e.iterationCount = 0, e.phases = {}, e.updateCompleteTime = t
                        }, startIteration: function (e, t) {
                            e.iterationStartTime = t, e.iterationCount++
                        }, completeIteration: function (e, t) {
                            e.updateTotalTime += t - e.iterationStartTime, e.iterationStartTime = null
                        }, startPhase: function (e, t) {
                            var n = {};
                            n[t] = {updateId: e.updateId}, _.extend(e.phases, n)
                        }, completePhase: function (e, t) {
                            var n = e.phases[t.phase];
                            n && (n.completedTime = t.time)
                        }
                    }, a = {
                        exceededIterationTime: function (e, t) {
                            return t.iterationTimeElapsed() > e.iterationTimeLimit
                        }, iterationTimeElapsed: function (e, t) {
                            return e.iterationStartTime ? t.now() - e.iterationStartTime : null
                        }, isUpdateComplete: function (e, t) {
                            return _.all(_.keys(e.phases), t.isPhaseComplete())
                        }, isUpdating: function (e) {
                            return !!e.updateId
                        }, isPhaseInProgress: function (e, t) {
                            return function (e) {
                                return !t.isPhaseComplete()(e)
                            }
                        }, isPhaseComplete: function (e) {
                            return function (t) {
                                var n = e.phases[t];
                                return !(!n || !n.completedTime)
                            }
                        }, now: function () {
                            return getNow()
                        }, observer: function () {
                            return n
                        }
                    };
                    return {actions: r, mutations: o, getters: a, state: i}
                }(), HealthCheckModule = function () {
                    var e = ["advanced", "dismissed", "snoozed"], t = {steps: {}, exceptions: {}}, n = {
                        init: function (e, t) {
                            _.each(t, function (t) {
                                _.each(t.steps, function (t) {
                                    e.commit("updateStepState", t)
                                })
                            })
                        }, fixSeenStateAndLogError: function (e, t) {
                            var n = t.step, i = t.reason;
                            if (!e.state.exceptions[n.id]) {
                                var r = n.seenState, o = e.state.steps[n.id];
                                o && o.seenState && (n.seenState = o.seenState), e.state.exceptions[n.id] = !0, e.dispatch("logRedisplayError", {
                                    id: n.id,
                                    guideId: n.guideId,
                                    reason: i,
                                    seenState: o.seenState,
                                    previousSeenState: r
                                })
                            }
                        }, logRedisplayError: function (e, t) {
                            writeErrorPOST(['Attempted redisplay of guide="', t.guideId, '" step="', t.id, '" reason="', t.reason, '" seenState="', t.seenState, '" previousSeenState="', t.previousSeenState, '"'].join())
                        }
                    }, i = {
                        updateStepState: function (e, t) {
                            var n = getNow();
                            e.steps[t.id] = _.extend({}, e.steps[t.id], {
                                pageId: t.pageId,
                                regexUrlRule: t.regexUrlRule,
                                seenState: t.seenState,
                                updatedAt: n,
                                allowedAt: n + 6e4
                            })
                        }, resetStepStatus: function (e) {
                            e.steps = {}
                        }
                    }, r = {
                        isRedisplay: function (t) {
                            return function (n) {
                                var i = t.steps[n.id];
                                return i ? n.resetAt > i.updatedAt ? !1 : getNow() >= i.allowedAt ? !1 : _.contains(e, i.seenState) && !_.contains(e, n.seenState) : !1
                            }
                        }, isMissingPageRule: function (e) {
                            return function (t) {
                                var n = e.steps[t.id];
                                return n && n.regexUrlRule && !t.regexUrlRule ? !0 : !1
                            }
                        }
                    };
                    return {actions: n, mutations: i, getters: r, state: t}
                }();
            IntervalJob.prototype.start = function () {
                this.state.isPaused = !1;
                var e = _.bind(function () {
                    this.state.isPaused || (this.state.cb(this), this.state.handle = setTimeout(e, this.state.duration))
                }, this);
                e()
            }, IntervalJob.prototype.stop = function () {
                clearTimeout(this.state.handle), this.state.isPaused = !0
            };
            var urlFor = ajax.urlFor;
            UrlAttrTransform.prototype.applyToURL = function (e) {
                var t = {
                    AllowOnlyKeys: function (e, t, n) {
                        _.isFunction(n) && (n = n(e[t], e));
                        var i = e.href;
                        return new URL$1(adjustUrl(i, null, n, !1))
                    }, ExcludeKeys: function (e, t, n) {
                        _.isFunction(n) && (n = n(e[t], e));
                        var i = e.href;
                        return new URL$1(adjustUrl(i, null, n, !0))
                    }, AddTo: function (e, t, n) {
                        _.isFunction(n) && (n = n(e[t], e));
                        var i = e.href;
                        return new URL$1(urlFor(i, n))
                    }, Clear: function (e, t) {
                        return e[t] = "", e
                    }, Replace: function (e, t, n) {
                        return _.isFunction(n) && (n = n(e[t], e)), "href" === t ? new URL$1(n) : (e[t] = n, e)
                    }, ForceSecure: function (e, t) {
                        return "protocol" === t ? (e.protocol = "https", e) : (e.href = e.href.replace(/^(.*:\/\/\/)/, "https://"), e)
                    }
                };
                return t[this.action](e, this.attr, this.data)
            }, UrlAttrTransform.prototype.toString = function () {
                return this.attr + " - " + this.action + " - " + JSON.stringify(this.data)
            }, UrlAttrTransform.fromJSON = function (e) {
                return new UrlAttrTransform(e.attr, e.action, e.data)
            };
            var LocationModule = function (e) {
                var t = function (e, t, n, i) {
                        return [new UrlAttrTransform("pathname", "Replace", function (r) {
                            var o = r.replace(t, e);
                            return o = o.replace(n, e), o = o.replace(i, "")
                        }), new UrlAttrTransform("href", "ForceSecure")]
                    }, n = function () {
                        var e = getBrowserLocationSafe(),
                            n = pendoDotUrl.isElectron() ? t(pendoDotUrl.electronAppName(), pendoDotUrl.electronResourcesPath(), pendoDotUrl.electronUserDirectory(), pendoDotUrl.electronUserHomeDirectory()) : [];
                        return c(n, e)
                    }, i = {transforms: [], electronTransforms: [], currentSrcFn: n}, r = 500,
                    o = new IntervalJob(r, function (e) {
                        pageLoad()
                    }), a = {
                        init: function (e, t) {
                            e.commit("clearTransforms"), e.commit("changeUrlSource"), t.transforms && e.dispatch("addTransforms", t.transforms), t.setUrl && e.dispatch("changeUrlSource", t.setUrl)
                        }, addTransforms: function (e, t) {
                            _.each(t, function (t) {
                                e.commit("addTransform", UrlAttrTransform.fromJSON(t))
                            })
                        }, changeUrlSource: function (e, t) {
                            e.commit("changeUrlSource", t)
                        }
                    }, s = {
                        addTransform: function (e, t) {
                            e.transforms.push(t)
                        }, clearTransforms: function (e) {
                            e.transforms = []
                        }, changeUrlSource: function (e, t) {
                            if (!t) return e.currentSrcFn = n, void o.stop();
                            var i;
                            if ("string" == typeof t) {
                                var r = new URL$1(t);
                                i = _.partial(_.identity, r)
                            } else if (isURL(t)) i = _.partial(_.identity, t); else {
                                if ("function" != typeof t) throw new Error("URL Source must be either a Function that returns a URL or String that is a valid URL. Or, it may be a static URL or String.");
                                i = t
                            }
                            e.currentSrcFn = i, o.start()
                        }
                    }, d = function (e) {
                        if ("string" == typeof e) return new URL$1(e);
                        if (!isURL(e)) throw new Error("Invalid type from custom URL source. Must be either an URL or a String of a valid url.");
                        return e
                    }, u = function (e) {
                        return e ? e : window.location
                    }, c = function (e, t) {
                        return _.reduce(e, function (e, t) {
                            return t.applyToURL(e)
                        }, t)
                    }, l = function (e) {
                        var t;
                        try {
                            var n = function (e) {
                                return t = e, e
                            };
                            t = _.reduce([e.currentSrcFn, d, n, _.partial(c, e.transforms), d], function (e, t) {
                                return t(e)
                            }, null)
                        } catch (i) {
                            writeException(i), t = u(t)
                        }
                        return t
                    }, f = {
                        url: l, href: function (e) {
                            return l(e).href
                        }
                    };
                return {state: i, actions: a, mutations: s, getters: f}
            }(window);
            _.extend(LocationPublic, {
                getHref: function () {
                    return store.getters["location/href"]()
                }, clearTransforms: function () {
                    store.commit("location/clearTransforms")
                }, addTransforms: function (e) {
                    store.dispatch("location/addTransforms", e)
                }, setUrl: function (e) {
                    store.dispatch("location/changeUrlSource", e)
                }, useBrowserUrl: function () {
                    store.dispatch("location/changeUrlSource"), pageLoad()
                }
            });
            var MonitoringModule = function () {
                var e = {lastFlush: getNow(), flushInterval: 3e5, counters: {ptmGifFailures: 0, guideGifFailures: 0}},
                    t = {
                        flush: function (e) {
                            _.each(e.state.counters, function (t, n) {
                                e.commit("resetCounter", n)
                            }), e.commit("setLastFlush", e.getters.now())
                        }
                    }, n = {
                        setLastFlush: function (e, t) {
                            e.lastFlush = t
                        }, incrementCounter: function (e, t) {
                            e.counters[t] !== undefined && e.counters[t]++
                        }, resetCounter: function (e, t) {
                            e.counters[t] !== undefined && (e.counters[t] = 0)
                        }
                    }, i = {
                        shouldFlush: function (e, t) {
                            return t.now() - e.lastFlush >= e.flushInterval
                        }, payload: function (e) {
                            var t = _.reduce(e.counters, function (e, t, n) {
                                return t > 0 && (e[n] = t), e
                            }, {});
                            return _.extend({}, t)
                        }, now: function () {
                            return getNow()
                        }
                    };
                return {state: e, actions: t, mutations: n, getters: i}
            }(), MetadataModule = function () {
                var e = {visitor: {}, account: {}, parentAccount: {}, date: null, version: null, selfHosted: null},
                    t = {}, n = {
                        setMetadata: function (e, t) {
                            t && (t.visitor && (e.visitor = t.visitor), t.account && (e.account = t.account), t.parentAccount && (e.parentAccount = t.parentAccount), t.date && (e.date = t.date), t.version && (e.version = t.version), null !== t.selfHosted && (e.selfHosted = t.selfHosted))
                        }, reset: function (e) {
                            e.visitor = {}, e.account = {}, e.parentAccount = {}, e.date = null, e.version = null, e.selfHosted = null
                        }
                    }, i = {
                        metadata: function (e) {
                            return e
                        }, visitor: function (e) {
                            return e.visitor
                        }, account: function (e) {
                            return e.account
                        }, parentAccount: function (e) {
                            return e.parentAccount
                        }, selfHosted: function (e) {
                            return e.selfHosted
                        }
                    };
                return {state: e, actions: t, mutations: n, getters: i}
            }(), store = createStore();
            store.subscribe(function (e, t) {
            });
            var HOST, buildBaseDataUrl = function (e, t, n) {
                var i = HOST + "/data/" + e + "/" + t, r = _.map(n, function (e, t) {
                    return t + "=" + e
                });
                return r.length > 0 && (i += "?" + r.join("&")), i
            }, writeMessage = function (e) {
                e += "v" + VERSION;
                var t = buildBaseDataUrl("log.gif", pendo$1.apiKey, {msg: e, version: VERSION});
                return writeImgTag(t)
            }, writeException = function (e, t, n) {
                if (e && (!e || !e.logged)) {
                    var i = store.getters["errorLog/hasLogged"]()(e);
                    if (store.dispatch("errorLog/write", e), !i) {
                        t || (t = "pendo.io unhandled exception");
                        var r = "";
                        n && (r = " " + _.map(n, function (e, t) {
                            return t + "=" + e
                        }).join(", "));
                        try {
                            e.logged = !0
                        } catch (o) {
                        }
                        var a = "[" + t + ": " + e.message + r + "]";
                        log(a);
                        var s = window.pendo_options || {};
                        e.stack && pendo$1.logStackTraces !== !1 && s.logStackTraces !== !1 ? writeErrorPOST(a + "\n" + e.stack) : writeMessage(a)
                    }
                }
            };
            fetchKeepalive.supported = function () {
                return _.isFunction(window.fetch) && "undefined" != typeof Request && "keepalive" in new Request("")
            }, sendBeacon.supported = function () {
                return "undefined" != typeof Blob && _.isFunction(navigator.sendBeacon)
            };
            var locked = !1, lockEvents = function () {
                    return locked = !0, "Pendo Agent locked.  No more events will be written."
                }, unlockEvents = function () {
                    return buffersClearAll(), locked = !1, "Pendo Agent unlocked.  Events will be written."
                }, isUnlocked = function () {
                    return !locked && pendoCore
                }, ContentVerifier = function () {
                    function e(e) {
                        return _.isString ? e.replace(/-/g, "+").replace(/_/g, "/") : e
                    }

                    function t(t, i) {
                        if (n() && sniffer.sri) {
                            var r = parseContentUrl(i), o = _.find(["sha512", "sha384", "sha256"], function (e) {
                                return !!r.query[e]
                            });
                            o && (t.integrity = o + "-" + e(r.query[o]), t.setAttribute("crossorigin", "anonymous"))
                        }
                    }

                    function n() {
                        return ConfigReader.get("guideValidation")
                    }

                    function i(e) {
                        try {
                            var t = [];
                            return !ScriptGuideLoader.usesXhr() && e.domJsonpUrl ? t.push(d(e, "domJsonpUrl")) : ScriptGuideLoader.usesXhr() && e.domUrl && t.push(s(e, "domUrl")), e.contentUrlJs ? t.push(d(e, "contentUrlJs")) : e.contentUrl && t.push(d(e, "contentUrl")), q.all(t)
                        } catch (n) {
                            throw Events.contentVerificatonFail.trigger(e, n), n
                        }
                    }

                    function r(e) {
                        return function (t) {
                            return n() ? e(t) : q.resolve()
                        }
                    }

                    function o(e, t) {
                        return function (n) {
                            return e.failed[n.id] ? q.reject() : e.verified[n.id] ? q.resolve() : t(n).then(function () {
                                e.verified[n.id] = !0
                            }, function (t) {
                                return e.failed[n.id] = !0, q.reject(t)
                            })
                        }
                    }

                    function a(e, t) {
                        return function (n) {
                            return t(n).then(_.noop, function (t) {
                                return /verify/.test(t) && e(t), q.reject(t)
                            })
                        }
                    }

                    function s(e, t) {
                        var n = e[t];
                        if (!_.isString(n)) return q.reject('unable to parse "' + n + '"');
                        var i = u(e, t);
                        return ajax.get(n).then(function (e) {
                            return c(e.data) !== i ? q.reject('Unable to verify content at "' + n + '"') : void 0
                        })
                    }

                    function d(e, t) {
                        var n = e[t];
                        return sniffer.sri && /[?&]sha(256|384|512)=/.test(n) ? q.resolve() : s(e, t)
                    }

                    function u(e, t) {
                        var n = {domUrl: "domHash", domJsonpUrl: "domJsonpHash"}, i = n[t];
                        return e[i] || getHashFromContentUrl(e[t])
                    }

                    function c(e) {
                        "object" == typeof e && (e = JSON.stringify(e));
                        var t = sha1.create();
                        return t.update(e), b64.uint8ToBase64(t.digest())
                    }

                    function l() {
                        f.failed = {}, f.verified = {}
                    }

                    var f = {failed: {}, verified: {}}, p = r(o(f, a(writeErrorPOST, i)));
                    return {addIntegrityAttribute: t, verify: p, reset: l}
                }(), designer, addDesignerFunctionality = function () {
                    designer || (designer = designerExports()), designer.areGuidesEnabled = !areGuidesDisabled(), pendo$1.designer || (pendo$1.designer = designer)
                }, removeDesignerFunctionality = function () {
                    pendo$1.designer && (pendo$1.designer = null, delete pendo$1.designer)
                }, pendoDesignerLaunchKey = "pendo-designer-launch", loadResource = function (e, t) {
                    try {
                        var n, i = "text/css", r = "text/javascript";
                        if (_.isString(e) && (e = {url: e}), !trustedOriginForLoadResource(parseUrlOrigin(e.url))) throw new Error;
                        e.type = e.type || /\.css/.test(e.url) ? i : r;
                        var o = null,
                            a = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
                        if (e.type === i) {
                            var s = document.createElement("link");
                            s.type = i, s.rel = "stylesheet", s.href = e.url, ContentVerifier.addIntegrityAttribute(s, e.url), o = s
                        } else {
                            if (isSfdcLightning()) return n = document.createElement("script"), n.addEventListener("load", function () {
                                t(), removeNode(n)
                            }), n.type = r, n.src = e.url, ContentVerifier.addIntegrityAttribute(n, e.url), document.body.appendChild(n), {};
                            n = document.createElement("script"), n.type = r, n.async = !0, n.src = e.url, ContentVerifier.addIntegrityAttribute(n, e.url), o = n, t = _.wrap(t, function (e) {
                                dom.removeNode(n), e.apply(this, _.toArray(arguments).slice(1))
                            })
                        }
                        return a.appendChild(o), loadWatcher(o, e.url, t), o
                    } catch (d) {
                        return {}
                    }
                }, loadWatcher = function (e, t, n) {
                    var i = !1;
                    if (doesExist(n) && (e.onload = function () {
                        i !== !0 && (i = !0, n(null, t))
                    }, e.onerror = function () {
                        tellMaster({status: "error", msg: "Failed to load script", scriptURL: t})
                    }, e.onreadystatechange = function () {
                        i || e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (i = !0, n(null, t))
                    }, "link" === e.tagName.toLowerCase())) {
                        var r = 500;
                        setTimeout(function () {
                            if (!i) {
                                var e = new Image;
                                e.onload = e.onerror = function () {
                                    i !== !0 && (i = !0, n(null, t))
                                }, e.src = t
                            }
                        }, r), setTimeout(function () {
                            i || writeMessage("Failed to load " + t + " within 10 seconds")
                        }, 1e4)
                    }
                }, messageLogger = function (e) {
                    var t = JSON.parse(e.data), n = e.origin;
                    debug(pendo$1.app_name + ": Message: " + JSON.stringify(t) + " from " + n), tellMaster(e.source, {
                        status: "success",
                        msg: "ack",
                        originator: "messageLogger"
                    }, n)
                }, messageReceiver = function (e) {
                    try {
                        messageDispatcher(messageOriginTester(messageValidator(e)))
                    } catch (t) {
                    }
                }, messageValidator = function (e) {
                    var t = "string" == typeof e.data ? e.data : JSON.stringify(e.data), n = e.origin, i = e.source;
                    if (t = JSON.parse(t), t.action) throw new Error("ignore");
                    if (!t.type || "string" != typeof t.type) throw new Error("Invalid Message: Missing 'type' in data format");
                    return {data: t, origin: n, source: i}
                }, trustedOrigin, trustedOriginForLoadResource = function (e) {
                    return 0 === ConfigReader.get("allowedOriginServers", []).length || ConfigReader.get("trainingPartner", !1) || !isBetaAgent(ENV, getPendoConfig()) ? !0 : isTrustedOrigin2(e)
                }, parseUrlOrigin = function (e) {
                    return new URL$1(e).origin
                }, messageOriginTester = function (e) {
                    if (isTrustedOriginOld(e.origin)) return e;
                    throw new Error("Received message from untrusted origin " + e.origin)
                }, designerWindow, onConnectMessage = function (e, t) {
                    if (isUnlocked()) {
                        var n = t.origin;
                        stopGuides(), lockEvents(), DesignerV2.hostConfig || store.dispatch("frames/leave"), designerWindow = t.source, ConfigReader.get("preventUnloadListener") !== !0 && (window.onbeforeunload = function () {
                            unlockEvents(), removeDesignerFunctionality(), tellMaster(t.source, {type: "unload"}, n)
                        }), _.isFunction(detachGuideEventHandlers) && detachGuideEventHandlers(), addDesignerFunctionality(), tellMaster(t.source, {
                            status: "success",
                            type: "connect"
                        }, n), findModuleByName("selection.js") && (log("Designer Modules already loaded."), tellMaster({type: "ready"}, n))
                    }
                }, onModuleMessage = function (e) {
                    moduleLoader(e.moduleURL)
                }, onEnableDebug = function (e) {
                    addSafeWindowMessageListener(messageLogger)
                }, MESSAGE_TYPES = {
                    connect: onConnectMessage, disconnect: function (e) {
                    }, module: onModuleMessage, debug: onEnableDebug
                }, registerMessageHandler = function (e, t) {
                    tellMaster({type: "msg-type-available", "msg-type": e}), MESSAGE_TYPES[e] = t
                }, messageDispatcher = function (e) {
                    var t = e.data;
                    doesExist(MESSAGE_TYPES[t.type]) && MESSAGE_TYPES[t.type](t, e)
                }, moduleRegistry = {}, addModule = function (e) {
                    if (moduleRegistry[e] = {}, "undefined" != typeof CKEDITOR) try {
                        CKEDITOR.config.customConfig = ""
                    } catch (t) {
                    }
                }, hasModule = function (e) {
                    return doesExist(moduleRegistry[e])
                }, findModuleByName = function (e) {
                    if (!moduleRegistry) return null;
                    var t = function (e, t) {
                        return e.indexOf(t) >= 0
                    };
                    for (var n in moduleRegistry) if (t(n, e)) return n;
                    return null
                }, modulesWaiting = [], loadModules = function () {
                    if (!(modulesWaiting.length < 1)) {
                        var e = modulesWaiting.shift();
                        hasModule(e) || loadResource(e, function () {
                            addModule(e), loadModules()
                        })
                    }
                }, moduleLoader = function (e) {
                    e = ensureHttps(e), validateModuleURL(e) && (modulesWaiting.push(e), modulesWaiting.length > 1 || loadModules())
                }, tellMaster = function (e, t, n) {
                    var i = _.uniqueId("pendo-");
                    try {
                        if ("undefined" == typeof t && "undefined" == typeof n && (t = e, e = designerWindow || getDesignerWindow(), n = "*"), t.guid = i, e && _.isFunction(e.postMessage)) {
                            var r = JSON.stringify(t);
                            e.postMessage(r, n)
                        }
                    } catch (o) {
                        var a = o && o.message || "";
                        log("Failed to postMessage: " + a)
                    }
                    return i
                }, detectMaster = function () {
                    return window != window.top
                }, getDesignerWindow = function () {
                    var e = new RegExp("^" + HOST.replace(/^https?:/, "https?:")),
                        t = ConfigReader.get("forceParentDesigner");
                    return !isProdAgent() && t ? window.parent : e.test(location.href) ? window.parent : window.top
                }, announceAgentLoaded = function () {
                    if (detectMaster()) {
                        var e = getDesignerWindow();
                        tellMaster(e, {type: "load", url: location.toString()}, "*")
                    }
                }, listenToMaster = function (e) {
                    pendo$1.app_name = document.title, detectMaster() && (log(pendo$1.app_name + ": listening to messages"), !e && doesExist(window.addEventListener) && window.addEventListener("message", messageReceiver, !1));
                    var t, n;
                    return window.opener && doesExist(window.addEventListener) && _.isFunction(window.opener.postMessage) && (t = addSafeWindowMessageListener(launchPreviewListener), n = addSafeWindowMessageListener(launchDesignerListener), window.opener.postMessage({type: "pendo::ready"}, "*")), function () {
                        doesExist(window.removeEventListener) && window.removeEventListener("message", messageReceiver, !1), _.isFunction(t) && t(), _.isFunction(n) && n()
                    }
                }, addSafeWindowMessageListener = function (e) {
                    var t;
                    return doesExist(window.addEventListener) && _.isFunction(window.addEventListener) && (t = messageOriginTester2(e), window.addEventListener("message", t, !1)), function () {
                        doesExist(window.removeEventListener) && _.isFunction(window.removeEventListener) && t && window.removeEventListener("message", t, !1)
                    }
                }, pendoPreview = "pendo-preview", designerPreview = "current-guide-preview",
                watermarkGuideRequest = function (e) {
                    if (!isTrustedOrigin2(e.origin)) return log("Invalid origin, exiting preview"), q.reject("invalid origin");
                    var t = getGuideUrl(e);
                    if (!t) return log("Invalid guide url, exiting preview"), q.reject("invalid guide url");
                    var n = {url: e.origin + t + "?url=" + encodeURIComponent(pendoDotUrl.get()), withCredentials: !0};
                    return e.headers && (n.headers = e.headers), ajax(n).then(function (e) {
                        var t = e.data.guide;
                        return t
                    })
                }, inMemoryCookies = {}, cookieDomain, allowLocalStorageOnly = function () {
                    return ConfigReader.get("localStorageOnly")
                }, storageIsDisabled = function () {
                    return !!ConfigReader.get("disableCookies")
                }, getCookie = function (e) {
                    var t;
                    t = storageIsDisabled() || allowLocalStorageOnly() ? inMemoryCookies[e] : document.cookie;
                    var n;
                    return (n = new RegExp("(^|; )" + e + "=([^;]*)").exec(t)) ? decodeURIComponent(n[2]) : null
                }, setCookie = function (e, t, n, i) {
                    if (!isInPreviewMode()) {
                        var r = new Date;
                        r.setTime(r.getTime() + n);
                        var o = e + "=" + encodeURIComponent(t) + (n ? ";expires=" + r.toUTCString() : "") + "; path=/" + ("https:" === document.location.protocol || i ? ";secure" : "") + "; SameSite=Strict";
                        cookieDomain && (o += ";domain=" + cookieDomain), storageIsDisabled() || allowLocalStorageOnly() ? inMemoryCookies[e] = o : document.cookie = o
                    }
                }, getPendoCookieKey = function (e) {
                    return "_pendo_" + e + "." + pendo$1.apiKey
                }, get_pendo_cookie = function (e) {
                    return getCookie(getPendoCookieKey(e))
                }, DEFAULT_EXPIRE_LEN = 864e7, set_pendo_cookie = function (e, t, n, i) {
                    n = n || DEFAULT_EXPIRE_LEN, setCookie(getPendoCookieKey(e), t, n, i)
                }, agentStorage = function () {
                    function e() {
                        return storageIsDisabled() ? !1 : hasCookieDomain() ? !1 : s("localStorage")
                    }

                    function t(e) {
                        e.cache && (e.cache = {})
                    }

                    function n(t, n) {
                        if (e()) {
                            var r = n ? t : getPendoCookieKey(t), o = i(localStorage.getItem(r));
                            return null === o && a(t), o
                        }
                        return n ? getCookie(t) : get_pendo_cookie(t)
                    }

                    function i(e) {
                        if (null === e) return null;
                        try {
                            var t = JSON.parse(e);
                            return t.ttl && t.ttl < (new Date).getTime() ? null : String(t.value || t)
                        } catch (n) {
                            return e
                        }
                    }

                    function r(n, i, r, a, d) {
                        if (t(s), e()) try {
                            var u = a ? n : getPendoCookieKey(n);
                            return localStorage.setItem(u, o(i, r)), void t(s)
                        } catch (c) {
                            log("Error trying to write to Localstorage: " + c)
                        }
                        return a ? void setCookie(n, i, r, d) : set_pendo_cookie(n, i, r, d)
                    }

                    function o(e, t) {
                        if (!t) return e;
                        var n = (new Date).getTime() + t;
                        return JSON.stringify({ttl: n, value: e})
                    }

                    function a(t, n) {
                        var i = n ? t : getPendoCookieKey(t);
                        return e() ? localStorage.removeItem(i) : void clearCookie(i)
                    }

                    var s = _.memoize(function (e) {
                        var t;
                        try {
                            t = window[e];
                            var n = "__storage_test__";
                            return t.setItem(n, n), t.removeItem(n), !0
                        } catch (i) {
                            return i instanceof DOMException && (22 === i.code || 1014 === i.code || "QuotaExceededError" === i.name || "NS_ERROR_DOM_QUOTA_REACHED" === i.name) && t && 0 !== t.length
                        }
                    });
                    return {read: n, write: r, clear: a}
                }(), isValidId = function (e) {
                    return doesExist(e) && "" !== e && e !== SUBACCOUNT_DELIMITER && "boolean" != typeof e && "object" != typeof e && !isStringWhiteSpace(e)
                }, isAnonymousVisitor = function (e) {
                    return e && "number" != typeof e ? e.substring(0, TEMP_PREFIX.length) === TEMP_PREFIX : !1
                }, shouldPersist = function () {
                    return !ConfigReader.get("disablePersistence")
                }, removeIdentificationCookies = function (e) {
                    e = e || ["visitorId", "accountId"], _.each(e, function (e) {
                        clearCookie(getPendoCookieKey(e)), agentStorage.clear(e)
                    })
                }, DEFAULT_VISITOR_ID = "VISITOR-UNIQUE-ID", isDefaultVisitor = function (e) {
                    return DEFAULT_VISITOR_ID === e
                }, SUBACCOUNT_DELIMITER = "::", isSubaccount = function (e) {
                    return new RegExp(SUBACCOUNT_DELIMITER).test(e)
                }, shouldVisitorIdentityChange = function (e, t) {
                    return isAnonymousVisitor(e) ? isValidId(t) ? isAnonymousVisitor(t) ? (log("visitor is anonymous: " + t), !1) : isDefaultVisitor(t) ? (log("visitor id is the default: " + t), !1) : (log("Re-mapping visitor identity from " + e + " to " + t), !0) : (log("Not valid visitor id: " + t), !1) : (log("Not change an old, non-anonymous visitor id: " + e), !1)
                }, shouldAccountIdentityChange = function (e, t) {
                    return isValidId(t) ? (log("Re-mapping account identity from " + e + " to " + t), e != t) : (log("Not valid account id: " + t), !1)
                }, identify = makeSafe(function (e, t) {
                    var n = "object" == typeof e, i = null, r = {};
                    if (r.old_visitor_id = get_visitor_id(), r.old_account_id = get_account_id(), n && (i = e, i.visitor = i.visitor || {}, i.account = i.account || {}, i.parentAccount = i.parentAccount || {}, e = i.visitor.id, t = i.account.id, t && !isSubaccount(t) && i.parentAccount.id && (t = "" + i.parentAccount.id + SUBACCOUNT_DELIMITER + t), updateOptions(i)), !isValidId(e)) return void log("Invalid visitor id " + e);
                    set_visitor_id(e), isValidId(t) ? set_account_id(t) : (t = get_account_id(), isValidId(t) || (agentStorage.clear("accountId"), t = null));
                    var o = shouldVisitorIdentityChange(r.old_visitor_id, e),
                        a = shouldAccountIdentityChange(r.old_account_id, t);
                    if (o || a) {
                        if (shouldInitializeFeedback(e) && !_.isEmpty(i)) {
                            var s = ConfigReader.get("feedbackSettings"), d = JSON.parse(JSON.stringify(i));
                            Feedback.init(d, s)
                        }
                        r.visitor_id = e, r.account_id = t, collectEvent("identify", r), flushLater(), Events.identify.trigger(r)
                    }
                    r.old_visitor_id !== e && queueGuideReload()
                }), get_visitor_id = function () {
                    var e, t = pendo$1.visitorId;
                    return isValidId(t) || (shouldPersist() ? (e = agentStorage.read("visitorId"), isValidId(e) || (e = generate_unique_id(TEMP_PREFIX), agentStorage.write("visitorId", e))) : e = generate_unique_id(TEMP_PREFIX), pendo$1.visitorId = e), pendo$1.visitorId
                }, set_visitor_id = function (e) {
                    pendo$1.visitorId = "" + e, shouldPersist() && agentStorage.write("visitorId", pendo$1.visitorId, DEFAULT_EXPIRE_LEN, !1, !0)
                }, get_account_id = function () {
                    if (!isValidId(pendo$1.accountId) && shouldPersist()) {
                        var e = agentStorage.read("accountId");
                        pendo$1.accountId = e
                    }
                    return pendo$1.accountId
                }, set_account_id = function (e) {
                    pendo$1.accountId = "" + e, isValidId(e) && shouldPersist() && agentStorage.write("accountId", pendo$1.accountId, null, !1, !0)
                }, SIZE_UNIQUE_ID = 11, pendoCore = getPendoCore(), generate_unique_id = function (e) {
                    return e + randomString(SIZE_UNIQUE_ID)
                }, TEMP_PREFIX = "_PENDO_T_", pageLoad = makeSafe(function (e) {
                    if (e = e || pendoDotUrl.get(), e && e !== pageLoad.lastUrl) {
                        pageLoad.lastUrl = e;
                        var t = -1;
                        restrictP1Access() || announceAgentLoaded(), debug("sending load event for url " + e), "undefined" != typeof performance && "undefined" != typeof performance.timing && (t = performance.timing.loadEventStart - performance.timing.fetchStart);
                        var n = {load_time: t};
                        detectMaster() && (n.is_frame = !0), collectEvent("load", n, e), queueGuideReload(e), flushLater()
                    }
                }), queueGuideReload = function (e) {
                    pendoCore && (queueGuideReload.pending && clearTimeout(queueGuideReload.pending), queueGuideReload.pending = setTimeout(function () {
                        delete queueGuideReload.pending, reloadGuides(e)
                    }, 0))
                }, restrictP1Access = _.memoize(function () {
                    return ConfigReader.get("restrictP1Access")
                }), initializeCounter = 0, isFeedbackOn = function () {
                    return ConfigReader.get("pendoFeedback")
                }, isDisableFeedbackAutoInitOn = function () {
                    return ConfigReader.get("disableFeedbackAutoInit")
                }, stopListenToMaster, initialize = makeSafe(function (e) {
                    var t = "initializeImmediately";
                    if ("complete" !== document.readyState && !get(e, t) && !ConfigReader.get(t)) return void enqueueCall(pendo$1, "initialize", arguments);
                    if (log("pendo.initialize called with " + JSON.stringify(e)), pendo$1.apiKey) return void (1 === initializeCounter++ && log(["pendo.initialize only needs to be called once", isSfdcLightning() ? " per namespace" : "", ". Use pendo.updateOptions to update metadata after the agent has initialized."].join("")));
                    if (e || (e = {}), _.isEmpty(getJwtInfoCopy())) {
                        var n = JWT.getJwtOptions(e, "initialize");
                        n && (setJwtInfo(_.pick(e, "jwt", "signingKeyName")), _.extend(e, n))
                    }
                    if (_.isString(e)) return ajax.get(e).then(function (e) {
                        return initialize(PendoConfig = e.data)
                    });
                    EventErrorLogger.run(), store.dispatch("location/init", e.location || {}), ConfigReader.setOriginalOptions(e), setUpdatedOptions(e), initDataHost(), exportDataHost(pendo$1);
                    var i = ConfigReader.get("cookieDomain");
                    if (i && setCookieDomain(i, location.host), pendo$1.apiKey = getApiKey(e), pendo$1.additionalApiKeys = getAdditionalApiKeys(e), !pendo$1.apiKey && pendo$1.additionalApiKeys && pendo$1.additionalApiKeys.length && (pendo$1.apiKey = pendo$1.additionalApiKeys[0]), !pendo$1.apiKey) return void debug("API key is not set, Pendo will not initialize.");
                    pendo$1.apiKey = "" + pendo$1.apiKey;
                    for (var r = 0; r < pendo$1.additionalApiKeys.length; r++) pendo$1.additionalApiKeys[r] = "" + pendo$1.additionalApiKeys[r];
                    if (store.commit("metadata/setMetadata", {selfHosted: isSelfHosted()}), TextCapture.initialize(), e.logStackTraces && (pendo$1.logStackTraces = e.logStackTraces), ConfigReader.get("preferBroadcastChannel") && SingletonMessageHandler.secure(!0), pendoCore && (pendo$1.disableGuideCenterContentSearch = e.disableGuideCenterContentSearch, registerEventHandlers(e), stopListenToMaster = listenToMaster(restrictP1Access()), initGuides(), wirePage(), startDebuggingModuleIfEnabled(), launchDesignerOrPreview(e)), shouldPersist() || removeIdentificationCookies(), e.usePendoAgentAPI !== !0 && pendo$1.updateOptions(e), e.visitorId && e.visitorId != DEFAULT_VISITOR_ID) pendo$1.identify(e.visitorId); else if (e.visitor && e.visitor.id && e.visitor.id != DEFAULT_VISITOR_ID) {
                        var o = null;
                        e.account && e.account.id && (o = e.account.id), pendo$1.identify(e.visitor.id, o)
                    }
                    pendoDotUrl.watch(pendo$1.pageLoad), pageLoad(pendoDotUrl.get()), localStorageNavigation(e), pendoCore && pendoDotEvents.ready();
                    var a = get_visitor_id();
                    if (shouldInitializeFeedback(a)) {
                        var s = ConfigReader.get("feedbackSettings");
                        Feedback.init(getOptionsCopy(), s)["catch"](_.noop)
                    }
                    initializeCounter++, announceFrameToDesignerPlugin(), flushCallQueue()
                }), isReady = function (e) {
                    return e || (e = pendo$1), e.doesExist(e.apiKey)
                }, updatedOptions = null, setUpdatedOptions = function (e) {
                    updatedOptions = JSON.parse(JSON.stringify(e || {}))
                }, getOptionsCopy = function () {
                    return JSON.parse(JSON.stringify(updatedOptions || ConfigReader.getOriginalOptions() || {}))
                }, jwtInfo = null, setJwtInfo = function (e) {
                    jwtInfo = JSON.parse(JSON.stringify(e || {}))
                }, getJwtInfoCopy = function () {
                    return null !== jwtInfo ? jwtInfo : {}
                }, getFeedbackSettings = function () {
                    return JSON.parse(JSON.stringify(ConfigReader.get("feedbackSettings", {})))
                }, validateInstall = function (e) {
                    function t(t, i, r, o) {
                        e ? n.push({type: r, message: i, value: o}) : doesExist(o) ? console[t](i, o) : console[t](i)
                    }

                    var n = [];
                    if ("undefined" == typeof console || !console.group) return "Please run this test in the latest version of Chrome, Firefox, Safari, or Internet Explorer";
                    e || console.group("Pendo Install Validation"), pendo$1.apiKey || t("error", "No Pendo API key configured. Make sure to call pendo.initialize() with a valid Pendo API key.", "apiKey");
                    var i = get_visitor_id();
                    isAnonymousVisitor(i) && t("warn", 'The current visitor is not identified and will be treated as "anonymous". Is this expected? (You might have used "VISITOR-UNIQUE-ID" as the visitor ID)', "isAnonymousVisitor"), isDefaultVisitor(i) && t("error", "The current visitor ID matches the example visitor ID from the Pendo installation instructions.", "isDefaultVisitor");
                    var r = get_account_id();
                    r || t("warn", "The current visitor is not associated with an account. Is this expected?", "noVisitorInAccount"), "ACCOUNT-UNIQUE-ID" === r && t("error", "The current account ID matches the example account ID from the Pendo installation instructions.", "exampleAccountId"), isFeedbackOn() && Feedback.isUnsupportedIE() && t("warn", "The current version of IE is not supported by Pendo Feedback", "ieFeedbackSupport");
                    var o = getMetadata();
                    return _.each(["visitor", "account", "parentAccount"], function (n) {
                        var i = o && o[n], r = _.chain(i).keys().value();
                        r.length > 0 ? (e || console.group(n + " metadata (does this look right?):"), _.each(i, function (e, i) {
                            _.isObject(e) && !_.isArray(e) ? t("warn", i + " is an object and will be ignored.", n + "Metadata", e) : _.isArray(e) && _.any(e, _.isObject) ? t("warn", i + " contains object values. The objects will be ignored.", n + "Metadata", e) : t("log", i + ":", n + "Metadata", e)
                        }), e || console.groupEnd()) : "parentAccount" !== n && t("warn", "No " + n + " metadata found. Learn more about metadata here: http://help.pendo.io/resources/support-library/installation/metadata.html", n + "MetaData")
                    }), e ? n : void console.groupEnd()
                }, validateNativeMethods = function (e) {
                    var t = [{nativeType: Object.prototype, displayName: "Object  "}, {
                        nativeType: Number.prototype,
                        displayName: "Number  "
                    }, {nativeType: String.prototype, displayName: "String  "}, {
                        nativeType: Function.prototype,
                        displayName: "Function"
                    }, {nativeType: Boolean.prototype, displayName: "Boolean "}, {
                        nativeType: Array.prototype,
                        displayName: "Array   "
                    }, {nativeType: Date.prototype, displayName: "Date    "}, {
                        nativeType: RegExp.prototype,
                        displayName: "RegExp  "
                    }, {nativeType: JSON, displayName: "JSON    ", propsToCheck: ["parse", "stringify"]}, {
                        nativeType: Math,
                        displayName: "Math    "
                    }, {nativeType: Promise$1.prototype, displayName: "Promise "}, {
                        nativeType: window,
                        displayName: "Window ",
                        propsToCheck: ["alert", "asap", "atob", "btoa", "cancelAnimationFrame", "clearImmediate", "clearInterval", "clearTimeout", "close", "confirm", "getComputedStyle", "getSelection", "open", "postMessage", "prompt", "requestAnimationFrame", "scroll", "scrollBy", "scrollTo", "setImmediate", "setInterval", "setTimeout", "stop", "XMLHttpRequest", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent"]
                    }], n = !1;
                    _.each(t, function (e) {
                        var t = e.nativeType, i = [], r = e.propsToCheck || Object.getOwnPropertyNames(t);
                        _.each(r, function (e) {
                            try {
                                if (e && t[e] && "function" == typeof t[e]) {
                                    var n = t[e].toString().includes("[native code]");
                                    n || i.push(e)
                                }
                            } catch (r) {
                            }
                        }), i.length && (e.nonNativeImplementations = i, n = !0)
                    });
                    var i = {hasNonNativeMethods: n, implementations: []};
                    return e || console.group("Native javascript method check:"), n ? (e || console.warn("Pendo has detected that your application may be changing native javascript functionality. We suggest consulting an engineer or your CSM to better understand if these changes will negatively impact Pendo's ability to function properly"), _.each(t, function (t) {
                        if (t.nonNativeImplementations) {
                            var n = t.displayName.trim();
                            return e ? void i.implementations.push({
                                nativeType: n,
                                nonNativeImplementations: t.nonNativeImplementations
                            }) : void console.warn(n + " | Contains the following non-native implementations:", t.nonNativeImplementations.sort().join(", "))
                        }
                    }), e ? i : void console.groupEnd()) : e ? i : (console.log("Environment uses native javascript implementations"), console.groupEnd())
                }, validateBuiltInGlobals = function (e) {
                    var t = [];
                    if (_.isNumber(window.frames.length) && _.isFinite(window.frames.length) && ShadowSizzle("iframe").length + ShadowSizzle("frame").length === window.frames.length || t.push("Pendo has detected that window.frames.length has been modified"), window.Event && window.Event.prototype || t.push("Pendo has detected that window.Event has been modified"), t.length) {
                        if (e) return t;
                        console.group("Global variables:"), _.each(t, function (e) {
                            console.warn(e)
                        }), console.groupEnd()
                    }
                }, validateEnvironment = function () {
                    validateInstall(), validateNativeMethods(), validateBuiltInGlobals(), ConfigReader.validate(console);
                    var e, t = window.location.href;
                    console.group("URL Validation"), console.log("Browser URL:", t);
                    try {
                        e = getHref(), e !== t && (console.warn("URL has been customized:", e), console.warn("Custom URL will affect data collection, guide requests, and reload tests"))
                    } catch (n) {
                        console.error("Error getting Custom URL", n)
                    }
                    try {
                        var i = pendoDotUrl.externalizeURL();
                        i !== e && (console.warn("URL has been sanitized to prevent exposing sensitive data:", i), console.warn("Sanitized URL will affect sending data and guides requests"))
                    } catch (n) {
                        console.error("Error getting Externalized URL", n)
                    }
                    console.groupEnd()
                }, BuildingBlocks = {
                    BuildingBlockGuides: BuildingBlockGuides,
                    BuildingBlockResourceCenter: BuildingBlockResourceCenter,
                    BuildingBlockTemplates: BuildingBlockTemplates,
                    BuildingBlockTooltips: BuildingBlockTooltips,
                    BuildingBlockSvgs: BuildingBlockSvgs
                }, memoizedWarnDep = _.memoize(function (e, t) {
                    e = e || "Function", t = t ? " and " + t : "";
                    var n = e + " deprecated" + t;
                    return log(n), n
                }), GuideActivity = function () {
                    function e(e) {
                        return e && "click" === e.type
                    }

                    function t(e) {
                        return "pendo-base" == e.id ? !0 : h(e.parentElem) ? t(e.parentElem) : !1
                    }

                    function n(e) {
                        return !!i(e)
                    }

                    function i(e) {
                        return "BUTTON" === e.tag && (/^pendo-close-guide/.test(e.id) || /^pendo-button/.test(e.id)) ? {
                            type: e.tag,
                            id: e.id
                        } : "pendo-guide-container" !== e.id && h(e.parentElem) ? i(e.parentElem) : null
                    }

                    function r(e) {
                        return !!o(e)
                    }

                    function o(e) {
                        return "A" === e.tag ? {
                            type: e.tag,
                            id: e.id
                        } : "pendo-guide-container" !== e.id && h(e.parentElem) ? o(e.parentElem) : null
                    }

                    function a(i, o) {
                        return h(i) && e(o) && t(i) && (n(i) || r(i)) ? !0 : !1
                    }

                    function s(e) {
                        var t = e.guide.activeModule;
                        return t && t.attributes && t.attributes.resourceCenter && "AnnouncementsModule" === t.attributes.resourceCenter.moduleId
                    }

                    function d(e) {
                        var t = dom("#" + e).closest("[data-pendo-announcement-guide-id]"),
                            n = t.attr("data-pendo-announcement-guide-id"), i = _.find(pendo$1.guides, function (e) {
                                return e.id === n
                            });
                        return i ? {guide: i, step: i.steps[0]} : undefined
                    }

                    function u(e, t) {
                        if (t.props && t.props.id && t.props.id === e) return t;
                        if (t.children !== undefined) for (var n = 0; n < t.children.length; n++) {
                            var i = u(e, t.children[n]);
                            if (i !== undefined) return i
                        }
                        return undefined
                    }

                    function c(e) {
                        if (e !== undefined) {
                            if ("a" === e.type) return [{
                                action: "openLink",
                                url: sanitizeUrl(e.props.href),
                                target: e.props.target
                            }];
                            if (e.actions !== undefined) return _.map(e.actions, function (e) {
                                switch (e.action) {
                                    case"openLink":
                                        var t = m(e.parameters, {name: "url"}), n = m(e.parameters, {name: "target"});
                                        return {action: e.action, url: sanitizeUrl(t.value), target: n.value};
                                    case"submitPollAndGoToStep":
                                    case"goToStep":
                                        var i = m(e.parameters, {name: "goToStepId"});
                                        return {action: e.action, guideStepId: i.value};
                                    case"guideSnoozed":
                                        var r = m(e.parameters, {name: "snooze_duration"}),
                                            o = m(e.parameters, {name: "time_unit"});
                                        return {action: e.action, duration: r.value, timeUnit: o.value};
                                    case"showGuide":
                                    case"launchGuide":
                                        var a = e.parameters[0];
                                        return {action: e.action, guideId: a.value};
                                    case"advanceGuide":
                                    case"previousStep":
                                    case"submitPoll":
                                    case"dismissGuide":
                                        return {action: e.action};
                                    default:
                                        return {}
                                }
                            })
                        }
                        return []
                    }

                    function l(e) {
                        var t = getActiveGuide();
                        if (t && (!s(t) || (t = d(e.id)))) {
                            var n = o(e) || i(e) || {type: e.tag, id: e.id}, r = u(n.id, t.step.domJson);
                            if (r) {
                                var a = TextCapture.isEnabled() ? {ui_element_text: r && r.content} : {}, l = c(r);
                                return createGuideEvent(g(a, {
                                    type: f,
                                    visitorId: get_visitor_id(),
                                    ui_element_id: n.id,
                                    ui_element_type: n.type,
                                    ui_element_actions: l,
                                    guideId: t.guide.id,
                                    stepId: t.step.id,
                                    duration: p(),
                                    language: t.guide.language
                                }))
                            }
                        }
                    }

                    var f = "guideActivity", p = function () {
                        return (new Date).getTime() - getSeenTime()
                    }, g = _.extend, h = _.isObject, m = _.findWhere;
                    return {
                        type: f, handler: function (e) {
                            var t = e.data[0], n = e.data[1];
                            if (a(t, n)) {
                                var i = l(t);
                                i && stageGuideEvent(i)
                            }
                        }
                    }
                }(), ResourceCenterActivity = function () {
                    function e(e) {
                        return e && "click" === e.type
                    }

                    function t(e) {
                        return "pendo-resource-center-container" == e.id ? !0 : f(e.parentElem) ? t(e.parentElem) : !1
                    }

                    function n(e) {
                        return !!i(e)
                    }

                    function i(e) {
                        var t = e.cls.split(" ");
                        if (-1 !== t.indexOf("_pendo-resource-center-module-list-item")) {
                            var n = dom("#" + e.id).closest("[data-pendo-module-guide-id]");
                            return {type: "BUTTON", elementId: n.attr("data-pendo-module-guide-id")}
                        }
                        return "pendo-resource-center-container" !== e.id && f(e.parentElem) ? i(e.parentElem) : null
                    }

                    function r(e) {
                        return !!o(e)
                    }

                    function o(e) {
                        var t = e.cls.split(" ");
                        if (-1 !== t.indexOf("_pendo-resource-center-guidelist-module-listed-guide") || -1 !== t.indexOf("_pendo-resource-center-onboarding-module-listed-guide")) {
                            var n = getActiveGuide();
                            if (n) {
                                var i = e.id.split("-").pop(), r = n.guide.activeModule;
                                if (r && r.attributes && r.attributes.resourceCenter) return {
                                    type: "BUTTON",
                                    elementId: r.attributes.resourceCenter.children[i]
                                }
                            }
                            return null
                        }
                        return "pendo-resource-center-container" !== e.id && f(e.parentElem) ? o(e.parentElem) : null
                    }

                    function a(e) {
                        return !!s(e)
                    }

                    function s(e) {
                        return "BUTTON" === e.tag && (/^pendo-close-guide/.test(e.id) || /^pendo-left-caret/.test(e.id)) ? {
                            type: e.tag,
                            id: e.id
                        } : "pendo-guide-container" !== e.id && f(e.parentElem) ? s(e.parentElem) : null
                    }

                    function d(i, o) {
                        return f(i) && e(o) && t(i) && (a(i, !0) || n(i) || r(i)) ? !0 : !1
                    }

                    function u(e) {
                        var t = getActiveGuide();
                        if (t) {
                            var n = t.guide.activeModule, r = s(e);
                            if (r ? (r = {elementId: r.id}, /^pendo-close-guide/.test(r.id) ? r.actions = [{action: "dismissGuide"}] : /^pendo-left-caret/.test(r.id) && (r.actions = [{
                                action: "showGuide",
                                guideId: t.guide.id
                            }])) : r = i(e) || o(e), r) return r.guideId || (r.guideId = n ? n.id : t.guide.id), r.stepId || (r.stepId = n ? n.steps[0].id : t.step.id), r.actions || (r.actions = [{
                                action: "showGuide",
                                guideId: r.elementId
                            }]), r.language || (r.language = n ? n.language : t.guide.language), createGuideEvent({
                                type: c,
                                visitorId: get_visitor_id(),
                                ui_element_id: r.elementId,
                                ui_element_type: r.type,
                                ui_element_actions: r.actions,
                                guideId: r.guideId,
                                stepId: r.stepId,
                                duration: l(),
                                language: r.language
                            })
                        }
                    }

                    var c = "guideActivity", l = function () {
                        return (new Date).getTime() - getSeenTime()
                    }, f = _.isObject;
                    return {
                        type: c, handler: function (e) {
                            var t = e.data[0], n = e.data[1];
                            if (d(t, n)) {
                                var i = u(t);
                                i && stageGuideEvent(i)
                            }
                        }
                    }
                }(), config = getPendoConfigFromEnclosingScope(), pendo = createPendoObject(config);
            initAgent(pendo, config) && applyPrototypeJsonShim()
        }()
    }(window, document), pendo.defaultLauncher && pendo.defaultLauncher('<div class="_pendo-launcher-content_" style="border-color:<%= data.color %>">\n    <div class="_pendo-launcher-header_">\n        <img src="<%= data.launcherBadgeUrl %>"/>\n        <div class="_pendo-launcher-title_"><%= data.title %></div>\n        <% if (data.enableSearch) { %>\n        <div class="_pendo-launcher-search-box_">\n        <input type="text" placeholder="Type here to start looking..." />\n        </div>\n        <% } %>\n    </div>\n    <div class="_pendo-launcher-guide-listing_">\n    <% _.each(guides, function(guide) { %>\n        <div class="_pendo-launcher-item_" id="launcher-<%= guide.id %>">\n            <a href="javascript:void(0);"><%= guide.name %></a>\n        </div>\n    <% }) %>\n    </div>\n    <% if (hidePoweredBy) { %>\n    <div class="_pendo-launcher-footer_"></div>\n    <% } else { %>\n    <div class="_pendo-launcher-footer_ _pendo-launcher-footer-credits_">\n        <span>powered by pendo</span>\n    </div>\n    <% } %>\n</div>\n', function (obj) {
        obj || (obj = {});
        var __t, __p = "";
        Array.prototype.join;
        with (obj) __p += '<div class="_pendo-launcher-content_" style="border-color:' + (null == (__t = data.color) ? "" : __t) + '">\n    <div class="_pendo-launcher-header_">\n        <img src="' + (null == (__t = data.launcherBadgeUrl) ? "" : __t) + '"/>\n        <div class="_pendo-launcher-title_">' + (null == (__t = data.title) ? "" : __t) + "</div>\n        ", data.enableSearch && (__p += '\n        <div class="_pendo-launcher-search-box_">\n        <input type="text" placeholder="Type here to start looking..." />\n        </div>\n        '), __p += '\n    </div>\n    <div class="_pendo-launcher-guide-listing_">\n    ', _.each(guides, function (e) {
            __p += '\n        <div class="_pendo-launcher-item_" id="launcher-' + (null == (__t = e.id) ? "" : __t) + '">\n            <a href="javascript:void(0);">' + (null == (__t = e.name) ? "" : __t) + "</a>\n        </div>\n    "
        }), __p += "\n    </div>\n    ", __p += hidePoweredBy ? '\n    <div class="_pendo-launcher-footer_"></div>\n    ' : '\n    <div class="_pendo-launcher-footer_ _pendo-launcher-footer-credits_">\n        <span>powered by pendo</span>\n    </div>\n    ', __p += "\n</div>\n";
        return __p
    });
})({
    environmentName: "production",
    blockAgentMetadata: false,

    contentHost: "content.pendo-cdn.pluralsight.com",

    dataHost: "data.pendo-cdn.pluralsight.com",


    stagingServers: ["app-local.pluralsight.com", "app-stage.pluralsight.com", "local.pluralsight.com", "staging-learn.acloud.guru", /flow-staging\.pluralsight\.com/, /staging-cloudcraft\.linuxacademy\.com/],
    stagingAgentUrl: "https://content.pendo-cdn.pluralsight.com/agent/static/a0897c02-daf0-42c3-704b-aac71be04852/pendo-staging.js",

    allowedOriginServers: ["https://pendo-static-5651335176912896.storage.googleapis.com"],


    adoptPrioritizeAdoptGuides: false,
    allowCrossOriginFrames: false,
    disableCookies: false,
    disableDesignerKeyboardShortcut: false,
    disableFeedbackAutoInit: false,
    disableGlobalCSS: false,
    disableGuidePseudoStyles: false,
    disablePersistence: false,
    enableDebugEvents: false,
    enableGuideTimeout: true,
    enableSignedMetadata: true,
    excludeAllText: false,
    frameIdentitySync: false,
    freeNPSData: false,
    guideValidation: false,
    interceptElementRemoval: false,
    localStorageOnly: true,
    pendoCore: true,
    pendoFeedback: true,
    preferBroadcastChannel: true,
    preferMutationObserver: false,
    preventCodeInjection: false,
    requireHTTPS: true,
    requireSignedMetadata: true,
    restrictP1Access: true,
    siblingSelectors: false,
    trainingPartner: false,
    guideSeenTimeoutLength: 0,
    xhrTimings: false,
    xhrWhitelist: null,
    htmlAttributeBlacklist: null,
    htmlAttributes: /^(tabindex)$/i,
    apiKey: "a0897c02-daf0-42c3-704b-aac71be04852",
    feedbackSettings: {
        productId: "87ff9507-bb0c-474b-9fd9-df58ff98bfb6",
        apiUrl: "https://api.feedback.us.pendo.io",
        siteUrl: "https://feedback.us.pendo.io",
        vendorId: "939df382-d82f-41cd-80d5-d661a9d8acf0",
        type: "PORTAL"
    }
});