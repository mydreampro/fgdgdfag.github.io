/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k = this || self,
    u = function(a, b) {
        a = a.split(".");
        var c = k;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift());) a.length || void 0 === b ? c = c[e] && c[e] !== Object.prototype[e] ? c[e] : c[e] = {} : c[e] = b
    },
    w = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.F = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.D = function(e, d, h) {
            for (var p = Array(arguments.length - 2), m = 2; m < arguments.length; m++) p[m - 2] = arguments[m];
            return b.prototype[d].apply(e, p)
        }
    };

function y(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, y);
    else {
        var c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
}
w(y, Error);
y.prototype.name = "CustomError";

function z(a, b) {
    a = a.split("%s");
    for (var c = "", e = a.length - 1, d = 0; d < e; d++) c += a[d] + (d < b.length ? b[d] : "%s");
    y.call(this, c + a[e])
}
w(z, y);
z.prototype.name = "AssertionError";
var A = function(a, b, c) {
    if (!a) {
        var e = "Assertion failed";
        if (b) {
            e += ": " + b;
            var d = Array.prototype.slice.call(arguments, 2)
        }
        throw new z("" + e, d || []);
    }
    return a
};
var B = Array.prototype.forEach ? function(a, b) {
    A(null != a.length);
    Array.prototype.forEach.call(a, b, void 0)
} : function(a, b) {
    for (var c = a.length, e = "string" === typeof a ? a.split("") : a, d = 0; d < c; d++) d in e && b.call(void 0, e[d], d, a)
};
var C, D;
a: {
    for (var F = ["CLOSURE_FLAGS"], G = k, H = 0; H < F.length; H++)
        if (G = G[F[H]], null == G) {
            D = null;
            break a
        }
    D = G
}
var aa = D && D[610401301];
C = null != aa ? aa : !1;

function ba() {
    var a = k.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var I, ca = k.navigator;
I = ca ? ca.userAgentData || null : null;

function K(a) {
    return C ? I ? I.brands.some(function(b) {
        return (b = b.brand) && -1 != b.indexOf(a)
    }) : !1 : !1
}

function L(a) {
    return -1 != ba().indexOf(a)
};

function M() {
    return C ? !!I && 0 < I.brands.length : !1
}

function N() {
    return M() ? K("Chromium") : (L("Chrome") || L("CriOS")) && !(M() ? 0 : L("Edge")) || L("Silk")
};
var da = -1 != ba().toLowerCase().indexOf("webkit") && !L("Edge") && L("Mobile");
try {
    (new self.OffscreenCanvas(0, 0)).getContext("2d")
} catch (a) {};
var O = function(a) {
    if (ea !== ea) throw Error("SafeUrl is not meant to be built directly");
    this.C = a
};
O.prototype.toString = function() {
    return this.C.toString()
};
var ea = {};
new O("about:invalid#zClosurez");
new O("about:blank");
var fa = {},
    ha = function() {
        if (fa !== fa) throw Error("SafeStyle is not meant to be built directly");
        this.B = ""
    };
ha.prototype.toString = function() {
    return this.B.toString()
};
new ha;
var ia = {},
    ja = function() {
        if (ia !== ia) throw Error("SafeStyleSheet is not meant to be built directly");
        this.A = ""
    };
ja.prototype.toString = function() {
    return this.A.toString()
};
new ja;
var ka = {},
    la = function() {
        var a = k.trustedTypes && k.trustedTypes.emptyHTML || "";
        if (ka !== ka) throw Error("SafeHtml is not meant to be built directly");
        this.v = a
    };
la.prototype.toString = function() {
    return this.v.toString()
};
new la;
/*

 SPDX-License-Identifier: Apache-2.0
*/
new O("about:blank");
new O("about:invalid#zClosurez");
var ma = [],
    na = function(a) {
        console.warn("A URL with content '" + a + "' was sanitized away.")
    }; - 1 === ma.indexOf(na) && ma.push(na);
!L("Android") || N();
N();
var oa = L("Safari") && !(N() || (M() ? 0 : L("Coast")) || (M() ? 0 : L("Opera")) || (M() ? 0 : L("Edge")) || (M() ? K("Microsoft Edge") : L("Edg/")) || (M() ? K("Opera") : L("OPR")) || L("Firefox") || L("FxiOS") || L("Silk") || L("Android")) && !(L("iPhone") && !L("iPod") && !L("iPad") || L("iPad") || L("iPod"));
var ra = function(a) {
        var b = window;
        da && oa && b ? (b.focus(), pa(b, a, 0)) : (a.close(), qa(a))
    },
    pa = function(a, b, c) {
        a.setTimeout(function() {
            b.closed || 5 == c ? qa(b) : (b.close(), c++, pa(a, b, c))
        }, 1E3)
    },
    qa = function(a) {
        if (!a.closed && a.document && a.document.body)
            if (a = a.document.body, A(null != a, "goog.dom.setTextContent expects a non-null value for node"), "textContent" in a) a.textContent = "Please close this window.";
            else if (3 == a.nodeType) a.data = "Please close this window.";
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild !=
                a.firstChild;) a.removeChild(A(a.lastChild));
            a.firstChild.data = "Please close this window."
        } else {
            for (var b; b = a.firstChild;) a.removeChild(b);
            A(a, "Node cannot be null or undefined.");
            a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode("Please close this window."))
        }
    };
