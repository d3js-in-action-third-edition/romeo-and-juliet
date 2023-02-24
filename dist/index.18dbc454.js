// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fdTx9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var _legend = require("./legend");
var _loadData = require("./load-data");
// import { prepData } from "./prep-data";
var _matrix = require("./matrix");
var _arc = require("./arc");
var _beeswarm = require("./beeswarm");
(0, _legend.createLegend)();
// Load data
// prepData();
const [nodes, edges] = (0, _loadData.loadData)();
// Draw the adjacency matrix
(0, _matrix.drawMatrix)(nodes, edges);
// Draw the arc diagram
(0, _arc.drawArcDiagram)(nodes, edges);
// Draw the beeswarm
(0, _beeswarm.drawBeeswarm)(nodes);

},{"./legend":"ieevi","./load-data":"9ZwCu","./matrix":"bhcXq","./arc":"cq48B","./beeswarm":"kFA5m"}],"ieevi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLegend", ()=>createLegend);
var _d3Selection = require("d3-selection");
var _helper = require("./helper");
var _scales = require("./scales");
const createLegend = ()=>{
    // Houses
    const housesLegend = (0, _d3Selection.select)(".legend-houses").append("ul").selectAll(".legend-house").data((0, _helper.houses)).join("li").attr("class", "legend-house");
    housesLegend.append("span").attr("class", "legend-house-color").style("background-color", (d)=>d.color);
    housesLegend.append("span").attr("class", "legend-house-label").text((d)=>d.house);
    // Circle radius
    const linesMax = 600;
    const linesMedium = 200;
    const linesMin = 30;
    const maxRadius = (0, _scales.getRadius)(linesMax, linesMax);
    const mediumRadius = (0, _scales.getRadius)(linesMax, linesMedium);
    const minRadius = (0, _scales.getRadius)(linesMax, linesMin);
    const legendRadius = (0, _d3Selection.select)(".legend-radius").append("svg").attr("width", 260).attr("height", 200).append("g").attr("transform", "translate(1, 10)");
    const legendCircles = legendRadius.append("g").attr("fill", "transparent").attr("stroke", "#272626");
    legendCircles.append("circle").attr("cx", maxRadius).attr("cy", maxRadius).attr("r", maxRadius);
    legendCircles.append("circle").attr("cx", maxRadius).attr("cy", 2 * maxRadius - mediumRadius).attr("r", mediumRadius);
    legendCircles.append("circle").attr("cx", maxRadius).attr("cy", 2 * maxRadius - minRadius).attr("r", minRadius);
    const linesLength = 100;
    const legendLines = legendRadius.append("g").attr("stroke", "#272626").attr("stroke-dasharray", "6 4");
    legendLines.append("line").attr("x1", maxRadius).attr("y1", 0).attr("x2", maxRadius + linesLength).attr("y2", 0);
    legendLines.append("line").attr("x1", maxRadius).attr("y1", 2 * maxRadius - 2 * mediumRadius).attr("x2", maxRadius + linesLength).attr("y2", 2 * maxRadius - 2 * mediumRadius);
    legendLines.append("line").attr("x1", maxRadius).attr("y1", 2 * maxRadius - 2 * minRadius).attr("x2", maxRadius + linesLength).attr("y2", 2 * maxRadius - 2 * minRadius);
    const labels = legendRadius.append("g").attr("fill", "#272626").attr("dominant-baseline", "middle");
    labels.append("text").attr("x", maxRadius + linesLength + 5).attr("y", 0).text(linesMax);
    labels.append("text").attr("x", maxRadius + linesLength + 5).attr("y", 2 * maxRadius - 2 * mediumRadius).text(linesMedium);
    labels.append("text").attr("x", maxRadius + linesLength + 5).attr("y", 2 * maxRadius - 2 * minRadius).text(linesMin);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8","./helper":"lVRAz","d3-selection":"gn9gd","./scales":"NYsfE"}],"fD7H8":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "characters", ()=>characters);
parcelHelpers.export(exports, "houses", ()=>houses);
parcelHelpers.export(exports, "scenes", ()=>scenes);
parcelHelpers.export(exports, "totalLines", ()=>totalLines);
const characters = [
    {
        id: "prince",
        name: "Prince Escalus",
        house: "Ruling house of Verona",
        importance: "primary",
        descrition: "Ruling Prince of Verona"
    },
    {
        id: "paris",
        name: "Count Paris",
        house: "Ruling house of Verona",
        importance: "primary",
        descrition: "Kinsman of Escalus who wishes to marry Juliet."
    },
    {
        id: "mercutio",
        name: "Mercutio",
        house: "Ruling house of Verona",
        importance: "primary",
        descrition: "Another kinsman of Escalus, a friend of Romeo."
    },
    {
        id: "page",
        name: "Page",
        house: "Ruling house of Verona",
        importance: "secondary"
    },
    {
        id: "capulet",
        name: "Capulet",
        house: "House of Capulet",
        importance: "primary",
        descrition: "Patriarch of the house of Capulet."
    },
    {
        id: "lady_capulet",
        name: "Lady Capulet",
        house: "House of Capulet",
        importance: "primary",
        descrition: "Matriarch of the house of Capulet."
    },
    {
        id: "juliet",
        name: "Juliet Capulet",
        house: "House of Capulet",
        importance: "primary",
        descrition: "13-year-old daughter of Capulet, the play's female protagonist."
    },
    {
        id: "tybalt",
        name: "Tybalt",
        house: "House of Capulet",
        importance: "primary",
        descrition: "Cousin of Juliet, the nephew of Lady Capulet."
    },
    {
        id: "nurse",
        name: "The Nurse",
        house: "House of Capulet",
        importance: "primary",
        description: "Juliet's personal attendant and confidante."
    },
    {
        id: "peter",
        name: "Peter",
        house: "House of Capulet",
        importance: "secondary",
        description: "Servant of the Capulet household."
    },
    {
        id: "sampson",
        name: "Sampson",
        house: "House of Capulet",
        importance: "secondary",
        description: "Servant of the Capulet household."
    },
    {
        id: "gregory",
        name: "Gregory",
        house: "House of Capulet",
        importance: "secondary",
        description: "Servant of the Capulet household."
    },
    {
        id: "second_capulet",
        name: "Second Capulet",
        house: "House of Capulet",
        importance: "secondary"
    },
    {
        id: "musician",
        name: "Musician",
        house: "House of Capulet",
        importance: "secondary"
    },
    {
        id: "first_musician",
        name: "First Musician",
        house: "House of Capulet",
        importance: "secondary"
    },
    {
        id: "second_musician",
        name: "Second Musician",
        house: "House of Capulet",
        importance: "secondary"
    },
    {
        id: "servant",
        name: "Servant",
        house: "House of Capulet",
        importance: "secondary"
    },
    {
        id: "first_servant",
        name: "First Servant",
        house: "House of Capulet",
        importance: "secondary"
    },
    {
        id: "second_servant",
        name: "Second Servant",
        house: "House of Capulet",
        importance: "secondary"
    },
    {
        id: "montague",
        name: "Montague",
        house: "House of Montague",
        importance: "primary",
        description: "Patriarch of the house of Montague."
    },
    {
        id: "lady_montague",
        name: "Lady Montague",
        house: "House of Montague",
        importance: "primary",
        description: "Matriarch of the house of Montague."
    },
    {
        id: "romeo",
        name: "Romeo Montague",
        house: "House of Montague",
        importance: "primary",
        description: "Son of Montague, is the play's male protagonist."
    },
    {
        id: "benvolio",
        name: "Benvolio",
        house: "House of Montague",
        importance: "primary",
        description: "Romeo's cousin and best friend."
    },
    {
        id: "balthasar",
        name: "Balthasar",
        house: "House of Montague",
        importance: "secondary",
        description: "Servant of the Montague household."
    },
    {
        id: "Abraham",
        name: "Abram",
        house: "House of Montague",
        importance: "secondary",
        description: "Servant of the Montague household."
    },
    {
        id: "friar_laurence",
        name: "Friar Laurence",
        house: "Others",
        importance: "primary",
        description: "Franciscan friar and Romeo's confidant."
    },
    {
        id: "friar_john",
        name: "Friar John",
        house: "Others",
        importance: "primary",
        description: "Sent to deliver Friar Laurence's letter to Romeo."
    },
    {
        id: "apothecary",
        name: "Apothecary",
        house: "Others",
        importance: "primary",
        description: "Reluctantly sells Romeo poison."
    },
    {
        id: "chorus",
        name: "Chorus",
        house: "Others",
        importance: "primary",
        description: "Reads a prologue to each of the first two acts."
    },
    {
        id: "first_citizen",
        name: "First Citizen",
        house: "Others",
        importance: "secondary"
    },
    {
        id: "first_watchman",
        name: "First Watchman",
        house: "Others",
        importance: "secondary"
    },
    {
        id: "second_watchman",
        name: "Second Watchman",
        house: "Others",
        importance: "secondary"
    },
    {
        id: "third_watchman",
        name: "Third Watchman",
        house: "Others",
        importance: "secondary"
    },
    {
        id: "third_musician",
        name: "Third Musician",
        house: "Others",
        importance: "secondary"
    }
];
const houses = [
    {
        house: "Ruling house of Verona",
        color: "#f4a259",
        order: 1
    },
    {
        house: "House of Capulet",
        color: "#bc4b51",
        order: 2
    },
    {
        house: "House of Montague",
        color: "#5b8e7d",
        order: 3
    },
    {
        house: "Others",
        color: "#474973",
        order: 4
    }
];
const scenes = [
    {
        "scene": "1.0",
        "firstLine": 0
    },
    {
        "scene": "1.1",
        "firstLine": 15
    },
    {
        "scene": "1.2",
        "firstLine": 253
    },
    {
        "scene": "1.3",
        "firstLine": 356
    },
    {
        "scene": "1.4",
        "firstLine": 466
    },
    {
        "scene": "1.5",
        "firstLine": 586
    },
    {
        "scene": "2.0",
        "firstLine": 740
    },
    {
        "scene": "2.1",
        "firstLine": 754
    },
    {
        "scene": "2.2",
        "firstLine": 799
    },
    {
        "scene": "2.3",
        "firstLine": 1003
    },
    {
        "scene": "2.4",
        "firstLine": 1100
    },
    {
        "scene": "2.5",
        "firstLine": 1308
    },
    {
        "scene": "2.6",
        "firstLine": 1388
    },
    {
        "scene": "3.1",
        "firstLine": 1425
    },
    {
        "scene": "3.2",
        "firstLine": 1630
    },
    {
        "scene": "3.3",
        "firstLine": 1777
    },
    {
        "scene": "3.4",
        "firstLine": 1956
    },
    {
        "scene": "3.5",
        "firstLine": 1993
    },
    {
        "scene": "4.1",
        "firstLine": 2248
    },
    {
        "scene": "4.2",
        "firstLine": 2375
    },
    {
        "scene": "4.3",
        "firstLine": 2423
    },
    {
        "scene": "4.4",
        "firstLine": 2482
    },
    {
        "scene": "4.5",
        "firstLine": 2513
    },
    {
        "scene": "5.1",
        "firstLine": 2655
    },
    {
        "scene": "5.2",
        "firstLine": 2745
    },
    {
        "scene": "5.3",
        "firstLine": 2775
    }
];
const totalLines = 3096;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"gn9gd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>(0, _createJsDefault.default));
parcelHelpers.export(exports, "creator", ()=>(0, _creatorJsDefault.default));
parcelHelpers.export(exports, "local", ()=>(0, _localJsDefault.default));
parcelHelpers.export(exports, "matcher", ()=>(0, _matcherJsDefault.default));
parcelHelpers.export(exports, "namespace", ()=>(0, _namespaceJsDefault.default));
parcelHelpers.export(exports, "namespaces", ()=>(0, _namespacesJsDefault.default));
parcelHelpers.export(exports, "pointer", ()=>(0, _pointerJsDefault.default));
parcelHelpers.export(exports, "pointers", ()=>(0, _pointersJsDefault.default));
parcelHelpers.export(exports, "select", ()=>(0, _selectJsDefault.default));
parcelHelpers.export(exports, "selectAll", ()=>(0, _selectAllJsDefault.default));
parcelHelpers.export(exports, "selection", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "selector", ()=>(0, _selectorJsDefault.default));
parcelHelpers.export(exports, "selectorAll", ()=>(0, _selectorAllJsDefault.default));
parcelHelpers.export(exports, "style", ()=>(0, _styleJs.styleValue));
parcelHelpers.export(exports, "window", ()=>(0, _windowJsDefault.default));
var _createJs = require("./create.js");
var _createJsDefault = parcelHelpers.interopDefault(_createJs);
var _creatorJs = require("./creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _localJs = require("./local.js");
var _localJsDefault = parcelHelpers.interopDefault(_localJs);
var _matcherJs = require("./matcher.js");
var _matcherJsDefault = parcelHelpers.interopDefault(_matcherJs);
var _namespaceJs = require("./namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
var _namespacesJs = require("./namespaces.js");
var _namespacesJsDefault = parcelHelpers.interopDefault(_namespacesJs);
var _pointerJs = require("./pointer.js");
var _pointerJsDefault = parcelHelpers.interopDefault(_pointerJs);
var _pointersJs = require("./pointers.js");
var _pointersJsDefault = parcelHelpers.interopDefault(_pointersJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _indexJs = require("./selection/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _selectorJs = require("./selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
var _selectorAllJs = require("./selectorAll.js");
var _selectorAllJsDefault = parcelHelpers.interopDefault(_selectorAllJs);
var _styleJs = require("./selection/style.js");
var _windowJs = require("./window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);

},{"./create.js":false,"./creator.js":"a6062","./local.js":false,"./matcher.js":"hovSo","./namespace.js":"a23xG","./namespaces.js":"dDfgS","./pointer.js":false,"./pointers.js":false,"./select.js":"4pqgd","./selectAll.js":"eAYBy","./selection/index.js":"fK3Dl","./selector.js":"7VF9r","./selectorAll.js":"2SKTE","./selection/style.js":"GUHZ1","./window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"a6062":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespaceJs = require("./namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
var _namespacesJs = require("./namespaces.js");
function creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === (0, _namespacesJs.xhtml) && document.documentElement.namespaceURI === (0, _namespacesJs.xhtml) ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
exports.default = function(name) {
    var fullname = (0, _namespaceJsDefault.default)(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
};

},{"./namespace.js":"a23xG","./namespaces.js":"dDfgS","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"a23xG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespacesJs = require("./namespaces.js");
var _namespacesJsDefault = parcelHelpers.interopDefault(_namespacesJs);
exports.default = function(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return (0, _namespacesJsDefault.default).hasOwnProperty(prefix) ? {
        space: (0, _namespacesJsDefault.default)[prefix],
        local: name
    } : name; // eslint-disable-line no-prototype-builtins
};

},{"./namespaces.js":"dDfgS","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"dDfgS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xhtml", ()=>xhtml);
var xhtml = "http://www.w3.org/1999/xhtml";
exports.default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"hovSo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "childMatcher", ()=>childMatcher);
exports.default = function(selector) {
    return function() {
        return this.matches(selector);
    };
};
function childMatcher(selector) {
    return function(node) {
        return node.matches(selector);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4pqgd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./selection/index.js");
exports.default = function(selector) {
    return typeof selector === "string" ? new (0, _indexJs.Selection)([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new (0, _indexJs.Selection)([
        [
            selector
        ]
    ], (0, _indexJs.root));
};

},{"./selection/index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fK3Dl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "root", ()=>root);
parcelHelpers.export(exports, "Selection", ()=>Selection);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _selectChildJs = require("./selectChild.js");
var _selectChildJsDefault = parcelHelpers.interopDefault(_selectChildJs);
var _selectChildrenJs = require("./selectChildren.js");
var _selectChildrenJsDefault = parcelHelpers.interopDefault(_selectChildrenJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _dataJs = require("./data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var _enterJs = require("./enter.js");
var _enterJsDefault = parcelHelpers.interopDefault(_enterJs);
var _exitJs = require("./exit.js");
var _exitJsDefault = parcelHelpers.interopDefault(_exitJs);
var _joinJs = require("./join.js");
var _joinJsDefault = parcelHelpers.interopDefault(_joinJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _orderJs = require("./order.js");
var _orderJsDefault = parcelHelpers.interopDefault(_orderJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _callJs = require("./call.js");
var _callJsDefault = parcelHelpers.interopDefault(_callJs);
var _nodesJs = require("./nodes.js");
var _nodesJsDefault = parcelHelpers.interopDefault(_nodesJs);
var _nodeJs = require("./node.js");
var _nodeJsDefault = parcelHelpers.interopDefault(_nodeJs);
var _sizeJs = require("./size.js");
var _sizeJsDefault = parcelHelpers.interopDefault(_sizeJs);
var _emptyJs = require("./empty.js");
var _emptyJsDefault = parcelHelpers.interopDefault(_emptyJs);
var _eachJs = require("./each.js");
var _eachJsDefault = parcelHelpers.interopDefault(_eachJs);
var _attrJs = require("./attr.js");
var _attrJsDefault = parcelHelpers.interopDefault(_attrJs);
var _styleJs = require("./style.js");
var _styleJsDefault = parcelHelpers.interopDefault(_styleJs);
var _propertyJs = require("./property.js");
var _propertyJsDefault = parcelHelpers.interopDefault(_propertyJs);
var _classedJs = require("./classed.js");
var _classedJsDefault = parcelHelpers.interopDefault(_classedJs);
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _htmlJs = require("./html.js");
var _htmlJsDefault = parcelHelpers.interopDefault(_htmlJs);
var _raiseJs = require("./raise.js");
var _raiseJsDefault = parcelHelpers.interopDefault(_raiseJs);
var _lowerJs = require("./lower.js");
var _lowerJsDefault = parcelHelpers.interopDefault(_lowerJs);
var _appendJs = require("./append.js");
var _appendJsDefault = parcelHelpers.interopDefault(_appendJs);
var _insertJs = require("./insert.js");
var _insertJsDefault = parcelHelpers.interopDefault(_insertJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _cloneJs = require("./clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _datumJs = require("./datum.js");
var _datumJsDefault = parcelHelpers.interopDefault(_datumJs);
var _onJs = require("./on.js");
var _onJsDefault = parcelHelpers.interopDefault(_onJs);
var _dispatchJs = require("./dispatch.js");
var _dispatchJsDefault = parcelHelpers.interopDefault(_dispatchJs);
var _iteratorJs = require("./iterator.js");
var _iteratorJsDefault = parcelHelpers.interopDefault(_iteratorJs);
var root = [
    null
];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([
        [
            document.documentElement
        ]
    ], root);
}
function selection_selection() {
    return this;
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: (0, _selectJsDefault.default),
    selectAll: (0, _selectAllJsDefault.default),
    selectChild: (0, _selectChildJsDefault.default),
    selectChildren: (0, _selectChildrenJsDefault.default),
    filter: (0, _filterJsDefault.default),
    data: (0, _dataJsDefault.default),
    enter: (0, _enterJsDefault.default),
    exit: (0, _exitJsDefault.default),
    join: (0, _joinJsDefault.default),
    merge: (0, _mergeJsDefault.default),
    selection: selection_selection,
    order: (0, _orderJsDefault.default),
    sort: (0, _sortJsDefault.default),
    call: (0, _callJsDefault.default),
    nodes: (0, _nodesJsDefault.default),
    node: (0, _nodeJsDefault.default),
    size: (0, _sizeJsDefault.default),
    empty: (0, _emptyJsDefault.default),
    each: (0, _eachJsDefault.default),
    attr: (0, _attrJsDefault.default),
    style: (0, _styleJsDefault.default),
    property: (0, _propertyJsDefault.default),
    classed: (0, _classedJsDefault.default),
    text: (0, _textJsDefault.default),
    html: (0, _htmlJsDefault.default),
    raise: (0, _raiseJsDefault.default),
    lower: (0, _lowerJsDefault.default),
    append: (0, _appendJsDefault.default),
    insert: (0, _insertJsDefault.default),
    remove: (0, _removeJsDefault.default),
    clone: (0, _cloneJsDefault.default),
    datum: (0, _datumJsDefault.default),
    on: (0, _onJsDefault.default),
    dispatch: (0, _dispatchJsDefault.default),
    [Symbol.iterator]: (0, _iteratorJsDefault.default)
};
exports.default = selection;

},{"./select.js":"aK9lB","./selectAll.js":"8U28K","./selectChild.js":"hBGg0","./selectChildren.js":"hnJ1V","./filter.js":"i1GfU","./data.js":"jIP7J","./enter.js":"27tIy","./exit.js":"6ubri","./join.js":"g7QcH","./merge.js":"fXm9Z","./order.js":"cmxvd","./sort.js":"4UUI2","./call.js":"bsAaT","./nodes.js":"jjFrN","./node.js":"gPGkg","./size.js":"coOTw","./empty.js":"8ybxO","./each.js":"9Y1px","./attr.js":"k8cb1","./style.js":"GUHZ1","./property.js":"f4q4V","./classed.js":"jd3ig","./text.js":"dVAdB","./html.js":"egFAg","./raise.js":"4Xi1m","./lower.js":"l1I8n","./append.js":"1GNgv","./insert.js":"3Xphl","./remove.js":"iNsSa","./clone.js":"jfNc9","./datum.js":"lMowl","./on.js":"ktlxw","./dispatch.js":"eZMTj","./iterator.js":"32Fgr","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"aK9lB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _selectorJs = require("../selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
exports.default = function(select) {
    if (typeof select !== "function") select = (0, _selectorJsDefault.default)(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
        }
    }
    return new (0, _indexJs.Selection)(subgroups, this._parents);
};

},{"./index.js":"fK3Dl","../selector.js":"7VF9r","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"7VF9r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function none() {}
exports.default = function(selector) {
    return selector == null ? none : function() {
        return this.querySelector(selector);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8U28K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _arrayJs = require("../array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _selectorAllJs = require("../selectorAll.js");
var _selectorAllJsDefault = parcelHelpers.interopDefault(_selectorAllJs);
function arrayAll(select) {
    return function() {
        return (0, _arrayJsDefault.default)(select.apply(this, arguments));
    };
}
exports.default = function(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = (0, _selectorAllJsDefault.default)(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
        }
    }
    return new (0, _indexJs.Selection)(subgroups, parents);
};

},{"./index.js":"fK3Dl","../array.js":"9WejU","../selectorAll.js":"2SKTE","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"9WejU":[function(require,module,exports) {
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
exports.default = array;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"2SKTE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function empty() {
    return [];
}
exports.default = function(selector) {
    return selector == null ? empty : function() {
        return this.querySelectorAll(selector);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"hBGg0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _matcherJs = require("../matcher.js");
var find = Array.prototype.find;
function childFind(match) {
    return function() {
        return find.call(this.children, match);
    };
}
function childFirst() {
    return this.firstElementChild;
}
exports.default = function(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : (0, _matcherJs.childMatcher)(match)));
};

},{"../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"hnJ1V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _matcherJs = require("../matcher.js");
var filter = Array.prototype.filter;
function children() {
    return Array.from(this.children);
}
function childrenFilter(match) {
    return function() {
        return filter.call(this.children, match);
    };
}
exports.default = function(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : (0, _matcherJs.childMatcher)(match)));
};

},{"../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"i1GfU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _matcherJs = require("../matcher.js");
var _matcherJsDefault = parcelHelpers.interopDefault(_matcherJs);
exports.default = function(match) {
    if (typeof match !== "function") match = (0, _matcherJsDefault.default)(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new (0, _indexJs.Selection)(subgroups, this._parents);
};

},{"./index.js":"fK3Dl","../matcher.js":"hovSo","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"jIP7J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _enterJs = require("./enter.js");
var _constantJs = require("../constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new (0, _enterJs.EnterNode)(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = new Map, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) exit[i] = node;
        else nodeByKeyValue.set(keyValue, node);
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue.delete(keyValue);
        } else enter[i] = new (0, _enterJs.EnterNode)(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function datum(node) {
    return node.__data__;
}
exports.default = function(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = (0, _constantJsDefault.default)(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
            if (i0 >= i1) i1 = i0 + 1;
            while(!(next = updateGroup[i1]) && ++i1 < dataLength);
            previous._next = next || null;
        }
    }
    update = new (0, _indexJs.Selection)(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
};
// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
    return typeof data === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
     : Array.from(data); // Map, Set, iterable, string, or anything else
}

},{"./index.js":"fK3Dl","./enter.js":"27tIy","../constant.js":"1wZol","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"27tIy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnterNode", ()=>EnterNode);
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");
exports.default = function() {
    return new (0, _indexJs.Selection)(this._enter || this._groups.map((0, _sparseJsDefault.default)), this._parents);
};
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};

},{"./sparse.js":"juhNo","./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"juhNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(update) {
    return new Array(update.length);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"1wZol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return function() {
        return x;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"6ubri":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sparseJs = require("./sparse.js");
var _sparseJsDefault = parcelHelpers.interopDefault(_sparseJs);
var _indexJs = require("./index.js");
exports.default = function() {
    return new (0, _indexJs.Selection)(this._exit || this._groups.map((0, _sparseJsDefault.default)), this._parents);
};

},{"./sparse.js":"juhNo","./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"g7QcH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
    } else enter = enter.append(onenter + "");
    if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fXm9Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
exports.default = function(context) {
    var selection = context.selection ? context.selection() : context;
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new (0, _indexJs.Selection)(merges, this._parents);
};

},{"./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"cmxvd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
        }
    }
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4UUI2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
exports.default = function(compare) {
    if (!compare) compare = ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
        sortgroup.sort(compareNode);
    }
    return new (0, _indexJs.Selection)(sortgroups, this._parents).order();
};
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

},{"./index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"bsAaT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"jjFrN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return Array.from(this);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"gPGkg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
        var node = group[i];
        if (node) return node;
    }
    return null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"coOTw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    let size = 0;
    for (const node of this)++size; // eslint-disable-line no-unused-vars
    return size;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8ybxO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return !this.node();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"9Y1px":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"k8cb1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _namespaceJs = require("../namespace.js");
var _namespaceJsDefault = parcelHelpers.interopDefault(_namespaceJs);
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
exports.default = function(name, value) {
    var fullname = (0, _namespaceJsDefault.default)(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
};

},{"../namespace.js":"a23xG","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"GUHZ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "styleValue", ()=>styleValue);
var _windowJs = require("../window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
exports.default = function(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
};
function styleValue(node, name) {
    return node.style.getPropertyValue(name) || (0, _windowJsDefault.default)(node).getComputedStyle(node, null).getPropertyValue(name);
}

},{"../window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"6di7h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(node) {
    return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
     || node.document && node // node is a Window
     || node.defaultView; // node is a Document
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"f4q4V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
exports.default = function(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"jd3ig":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function classedTrue(names) {
    return function() {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function() {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}
exports.default = function(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
        var list = classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"dVAdB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
exports.default = function(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"egFAg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
exports.default = function(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4Xi1m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
exports.default = function() {
    return this.each(raise);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"l1I8n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
exports.default = function() {
    return this.each(lower);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"1GNgv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _creatorJs = require("../creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
exports.default = function(name) {
    var create = typeof name === "function" ? name : (0, _creatorJsDefault.default)(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
};

},{"../creator.js":"a6062","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"3Xphl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _creatorJs = require("../creator.js");
var _creatorJsDefault = parcelHelpers.interopDefault(_creatorJs);
var _selectorJs = require("../selector.js");
var _selectorJsDefault = parcelHelpers.interopDefault(_selectorJs);
function constantNull() {
    return null;
}
exports.default = function(name, before) {
    var create = typeof name === "function" ? name : (0, _creatorJsDefault.default)(name), select = before == null ? constantNull : typeof before === "function" ? before : (0, _selectorJsDefault.default)(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
};

},{"../creator.js":"a6062","../selector.js":"7VF9r","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"iNsSa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
exports.default = function() {
    return this.each(remove);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"jfNc9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
exports.default = function(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"lMowl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ktlxw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function contextListener(listener) {
    return function(event) {
        listener.call(this, event, this.__data__);
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function onAdd(typename, value, options) {
    return function() {
        var on = this.__on, o, listener = contextListener(value);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.options);
                this.addEventListener(o.type, o.listener = listener, o.options = options);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, options);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            options: options
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
exports.default = function(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
            if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
        }
        return;
    }
    on = value ? onAdd : onRemove;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, options));
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"eZMTj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _windowJs = require("../window.js");
var _windowJsDefault = parcelHelpers.interopDefault(_windowJs);
function dispatchEvent(node, type, params) {
    var window = (0, _windowJsDefault.default)(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function() {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}
exports.default = function(type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
};

},{"../window.js":"6di7h","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"32Fgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function*() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) yield node;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"eAYBy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayJs = require("./array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _indexJs = require("./selection/index.js");
exports.default = function(selector) {
    return typeof selector === "string" ? new (0, _indexJs.Selection)([
        document.querySelectorAll(selector)
    ], [
        document.documentElement
    ]) : new (0, _indexJs.Selection)([
        (0, _arrayJsDefault.default)(selector)
    ], (0, _indexJs.root));
};

},{"./array.js":"9WejU","./selection/index.js":"fK3Dl","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"NYsfE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRadius", ()=>getRadius);
parcelHelpers.export(exports, "charColorScale", ()=>charColorScale);
parcelHelpers.export(exports, "getEdgeColor", ()=>getEdgeColor);
var _d3Scale = require("d3-scale");
var _helper = require("./helper");
const getRadius = (maxLines, lines)=>{
    const radialScale = (0, _d3Scale.scaleRadial)().domain([
        0,
        maxLines
    ]).range([
        0,
        60
    ]);
    return radialScale(lines);
};
const charColorScale = (0, _d3Scale.scaleOrdinal)().domain((0, _helper.houses).map((h)=>h.house)).range((0, _helper.houses).map((h)=>h.color));
const getEdgeColor = (minWeight, maxWeight, weight)=>{
    const edgeColorScale = (0, _d3Scale.scaleLinear)().domain([
        minWeight,
        maxWeight
    ]).range([
        "#C3D2DB",
        "#364652"
    ]);
    return edgeColorScale(weight);
};

},{"d3-scale":"UQ8g3","./helper":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"UQ8g3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scaleBand", ()=>(0, _bandJsDefault.default));
parcelHelpers.export(exports, "scalePoint", ()=>(0, _bandJs.point));
parcelHelpers.export(exports, "scaleIdentity", ()=>(0, _identityJsDefault.default));
parcelHelpers.export(exports, "scaleLinear", ()=>(0, _linearJsDefault.default));
parcelHelpers.export(exports, "scaleLog", ()=>(0, _logJsDefault.default));
parcelHelpers.export(exports, "scaleSymlog", ()=>(0, _symlogJsDefault.default));
parcelHelpers.export(exports, "scaleOrdinal", ()=>(0, _ordinalJsDefault.default));
parcelHelpers.export(exports, "scaleImplicit", ()=>(0, _ordinalJs.implicit));
parcelHelpers.export(exports, "scalePow", ()=>(0, _powJsDefault.default));
parcelHelpers.export(exports, "scaleSqrt", ()=>(0, _powJs.sqrt));
parcelHelpers.export(exports, "scaleRadial", ()=>(0, _radialJsDefault.default));
parcelHelpers.export(exports, "scaleQuantile", ()=>(0, _quantileJsDefault.default));
parcelHelpers.export(exports, "scaleQuantize", ()=>(0, _quantizeJsDefault.default));
parcelHelpers.export(exports, "scaleThreshold", ()=>(0, _thresholdJsDefault.default));
parcelHelpers.export(exports, "scaleTime", ()=>(0, _timeJsDefault.default));
parcelHelpers.export(exports, "scaleUtc", ()=>(0, _utcTimeJsDefault.default));
parcelHelpers.export(exports, "scaleSequential", ()=>(0, _sequentialJsDefault.default));
parcelHelpers.export(exports, "scaleSequentialLog", ()=>(0, _sequentialJs.sequentialLog));
parcelHelpers.export(exports, "scaleSequentialPow", ()=>(0, _sequentialJs.sequentialPow));
parcelHelpers.export(exports, "scaleSequentialSqrt", ()=>(0, _sequentialJs.sequentialSqrt));
parcelHelpers.export(exports, "scaleSequentialSymlog", ()=>(0, _sequentialJs.sequentialSymlog));
parcelHelpers.export(exports, "scaleSequentialQuantile", ()=>(0, _sequentialQuantileJsDefault.default));
parcelHelpers.export(exports, "scaleDiverging", ()=>(0, _divergingJsDefault.default));
parcelHelpers.export(exports, "scaleDivergingLog", ()=>(0, _divergingJs.divergingLog));
parcelHelpers.export(exports, "scaleDivergingPow", ()=>(0, _divergingJs.divergingPow));
parcelHelpers.export(exports, "scaleDivergingSqrt", ()=>(0, _divergingJs.divergingSqrt));
parcelHelpers.export(exports, "scaleDivergingSymlog", ()=>(0, _divergingJs.divergingSymlog));
parcelHelpers.export(exports, "tickFormat", ()=>(0, _tickFormatJsDefault.default));
var _bandJs = require("./band.js");
var _bandJsDefault = parcelHelpers.interopDefault(_bandJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _linearJs = require("./linear.js");
var _linearJsDefault = parcelHelpers.interopDefault(_linearJs);
var _logJs = require("./log.js");
var _logJsDefault = parcelHelpers.interopDefault(_logJs);
var _symlogJs = require("./symlog.js");
var _symlogJsDefault = parcelHelpers.interopDefault(_symlogJs);
var _ordinalJs = require("./ordinal.js");
var _ordinalJsDefault = parcelHelpers.interopDefault(_ordinalJs);
var _powJs = require("./pow.js");
var _powJsDefault = parcelHelpers.interopDefault(_powJs);
var _radialJs = require("./radial.js");
var _radialJsDefault = parcelHelpers.interopDefault(_radialJs);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);
var _thresholdJs = require("./threshold.js");
var _thresholdJsDefault = parcelHelpers.interopDefault(_thresholdJs);
var _timeJs = require("./time.js");
var _timeJsDefault = parcelHelpers.interopDefault(_timeJs);
var _utcTimeJs = require("./utcTime.js");
var _utcTimeJsDefault = parcelHelpers.interopDefault(_utcTimeJs);
var _sequentialJs = require("./sequential.js");
var _sequentialJsDefault = parcelHelpers.interopDefault(_sequentialJs);
var _sequentialQuantileJs = require("./sequentialQuantile.js");
var _sequentialQuantileJsDefault = parcelHelpers.interopDefault(_sequentialQuantileJs);
var _divergingJs = require("./diverging.js");
var _divergingJsDefault = parcelHelpers.interopDefault(_divergingJs);
var _tickFormatJs = require("./tickFormat.js");
var _tickFormatJsDefault = parcelHelpers.interopDefault(_tickFormatJs);

},{"./band.js":false,"./identity.js":false,"./linear.js":"lob4K","./log.js":false,"./symlog.js":false,"./ordinal.js":"hNjKg","./pow.js":false,"./radial.js":"8e44u","./quantile.js":false,"./quantize.js":false,"./threshold.js":false,"./time.js":false,"./utcTime.js":false,"./sequential.js":false,"./sequentialQuantile.js":false,"./diverging.js":false,"./tickFormat.js":"ahQef","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"lob4K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "linearish", ()=>linearish);
var _d3Array = require("d3-array");
var _continuousJs = require("./continuous.js");
var _continuousJsDefault = parcelHelpers.interopDefault(_continuousJs);
var _initJs = require("./init.js");
var _tickFormatJs = require("./tickFormat.js");
var _tickFormatJsDefault = parcelHelpers.interopDefault(_tickFormatJs);
function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
        var d = domain();
        return (0, _d3Array.ticks)(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
        var d = domain();
        return (0, _tickFormatJsDefault.default)(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
        if (count == null) count = 10;
        var d = domain();
        var i0 = 0;
        var i1 = d.length - 1;
        var start = d[i0];
        var stop = d[i1];
        var prestep;
        var step;
        var maxIter = 10;
        if (stop < start) {
            step = start, start = stop, stop = step;
            step = i0, i0 = i1, i1 = step;
        }
        while(maxIter-- > 0){
            step = (0, _d3Array.tickIncrement)(start, stop, count);
            if (step === prestep) {
                d[i0] = start;
                d[i1] = stop;
                return domain(d);
            } else if (step > 0) {
                start = Math.floor(start / step) * step;
                stop = Math.ceil(stop / step) * step;
            } else if (step < 0) {
                start = Math.ceil(start * step) / step;
                stop = Math.floor(stop * step) / step;
            } else break;
            prestep = step;
        }
        return scale;
    };
    return scale;
}
function linear() {
    var scale = (0, _continuousJsDefault.default)();
    scale.copy = function() {
        return (0, _continuousJs.copy)(scale, linear());
    };
    (0, _initJs.initRange).apply(scale, arguments);
    return linearish(scale);
}
exports.default = linear;

},{"d3-array":"1yX2W","./continuous.js":"1LsCM","./init.js":"kp8lc","./tickFormat.js":"ahQef","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"1yX2W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisect", ()=>(0, _bisectJsDefault.default));
parcelHelpers.export(exports, "bisectRight", ()=>(0, _bisectJs.bisectRight));
parcelHelpers.export(exports, "bisectLeft", ()=>(0, _bisectJs.bisectLeft));
parcelHelpers.export(exports, "bisectCenter", ()=>(0, _bisectJs.bisectCenter));
parcelHelpers.export(exports, "ascending", ()=>(0, _ascendingJsDefault.default));
parcelHelpers.export(exports, "bisector", ()=>(0, _bisectorJsDefault.default));
parcelHelpers.export(exports, "blur", ()=>(0, _blurJs.blur));
parcelHelpers.export(exports, "blur2", ()=>(0, _blurJs.blur2));
parcelHelpers.export(exports, "blurImage", ()=>(0, _blurJs.blurImage));
parcelHelpers.export(exports, "count", ()=>(0, _countJsDefault.default));
parcelHelpers.export(exports, "cross", ()=>(0, _crossJsDefault.default));
parcelHelpers.export(exports, "cumsum", ()=>(0, _cumsumJsDefault.default));
parcelHelpers.export(exports, "descending", ()=>(0, _descendingJsDefault.default));
parcelHelpers.export(exports, "deviation", ()=>(0, _deviationJsDefault.default));
parcelHelpers.export(exports, "extent", ()=>(0, _extentJsDefault.default));
parcelHelpers.export(exports, "Adder", ()=>(0, _fsumJs.Adder));
parcelHelpers.export(exports, "fsum", ()=>(0, _fsumJs.fsum));
parcelHelpers.export(exports, "fcumsum", ()=>(0, _fsumJs.fcumsum));
parcelHelpers.export(exports, "group", ()=>(0, _groupJsDefault.default));
parcelHelpers.export(exports, "flatGroup", ()=>(0, _groupJs.flatGroup));
parcelHelpers.export(exports, "flatRollup", ()=>(0, _groupJs.flatRollup));
parcelHelpers.export(exports, "groups", ()=>(0, _groupJs.groups));
parcelHelpers.export(exports, "index", ()=>(0, _groupJs.index));
parcelHelpers.export(exports, "indexes", ()=>(0, _groupJs.indexes));
parcelHelpers.export(exports, "rollup", ()=>(0, _groupJs.rollup));
parcelHelpers.export(exports, "rollups", ()=>(0, _groupJs.rollups));
parcelHelpers.export(exports, "groupSort", ()=>(0, _groupSortJsDefault.default));
parcelHelpers.export(exports, "bin", ()=>(0, _binJsDefault.default)) // Deprecated; use bin.
;
parcelHelpers.export(exports, "histogram", ()=>(0, _binJsDefault.default));
parcelHelpers.export(exports, "thresholdFreedmanDiaconis", ()=>(0, _freedmanDiaconisJsDefault.default));
parcelHelpers.export(exports, "thresholdScott", ()=>(0, _scottJsDefault.default));
parcelHelpers.export(exports, "thresholdSturges", ()=>(0, _sturgesJsDefault.default));
parcelHelpers.export(exports, "max", ()=>(0, _maxJsDefault.default));
parcelHelpers.export(exports, "maxIndex", ()=>(0, _maxIndexJsDefault.default));
parcelHelpers.export(exports, "mean", ()=>(0, _meanJsDefault.default));
parcelHelpers.export(exports, "median", ()=>(0, _medianJsDefault.default));
parcelHelpers.export(exports, "medianIndex", ()=>(0, _medianJs.medianIndex));
parcelHelpers.export(exports, "merge", ()=>(0, _mergeJsDefault.default));
parcelHelpers.export(exports, "min", ()=>(0, _minJsDefault.default));
parcelHelpers.export(exports, "minIndex", ()=>(0, _minIndexJsDefault.default));
parcelHelpers.export(exports, "mode", ()=>(0, _modeJsDefault.default));
parcelHelpers.export(exports, "nice", ()=>(0, _niceJsDefault.default));
parcelHelpers.export(exports, "pairs", ()=>(0, _pairsJsDefault.default));
parcelHelpers.export(exports, "permute", ()=>(0, _permuteJsDefault.default));
parcelHelpers.export(exports, "quantile", ()=>(0, _quantileJsDefault.default));
parcelHelpers.export(exports, "quantileIndex", ()=>(0, _quantileJs.quantileIndex));
parcelHelpers.export(exports, "quantileSorted", ()=>(0, _quantileJs.quantileSorted));
parcelHelpers.export(exports, "quickselect", ()=>(0, _quickselectJsDefault.default));
parcelHelpers.export(exports, "range", ()=>(0, _rangeJsDefault.default));
parcelHelpers.export(exports, "rank", ()=>(0, _rankJsDefault.default));
parcelHelpers.export(exports, "least", ()=>(0, _leastJsDefault.default));
parcelHelpers.export(exports, "leastIndex", ()=>(0, _leastIndexJsDefault.default));
parcelHelpers.export(exports, "greatest", ()=>(0, _greatestJsDefault.default));
parcelHelpers.export(exports, "greatestIndex", ()=>(0, _greatestIndexJsDefault.default));
parcelHelpers.export(exports, "scan", ()=>(0, _scanJsDefault.default)) // Deprecated; use leastIndex.
;
parcelHelpers.export(exports, "shuffle", ()=>(0, _shuffleJsDefault.default));
parcelHelpers.export(exports, "shuffler", ()=>(0, _shuffleJs.shuffler));
parcelHelpers.export(exports, "sum", ()=>(0, _sumJsDefault.default));
parcelHelpers.export(exports, "ticks", ()=>(0, _ticksJsDefault.default));
parcelHelpers.export(exports, "tickIncrement", ()=>(0, _ticksJs.tickIncrement));
parcelHelpers.export(exports, "tickStep", ()=>(0, _ticksJs.tickStep));
parcelHelpers.export(exports, "transpose", ()=>(0, _transposeJsDefault.default));
parcelHelpers.export(exports, "variance", ()=>(0, _varianceJsDefault.default));
parcelHelpers.export(exports, "zip", ()=>(0, _zipJsDefault.default));
parcelHelpers.export(exports, "every", ()=>(0, _everyJsDefault.default));
parcelHelpers.export(exports, "some", ()=>(0, _someJsDefault.default));
parcelHelpers.export(exports, "filter", ()=>(0, _filterJsDefault.default));
parcelHelpers.export(exports, "map", ()=>(0, _mapJsDefault.default));
parcelHelpers.export(exports, "reduce", ()=>(0, _reduceJsDefault.default));
parcelHelpers.export(exports, "reverse", ()=>(0, _reverseJsDefault.default));
parcelHelpers.export(exports, "sort", ()=>(0, _sortJsDefault.default));
parcelHelpers.export(exports, "difference", ()=>(0, _differenceJsDefault.default));
parcelHelpers.export(exports, "disjoint", ()=>(0, _disjointJsDefault.default));
parcelHelpers.export(exports, "intersection", ()=>(0, _intersectionJsDefault.default));
parcelHelpers.export(exports, "subset", ()=>(0, _subsetJsDefault.default));
parcelHelpers.export(exports, "superset", ()=>(0, _supersetJsDefault.default));
parcelHelpers.export(exports, "union", ()=>(0, _unionJsDefault.default));
parcelHelpers.export(exports, "InternMap", ()=>(0, _internmap.InternMap));
parcelHelpers.export(exports, "InternSet", ()=>(0, _internmap.InternSet));
var _bisectJs = require("./bisect.js");
var _bisectJsDefault = parcelHelpers.interopDefault(_bisectJs);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _bisectorJs = require("./bisector.js");
var _bisectorJsDefault = parcelHelpers.interopDefault(_bisectorJs);
var _blurJs = require("./blur.js");
var _countJs = require("./count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _crossJs = require("./cross.js");
var _crossJsDefault = parcelHelpers.interopDefault(_crossJs);
var _cumsumJs = require("./cumsum.js");
var _cumsumJsDefault = parcelHelpers.interopDefault(_cumsumJs);
var _descendingJs = require("./descending.js");
var _descendingJsDefault = parcelHelpers.interopDefault(_descendingJs);
var _deviationJs = require("./deviation.js");
var _deviationJsDefault = parcelHelpers.interopDefault(_deviationJs);
var _extentJs = require("./extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _fsumJs = require("./fsum.js");
var _groupJs = require("./group.js");
var _groupJsDefault = parcelHelpers.interopDefault(_groupJs);
var _groupSortJs = require("./groupSort.js");
var _groupSortJsDefault = parcelHelpers.interopDefault(_groupSortJs);
var _binJs = require("./bin.js");
var _binJsDefault = parcelHelpers.interopDefault(_binJs);
var _freedmanDiaconisJs = require("./threshold/freedmanDiaconis.js");
var _freedmanDiaconisJsDefault = parcelHelpers.interopDefault(_freedmanDiaconisJs);
var _scottJs = require("./threshold/scott.js");
var _scottJsDefault = parcelHelpers.interopDefault(_scottJs);
var _sturgesJs = require("./threshold/sturges.js");
var _sturgesJsDefault = parcelHelpers.interopDefault(_sturgesJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _maxIndexJs = require("./maxIndex.js");
var _maxIndexJsDefault = parcelHelpers.interopDefault(_maxIndexJs);
var _meanJs = require("./mean.js");
var _meanJsDefault = parcelHelpers.interopDefault(_meanJs);
var _medianJs = require("./median.js");
var _medianJsDefault = parcelHelpers.interopDefault(_medianJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _minIndexJs = require("./minIndex.js");
var _minIndexJsDefault = parcelHelpers.interopDefault(_minIndexJs);
var _modeJs = require("./mode.js");
var _modeJsDefault = parcelHelpers.interopDefault(_modeJs);
var _niceJs = require("./nice.js");
var _niceJsDefault = parcelHelpers.interopDefault(_niceJs);
var _pairsJs = require("./pairs.js");
var _pairsJsDefault = parcelHelpers.interopDefault(_pairsJs);
var _permuteJs = require("./permute.js");
var _permuteJsDefault = parcelHelpers.interopDefault(_permuteJs);
var _quantileJs = require("./quantile.js");
var _quantileJsDefault = parcelHelpers.interopDefault(_quantileJs);
var _quickselectJs = require("./quickselect.js");
var _quickselectJsDefault = parcelHelpers.interopDefault(_quickselectJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _rankJs = require("./rank.js");
var _rankJsDefault = parcelHelpers.interopDefault(_rankJs);
var _leastJs = require("./least.js");
var _leastJsDefault = parcelHelpers.interopDefault(_leastJs);
var _leastIndexJs = require("./leastIndex.js");
var _leastIndexJsDefault = parcelHelpers.interopDefault(_leastIndexJs);
var _greatestJs = require("./greatest.js");
var _greatestJsDefault = parcelHelpers.interopDefault(_greatestJs);
var _greatestIndexJs = require("./greatestIndex.js");
var _greatestIndexJsDefault = parcelHelpers.interopDefault(_greatestIndexJs);
var _scanJs = require("./scan.js");
var _scanJsDefault = parcelHelpers.interopDefault(_scanJs);
var _shuffleJs = require("./shuffle.js");
var _shuffleJsDefault = parcelHelpers.interopDefault(_shuffleJs);
var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
var _ticksJs = require("./ticks.js");
var _ticksJsDefault = parcelHelpers.interopDefault(_ticksJs);
var _transposeJs = require("./transpose.js");
var _transposeJsDefault = parcelHelpers.interopDefault(_transposeJs);
var _varianceJs = require("./variance.js");
var _varianceJsDefault = parcelHelpers.interopDefault(_varianceJs);
var _zipJs = require("./zip.js");
var _zipJsDefault = parcelHelpers.interopDefault(_zipJs);
var _everyJs = require("./every.js");
var _everyJsDefault = parcelHelpers.interopDefault(_everyJs);
var _someJs = require("./some.js");
var _someJsDefault = parcelHelpers.interopDefault(_someJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _differenceJs = require("./difference.js");
var _differenceJsDefault = parcelHelpers.interopDefault(_differenceJs);
var _disjointJs = require("./disjoint.js");
var _disjointJsDefault = parcelHelpers.interopDefault(_disjointJs);
var _intersectionJs = require("./intersection.js");
var _intersectionJsDefault = parcelHelpers.interopDefault(_intersectionJs);
var _subsetJs = require("./subset.js");
var _subsetJsDefault = parcelHelpers.interopDefault(_subsetJs);
var _supersetJs = require("./superset.js");
var _supersetJsDefault = parcelHelpers.interopDefault(_supersetJs);
var _unionJs = require("./union.js");
var _unionJsDefault = parcelHelpers.interopDefault(_unionJs);
var _internmap = require("internmap");

},{"./bisect.js":"2jqf4","./ascending.js":"2iZSL","./bisector.js":"1BY0F","./blur.js":false,"./count.js":false,"./cross.js":false,"./cumsum.js":false,"./descending.js":"dpgkj","./deviation.js":false,"./extent.js":false,"./fsum.js":false,"./group.js":false,"./groupSort.js":false,"./bin.js":false,"./threshold/freedmanDiaconis.js":false,"./threshold/scott.js":false,"./threshold/sturges.js":false,"./max.js":"6b1uv","./maxIndex.js":false,"./mean.js":false,"./median.js":false,"./merge.js":false,"./min.js":"1KKa7","./minIndex.js":false,"./mode.js":false,"./nice.js":false,"./pairs.js":false,"./permute.js":false,"./quantile.js":false,"./quickselect.js":false,"./range.js":"kH8Ba","./rank.js":false,"./least.js":false,"./leastIndex.js":false,"./greatest.js":false,"./greatestIndex.js":false,"./scan.js":false,"./shuffle.js":false,"./sum.js":false,"./ticks.js":"iDfKX","./transpose.js":false,"./variance.js":false,"./zip.js":false,"./every.js":false,"./some.js":false,"./filter.js":false,"./map.js":false,"./reduce.js":false,"./reverse.js":false,"./sort.js":false,"./difference.js":false,"./disjoint.js":false,"./intersection.js":false,"./subset.js":false,"./superset.js":false,"./union.js":false,"internmap":"a6b0X","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"2jqf4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bisectRight", ()=>bisectRight);
parcelHelpers.export(exports, "bisectLeft", ()=>bisectLeft);
parcelHelpers.export(exports, "bisectCenter", ()=>bisectCenter);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _bisectorJs = require("./bisector.js");
var _bisectorJsDefault = parcelHelpers.interopDefault(_bisectorJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
const ascendingBisect = (0, _bisectorJsDefault.default)((0, _ascendingJsDefault.default));
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = (0, _bisectorJsDefault.default)((0, _numberJsDefault.default)).center;
exports.default = bisectRight;

},{"./ascending.js":"2iZSL","./bisector.js":"1BY0F","./number.js":"imr9T","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"2iZSL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function ascending(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
exports.default = ascending;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"1BY0F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ascendingJs = require("./ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _descendingJs = require("./descending.js");
var _descendingJsDefault = parcelHelpers.interopDefault(_descendingJs);
function bisector(f) {
    let compare1, compare2, delta;
    // If an accessor is specified, promote it to a comparator. In this case we
    // can test whether the search value is (self-) comparable. We can’t do this
    // for a comparator (except for specific, known comparators) because we can’t
    // tell if the comparator is symmetric, and an asymmetric comparator can’t be
    // used to test whether a single value is comparable.
    if (f.length !== 2) {
        compare1 = (0, _ascendingJsDefault.default);
        compare2 = (d, x)=>(0, _ascendingJsDefault.default)(f(d), x);
        delta = (d, x)=>f(d) - x;
    } else {
        compare1 = f === (0, _ascendingJsDefault.default) || f === (0, _descendingJsDefault.default) ? f : zero;
        compare2 = f;
        delta = f;
    }
    function left(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                const mid = lo + hi >>> 1;
                if (compare2(a[mid], x) < 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi);
        }
        return lo;
    }
    function right(a, x, lo = 0, hi = a.length) {
        if (lo < hi) {
            if (compare1(x, x) !== 0) return hi;
            do {
                const mid = lo + hi >>> 1;
                if (compare2(a[mid], x) <= 0) lo = mid + 1;
                else hi = mid;
            }while (lo < hi);
        }
        return lo;
    }
    function center(a, x, lo = 0, hi = a.length) {
        const i = left(a, x, lo, hi - 1);
        return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
        left,
        center,
        right
    };
}
exports.default = bisector;
function zero() {
    return 0;
}

},{"./ascending.js":"2iZSL","./descending.js":"dpgkj","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"dpgkj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function descending(a, b) {
    return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
exports.default = descending;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"imr9T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numbers", ()=>numbers);
function number(x) {
    return x === null ? NaN : +x;
}
exports.default = number;
function* numbers(values, valueof) {
    if (valueof === undefined) {
        for (let value of values)if (value != null && (value = +value) >= value) yield value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) yield value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"6b1uv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function max(values, valueof) {
    let max;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (max < value || max === undefined && value >= value)) max = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (max < value || max === undefined && value >= value)) max = value;
    }
    return max;
}
exports.default = max;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"1KKa7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function min(values, valueof) {
    let min;
    if (valueof === undefined) {
        for (const value of values)if (value != null && (min > value || min === undefined && value >= value)) min = value;
    } else {
        let index = -1;
        for (let value of values)if ((value = valueof(value, ++index, values)) != null && (min > value || min === undefined && value >= value)) min = value;
    }
    return min;
}
exports.default = min;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"kH8Ba":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function range(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
    while(++i < n)range[i] = start + i * step;
    return range;
}
exports.default = range;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"iDfKX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tickIncrement", ()=>tickIncrement);
parcelHelpers.export(exports, "tickStep", ()=>tickStep);
const e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function tickSpec(start, stop, count) {
    const step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
    let i1, i2, inc;
    if (power < 0) {
        inc = Math.pow(10, -power) / factor;
        i1 = Math.round(start * inc);
        i2 = Math.round(stop * inc);
        if (i1 / inc < start) ++i1;
        if (i2 / inc > stop) --i2;
        inc = -inc;
    } else {
        inc = Math.pow(10, power) * factor;
        i1 = Math.round(start / inc);
        i2 = Math.round(stop / inc);
        if (i1 * inc < start) ++i1;
        if (i2 * inc > stop) --i2;
    }
    if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
    return [
        i1,
        i2,
        inc
    ];
}
function ticks(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    if (!(count > 0)) return [];
    if (start === stop) return [
        start
    ];
    const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
    if (!(i2 >= i1)) return [];
    const n = i2 - i1 + 1, ticks = new Array(n);
    if (reverse) {
        if (inc < 0) for(let i = 0; i < n; ++i)ticks[i] = (i2 - i) / -inc;
        else for(let i = 0; i < n; ++i)ticks[i] = (i2 - i) * inc;
    } else {
        if (inc < 0) for(let i = 0; i < n; ++i)ticks[i] = (i1 + i) / -inc;
        else for(let i = 0; i < n; ++i)ticks[i] = (i1 + i) * inc;
    }
    return ticks;
}
exports.default = ticks;
function tickIncrement(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    return tickSpec(start, stop, count)[2];
}
function tickStep(start, stop, count) {
    stop = +stop, start = +start, count = +count;
    const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
    return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"a6b0X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InternMap", ()=>InternMap);
parcelHelpers.export(exports, "InternSet", ()=>InternSet);
class InternMap extends Map {
    constructor(entries, key = keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (entries != null) for (const [key, value] of entries)this.set(key, value);
    }
    get(key) {
        return super.get(intern_get(this, key));
    }
    has(key) {
        return super.has(intern_get(this, key));
    }
    set(key, value) {
        return super.set(intern_set(this, key), value);
    }
    delete(key) {
        return super.delete(intern_delete(this, key));
    }
}
class InternSet extends Set {
    constructor(values, key = keyof){
        super();
        Object.defineProperties(this, {
            _intern: {
                value: new Map()
            },
            _key: {
                value: key
            }
        });
        if (values != null) for (const value of values)this.add(value);
    }
    has(value) {
        return super.has(intern_get(this, value));
    }
    add(value) {
        return super.add(intern_set(this, value));
    }
    delete(value) {
        return super.delete(intern_delete(this, value));
    }
}
function intern_get({ _intern , _key  }, value) {
    const key = _key(value);
    return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern , _key  }, value) {
    const key = _key(value);
    if (_intern.has(key)) return _intern.get(key);
    _intern.set(key, value);
    return value;
}
function intern_delete({ _intern , _key  }, value) {
    const key = _key(value);
    if (_intern.has(key)) {
        value = _intern.get(key);
        _intern.delete(key);
    }
    return value;
}
function keyof(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"1LsCM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity);
parcelHelpers.export(exports, "copy", ()=>copy);
parcelHelpers.export(exports, "transformer", ()=>transformer);
var _d3Array = require("d3-array");
var _d3Interpolate = require("d3-interpolate");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var unit = [
    0,
    1
];
function identity(x) {
    return x;
}
function normalize(a, b) {
    return (b -= a = +a) ? function(x) {
        return (x - a) / b;
    } : (0, _constantJsDefault.default)(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) {
        return Math.max(a, Math.min(b, x));
    };
}
// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) {
        return r0(d0(x));
    };
}
function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
    }
    while(++i < j){
        d[i] = normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
    }
    return function(x) {
        var i = (0, _d3Array.bisect)(domain, x, 1, j) - 1;
        return r[i](d[i](x));
    };
}
function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
    var domain = unit, range = unit, interpolate = (0, _d3Interpolate.interpolate), transform, untransform, unknown, clamp = identity, piecewise, output, input;
    function rescale() {
        var n = Math.min(domain.length, range.length);
        if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
        piecewise = n > 2 ? polymap : bimap;
        output = input = null;
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function(y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), (0, _d3Interpolate.interpolateNumber))))(y)));
    };
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_, (0, _numberJsDefault.default)), rescale()) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = Array.from(_), interpolate = (0, _d3Interpolate.interpolateRound), rescale();
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
    };
    scale.interpolate = function(_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t, u) {
        transform = t, untransform = u;
        return rescale();
    };
}
function continuous() {
    return transformer()(identity, identity);
}
exports.default = continuous;

},{"d3-array":"1yX2W","d3-interpolate":"6jJyi","./constant.js":"kIv0D","./number.js":"k9Lyx","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"6jJyi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>(0, _valueJsDefault.default));
parcelHelpers.export(exports, "interpolateArray", ()=>(0, _arrayJsDefault.default));
parcelHelpers.export(exports, "interpolateBasis", ()=>(0, _basisJsDefault.default));
parcelHelpers.export(exports, "interpolateBasisClosed", ()=>(0, _basisClosedJsDefault.default));
parcelHelpers.export(exports, "interpolateDate", ()=>(0, _dateJsDefault.default));
parcelHelpers.export(exports, "interpolateDiscrete", ()=>(0, _discreteJsDefault.default));
parcelHelpers.export(exports, "interpolateHue", ()=>(0, _hueJsDefault.default));
parcelHelpers.export(exports, "interpolateNumber", ()=>(0, _numberJsDefault.default));
parcelHelpers.export(exports, "interpolateNumberArray", ()=>(0, _numberArrayJsDefault.default));
parcelHelpers.export(exports, "interpolateObject", ()=>(0, _objectJsDefault.default));
parcelHelpers.export(exports, "interpolateRound", ()=>(0, _roundJsDefault.default));
parcelHelpers.export(exports, "interpolateString", ()=>(0, _stringJsDefault.default));
parcelHelpers.export(exports, "interpolateTransformCss", ()=>(0, _indexJs.interpolateTransformCss));
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>(0, _indexJs.interpolateTransformSvg));
parcelHelpers.export(exports, "interpolateZoom", ()=>(0, _zoomJsDefault.default));
parcelHelpers.export(exports, "interpolateRgb", ()=>(0, _rgbJsDefault.default));
parcelHelpers.export(exports, "interpolateRgbBasis", ()=>(0, _rgbJs.rgbBasis));
parcelHelpers.export(exports, "interpolateRgbBasisClosed", ()=>(0, _rgbJs.rgbBasisClosed));
parcelHelpers.export(exports, "interpolateHsl", ()=>(0, _hslJsDefault.default));
parcelHelpers.export(exports, "interpolateHslLong", ()=>(0, _hslJs.hslLong));
parcelHelpers.export(exports, "interpolateLab", ()=>(0, _labJsDefault.default));
parcelHelpers.export(exports, "interpolateHcl", ()=>(0, _hclJsDefault.default));
parcelHelpers.export(exports, "interpolateHclLong", ()=>(0, _hclJs.hclLong));
parcelHelpers.export(exports, "interpolateCubehelix", ()=>(0, _cubehelixJsDefault.default));
parcelHelpers.export(exports, "interpolateCubehelixLong", ()=>(0, _cubehelixJs.cubehelixLong));
parcelHelpers.export(exports, "piecewise", ()=>(0, _piecewiseJsDefault.default));
parcelHelpers.export(exports, "quantize", ()=>(0, _quantizeJsDefault.default));
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _arrayJs = require("./array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _discreteJs = require("./discrete.js");
var _discreteJsDefault = parcelHelpers.interopDefault(_discreteJs);
var _hueJs = require("./hue.js");
var _hueJsDefault = parcelHelpers.interopDefault(_hueJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
var _objectJs = require("./object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _roundJs = require("./round.js");
var _roundJsDefault = parcelHelpers.interopDefault(_roundJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
var _indexJs = require("./transform/index.js");
var _zoomJs = require("./zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _rgbJs = require("./rgb.js");
var _rgbJsDefault = parcelHelpers.interopDefault(_rgbJs);
var _hslJs = require("./hsl.js");
var _hslJsDefault = parcelHelpers.interopDefault(_hslJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _hclJs = require("./hcl.js");
var _hclJsDefault = parcelHelpers.interopDefault(_hclJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);
var _piecewiseJs = require("./piecewise.js");
var _piecewiseJsDefault = parcelHelpers.interopDefault(_piecewiseJs);
var _quantizeJs = require("./quantize.js");
var _quantizeJsDefault = parcelHelpers.interopDefault(_quantizeJs);

},{"./value.js":"2GpMq","./array.js":"bQXK0","./basis.js":"enhcL","./basisClosed.js":"gdZAO","./date.js":"cCKgJ","./discrete.js":false,"./hue.js":false,"./number.js":"fZAq5","./numberArray.js":"l29YZ","./object.js":"hdyKg","./round.js":"8lHW7","./string.js":"Qre8m","./transform/index.js":"jDBQO","./zoom.js":false,"./rgb.js":"gHrgo","./hsl.js":false,"./lab.js":false,"./hcl.js":false,"./cubehelix.js":false,"./piecewise.js":false,"./quantize.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"2GpMq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _rgbJs = require("./rgb.js");
var _rgbJsDefault = parcelHelpers.interopDefault(_rgbJs);
var _arrayJs = require("./array.js");
var _dateJs = require("./date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _objectJs = require("./object.js");
var _objectJsDefault = parcelHelpers.interopDefault(_objectJs);
var _stringJs = require("./string.js");
var _stringJsDefault = parcelHelpers.interopDefault(_stringJs);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
exports.default = function(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? (0, _constantJsDefault.default)(b) : (t === "number" ? (0, _numberJsDefault.default) : t === "string" ? (c = (0, _d3Color.color)(b)) ? (b = c, _rgbJsDefault.default) : (0, _stringJsDefault.default) : b instanceof (0, _d3Color.color) ? (0, _rgbJsDefault.default) : b instanceof Date ? (0, _dateJsDefault.default) : (0, _numberArrayJs.isNumberArray)(b) ? (0, _numberArrayJsDefault.default) : Array.isArray(b) ? (0, _arrayJs.genericArray) : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? (0, _objectJsDefault.default) : (0, _numberJsDefault.default))(a, b);
};

},{"d3-color":"grhaa","./rgb.js":"gHrgo","./array.js":"bQXK0","./date.js":"cCKgJ","./number.js":"fZAq5","./object.js":"hdyKg","./string.js":"Qre8m","./constant.js":"aXv76","./numberArray.js":"l29YZ","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"grhaa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>(0, _colorJsDefault.default));
parcelHelpers.export(exports, "rgb", ()=>(0, _colorJs.rgb));
parcelHelpers.export(exports, "hsl", ()=>(0, _colorJs.hsl));
parcelHelpers.export(exports, "lab", ()=>(0, _labJsDefault.default));
parcelHelpers.export(exports, "hcl", ()=>(0, _labJs.hcl));
parcelHelpers.export(exports, "lch", ()=>(0, _labJs.lch));
parcelHelpers.export(exports, "gray", ()=>(0, _labJs.gray));
parcelHelpers.export(exports, "cubehelix", ()=>(0, _cubehelixJsDefault.default));
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _labJs = require("./lab.js");
var _labJsDefault = parcelHelpers.interopDefault(_labJs);
var _cubehelixJs = require("./cubehelix.js");
var _cubehelixJsDefault = parcelHelpers.interopDefault(_cubehelixJs);

},{"./color.js":"cNCyv","./lab.js":false,"./cubehelix.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"cNCyv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Color", ()=>Color);
parcelHelpers.export(exports, "darker", ()=>darker);
parcelHelpers.export(exports, "brighter", ()=>brighter);
parcelHelpers.export(exports, "rgbConvert", ()=>rgbConvert);
parcelHelpers.export(exports, "rgb", ()=>rgb);
parcelHelpers.export(exports, "Rgb", ()=>Rgb);
parcelHelpers.export(exports, "hslConvert", ()=>hslConvert);
parcelHelpers.export(exports, "hsl", ()=>hsl);
var _defineJs = require("./define.js");
var _defineJsDefault = parcelHelpers.interopDefault(_defineJs);
function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, _defineJsDefault.default)(Color, color, {
    copy (channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable () {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHex8() {
    return this.rgb().formatHex8();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null // invalid hex
    ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
exports.default = color;
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, _defineJsDefault.default)(Rgb, rgb, (0, _defineJs.extend)(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb () {
        return this;
    },
    clamp () {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable () {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, _defineJsDefault.default)(Hsl, hsl, (0, _defineJs.extend)(Color, {
    brighter (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp () {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl () {
        const a = clampa(this.opacity);
        return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
}));
function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
}
function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
}
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

},{"./define.js":"avQOe","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"avQOe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend);
exports.default = function(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
};
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"gHrgo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbBasis", ()=>rgbBasis);
parcelHelpers.export(exports, "rgbBasisClosed", ()=>rgbBasisClosed);
var _d3Color = require("d3-color");
var _basisJs = require("./basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _basisClosedJs = require("./basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
exports.default = function rgbGamma(y) {
    var color = (0, _colorJs.gamma)(y);
    function rgb(start, end) {
        var r = color((start = (0, _d3Color.rgb)(start)).r, (end = (0, _d3Color.rgb)(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0, _colorJsDefault.default)(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = (0, _d3Color.rgb)(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var rgbBasis = rgbSpline((0, _basisJsDefault.default));
var rgbBasisClosed = rgbSpline((0, _basisClosedJsDefault.default));

},{"d3-color":"grhaa","./basis.js":"enhcL","./basisClosed.js":"gdZAO","./color.js":"1eZq9","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"enhcL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "basis", ()=>basis);
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
exports.default = function(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return basis((t - i / n) * n, v0, v1, v2, v3);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"gdZAO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _basisJs = require("./basis.js");
exports.default = function(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return (0, _basisJs.basis)((t - i / n) * n, v0, v1, v2, v3);
    };
};

},{"./basis.js":"enhcL","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"1eZq9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hue", ()=>hue);
parcelHelpers.export(exports, "gamma", ()=>gamma);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
function linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : (0, _constantJsDefault.default)(isNaN(a) ? b : a);
}
exports.default = nogamma;

},{"./constant.js":"aXv76","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"aXv76":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (x)=>()=>x;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"bQXK0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "genericArray", ()=>genericArray);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
var _numberArrayJs = require("./numberArray.js");
var _numberArrayJsDefault = parcelHelpers.interopDefault(_numberArrayJs);
exports.default = function(a, b) {
    return ((0, _numberArrayJs.isNumberArray)(b) ? (0, _numberArrayJsDefault.default) : genericArray)(a, b);
};
function genericArray(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = (0, _valueJsDefault.default)(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}

},{"./value.js":"2GpMq","./numberArray.js":"l29YZ","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"l29YZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumberArray", ()=>isNumberArray);
exports.default = function(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
};
function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"cCKgJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fZAq5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"hdyKg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _valueJs = require("./value.js");
var _valueJsDefault = parcelHelpers.interopDefault(_valueJs);
exports.default = function(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for(k in b)if (k in a) i[k] = (0, _valueJsDefault.default)(a[k], b[k]);
    else c[k] = b[k];
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
};

},{"./value.js":"2GpMq","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"Qre8m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
    return function() {
        return b;
    };
}
function one(b) {
    return function(t) {
        return b(t) + "";
    };
}
exports.default = function(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = reA.exec(a)) && (bm = reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i]) s[i] += bm; // coalesce with previous string
            else s[++i] = bm;
        } else {
            s[++i] = null;
            q.push({
                i: i,
                x: (0, _numberJsDefault.default)(am, bm)
            });
        }
        bi = reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
};

},{"./number.js":"fZAq5","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8lHW7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(a, b) {
    return a = +a, b = +b, function(t) {
        return Math.round(a * (1 - t) + b * t);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"jDBQO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolateTransformCss", ()=>interpolateTransformCss);
parcelHelpers.export(exports, "interpolateTransformSvg", ()=>interpolateTransformSvg);
var _numberJs = require("../number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _parseJs = require("./parse.js");
function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: (0, _numberJsDefault.default)(xa, xb)
            }, {
                i: i - 2,
                x: (0, _numberJsDefault.default)(ya, yb)
            });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: (0, _numberJsDefault.default)(a, b)
            });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
    }
    function skewX(a, b, s, q) {
        if (a !== b) q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: (0, _numberJsDefault.default)(a, b)
        });
        else if (b) s.push(pop(s) + "skewX(" + b + degParen);
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: (0, _numberJsDefault.default)(xa, xb)
            }, {
                i: i - 2,
                x: (0, _numberJsDefault.default)(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var interpolateTransformCss = interpolateTransform((0, _parseJs.parseCss), "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform((0, _parseJs.parseSvg), ", ", ")", ")");

},{"../number.js":"fZAq5","./parse.js":"dwvtF","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"dwvtF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable no-undef */ parcelHelpers.export(exports, "parseCss", ()=>parseCss);
parcelHelpers.export(exports, "parseSvg", ()=>parseSvg);
var _decomposeJs = require("./decompose.js");
var _decomposeJsDefault = parcelHelpers.interopDefault(_decomposeJs);
var svgNode;
function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? (0, _decomposeJs.identity) : (0, _decomposeJsDefault.default)(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
    if (value == null) return 0, _decomposeJs.identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return 0, _decomposeJs.identity;
    value = value.matrix;
    return (0, _decomposeJsDefault.default)(value.a, value.b, value.c, value.d, value.e, value.f);
}

},{"./decompose.js":"7Ejbr","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"7Ejbr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity);
var degrees = 180 / Math.PI;
var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
exports.default = function(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"kIv0D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function constants(x) {
    return function() {
        return x;
    };
}
exports.default = constants;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"k9Lyx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function number(x) {
    return +x;
}
exports.default = number;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"kp8lc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRange", ()=>initRange);
parcelHelpers.export(exports, "initInterpolator", ()=>initInterpolator);
function initRange(domain, range) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(domain);
            break;
        default:
            this.range(range).domain(domain);
            break;
    }
    return this;
}
function initInterpolator(domain, interpolator) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            if (typeof domain === "function") this.interpolator(domain);
            else this.range(domain);
            break;
        default:
            this.domain(domain);
            if (typeof interpolator === "function") this.interpolator(interpolator);
            else this.range(interpolator);
            break;
    }
    return this;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ahQef":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Array = require("d3-array");
var _d3Format = require("d3-format");
function tickFormat(start, stop, count, specifier) {
    var step = (0, _d3Array.tickStep)(start, stop, count), precision;
    specifier = (0, _d3Format.formatSpecifier)(specifier == null ? ",f" : specifier);
    switch(specifier.type){
        case "s":
            var value = Math.max(Math.abs(start), Math.abs(stop));
            if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionPrefix)(step, value))) specifier.precision = precision;
            return (0, _d3Format.formatPrefix)(specifier, value);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionRound)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
            break;
        case "f":
        case "%":
            if (specifier.precision == null && !isNaN(precision = (0, _d3Format.precisionFixed)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
            break;
    }
    return (0, _d3Format.format)(specifier);
}
exports.default = tickFormat;

},{"d3-array":"1yX2W","d3-format":"4XOv2","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4XOv2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDefaultLocale", ()=>(0, _defaultLocaleJsDefault.default));
parcelHelpers.export(exports, "format", ()=>(0, _defaultLocaleJs.format));
parcelHelpers.export(exports, "formatPrefix", ()=>(0, _defaultLocaleJs.formatPrefix));
parcelHelpers.export(exports, "formatLocale", ()=>(0, _localeJsDefault.default));
parcelHelpers.export(exports, "formatSpecifier", ()=>(0, _formatSpecifierJsDefault.default));
parcelHelpers.export(exports, "FormatSpecifier", ()=>(0, _formatSpecifierJs.FormatSpecifier));
parcelHelpers.export(exports, "precisionFixed", ()=>(0, _precisionFixedJsDefault.default));
parcelHelpers.export(exports, "precisionPrefix", ()=>(0, _precisionPrefixJsDefault.default));
parcelHelpers.export(exports, "precisionRound", ()=>(0, _precisionRoundJsDefault.default));
var _defaultLocaleJs = require("./defaultLocale.js");
var _defaultLocaleJsDefault = parcelHelpers.interopDefault(_defaultLocaleJs);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var _formatSpecifierJs = require("./formatSpecifier.js");
var _formatSpecifierJsDefault = parcelHelpers.interopDefault(_formatSpecifierJs);
var _precisionFixedJs = require("./precisionFixed.js");
var _precisionFixedJsDefault = parcelHelpers.interopDefault(_precisionFixedJs);
var _precisionPrefixJs = require("./precisionPrefix.js");
var _precisionPrefixJsDefault = parcelHelpers.interopDefault(_precisionPrefixJs);
var _precisionRoundJs = require("./precisionRound.js");
var _precisionRoundJsDefault = parcelHelpers.interopDefault(_precisionRoundJs);

},{"./defaultLocale.js":"g4Ai7","./locale.js":"8sic5","./formatSpecifier.js":"4gfsY","./precisionFixed.js":"kCBOH","./precisionPrefix.js":"anfJX","./precisionRound.js":"djznD","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"g4Ai7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "format", ()=>format);
parcelHelpers.export(exports, "formatPrefix", ()=>formatPrefix);
var _localeJs = require("./locale.js");
var _localeJsDefault = parcelHelpers.interopDefault(_localeJs);
var locale;
var format;
var formatPrefix;
defaultLocale({
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ]
});
function defaultLocale(definition) {
    locale = (0, _localeJsDefault.default)(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
}
exports.default = defaultLocale;

},{"./locale.js":"8sic5","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8sic5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
var _formatGroupJs = require("./formatGroup.js");
var _formatGroupJsDefault = parcelHelpers.interopDefault(_formatGroupJs);
var _formatNumeralsJs = require("./formatNumerals.js");
var _formatNumeralsJsDefault = parcelHelpers.interopDefault(_formatNumeralsJs);
var _formatSpecifierJs = require("./formatSpecifier.js");
var _formatSpecifierJsDefault = parcelHelpers.interopDefault(_formatSpecifierJs);
var _formatTrimJs = require("./formatTrim.js");
var _formatTrimJsDefault = parcelHelpers.interopDefault(_formatTrimJs);
var _formatTypesJs = require("./formatTypes.js");
var _formatTypesJsDefault = parcelHelpers.interopDefault(_formatTypesJs);
var _formatPrefixAutoJs = require("./formatPrefixAuto.js");
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var map = Array.prototype.map, prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xb5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
exports.default = function(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? (0, _identityJsDefault.default) : (0, _formatGroupJsDefault.default)(map.call(locale.grouping, Number), locale.thousands + ""), currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "", currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "", decimal = locale.decimal === undefined ? "." : locale.decimal + "", numerals = locale.numerals === undefined ? (0, _identityJsDefault.default) : (0, _formatNumeralsJsDefault.default)(map.call(locale.numerals, String)), percent = locale.percent === undefined ? "%" : locale.percent + "", minus = locale.minus === undefined ? "−" : locale.minus + "", nan = locale.nan === undefined ? "NaN" : locale.nan + "";
    function newFormat(specifier) {
        specifier = (0, _formatSpecifierJsDefault.default)(specifier);
        var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
        // The "n" type is an alias for ",g".
        if (type === "n") comma = true, type = "g";
        else if (!(0, _formatTypesJsDefault.default)[type]) precision === undefined && (precision = 12), trim = true, type = "g";
        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = (0, _formatTypesJsDefault.default)[type], maybeSuffix = /[defgprs%]/.test(type);
        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
        function format(value) {
            var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
            if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
            } else {
                value = +value;
                // Determine the sign. -0 is not less than 0, but 1 / -0 is!
                var valueNegative = value < 0 || 1 / value < 0;
                // Perform the initial formatting.
                value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
                // Trim insignificant zeros.
                if (trim) value = (0, _formatTrimJsDefault.default)(value);
                // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
                if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
                // Compute the prefix and suffix.
                valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                valueSuffix = (type === "s" ? prefixes[8 + (0, _formatPrefixAutoJs.prefixExponent) / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                    i = -1, n = value.length;
                    while(++i < n)if (c = value.charCodeAt(i), 48 > c || c > 57) {
                        valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                        value = value.slice(0, i);
                        break;
                    }
                }
            }
            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero) value = group(value, Infinity);
            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            // Reconstruct the final output based on the desired alignment.
            switch(align){
                case "<":
                    value = valuePrefix + value + valueSuffix + padding;
                    break;
                case "=":
                    value = valuePrefix + padding + value + valueSuffix;
                    break;
                case "^":
                    value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                    break;
                default:
                    value = padding + valuePrefix + value + valueSuffix;
                    break;
            }
            return numerals(value);
        }
        format.toString = function() {
            return specifier + "";
        };
        return format;
    }
    function formatPrefix(specifier, value) {
        var f = newFormat((specifier = (0, _formatSpecifierJsDefault.default)(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor((0, _exponentJsDefault.default)(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
        return function(value) {
            return f(k * value) + prefix;
        };
    }
    return {
        format: newFormat,
        formatPrefix: formatPrefix
    };
};

},{"./exponent.js":"7L05r","./formatGroup.js":"97wNI","./formatNumerals.js":"bnEku","./formatSpecifier.js":"4gfsY","./formatTrim.js":"cGiOx","./formatTypes.js":"aVp9c","./formatPrefixAuto.js":"lOwtK","./identity.js":"9nHXj","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"7L05r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDecimalJs = require("./formatDecimal.js");
exports.default = function(x) {
    return x = (0, _formatDecimalJs.formatDecimalParts)(Math.abs(x)), x ? x[1] : NaN;
};

},{"./formatDecimal.js":"fkS16","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fkS16":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
parcelHelpers.export(exports, "formatDecimalParts", ()=>formatDecimalParts);
exports.default = function(x) {
    return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
};
function formatDecimalParts(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"97wNI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(grouping, thousands) {
    return function(value, width) {
        var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
        while(i > 0 && g > 0){
            if (length + g + 1 > width) g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width) break;
            g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"bnEku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(numerals) {
    return function(value) {
        return value.replace(/[0-9]/g, function(i) {
            return numerals[+i];
        });
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4gfsY":[function(require,module,exports) {
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormatSpecifier", ()=>FormatSpecifier);
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
    });
}
exports.default = formatSpecifier;
formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof
function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"cGiOx":[function(require,module,exports) {
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(s) {
    out: for(var n = s.length, i = 1, i0 = -1, i1; i < n; ++i)switch(s[i]){
        case ".":
            i0 = i1 = i;
            break;
        case "0":
            if (i0 === 0) i0 = i;
            i1 = i;
            break;
        default:
            if (!+s[i]) break out;
            if (i0 > 0) i0 = 0;
            break;
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"aVp9c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDecimalJs = require("./formatDecimal.js");
var _formatDecimalJsDefault = parcelHelpers.interopDefault(_formatDecimalJs);
var _formatPrefixAutoJs = require("./formatPrefixAuto.js");
var _formatPrefixAutoJsDefault = parcelHelpers.interopDefault(_formatPrefixAutoJs);
var _formatRoundedJs = require("./formatRounded.js");
var _formatRoundedJsDefault = parcelHelpers.interopDefault(_formatRoundedJs);
exports.default = {
    "%": (x, p)=>(x * 100).toFixed(p),
    "b": (x)=>Math.round(x).toString(2),
    "c": (x)=>x + "",
    "d": (0, _formatDecimalJsDefault.default),
    "e": (x, p)=>x.toExponential(p),
    "f": (x, p)=>x.toFixed(p),
    "g": (x, p)=>x.toPrecision(p),
    "o": (x)=>Math.round(x).toString(8),
    "p": (x, p)=>(0, _formatRoundedJsDefault.default)(x * 100, p),
    "r": (0, _formatRoundedJsDefault.default),
    "s": (0, _formatPrefixAutoJsDefault.default),
    "X": (x)=>Math.round(x).toString(16).toUpperCase(),
    "x": (x)=>Math.round(x).toString(16)
};

},{"./formatDecimal.js":"fkS16","./formatPrefixAuto.js":"lOwtK","./formatRounded.js":"gq71u","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"lOwtK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prefixExponent", ()=>prefixExponent);
var _formatDecimalJs = require("./formatDecimal.js");
var prefixExponent;
exports.default = function(x, p) {
    var d = (0, _formatDecimalJs.formatDecimalParts)(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + (0, _formatDecimalJs.formatDecimalParts)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
};

},{"./formatDecimal.js":"fkS16","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"gq71u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatDecimalJs = require("./formatDecimal.js");
exports.default = function(x, p) {
    var d = (0, _formatDecimalJs.formatDecimalParts)(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
};

},{"./formatDecimal.js":"fkS16","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"9nHXj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return x;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"kCBOH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
exports.default = function(step) {
    return Math.max(0, -(0, _exponentJsDefault.default)(Math.abs(step)));
};

},{"./exponent.js":"7L05r","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"anfJX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
exports.default = function(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, _exponentJsDefault.default)(value) / 3))) * 3 - (0, _exponentJsDefault.default)(Math.abs(step)));
};

},{"./exponent.js":"7L05r","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"djznD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _exponentJs = require("./exponent.js");
var _exponentJsDefault = parcelHelpers.interopDefault(_exponentJs);
exports.default = function(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, (0, _exponentJsDefault.default)(max) - (0, _exponentJsDefault.default)(step)) + 1;
};

},{"./exponent.js":"7L05r","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"hNjKg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "implicit", ()=>implicit);
var _d3Array = require("d3-array");
var _initJs = require("./init.js");
const implicit = Symbol("implicit");
function ordinal() {
    var index = new (0, _d3Array.InternMap)(), domain = [], range = [], unknown = implicit;
    function scale(d) {
        let i = index.get(d);
        if (i === undefined) {
            if (unknown !== implicit) return unknown;
            index.set(d, i = domain.push(d) - 1);
        }
        return range[i % range.length];
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [], index = new (0, _d3Array.InternMap)();
        for (const value of _){
            if (index.has(value)) continue;
            index.set(value, domain.push(value) - 1);
        }
        return scale;
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), scale) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return ordinal(domain, range).unknown(unknown);
    };
    (0, _initJs.initRange).apply(scale, arguments);
    return scale;
}
exports.default = ordinal;

},{"d3-array":"1yX2W","./init.js":"kp8lc","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8e44u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _continuousJs = require("./continuous.js");
var _continuousJsDefault = parcelHelpers.interopDefault(_continuousJs);
var _initJs = require("./init.js");
var _linearJs = require("./linear.js");
var _numberJs = require("./number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
function square(x) {
    return Math.sign(x) * x * x;
}
function unsquare(x) {
    return Math.sign(x) * Math.sqrt(Math.abs(x));
}
function radial() {
    var squared = (0, _continuousJsDefault.default)(), range = [
        0,
        1
    ], round = false, unknown;
    function scale(x) {
        var y = unsquare(squared(x));
        return isNaN(y) ? unknown : round ? Math.round(y) : y;
    }
    scale.invert = function(y) {
        return squared.invert(square(y));
    };
    scale.domain = function(_) {
        return arguments.length ? (squared.domain(_), scale) : squared.domain();
    };
    scale.range = function(_) {
        return arguments.length ? (squared.range((range = Array.from(_, (0, _numberJsDefault.default))).map(square)), scale) : range.slice();
    };
    scale.rangeRound = function(_) {
        return scale.range(_).round(true);
    };
    scale.round = function(_) {
        return arguments.length ? (round = !!_, scale) : round;
    };
    scale.clamp = function(_) {
        return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return radial(squared.domain(), range).round(round).clamp(squared.clamp()).unknown(unknown);
    };
    (0, _initJs.initRange).apply(scale, arguments);
    return (0, _linearJs.linearish)(scale);
}
exports.default = radial;

},{"./continuous.js":"1LsCM","./init.js":"kp8lc","./linear.js":"lob4K","./number.js":"k9Lyx","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"9ZwCu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadData", ()=>loadData);
const loadData = ()=>{
    const nodes = require("823ddf4ed075553f");
    const edges = require("565c4c39c009f488");
    console.log("nodes", nodes);
    console.log("edges", edges);
    return [
        nodes,
        edges
    ];
};

},{"823ddf4ed075553f":"aKcxm","565c4c39c009f488":"i3YVd","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"aKcxm":[function(require,module,exports) {
module.exports = JSON.parse('[{"id":"prince","name":"Prince Escalus","house":"Ruling house of Verona","importance":"primary","descrition":"Ruling Prince of Verona","totalLines":76,"firstLineNumber":88,"firstLine":"Rebellious subjects, enemies to peace,"},{"id":"paris","name":"Count Paris","house":"Ruling house of Verona","importance":"primary","descrition":"Kinsman of Escalus who wishes to marry Juliet.","totalLines":70,"firstLineNumber":256,"firstLine":"Of honourable reckoning are you both,"},{"id":"mercutio","name":"Mercutio","house":"Ruling house of Verona","importance":"primary","descrition":"Another kinsman of Escalus, a friend of Romeo.","totalLines":261,"firstLineNumber":478,"firstLine":"Nay, gentle Romeo, we must have you dance."},{"id":"page","name":"Page","house":"Ruling house of Verona","importance":"secondary","totalLines":9,"firstLineNumber":2784,"firstLine":"[Aside]  I am almost afraid to stand alone"},{"id":"capulet","name":"Capulet","house":"House of Capulet","importance":"primary","descrition":"Patriarch of the house of Capulet.","totalLines":273,"firstLineNumber":82,"firstLine":"What noise is this? Give me my long sword, ho!"},{"id":"lady_capulet","name":"Lady Capulet","house":"House of Capulet","importance":"primary","descrition":"Matriarch of the house of Capulet.","totalLines":115,"firstLineNumber":83,"firstLine":"A crutch, a crutch! why call you for a sword?"},{"id":"juliet","name":"Juliet Capulet","house":"House of Capulet","importance":"primary","descrition":"13-year-old daughter of Capulet, the play\'s female protagonist.","totalLines":544,"firstLineNumber":360,"firstLine":"How now! who calls?"},{"id":"tybalt","name":"Tybalt","house":"House of Capulet","importance":"primary","descrition":"Cousin of Juliet, the nephew of Lady Capulet.","totalLines":36,"firstLineNumber":73,"firstLine":"What, art thou drawn among these heartless hinds?"},{"id":"nurse","name":"The Nurse","house":"House of Capulet","importance":"primary","description":"Juliet\'s personal attendant and confidante.","totalLines":281,"firstLineNumber":357,"firstLine":"Now, by my maidenhead, at twelve year old,"},{"id":"peter","name":"Peter","house":"House of Capulet","importance":"secondary","description":"Servant of the Capulet household.","totalLines":33,"firstLineNumber":1198,"firstLine":"Anon!"},{"id":"sampson","name":"Sampson","house":"House of Capulet","importance":"secondary","description":"Servant of the Capulet household.","totalLines":31,"firstLineNumber":15,"firstLine":"Gregory, o\' my word, we\'ll not carry coals."},{"id":"gregory","name":"Gregory","house":"House of Capulet","importance":"secondary","description":"Servant of the Capulet household.","totalLines":20,"firstLineNumber":16,"firstLine":"No, for then we should be colliers."},{"id":"second_capulet","name":"Second Capulet","house":"House of Capulet","importance":"secondary","totalLines":3,"firstLineNumber":618,"firstLine":"By\'r lady, thirty years."},{"id":"musician","name":"Musician","house":"House of Capulet","importance":"secondary","totalLines":1,"firstLineNumber":2642,"firstLine":"Marry, sir, because silver hath a sweet sound."},{"id":"first_musician","name":"First Musician","house":"House of Capulet","importance":"secondary","totalLines":9,"firstLineNumber":2611,"firstLine":"Faith, we may put up our pipes, and be gone."},{"id":"second_musician","name":"Second Musician","house":"House of Capulet","importance":"secondary","totalLines":4,"firstLineNumber":2633,"firstLine":"Pray you, put up your dagger, and put out your wit."},{"id":"servant","name":"Servant","house":"House of Capulet","importance":"secondary","totalLines":23,"firstLineNumber":291,"firstLine":"Find them out whose names are written here! It is"},{"id":"first_servant","name":"First Servant","house":"House of Capulet","importance":"secondary","totalLines":10,"firstLineNumber":586,"firstLine":"Where\'s Potpan, that he helps not to take away? He"},{"id":"second_servant","name":"Second Servant","house":"House of Capulet","importance":"secondary","totalLines":12,"firstLineNumber":588,"firstLine":"When good manners shall lie all in one or two men\'s"},{"id":"montague","name":"Montague","house":"House of Montague","importance":"primary","description":"Patriarch of the house of Montague.","totalLines":41,"firstLineNumber":86,"firstLine":"Thou villain Capulet,--Hold me not, let me go."},{"id":"lady_montague","name":"Lady Montague","house":"House of Montague","importance":"primary","description":"Matriarch of the house of Montague.","totalLines":3,"firstLineNumber":87,"firstLine":"Thou shalt not stir a foot to seek a foe."},{"id":"romeo","name":"Romeo Montague","house":"House of Montague","importance":"primary","description":"Son of Montague, is the play\'s male protagonist.","totalLines":613,"firstLineNumber":167,"firstLine":"Is the day so young?"},{"id":"benvolio","name":"Benvolio","house":"House of Montague","importance":"primary","description":"Romeo\'s cousin and best friend.","totalLines":160,"firstLineNumber":71,"firstLine":"Part, fools!"},{"id":"balthasar","name":"Balthasar","house":"House of Montague","importance":"secondary","description":"Servant of the Montague household.","totalLines":32,"firstLineNumber":2672,"firstLine":"Then she is well, and nothing can be ill:"},{"id":"Abraham","name":"Abram","house":"House of Montague","importance":"secondary","description":"Servant of the Montague household.","totalLines":5,"firstLineNumber":54,"firstLine":"Do you bite your thumb at us, sir?"},{"id":"friar_laurence","name":"Friar Laurence","house":"Others","importance":"primary","description":"Franciscan friar and Romeo\'s confidant.","totalLines":351,"firstLineNumber":1003,"firstLine":"The grey-eyed morn smiles on the frowning night,"},{"id":"friar_john","name":"Friar John","house":"Others","importance":"primary","description":"Sent to deliver Friar Laurence\'s letter to Romeo.","totalLines":13,"firstLineNumber":2745,"firstLine":"Holy Franciscan friar! brother, ho!"},{"id":"apothecary","name":"Apothecary","house":"Others","importance":"primary","description":"Reluctantly sells Romeo poison.","totalLines":7,"firstLineNumber":2715,"firstLine":"Who calls so loud?"},{"id":"chorus","name":"Chorus","house":"Others","importance":"primary","description":"Reads a prologue to each of the first two acts.","totalLines":29,"firstLineNumber":0,"firstLine":"Two households, both alike in dignity,"},{"id":"first_citizen","name":"First Citizen","house":"Others","importance":"secondary","totalLines":7,"firstLineNumber":80,"firstLine":"Clubs, bills, and partisans! strike! beat them down!"},{"id":"first_watchman","name":"First Watchman","house":"Others","importance":"secondary","totalLines":19,"firstLineNumber":2950,"firstLine":"[Within]  Lead, boy: which way?"},{"id":"second_watchman","name":"Second Watchman","house":"Others","importance":"secondary","totalLines":1,"firstLineNumber":2965,"firstLine":"Here\'s Romeo\'s man, we found him in the churchyard."},{"id":"third_watchman","name":"Third Watchman","house":"Others","importance":"secondary","totalLines":3,"firstLineNumber":2967,"firstLine":"Here is a friar, that trembles, sighs and weeps:"},{"id":"third_musician","name":"Third Musician","house":"Others","importance":"secondary","totalLines":1,"firstLineNumber":2646,"firstLine":"Faith, I know not what to say."}]');

},{}],"i3YVd":[function(require,module,exports) {
module.exports = JSON.parse('[{"source":"sampson","target":"gregory","weight":1},{"source":"sampson","target":"Abraham","weight":1},{"source":"sampson","target":"benvolio","weight":1},{"source":"sampson","target":"tybalt","weight":1},{"source":"sampson","target":"first_citizen","weight":1},{"source":"sampson","target":"capulet","weight":1},{"source":"sampson","target":"lady_capulet","weight":1},{"source":"sampson","target":"montague","weight":1},{"source":"sampson","target":"lady_montague","weight":1},{"source":"sampson","target":"prince","weight":1},{"source":"sampson","target":"romeo","weight":1},{"source":"gregory","target":"sampson","weight":1},{"source":"gregory","target":"Abraham","weight":1},{"source":"gregory","target":"benvolio","weight":1},{"source":"gregory","target":"tybalt","weight":1},{"source":"gregory","target":"first_citizen","weight":1},{"source":"gregory","target":"capulet","weight":1},{"source":"gregory","target":"lady_capulet","weight":1},{"source":"gregory","target":"montague","weight":1},{"source":"gregory","target":"lady_montague","weight":1},{"source":"gregory","target":"prince","weight":1},{"source":"gregory","target":"romeo","weight":1},{"source":"Abraham","target":"sampson","weight":1},{"source":"Abraham","target":"gregory","weight":1},{"source":"Abraham","target":"benvolio","weight":1},{"source":"Abraham","target":"tybalt","weight":1},{"source":"Abraham","target":"first_citizen","weight":1},{"source":"Abraham","target":"capulet","weight":1},{"source":"Abraham","target":"lady_capulet","weight":1},{"source":"Abraham","target":"montague","weight":1},{"source":"Abraham","target":"lady_montague","weight":1},{"source":"Abraham","target":"prince","weight":1},{"source":"Abraham","target":"romeo","weight":1},{"source":"benvolio","target":"sampson","weight":1},{"source":"benvolio","target":"gregory","weight":1},{"source":"benvolio","target":"Abraham","weight":1},{"source":"benvolio","target":"tybalt","weight":3},{"source":"benvolio","target":"first_citizen","weight":2},{"source":"benvolio","target":"capulet","weight":3},{"source":"benvolio","target":"lady_capulet","weight":2},{"source":"benvolio","target":"montague","weight":2},{"source":"benvolio","target":"lady_montague","weight":1},{"source":"benvolio","target":"prince","weight":2},{"source":"benvolio","target":"romeo","weight":7},{"source":"tybalt","target":"sampson","weight":1},{"source":"tybalt","target":"gregory","weight":1},{"source":"tybalt","target":"Abraham","weight":1},{"source":"tybalt","target":"benvolio","weight":3},{"source":"tybalt","target":"first_citizen","weight":2},{"source":"tybalt","target":"capulet","weight":2},{"source":"tybalt","target":"lady_capulet","weight":2},{"source":"tybalt","target":"montague","weight":2},{"source":"tybalt","target":"lady_montague","weight":1},{"source":"tybalt","target":"prince","weight":2},{"source":"tybalt","target":"romeo","weight":3},{"source":"first_citizen","target":"sampson","weight":1},{"source":"first_citizen","target":"gregory","weight":1},{"source":"first_citizen","target":"Abraham","weight":1},{"source":"first_citizen","target":"benvolio","weight":2},{"source":"first_citizen","target":"tybalt","weight":2},{"source":"first_citizen","target":"capulet","weight":1},{"source":"first_citizen","target":"lady_capulet","weight":2},{"source":"first_citizen","target":"montague","weight":2},{"source":"first_citizen","target":"lady_montague","weight":1},{"source":"first_citizen","target":"prince","weight":2},{"source":"first_citizen","target":"romeo","weight":2},{"source":"capulet","target":"sampson","weight":1},{"source":"capulet","target":"gregory","weight":1},{"source":"capulet","target":"Abraham","weight":1},{"source":"capulet","target":"benvolio","weight":3},{"source":"capulet","target":"tybalt","weight":2},{"source":"capulet","target":"first_citizen","weight":1},{"source":"capulet","target":"lady_capulet","weight":7},{"source":"capulet","target":"montague","weight":2},{"source":"capulet","target":"lady_montague","weight":1},{"source":"capulet","target":"prince","weight":2},{"source":"capulet","target":"romeo","weight":5},{"source":"lady_capulet","target":"sampson","weight":1},{"source":"lady_capulet","target":"gregory","weight":1},{"source":"lady_capulet","target":"Abraham","weight":1},{"source":"lady_capulet","target":"benvolio","weight":2},{"source":"lady_capulet","target":"tybalt","weight":2},{"source":"lady_capulet","target":"first_citizen","weight":2},{"source":"lady_capulet","target":"capulet","weight":7},{"source":"lady_capulet","target":"montague","weight":3},{"source":"lady_capulet","target":"lady_montague","weight":1},{"source":"lady_capulet","target":"prince","weight":3},{"source":"lady_capulet","target":"romeo","weight":4},{"source":"montague","target":"sampson","weight":1},{"source":"montague","target":"gregory","weight":1},{"source":"montague","target":"Abraham","weight":1},{"source":"montague","target":"benvolio","weight":2},{"source":"montague","target":"tybalt","weight":2},{"source":"montague","target":"first_citizen","weight":2},{"source":"montague","target":"capulet","weight":2},{"source":"montague","target":"lady_capulet","weight":3},{"source":"montague","target":"lady_montague","weight":1},{"source":"montague","target":"prince","weight":3},{"source":"montague","target":"romeo","weight":3},{"source":"lady_montague","target":"sampson","weight":1},{"source":"lady_montague","target":"gregory","weight":1},{"source":"lady_montague","target":"Abraham","weight":1},{"source":"lady_montague","target":"benvolio","weight":1},{"source":"lady_montague","target":"tybalt","weight":1},{"source":"lady_montague","target":"first_citizen","weight":1},{"source":"lady_montague","target":"capulet","weight":1},{"source":"lady_montague","target":"lady_capulet","weight":1},{"source":"lady_montague","target":"montague","weight":1},{"source":"lady_montague","target":"prince","weight":1},{"source":"lady_montague","target":"romeo","weight":1},{"source":"prince","target":"sampson","weight":1},{"source":"prince","target":"gregory","weight":1},{"source":"prince","target":"Abraham","weight":1},{"source":"prince","target":"benvolio","weight":2},{"source":"prince","target":"tybalt","weight":2},{"source":"prince","target":"first_citizen","weight":2},{"source":"prince","target":"capulet","weight":2},{"source":"prince","target":"lady_capulet","weight":3},{"source":"prince","target":"montague","weight":3},{"source":"prince","target":"lady_montague","weight":1},{"source":"prince","target":"romeo","weight":3},{"source":"romeo","target":"sampson","weight":1},{"source":"romeo","target":"gregory","weight":1},{"source":"romeo","target":"Abraham","weight":1},{"source":"romeo","target":"benvolio","weight":7},{"source":"romeo","target":"tybalt","weight":3},{"source":"romeo","target":"first_citizen","weight":2},{"source":"romeo","target":"capulet","weight":5},{"source":"romeo","target":"lady_capulet","weight":4},{"source":"romeo","target":"montague","weight":3},{"source":"romeo","target":"lady_montague","weight":1},{"source":"romeo","target":"prince","weight":3},{"source":"capulet","target":"paris","weight":4},{"source":"capulet","target":"servant","weight":2},{"source":"paris","target":"capulet","weight":4},{"source":"paris","target":"servant","weight":1},{"source":"paris","target":"benvolio","weight":1},{"source":"paris","target":"romeo","weight":2},{"source":"servant","target":"capulet","weight":2},{"source":"servant","target":"paris","weight":1},{"source":"servant","target":"benvolio","weight":2},{"source":"servant","target":"romeo","weight":2},{"source":"benvolio","target":"paris","weight":1},{"source":"benvolio","target":"servant","weight":2},{"source":"romeo","target":"paris","weight":2},{"source":"romeo","target":"servant","weight":2},{"source":"lady_capulet","target":"nurse","weight":5},{"source":"lady_capulet","target":"juliet","weight":5},{"source":"lady_capulet","target":"servant","weight":1},{"source":"nurse","target":"lady_capulet","weight":5},{"source":"nurse","target":"juliet","weight":7},{"source":"nurse","target":"servant","weight":2},{"source":"juliet","target":"lady_capulet","weight":5},{"source":"juliet","target":"nurse","weight":7},{"source":"juliet","target":"servant","weight":2},{"source":"servant","target":"lady_capulet","weight":1},{"source":"servant","target":"nurse","weight":2},{"source":"servant","target":"juliet","weight":2},{"source":"romeo","target":"mercutio","weight":4},{"source":"benvolio","target":"mercutio","weight":4},{"source":"mercutio","target":"romeo","weight":4},{"source":"mercutio","target":"benvolio","weight":4},{"source":"first_servant","target":"second_servant","weight":2},{"source":"first_servant","target":"capulet","weight":2},{"source":"first_servant","target":"second_capulet","weight":1},{"source":"first_servant","target":"romeo","weight":1},{"source":"first_servant","target":"servant","weight":1},{"source":"first_servant","target":"tybalt","weight":1},{"source":"first_servant","target":"juliet","weight":1},{"source":"first_servant","target":"nurse","weight":2},{"source":"first_servant","target":"benvolio","weight":1},{"source":"second_servant","target":"first_servant","weight":2},{"source":"second_servant","target":"capulet","weight":3},{"source":"second_servant","target":"second_capulet","weight":1},{"source":"second_servant","target":"romeo","weight":1},{"source":"second_servant","target":"servant","weight":1},{"source":"second_servant","target":"tybalt","weight":1},{"source":"second_servant","target":"juliet","weight":2},{"source":"second_servant","target":"nurse","weight":3},{"source":"second_servant","target":"benvolio","weight":1},{"source":"capulet","target":"first_servant","weight":2},{"source":"capulet","target":"second_servant","weight":3},{"source":"capulet","target":"second_capulet","weight":1},{"source":"capulet","target":"juliet","weight":4},{"source":"capulet","target":"nurse","weight":5},{"source":"second_capulet","target":"first_servant","weight":1},{"source":"second_capulet","target":"second_servant","weight":1},{"source":"second_capulet","target":"capulet","weight":1},{"source":"second_capulet","target":"romeo","weight":1},{"source":"second_capulet","target":"servant","weight":1},{"source":"second_capulet","target":"tybalt","weight":1},{"source":"second_capulet","target":"juliet","weight":1},{"source":"second_capulet","target":"nurse","weight":1},{"source":"second_capulet","target":"benvolio","weight":1},{"source":"romeo","target":"first_servant","weight":1},{"source":"romeo","target":"second_servant","weight":1},{"source":"romeo","target":"second_capulet","weight":1},{"source":"romeo","target":"juliet","weight":5},{"source":"romeo","target":"nurse","weight":5},{"source":"servant","target":"first_servant","weight":1},{"source":"servant","target":"second_servant","weight":1},{"source":"servant","target":"second_capulet","weight":1},{"source":"servant","target":"tybalt","weight":1},{"source":"tybalt","target":"first_servant","weight":1},{"source":"tybalt","target":"second_servant","weight":1},{"source":"tybalt","target":"second_capulet","weight":1},{"source":"tybalt","target":"servant","weight":1},{"source":"tybalt","target":"juliet","weight":1},{"source":"tybalt","target":"nurse","weight":1},{"source":"juliet","target":"first_servant","weight":1},{"source":"juliet","target":"second_servant","weight":2},{"source":"juliet","target":"capulet","weight":4},{"source":"juliet","target":"second_capulet","weight":1},{"source":"juliet","target":"romeo","weight":5},{"source":"juliet","target":"tybalt","weight":1},{"source":"juliet","target":"benvolio","weight":1},{"source":"nurse","target":"first_servant","weight":2},{"source":"nurse","target":"second_servant","weight":3},{"source":"nurse","target":"capulet","weight":5},{"source":"nurse","target":"second_capulet","weight":1},{"source":"nurse","target":"romeo","weight":5},{"source":"nurse","target":"tybalt","weight":1},{"source":"nurse","target":"benvolio","weight":2},{"source":"benvolio","target":"first_servant","weight":1},{"source":"benvolio","target":"second_servant","weight":1},{"source":"benvolio","target":"second_capulet","weight":1},{"source":"benvolio","target":"juliet","weight":1},{"source":"benvolio","target":"nurse","weight":2},{"source":"friar_laurence","target":"romeo","weight":4},{"source":"romeo","target":"friar_laurence","weight":4},{"source":"mercutio","target":"nurse","weight":1},{"source":"mercutio","target":"peter","weight":1},{"source":"benvolio","target":"peter","weight":1},{"source":"romeo","target":"peter","weight":1},{"source":"nurse","target":"mercutio","weight":1},{"source":"nurse","target":"peter","weight":2},{"source":"peter","target":"mercutio","weight":1},{"source":"peter","target":"benvolio","weight":1},{"source":"peter","target":"romeo","weight":1},{"source":"peter","target":"nurse","weight":2},{"source":"friar_laurence","target":"juliet","weight":3},{"source":"juliet","target":"friar_laurence","weight":3},{"source":"mercutio","target":"tybalt","weight":1},{"source":"mercutio","target":"first_citizen","weight":1},{"source":"mercutio","target":"prince","weight":1},{"source":"mercutio","target":"lady_capulet","weight":1},{"source":"mercutio","target":"montague","weight":1},{"source":"tybalt","target":"mercutio","weight":1},{"source":"first_citizen","target":"mercutio","weight":1},{"source":"prince","target":"mercutio","weight":1},{"source":"lady_capulet","target":"mercutio","weight":1},{"source":"montague","target":"mercutio","weight":1},{"source":"friar_laurence","target":"nurse","weight":2},{"source":"nurse","target":"friar_laurence","weight":2},{"source":"paris","target":"lady_capulet","weight":3},{"source":"lady_capulet","target":"paris","weight":3},{"source":"friar_laurence","target":"paris","weight":3},{"source":"paris","target":"friar_laurence","weight":3},{"source":"paris","target":"juliet","weight":2},{"source":"juliet","target":"paris","weight":2},{"source":"second_servant","target":"lady_capulet","weight":2},{"source":"lady_capulet","target":"second_servant","weight":2},{"source":"lady_capulet","target":"first_servant","weight":1},{"source":"first_servant","target":"lady_capulet","weight":1},{"source":"nurse","target":"paris","weight":1},{"source":"nurse","target":"first_musician","weight":1},{"source":"nurse","target":"second_musician","weight":1},{"source":"nurse","target":"musician","weight":1},{"source":"nurse","target":"third_musician","weight":1},{"source":"lady_capulet","target":"friar_laurence","weight":2},{"source":"lady_capulet","target":"first_musician","weight":1},{"source":"lady_capulet","target":"peter","weight":1},{"source":"lady_capulet","target":"second_musician","weight":1},{"source":"lady_capulet","target":"musician","weight":1},{"source":"lady_capulet","target":"third_musician","weight":1},{"source":"capulet","target":"friar_laurence","weight":2},{"source":"capulet","target":"first_musician","weight":1},{"source":"capulet","target":"peter","weight":1},{"source":"capulet","target":"second_musician","weight":1},{"source":"capulet","target":"musician","weight":1},{"source":"capulet","target":"third_musician","weight":1},{"source":"friar_laurence","target":"lady_capulet","weight":2},{"source":"friar_laurence","target":"capulet","weight":2},{"source":"friar_laurence","target":"first_musician","weight":1},{"source":"friar_laurence","target":"peter","weight":1},{"source":"friar_laurence","target":"second_musician","weight":1},{"source":"friar_laurence","target":"musician","weight":1},{"source":"friar_laurence","target":"third_musician","weight":1},{"source":"paris","target":"nurse","weight":1},{"source":"paris","target":"first_musician","weight":1},{"source":"paris","target":"peter","weight":1},{"source":"paris","target":"second_musician","weight":1},{"source":"paris","target":"musician","weight":1},{"source":"paris","target":"third_musician","weight":1},{"source":"first_musician","target":"nurse","weight":1},{"source":"first_musician","target":"lady_capulet","weight":1},{"source":"first_musician","target":"capulet","weight":1},{"source":"first_musician","target":"friar_laurence","weight":1},{"source":"first_musician","target":"paris","weight":1},{"source":"first_musician","target":"peter","weight":1},{"source":"first_musician","target":"second_musician","weight":1},{"source":"first_musician","target":"musician","weight":1},{"source":"first_musician","target":"third_musician","weight":1},{"source":"peter","target":"lady_capulet","weight":1},{"source":"peter","target":"capulet","weight":1},{"source":"peter","target":"friar_laurence","weight":1},{"source":"peter","target":"paris","weight":1},{"source":"peter","target":"first_musician","weight":1},{"source":"peter","target":"second_musician","weight":1},{"source":"peter","target":"musician","weight":1},{"source":"peter","target":"third_musician","weight":1},{"source":"second_musician","target":"nurse","weight":1},{"source":"second_musician","target":"lady_capulet","weight":1},{"source":"second_musician","target":"capulet","weight":1},{"source":"second_musician","target":"friar_laurence","weight":1},{"source":"second_musician","target":"paris","weight":1},{"source":"second_musician","target":"first_musician","weight":1},{"source":"second_musician","target":"peter","weight":1},{"source":"second_musician","target":"musician","weight":1},{"source":"second_musician","target":"third_musician","weight":1},{"source":"musician","target":"nurse","weight":1},{"source":"musician","target":"lady_capulet","weight":1},{"source":"musician","target":"capulet","weight":1},{"source":"musician","target":"friar_laurence","weight":1},{"source":"musician","target":"paris","weight":1},{"source":"musician","target":"first_musician","weight":1},{"source":"musician","target":"peter","weight":1},{"source":"musician","target":"second_musician","weight":1},{"source":"musician","target":"third_musician","weight":1},{"source":"third_musician","target":"nurse","weight":1},{"source":"third_musician","target":"lady_capulet","weight":1},{"source":"third_musician","target":"capulet","weight":1},{"source":"third_musician","target":"friar_laurence","weight":1},{"source":"third_musician","target":"paris","weight":1},{"source":"third_musician","target":"first_musician","weight":1},{"source":"third_musician","target":"peter","weight":1},{"source":"third_musician","target":"second_musician","weight":1},{"source":"third_musician","target":"musician","weight":1},{"source":"romeo","target":"balthasar","weight":2},{"source":"romeo","target":"apothecary","weight":1},{"source":"balthasar","target":"romeo","weight":2},{"source":"balthasar","target":"apothecary","weight":1},{"source":"apothecary","target":"romeo","weight":1},{"source":"apothecary","target":"balthasar","weight":1},{"source":"friar_john","target":"friar_laurence","weight":1},{"source":"friar_laurence","target":"friar_john","weight":1},{"source":"paris","target":"page","weight":1},{"source":"paris","target":"balthasar","weight":1},{"source":"paris","target":"first_watchman","weight":1},{"source":"paris","target":"second_watchman","weight":1},{"source":"paris","target":"third_watchman","weight":1},{"source":"paris","target":"prince","weight":1},{"source":"paris","target":"montague","weight":1},{"source":"page","target":"paris","weight":1},{"source":"page","target":"romeo","weight":1},{"source":"page","target":"balthasar","weight":1},{"source":"page","target":"friar_laurence","weight":1},{"source":"page","target":"juliet","weight":1},{"source":"page","target":"first_watchman","weight":1},{"source":"page","target":"second_watchman","weight":1},{"source":"page","target":"third_watchman","weight":1},{"source":"page","target":"prince","weight":1},{"source":"page","target":"capulet","weight":1},{"source":"page","target":"lady_capulet","weight":1},{"source":"page","target":"montague","weight":1},{"source":"romeo","target":"page","weight":1},{"source":"romeo","target":"first_watchman","weight":1},{"source":"romeo","target":"second_watchman","weight":1},{"source":"romeo","target":"third_watchman","weight":1},{"source":"balthasar","target":"paris","weight":1},{"source":"balthasar","target":"page","weight":1},{"source":"balthasar","target":"friar_laurence","weight":1},{"source":"balthasar","target":"juliet","weight":1},{"source":"balthasar","target":"first_watchman","weight":1},{"source":"balthasar","target":"second_watchman","weight":1},{"source":"balthasar","target":"third_watchman","weight":1},{"source":"balthasar","target":"prince","weight":1},{"source":"balthasar","target":"capulet","weight":1},{"source":"balthasar","target":"lady_capulet","weight":1},{"source":"balthasar","target":"montague","weight":1},{"source":"friar_laurence","target":"page","weight":1},{"source":"friar_laurence","target":"balthasar","weight":1},{"source":"friar_laurence","target":"first_watchman","weight":1},{"source":"friar_laurence","target":"second_watchman","weight":1},{"source":"friar_laurence","target":"third_watchman","weight":1},{"source":"friar_laurence","target":"prince","weight":1},{"source":"friar_laurence","target":"montague","weight":1},{"source":"juliet","target":"page","weight":1},{"source":"juliet","target":"balthasar","weight":1},{"source":"juliet","target":"first_watchman","weight":1},{"source":"juliet","target":"second_watchman","weight":1},{"source":"juliet","target":"third_watchman","weight":1},{"source":"juliet","target":"prince","weight":1},{"source":"juliet","target":"montague","weight":1},{"source":"first_watchman","target":"paris","weight":1},{"source":"first_watchman","target":"page","weight":1},{"source":"first_watchman","target":"romeo","weight":1},{"source":"first_watchman","target":"balthasar","weight":1},{"source":"first_watchman","target":"friar_laurence","weight":1},{"source":"first_watchman","target":"juliet","weight":1},{"source":"first_watchman","target":"second_watchman","weight":1},{"source":"first_watchman","target":"third_watchman","weight":1},{"source":"first_watchman","target":"prince","weight":1},{"source":"first_watchman","target":"capulet","weight":1},{"source":"first_watchman","target":"lady_capulet","weight":1},{"source":"first_watchman","target":"montague","weight":1},{"source":"second_watchman","target":"paris","weight":1},{"source":"second_watchman","target":"page","weight":1},{"source":"second_watchman","target":"romeo","weight":1},{"source":"second_watchman","target":"balthasar","weight":1},{"source":"second_watchman","target":"friar_laurence","weight":1},{"source":"second_watchman","target":"juliet","weight":1},{"source":"second_watchman","target":"first_watchman","weight":1},{"source":"second_watchman","target":"third_watchman","weight":1},{"source":"second_watchman","target":"prince","weight":1},{"source":"second_watchman","target":"capulet","weight":1},{"source":"second_watchman","target":"lady_capulet","weight":1},{"source":"second_watchman","target":"montague","weight":1},{"source":"third_watchman","target":"paris","weight":1},{"source":"third_watchman","target":"page","weight":1},{"source":"third_watchman","target":"romeo","weight":1},{"source":"third_watchman","target":"balthasar","weight":1},{"source":"third_watchman","target":"friar_laurence","weight":1},{"source":"third_watchman","target":"juliet","weight":1},{"source":"third_watchman","target":"first_watchman","weight":1},{"source":"third_watchman","target":"second_watchman","weight":1},{"source":"third_watchman","target":"prince","weight":1},{"source":"third_watchman","target":"capulet","weight":1},{"source":"third_watchman","target":"lady_capulet","weight":1},{"source":"third_watchman","target":"montague","weight":1},{"source":"prince","target":"paris","weight":1},{"source":"prince","target":"page","weight":1},{"source":"prince","target":"balthasar","weight":1},{"source":"prince","target":"friar_laurence","weight":1},{"source":"prince","target":"juliet","weight":1},{"source":"prince","target":"first_watchman","weight":1},{"source":"prince","target":"second_watchman","weight":1},{"source":"prince","target":"third_watchman","weight":1},{"source":"capulet","target":"page","weight":1},{"source":"capulet","target":"balthasar","weight":1},{"source":"capulet","target":"first_watchman","weight":1},{"source":"capulet","target":"second_watchman","weight":1},{"source":"capulet","target":"third_watchman","weight":1},{"source":"lady_capulet","target":"page","weight":1},{"source":"lady_capulet","target":"balthasar","weight":1},{"source":"lady_capulet","target":"first_watchman","weight":1},{"source":"lady_capulet","target":"second_watchman","weight":1},{"source":"lady_capulet","target":"third_watchman","weight":1},{"source":"montague","target":"paris","weight":1},{"source":"montague","target":"page","weight":1},{"source":"montague","target":"balthasar","weight":1},{"source":"montague","target":"friar_laurence","weight":1},{"source":"montague","target":"juliet","weight":1},{"source":"montague","target":"first_watchman","weight":1},{"source":"montague","target":"second_watchman","weight":1},{"source":"montague","target":"third_watchman","weight":1}]');

},{}],"bhcXq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawMatrix", ()=>drawMatrix);
var _d3Selection = require("d3-selection");
var _d3Array = require("d3-array");
var _d3Transition = require("d3-transition");
var _scales = require("./scales");
const drawMatrix = (nodes, edges)=>{
    // Order characters (nodes) by number of lines
    nodes.sort((a, b)=>b.totalLines - a.totalLines);
    // Create the data matrix
    const edgeHash = {};
    edges.forEach((edge)=>{
        const id = `${edge.source}-${edge.target}`;
        edgeHash[id] = edge;
    });
    console.log("edgeHash", edgeHash);
    const matrix = [];
    const itemWidth = 16;
    const padding = 2;
    nodes.forEach((charA, i)=>{
        nodes.forEach((charB, j)=>{
            if (charA !== charB) {
                const id = `${charA.id}-${charB.id}`;
                const item = {
                    id: id,
                    source: charA.id,
                    target: charB.id,
                    cx: i * (itemWidth + padding) + itemWidth / 2,
                    cy: j * (itemWidth + padding) + itemWidth / 2
                };
                if (edgeHash[id]) {
                    item["weight"] = edgeHash[id].weight;
                    matrix.push(item);
                }
            }
        });
    });
    console.log("matrix", matrix);
    // Dimensions
    const innerWidth = nodes.length * (itemWidth + padding);
    const innerHeight = nodes.length * (itemWidth + padding);
    const margin = {
        top: 130,
        right: 0,
        bottom: 0,
        left: 130
    };
    const width = innerWidth + margin.right + margin.left;
    const height = innerHeight + margin.top + margin.bottom;
    // Append SVG container
    const svg = (0, _d3Selection.select)("#matrix").append("svg").attr("viewBox", `0 0 ${width} ${height}`).append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);
    // Append matrix dots
    const minWeight = (0, _d3Array.min)(edges, (d)=>d.weight);
    const maxWeight = (0, _d3Array.max)(edges, (d)=>d.weight);
    svg.selectAll(".matrix-dot").data(matrix).join("circle").attr("class", "matrix-dot").attr("cx", (d)=>d.cx).attr("cy", (d)=>d.cy).attr("r", itemWidth / 2).attr("fill", (d)=>d.weight ? (0, _scales.getEdgeColor)(minWeight, maxWeight, d.weight) : "white");
    // Append labels
    svg.selectAll(".label-left").data(nodes).join("text").attr("class", "label-left").attr("x", -8).attr("y", (d, i)=>i * (itemWidth + padding) + itemWidth / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((d)=>d.name).style("font-size", "13px");
    svg.selectAll(".label-top").data(nodes).join("text").attr("class", "label-top").attr("dominant-baseline", "middle").attr("transform", (d, i)=>`translate(${i * (itemWidth + padding) + itemWidth / 2}, -8) rotate(-90)`).text((d)=>d.name).style("font-size", "13px");
    // Add legend
    const weights = (0, _d3Array.range)(minWeight, maxWeight + 1);
    const legend = (0, _d3Selection.select)(".matrix-legend").append("ul").selectAll(".legend-color").data(weights).join("li").attr("class", "legend-color");
    legend.append("div").attr("class", "legend-color-circle").style("background-color", (d)=>(0, _scales.getEdgeColor)(minWeight, maxWeight, d));
    legend.append("div").attr("class", "legend-color-label").text((d)=>d);
    // Interaction - Mouse over dot
    (0, _d3Selection.selectAll)(".matrix-dot").on("mouseenter", (e, d)=>{
        const t = (0, _d3Transition.transition)().duration(150);
        (0, _d3Selection.selectAll)(".matrix-dot").transition(t).attr("fill-opacity", (dot)=>dot.id === d.id ? 1 : 0.1);
        (0, _d3Selection.selectAll)(".label-top").transition(t).style("opacity", (label)=>label.id === d.source ? 1 : 0.1);
        (0, _d3Selection.selectAll)(".label-left").transition(t).style("opacity", (label)=>label.id === d.target ? 1 : 0.1);
        const charA = nodes.find((char)=>char.id === d.source).name;
        const charB = nodes.find((char)=>char.id === d.target).name;
        (0, _d3Selection.select)(".matrix-tooltip-charA").text(charA);
        (0, _d3Selection.select)(".matrix-tooltip-charB").text(charB);
        (0, _d3Selection.select)(".matrix-tooltip-scenes").text(d.weight);
        (0, _d3Selection.select)(".matrix-tooltip").classed("hidden", false);
    }).on("mouseleave", (e, d)=>{
        (0, _d3Selection.selectAll)(".matrix-dot").attr("fill-opacity", 1);
        (0, _d3Selection.selectAll)(".label-top, .label-left").style("opacity", 1);
        (0, _d3Selection.select)(".matrix-tooltip").classed("hidden", true);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8","d3-selection":"gn9gd","d3-array":"1yX2W","d3-transition":"4lorl","./scales":"NYsfE"}],"4lorl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transition", ()=>(0, _indexJsDefault.default));
parcelHelpers.export(exports, "active", ()=>(0, _activeJsDefault.default));
parcelHelpers.export(exports, "interrupt", ()=>(0, _interruptJsDefault.default));
var _indexJs = require("./selection/index.js");
var _indexJs1 = require("./transition/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs1);
var _activeJs = require("./active.js");
var _activeJsDefault = parcelHelpers.interopDefault(_activeJs);
var _interruptJs = require("./interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);

},{"./selection/index.js":"heX1u","./transition/index.js":"h2Srb","./active.js":false,"./interrupt.js":"j3g05","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"heX1u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _d3Selection = require("d3-selection");
var _interruptJs = require("./interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);
var _transitionJs = require("./transition.js");
var _transitionJsDefault = parcelHelpers.interopDefault(_transitionJs);
(0, _d3Selection.selection).prototype.interrupt = (0, _interruptJsDefault.default);
(0, _d3Selection.selection).prototype.transition = (0, _transitionJsDefault.default);

},{"d3-selection":"gn9gd","./interrupt.js":"ecsW0","./transition.js":"aZzEX","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ecsW0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _interruptJs = require("../interrupt.js");
var _interruptJsDefault = parcelHelpers.interopDefault(_interruptJs);
exports.default = function(name) {
    return this.each(function() {
        (0, _interruptJsDefault.default)(this, name);
    });
};

},{"../interrupt.js":"j3g05","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"j3g05":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./transition/schedule.js");
exports.default = function(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > (0, _scheduleJs.STARTING) && schedule.state < (0, _scheduleJs.ENDING);
        schedule.state = (0, _scheduleJs.ENDED);
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
};

},{"./transition/schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"de74c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CREATED", ()=>CREATED);
parcelHelpers.export(exports, "SCHEDULED", ()=>SCHEDULED);
parcelHelpers.export(exports, "STARTING", ()=>STARTING);
parcelHelpers.export(exports, "STARTED", ()=>STARTED);
parcelHelpers.export(exports, "RUNNING", ()=>RUNNING);
parcelHelpers.export(exports, "ENDING", ()=>ENDING);
parcelHelpers.export(exports, "ENDED", ()=>ENDED);
parcelHelpers.export(exports, "init", ()=>init);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "get", ()=>get);
var _d3Dispatch = require("d3-dispatch");
var _d3Timer = require("d3-timer");
var emptyOn = (0, _d3Dispatch.dispatch)("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
exports.default = function(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    create(node, id, {
        name: name,
        index: index,
        group: group,
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
    });
};
function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
}
function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
}
function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = (0, _d3Timer.timer)(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== SCHEDULED) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === STARTED) return (0, _d3Timer.timeout)(start);
            // Interrupt the active transition, if any.
            if (o.state === RUNNING) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        (0, _d3Timer.timeout)(function() {
            if (self.state === STARTED) {
                self.state = RUNNING;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING) return; // interrupted
        self.state = STARTED;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i)if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
        while(++i < n)tween[i].call(node, t);
        // Dispatch the end event.
        if (self.state === ENDING) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}

},{"d3-dispatch":"5WtHO","d3-timer":"7TEss","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"5WtHO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dispatch", ()=>(0, _dispatchJsDefault.default));
var _dispatchJs = require("./dispatch.js");
var _dispatchJsDefault = parcelHelpers.interopDefault(_dispatchJs);

},{"./dispatch.js":"8Hmyd","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8Hmyd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var noop = {
    value: ()=>{}
};
function dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
exports.default = dispatch;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"7TEss":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>(0, _timerJs.now));
parcelHelpers.export(exports, "timer", ()=>(0, _timerJs.timer));
parcelHelpers.export(exports, "timerFlush", ()=>(0, _timerJs.timerFlush));
parcelHelpers.export(exports, "timeout", ()=>(0, _timeoutJsDefault.default));
parcelHelpers.export(exports, "interval", ()=>(0, _intervalJsDefault.default));
var _timerJs = require("./timer.js");
var _timeoutJs = require("./timeout.js");
var _timeoutJsDefault = parcelHelpers.interopDefault(_timeoutJs);
var _intervalJs = require("./interval.js");
var _intervalJsDefault = parcelHelpers.interopDefault(_intervalJs);

},{"./timer.js":"bfF2F","./timeout.js":"ioM7O","./interval.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"bfF2F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "Timer", ()=>Timer);
parcelHelpers.export(exports, "timer", ()=>timer);
parcelHelpers.export(exports, "timerFlush", ()=>timerFlush);
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;
            else taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while(t){
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    } finally{
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while(t1)if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
    } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
    } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ioM7O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _timerJs = require("./timer.js");
exports.default = function(callback, delay, time) {
    var t = new (0, _timerJs.Timer);
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed)=>{
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
};

},{"./timer.js":"bfF2F","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"aZzEX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../transition/index.js");
var _scheduleJs = require("../transition/schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
var _d3Ease = require("d3-ease");
var _d3Timer = require("d3-timer");
var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: (0, _d3Ease.easeCubicInOut)
};
function inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
    }
    return timing;
}
exports.default = function(name) {
    var id, timing;
    if (name instanceof (0, _indexJs.Transition)) id = name._id, name = name._name;
    else id = (0, _indexJs.newId)(), (timing = defaultTiming).time = (0, _d3Timer.now)(), name = name == null ? null : name + "";
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) (0, _scheduleJsDefault.default)(node, name, id, i, group, timing || inherit(node, id));
    }
    return new (0, _indexJs.Transition)(groups, this._parents, name, id);
};

},{"../transition/index.js":"h2Srb","../transition/schedule.js":"de74c","d3-ease":"8sCNl","d3-timer":"7TEss","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"h2Srb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition);
parcelHelpers.export(exports, "newId", ()=>newId);
var _d3Selection = require("d3-selection");
var _attrJs = require("./attr.js");
var _attrJsDefault = parcelHelpers.interopDefault(_attrJs);
var _attrTweenJs = require("./attrTween.js");
var _attrTweenJsDefault = parcelHelpers.interopDefault(_attrTweenJs);
var _delayJs = require("./delay.js");
var _delayJsDefault = parcelHelpers.interopDefault(_delayJs);
var _durationJs = require("./duration.js");
var _durationJsDefault = parcelHelpers.interopDefault(_durationJs);
var _easeJs = require("./ease.js");
var _easeJsDefault = parcelHelpers.interopDefault(_easeJs);
var _easeVaryingJs = require("./easeVarying.js");
var _easeVaryingJsDefault = parcelHelpers.interopDefault(_easeVaryingJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _mergeJs = require("./merge.js");
var _mergeJsDefault = parcelHelpers.interopDefault(_mergeJs);
var _onJs = require("./on.js");
var _onJsDefault = parcelHelpers.interopDefault(_onJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _selectJs = require("./select.js");
var _selectJsDefault = parcelHelpers.interopDefault(_selectJs);
var _selectAllJs = require("./selectAll.js");
var _selectAllJsDefault = parcelHelpers.interopDefault(_selectAllJs);
var _selectionJs = require("./selection.js");
var _selectionJsDefault = parcelHelpers.interopDefault(_selectionJs);
var _styleJs = require("./style.js");
var _styleJsDefault = parcelHelpers.interopDefault(_styleJs);
var _styleTweenJs = require("./styleTween.js");
var _styleTweenJsDefault = parcelHelpers.interopDefault(_styleTweenJs);
var _textJs = require("./text.js");
var _textJsDefault = parcelHelpers.interopDefault(_textJs);
var _textTweenJs = require("./textTween.js");
var _textTweenJsDefault = parcelHelpers.interopDefault(_textTweenJs);
var _transitionJs = require("./transition.js");
var _transitionJsDefault = parcelHelpers.interopDefault(_transitionJs);
var _tweenJs = require("./tween.js");
var _tweenJsDefault = parcelHelpers.interopDefault(_tweenJs);
var _endJs = require("./end.js");
var _endJsDefault = parcelHelpers.interopDefault(_endJs);
var id = 0;
function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function transition(name) {
    return (0, _d3Selection.selection)().transition(name);
}
exports.default = transition;
function newId() {
    return ++id;
}
var selection_prototype = (0, _d3Selection.selection).prototype;
Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: (0, _selectJsDefault.default),
    selectAll: (0, _selectAllJsDefault.default),
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: (0, _filterJsDefault.default),
    merge: (0, _mergeJsDefault.default),
    selection: (0, _selectionJsDefault.default),
    transition: (0, _transitionJsDefault.default),
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: (0, _onJsDefault.default),
    attr: (0, _attrJsDefault.default),
    attrTween: (0, _attrTweenJsDefault.default),
    style: (0, _styleJsDefault.default),
    styleTween: (0, _styleTweenJsDefault.default),
    text: (0, _textJsDefault.default),
    textTween: (0, _textTweenJsDefault.default),
    remove: (0, _removeJsDefault.default),
    tween: (0, _tweenJsDefault.default),
    delay: (0, _delayJsDefault.default),
    duration: (0, _durationJsDefault.default),
    ease: (0, _easeJsDefault.default),
    easeVarying: (0, _easeVaryingJsDefault.default),
    end: (0, _endJsDefault.default),
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

},{"d3-selection":"gn9gd","./attr.js":"9UgA3","./attrTween.js":"1hMpn","./delay.js":"2BzOF","./duration.js":"ei298","./ease.js":"lCGHM","./easeVarying.js":"aju4f","./filter.js":"d3Uia","./merge.js":"9odBi","./on.js":"3XrBC","./remove.js":"aZLkz","./select.js":"bgUUX","./selectAll.js":"lqPi4","./selection.js":"iWTRA","./style.js":"44QDP","./styleTween.js":"42AvL","./text.js":"6mGEx","./textTween.js":"kqC5z","./transition.js":"50tVR","./tween.js":"1Kbbg","./end.js":"ev0ir","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"9UgA3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _tweenJs = require("./tween.js");
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
function attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
exports.default = function(name, value) {
    var fullname = (0, _d3Selection.namespace)(name), i = fullname === "transform" ? (0, _d3Interpolate.interpolateTransformSvg) : (0, _interpolateJsDefault.default);
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0, _tweenJs.tweenValue)(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
};

},{"d3-interpolate":"6jJyi","d3-selection":"gn9gd","./tween.js":"1Kbbg","./interpolate.js":"69lgs","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"1Kbbg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tweenValue", ()=>tweenValue);
var _scheduleJs = require("./schedule.js");
function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = (0, _scheduleJs.set)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1 = tween1.slice();
                tween1.splice(i, 1);
                break;
            }
        }
        schedule.tween = tween1;
    };
}
function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = (0, _scheduleJs.set)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1[i] = t;
                break;
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
exports.default = function(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = (0, _scheduleJs.get)(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) return t.value;
        }
        return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
};
function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = (0, _scheduleJs.set)(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return (0, _scheduleJs.get)(node, id).value[name];
    };
}

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"69lgs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Color = require("d3-color");
var _d3Interpolate = require("d3-interpolate");
exports.default = function(a, b) {
    var c;
    return (typeof b === "number" ? (0, _d3Interpolate.interpolateNumber) : b instanceof (0, _d3Color.color) ? (0, _d3Interpolate.interpolateRgb) : (c = (0, _d3Color.color)(b)) ? (b = c, _d3Interpolate.interpolateRgb) : (0, _d3Interpolate.interpolateString))(a, b);
};

},{"d3-color":"grhaa","d3-interpolate":"6jJyi","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"1hMpn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
function attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
exports.default = function(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = (0, _d3Selection.namespace)(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
};

},{"d3-selection":"gn9gd","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"2BzOF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function delayFunction(id, value) {
    return function() {
        (0, _scheduleJs.init)(this, id).delay = +value.apply(this, arguments);
    };
}
function delayConstant(id, value) {
    return value = +value, function() {
        (0, _scheduleJs.init)(this, id).delay = value;
    };
}
exports.default = function(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : (0, _scheduleJs.get)(this.node(), id).delay;
};

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ei298":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function durationFunction(id, value) {
    return function() {
        (0, _scheduleJs.set)(this, id).duration = +value.apply(this, arguments);
    };
}
function durationConstant(id, value) {
    return value = +value, function() {
        (0, _scheduleJs.set)(this, id).duration = value;
    };
}
exports.default = function(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : (0, _scheduleJs.get)(this.node(), id).duration;
};

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"lCGHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        (0, _scheduleJs.set)(this, id).ease = value;
    };
}
exports.default = function(value) {
    var id = this._id;
    return arguments.length ? this.each(easeConstant(id, value)) : (0, _scheduleJs.get)(this.node(), id).ease;
};

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"aju4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function easeVarying(id, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        (0, _scheduleJs.set)(this, id).ease = v;
    };
}
exports.default = function(value) {
    if (typeof value !== "function") throw new Error;
    return this.each(easeVarying(this._id, value));
};

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"d3Uia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
exports.default = function(match) {
    if (typeof match !== "function") match = (0, _d3Selection.matcher)(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new (0, _indexJs.Transition)(subgroups, this._parents, this._name, this._id);
};

},{"d3-selection":"gn9gd","./index.js":"h2Srb","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"9odBi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
exports.default = function(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new (0, _indexJs.Transition)(merges, this._parents, this._name, this._id);
};

},{"./index.js":"h2Srb","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"3XrBC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? (0, _scheduleJs.init) : (0, _scheduleJs.set);
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
exports.default = function(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? (0, _scheduleJs.get)(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
};

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"aZLkz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
exports.default = function() {
    return this.on("end.remove", removeFunction(this._id));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"bgUUX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
exports.default = function(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, _d3Selection.selector)(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            (0, _scheduleJsDefault.default)(subgroup[i], name, id, i, subgroup, (0, _scheduleJs.get)(node, id));
        }
    }
    return new (0, _indexJs.Transition)(subgroups, this._parents, name, id);
};

},{"d3-selection":"gn9gd","./index.js":"h2Srb","./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"lqPi4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
exports.default = function(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, _d3Selection.selectorAll)(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            for(var children = select.call(node, node.__data__, i, group), child, inherit = (0, _scheduleJs.get)(node, id), k = 0, l = children.length; k < l; ++k)if (child = children[k]) (0, _scheduleJsDefault.default)(child, name, id, k, children, inherit);
            subgroups.push(children);
            parents.push(node);
        }
    }
    return new (0, _indexJs.Transition)(subgroups, parents, name, id);
};

},{"d3-selection":"gn9gd","./index.js":"h2Srb","./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"iWTRA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Selection = require("d3-selection");
var Selection = (0, _d3Selection.selection).prototype.constructor;
exports.default = function() {
    return new Selection(this._groups, this._parents);
};

},{"d3-selection":"gn9gd","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"44QDP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Interpolate = require("d3-interpolate");
var _d3Selection = require("d3-selection");
var _scheduleJs = require("./schedule.js");
var _tweenJs = require("./tween.js");
var _interpolateJs = require("./interpolate.js");
var _interpolateJsDefault = parcelHelpers.interopDefault(_interpolateJs);
function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, _d3Selection.style)(this, name), string1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = (0, _d3Selection.style)(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, _d3Selection.style)(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0, _d3Selection.style)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = (0, _scheduleJs.set)(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
exports.default = function(name, value, priority) {
    var i = (name += "") === "transform" ? (0, _d3Interpolate.interpolateTransformCss) : (0, _interpolateJsDefault.default);
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, (0, _tweenJs.tweenValue)(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
};

},{"d3-interpolate":"6jJyi","d3-selection":"gn9gd","./schedule.js":"de74c","./tween.js":"1Kbbg","./interpolate.js":"69lgs","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"42AvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
exports.default = function(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"6mGEx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tweenJs = require("./tween.js");
function textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
exports.default = function(value) {
    return this.tween("text", typeof value === "function" ? textFunction((0, _tweenJs.tweenValue)(this, "text", value)) : textConstant(value == null ? "" : value + ""));
};

},{"./tween.js":"1Kbbg","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"kqC5z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
exports.default = function(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, textTween(value));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"50tVR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
var _scheduleJs = require("./schedule.js");
var _scheduleJsDefault = parcelHelpers.interopDefault(_scheduleJs);
exports.default = function() {
    var name = this._name, id0 = this._id, id1 = (0, _indexJs.newId)();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            var inherit = (0, _scheduleJs.get)(node, id0);
            (0, _scheduleJsDefault.default)(node, name, id1, i, group, {
                time: inherit.time + inherit.delay + inherit.duration,
                delay: 0,
                duration: inherit.duration,
                ease: inherit.ease
            });
        }
    }
    return new (0, _indexJs.Transition)(groups, this._parents, name, id1);
};

},{"./index.js":"h2Srb","./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ev0ir":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scheduleJs = require("./schedule.js");
exports.default = function() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
        var cancel = {
            value: reject
        }, end = {
            value: function() {
                if (--size === 0) resolve();
            }
        };
        that.each(function() {
            var schedule = (0, _scheduleJs.set)(this, id), on = schedule.on;
            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
        // The selection was empty, resolve end immediately
        if (size === 0) resolve();
    });
};

},{"./schedule.js":"de74c","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8sCNl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easeLinear", ()=>(0, _linearJs.linear));
parcelHelpers.export(exports, "easeQuad", ()=>(0, _quadJs.quadInOut));
parcelHelpers.export(exports, "easeQuadIn", ()=>(0, _quadJs.quadIn));
parcelHelpers.export(exports, "easeQuadOut", ()=>(0, _quadJs.quadOut));
parcelHelpers.export(exports, "easeQuadInOut", ()=>(0, _quadJs.quadInOut));
parcelHelpers.export(exports, "easeCubic", ()=>(0, _cubicJs.cubicInOut));
parcelHelpers.export(exports, "easeCubicIn", ()=>(0, _cubicJs.cubicIn));
parcelHelpers.export(exports, "easeCubicOut", ()=>(0, _cubicJs.cubicOut));
parcelHelpers.export(exports, "easeCubicInOut", ()=>(0, _cubicJs.cubicInOut));
parcelHelpers.export(exports, "easePoly", ()=>(0, _polyJs.polyInOut));
parcelHelpers.export(exports, "easePolyIn", ()=>(0, _polyJs.polyIn));
parcelHelpers.export(exports, "easePolyOut", ()=>(0, _polyJs.polyOut));
parcelHelpers.export(exports, "easePolyInOut", ()=>(0, _polyJs.polyInOut));
parcelHelpers.export(exports, "easeSin", ()=>(0, _sinJs.sinInOut));
parcelHelpers.export(exports, "easeSinIn", ()=>(0, _sinJs.sinIn));
parcelHelpers.export(exports, "easeSinOut", ()=>(0, _sinJs.sinOut));
parcelHelpers.export(exports, "easeSinInOut", ()=>(0, _sinJs.sinInOut));
parcelHelpers.export(exports, "easeExp", ()=>(0, _expJs.expInOut));
parcelHelpers.export(exports, "easeExpIn", ()=>(0, _expJs.expIn));
parcelHelpers.export(exports, "easeExpOut", ()=>(0, _expJs.expOut));
parcelHelpers.export(exports, "easeExpInOut", ()=>(0, _expJs.expInOut));
parcelHelpers.export(exports, "easeCircle", ()=>(0, _circleJs.circleInOut));
parcelHelpers.export(exports, "easeCircleIn", ()=>(0, _circleJs.circleIn));
parcelHelpers.export(exports, "easeCircleOut", ()=>(0, _circleJs.circleOut));
parcelHelpers.export(exports, "easeCircleInOut", ()=>(0, _circleJs.circleInOut));
parcelHelpers.export(exports, "easeBounce", ()=>(0, _bounceJs.bounceOut));
parcelHelpers.export(exports, "easeBounceIn", ()=>(0, _bounceJs.bounceIn));
parcelHelpers.export(exports, "easeBounceOut", ()=>(0, _bounceJs.bounceOut));
parcelHelpers.export(exports, "easeBounceInOut", ()=>(0, _bounceJs.bounceInOut));
parcelHelpers.export(exports, "easeBack", ()=>(0, _backJs.backInOut));
parcelHelpers.export(exports, "easeBackIn", ()=>(0, _backJs.backIn));
parcelHelpers.export(exports, "easeBackOut", ()=>(0, _backJs.backOut));
parcelHelpers.export(exports, "easeBackInOut", ()=>(0, _backJs.backInOut));
parcelHelpers.export(exports, "easeElastic", ()=>(0, _elasticJs.elasticOut));
parcelHelpers.export(exports, "easeElasticIn", ()=>(0, _elasticJs.elasticIn));
parcelHelpers.export(exports, "easeElasticOut", ()=>(0, _elasticJs.elasticOut));
parcelHelpers.export(exports, "easeElasticInOut", ()=>(0, _elasticJs.elasticInOut));
var _linearJs = require("./linear.js");
var _quadJs = require("./quad.js");
var _cubicJs = require("./cubic.js");
var _polyJs = require("./poly.js");
var _sinJs = require("./sin.js");
var _expJs = require("./exp.js");
var _circleJs = require("./circle.js");
var _bounceJs = require("./bounce.js");
var _backJs = require("./back.js");
var _elasticJs = require("./elastic.js");

},{"./linear.js":false,"./quad.js":false,"./cubic.js":"cGjk7","./poly.js":false,"./sin.js":false,"./exp.js":false,"./circle.js":false,"./bounce.js":false,"./back.js":false,"./elastic.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"cGjk7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicIn", ()=>cubicIn);
parcelHelpers.export(exports, "cubicOut", ()=>cubicOut);
parcelHelpers.export(exports, "cubicInOut", ()=>cubicInOut);
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    return --t * t * t + 1;
}
function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"cq48B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawArcDiagram", ()=>drawArcDiagram);
var _d3Selection = require("d3-selection");
var _d3Array = require("d3-array");
var _d3Shape = require("d3-shape");
var _d3Transition = require("d3-transition");
var _scales = require("./scales");
var _helper = require("./helper");
const drawArcDiagram = (nodes, edges)=>{
    // Dimensions
    const width = 1140;
    const height = 500;
    const margin = {
        top: height - 200,
        right: 100,
        bottom: 0,
        left: 100
    };
    const innerWidth = width - margin.right - margin.left;
    const nodeHash = {};
    const padding = innerWidth / nodes.length;
    const arcNodes = JSON.parse(JSON.stringify(nodes));
    arcNodes.sort((a, b)=>(0, _helper.houses).find((h)=>h.house === a.house).order - (0, _helper.houses).find((h)=>h.house === b.house).order);
    console.log("sorted nodes", arcNodes);
    arcNodes.forEach((node, i)=>{
        nodeHash[node.id] = node;
        node["x"] = i * padding;
    });
    console.log("nodeHash", nodeHash);
    const arcEdges = JSON.parse(JSON.stringify(edges));
    arcEdges.forEach((edge)=>{
        edge.source = nodeHash[edge.source];
        edge.target = nodeHash[edge.target];
    });
    console.log("arcEdges", arcEdges);
    // Append SVG container
    const svg = (0, _d3Selection.select)("#arc").append("svg").attr("viewBox", `0 0 ${width} ${height}`).append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);
    // Append arcs
    const getArc = (d)=>{
        const arcGenerator = (0, _d3Shape.line)().curve((0, _d3Shape.curveBasis));
        const midX = (d.source.x + d.target.x) / 2;
        const midY = -Math.abs((d.source.x - d.target.x) / 2);
        const path = arcGenerator([
            [
                d.source.x,
                0
            ],
            [
                midX,
                midY
            ],
            [
                d.target.x,
                0
            ]
        ]);
        return path;
    };
    const minWeight = (0, _d3Array.min)(edges, (d)=>d.weight);
    const maxWeight = (0, _d3Array.max)(edges, (d)=>d.weight);
    svg.selectAll(".arc-link").data(arcEdges).join("path").attr("class", "arc-link").attr("d", (d)=>getArc(d)).attr("fill", "transparent").attr("stroke", (d)=>(0, _scales.getEdgeColor)(minWeight, maxWeight, d.weight)).attr("stroke-width", (d)=>d.weight).attr("stroke-opacity", 0);
    // Append nodes
    const maxLines = (0, _d3Array.max)(arcNodes, (d)=>d.totalLines);
    svg.selectAll(".arc-node").data(arcNodes.sort((a, b)=>b.totalLines - a.totalLines)).join("circle").attr("class", "arc-node").attr("cx", (d)=>d.x).attr("cy", 0).attr("r", (d)=>(0, _scales.getRadius)(maxLines, d.totalLines)).attr("fill", (d)=>(0, _scales.charColorScale)(d.house)).attr("stroke", (d)=>"#FAFBFF").attr("stroke-width", 2);
    // Append name labels
    svg.selectAll(".arc-label").data(arcNodes).join("text").attr("class", "arc-label").attr("text-anchor", "end").attr("dominant-baseline", "middle").attr("transform", (d)=>`translate(${d.x}, 70), rotate(-70)`).text((d)=>d.name).style("font-size", "14px");
    // Add interactions
    (0, _d3Selection.selectAll)(".arc-node").on("mouseenter", (e, d)=>{
        const t = (0, _d3Transition.transition)().duration(150);
        (0, _d3Selection.selectAll)(".arc-link").attr("stroke-opacity", (link)=>link.source.id === d.id || link.target.id === d.id ? 1 : 0);
        (0, _d3Selection.selectAll)(".arc-label").style("opacity", (char)=>char.id === d.id || arcEdges.find((edge)=>edge.source.id === d.id && edge.target.id === char.id || edge.source.id === char.id && edge.target.id === d.id) ? 1 : 0).style("font-weight", (char)=>char.id === d.id ? 700 : 400);
    }).on("mouseleave", (e, d)=>{
        (0, _d3Selection.selectAll)(".arc-link").attr("stroke-opacity", 0);
        (0, _d3Selection.selectAll)(".arc-label").style("opacity", 1).style("font-weight", 400);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8","d3-selection":"gn9gd","./scales":"NYsfE","d3-array":"1yX2W","d3-shape":"SqrXv","./helper":"lVRAz","d3-transition":"4lorl"}],"SqrXv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arc", ()=>(0, _arcJsDefault.default));
parcelHelpers.export(exports, "area", ()=>(0, _areaJsDefault.default));
parcelHelpers.export(exports, "line", ()=>(0, _lineJsDefault.default));
parcelHelpers.export(exports, "pie", ()=>(0, _pieJsDefault.default));
parcelHelpers.export(exports, "areaRadial", ()=>(0, _areaRadialJsDefault.default)) // Note: radialArea is deprecated!
;
parcelHelpers.export(exports, "radialArea", ()=>(0, _areaRadialJsDefault.default));
parcelHelpers.export(exports, "lineRadial", ()=>(0, _lineRadialJsDefault.default)) // Note: radialLine is deprecated!
;
parcelHelpers.export(exports, "radialLine", ()=>(0, _lineRadialJsDefault.default));
parcelHelpers.export(exports, "pointRadial", ()=>(0, _pointRadialJsDefault.default));
parcelHelpers.export(exports, "link", ()=>(0, _linkJs.link));
parcelHelpers.export(exports, "linkHorizontal", ()=>(0, _linkJs.linkHorizontal));
parcelHelpers.export(exports, "linkVertical", ()=>(0, _linkJs.linkVertical));
parcelHelpers.export(exports, "linkRadial", ()=>(0, _linkJs.linkRadial));
parcelHelpers.export(exports, "symbol", ()=>(0, _symbolJsDefault.default));
parcelHelpers.export(exports, "symbolsStroke", ()=>(0, _symbolJs.symbolsStroke));
parcelHelpers.export(exports, "symbolsFill", ()=>(0, _symbolJs.symbolsFill));
parcelHelpers.export(exports, "symbols", ()=>(0, _symbolJs.symbolsFill));
parcelHelpers.export(exports, "symbolAsterisk", ()=>(0, _asteriskJsDefault.default));
parcelHelpers.export(exports, "symbolCircle", ()=>(0, _circleJsDefault.default));
parcelHelpers.export(exports, "symbolCross", ()=>(0, _crossJsDefault.default));
parcelHelpers.export(exports, "symbolDiamond", ()=>(0, _diamondJsDefault.default));
parcelHelpers.export(exports, "symbolDiamond2", ()=>(0, _diamond2JsDefault.default));
parcelHelpers.export(exports, "symbolPlus", ()=>(0, _plusJsDefault.default));
parcelHelpers.export(exports, "symbolSquare", ()=>(0, _squareJsDefault.default));
parcelHelpers.export(exports, "symbolSquare2", ()=>(0, _square2JsDefault.default));
parcelHelpers.export(exports, "symbolStar", ()=>(0, _starJsDefault.default));
parcelHelpers.export(exports, "symbolTriangle", ()=>(0, _triangleJsDefault.default));
parcelHelpers.export(exports, "symbolTriangle2", ()=>(0, _triangle2JsDefault.default));
parcelHelpers.export(exports, "symbolWye", ()=>(0, _wyeJsDefault.default));
parcelHelpers.export(exports, "symbolTimes", ()=>(0, _timesJsDefault.default));
parcelHelpers.export(exports, "symbolX", ()=>(0, _timesJsDefault.default));
parcelHelpers.export(exports, "curveBasisClosed", ()=>(0, _basisClosedJsDefault.default));
parcelHelpers.export(exports, "curveBasisOpen", ()=>(0, _basisOpenJsDefault.default));
parcelHelpers.export(exports, "curveBasis", ()=>(0, _basisJsDefault.default));
parcelHelpers.export(exports, "curveBumpX", ()=>(0, _bumpJs.bumpX));
parcelHelpers.export(exports, "curveBumpY", ()=>(0, _bumpJs.bumpY));
parcelHelpers.export(exports, "curveBundle", ()=>(0, _bundleJsDefault.default));
parcelHelpers.export(exports, "curveCardinalClosed", ()=>(0, _cardinalClosedJsDefault.default));
parcelHelpers.export(exports, "curveCardinalOpen", ()=>(0, _cardinalOpenJsDefault.default));
parcelHelpers.export(exports, "curveCardinal", ()=>(0, _cardinalJsDefault.default));
parcelHelpers.export(exports, "curveCatmullRomClosed", ()=>(0, _catmullRomClosedJsDefault.default));
parcelHelpers.export(exports, "curveCatmullRomOpen", ()=>(0, _catmullRomOpenJsDefault.default));
parcelHelpers.export(exports, "curveCatmullRom", ()=>(0, _catmullRomJsDefault.default));
parcelHelpers.export(exports, "curveLinearClosed", ()=>(0, _linearClosedJsDefault.default));
parcelHelpers.export(exports, "curveLinear", ()=>(0, _linearJsDefault.default));
parcelHelpers.export(exports, "curveMonotoneX", ()=>(0, _monotoneJs.monotoneX));
parcelHelpers.export(exports, "curveMonotoneY", ()=>(0, _monotoneJs.monotoneY));
parcelHelpers.export(exports, "curveNatural", ()=>(0, _naturalJsDefault.default));
parcelHelpers.export(exports, "curveStep", ()=>(0, _stepJsDefault.default));
parcelHelpers.export(exports, "curveStepAfter", ()=>(0, _stepJs.stepAfter));
parcelHelpers.export(exports, "curveStepBefore", ()=>(0, _stepJs.stepBefore));
parcelHelpers.export(exports, "stack", ()=>(0, _stackJsDefault.default));
parcelHelpers.export(exports, "stackOffsetExpand", ()=>(0, _expandJsDefault.default));
parcelHelpers.export(exports, "stackOffsetDiverging", ()=>(0, _divergingJsDefault.default));
parcelHelpers.export(exports, "stackOffsetNone", ()=>(0, _noneJsDefault.default));
parcelHelpers.export(exports, "stackOffsetSilhouette", ()=>(0, _silhouetteJsDefault.default));
parcelHelpers.export(exports, "stackOffsetWiggle", ()=>(0, _wiggleJsDefault.default));
parcelHelpers.export(exports, "stackOrderAppearance", ()=>(0, _appearanceJsDefault.default));
parcelHelpers.export(exports, "stackOrderAscending", ()=>(0, _ascendingJsDefault.default));
parcelHelpers.export(exports, "stackOrderDescending", ()=>(0, _descendingJsDefault.default));
parcelHelpers.export(exports, "stackOrderInsideOut", ()=>(0, _insideOutJsDefault.default));
parcelHelpers.export(exports, "stackOrderNone", ()=>(0, _noneJsDefault1.default));
parcelHelpers.export(exports, "stackOrderReverse", ()=>(0, _reverseJsDefault.default));
var _arcJs = require("./arc.js");
var _arcJsDefault = parcelHelpers.interopDefault(_arcJs);
var _areaJs = require("./area.js");
var _areaJsDefault = parcelHelpers.interopDefault(_areaJs);
var _lineJs = require("./line.js");
var _lineJsDefault = parcelHelpers.interopDefault(_lineJs);
var _pieJs = require("./pie.js");
var _pieJsDefault = parcelHelpers.interopDefault(_pieJs);
var _areaRadialJs = require("./areaRadial.js");
var _areaRadialJsDefault = parcelHelpers.interopDefault(_areaRadialJs);
var _lineRadialJs = require("./lineRadial.js");
var _lineRadialJsDefault = parcelHelpers.interopDefault(_lineRadialJs);
var _pointRadialJs = require("./pointRadial.js");
var _pointRadialJsDefault = parcelHelpers.interopDefault(_pointRadialJs);
var _linkJs = require("./link.js");
var _symbolJs = require("./symbol.js");
var _symbolJsDefault = parcelHelpers.interopDefault(_symbolJs);
var _asteriskJs = require("./symbol/asterisk.js");
var _asteriskJsDefault = parcelHelpers.interopDefault(_asteriskJs);
var _circleJs = require("./symbol/circle.js");
var _circleJsDefault = parcelHelpers.interopDefault(_circleJs);
var _crossJs = require("./symbol/cross.js");
var _crossJsDefault = parcelHelpers.interopDefault(_crossJs);
var _diamondJs = require("./symbol/diamond.js");
var _diamondJsDefault = parcelHelpers.interopDefault(_diamondJs);
var _diamond2Js = require("./symbol/diamond2.js");
var _diamond2JsDefault = parcelHelpers.interopDefault(_diamond2Js);
var _plusJs = require("./symbol/plus.js");
var _plusJsDefault = parcelHelpers.interopDefault(_plusJs);
var _squareJs = require("./symbol/square.js");
var _squareJsDefault = parcelHelpers.interopDefault(_squareJs);
var _square2Js = require("./symbol/square2.js");
var _square2JsDefault = parcelHelpers.interopDefault(_square2Js);
var _starJs = require("./symbol/star.js");
var _starJsDefault = parcelHelpers.interopDefault(_starJs);
var _triangleJs = require("./symbol/triangle.js");
var _triangleJsDefault = parcelHelpers.interopDefault(_triangleJs);
var _triangle2Js = require("./symbol/triangle2.js");
var _triangle2JsDefault = parcelHelpers.interopDefault(_triangle2Js);
var _wyeJs = require("./symbol/wye.js");
var _wyeJsDefault = parcelHelpers.interopDefault(_wyeJs);
var _timesJs = require("./symbol/times.js");
var _timesJsDefault = parcelHelpers.interopDefault(_timesJs);
var _basisClosedJs = require("./curve/basisClosed.js");
var _basisClosedJsDefault = parcelHelpers.interopDefault(_basisClosedJs);
var _basisOpenJs = require("./curve/basisOpen.js");
var _basisOpenJsDefault = parcelHelpers.interopDefault(_basisOpenJs);
var _basisJs = require("./curve/basis.js");
var _basisJsDefault = parcelHelpers.interopDefault(_basisJs);
var _bumpJs = require("./curve/bump.js");
var _bundleJs = require("./curve/bundle.js");
var _bundleJsDefault = parcelHelpers.interopDefault(_bundleJs);
var _cardinalClosedJs = require("./curve/cardinalClosed.js");
var _cardinalClosedJsDefault = parcelHelpers.interopDefault(_cardinalClosedJs);
var _cardinalOpenJs = require("./curve/cardinalOpen.js");
var _cardinalOpenJsDefault = parcelHelpers.interopDefault(_cardinalOpenJs);
var _cardinalJs = require("./curve/cardinal.js");
var _cardinalJsDefault = parcelHelpers.interopDefault(_cardinalJs);
var _catmullRomClosedJs = require("./curve/catmullRomClosed.js");
var _catmullRomClosedJsDefault = parcelHelpers.interopDefault(_catmullRomClosedJs);
var _catmullRomOpenJs = require("./curve/catmullRomOpen.js");
var _catmullRomOpenJsDefault = parcelHelpers.interopDefault(_catmullRomOpenJs);
var _catmullRomJs = require("./curve/catmullRom.js");
var _catmullRomJsDefault = parcelHelpers.interopDefault(_catmullRomJs);
var _linearClosedJs = require("./curve/linearClosed.js");
var _linearClosedJsDefault = parcelHelpers.interopDefault(_linearClosedJs);
var _linearJs = require("./curve/linear.js");
var _linearJsDefault = parcelHelpers.interopDefault(_linearJs);
var _monotoneJs = require("./curve/monotone.js");
var _naturalJs = require("./curve/natural.js");
var _naturalJsDefault = parcelHelpers.interopDefault(_naturalJs);
var _stepJs = require("./curve/step.js");
var _stepJsDefault = parcelHelpers.interopDefault(_stepJs);
var _stackJs = require("./stack.js");
var _stackJsDefault = parcelHelpers.interopDefault(_stackJs);
var _expandJs = require("./offset/expand.js");
var _expandJsDefault = parcelHelpers.interopDefault(_expandJs);
var _divergingJs = require("./offset/diverging.js");
var _divergingJsDefault = parcelHelpers.interopDefault(_divergingJs);
var _noneJs = require("./offset/none.js");
var _noneJsDefault = parcelHelpers.interopDefault(_noneJs);
var _silhouetteJs = require("./offset/silhouette.js");
var _silhouetteJsDefault = parcelHelpers.interopDefault(_silhouetteJs);
var _wiggleJs = require("./offset/wiggle.js");
var _wiggleJsDefault = parcelHelpers.interopDefault(_wiggleJs);
var _appearanceJs = require("./order/appearance.js");
var _appearanceJsDefault = parcelHelpers.interopDefault(_appearanceJs);
var _ascendingJs = require("./order/ascending.js");
var _ascendingJsDefault = parcelHelpers.interopDefault(_ascendingJs);
var _descendingJs = require("./order/descending.js");
var _descendingJsDefault = parcelHelpers.interopDefault(_descendingJs);
var _insideOutJs = require("./order/insideOut.js");
var _insideOutJsDefault = parcelHelpers.interopDefault(_insideOutJs);
var _noneJs1 = require("./order/none.js");
var _noneJsDefault1 = parcelHelpers.interopDefault(_noneJs1);
var _reverseJs = require("./order/reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);

},{"./arc.js":false,"./area.js":false,"./line.js":"hTFAN","./pie.js":false,"./areaRadial.js":false,"./lineRadial.js":false,"./pointRadial.js":"gH3Nl","./link.js":false,"./symbol.js":false,"./symbol/asterisk.js":false,"./symbol/circle.js":false,"./symbol/cross.js":false,"./symbol/diamond.js":false,"./symbol/diamond2.js":false,"./symbol/plus.js":false,"./symbol/square.js":false,"./symbol/square2.js":false,"./symbol/star.js":false,"./symbol/triangle.js":false,"./symbol/triangle2.js":false,"./symbol/wye.js":false,"./symbol/times.js":false,"./curve/basisClosed.js":false,"./curve/basisOpen.js":false,"./curve/basis.js":"lmIyE","./curve/bump.js":"etTRy","./curve/bundle.js":false,"./curve/cardinalClosed.js":false,"./curve/cardinalOpen.js":false,"./curve/cardinal.js":"brZ6e","./curve/catmullRomClosed.js":false,"./curve/catmullRomOpen.js":false,"./curve/catmullRom.js":"j2hDs","./curve/linearClosed.js":false,"./curve/linear.js":"ajwdK","./curve/monotone.js":false,"./curve/natural.js":false,"./curve/step.js":false,"./stack.js":false,"./offset/expand.js":false,"./offset/diverging.js":false,"./offset/none.js":false,"./offset/silhouette.js":false,"./offset/wiggle.js":false,"./order/appearance.js":false,"./order/ascending.js":false,"./order/descending.js":false,"./order/insideOut.js":false,"./order/none.js":false,"./order/reverse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"hTFAN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayJs = require("./array.js");
var _arrayJsDefault = parcelHelpers.interopDefault(_arrayJs);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _linearJs = require("./curve/linear.js");
var _linearJsDefault = parcelHelpers.interopDefault(_linearJs);
var _pathJs = require("./path.js");
var _pointJs = require("./point.js");
exports.default = function(x, y) {
    var defined = (0, _constantJsDefault.default)(true), context = null, curve = (0, _linearJsDefault.default), output = null, path = (0, _pathJs.withPath)(line);
    x = typeof x === "function" ? x : x === undefined ? (0, _pointJs.x) : (0, _constantJsDefault.default)(x);
    y = typeof y === "function" ? y : y === undefined ? (0, _pointJs.y) : (0, _constantJsDefault.default)(y);
    function line(data) {
        var i, n = (data = (0, _arrayJsDefault.default)(data)).length, d, defined0 = false, buffer;
        if (context == null) output = curve(buffer = path());
        for(i = 0; i <= n; ++i){
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
                if (defined0 = !defined0) output.lineStart();
                else output.lineEnd();
            }
            if (defined0) output.point(+x(d, i, data), +y(d, i, data));
        }
        if (buffer) return output = null, buffer + "" || null;
    }
    line.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), line) : x;
    };
    line.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), line) : y;
    };
    line.defined = function(_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(!!_), line) : defined;
    };
    line.curve = function(_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };
    line.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };
    return line;
};

},{"./array.js":"6SJ8v","./constant.js":"dFe8v","./curve/linear.js":"ajwdK","./path.js":"gT5Z6","./point.js":"5bQ0r","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"6SJ8v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slice", ()=>slice);
var slice = Array.prototype.slice;
exports.default = function(x) {
    return typeof x === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
     : Array.from(x); // Map, Set, iterable, string, or anything else
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"dFe8v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return function constant() {
        return x;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ajwdK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function Linear(context) {
    this._context = context;
}
Linear.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // falls through
            default:
                this._context.lineTo(x, y);
                break;
        }
    }
};
exports.default = function(context) {
    return new Linear(context);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"gT5Z6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withPath", ()=>withPath);
