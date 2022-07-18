// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gedkk":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "3a6bd3b96b10693c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["gedkk"], null, "parcelRequire2041")
/*!
 * PINEGROW INTERACTIONS (PGIA) Run-time library
 * VERSION: 2.06
 * DATE: 2021-09-24
 * INFO: https://pinegrow.com/docs/interactions/
 * @license Copyright (c) 2020-2021 Pinegrow Pte. Ltd. All rights reserved, with exlusion of supporting libraries.
 *
 * License: You are allowed to use, duplicate, distribute this code as a part of work developed with PGIA, and license it to third parties, who may also license such developed work to end-users.
 *
 * Includes supporting libraries:
 *
 * GreenSock GSAP including ScrollTrigger and ScrollTo plugin, @author: Jack Doyle, jack@greensock.com
 *
 * @license Copyright (c) 2008-2020, GreenSock. All rights reserved.
 * GSAP is subject to the terms of enterprise license between GreenSock and Pinegrow Pte. Ltd., under which Pinegrow Interactions users are allowed to use, duplicate and distribute this code as a part of work developed with PGIA, and license it to third parties, who may also license such developed work to end-users.
 * If GSAP is used outside of PGIA or if GSAP is accesses directly through custom Javascript code, it is subject to its own license https://greensock.com/standard-license
 */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : e((t = t || self).window = t.window || {
    });
}(this, function(e) {
    "use strict";
    function _inheritsLoose(t, e1) {
        t.prototype = Object.create(e1.prototype), (t.prototype.constructor = t).__proto__ = e1;
    }
    function _assertThisInitialized(t) {
        if ((void 0) === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function o(t) {
        return "string" == typeof t;
    }
    function p(t) {
        return "function" == typeof t;
    }
    function q(t) {
        return "number" == typeof t;
    }
    function r1(t) {
        return (void 0) === t;
    }
    function s(t) {
        return "object" == typeof t;
    }
    function t(t1) {
        return !1 !== t1;
    }
    function u() {
        return "undefined" != typeof window;
    }
    function v(t1) {
        return p(t1) || o(t1);
    }
    function L(t1) {
        return (h = mt(t1, ot)) && ae;
    }
    function M(t1, e1) {
        return console.warn("Invalid property", t1, "set to", e1, "Missing plugin? gsap.registerPlugin()");
    }
    function N(t1, e1) {
        return !e1 && console.warn(t1);
    }
    function O(t1, e1) {
        return t1 && (ot[t1] = e1) && h && (h[t1] = e1) || ot;
    }
    function P() {
        return 0;
    }
    function Z(t1) {
        var e1, r1, i = t1[0];
        if (s(i) || p(i) || (t1 = [
            t1
        ]), !(e1 = (i._gsap || {
        }).harness)) {
            for(r1 = _t.length; (r1--) && !_t[r1].targetTest(i););
            e1 = _t[r1];
        }
        for(r1 = t1.length; r1--;)t1[r1] && (t1[r1]._gsap || (t1[r1]._gsap = new It(t1[r1], e1))) || t1.splice(r1, 1);
        return t1;
    }
    function $(t1) {
        return t1._gsap || Z(Tt(t1))[0]._gsap;
    }
    function _(t1, e1, i) {
        return (i = t1[e1]) && p(i) ? t1[e1]() : r1(i) && t1.getAttribute && t1.getAttribute(e1) || i;
    }
    function aa(t1, e1) {
        return (t1 = t1.split(",")).forEach(e1) || t1;
    }
    function ba(t1) {
        return Math.round(100000 * t1) / 100000 || 0;
    }
    function ca(t1, e1) {
        for(var r1 = e1.length, i = 0; t1.indexOf(e1[i]) < 0 && (++i) < r1;);
        return i < r1;
    }
    function da(e1, r1, i) {
        var n, a = q(e1[1]), s1 = (a ? 2 : 1) + (r1 < 2 ? 0 : 1), o1 = e1[s1];
        if (a && (o1.duration = e1[1]), o1.parent = i, r1) {
            for(n = o1; i && !("immediateRender" in n);)n = i.vars.defaults || {
            }, i = t(i.vars.inherit) && i.parent;
            o1.immediateRender = t(n.immediateRender), r1 < 2 ? o1.runBackwards = 1 : o1.startAt = e1[s1 - 1];
        }
        return o1;
    }
    function ea() {
        var t1, e1, r1 = ht.length, i = ht.slice(0);
        for(lt = {
        }, t1 = ht.length = 0; t1 < r1; t1++)(e1 = i[t1]) && e1._lazy && (e1.render(e1._lazy[0], e1._lazy[1], !0)._lazy = 0);
    }
    function fa(t1, e1, r1, i) {
        ht.length && ea(), t1.render(e1, r1, i), ht.length && ea();
    }
    function ga(t1) {
        var e1 = parseFloat(t1);
        return (e1 || 0 === e1) && (t1 + "").match(st).length < 2 ? e1 : o(t1) ? t1.trim() : t1;
    }
    function ha(t1) {
        return t1;
    }
    function ia(t1, e1) {
        for(var r1 in e1)r1 in t1 || (t1[r1] = e1[r1]);
        return t1;
    }
    function ja(t1, e1) {
        for(var r1 in e1)r1 in t1 || "duration" === r1 || "ease" === r1 || (t1[r1] = e1[r1]);
    }
    function la(t1, e1) {
        for(var r1 in e1)t1[r1] = s(e1[r1]) ? la(t1[r1] || (t1[r1] = {
        }), e1[r1]) : e1[r1];
        return t1;
    }
    function ma(t1, e1) {
        var r1, i = {
        };
        for(r1 in t1)r1 in e1 || (i[r1] = t1[r1]);
        return i;
    }
    function na(e1) {
        var r1 = e1.parent || I, i = e1.keyframes ? ja : ia;
        if (t(e1.inherit)) for(; r1;)i(e1, r1.vars.defaults), r1 = r1.parent || r1._dp;
        return e1;
    }
    function qa(t1, e1, r1, i) {
        (void 0) === r1 && (r1 = "_first"), (void 0) === i && (i = "_last");
        var n = e1._prev, a = e1._next;
        n ? n._next = a : t1[r1] === e1 && (t1[r1] = a), a ? a._prev = n : t1[i] === e1 && (t1[i] = n), e1._next = e1._prev = e1.parent = null;
    }
    function ra(t1, e1) {
        !t1.parent || e1 && !t1.parent.autoRemoveChildren || t1.parent.remove(t1), t1._act = 0;
    }
    function sa(t1, e1) {
        if (t1 && (!e1 || e1._end > t1._dur || e1._start < 0)) for(var r1 = t1; r1;)r1._dirty = 1, r1 = r1.parent;
        return t1;
    }
    function va(t1) {
        return t1._repeat ? gt(t1._tTime, t1 = t1.duration() + t1._rDelay) * t1 : 0;
    }
    function xa(t1, e1) {
        return (t1 - e1._start) * e1._ts + (0 <= e1._ts ? 0 : e1._dirty ? e1.totalDuration() : e1._tDur);
    }
    function ya(t1) {
        return t1._end = ba(t1._start + (t1._tDur / Math.abs(t1._ts || t1._rts || U) || 0));
    }
    function za(t1, e1) {
        var r1 = t1._dp;
        return r1 && r1.smoothChildTiming && t1._ts && (t1._start = ba(r1._time - (0 < t1._ts ? e1 / t1._ts : ((t1._dirty ? t1.totalDuration() : t1._tDur) - e1) / -t1._ts)), ya(t1), r1._dirty || sa(r1, t1)), t1;
    }
    function Aa(t1, e1) {
        var r1;
        if ((e1._time || e1._initted && !e1._dur) && (r1 = xa(t1.rawTime(), e1), (!e1._dur || yt(0, e1.totalDuration(), r1) - e1._tTime > U) && e1.render(r1, !0)), sa(t1, e1)._dp && t1._initted && t1._time >= t1._dur && t1._ts) {
            if (t1._dur < t1.duration()) for(r1 = t1; r1._dp;)0 <= r1.rawTime() && r1.totalTime(r1._tTime), r1 = r1._dp;
            t1._zTime = -U;
        }
    }
    function Ba(t1, e1, r1, i) {
        return e1.parent && ra(e1), e1._start = ba(r1 + e1._delay), e1._end = ba(e1._start + (e1.totalDuration() / Math.abs(e1.timeScale()) || 0)), (function _addLinkedListItem(t2, e2, r2, i1, n) {
            (void 0) === r2 && (r2 = "_first"), (void 0) === i1 && (i1 = "_last");
            var a, s1 = t2[i1];
            if (n) for(a = e2[n]; s1 && s1[n] > a;)s1 = s1._prev;
            s1 ? (e2._next = s1._next, s1._next = e2) : (e2._next = t2[r2], t2[r2] = e2), e2._next ? e2._next._prev = e2 : t2[i1] = e2, e2._prev = s1, e2.parent = e2._dp = t2;
        })(t1, e1, "_first", "_last", t1._sort ? "_start" : 0), t1._recent = e1, i || Aa(t1, e1), t1;
    }
    function Ca(t1, e1) {
        return (ot.ScrollTrigger || M("scrollTrigger", e1)) && ot.ScrollTrigger.create(e1, t1);
    }
    function Da(t1, e1, r1, i) {
        return Yt(t1, e1), t1._initted ? !r1 && t1._pt && (t1._dur && !1 !== t1.vars.lazy || !t1._dur && t1.vars.lazy) && f !== Ct.frame ? (ht.push(t1), t1._lazy = [
            e1,
            i
        ], 1) : void 0 : 1;
    }
    function Ha(t1, e1, r1, i) {
        var n = t1._repeat, a = ba(e1) || 0, s1 = t1._tTime / t1._tDur;
        return s1 && !i && (t1._time *= a / t1._dur), t1._dur = a, t1._tDur = n ? n < 0 ? 10000000000 : ba(a * (n + 1) + t1._rDelay * n) : a, s1 && !i ? za(t1, t1._tTime = t1._tDur * s1) : t1.parent && ya(t1), r1 || sa(t1.parent, t1), t1;
    }
    function Ia(t1) {
        return t1 instanceof Et ? sa(t1) : Ha(t1, t1._dur);
    }
    function Ka(t1, e1) {
        var r1, i, n = t1.labels, a = t1._recent || vt, s1 = t1.duration() >= H ? a.endTime(!1) : t1._dur;
        return o(e1) && (isNaN(e1) || e1 in n) ? "<" === (r1 = e1.charAt(0)) || ">" === r1 ? ("<" === r1 ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(e1.substr(1)) || 0) : (r1 = e1.indexOf("=")) < 0 ? (e1 in n || (n[e1] = s1), n[e1]) : (i = +(e1.charAt(r1 - 1) + e1.substr(r1 + 1)), 1 < r1 ? Ka(t1, e1.substr(0, r1 - 1)) + i : s1 + i) : null == e1 ? s1 : +e1;
    }
    function La(t1, e1) {
        return t1 || 0 === t1 ? e1(t1) : e1;
    }
    function Na(t1) {
        return (t1 = (t1 + "").substr((parseFloat(t1) + "").length)) && isNaN(t1) ? t1 : "";
    }
    function Qa(t1, e1) {
        return t1 && s(t1) && "length" in t1 && (!e1 && !t1.length || t1.length - 1 in t1 && s(t1[0])) && !t1.nodeType && t1 !== i;
    }
    function Ta(t1) {
        return t1.sort(function() {
            return 0.5 - Math.random();
        });
    }
    function Ua(t1) {
        if (p(t1)) return t1;
        var _1 = s(t1) ? t1 : {
            each: t1
        }, c = Bt(_1.ease), m = _1.from || 0, g = parseFloat(_1.base) || 0, v1 = {
        }, e1 = 0 < m && m < 1, y = isNaN(m) || e1, b = _1.axis, T = m, w = m;
        return o(m) ? T = w = ({
            center: 0.5,
            edges: 0.5,
            end: 1
        })[m] || 0 : !e1 && y && (T = m[0], w = m[1]), function(t2, e2, r1) {
            var i, n, a, s1, o1, u1, h, l, f, d = (r1 || _1).length, p1 = v1[d];
            if (!p1) {
                if (!(f = "auto" === _1.grid ? 0 : (_1.grid || [
                    1,
                    H
                ])[1])) {
                    for(h = -H; h < (h = r1[f++].getBoundingClientRect().left) && f < d;);
                    f--;
                }
                for(p1 = v1[d] = [], i = y ? Math.min(f, d) * T - 0.5 : m % f, n = y ? d * w / f - 0.5 : m / f | 0, l = H, u1 = h = 0; u1 < d; u1++)a = u1 % f - i, s1 = n - (u1 / f | 0), p1[u1] = o1 = b ? Math.abs("y" === b ? s1 : a) : j(a * a + s1 * s1), h < o1 && (h = o1), o1 < l && (l = o1);
                "random" === m && Ta(p1), p1.max = h - l, p1.min = l, p1.v = d = (parseFloat(_1.amount) || parseFloat(_1.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), p1.b = d < 0 ? g - d : g, p1.u = Na(_1.amount || _1.each) || 0, c = c && d < 0 ? Ft(c) : c;
            }
            return d = (p1[t2] - p1.min) / p1.max || 0, ba(p1.b + (c ? c(d) : d) * p1.v) + p1.u;
        };
    }
    function Va(e1) {
        var r1 = e1 < 1 ? Math.pow(10, (e1 + "").length - 2) : 1;
        return function(t1) {
            return Math.floor(Math.round(parseFloat(t1) / e1) * e1 * r1) / r1 + (q(t1) ? 0 : Na(t1));
        };
    }
    function Wa(u1, t1) {
        var h, l, e1 = tt(u1);
        return !e1 && s(u1) && (h = e1 = u1.radius || H, u1.values ? (u1 = Tt(u1.values), (l = !q(u1[0])) && (h *= h)) : u1 = Va(u1.increment)), La(t1, e1 ? p(u1) ? function(t2) {
            return l = u1(t2), Math.abs(l - t2) <= h ? l : t2;
        } : function(t2) {
            for(var e2, r1, i = parseFloat(l ? t2.x : t2), n = parseFloat(l ? t2.y : 0), a = H, s1 = 0, o1 = u1.length; o1--;)(e2 = l ? (e2 = u1[o1].x - i) * e2 + (r1 = u1[o1].y - n) * r1 : Math.abs(u1[o1] - i)) < a && (a = e2, s1 = o1);
            return s1 = !h || a <= h ? u1[s1] : t2, l || s1 === t2 || q(t2) ? s1 : s1 + Na(t2);
        } : Va(u1));
    }
    function Xa(t1, e1, r1, i) {
        return La(tt(t1) ? !e1 : !0 === r1 ? (r1 = 0, false) : !i, function() {
            return tt(t1) ? t1[~~(Math.random() * t1.length)] : (r1 = r1 || 0.00001, i = r1 < 1 ? Math.pow(10, (r1 + "").length - 2) : 1) && Math.floor(Math.round((t1 + Math.random() * (e1 - t1)) / r1) * r1 * i) / i;
        });
    }
    function _a(e1, r1, t1) {
        return La(t1, function(t2) {
            return e1[~~r1(t2)];
        });
    }
    function cb(t1) {
        for(var e1, r1, i, n, a = 0, s1 = ""; ~(e1 = t1.indexOf("random(", a));)i = t1.indexOf(")", e1), n = "[" === t1.charAt(e1 + 7), r1 = t1.substr(e1 + 7, i - e1 - 7).match(n ? st : et), s1 += t1.substr(a, e1 - a) + Xa(n ? r1 : +r1[0], n ? 0 : +r1[1], +r1[2] || 0.00001), a = i + 1;
        return s1 + t1.substr(a, t1.length - a);
    }
    function fb(t1, e1, r1) {
        var i, n, a, s1 = t1.labels, o1 = H;
        for(i in s1)(n = s1[i] - e1) < 0 == !!r1 && n && o1 > (n = Math.abs(n)) && (a = i, o1 = n);
        return a;
    }
    function hb(t1) {
        return ra(t1), t1.progress() < 1 && xt(t1, "onInterrupt"), t1;
    }
    function mb(t1, e1, r1) {
        return (6 * (t1 = t1 < 0 ? t1 + 1 : 1 < t1 ? t1 - 1 : t1) < 1 ? e1 + (r1 - e1) * t1 * 6 : t1 < 0.5 ? r1 : 3 * t1 < 2 ? e1 + (r1 - e1) * (2 / 3 - t1) * 6 : e1) * kt + 0.5 | 0;
    }
    function nb(t1, e1, r1) {
        var i, n, a, s1, o1, u1, h, l, f, d, p1 = t1 ? q(t1) ? [
            t1 >> 16,
            t1 >> 8 & kt,
            t1 & kt
        ] : 0 : Ot.black;
        if (!p1) {
            if ("," === t1.substr(-1) && (t1 = t1.substr(0, t1.length - 1)), Ot[t1]) p1 = Ot[t1];
            else if ("#" === t1.charAt(0)) 4 === t1.length && (t1 = "#" + (i = t1.charAt(1)) + i + (n = t1.charAt(2)) + n + (a = t1.charAt(3)) + a), p1 = [
                (t1 = parseInt(t1.substr(1), 16)) >> 16,
                t1 >> 8 & kt,
                t1 & kt
            ];
            else if ("hsl" === t1.substr(0, 3)) {
                if (p1 = d = t1.match(et), e1) {
                    if (~t1.indexOf("=")) return p1 = t1.match(rt), r1 && p1.length < 4 && (p1[3] = 1), p1;
                } else s1 = +p1[0] % 360 / 360, o1 = p1[1] / 100, i = 2 * (u1 = p1[2] / 100) - (n = u1 <= 0.5 ? u1 * (o1 + 1) : u1 + o1 - u1 * o1), 3 < p1.length && (p1[3] *= 1), p1[0] = mb(s1 + 1 / 3, i, n), p1[1] = mb(s1, i, n), p1[2] = mb(s1 - 1 / 3, i, n);
            } else p1 = t1.match(et) || Ot.transparent;
            p1 = p1.map(Number);
        }
        return e1 && !d && (i = p1[0] / kt, n = p1[1] / kt, a = p1[2] / kt, u1 = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s1 = o1 = 0 : (f = h - l, o1 = 0.5 < u1 ? f / (2 - h - l) : f / (h + l), s1 = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s1 *= 60), p1[0] = ~~(s1 + 0.5), p1[1] = ~~(100 * o1 + 0.5), p1[2] = ~~(100 * u1 + 0.5)), r1 && p1.length < 4 && (p1[3] = 1), p1;
    }
    function ob(t1) {
        var r1 = [], i = [], n = -1;
        return t1.split(Pt).forEach(function(t2) {
            var e1 = t2.match(it) || [];
            r1.push.apply(r1, e1), i.push(n += e1.length + 1);
        }), r1.c = i, r1;
    }
    function pb(t1, e1, r1) {
        var i, n, a, s1, o1 = "", u1 = (t1 + o1).match(Pt), h = e1 ? "hsla(" : "rgba(", l = 0;
        if (!u1) return t1;
        if (u1 = u1.map(function(t2) {
            return (t2 = nb(t2, e1, 1)) && h + (e1 ? t2[0] + "," + t2[1] + "%," + t2[2] + "%," + t2[3] : t2.join(",")) + ")";
        }), r1 && (a = ob(t1), (i = r1.c).join(o1) !== a.c.join(o1))) for(s1 = (n = t1.replace(Pt, "1").split(it)).length - 1; l < s1; l++)o1 += n[l] + (~i.indexOf(l) ? u1.shift() || h + "0,0,0,0)" : (a.length ? a : u1.length ? u1 : r1).shift());
        if (!n) for(s1 = (n = t1.split(Pt)).length - 1; l < s1; l++)o1 += n[l] + u1[l];
        return o1 + n[s1];
    }
    function sb(t1) {
        var e1, r1 = t1.join(" ");
        if (Pt.lastIndex = 0, Pt.test(r1)) return e1 = Mt.test(r1), t1[1] = pb(t1[1], e1), t1[0] = pb(t1[0], e1, ob(t1[1])), !0;
    }
    function Bb(t1) {
        var e1 = (t1 + "").split("("), r1 = St[e1[0]];
        return r1 && 1 < e1.length && r1.config ? r1.config.apply(null, ~t1.indexOf("{") ? [
            function _parseObjectInString(t2) {
                for(var e2, r2, i, n = {
                }, a = t2.substr(1, t2.length - 3).split(":"), s1 = a[0], o1 = 1, u1 = a.length; o1 < u1; o1++)r2 = a[o1], e2 = o1 !== u1 - 1 ? r2.lastIndexOf(",") : r2.length, i = r2.substr(0, e2), n[s1] = isNaN(i) ? i.replace(zt, "").trim() : +i, s1 = r2.substr(e2 + 1).trim();
                return n;
            }(e1[1])
        ] : (function _valueInParentheses(t2) {
            var e2 = t2.indexOf("(") + 1, r2 = t2.indexOf(")"), i = t2.indexOf("(", e2);
            return t2.substring(e2, ~i && i < r2 ? t2.indexOf(")", r2 + 1) : r2);
        })(t1).split(",").map(ga)) : St._CE && Dt.test(t1) ? St._CE("", t1) : r1;
    }
    function Db(t1, e1) {
        for(var r1, i = t1._first; i;)i instanceof Et ? Db(i, e1) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e1 || (i.timeline ? Db(i.timeline, e1) : (r1 = i._ease, i._ease = i._yEase, i._yEase = r1, i._yoyo = e1)), i = i._next;
    }
    function Fb(t1, e1, r1, i) {
        (void 0) === r1 && (r1 = function easeOut(t2) {
            return 1 - e1(1 - t2);
        }), (void 0) === i && (i = function easeInOut(t2) {
            return t2 < 0.5 ? e1(2 * t2) / 2 : 1 - e1(2 * (1 - t2)) / 2;
        });
        var n, a = {
            easeIn: e1,
            easeOut: r1,
            easeInOut: i
        };
        return aa(t1, function(t2) {
            for(var e2 in St[t2] = ot[t2] = a, St[n = t2.toLowerCase()] = r1, a)St[n + ("easeIn" === e2 ? ".in" : "easeOut" === e2 ? ".out" : ".inOut")] = St[t2 + "." + e2] = a[e2];
        }), a;
    }
    function Gb(e1) {
        return function(t1) {
            return t1 < 0.5 ? (1 - e1(1 - 2 * t1)) / 2 : 0.5 + e1(2 * (t1 - 0.5)) / 2;
        };
    }
    function Hb(r1, t1, e1) {
        function zl(t2) {
            return 1 === t2 ? 1 : i * Math.pow(2, -10 * t2) * W((t2 - a) * n) + 1;
        }
        var i = 1 <= t1 ? t1 : 1, n = (e1 || (r1 ? 0.3 : 0.45)) / (t1 < 1 ? t1 : 1), a = n / V * (Math.asin(1 / i) || 0), s1 = "out" === r1 ? zl : "in" === r1 ? function(t2) {
            return 1 - zl(1 - t2);
        } : Gb(zl);
        return n = V / n, s1.config = function(t2, e2) {
            return Hb(r1, t2, e2);
        }, s1;
    }
    function Ib(e1, r1) {
        function Hl(t1) {
            return t1 ? (--t1) * t1 * ((r1 + 1) * t1 + r1) + 1 : 0;
        }
        (void 0) === r1 && (r1 = 1.70158);
        var t1 = "out" === e1 ? Hl : "in" === e1 ? function(t2) {
            return 1 - Hl(1 - t2);
        } : Gb(Hl);
        return t1.config = function(t2) {
            return Ib(e1, t2);
        }, t1;
    }
    var R, I, i, n, a, h, l, f, d, c, m, g, y, b, T, w, x, k, C, A, S, D, z, F, B, E, Y = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, X = {
        duration: 0.5,
        overwrite: !1,
        delay: 0
    }, H = 100000000, U = 1 / H, V = 2 * Math.PI, K = V / 4, G = 0, j = Math.sqrt, Q = Math.cos, W = Math.sin, J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {
    }, tt = Array.isArray, et = /(?:-?\.?\d|\.)+/gi, rt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g, it = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, nt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, at = /[+-]=-?[\.\d]+/, st = /[#\-+.]*\b[a-z\d-=+%.]+/gi, ot = {
    }, ut = {
    }, ht = [], lt = {
    }, ft = {
    }, dt = {
    }, pt = 30, _t = [], ct = "", mt = function _merge(t1, e1) {
        for(var r1 in e1)t1[r1] = e1[r1];
        return t1;
    }, gt = function _animationCycle(t1, e1) {
        var r1 = Math.floor(t1 /= e1);
        return t1 && r1 === t1 ? r1 - 1 : r1;
    }, vt = {
        _start: 0,
        endTime: P
    }, yt = function _clamp(t1, e1, r1) {
        return r1 < t1 ? t1 : e1 < r1 ? e1 : r1;
    }, bt = [].slice, Tt = function toArray(t1, e1) {
        return !o(t1) || e1 || !n && At() ? tt(t1) ? (function _flatten(t2, e2, r1) {
            return (void 0) === r1 && (r1 = []), t2.forEach(function(t3) {
                return o(t3) && !e2 || Qa(t3, 1) ? r1.push.apply(r1, Tt(t3)) : r1.push(t3);
            }) || r1;
        })(t1, e1) : Qa(t1) ? bt.call(t1, 0) : t1 ? [
            t1
        ] : [] : bt.call(a.querySelectorAll(t1), 0);
    }, wt = function mapRange(e1, t1, r1, i1, n1) {
        var a1 = t1 - e1, s1 = i1 - r1;
        return La(n1, function(t2) {
            return r1 + ((t2 - e1) / a1 * s1 || 0);
        });
    }, xt = function _callback(t1, e1, r1) {
        var i1, n1, a1 = t1.vars, s1 = a1[e1];
        if (s1) return i1 = a1[e1 + "Params"], n1 = a1.callbackScope || t1, r1 && ht.length && ea(), i1 ? s1.apply(n1, i1) : s1.call(n1);
    }, kt = 255, Ot = {
        aqua: [
            0,
            kt,
            kt
        ],
        lime: [
            0,
            kt,
            0
        ],
        silver: [
            192,
            192,
            192
        ],
        black: [
            0,
            0,
            0
        ],
        maroon: [
            128,
            0,
            0
        ],
        teal: [
            0,
            128,
            128
        ],
        blue: [
            0,
            0,
            kt
        ],
        navy: [
            0,
            0,
            128
        ],
        white: [
            kt,
            kt,
            kt
        ],
        olive: [
            128,
            128,
            0
        ],
        yellow: [
            kt,
            kt,
            0
        ],
        orange: [
            kt,
            165,
            0
        ],
        gray: [
            128,
            128,
            128
        ],
        purple: [
            128,
            0,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        red: [
            kt,
            0,
            0
        ],
        pink: [
            kt,
            192,
            203
        ],
        cyan: [
            0,
            kt,
            kt
        ],
        transparent: [
            kt,
            kt,
            kt,
            0
        ]
    }, Pt = function() {
        var t1, e1 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for(t1 in Ot)e1 += "|" + t1 + "\\b";
        return new RegExp(e1 + ")", "gi");
    }(), Mt = /hsl[a]?\(/, Ct = (x = Date.now, k = 500, C = 33, A = x(), S = A, z = D = 1000 / 240, b = {
        time: 0,
        frame: 0,
        tick: function tick() {
            vk(!0);
        },
        deltaRatio: function deltaRatio(t1) {
            return T / (1000 / (t1 || 60));
        },
        wake: function wake() {
            l && (!n && u() && (i = n = window, a = i.document || {
            }, ot.gsap = ae, (i.gsapVersions || (i.gsapVersions = [])).push(ae.version), L(h || i.GreenSockGlobals || !i.gsap && i || {
            }), y = i.requestAnimationFrame), m && b.sleep(), g = y || function(t1) {
                return setTimeout(t1, z - 1000 * b.time + 1 | 0);
            }, c = 1, vk(2));
        },
        sleep: function sleep() {
            (y ? i.cancelAnimationFrame : clearTimeout)(m), c = 0, g = P;
        },
        lagSmoothing: function lagSmoothing(t1, e1) {
            k = t1 || 100000000, C = Math.min(e1, k, 0);
        },
        fps: function fps(t1) {
            D = 1000 / (t1 || 240), z = 1000 * b.time + D;
        },
        add: function add(t1) {
            F.indexOf(t1) < 0 && F.push(t1), At();
        },
        remove: function remove(t1) {
            var e1;
            ~(e1 = F.indexOf(t1)) && F.splice(e1, 1) && e1 <= w && w--;
        },
        _listeners: F = []
    }), At = function _wake() {
        return !c && Ct.wake();
    }, St = {
    }, Dt = /^[\d.\-M][\d.\-,\s]/, zt = /["']/g, Ft = function _invertEase(e1) {
        return function(t1) {
            return 1 - e1(1 - t1);
        };
    }, Bt = function _parseEase(t1, e1) {
        return t1 && (p(t1) ? t1 : St[t1] || Bb(t1)) || e1;
    };
    function vk(t1) {
        var e1, r1, i1, n1, a1 = x() - S, s1 = !0 === t1;
        if (k < a1 && (A += a1 - C), (0 < (e1 = (i1 = (S += a1) - A) - z) || s1) && (n1 = ++b.frame, T = i1 - 1000 * b.time, b.time = i1 /= 1000, z += e1 + (D <= e1 ? 4 : D - e1), r1 = 1), s1 || (m = g(vk)), r1) for(w = 0; w < F.length; w++)F[w](i1, T, n1, t1);
    }
    function Yl(t1) {
        return t1 < E ? B * t1 * t1 : t1 < 0.7272727272727273 ? B * Math.pow(t1 - 1.5 / 2.75, 2) + 0.75 : t1 < 0.9090909090909092 ? B * (t1 -= 2.25 / 2.75) * t1 + 0.9375 : B * Math.pow(t1 - 2.625 / 2.75, 2) + 0.984375;
    }
    aa("Linear,Quad,Cubic,Quart,Quint,Strong", function(t1, e1) {
        var r1 = e1 < 5 ? e1 + 1 : e1;
        Fb(t1 + ",Power" + (r1 - 1), e1 ? function(t2) {
            return Math.pow(t2, r1);
        } : function(t2) {
            return t2;
        }, function(t2) {
            return 1 - Math.pow(1 - t2, r1);
        }, function(t2) {
            return t2 < 0.5 ? Math.pow(2 * t2, r1) / 2 : 1 - Math.pow(2 * (1 - t2), r1) / 2;
        });
    }), St.Linear.easeNone = St.none = St.Linear.easeIn, Fb("Elastic", Hb("in"), Hb("out"), Hb()), B = 7.5625, E = 1 / 2.75, Fb("Bounce", function(t1) {
        return 1 - Yl(1 - t1);
    }, Yl), Fb("Expo", function(t1) {
        return t1 ? Math.pow(2, 10 * (t1 - 1)) : 0;
    }), Fb("Circ", function(t1) {
        return -(j(1 - t1 * t1) - 1);
    }), Fb("Sine", function(t1) {
        return 1 === t1 ? 1 : 1 - Q(t1 * K);
    }), Fb("Back", Ib("in"), Ib("out"), Ib()), St.SteppedEase = St.steps = ot.SteppedEase = {
        config: function config(t1, e1) {
            (void 0) === t1 && (t1 = 1);
            var r1 = 1 / t1, i1 = t1 + (e1 ? 0 : 1), n1 = e1 ? 1 : 0;
            return function(t2) {
                return ((i1 * yt(0, 0.99999999, t2) | 0) + n1) * r1;
            };
        }
    }, X.ease = St["quad.out"], aa("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t1) {
        return ct += t1 + "," + t1 + "Params,";
    });
    var Rt, It = function GSCache(t1, e1) {
        this.id = G++, (t1._gsap = this).target = t1, this.harness = e1, this.get = e1 ? e1.get : _, this.set = e1 ? e1.getSetter : $t;
    }, Lt = ((Rt = Animation1.prototype).delay = function delay(t1) {
        return t1 || 0 === t1 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t1 - this._delay), this._delay = t1, this) : this._delay;
    }, Rt.duration = function duration(t1) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t1 + (t1 + this._rDelay) * this._repeat : t1) : this.totalDuration() && this._dur;
    }, Rt.totalDuration = function totalDuration(t1) {
        return arguments.length ? (this._dirty = 0, Ha(this, this._repeat < 0 ? t1 : (t1 - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, Rt.totalTime = function totalTime(t1, e1) {
        if (At(), !arguments.length) return this._tTime;
        var r1 = this._dp;
        if (r1 && r1.smoothChildTiming && this._ts) {
            for(za(this, t1), !r1._dp || r1.parent || Aa(r1, this); r1.parent;)r1.parent._time !== r1._start + (0 <= r1._ts ? r1._tTime / r1._ts : (r1.totalDuration() - r1._tTime) / -r1._ts) && r1.totalTime(r1._tTime, !0), r1 = r1.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t1 < this._tDur || this._ts < 0 && 0 < t1 || !this._tDur && !t1) && Ba(this._dp, this, this._start - this._delay);
        }
        return (this._tTime !== t1 || !this._dur && !e1 || this._initted && Math.abs(this._zTime) === U || !t1 && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t1), fa(this, t1, e1)), this;
    }, Rt.time = function time(t1, e1) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t1 + va(this)) % this._dur || (t1 ? this._dur : 0), e1) : this._time;
    }, Rt.totalProgress = function totalProgress(t1, e1) {
        return arguments.length ? this.totalTime(this.totalDuration() * t1, e1) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    }, Rt.progress = function progress(t1, e1) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t1 : 1 - t1) + va(this), e1) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    }, Rt.iteration = function iteration(t1, e1) {
        var r1 = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t1 - 1) * r1, e1) : this._repeat ? gt(this._tTime, r1) + 1 : 1;
    }, Rt.timeScale = function timeScale(t1) {
        if (!arguments.length) return this._rts === -U ? 0 : this._rts;
        if (this._rts === t1) return this;
        var e1 = this.parent && this._ts ? xa(this.parent._time, this) : this._tTime;
        return this._rts = +t1 || 0, this._ts = this._ps || t1 === -U ? 0 : this._rts, (function _recacheAncestors(t2) {
            for(var e2 = t2.parent; e2 && e2.parent;)e2._dirty = 1, e2.totalDuration(), e2 = e2.parent;
            return t2;
        })(this.totalTime(yt(-this._delay, this._tDur, e1), !0));
    }, Rt.paused = function paused(t1) {
        return arguments.length ? (this._ps !== t1 && ((this._ps = t1) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (At(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= U) && Math.abs(this._zTime) !== U))), this) : this._ps;
    }, Rt.startTime = function startTime(t1) {
        if (arguments.length) {
            this._start = t1;
            var e1 = this.parent || this._dp;
            return !e1 || !e1._sort && this.parent || Ba(e1, this, t1 - this._delay), this;
        }
        return this._start;
    }, Rt.endTime = function endTime(e2) {
        return this._start + (t(e2) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    }, Rt.rawTime = function rawTime(t1) {
        var e2 = this.parent || this._dp;
        return e2 ? t1 && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? xa(e2.rawTime(t1), this) : this._tTime : this._tTime;
    }, Rt.globalTime = function globalTime(t1) {
        for(var e2 = this, r1 = arguments.length ? t1 : e2.rawTime(); e2;)r1 = e2._start + r1 / (e2._ts || 1), e2 = e2._dp;
        return r1;
    }, Rt.repeat = function repeat(t1) {
        return arguments.length ? (this._repeat = t1, Ia(this)) : this._repeat;
    }, Rt.repeatDelay = function repeatDelay(t1) {
        return arguments.length ? (this._rDelay = t1, Ia(this)) : this._rDelay;
    }, Rt.yoyo = function yoyo(t1) {
        return arguments.length ? (this._yoyo = t1, this) : this._yoyo;
    }, Rt.seek = function seek(e2, r1) {
        return this.totalTime(Ka(this, e2), t(r1));
    }, Rt.restart = function restart(e2, r1) {
        return this.play().totalTime(e2 ? -this._delay : 0, t(r1));
    }, Rt.play = function play(t1, e2) {
        return null != t1 && this.seek(t1, e2), this.reversed(!1).paused(!1);
    }, Rt.reverse = function reverse(t1, e2) {
        return null != t1 && this.seek(t1 || this.totalDuration(), e2), this.reversed(!0).paused(!1);
    }, Rt.pause = function pause(t1, e2) {
        return null != t1 && this.seek(t1, e2), this.paused(!0);
    }, Rt.resume = function resume() {
        return this.paused(!1);
    }, Rt.reversed = function reversed(t1) {
        return arguments.length ? (!!t1 !== this.reversed() && this.timeScale(-this._rts || (t1 ? -U : 0)), this) : this._rts < 0;
    }, Rt.invalidate = function invalidate() {
        return this._initted = this._act = 0, this._zTime = -U, this;
    }, Rt.isActive = function isActive() {
        var t1, e2 = this.parent || this._dp, r1 = this._start;
        return !(e2 && !(this._ts && this._initted && e2.isActive() && (t1 = e2.rawTime(!0)) >= r1 && t1 < this.endTime(!0) - U));
    }, Rt.eventCallback = function eventCallback(t1, e2, r1) {
        var i1 = this.vars;
        return 1 < arguments.length ? (e2 ? (i1[t1] = e2, r1 && (i1[t1 + "Params"] = r1), "onUpdate" === t1 && (this._onUpdate = e2)) : delete i1[t1], this) : i1[t1];
    }, Rt.then = function then(t1) {
        var i1 = this;
        return new Promise(function(e2) {
            function on() {
                var t2 = i1.then;
                i1.then = null, p(r2) && (r2 = r2(i1)) && (r2.then || r2 === i1) && (i1.then = t2), e2(r2), i1.then = t2;
            }
            var r2 = p(t1) ? t1 : ha;
            i1._initted && 1 === i1.totalProgress() && 0 <= i1._ts || !i1._tTime && i1._ts < 0 ? on() : i1._prom = on;
        });
    }, Rt.kill = function kill() {
        hb(this);
    }, Animation1);
    function Animation1(t1, e2) {
        var r2 = t1.parent || I;
        this.vars = t1, this._delay = +t1.delay || 0, (this._repeat = t1.repeat || 0) && (this._rDelay = t1.repeatDelay || 0, this._yoyo = !!t1.yoyo || !!t1.yoyoEase), this._ts = 1, Ha(this, +t1.duration, 1, 1), this.data = t1.data, c || Ct.wake(), r2 && Ba(r2, this, e2 || 0 === e2 ? e2 : r2._time, 1), t1.reversed && this.reverse(), t1.paused && this.paused(!0);
    }
    ia(Lt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -U,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Et = function(n1) {
        function Timeline(e2, r2) {
            var i1;
            return (void 0) === e2 && (e2 = {
            }), (i1 = n1.call(this, e2, r2) || this).labels = {
            }, i1.smoothChildTiming = !!e2.smoothChildTiming, i1.autoRemoveChildren = !!e2.autoRemoveChildren, i1._sort = t(e2.sortChildren), i1.parent && Aa(i1.parent, _assertThisInitialized(i1)), e2.scrollTrigger && Ca(_assertThisInitialized(i1), e2.scrollTrigger), i1;
        }
        _inheritsLoose(Timeline, n1);
        var e2 = Timeline.prototype;
        return e2.to = function to(t1, e3, r2, i1) {
            return new Vt(t1, da(arguments, 0, this), Ka(this, q(e3) ? i1 : r2)), this;
        }, e2.from = function from(t1, e3, r2, i1) {
            return new Vt(t1, da(arguments, 1, this), Ka(this, q(e3) ? i1 : r2)), this;
        }, e2.fromTo = function fromTo(t1, e3, r2, i1, n2) {
            return new Vt(t1, da(arguments, 2, this), Ka(this, q(e3) ? n2 : i1)), this;
        }, e2.set = function set(t1, e3, r2) {
            return e3.duration = 0, e3.parent = this, na(e3).repeatDelay || (e3.repeat = 0), e3.immediateRender = !!e3.immediateRender, new Vt(t1, e3, Ka(this, r2), 1), this;
        }, e2.call = function call(t1, e3, r2) {
            return Ba(this, Vt.delayedCall(0, t1, e3), Ka(this, r2));
        }, e2.staggerTo = function staggerTo(t1, e3, r2, i1, n2, a1, s1) {
            return r2.duration = e3, r2.stagger = r2.stagger || i1, r2.onComplete = a1, r2.onCompleteParams = s1, r2.parent = this, new Vt(t1, r2, Ka(this, n2)), this;
        }, e2.staggerFrom = function staggerFrom(e3, r2, i1, n2, a1, s1, o1) {
            return i1.runBackwards = 1, na(i1).immediateRender = t(i1.immediateRender), this.staggerTo(e3, r2, i1, n2, a1, s1, o1);
        }, e2.staggerFromTo = function staggerFromTo(e3, r2, i1, n2, a1, s1, o1, u1) {
            return n2.startAt = i1, na(n2).immediateRender = t(n2.immediateRender), this.staggerTo(e3, r2, n2, a1, s1, o1, u1);
        }, e2.render = function render(t1, e3, r2) {
            var i1, n2, a1, s1, o1, u1, h1, l1, f1, d1, p1, _1, c1 = this._time, m1 = this._dirty ? this.totalDuration() : this._tDur, g1 = this._dur, v1 = this !== I && m1 - U < t1 && 0 <= t1 ? m1 : t1 < U ? 0 : t1, y1 = this._zTime < 0 != t1 < 0 && (this._initted || !g1);
            if (v1 !== this._tTime || r2 || y1) {
                if (c1 !== this._time && g1 && (v1 += this._time - c1, t1 += this._time - c1), i1 = v1, f1 = this._start, u1 = !(l1 = this._ts), y1 && (g1 || (c1 = this._zTime), !t1 && e3 || (this._zTime = t1)), this._repeat) {
                    if (p1 = this._yoyo, o1 = g1 + this._rDelay, this._repeat < -1 && t1 < 0) return this.totalTime(100 * o1 + t1, e3, r2);
                    if (i1 = ba(v1 % o1), v1 === m1 ? (s1 = this._repeat, i1 = g1) : ((s1 = ~~(v1 / o1)) && s1 === v1 / o1 && (i1 = g1, s1--), g1 < i1 && (i1 = g1)), d1 = gt(this._tTime, o1), !c1 && this._tTime && d1 !== s1 && (d1 = s1), p1 && 1 & s1 && (i1 = g1 - i1, _1 = 1), s1 !== d1 && !this._lock) {
                        var b1 = p1 && 1 & d1, T1 = b1 === (p1 && 1 & s1);
                        if (s1 < d1 && (b1 = !b1), c1 = b1 ? 0 : g1, this._lock = 1, this.render(c1 || (_1 ? 0 : ba(s1 * o1)), e3, !g1)._lock = 0, !e3 && this.parent && xt(this, "onRepeat"), this.vars.repeatRefresh && !_1 && (this.invalidate()._lock = 1), c1 !== this._time || u1 != !this._ts) return this;
                        if (g1 = this._dur, m1 = this._tDur, T1 && (this._lock = 2, c1 = b1 ? g1 : -0.0001, this.render(c1, !0), this.vars.repeatRefresh && !_1 && this.invalidate()), this._lock = 0, !this._ts && !u1) return this;
                        Db(this, _1);
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h1 = (function _findNextPauseTween(t2, e4, r3) {
                    var i2;
                    if (e4 < r3) for(i2 = t2._first; i2 && i2._start <= r3;){
                        if (!i2._dur && "isPause" === i2.data && i2._start > e4) return i2;
                        i2 = i2._next;
                    }
                    else for(i2 = t2._last; i2 && i2._start >= r3;){
                        if (!i2._dur && "isPause" === i2.data && i2._start < e4) return i2;
                        i2 = i2._prev;
                    }
                })(this, ba(c1), ba(i1))) && (v1 -= i1 - (i1 = h1._start)), this._tTime = v1, this._time = i1, this._act = !l1, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t1, c1 = 0), c1 || !(i1 || !g1 && 0 <= t1) || e3 || xt(this, "onStart"), c1 <= i1 && 0 <= t1) for(n2 = this._first; n2;){
                    if (a1 = n2._next, (n2._act || i1 >= n2._start) && n2._ts && h1 !== n2) {
                        if (n2.parent !== this) return this.render(t1, e3, r2);
                        if (n2.render(0 < n2._ts ? (i1 - n2._start) * n2._ts : (n2._dirty ? n2.totalDuration() : n2._tDur) + (i1 - n2._start) * n2._ts, e3, r2), i1 !== this._time || !this._ts && !u1) {
                            h1 = 0, a1 && (v1 += this._zTime = -U);
                            break;
                        }
                    }
                    n2 = a1;
                }
                else {
                    n2 = this._last;
                    for(var w1 = t1 < 0 ? t1 : i1; n2;){
                        if (a1 = n2._prev, (n2._act || w1 <= n2._end) && n2._ts && h1 !== n2) {
                            if (n2.parent !== this) return this.render(t1, e3, r2);
                            if (n2.render(0 < n2._ts ? (w1 - n2._start) * n2._ts : (n2._dirty ? n2.totalDuration() : n2._tDur) + (w1 - n2._start) * n2._ts, e3, r2), i1 !== this._time || !this._ts && !u1) {
                                h1 = 0, a1 && (v1 += this._zTime = w1 ? -U : U);
                                break;
                            }
                        }
                        n2 = a1;
                    }
                }
                if (h1 && !e3 && (this.pause(), h1.render(c1 <= i1 ? 0 : -U)._zTime = c1 <= i1 ? 1 : -1, this._ts)) return this._start = f1, ya(this), this.render(t1, e3, r2);
                this._onUpdate && !e3 && xt(this, "onUpdate", !0), (v1 === m1 && m1 >= this.totalDuration() || !v1 && c1) && (f1 !== this._start && Math.abs(l1) === Math.abs(this._ts) || this._lock || (!t1 && g1 || !(v1 === m1 && 0 < this._ts || !v1 && this._ts < 0) || ra(this, 1), e3 || t1 < 0 && !c1 || !v1 && !c1 || (xt(this, v1 === m1 ? "onComplete" : "onReverseComplete", !0), !this._prom || v1 < m1 && 0 < this.timeScale() || this._prom())));
            }
            return this;
        }, e2.add = function add(t1, e3) {
            var r2 = this;
            if (q(e3) || (e3 = Ka(this, e3)), !(t1 instanceof Lt)) {
                if (tt(t1)) return t1.forEach(function(t2) {
                    return r2.add(t2, e3);
                }), this;
                if (o(t1)) return this.addLabel(t1, e3);
                if (!p(t1)) return this;
                t1 = Vt.delayedCall(0, t1);
            }
            return this !== t1 ? Ba(this, t1, e3) : this;
        }, e2.getChildren = function getChildren(t1, e3, r2, i1) {
            (void 0) === t1 && (t1 = !0), (void 0) === e3 && (e3 = !0), (void 0) === r2 && (r2 = !0), (void 0) === i1 && (i1 = -H);
            for(var n2 = [], a1 = this._first; a1;)a1._start >= i1 && (a1 instanceof Vt ? e3 && n2.push(a1) : (r2 && n2.push(a1), t1 && n2.push.apply(n2, a1.getChildren(!0, e3, r2)))), a1 = a1._next;
            return n2;
        }, e2.getById = function getById(t1) {
            for(var e3 = this.getChildren(1, 1, 1), r2 = e3.length; r2--;)if (e3[r2].vars.id === t1) return e3[r2];
        }, e2.remove = function remove(t1) {
            return o(t1) ? this.removeLabel(t1) : p(t1) ? this.killTweensOf(t1) : (qa(this, t1), t1 === this._recent && (this._recent = this._last), sa(this));
        }, e2.totalTime = function totalTime1(t1, e3) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ba(Ct.time - (0 < this._ts ? t1 / this._ts : (this.totalDuration() - t1) / -this._ts))), n1.prototype.totalTime.call(this, t1, e3), this._forcing = 0, this) : this._tTime;
        }, e2.addLabel = function addLabel(t1, e3) {
            return this.labels[t1] = Ka(this, e3), this;
        }, e2.removeLabel = function removeLabel(t1) {
            return delete this.labels[t1], this;
        }, e2.addPause = function addPause(t1, e3, r2) {
            var i1 = Vt.delayedCall(0, e3 || P, r2);
            return i1.data = "isPause", this._hasPause = 1, Ba(this, i1, Ka(this, t1));
        }, e2.removePause = function removePause(t1) {
            var e3 = this._first;
            for(t1 = Ka(this, t1); e3;)e3._start === t1 && "isPause" === e3.data && ra(e3), e3 = e3._next;
        }, e2.killTweensOf = function killTweensOf(t1, e3, r2) {
            for(var i1 = this.getTweensOf(t1, r2), n2 = i1.length; n2--;)Nt !== i1[n2] && i1[n2].kill(t1, e3);
            return this;
        }, e2.getTweensOf = function getTweensOf(t1, e3) {
            for(var r2, i1 = [], n2 = Tt(t1), a1 = this._first, s1 = q(e3); a1;)a1 instanceof Vt ? ca(a1._targets, n2) && (s1 ? (!Nt || a1._initted && a1._ts) && a1.globalTime(0) <= e3 && a1.globalTime(a1.totalDuration()) > e3 : !e3 || a1.isActive()) && i1.push(a1) : (r2 = a1.getTweensOf(n2, e3)).length && i1.push.apply(i1, r2), a1 = a1._next;
            return i1;
        }, e2.tweenTo = function tweenTo(t1, e3) {
            e3 = e3 || {
            };
            var r2 = this, i1 = Ka(r2, t1), n2 = e3.startAt, a1 = e3.onStart, s1 = e3.onStartParams, o1 = e3.immediateRender, u1 = Vt.to(r2, ia({
                ease: "none",
                lazy: !1,
                immediateRender: !1,
                time: i1,
                overwrite: "auto",
                duration: e3.duration || Math.abs((i1 - (n2 && "time" in n2 ? n2.time : r2._time)) / r2.timeScale()) || U,
                onStart: function onStart() {
                    r2.pause();
                    var t2 = e3.duration || Math.abs((i1 - r2._time) / r2.timeScale());
                    u1._dur !== t2 && Ha(u1, t2, 0, 1).render(u1._time, !0, !0), a1 && a1.apply(u1, s1 || []);
                }
            }, e3));
            return o1 ? u1.render(0) : u1;
        }, e2.tweenFromTo = function tweenFromTo(t1, e3, r2) {
            return this.tweenTo(e3, ia({
                startAt: {
                    time: Ka(this, t1)
                }
            }, r2));
        }, e2.recent = function recent() {
            return this._recent;
        }, e2.nextLabel = function nextLabel(t1) {
            return (void 0) === t1 && (t1 = this._time), fb(this, Ka(this, t1));
        }, e2.previousLabel = function previousLabel(t1) {
            return (void 0) === t1 && (t1 = this._time), fb(this, Ka(this, t1), 1);
        }, e2.currentLabel = function currentLabel(t1) {
            return arguments.length ? this.seek(t1, !0) : this.previousLabel(this._time + U);
        }, e2.shiftChildren = function shiftChildren(t1, e3, r2) {
            (void 0) === r2 && (r2 = 0);
            for(var i1, n2 = this._first, a1 = this.labels; n2;)n2._start >= r2 && (n2._start += t1, n2._end += t1), n2 = n2._next;
            if (e3) for(i1 in a1)a1[i1] >= r2 && (a1[i1] += t1);
            return sa(this);
        }, e2.invalidate = function invalidate1() {
            var t1 = this._first;
            for(this._lock = 0; t1;)t1.invalidate(), t1 = t1._next;
            return n1.prototype.invalidate.call(this);
        }, e2.clear = function clear(t1) {
            (void 0) === t1 && (t1 = !0);
            for(var e3, r2 = this._first; r2;)e3 = r2._next, this.remove(r2), r2 = e3;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t1 && (this.labels = {
            }), sa(this);
        }, e2.totalDuration = function totalDuration1(t1) {
            var e3, r2, i1, n2 = 0, a1 = this, s1 = a1._last, o1 = H;
            if (arguments.length) return a1.timeScale((a1._repeat < 0 ? a1.duration() : a1.totalDuration()) / (a1.reversed() ? -t1 : t1));
            if (a1._dirty) {
                for(i1 = a1.parent; s1;)e3 = s1._prev, s1._dirty && s1.totalDuration(), o1 < (r2 = s1._start) && a1._sort && s1._ts && !a1._lock ? (a1._lock = 1, Ba(a1, s1, r2 - s1._delay, 1)._lock = 0) : o1 = r2, r2 < 0 && s1._ts && (n2 -= r2, (!i1 && !a1._dp || i1 && i1.smoothChildTiming) && (a1._start += r2 / a1._ts, a1._time -= r2, a1._tTime -= r2), a1.shiftChildren(-r2, !1, -Infinity), o1 = 0), s1._end > n2 && s1._ts && (n2 = s1._end), s1 = e3;
                Ha(a1, a1 === I && a1._time > n2 ? a1._time : n2, 1, 1), a1._dirty = 0;
            }
            return a1._tDur;
        }, Timeline.updateRoot = function updateRoot(t1) {
            if (I._ts && (fa(I, xa(t1, I)), f = Ct.frame), Ct.frame >= pt) {
                pt += Y.autoSleep || 120;
                var e3 = I._first;
                if ((!e3 || !e3._ts) && Y.autoSleep && Ct._listeners.length < 2) {
                    for(; e3 && !e3._ts;)e3 = e3._next;
                    e3 || Ct.sleep();
                }
            }
        }, Timeline;
    }(Lt);
    ia(Et.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function Pb(t1, e2, r2, i1, n1, a1) {
        var u1, h1, l1, f1;
        if (ft[t1] && !1 !== (u1 = new ft[t1]).init(n1, u1.rawVars ? e2[t1] : function _processVars(t2, e4, r3, i2, n2) {
            if (p(t2) && (t2 = Xt(t2, n2, e4, r3, i2)), !s(t2) || t2.style && t2.nodeType || tt(t2) || J(t2)) return o(t2) ? Xt(t2, n2, e4, r3, i2) : t2;
            var a2, u2 = {
            };
            for(a2 in t2)u2[a2] = Xt(t2[a2], n2, e4, r3, i2);
            return u2;
        }(e2[t1], i1, n1, a1, r2), r2, i1, a1) && (r2._pt = h1 = new ie(r2._pt, n1, t1, 0, 1, u1.render, u1, 0, u1.priority), r2 !== d)) for(l1 = r2._ptLookup[r2._targets.indexOf(n1)], f1 = u1._props.length; f1--;)l1[u1._props[f1]] = h1;
        return u1;
    }
    var Nt, qt = function _addPropTween(t1, e2, r2, i1, n1, a1, s1, u1, h1) {
        p(i1) && (i1 = i1(n1 || 0, t1, a1));
        var l1, f1 = t1[e2], d1 = "get" !== r2 ? r2 : p(f1) ? h1 ? t1[e2.indexOf("set") || !p(t1["get" + e2.substr(3)]) ? e2 : "get" + e2.substr(3)](h1) : t1[e2]() : f1, _1 = p(f1) ? h1 ? jt : Gt : Kt;
        if (o(i1) && (~i1.indexOf("random(") && (i1 = cb(i1)), "=" === i1.charAt(1) && (i1 = parseFloat(d1) + parseFloat(i1.substr(2)) * ("-" === i1.charAt(0) ? -1 : 1) + (Na(d1) || 0))), d1 !== i1) return isNaN(d1 * i1) ? (f1 || e2 in t1 || M(e2, i1), (function _addComplexStringPropTween(t2, e4, r3, i2, n2, a2, s2) {
            var o1, u2, h2, l2, f2, d2, p1, _2, c1 = new ie(this._pt, t2, e4, 0, 1, Zt, null, n2), m1 = 0, g1 = 0;
            for(c1.b = r3, c1.e = i2, r3 += "", (p1 = ~(i2 += "").indexOf("random(")) && (i2 = cb(i2)), a2 && (a2(_2 = [
                r3,
                i2
            ], t2, e4), r3 = _2[0], i2 = _2[1]), u2 = r3.match(nt) || []; o1 = nt.exec(i2);)l2 = o1[0], f2 = i2.substring(m1, o1.index), h2 ? h2 = (h2 + 1) % 5 : "rgba(" === f2.substr(-5) && (h2 = 1), l2 !== u2[g1++] && (d2 = parseFloat(u2[g1 - 1]) || 0, c1._pt = {
                _next: c1._pt,
                p: f2 || 1 === g1 ? f2 : ",",
                s: d2,
                c: "=" === l2.charAt(1) ? parseFloat(l2.substr(2)) * ("-" === l2.charAt(0) ? -1 : 1) : parseFloat(l2) - d2,
                m: h2 && h2 < 4 ? Math.round : 0
            }, m1 = nt.lastIndex);
            return c1.c = m1 < i2.length ? i2.substring(m1, i2.length) : "", c1.fp = s2, (at.test(i2) || p1) && (c1.e = 0), this._pt = c1;
        }).call(this, t1, e2, d1, i1, _1, u1 || Y.stringFilter, h1)) : (l1 = new ie(this._pt, t1, e2, +d1 || 0, i1 - (d1 || 0), "boolean" == typeof f1 ? Wt : Qt, 0, _1), h1 && (l1.fp = h1), s1 && l1.modifier(s1, this, t1), this._pt = l1);
    }, Yt = function _initTween(e2, r2) {
        var i1, n1, a1, s1, o1, u1, h1, l1, f1, d1, p1, _1, c1, m1 = e2.vars, g1 = m1.ease, v1 = m1.startAt, y1 = m1.immediateRender, b2 = m1.lazy, T2 = m1.onUpdate, w2 = m1.onUpdateParams, x1 = m1.callbackScope, k1 = m1.runBackwards, O1 = m1.yoyoEase, P1 = m1.keyframes, M1 = m1.autoRevert, C1 = e2._dur, A1 = e2._startAt, S1 = e2._targets, D1 = e2.parent, z1 = D1 && "nested" === D1.data ? D1.parent._targets : S1, F1 = "auto" === e2._overwrite && !R, B1 = e2.timeline;
        if (!B1 || P1 && g1 || (g1 = "none"), e2._ease = Bt(g1, X.ease), e2._yEase = O1 ? Ft(Bt(!0 === O1 ? g1 : O1, X.ease)) : 0, O1 && e2._yoyo && !e2._repeat && (O1 = e2._yEase, e2._yEase = e2._ease, e2._ease = O1), !B1) {
            if (_1 = (l1 = S1[0] ? $(S1[0]).harness : 0) && m1[l1.prop], i1 = ma(m1, ut), A1 && A1.render(-1, !0).kill(), v1) {
                if (ra(e2._startAt = Vt.set(S1, ia({
                    data: "isStart",
                    overwrite: !1,
                    parent: D1,
                    immediateRender: !0,
                    lazy: t(b2),
                    startAt: null,
                    delay: 0,
                    onUpdate: T2,
                    onUpdateParams: w2,
                    callbackScope: x1,
                    stagger: 0
                }, v1))), y1) {
                    if (0 < r2) M1 || (e2._startAt = 0);
                    else if (C1 && !(r2 < 0 && A1)) return void (r2 && (e2._zTime = r2));
                }
            } else if (k1 && C1) {
                if (A1) M1 || (e2._startAt = 0);
                else if (r2 && (y1 = !1), a1 = ia({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: y1 && t(b2),
                    immediateRender: y1,
                    stagger: 0,
                    parent: D1
                }, i1), _1 && (a1[l1.prop] = _1), ra(e2._startAt = Vt.set(S1, a1)), y1) {
                    if (!r2) return;
                } else _initTween(e2._startAt, U);
            }
            for(e2._pt = 0, b2 = C1 && t(b2) || b2 && !C1, n1 = 0; n1 < S1.length; n1++){
                if (h1 = (o1 = S1[n1])._gsap || Z(S1)[n1]._gsap, e2._ptLookup[n1] = d1 = {
                }, lt[h1.id] && ht.length && ea(), p1 = z1 === S1 ? n1 : z1.indexOf(o1), l1 && !1 !== (f1 = new l1).init(o1, _1 || i1, e2, p1, z1) && (e2._pt = s1 = new ie(e2._pt, o1, f1.name, 0, 1, f1.render, f1, 0, f1.priority), f1._props.forEach(function(t1) {
                    d1[t1] = s1;
                }), f1.priority && (u1 = 1)), !l1 || _1) for(a1 in i1)ft[a1] && (f1 = Pb(a1, i1, e2, p1, o1, z1)) ? f1.priority && (u1 = 1) : d1[a1] = s1 = qt.call(e2, o1, a1, "get", i1[a1], p1, z1, 0, m1.stringFilter);
                e2._op && e2._op[n1] && e2.kill(o1, e2._op[n1]), F1 && e2._pt && (Nt = e2, I.killTweensOf(o1, d1, e2.globalTime(0)), c1 = !e2.parent, Nt = 0), e2._pt && b2 && (lt[h1.id] = 1);
            }
            u1 && re(e2), e2._onInit && e2._onInit(e2);
        }
        e2._from = !B1 && !!m1.runBackwards, e2._onUpdate = T2, e2._initted = (!e2._op || e2._pt) && !c1;
    }, Xt = function _parseFuncOrString(t1, e2, r2, i1, n1) {
        return p(t1) ? t1.call(e2, r2, i1, n1) : o(t1) && ~t1.indexOf("random(") ? cb(t1) : t1;
    }, Ht = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Ut = (Ht + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Vt = function(A1) {
        function Tween(e2, r2, i1, n1) {
            var a1;
            "number" == typeof r2 && (i1.duration = r2, r2 = i1, i1 = null);
            var o1, u1, h1, l1, f1, d1, p1, _1, c1 = (a1 = A1.call(this, n1 ? r2 : na(r2), i1) || this).vars, m1 = c1.duration, g1 = c1.delay, y1 = c1.immediateRender, b2 = c1.stagger, T2 = c1.overwrite, w2 = c1.keyframes, x1 = c1.defaults, k1 = c1.scrollTrigger, O1 = c1.yoyoEase, M1 = a1.parent, C1 = (tt(e2) || J(e2) ? q(e2[0]) : "length" in r2) ? [
                e2
            ] : Tt(e2);
            if (a1._targets = C1.length ? Z(C1) : N("GSAP target " + e2 + " not found. https://greensock.com", !Y.nullTargetWarn) || [], a1._ptLookup = [], a1._overwrite = T2, w2 || b2 || v(m1) || v(g1)) {
                if (r2 = a1.vars, (o1 = a1.timeline = new Et({
                    data: "nested",
                    defaults: x1 || {
                    }
                })).kill(), o1.parent = o1._dp = _assertThisInitialized(a1), o1._start = 0, w2) ia(o1.vars.defaults, {
                    ease: "none"
                }), w2.forEach(function(t1) {
                    return o1.to(C1, t1, ">");
                });
                else {
                    if (l1 = C1.length, p1 = b2 ? Ua(b2) : P, s(b2)) for(f1 in b2)~Ht.indexOf(f1) && ((_1 = _1 || {
                    })[f1] = b2[f1]);
                    for(u1 = 0; u1 < l1; u1++){
                        for(f1 in h1 = {
                        }, r2)Ut.indexOf(f1) < 0 && (h1[f1] = r2[f1]);
                        h1.stagger = 0, O1 && (h1.yoyoEase = O1), _1 && mt(h1, _1), d1 = C1[u1], h1.duration = +Xt(m1, _assertThisInitialized(a1), u1, d1, C1), h1.delay = (+Xt(g1, _assertThisInitialized(a1), u1, d1, C1) || 0) - a1._delay, !b2 && 1 === l1 && h1.delay && (a1._delay = g1 = h1.delay, a1._start += g1, h1.delay = 0), o1.to(d1, h1, p1(u1, d1, C1));
                    }
                    o1.duration() ? m1 = g1 = 0 : a1.timeline = 0;
                }
                m1 || a1.duration(m1 = o1.duration());
            } else a1.timeline = 0;
            return !0 !== T2 || R || (Nt = _assertThisInitialized(a1), I.killTweensOf(C1), Nt = 0), M1 && Aa(M1, _assertThisInitialized(a1)), (y1 || !m1 && !w2 && a1._start === ba(M1._time) && t(y1) && (function _hasNoPausedAncestors(t1) {
                return !t1 || t1._ts && _hasNoPausedAncestors(t1.parent);
            })(_assertThisInitialized(a1)) && "nested" !== M1.data) && (a1._tTime = -U, a1.render(Math.max(0, -g1))), k1 && Ca(_assertThisInitialized(a1), k1), a1;
        }
        _inheritsLoose(Tween, A1);
        var e2 = Tween.prototype;
        return e2.render = function render(t1, e4, r2) {
            var i1, n1, a1, s1, o1, u1, h1, l1, f1, d1 = this._time, p1 = this._tDur, _1 = this._dur, c1 = p1 - U < t1 && 0 <= t1 ? p1 : t1 < U ? 0 : t1;
            if (_1) {
                if (c1 !== this._tTime || !t1 || r2 || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t1 < 0) {
                    if (i1 = c1, l1 = this.timeline, this._repeat) {
                        if (s1 = _1 + this._rDelay, this._repeat < -1 && t1 < 0) return this.totalTime(100 * s1 + t1, e4, r2);
                        if (i1 = ba(c1 % s1), c1 === p1 ? (a1 = this._repeat, i1 = _1) : ((a1 = ~~(c1 / s1)) && a1 === c1 / s1 && (i1 = _1, a1--), _1 < i1 && (i1 = _1)), (u1 = this._yoyo && 1 & a1) && (f1 = this._yEase, i1 = _1 - i1), o1 = gt(this._tTime, s1), i1 === d1 && !r2 && this._initted) return this;
                        a1 !== o1 && (l1 && this._yEase && Db(l1, u1), !this.vars.repeatRefresh || u1 || this._lock || (this._lock = r2 = 1, this.render(ba(s1 * a1), !0).invalidate()._lock = 0));
                    }
                    if (!this._initted) {
                        if (Da(this, t1 < 0 ? t1 : i1, r2, e4)) return this._tTime = 0, this;
                        if (_1 !== this._dur) return this.render(t1, e4, r2);
                    }
                    for(this._tTime = c1, this._time = i1, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h1 = (f1 || this._ease)(i1 / _1), this._from && (this.ratio = h1 = 1 - h1), !i1 || d1 || e4 || xt(this, "onStart"), n1 = this._pt; n1;)n1.r(h1, n1.d), n1 = n1._next;
                    l1 && l1.render(t1 < 0 ? t1 : !i1 && u1 ? -U : l1._dur * h1, e4, r2) || this._startAt && (this._zTime = t1), this._onUpdate && !e4 && (t1 < 0 && this._startAt && this._startAt.render(t1, !0, r2), xt(this, "onUpdate")), this._repeat && a1 !== o1 && this.vars.onRepeat && !e4 && this.parent && xt(this, "onRepeat"), c1 !== this._tDur && c1 || this._tTime !== c1 || (t1 < 0 && this._startAt && !this._onUpdate && this._startAt.render(t1, !0, !0), !t1 && _1 || !(c1 === this._tDur && 0 < this._ts || !c1 && this._ts < 0) || ra(this, 1), e4 || t1 < 0 && !d1 || !c1 && !d1 || (xt(this, c1 === p1 ? "onComplete" : "onReverseComplete", !0), !this._prom || c1 < p1 && 0 < this.timeScale() || this._prom()));
                }
            } else !function _renderZeroDurationTween(t2, e5, r3, i2) {
                var n2, a2, s2, o2 = t2.ratio, u2 = e5 < 0 || !e5 && (!t2._start && function _parentPlayheadIsBeforeStart(t3) {
                    var e6 = t3.parent;
                    return e6 && e6._ts && !e6._lock && (e6.rawTime() < 0 || _parentPlayheadIsBeforeStart(e6));
                }(t2) || (t2._ts < 0 || t2._dp._ts < 0) && "isFromStart" !== t2.data && "isStart" !== t2.data) ? 0 : 1, h2 = t2._rDelay, l2 = 0;
                if (h2 && t2._repeat && (l2 = yt(0, t2._tDur, e5), a2 = gt(l2, h2), s2 = gt(t2._tTime, h2), t2._yoyo && 1 & a2 && (u2 = 1 - u2), a2 !== s2 && (o2 = 1 - u2, t2.vars.repeatRefresh && t2._initted && t2.invalidate())), u2 !== o2 || i2 || t2._zTime === U || !e5 && t2._zTime) {
                    if (!t2._initted && Da(t2, e5, i2, r3)) return;
                    for(s2 = t2._zTime, t2._zTime = e5 || (r3 ? U : 0), r3 = r3 || e5 && !s2, t2.ratio = u2, t2._from && (u2 = 1 - u2), t2._time = 0, t2._tTime = l2, r3 || xt(t2, "onStart"), n2 = t2._pt; n2;)n2.r(u2, n2.d), n2 = n2._next;
                    t2._startAt && e5 < 0 && t2._startAt.render(e5, !0, !0), t2._onUpdate && !r3 && xt(t2, "onUpdate"), l2 && t2._repeat && !r3 && t2.parent && xt(t2, "onRepeat"), (e5 >= t2._tDur || e5 < 0) && t2.ratio === u2 && (u2 && ra(t2, 1), r3 || (xt(t2, u2 ? "onComplete" : "onReverseComplete", !0), t2._prom && t2._prom()));
                } else t2._zTime || (t2._zTime = e5);
            }(this, t1, e4, r2);
            return this;
        }, e2.targets = function targets() {
            return this._targets;
        }, e2.invalidate = function invalidate1() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), A1.prototype.invalidate.call(this);
        }, e2.kill = function kill1(t1, e4) {
            if ((void 0) === e4 && (e4 = "all"), !(t1 || e4 && "all" !== e4)) return this._lazy = this._pt = 0, this.parent ? hb(this) : this;
            if (this.timeline) {
                var r2 = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t1, e4, Nt && !0 !== Nt.vars.overwrite)._first || hb(this), this.parent && r2 !== this.timeline.totalDuration() && Ha(this, this._dur * this.timeline._tDur / r2, 0, 1), this;
            }
            var i1, n1, a1, s1, u1, h1, l1, f1 = this._targets, d1 = t1 ? Tt(t1) : f1, p1 = this._ptLookup, _1 = this._pt;
            if ((!e4 || "all" === e4) && (function _arraysMatch(t2, e5) {
                for(var r3 = t2.length, i2 = r3 === e5.length; i2 && r3-- && t2[r3] === e5[r3];);
                return r3 < 0;
            })(f1, d1)) return "all" === e4 && (this._pt = 0), hb(this);
            for(i1 = this._op = this._op || [], "all" !== e4 && (o(e4) && (u1 = {
            }, aa(e4, function(t2) {
                return u1[t2] = 1;
            }), e4 = u1), e4 = (function _addAliasesToVars(t2, e5) {
                var r3, i2, n2, a2, s2 = t2[0] ? $(t2[0]).harness : 0, o1 = s2 && s2.aliases;
                if (!o1) return e5;
                for(i2 in r3 = mt({
                }, e5), o1)if (i2 in r3) for(n2 = (a2 = o1[i2].split(",")).length; n2--;)r3[a2[n2]] = r3[i2];
                return r3;
            })(f1, e4)), l1 = f1.length; l1--;)if (~d1.indexOf(f1[l1])) for(u1 in n1 = p1[l1], "all" === e4 ? (i1[l1] = e4, s1 = n1, a1 = {
            }) : (a1 = i1[l1] = i1[l1] || {
            }, s1 = e4), s1)(h1 = n1 && n1[u1]) && ("kill" in h1.d && !0 !== h1.d.kill(u1) || qa(this, h1, "_pt"), delete n1[u1]), "all" !== a1 && (a1[u1] = 1);
            return this._initted && !this._pt && _1 && hb(this), this;
        }, Tween.to = function to(t1, e4, r3) {
            return new Tween(t1, e4, r3);
        }, Tween.from = function from(t1, e4) {
            return new Tween(t1, da(arguments, 1));
        }, Tween.delayedCall = function delayedCall(t1, e4, r3, i1) {
            return new Tween(e4, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t1,
                onComplete: e4,
                onReverseComplete: e4,
                onCompleteParams: r3,
                onReverseCompleteParams: r3,
                callbackScope: i1
            });
        }, Tween.fromTo = function fromTo(t1, e4, r3) {
            return new Tween(t1, da(arguments, 2));
        }, Tween.set = function set(t1, e4) {
            return e4.duration = 0, e4.repeatDelay || (e4.repeat = 0), new Tween(t1, e4);
        }, Tween.killTweensOf = function killTweensOf(t1, e4, r3) {
            return I.killTweensOf(t1, e4, r3);
        }, Tween;
    }(Lt);
    ia(Vt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), aa("staggerTo,staggerFrom,staggerFromTo", function(r3) {
        Vt[r3] = function() {
            var t1 = new Et, e2 = bt.call(arguments, 0);
            return e2.splice("staggerFromTo" === r3 ? 5 : 4, 0, 0), t1[r3].apply(t1, e2);
        };
    });
    function $b(t1, e2, r3) {
        return t1.setAttribute(e2, r3);
    }
    function gc(t1, e2, r3, i1) {
        i1.mSet(t1, e2, i1.m.call(i1.tween, r3, i1.mt), i1);
    }
    var Kt = function _setterPlain(t1, e2, r3) {
        return t1[e2] = r3;
    }, Gt = function _setterFunc(t1, e2, r3) {
        return t1[e2](r3);
    }, jt = function _setterFuncWithParam(t1, e2, r3, i1) {
        return t1[e2](i1.fp, r3);
    }, $t = function _getSetter(t1, e2) {
        return p(t1[e2]) ? Gt : r1(t1[e2]) && t1.setAttribute ? $b : Kt;
    }, Qt = function _renderPlain(t1, e2) {
        return e2.set(e2.t, e2.p, Math.round(10000 * (e2.s + e2.c * t1)) / 10000, e2);
    }, Wt = function _renderBoolean(t1, e2) {
        return e2.set(e2.t, e2.p, !!(e2.s + e2.c * t1), e2);
    }, Zt = function _renderComplexString(t1, e2) {
        var r3 = e2._pt, i1 = "";
        if (!t1 && e2.b) i1 = e2.b;
        else if (1 === t1 && e2.e) i1 = e2.e;
        else {
            for(; r3;)i1 = r3.p + (r3.m ? r3.m(r3.s + r3.c * t1) : Math.round(10000 * (r3.s + r3.c * t1)) / 10000) + i1, r3 = r3._next;
            i1 += e2.c;
        }
        e2.set(e2.t, e2.p, i1, e2);
    }, Jt = function _renderPropTweens(t1, e2) {
        for(var r3 = e2._pt; r3;)r3.r(t1, r3.d), r3 = r3._next;
    }, te = function _addPluginModifier(t1, e2, r3, i1) {
        for(var n1, a1 = this._pt; a1;)n1 = a1._next, a1.p === i1 && a1.modifier(t1, e2, r3), a1 = n1;
    }, ee = function _killPropTweensOf(t1) {
        for(var e2, r3, i1 = this._pt; i1;)r3 = i1._next, i1.p === t1 && !i1.op || i1.op === t1 ? qa(this, i1, "_pt") : i1.dep || (e2 = 1), i1 = r3;
        return !e2;
    }, re = function _sortPropTweensByPriority(t1) {
        for(var e2, r3, i1, n1, a1 = t1._pt; a1;){
            for(e2 = a1._next, r3 = i1; r3 && r3.pr > a1.pr;)r3 = r3._next;
            (a1._prev = r3 ? r3._prev : n1) ? a1._prev._next = a1 : i1 = a1, (a1._next = r3) ? r3._prev = a1 : n1 = a1, a1 = e2;
        }
        t1._pt = i1;
    }, ie = (PropTween.prototype.modifier = function modifier(t1, e2, r3) {
        this.mSet = this.mSet || this.set, this.set = gc, this.m = t1, this.mt = r3, this.tween = e2;
    }, PropTween);
    function PropTween(t1, e2, r3, i1, n1, a1, s1, o1, u1) {
        this.t = e2, this.s = i1, this.c = n1, this.p = r3, this.r = a1 || Qt, this.d = s1 || this, this.set = o1 || Kt, this.pr = u1 || 0, (this._next = t1) && (t1._prev = this);
    }
    aa(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t1) {
        return ut[t1] = 1;
    }), ot.TweenMax = ot.TweenLite = Vt, ot.TimelineLite = ot.TimelineMax = Et, I = new Et({
        sortChildren: !1,
        defaults: X,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), Y.stringFilter = sb;
    var ne = {
        registerPlugin: function registerPlugin() {
            for(var t1 = arguments.length, e2 = new Array(t1), r3 = 0; r3 < t1; r3++)e2[r3] = arguments[r3];
            e2.forEach(function(t2) {
                return (function _createPlugin(t3) {
                    var e4 = (t3 = !t3.name && t3.default || t3).name, r4 = p(t3), i1 = e4 && !r4 && t3.init ? function() {
                        this._props = [];
                    } : t3, n1 = {
                        init: P,
                        render: Jt,
                        add: qt,
                        kill: ee,
                        modifier: te,
                        rawVars: 0
                    }, a1 = {
                        targetTest: 0,
                        get: 0,
                        getSetter: $t,
                        aliases: {
                        },
                        register: 0
                    };
                    if (At(), t3 !== i1) {
                        if (ft[e4]) return;
                        ia(i1, ia(ma(t3, n1), a1)), mt(i1.prototype, mt(n1, ma(t3, a1))), ft[i1.prop = e4] = i1, t3.targetTest && (_t.push(i1), ut[e4] = 1), e4 = ("css" === e4 ? "CSS" : e4.charAt(0).toUpperCase() + e4.substr(1)) + "Plugin";
                    }
                    O(e4, i1), t3.register && t3.register(ae, i1, ie);
                })(t2);
            });
        },
        timeline: function timeline(t1) {
            return new Et(t1);
        },
        getTweensOf: function getTweensOf(t1, e2) {
            return I.getTweensOf(t1, e2);
        },
        getProperty: function getProperty(i1, t1, e2, r3) {
            o(i1) && (i1 = Tt(i1)[0]);
            var n1 = $(i1 || {
            }).get, a1 = e2 ? ha : ga;
            return "native" === e2 && (e2 = ""), i1 ? t1 ? a1((ft[t1] && ft[t1].get || n1)(i1, t1, e2, r3)) : function(t2, e4, r4) {
                return a1((ft[t2] && ft[t2].get || n1)(i1, t2, e4, r4));
            } : i1;
        },
        quickSetter: function quickSetter(r3, e2, i1) {
            if (1 < (r3 = Tt(r3)).length) {
                var n1 = r3.map(function(t1) {
                    return ae.quickSetter(t1, e2, i1);
                }), a1 = n1.length;
                return function(t1) {
                    for(var e4 = a1; e4--;)n1[e4](t1);
                };
            }
            r3 = r3[0] || {
            };
            var s1 = ft[e2], o1 = $(r3), u1 = o1.harness && (o1.harness.aliases || {
            })[e2] || e2, h1 = s1 ? function(t1) {
                var e4 = new s1;
                d._pt = 0, e4.init(r3, i1 ? t1 + i1 : t1, d, 0, [
                    r3
                ]), e4.render(1, e4), d._pt && Jt(1, d);
            } : o1.set(r3, u1);
            return s1 ? h1 : function(t1) {
                return h1(r3, u1, i1 ? t1 + i1 : t1, o1, 1);
            };
        },
        isTweening: function isTweening(t1) {
            return 0 < I.getTweensOf(t1, !0).length;
        },
        defaults: function defaults(t1) {
            return t1 && t1.ease && (t1.ease = Bt(t1.ease, X.ease)), la(X, t1 || {
            });
        },
        config: function config(t1) {
            return la(Y, t1 || {
            });
        },
        registerEffect: function registerEffect(t1) {
            var i1 = t1.name, n2 = t1.effect, e2 = t1.plugins, a2 = t1.defaults, r3 = t1.extendTimeline;
            (e2 || "").split(",").forEach(function(t2) {
                return t2 && !ft[t2] && !ot[t2] && N(i1 + " effect requires " + t2 + " plugin.");
            }), dt[i1] = function(t2, e4, r4) {
                return n2(Tt(t2), ia(e4 || {
                }, a2), r4);
            }, r3 && (Et.prototype[i1] = function(t2, e4, r4) {
                return this.add(dt[i1](t2, s(e4) ? e4 : (r4 = e4) && {
                }, this), r4);
            });
        },
        registerEase: function registerEase(t1, e2) {
            St[t1] = Bt(e2);
        },
        parseEase: function parseEase(t1, e2) {
            return arguments.length ? Bt(t1, e2) : St;
        },
        getById: function getById(t1) {
            return I.getById(t1);
        },
        exportRoot: function exportRoot(e2, r3) {
            (void 0) === e2 && (e2 = {
            });
            var i1, n2, a2 = new Et(e2);
            for(a2.smoothChildTiming = t(e2.smoothChildTiming), I.remove(a2), a2._dp = 0, a2._time = a2._tTime = I._time, i1 = I._first; i1;)n2 = i1._next, !r3 && !i1._dur && i1 instanceof Vt && i1.vars.onComplete === i1._targets[0] || Ba(a2, i1, i1._start - i1._delay), i1 = n2;
            return Ba(I, a2, 0), a2;
        },
        utils: {
            wrap: function wrap(e2, t1, r3) {
                var i1 = t1 - e2;
                return tt(e2) ? _a(e2, wrap(0, e2.length), t1) : La(r3, function(t2) {
                    return (i1 + (t2 - e2) % i1) % i1 + e2;
                });
            },
            wrapYoyo: function wrapYoyo(e2, t1, r3) {
                var i1 = t1 - e2, n2 = 2 * i1;
                return tt(e2) ? _a(e2, wrapYoyo(0, e2.length - 1), t1) : La(r3, function(t2) {
                    return e2 + (i1 < (t2 = (n2 + (t2 - e2) % n2) % n2 || 0) ? n2 - t2 : t2);
                });
            },
            distribute: Ua,
            random: Xa,
            snap: Wa,
            normalize: function normalize(t1, e2, r3) {
                return wt(t1, e2, 0, 1, r3);
            },
            getUnit: Na,
            clamp: function clamp(e2, r3, t1) {
                return La(t1, function(t2) {
                    return yt(e2, r3, t2);
                });
            },
            splitColor: nb,
            toArray: Tt,
            mapRange: wt,
            pipe: function pipe() {
                for(var t1 = arguments.length, e2 = new Array(t1), r3 = 0; r3 < t1; r3++)e2[r3] = arguments[r3];
                return function(t2) {
                    return e2.reduce(function(t3, e4) {
                        return e4(t3);
                    }, t2);
                };
            },
            unitize: function unitize(e2, r3) {
                return function(t1) {
                    return e2(parseFloat(t1)) + (r3 || Na(t1));
                };
            },
            interpolate: function interpolate(e2, r3, t1, i1) {
                var n2 = isNaN(e2 + r3) ? 0 : function(t2) {
                    return (1 - t2) * e2 + t2 * r3;
                };
                if (!n2) {
                    var a2, s1, u1, h1, l1, f1 = o(e2), d1 = {
                    };
                    if (!0 === t1 && (i1 = 1) && (t1 = null), f1) e2 = {
                        p: e2
                    }, r3 = {
                        p: r3
                    };
                    else if (tt(e2) && !tt(r3)) {
                        for(u1 = [], h1 = e2.length, l1 = h1 - 2, s1 = 1; s1 < h1; s1++)u1.push(interpolate(e2[s1 - 1], e2[s1]));
                        h1--, n2 = function func(t2) {
                            t2 *= h1;
                            var e4 = Math.min(l1, ~~t2);
                            return u1[e4](t2 - e4);
                        }, t1 = r3;
                    } else i1 || (e2 = mt(tt(e2) ? [] : {
                    }, e2));
                    if (!u1) {
                        for(a2 in r3)qt.call(d1, e2, a2, "get", r3[a2]);
                        n2 = function func(t2) {
                            return Jt(t2, d1) || (f1 ? e2.p : e2);
                        };
                    }
                }
                return La(t1, n2);
            },
            shuffle: Ta
        },
        install: L,
        effects: dt,
        ticker: Ct,
        updateRoot: Et.updateRoot,
        plugins: ft,
        globalTimeline: I,
        core: {
            PropTween: ie,
            globals: O,
            Tween: Vt,
            Timeline: Et,
            Animation: Lt,
            getCache: $,
            _removeLinkedListItem: qa,
            suppressOverwrites: function suppressOverwrites(t1) {
                return R = t1;
            }
        }
    };
    aa("to,from,fromTo,delayedCall,set,killTweensOf", function(t1) {
        return ne[t1] = Vt[t1];
    }), Ct.add(Et.updateRoot), d = ne.to({
    }, {
        duration: 0
    });
    function kc(t1, e2) {
        for(var r3 = t1._pt; r3 && r3.p !== e2 && r3.op !== e2 && r3.fp !== e2;)r3 = r3._next;
        return r3;
    }
    function mc(t1, n2) {
        return {
            name: t1,
            rawVars: 1,
            init: function init(t2, i1, e2) {
                e2._onInit = function(t3) {
                    var e4, r3;
                    if (o(i1) && (e4 = {
                    }, aa(i1, function(t4) {
                        return e4[t4] = 1;
                    }), i1 = e4), n2) {
                        for(r3 in e4 = {
                        }, i1)e4[r3] = n2(i1[r3]);
                        i1 = e4;
                    }
                    !function _addModifiers(t4, e5) {
                        var r4, i2, n3, a3 = t4._targets;
                        for(r4 in e5)for(i2 = a3.length; i2--;)(n3 = (n3 = t4._ptLookup[i2][r4]) && n3.d) && (n3._pt && (n3 = kc(n3, r4)), n3 && n3.modifier && n3.modifier(e5[r4], t4, a3[i2], r4));
                    }(t3, i1);
                };
            }
        };
    }
    var ae = ne.registerPlugin({
        name: "attr",
        init: function init(t1, e2, r3, i1, n2) {
            var a3, s2;
            for(a3 in e2)(s2 = this.add(t1, "setAttribute", (t1.getAttribute(a3) || 0) + "", e2[a3], i1, n2, 0, 0, a3)) && (s2.op = a3), this._props.push(a3);
        }
    }, {
        name: "endArray",
        init: function init(t1, e2) {
            for(var r3 = e2.length; r3--;)this.add(t1, r3, t1[r3] || 0, e2[r3]);
        }
    }, mc("roundProps", Va), mc("modifiers"), mc("snap", Wa)) || ne;
    Vt.version = Et.version = ae.version = "3.6.0", l = 1, u() && At();
    function Xc(t1, e2) {
        return e2.set(e2.t, e2.p, Math.round(10000 * (e2.s + e2.c * t1)) / 10000 + e2.u, e2);
    }
    function Yc(t1, e2) {
        return e2.set(e2.t, e2.p, 1 === t1 ? e2.e : Math.round(10000 * (e2.s + e2.c * t1)) / 10000 + e2.u, e2);
    }
    function Zc(t1, e2) {
        return e2.set(e2.t, e2.p, t1 ? Math.round(10000 * (e2.s + e2.c * t1)) / 10000 + e2.u : e2.b, e2);
    }
    function $c(t1, e2) {
        var r3 = e2.s + e2.c * t1;
        e2.set(e2.t, e2.p, ~~(r3 + (r3 < 0 ? -0.5 : 0.5)) + e2.u, e2);
    }
    function _c(t1, e2) {
        return e2.set(e2.t, e2.p, t1 ? e2.e : e2.b, e2);
    }
    function ad(t1, e2) {
        return e2.set(e2.t, e2.p, 1 !== t1 ? e2.b : e2.e, e2);
    }
    function bd(t1, e2, r3) {
        return t1.style[e2] = r3;
    }
    function cd(t1, e2, r3) {
        return t1.style.setProperty(e2, r3);
    }
    function dd(t1, e2, r3) {
        return t1._gsap[e2] = r3;
    }
    function ed(t1, e2, r3) {
        return t1._gsap.scaleX = t1._gsap.scaleY = r3;
    }
    function fd(t1, e2, r3, i1, n2) {
        var a3 = t1._gsap;
        a3.scaleX = a3.scaleY = r3, a3.renderTransform(n2, a3);
    }
    function gd(t1, e2, r3, i1, n2) {
        var a3 = t1._gsap;
        a3[e2] = r3, a3.renderTransform(n2, a3);
    }
    function kd(t1, e2) {
        var r3 = oe.createElementNS ? oe.createElementNS((e2 || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t1) : oe.createElement(t1);
        return r3.style ? r3 : oe.createElement(t1);
    }
    function ld(t1, e2, r3) {
        var i1 = getComputedStyle(t1);
        return i1[e2] || i1.getPropertyValue(e2.replace(Ie, "-$1").toLowerCase()) || i1.getPropertyValue(e2) || !r3 && ld(t1, He(e2) || e2, 1) || "";
    }
    function od() {
        (function _windowExists() {
            return "undefined" != typeof window;
        })() && window.document && (se = window, oe = se.document, ue = oe.documentElement, le = kd("div") || {
            style: {
            }
        }, fe = kd("div"), qe = He(qe), Ye = qe + "Origin", le.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", pe = !!He("perspective"), he = 1);
    }
    function pd(t1) {
        var e2, r3 = kd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i1 = this.parentNode, n2 = this.nextSibling, a3 = this.style.cssText;
        if (ue.appendChild(r3), r3.appendChild(this), this.style.display = "block", t1) try {
            e2 = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = pd;
        } catch (t2) {
        }
        else this._gsapBBox && (e2 = this._gsapBBox());
        return i1 && (n2 ? i1.insertBefore(this, n2) : i1.appendChild(this)), ue.removeChild(r3), this.style.cssText = a3, e2;
    }
    function qd(t1, e2) {
        for(var r3 = e2.length; r3--;)if (t1.hasAttribute(e2[r3])) return t1.getAttribute(e2[r3]);
    }
    function rd(e2) {
        var r3;
        try {
            r3 = e2.getBBox();
        } catch (t1) {
            r3 = pd.call(e2, !0);
        }
        return r3 && (r3.width || r3.height) || e2.getBBox === pd || (r3 = pd.call(e2, !0)), !r3 || r3.width || r3.x || r3.y ? r3 : {
            x: +qd(e2, [
                "x",
                "cx",
                "x1"
            ]) || 0,
            y: +qd(e2, [
                "y",
                "cy",
                "y1"
            ]) || 0,
            width: 0,
            height: 0
        };
    }
    function sd(t1) {
        return !(!t1.getCTM || t1.parentNode && !t1.ownerSVGElement || !rd(t1));
    }
    function td(t1, e2) {
        if (e2) {
            var r3 = t1.style;
            e2 in ze && e2 !== Ye && (e2 = qe), r3.removeProperty ? ("ms" !== e2.substr(0, 2) && "webkit" !== e2.substr(0, 6) || (e2 = "-" + e2), r3.removeProperty(e2.replace(Ie, "-$1").toLowerCase())) : r3.removeAttribute(e2);
        }
    }
    function ud(t1, e2, r4, i1, n2, a3) {
        var s2 = new ie(t1._pt, e2, r4, 0, 1, a3 ? ad : _c);
        return (t1._pt = s2).b = i1, s2.e = n2, t1._props.push(r4), s2;
    }
    function wd(t1, e2, r4, i1) {
        var n2, a3, s2, o1, u2 = parseFloat(r4) || 0, h2 = (r4 + "").trim().substr((u2 + "").length) || "px", l2 = le.style, f2 = Le.test(e2), d2 = "svg" === t1.tagName.toLowerCase(), p1 = (d2 ? "client" : "offset") + (f2 ? "Width" : "Height"), _1 = "px" === i1, c1 = "%" === i1;
        return i1 === h2 || !u2 || Ue[i1] || Ue[h2] ? u2 : ("px" === h2 || _1 || (u2 = wd(t1, e2, r4, "px")), o1 = t1.getCTM && sd(t1), !c1 && "%" !== h2 || !ze[e2] && !~e2.indexOf("adius") ? (l2[f2 ? "width" : "height"] = 100 + (_1 ? h2 : i1), a3 = ~e2.indexOf("adius") || "em" === i1 && t1.appendChild && !d2 ? t1 : t1.parentNode, o1 && (a3 = (t1.ownerSVGElement || {
        }).parentNode), a3 && a3 !== oe && a3.appendChild || (a3 = oe.body), (s2 = a3._gsap) && c1 && s2.width && f2 && s2.time === Ct.time ? ba(u2 / s2.width * 100) : (!c1 && "%" !== h2 || (l2.position = ld(t1, "position")), a3 === t1 && (l2.position = "static"), a3.appendChild(le), n2 = le[p1], a3.removeChild(le), l2.position = "absolute", f2 && c1 && ((s2 = $(a3)).time = Ct.time, s2.width = a3[p1]), ba(_1 ? n2 * u2 / 100 : n2 && u2 ? 100 / n2 * u2 : 0))) : (n2 = o1 ? t1.getBBox()[f2 ? "width" : "height"] : t1[p1], ba(c1 ? u2 / n2 * 100 : u2 / 100 * n2)));
    }
    function xd(t1, e2, r4, i1) {
        var n2;
        return he || od(), e2 in Ne && "transform" !== e2 && ~(e2 = Ne[e2]).indexOf(",") && (e2 = e2.split(",")[0]), ze[e2] && "transform" !== e2 ? (n2 = $e(t1, i1), n2 = "transformOrigin" !== e2 ? n2[e2] : Qe(ld(t1, Ye)) + " " + n2.zOrigin + "px") : (n2 = t1.style[e2]) && "auto" !== n2 && !i1 && !~(n2 + "").indexOf("calc(") || (n2 = Ke[e2] && Ke[e2](t1, e2, r4) || ld(t1, e2) || _(t1, e2) || ("opacity" === e2 ? 1 : 0)), r4 && !~(n2 + "").trim().indexOf(" ") ? wd(t1, e2, n2, r4) + r4 : n2;
    }
    function yd(t1, e2, r4, i1) {
        if (!r4 || "none" === r4) {
            var n2 = He(e2, t1, 1), a3 = n2 && ld(t1, n2, 1);
            a3 && a3 !== r4 ? (e2 = n2, r4 = a3) : "borderColor" === e2 && (r4 = ld(t1, "borderTopColor"));
        }
        var s2, o1, u2, h2, l2, f2, d2, p1, _1, c1, m1, g1, v1 = new ie(this._pt, t1.style, e2, 0, 1, Zt), y1 = 0, b2 = 0;
        if (v1.b = r4, v1.e = i1, r4 += "", "auto" === (i1 += "") && (t1.style[e2] = i1, i1 = ld(t1, e2) || i1, t1.style[e2] = r4), sb(s2 = [
            r4,
            i1
        ]), i1 = s2[1], u2 = (r4 = s2[0]).match(it) || [], (i1.match(it) || []).length) {
            for(; o1 = it.exec(i1);)d2 = o1[0], _1 = i1.substring(y1, o1.index), l2 ? l2 = (l2 + 1) % 5 : "rgba(" !== _1.substr(-5) && "hsla(" !== _1.substr(-5) || (l2 = 1), d2 !== (f2 = u2[b2++] || "") && (h2 = parseFloat(f2) || 0, m1 = f2.substr((h2 + "").length), (g1 = "=" === d2.charAt(1) ? +(d2.charAt(0) + "1") : 0) && (d2 = d2.substr(2)), p1 = parseFloat(d2), c1 = d2.substr((p1 + "").length), y1 = it.lastIndex - c1.length, c1 || (c1 = c1 || Y.units[e2] || m1, y1 === i1.length && (i1 += c1, v1.e += c1)), m1 !== c1 && (h2 = wd(t1, e2, f2, c1) || 0), v1._pt = {
                _next: v1._pt,
                p: _1 || 1 === b2 ? _1 : ",",
                s: h2,
                c: g1 ? g1 * p1 : p1 - h2,
                m: l2 && l2 < 4 || "zIndex" === e2 ? Math.round : 0
            });
            v1.c = y1 < i1.length ? i1.substring(y1, i1.length) : "";
        } else v1.r = "display" === e2 && "none" === i1 ? ad : _c;
        return at.test(i1) && (v1.e = 0), this._pt = v1;
    }
    function Ad(t1) {
        var e2 = t1.split(" "), r4 = e2[0], i1 = e2[1] || "50%";
        return "top" !== r4 && "bottom" !== r4 && "left" !== i1 && "right" !== i1 || (t1 = r4, r4 = i1, i1 = t1), e2[0] = Ve[r4] || r4, e2[1] = Ve[i1] || i1, e2.join(" ");
    }
    function Bd(t1, e2) {
        if (e2.tween && e2.tween._time === e2.tween._dur) {
            var r4, i1, n3, a4 = e2.t, s2 = a4.style, o1 = e2.u, u2 = a4._gsap;
            if ("all" === o1 || !0 === o1) s2.cssText = "", i1 = 1;
            else for(n3 = (o1 = o1.split(",")).length; -1 < --n3;)r4 = o1[n3], ze[r4] && (i1 = 1, r4 = "transformOrigin" === r4 ? Ye : qe), td(a4, r4);
            i1 && (td(a4, qe), u2 && (u2.svg && a4.removeAttribute("transform"), $e(a4, 1), u2.uncache = 1));
        }
    }
    function Fd(t1) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t1 || "none" === t1 || !t1;
    }
    function Gd(t1) {
        var e2 = ld(t1, qe);
        return Fd(e2) ? Ge : e2.substr(7).match(rt).map(ba);
    }
    function Hd(t1, e2) {
        var r5, i2, n4, a5, s3 = t1._gsap || $(t1), o2 = t1.style, u3 = Gd(t1);
        return s3.svg && t1.getAttribute("transform") ? "1,0,0,1,0,0" === (u3 = [
            (n4 = t1.transform.baseVal.consolidate().matrix).a,
            n4.b,
            n4.c,
            n4.d,
            n4.e,
            n4.f
        ]).join(",") ? Ge : u3 : (u3 !== Ge || t1.offsetParent || t1 === ue || s3.svg || (n4 = o2.display, o2.display = "block", (r5 = t1.parentNode) && t1.offsetParent || (a5 = 1, i2 = t1.nextSibling, ue.appendChild(t1)), u3 = Gd(t1), n4 ? o2.display = n4 : td(t1, "display"), a5 && (i2 ? r5.insertBefore(t1, i2) : r5 ? r5.appendChild(t1) : ue.removeChild(t1))), e2 && 6 < u3.length ? [
            u3[0],
            u3[1],
            u3[4],
            u3[5],
            u3[12],
            u3[13]
        ] : u3);
    }
    function Id(t1, e2, r5, i2, n4, a5) {
        var s3, o2, u3, h2 = t1._gsap, l2 = n4 || Hd(t1, !0), f2 = h2.xOrigin || 0, d2 = h2.yOrigin || 0, p1 = h2.xOffset || 0, _1 = h2.yOffset || 0, c1 = l2[0], m1 = l2[1], g1 = l2[2], v1 = l2[3], y1 = l2[4], b2 = l2[5], T2 = e2.split(" "), w2 = parseFloat(T2[0]) || 0, x1 = parseFloat(T2[1]) || 0;
        r5 ? l2 !== Ge && (o2 = c1 * v1 - m1 * g1) && (u3 = w2 * (-m1 / o2) + x1 * (c1 / o2) - (c1 * b2 - m1 * y1) / o2, w2 = w2 * (v1 / o2) + x1 * (-g1 / o2) + (g1 * b2 - v1 * y1) / o2, x1 = u3) : (w2 = (s3 = rd(t1)).x + (~T2[0].indexOf("%") ? w2 / 100 * s3.width : w2), x1 = s3.y + (~(T2[1] || T2[0]).indexOf("%") ? x1 / 100 * s3.height : x1)), i2 || !1 !== i2 && h2.smooth ? (y1 = w2 - f2, b2 = x1 - d2, h2.xOffset = p1 + (y1 * c1 + b2 * g1) - y1, h2.yOffset = _1 + (y1 * m1 + b2 * v1) - b2) : h2.xOffset = h2.yOffset = 0, h2.xOrigin = w2, h2.yOrigin = x1, h2.smooth = !!i2, h2.origin = e2, h2.originIsAbsolute = !!r5, t1.style[Ye] = "0px 0px", a5 && (ud(a5, h2, "xOrigin", f2, w2), ud(a5, h2, "yOrigin", d2, x1), ud(a5, h2, "xOffset", p1, h2.xOffset), ud(a5, h2, "yOffset", _1, h2.yOffset)), t1.setAttribute("data-svg-origin", w2 + " " + x1);
    }
    function Ld(t1, e2, r5) {
        var i2 = Na(e2);
        return ba(parseFloat(e2) + parseFloat(wd(t1, "x", r5 + "px", i2))) + i2;
    }
    function Sd(t1, e2, r5, i2, n4, a5) {
        var s3, u3, h2 = 360, l2 = o(n4), f2 = parseFloat(n4) * (l2 && ~n4.indexOf("rad") ? Fe : 1), d2 = a5 ? f2 * a5 : f2 - i2, p1 = i2 + d2 + "deg";
        return l2 && ("short" === (s3 = n4.split("_")[1]) && (d2 %= h2) !== d2 % 180 && (d2 += d2 < 0 ? h2 : -h2), "cw" === s3 && d2 < 0 ? d2 = (d2 + 36000000000) % h2 - ~~(d2 / h2) * h2 : "ccw" === s3 && 0 < d2 && (d2 = (d2 - 36000000000) % h2 - ~~(d2 / h2) * h2)), t1._pt = u3 = new ie(t1._pt, e2, r5, i2, d2, Yc), u3.e = p1, u3.u = "deg", t1._props.push(r5), u3;
    }
    function Td(t1, e2, r5) {
        var i2, n4, a5, s3, o2, u3, h2, l2 = fe.style, f2 = r5._gsap;
        for(n4 in l2.cssText = getComputedStyle(r5).cssText + ";position:absolute;display:block;", l2[qe] = e2, oe.body.appendChild(fe), i2 = $e(fe, 1), ze)(a5 = f2[n4]) !== (s3 = i2[n4]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n4) < 0 && (o2 = Na(a5) !== (h2 = Na(s3)) ? wd(r5, n4, a5, h2) : parseFloat(a5), u3 = parseFloat(s3), t1._pt = new ie(t1._pt, f2, n4, o2, u3 - o2, Xc), t1._pt.u = h2 || 0, t1._props.push(n4));
        oe.body.removeChild(fe);
    }
    var se, oe, ue, he, le, fe, de, pe, _e = St.Power0, ce = St.Power1, me = St.Power2, ge = St.Power3, ve = St.Power4, ye = St.Linear, be = St.Quad, Te = St.Cubic, we = St.Quart, xe = St.Quint, ke = St.Strong, Oe = St.Elastic, Pe = St.Back, Me = St.SteppedEase, Ce = St.Bounce, Ae = St.Sine, Se = St.Expo, De = St.Circ, ze = {
    }, Fe = 180 / Math.PI, Be = Math.PI / 180, Re = Math.atan2, Ie = /([A-Z])/g, Le = /(?:left|right|width|margin|padding|x)/i, Ee = /[\s,\(]\S/, Ne = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, qe = "transform", Ye = qe + "Origin", Xe = "O,Moz,ms,Ms,Webkit".split(","), He = function _checkPropPrefix(t1, e2, r5) {
        var i2 = (e2 || le).style, n4 = 5;
        if (t1 in i2 && !r5) return t1;
        for(t1 = t1.charAt(0).toUpperCase() + t1.substr(1); (n4--) && !(Xe[n4] + t1 in i2););
        return n4 < 0 ? null : (3 === n4 ? "ms" : 0 <= n4 ? Xe[n4] : "") + t1;
    }, Ue = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Ve = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Ke = {
        clearProps: function clearProps(t1, e2, r5, i2, n4) {
            if ("isFromStart" !== n4.data) {
                var a5 = t1._pt = new ie(t1._pt, e2, r5, 0, 0, Bd);
                return a5.u = i2, a5.pr = -10, a5.tween = n4, t1._props.push(r5), 1;
            }
        }
    }, Ge = [
        1,
        0,
        0,
        1,
        0,
        0
    ], je = {
    }, $e = function _parseTransform(t1, e2) {
        var r5 = t1._gsap || new It(t1);
        if ("x" in r5 && !e2 && !r5.uncache) return r5;
        var i2, n4, a6, s3, o2, u3, h2, l2, f2, d2, p1, _1, c1, m1, g1, v1, y1, b2, T2, w2, x1, k1, O1, P1, M1, C1, A1, S1, D1, z1, F1, B1, R1 = t1.style, I1 = r5.scaleX < 0, L1 = "deg", E1 = ld(t1, Ye) || "0";
        return i2 = n4 = a6 = u3 = h2 = l2 = f2 = d2 = p1 = 0, s3 = o2 = 1, r5.svg = !(!t1.getCTM || !sd(t1)), m1 = Hd(t1, r5.svg), r5.svg && (P1 = !r5.uncache && t1.getAttribute("data-svg-origin"), Id(t1, P1 || E1, !!P1 || r5.originIsAbsolute, !1 !== r5.smooth, m1)), _1 = r5.xOrigin || 0, c1 = r5.yOrigin || 0, m1 !== Ge && (b2 = m1[0], T2 = m1[1], w2 = m1[2], x1 = m1[3], i2 = k1 = m1[4], n4 = O1 = m1[5], 6 === m1.length ? (s3 = Math.sqrt(b2 * b2 + T2 * T2), o2 = Math.sqrt(x1 * x1 + w2 * w2), u3 = b2 || T2 ? Re(T2, b2) * Fe : 0, (f2 = w2 || x1 ? Re(w2, x1) * Fe + u3 : 0) && (o2 *= Math.cos(f2 * Be)), r5.svg && (i2 -= _1 - (_1 * b2 + c1 * w2), n4 -= c1 - (_1 * T2 + c1 * x1))) : (B1 = m1[6], z1 = m1[7], A1 = m1[8], S1 = m1[9], D1 = m1[10], F1 = m1[11], i2 = m1[12], n4 = m1[13], a6 = m1[14], h2 = (g1 = Re(B1, D1)) * Fe, g1 && (P1 = k1 * (v1 = Math.cos(-g1)) + A1 * (y1 = Math.sin(-g1)), M1 = O1 * v1 + S1 * y1, C1 = B1 * v1 + D1 * y1, A1 = k1 * -y1 + A1 * v1, S1 = O1 * -y1 + S1 * v1, D1 = B1 * -y1 + D1 * v1, F1 = z1 * -y1 + F1 * v1, k1 = P1, O1 = M1, B1 = C1), l2 = (g1 = Re(-w2, D1)) * Fe, g1 && (v1 = Math.cos(-g1), F1 = x1 * (y1 = Math.sin(-g1)) + F1 * v1, b2 = P1 = b2 * v1 - A1 * y1, T2 = M1 = T2 * v1 - S1 * y1, w2 = C1 = w2 * v1 - D1 * y1), u3 = (g1 = Re(T2, b2)) * Fe, g1 && (P1 = b2 * (v1 = Math.cos(g1)) + T2 * (y1 = Math.sin(g1)), M1 = k1 * v1 + O1 * y1, T2 = T2 * v1 - b2 * y1, O1 = O1 * v1 - k1 * y1, b2 = P1, k1 = M1), h2 && 359.9 < Math.abs(h2) + Math.abs(u3) && (h2 = u3 = 0, l2 = 180 - l2), s3 = ba(Math.sqrt(b2 * b2 + T2 * T2 + w2 * w2)), o2 = ba(Math.sqrt(O1 * O1 + B1 * B1)), g1 = Re(k1, O1), f2 = 0.0002 < Math.abs(g1) ? g1 * Fe : 0, p1 = F1 ? 1 / (F1 < 0 ? -F1 : F1) : 0), r5.svg && (P1 = t1.getAttribute("transform"), r5.forceCSS = t1.setAttribute("transform", "") || !Fd(ld(t1, qe)), P1 && t1.setAttribute("transform", P1))), 90 < Math.abs(f2) && Math.abs(f2) < 270 && (I1 ? (s3 *= -1, f2 += u3 <= 0 ? 180 : -180, u3 += u3 <= 0 ? 180 : -180) : (o2 *= -1, f2 += f2 <= 0 ? 180 : -180)), r5.x = i2 - ((r5.xPercent = r5.xPercent || (i2 && Math.round(t1.offsetWidth / 2) === Math.round(-i2) ? -50 : 0)) ? t1.offsetWidth * r5.xPercent / 100 : 0) + "px", r5.y = n4 - ((r5.yPercent = r5.yPercent || (n4 && Math.round(t1.offsetHeight / 2) === Math.round(-n4) ? -50 : 0)) ? t1.offsetHeight * r5.yPercent / 100 : 0) + "px", r5.z = a6 + "px", r5.scaleX = ba(s3), r5.scaleY = ba(o2), r5.rotation = ba(u3) + L1, r5.rotationX = ba(h2) + L1, r5.rotationY = ba(l2) + L1, r5.skewX = f2 + L1, r5.skewY = d2 + L1, r5.transformPerspective = p1 + "px", (r5.zOrigin = parseFloat(E1.split(" ")[2]) || 0) && (R1[Ye] = Qe(E1)), r5.xOffset = r5.yOffset = 0, r5.force3D = Y.force3D, r5.renderTransform = r5.svg ? rr : pe ? er : We, r5.uncache = 0, r5;
    }, Qe = function _firstTwoOnly(t1) {
        return (t1 = t1.split(" "))[0] + " " + t1[1];
    }, We = function _renderNon3DTransforms(t1, e2) {
        e2.z = "0px", e2.rotationY = e2.rotationX = "0deg", e2.force3D = 0, er(t1, e2);
    }, Ze = "0deg", Je = "0px", tr = ") ", er = function _renderCSSTransforms(t1, e2) {
        var r5 = e2 || this, i2 = r5.xPercent, n4 = r5.yPercent, a6 = r5.x, s3 = r5.y, o2 = r5.z, u3 = r5.rotation, h2 = r5.rotationY, l2 = r5.rotationX, f2 = r5.skewX, d2 = r5.skewY, p1 = r5.scaleX, _1 = r5.scaleY, c1 = r5.transformPerspective, m1 = r5.force3D, g1 = r5.target, v1 = r5.zOrigin, y1 = "", b2 = "auto" === m1 && t1 && 1 !== t1 || !0 === m1;
        if (v1 && (l2 !== Ze || h2 !== Ze)) {
            var T2, w2 = parseFloat(h2) * Be, x1 = Math.sin(w2), k1 = Math.cos(w2);
            w2 = parseFloat(l2) * Be, T2 = Math.cos(w2), a6 = Ld(g1, a6, x1 * T2 * -v1), s3 = Ld(g1, s3, -Math.sin(w2) * -v1), o2 = Ld(g1, o2, k1 * T2 * -v1 + v1);
        }
        c1 !== Je && (y1 += "perspective(" + c1 + tr), (i2 || n4) && (y1 += "translate(" + i2 + "%, " + n4 + "%) "), !b2 && a6 === Je && s3 === Je && o2 === Je || (y1 += o2 !== Je || b2 ? "translate3d(" + a6 + ", " + s3 + ", " + o2 + ") " : "translate(" + a6 + ", " + s3 + tr), u3 !== Ze && (y1 += "rotate(" + u3 + tr), h2 !== Ze && (y1 += "rotateY(" + h2 + tr), l2 !== Ze && (y1 += "rotateX(" + l2 + tr), f2 === Ze && d2 === Ze || (y1 += "skew(" + f2 + ", " + d2 + tr), 1 === p1 && 1 === _1 || (y1 += "scale(" + p1 + ", " + _1 + tr), g1.style[qe] = y1 || "translate(0, 0)";
    }, rr = function _renderSVGTransforms(t1, e2) {
        var r5, i2, n4, a6, s3, o2 = e2 || this, u3 = o2.xPercent, h2 = o2.yPercent, l2 = o2.x, f2 = o2.y, d2 = o2.rotation, p1 = o2.skewX, _1 = o2.skewY, c1 = o2.scaleX, m1 = o2.scaleY, g1 = o2.target, v1 = o2.xOrigin, y1 = o2.yOrigin, b2 = o2.xOffset, T3 = o2.yOffset, w3 = o2.forceCSS, x2 = parseFloat(l2), k2 = parseFloat(f2);
        d2 = parseFloat(d2), p1 = parseFloat(p1), (_1 = parseFloat(_1)) && (p1 += _1 = parseFloat(_1), d2 += _1), d2 || p1 ? (d2 *= Be, p1 *= Be, r5 = Math.cos(d2) * c1, i2 = Math.sin(d2) * c1, n4 = Math.sin(d2 - p1) * -m1, a6 = Math.cos(d2 - p1) * m1, p1 && (_1 *= Be, s3 = Math.tan(p1 - _1), n4 *= s3 = Math.sqrt(1 + s3 * s3), a6 *= s3, _1 && (s3 = Math.tan(_1), r5 *= s3 = Math.sqrt(1 + s3 * s3), i2 *= s3)), r5 = ba(r5), i2 = ba(i2), n4 = ba(n4), a6 = ba(a6)) : (r5 = c1, a6 = m1, i2 = n4 = 0), (x2 && !~(l2 + "").indexOf("px") || k2 && !~(f2 + "").indexOf("px")) && (x2 = wd(g1, "x", l2, "px"), k2 = wd(g1, "y", f2, "px")), (v1 || y1 || b2 || T3) && (x2 = ba(x2 + v1 - (v1 * r5 + y1 * n4) + b2), k2 = ba(k2 + y1 - (v1 * i2 + y1 * a6) + T3)), (u3 || h2) && (s3 = g1.getBBox(), x2 = ba(x2 + u3 / 100 * s3.width), k2 = ba(k2 + h2 / 100 * s3.height)), s3 = "matrix(" + r5 + "," + i2 + "," + n4 + "," + a6 + "," + x2 + "," + k2 + ")", g1.setAttribute("transform", s3), w3 && (g1.style[qe] = s3);
    };
    aa("padding,margin,Width,Radius", function(e2, r5) {
        var t1 = "Right", i2 = "Bottom", n4 = "Left", o2 = (r5 < 3 ? [
            "Top",
            t1,
            i2,
            n4
        ] : [
            "Top" + n4,
            "Top" + t1,
            i2 + t1,
            i2 + n4
        ]).map(function(t2) {
            return r5 < 2 ? e2 + t2 : "border" + t2 + e2;
        });
        Ke[1 < r5 ? "border" + e2 : e2] = function(e4, t2, r6, i3, n5) {
            var a6, s3;
            if (arguments.length < 4) return a6 = o2.map(function(t3) {
                return xd(e4, t3, r6);
            }), 5 === (s3 = a6.join(" ")).split(a6[0]).length ? a6[0] : s3;
            a6 = (i3 + "").split(" "), s3 = {
            }, o2.forEach(function(t3, e5) {
                return s3[t3] = a6[e5] = a6[e5] || a6[(e5 - 1) / 2 | 0];
            }), e4.init(t2, s3, n5);
        };
    });
    var ir, nr, ar, sr = {
        name: "css",
        register: od,
        targetTest: function targetTest(t1) {
            return t1.style && t1.nodeType;
        },
        init: function init(t1, e2, r5, i2, n4) {
            var a6, s3, o2, u3, h2, l2, f2, d2, p1, _1, c1, m1, g1, v1, y1, b2 = this._props, T3 = t1.style, w3 = r5.vars.startAt;
            for(f2 in he || od(), e2)if ("autoRound" !== f2 && (s3 = e2[f2], !ft[f2] || !Pb(f2, e2, r5, i2, t1, n4))) {
                if (h2 = typeof s3, l2 = Ke[f2], "function" === h2 && (h2 = typeof (s3 = s3.call(r5, i2, t1, n4))), "string" === h2 && ~s3.indexOf("random(") && (s3 = cb(s3)), l2) l2(this, t1, f2, s3, r5) && (y1 = 1);
                else if ("--" === f2.substr(0, 2)) a6 = (getComputedStyle(t1).getPropertyValue(f2) + "").trim(), s3 += "", d2 = Na(a6), (p1 = Na(s3)) ? d2 !== p1 && (a6 = wd(t1, f2, a6, p1) + p1) : d2 && (s3 += d2), this.add(T3, "setProperty", a6, s3, i2, n4, 0, 0, f2);
                else if ("undefined" !== h2) {
                    if (a6 = w3 && f2 in w3 ? "function" == typeof w3[f2] ? w3[f2].call(r5, i2, t1, n4) : w3[f2] : xd(t1, f2), u3 = parseFloat(a6), (_1 = "string" === h2 && "=" === s3.charAt(1) ? +(s3.charAt(0) + "1") : 0) && (s3 = s3.substr(2)), o2 = parseFloat(s3), f2 in Ne && ("autoAlpha" === f2 && (1 === u3 && "hidden" === xd(t1, "visibility") && o2 && (u3 = 0), ud(this, T3, "visibility", u3 ? "inherit" : "hidden", o2 ? "inherit" : "hidden", !o2)), "scale" !== f2 && "transform" !== f2 && ~(f2 = Ne[f2]).indexOf(",") && (f2 = f2.split(",")[0])), c1 = f2 in ze) {
                        if (m1 || ((g1 = t1._gsap).renderTransform && !e2.parseTransform || $e(t1, e2.parseTransform), v1 = !1 !== e2.smoothOrigin && g1.smooth, (m1 = this._pt = new ie(this._pt, T3, qe, 0, 1, g1.renderTransform, g1, 0, -1)).dep = 1), "scale" === f2) this._pt = new ie(this._pt, g1, "scaleY", g1.scaleY, _1 ? _1 * o2 : o2 - g1.scaleY), b2.push("scaleY", f2), f2 += "X";
                        else {
                            if ("transformOrigin" === f2) {
                                s3 = Ad(s3), g1.svg ? Id(t1, s3, 0, v1, 0, this) : ((p1 = parseFloat(s3.split(" ")[2]) || 0) !== g1.zOrigin && ud(this, g1, "zOrigin", g1.zOrigin, p1), ud(this, T3, f2, Qe(a6), Qe(s3)));
                                continue;
                            }
                            if ("svgOrigin" === f2) {
                                Id(t1, s3, 1, v1, 0, this);
                                continue;
                            }
                            if (f2 in je) {
                                Sd(this, g1, f2, u3, s3, _1);
                                continue;
                            }
                            if ("smoothOrigin" === f2) {
                                ud(this, g1, "smooth", g1.smooth, s3);
                                continue;
                            }
                            if ("force3D" === f2) {
                                g1[f2] = s3;
                                continue;
                            }
                            if ("transform" === f2) {
                                Td(this, s3, t1);
                                continue;
                            }
                        }
                    } else f2 in T3 || (f2 = He(f2) || f2);
                    if (c1 || (o2 || 0 === o2) && (u3 || 0 === u3) && !Ee.test(s3) && f2 in T3) o2 = o2 || 0, (d2 = (a6 + "").substr((u3 + "").length)) !== (p1 = Na(s3) || (f2 in Y.units ? Y.units[f2] : d2)) && (u3 = wd(t1, f2, a6, p1)), this._pt = new ie(this._pt, c1 ? g1 : T3, f2, u3, _1 ? _1 * o2 : o2 - u3, c1 || "px" !== p1 && "zIndex" !== f2 || !1 === e2.autoRound ? Xc : $c), this._pt.u = p1 || 0, d2 !== p1 && (this._pt.b = a6, this._pt.r = Zc);
                    else if (f2 in T3) yd.call(this, t1, f2, a6, s3);
                    else {
                        if (!(f2 in t1)) {
                            M(f2, s3);
                            continue;
                        }
                        this.add(t1, f2, t1[f2], s3, i2, n4);
                    }
                    b2.push(f2);
                }
            }
            y1 && re(this);
        },
        get: xd,
        aliases: Ne,
        getSetter: function getSetter(t1, e2, i2) {
            var n4 = Ne[e2];
            return n4 && n4.indexOf(",") < 0 && (e2 = n4), e2 in ze && e2 !== Ye && (t1._gsap.x || xd(t1, "x")) ? i2 && de === i2 ? "scale" === e2 ? ed : dd : (de = i2 || {
            }, "scale" === e2 ? fd : gd) : t1.style && !r1(t1.style[e2]) ? bd : ~e2.indexOf("-") ? cd : $t(t1, e2);
        },
        core: {
            _removeProperty: td,
            _getMatrix: Hd
        }
    };
    ae.utils.checkPrefix = He, ar = aa((ir = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (nr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t1) {
        ze[t1] = 1;
    }), aa(nr, function(t1) {
        Y.units[t1] = "deg", je[t1] = 1;
    }), Ne[ar[13]] = ir + "," + nr, aa("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t1) {
        var e2 = t1.split(":");
        Ne[e2[1]] = ar[e2[0]];
    }), aa("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t1) {
        Y.units[t1] = "px";
    }), ae.registerPlugin(sr);
    var or = ae.registerPlugin(sr) || ae, ur = or.core.Tween;
    e.Back = Pe, e.Bounce = Ce, e.CSSPlugin = sr, e.Circ = De, e.Cubic = Te, e.Elastic = Oe, e.Expo = Se, e.Linear = ye, e.Power0 = _e, e.Power1 = ce, e.Power2 = me, e.Power3 = ge, e.Power4 = ve, e.Quad = be, e.Quart = we, e.Quint = xe, e.Sine = Ae, e.SteppedEase = Me, e.Strong = ke, e.TimelineLite = Et, e.TimelineMax = Et, e.TweenLite = Vt, e.TweenMax = ur, e.default = or, e.gsap = or;
    if (typeof window === "undefined" || window !== e) Object.defineProperty(e, "__esModule", {
        value: !0
    });
    else delete e.default;
});
!function(e2, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], t) : t((e2 = e2 || self).window = e2.window || {
    });
}(this, function(e2) {
    "use strict";
    function J(e4) {
        return e4;
    }
    function K() {
        return "undefined" != typeof window;
    }
    function L() {
        return Oe || K() && (Oe = window.gsap) && Oe.registerPlugin && Oe;
    }
    function M(e4) {
        return !!~o4.indexOf(e4);
    }
    function N(e4, t) {
        return ~Ue.indexOf(e4) && Ue[Ue.indexOf(e4) + 1][t];
    }
    function O(t, e4) {
        var r1 = e4.s, n4 = e4.sc, o2 = h3.indexOf(t), i2 = n4 === nt.sc ? 1 : 2;
        return ~o2 || (o2 = h3.push(t) - 1), h3[o2 + i2] || (h3[o2 + i2] = N(t, r1) || (M(t) ? n4 : function(e5) {
            return arguments.length ? t[r1] = e5 : t[r1];
        }));
    }
    function P(e4) {
        return N(e4, "getBoundingClientRect") || (M(e4) ? function() {
            return ut.width = ke.innerWidth, ut.height = ke.innerHeight, ut;
        } : function() {
            return ot(e4);
        });
    }
    function S(e4, t) {
        var r1 = t.s, n4 = t.d2, o2 = t.d, i2 = t.a;
        return (r1 = "scroll" + n4, i2 = N(e4, r1)) ? i2() - P(e4)()[o2] : M(e4) ? Math.max(Ce[r1], Pe[r1]) - (ke["inner" + n4] || Ce["client" + n4] || Pe["client" + n4]) : e4[r1] - e4["offset" + n4];
    }
    function T3(e4, t) {
        for(var r1 = 0; r1 < d3.length; r1 += 3)t && !~t.indexOf(d3[r1 + 1]) || e4(d3[r1], d3[r1 + 1], d3[r1 + 2]);
    }
    function U(e4) {
        return "string" == typeof e4;
    }
    function V(e4) {
        return "function" == typeof e4;
    }
    function W(e4) {
        return "number" == typeof e4;
    }
    function X(e4) {
        return "object" == typeof e4;
    }
    function Y(e4) {
        return V(e4) && e4();
    }
    function Z(r1, n4) {
        return function() {
            var e4 = Y(r1), t = Y(n4);
            return function() {
                Y(e4), Y(t);
            };
        };
    }
    function sa(e4) {
        return ke.getComputedStyle(e4);
    }
    function ua(e4, t) {
        for(var r1 in t)r1 in e4 || (e4[r1] = t[r1]);
        return e4;
    }
    function wa(e4, t) {
        var r1 = t.d2;
        return e4["offset" + r1] || e4["client" + r1] || 0;
    }
    function ya(t, r1, e4, n4) {
        return e4.split(",").forEach(function(e5) {
            return t(r1, e5, n4);
        });
    }
    function za(e4, t, r1) {
        return e4.addEventListener(t, r1, {
            passive: !0
        });
    }
    function Aa(e4, t, r1) {
        return e4.removeEventListener(t, r1);
    }
    function Ea(e4, t) {
        if (U(e4)) {
            var r1 = e4.indexOf("="), n4 = ~r1 ? (e4.charAt(r1 - 1) + 1) * parseFloat(e4.substr(r1 + 1)) : 0;
            n4 && (e4.indexOf("%") > r1 && (n4 *= t / 100), e4 = e4.substr(0, r1 - 1)), e4 = n4 + (e4 in w3 ? w3[e4] * t : ~e4.indexOf("%") ? parseFloat(e4) * t / 100 : parseFloat(e4) || 0);
        }
        return e4;
    }
    function Fa(e4, t, r5, n5, o2, i2, a6) {
        var s3 = o2.startColor, l2 = o2.endColor, c = o2.fontSize, f2 = o2.indent, u3 = o2.fontWeight, p = _e.createElement("pgiamarker"), d2 = M(r5) || "fixed" === N(r5, "pinType"), g = -1 !== e4.indexOf("scroller"), h2 = d2 ? Pe : r5, v = -1 !== e4.indexOf("start"), m = v ? s3 : l2, b2 = "border-color:" + m + ";font-size:" + c + ";color:" + m + ";font-weight:" + u3 + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return b2 += "position:" + (g && d2 ? "fixed;" : "absolute;"), !g && d2 || (b2 += (n5 === nt ? x3 : y) + ":" + (i2 + parseFloat(f2)) + "px;"), a6 && (b2 += "box-sizing:border-box;text-align:left;width:" + a6.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e4), p.style.cssText = b2, p.innerText = t || 0 === t ? e4 + "-" + t : e4, h2.children[0] ? h2.insertBefore(p, h2.children[0]) : h2.appendChild(p), p._offset = p["offset" + n5.op.d2], k2(p, 0, n5, v), p;
    }
    function Ja() {
        return l2 = l2 || s4(D);
    }
    function Ka() {
        l2 || (l2 = s4(D), Ke || E("scrollStart"), Ke = Je());
    }
    function La() {
        return !Le && !r5 && a8.restart(!0);
    }
    function Ra(e4) {
        var t, r5 = Oe.ticker.frame, n5 = [], o2 = 0;
        if (g !== r5 || Ve) {
            for(F(); o2 < z.length; o2 += 4)(t = ke.matchMedia(z[o2]).matches) !== z[o2 + 3] && ((z[o2 + 3] = t) ? n5.push(o2) : F(1, z[o2]) || V(z[o2 + 2]) && z[o2 + 2]());
            for(R(), o2 = 0; o2 < n5.length; o2++)t = n5[o2], Ie = z[t], z[t + 2] = z[t + 1](e4);
            Ie = 0, i4 && B(0, 1), g = r5, E("matchMedia");
        }
    }
    function Sa() {
        return Aa(G, "scrollEnd", Sa) || B(!0);
    }
    function cb(e4, t, r5, n5) {
        if (e4.parentNode !== t) {
            for(var o2, i2 = H.length, a6 = t.style, s3 = e4.style; i2--;)a6[o2 = H[i2]] = r5[o2];
            a6.position = "absolute" === r5.position ? "absolute" : "relative", "inline" === r5.display && (a6.display = "inline-block"), s3[y] = s3[x3] = "auto", a6.overflow = "visible", a6.boxSizing = "border-box", a6[De] = wa(e4, rt) + tt, a6[He] = wa(e4, nt) + tt, a6[Ge] = s3[Qe] = s3.top = s3[m] = "0", ft(n5), s3[De] = s3.maxWidth = r5[De], s3[He] = s3.maxHeight = r5[He], s3[Ge] = r5[Ge], e4.parentNode.insertBefore(t, e4), t.appendChild(e4);
        }
    }
    function fb(e4) {
        for(var t = q.length, r5 = e4.style, n5 = [], o3 = 0; o3 < t; o3++)n5.push(q[o3], r5[q[o3]]);
        return n5.t = e4, n5;
    }
    function ib(e4, t, r5, n5, o3, i3, a7, s4, l2, c, f2, u3) {
        if (V(e4) && (e4 = e4(s4)), U(e4) && "max" === e4.substr(0, 3) && (e4 = u3 + ("=" === e4.charAt(4) ? Ea("0" + e4.substr(3), r5) : 0)), W(e4)) a7 && k2(a7, r5, n5, !0);
        else {
            V(t) && (t = t(s4));
            var p, d2, g, h2 = ze(t)[0] || Pe, v = ot(h2) || {
            }, m = e4.split(" ");
            v && (v.left || v.top) || "none" !== sa(h2).display || (g = h2.style.display, h2.style.display = "block", v = ot(h2), g ? h2.style.display = g : h2.style.removeProperty("display")), p = Ea(m[0], v[n5.d]), d2 = Ea(m[1] || "0", r5), e4 = v[n5.p] - l2[n5.p] - c + p + o3 - d2, a7 && k2(a7, d2, n5, r5 - d2 < 20 || a7._isStart && 20 < d2), r5 -= r5 - d2;
        }
        if (i3) {
            var b2 = e4 + r5, x2 = i3._isStart;
            u3 = "scroll" + n5.d2, k2(i3, b2, n5, x2 && 20 < b2 || !x2 && (f2 ? Math.max(Pe[u3], Ce[u3]) : i3.parentNode[u3]) <= b2 + 1), f2 && (l2 = ot(a7), f2 && (i3.style[n5.op.p] = l2[n5.op.p] - n5.op.m - i3._offset + tt));
        }
        return Math.round(e4);
    }
    function kb(e4, t, r5, n5) {
        if (e4.parentNode !== t) {
            var o3, i3, a7 = e4.style;
            if (t === Pe) {
                for(o3 in e4._stOrig = a7.cssText, i3 = sa(e4))+o3 || $.test(o3) || !i3[o3] || "string" != typeof a7[o3] || "0" === o3 || (a7[o3] = i3[o3]);
                a7.top = r5, a7.left = n5;
            } else a7.cssText = e4._stOrig;
            Oe.core.getCache(e4).uncache = 1, t.appendChild(e4);
        }
    }
    function lb(l2, e4) {
        var c, f2, u3 = O(l2, e4), p = "_scroll" + e4.p2;
        return l2[p] = u3, function getTween(e5, t, r5, n5, o4) {
            var i4 = getTween.tween, a8 = t.onComplete, s4 = {
            };
            return i4 && i4.kill(), c = Math.round(r5), t[p] = e5, (t.modifiers = s4)[p] = function(e6) {
                return (e6 = Math.round(u3())) !== c && e6 !== f2 && 2 < Math.abs(e6 - c) ? (i4.kill(), getTween.tween = 0) : e6 = r5 + n5 * i4.ratio + o4 * i4.ratio * i4.ratio, f2 = c, c = Math.round(e6);
            }, t.onComplete = function() {
                getTween.tween = 0, a8 && a8.call(i4);
            }, i4 = getTween.tween = Oe.to(l2, t);
        };
    }
    var Oe, i4, ke, _e, Ce, Pe, o4, a8, s4, l2, ze, Ee, Ae, c, Le, Ne, f2, Re, u3, p, d3, Fe, Be, r5, We, Ie, g, Ve = 1, Ue = [], h3 = [], Je = Date.now, v = Je(), Ke = 0, Ye = 1, Xe = Math.abs, t = "scrollLeft", n5 = "scrollTop", m = "left", x3 = "right", y = "bottom", De = "width", He = "height", qe = "Right", Ze = "Left", je = "Top", $e = "Bottom", Ge = "padding", Qe = "margin", et = "Width", b3 = "Height", tt = "px", rt = {
        s: t,
        p: m,
        p2: Ze,
        os: x3,
        os2: qe,
        d: De,
        d2: et,
        a: "x",
        sc: function sc(e4) {
            return arguments.length ? ke.scrollTo(e4, nt.sc()) : ke.pageXOffset || _e[t] || Ce[t] || Pe[t] || 0;
        }
    }, nt = {
        s: n5,
        p: "top",
        p2: je,
        os: y,
        os2: $e,
        d: He,
        d2: b3,
        a: "y",
        op: rt,
        sc: function sc(e4) {
            return arguments.length ? ke.scrollTo(rt.sc(), e4) : ke.pageYOffset || _e[n5] || Ce[n5] || Pe[n5] || 0;
        }
    }, ot = function _getBounds(e4, t1) {
        var r6 = t1 && "matrix(1, 0, 0, 1, 0, 0)" !== sa(e4)[f2] && Oe.to(e4, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1), n6 = e4.getBoundingClientRect();
        return r6 && r6.progress(0).kill(), n6;
    }, it = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, at = {
        toggleActions: "play",
        anticipatePin: 0
    }, w3 = {
        top: 0,
        left: 0,
        center: 0.5,
        bottom: 1,
        right: 1
    }, k2 = function _positionMarker(e4, t1, r6, n6) {
        var o5 = {
            display: "block"
        }, i5 = r6[n6 ? "os2" : "p2"], a9 = r6[n6 ? "p2" : "os2"];
        e4._isFlipped = n6, o5[r6.a + "Percent"] = n6 ? -100 : 0, o5[r6.a] = n6 ? "1px" : 0, o5["border" + i5 + et] = 1, o5["border" + a9 + et] = 0, o5[r6.p] = t1 + "px", Oe.set(e4, o5);
    }, st = [], lt = {
    }, _ = {
    }, C = [], z = [], E = function _dispatch(e4) {
        return _[e4] && _[e4].map(function(e5) {
            return e5();
        }) || C;
    }, A = [], R = function _revertRecorded(e4) {
        for(var t1 = 0; t1 < A.length; t1 += 4)e4 && A[t1 + 3] !== e4 || (A[t1].style.cssText = A[t1 + 1], A[t1 + 2].uncache = 1);
    }, F = function _revertAll(e4, t1) {
        var r6;
        for(Re = 0; Re < st.length; Re++)r6 = st[Re], t1 && r6.media !== t1 || (e4 ? r6.kill(1) : (r6.scroll.rec || (r6.scroll.rec = r6.scroll()), r6.revert()));
        R(t1), t1 || E("revert");
    }, B = function _refreshAll(e4, t1) {
        if (!Ke || e4) {
            var r6 = E("refreshInit");
            for(Fe && G.sort(), t1 || F(), Re = 0; Re < st.length; Re++)st[Re].refresh();
            for(r6.forEach(function(e5) {
                return e5 && e5.render && e5.render(-1);
            }), Re = st.length; Re--;)st[Re].scroll.rec = 0;
            a8.pause(), E("refresh");
        } else za(G, "scrollEnd", Sa);
    }, I = 0, ct = 1, D = function _updateAll() {
        var e4 = st.length, t1 = Je(), r7 = 50 <= t1 - v, n6 = e4 && st[0].scroll();
        if (ct = n6 < I ? -1 : 1, I = n6, r7 && (Ke && !Ne && 200 < t1 - Ke && (Ke = 0, E("scrollEnd")), Ae = v, v = t1), ct < 0) {
            for(Re = e4; Re--;)st[Re] && st[Re].update(0, r7);
            ct = 1;
        } else for(Re = 0; Re < e4; Re++)st[Re] && st[Re].update(0, r7);
        l2 = 0;
    }, H = [
        m,
        "top",
        y,
        x3,
        Qe + $e,
        Qe + qe,
        Qe + je,
        Qe + Ze,
        "display",
        "flexShrink",
        "float"
    ], q = H.concat([
        De,
        He,
        "boxSizing",
        "max" + et,
        "max" + b3,
        "position",
        Qe,
        Ge,
        Ge + je,
        Ge + qe,
        Ge + $e,
        Ge + Ze
    ]), j = /([A-Z])/g, ft = function _setState(e4) {
        if (e4) for(var t1, r7, n6 = e4.t.style, o5 = e4.length, i5 = 0; i5 < o5; i5 += 2)r7 = e4[i5 + 1], t1 = e4[i5], r7 ? n6[t1] = r7 : n6[t1] && n6.removeProperty(t1.replace(j, "-$1").toLowerCase());
    }, ut = {
        left: 0,
        top: 0
    }, $ = /(?:webkit|moz|length|cssText)/i;
    rt.op = nt;
    var G = (ScrollTrigger.prototype.init = function init(y1, w4) {
        if (this.progress = this.start = 0, this.vars && this.kill(1), Ye) {
            var d4, n6, l3, T4, k3, _1, C1, z1, E1, A1, L1, R1, e4, F1, B1, I1, K1, Y1, t1, D1, g1, H1, q1, h4, Z1, v1, m1, r7, b4, x4, j1, o5, c1, $1, G1, Q, ee, te = (y1 = ua(U(y1) || W(y1) || y1.nodeType ? {
                trigger: y1
            } : y1, at)).horizontal ? rt : nt, re = y1.onUpdate, ne = y1.toggleClass, i5 = y1.id, oe = y1.onToggle, ie = y1.onRefresh, a9 = y1.scrub, ae = y1.trigger, se = y1.pin, le = y1.pinSpacing, ce = y1.invalidateOnRefresh, fe = y1.anticipatePin, s5 = y1.onScrubComplete, f3 = y1.onSnapComplete, ue = y1.once, pe = y1.snap, de = y1.pinReparent, ge = !a9 && 0 !== a9, he = ze(y1.scroller || ke)[0], u4 = Oe.core.getCache(he), ve = M(he), me = "pinType" in y1 ? "fixed" === y1.pinType : ve || "fixed" === N(he, "pinType"), be = [
                y1.onEnter,
                y1.onLeave,
                y1.onEnterBack,
                y1.onLeaveBack
            ], xe = ge && y1.toggleActions.split(" "), p1 = "markers" in y1 ? y1.markers : at.markers, ye = ve ? 0 : parseFloat(sa(he)["border" + te.p2 + et]) || 0, we = this, Te = y1.onRefreshInit && function() {
                return y1.onRefreshInit(we);
            }, Se = function _getSizeFunc(e5, t2, r8) {
                var n7 = r8.d, o6 = r8.d2, i6 = r8.a;
                return (i6 = N(e5, "getBoundingClientRect")) ? function() {
                    return i6()[n7];
                } : function() {
                    return (t2 ? ke["inner" + o6] : e5["client" + o6]) || 0;
                };
            }(he, ve, te), Me = function _getOffsetsFunc(e5, t2) {
                return !t2 || ~Ue.indexOf(e5) ? P(e5) : function() {
                    return ut;
                };
            }(he, ve);
            we.media = Ie, fe *= 45, st.push(we), we.scroller = he, we.scroll = O(he, te), k3 = we.scroll(), we.vars = y1, w4 = w4 || y1.animation, "refreshPriority" in y1 && (Fe = 1), u4.tweenScroll = u4.tweenScroll || {
                top: lb(he, nt),
                left: lb(he, rt)
            }, we.tweenTo = d4 = u4.tweenScroll[te.p], w4 && (w4.vars.lazy = !1, w4._initted || !1 !== w4.vars.immediateRender && !1 !== y1.immediateRender && w4.render(0, !0, !0), we.animation = w4.pause(), w4.scrollTrigger = we, (o5 = W(a9) && a9) && (j1 = Oe.to(w4, {
                ease: "power3",
                duration: o5,
                onComplete: function onComplete() {
                    return s5 && s5(we);
                }
            })), b4 = 0, i5 = i5 || w4.vars.id), pe && (X(pe) || (pe = {
                snapTo: pe
            }), Oe.set(ve ? [
                Pe,
                Ce
            ] : he, {
                scrollBehavior: "auto"
            }), l3 = V(pe.snapTo) ? pe.snapTo : "labels" === pe.snapTo ? (function _getLabels(i6) {
                return function(e5) {
                    var t2, r8 = [], n7 = i6.labels, o6 = i6.duration();
                    for(t2 in n7)r8.push(n7[t2] / o6);
                    return Oe.utils.snap(r8, e5);
                };
            })(w4) : Oe.utils.snap(pe.snapTo), c1 = pe.duration || {
                min: 0.1,
                max: 2
            }, c1 = X(c1) ? Ee(c1.min, c1.max) : Ee(c1, c1), $1 = Oe.delayedCall(pe.delay || o5 / 2 || 0.1, function() {
                if (Math.abs(we.getVelocity()) < 10 && !Ne) {
                    var e5 = w4 && !ge ? w4.totalProgress() : we.progress, t2 = (e5 - x4) / (Je() - Ae) * 1000 || 0, r8 = Xe(t2 / 2) * t2 / 0.185, n7 = e5 + r8, o6 = Ee(0, 1, l3(n7, we)), i6 = we.scroll(), a10 = Math.round(C1 + o6 * F1), s6 = d4.tween;
                    if (i6 <= z1 && C1 <= i6 && a10 !== i6) {
                        if (s6 && !s6._initted && s6.data <= Math.abs(a10 - i6)) return;
                        d4(a10, {
                            duration: c1(Xe(0.185 * Math.max(Xe(n7 - e5), Xe(o6 - e5)) / t2 / 0.05 || 0)),
                            ease: pe.ease || "power3",
                            data: Math.abs(a10 - i6),
                            onComplete: function onComplete() {
                                b4 = x4 = w4 && !ge ? w4.totalProgress() : we.progress, f3 && f3(we);
                            }
                        }, i6, r8 * F1, a10 - i6 - r8 * F1);
                    }
                } else we.isActive && $1.restart(!0);
            }).pause()), i5 && (lt[i5] = we), ae = we.trigger = ze(ae || se)[0], se = !0 === se ? ae : ze(se)[0], U(ne) && (ne = {
                targets: ae,
                className: ne
            }), se && (!1 === le || le === Qe || (le = !(!le && "flex" === sa(se.parentNode).display) && Ge), we.pin = se, !1 !== y1.force3D && Oe.set(se, {
                force3D: !0
            }), (n6 = Oe.core.getCache(se)).spacer ? B1 = n6.pinState : (n6.spacer = Y1 = _e.createElement("div"), Y1.setAttribute("class", "pin-spacer" + (i5 ? " pin-spacer-" + i5 : "")), n6.pinState = B1 = fb(se)), we.spacer = Y1 = n6.spacer, r7 = sa(se), h4 = r7[le + te.os2], D1 = Oe.getProperty(se), g1 = Oe.quickSetter(se, te.a, tt), cb(se, Y1, r7), K1 = fb(se)), p1 && (e4 = X(p1) ? ua(p1, it) : it, L1 = Fa("scroller-start", i5, he, te, e4, 0), R1 = Fa("scroller-end", i5, he, te, e4, 0, L1), t1 = L1["offset" + te.op.d2], E1 = Fa("start", i5, he, te, e4, t1), A1 = Fa("end", i5, he, te, e4, t1), me || ((function _makePositionable(e6) {
                e6.style.position = "absolute" === sa(e6).position ? "absolute" : "relative";
            })(ve ? Pe : he), Oe.set([
                L1,
                R1
            ], {
                force3D: !0
            }), v1 = Oe.quickSetter(L1, te.a, tt), m1 = Oe.quickSetter(R1, te.a, tt))), we.revert = function(e6) {
                var t3 = !1 !== e6 || !we.enabled, r9 = Le;
                t3 !== T4 && (t3 && (Q = Math.max(we.scroll(), we.scroll.rec || 0), G1 = we.progress, ee = w4 && w4.progress()), E1 && [
                    E1,
                    A1,
                    L1,
                    R1
                ].forEach(function(e7) {
                    return e7.style.display = t3 ? "none" : "block";
                }), t3 && (Le = 1), we.update(t3), Le = r9, se && (t3 ? (function _swapPinOut(e7, t4, r10) {
                    if (ft(r10), e7.parentNode === t4) {
                        var n8 = t4.parentNode;
                        n8 && (n8.insertBefore(e7, t4), n8.removeChild(t4));
                    }
                })(se, Y1, B1) : de && we.isActive || cb(se, Y1, sa(se), Z1)), T4 = t3);
            }, we.refresh = function(e6) {
                if (!Le && we.enabled) {
                    if (se && e6 && Ke) za(ScrollTrigger, "scrollEnd", Sa);
                    else {
                        Le = 1, j1 && j1.pause(), ce && w4 && w4.progress(0).invalidate(), T4 || we.revert();
                        for(var t3, r9, n9, o7, i7, a11, s7, l4, c2, f4 = Se(), u5 = Me(), p2 = S(he, te), d5 = 0, g2 = 0, h5 = y1.end, v2 = y1.endTrigger || ae, m2 = y1.start || (0 === y1.start ? 0 : se || !ae ? "0 0" : "0 100%"), b5 = ae && Math.max(0, st.indexOf(we)) || 0, x5 = b5; x5--;)!(s7 = st[x5].pin) || s7 !== ae && s7 !== se || st[x5].revert();
                        for(C1 = ib(m2, ae, f4, te, we.scroll(), E1, L1, we, u5, ye, me, p2) || (se ? -0.001 : 0), V(h5) && (h5 = h5(we)), U(h5) && !h5.indexOf("+=") && (~h5.indexOf(" ") ? h5 = (U(m2) ? m2.split(" ")[0] : "") + h5 : (d5 = Ea(h5.substr(2), f4), h5 = U(m2) ? m2 : C1 + d5, v2 = ae)), z1 = Math.max(C1, ib(h5 || (v2 ? "100% 0" : p2), v2, f4, te, we.scroll() + d5, A1, R1, we, u5, ye, me, p2)) || -0.001, F1 = z1 - C1 || (C1 -= 0.01, 0.001), d5 = 0, x5 = b5; x5--;)(s7 = (a11 = st[x5]).pin) && a11.start - a11._pinPush < C1 && (t3 = a11.end - a11.start, s7 === ae && (d5 += t3), s7 === se && (g2 += t3));
                        if (C1 += d5, z1 += d5, we._pinPush = g2, E1 && d5 && ((t3 = {
                        })[te.a] = "+=" + d5, Oe.set([
                            E1,
                            A1
                        ], t3)), se) t3 = sa(se), o7 = te === nt, n9 = we.scroll(), H1 = parseFloat(D1(te.a)) + g2, !p2 && 1 < z1 && ((ve ? Pe : he).style["overflow-" + te.a] = "scroll"), cb(se, Y1, t3), K1 = fb(se), r9 = ot(se, !0), l4 = me && O(he, o7 ? rt : nt)(), le && ((Z1 = [
                            le + te.os2,
                            F1 + g2 + tt
                        ]).t = Y1, (x5 = le === Ge ? wa(se, te) + F1 + g2 : 0) && Z1.push(te.d, x5 + tt), ft(Z1), me && we.scroll(Q)), me && ((i7 = {
                            top: r9.top + (o7 ? n9 - C1 : l4) + tt,
                            left: r9.left + (o7 ? l4 : n9 - C1) + tt,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[De] = i7.maxWidth = Math.ceil(r9.width) + tt, i7[He] = i7.maxHeight = Math.ceil(r9.height) + tt, i7[Qe] = i7[Qe + je] = i7[Qe + qe] = i7[Qe + $e] = i7[Qe + Ze] = "0", i7[Ge] = t3[Ge], i7[Ge + je] = t3[Ge + je], i7[Ge + qe] = t3[Ge + qe], i7[Ge + $e] = t3[Ge + $e], i7[Ge + Ze] = t3[Ge + Ze], I1 = (function _copyState(e7, t4, r10) {
                            for(var n10, o8 = [], i8 = e7.length, a12 = r10 ? 8 : 0; a12 < i8; a12 += 2)n10 = e7[a12], o8.push(n10, n10 in t4 ? t4[n10] : e7[a12 + 1]);
                            return o8.t = e7.t, o8;
                        })(B1, i7, de)), w4 ? (c2 = w4._initted, Be(1), w4.progress(1, !0), q1 = D1(te.a) - H1 + F1 + g2, F1 !== q1 && I1.splice(I1.length - 2, 2), w4.progress(0, !0), c2 || w4.invalidate(), Be(0)) : q1 = F1;
                        else if (ae && we.scroll()) for(r9 = ae.parentNode; r9 && r9 !== Pe;)r9._pinOffset && (C1 -= r9._pinOffset, z1 -= r9._pinOffset), r9 = r9.parentNode;
                        for(x5 = 0; x5 < b5; x5++)!(a11 = st[x5].pin) || a11 !== ae && a11 !== se || st[x5].revert(!1);
                        we.start = C1, we.end = z1, (k3 = _1 = we.scroll()) < Q && we.scroll(Q), we.revert(!1), Le = 0, w4 && ge && w4._initted && w4.progress(ee, !0).render(w4.time(), !0, !0), G1 !== we.progress && (j1 && w4.totalProgress(G1, !0), we.progress = G1, we.update()), se && le && (Y1._pinOffset = Math.round(we.progress * q1)), ie && ie(we);
                    }
                }
            }, we.getVelocity = function() {
                return (we.scroll() - _1) / (Je() - Ae) * 1000 || 0;
            }, we.update = function(e6, t4) {
                var r10, n10, o8, i8, a12, s8 = we.scroll(), l5 = e6 ? 0 : (s8 - C1) / F1, c3 = l5 < 0 ? 0 : 1 < l5 ? 1 : l5 || 0, f5 = we.progress;
                if (t4 && (_1 = k3, k3 = s8, pe && (x4 = b4, b4 = w4 && !ge ? w4.totalProgress() : c3)), fe && !c3 && se && !Le && !Ve && Ke && C1 < s8 + (s8 - _1) / (Je() - Ae) * fe && (c3 = 0.0001), c3 !== f5 && we.enabled) {
                    if (i8 = (a12 = (r10 = we.isActive = !!c3 && c3 < 1) != (!!f5 && f5 < 1)) || !!c3 != !!f5, we.direction = f5 < c3 ? 1 : -1, we.progress = c3, ge || (!j1 || Le || Ve ? w4 && w4.totalProgress(c3, !!Le) : (j1.vars.totalProgress = c3, j1.invalidate().restart())), se) {
                        if (e6 && le && (Y1.style[le + te.os2] = h4), me) {
                            if (i8) {
                                if (o8 = !e6 && f5 < c3 && s8 < z1 + 1 && s8 + 1 >= S(he, te), de) {
                                    if (e6 || !r10 && !o8) kb(se, Y1);
                                    else {
                                        var u6 = ot(se, !0), p3 = s8 - C1;
                                        kb(se, Pe, u6.top + (te === nt ? p3 : 0) + tt, u6.left + (te === nt ? 0 : p3) + tt);
                                    }
                                }
                                ft(r10 || o8 ? I1 : K1), q1 !== F1 && c3 < 1 && r10 || g1(H1 + (1 !== c3 || o8 ? 0 : q1));
                            }
                        } else g1(H1 + q1 * c3);
                    }
                    !pe || d4.tween || Le || Ve || $1.restart(!0), ne && (a12 || ue && c3 && (c3 < 1 || !We)) && ze(ne.targets).forEach(function(e7) {
                        return e7.classList[r10 || ue ? "add" : "remove"](ne.className);
                    }), !re || ge || e6 || re(we), i8 && !Le ? (n10 = c3 && !f5 ? 0 : 1 === c3 ? 1 : 1 === f5 ? 2 : 3, ge && (o8 = !a12 && "none" !== xe[n10 + 1] && xe[n10 + 1] || xe[n10], w4 && ("complete" === o8 || "reset" === o8 || o8 in w4) && ("complete" === o8 ? w4.pause().totalProgress(1) : "reset" === o8 ? w4.restart(!0).pause() : w4[o8]()), re && re(we)), !a12 && We || (oe && a12 && oe(we), be[n10] && be[n10](we), ue && (1 === c3 ? we.kill(!1, 1) : be[n10] = 0), a12 || be[n10 = 1 === c3 ? 1 : 3] && be[n10](we))) : ge && re && !Le && re(we);
                }
                m1 && (v1(s8 + (L1._isFlipped ? 1 : 0)), m1(s8));
            }, we.enable = function() {
                we.enabled || (we.enabled = !0, za(he, "resize", La), za(he, "scroll", Ka), Te && za(ScrollTrigger, "refreshInit", Te), w4 && w4.add ? Oe.delayedCall(0.01, function() {
                    return C1 || z1 || we.refresh();
                }) && (F1 = 0.01) && (C1 = z1 = 0) : we.refresh());
            }, we.disable = function(e6, t4) {
                if (we.enabled && (!1 !== e6 && we.revert(), we.enabled = we.isActive = !1, t4 || j1 && j1.pause(), Q = 0, n6 && (n6.uncache = 1), Te && Aa(ScrollTrigger, "refreshInit", Te), $1 && ($1.pause(), d4.tween && d4.tween.kill() && (d4.tween = 0)), !ve)) {
                    for(var r10 = st.length; r10--;)if (st[r10].scroller === he && st[r10] !== we) return;
                    Aa(he, "resize", La), Aa(he, "scroll", Ka);
                }
            }, we.kill = function(e6, t4) {
                we.disable(e6, t4), i5 && delete lt[i5];
                var r11 = st.indexOf(we);
                st.splice(r11, 1), r11 === Re && 0 < ct && Re--, w4 && (w4.scrollTrigger = null, e6 && w4.render(-1), t4 || w4.kill()), E1 && [
                    E1,
                    A1,
                    L1,
                    R1
                ].forEach(function(e7) {
                    return e7.parentNode.removeChild(e7);
                }), n6 && (n6.uncache = 1);
            }, we.enable();
        } else this.update = this.refresh = this.kill = J;
    }, ScrollTrigger.register = function register(e6) {
        if (!i4 && (Oe = e6 || L(), K() && window.document && (ke = window, _e = document, Ce = _e.documentElement, Pe = _e.body), Oe && (ze = Oe.utils.toArray, Ee = Oe.utils.clamp, Be = Oe.core.suppressOverwrites || J, Oe.core.globals("ScrollTrigger", ScrollTrigger), Pe))) {
            s4 = ke.requestAnimationFrame || function(e7) {
                return setTimeout(e7, 16);
            }, za(ke, "mousewheel", Ka), o4 = [
                ke,
                _e,
                Ce,
                Pe
            ], za(_e, "scroll", Ka);
            var t4, r11 = Pe.style, n10 = r11.borderTop;
            r11.borderTop = "1px solid #000", t4 = ot(Pe), nt.m = Math.round(t4.top + nt.sc()) || 0, rt.m = Math.round(t4.left + rt.sc()) || 0, n10 ? r11.borderTop = n10 : r11.removeProperty("border-top"), c = setInterval(Ja, 200), Oe.delayedCall(0.5, function() {
                return Ve = 0;
            }), za(_e, "touchcancel", J), za(Pe, "touchstart", J), ya(za, _e, "pointerdown,touchstart,mousedown", function() {
                return Ne = 1;
            }), ya(za, _e, "pointerup,touchend,mouseup", function() {
                return Ne = 0;
            }), f2 = Oe.utils.checkPrefix("transform"), q.push(f2), i4 = Je(), a8 = Oe.delayedCall(0.2, B).pause(), d3 = [
                _e,
                "visibilitychange",
                function() {
                    var e7 = ke.innerWidth, t5 = ke.innerHeight;
                    _e.hidden ? (u3 = e7, p = t5) : u3 === e7 && p === t5 || La();
                },
                _e,
                "DOMContentLoaded",
                B,
                ke,
                "load",
                function() {
                    return Ke || B();
                },
                ke,
                "resize",
                La
            ], T3(za);
        }
        return i4;
    }, ScrollTrigger.defaults = function defaults(e6) {
        for(var t5 in e6)at[t5] = e6[t5];
    }, ScrollTrigger.kill = function kill() {
        Ye = 0, st.slice(0).forEach(function(e6) {
            return e6.kill(1);
        });
    }, ScrollTrigger.config = function config(e6) {
        "limitCallbacks" in e6 && (We = !!e6.limitCallbacks);
        var t5 = e6.syncInterval;
        t5 && clearInterval(c) || (c = t5) && setInterval(Ja, t5), "autoRefreshEvents" in e6 && (T3(Aa) || T3(za, e6.autoRefreshEvents || "none"), r5 = -1 === (e6.autoRefreshEvents + "").indexOf("resize"));
    }, ScrollTrigger.scrollerProxy = function scrollerProxy(e6, t5) {
        var r12 = ze(e6)[0];
        M(r12) ? Ue.unshift(ke, t5, Pe, t5, Ce, t5) : Ue.unshift(r12, t5);
    }, ScrollTrigger.matchMedia = function matchMedia(e6) {
        var t5, r12, n11, o8, i8;
        for(r12 in e6)n11 = z.indexOf(r12), o8 = e6[r12], "all" === (Ie = r12) ? o8() : (t5 = ke.matchMedia(r12)) && (t5.matches && (i8 = o8()), ~n11 ? (z[n11 + 1] = Z(z[n11 + 1], o8), z[n11 + 2] = Z(z[n11 + 2], i8)) : (n11 = z.length, z.push(r12, o8, i8), t5.addListener ? t5.addListener(Ra) : t5.addEventListener("change", Ra)), z[n11 + 3] = t5.matches), Ie = 0;
        return z;
    }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e6) {
        e6 || (z.length = 0), 0 <= (e6 = z.indexOf(e6)) && z.splice(e6, 4);
    }, ScrollTrigger);
    function ScrollTrigger(e6, t5) {
        i4 || ScrollTrigger.register(Oe) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e6, t5);
    }
    G.version = "3.6.0", G.saveStyles = function(e6) {
        return e6 ? ze(e6).forEach(function(e7) {
            if (e7 && e7.style) {
                var t5 = A.indexOf(e7);
                0 <= t5 && A.splice(t5, 4), A.push(e7, e7.style.cssText, Oe.core.getCache(e7), Ie);
            }
        }) : A;
    }, G.revert = function(e6, t6) {
        return F(!e6, t6);
    }, G.create = function(e6, t6) {
        return new G(e6, t6);
    }, G.refresh = function(e6) {
        return e6 ? La() : B(!0);
    }, G.update = D, G.maxScroll = function(e6, t6) {
        return S(e6, t6 ? rt : nt);
    }, G.getScrollFunc = function(e6, t6) {
        return O(ze(e6)[0], t6 ? rt : nt);
    }, G.getById = function(e6) {
        return lt[e6];
    }, G.getAll = function() {
        return st.slice(0);
    }, G.isScrolling = function() {
        return !!Ke;
    }, G.addEventListener = function(e6, t6) {
        var r12 = _[e6] || (_[e6] = []);
        ~r12.indexOf(t6) || r12.push(t6);
    }, G.removeEventListener = function(e6, t6) {
        var r12 = _[e6], n11 = r12 && r12.indexOf(t6);
        0 <= n11 && r12.splice(n11, 1);
    }, G.batch = function(e6, t6) {
        function ei(e7, t7) {
            var r12 = [], n11 = [], o8 = Oe.delayedCall(i8, function() {
                t7(r12, n11), r12 = [], n11 = [];
            }).pause();
            return function(e8) {
                r12.length || o8.restart(!0), r12.push(e8.trigger), n11.push(e8), a12 <= r12.length && o8.progress(1);
            };
        }
        var r12, n11 = [], o8 = {
        }, i8 = t6.interval || 0.016, a12 = t6.batchMax || 1000000000;
        for(r12 in t6)o8[r12] = "on" === r12.substr(0, 2) && V(t6[r12]) && "onRefreshInit" !== r12 ? ei(0, t6[r12]) : t6[r12];
        return V(a12) && (a12 = a12(), za(G, "refresh", function() {
            return a12 = t6.batchMax();
        })), ze(e6).forEach(function(e7) {
            var t7 = {
            };
            for(r12 in o8)t7[r12] = o8[r12];
            t7.trigger = e7, n11.push(G.create(t7));
        }), n11;
    }, G.sort = function(e6) {
        return st.sort(e6 || function(e7, t6) {
            return -1000000 * (e7.vars.refreshPriority || 0) + e7.start - (t6.start + -1000000 * (t6.vars.refreshPriority || 0));
        });
    }, L() && Oe.registerPlugin(G), e2.ScrollTrigger = G, e2.default = G;
    if (typeof window === "undefined" || window !== e2) Object.defineProperty(e2, "__esModule", {
        value: !0
    });
    else delete e2.default;
});
!function(t6, e2) {
    "object" == typeof exports && "undefined" != typeof module ? e2(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e2) : e2((t6 = t6 || self).window = t6.window || {
    });
}(this, function(e2) {
    "use strict";
    function k2() {
        return "undefined" != typeof window;
    }
    function l2() {
        return i4 || k2() && (i4 = window.gsap) && i4.registerPlugin && i4;
    }
    function m3(t6) {
        return "string" == typeof t6;
    }
    function n5(t6) {
        return "function" == typeof t6;
    }
    function o4(t6, e6) {
        var o8 = "x" === e6 ? "Width" : "Height", n11 = "scroll" + o8, r5 = "client" + o8;
        return t6 === x3 || t6 === u3 || t6 === c3 ? Math.max(u3[n11], c3[n11]) - (x3["inner" + o8] || u3[r5] || c3[r5]) : t6[n11] - t6["offset" + o8];
    }
    function p4(t6, e6) {
        var o8 = "scroll" + ("x" === e6 ? "Left" : "Top");
        return t6 === x3 && (null != t6.pageXOffset ? o8 = "page" + e6.toUpperCase() + "Offset" : t6 = null != u3[o8] ? u3 : c3), function() {
            return t6[o8];
        };
    }
    function r5(t6, e6) {
        if (!(t6 = a8(t6)[0]) || !t6.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
        var o8 = t6.getBoundingClientRect(), n11 = !e6 || e6 === x3 || e6 === c3, r12 = n11 ? {
            top: u3.clientTop - (x3.pageYOffset || u3.scrollTop || c3.scrollTop || 0),
            left: u3.clientLeft - (x3.pageXOffset || u3.scrollLeft || c3.scrollLeft || 0)
        } : e6.getBoundingClientRect(), i4 = {
            x: o8.left - r12.left,
            y: o8.top - r12.top
        };
        return !n11 && e6 && (i4.x += p4(e6, "x")(), i4.y += p4(e6, "y")()), i4;
    }
    function s4(t6, e6, n11, i4, l5) {
        return isNaN(t6) || "object" == typeof t6 ? m3(t6) && "=" === t6.charAt(1) ? parseFloat(t6.substr(2)) * ("-" === t6.charAt(0) ? -1 : 1) + i4 - l5 : "max" === t6 ? o4(e6, n11) - l5 : Math.min(o4(e6, n11), r5(t6, e6)[n11] - l5) : parseFloat(t6) - l5;
    }
    function t6() {
        i4 = l2(), k2() && i4 && document.body && (x3 = window, c3 = document.body, u3 = document.documentElement, a8 = i4.utils.toArray, i4.config({
            autoKillThreshold: 7
        }), g3 = i4.config(), f2 = 1);
    }
    var i4, f2, x3, u3, c3, a8, g3, d3 = {
        version: "3.6.0",
        name: "scrollTo",
        rawVars: 1,
        register: function register(e6) {
            i4 = e6, t6();
        },
        init: function init(e6, o8, r12, i8, l5) {
            f2 || t6();
            var u7 = this;
            u7.isWin = e6 === x3, u7.target = e6, u7.tween = r12, o8 = (function _clean(t7, e7, o9, r13) {
                if (n5(t7) && (t7 = t7(e7, o9, r13)), "object" != typeof t7) return m3(t7) && "max" !== t7 && "=" !== t7.charAt(1) ? {
                    x: t7,
                    y: t7
                } : {
                    y: t7
                };
                if (t7.nodeType) return {
                    y: t7,
                    x: t7
                };
                var i9, l6 = {
                };
                for(i9 in t7)"onAutoKill" !== i9 && (l6[i9] = n5(t7[i9]) ? t7[i9](e7, o9, r13) : t7[i9]);
                return l6;
            })(o8, i8, e6, l5), u7.vars = o8, u7.autoKill = !!o8.autoKill, u7.getX = p4(e6, "x"), u7.getY = p4(e6, "y"), u7.x = u7.xPrev = u7.getX(), u7.y = u7.yPrev = u7.getY(), null != o8.x ? (u7.add(u7, "x", u7.x, s4(o8.x, e6, "x", u7.x, o8.offsetX || 0), i8, l5, Math.round), u7._props.push("scrollTo_x")) : u7.skipX = 1, null != o8.y ? (u7.add(u7, "y", u7.y, s4(o8.y, e6, "y", u7.y, o8.offsetY || 0), i8, l5, Math.round), u7._props.push("scrollTo_y")) : u7.skipY = 1;
        },
        render: function render(t7, e6) {
            for(var n11, r12, i8, l5, s8, u7 = e6._pt, f5 = e6.target, p5 = e6.tween, c4 = e6.autoKill, a12 = e6.xPrev, d6 = e6.yPrev, y = e6.isWin; u7;)u7.r(t7, u7.d), u7 = u7._next;
            n11 = y || !e6.skipX ? e6.getX() : a12, i8 = (r12 = y || !e6.skipY ? e6.getY() : d6) - d6, l5 = n11 - a12, s8 = g3.autoKillThreshold, e6.x < 0 && (e6.x = 0), e6.y < 0 && (e6.y = 0), c4 && (!e6.skipX && (s8 < l5 || l5 < -s8) && n11 < o4(f5, "x") && (e6.skipX = 1), !e6.skipY && (s8 < i8 || i8 < -s8) && r12 < o4(f5, "y") && (e6.skipY = 1), e6.skipX && e6.skipY && (p5.kill(), e6.vars.onAutoKill && e6.vars.onAutoKill.apply(p5, e6.vars.onAutoKillParams || []))), y ? x3.scrollTo(e6.skipX ? n11 : e6.x, e6.skipY ? r12 : e6.y) : (e6.skipY || (f5.scrollTop = e6.y), e6.skipX || (f5.scrollLeft = e6.x)), e6.xPrev = e6.x, e6.yPrev = e6.y;
        },
        kill: function kill(t7) {
            var e6 = "scrollTo" === t7;
            !e6 && "scrollTo_x" !== t7 || (this.skipX = 1), !e6 && "scrollTo_y" !== t7 || (this.skipY = 1);
        }
    };
    d3.max = o4, d3.getOffset = r5, d3.buildGetter = p4, l2() && i4.registerPlugin(d3), e2.ScrollToPlugin = d3, e2.default = d3;
    if (typeof window === "undefined" || window !== e2) Object.defineProperty(e2, "__esModule", {
        value: !0
    });
    else delete e2.default;
});
!function() {
    function e2(e6) {
        var u3, d3, p4, c3 = {
            up: [],
            left: [],
            right: [],
            down: []
        }, a8 = function(t6, e7) {
            var a12, n5, i4, o4, r5, s4, l2 = t6.touches[0] || t6.changedTouches[0];
            !l2 || !e7 && 1 < t6.touches.length || (a12 = l2.clientX - u3, n5 = l2.clientY - d3, i4 = Math.abs(a12), l2 = Math.abs(n5), r5 = l2 < i4 ? (o4 = a12 < 0 ? "left" : "right", i4) : (o4 = 0 < n5 ? "up" : "down", l2), s4 = !1, c3[o4].forEach(function(t7) {
                t7.pd && t7.pd() && (s4 = !0);
                var e8 = t7.wp ? t7.w * ("up" === o4 || "down" === o4 ? p4.height : p4.width) / 100 : t7.w;
                r5 >= X(t7.m, 4, e8 || 40) && (0 < e8 ? (e8 = Math.floor(r5 / e8)) !== t7.l && (t7.f(), t7.l = e8) : t7.done || (t7.done = !0, t7.f()));
            }), s4 && !e7 && t6.preventDefault());
        }, n5 = function(t6) {
            e6.removeEventListener("touchmove", a8), e6.removeEventListener("touchend", n5);
        };
        e6.addEventListener("touchstart", function(t6) {
            1 === t6.touches.length && (t6 = t6.touches[0], u3 = t6.clientX, d3 = t6.clientY, e6.addEventListener("touchmove", a8, {
                passive: !1
            }), e6.addEventListener("touchend", n5, !1), f2(c3, function(t7, e7) {
                for(var a12 = 0; a12 < e7.length; a12++)e7[a12].l = 0, e7[a12].done = !1;
            }), p4 = e6.getBoundingClientRect());
        }, !1), e6.addEventListener("touchforcechange", function(t6) {
            var n11 = !1;
            f2(c3, function(t7, e7) {
                for(var a12 = 0; a12 < e7.length; a12++)if (e7[a12].pd && e7[a12].pd()) {
                    n11 = !0;
                    break;
                }
            }), n11 && t6.preventDefault();
        }, {
            passive: !1
        }), this.add = function(t6, e7, a12, n11, i4) {
            var o4;
            "string" == typeof e7 && 0 <= e7.indexOf("%") && (e7 = C2(e7, 100), o4 = !0), c3[t6].push({
                w: e7,
                wp: o4,
                l: 0,
                m: a12,
                f: n11,
                pd: i4
            });
        }, this.remove = function(t6, e7) {
            for(var a12 = 0; a12 < c3[t6].length; a12++)if (c3[t6][a12].f === e7) return void c3[t6].splice(a12, 1);
        };
    }
    function s4(t6) {
        return t6._pg_gh || (t6._pg_gh = new e2(t6)), t6._pg_gh;
    }
    gsap.registerPlugin({
        version: "1.0.0",
        name: "pgClass",
        init: function(t6, e6, a8, n5, i4) {
            this.t = t6, this.o = t6.getAttribute("class") || "", this.has = !1, this.v = e6, this.cl = t6.classList || null;
        },
        render: function(t6, e6) {
            e6.cl && (0 === t6 && e6.has ? (e6.t.setAttribute("class", e6.o), e6.has = !1) : 0 < t6 && (e6.v.add && e6.cl.add(e6.v.add), e6.v.set && e6.t.setAttribute("class", e6.v.set), e6.v.remove && e6.cl.remove(e6.v.remove), e6.has = !0));
        }
    });
    var t6 = {
        version: "1.0.0",
        name: "pgLottie",
        init: function(t7, e6, a8, n5, i4) {
            if (lottie) {
                var o4 = null;
                if (e6.anim) o4 = P(e6.anim, t7, e6.target_element);
                else if (t7._pg_lottie) o4 = t7._pg_lottie;
                else for(var r5 = lottie.getRegisteredAnimations(), s8 = 0; s8 < r5.length; s8++)if (r5[s8].wrapper === t7) {
                    o4 = r5[s8], t7._pg_lottie = o4;
                    break;
                }
                o4 && "object" == typeof o4 && "goToAndStop" in o4 ? (this.t = t7, this.v = e6, this.a = o4, this.tw = a8, this.dur = o4.totalFrames / o4.frameRate, this.tw_dur = a8.duration(), this.doing = !1, this.gf = function(t8) {
                    return 0 <= (t8 += "").indexOf("f") ? it(t8.replace("f", ""), 0) : $2(null, t8) * o4.frameRate;
                }) : j2("Lottie animation is not specified. Add transform on animated element or use Animation property.");
            } else j2("Lottie is not defined. Include it before pgia.js.");
        },
        render: function(t7, e6) {
            e6.a && (e6.v.seek && e6.a.goToAndStop(t7 * e6.dur * 1000, !1), 0 < t7 && !e6.doing ? ("play" in e6.v && ("" === e6.v.play ? e6.a.play() : e6.a.goToAndPlay(e6.gf(e6.v.play), !0)), "pause" in e6.v && ("" === e6.v.pause ? e6.a.pause() : e6.a.goToAndStop(e6.gf(e6.v.pause), !0)), e6.v.toggle && (e6.a.isPaused ? e6.a.play() : e6.a.pause()), e6.doing = !0) : 0 === t7 && (e6.doing = !1));
        }
    };
    gsap.registerPlugin(t6), t6 = {
        version: "1.0.0",
        name: "pgCall",
        init: function(a8, t7, e6, n5, i4) {
            this.t = a8, this.v = t7, this.dur = e6.duration(), this.c = function(t8, e7) {
                return "string" == typeof t8 && (t8 = window[t8]), t8(a8, e7), t8;
            };
        },
        render: function(t7, e6) {
            0 !== t7 && 0 !== e6.dur || !e6.v.start ? 1 === t7 && e6.v.complete ? e6.v.complete = e6.c(e6.v.complete, t7) : e6.v.update && (e6.v.update = e6.c(e6.v.update, t7)) : e6.v.start = e6.c(e6.v.start, t7);
        }
    }, gsap.registerPlugin(t6);
    var l2 = 0, u3 = 0, d3 = {
        version: "1.0.0",
        name: "pgDom",
        init: function(t7, e6, a8, n5, i4) {
            if (this.t = t7, this.o = t7.getAttribute("class") || "", this.has = !1, this.v = e6, this.created = [], this.template = e6.template || null, this.parent = t7.parentNode, this.next = t7.nextSibling, this.removed = !1, this.append = !0, this.live = !1, this.target_element = "function" == typeof e6.target_element ? e6.target_element(t7) : e6.target_element || null, e6.clone) {
                var o8 = (new Date).getTime();
                if (t7._pg_clone_time && o8 - t7._pg_clone_time < 200) return void j2("This element was just cloned and is now cloning others. Probably a recursive loop!");
                o8 = t7.cloneNode(!0);
                this.template = o8.outerHTML, this.append = "append" == e6.ins, this.live = !0;
            }
            o8 = it(e6.count || 1);
            "string" == typeof e6.count_sel && (o8 = Q(t7, e6.count_sel).length + it(e6.count || 0)), this.count = o8;
        },
        _d: function(t7) {
            t7 && (F2.elementAnimationsManager.destroyAnimations(t7, !0), F2.scrollSceneManager && F2.scrollSceneManager.removeScene(t7, !0), t7.parentNode && t7.parentNode.removeChild(t7));
        },
        _c: function(t7) {
            t7 && (F2.elementAnimationsManager.refreshAnimations(t7, !0), F2.scrollSceneManager && F2.scrollSceneManager.updateScene(t7, !0));
        },
        render: function(t7, e6) {
            if (e6.template) {
                var a8 = (new Date).getTime();
                500 < a8 - l2 && (l2 = a8, u3 = 0);
                var n5, i4 = B2(e6.count * t7);
                if (0 <= i4 && i4 < e6.created.length) for(; e6.created.length > i4;)d3._d(e6.created.pop());
                for(; 0 < i4 && i4 > e6.created.length;){
                    if (100 < ++u3) return void j2("Cloning too many elements is a sign of an endless loop. Blocking. Tried to clone " + u3 + " elements.");
                    if (!(n5 = e6.live ? e6.t.cloneNode(!0) : ((o9 = document.createRange()).selectNodeContents(e6.t), o9.createContextualFragment(e6.live ? e6.t.outerHTML : e6.template).firstChild))) break;
                    n5.removeAttribute("data-pg-id");
                    var o9 = (e6.created.length ? e6.created[e6.created.length - 1] : e6.t).nextSibling;
                    e6.append || !o9 ? e6.t.parentNode.appendChild(n5) : e6.t.parentNode.insertBefore(n5, o9), n5.classList ? n5.classList.add("pgia-clone") : n5.className += " pgia-clone", e6.created.push(n5);
                    var r12 = !1, o9 = L2(n5.innerHTML, function(t8) {
                        return r12 = !0, (e6.target_element || n5).getAttribute(t8) || "";
                    });
                    r12 && (n5.innerHTML = o9), e6.v.pos && (n5._pg_position = new p4(n5, e6.target_element, P(e6.v.pos, n5, e6.target_element) || "auto", it(e6.v.pos_dist || 0), it(e6.v.pos_width || 0), it(e6.v.pos_height || 0), e6.v.pos_scale || !1, e6.v.pos_no_repo || !1), n5.style.left = n5._pg_position.left + "px", n5.style.top = n5._pg_position.top + "px"), n5._pg_clone_time = (new Date).getTime(), d3._c(n5), e6.v.play && F2.play(n5, e6.v.play);
                }
            }
            e6.v.remove && (1 != t7 || e6.removed ? t7 < 1 && e6.removed && (e6.parent && (e6.next ? e6.parent.insertBefore(e6.t, e6.next) : e6.parent.appendChild(e6.t)), e6.removed = !1, d3._c(e6.t)) : (d3._d(e6.t), e6.removed = !0)), e6.v.reparent && (a8 = e6.parent != e6.t.parentNode, 0 == t7 && a8 ? e6.parent.appendChild(e6.t) : 0 < t7 && !a8 && (a8 = Q(e6.t, e6.v.reparent)[0]) && a8.appendChild(e6.t));
        }
    };
    gsap.registerPlugin(d3);
    var a12 = new function() {
        var a13 = [];
        this.add = function(t7) {
            a13.push(t7);
        }, this.remove = function(t7) {
            t7 = a13.indexOf(t7);
            0 <= t7 && a13.splice(t7, 1);
        };
        function t7(e6) {
            a13.slice(0).forEach(function(t8) {
                e6 && !t8.fixed || t8.update() && t8.move();
            });
        }
        var e6 = null;
        window.addEventListener("resize", function() {
            e6 && clearTimeout(e6), e6 = setTimeout(t7, 250);
        }), window.addEventListener("scroll", function() {
            t7(!0);
        });
    }, p4 = function(d6, p5, t7, c3, h3, f2, g3, e6) {
        d6._pg_position && d6._pg_position.destroy(), this.fixed = "fixed" == window.getComputedStyle(d6).position, this.parent = this.fixed ? d6.ownerDocument.body : (function(t8) {
            var e7 = t8.parentNode;
            for(; e7 && 1 == e7.nodeType;){
                if ("static" != window.getComputedStyle(e7).position) return e7;
                e7 = e7.parentNode;
            }
            return t8.ownerDocument.body;
        })(d6), "auto" == t7 && (t7 = "top bottom right left");
        var m3 = t7.split(/\s+/), n11 = gsap.quickSetter(d6, "css");
        this.update = function() {
            if (!d6.ownerDocument || !p5.ownerDocument || !d6.parentNode) return d6._pg_position = null, this.destroy(), !1;
            var t8, e7, a13 = window.innerWidth, n12 = window.innerHeight, i8 = d6.getBoundingClientRect(), o10 = p5.getBoundingClientRect(), r13 = this.parent.getBoundingClientRect(), s9 = h3 ? o10.width * h3 / 100 : i8.width, l5 = f2 ? o10.height * f2 / 100 : i8.height;
            g3 && h3 && !f2 && (l5 *= s9 / i8.width), g3 && f2 && !h3 && (s9 *= l5 / i8.height);
            for(var u7 = 0; u7 < m3.length; u7++){
                switch(m3[u7]){
                    case "top":
                        e7 = o10.left + o10.width / 2 - s9 / 2, t8 = o10.top - c3 - i8.height;
                        break;
                    case "bottom":
                        e7 = o10.left + o10.width / 2 - s9 / 2, t8 = o10.top + o10.height + c3;
                        break;
                    case "left":
                        t8 = o10.top + o10.height / 2 - l5 / 2, e7 = o10.left - i8.width - c3;
                        break;
                    case "right":
                        t8 = o10.top + o10.height / 2 - l5 / 2, e7 = o10.left + o10.width + c3;
                        break;
                    case "center":
                        t8 = o10.top + o10.height / 2 - l5 / 2, e7 = o10.left + o10.width / 2 - s9 / 2;
                        break;
                    case "inner-top":
                        t8 = o10.top + c3, e7 = o10.left + o10.width / 2 - s9 / 2;
                }
                if (0 < e7 && 0 < t8 && e7 + i8.width < a13 && t8 + i8.height < n12 || u7 == m3.length - 1) {
                    this.pos = m3[u7], e7 -= r13.left, t8 -= r13.top;
                    break;
                }
            }
            return this.ot = i8.top - r13.top, this.ol = i8.left - r13.left, this.ow = i8.width, this.oh = i8.height, this.top = t8, this.left = e7, this.w = s9, this.h = l5, d6.setAttribute("data-pgia-position", this.pos), !0;
        }, this.move = function(t8) {
            var e7 = (void 0) === t8 ? 1 : t8, a13 = {
                left: this.ol + (this.left - this.ol) * e7,
                top: this.ot + (this.top - this.ot) * e7
            };
            h3 && (t8 = this.ow + (this.w - this.ow) * e7, g3 ? (a13.scaleX = t8 / d6.offsetWidth, f2 || (a13.scaleY = a13.scaleX)) : a13.width = t8), f2 && (e7 = this.oh + (this.h - this.oh) * e7, g3 ? (a13.scaleY = e7 / d6.offsetHeight, h3 || (a13.scaleX = a13.scaleY)) : a13.height = e7), n11(a13);
        }, this.destroy = function() {
            a12.remove(this);
        }, this.update(), e6 || a12.add(this);
    }, t6 = {
        version: "1.0.0",
        name: "pgPos",
        init: function(t7, e6, a13, n11, i8) {
            this.t = t7;
            var o10 = "function" == typeof (this.v = e6).target_element ? e6.target_element(t7) : e6.target_element || null;
            e6.tsel && (o10 = Q(t7, e6.tsel)[0] || o10), this.pos = new p4(t7, o10, P(e6.pos || "auto", t7, o10), P(e6.dist || "0", t7, o10), P(e6.width || "0", t7, o10), P(e6.height || "0", t7, o10), P(e6.scale || "0", t7, o10), P(e6.no_repo || "0", t7, o10));
        },
        render: function(t7, e6) {
            e6.pos.move(t7);
        }
    };
    gsap.registerPlugin(t6), t6 = {
        version: "1.0.0",
        name: "pgia",
        init: function(t7, e6, a13, n11, i8) {
            if (this.t = t7, this.v = e6, this.te = "function" == typeof e6.target_element ? e6.target_element(t7) : e6.target_element || null, this.pr = 0, this.dir = e6.dir || "f_b", this.pt = e6.target ? P(e6.target, t7, this.te) : t7, this.played = this.paused = this.recreated = !1, "string" == typeof this.pt) switch(this.pt){
                case "previous":
                case "next":
                case "first":
                case "last":
                    this.pt = H2(t7, this.pt);
                    break;
                default:
                    this.pt = Q(t7, this.pt) || t7;
            }
        },
        render: function(e6, a13) {
            var t7 = a13.pr <= e6 ? "f" : "b";
            0 <= a13.dir.indexOf(t7) && (0 < e6 && ("rec" in a13.v && !a13.recreated && (K2(a13.pt, function(t8) {
                F2.recreate(t8, P(a13.v.rec || a13.v.play || "", a13.t, a13.te));
            }), a13.recreated = !0), a13.v.play && !a13.played && (K2(a13.pt, function(t8) {
                F2.play(t8, P(a13.v.play, a13.t, a13.te));
            }), a13.played = !0), a13.v.pause && !a13.paused && (K2(a13.pt, function(t8) {
                F2.pause(t8, P(a13.v.pause, a13.t, a13.te));
            }), a13.paused = !0)), a13.v.seek && K2(a13.pt, function(t8) {
                F2.seek(t8, P(a13.v.seek, a13.t, a13.te), e6, !1);
            })), 0 !== e6 && 1 !== e6 || a13.v.once || (a13.played = a13.paused = a13.recreated = !1), a13.pr = e6;
        }
    }, gsap.registerPlugin(t6), gsap.registerPlugin(ScrollTrigger), gsap.registerPlugin(ScrollToPlugin);
    var F2 = {
    };
    window.pgia = F2;
    var n11 = document.documentElement, q2 = n11.hasAttribute("data-pg-id");
    function j2(t7) {
        q2 && console.error(t7);
    }
    function i8() {
        return q2 ? n11.hasAttribute("data-pg-mobile") : "string" == typeof pgia_small_mq ? !!window.matchMedia && window.matchMedia(pgia_small_mq).matches : screen.width < 1000 && screen.height < 1000;
    }
    "undefined" != typeof gasp && gsap.defaults({
        overwrite: "auto"
    });
    var o10 = i8();
    window.addEventListener("resize", function() {
        o10 = i8();
    });
    var B2, W, Y2, D2, J, V, $2, G2, f2, A2, c3, Q, h3, K2, tt, et, r13, g3, at, nt, m3, v3, _2, y, w3, b3, x3, k2, O1, t6 = !0;
    function E2(t7, e6) {
        for(var a13 = e6 + "Sibling", n12 = t7[a13]; n12 && 1 !== n12.nodeType;)n12 = n12[a13];
        return n12;
    }
    function T3(t7, e6) {
        t7 = t7[e6 + "Child"];
        return t7 ? 1 === t7.nodeType ? t7 : E2(t7, "first" == e6 ? "next" : "previous") : null;
    }
    function it(t7, e6) {
        t7 = parseFloat(t7);
        return isNaN(t7) ? e6 : t7;
    }
    function X(t7, e6, a13) {
        return Math.min(Math.max(t7, e6), a13);
    }
    function ot(t7, e6) {
        return 0 === ("" + t7).indexOf(e6);
    }
    function rt(t7) {
        return t7.replace(/\&gt;|\#gt\#/g, ">");
    }
    function L2(t7, a13) {
        var n12 = !1, t7 = (t7 + "").replace(/\$\{([^\}]*)\}/g, function(t8, e6) {
            e6 = a13(e6);
            return "object" == typeof e6 && (n12 = e6, e6 = "_o_"), e6;
        });
        return n12 && "_o_" == t7 ? n12 : t7;
    }
    function M(t7) {
        return !t7.paused() && 0 < t7.duration && t7.progress() < 1 && !t7.reversed();
    }
    function S(t7) {
        return Array.prototype.slice.call(t7.parentNode.children).indexOf(t7);
    }
    function P(t7, a13, n12, e6) {
        t7 = L2(t7, function(t8) {
            var e7 = t8.split("|");
            return ((void 0) === (t8 = ot(t8 = e7[0], "--") ? (window.getComputedStyle(a13).getPropertyValue(t8) || "").trim() : (function(t9, e8, a14, n13) {
                var i9 = window, o11 = t9.split("."), t9 = 0;
                "this" == o11[0] ? (i9 = e8, t9++) : "target" == o11[0] && (i9 = a14, t9++);
                for(var r14 = t9; r14 < o11.length; r14++){
                    var s9 = o11[r14].split("#"), l5 = s9[0], s9 = s9[1];
                    if ("object" != typeof i9 || null === i9) return n13;
                    if (i9 instanceof HTMLElement) {
                        if ("index" == l5) return S(i9);
                        if ("index1" == l5) return S(i9) + 1;
                        if ("style" == l5 && r14 < o11.length - 1) return null === (i9 = window.getComputedStyle(i9).getPropertyValue(o11[r14 + 1])) ? n13 : i9;
                    }
                    if ("hasAttribute" in i9 && i9.hasAttribute(l5)) i9 = i9.getAttribute(l5);
                    else {
                        if (!(l5 in i9)) return n13;
                        i9 = "function" == typeof i9[l5] ? i9[l5].call(i9) : i9[l5], s9 && !isNaN(i9) && s9 in Math && (i9 = Math[s9](it(i9)));
                    }
                }
                return i9;
            })(t8, a13, n12)) || "" === t8) && 1 < e7.length && (t8 = e7[1]), t8;
        });
        return e6 && (t7 = C2(t7, e6)), it(t7, t7);
    }
    function C2(t7, a13) {
        t7 = (t7 + "").replace(/([0-9]+)\%/, function(t8, e6) {
            return (a13 = "function" == typeof a13 ? a13() : a13) * it(e6) / 100;
        });
        return it(t7, t7);
    }
    function I2(t7) {
        try {
            return JSON.parse(t7);
        } catch (t8) {
        }
        return null;
    }
    function N(t7, e6, a13, n12) {
        var i9, o11 = I2(n12 || t7.getAttribute(e6));
        o11 && o11.l ? a13.d && a13.d.l && (i9 = {
        }, o11.l.forEach(function(t8) {
            t8.name && (i9[t8.name] = !0);
        }), a13.d.l.forEach(function(t8) {
            t8.name && i9[t8.name] || o11.l.push(t8);
        })) : o11 = a13, t7.setAttribute(e6, JSON.stringify(o11));
    }
    function st(t7, e6, a13) {
        var n12 = document.body, i9 = document.documentElement, o11 = t7 == window || t7 == n12;
        o11 || t7.parentNode;
        o11 && (t7 = n12);
        var r14, s10, l6, u7 = {
            p: o11 ? {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight
            } : t7.getBoundingClientRect(),
            pswidth: (o11 ? i9 : t7).scrollWidth,
            psheight: (o11 ? i9 : t7).scrollHeight,
            spleft: o11 ? window.pageXOffset || i9.scrollLeft : t7.scrollLeft,
            sptop: o11 ? window.pageYOffset || i9.scrollTop : t7.scrollTop,
            c: []
        };
        if (!a13) for(var d6, p5 = e6 ? Q(t7, e6) : t7.children, c4 = 0; c4 < p5.length; c4++)(p5[c4].getAttribute("class") || "").indexOf("gsap-marker") < 0 && (d6 = p5[c4], r14 = u7.p, s10 = u7.spleft, l6 = u7.sptop, d6 = {
            left: (d6 = d6.getBoundingClientRect()).left - r14.left + s10,
            top: d6.top - r14.top + l6,
            width: d6.width,
            height: d6.height
        }, u7.c.push(d6));
        return u7;
    }
    function R2(e6, a13, n12) {
        if (e6[a13]) try {
            "" !== n12 && (e6.currentTime = it(n12, 0)), "play" === a13 ? e6[a13]().then(function() {
                e6._pgia_broken = !1;
            }).catch(function(t7) {
                e6._pgia_broken = !0, "play" !== a13 || "AUDIO" == e6.nodeName || e6.muted || (e6.muted = !0, R2(e6, a13, n12)), j2(t7);
            }) : e6[a13]();
        } catch (t7) {
            j2(t7);
        }
    }
    function H2(t7, e6) {
        if (e6) {
            var a13 = h3(t7), n12 = e6.match(/(\w+)(\((.*)\))?/), i9 = it(n12[3], n12[3]), o11 = !isNaN(i9);
            if (!a13.length) return [];
            switch(n12[1]){
                case "previous":
                case "next":
                    var r14 = "next" == n12[1];
                    if (!i9) return [
                        E2(a13[0], e6) || T3(a13[0].parentNode, r14 ? "first" : "last")
                    ];
                    for(var s10 = 0; s10 < a13.length; s10++)if (a13[s10].matches(i9)) return [
                        r14 ? s10 + 1 < a13.length ? a13[s10 + 1] : a13[0] : 0 < s10 ? a13[s10 - 1] : a13[a13.length - 1]
                    ];
                    return [
                        r14 ? a13[0] : a13[a13.length - 1]
                    ];
                case "first":
                case "last":
                    return i9 ? o11 ? "first" == n12[1] ? tt(a13, 0, i9) : tt(a13, a13.length - i9) : [] : [
                        T3(a13[0].parentNode, n12[1])
                    ];
            }
        }
        return t7;
    }
    function U(t7, a14) {
        ((t7 || "") + "").split(/\s*,\s*/).forEach(function(t8) {
            isNaN(t8) || (t8 = parseInt(t8));
            var e6 = !1;
            "string" == typeof t8 ? ot(t8, "-") && (e6 = !0, t8 = t8.substr(1)) : t8 < 0 && (e6 = !0, t8 = -t8), a14(t8, e6);
        });
    }
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t7) {
        var e6 = this;
        do {
            if (e6.matches(t7)) return e6;
        }while (null !== (e6 = e6.parentElement || e6.parentNode) && 1 === e6.nodeType)
        return null;
    }), screen && Element.prototype.matches && (void 0) !== Array.isArray && "innerHeight" in window && !n11.hasAttribute("data-pg-ia-disabled") && document.createElement("div").classList || (t6 = !1), t6 ? (navigator.userAgent.indexOf("Firefox"), B2 = Math.round, W = function(t7) {
        return t7 && t7.clientWidth && t7.clientHeight && t7.scrollWidth / t7.clientWidth > t7.scrollHeight / t7.clientHeight ? "h" : "v";
    }, Y2 = function(t7, e6) {
        return Math.abs(t7 - e6) < 0.001;
    }, D2 = function(t7) {
        return B2(1000 * t7) / 1000;
    }, J = function(t7, e6, a14, n13, i10, o12, r15, s11, l6, u7, d6, p5) {
        t7 = t7 || st(e6, o12);
        var c4 = a14 ? "left" : "top", h6 = a14 ? "width" : "height", f5 = a14 ? "Left" : "Top", o12 = e6 == window || e6 == document.body, g4 = t7.c.length;
        if (g4) {
            var m4 = r15 ? r15.end - r15.start : t7["ps" + h6] - t7.p[h6], v4 = r15 ? r15.start : 0, _3 = r15 ? r15.progress : t7["sp" + c4] / m4;
            if ((void 0) !== l6 && (_3 = l6), s11 && (!n13 && Y2(_3, 1) || n13 && Y2(_3, 0)) && (_3 = n13 ? 1 : t7.c[0][c4] / m4, e6 = o12 ? document.documentElement : e6, x6 = _3 * m4, o12 ? window.scrollTo(a14 ? x6 : t7.sptop, a14 ? t7.spleft : x6) : e6["scroll" + f5] = x6), (void 0) !== d6) return u7 ? {
                px: t7.p[h6] * d6,
                p: t7.p[h6] * d6 / m4,
                i: d6
            } : {
                px: t7.c[d6][c4],
                p: t7.c[d6][c4] / m4,
                i: X(d6, 0, s11 ? g4 - 2 : g4 - 1)
            };
            O2 = -1;
            var y1, w4, A3, b6, x6 = (r15 ? r15.pgBottomCover : 0) / m4, s11 = (r15 ? r15.pgTopCover : 0) / m4;
            if ("c" === n13 || i10) {
                for(var k4 = _3 + t7.p[h6] / m4 - x6, O2 = 0, E3 = 0, T5 = d6 = 0, L3 = (r15 ? r15.pgTopCover : 0) / m4, M1 = 0; M1 < g4; M1++){
                    var S1 = (t7.c[M1][c4] - v4) / m4, P1 = X((t7.c[M1][c4] + t7.c[M1][h6] - v4) / m4, _3 + L3, k4), C3 = X(S1, _3 + L3, k4), I3 = t7.c[M1][h6] / m4, I3 = B2((P1 - C3) / I3 * 100);
                    !1 === n13 && (i10 && Y2(S1, _3) || D2(S1) > _3) && (I3 *= 5), !0 === n13 && (i10 && Y2(S1, _3) || D2(S1) < _3) && (I3 *= 5), (T5 < I3 || I3 == T5 && M1 == g4 - 1 && 1 == _3) && (T5 = I3, O2 = S1 * m4, E3 = S1, d6 = M1);
                }
                return {
                    p: E3,
                    px: O2,
                    idx: d6
                };
            }
            if (u7) E3 = !n13 && 1 == _3 && p5 ? (O2 = s11 * m4) / m4 : (O2 = X(_3 * m4 + t7.p[h6] * (n13 ? -1 : 1), 0, m4)) / m4;
            else if (n13) {
                _3 += s11;
                for(M1 = g4 - 1; 0 <= M1; M1--){
                    var N1 = B2(t7.c[M1][c4]);
                    if (E3 = D2((N1 - v4) / m4), !Y2(A3 = E3, b6 = _3) && A3 < b6 || i10 && Y2(E3, _3)) {
                        O2 = N1, d6 = M1;
                        break;
                    }
                }
                O2 < 0 && (O2 = v4, d6 = E3 = 0);
            } else {
                _3 += s11;
                for(M1 = 0; M1 < g4; M1++){
                    N1 = B2(t7.c[M1][c4]);
                    if (!Y2(y1 = E3 = (N1 - v4) / m4, w4 = _3) && w4 < y1 || i10 && Y2(E3, _3)) {
                        O2 = N1, d6 = M1;
                        break;
                    }
                }
                O2 < 0 && (O2 = r15 ? r15.end : m4, E3 = 1, d6 = t7.c.length - 1);
            }
            return 1 < E3 && p5 && (E3 = (O2 = s11 * m4) / m4, d6 = 0), {
                p: E3,
                px: O2,
                idx: d6
            };
        }
    }, V = new function() {
        this.getAnimationId = function(t7, e6) {
            var a14 = null;
            return K2(t7, function(t8) {
                null !== a14 || (t8 = t8.getAttribute("data-pg-id")) && (a14 = t8 + ":" + e6);
            }), a14;
        }, this.updateProgress = function(t7, e6, a14) {
            window._pg_animation_phone && t7 && window._pg_animation_phone.animationProgress(t7, e6, a14);
        };
    }, $2 = function(t7, e6) {
        return "string" == typeof e6 ? 0 <= e6.indexOf("%") && t7 ? t7.duration() * parseFloat(e6.replace("%", "")) / 100 : 0 <= e6.indexOf("ms") ? parseFloat(e6.replace(/\s?ms/, "")) / 1000 : 0 <= e6.indexOf("s") ? parseFloat(e6.replace(/\s?s/, "")) : parseFloat(e6) : e6;
    }, G2 = function(t7) {
        return !!(q2 && t7 && t7.nopg) || !(!t7 || !t7.on || "off" !== t7.on) || !!t7 && !!t7.on && ("mobile" === t7.on ? !o10 : o10);
    }, f2 = function(t7, e6) {
        for(var a14 in t7)t7.hasOwnProperty(a14) && e6(a14, t7[a14]);
    }, A2 = function(t7) {
        var e6 = Quad.easeOut;
        if (!t7) return e6;
        switch(t7){
            case "SteppedEase.ease":
                return SteppedEase.ease.config(12);
            case "RoughEase.ease":
                return RoughEase.ease;
        }
        t7 = t7.split(".");
        return 2 === t7.length && window[t7[0]] && window[t7[0]][t7[1]] || e6;
    }, c3 = 0, Q = function(t7, e6, a14) {
        try {
            var n13 = (e6 = e6 || "").split("->"), i10 = n13[1];
            if (!(e6 = n13[0]) || "this" === e6) return H2([
                t7
            ], i10);
            var o12, r15 = t7;
            if (ot(e6, "$") && (e6 = e6.substr(1), r15 = a14 || document), ot(e6, "^")) {
                var s11 = e6.substr(1).split("|"), n13 = t7.closest(s11[0].trim());
                return H2(1 === s11.length ? [
                    n13
                ] : Q(n13, s11[1].trim(), a14), i10);
            }
            ot(e6, ">") && (o12 = "pgtemp_" + c3++, r15.setAttribute(o12, ""), e6 = "[" + o12 + "] " + e6);
            s11 = r15.querySelectorAll(e6);
            return o12 && r15.removeAttribute(o12), H2(s11, i10);
        } catch (t8) {
            j2(t8);
        }
        return [];
    }, F2.getTargets = Q, h3 = function(t7) {
        return "forEach" in t7 || t7 instanceof NodeList || t7 instanceof HTMLCollection || Array.isArray(t7) ? t7 : [
            t7
        ];
    }, K2 = function(t7, e6) {
        Array.prototype.forEach.call(h3(t7), e6);
    }, tt = function(t7, e6, a14) {
        return Array.prototype.slice.call(t7, e6, a14);
    }, et = function(t7, e6, a14) {
        return !(e6 in t7) || "" === t7[e6] ? a14 : (void 0) === a14 || "number" != typeof a14 || isNaN(t7[e6]) ? t7[e6] : it(t7[e6]);
    }, r13 = 0, g3 = function() {
        this.getTimeline = function(t7, c4, e6) {
            function y2(t8, e7) {
                return (e7 || t8)[h6] || null;
            }
            var w5 = gsap.timeline({
                onComplete: e6
            }), h6 = "_pgia_target_" + r13++;
            return t7 && t7.l && t7.l.forEach(function(e7) {
                e7.m || e7.l.sort(function(t8, e8) {
                    return t8.p === e8.p ? "set" === t8.t ? -1 : "set" === e8.t ? 1 : 0 : t8.p - e8.p;
                }).forEach(function(a14) {
                    var t8, n13, i10, o12, r15, s12, l6, u7, d6, p5;
                    a14.m || (t8 = e7.t || "this", n13 = null, t8 && (n13 = [], K2(c4, function(e8) {
                        Array.prototype.forEach.call(Q(e8, P(t8, e8, e8)), function(t9) {
                            n13.indexOf(t9) < 0 && (n13.push(t9), t9[h6] = e8);
                        });
                    })), i10 = a14.p, o12 = a14.d || 0, r15 = [], s12 = [], l6 = [], u7 = {
                    }, d6 = {
                        "media.playing": function(t9, e8) {
                            function a15() {
                                n13.forEach(function(t10) {
                                    t10.paused && !t10._pgia_broken && ("" !== e8 || isNaN(t10.duration) || t10.duration > t10.currentTime) && R2(t10, "play", e8);
                                });
                            }
                            r15.push(a15), l6.push(a15), s12.push(function() {
                                n13.forEach(function(t10) {
                                    R2(t10, "pause", "");
                                });
                            });
                        },
                        "media.play": function(t9, e8) {
                            r15.push(function() {
                                n13.forEach(function(t10) {
                                    R2(t10, "play", e8);
                                });
                            });
                        },
                        "media.stop": function(t9, e8) {
                            r15.push(function() {
                                n13.forEach(function(t10) {
                                    R2(t10, "pause", e8);
                                });
                            });
                        },
                        "media.mute": function(t9, e8) {
                            r15.push(function() {
                                n13.forEach(function(t10) {
                                    t10.muted = !!e8;
                                });
                            });
                        },
                        "pgia.play": function(t9, e8) {
                            u7.pgia = u7.pgia || {
                            }, u7.pgia.play = e8, u7.pgia.target_element = y2;
                        },
                        "pgia.pause": function(t9, e8) {
                            u7.pgia = u7.pgia || {
                            }, u7.pgia.pause = e8, u7.pgia.target_element = y2;
                        },
                        pgia: function(t9, e8) {
                            u7.pgia = u7.pgia || {
                            }, e8.target_element = y2, f2(e8, function(t10, e9) {
                                u7.pgia[t10] = e9;
                            });
                        },
                        "pgia.start": function(t9, e8) {
                            u7.pgCall || (u7.pgCall = {
                            }), u7.pgCall.start = e8;
                        },
                        "pgia.complete": function(t9, e8) {
                            u7.pgCall || (u7.pgCall = {
                            }), u7.pgCall.complete = e8;
                        },
                        "pgia.update": function(t9, e8) {
                            u7.pgCall || (u7.pgCall = {
                            }), u7.pgCall.update = e8;
                        },
                        "class.set": function(t9, e8) {
                            u7.pgClass = u7.pgClass || {
                            }, u7.pgClass.set = e8;
                        },
                        "class.add": function(t9, e8) {
                            u7.pgClass = u7.pgClass || {
                            }, u7.pgClass.add = e8;
                        },
                        "class.remove": function(t9, e8) {
                            u7.pgClass = u7.pgClass || {
                            }, u7.pgClass.remove = e8;
                        },
                        scrollTo: function(t9, c5) {
                            var h7 = {
                            }, f5 = et(c5, "dir", "y"), g4 = et(c5, "dest", 0) + "", m5 = et(c5, "inf", 0), v5 = et(c5, "esel", null), _4 = et(c5, "offset", "st");
                            w5._pg_req_inv = !0;
                            function e8(t10, e9) {
                                var a15, n14 = y2(e9), i11 = P(g4, e9, n14), o13 = !1;
                                0 <= (i11 + "").indexOf("_or_start") && (o13 = !0, i11 = i11.replace("_or_start", ""));
                                var r16, s13, l7, u8 = (r16 = e9, s13 = F2.scrollSceneManager.getScene, scene = r16 == window ? s13(document.body) || s13(document.documentElement) : s13(r16), scene && scene.st);
                                function d7() {
                                    return e9["client" + ("y" == f5 ? "Height" : "Width")];
                                }
                                switch(u8 ? (m5 = u8.pgInf, f5 = u8.pgHor ? "x" : "y") : c5.dir || (f5 = "h" == W(e9) ? "x" : "y"), i11){
                                    case "next":
                                    case "prev":
                                        a15 = J(null, e9, "x" == f5, "prev" == i11, !1, v5, u8, m5, void 0, !1, void 0, o13), h7[f5] = a15.px;
                                        break;
                                    case "first":
                                        a15 = J(null, e9, "x" == f5, !1, !1, v5, u8, m5, void 0, !1, 0), h7[f5] = a15.px;
                                        break;
                                    case "last":
                                        a15 = J(null, e9, "x" == f5, !1, !1, v5, u8, m5, void 0, !1, 9999), h7[f5] = a15.px;
                                        break;
                                    case "next_page":
                                    case "prev_page":
                                        a15 = J(null, e9, "x" == f5, ot(i11, "prev"), !1, v5, u8, m5, void 0, !0, void 0, o13), h7[f5] = a15.px;
                                        break;
                                    default:
                                        if ("string" != typeof i11) h7[f5] = i11;
                                        else {
                                            function p6() {
                                                var t11 = S(n14);
                                                return 4 < i11.length ? t11 = it(i11.substr(4)) : n14.hasAttribute("data-item-idx") && (t11 = it(n14.getAttribute("data-item-idx"))), t11;
                                            }
                                            if (ot(i11, "item")) {
                                                l7 = p6(), a15 = J(null, e9, "x" == f5, !1, !1, v5, u8, m5, void 0, !1, l7), h7[f5] = a15.px;
                                                break;
                                            }
                                            if (ot(i11, "page")) {
                                                l7 = p6(), a15 = J(null, e9, "x" == f5, !1, !1, v5, u8, m5, void 0, !0, l7), h7[f5] = a15.px;
                                                break;
                                            }
                                            h7[f5] = C2(i11, d7);
                                        }
                                }
                                return h7["offset" + f5.toUpperCase()] = "st" === _4 ? u8 ? u8.pgTopCover : 0 : P(_4, e9, n14, d7), h7;
                            }
                            !n13.length || "BODY" != n13[0].tagName && "HTML" != n13[0].tagName ? u7.scrollTo = e8 : (t9 = {
                                scrollTo: e8(0, n13[0])
                            }, a14.e && (t9.ease = A2(a14.e)), w5.add(gsap.to(window, o12, t9), i10));
                        },
                        pgPos: function(t9, e8) {
                            e8.target_element = y2, u7.pgPos = e8;
                        },
                        pgDom: function(t9, e8) {
                            e8.target_element = y2, u7.pgDom = e8, 0 == o12 && e8.clone && (n13 = tt(n13, 0).reverse());
                        },
                        "history.push": function(t9, e8) {
                            r15.push(function() {
                                n13.forEach(function(t10) {
                                    (e8 = P(e8, t10, y2(t10))) && history.pushState({
                                    }, "", e8);
                                });
                            });
                        },
                        attr: function(t9, a15) {
                            f2(a15, function(t10, e8) {
                                a15[t10] = p5(e8);
                            }), u7.attr = a15;
                        }
                    }, p5 = function(t9) {
                        if ("string" == typeof t9 && 0 <= t9.indexOf("${")) {
                            var n14 = t9;
                            return function(t10, e8, a15) {
                                return P(n14, e8, y2(e8));
                            };
                        }
                        return "object" == typeof t9 && null !== t9 && (t9.target_element = y2), t9;
                    }, d6["stroke-dasharray"] = d6["stroke-dashoffset"] = function(t9, n15) {
                        n15 = p5(n15), u7[t9] = function(t10, e8, a15) {
                            return "function" == typeof n15 && (n15 = n15(t10, e8, a15)), C2(n15, function() {
                                return e8.getTotalLength ? e8.getTotalLength() : 100;
                            });
                        };
                    }, f2(a14.l, function(t9, e8) {
                        d6[t9] || (e8 = p5(e8)), d6[t9] ? d6[t9](t9, e8) : u7[t9] = isNaN(e8) ? e8 : it(e8);
                    }), a14.e && (u7.ease = A2(a14.e)), l6.length && (u7.onUpdate = function(e8) {
                        l6.forEach(function(t9) {
                            t9(e8);
                        });
                    }, u7.onUpdateParams = [
                        "{self}"
                    ]), r15.length && (u7.onStart = function() {
                        r15.forEach(function(t9) {
                            t9();
                        });
                    }), s12.length && (u7.onComplete = function() {
                        s12.forEach(function(t9) {
                            t9();
                        });
                    }), n13.length && (0 == o12 ? w5.set(n13, u7, i10) : a14.s ? w5.staggerTo(n13, o12, u7, a14.s, i10) : w5.add(TweenLite.to(n13, o12, u7), i10)));
                });
            }), w5;
        };
    }, F2.animationPresets = new function() {
        var n13, i10, a14 = {
            pxBckImage: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    backgroundPositionY: "0%"
                }), e6.add(n13(t7, 1, {
                    ease: "Linear.easeNone",
                    backgroundPositionY: "100%"
                })), e6;
            },
            pxBckElement: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    scale: 1.1,
                    y: "-5%"
                }), e6.add(n13(t7, 1, {
                    ease: "Linear.easeNone",
                    y: "5%"
                })), e6;
            },
            pxFly: function(t7) {
                var e6 = i10();
                return e6.add(n13(t7, 1, {
                    ease: "Linear.easeNone",
                    y: "-100vh"
                })), e6;
            },
            bounce: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    y: 0
                }), e6.add(n13(t7, 0.2, {
                    ease: "Power3.easeOut",
                    y: 0
                })), e6.add(n13(t7, 0.2, {
                    y: -30
                })), e6.add(n13(t7, 0.03, {
                    y: -30
                })), e6.add(n13(t7, 0.13, {
                    ease: "Expo.easeIn",
                    y: 0
                })), e6.add(n13(t7, 0.17, {
                    y: -15
                })), e6.add(n13(t7, 0.1, {
                    y: 0
                })), e6.add(n13(t7, 0.1, {
                    y: -4
                })), e6.add(n13(t7, 0.1, {
                    y: 0
                })), e6;
            },
            flash: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1
                }), e6.add(n13(t7, 0.25, {
                    autoAlpha: 0
                })), e6.add(n13(t7, 0.25, {
                    autoAlpha: 1
                })), e6.add(n13(t7, 0.25, {
                    autoAlpha: 0
                })), e6.add(n13(t7, 0.25, {
                    autoAlpha: 1
                })), e6;
            },
            pulse: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    scale: 1
                }), e6.add(n13(t7, 0.5, {
                    scale: 1.05
                })), e6.add(n13(t7, 0.5, {
                    scale: 1
                })), e6;
            },
            rubberBand: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    scale: 1
                }), e6.add(n13(t7, 0.3, {
                    scaleX: 1.25,
                    scaleY: 0.75
                })), e6.add(n13(t7, 0.1, {
                    scaleX: 0.75,
                    scaleY: 1.25
                })), e6.add(n13(t7, 0.1, {
                    scaleX: 1.15,
                    scaleY: 0.85
                })), e6.add(n13(t7, 0.1 + 0.05, {
                    scaleX: 0.95,
                    scaleY: 1.05
                })), e6.add(n13(t7, 0.1, {
                    scaleX: 1.05,
                    scaleY: 0.95
                })), e6.add(n13(t7, 0.25, {
                    scaleX: 1,
                    scaleY: 1
                })), e6;
            },
            shake: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    x: 0
                }), e6.add(n13(t7, 0.1, {
                    x: -10
                })), e6.add(n13(t7, 0.1, {
                    x: 10
                })), e6.add(n13(t7, 0.1, {
                    x: -10
                })), e6.add(n13(t7, 0.1, {
                    x: 10
                })), e6.add(n13(t7, 0.1, {
                    x: -10
                })), e6.add(n13(t7, 0.1, {
                    x: 10
                })), e6.add(n13(t7, 0.1, {
                    x: -10
                })), e6.add(n13(t7, 0.1, {
                    x: 10
                })), e6.add(n13(t7, 0.1, {
                    x: -10
                })), e6.add(n13(t7, 0.1, {
                    x: 0
                })), e6;
            },
            headShake: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    x: 0,
                    rotateY: 0
                }), e6.add(n13(t7, 0.065, {
                    x: -6,
                    rotateY: -9
                })), e6.add(n13(t7, 0.1 + 0.02, {
                    x: 5,
                    rotateY: 7
                })), e6.add(n13(t7, 0.13, {
                    x: -3,
                    rotateY: -5
                })), e6.add(n13(t7, 0.1 + 0.02, {
                    x: 2,
                    rotateY: 3
                })), e6.add(n13(t7, 0.065, {
                    x: 0,
                    rotateY: 0
                })), e6.add(n13(t7, 0.065, {
                    x: 0,
                    rotateY: 0
                })), e6;
            },
            swing: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    rotation: 0
                }), e6.add(n13(t7, 0.2, {
                    rotation: 15
                })), e6.add(n13(t7, 0.2, {
                    rotation: -10
                })), e6.add(n13(t7, 0.2, {
                    rotation: 5
                })), e6.add(n13(t7, 0.2, {
                    rotation: -5
                })), e6.add(n13(t7, 0.2, {
                    rotation: 0
                })), e6;
            },
            tada: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    scale: 1,
                    rotation: 0
                }), e6.add(n13(t7, 0.1, {
                    scale: 0.9,
                    rotation: -3
                })), e6.add(n13(t7, 0.1, {
                    scale: 0.9,
                    rotation: -3
                })), e6.add(n13(t7, 0.1, {
                    scale: 1.1,
                    rotation: 3
                })), e6.add(n13(t7, 0.1, {
                    scale: 1.1,
                    rotation: -3
                })), e6.add(n13(t7, 0.1, {
                    scale: 1.1,
                    rotation: 3
                })), e6.add(n13(t7, 0.1, {
                    scale: 1.1,
                    rotation: -3
                })), e6.add(n13(t7, 0.1, {
                    scale: 1.1,
                    rotation: 3
                })), e6.add(n13(t7, 0.1, {
                    scale: 1.1,
                    rotation: -3
                })), e6.add(n13(t7, 0.1, {
                    scale: 1.1,
                    rotation: 3
                })), e6.add(n13(t7, 0.1, {
                    scale: 1,
                    rotation: 0
                })), e6;
            },
            wobble: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    x: 0,
                    rotation: 0
                }), e6.add(n13(t7, 0.15, {
                    x: "-25%",
                    rotation: -5
                })), e6.add(n13(t7, 0.15, {
                    x: "20%",
                    rotation: 3
                })), e6.add(n13(t7, 0.15, {
                    x: "-15%",
                    rotation: -3
                })), e6.add(n13(t7, 0.15, {
                    x: "10%",
                    rotation: 2
                })), e6.add(n13(t7, 0.15, {
                    x: "-5%",
                    rotation: -1
                })), e6.add(n13(t7, 0.25, {
                    x: "0%",
                    rotation: 0
                })), e6;
            },
            jello: function(t7) {
                var e6 = i10(), a15 = 0.111;
                return e6.set(t7, {
                    skewX: 0,
                    skewY: 0
                }), e6.add(n13(t7, a15, {
                    skewX: 0,
                    skewY: 0
                })), e6.add(n13(t7, a15, {
                    skewX: -12.5,
                    skewY: -12.5
                })), e6.add(n13(t7, a15, {
                    skewX: 6.25,
                    skewY: 6.25
                })), e6.add(n13(t7, a15, {
                    skewX: -3.125,
                    skewY: -3.125
                })), e6.add(n13(t7, a15, {
                    skewX: 1.5625,
                    skewY: 1.5625
                })), e6.add(n13(t7, a15, {
                    skewX: -0.78125,
                    skewY: -0.78125
                })), e6.add(n13(t7, a15, {
                    skewX: 0.390625,
                    skewY: 0.390625
                })), e6.add(n13(t7, a15, {
                    skewX: -0.1953125,
                    skewY: -0.1953125
                })), e6.add(n13(t7, 0.112, {
                    skewX: 0,
                    skewY: 0
                })), e6;
            },
            heartBeat: function(t7) {
                var e6 = i10(), a15 = "Power0.easeInOut";
                return e6.set(t7, {
                    scale: 1
                }), e6.add(n13(t7, 0.14, {
                    ease: a15,
                    scale: 1.3
                })), e6.add(n13(t7, 0.14, {
                    ease: a15,
                    scale: 1
                })), e6.add(n13(t7, 0.14, {
                    ease: a15,
                    scale: 1.3
                })), e6.add(n13(t7, 0.28, {
                    ease: a15,
                    scale: 1
                })), e6;
            },
            bounceIn: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    scale: 0.3
                }), e6.add(n13(t7, 0.2, {
                    scale: 1.1
                })), e6.add(n13(t7, 0.2, {
                    scale: 0.9
                })), e6.add(n13(t7, 0.2, {
                    scale: 1.03
                })), e6.add(n13(t7, 0.2, {
                    scale: 0.97
                })), e6.add(n13(t7, 0.2, {
                    scale: 1
                })), e6.add(n13(t7, 1, {
                    autoAlpha: 1
                }), "-=1"), e6;
            },
            bounceInDown: function(t7) {
                var e6 = i10();
                customEase = "Power3.easeOut";
                return e6.set(t7, {
                    autoAlpha: 0,
                    y: -3000
                }), e6.add(n13(t7, 0.6, {
                    ease: customEase,
                    y: 25,
                    autoAlpha: 1
                })), e6.add(n13(t7, 0.15, {
                    ease: customEase,
                    y: -10
                })), e6.add(n13(t7, 0.15, {
                    ease: customEase,
                    y: 5
                })), e6.add(n13(t7, 0.1, {
                    ease: customEase,
                    y: 0
                })), e6;
            },
            bounceInLeft: function(t7) {
                var e6 = i10();
                customEase = "Power3.easeOut";
                return e6.set(t7, {
                    autoAlpha: 0,
                    x: -3000
                }), e6.add(n13(t7, 0.6, {
                    ease: customEase,
                    x: 25,
                    autoAlpha: 1
                })), e6.add(n13(t7, 0.15, {
                    ease: customEase,
                    x: -10
                })), e6.add(n13(t7, 0.15, {
                    ease: customEase,
                    x: 5
                })), e6.add(n13(t7, 0.1, {
                    ease: customEase,
                    x: 0
                })), e6;
            },
            bounceInRight: function(t7) {
                var e6 = i10(), a15 = "Power3.easeOut";
                return e6.set(t7, {
                    autoAlpha: 0,
                    x: 3000
                }), e6.add(n13(t7, 0.6, {
                    ease: a15,
                    x: -25,
                    autoAlpha: 1
                })), e6.add(n13(t7, 0.15, {
                    ease: a15,
                    x: 10
                })), e6.add(n13(t7, 0.15, {
                    ease: a15,
                    x: -5
                })), e6.add(n13(t7, 0.1, {
                    ease: a15,
                    x: 0
                })), e6;
            },
            bounceInUp: function(t7) {
                var e6 = i10(), a15 = "Power3.easeOut";
                return e6.set(t7, {
                    autoAlpha: 0,
                    y: 3000
                }), e6.add(n13(t7, 0.6, {
                    ease: a15,
                    y: -20,
                    autoAlpha: 1
                })), e6.add(n13(t7, 0.15, {
                    ease: a15,
                    y: 10
                })), e6.add(n13(t7, 0.15, {
                    ease: a15,
                    y: -5
                })), e6.add(n13(t7, 0.1, {
                    ease: a15,
                    y: 0
                })), e6;
            },
            bounceOut: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    scale: 1
                }), e6.add(n13(t7, 0.2, {
                    scale: 0.9
                })), e6.add(n13(t7, 0.3, {
                    scale: 1.1,
                    autoAlpha: 1
                })), e6.add(n13(t7, 0.05, {
                    scale: 1.1,
                    autoAlpha: 1
                })), e6.add(n13(t7, 0.45, {
                    scale: 0.3,
                    autoAlpha: 0
                })), e6;
            },
            bounceOutDown: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    y: 0
                }), e6.add(n13(t7, 0.2, {
                    y: 10
                })), e6.add(n13(t7, 0.2, {
                    y: -20
                })), e6.add(n13(t7, 0.05, {
                    y: -20
                })), e6.add(n13(t7, 0.55, {
                    y: 2000
                })), e6;
            },
            bounceOutLeft: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    x: 0
                }), e6.add(n13(t7, 0.2, {
                    autoAlpha: 1,
                    x: 20
                })), e6.add(n13(t7, 0.8, {
                    autoAlpha: 0,
                    x: -2000
                })), e6;
            },
            bounceOutRight: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    x: 0
                }), e6.add(n13(t7, 0.2, {
                    autoAlpha: 1,
                    x: -20
                })), e6.add(n13(t7, 0.8, {
                    autoAlpha: 0,
                    x: 2000
                })), e6;
            },
            bounceOutUp: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    y: 0
                }), e6.add(n13(t7, 0.2, {
                    autoAlpha: 1,
                    y: -10
                })), e6.add(n13(t7, 0.2, {
                    autoAlpha: 1,
                    y: 20
                })), e6.add(n13(t7, 0.05, {
                    autoAlpha: 1,
                    y: 20
                })), e6.add(n13(t7, 0.55, {
                    autoAlpha: 0,
                    y: -2000
                })), e6;
            },
            fadeIn: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1
                })), e6;
            },
            fadeInDown: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    y: "-100%"
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    y: "0%"
                })), e6;
            },
            fadeInDownBig: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    y: -2000
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    y: 0
                })), e6;
            },
            fadeInLeft: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    x: "-100%"
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    x: "0%"
                })), e6;
            },
            fadeInLeftBig: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    x: -2000
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    x: 0
                })), e6;
            },
            fadeInRight: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    x: "100%"
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    x: "0%"
                })), e6;
            },
            fadeInRightBig: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    x: 2000
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    x: 0
                })), e6;
            },
            fadeInUp: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    y: "100%"
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    y: "0%"
                })), e6;
            },
            fadeInUpBig: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    y: 2000
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    y: 0
                })), e6;
            },
            fadeOut: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0
                })), e6;
            },
            fadeOutDown: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    y: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    y: "100%"
                })), e6;
            },
            fadeOutDownBig: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    y: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    y: 2000
                })), e6;
            },
            fadeOutLeft: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    x: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    x: "-100%"
                })), e6;
            },
            fadeOutLeftBig: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    x: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    x: -2000
                })), e6;
            },
            fadeOutRight: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    x: "100%"
                })), e6;
            },
            fadeOutRightBig: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    x: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    x: 2000
                })), e6;
            },
            fadeOutUp: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    y: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    y: "-100%"
                })), e6;
            },
            fadeOutUpBig: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    y: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    y: -2000
                })), e6;
            },
            flip: function(t7) {
                var e6 = i10(), a15 = "Power0.easeIn";
                return e6.set(t7, {
                    transformPerspective: 400,
                    scale: 1,
                    z: 0,
                    rotationY: -360
                }), e6.add(n13(t7, 0.4, {
                    ease: a15,
                    transformPerspective: 400,
                    scale: 1,
                    z: 150,
                    rotationY: -190
                })), e6.add(n13(t7, 0.1, {
                    ease: a15,
                    transformPerspective: 400,
                    scale: 1,
                    z: 150,
                    rotationY: -170
                })), e6.add(n13(t7, 0.3, {
                    ease: a15,
                    transformPerspective: 400,
                    scale: 0.95,
                    z: 150,
                    rotationY: 0
                })), e6.add(n13(t7, 0.2, {
                    ease: a15,
                    transformPerspective: 400,
                    scale: 1,
                    z: 0,
                    rotationY: 0
                })), e6;
            },
            flipInX: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    transformPerspective: 400,
                    rotationX: 90
                }), e6.add(n13(t7, 0.4, {
                    ease: "Power0.easeIn",
                    transformPerspective: 400,
                    rotationX: -20
                })), e6.add(n13(t7, 0.2, {
                    transformPerspective: 400,
                    rotationX: 10
                })), e6.add(n13(t7, 0.4 + 0.2, {
                    autoAlpha: 1
                }), "-=" + (0.4 + 0.2)), e6.add(n13(t7, 0.2, {
                    transformPerspective: 400,
                    rotationX: -5
                })), e6.add(n13(t7, 0.2, {
                    transformPerspective: 400,
                    rotationX: 0
                })), e6;
            },
            flipInY: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    transformPerspective: 400,
                    rotationY: 90
                }), e6.add(n13(t7, 0.4, {
                    ease: "Linear.easeIn",
                    transformPerspective: 400,
                    rotationY: -20
                })), e6.add(n13(t7, 0.2, {
                    transformPerspective: 400,
                    rotationY: 10
                })), e6.add(n13(t7, 0.4 + 0.2, {
                    autoAlpha: 1
                }), "-=" + (0.4 + 0.2)), e6.add(n13(t7, 0.2, {
                    transformPerspective: 400,
                    rotationY: -5
                })), e6.add(n13(t7, 0.2, {
                    transformPerspective: 400,
                    rotationY: 0
                })), e6;
            },
            flipOutX: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    transformPerspective: 400,
                    rotationX: 0
                }), e6.add(n13(t7, 0.3, {
                    autoAlpha: 1,
                    transformPerspective: 400,
                    rotationX: -20
                })), e6.add(n13(t7, 0.7, {
                    autoAlpha: 0,
                    transformPerspective: 400,
                    rotationX: 90
                })), e6;
            },
            flipOutY: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    transformPerspective: 400,
                    rotationY: 0
                }), e6.add(n13(t7, 0.3, {
                    autoAlpha: 1,
                    transformPerspective: 400,
                    rotationY: -20
                })), e6.add(n13(t7, 0.7, {
                    autoAlpha: 0,
                    transformPerspective: 400,
                    rotationY: 90
                })), e6;
            },
            lightSpeedIn: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    x: "100%",
                    skewX: -30
                }), e6.add(n13(t7, 0.6, {
                    autoAlpha: 1,
                    skewX: 20
                })), e6.add(n13(t7, 0.2, {
                    skewX: -5
                })), e6.add(n13(t7, 0.2, {
                    skewX: 0
                })), e6.add(n13(t7, 1, {
                    x: "0%"
                }), "-=1"), e6;
            },
            lightSpeedOut: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    x: 0,
                    skewX: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    x: "100%",
                    skewX: 30
                })), e6;
            },
            rotateIn: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    transformOrigin: "center",
                    rotationZ: 200
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    transformOrigin: "center",
                    rotationZ: 0
                })), e6;
            },
            rotateInDownLeft: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    transformOrigin: "left bottom",
                    rotationZ: -45
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    transformOrigin: "left bottom",
                    rotationZ: 0
                })), e6;
            },
            rotateInDownRight: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    transformOrigin: "right bottom",
                    rotationZ: 45
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    transformOrigin: "right bottom",
                    rotationZ: 0
                })), e6;
            },
            rotateInUpLeft: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    transformOrigin: "left bottom",
                    rotationZ: 45
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    transformOrigin: "left bottom",
                    rotationZ: 0
                })), e6;
            },
            rotateInUpRight: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    transformOrigin: "right bottom",
                    rotationZ: -90
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    transformOrigin: "right bottom",
                    rotationZ: 0
                })), e6;
            },
            rotateOut: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    transformOrigin: "center",
                    rotationZ: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    transformOrigin: "center",
                    rotationZ: 200
                })), e6;
            },
            rotateOutDownLeft: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    transformOrigin: "left bottom",
                    rotationZ: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    transformOrigin: "left bottom",
                    rotationZ: 45
                })), e6;
            },
            rotateOutDownRight: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    transformOrigin: "right bottom",
                    rotationZ: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    transformOrigin: "right bottom",
                    rotationZ: -45
                })), e6;
            },
            rotateOutUpLeft: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    transformOrigin: "left bottom",
                    rotationZ: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    transformOrigin: "left bottom",
                    rotationZ: -45
                })), e6;
            },
            rotateOutUpRight: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    transformOrigin: "right bottom",
                    rotationZ: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    transformOrigin: "right bottom",
                    rotationZ: 90
                })), e6;
            },
            slideInUp: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    y: "100%"
                }), e6.add(n13(t7, 0.1, {
                    autoAlpha: 1
                }), 0), e6.add(n13(t7, 1, {
                    y: "0%"
                }), 0), e6;
            },
            slideInDown: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    y: "-100%"
                }), e6.add(n13(t7, 0.1, {
                    autoAlpha: 1
                }), 0), e6.add(n13(t7, 1, {
                    y: "0%"
                }), 0), e6;
            },
            slideInLeft: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    x: "-100%"
                }), e6.add(n13(t7, 0.1, {
                    autoAlpha: 1
                }), 0), e6.add(n13(t7, 1, {
                    x: "0%"
                }), 0), e6;
            },
            slideInRight: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    x: "100%"
                }), e6.add(n13(t7, 0.1, {
                    autoAlpha: 1
                }), 0), e6.add(n13(t7, 1, {
                    x: "0%"
                }), 0), e6;
            },
            slideOutUp: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    y: "0%"
                }), e6.add(n13(t7, 0.9, {
                    y: "-100%"
                })), e6.add(n13(t7, 0.1, {
                    autoAlpha: 0
                })), e6;
            },
            slideOutDown: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    y: "0%"
                }), e6.add(n13(t7, 0.9, {
                    y: "100%"
                })), e6.add(n13(t7, 0.1, {
                    autoAlpha: 0
                })), e6;
            },
            slideOutLeft: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    x: "0%"
                }), e6.add(n13(t7, 0.9, {
                    x: "-100%"
                })), e6.add(n13(t7, 0.1, {
                    autoAlpha: 0
                })), e6;
            },
            slideOutRight: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    x: "0%"
                }), e6.add(n13(t7, 0.9, {
                    x: "100%"
                })), e6.add(n13(t7, 0.1, {
                    autoAlpha: 0
                })), e6;
            },
            zoomIn: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    scale: 0.3
                }), e6.add(n13(t7, 1, {
                    scale: 1
                })), e6.add(n13(t7, 0.5, {
                    autoAlpha: 1
                }), "-=1"), e6;
            },
            zoomInDown: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    scale: 0.1,
                    y: -150
                }), e6.add(n13(t7, 0.6, {
                    ease: "Power2.easeIn",
                    autoAlpha: 1,
                    scale: 0.475,
                    y: 60
                })), e6.add(n13(t7, 0.4, {
                    ease: "Power4.easeOut",
                    scale: 1,
                    y: 0
                })), e6;
            },
            zoomInLeft: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    scale: 0.1,
                    x: -300
                }), e6.add(n13(t7, 0.6, {
                    ease: "Power2.easeIn",
                    autoAlpha: 1,
                    scale: 0.475,
                    x: 10
                })), e6.add(n13(t7, 0.4, {
                    ease: "Power4.easeOut",
                    scale: 1,
                    x: 0
                })), e6;
            },
            zoomInRight: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    scale: 0.1,
                    x: 100
                }), e6.add(n13(t7, 0.6, {
                    ease: "Power2.easeIn",
                    autoAlpha: 1,
                    scale: 0.475,
                    x: -10
                })), e6.add(n13(t7, 0.4, {
                    ease: "Power4.easeOut",
                    scale: 1,
                    x: 0
                })), e6;
            },
            zoomInUp: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    scale: 0.1,
                    y: 150
                }), e6.add(n13(t7, 0.6, {
                    ease: "Power2.easeIn",
                    autoAlpha: 1,
                    scale: 0.475,
                    y: -60
                })), e6.add(n13(t7, 0.4, {
                    ease: "Power4.easeOut",
                    scale: 1,
                    y: 0
                })), e6;
            },
            zoomOut: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    scale: 1
                }), e6.add(n13(t7, 0.5, {
                    autoAlpha: 0,
                    scale: 0.3
                })), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    scale: 1
                })), e6;
            },
            zoomOutDown: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    scale: 1,
                    y: "0px"
                }), e6.add(n13(t7, 0.4, {
                    ease: "Power2.easeIn",
                    autoAlpha: 1,
                    scale: 0.475,
                    y: -28
                })), e6.add(n13(t7, 0.6, {
                    ease: "Power4.easeOut",
                    autoAlpha: 0,
                    scale: 0.1,
                    y: 500,
                    transformOrigin: "center bottom"
                })), e6;
            },
            zoomOutLeft: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0
                }), e6.add(n13(t7, 0.4, {
                    autoAlpha: 1,
                    scale: 0.475,
                    x: 42
                })), e6.add(n13(t7, 0.6, {
                    autoAlpha: 0,
                    scale: 0.1,
                    x: -300,
                    transformOrigin: "left center"
                })), e6;
            },
            zoomOutRight: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0
                }), e6.add(n13(t7, 0.4, {
                    autoAlpha: 1,
                    scale: 0.475,
                    x: -42
                })), e6.add(n13(t7, 0.6, {
                    autoAlpha: 0,
                    scale: 0.1,
                    x: 250,
                    transformOrigin: "right center"
                })), e6;
            },
            zoomOutUp: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    scale: 1,
                    y: 0
                }), e6.add(n13(t7, 0.4, {
                    ease: "Power2.easeIn",
                    autoAlpha: 1,
                    scale: 0.475,
                    y: 28
                })), e6.add(n13(t7, 0.6, {
                    ease: "Power4.easeOut",
                    autoAlpha: 0,
                    scale: 0.1,
                    y: -500,
                    transformOrigin: "center bottom"
                })), e6;
            },
            hinge: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    transformOrigin: "top left"
                }), e6.add(n13(t7, 0.2, {
                    rotation: 80,
                    transformOrigin: "top left",
                    ease: "Linear.easeInOut"
                })), e6.add(n13(t7, 0.2, {
                    rotation: 60,
                    transformOrigin: "top left",
                    ease: "Linear.easeInOut"
                })), e6.add(n13(t7, 0.2, {
                    rotation: 80,
                    transformOrigin: "top left",
                    ease: "Linear.easeInOut"
                })), e6.add(n13(t7, 0.2, {
                    autoAlpha: 1,
                    rotation: 60,
                    transformOrigin: "top left",
                    ease: "Linear.easeInOut"
                })), e6.add(n13(t7, 0.2, {
                    autoAlpha: 0,
                    rotation: 0,
                    y: "700px"
                })), e6;
            },
            jackInTheBox: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    scale: 0.1,
                    rotation: 30
                }), e6.add(n13(t7, 0.5, {
                    rotation: -10
                })), e6.add(n13(t7, 0.2, {
                    rotation: 3
                })), e6.add(n13(t7, 0.3, {
                    rotation: 0
                })), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    scale: 1
                }), "-=1"), e6;
            },
            rollIn: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 0,
                    x: "-100%",
                    rotation: -120
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 1,
                    x: "0%",
                    rotation: 0
                })), e6;
            },
            rollOut: function(t7) {
                var e6 = i10();
                return e6.set(t7, {
                    autoAlpha: 1,
                    x: "0%",
                    rotationZ: 0
                }), e6.add(n13(t7, 1, {
                    autoAlpha: 0,
                    x: "100%",
                    rotation: 120
                })), e6;
            }
        };
        this.getTimeline = function(t7, e6) {
            return n13 || (n13 = TweenLite.to, i10 = function() {
                return gsap.timeline({
                    paused: !0
                });
            }), a14[t7] ? a14[t7](e6) : null;
        };
    }, F2.namedAnimations = {
    }, at = function(t7, e6) {
        t7 !== e6 && (F2.namedAnimations[t7] = e6);
    }, nt = F2.getAnimationTimeline = function(t7, e6) {
        if ("string" == typeof t7 && F2.namedAnimations[t7] && (t7 = F2.namedAnimations[t7]), "string" != typeof t7) return (new g3).getTimeline(t7 || {
        }, e6);
        e6 = F2.animationPresets.getTimeline(t7, e6);
        return e6 || (j2("Named animation not found: " + t7), e6 = gsap.timeline({
        })), e6;
    }, (m3 = function(t7, e6, a14, n13) {
        var i10 = this;
        this.data = a14, this.index = e6, this.parent = n13, this.event = a14.trg || "", this.touchEvent = null, this.element = t7, this.targets = [], this.timeline = null, this.delayTimer = null, this.mouseMoveMeasure = a14.mm_a || "x", this.restAt = 0.5, this.restart = "true" === a14.rstr, this.pauseOther = "true" === a14.po, this.reset = "true" === a14.rst, this.reverse = "true" === a14.rev, this.toggRev = "true" === a14.trev, this.disabled = G2(a14), this.interval = null, this.softDelay = "soft" in a14 ? $2(null, a14.soft) : 0.5, this.keys = a14.keys ? a14.keys.split(/\s*,\s*/) : [], this.name = a14.name ? (a14.name + "").toLowerCase() : null, this.trigC = 0, this._etce = null, this._playBind = this.play.bind(this), this._playScrollBind = this.playScroll.bind(this), this._playMouseMoveBind = this.playMouseMove.bind(this), this._playScrubBind = this.playScrub.bind(this), this._restBind = this.rest.bind(this), a14.name && a14.a && at(a14.name, a14.a);
        var o12 = !1, r15 = !0;
        switch(0 < this.event.indexOf("_notouch") && (this.event = this.event.replace("_notouch", ""), r15 = !1), ot(this.event, "swipe") && (this.swipe = {
            dir: this.event.replace("swipe_", "")
        }, this.event = "swipe"), this.event){
            case "now":
                F2.elementAnimationsManager.play_list.push(this), o12 = !0;
                break;
            case "no":
                o12 = !0;
                break;
            case "DOMContentLoaded":
            case "load":
            case "resize":
            case "popstate":
                window.addEventListener(this.event, this._playBind, !1), o12 = !0;
                break;
            case "timer":
                this.interval = setInterval(this._playBind, 1000 * $2(null, a14.timer || 1)), o12 = !0;
                break;
            case "mousemove":
            case "touchmove":
                "run" === this.mouseMoveMeasure ? this.touchEvent = "touchmove" : (t7.addEventListener(this.event, this._playMouseMoveBind, !1), t7.addEventListener("touchmove", this._playMouseMoveBind, !!a14.pdef && {
                    passive: !1
                }), this.data.mm_r && (t7.addEventListener("mouseleave", this._restBind, !1), t7.addEventListener("touchend", this._restBind, !1), this.restAt = parseFloat(this.data.mm_r) + "%", this.seek(this.restAt)), o12 = !0);
                break;
            case "input_scrub":
                this.smin = it("is_min" in a14 ? a14.is_min : t7.min || 0), this.smax = it("is_max" in a14 ? a14.is_max : t7.max || 100), t7.addEventListener("input", this._playScrubBind, !1), o12 = !0;
                break;
            case "swipe":
                s4(t7).add(this.swipe.dir, 0, 0, this._playBind, function() {
                    return !!a14.pdef && i10._etc();
                });
                break;
            case "mouseenter":
            case "mousedown":
                r15 && (this.touchEvent = "touchstart");
                break;
            case "mouseleave":
            case "mouseup":
                r15 && (this.touchEvent = "touchend");
                break;
            case "scrolling":
                window.addEventListener("scroll", this._playScrollBind, !1), o12 = !0;
        }
        o12 || (t7.addEventListener(this.event.replace("res_", ""), this._playBind, !(!ot(this.event, "touch") || !a14.pdef) && {
            passive: !1
        }), this.touchEvent && t7.addEventListener(this.touchEvent, this._playBind, !("touchmove" != this.touchEvent || !a14.pdef) && {
            passive: !1
        }));
    }).prototype._etc = function() {
        var t7 = this._etce;
        if (this.data.tc && t7) {
            var e6 = this.data.tcv || null, a14 = this.data.tca || "a";
            switch(this.data.tc){
                case "class":
                    return t7.classList.contains(e6);
                case "no-class":
                    return !t7.classList.contains(e6);
                case "attr":
                    return t7.getAttribute(a14) == e6;
                case "no-attr":
                    return t7.getAttribute(a14) != e6;
            }
        }
        return !0;
    }, m3.prototype.create = function() {
        var t7, e7 = this;
        this.timeline = null;
        var a15 = this.data;
        this.targets = a15.t ? Q(this.element, a15.t) : [
            this.element
        ], (t7 = this.targets.length ? (n13 = this.targets, this._etce = n13[0], nt(a15.a, n13)) : gsap.timeline({
        })).pause();
        var n13 = parseInt(a15.rpt || 1);
        return 1 !== n13 && t7.repeat(1 < n13 ? n13 - 1 : n13), this.data.d && t7.duration($2(t7, a15.d)), this.timeline = t7, q2 && (t7._pg_animation_id = V.getAnimationId(this.element, "animation_" + this.index), t7.eventCallback("onUpdate", function() {
            V.updateProgress(this._pg_animation_id, this.time(), this.progress());
        })), this.reset && t7.eventCallback("onComplete", function() {
            e7.seek(e7.reverse ? "100%" : 0, !1, !1);
        }), t7.eventCallback("onRepeat", function() {
        }), t7;
    }, m3.prototype.getTimeline = function() {
        return this.timeline || this.create();
    }, m3.prototype.recreate = function() {
        this.timeline && (this.timeline.kill(), this.timeline = null);
    }, m3.prototype.play = function(t7, e7) {
        var a15, n13, i10, o12, r15 = this;
        G2(this.data) || (this.data.rcr && this.recreate(), a15 = this.getTimeline(), this._etc() && (t7 && ot(t7.type, "key") && this.keys.indexOf(" " == t7.key ? "Spacebar" : t7.key) < 0 || (r15.data.pdef && t7 && t7.preventDefault(), r15.data.sprop && t7 && t7.stopPropagation(), n13 = this.reverse || e7, r15.toggRev && ((r15.trigC++) % 2 == 1 && (n13 = !n13), a15.timeScale(n13 ? et(r15.data, "spdrev", 100) / 100 : 1)), e7 = n13 ? a15.duration() : 0, i10 = (a15._pg_req_inv || this.restart) && !r15.data.noinv, o12 = !this.restart && (n13 ? 0 < a15.progress() : a15.progress() < 1) ? null : 0, this.delayTimer && clearTimeout(this.delayTimer), this.pauseOther && (r15 = et(r15.data, "pol", ""), this.parent.pauseOther(this, r15 ? r15.split(/\s?,\s?/) : []), i10 = !0), a15.time() !== e7 && o12 !== e7 || !this.data.dly ? (i10 && a15.invalidate(), n13 ? a15.reverse(o12) : a15.play(o12)) : this.delayTimer = setTimeout(function() {
            i10 && a15.invalidate(), n13 ? a15.reverse(o12) : a15.play(o12);
        }, 1000 * $2(a15, this.data.dly)))));
    }, m3.prototype.playMouseMove = function(t7) {
        if (!G2(this.data)) {
            var e7 = this.getTimeline();
            if (this._etc()) {
                this.data.pdef && t7.preventDefault(), this.data.sprop && t7.stopPropagation();
                var a15, n13 = this.element.getBoundingClientRect(), i10 = ot(t7.type, "touch") ? (a15 = t7.targetTouches[0].pageX, t7.targetTouches[0].pageY) : (a15 = t7.pageX, t7.pageY), o12 = 0, r15 = window.pageXOffset, s12 = window.pageYOffset;
                switch(this.mouseMoveMeasure){
                    case "x":
                        0 < n13.width && (o12 = (a15 - r15 - n13.left) / n13.width);
                        break;
                    case "y":
                        0 < n13.height && (o12 = (i10 - s12 - n13.top) / n13.height);
                        break;
                    case "d_c":
                        var l6, u7, d6 = Math.sqrt(Math.pow(n13.width / 2, 2) + Math.pow(n13.height / 2, 2));
                        0 < d6 && (l6 = a15 - r15 - n13.left - n13.width / 2, u7 = i10 - s12 - n13.top - n13.height / 2, o12 = Math.sqrt(l6 * l6 + u7 * u7) / d6);
                }
                this.softSeek(e7.duration() * o12, this.softDelay);
            }
        }
    }, m3.prototype.playScrub = function(t7) {
        var e8, a16, n15;
        G2(this.data) || (e8 = this.getTimeline(), this._etc() && (this.data.pdef && t7.preventDefault(), this.data.sprop && t7.stopPropagation(), n15 = it((a16 = t7.target).value, 0), t7 = 0, t7 = "checkbox" == a16.type ? a16.checked ? 1 : 0 : (X(n15, this.smin, this.smax) - this.smin) / (this.smax - this.smin), this.softSeek(e8.duration() * t7, this.softDelay)));
    }, m3.prototype.playScroll = function(t7) {
        var e8, a16;
        G2(this.data) || (e8 = this.getTimeline(), this._etc() && (a16 = X(window.pageYOffset / (document.body.offsetHeight - window.innerHeight), 0, 1), this.softSeek(e8.duration() * a16, this.softDelay)));
    }, m3.prototype.seek = function(t7, e8, a16) {
        var n15;
        G2(this.data) || (n15 = this.getTimeline(), t7 = Math.max(0, $2(n15, t7)), e8 && 1 === n15.progress() && (t7 = 0), this.delayTimer && clearTimeout(this.delayTimer), e8 ? n15.play(t7) : n15.pause(t7, a16));
    }, m3.prototype.pause = function() {
        this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null), this.timeline && this.timeline.pause();
    }, m3.prototype.softSeek = function(t7, e8) {
        var a16 = this.getTimeline();
        a16._pg_seek_tween && a16._pg_seek_tween.kill(), a16.paused() || a16.pause(), 0 === e8 ? a16.seek(t7) : a16._pg_seek_tween = TweenMax.to(a16, e8, {
            time: t7
        });
    }, m3.prototype.rest = function(t7) {
        var e8 = this.getTimeline();
        e8._pg_seek_tween && e8._pg_seek_tween.kill(), this.softSeek($2(e8, this.restAt), this.softDelay);
    }, m3.prototype.refresh = function(t7) {
        this.data = t7, this.delayTimer && clearTimeout(this.delayTimer), this.interval && clearInterval(this.interval);
        var e8 = this.timeline, t7 = 0;
        e8 && (e8._pg_seek_tween && e8._pg_seek_tween.kill(), t7 = e8.time(), e8.seek(0), e8.kill()), this.create(), 0 < t7 && this.timeline.pause(t7);
    }, m3.prototype.destroy = function() {
        switch(this.event){
            case "now":
            case "timer":
            case "no":
                break;
            case "load":
            case "DOMContentLoaded":
            case "resize":
            case "popstate":
                window.removeEventListener(this.event, this._playBind);
                break;
            case "mousemove":
            case "touchmove":
                "run" === this.mouseMoveMeasure ? this.element.removeEventListener(this.event, this._playBind) : (this.element.removeEventListener(this.event, this._playMouseMoveBind), this.element.removeEventListener("touchmove", this._playMouseMoveBind), this.data.mm_r && (this.element.removeEventListener("mouseleave", this._restBind), this.element.removeEventListener("touchend", this._restBind)));
                break;
            case "input_scrub":
                this.element.removeEventListener("input", this._playScrubBind), done = !0;
                break;
            case "swipe":
                s4(this.element).remove(this.swipe.dir, this._playBind);
                break;
            case "scrolling":
                window.removeEventListener("scroll", this._playScrollBind);
                break;
            default:
                this.element.removeEventListener(this.event.replace("res_", ""), this._playBind);
        }
        this.touchEvent && this.element.removeEventListener(this.touchEvent, this._playBind), this.delayTimer && clearTimeout(this.delayTimer), this.interval && clearInterval(this.interval), this.timeline && (this.timeline.pause(0), this.timeline._pg_seek_tween && this.timeline._pg_seek_tween.kill());
    }, (v3 = function(t7, e8, a16) {
        if (this.element = t7, this.animations = [], this.named = {
        }, e8 && e8.l) {
            for(var n15 = 0; n15 < e8.l.length; n15++){
                var i11 = e8.l[n15].name || "";
                i11 && "object" == typeof e8.l[n15].a && (this.named[i11] = {
                    u: [],
                    a: e8.l[n15].a
                });
            }
            for(n15 = 0; n15 < e8.l.length; n15++)"string" == typeof e8.l[n15].a && this.named[e8.l[n15].a] && (this.named[e8.l[n15].a].u.push(n15), e8.l[n15].a = this.named[e8.l[n15].a].a), this.animations.push(new m3(t7, n15, e8.l[n15], this));
        }
    }).prototype.find = function(t7, e8) {
        var a16;
        if (isNaN(t7)) {
            var n16 = this.animations;
            t7 = (t7 + "").toLowerCase();
            for(var i12 = 0; i12 < n16.length; i12++)if (t7 == n16[i12].name) {
                a16 = i12;
                break;
            }
        } else a16 = parseInt(t7), e8 && a16--;
        return this.animations[a16] || null;
    }, v3.prototype.play = function(t7, e8) {
        t7 = this.find(t7);
        t7 && t7.play(null, e8);
    }, v3.prototype.seek = function(t7, e8, a16) {
        t7 = this.find(t7);
        t7 && t7.seek(e8, a16);
    }, v3.prototype.refresh = function(n17, t7, e8) {
        var a16 = t7.l[n17];
        if (a16.name && at(a16.name, a16.a), !e8 && a16.name && "object" == typeof a16.a) {
            this.named[a16.name] || (this.named[a16.name] = {
                u: []
            }), this.named[a16.name].a = a16.a;
            for(var i13 = 0; i13 < this.named[a16.name].u.length; i13++)this.refresh(this.named[a16.name].u[i13], t7, !0);
        }
        f2(this.named, function(t8, e9) {
            var a17 = e9.u.indexOf(n17);
            0 <= a17 && e9.u.splice(a17, 1);
        }), "string" == typeof a16.a && this.named[a16.a] && (this.named[a16.a].u.push(n17), a16.a = this.named[a16.a].a);
        e8 = this.find(n17);
        e8 && e8.refresh(a16);
    }, v3.prototype.getData = function(t7, e8) {
        t7 = this.find(t7);
        return t7 && e8 !== t7 ? t7.data : null;
    }, v3.prototype.pauseOther = function(e8, a16) {
        a16 = a16.map(function(t7) {
            return t7.toLowerCase();
        });
        var n17 = 1;
        this.animations.forEach(function(t7) {
            (t7 !== e8 && (!a16.length || 0 <= a16.indexOf(n17 + "")) || t7.name && 0 <= a16.indexOf(t7.name)) && t7.pause(), n17++;
        });
    }, v3.prototype.destroy = function(t7) {
        this.animations.forEach(function(t8) {
            t8.destroy();
        });
    }, F2.play = function(n17, t7, e8) {
        e8 && !n17._pg_animations && (n17._pg_animations = new v3(n17, e8)), n17._pg_animations && U(t7, function(t8, e9) {
            var a16 = n17._pg_animations.find(t8, !0);
            !a16 && F2.namedAnimations[t8] && (t8 = {
                name: t8,
                trg: "no",
                a: F2.namedAnimations[t8]
            }, a16 = new m3(n17, n17._pg_animations.animations.length, t8, n17._pg_animations), n17._pg_animations.animations.push(a16)), a16 && a16.play(null, e9);
        });
    }, F2.pause = function(a16, t7, n17) {
        a16._pg_animations && U(t7, function(t8, e8) {
            t8 = a16._pg_animations.find(t8, !0);
            t8 && t8.timeline !== n17 && t8.pause();
        });
    }, F2.seek = function(a16, t7, n17, i14) {
        a16._pg_animations && U(t7, function(t8, e8) {
            t8 = a16._pg_animations.find(t8, !0);
            t8 && t8.seek(n17, (void 0) === i14 || i14);
        });
    }, F2.recreate = function(a16, t7) {
        a16._pg_animations && U(t7, function(t8, e8) {
            t8 = a16._pg_animations.find(t8, !0);
            t8 && t8.recreate();
        });
    }, _2 = "data-pg-ia-apply", y = [
        "data-pg-ia",
        "data-pg-ia-scene",
        "data-pg-ia-hide",
        "data-pg-ia-show",
        "data-pg-ia-smooth-scroll"
    ], w3 = function(a16) {
        var t7 = a16.getAttribute(_2);
        if (t7 && "this" !== t7) try {
            var n17 = [];
            y.forEach(function(t8) {
                var e8;
                a16.hasAttribute(t8) && (e8 = a16.getAttribute(t8) || "", n17.push({
                    a: t8,
                    v: e8,
                    d: I2(e8)
                }));
            }), K2(Q(a16, t7), function(e8) {
                a16 != e8 && n17.forEach(function(t8) {
                    e8.hasAttribute(t8.a) ? "data-pg-ia" == t8.a && N(e8, t8.a, t8) : e8.setAttribute(t8.a, t8.v);
                });
            });
        } catch (t8) {
            j2(t8);
        }
    }, K2(document.querySelectorAll("[" + _2 + "]"), w3), F2.applyToMany = function(t7) {
        t7.hasAttribute(_2) && w3(t7), K2(t7.querySelectorAll("[" + _2 + "]"), w3);
    }, b3 = [], x3 = window._pg_add_to_source_funcs = [], F2.add = function(e8, t7, i14) {
        var o13 = {
        }, r16 = q2 && window._pg_add_to_source, t7 = t7 ? Q(document, t7) : [
            document
        ];
        K2(t7, function(t8) {
            K2(Q(t8, e8), function(t9) {
                for(var e9 in i14)if (i14.hasOwnProperty(e9)) {
                    o13[e9] = o13[e9] || I2(i14[e9]);
                    var a16 = "data-pg-ia";
                    if ("interactions" === e9) {
                        var n17 = t9.getAttribute(a16);
                        if (n17) {
                            N(t9, a16, o13[e9], n17), r16 && x3.push(function() {
                                N(window._pg_animation_phone.getPgel(t9), a16, o13[e9], n17);
                            });
                            continue;
                        }
                    } else a16 += "-" + e9;
                    r16 && x3.push(function() {
                        window._pg_animation_phone.getPgel(t9).setAttribute(a16, i14[e9]);
                    }), t9.setAttribute(a16, i14[e9]);
                }
                b3.push(function() {
                    i14.interactions && F2.elementAnimationsManager.refreshAnimations(t9), i14.scene && F2.scrollSceneManager.createScene(t9), i14["smooth-scroll"] && F2.smoothScrollManager && F2.smoothScrollManager.create(t9);
                });
            });
        });
    }, F2.update = function() {
        b3.forEach(function(t7) {
            t7();
        }), b3 = [];
    }, F2.elementAnimationsManager = new function() {
        var a17 = this, n18 = (this.play_list = [], false);
        function i14() {
            var t7 = a17.play_list;
            a17.play_list = [], t7.forEach(function(t8) {
                try {
                    t8.play();
                } catch (t9) {
                }
            });
        }
        function o13(t7, e8) {
            K2(t7.querySelectorAll("[data-pg-ia]"), e8);
        }
        function r16(t7) {
            try {
                var e8 = t7.getAttribute("data-pg-ia");
                e8 && (e8 = JSON.parse(rt(e8)), t7._pg_animations = new v3(t7, e8), !n18 && 0 < a17.play_list.length && i14());
            } catch (t8) {
                j2(t8);
            }
        }
        this.seek = function(t7, e8, a18, n19) {
            t7 && t7._pg_animations && t7._pg_animations.seek(e8, a18, n19);
        }, this.refreshCustomAnimation = function(t7, e8) {
            var a18;
            t7._pg_animations && (a18 = JSON.parse(rt(t7.getAttribute("data-pg-ia"))), t7._pg_animations.refresh(e8, a18));
        }, this.refreshAnimations = function(t7, e8) {
            a17.destroyAnimations(t7), r16(t7), e8 && o13(t7, a17.refreshAnimations);
        }, this.destroyAnimations = function(t7, e8) {
            t7._pg_animations && t7._pg_animations.destroy(), e8 && o13(t7, a17.destroyAnimations);
        }, this.init = function() {
            n18 = !0, o13(document, r16), n18 = !1, i14();
        };
    }, F2.elementAnimationsManager.init(), k2 = function(D3, t7) {
        var X1, R3, H3, U1 = this, z2 = [], s13 = -1, Z2 = !1;
        this.destroy = function() {
            Z2 || (R3 && (R3._pg_seek_tween && R3._pg_seek_tween.kill(), R3.pause(0), R3.kill()), H3 && H3.kill(), z2.forEach(function(t8) {
                t8.tl && (t8.tl.pause(0), t8.tl.kill());
            }), z2 = [], X1.kill(), X1 = null);
        }, this.create = function() {
            var n18;
            try {
                n18 = JSON.parse(rt(D3.getAttribute("data-pg-ia-scene") || "{}"));
            } catch (t8) {
                return void j2(t8);
            }
            if (!(Z2 = G2(n18))) {
                var t8 = function(t9) {
                    return ot(t9 += "", "-") ? "-=" + t9.substr(1) : "+=" + t9;
                };
                n18.s = n18.s || "auto", n18.dir = n18.dir || "a", n18.pin && "onEnter" == n18.s && (n18.s = "onLeave");
                var e8, a17, i14 = D3, o13 = null;
                "auto" === n18.s ? (e8 = "start end", a17 = "start start") : "custom" === n18.s ? (e8 = n18.s_t || "top", e8 += " " + (n18.s_s || "top"), n18.s_o && (e8 += t8(n18.s_o)), a17 = n18.e_t || "", a17 = (a17 += " " + (n18.e_s || "")).trim(), n18.e_o && (a17 += t8(n18.e_o)), n18.s_scroller && (o13 = Q(D3, n18.s_scroller)[0])) : "whole" === n18.s ? (o13 = D3, i14 = null, e8 = 0) : (e8 = ({
                    onEnter: {
                        s: "start end",
                        e: ""
                    },
                    onCenter: {
                        s: "start center",
                        e: ""
                    },
                    onLeave: {
                        s: "start start",
                        e: ""
                    }
                })[n18.s].s, a17 = "+=" + (n18.d || "200%"), n18.o && (u8 = ot(u8 = n18.o + "", "-") ? u8.substr(1) : "-" + u8, e8 += t8(u8))), o13 || (l7 = i14.parentNode) && (("a" == n18.dir || "h" == n18.dir) && l7.scrollWidth > l7.clientWidth || ("a" == n18.dir || "v" == n18.dir) && l7.scrollHeight > l7.clientHeight) && (o13 = l7), o13 != document.body && o13 != document.documentElement || (o13 = null);
                var r16 = $2(null, n18.smooth, 0.5);
                0 === r16 ? r16 = !0 : (void 0) === r16 && (r16 = 0.5), "a" == n18.dir && (n18.dir = W(o13));
                var s14 = "h" == n18.dir, t8 = function(t9) {
                    return "string" == typeof t9 && (t9 = s14 ? t9.replace(/start/g, "left").replace(/end/g, "right") : t9.replace(/start/g, "top").replace(/end/g, "bottom")), t9;
                };
                e8 = t8(e8), a17 = t8(a17);
                var l7, u8 = !1;
                (n18.snap || "").length && (u8 = "e" == n18.snap ? {
                    snapTo: function(t9, e9) {
                        return 1 == e9.progress ? 1 : J(null, e9.scroller, s14, k5 < 0, !0, n18.snap_sel || null, e9, !1).p - e9.pgTopCover / (e9.end - e9.start);
                    }
                } : {
                    snapTo: n18.snap.split(",").map(it)
                }, l7 = $2(null, n18.snap_dur || 0), t8 = $2(null, n18.snap_durmax || 0), l7 && (u8.duration = 0 < t8 ? {
                    min: l7,
                    max: t8
                } : l7), (l7 = $2(null, n18.snap_del || (!0 !== r16 ? r16 + 0.1 : 0.3))) && (u8.delay = l7), !0 !== r16 && l7 < r16 && (j2("Scroll scene smoothing delay " + r16 + " should not be longer than snap delay " + l7 + "! Adjusting..."), u8.delay = r16 + 0.1), n18.snap_ease && (u8.ease = n18.snap_ease));
                var d7, p5, c4, h6, f5, g4, m5, v5, _4, y2, w5, A4, b7, x7, k5 = 0, r16 = {
                    trigger: i14,
                    start: function() {
                        return e8;
                    },
                    endTrigger: Q(i14, n18.e_target)[0],
                    end: a17,
                    pin: !!n18.pin && (Q(D3, n18.pint)[0] || D3),
                    scrub: r16,
                    horizontal: s14,
                    markers: !!n18.dbg && (q2 || D3.hasAttribute("data-pgia-show-markers")),
                    snap: u8,
                    onRefresh: function(t9) {
                        x7 && b7() && x7(X1);
                    },
                    onUpdate: function(t9) {
                        x7 && x7(t9);
                    },
                    onSnapComplete: function(t9) {
                        U1.inf && 1 == t9.progress && t9.scroll(0);
                    },
                    onEnter: function(t9) {
                        O3.call(R3);
                    }
                };
                o13 && (r16.scroller = o13), r16.pin && (n18.pin_type && (r16.pinType = n18.pin_type), n18.pin_body && (r16.pinReparent = !0), "auto" == (u8 = n18.pin_spc || "auto") ? "flex" != (o13 = window.getComputedStyle(r16.pin.parentNode)).display && "absolute" != o13.position || (u8 = "margin") : "false" == u8 && (u8 = !1), "auto" != u8 && "padding" != u8 && (r16.pinSpacing = u8)), this.inf = n18.pag_inf || !1, n18.pag && (f5 = h6 = null, g4 = "p" == n18.pag, m5 = s14 ? "width" : "height", v5 = s14 ? "left" : "top", y2 = n18.pag_clone, A4 = 1000 * $2(w5 = null, et(n18, "pag_delay", 0.1)), b7 = function() {
                    c4 = st(D3, n18.pag_t), _4 = Math.floor(c4["ps" + m5] / c4.p[m5]), d7 = Q(D3, n18.pag_t), p5 = Q(D3, n18.pag_i);
                    var t9, e9 = g4 ? _4 : d7.length;
                    U1.inf && e9--, y2 && (null === w5 && (w5 = p5[0].outerHTML), e9 < (t9 = p5.length) ? gsap.set(tt(p5, e9, t9), {
                        pgDom: {
                            remove: !0
                        }
                    }) : t9 < e9 && gsap.set(p5[0], {
                        pgDom: {
                            template: w5,
                            count: e9 - t9
                        }
                    }), p5 = Q(D3, n18.pag_i));
                    var a18 = 0;
                    return K2(p5, function(t10) {
                        t10.setAttribute("data-item-idx", a18++);
                    }), !0;
                }, x7 = function(e9) {
                    e9.getVelocity(), f5 = f5 || setTimeout(function() {
                        var t9;
                        f5 = null, X1 && (t9 = st(D3, n18.pag_t, !0), t9 = g4 ? Math.floor(t9["sp" + v5] / t9.p[m5]) : J(c4, null, s14, "c", !0, null, e9).idx, U1.inf && t9 >= (g4 ? _4 - 1 : p5.length) && (t9 = 0), t9 = p5[t9], h6 != t9 && (n18.pag_pd && h6 && F2.play(h6, n18.pag_pd), n18.pag_pa && t9 && F2.play(t9, n18.pag_pa), h6 = t9));
                    }, A4);
                });
                var O3 = function(t9) {
                    var e9 = (t9 = this.pgPinScrollTrigger || this.scrollTrigger).getVelocity();
                    0 !== e9 && (k5 = e9), U1.seek(this.progress(), t9.direction, 0), Y3 && (t9 = this.progress(), V.updateProgress(Y3, t9, t9));
                };
                r16.pin ? (H3 = gsap.timeline({
                    scrollTrigger: r16,
                    onUpdate: function() {
                        var t9 = this.progress() * R3.duration();
                        t9 < 0.001 && (t9 = 0), R3.seek(t9, !1);
                    }
                }), R3 = gsap.timeline({
                    onUpdate: O3
                }), X1 = R3.pgPinScrollTrigger = H3.scrollTrigger, H3.to({
                }, 100, {
                }, 0), R3.pause(), gsap.globalTimeline.add(R3)) : (R3 = gsap.timeline({
                    scrollTrigger: r16,
                    onUpdate: O3
                }), X1 = R3.scrollTrigger), this.st = X1, this.st.pgInf = this.inf, this.st.pgHor = s14, X1.pgTopCover = et(n18, "pag_tc", 0), X1.pgBottomCover = et(n18, "pag_bc", 0), R3.to({
                }, 100, {
                }, 0), z2 = [];
                var E4 = n18.l;
                if (E4 && 0 < E4.length) for(var T6 = 0; T6 < E4.length; T6++){
                    var L4, M2, S2, P2, C4, I4, N2, B3 = E4[T6];
                    G2(B3) ? z2.push({
                        disabled: !0
                    }) : (L4 = Q(D3, B3.t), M2 = nt(B3.a, L4), B3.name && at(B3.name, B3.a), M2 && (P2 = -1, C4 = (S2 = 0, true), I4 = 0, M2._pg_animation_id = q2 ? V.getAnimationId([
                        D3
                    ], "scene_item_" + T6) : null, "scroll" === et(B3, "p", "scroll") ? (S2 = parseFloat(et(B3, "s", 0)), I4 = parseFloat(et(B3, "sc_d", 100 - S2)), M2.duration(I4), 0 == S2 && B3.noi, R3.add(M2, S2), M2.play()) : (M2.pause(), null !== (N2 = et(B3, "t_d", null)) && M2.duration(parseFloat(N2)), S2 = parseFloat(et(B3, "s", 0)) / 100, N2 = et(B3, "sc_dir", "down"), P2 = B3.rev ? "down" === N2 ? Math.min(0.9, S2 + 0.5) : Math.max(0, S2 - 0.5) : -1, C4 = !1), z2.push({
                        start: S2,
                        duration: I4,
                        tl: M2,
                        animation_idx: T6,
                        scroll: C4,
                        reverse_at: P2,
                        elements: L4,
                        dir: N2,
                        rep: B3.rep || !1,
                        name: B3.name || "",
                        inv: B3.inv || !1
                    }), q2 && M2.eventCallback("onUpdate", function() {
                        V.updateProgress(this._pg_animation_id, this.time(), this.progress());
                    })));
                }
                var Y3;
                q2 && (Y3 = V.getAnimationId(D3, "scene")), n18.pin;
            }
        }, this.scroll = function(t9) {
            Z2 || X1.scroll(t9);
        }, this.seek = function(i15, t9, o14) {
            var r17;
            Z2 || (z2.forEach(function(t10) {
                t10.detached && !t10.disabled && (t10.tl.duration(t10.duration), R3.add(t10.tl, t10.start), t10.tl.play(), t10.detached = !1);
            }), i15 = Math.round(100 * i15) / 100, "down" == (r17 = -1 === t9 ? "up" : "down") && (i15 < s13 || 0 == s13) && (s13 = -0.1), "up" == r17 && s13 < i15 && (s13 = 1.1), z2.forEach(function(t10) {
                var e9, a18, n18;
                t10.disabled || (e9 = t10.rep ? 0 : void 0, n18 = t10.tl.progress(), a18 = Math.max(o14, t10.start), n18 = t10.inv && (0 === n18 || 0 === e9), t10.scroll || ("down" == r17 ? 0 <= t10.dir.indexOf("down") ? (s13 < a18 && a18 <= i15 && !M(t10.tl) || a18 <= i15 && t10.tl.reversed()) && (n18 && t10.tl.invalidate(), t10.tl.play(e9), 0 <= t10.reverse_at && (t10.reverse_at = i15)) : 0 <= t10.reverse_at && t10.reverse_at <= i15 && !t10.tl.reversed() && t10.tl.reverse() : 0 <= t10.dir.indexOf("up") ? (a18 < s13 && i15 <= a18 && !M(t10.tl) || i15 <= a18 && t10.tl.reversed()) && (n18 && t10.tl.invalidate(), t10.tl.play(e9), 0 <= t10.reverse_at && (t10.reverse_at = i15)) : 0 <= t10.reverse_at && t10.reverse_at >= i15 && !t10.tl.reversed() && t10.tl.reverse()));
            }), s13 = i15);
        }, this.seekAnimation = function(t9, e9, a18) {
            for(var n18 = 0; n18 < z2.length; n18++)if (z2[n18].animation_idx === t9 && !z2[n18].disabled) {
                var i15 = z2[n18].tl, o14 = Math.max(0, $2(i15, e9));
                z2[n18].scroll && a18 && !z2[n18].detached && (R3.remove(i15), gsap.globalTimeline.add(i15), i15.timeScale(1), z2[n18].detached = !0), a18 && 1 === i15.progress() && (o14 = 0), a18 ? i15.play(o14) : i15.pause(o14);
                break;
            }
        }, this.refreshAnimation = function(t9) {
            for(var e9 = !1, a18 = 0; a18 < z2.length; a18++)if (z2[a18].animation_idx === t9 && !z2[a18].disabled) try {
                e9 = !0;
                var n18 = z2[a18].tl.time(), i16 = (i16 = JSON.parse(rt(D3.getAttribute("data-pg-ia-scene")))).l[a18], o15 = Q(D3, i16.t), r17 = nt(i16.a, o15);
                i16.name && at(i16.name, i16.a), "scroll" === et(i16, "p", "scroll") ? (z2[a18].detached = !1, r17.duration(z2[a18].duration), R3.add(r17, z2[a18].start), r17.play()) : r17.pause(Math.min(n18, r17.duration())), z2[a18].tl.pause(0), z2[a18].tl.kill(), z2[a18].tl = r17, z2[a18].elements = o15, q2 && (r17._pg_animation_id = V.getAnimationId([
                    D3
                ], "scene_item_" + t9), r17.eventCallback("onUpdate", function() {
                    V.updateProgress(this._pg_animation_id, this.time(), this.progress());
                }));
            } catch (t10) {
                return j2(t10), !0;
            }
            return e9;
        }, this.create();
    }, F2.scrollSceneManager = new function() {
        var t7 = this, n18 = [];
        function i16(t9, e9) {
            K2(t9.querySelectorAll("[data-pg-ia-scene]"), e9);
        }
        function a18(t9, e9) {
            if (o15(t9), !t9.hasAttribute("data-pg-ia-scene")) return null;
            t9._pg_scroll_scene = new k2(t9), n18.indexOf(t9) < 0 && n18.push(t9);
        }
        function o15(t9, e9) {
            t9._pg_scroll_scene && t9._pg_scroll_scene.destroy(), t9._pg_scroll_scene = null;
            var a19 = n18.indexOf(t9);
            0 <= a19 && n18.splice(a19, 1), e9 && i16(t9, o15);
        }
        this.removeScene = o15, this.createScene = a18, this.updateScene = function(t9, e9) {
            a18(t9, !0), e9 && i16(t9, a18);
        }, this.getScene = function(t9) {
            return t9._pg_scroll_scene || null;
        }, this.scrollScene = function(t9, e9) {
            t9._pg_scroll_scene && t9._pg_scroll_scene.scroll(e9);
        }, this.seekAnimation = function(t9, e9, a19, n19) {
            t9._pg_scroll_scene && t9._pg_scroll_scene.seekAnimation(e9, a19, n19);
        }, this.refreshAnimation = function(t9, e9) {
            t9._pg_scroll_scene && (t9._pg_scroll_scene.refreshAnimation(e9) || this.updateScene(t9));
        }, this.init = function() {
            this.removeAll(), i16(document, a18);
        }, this.removeAll = function() {
            n18.slice(0).forEach(function(t9) {
                o15(t9);
            });
        }, window.addEventListener("load", function() {
            t7.init();
        });
    }, O1 = function(e9, t7) {
        var a18, n18, i16 = (a18 = /(auto|scroll)/, n18 = function(t9, e10) {
            return null === t9.parentNode ? e10 : n18(t9.parentNode, e10.concat([
                t9
            ]));
        }, function(t9) {
            if (t9 instanceof HTMLElement || t9 instanceof SVGElement) {
                if (t9._pg_scroll_parent) return t9._pg_scroll_parent;
                for(var e10 = n18(t9.parentNode, []), a19 = 0; a19 < e10.length; a19 += 1)if (r17(e10[a19])) return t9._pg_scroll_parent = e10[a19], e10[a19];
                return t9._pg_scroll_parent = document.scrollingElement || document.documentElement, t9._pg_scroll_parent;
            }
        });
        function o15(t9, e11) {
            return getComputedStyle(t9, null).getPropertyValue(e11);
        }
        function r17(t9) {
            return a18.test(o15(t9, "overflow") + o15(t9, "overflow-y") + o15(t9, "overflow-x"));
        }
        var s13 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, l8 = {
            slow: 10,
            normal: 30,
            fast: 60
        }[t7.spd || "normal"], u9 = null, d8 = !0;
        "HTML" === e9.nodeName || "BODY" === e9.nodeName ? u9 = document.scrollingElement || document.documentElement || document.body.parentNode || document.body : (u9 = e9, d8 = !1);
        var p6 = !1, c5 = u9.scrollTop, h7 = u9;
        u9 === document.body && document.documentElement && (h7 = document.documentElement);
        function f6(t9) {
            i16(t9.target) === e9 && (t9.preventDefault(), t9 = t9.detail ? t9.wheelDelta ? t9.wheelDelta / t9.detail / 40 * (0 < t9.detail ? 1 : -1) : -t9.detail / 3 : t9.wheelDelta / 120, c5 += -t9 * l8, c5 = Math.max(0, Math.min(c5, u9.scrollHeight - h7.clientHeight)), p6 || _5());
        }
        var g5, m6 = !1, v6 = null, _5 = function() {
            p6 = !0;
            var t9 = 0 < (t9 = (c5 - u9.scrollTop) / 6) ? Math.ceil(t9) : Math.floor(t9);
            m6 = !0, v6 && clearTimeout(v6), v6 = setTimeout(function() {
                m6 = !1;
            }, 500), u9.scrollTop += t9, 0.5 < Math.abs(t9) && s13 ? s13(_5) : p6 = !1;
        };
        s13 && (u9.addEventListener("mousewheel", f6, {
            passive: !1
        }), u9.addEventListener("DOMMouseScroll", f6, {
            passive: !1
        }), g5 = function(t9) {
            m6 || (c5 = u9.scrollTop);
        }, (d8 ? window : u9).addEventListener("scroll", g5, !1)), this.destroy = function() {
            s13 && (s13 = null, u9.removeEventListener("mousewheel", f6), u9.removeEventListener("DOMMouseScroll", f6), (d8 ? window : u9).removeEventListener("scroll", g5));
        };
    }, F2.smoothScrollManager = new function() {
        this.init = function() {
            K2(document.querySelectorAll("[data-pg-ia-smooth-scroll]"), function(t7) {
                e9(t7);
            });
        }, this.refresh = function(t7) {
            t7._pg_smooth_scroll && (t7._pg_smooth_scroll.destroy(), t7._pg_smooth_scroll = null), e9(t7);
        };
        var e9 = function(t7) {
            try {
                var e11;
                t7.hasAttribute("data-pg-ia-smooth-scroll") && (e11 = JSON.parse(rt(t7.getAttribute("data-pg-ia-smooth-scroll") || "{}")), t7._pg_smooth_scroll = new O1(t7, e11));
            } catch (t9) {
                j2(t9);
            }
        };
    }, F2.smoothScrollManager.init()) : console && console.log("Pinegrow Interactions are not supported.");
}();

//# sourceMappingURL=index.6b10693c.js.map