var sa = function(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    0 === a.indexOf("blob:") && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !==
        c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var e = b.indexOf(":");
    if (-1 != e) {
        var d = b.substring(e + 1);
        b = b.substring(0, e);
        if ("http" === c && "80" !== d || "https" === c && "443" !== d) a = ":" + d
    }
    return c + "://" + b + a
};

function ta() {
    function a() {
        d[0] = 1732584193;
        d[1] = 4023233417;
        d[2] = 2562383102;
        d[3] = 271733878;
        d[4] = 3285377520;
        v = q = 0
    }

    function b(g) {
        for (var l = p, f = 0; 64 > f; f += 4) l[f / 4] = g[f] << 24 | g[f + 1] << 16 | g[f + 2] << 8 | g[f + 3];
        for (f = 16; 80 > f; f++) g = l[f - 3] ^ l[f - 8] ^ l[f - 14] ^ l[f - 16], l[f] = (g << 1 | g >>> 31) & 4294967295;
        g = d[0];
        var n = d[1],
            r = d[2],
            t = d[3],
            S = d[4];
        for (f = 0; 80 > f; f++) {
            if (40 > f)
                if (20 > f) {
                    var x = t ^ n & (r ^ t);
                    var J = 1518500249
                } else x = n ^ r ^ t, J = 1859775393;
            else 60 > f ? (x = n & r | t & (n | r), J = 2400959708) : (x = n ^ r ^ t, J = 3395469782);
            x = ((g << 5 | g >>> 27) & 4294967295) + x +
                S + J + l[f] & 4294967295;
            S = t;
            t = r;
            r = (n << 30 | n >>> 2) & 4294967295;
            n = g;
            g = x
        }
        d[0] = d[0] + g & 4294967295;
        d[1] = d[1] + n & 4294967295;
        d[2] = d[2] + r & 4294967295;
        d[3] = d[3] + t & 4294967295;
        d[4] = d[4] + S & 4294967295
    }

    function c(g, l) {
        if ("string" === typeof g) {
            g = unescape(encodeURIComponent(g));
            for (var f = [], n = 0, r = g.length; n < r; ++n) f.push(g.charCodeAt(n));
            g = f
        }
        l || (l = g.length);
        f = 0;
        if (0 == q)
            for (; f + 64 < l;) b(g.slice(f, f + 64)), f += 64, v += 64;
        for (; f < l;)
            if (h[q++] = g[f++], v++, 64 == q)
                for (q = 0, b(h); f + 64 < l;) b(g.slice(f, f + 64)), f += 64, v += 64
    }

    function e() {
        var g = [],
            l =
            8 * v;
        56 > q ? c(m, 56 - q) : c(m, 64 - (q - 56));
        for (var f = 63; 56 <= f; f--) h[f] = l & 255, l >>>= 8;
        b(h);
        for (f = l = 0; 5 > f; f++)
            for (var n = 24; 0 <= n; n -= 8) g[l++] = d[f] >> n & 255;
        return g
    }
    for (var d = [], h = [], p = [], m = [128], E = 1; 64 > E; ++E) m[E] = 0;
    var q, v;
    a();
    return {
        reset: a,
        update: c,
        digest: e,
        digestString: function() {
            for (var g = e(), l = "", f = 0; f < g.length; f++) l += "0123456789ABCDEF".charAt(Math.floor(g[f] / 16)) + "0123456789ABCDEF".charAt(g[f] % 16);
            return l
        }
    }
};
var ua = function(a, b, c) {
        var e = [];
        if (1 == (Array.isArray(null) ? 2 : 1)) return e = [b, a], B(c, function(m) {
            e.push(m)
        }), P(e.join(" "));
        var d = [],
            h = [];
        B(null, function(m) {
            h.push(m.key);
            d.push(m.value)
        });
        var p = Math.floor((new Date).getTime() / 1E3);
        e = 0 == d.length ? [p, b, a] : [d.join(":"), p, b, a];
        B(c, function(m) {
            e.push(m)
        });
        a = P(e.join(" "));
        p = [p, a];
        0 == h.length || p.push(h.join(""));
        return p.join("_")
    },
    P = function(a) {
        var b = ta();
        b.update(a);
        return b.digestString().toLowerCase()
    };