var _d3Path = require("d3-path");
function withPath(shape) {
    let digits = 3;
    shape.digits = function(_) {
        if (!arguments.length) return digits;
        if (_ == null) digits = null;
        else {
            const d = Math.floor(_);
            if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
            digits = d;
        }
        return shape;
    };
    return ()=>new (0, _d3Path.Path)(digits);
}

},{"d3-path":"eY3pl","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"eY3pl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Path", ()=>(0, _pathJs.Path));
parcelHelpers.export(exports, "path", ()=>(0, _pathJs.path));
parcelHelpers.export(exports, "pathRound", ()=>(0, _pathJs.pathRound));
var _pathJs = require("./path.js");

},{"./path.js":"jFeAg","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"jFeAg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Path", ()=>Path);
parcelHelpers.export(exports, "path", ()=>path);
parcelHelpers.export(exports, "pathRound", ()=>pathRound);
const pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
function append(strings) {
    this._ += strings[0];
    for(let i = 1, n = strings.length; i < n; ++i)this._ += arguments[i] + strings[i];
}
function appendRound(digits) {
    let d = Math.floor(digits);
    if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
    if (d > 15) return append;
    const k = 10 ** d;
    return function(strings) {
        this._ += strings[0];
        for(let i = 1, n = strings.length; i < n; ++i)this._ += Math.round(arguments[i] * k) / k + strings[i];
    };
}
class Path {
    constructor(digits){
        this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
        this._ = "";
        this._append = digits == null ? append : appendRound(digits);
    }
    moveTo(x, y) {
        this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
    }
    closePath() {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._append`Z`;
        }
    }
    lineTo(x, y) {
        this._append`L${this._x1 = +x},${this._y1 = +y}`;
    }
    quadraticCurveTo(x1, y1, x, y) {
        this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
    }
    bezierCurveTo(x1, y1, x2, y2, x, y) {
        this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
    }
    arcTo(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        // Is the radius negative? Error.
        if (r < 0) throw new Error(`negative radius: ${r}`);
        let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) this._append`M${this._x1 = x1},${this._y1 = y1}`;
        else if (!(l01_2 > epsilon)) ;
        else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) this._append`L${this._x1 = x1},${this._y1 = y1}`;
        else {
            let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > epsilon) this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
            this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
        }
    }
    arc(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        // Is the radius negative? Error.
        if (r < 0) throw new Error(`negative radius: ${r}`);
        let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) this._append`M${x0},${y0}`;
        else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) this._append`L${x0},${y0}`;
        // Is this arc empty? We’re done.
        if (!r) return;
        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % tau + tau;
        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > tauEpsilon) this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
        else if (da > epsilon) this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
    rect(x, y, w, h) {
        this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
    }
    toString() {
        return this._;
    }
}
function path() {
    return new Path;
}
// Allow instanceof d3.path
path.prototype = Path.prototype;
function pathRound(digits = 3) {
    return new Path(+digits);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"5bQ0r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "x", ()=>x);
parcelHelpers.export(exports, "y", ()=>y);
function x(p) {
    return p[0];
}
function y(p) {
    return p[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"gH3Nl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x, y) {
    return [
        (y = +y) * Math.cos(x -= Math.PI / 2),
        y * Math.sin(x)
    ];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"lmIyE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "point", ()=>point);
parcelHelpers.export(exports, "Basis", ()=>Basis);
function point(that, x, y) {
    that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
}
function Basis(context) {
    this._context = context;
}
Basis.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 3:
                point(this, this._x1, this._y1); // falls through
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // falls through
            default:
                point(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
    }
};
exports.default = function(context) {
    return new Basis(context);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"etTRy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bumpX", ()=>bumpX);
parcelHelpers.export(exports, "bumpY", ()=>bumpY);
parcelHelpers.export(exports, "bumpRadial", ()=>bumpRadial);
var _pointRadialJs = require("../pointRadial.js");
var _pointRadialJsDefault = parcelHelpers.interopDefault(_pointRadialJs);
class Bump {
    constructor(context, x){
        this._context = context;
        this._x = x;
    }
    areaStart() {
        this._line = 0;
    }
    areaEnd() {
        this._line = NaN;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    }
    point(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                if (this._line) this._context.lineTo(x, y);
                else this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // falls through
            default:
                if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
                else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
                break;
        }
        this._x0 = x, this._y0 = y;
    }
}
class BumpRadial {
    constructor(context){
        this._context = context;
    }
    lineStart() {
        this._point = 0;
    }
    lineEnd() {}
    point(x, y) {
        x = +x, y = +y;
        if (this._point === 0) this._point = 1;
        else {
            const p0 = (0, _pointRadialJsDefault.default)(this._x0, this._y0);
            const p1 = (0, _pointRadialJsDefault.default)(this._x0, this._y0 = (this._y0 + y) / 2);
            const p2 = (0, _pointRadialJsDefault.default)(x, this._y0);
            const p3 = (0, _pointRadialJsDefault.default)(x, y);
            this._context.moveTo(...p0);
            this._context.bezierCurveTo(...p1, ...p2, ...p3);
        }
        this._x0 = x, this._y0 = y;
    }
}
function bumpX(context) {
    return new Bump(context, true);
}
function bumpY(context) {
    return new Bump(context, false);
}
function bumpRadial(context) {
    return new BumpRadial(context);
}

},{"../pointRadial.js":"gH3Nl","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"brZ6e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "point", ()=>point);
parcelHelpers.export(exports, "Cardinal", ()=>Cardinal);
function point(that, x, y) {
    that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
}
function Cardinal(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                point(this, this._x1, this._y1);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                this._x1 = x, this._y1 = y;
                break;
            case 2:
                this._point = 3; // falls through
            default:
                point(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
exports.default = function custom(tension) {
    function cardinal(context) {
        return new Cardinal(context, tension);
    }
    cardinal.tension = function(tension) {
        return custom(+tension);
    };
    return cardinal;
}(0);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"j2hDs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "point", ()=>point);
var _mathJs = require("../math.js");
var _cardinalJs = require("./cardinal.js");
function point(that, x, y) {
    var x1 = that._x1, y1 = that._y1, x2 = that._x2, y2 = that._y2;
    if (that._l01_a > (0, _mathJs.epsilon)) {
        var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
        x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
        y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
    }
    if (that._l23_a > (0, _mathJs.epsilon)) {
        var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
        x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
        y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
    }
    that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
    this._context = context;
    this._alpha = alpha;
}
CatmullRom.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) {
            var x23 = this._x2 - x, y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3; // falls through
            default:
                point(this, x, y);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
exports.default = function custom(alpha) {
    function catmullRom(context) {
        return alpha ? new CatmullRom(context, alpha) : new (0, _cardinalJs.Cardinal)(context, 0);
    }
    catmullRom.alpha = function(alpha) {
        return custom(+alpha);
    };
    return catmullRom;
}(0.5);

},{"../math.js":"4VX7v","./cardinal.js":"brZ6e","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4VX7v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "abs", ()=>abs);
parcelHelpers.export(exports, "atan2", ()=>atan2);
parcelHelpers.export(exports, "cos", ()=>cos);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "sin", ()=>sin);
parcelHelpers.export(exports, "sqrt", ()=>sqrt);
parcelHelpers.export(exports, "epsilon", ()=>epsilon);
parcelHelpers.export(exports, "pi", ()=>pi);
parcelHelpers.export(exports, "halfPi", ()=>halfPi);
parcelHelpers.export(exports, "tau", ()=>tau);
parcelHelpers.export(exports, "acos", ()=>acos);
parcelHelpers.export(exports, "asin", ()=>asin);
const abs = Math.abs;
const atan2 = Math.atan2;
const cos = Math.cos;
const max = Math.max;
const min = Math.min;
const sin = Math.sin;
const sqrt = Math.sqrt;
const epsilon = 1e-12;
const pi = Math.PI;
const halfPi = pi / 2;
const tau = 2 * pi;
function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
    return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"kFA5m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawBeeswarm", ()=>drawBeeswarm);
