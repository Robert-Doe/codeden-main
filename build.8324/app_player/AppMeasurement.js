// For license information, see `https://assets.adobedtm.com/extensions/EPbde2f7ca14e540399dcc1f8208860b7b/AppMeasurement.js`.
function AppMeasurement(f) {
    var g = this;
    g.version = "2.22.0";
    var p = window;
    p.s_c_in || (p.s_c_il = [], p.s_c_in = 0), g._il = p.s_c_il, g._in = p.s_c_in, g._il[g._in] = g, p.s_c_in++, g._c = "s_c";
    var d = p.AppMeasurement.ic;
    d || (d = null);
    var l, b, k, m = p;
    try {
        for (l = m.parent, b = m.location; l && l.location && b && "" + l.location != "" + b && m.location && "" + l.location != "" + m.location && l.location.host === b.host;) l = (m = l).parent
    } catch (e) {
    }
    g.C = function (e) {
        try {
            console.log(e)
        } catch (t) {
        }
    }, g.Ra = function (e) {
        return "" + parseInt(e) == "" + e
    }, g.replace = function (e, t, a) {
        return !e || e.indexOf(t) < 0 ? e : e.split(t).join(a)
    }, g.escape = function (e) {
        var t, a;
        if (!e) return e;
        for (e = encodeURIComponent(e), t = 0; t < 7; t++) a = "+~!*()'".substring(t, t + 1), 0 <= e.indexOf(a) && (e = g.replace(e, a, "%" + a.charCodeAt(0).toString(16).toUpperCase()));
        return e
    }, g.unescape = function (e) {
        if (!e) return e;
        e = 0 <= e.indexOf("+") ? g.replace(e, "+", " ") : e;
        try {
            return decodeURIComponent(e)
        } catch (t) {
        }
        return unescape(e)
    }, g.Nb = function () {
        var e, t = p.location.hostname, a = g.fpCookieDomainPeriods;
        if (a || (a = g.cookieDomainPeriods), t && !g.Ka && !/^[0-9.]+$/.test(t) && (a = 2 < (a = a ? parseInt(a) : 2) ? a : 2, 0 <= (e = t.lastIndexOf(".")))) {
            for (; 0 <= e && 1 < a;) e = t.lastIndexOf(".", e - 1), a--;
            g.Ka = 0 < e ? t.substring(e) : t
        }
        return g.Ka
    }, g.c_r = g.cookieRead = function (e) {
        e = g.escape(e);
        var t = " " + g.d.cookie, a = t.indexOf(" " + e + "="), n = a < 0 ? a : t.indexOf(";", a);
        return "[[B]]" != (e = a < 0 ? "" : g.unescape(t.substring(a + 2 + e.length, n < 0 ? t.length : n))) ? e : ""
    }, g.c_w = g.cookieWrite = function (e, t, a) {
        var n, i = g.Nb(), r = g.cookieLifetime;
        return t = "" + t, r = r ? ("" + r).toUpperCase() : "", a && "SESSION" != r && "NONE" != r && ((n = "" != t ? parseInt(r || 0) : -60) ? (a = new Date).setTime(a.getTime() + 1e3 * n) : 1 === a && (n = (a = new Date).getYear(), a.setYear(n + 2 + (n < 1900 ? 1900 : 0)))), e && "NONE" != r ? (g.d.cookie = g.escape(e) + "=" + g.escape("" != t ? t : "[[B]]") + "; path=/;" + (a && "SESSION" != r ? " expires=" + a.toUTCString() + ";" : "") + (i ? " domain=" + i + ";" : "") + (g.writeSecureCookies ? " secure;" : ""), g.cookieRead(e) == t) : 0
    }, g.Kb = function () {
        var e = g.Util.getIeVersion();
        "number" == typeof e && e < 10 && (g.unsupportedBrowser = !0, g.xb(g, function () {
        }))
    }, g.ya = function () {
        var e = navigator.userAgent;
        return "Microsoft Internet Explorer" === navigator.appName || 0 <= e.indexOf("MSIE ") || 0 <= e.indexOf("Trident/") && 0 <= e.indexOf("Windows NT 6")
    }, g.xb = function (e, t) {
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && "function" == typeof e[a] && (e[a] = t)
    }, g.K = [], g.fa = function (e, t, a) {
        if (g.La) return 0;
        g.maxDelay || (g.maxDelay = 250);
        var n = 0, i = (new Date).getTime() + g.maxDelay, r = g.d.visibilityState,
            o = ["webkitvisibilitychange", "visibilitychange"];
        if (r || (r = g.d.webkitVisibilityState), r && "prerender" == r) {
            if (!g.ga) for (g.ga = 1, a = 0; a < o.length; a++) g.d.addEventListener(o[a], function () {
                var e = g.d.visibilityState;
                e || (e = g.d.webkitVisibilityState), "visible" == e && (g.ga = 0, g.delayReady())
            });
            n = 1, i = 0
        } else a || g.u("_d") && (n = 1);
        return n && (g.K.push({m: e, a: t, t: i}), g.ga || setTimeout(g.delayReady, g.maxDelay)), n
    }, g.delayReady = function () {
        var e, t = (new Date).getTime(), a = 0;
        for (g.u("_d") ? a = 1 : g.Aa(); 0 < g.K.length;) {
            if (e = g.K.shift(), a && !e.t && e.t > t) {
                g.K.unshift(e), setTimeout(g.delayReady, parseInt(g.maxDelay / 2));
                break
            }
            g.La = 1, g[e.m].apply(g, e.a), g.La = 0
        }
    }, g.setAccount = g.sa = function (e) {
        var t, a;
        if (!g.fa("setAccount", arguments)) if (g.account = e, g.allAccounts) for (t = g.allAccounts.concat(e.split(",")), g.allAccounts = [], t.sort(), a = 0; a < t.length; a++) 0 != a && t[a - 1] == t[a] || g.allAccounts.push(t[a]); else g.allAccounts = e.split(",")
    }, g.foreachVar = function (e, t) {
        var a, n, i, r, o = "";
        for (i = n = "", g.lightProfileID ? (a = g.O, (o = g.lightTrackVars) && (o = "," + o + "," + g.la.join(",") + ",")) : (a = g.g, (g.pe || g.linkType) && (o = g.linkTrackVars, n = g.linkTrackEvents, g.pe && (i = g.pe.substring(0, 1).toUpperCase() + g.pe.substring(1), g[i] && (o = g[i].ec, n = g[i].cc))), o && (o = "," + o + "," + g.F.join(",") + ","), n && o && (o += ",events,")), t && (t = "," + t + ","), n = 0; n < a.length; n++) i = a[n], (r = g[i]) && (!o || 0 <= o.indexOf("," + i + ",")) && (!t || 0 <= t.indexOf("," + i + ",")) && e(i, r)
    }, g.o = function (e, t, a, n, i) {
        var r, o, c, s, l = "", u = 0;
        if ("contextData" == e && (e = "c"), t) {
            for (r in t) if (!(Object.prototype[r] || i && r.substring(0, i.length) != i) && t[r] && (!a || 0 <= a.indexOf("," + (n ? n + "." : "") + r + ","))) {
                if (c = !1, u) for (o = 0; o < u.length; o++) if (r.substring(0, u[o].length) == u[o]) {
                    c = !0;
                    break
                }
                if (!c && ("" == l && (l += "&" + e + "."), o = t[r], i && (r = r.substring(i.length)), 0 < r.length)) if (0 < (c = r.indexOf("."))) c = (i || "") + (o = r.substring(0, c)) + ".", u || (u = []), u.push(c), l += g.o(o, t, a, n, c); else if ("boolean" == typeof o && (o = o ? "true" : "false"), o) {
                    if ("retrieveLightData" == n && i.indexOf(".contextData.") < 0) switch (c = r.substring(0, 4), s = r.substring(4), r) {
                        case"transactionID":
                            r = "xact";
                            break;
                        case"channel":
                            r = "ch";
                            break;
                        case"campaign":
                            r = "v0";
                            break;
                        default:
                            g.Ra(s) && ("prop" == c ? r = "c" + s : "eVar" == c ? r = "v" + s : "list" == c ? r = "l" + s : "hier" == c && (r = "h" + s, o = o.substring(0, 255)))
                    }
                    l += "&" + g.escape(r) + "=" + g.escape(o)
                }
            }
            "" != l && (l += "&." + e)
        }
        return l
    }, g.usePostbacks = 0, g.Qb = function () {
        var e, t, a, n, i, r, o, c, s = "", l = "", u = "", f = n = "", p = g.T();
        if (g.lightProfileID ? (e = g.O, (l = g.lightTrackVars) && (l = "," + l + "," + g.la.join(",") + ",")) : (e = g.g, (g.pe || g.linkType) && (l = g.linkTrackVars, u = g.linkTrackEvents, g.pe && (n = g.pe.substring(0, 1).toUpperCase() + g.pe.substring(1), g[n] && (l = g[n].ec, u = g[n].cc))), l && (l = "," + l + "," + g.F.join(",") + ","), u && (u = "," + u + ",", l && (l += ",events,")), g.events2 && (f += ("" != f ? "," : "") + g.events2)), p && p.getCustomerIDs) {
            if (n = d, i = p.getCustomerIDs()) for (t in i) Object.prototype[t] || "object" == typeof (a = i[t]) && (n || (n = {}), a.id && (n[t + ".id"] = a.id), a.authState && (n[t + ".as"] = a.authState));
            n && (s += g.o("cid", n))
        }
        for (g.AudienceManagement && g.AudienceManagement.isReady() && (s += g.o("d", g.AudienceManagement.getEventCallConfigParams())), t = 0; t < e.length; t++) {
            if (n = e[t], i = g[n], a = n.substring(0, 4), r = n.substring(4), i || ("events" == n && f ? (i = f, f = "") : "marketingCloudOrgID" == n && p && g.V("ECID") && (i = p.marketingCloudOrgID)), i && (!l || 0 <= l.indexOf("," + n + ","))) {
                switch (n) {
                    case"customerPerspective":
                        n = "cp";
                        break;
                    case"marketingCloudOrgID":
                        n = "mcorgid";
                        break;
                    case"supplementalDataID":
                        n = "sdid";
                        break;
                    case"timestamp":
                        n = "ts";
                        break;
                    case"dynamicVariablePrefix":
                        n = "D";
                        break;
                    case"visitorID":
                        n = "vid";
                        break;
                    case"marketingCloudVisitorID":
                        n = "mid";
                        break;
                    case"analyticsVisitorID":
                        n = "aid";
                        break;
                    case"audienceManagerLocationHint":
                        n = "aamlh";
                        break;
                    case"audienceManagerBlob":
                        n = "aamb";
                        break;
                    case"authState":
                        n = "as";
                        break;
                    case"pageURL":
                        n = "g", 255 < i.length && (g.pageURLRest = i.substring(255), i = i.substring(0, 255));
                        break;
                    case"pageURLRest":
                        n = "-g";
                        break;
                    case"referrer":
                        n = "r";
                        break;
                    case"vmk":
                    case"visitorMigrationKey":
                        n = "vmt";
                        break;
                    case"visitorMigrationServer":
                        n = "vmf", g.ssl && g.visitorMigrationServerSecure && (i = "");
                        break;
                    case"visitorMigrationServerSecure":
                        n = "vmf", !g.ssl && g.visitorMigrationServer && (i = "");
                        break;
                    case"charSet":
                        n = "ce";
                        break;
                    case"visitorNamespace":
                        n = "ns";
                        break;
                    case"cookieDomainPeriods":
                        n = "cdp";
                        break;
                    case"cookieLifetime":
                        n = "cl";
                        break;
                    case"variableProvider":
                        n = "vvp";
                        break;
                    case"currencyCode":
                        n = "cc";
                        break;
                    case"channel":
                        n = "ch";
                        break;
                    case"transactionID":
                        n = "xact";
                        break;
                    case"campaign":
                        n = "v0";
                        break;
                    case"latitude":
                        n = "lat";
                        break;
                    case"longitude":
                        n = "lon";
                        break;
                    case"resolution":
                        n = "s";
                        break;
                    case"colorDepth":
                        n = "c";
                        break;
                    case"javascriptVersion":
                        n = "j";
                        break;
                    case"javaEnabled":
                        n = "v";
                        break;
                    case"cookiesEnabled":
                        n = "k";
                        break;
                    case"browserWidth":
                        n = "bw";
                        break;
                    case"browserHeight":
                        n = "bh";
                        break;
                    case"connectionType":
                        n = "ct";
                        break;
                    case"homepage":
                        n = "hp";
                        break;
                    case"events":
                        if (f && (i += ("" != i ? "," : "") + f), u) for (r = i.split(","), i = "", a = 0; a < r.length; a++) 0 <= (c = (o = r[a]).indexOf("=")) && (o = o.substring(0, c)), 0 <= (c = o.indexOf(":")) && (o = o.substring(0, c)), 0 <= u.indexOf("," + o + ",") && (i += (i ? "," : "") + r[a]);
                        break;
                    case"events2":
                        i = "";
                        break;
                    case"contextData":
                        s += g.o("c", g[n], l, n), i = "";
                        break;
                    case"lightProfileID":
                        n = "mtp";
                        break;
                    case"lightStoreForSeconds":
                        n = "mtss", g.lightProfileID || (i = "");
                        break;
                    case"lightIncrementBy":
                        n = "mti", g.lightProfileID || (i = "");
                        break;
                    case"retrieveLightProfiles":
                        n = "mtsr";
                        break;
                    case"deleteLightProfiles":
                        n = "mtsd";
                        break;
                    case"retrieveLightData":
                        g.retrieveLightProfiles && (s += g.o("mts", g[n], l, n)), i = "";
                        break;
                    default:
                        g.Ra(r) && ("prop" == a ? n = "c" + r : "eVar" == a ? n = "v" + r : "list" == a ? n = "l" + r : "hier" == a && (n = "h" + r, i = i.substring(0, 255)))
                }
                i && (s += "&" + n + "=" + ("pev" != n.substring(0, 3) ? g.escape(i) : i))
            }
            "pev3" == n && g.e && (s += g.e)
        }
        return g.ka && (s += "&lrt=" + g.ka, g.ka = null), s
    }, g.B = function (e) {
        var t = e.tagName;
        return "undefined" != "" + e.lc || "undefined" != "" + e.Zb && "HTML" != ("" + e.Zb).toUpperCase() ? "" : ("SHAPE" == (t = t && t.toUpperCase ? t.toUpperCase() : "") && (t = ""), t && (("INPUT" == t || "BUTTON" == t) && e.type && e.type.toUpperCase ? t = e.type.toUpperCase() : !t && e.href && (t = "A")), t)
    }, g.Na = function (e) {
        var t, a, n, i = p.location, r = e.href ? e.href : "";
        return t = r.indexOf(":"), a = r.indexOf("?"), n = r.indexOf("/"), r && (t < 0 || 0 <= a && a < t || 0 <= n && n < t) && (a = e.protocol && 1 < e.protocol.length ? e.protocol : i.protocol ? i.protocol : "", t = i.pathname.lastIndexOf("/"), r = (a ? a + "//" : "") + (e.host ? e.host : i.host ? i.host : "") + ("/" != r.substring(0, 1) ? i.pathname.substring(0, t < 0 ? 0 : t) + "/" : "") + r), r
    }, g.L = function (e) {
        var t, a, n = g.B(e), i = "", r = 0;
        return n && (t = e.protocol, a = e.onclick, !e.href || "A" != n && "AREA" != n || a && t && !(t.toLowerCase().indexOf("javascript") < 0) ? a ? (i = g.replace(g.replace(g.replace(g.replace("" + a, "\r", ""), "\n", ""), "\t", ""), " ", ""), r = 2) : "INPUT" == n || "SUBMIT" == n ? (e.value ? i = e.value : e.innerText ? i = e.innerText : e.textContent && (i = e.textContent), r = 3) : "IMAGE" == n && e.src && (i = e.src) : i = g.Na(e), i) ? {
            id: i.substring(0, 100),
            type: r
        } : 0
    }, g.jc = function (e) {
        for (var t = g.B(e), a = g.L(e); e && !a && "BODY" != t;) (e = e.parentElement ? e.parentElement : e.parentNode) && (t = g.B(e), a = g.L(e));
        return a && "BODY" != t || (e = 0), e && (0 <= (t = e.onclick ? "" + e.onclick : "").indexOf(".tl(") || 0 <= t.indexOf(".trackLink(")) && (e = 0), e
    }, g.Yb = function () {
        var e, t, a, n, i = g.linkObject, r = g.linkType, o = g.linkURL;
        if (g.ma = 1, i || (g.ma = 0, i = g.clickObject), i) {
            for (e = g.B(i), t = g.L(i); i && !t && "BODY" != e;) (i = i.parentElement ? i.parentElement : i.parentNode) && (e = g.B(i), t = g.L(i));
            if (t && "BODY" != e || (i = 0), i && !g.linkObject) {
                var c = i.onclick ? "" + i.onclick : "";
                (0 <= c.indexOf(".tl(") || 0 <= c.indexOf(".trackLink(")) && (i = 0)
            }
        } else g.ma = 1;
        if (!o && i && (o = g.Na(i)), o && !g.linkLeaveQueryString && (0 <= (a = o.indexOf("?")) && (o = o.substring(0, a))), !r && o) {
            var s, l = 0, u = 0;
            if (g.trackDownloadLinks && g.linkDownloadFileTypes) for (a = (c = o.toLowerCase()).indexOf("?"), n = c.indexOf("#"), 0 <= a ? 0 <= n && n < a && (a = n) : a = n, 0 <= a && (c = c.substring(0, a)), a = g.linkDownloadFileTypes.toLowerCase().split(","), n = 0; n < a.length; n++) (s = a[n]) && c.substring(c.length - (s.length + 1)) == "." + s && (r = "d");
            if (g.trackExternalLinks && !r && (c = o.toLowerCase(), g.Qa(c) && (g.linkInternalFilters || (g.linkInternalFilters = p.location.hostname), a = 0, g.linkExternalFilters ? (a = g.linkExternalFilters.toLowerCase().split(","), l = 1) : g.linkInternalFilters && (a = g.linkInternalFilters.toLowerCase().split(",")), a))) {
                for (n = 0; n < a.length; n++) s = a[n], 0 <= c.indexOf(s) && (u = 1);
                u ? l && (r = "e") : l || (r = "e")
            }
        }
        g.linkObject = i, g.linkURL = o, g.linkType = r, (g.trackClickMap || g.trackInlineStats) && (g.e = "", i && (r = g.pageName, o = 1, i = i.sourceIndex, r || (r = g.pageURL, o = 0), p.s_objectID && (t.id = p.s_objectID, i = t.type = 1), r && t && t.id && e && (g.e = "&pid=" + g.escape(r.substring(0, 255)) + (o ? "&pidt=" + o : "") + "&oid=" + g.escape(t.id.substring(0, 100)) + (t.type ? "&oidt=" + t.type : "") + "&ot=" + e + (i ? "&oi=" + i : ""))))
    }, g.Rb = function () {
        var e = g.ma, t = g.linkType, a = g.linkURL, n = g.linkName;
        if (t && (a || n) && ("d" != (t = t.toLowerCase()) && "e" != t && (t = "o"), g.pe = "lnk_" + t, g.pev1 = a ? g.escape(a) : "", g.pev2 = n ? g.escape(n) : "", e = 1), g.abort && (e = 0), g.trackClickMap || g.trackInlineStats || g.Ub()) {
            t = {}, a = 0;
            var i, r, o, c = (s = g.rb()) ? s.split("&") : 0, s = 0;
            if (c) for (i = 0; i < c.length; i++) r = c[i].split("="), n = g.unescape(r[0]).split(","), t[r = g.unescape(r[1])] = n;
            for (o in n = g.account.split(","), i = {}, g.contextData) o && !Object.prototype[o] && "a.activitymap." == o.substring(0, 14) && (i[o] = g.contextData[o], g.contextData[o] = "");
            if (g.e = g.o("c", i) + (g.e ? g.e : ""), e || g.e) {
                for (r in e && !g.e && (s = 1), t) if (!Object.prototype[r]) for (o = 0; o < n.length; o++) for (s && ((c = t[r].join(",")) == g.account && (g.e += ("&" != r.charAt(0) ? "&" : "") + r, t[r] = [], a = 1)), i = 0; i < t[r].length; i++) (c = t[r][i]) == n[o] && (s && (g.e += "&u=" + g.escape(c) + ("&" != r.charAt(0) ? "&" : "") + r + "&u=0"), t[r].splice(i, 1), a = 1);
                if (e || (a = 1), a) {
                    for (r in s = "", i = 2, !e && g.e && (s = g.escape(n.join(",")) + "=" + g.escape(g.e), i = 1), t) !Object.prototype[r] && 0 < i && 0 < t[r].length && (s += (s ? "&" : "") + g.escape(t[r].join(",")) + "=" + g.escape(r), i--);
                    g.zb(s)
                }
            }
        }
        return e
    }, g.rb = function () {
        return g.useLinkTrackSessionStorage ? g.Ea() ? p.sessionStorage.getItem(g.P) : void 0 : g.cookieRead(g.P)
    }, g.Ea = function () {
        return !!p.sessionStorage
    }, g.zb = function (e) {
        g.useLinkTrackSessionStorage ? g.Ea() && p.sessionStorage.setItem(g.P, e) : g.cookieWrite(g.P, e)
    }, g.Sb = function () {
        if (!g.bc) {
            var e, t, a = new Date, n = m.location, i = t = e = "", r = "", o = "", c = "1.2",
                s = g.cookieWrite("s_cc", "true", 0) ? "Y" : "N", l = "", u = "";
            if (a.setUTCDate && (c = "1.3", (0).toPrecision && (c = "1.5", (a = []).forEach))) {
                c = "1.6", t = 0, e = {};
                try {
                    (t = new Iterator(e)).next && (c = "1.7", a.reduce && ((c = "1.8").trim && (c = "1.8.1", Date.parse && (c = "1.8.2", Object.create && (c = "1.8.5")))))
                } catch (f) {
                }
            }
            e = screen.width + "x" + screen.height, i = navigator.javaEnabled() ? "Y" : "N", t = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth, r = g.w.innerWidth ? g.w.innerWidth : g.d.documentElement.offsetWidth, o = g.w.innerHeight ? g.w.innerHeight : g.d.documentElement.offsetHeight;
            try {
                g.b.addBehavior("#default#homePage"), l = g.b.kc(n) ? "Y" : "N"
            } catch (b) {
            }
            try {
                g.b.addBehavior("#default#clientCaps"), u = g.b.connectionType
            } catch (k) {
            }
            g.resolution = e, g.colorDepth = t, g.javascriptVersion = c, g.javaEnabled = i, g.cookiesEnabled = s, g.browserWidth = r, g.browserHeight = o, g.connectionType = u, g.homepage = l, g.bc = 1
        }
    }, g.Q = {}, g.loadModule = function (t, e) {
        var a = g.Q[t];
        if (!a) {
            a = p["AppMeasurement_Module_" + t] ? new p["AppMeasurement_Module_" + t](g) : {}, g.Q[t] = g[t] = a, a.kb = function () {
                return a.ub
            }, a.Ab = function (e) {
                (a.ub = e) && (g[t + "_onLoad"] = e, g.fa(t + "_onLoad", [g, a], 1) || e(g, a))
            };
            try {
                Object.defineProperty ? Object.defineProperty(a, "onLoad", {get: a.kb, set: a.Ab}) : a._olc = 1
            } catch (n) {
                a._olc = 1
            }
        }
        e && (g[t + "_onLoad"] = e, g.fa(t + "_onLoad", [g, a], 1) || e(g, a))
    }, g.u = function (e) {
        var t, a;
        for (t in g.Q) if (!Object.prototype[t] && (a = g.Q[t]) && (a._olc && a.onLoad && (a._olc = 0, a.onLoad(g, a)), a[e] && a[e]())) return 1;
        return 0
    }, g.Ub = function () {
        return !(!g.ActivityMap || !g.ActivityMap._c)
    }, g.Vb = function () {
        var e = Math.floor(1e13 * Math.random()), t = g.visitorSampling, a = g.visitorSamplingGroup,
            n = (a = "s_vsn_" + (g.visitorNamespace ? g.visitorNamespace : g.account) + (a ? "_" + a : ""), g.cookieRead(a));
        if (t) {
            if (t *= 100, n && (n = parseInt(n)), !n) {
                if (!g.cookieWrite(a, e)) return 0;
                n = e
            }
            if (t < n % 1e4) return 0
        }
        return 1
    }, g.S = function (e, t) {
        var a, n, i, r, o, c, s;
        for (s = {}, a = 0; a < 2; a++) for (n = 0 < a ? g.Ga : g.g, i = 0; i < n.length; i++) if ((o = e[r = n[i]]) || e["!" + r]) {
            if (o && !t && ("contextData" == r || "retrieveLightData" == r) && g[r]) for (c in g[r]) o[c] || (o[c] = g[r][c]);
            g[r] || (s["!" + r] = 1), s[r] = g[r], g[r] = o
        }
        return s
    }, g.hc = function (e) {
        var t, a, n, i;
        for (t = 0; t < 2; t++) for (a = 0 < t ? g.Ga : g.g, n = 0; n < a.length; n++) e[i = a[n]] = g[i], e[i] || "prop" !== i.substring(0, 4) && "eVar" !== i.substring(0, 4) && "hier" !== i.substring(0, 4) && "list" !== i.substring(0, 4) && "channel" !== i && "events" !== i && "eventList" !== i && "products" !== i && "productList" !== i && "purchaseID" !== i && "transactionID" !== i && "state" !== i && "zip" !== i && "campaign" !== i && "events2" !== i && "latitude" !== i && "longitude" !== i && "ms_a" !== i && "contextData" !== i && "supplementalDataID" !== i && "tnt" !== i && "timestamp" !== i && "abort" !== i && "useBeacon" !== i && "linkObject" !== i && "clickObject" !== i && "linkType" !== i && "linkName" !== i && "linkURL" !== i && "bodyClickTarget" !== i && "bodyClickFunction" !== i || (e["!" + i] = 1)
    }, g.Mb = function (e) {
        var t, a, n, i, r, o, c = 0, s = "", l = "";
        if (e && 255 < e.length && (0 < (a = (t = "" + e).indexOf("?")) && (o = t.substring(a + 1), n = 0, "http://" == (i = (t = t.substring(0, a)).toLowerCase()).substring(0, 7) ? n += 7 : "https://" == i.substring(0, 8) && (n += 8), 0 < (a = i.indexOf("/", n)) && (i = i.substring(n, a), r = t.substring(a), t = t.substring(0, a), 0 <= i.indexOf("google") ? c = ",q,ie,start,search_key,word,kw,cd," : 0 <= i.indexOf("yahoo.co") ? c = ",p,ei," : 0 <= i.indexOf("baidu.") && (c = ",wd,word,"), c && o)))) {
            if ((e = o.split("&")) && 1 < e.length) {
                for (n = 0; n < e.length; n++) 0 < (a = (i = e[n]).indexOf("=")) && 0 <= c.indexOf("," + i.substring(0, a) + ",") ? s += (s ? "&" : "") + i : l += (l ? "&" : "") + i;
                s && l ? o = s + "&" + l : l = ""
            }
            e = t + (0 < (a = 253 - (o.length - l.length) - t.length) ? r.substring(0, a) : "") + "?" + o
        }
        return e
    }, g.eb = function (t) {
        var e = g.d.visibilityState, a = ["webkitvisibilitychange", "visibilitychange"];
        if (e || (e = g.d.webkitVisibilityState), e && "prerender" == e) {
            if (t) for (e = 0; e < a.length; e++) g.d.addEventListener(a[e], function () {
                var e = g.d.visibilityState;
                e || (e = g.d.webkitVisibilityState), "visible" == e && t()
            });
            return !1
        }
        return !0
    }, g.ca = !1, g.H = !1, g.Cb = function () {
        g.H = !0, g.p()
    }, g.I = !1, g.Db = function (e) {
        g.marketingCloudVisitorID = e.MCMID, g.visitorOptedOut = e.MCOPTOUT, g.analyticsVisitorID = e.MCAID, g.audienceManagerLocationHint = e.MCAAMLH, g.audienceManagerBlob = e.MCAAMB, g.I = !1, g.p()
    }, g.cb = function (e) {
        return g.maxDelay || (g.maxDelay = 250), !g.u("_d") || (e && setTimeout(function () {
            e()
        }, g.maxDelay), !1)
    }, g.aa = !1, g.G = !1, g.Aa = function () {
        g.G = !0, g.p()
    }, g.isReadyToTrack = function () {
        var e = !0;
        return !(!g.ob() || !g.mb()) && (g.qb() || (e = !1), g.tb() || (e = !1), e)
    }, g.ob = function () {
        return g.ca || g.H || (g.eb(g.Cb) ? g.H = !0 : g.ca = !0), !(g.ca && !g.H)
    }, g.mb = function () {
        var e = g.wa();
        if (e) {
            if (!g.ta && !g.ba) return e.fetchPermissions(g.vb, !0), !(g.ba = !0);
            if (!g.ta) return !1;
            if (!e.isApproved(e.Categories.ANALYTICS)) return !1
        }
        return !0
    }, g.V = function (e) {
        var t = g.wa();
        return !(t && !t.isApproved(t.Categories[e]))
    }, g.wa = function () {
        return p.adobe && p.adobe.optIn ? p.adobe.optIn : null
    }, g.Y = !0, g.qb = function () {
        var e = g.T();
        return !e || !e.getVisitorValues || (g.Y && (g.Y = !1, g.I || (g.I = !0, e.getVisitorValues(g.Db))), !g.I)
    }, g.T = function () {
        var e = g.visitor;
        return e && !e.isAllowed() && (e = null), e
    }, g.tb = function () {
        return g.aa || g.G || (g.cb(g.Aa) ? g.G = !0 : g.aa = !0), !(g.aa && !g.G)
    }, g.ba = !1, g.vb = function () {
        g.ba = !1, g.ta = !0
    }, g.j = d, g.q = 0, g.callbackWhenReadyToTrack = function (e, t, a) {
        var n;
        (n = {}).Hb = e, n.Gb = t, n.Eb = a, g.j == d && (g.j = []), g.j.push(n), 0 == g.q && (g.q = setInterval(g.p, 100))
    }, g.p = function () {
        var e;
        if (g.isReadyToTrack() && (g.Bb(), g.j != d)) for (; 0 < g.j.length;) (e = g.j.shift()).Gb.apply(e.Hb, e.Eb)
    }, g.Bb = function () {
        g.q && (clearInterval(g.q), g.q = 0)
    }, g.ua = function (e) {
        var t, a = {};
        if (g.hc(a), e != d) for (t in e) a[t] = e[t];
        g.callbackWhenReadyToTrack(g, g.Fa, [a]), g.Da()
    }, g.Ob = function () {
        var e, t = g.cookieRead("s_fid"), a = "", n = "";
        e = 8;
        var i = 4;
        if (!t || t.indexOf("-") < 0) {
            for (t = 0; t < 16; t++) e = Math.floor(Math.random() * e), a += "0123456789ABCDEF".substring(e, e + 1), e = Math.floor(Math.random() * i), n += "0123456789ABCDEF".substring(e, e + 1), e = i = 16;
            t = a + "-" + n
        }
        return g.cookieWrite("s_fid", t, 1) || (t = 0), t
    }, g.Fa = function (e) {
        var t, a = new Date, n = "s" + Math.floor(a.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()),
            i = a.getYear(),
            r = (i = "t=" + g.escape(a.getDate() + "/" + a.getMonth() + "/" + (i < 1900 ? i + 1900 : i) + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + " " + a.getDay() + " " + a.getTimezoneOffset()), g.T());
        e && (t = g.S(e, 1)), g.Vb() && !g.visitorOptedOut && (g.xa() || (g.fid = g.Ob()), g.Yb(), g.usePlugins && g.doPlugins && g.doPlugins(g), g.account && (g.abort || (g.trackOffline && !g.timestamp && (g.timestamp = Math.floor(a.getTime() / 1e3)), e = p.location, g.pageURL || (g.pageURL = e.href ? e.href : e), g.referrer || g.$a || (e = g.Util.getQueryParam("adobe_mc_ref", null, null, !0), g.referrer = e || void 0 === e ? void 0 === e ? "" : e : m.document.referrer), g.$a = 1, !g.referrer && g.Z && (g.referrer = g.Z), g.Z = 0, g.referrer = g.Mb(g.referrer), g.u("_g")), g.Rb() && !g.abort && (r && g.V("TARGET") && !g.supplementalDataID && r.getSupplementalDataID && (g.supplementalDataID = r.getSupplementalDataID("AppMeasurement:" + g._in, !g.expectSupplementalData)), g.V("AAM") || (g.contextData["cm.ssf"] = 1), g.Sb(), g.wb(), i += g.Qb(), g.sb(n, i), g.u("_t"), g.referrer = ""))), g.referrer && (g.Z = g.referrer), g.Da(), t && g.S(t, 1)
    }, g.t = g.track = function (e, t) {
        t && g.S(t), g.Y = !0, g.isReadyToTrack() ? null != g.j && 0 < g.j.length ? (g.ua(e), g.p()) : g.Fa(e) : g.ua(e)
    }, g.wb = function () {
        g.writeSecureCookies && !g.ssl && g.ab()
    }, g.ab = function () {
        g.contextData.excCodes = g.contextData.excCodes ? g.contextData.excCodes : [], g.contextData.excCodes.push(1)
    }, g.Da = function () {
        g.abort = g.supplementalDataID = g.timestamp = g.pageURLRest = g.linkObject = g.clickObject = g.linkURL = g.linkName = g.linkType = p.s_objectID = g.pe = g.pev1 = g.pev2 = g.pev3 = g.e = g.lightProfileID = g.useBeacon = g.referrer = 0, g.contextData && g.contextData.excCodes && (g.contextData.excCodes = 0)
    }, g.Ca = [], g.registerPreTrackCallback = function (e) {
        for (var t = [], a = 1; a < arguments.length; a++) t.push(arguments[a]);
        "function" == typeof e ? g.Ca.push([e, t]) : g.debugTracking && g.C("DEBUG: Non function type passed to registerPreTrackCallback")
    }, g.hb = function (e) {
        g.va(g.Ca, e)
    }, g.Ba = [], g.registerPostTrackCallback = function (e) {
        for (var t = [], a = 1; a < arguments.length; a++) t.push(arguments[a]);
        "function" == typeof e ? g.Ba.push([e, t]) : g.debugTracking && g.C("DEBUG: Non function type passed to registerPostTrackCallback")
    }, g.gb = function (e) {
        g.va(g.Ba, e)
    }, g.va = function (e, t) {
        if ("object" == typeof e) for (var a = 0; a < e.length; a++) {
            var n = e[a][0], i = e[a][1].slice();
            if (i.unshift(t), "function" == typeof n) try {
                n.apply(null, i)
            } catch (r) {
                g.debugTracking && g.C(r.message)
            }
        }
    }, g.tl = g.trackLink = function (e, t, a, n, i) {
        return g.linkObject = e, g.linkType = t, g.linkName = a, i && (g.bodyClickTarget = e, g.bodyClickFunction = i), g.track(n)
    }, g.trackLight = function (e, t, a, n) {
        return g.lightProfileID = e, g.lightStoreForSeconds = t, g.lightIncrementBy = a, g.track(n)
    }, g.clearVars = function () {
        var e, t;
        for (e = 0; e < g.g.length; e++) ("prop" == (t = g.g[e]).substring(0, 4) || "eVar" == t.substring(0, 4) || "hier" == t.substring(0, 4) || "list" == t.substring(0, 4) || "channel" == t || "events" == t || "eventList" == t || "products" == t || "productList" == t || "purchaseID" == t || "transactionID" == t || "state" == t || "zip" == t || "campaign" == t) && (g[t] = void 0)
    }, g.tagContainerMarker = "", g.sb = function (e, t) {
        var a = g.ib() + "/" + e + "?AQB=1&ndh=1&pf=1&" + (g.za() ? "callback=s_c_il[" + g._in + "].doPostbacks&et=1&" : "") + t + "&AQE=1";
        g.hb(a), g.fb(a), g.U()
    }, g.ib = function () {
        var e = g.jb();
        return "http" + (g.ssl ? "s" : "") + "://" + e + "/b/ss/" + g.account + "/" + (g.mobile ? "5." : "") + (g.za() ? "10" : "1") + "/JS-" + g.version + (g.ac ? "T" : "") + (g.tagContainerMarker ? "-" + g.tagContainerMarker : "")
    }, g.za = function () {
        return g.AudienceManagement && g.AudienceManagement.isReady() || 0 != g.usePostbacks
    }, g.jb = function () {
        var e = g.dc, t = g.trackingServer;
        return t ? g.trackingServerSecure && g.ssl && (t = g.trackingServerSecure) : ("d1" == (e = e ? ("" + e).toLowerCase() : "d1") ? e = "112" : "d2" == e && (e = "122"), t = g.lb() + "." + e + ".2o7.net"), t
    }, g.lb = function () {
        var e = g.visitorNamespace;
        return e || (e = (e = g.account.split(",")[0]).replace(/[^0-9a-z]/gi, "")), e
    }, g.Za = /{(%?)(.*?)(%?)}/, g.gc = RegExp(g.Za.source, "g"), g.Lb = function (e) {
        if ("object" == typeof e.dests) for (var t = 0; t < e.dests.length; ++t) {
            var a = e.dests[t];
            if ("string" == typeof a.c && "aa." == a.id.substr(0, 3)) for (var n = a.c.match(g.gc), i = 0; i < n.length; ++i) {
                var r = n[i], o = r.match(g.Za), c = "";
                "%" == o[1] && "timezone_offset" == o[2] ? c = (new Date).getTimezoneOffset() : "%" == o[1] && "timestampz" == o[2] && (c = g.Pb()), a.c = a.c.replace(r, g.escape(c))
            }
        }
    }, g.Pb = function () {
        var e = new Date, t = new Date(6e4 * Math.abs(e.getTimezoneOffset()));
        return g.k(4, e.getFullYear()) + "-" + g.k(2, e.getMonth() + 1) + "-" + g.k(2, e.getDate()) + "T" + g.k(2, e.getHours()) + ":" + g.k(2, e.getMinutes()) + ":" + g.k(2, e.getSeconds()) + (0 < e.getTimezoneOffset() ? "-" : "+") + g.k(2, t.getUTCHours()) + ":" + g.k(2, t.getUTCMinutes())
    }, g.k = function (e, t) {
        return (Array(e + 1).join(0) + t).slice(-e)
    }, g.qa = {}, g.doPostbacks = function (e) {
        if ("object" == typeof e) if (g.Lb(e), "object" == typeof g.AudienceManagement && "function" == typeof g.AudienceManagement.isReady && g.AudienceManagement.isReady() && "function" == typeof g.AudienceManagement.passData) g.AudienceManagement.passData(e); else if ("object" == typeof e && "object" == typeof e.dests) for (var t = 0; t < e.dests.length; ++t) {
            var a = e.dests[t];
            "object" == typeof a && "string" == typeof a.c && "string" == typeof a.id && "aa." == a.id.substr(0, 3) && (g.qa[a.id] = new Image, g.qa[a.id].alt = "", g.qa[a.id].src = a.c)
        }
    }, g.fb = function (e) {
        g.i || g.Tb(), g.i.push(e), g.ja = g.A(), g.Ya()
    }, g.Tb = function () {
        g.i = g.Wb(), g.i || (g.i = [])
    }, g.Wb = function () {
        var e, t;
        if (g.pa()) {
            try {
                (t = p.localStorage.getItem(g.na())) && (e = p.JSON.parse(t))
            } catch (a) {
            }
            return e
        }
    }, g.pa = function () {
        var e = !0;
        return g.trackOffline && g.offlineFilename && p.localStorage && p.JSON || (e = !1), e
    }, g.Oa = function () {
        var e = 0;
        return g.i && (e = g.i.length), g.l && e++, e
    }, g.U = function () {
        if (!g.l || (g.v && g.v.complete && g.v.D && g.v.R(), !g.l)) if (g.Pa = d, g.oa) g.ja > g.N && g.Wa(g.i), g.ra(500); else {
            var e = g.Fb();
            0 < e ? g.ra(e) : (e = g.Ma()) && (g.l = 1, g.Xb(e), g.$b(e))
        }
    }, g.ra = function (e) {
        g.Pa || (e || (e = 0), g.Pa = setTimeout(g.U, e))
    }, g.Fb = function () {
        var e;
        return !g.trackOffline || g.offlineThrottleDelay <= 0 ? 0 : (e = g.A() - g.Ua, g.offlineThrottleDelay < e ? 0 : g.offlineThrottleDelay - e)
    },g.Ma = function () {
        if (0 < g.i.length) return g.i.shift()
    },g.Xb = function (e) {
        if (g.debugTracking) {
            var t, a = "AppMeasurement Debug: " + e;
            for (e = e.split("&"), t = 0; t < e.length; t++) a += "\n\t" + g.unescape(e[t]);
            g.C(a)
        }
    },g.xa = function () {
        return g.marketingCloudVisitorID || g.analyticsVisitorID
    },g.X = !1;
    try {
        k = JSON.parse('{"x":"y"}')
    } catch (t) {
        k = null
    }
    for (k && "y" == k.x ? (g.X = !0, g.W = function (e) {
        return JSON.parse(e)
    }) : p.$ && p.$.parseJSON ? (g.W = function (e) {
        return p.$.parseJSON(e)
    }, g.X = !0) : g.W = function () {
        return null
    }, g.$b = function (e) {
        var t, a, n;
        if (g.nb(e) && (a = 1, t = {
            send: function (e) {
                g.useBeacon = !1, navigator.sendBeacon(e) ? t.R() : t.ha()
            }
        }), !t && g.xa() && 2047 < e.length && (g.bb() && (a = 2, t = new XMLHttpRequest), t && (g.AudienceManagement && g.AudienceManagement.isReady() || 0 != g.usePostbacks) && (g.X ? t.Ha = !0 : t = 0)), !t && g.fc && (e = e.substring(0, 2047)), !t && g.d.createElement && (0 != g.usePostbacks || g.AudienceManagement && g.AudienceManagement.isReady()) && (t = g.d.createElement("SCRIPT")) && "async" in t && ((n = (n = g.d.getElementsByTagName("HEAD")) && n[0] ? n[0] : g.d.body) ? (t.type = "text/javascript", t.setAttribute("async", "async"), a = 3) : t = 0), t || ((t = new Image).alt = "", t.abort || "undefined" == typeof p.InstallTrigger || (t.abort = function () {
            t.src = d
        })), t.Va = Date.now(), t.Ja = function () {
            try {
                t.D && (clearTimeout(t.D), t.D = 0)
            } catch (g) {
            }
        }, t.onload = t.R = function () {
            if (t.Va && (g.ka = Date.now() - t.Va), g.gb(e), t.Ja(), g.Jb(), g.da(), g.l = 0, g.U(), t.Ha) {
                t.Ha = !1;
                try {
                    g.doPostbacks(g.W(t.responseText))
                } catch (a) {
                }
            }
        }, t.onabort = t.onerror = t.ha = function () {
            t.Ja(), (g.trackOffline || g.oa) && g.l && g.i.unshift(g.Ib), g.l = 0, g.ja > g.N && g.Wa(g.i), g.da(), g.ra(500)
        }, t.onreadystatechange = function () {
            4 == t.readyState && (200 == t.status ? t.R() : t.ha())
        }, g.Ua = g.A(), 1 === a) t.send(e); else if (2 === a) n = e.indexOf("?"), a = e.substring(0, n), n = (n = e.substring(n + 1)).replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), t.open("POST", a, !0), t.withCredentials = !0, t.send(n); else if (t.src = e, 3 === a) {
            if (g.Sa) try {
                n.removeChild(g.Sa)
            } catch (i) {
            }
            n.firstChild ? n.insertBefore(t, n.firstChild) : n.appendChild(t), g.Sa = g.v
        }
        t.D = setTimeout(function () {
            t.D && (t.complete ? t.R() : (g.trackOffline && t.abort && t.abort(), t.ha()))
        }, 5e3), g.Ib = e, g.v = p["s_i_" + g.replace(g.account, ",", "_")] = t, (g.useForcedLinkTracking && g.J || g.bodyClickFunction) && (g.forcedLinkTrackingTimeout || (g.forcedLinkTrackingTimeout = 250), g.ea = setTimeout(g.da, g.forcedLinkTrackingTimeout))
    }, g.nb = function (e) {
        var t = !1;
        return navigator.sendBeacon && (g.pb(e) ? t = !0 : g.useBeacon && (t = !0)), g.yb(e) && (t = !1), t
    }, g.pb = function (e) {
        return !!(e && 0 < e.indexOf("pe=lnk_e"))
    }, g.yb = function (e) {
        return 64e3 <= e.length
    }, g.bb = function () {
        return "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    }, g.Jb = function () {
        if (g.pa() && !(g.Ta > g.N)) try {
            p.localStorage.removeItem(g.na()), g.Ta = g.A()
        } catch (e) {
        }
    }, g.Wa = function (e) {
        if (g.pa()) {
            g.Ya();
            try {
                p.localStorage.setItem(g.na(), p.JSON.stringify(e)), g.N = g.A()
            } catch (t) {
            }
        }
    }, g.Ya = function () {
        if (g.trackOffline) for ((!g.offlineLimit || g.offlineLimit <= 0) && (g.offlineLimit = 10); g.i.length > g.offlineLimit;) g.Ma()
    }, g.forceOffline = function () {
        g.oa = !0
    }, g.forceOnline = function () {
        g.oa = !1
    }, g.na = function () {
        return g.offlineFilename + "-" + g.visitorNamespace + g.account
    }, g.A = function () {
        return (new Date).getTime()
    }, g.Qa = function (e) {
        return 0 != (e = e.toLowerCase()).indexOf("#") && 0 != e.indexOf("about:") && 0 != e.indexOf("opera:") && 0 != e.indexOf("javascript:")
    }, g.setTagContainer = function (e) {
        var t, a, n;
        for (g.ac = e, t = 0; t < g._il.length; t++) if ((a = g._il[t]) && "s_l" == a._c && a.tagContainerName == e) {
            if (g.S(a), a.lmq) for (t = 0; t < a.lmq.length; t++) n = a.lmq[t], g.loadModule(n.n);
            if (a.ml) for (n in a.ml) if (g[n]) for (t in e = g[n], n = a.ml[n]) !Object.prototype[t] && ("function" != typeof n[t] || ("" + n[t]).indexOf("s_c_il") < 0) && (e[t] = n[t]);
            if (a.mmq) for (t = 0; t < a.mmq.length; t++) n = a.mmq[t], g[n.m] && ((e = g[n.m])[n.f] && "function" == typeof e[n.f] && (n.a ? e[n.f].apply(e, n.a) : e[n.f].apply(e)));
            if (a.tq) for (t = 0; t < a.tq.length; t++) g.track(a.tq[t]);
            a.s = g;
            break
        }
    }, g.Util = {
        urlEncode: g.escape,
        urlDecode: g.unescape,
        cookieRead: g.cookieRead,
        cookieWrite: g.cookieWrite,
        getQueryParam: function (e, t, a, n) {
            var i, r = "";
            return t || (t = g.pageURL ? g.pageURL : p.location), a = a || "&", e && t ? (i = (t = "" + t).indexOf("?")) < 0 ? r : (t = a + t.substring(i + 1) + a, n && (0 <= t.indexOf(a + e + a) || 0 <= t.indexOf(a + e + "=" + a)) ? void 0 : (0 <= (i = t.indexOf("#")) && (t = t.substr(0, i) + a), (i = t.indexOf(a + e + "=")) < 0 || (0 <= (i = (t = t.substring(i + a.length + e.length + 1)).indexOf(a)) && (t = t.substring(0, i)), 0 < t.length && (r = g.unescape(t))), r)) : r
        },
        getIeVersion: function () {
            return document.documentMode ? document.documentMode : g.ya() ? 7 : null
        }
    }, g.F = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" "), g.g = g.F.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" ")), g.la = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" "), g.O = g.la.slice(0), g.Ga = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" "), l = 0; l <= 250; l++) l < 76 && (g.g.push("prop" + l), g.O.push("prop" + l)), g.g.push("eVar" + l), g.O.push("eVar" + l), l < 6 && g.g.push("hier" + l), l < 4 && g.g.push("list" + l);
    l = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" "), g.g = g.g.concat(l), g.F = g.F.concat(l), g.ssl = 0 <= p.location.protocol.toLowerCase().indexOf("https"), g.charSet = "UTF-8", g.contextData = {}, g.writeSecureCookies = !1, g.offlineThrottleDelay = 0, g.offlineFilename = "AppMeasurement.offline", g.P = "s_sq", g.Ua = 0, g.ja = 0, g.N = 0, g.Ta = 0, g.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", g.w = p, g.d = p.document, g.da = function () {
        g.ea && (p.clearTimeout(g.ea), g.ea = d), g.bodyClickTarget && g.J && g.bodyClickTarget.dispatchEvent(g.J), g.bodyClickFunction && ("function" == typeof g.bodyClickFunction ? g.bodyClickFunction() : g.bodyClickTarget && g.bodyClickTarget.href && (g.d.location = g.bodyClickTarget.href)), g.bodyClickTarget = g.J = g.bodyClickFunction = 0
    }, g.Xa = function () {
        g.b = g.d.body, g.b ? (g.r = function (e) {
            var t, a, n, i, r;
            if (!(g.d && g.d.getElementById("cppXYctnr") || e && e["s_fe_" + g._in])) {
                if (g.Ia) {
                    if (!g.useForcedLinkTracking) return g.b.removeEventListener("click", g.r, !0), void (g.Ia = g.useForcedLinkTracking = 0);
                    g.b.removeEventListener("click", g.r, !1)
                } else g.useForcedLinkTracking = 0;
                g.clickObject = e.srcElement ? e.srcElement : e.target;
                try {
                    if (!g.clickObject || g.M && g.M == g.clickObject || !(g.clickObject.tagName || g.clickObject.parentElement || g.clickObject.parentNode)) g.clickObject = 0; else {
                        var o = g.M = g.clickObject;
                        if (g.ia && (clearTimeout(g.ia), g.ia = 0), g.ia = setTimeout(function () {
                            g.M == o && (g.M = 0)
                        }, 1e4), n = g.Oa(), g.track(), n < g.Oa() && g.useForcedLinkTracking && e.target) {
                            for (i = e.target; i && i != g.b && "A" != i.tagName.toUpperCase() && "AREA" != i.tagName.toUpperCase();) i = i.parentNode;
                            if (i && (r = i.href, g.Qa(r) || (r = 0), a = i.target, e.target.dispatchEvent && r && (!a || "_self" == a || "_top" == a || "_parent" == a || p.name && a == p.name))) {
                                try {
                                    t = g.d.createEvent("MouseEvents")
                                } catch (c) {
                                    t = new p.MouseEvent
                                }
                                if (t) {
                                    try {
                                        t.initMouseEvent("click", e.bubbles, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget)
                                    } catch (l) {
                                        t = 0
                                    }
                                    t && (t["s_fe_" + g._in] = t.s_fe = 1, e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), e.preventDefault(), g.bodyClickTarget = e.target, g.J = t)
                                }
                            }
                        }
                    }
                } catch (s) {
                    g.clickObject = 0
                }
            }
        }, g.b && g.b.attachEvent ? g.b.attachEvent("onclick", g.r) : g.b && g.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && g.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && p.MouseEvent) && (g.Ia = 1, g.useForcedLinkTracking = 1, g.b.addEventListener("click", g.r, !0)), g.b.addEventListener("click", g.r, !1))) : setTimeout(g.Xa, 30)
    }, g.fc = g.ya(), g.Kb(), g.mc || (f ? g.setAccount(f) : g.C("Error, missing Report Suite ID in AppMeasurement initialization"), g.Xa(), g.loadModule("ActivityMap"))
}

function s_gi(e) {
    var t, a, n, i, r, o = window.s_c_il, c = e.split(
        ","), s = 0;
    if (o) for (a = 0; !s && a < o.length;) {
        if ("s_c" == (t = o[a])._c && (t.account || t.oun)) if (t.account && t.account == e) s = 1; else for (n = t.account ? t.account : t.oun, n = t.allAccounts ? t.allAccounts : n.split(","), i = 0; i < c.length; i++) for (r = 0; r < n.length; r++) c[i] == n[r] && (s = 1);
        a++
    }
    return s ? t.setAccount && t.setAccount(e) : t = new AppMeasurement(e), t
}

function s_pgicq() {
    var e, t, a, n = window, i = n.s_giq;
    if (i) for (e = 0; e < i.length; e++) (a = s_gi((t = i[e]).oun)).setAccount(t.un), a.setTagContainer(t.tagContainerName);
    n.s_giq = 0
}

AppMeasurement.getInstance = s_gi, window.s_objectID || (window.s_objectID = 0), s_pgicq();