var va = function(a) {
        var b = a || [];
        a = [];
        for (var c = 0, e = b.length; c < e; ++c) {
            var d = String(b[c] || "");
            d && a.push(d)
        }
        if (2 > a.length) return null;
        b = a[0];
        c = gadgets.rpc.getOrigin(a[1]);
        if (c !== a[1]) return null;
        a = a.slice(2);
        return (a = (c && b ? ["session_state", ua(sa(c), b, a || [])].join(" ") : null) || "") && a.substr(14) || null
    },
    Q = function(a, b, c) {
        this.o = String(a || "");
        this.j = String(b || "");
        this.h = String(c || "");
        this.g = {};
        this.s = this.u = this.l = this.m = "";
        this.i = null
    };
Q.prototype.evaluate = function() {
    var a = {},
        b = "";
    try {
        b = String(document.cookie || "")
    } catch (p) {}
    b = b.split("; ").join(";").split(";");
    for (var c = 0, e = b.length; c < e; ++c) {
        var d = b[c],
            h = d.indexOf("="); - 1 != h ? a[d.substr(0, h)] = d.substr(h + 1) : a[d] = null
    }
    this.g = a;
    if (this.g.SAPISID || this.g.APISID || this.g["__Secure-3PAPISID"] || this.g.SID)
        if (this.j = this.j.split(".")[0].split("@")[0], this.l = wa(this, this.o))
            if (a = gadgets.rpc.getOrigin(String(window.location.href)), this.m = wa(this, a)) {
                b = String(this.g.LSOLH || "").split(":");
                c =
                    b.length;
                if (1 == c || 4 == c) this.u = b[0];
                if (3 == c || 4 == c) a = String(b[c - 3] || ""), b = String(b[c - 1] || ""), c = this.m, a ? (e = [a], c && e.push(c), c = P(e.join(" ")).substr(0, 4)) : c = null, c === b && (this.s = a);
                this.h && (a = this.h.indexOf("."), -1 != a && (a = this.h.substr(0, a) || "", this.h = a + "." + va([this.l, this.o, this.j, this.u, this.s, a]).substr(0, 4)));
                a = va([this.l, this.o, this.j, this.h]);
                this.h && (a = a + "." + this.h);
                this.i = a
            } else this.i = "";
    else this.i = ""
};
var wa = function(a, b) {
    (b = String(a.g[0 == b.indexOf("https://") ? "SAPISID" : "APISID"] || "")) || (b = String(a.g["__Secure-3PAPISID"] || ""));
    return b
};
Q.prototype.getVersionInfo = function(a) {
    var b = parseInt(a, 10);
    if (String(b) != a || !(0 <= b)) return null;
    a = this.s;
    if (!a) return null;
    a = a.split("|");
    return a.length <= b ? null : a[b] || null
};
var xa = function(a, b, c) {
        a = new Q(a, b, c);
        a.evaluate();
        return a
    },
    R = function(a, b, c) {
        c = c || ya(this);
        var e = null;
        if (a) {
            a = String(a);
            var d = a.indexOf("."); - 1 != d && (e = a.substr(d + 1))
        }
        b = xa(c, b, e).i;
        if (null == a || "" == a) a = b == a;
        else if (null == b || b.length != a.length) a = !1;
        else {
            e = c = 0;
            for (d = a.length; e < d; ++e) c |= a.charCodeAt(e) ^ b.charCodeAt(e);
            a = 0 == c
        }
        return a
    },
    T = function(a, b, c) {
        c = c || ya(this);
        c = xa(c);
        if (String(a) != c.i) throw Error("Unauthorized request");
        return c.getVersionInfo(String(b))
    },
    ya = function(a) {
        a = String(a.origin || "");
        if (!a) throw Error("RPC has no origin.");
        return a
    };