var _d3Force = require("d3-force");
var _d3Selection = require("d3-selection");
var _d3Array = require("d3-array");
var _d3Scale = require("d3-scale");
var _scales = require("./scales");
var _helper = require("./helper");
const drawBeeswarm = (nodes)=>{
    const characters = JSON.parse(JSON.stringify(nodes));
    console.log("characters", characters);
    // Dimensions
    const width = 1140;
    const height = 400;
    const margin = {
        top: 0,
        right: 100,
        bottom: 0,
        left: 100
    };
    const innerWidth = width - margin.right - margin.left;
    const innerHeight = height - margin.top - margin.bottom;
    // Horizontal scale
    const xScale = (0, _d3Scale.scaleLinear)().domain([
        0,
        (0, _helper.totalLines)
    ]).range([
        0,
        width
    ]);
    // Append SVG container
    const svg = (0, _d3Selection.select)("#beeswarm").append("svg").attr("viewBox", `0 0 ${width} ${height}`)// .append("g")
    //   .attr("transform", `translate(${width/2}, ${height/2})`);
    .append("g").attr("transform", `translate(${margin.left}, ${height / 2})`);
    // Append nodes
    const maxLines = (0, _d3Array.max)(characters, (d)=>d.totalLines);
    svg.selectAll(".beeswarm-circle").data(characters).join("circle").attr("class", "beeswarm-circle").attr("cx", (d)=>xScale(d.firstLineNumber)).attr("cy", 0).attr("r", (d)=>{
        d["radius"] = (0, _scales.getRadius)(maxLines, d.totalLines);
        return d.radius;
    }).attr("fill", (d)=>(0, _scales.charColorScale)(d.house)).attr("stroke", "#FAFBFF").attr("stroke-width", 1);
    // Set up the simulation
    const updateNetwork = ()=>{
        (0, _d3Selection.selectAll)(".beeswarm-circle").attr("cx", (d)=>d.x).attr("cy", (d)=>d.y);
    };
    // const simulation = forceSimulation()
    //   .force("x", forceX() )
    //   .nodes(characters)
    //   .on("tick", updateNetwork);
    // const simulation = forceSimulation()
    //   .force("y", forceY() )
    //   .nodes(characters)
    //   .on("tick", updateNetwork);
    // const simulation = forceSimulation()
    //   .force("x", forceX().strength(0.001) )
    //   .force("y", forceY().strength(0.001) )
    //   .force("collide", forceCollide().radius(d => d.radius) )
    //   .nodes(characters)
    //   .on("tick", updateNetwork);
    const simulation = (0, _d3Force.forceSimulation)().force("x", (0, _d3Force.forceX)((d)=>xScale(d.firstLineNumber)).strength(1)).force("y", (0, _d3Force.forceY)().strength(0.1)).force("collide", (0, _d3Force.forceCollide)().radius((d)=>d.radius)).nodes(characters).on("tick", updateNetwork);
    // Append horizontal axis
    svg.append("line").attr("x1", 0).attr("y1", 0).attr("x2", xScale((0, _helper.totalLines))).attr("y2", 0).attr("stroke", "#161B33").attr("stroke-width", 2);
    svg.selectAll(".scene-tick").data((0, _helper.scenes)).join("line").attr("class", "scene-tick").attr("x1", (d)=>xScale(d.firstLine)).attr("y1", 0).attr("x2", (d)=>xScale(d.firstLine)).attr("y2", 8).attr("stroke", "#161B33");
    const sceneLabels = [
        "1.1",
        "2.1",
        "3.1",
        "4.1",
        "5.1"
    ];
    svg.selectAll(".scene-label").data((0, _helper.scenes).filter((s)=>sceneLabels.includes(s.scene))).join("text").attr("x", (d)=>xScale(d.firstLine)).attr("y", 28).attr("text-anchor", "middle").text((d)=>d.scene).style("font-size", "16px").style("font-weight", 500);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8","d3-force":"helua","d3-selection":"gn9gd","d3-array":"1yX2W","./scales":"NYsfE","d3-scale":"UQ8g3","./helper":"lVRAz"}],"helua":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forceCenter", ()=>(0, _centerJsDefault.default));