u("checkSessionState", R);
u("getVersionInfo", T);
var U, V, W, X, Y, Z, za = window,
    Aa = (window.location.href || za.location.href).match(RegExp(".*(\\?|#|&)usegapi=([^&#]+)")) || [];
"1" === decodeURIComponent(Aa[Aa.length - 1] || "") ? (W = function(a, b, c, e, d, h) {
    U.send(b, d, e, h || gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
}, X = function(a, b) {
    U.register(a, b, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
}, Y = function(a) {
    var b = /^(?:https?:\/\/)?[0-9.\-A-Za-z]+(?::\d+)?/.exec(a);
    b = gapi.iframes.makeWhiteListIframesFilter([b ? b[0] : null]);
    W("..", "oauth2callback", gadgets.rpc.getAuthToken(".."), void 0, a, b)
}, V = function() {
    Ba()
}, Z = function() {
    W("..", "oauth2relayReady", gadgets.rpc.getAuthToken(".."));
    X("check_session_state",
        Ca);
    X("get_versioninfo", Da)
}) : (W = function(a, b, c, e, d) {
    gadgets.rpc.call(a, b + ":" + c, e, d)
}, X = function(a, b) {
    gadgets.rpc.register(a, b)
}, Y = function(a) {
    gadgets.rpc.getTargetOrigin("..") == gadgets.rpc.getOrigin(a) && W("..", "oauth2callback", gadgets.rpc.getAuthToken(".."), void 0, a)
}, V = function() {
    Z()
}, Z = function() {
    W("..", "oauth2relayReady", gadgets.rpc.getAuthToken(".."));
    X("check_session_state", R);
    X("get_versioninfo", T)
});
var Ba = function() {
        var a = Z;
        window.gapi.load("gapi.iframes", function() {
            U = gapi.iframes.getContext().getParentIframe();
            a()
        })
    },
    Ea = function(a) {
        window.setTimeout(function() {
            Y(a)
        }, 1)
    },
    Ca = function(a) {
        if (a) {
            var b = a.session_state;
            var c = a.client_id
        }
        return R(b, c, U.getOrigin())
    },
    Da = function(a) {
        return T(a.xapisidHash, a.sessionIndex, U.getOrigin())
    },
    Fa = !1,
    Ga = !1,
    Ha = function() {
        Ga = !0;
        Fa && V()
    };
u("oauth2callback", Ea);
u("oauth2verify", function(a, b) {
    var c = window.open("about:blank", a),
        e;
    if (c && !c.closed && (e = c.oauth2callbackUrl)) return window.timeoutMap = window.timeoutMap || {}, window.realSetTimeout = window.realSetTimeout || window.setTimeout, window.setTimeout = function(d, h) {
        try {
            var p = d,
                m = !1;
            d = function() {
                if (!m) {
                    m = !0;
                    try {
                        window.timeoutMap[String(q)] = void 0, delete window.timeoutMap[String(q)]
                    } catch (v) {}
                    return p.call(this)
                }
            };
            var E = c.setTimeout(d, h);
            var q = window.realSetTimeout(d, h);
            window.timeoutMap[String(q)] = E;
            return q
        } catch (v) {}
        return window.realSetTimeout(d,
            h)
    }, window.realClearTimeout = window.realClearTimeout || window.clearTimeout, window.clearTimeout = function(d) {
        try {
            var h = window.timeoutMap[String(d)];
            h && c.clearTimeout(h)
        } catch (p) {}
        try {
            window.timeoutMap[String(d)] = void 0, delete window.timeoutMap[String(d)]
        } catch (p) {}
        window.realClearTimeout(d)
    }, Ea(String(e)), "keep_open" != b && ra(c), !0;
    c && !c.closed && ra(c);
    return !1
});
u("init", function() {
    Fa = !0;
    Ga && V()
});
window.addEventListener ? window.addEventListener("load", Ha, !1) : window.attachEvent("onload", Ha);