parcelHelpers.export(exports, "forceCollide", ()=>(0, _collideJsDefault.default));
parcelHelpers.export(exports, "forceLink", ()=>(0, _linkJsDefault.default));
parcelHelpers.export(exports, "forceManyBody", ()=>(0, _manyBodyJsDefault.default));
parcelHelpers.export(exports, "forceRadial", ()=>(0, _radialJsDefault.default));
parcelHelpers.export(exports, "forceSimulation", ()=>(0, _simulationJsDefault.default));
parcelHelpers.export(exports, "forceX", ()=>(0, _xJsDefault.default));
parcelHelpers.export(exports, "forceY", ()=>(0, _yJsDefault.default));
var _centerJs = require("./center.js");
var _centerJsDefault = parcelHelpers.interopDefault(_centerJs);
var _collideJs = require("./collide.js");
var _collideJsDefault = parcelHelpers.interopDefault(_collideJs);
var _linkJs = require("./link.js");
var _linkJsDefault = parcelHelpers.interopDefault(_linkJs);
var _manyBodyJs = require("./manyBody.js");
var _manyBodyJsDefault = parcelHelpers.interopDefault(_manyBodyJs);
var _radialJs = require("./radial.js");
var _radialJsDefault = parcelHelpers.interopDefault(_radialJs);
var _simulationJs = require("./simulation.js");
var _simulationJsDefault = parcelHelpers.interopDefault(_simulationJs);
var _xJs = require("./x.js");
var _xJsDefault = parcelHelpers.interopDefault(_xJs);
var _yJs = require("./y.js");
var _yJsDefault = parcelHelpers.interopDefault(_yJs);

},{"./center.js":false,"./collide.js":"34dOa","./link.js":false,"./manyBody.js":false,"./radial.js":false,"./simulation.js":"FYZiY","./x.js":"g7Dub","./y.js":"84MbS","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"34dOa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Quadtree = require("d3-quadtree");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _jiggleJs = require("./jiggle.js");
var _jiggleJsDefault = parcelHelpers.interopDefault(_jiggleJs);
function x(d) {
    return d.x + d.vx;
}
function y(d) {
    return d.y + d.vy;
}
exports.default = function(radius) {
    var nodes, radii, random, strength = 1, iterations = 1;
    if (typeof radius !== "function") radius = (0, _constantJsDefault.default)(radius == null ? 1 : +radius);
    function force() {
        var i, n = nodes.length, tree, node, xi, yi, ri, ri2;
        for(var k = 0; k < iterations; ++k){
            tree = (0, _d3Quadtree.quadtree)(nodes, x, y).visitAfter(prepare);
            for(i = 0; i < n; ++i){
                node = nodes[i];
                ri = radii[node.index], ri2 = ri * ri;
                xi = node.x + node.vx;
                yi = node.y + node.vy;
                tree.visit(apply);
            }
        }
        function apply(quad, x0, y0, x1, y1) {
            var data = quad.data, rj = quad.r, r = ri + rj;
            if (data) {
                if (data.index > node.index) {
                    var x = xi - data.x - data.vx, y = yi - data.y - data.vy, l = x * x + y * y;
                    if (l < r * r) {
                        if (x === 0) x = (0, _jiggleJsDefault.default)(random), l += x * x;
                        if (y === 0) y = (0, _jiggleJsDefault.default)(random), l += y * y;
                        l = (r - (l = Math.sqrt(l))) / l * strength;
                        node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
                        node.vy += (y *= l) * r;
                        data.vx -= x * (r = 1 - r);
                        data.vy -= y * r;
                    }
                }
                return;
            }
            return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
        }
    }
    function prepare(quad) {
        if (quad.data) return quad.r = radii[quad.data.index];
        for(var i = quad.r = 0; i < 4; ++i)if (quad[i] && quad[i].r > quad.r) quad.r = quad[i].r;
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        radii = new Array(n);
        for(i = 0; i < n; ++i)node = nodes[i], radii[node.index] = +radius(node, i, nodes);
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = +_, force) : strength;
    };
    force.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), initialize(), force) : radius;
    };
    return force;
};

},{"d3-quadtree":"ep5gF","./constant.js":"bqryx","./jiggle.js":"72pY7","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ep5gF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "quadtree", ()=>(0, _quadtreeJsDefault.default));
var _quadtreeJs = require("./quadtree.js");
var _quadtreeJsDefault = parcelHelpers.interopDefault(_quadtreeJs);

},{"./quadtree.js":"iV7KR","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"iV7KR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addJs = require("./add.js");
var _addJsDefault = parcelHelpers.interopDefault(_addJs);
var _coverJs = require("./cover.js");
var _coverJsDefault = parcelHelpers.interopDefault(_coverJs);
var _dataJs = require("./data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
var _extentJs = require("./extent.js");
var _extentJsDefault = parcelHelpers.interopDefault(_extentJs);
var _findJs = require("./find.js");
var _findJsDefault = parcelHelpers.interopDefault(_findJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _rootJs = require("./root.js");
var _rootJsDefault = parcelHelpers.interopDefault(_rootJs);
var _sizeJs = require("./size.js");
var _sizeJsDefault = parcelHelpers.interopDefault(_sizeJs);
var _visitJs = require("./visit.js");
var _visitJsDefault = parcelHelpers.interopDefault(_visitJs);
var _visitAfterJs = require("./visitAfter.js");
var _visitAfterJsDefault = parcelHelpers.interopDefault(_visitAfterJs);
var _xJs = require("./x.js");
var _xJsDefault = parcelHelpers.interopDefault(_xJs);
var _yJs = require("./y.js");
var _yJsDefault = parcelHelpers.interopDefault(_yJs);
function quadtree(nodes, x, y) {
    var tree = new Quadtree(x == null ? (0, _xJs.defaultX) : x, y == null ? (0, _yJs.defaultY) : y, NaN, NaN, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
}
exports.default = quadtree;
function Quadtree(x, y, x0, y0, x1, y1) {
    this._x = x;
    this._y = y;
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    this._root = undefined;
}
function leaf_copy(leaf) {
    var copy = {
        data: leaf.data
    }, next = copy;
    while(leaf = leaf.next)next = next.next = {
        data: leaf.data
    };
    return copy;
}
var treeProto = quadtree.prototype = Quadtree.prototype;
treeProto.copy = function() {
    var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
    if (!node) return copy;
    if (!node.length) return copy._root = leaf_copy(node), copy;
    nodes = [
        {
            source: node,
            target: copy._root = new Array(4)
        }
    ];
    while(node = nodes.pop()){
        for(var i = 0; i < 4; ++i)if (child = node.source[i]) {
            if (child.length) nodes.push({
                source: child,
                target: node.target[i] = new Array(4)
            });
            else node.target[i] = leaf_copy(child);
        }
    }
    return copy;
};
treeProto.add = (0, _addJsDefault.default);
treeProto.addAll = (0, _addJs.addAll);
treeProto.cover = (0, _coverJsDefault.default);
treeProto.data = (0, _dataJsDefault.default);
treeProto.extent = (0, _extentJsDefault.default);
treeProto.find = (0, _findJsDefault.default);
treeProto.remove = (0, _removeJsDefault.default);
treeProto.removeAll = (0, _removeJs.removeAll);
treeProto.root = (0, _rootJsDefault.default);
treeProto.size = (0, _sizeJsDefault.default);
treeProto.visit = (0, _visitJsDefault.default);
treeProto.visitAfter = (0, _visitAfterJsDefault.default);
treeProto.x = (0, _xJsDefault.default);
treeProto.y = (0, _yJsDefault.default);

},{"./add.js":"bsac5","./cover.js":"gENfN","./data.js":"2uGAx","./extent.js":"9ojS1","./find.js":"4K0hP","./remove.js":"5QHxT","./root.js":"ggTIx","./size.js":"eQnwx","./visit.js":"6DZG9","./visitAfter.js":"c8U2L","./x.js":"iNLfi","./y.js":"8yxIq","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"bsac5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addAll", ()=>addAll);
exports.default = function(d) {
    const x = +this._x.call(null, d), y = +this._y.call(null, d);
    return add(this.cover(x, y), x, y, d);
};
function add(tree, x, y, d) {
    if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points
    var parent, node = tree._root, leaf = {
        data: d
    }, x0 = tree._x0, y0 = tree._y0, x1 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return tree._root = leaf, tree;
    // Find the existing leaf for the new point, or add it.
    while(node.length){
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
        if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
    }
    // Is the new point is exactly coincident with the existing point?
    xp = +tree._x.call(null, node.data);
    yp = +tree._y.call(null, node.data);
    if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
    // Otherwise, split the leaf node until the old and new point are separated.
    do {
        parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
    }while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
    return parent[j] = node, parent[i] = leaf, tree;
}
function addAll(data) {
    var d, i, n = data.length, x, y, xz = new Array(n), yz = new Array(n), x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    // Compute the points and their extent.
    for(i = 0; i < n; ++i){
        if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
        xz[i] = x;
        yz[i] = y;
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
    }
    // If there were no (valid) points, abort.
    if (x0 > x1 || y0 > y1) return this;
    // Expand the tree to cover the new points.
    this.cover(x0, y0).cover(x1, y1);
    // Add the new points.
    for(i = 0; i < n; ++i)add(this, xz[i], yz[i], data[i]);
    return this;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"gENfN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x, y) {
    if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points
    var x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
    // If the quadtree has no extent, initialize them.
    // Integer extent are necessary so that if we later double the extent,
    // the existing quadrant boundaries don’t change due to floating point error!
    if (isNaN(x0)) {
        x1 = (x0 = Math.floor(x)) + 1;
        y1 = (y0 = Math.floor(y)) + 1;
    } else {
        var z = x1 - x0 || 1, node = this._root, parent, i;
        while(x0 > x || x >= x1 || y0 > y || y >= y1){
            i = (y < y0) << 1 | x < x0;
            parent = new Array(4), parent[i] = node, node = parent, z *= 2;
            switch(i){
                case 0:
                    x1 = x0 + z, y1 = y0 + z;
                    break;
                case 1:
                    x0 = x1 - z, y1 = y0 + z;
                    break;
                case 2:
                    x1 = x0 + z, y0 = y1 - z;
                    break;
                case 3:
                    x0 = x1 - z, y0 = y1 - z;
                    break;
            }
        }
        if (this._root && this._root.length) this._root = node;
    }
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    return this;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"2uGAx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    var data = [];
    this.visit(function(node) {
        if (!node.length) do data.push(node.data);
        while (node = node.next);
    });
    return data;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"9ojS1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(_) {
    return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [
        [
            this._x0,
            this._y0
        ],
        [
            this._x1,
            this._y1
        ]
    ];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4K0hP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quadJs = require("./quad.js");
var _quadJsDefault = parcelHelpers.interopDefault(_quadJs);
exports.default = function(x, y, radius) {
    var data, x0 = this._x0, y0 = this._y0, x1, y1, x2, y2, x3 = this._x1, y3 = this._y1, quads = [], node = this._root, q, i;
    if (node) quads.push(new (0, _quadJsDefault.default)(node, x0, y0, x3, y3));
    if (radius == null) radius = Infinity;
    else {
        x0 = x - radius, y0 = y - radius;
        x3 = x + radius, y3 = y + radius;
        radius *= radius;
    }
    while(q = quads.pop()){
        // Stop searching if this quadrant can’t contain a closer node.
        if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;
        // Bisect the current quadrant.
        if (node.length) {
            var xm = (x1 + x2) / 2, ym = (y1 + y2) / 2;
            quads.push(new (0, _quadJsDefault.default)(node[3], xm, ym, x2, y2), new (0, _quadJsDefault.default)(node[2], x1, ym, xm, y2), new (0, _quadJsDefault.default)(node[1], xm, y1, x2, ym), new (0, _quadJsDefault.default)(node[0], x1, y1, xm, ym));
            // Visit the closest quadrant first.
            if (i = (y >= ym) << 1 | x >= xm) {
                q = quads[quads.length - 1];
                quads[quads.length - 1] = quads[quads.length - 1 - i];
                quads[quads.length - 1 - i] = q;
            }
        } else {
            var dx = x - +this._x.call(null, node.data), dy = y - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
            if (d2 < radius) {
                var d = Math.sqrt(radius = d2);
                x0 = x - d, y0 = y - d;
                x3 = x + d, y3 = y + d;
                data = node.data;
            }
        }
    }
    return data;
};

},{"./quad.js":"9uc40","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"9uc40":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(node, x0, y0, x1, y1) {
    this.node = node;
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"5QHxT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeAll", ()=>removeAll);
exports.default = function(d) {
    if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points
    var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1, x, y, xm, ym, right, bottom, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return this;
    // Find the leaf node for the point.
    // While descending, also retain the deepest parent with a non-removed sibling.
    if (node.length) while(true){
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
        if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
        if (!node.length) break;
        if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
    }
    // Find the point to remove.
    while(node.data !== d)if (!(previous = node, node = node.next)) return this;
    if (next = node.next) delete node.next;
    // If there are multiple coincident points, remove just the point.
    if (previous) return next ? previous.next = next : delete previous.next, this;
    // If this is the root point, remove it.
    if (!parent) return this._root = next, this;
    // Remove this leaf.
    next ? parent[i] = next : delete parent[i];
    // If the parent now contains exactly one leaf, collapse superfluous parents.
    if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
        if (retainer) retainer[j] = node;
        else this._root = node;
    }
    return this;
};
function removeAll(data) {
    for(var i = 0, n = data.length; i < n; ++i)this.remove(data[i]);
    return this;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ggTIx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    return this._root;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"eQnwx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function() {
    var size = 0;
    this.visit(function(node) {
        if (!node.length) do ++size;
        while (node = node.next);
    });
    return size;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"6DZG9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quadJs = require("./quad.js");
var _quadJsDefault = parcelHelpers.interopDefault(_quadJs);
exports.default = function(callback) {
    var quads = [], q, node = this._root, child, x0, y0, x1, y1;
    if (node) quads.push(new (0, _quadJsDefault.default)(node, this._x0, this._y0, this._x1, this._y1));
    while(q = quads.pop())if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
        var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
        if (child = node[3]) quads.push(new (0, _quadJsDefault.default)(child, xm, ym, x1, y1));
        if (child = node[2]) quads.push(new (0, _quadJsDefault.default)(child, x0, ym, xm, y1));
        if (child = node[1]) quads.push(new (0, _quadJsDefault.default)(child, xm, y0, x1, ym));
        if (child = node[0]) quads.push(new (0, _quadJsDefault.default)(child, x0, y0, xm, ym));
    }
    return this;
};

},{"./quad.js":"9uc40","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"c8U2L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quadJs = require("./quad.js");
var _quadJsDefault = parcelHelpers.interopDefault(_quadJs);
exports.default = function(callback) {
    var quads = [], next = [], q;
    if (this._root) quads.push(new (0, _quadJsDefault.default)(this._root, this._x0, this._y0, this._x1, this._y1));
    while(q = quads.pop()){
        var node = q.node;
        if (node.length) {
            var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
            if (child = node[0]) quads.push(new (0, _quadJsDefault.default)(child, x0, y0, xm, ym));
            if (child = node[1]) quads.push(new (0, _quadJsDefault.default)(child, xm, y0, x1, ym));
            if (child = node[2]) quads.push(new (0, _quadJsDefault.default)(child, x0, ym, xm, y1));
            if (child = node[3]) quads.push(new (0, _quadJsDefault.default)(child, xm, ym, x1, y1));
        }
        next.push(q);
    }
    while(q = next.pop())callback(q.node, q.x0, q.y0, q.x1, q.y1);
    return this;
};

},{"./quad.js":"9uc40","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"iNLfi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultX", ()=>defaultX);
function defaultX(d) {
    return d[0];
}
exports.default = function(_) {
    return arguments.length ? (this._x = _, this) : this._x;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8yxIq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultY", ()=>defaultY);
function defaultY(d) {
    return d[1];
}
exports.default = function(_) {
    return arguments.length ? (this._y = _, this) : this._y;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"bqryx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x) {
    return function() {
        return x;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"72pY7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(random) {
    return (random() - 0.5) * 1e-6;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"FYZiY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "x", ()=>x);
parcelHelpers.export(exports, "y", ()=>y);
var _d3Dispatch = require("d3-dispatch");
var _d3Timer = require("d3-timer");
var _lcgJs = require("./lcg.js");
var _lcgJsDefault = parcelHelpers.interopDefault(_lcgJs);
function x(d) {
    return d.x;
}
function y(d) {
    return d.y;
}
var initialRadius = 10, initialAngle = Math.PI * (3 - Math.sqrt(5));
exports.default = function(nodes) {
    var simulation, alpha = 1, alphaMin = 0.001, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = new Map(), stepper = (0, _d3Timer.timer)(step), event = (0, _d3Dispatch.dispatch)("tick", "end"), random = (0, _lcgJsDefault.default)();
    if (nodes == null) nodes = [];
    function step() {
        tick();
        event.call("tick", simulation);
        if (alpha < alphaMin) {
            stepper.stop();
            event.call("end", simulation);
        }
    }
    function tick(iterations) {
        var i, n = nodes.length, node;
        if (iterations === undefined) iterations = 1;
        for(var k = 0; k < iterations; ++k){
            alpha += (alphaTarget - alpha) * alphaDecay;
            forces.forEach(function(force) {
                force(alpha);
            });
            for(i = 0; i < n; ++i){
                node = nodes[i];
                if (node.fx == null) node.x += node.vx *= velocityDecay;
                else node.x = node.fx, node.vx = 0;
                if (node.fy == null) node.y += node.vy *= velocityDecay;
                else node.y = node.fy, node.vy = 0;
            }
        }
        return simulation;
    }
    function initializeNodes() {
        for(var i = 0, n = nodes.length, node; i < n; ++i){
            node = nodes[i], node.index = i;
            if (node.fx != null) node.x = node.fx;
            if (node.fy != null) node.y = node.fy;
            if (isNaN(node.x) || isNaN(node.y)) {
                var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;
                node.x = radius * Math.cos(angle);
                node.y = radius * Math.sin(angle);
            }
            if (isNaN(node.vx) || isNaN(node.vy)) node.vx = node.vy = 0;
        }
    }
    function initializeForce(force) {
        if (force.initialize) force.initialize(nodes, random);
        return force;
    }
    initializeNodes();
    return simulation = {
        tick: tick,
        restart: function() {
            return stepper.restart(step), simulation;
        },
        stop: function() {
            return stepper.stop(), simulation;
        },
        nodes: function(_) {
            return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
        },
        alpha: function(_) {
            return arguments.length ? (alpha = +_, simulation) : alpha;
        },
        alphaMin: function(_) {
            return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
        },
        alphaDecay: function(_) {
            return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
        },
        alphaTarget: function(_) {
            return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
        },
        velocityDecay: function(_) {
            return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
        },
        randomSource: function(_) {
            return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
        },
        force: function(name, _) {
            return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
        },
        find: function(x, y, radius) {
            var i = 0, n = nodes.length, dx, dy, d2, node, closest;
            if (radius == null) radius = Infinity;
            else radius *= radius;
            for(i = 0; i < n; ++i){
                node = nodes[i];
                dx = x - node.x;
                dy = y - node.y;
                d2 = dx * dx + dy * dy;
                if (d2 < radius) closest = node, radius = d2;
            }
            return closest;
        },
        on: function(name, _) {
            return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
        }
    };
};

},{"d3-dispatch":"5WtHO","d3-timer":"7TEss","./lcg.js":"6H1cG","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"6H1cG":[function(require,module,exports) {
// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const a = 1664525;
const c = 1013904223;
const m = 4294967296; // 2^32
exports.default = function() {
    let s = 1;
    return ()=>(s = (a * s + c) % m) / m;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"g7Dub":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
exports.default = function(x) {
    var strength = (0, _constantJsDefault.default)(0.1), nodes, strengths, xz;
    if (typeof x !== "function") x = (0, _constantJsDefault.default)(x == null ? 0 : +x);
    function force(alpha) {
        for(var i = 0, n = nodes.length, node; i < n; ++i)node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        xz = new Array(n);
        for(i = 0; i < n; ++i)strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), initialize(), force) : strength;
    };
    force.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), initialize(), force) : x;
    };
    return force;
};

},{"./constant.js":"bqryx","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"84MbS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
exports.default = function(y) {
    var strength = (0, _constantJsDefault.default)(0.1), nodes, strengths, yz;
    if (typeof y !== "function") y = (0, _constantJsDefault.default)(y == null ? 0 : +y);
    function force(alpha) {
        for(var i = 0, n = nodes.length, node; i < n; ++i)node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        yz = new Array(n);
        for(i = 0; i < n; ++i)strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), initialize(), force) : strength;
    };
    force.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), initialize(), force) : y;
    };
    return force;
};

},{"./constant.js":"bqryx","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}]},["fdTx9","1SICI"], "1SICI", "parcelRequire94c2")

//# sourceMappingURL=index.18dbc454.js.map
