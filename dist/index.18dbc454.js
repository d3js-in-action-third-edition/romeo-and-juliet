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
var _prepData = require("./prep-data");
var _matrix = require("./matrix");
var _arc = require("./arc");
var _beeswarm = require("./beeswarm");
var _network = require("./network");
(0, _legend.createLegend)();
// Load data
(0, _prepData.prepData)();
const [nodes, links] = (0, _loadData.loadData)();
// Draw the adjacency matrix
(0, _matrix.drawMatrix)(nodes, links);
// Draw the arc diagram
(0, _arc.drawArcDiagram)(nodes, links);
// Draw the beeswarm
(0, _beeswarm.drawBeeswarm)(nodes);
// Draw the network
(0, _network.drawNetwork)(nodes, links);

},{"./legend":"ieevi","./load-data":"9ZwCu","./matrix":"bhcXq","./arc":"cq48B","./beeswarm":"kFA5m","./network":"hhhnT","./prep-data":"jhgrB"}],"ieevi":[function(require,module,exports) {
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
        id: "abraham",
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
    const links = require("20bc14f71e83b139");
    console.log("nodes", nodes);
    console.log("links", links);
    return [
        nodes,
        links
    ];
};

},{"823ddf4ed075553f":"aKcxm","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8","20bc14f71e83b139":"el7n8"}],"aKcxm":[function(require,module,exports) {
module.exports = JSON.parse('[{"id":"prince","name":"Prince Escalus","house":"Ruling house of Verona","descrition":"Ruling Prince of Verona","totalLines":76,"firstLineNumber":88,"firstLine":"Rebellious subjects, enemies to peace,"},{"id":"paris","name":"Count Paris","house":"Ruling house of Verona","descrition":"Kinsman of Escalus who wishes to marry Juliet.","totalLines":70,"firstLineNumber":256,"firstLine":"Of honourable reckoning are you both,"},{"id":"mercutio","name":"Mercutio","house":"Ruling house of Verona","descrition":"Another kinsman of Escalus, a friend of Romeo.","totalLines":261,"firstLineNumber":478,"firstLine":"Nay, gentle Romeo, we must have you dance."},{"id":"page","name":"Page","house":"Ruling house of Verona","totalLines":9,"firstLineNumber":2784,"firstLine":"[Aside]  I am almost afraid to stand alone"},{"id":"capulet","name":"Capulet","house":"House of Capulet","descrition":"Patriarch of the house of Capulet.","totalLines":273,"firstLineNumber":82,"firstLine":"What noise is this? Give me my long sword, ho!"},{"id":"lady_capulet","name":"Lady Capulet","house":"House of Capulet","descrition":"Matriarch of the house of Capulet.","totalLines":115,"firstLineNumber":83,"firstLine":"A crutch, a crutch! why call you for a sword?"},{"id":"juliet","name":"Juliet Capulet","house":"House of Capulet","descrition":"13-year-old daughter of Capulet, the play\'s female protagonist.","totalLines":544,"firstLineNumber":360,"firstLine":"How now! who calls?"},{"id":"tybalt","name":"Tybalt","house":"House of Capulet","descrition":"Cousin of Juliet, the nephew of Lady Capulet.","totalLines":36,"firstLineNumber":73,"firstLine":"What, art thou drawn among these heartless hinds?"},{"id":"nurse","name":"The Nurse","house":"House of Capulet","description":"Juliet\'s personal attendant and confidante.","totalLines":281,"firstLineNumber":357,"firstLine":"Now, by my maidenhead, at twelve year old,"},{"id":"peter","name":"Peter","house":"House of Capulet","description":"Servant of the Capulet household.","totalLines":33,"firstLineNumber":1198,"firstLine":"Anon!"},{"id":"sampson","name":"Sampson","house":"House of Capulet","description":"Servant of the Capulet household.","totalLines":31,"firstLineNumber":15,"firstLine":"Gregory, o\' my word, we\'ll not carry coals."},{"id":"gregory","name":"Gregory","house":"House of Capulet","description":"Servant of the Capulet household.","totalLines":20,"firstLineNumber":16,"firstLine":"No, for then we should be colliers."},{"id":"second_capulet","name":"Second Capulet","house":"House of Capulet","totalLines":3,"firstLineNumber":618,"firstLine":"By\'r lady, thirty years."},{"id":"musician","name":"Musician","house":"House of Capulet","totalLines":1,"firstLineNumber":2642,"firstLine":"Marry, sir, because silver hath a sweet sound."},{"id":"first_musician","name":"First Musician","house":"House of Capulet","totalLines":9,"firstLineNumber":2611,"firstLine":"Faith, we may put up our pipes, and be gone."},{"id":"second_musician","name":"Second Musician","house":"House of Capulet","totalLines":4,"firstLineNumber":2633,"firstLine":"Pray you, put up your dagger, and put out your wit."},{"id":"servant","name":"Servant","house":"House of Capulet","totalLines":23,"firstLineNumber":291,"firstLine":"Find them out whose names are written here! It is"},{"id":"first_servant","name":"First Servant","house":"House of Capulet","totalLines":10,"firstLineNumber":586,"firstLine":"Where\'s Potpan, that he helps not to take away? He"},{"id":"second_servant","name":"Second Servant","house":"House of Capulet","totalLines":12,"firstLineNumber":588,"firstLine":"When good manners shall lie all in one or two men\'s"},{"id":"montague","name":"Montague","house":"House of Montague","description":"Patriarch of the house of Montague.","totalLines":41,"firstLineNumber":86,"firstLine":"Thou villain Capulet,--Hold me not, let me go."},{"id":"lady_montague","name":"Lady Montague","house":"House of Montague","description":"Matriarch of the house of Montague.","totalLines":3,"firstLineNumber":87,"firstLine":"Thou shalt not stir a foot to seek a foe."},{"id":"romeo","name":"Romeo Montague","house":"House of Montague","description":"Son of Montague, is the play\'s male protagonist.","totalLines":613,"firstLineNumber":167,"firstLine":"Is the day so young?"},{"id":"benvolio","name":"Benvolio","house":"House of Montague","description":"Romeo\'s cousin and best friend.","totalLines":160,"firstLineNumber":71,"firstLine":"Part, fools!"},{"id":"balthasar","name":"Balthasar","house":"House of Montague","description":"Servant of the Montague household.","totalLines":32,"firstLineNumber":2672,"firstLine":"Then she is well, and nothing can be ill:"},{"id":"abraham","name":"Abram","house":"House of Montague","description":"Servant of the Montague household.","totalLines":5,"firstLineNumber":54,"firstLine":"Do you bite your thumb at us, sir?"},{"id":"friar_laurence","name":"Friar Laurence","house":"Others","description":"Franciscan friar and Romeo\'s confidant.","totalLines":351,"firstLineNumber":1003,"firstLine":"The grey-eyed morn smiles on the frowning night,"},{"id":"friar_john","name":"Friar John","house":"Others","description":"Sent to deliver Friar Laurence\'s letter to Romeo.","totalLines":13,"firstLineNumber":2745,"firstLine":"Holy Franciscan friar! brother, ho!"},{"id":"apothecary","name":"Apothecary","house":"Others","description":"Reluctantly sells Romeo poison.","totalLines":7,"firstLineNumber":2715,"firstLine":"Who calls so loud?"},{"id":"chorus","name":"Chorus","house":"Others","description":"Reads a prologue to each of the first two acts.","totalLines":29,"firstLineNumber":0,"firstLine":"Two households, both alike in dignity,"},{"id":"first_citizen","name":"First Citizen","house":"Others","totalLines":7,"firstLineNumber":80,"firstLine":"Clubs, bills, and partisans! strike! beat them down!"},{"id":"first_watchman","name":"First Watchman","house":"Others","totalLines":19,"firstLineNumber":2950,"firstLine":"[Within]  Lead, boy: which way?"},{"id":"second_watchman","name":"Second Watchman","house":"Others","totalLines":1,"firstLineNumber":2965,"firstLine":"Here\'s Romeo\'s man, we found him in the churchyard."},{"id":"third_watchman","name":"Third Watchman","house":"Others","totalLines":3,"firstLineNumber":2967,"firstLine":"Here is a friar, that trembles, sighs and weeps:"},{"id":"third_musician","name":"Third Musician","house":"Others","totalLines":1,"firstLineNumber":2646,"firstLine":"Faith, I know not what to say."}]');

},{}],"el7n8":[function(require,module,exports) {
module.exports = JSON.parse('[{"source":"sampson","target":"gregory","weight":1},{"source":"sampson","target":"abraham","weight":1},{"source":"sampson","target":"benvolio","weight":1},{"source":"sampson","target":"tybalt","weight":1},{"source":"sampson","target":"first_citizen","weight":1},{"source":"sampson","target":"capulet","weight":1},{"source":"sampson","target":"lady_capulet","weight":1},{"source":"sampson","target":"montague","weight":1},{"source":"sampson","target":"lady_montague","weight":1},{"source":"sampson","target":"prince","weight":1},{"source":"sampson","target":"romeo","weight":1},{"source":"gregory","target":"abraham","weight":1},{"source":"gregory","target":"benvolio","weight":1},{"source":"gregory","target":"tybalt","weight":1},{"source":"gregory","target":"first_citizen","weight":1},{"source":"gregory","target":"capulet","weight":1},{"source":"gregory","target":"lady_capulet","weight":1},{"source":"gregory","target":"montague","weight":1},{"source":"gregory","target":"lady_montague","weight":1},{"source":"gregory","target":"prince","weight":1},{"source":"gregory","target":"romeo","weight":1},{"source":"abraham","target":"benvolio","weight":1},{"source":"abraham","target":"tybalt","weight":1},{"source":"abraham","target":"first_citizen","weight":1},{"source":"abraham","target":"capulet","weight":1},{"source":"abraham","target":"lady_capulet","weight":1},{"source":"abraham","target":"montague","weight":1},{"source":"abraham","target":"lady_montague","weight":1},{"source":"abraham","target":"prince","weight":1},{"source":"abraham","target":"romeo","weight":1},{"source":"benvolio","target":"tybalt","weight":3},{"source":"benvolio","target":"first_citizen","weight":2},{"source":"benvolio","target":"capulet","weight":3},{"source":"benvolio","target":"lady_capulet","weight":2},{"source":"benvolio","target":"montague","weight":2},{"source":"benvolio","target":"lady_montague","weight":1},{"source":"benvolio","target":"prince","weight":2},{"source":"benvolio","target":"romeo","weight":7},{"source":"tybalt","target":"first_citizen","weight":2},{"source":"tybalt","target":"capulet","weight":2},{"source":"tybalt","target":"lady_capulet","weight":2},{"source":"tybalt","target":"montague","weight":2},{"source":"tybalt","target":"lady_montague","weight":1},{"source":"tybalt","target":"prince","weight":2},{"source":"tybalt","target":"romeo","weight":3},{"source":"first_citizen","target":"capulet","weight":1},{"source":"first_citizen","target":"lady_capulet","weight":2},{"source":"first_citizen","target":"montague","weight":2},{"source":"first_citizen","target":"lady_montague","weight":1},{"source":"first_citizen","target":"prince","weight":2},{"source":"first_citizen","target":"romeo","weight":2},{"source":"capulet","target":"lady_capulet","weight":7},{"source":"capulet","target":"montague","weight":2},{"source":"capulet","target":"lady_montague","weight":1},{"source":"capulet","target":"prince","weight":2},{"source":"capulet","target":"romeo","weight":5},{"source":"lady_capulet","target":"montague","weight":3},{"source":"lady_capulet","target":"lady_montague","weight":1},{"source":"lady_capulet","target":"prince","weight":3},{"source":"lady_capulet","target":"romeo","weight":4},{"source":"montague","target":"lady_montague","weight":1},{"source":"montague","target":"prince","weight":3},{"source":"montague","target":"romeo","weight":3},{"source":"lady_montague","target":"prince","weight":1},{"source":"lady_montague","target":"romeo","weight":1},{"source":"prince","target":"romeo","weight":3},{"source":"capulet","target":"paris","weight":4},{"source":"capulet","target":"servant","weight":2},{"source":"paris","target":"servant","weight":1},{"source":"paris","target":"benvolio","weight":1},{"source":"paris","target":"romeo","weight":2},{"source":"servant","target":"benvolio","weight":2},{"source":"servant","target":"romeo","weight":2},{"source":"lady_capulet","target":"nurse","weight":5},{"source":"lady_capulet","target":"juliet","weight":5},{"source":"lady_capulet","target":"servant","weight":1},{"source":"nurse","target":"juliet","weight":7},{"source":"nurse","target":"servant","weight":2},{"source":"juliet","target":"servant","weight":2},{"source":"romeo","target":"mercutio","weight":4},{"source":"benvolio","target":"mercutio","weight":4},{"source":"first_servant","target":"second_servant","weight":2},{"source":"first_servant","target":"capulet","weight":2},{"source":"first_servant","target":"second_capulet","weight":1},{"source":"first_servant","target":"romeo","weight":1},{"source":"first_servant","target":"servant","weight":1},{"source":"first_servant","target":"tybalt","weight":1},{"source":"first_servant","target":"juliet","weight":1},{"source":"first_servant","target":"nurse","weight":2},{"source":"first_servant","target":"benvolio","weight":1},{"source":"second_servant","target":"capulet","weight":3},{"source":"second_servant","target":"second_capulet","weight":1},{"source":"second_servant","target":"romeo","weight":1},{"source":"second_servant","target":"servant","weight":1},{"source":"second_servant","target":"tybalt","weight":1},{"source":"second_servant","target":"juliet","weight":2},{"source":"second_servant","target":"nurse","weight":3},{"source":"second_servant","target":"benvolio","weight":1},{"source":"capulet","target":"second_capulet","weight":1},{"source":"capulet","target":"juliet","weight":4},{"source":"capulet","target":"nurse","weight":5},{"source":"second_capulet","target":"romeo","weight":1},{"source":"second_capulet","target":"servant","weight":1},{"source":"second_capulet","target":"tybalt","weight":1},{"source":"second_capulet","target":"juliet","weight":1},{"source":"second_capulet","target":"nurse","weight":1},{"source":"second_capulet","target":"benvolio","weight":1},{"source":"romeo","target":"juliet","weight":5},{"source":"romeo","target":"nurse","weight":5},{"source":"servant","target":"tybalt","weight":1},{"source":"tybalt","target":"juliet","weight":1},{"source":"tybalt","target":"nurse","weight":1},{"source":"juliet","target":"benvolio","weight":1},{"source":"nurse","target":"benvolio","weight":2},{"source":"friar_laurence","target":"romeo","weight":4},{"source":"mercutio","target":"nurse","weight":1},{"source":"mercutio","target":"peter","weight":1},{"source":"benvolio","target":"peter","weight":1},{"source":"romeo","target":"peter","weight":1},{"source":"nurse","target":"peter","weight":2},{"source":"friar_laurence","target":"juliet","weight":3},{"source":"mercutio","target":"tybalt","weight":1},{"source":"mercutio","target":"first_citizen","weight":1},{"source":"mercutio","target":"prince","weight":1},{"source":"mercutio","target":"lady_capulet","weight":1},{"source":"mercutio","target":"montague","weight":1},{"source":"friar_laurence","target":"nurse","weight":2},{"source":"paris","target":"lady_capulet","weight":3},{"source":"friar_laurence","target":"paris","weight":3},{"source":"paris","target":"juliet","weight":2},{"source":"second_servant","target":"lady_capulet","weight":2},{"source":"lady_capulet","target":"first_servant","weight":1},{"source":"nurse","target":"paris","weight":1},{"source":"nurse","target":"first_musician","weight":1},{"source":"nurse","target":"second_musician","weight":1},{"source":"nurse","target":"musician","weight":1},{"source":"nurse","target":"third_musician","weight":1},{"source":"lady_capulet","target":"friar_laurence","weight":2},{"source":"lady_capulet","target":"first_musician","weight":1},{"source":"lady_capulet","target":"peter","weight":1},{"source":"lady_capulet","target":"second_musician","weight":1},{"source":"lady_capulet","target":"musician","weight":1},{"source":"lady_capulet","target":"third_musician","weight":1},{"source":"capulet","target":"friar_laurence","weight":2},{"source":"capulet","target":"first_musician","weight":1},{"source":"capulet","target":"peter","weight":1},{"source":"capulet","target":"second_musician","weight":1},{"source":"capulet","target":"musician","weight":1},{"source":"capulet","target":"third_musician","weight":1},{"source":"friar_laurence","target":"first_musician","weight":1},{"source":"friar_laurence","target":"peter","weight":1},{"source":"friar_laurence","target":"second_musician","weight":1},{"source":"friar_laurence","target":"musician","weight":1},{"source":"friar_laurence","target":"third_musician","weight":1},{"source":"paris","target":"first_musician","weight":1},{"source":"paris","target":"peter","weight":1},{"source":"paris","target":"second_musician","weight":1},{"source":"paris","target":"musician","weight":1},{"source":"paris","target":"third_musician","weight":1},{"source":"first_musician","target":"peter","weight":1},{"source":"first_musician","target":"second_musician","weight":1},{"source":"first_musician","target":"musician","weight":1},{"source":"first_musician","target":"third_musician","weight":1},{"source":"peter","target":"second_musician","weight":1},{"source":"peter","target":"musician","weight":1},{"source":"peter","target":"third_musician","weight":1},{"source":"second_musician","target":"musician","weight":1},{"source":"second_musician","target":"third_musician","weight":1},{"source":"musician","target":"third_musician","weight":1},{"source":"romeo","target":"balthasar","weight":2},{"source":"romeo","target":"apothecary","weight":1},{"source":"balthasar","target":"apothecary","weight":1},{"source":"friar_john","target":"friar_laurence","weight":1},{"source":"paris","target":"page","weight":1},{"source":"paris","target":"balthasar","weight":1},{"source":"paris","target":"first_watchman","weight":1},{"source":"paris","target":"second_watchman","weight":1},{"source":"paris","target":"third_watchman","weight":1},{"source":"paris","target":"prince","weight":1},{"source":"paris","target":"montague","weight":1},{"source":"page","target":"romeo","weight":1},{"source":"page","target":"balthasar","weight":1},{"source":"page","target":"friar_laurence","weight":1},{"source":"page","target":"juliet","weight":1},{"source":"page","target":"first_watchman","weight":1},{"source":"page","target":"second_watchman","weight":1},{"source":"page","target":"third_watchman","weight":1},{"source":"page","target":"prince","weight":1},{"source":"page","target":"capulet","weight":1},{"source":"page","target":"lady_capulet","weight":1},{"source":"page","target":"montague","weight":1},{"source":"romeo","target":"first_watchman","weight":1},{"source":"romeo","target":"second_watchman","weight":1},{"source":"romeo","target":"third_watchman","weight":1},{"source":"balthasar","target":"friar_laurence","weight":1},{"source":"balthasar","target":"juliet","weight":1},{"source":"balthasar","target":"first_watchman","weight":1},{"source":"balthasar","target":"second_watchman","weight":1},{"source":"balthasar","target":"third_watchman","weight":1},{"source":"balthasar","target":"prince","weight":1},{"source":"balthasar","target":"capulet","weight":1},{"source":"balthasar","target":"lady_capulet","weight":1},{"source":"balthasar","target":"montague","weight":1},{"source":"friar_laurence","target":"first_watchman","weight":1},{"source":"friar_laurence","target":"second_watchman","weight":1},{"source":"friar_laurence","target":"third_watchman","weight":1},{"source":"friar_laurence","target":"prince","weight":1},{"source":"friar_laurence","target":"montague","weight":1},{"source":"juliet","target":"first_watchman","weight":1},{"source":"juliet","target":"second_watchman","weight":1},{"source":"juliet","target":"third_watchman","weight":1},{"source":"juliet","target":"prince","weight":1},{"source":"juliet","target":"montague","weight":1},{"source":"first_watchman","target":"second_watchman","weight":1},{"source":"first_watchman","target":"third_watchman","weight":1},{"source":"first_watchman","target":"prince","weight":1},{"source":"first_watchman","target":"capulet","weight":1},{"source":"first_watchman","target":"lady_capulet","weight":1},{"source":"first_watchman","target":"montague","weight":1},{"source":"second_watchman","target":"third_watchman","weight":1},{"source":"second_watchman","target":"prince","weight":1},{"source":"second_watchman","target":"capulet","weight":1},{"source":"second_watchman","target":"lady_capulet","weight":1},{"source":"second_watchman","target":"montague","weight":1},{"source":"third_watchman","target":"prince","weight":1},{"source":"third_watchman","target":"capulet","weight":1},{"source":"third_watchman","target":"lady_capulet","weight":1},{"source":"third_watchman","target":"montague","weight":1}]');

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
        const link1 = {
            source: edge.source,
            target: edge.target,
            weight: edge.weight
        };
        const id1 = `${edge.source}-${edge.target}`;
        edgeHash[id1] = link1;
        const link2 = {
            source: edge.target,
            target: edge.source,
            weight: edge.weight
        };
        const id2 = `${edge.target}-${edge.source}`;
        edgeHash[id2] = link2;
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
                    x: i * (itemWidth + padding),
                    y: j * (itemWidth + padding)
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
    svg.selectAll(".matrix-dot").data(matrix).join("rect").attr("class", "matrix-dot").attr("x", (d)=>d.x).attr("y", (d)=>d.y).attr("width", itemWidth).attr("height", itemWidth).attr("fill", (d)=>d.weight ? (0, _scales.getEdgeColor)(minWeight, maxWeight, d.weight) : "white");
    // Append labels
    svg.selectAll(".label-left").data(nodes).join("text").attr("class", "label-left").attr("x", -8).attr("y", (d, i)=>i * (itemWidth + padding) + itemWidth / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((d)=>d.name).style("font-size", "13px");
    svg // Shouldn't that be done with a scale?
    .selectAll(".label-top").data(nodes).join("text").attr("class", "label-top").attr("dominant-baseline", "middle").attr("transform", (d, i)=>`translate(${i * (itemWidth + padding) + itemWidth / 2}, -8) rotate(-90)`).text((d)=>d.name).style("font-size", "13px");
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
    const height = 550;
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
        const midY = -Math.abs((d.source.x - d.target.x) / 2) - 60;
        const path = arcGenerator([
            [
                d.source.x,
                -60
            ],
            [
                midX,
                midY
            ],
            [
                d.target.x,
                -60
            ]
        ]);
        return path;
    };
    const minWeight = (0, _d3Array.min)(edges, (d)=>d.weight);
    const maxWeight = (0, _d3Array.max)(edges, (d)=>d.weight);
    svg.selectAll(".arc-link").data(arcEdges).join("path").attr("class", "arc-link").attr("d", (d)=>getArc(d)).attr("fill", "transparent").attr("stroke", (d)=>(0, _scales.getEdgeColor)(minWeight, maxWeight, d.weight)).attr("stroke-width", (d)=>d.weight).attr("stroke-opacity", 0.4).attr("stroke-linecap", "round");
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
        (0, _d3Selection.selectAll)(".arc-link").attr("stroke-opacity", 0.4);
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
var _d3Random = require("d3-random");
var _d3Scale = require("d3-scale");
var _scales = require("./scales");
var _helper = require("./helper");
const drawBeeswarm = (nodes)=>{
    const characters = JSON.parse(JSON.stringify(nodes));
    console.log("characters", characters);
    const sampleArray = (0, _d3Array.range)(300);
    sampleNodes = [];
    sampleArray.forEach(()=>{
        const randomNumberGenerator = (0, _d3Random.randomNormal)();
        sampleNodes.push({
            value: randomNumberGenerator() * 10
        });
    });
    console.log("sampleNodes", sampleNodes);
    // Dimensions
    const width = 1140;
    const height = 400;
    const margin = {
        top: 0,
        right: 200,
        bottom: 0,
        left: 200
    };
    const innerWidth = width - margin.right - margin.left;
    // Horizontal scale
    // const xScale = scaleLinear()
    //   .domain([0, totalLines])
    //   .range([0, width]);
    const xScale = (0, _d3Scale.scaleLinear)().domain([
        (0, _d3Array.min)(sampleNodes, (d)=>d.value),
        (0, _d3Array.max)(sampleNodes, (d)=>d.value)
    ]).range([
        0,
        innerWidth
    ]);
    // Append SVG container
    const svg = (0, _d3Selection.select)("#beeswarm").append("svg").attr("viewBox", `0 0 ${width} ${height}`).append("g").attr("transform", `translate(${width / 2}, ${height / 2})`);
    // .append("g")
    //   .attr("transform", `translate(${margin.left}, ${height/2})`);
    // Append nodes
    const maxLines = (0, _d3Array.max)(characters, (d)=>d.totalLines);
    svg.selectAll(".beeswarm-circle").data(characters)// .data(sampleNodes)
    .join("circle").attr("class", "beeswarm-circle")// .attr("cx", d => xScale(d.firstLineNumber))
    // .attr("cx", d => xScale(d.value))
    .attr("cx", 0).attr("cy", 0).attr("r", 8)// .attr("r", d => {
    //   d["radius"] = getRadius(maxLines, d.totalLines);
    //   return d.radius;
    // })
    .attr("fill", (d)=>(0, _scales.charColorScale)(d.house));
    // .attr("fill", "#474973")
    // .attr("stroke", "#FAFBFF")
    // .attr("stroke-width", 1);
    // Set up the simulation
    const updateNetwork = ()=>{
        (0, _d3Selection.selectAll)(".beeswarm-circle").attr("cx", (d)=>d.x).attr("cy", (d)=>d.y);
    };
    // forceSimulation()
    //   .force("x", forceX(width/2) )
    //   .nodes(characters)
    //   .on("tick", updateNetwork);
    // const simulation = forceSimulation()
    //   .force("y", forceY(0) )
    //   .nodes(characters)
    //   .on("tick", updateNetwork);
    // const simulation = forceSimulation()
    //   .force("x", forceX(0) )
    //   .force("y", forceY(0) )
    //   .nodes(characters)
    //   .on("tick", updateNetwork);
    // const simulation = forceSimulation()
    //   .force("x", forceX(0) )
    //   .force("y", forceY(0) )
    //   // .force("collide", forceCollide().radius(d => d.radius + 2) )
    //   .force("collide", forceCollide().radius(9) )
    //   .nodes(characters)
    //   .on("tick", updateNetwork);
    // const simulation = forceSimulation()
    //   .force("x", forceX(0) )
    //   .force("y", forceY(0).strength(0.01) )
    //   .nodes(characters)
    //   .on("tick", updateNetwork);
    // Beeswarm
    // const simulation = forceSimulation()
    //   .force("x", forceX(d => xScale(d.value)) )
    //   .force("y", forceY(0) )
    //   .force("collide", forceCollide().radius(7) )
    //   .nodes(sampleNodes)
    //   .on("tick", updateNetwork);
    // Centering force
    // const simulation = forceSimulation()
    //   .force("center", forceCenter().x(-100).y(50) )
    //   .force("collide", forceCollide().radius(10) )
    //   .nodes(characters)
    //   .on("tick", updateNetwork);
    // Many-body force
    const simulation = (0, _d3Force.forceSimulation)().force("charge", (0, _d3Force.forceManyBody)().strength(10)).nodes(characters).on("tick", updateNetwork);
// const simulation = forceSimulation()
//   .force("x", forceX(d => xScale(d.firstLineNumber)).strength(1) )
//   .force("y", forceY().strength(0.1) )
//   .force("collide", forceCollide().radius(d => d.radius) )
//   .nodes(characters)
//   .on("tick", updateNetwork);
// Append horizontal axis
// svg
//   .append("line")
//     .attr("x1", 0)
//     .attr("y1", 0)
//     .attr("x2", xScale(totalLines))
//     .attr("y2", 0)
//     .attr("stroke", "#161B33")
//     .attr("stroke-width", 2);
// svg
//   .selectAll(".scene-tick")
//   .data(scenes)
//   .join("line")
//     .attr("class", "scene-tick")
//     .attr("x1", d => xScale(d.firstLine))
//     .attr("y1", 0)
//     .attr("x2", d => xScale(d.firstLine))
//     .attr("y2", 8)
//     .attr("stroke", "#161B33");
// const sceneLabels = ["1.1", "2.1", "3.1", "4.1", "5.1"];
// svg
//   .selectAll(".scene-label")
//   .data(scenes.filter(s => sceneLabels.includes(s.scene)))
//   .join("text")
//     .attr("x", d => xScale(d.firstLine))
//     .attr("y", 28)
//     .attr("text-anchor", "middle")
//     .text(d => d.scene)
//     .style("font-size", "16px")
//     .style("font-weight", 500);
// // Add interactions
// selectAll(".beeswarm-circle")
//   .on("mouseenter", (e, d) => {
//     select(".beeswarm-legend-name").text(d.name);
//     select(".beeswarm-legend-description").text(d.description);
//     select(".beeswarm-legend-line .legend-line").text(`“ ${d.firstLine} ”`);
//     select(".beeswarm-legend").classed("hidden", false);
//   })
//   .on("mouseleave", (e, d) => {
//     select(".beeswarm-legend").classed("hidden", true);
//   });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8","d3-force":"helua","d3-selection":"gn9gd","d3-array":"1yX2W","./scales":"NYsfE","d3-scale":"UQ8g3","./helper":"lVRAz","d3-random":"60d0K"}],"helua":[function(require,module,exports) {
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

},{"./center.js":"VtxOg","./collide.js":"34dOa","./link.js":"dXjw5","./manyBody.js":"60qew","./radial.js":false,"./simulation.js":"FYZiY","./x.js":"g7Dub","./y.js":"84MbS","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"VtxOg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(x, y) {
    var nodes, strength = 1;
    if (x == null) x = 0;
    if (y == null) y = 0;
    function force() {
        var i, n = nodes.length, node, sx = 0, sy = 0;
        for(i = 0; i < n; ++i)node = nodes[i], sx += node.x, sy += node.y;
        for(sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, i = 0; i < n; ++i)node = nodes[i], node.x -= sx, node.y -= sy;
    }
    force.initialize = function(_) {
        nodes = _;
    };
    force.x = function(_) {
        return arguments.length ? (x = +_, force) : x;
    };
    force.y = function(_) {
        return arguments.length ? (y = +_, force) : y;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = +_, force) : strength;
    };
    return force;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"34dOa":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"dXjw5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _jiggleJs = require("./jiggle.js");
var _jiggleJsDefault = parcelHelpers.interopDefault(_jiggleJs);
function index(d) {
    return d.index;
}
function find(nodeById, nodeId) {
    var node = nodeById.get(nodeId);
    if (!node) throw new Error("node not found: " + nodeId);
    return node;
}
exports.default = function(links) {
    var id = index, strength = defaultStrength, strengths, distance = (0, _constantJsDefault.default)(30), distances, nodes, count, bias, random, iterations = 1;
    if (links == null) links = [];
    function defaultStrength(link) {
        return 1 / Math.min(count[link.source.index], count[link.target.index]);
    }
    function force(alpha) {
        for(var k = 0, n = links.length; k < iterations; ++k)for(var i = 0, link, source, target, x, y, l, b; i < n; ++i){
            link = links[i], source = link.source, target = link.target;
            x = target.x + target.vx - source.x - source.vx || (0, _jiggleJsDefault.default)(random);
            y = target.y + target.vy - source.y - source.vy || (0, _jiggleJsDefault.default)(random);
            l = Math.sqrt(x * x + y * y);
            l = (l - distances[i]) / l * alpha * strengths[i];
            x *= l, y *= l;
            target.vx -= x * (b = bias[i]);
            target.vy -= y * b;
            source.vx += x * (b = 1 - b);
            source.vy += y * b;
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, m = links.length, nodeById = new Map(nodes.map((d, i)=>[
                id(d, i, nodes),
                d
            ])), link;
        for(i = 0, count = new Array(n); i < m; ++i){
            link = links[i], link.index = i;
            if (typeof link.source !== "object") link.source = find(nodeById, link.source);
            if (typeof link.target !== "object") link.target = find(nodeById, link.target);
            count[link.source.index] = (count[link.source.index] || 0) + 1;
            count[link.target.index] = (count[link.target.index] || 0) + 1;
        }
        for(i = 0, bias = new Array(m); i < m; ++i)link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
        strengths = new Array(m), initializeStrength();
        distances = new Array(m), initializeDistance();
    }
    function initializeStrength() {
        if (!nodes) return;
        for(var i = 0, n = links.length; i < n; ++i)strengths[i] = +strength(links[i], i, links);
    }
    function initializeDistance() {
        if (!nodes) return;
        for(var i = 0, n = links.length; i < n; ++i)distances[i] = +distance(links[i], i, links);
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.links = function(_) {
        return arguments.length ? (links = _, initialize(), force) : links;
    };
    force.id = function(_) {
        return arguments.length ? (id = _, force) : id;
    };
    force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), initializeStrength(), force) : strength;
    };
    force.distance = function(_) {
        return arguments.length ? (distance = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), initializeDistance(), force) : distance;
    };
    return force;
};

},{"./constant.js":"bqryx","./jiggle.js":"72pY7","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"60qew":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _d3Quadtree = require("d3-quadtree");
var _constantJs = require("./constant.js");
var _constantJsDefault = parcelHelpers.interopDefault(_constantJs);
var _jiggleJs = require("./jiggle.js");
var _jiggleJsDefault = parcelHelpers.interopDefault(_jiggleJs);
var _simulationJs = require("./simulation.js");
exports.default = function() {
    var nodes, node, random, alpha, strength = (0, _constantJsDefault.default)(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
    function force(_) {
        var i, n = nodes.length, tree = (0, _d3Quadtree.quadtree)(nodes, (0, _simulationJs.x), (0, _simulationJs.y)).visitAfter(accumulate);
        for(alpha = _, i = 0; i < n; ++i)node = nodes[i], tree.visit(apply);
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        strengths = new Array(n);
        for(i = 0; i < n; ++i)node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
    }
    function accumulate(quad) {
        var strength = 0, q, c, weight = 0, x, y, i;
        // For internal nodes, accumulate forces from child quadrants.
        if (quad.length) {
            for(x = y = i = 0; i < 4; ++i)if ((q = quad[i]) && (c = Math.abs(q.value))) strength += q.value, weight += c, x += c * q.x, y += c * q.y;
            quad.x = x / weight;
            quad.y = y / weight;
        } else {
            q = quad;
            q.x = q.data.x;
            q.y = q.data.y;
            do strength += strengths[q.data.index];
            while (q = q.next);
        }
        quad.value = strength;
    }
    function apply(quad, x1, _, x2) {
        if (!quad.value) return true;
        var x = quad.x - node.x, y = quad.y - node.y, w = x2 - x1, l = x * x + y * y;
        // Apply the Barnes-Hut approximation if possible.
        // Limit forces for very close nodes; randomize direction if coincident.
        if (w * w / theta2 < l) {
            if (l < distanceMax2) {
                if (x === 0) x = (0, _jiggleJsDefault.default)(random), l += x * x;
                if (y === 0) y = (0, _jiggleJsDefault.default)(random), l += y * y;
                if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
                node.vx += x * quad.value * alpha / l;
                node.vy += y * quad.value * alpha / l;
            }
            return true;
        } else if (quad.length || l >= distanceMax2) return;
        // Limit forces for very close nodes; randomize direction if coincident.
        if (quad.data !== node || quad.next) {
            if (x === 0) x = (0, _jiggleJsDefault.default)(random), l += x * x;
            if (y === 0) y = (0, _jiggleJsDefault.default)(random), l += y * y;
            if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        }
        do if (quad.data !== node) {
            w = strengths[quad.data.index] * alpha / l;
            node.vx += x * w;
            node.vy += y * w;
        }
        while (quad = quad.next);
    }
    force.initialize = function(_nodes, _random) {
        nodes = _nodes;
        random = _random;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, _constantJsDefault.default)(+_), initialize(), force) : strength;
    };
    force.distanceMin = function(_) {
        return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
    };
    force.distanceMax = function(_) {
        return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
    };
    force.theta = function(_) {
        return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
    };
    return force;
};

},{"d3-quadtree":"ep5gF","./constant.js":"bqryx","./jiggle.js":"72pY7","./simulation.js":"FYZiY","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"FYZiY":[function(require,module,exports) {
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

},{"./constant.js":"bqryx","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"60d0K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomUniform", ()=>(0, _uniformJsDefault.default));
parcelHelpers.export(exports, "randomInt", ()=>(0, _intJsDefault.default));
parcelHelpers.export(exports, "randomNormal", ()=>(0, _normalJsDefault.default));
parcelHelpers.export(exports, "randomLogNormal", ()=>(0, _logNormalJsDefault.default));
parcelHelpers.export(exports, "randomBates", ()=>(0, _batesJsDefault.default));
parcelHelpers.export(exports, "randomIrwinHall", ()=>(0, _irwinHallJsDefault.default));
parcelHelpers.export(exports, "randomExponential", ()=>(0, _exponentialJsDefault.default));
parcelHelpers.export(exports, "randomPareto", ()=>(0, _paretoJsDefault.default));
parcelHelpers.export(exports, "randomBernoulli", ()=>(0, _bernoulliJsDefault.default));
parcelHelpers.export(exports, "randomGeometric", ()=>(0, _geometricJsDefault.default));
parcelHelpers.export(exports, "randomBinomial", ()=>(0, _binomialJsDefault.default));
parcelHelpers.export(exports, "randomGamma", ()=>(0, _gammaJsDefault.default));
parcelHelpers.export(exports, "randomBeta", ()=>(0, _betaJsDefault.default));
parcelHelpers.export(exports, "randomWeibull", ()=>(0, _weibullJsDefault.default));
parcelHelpers.export(exports, "randomCauchy", ()=>(0, _cauchyJsDefault.default));
parcelHelpers.export(exports, "randomLogistic", ()=>(0, _logisticJsDefault.default));
parcelHelpers.export(exports, "randomPoisson", ()=>(0, _poissonJsDefault.default));
parcelHelpers.export(exports, "randomLcg", ()=>(0, _lcgJsDefault.default));
var _uniformJs = require("./uniform.js");
var _uniformJsDefault = parcelHelpers.interopDefault(_uniformJs);
var _intJs = require("./int.js");
var _intJsDefault = parcelHelpers.interopDefault(_intJs);
var _normalJs = require("./normal.js");
var _normalJsDefault = parcelHelpers.interopDefault(_normalJs);
var _logNormalJs = require("./logNormal.js");
var _logNormalJsDefault = parcelHelpers.interopDefault(_logNormalJs);
var _batesJs = require("./bates.js");
var _batesJsDefault = parcelHelpers.interopDefault(_batesJs);
var _irwinHallJs = require("./irwinHall.js");
var _irwinHallJsDefault = parcelHelpers.interopDefault(_irwinHallJs);
var _exponentialJs = require("./exponential.js");
var _exponentialJsDefault = parcelHelpers.interopDefault(_exponentialJs);
var _paretoJs = require("./pareto.js");
var _paretoJsDefault = parcelHelpers.interopDefault(_paretoJs);
var _bernoulliJs = require("./bernoulli.js");
var _bernoulliJsDefault = parcelHelpers.interopDefault(_bernoulliJs);
var _geometricJs = require("./geometric.js");
var _geometricJsDefault = parcelHelpers.interopDefault(_geometricJs);
var _binomialJs = require("./binomial.js");
var _binomialJsDefault = parcelHelpers.interopDefault(_binomialJs);
var _gammaJs = require("./gamma.js");
var _gammaJsDefault = parcelHelpers.interopDefault(_gammaJs);
var _betaJs = require("./beta.js");
var _betaJsDefault = parcelHelpers.interopDefault(_betaJs);
var _weibullJs = require("./weibull.js");
var _weibullJsDefault = parcelHelpers.interopDefault(_weibullJs);
var _cauchyJs = require("./cauchy.js");
var _cauchyJsDefault = parcelHelpers.interopDefault(_cauchyJs);
var _logisticJs = require("./logistic.js");
var _logisticJsDefault = parcelHelpers.interopDefault(_logisticJs);
var _poissonJs = require("./poisson.js");
var _poissonJsDefault = parcelHelpers.interopDefault(_poissonJs);
var _lcgJs = require("./lcg.js");
var _lcgJsDefault = parcelHelpers.interopDefault(_lcgJs);

},{"./uniform.js":false,"./int.js":false,"./normal.js":"hStnP","./logNormal.js":false,"./bates.js":false,"./irwinHall.js":false,"./exponential.js":false,"./pareto.js":false,"./bernoulli.js":false,"./geometric.js":false,"./binomial.js":false,"./gamma.js":false,"./beta.js":false,"./weibull.js":false,"./cauchy.js":false,"./logistic.js":false,"./poisson.js":false,"./lcg.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"hStnP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defaultSourceJs = require("./defaultSource.js");
var _defaultSourceJsDefault = parcelHelpers.interopDefault(_defaultSourceJs);
exports.default = function sourceRandomNormal(source) {
    function randomNormal(mu, sigma) {
        var x, r;
        mu = mu == null ? 0 : +mu;
        sigma = sigma == null ? 1 : +sigma;
        return function() {
            var y;
            // If available, use the second previously-generated uniform random.
            if (x != null) y = x, x = null;
            else do {
                x = source() * 2 - 1;
                y = source() * 2 - 1;
                r = x * x + y * y;
            }while (!r || r > 1);
            return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
        };
    }
    randomNormal.source = sourceRandomNormal;
    return randomNormal;
}((0, _defaultSourceJsDefault.default));

},{"./defaultSource.js":"fVJ5Y","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fVJ5Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = Math.random;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"hhhnT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawNetwork", ()=>drawNetwork);
var _d3Force = require("d3-force");
var _d3Selection = require("d3-selection");
var _d3Array = require("d3-array");
var _scales = require("./scales");
const drawNetwork = (nodes, edges)=>{
    const networkNodes = JSON.parse(JSON.stringify(nodes));
    const networkEdges = JSON.parse(JSON.stringify(edges));
    console.log("networkNodes", networkNodes);
    // const nodeHash = networkNodes.reduce((hash, node) => {
    //   hash[node.id] = node;
    //   return hash;
    // });
    // console.log("nodeHash", nodeHash);
    // networkEdges.forEach(edge => {
    //   edge.source = nodeHash[edge.source];
    //   edge.target = nodeHash[edge.target];
    // });
    console.log("networkEdges", networkEdges);
    // Dimensions
    const width = 1140;
    const height = 800;
    // Append SVG container
    const svg = (0, _d3Selection.select)("#network").append("svg").attr("viewBox", `0 0 ${width} ${height}`).append("g").attr("transform", `translate(${width / 2}, ${height / 2})`);
    // Append links
    const minWeight = (0, _d3Array.min)(networkEdges, (d)=>d.weight);
    const maxWeight = (0, _d3Array.max)(networkEdges, (d)=>d.weight);
    svg.selectAll(".network-link").data(networkEdges).join("line").attr("class", "network-link").attr("stroke", (d)=>(0, _scales.getEdgeColor)(minWeight, maxWeight, d.weight)).attr("stroke-width", (d)=>d.weight);
    // Append nodes
    const maxLines = (0, _d3Array.max)(networkNodes, (d)=>d.totalLines);
    svg.selectAll(".network-node").data(networkNodes).join("circle").attr("class", (d)=>`network-node network-node-${d.id}`).attr("cx", 0).attr("cy", 0).attr("r", (d)=>{
        d["radius"] = (0, _scales.getRadius)(maxLines, d.totalLines);
        return d.radius;
    }).attr("fill", (d)=>(0, _scales.charColorScale)(d.house)).attr("stroke", "#FAFBFF").attr("stroke-width", 1);
    const updateNetwork = ()=>{
        (0, _d3Selection.selectAll)(".network-link").attr("x1", (d)=>d.source.x).attr("y1", (d)=>d.source.y).attr("x2", (d)=>d.target.x).attr("y2", (d)=>d.target.y);
        (0, _d3Selection.selectAll)(".network-node").attr("cx", (d)=>d.x).attr("cy", (d)=>d.y);
    };
    const simulation = (0, _d3Force.forceSimulation)().force("charge", (0, _d3Force.forceManyBody)().strength(-1000)).force("collide", (0, _d3Force.forceCollide)().radius((d)=>d.radius + 2)).force("center", (0, _d3Force.forceCenter)().x(0).y(0)).force("link", (0, _d3Force.forceLink)().id((d)=>d.id).strength((d)=>d.weight / 10)).force("bounding", ()=>{
        networkNodes.forEach((node)=>{
            if (node.x < -width / 2 + node.radius) node.vx = 1;
            if (node.y < -height / 2 + node.radius) node.vy = 1;
            if (node.x > width / 2 - node.radius) node.vx = -1;
            if (node.y > height / 2 - node.radius) node.vy = -1;
        });
    }).nodes(networkNodes).on("tick", updateNetwork);
    simulation.force("link").links(networkEdges);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8","d3-force":"helua","d3-selection":"gn9gd","./scales":"NYsfE","d3-array":"1yX2W"}],"jhgrB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prepData", ()=>prepData);
var _helper = require("./helper");
const prepData = ()=>{
    // Load the data
    const data = require("831d8c179e4ef917");
    const data_og = require("7ac10ca2634bdf2e");
    // data_og.forEach(l => {
    //   if (l.Player === "BENVOLIO") {
    //     data.find(line => line.PlayerLine === l.PlayerLine).Player = "benvolio";
    //   }
    // })
    console.log("data", data);
    // Calculate the total number of lines for each character
    (0, _helper.characters).forEach((c)=>{
        c["totalLines"] = 0;
    });
    const scenes = [];
    let totalLines = 0;
    const charEntered = [];
    data.forEach((d, i)=>{
        const character = (0, _helper.characters).find((c)=>c.id === d.Player);
        character.totalLines += 1;
        if (!charEntered.includes(character.id)) {
            character["firstLineNumber"] = i;
            character["firstLine"] = d.PlayerLine;
            charEntered.push(character.id);
        }
        // if (!scenes.find(s => s.scene === d.scene)) {
        //   scenes.push({
        //     scene: d.scene,
        //     firstLine: i
        //   });
        // }
        if (!scenes.includes(d.scene)) scenes.push(d.scene);
        totalLines += 1;
    });
    console.log("characters", (0, _helper.characters)); // Nodes list
    console.log("totalLines", totalLines);
    // Create edge list
    console.log("scenes", scenes);
    const edges = [];
    scenes.forEach((scene)=>{
        const lines = data.filter((d)=>d.scene === scene);
        // console.log(scene, lines);
        const sceneCharacters = [];
        lines.forEach((l)=>{
            const character = l["Player"];
            if (!sceneCharacters.includes(character)) sceneCharacters.push(character);
        });
        // console.log(sceneCharacters);
        if (sceneCharacters.length > 1) sceneCharacters.forEach((source)=>{
            sceneCharacters.forEach((target)=>{
                if (source !== target) {
                    if (!edges.find((e)=>e.source === source && e.target === target || e.source === target && e.target === source)) edges.push({
                        source: source,
                        target: target,
                        weight: 1
                    });
                    else {
                        const edge = edges.find((e)=>e.source === source && e.target === target || e.source === target && e.target === source);
                        edge.weight += 1;
                    }
                }
            });
        });
    });
    edges.forEach((edge)=>{
        edge.weight = edge.weight / 2;
    });
    console.log("edges original", edges);
// return data;
};

},{"./helper":"lVRAz","831d8c179e4ef917":"6uPOc","7ac10ca2634bdf2e":"c0mAN","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"6uPOc":[function(require,module,exports) {
module.exports = JSON.parse('[{"Dataline":"85284","PlayerLinenumber":"7","ActSceneLine":"1.0.1","Player":"chorus","PlayerLine":"Two households, both alike in dignity,","scene":"1.0"},{"Dataline":"85285","PlayerLinenumber":"7","ActSceneLine":"1.0.2","Player":"chorus","PlayerLine":"In fair Verona, where we lay our scene,","scene":"1.0"},{"Dataline":"85286","PlayerLinenumber":"7","ActSceneLine":"1.0.3","Player":"chorus","PlayerLine":"From ancient grudge break to new mutiny,","scene":"1.0"},{"Dataline":"85287","PlayerLinenumber":"7","ActSceneLine":"1.0.4","Player":"chorus","PlayerLine":"Where civil blood makes civil hands unclean.","scene":"1.0"},{"Dataline":"85288","PlayerLinenumber":"7","ActSceneLine":"1.0.5","Player":"chorus","PlayerLine":"From forth the fatal loins of these two foes","scene":"1.0"},{"Dataline":"85289","PlayerLinenumber":"7","ActSceneLine":"1.0.6","Player":"chorus","PlayerLine":"A pair of star-cross\'d lovers take their life,","scene":"1.0"},{"Dataline":"85290","PlayerLinenumber":"7","ActSceneLine":"1.0.7","Player":"chorus","PlayerLine":"Whose misadventured piteous overthrows","scene":"1.0"},{"Dataline":"85291","PlayerLinenumber":"7","ActSceneLine":"1.0.8","Player":"chorus","PlayerLine":"Do with their death bury their parents\' strife.","scene":"1.0"},{"Dataline":"85292","PlayerLinenumber":"7","ActSceneLine":"1.0.9","Player":"chorus","PlayerLine":"The fearful passage of their death-mark\'d love,","scene":"1.0"},{"Dataline":"85293","PlayerLinenumber":"7","ActSceneLine":"1.0.10","Player":"chorus","PlayerLine":"And the continuance of their parents\' rage,","scene":"1.0"},{"Dataline":"85294","PlayerLinenumber":"7","ActSceneLine":"1.0.11","Player":"chorus","PlayerLine":"Which, but their children\'s end, nought could remove,","scene":"1.0"},{"Dataline":"85295","PlayerLinenumber":"7","ActSceneLine":"1.0.12","Player":"chorus","PlayerLine":"Is now the two hours\' traffic of our stage,","scene":"1.0"},{"Dataline":"85296","PlayerLinenumber":"7","ActSceneLine":"1.0.13","Player":"chorus","PlayerLine":"The which if you with patient ears attend,","scene":"1.0"},{"Dataline":"85297","PlayerLinenumber":"7","ActSceneLine":"1.0.14","Player":"chorus","PlayerLine":"What here shall miss, our toil shall strive to mend.","scene":"1.0"},{"Dataline":"85298","PlayerLinenumber":"7","ActSceneLine":"1.0.14","Player":"chorus","PlayerLine":"SCENE I. Verona. A public place.","scene":"1.0"},{"Dataline":"85300","PlayerLinenumber":"1","ActSceneLine":"1.1.1","Player":"sampson","PlayerLine":"Gregory, o\' my word, we\'ll not carry coals.","scene":"1.1"},{"Dataline":"85301","PlayerLinenumber":"2","ActSceneLine":"1.1.2","Player":"gregory","PlayerLine":"No, for then we should be colliers.","scene":"1.1"},{"Dataline":"85302","PlayerLinenumber":"3","ActSceneLine":"1.1.3","Player":"sampson","PlayerLine":"I mean, an we be in choler, we\'ll draw.","scene":"1.1"},{"Dataline":"85303","PlayerLinenumber":"4","ActSceneLine":"1.1.4","Player":"gregory","PlayerLine":"Ay, while you live, draw your neck out o\' the collar.","scene":"1.1"},{"Dataline":"85304","PlayerLinenumber":"5","ActSceneLine":"1.1.5","Player":"sampson","PlayerLine":"I strike quickly, being moved.","scene":"1.1"},{"Dataline":"85305","PlayerLinenumber":"6","ActSceneLine":"1.1.6","Player":"gregory","PlayerLine":"But thou art not quickly moved to strike.","scene":"1.1"},{"Dataline":"85306","PlayerLinenumber":"7","ActSceneLine":"1.1.7","Player":"sampson","PlayerLine":"A dog of the house of Montague moves me.","scene":"1.1"},{"Dataline":"85307","PlayerLinenumber":"8","ActSceneLine":"1.1.8","Player":"gregory","PlayerLine":"To move is to stir, and to be valiant is to stand:","scene":"1.1"},{"Dataline":"85308","PlayerLinenumber":"8","ActSceneLine":"1.1.9","Player":"gregory","PlayerLine":"therefore, if thou art moved, thou runn\'st away.","scene":"1.1"},{"Dataline":"85309","PlayerLinenumber":"9","ActSceneLine":"1.1.10","Player":"sampson","PlayerLine":"A dog of that house shall move me to stand: I will","scene":"1.1"},{"Dataline":"85310","PlayerLinenumber":"9","ActSceneLine":"1.1.11","Player":"sampson","PlayerLine":"take the wall of any man or maid of Montague\'s.","scene":"1.1"},{"Dataline":"85311","PlayerLinenumber":"10","ActSceneLine":"1.1.12","Player":"gregory","PlayerLine":"That shows thee a weak slave, for the weakest goes","scene":"1.1"},{"Dataline":"85312","PlayerLinenumber":"10","ActSceneLine":"1.1.13","Player":"gregory","PlayerLine":"to the wall.","scene":"1.1"},{"Dataline":"85313","PlayerLinenumber":"11","ActSceneLine":"1.1.14","Player":"sampson","PlayerLine":"True, and therefore women, being the weaker vessels,","scene":"1.1"},{"Dataline":"85314","PlayerLinenumber":"11","ActSceneLine":"1.1.15","Player":"sampson","PlayerLine":"are ever thrust to the wall: therefore I will push","scene":"1.1"},{"Dataline":"85315","PlayerLinenumber":"11","ActSceneLine":"1.1.16","Player":"sampson","PlayerLine":"Montague\'s men from the wall, and thrust his maids","scene":"1.1"},{"Dataline":"85316","PlayerLinenumber":"11","ActSceneLine":"1.1.17","Player":"sampson","PlayerLine":"to the wall.","scene":"1.1"},{"Dataline":"85317","PlayerLinenumber":"12","ActSceneLine":"1.1.18","Player":"gregory","PlayerLine":"The quarrel is between our masters and us their men.","scene":"1.1"},{"Dataline":"85318","PlayerLinenumber":"13","ActSceneLine":"1.1.19","Player":"sampson","PlayerLine":"\'Tis all one, I will show myself a tyrant: when I","scene":"1.1"},{"Dataline":"85319","PlayerLinenumber":"13","ActSceneLine":"1.1.20","Player":"sampson","PlayerLine":"have fought with the men, I will be cruel with the","scene":"1.1"},{"Dataline":"85320","PlayerLinenumber":"13","ActSceneLine":"1.1.21","Player":"sampson","PlayerLine":"maids, and cut off their heads.","scene":"1.1"},{"Dataline":"85321","PlayerLinenumber":"14","ActSceneLine":"1.1.22","Player":"gregory","PlayerLine":"The heads of the maids?","scene":"1.1"},{"Dataline":"85322","PlayerLinenumber":"15","ActSceneLine":"1.1.23","Player":"sampson","PlayerLine":"Ay, the heads of the maids, or their maidenheads,","scene":"1.1"},{"Dataline":"85323","PlayerLinenumber":"15","ActSceneLine":"1.1.24","Player":"sampson","PlayerLine":"take it in what sense thou wilt.","scene":"1.1"},{"Dataline":"85324","PlayerLinenumber":"16","ActSceneLine":"1.1.25","Player":"gregory","PlayerLine":"They must take it in sense that feel it.","scene":"1.1"},{"Dataline":"85325","PlayerLinenumber":"17","ActSceneLine":"1.1.26","Player":"sampson","PlayerLine":"Me they shall feel while I am able to stand: and","scene":"1.1"},{"Dataline":"85326","PlayerLinenumber":"17","ActSceneLine":"1.1.27","Player":"sampson","PlayerLine":"\'tis known I am a pretty piece of flesh.","scene":"1.1"},{"Dataline":"85327","PlayerLinenumber":"18","ActSceneLine":"1.1.28","Player":"gregory","PlayerLine":"\'Tis well thou art not fish, if thou hadst, thou","scene":"1.1"},{"Dataline":"85328","PlayerLinenumber":"18","ActSceneLine":"1.1.29","Player":"gregory","PlayerLine":"hadst been poor John. Draw thy tool! here comes","scene":"1.1"},{"Dataline":"85329","PlayerLinenumber":"18","ActSceneLine":"1.1.30","Player":"gregory","PlayerLine":"two of the house of the Montagues.","scene":"1.1"},{"Dataline":"85330","PlayerLinenumber":"19","ActSceneLine":"1.1.31","Player":"sampson","PlayerLine":"My naked weapon is out: quarrel, I will back thee.","scene":"1.1"},{"Dataline":"85331","PlayerLinenumber":"20","ActSceneLine":"1.1.32","Player":"gregory","PlayerLine":"How! turn thy back and run?","scene":"1.1"},{"Dataline":"85332","PlayerLinenumber":"21","ActSceneLine":"1.1.33","Player":"sampson","PlayerLine":"Fear me not.","scene":"1.1"},{"Dataline":"85333","PlayerLinenumber":"22","ActSceneLine":"1.1.34","Player":"gregory","PlayerLine":"No, marry, I fear thee!","scene":"1.1"},{"Dataline":"85334","PlayerLinenumber":"23","ActSceneLine":"1.1.35","Player":"sampson","PlayerLine":"Let us take the law of our sides, let them begin.","scene":"1.1"},{"Dataline":"85335","PlayerLinenumber":"24","ActSceneLine":"1.1.36","Player":"gregory","PlayerLine":"I will frown as I pass by, and let them take it as","scene":"1.1"},{"Dataline":"85336","PlayerLinenumber":"24","ActSceneLine":"1.1.37","Player":"gregory","PlayerLine":"they list.","scene":"1.1"},{"Dataline":"85337","PlayerLinenumber":"25","ActSceneLine":"1.1.38","Player":"sampson","PlayerLine":"Nay, as they dare. I will bite my thumb at them,","scene":"1.1"},{"Dataline":"85338","PlayerLinenumber":"25","ActSceneLine":"1.1.39","Player":"sampson","PlayerLine":"which is a disgrace to them, if they bear it.","scene":"1.1"},{"Dataline":"85340","PlayerLinenumber":"26","ActSceneLine":"1.1.40","Player":"abraham","PlayerLine":"Do you bite your thumb at us, sir?","scene":"1.1"},{"Dataline":"85341","PlayerLinenumber":"27","ActSceneLine":"1.1.41","Player":"sampson","PlayerLine":"I do bite my thumb, sir.","scene":"1.1"},{"Dataline":"85342","PlayerLinenumber":"28","ActSceneLine":"1.1.42","Player":"abraham","PlayerLine":"Do you bite your thumb at us, sir?","scene":"1.1"},{"Dataline":"85343","PlayerLinenumber":"29","ActSceneLine":"1.1.43","Player":"sampson","PlayerLine":"[Aside to GREGORY]  Is the law of our side, if I say","scene":"1.1"},{"Dataline":"85344","PlayerLinenumber":"29","ActSceneLine":"1.1.44","Player":"sampson","PlayerLine":"ay?","scene":"1.1"},{"Dataline":"85345","PlayerLinenumber":"30","ActSceneLine":"1.1.45","Player":"gregory","PlayerLine":"No.","scene":"1.1"},{"Dataline":"85346","PlayerLinenumber":"31","ActSceneLine":"1.1.46","Player":"sampson","PlayerLine":"No, sir, I do not bite my thumb at you, sir, but I","scene":"1.1"},{"Dataline":"85347","PlayerLinenumber":"31","ActSceneLine":"1.1.47","Player":"sampson","PlayerLine":"bite my thumb, sir.","scene":"1.1"},{"Dataline":"85348","PlayerLinenumber":"32","ActSceneLine":"1.1.48","Player":"gregory","PlayerLine":"Do you quarrel, sir?","scene":"1.1"},{"Dataline":"85349","PlayerLinenumber":"33","ActSceneLine":"1.1.49","Player":"abraham","PlayerLine":"Quarrel sir! no, sir.","scene":"1.1"},{"Dataline":"85350","PlayerLinenumber":"34","ActSceneLine":"1.1.50","Player":"sampson","PlayerLine":"If you do, sir, I am for you: I serve as good a man as you.","scene":"1.1"},{"Dataline":"85351","PlayerLinenumber":"35","ActSceneLine":"1.1.51","Player":"abraham","PlayerLine":"No better.","scene":"1.1"},{"Dataline":"85352","PlayerLinenumber":"36","ActSceneLine":"1.1.52","Player":"sampson","PlayerLine":"Well, sir.","scene":"1.1"},{"Dataline":"85353","PlayerLinenumber":"37","ActSceneLine":"1.1.53","Player":"gregory","PlayerLine":"Say \'better:\' here comes one of my master\'s kinsmen.","scene":"1.1"},{"Dataline":"85354","PlayerLinenumber":"38","ActSceneLine":"1.1.54","Player":"sampson","PlayerLine":"Yes, better, sir.","scene":"1.1"},{"Dataline":"85355","PlayerLinenumber":"39","ActSceneLine":"1.1.55","Player":"abraham","PlayerLine":"You lie.","scene":"1.1"},{"Dataline":"85356","PlayerLinenumber":"40","ActSceneLine":"1.1.56","Player":"sampson","PlayerLine":"Draw, if you be men. Gregory, remember thy swashing blow.","scene":"1.1"},{"Dataline":"85359","PlayerLinenumber":"41","ActSceneLine":"1.1.57","Player":"benvolio","PlayerLine":"Part, fools!","scene":"1.1"},{"Dataline":"85360","PlayerLinenumber":"41","ActSceneLine":"1.1.58","Player":"benvolio","PlayerLine":"Put up your swords, you know not what you do.","scene":"1.1"},{"Dataline":"85363","PlayerLinenumber":"42","ActSceneLine":"1.1.59","Player":"tybalt","PlayerLine":"What, art thou drawn among these heartless hinds?","scene":"1.1"},{"Dataline":"85364","PlayerLinenumber":"42","ActSceneLine":"1.1.60","Player":"tybalt","PlayerLine":"Turn thee, Benvolio, look upon thy death.","scene":"1.1"},{"Dataline":"85365","PlayerLinenumber":"43","ActSceneLine":"1.1.61","Player":"benvolio","PlayerLine":"I do but keep the peace: put up thy sword,","scene":"1.1"},{"Dataline":"85366","PlayerLinenumber":"43","ActSceneLine":"1.1.62","Player":"benvolio","PlayerLine":"Or manage it to part these men with me.","scene":"1.1"},{"Dataline":"85367","PlayerLinenumber":"44","ActSceneLine":"1.1.63","Player":"tybalt","PlayerLine":"What, drawn, and talk of peace! I hate the word,","scene":"1.1"},{"Dataline":"85368","PlayerLinenumber":"44","ActSceneLine":"1.1.64","Player":"tybalt","PlayerLine":"As I hate hell, all Montagues, and thee:","scene":"1.1"},{"Dataline":"85369","PlayerLinenumber":"44","ActSceneLine":"1.1.65","Player":"tybalt","PlayerLine":"Have at thee, coward!","scene":"1.1"},{"Dataline":"85372","PlayerLinenumber":"45","ActSceneLine":"1.1.66","Player":"first_citizen","PlayerLine":"Clubs, bills, and partisans! strike! beat them down!","scene":"1.1"},{"Dataline":"85373","PlayerLinenumber":"45","ActSceneLine":"1.1.67","Player":"first_citizen","PlayerLine":"Down with the Capulets! down with the Montagues!","scene":"1.1"},{"Dataline":"85375","PlayerLinenumber":"46","ActSceneLine":"1.1.68","Player":"capulet","PlayerLine":"What noise is this? Give me my long sword, ho!","scene":"1.1"},{"Dataline":"85376","PlayerLinenumber":"47","ActSceneLine":"1.1.69","Player":"lady_capulet","PlayerLine":"A crutch, a crutch! why call you for a sword?","scene":"1.1"},{"Dataline":"85377","PlayerLinenumber":"48","ActSceneLine":"1.1.70","Player":"capulet","PlayerLine":"My sword, I say! Old Montague is come,","scene":"1.1"},{"Dataline":"85378","PlayerLinenumber":"48","ActSceneLine":"1.1.71","Player":"capulet","PlayerLine":"And flourishes his blade in spite of me.","scene":"1.1"},{"Dataline":"85380","PlayerLinenumber":"49","ActSceneLine":"1.1.72","Player":"montague","PlayerLine":"Thou villain Capulet,--Hold me not, let me go.","scene":"1.1"},{"Dataline":"85381","PlayerLinenumber":"50","ActSceneLine":"1.1.73","Player":"lady_montague","PlayerLine":"Thou shalt not stir a foot to seek a foe.","scene":"1.1"},{"Dataline":"85383","PlayerLinenumber":"51","ActSceneLine":"1.1.74","Player":"prince","PlayerLine":"Rebellious subjects, enemies to peace,","scene":"1.1"},{"Dataline":"85384","PlayerLinenumber":"51","ActSceneLine":"1.1.75","Player":"prince","PlayerLine":"Profaners of this neighbour-stained steel,--","scene":"1.1"},{"Dataline":"85385","PlayerLinenumber":"51","ActSceneLine":"1.1.76","Player":"prince","PlayerLine":"Will they not hear? What, ho! you men, you beasts,","scene":"1.1"},{"Dataline":"85386","PlayerLinenumber":"51","ActSceneLine":"1.1.77","Player":"prince","PlayerLine":"That quench the fire of your pernicious rage","scene":"1.1"},{"Dataline":"85387","PlayerLinenumber":"51","ActSceneLine":"1.1.78","Player":"prince","PlayerLine":"With purple fountains issuing from your veins,","scene":"1.1"},{"Dataline":"85388","PlayerLinenumber":"51","ActSceneLine":"1.1.79","Player":"prince","PlayerLine":"On pain of torture, from those bloody hands","scene":"1.1"},{"Dataline":"85389","PlayerLinenumber":"51","ActSceneLine":"1.1.80","Player":"prince","PlayerLine":"Throw your mistemper\'d weapons to the ground,","scene":"1.1"},{"Dataline":"85390","PlayerLinenumber":"51","ActSceneLine":"1.1.81","Player":"prince","PlayerLine":"And hear the sentence of your moved prince.","scene":"1.1"},{"Dataline":"85391","PlayerLinenumber":"51","ActSceneLine":"1.1.82","Player":"prince","PlayerLine":"Three civil brawls, bred of an airy word,","scene":"1.1"},{"Dataline":"85392","PlayerLinenumber":"51","ActSceneLine":"1.1.83","Player":"prince","PlayerLine":"By thee, old Capulet, and Montague,","scene":"1.1"},{"Dataline":"85393","PlayerLinenumber":"51","ActSceneLine":"1.1.84","Player":"prince","PlayerLine":"Have thrice disturb\'d the quiet of our streets,","scene":"1.1"},{"Dataline":"85394","PlayerLinenumber":"51","ActSceneLine":"1.1.85","Player":"prince","PlayerLine":"And made Verona\'s ancient citizens","scene":"1.1"},{"Dataline":"85395","PlayerLinenumber":"51","ActSceneLine":"1.1.86","Player":"prince","PlayerLine":"Cast by their grave beseeming ornaments,","scene":"1.1"},{"Dataline":"85396","PlayerLinenumber":"51","ActSceneLine":"1.1.87","Player":"prince","PlayerLine":"To wield old partisans, in hands as old,","scene":"1.1"},{"Dataline":"85397","PlayerLinenumber":"51","ActSceneLine":"1.1.88","Player":"prince","PlayerLine":"Canker\'d with peace, to part your canker\'d hate:","scene":"1.1"},{"Dataline":"85398","PlayerLinenumber":"51","ActSceneLine":"1.1.89","Player":"prince","PlayerLine":"If ever you disturb our streets again,","scene":"1.1"},{"Dataline":"85399","PlayerLinenumber":"51","ActSceneLine":"1.1.90","Player":"prince","PlayerLine":"Your lives shall pay the forfeit of the peace.","scene":"1.1"},{"Dataline":"85400","PlayerLinenumber":"51","ActSceneLine":"1.1.91","Player":"prince","PlayerLine":"For this time, all the rest depart away:","scene":"1.1"},{"Dataline":"85401","PlayerLinenumber":"51","ActSceneLine":"1.1.92","Player":"prince","PlayerLine":"You Capulet, shall go along with me:","scene":"1.1"},{"Dataline":"85402","PlayerLinenumber":"51","ActSceneLine":"1.1.93","Player":"prince","PlayerLine":"And, Montague, come you this afternoon,","scene":"1.1"},{"Dataline":"85403","PlayerLinenumber":"51","ActSceneLine":"1.1.94","Player":"prince","PlayerLine":"To know our further pleasure in this case,","scene":"1.1"},{"Dataline":"85404","PlayerLinenumber":"51","ActSceneLine":"1.1.95","Player":"prince","PlayerLine":"To old Free-town, our common judgment-place.","scene":"1.1"},{"Dataline":"85405","PlayerLinenumber":"51","ActSceneLine":"1.1.96","Player":"prince","PlayerLine":"Once more, on pain of death, all men depart.","scene":"1.1"},{"Dataline":"85407","PlayerLinenumber":"52","ActSceneLine":"1.1.97","Player":"montague","PlayerLine":"Who set this ancient quarrel new abroach?","scene":"1.1"},{"Dataline":"85408","PlayerLinenumber":"52","ActSceneLine":"1.1.98","Player":"montague","PlayerLine":"Speak, nephew, were you by when it began?","scene":"1.1"},{"Dataline":"85409","PlayerLinenumber":"53","ActSceneLine":"1.1.99","Player":"benvolio","PlayerLine":"Here were the servants of your adversary,","scene":"1.1"},{"Dataline":"85410","PlayerLinenumber":"53","ActSceneLine":"1.1.100","Player":"benvolio","PlayerLine":"And yours, close fighting ere I did approach:","scene":"1.1"},{"Dataline":"85411","PlayerLinenumber":"53","ActSceneLine":"1.1.101","Player":"benvolio","PlayerLine":"I drew to part them: in the instant came","scene":"1.1"},{"Dataline":"85412","PlayerLinenumber":"53","ActSceneLine":"1.1.102","Player":"benvolio","PlayerLine":"The fiery Tybalt, with his sword prepared,","scene":"1.1"},{"Dataline":"85413","PlayerLinenumber":"53","ActSceneLine":"1.1.103","Player":"benvolio","PlayerLine":"Which, as he breathed defiance to my ears,","scene":"1.1"},{"Dataline":"85414","PlayerLinenumber":"53","ActSceneLine":"1.1.104","Player":"benvolio","PlayerLine":"He swung about his head and cut the winds,","scene":"1.1"},{"Dataline":"85415","PlayerLinenumber":"53","ActSceneLine":"1.1.105","Player":"benvolio","PlayerLine":"Who nothing hurt withal hiss\'d him in scorn:","scene":"1.1"},{"Dataline":"85416","PlayerLinenumber":"53","ActSceneLine":"1.1.106","Player":"benvolio","PlayerLine":"While we were interchanging thrusts and blows,","scene":"1.1"},{"Dataline":"85417","PlayerLinenumber":"53","ActSceneLine":"1.1.107","Player":"benvolio","PlayerLine":"Came more and more and fought on part and part,","scene":"1.1"},{"Dataline":"85418","PlayerLinenumber":"53","ActSceneLine":"1.1.108","Player":"benvolio","PlayerLine":"Till the prince came, who parted either part.","scene":"1.1"},{"Dataline":"85419","PlayerLinenumber":"54","ActSceneLine":"1.1.109","Player":"lady_montague","PlayerLine":"O, where is Romeo? saw you him to-day?","scene":"1.1"},{"Dataline":"85420","PlayerLinenumber":"54","ActSceneLine":"1.1.110","Player":"lady_montague","PlayerLine":"Right glad I am he was not at this fray.","scene":"1.1"},{"Dataline":"85421","PlayerLinenumber":"55","ActSceneLine":"1.1.111","Player":"benvolio","PlayerLine":"Madam, an hour before the worshipp\'d sun","scene":"1.1"},{"Dataline":"85422","PlayerLinenumber":"55","ActSceneLine":"1.1.112","Player":"benvolio","PlayerLine":"Peer\'d forth the golden window of the east,","scene":"1.1"},{"Dataline":"85423","PlayerLinenumber":"55","ActSceneLine":"1.1.113","Player":"benvolio","PlayerLine":"A troubled mind drave me to walk abroad,","scene":"1.1"},{"Dataline":"85424","PlayerLinenumber":"55","ActSceneLine":"1.1.114","Player":"benvolio","PlayerLine":"Where, underneath the grove of sycamore","scene":"1.1"},{"Dataline":"85425","PlayerLinenumber":"55","ActSceneLine":"1.1.115","Player":"benvolio","PlayerLine":"That westward rooteth from the city\'s side,","scene":"1.1"},{"Dataline":"85426","PlayerLinenumber":"55","ActSceneLine":"1.1.116","Player":"benvolio","PlayerLine":"So early walking did I see your son:","scene":"1.1"},{"Dataline":"85427","PlayerLinenumber":"55","ActSceneLine":"1.1.117","Player":"benvolio","PlayerLine":"Towards him I made, but he was ware of me","scene":"1.1"},{"Dataline":"85428","PlayerLinenumber":"55","ActSceneLine":"1.1.118","Player":"benvolio","PlayerLine":"And stole into the covert of the wood:","scene":"1.1"},{"Dataline":"85429","PlayerLinenumber":"55","ActSceneLine":"1.1.119","Player":"benvolio","PlayerLine":"I, measuring his affections by my own,","scene":"1.1"},{"Dataline":"85430","PlayerLinenumber":"55","ActSceneLine":"1.1.120","Player":"benvolio","PlayerLine":"That most are busied when they\'re most alone,","scene":"1.1"},{"Dataline":"85431","PlayerLinenumber":"55","ActSceneLine":"1.1.121","Player":"benvolio","PlayerLine":"Pursued my humour not pursuing his,","scene":"1.1"},{"Dataline":"85432","PlayerLinenumber":"55","ActSceneLine":"1.1.122","Player":"benvolio","PlayerLine":"And gladly shunn\'d who gladly fled from me.","scene":"1.1"},{"Dataline":"85433","PlayerLinenumber":"56","ActSceneLine":"1.1.123","Player":"montague","PlayerLine":"Many a morning hath he there been seen,","scene":"1.1"},{"Dataline":"85434","PlayerLinenumber":"56","ActSceneLine":"1.1.124","Player":"montague","PlayerLine":"With tears augmenting the fresh morning dew.","scene":"1.1"},{"Dataline":"85435","PlayerLinenumber":"56","ActSceneLine":"1.1.125","Player":"montague","PlayerLine":"Adding to clouds more clouds with his deep sighs,","scene":"1.1"},{"Dataline":"85436","PlayerLinenumber":"56","ActSceneLine":"1.1.126","Player":"montague","PlayerLine":"But all so soon as the all-cheering sun","scene":"1.1"},{"Dataline":"85437","PlayerLinenumber":"56","ActSceneLine":"1.1.127","Player":"montague","PlayerLine":"Should in the furthest east begin to draw","scene":"1.1"},{"Dataline":"85438","PlayerLinenumber":"56","ActSceneLine":"1.1.128","Player":"montague","PlayerLine":"The shady curtains from Aurora\'s bed,","scene":"1.1"},{"Dataline":"85439","PlayerLinenumber":"56","ActSceneLine":"1.1.129","Player":"montague","PlayerLine":"Away from the light steals home my heavy son,","scene":"1.1"},{"Dataline":"85440","PlayerLinenumber":"56","ActSceneLine":"1.1.130","Player":"montague","PlayerLine":"And private in his chamber pens himself,","scene":"1.1"},{"Dataline":"85441","PlayerLinenumber":"56","ActSceneLine":"1.1.131","Player":"montague","PlayerLine":"Shuts up his windows, locks far daylight out","scene":"1.1"},{"Dataline":"85442","PlayerLinenumber":"56","ActSceneLine":"1.1.132","Player":"montague","PlayerLine":"And makes himself an artificial night:","scene":"1.1"},{"Dataline":"85443","PlayerLinenumber":"56","ActSceneLine":"1.1.133","Player":"montague","PlayerLine":"Black and portentous must this humour prove,","scene":"1.1"},{"Dataline":"85444","PlayerLinenumber":"56","ActSceneLine":"1.1.134","Player":"montague","PlayerLine":"Unless good counsel may the cause remove.","scene":"1.1"},{"Dataline":"85445","PlayerLinenumber":"57","ActSceneLine":"1.1.135","Player":"benvolio","PlayerLine":"My noble uncle, do you know the cause?","scene":"1.1"},{"Dataline":"85446","PlayerLinenumber":"58","ActSceneLine":"1.1.136","Player":"montague","PlayerLine":"I neither know it nor can learn of him.","scene":"1.1"},{"Dataline":"85447","PlayerLinenumber":"59","ActSceneLine":"1.1.137","Player":"benvolio","PlayerLine":"Have you importuned him by any means?","scene":"1.1"},{"Dataline":"85448","PlayerLinenumber":"60","ActSceneLine":"1.1.138","Player":"montague","PlayerLine":"Both by myself and many other friends:","scene":"1.1"},{"Dataline":"85449","PlayerLinenumber":"60","ActSceneLine":"1.1.139","Player":"montague","PlayerLine":"But he, his own affections\' counsellor,","scene":"1.1"},{"Dataline":"85450","PlayerLinenumber":"60","ActSceneLine":"1.1.140","Player":"montague","PlayerLine":"Is to himself--I will not say how true--","scene":"1.1"},{"Dataline":"85451","PlayerLinenumber":"60","ActSceneLine":"1.1.141","Player":"montague","PlayerLine":"But to himself so secret and so close,","scene":"1.1"},{"Dataline":"85452","PlayerLinenumber":"60","ActSceneLine":"1.1.142","Player":"montague","PlayerLine":"So far from sounding and discovery,","scene":"1.1"},{"Dataline":"85453","PlayerLinenumber":"60","ActSceneLine":"1.1.143","Player":"montague","PlayerLine":"As is the bud bit with an envious worm,","scene":"1.1"},{"Dataline":"85454","PlayerLinenumber":"60","ActSceneLine":"1.1.144","Player":"montague","PlayerLine":"Ere he can spread his sweet leaves to the air,","scene":"1.1"},{"Dataline":"85455","PlayerLinenumber":"60","ActSceneLine":"1.1.145","Player":"montague","PlayerLine":"Or dedicate his beauty to the sun.","scene":"1.1"},{"Dataline":"85456","PlayerLinenumber":"60","ActSceneLine":"1.1.146","Player":"montague","PlayerLine":"Could we but learn from whence his sorrows grow.","scene":"1.1"},{"Dataline":"85457","PlayerLinenumber":"60","ActSceneLine":"1.1.147","Player":"montague","PlayerLine":"We would as willingly give cure as know.","scene":"1.1"},{"Dataline":"85459","PlayerLinenumber":"61","ActSceneLine":"1.1.148","Player":"benvolio","PlayerLine":"See, where he comes: so please you, step aside,","scene":"1.1"},{"Dataline":"85460","PlayerLinenumber":"61","ActSceneLine":"1.1.149","Player":"benvolio","PlayerLine":"I\'ll know his grievance, or be much denied.","scene":"1.1"},{"Dataline":"85461","PlayerLinenumber":"62","ActSceneLine":"1.1.150","Player":"montague","PlayerLine":"I would thou wert so happy by thy stay,","scene":"1.1"},{"Dataline":"85462","PlayerLinenumber":"62","ActSceneLine":"1.1.151","Player":"montague","PlayerLine":"To hear true shrift. Come, madam, let\'s away.","scene":"1.1"},{"Dataline":"85464","PlayerLinenumber":"63","ActSceneLine":"1.1.152","Player":"benvolio","PlayerLine":"Good-morrow, cousin.","scene":"1.1"},{"Dataline":"85465","PlayerLinenumber":"64","ActSceneLine":"1.1.153","Player":"romeo","PlayerLine":"Is the day so young?","scene":"1.1"},{"Dataline":"85466","PlayerLinenumber":"65","ActSceneLine":"1.1.154","Player":"benvolio","PlayerLine":"But new struck nine.","scene":"1.1"},{"Dataline":"85467","PlayerLinenumber":"66","ActSceneLine":"1.1.155","Player":"romeo","PlayerLine":"Ay me! sad hours seem long.","scene":"1.1"},{"Dataline":"85468","PlayerLinenumber":"66","ActSceneLine":"1.1.156","Player":"romeo","PlayerLine":"Was that my father that went hence so fast?","scene":"1.1"},{"Dataline":"85469","PlayerLinenumber":"67","ActSceneLine":"1.1.157","Player":"benvolio","PlayerLine":"It was. What sadness lengthens Romeo\'s hours?","scene":"1.1"},{"Dataline":"85470","PlayerLinenumber":"68","ActSceneLine":"1.1.158","Player":"romeo","PlayerLine":"Not having that, which, having, makes them short.","scene":"1.1"},{"Dataline":"85471","PlayerLinenumber":"69","ActSceneLine":"1.1.159","Player":"benvolio","PlayerLine":"In love?","scene":"1.1"},{"Dataline":"85472","PlayerLinenumber":"70","ActSceneLine":"1.1.160","Player":"romeo","PlayerLine":"Out--","scene":"1.1"},{"Dataline":"85473","PlayerLinenumber":"71","ActSceneLine":"1.1.161","Player":"benvolio","PlayerLine":"Of love?","scene":"1.1"},{"Dataline":"85474","PlayerLinenumber":"72","ActSceneLine":"1.1.162","Player":"romeo","PlayerLine":"Out of her favour, where I am in love.","scene":"1.1"},{"Dataline":"85475","PlayerLinenumber":"73","ActSceneLine":"1.1.163","Player":"benvolio","PlayerLine":"Alas, that love, so gentle in his view,","scene":"1.1"},{"Dataline":"85476","PlayerLinenumber":"73","ActSceneLine":"1.1.164","Player":"benvolio","PlayerLine":"Should be so tyrannous and rough in proof!","scene":"1.1"},{"Dataline":"85477","PlayerLinenumber":"74","ActSceneLine":"1.1.165","Player":"romeo","PlayerLine":"Alas, that love, whose view is muffled still,","scene":"1.1"},{"Dataline":"85478","PlayerLinenumber":"74","ActSceneLine":"1.1.166","Player":"romeo","PlayerLine":"Should, without eyes, see pathways to his will!","scene":"1.1"},{"Dataline":"85479","PlayerLinenumber":"74","ActSceneLine":"1.1.167","Player":"romeo","PlayerLine":"Where shall we dine? O me! What fray was here?","scene":"1.1"},{"Dataline":"85480","PlayerLinenumber":"74","ActSceneLine":"1.1.168","Player":"romeo","PlayerLine":"Yet tell me not, for I have heard it all.","scene":"1.1"},{"Dataline":"85481","PlayerLinenumber":"74","ActSceneLine":"1.1.169","Player":"romeo","PlayerLine":"Here\'s much to do with hate, but more with love.","scene":"1.1"},{"Dataline":"85482","PlayerLinenumber":"74","ActSceneLine":"1.1.170","Player":"romeo","PlayerLine":"Why, then, O brawling love! O loving hate!","scene":"1.1"},{"Dataline":"85483","PlayerLinenumber":"74","ActSceneLine":"1.1.171","Player":"romeo","PlayerLine":"O any thing, of nothing first create!","scene":"1.1"},{"Dataline":"85484","PlayerLinenumber":"74","ActSceneLine":"1.1.172","Player":"romeo","PlayerLine":"O heavy lightness! serious vanity!","scene":"1.1"},{"Dataline":"85485","PlayerLinenumber":"74","ActSceneLine":"1.1.173","Player":"romeo","PlayerLine":"Mis-shapen chaos of well-seeming forms!","scene":"1.1"},{"Dataline":"85486","PlayerLinenumber":"74","ActSceneLine":"1.1.174","Player":"romeo","PlayerLine":"Feather of lead, bright smoke, cold fire,","scene":"1.1"},{"Dataline":"85487","PlayerLinenumber":"74","ActSceneLine":"1.1.175","Player":"romeo","PlayerLine":"sick health!","scene":"1.1"},{"Dataline":"85488","PlayerLinenumber":"74","ActSceneLine":"1.1.176","Player":"romeo","PlayerLine":"Still-waking sleep, that is not what it is!","scene":"1.1"},{"Dataline":"85489","PlayerLinenumber":"74","ActSceneLine":"1.1.177","Player":"romeo","PlayerLine":"This love feel I, that feel no love in this.","scene":"1.1"},{"Dataline":"85490","PlayerLinenumber":"74","ActSceneLine":"1.1.178","Player":"romeo","PlayerLine":"Dost thou not laugh?","scene":"1.1"},{"Dataline":"85491","PlayerLinenumber":"75","ActSceneLine":"1.1.179","Player":"benvolio","PlayerLine":"No, coz, I rather weep.","scene":"1.1"},{"Dataline":"85492","PlayerLinenumber":"76","ActSceneLine":"1.1.180","Player":"romeo","PlayerLine":"Good heart, at what?","scene":"1.1"},{"Dataline":"85493","PlayerLinenumber":"77","ActSceneLine":"1.1.181","Player":"benvolio","PlayerLine":"At thy good heart\'s oppression.","scene":"1.1"},{"Dataline":"85494","PlayerLinenumber":"78","ActSceneLine":"1.1.182","Player":"romeo","PlayerLine":"Why, such is love\'s transgression.","scene":"1.1"},{"Dataline":"85495","PlayerLinenumber":"78","ActSceneLine":"1.1.183","Player":"romeo","PlayerLine":"Griefs of mine own lie heavy in my breast,","scene":"1.1"},{"Dataline":"85496","PlayerLinenumber":"78","ActSceneLine":"1.1.184","Player":"romeo","PlayerLine":"Which thou wilt propagate, to have it prest","scene":"1.1"},{"Dataline":"85497","PlayerLinenumber":"78","ActSceneLine":"1.1.185","Player":"romeo","PlayerLine":"With more of thine: this love that thou hast shown","scene":"1.1"},{"Dataline":"85498","PlayerLinenumber":"78","ActSceneLine":"1.1.186","Player":"romeo","PlayerLine":"Doth add more grief to too much of mine own.","scene":"1.1"},{"Dataline":"85499","PlayerLinenumber":"78","ActSceneLine":"1.1.187","Player":"romeo","PlayerLine":"Love is a smoke raised with the fume of sighs,","scene":"1.1"},{"Dataline":"85500","PlayerLinenumber":"78","ActSceneLine":"1.1.188","Player":"romeo","PlayerLine":"Being purged, a fire sparkling in lovers\' eyes,","scene":"1.1"},{"Dataline":"85501","PlayerLinenumber":"78","ActSceneLine":"1.1.189","Player":"romeo","PlayerLine":"Being vex\'d a sea nourish\'d with lovers\' tears:","scene":"1.1"},{"Dataline":"85502","PlayerLinenumber":"78","ActSceneLine":"1.1.190","Player":"romeo","PlayerLine":"What is it else? a madness most discreet,","scene":"1.1"},{"Dataline":"85503","PlayerLinenumber":"78","ActSceneLine":"1.1.191","Player":"romeo","PlayerLine":"A choking gall and a preserving sweet.","scene":"1.1"},{"Dataline":"85504","PlayerLinenumber":"78","ActSceneLine":"1.1.192","Player":"romeo","PlayerLine":"Farewell, my coz.","scene":"1.1"},{"Dataline":"85505","PlayerLinenumber":"79","ActSceneLine":"1.1.193","Player":"benvolio","PlayerLine":"Soft! I will go along,","scene":"1.1"},{"Dataline":"85506","PlayerLinenumber":"79","ActSceneLine":"1.1.194","Player":"benvolio","PlayerLine":"An if you leave me so, you do me wrong.","scene":"1.1"},{"Dataline":"85507","PlayerLinenumber":"80","ActSceneLine":"1.1.195","Player":"romeo","PlayerLine":"Tut, I have lost myself, I am not here,","scene":"1.1"},{"Dataline":"85508","PlayerLinenumber":"80","ActSceneLine":"1.1.196","Player":"romeo","PlayerLine":"This is not Romeo, he\'s some other where.","scene":"1.1"},{"Dataline":"85509","PlayerLinenumber":"81","ActSceneLine":"1.1.197","Player":"benvolio","PlayerLine":"Tell me in sadness, who is that you love.","scene":"1.1"},{"Dataline":"85510","PlayerLinenumber":"82","ActSceneLine":"1.1.198","Player":"romeo","PlayerLine":"What, shall I groan and tell thee?","scene":"1.1"},{"Dataline":"85511","PlayerLinenumber":"83","ActSceneLine":"1.1.199","Player":"benvolio","PlayerLine":"Groan! why, no.","scene":"1.1"},{"Dataline":"85512","PlayerLinenumber":"83","ActSceneLine":"1.1.200","Player":"benvolio","PlayerLine":"But sadly tell me who.","scene":"1.1"},{"Dataline":"85513","PlayerLinenumber":"84","ActSceneLine":"1.1.201","Player":"romeo","PlayerLine":"Bid a sick man in sadness make his will:","scene":"1.1"},{"Dataline":"85514","PlayerLinenumber":"84","ActSceneLine":"1.1.202","Player":"romeo","PlayerLine":"Ah, word ill urged to one that is so ill!","scene":"1.1"},{"Dataline":"85515","PlayerLinenumber":"84","ActSceneLine":"1.1.203","Player":"romeo","PlayerLine":"In sadness, cousin, I do love a woman.","scene":"1.1"},{"Dataline":"85516","PlayerLinenumber":"85","ActSceneLine":"1.1.204","Player":"benvolio","PlayerLine":"I aim\'d so near, when I supposed you loved.","scene":"1.1"},{"Dataline":"85517","PlayerLinenumber":"86","ActSceneLine":"1.1.205","Player":"romeo","PlayerLine":"A right good mark-man! And she\'s fair I love.","scene":"1.1"},{"Dataline":"85518","PlayerLinenumber":"87","ActSceneLine":"1.1.206","Player":"benvolio","PlayerLine":"A right fair mark, fair coz, is soonest hit.","scene":"1.1"},{"Dataline":"85519","PlayerLinenumber":"88","ActSceneLine":"1.1.207","Player":"romeo","PlayerLine":"Well, in that hit you miss: she\'ll not be hit","scene":"1.1"},{"Dataline":"85520","PlayerLinenumber":"88","ActSceneLine":"1.1.208","Player":"romeo","PlayerLine":"With Cupid\'s arrow, she hath Dian\'s wit,","scene":"1.1"},{"Dataline":"85521","PlayerLinenumber":"88","ActSceneLine":"1.1.209","Player":"romeo","PlayerLine":"And, in strong proof of chastity well arm\'d,","scene":"1.1"},{"Dataline":"85522","PlayerLinenumber":"88","ActSceneLine":"1.1.210","Player":"romeo","PlayerLine":"From love\'s weak childish bow she lives unharm\'d.","scene":"1.1"},{"Dataline":"85523","PlayerLinenumber":"88","ActSceneLine":"1.1.211","Player":"romeo","PlayerLine":"She will not stay the siege of loving terms,","scene":"1.1"},{"Dataline":"85524","PlayerLinenumber":"88","ActSceneLine":"1.1.212","Player":"romeo","PlayerLine":"Nor bide the encounter of assailing eyes,","scene":"1.1"},{"Dataline":"85525","PlayerLinenumber":"88","ActSceneLine":"1.1.213","Player":"romeo","PlayerLine":"Nor ope her lap to saint-seducing gold:","scene":"1.1"},{"Dataline":"85526","PlayerLinenumber":"88","ActSceneLine":"1.1.214","Player":"romeo","PlayerLine":"O, she is rich in beauty, only poor,","scene":"1.1"},{"Dataline":"85527","PlayerLinenumber":"88","ActSceneLine":"1.1.215","Player":"romeo","PlayerLine":"That when she dies with beauty dies her store.","scene":"1.1"},{"Dataline":"85528","PlayerLinenumber":"89","ActSceneLine":"1.1.216","Player":"benvolio","PlayerLine":"Then she hath sworn that she will still live chaste?","scene":"1.1"},{"Dataline":"85529","PlayerLinenumber":"90","ActSceneLine":"1.1.217","Player":"romeo","PlayerLine":"She hath, and in that sparing makes huge waste,","scene":"1.1"},{"Dataline":"85530","PlayerLinenumber":"90","ActSceneLine":"1.1.218","Player":"romeo","PlayerLine":"For beauty starved with her severity","scene":"1.1"},{"Dataline":"85531","PlayerLinenumber":"90","ActSceneLine":"1.1.219","Player":"romeo","PlayerLine":"Cuts beauty off from all posterity.","scene":"1.1"},{"Dataline":"85532","PlayerLinenumber":"90","ActSceneLine":"1.1.220","Player":"romeo","PlayerLine":"She is too fair, too wise, wisely too fair,","scene":"1.1"},{"Dataline":"85533","PlayerLinenumber":"90","ActSceneLine":"1.1.221","Player":"romeo","PlayerLine":"To merit bliss by making me despair:","scene":"1.1"},{"Dataline":"85534","PlayerLinenumber":"90","ActSceneLine":"1.1.222","Player":"romeo","PlayerLine":"She hath forsworn to love, and in that vow","scene":"1.1"},{"Dataline":"85535","PlayerLinenumber":"90","ActSceneLine":"1.1.223","Player":"romeo","PlayerLine":"Do I live dead that live to tell it now.","scene":"1.1"},{"Dataline":"85536","PlayerLinenumber":"91","ActSceneLine":"1.1.224","Player":"benvolio","PlayerLine":"Be ruled by me, forget to think of her.","scene":"1.1"},{"Dataline":"85537","PlayerLinenumber":"92","ActSceneLine":"1.1.225","Player":"romeo","PlayerLine":"O, teach me how I should forget to think.","scene":"1.1"},{"Dataline":"85538","PlayerLinenumber":"93","ActSceneLine":"1.1.226","Player":"benvolio","PlayerLine":"By giving liberty unto thine eyes,","scene":"1.1"},{"Dataline":"85539","PlayerLinenumber":"93","ActSceneLine":"1.1.227","Player":"benvolio","PlayerLine":"Examine other beauties.","scene":"1.1"},{"Dataline":"85540","PlayerLinenumber":"94","ActSceneLine":"1.1.228","Player":"romeo","PlayerLine":"\'Tis the way","scene":"1.1"},{"Dataline":"85541","PlayerLinenumber":"94","ActSceneLine":"1.1.229","Player":"romeo","PlayerLine":"To call hers exquisite, in question more:","scene":"1.1"},{"Dataline":"85542","PlayerLinenumber":"94","ActSceneLine":"1.1.230","Player":"romeo","PlayerLine":"These happy masks that kiss fair ladies\' brows","scene":"1.1"},{"Dataline":"85543","PlayerLinenumber":"94","ActSceneLine":"1.1.231","Player":"romeo","PlayerLine":"Being black put us in mind they hide the fair,","scene":"1.1"},{"Dataline":"85544","PlayerLinenumber":"94","ActSceneLine":"1.1.232","Player":"romeo","PlayerLine":"He that is strucken blind cannot forget","scene":"1.1"},{"Dataline":"85545","PlayerLinenumber":"94","ActSceneLine":"1.1.233","Player":"romeo","PlayerLine":"The precious treasure of his eyesight lost:","scene":"1.1"},{"Dataline":"85546","PlayerLinenumber":"94","ActSceneLine":"1.1.234","Player":"romeo","PlayerLine":"Show me a mistress that is passing fair,","scene":"1.1"},{"Dataline":"85547","PlayerLinenumber":"94","ActSceneLine":"1.1.235","Player":"romeo","PlayerLine":"What doth her beauty serve, but as a note","scene":"1.1"},{"Dataline":"85548","PlayerLinenumber":"94","ActSceneLine":"1.1.236","Player":"romeo","PlayerLine":"Where I may read who pass\'d that passing fair?","scene":"1.1"},{"Dataline":"85549","PlayerLinenumber":"94","ActSceneLine":"1.1.237","Player":"romeo","PlayerLine":"Farewell: thou canst not teach me to forget.","scene":"1.1"},{"Dataline":"85550","PlayerLinenumber":"95","ActSceneLine":"1.1.238","Player":"benvolio","PlayerLine":"I\'ll pay that doctrine, or else die in debt.","scene":"1.1"},{"Dataline":"85554","PlayerLinenumber":"1","ActSceneLine":"1.2.1","Player":"capulet","PlayerLine":"But Montague is bound as well as I,","scene":"1.2"},{"Dataline":"85555","PlayerLinenumber":"1","ActSceneLine":"1.2.2","Player":"capulet","PlayerLine":"In penalty alike, and \'tis not hard, I think,","scene":"1.2"},{"Dataline":"85556","PlayerLinenumber":"1","ActSceneLine":"1.2.3","Player":"capulet","PlayerLine":"For men so old as we to keep the peace.","scene":"1.2"},{"Dataline":"85557","PlayerLinenumber":"2","ActSceneLine":"1.2.4","Player":"paris","PlayerLine":"Of honourable reckoning are you both,","scene":"1.2"},{"Dataline":"85558","PlayerLinenumber":"2","ActSceneLine":"1.2.5","Player":"paris","PlayerLine":"And pity \'tis you lived at odds so long.","scene":"1.2"},{"Dataline":"85559","PlayerLinenumber":"2","ActSceneLine":"1.2.6","Player":"paris","PlayerLine":"But now, my lord, what say you to my suit?","scene":"1.2"},{"Dataline":"85560","PlayerLinenumber":"3","ActSceneLine":"1.2.7","Player":"capulet","PlayerLine":"But saying o\'er what I have said before:","scene":"1.2"},{"Dataline":"85561","PlayerLinenumber":"3","ActSceneLine":"1.2.8","Player":"capulet","PlayerLine":"My child is yet a stranger in the world,","scene":"1.2"},{"Dataline":"85562","PlayerLinenumber":"3","ActSceneLine":"1.2.9","Player":"capulet","PlayerLine":"She hath not seen the change of fourteen years,","scene":"1.2"},{"Dataline":"85563","PlayerLinenumber":"3","ActSceneLine":"1.2.10","Player":"capulet","PlayerLine":"Let two more summers wither in their pride,","scene":"1.2"},{"Dataline":"85564","PlayerLinenumber":"3","ActSceneLine":"1.2.11","Player":"capulet","PlayerLine":"Ere we may think her ripe to be a bride.","scene":"1.2"},{"Dataline":"85565","PlayerLinenumber":"4","ActSceneLine":"1.2.12","Player":"paris","PlayerLine":"Younger than she are happy mothers made.","scene":"1.2"},{"Dataline":"85566","PlayerLinenumber":"5","ActSceneLine":"1.2.13","Player":"capulet","PlayerLine":"And too soon marr\'d are those so early made.","scene":"1.2"},{"Dataline":"85567","PlayerLinenumber":"5","ActSceneLine":"1.2.14","Player":"capulet","PlayerLine":"The earth hath swallow\'d all my hopes but she,","scene":"1.2"},{"Dataline":"85568","PlayerLinenumber":"5","ActSceneLine":"1.2.15","Player":"capulet","PlayerLine":"She is the hopeful lady of my earth:","scene":"1.2"},{"Dataline":"85569","PlayerLinenumber":"5","ActSceneLine":"1.2.16","Player":"capulet","PlayerLine":"But woo her, gentle Paris, get her heart,","scene":"1.2"},{"Dataline":"85570","PlayerLinenumber":"5","ActSceneLine":"1.2.17","Player":"capulet","PlayerLine":"My will to her consent is but a part,","scene":"1.2"},{"Dataline":"85571","PlayerLinenumber":"5","ActSceneLine":"1.2.18","Player":"capulet","PlayerLine":"An she agree, within her scope of choice","scene":"1.2"},{"Dataline":"85572","PlayerLinenumber":"5","ActSceneLine":"1.2.19","Player":"capulet","PlayerLine":"Lies my consent and fair according voice.","scene":"1.2"},{"Dataline":"85573","PlayerLinenumber":"5","ActSceneLine":"1.2.20","Player":"capulet","PlayerLine":"This night I hold an old accustom\'d feast,","scene":"1.2"},{"Dataline":"85574","PlayerLinenumber":"5","ActSceneLine":"1.2.21","Player":"capulet","PlayerLine":"Whereto I have invited many a guest,","scene":"1.2"},{"Dataline":"85575","PlayerLinenumber":"5","ActSceneLine":"1.2.22","Player":"capulet","PlayerLine":"Such as I love, and you, among the store,","scene":"1.2"},{"Dataline":"85576","PlayerLinenumber":"5","ActSceneLine":"1.2.23","Player":"capulet","PlayerLine":"One more, most welcome, makes my number more.","scene":"1.2"},{"Dataline":"85577","PlayerLinenumber":"5","ActSceneLine":"1.2.24","Player":"capulet","PlayerLine":"At my poor house look to behold this night","scene":"1.2"},{"Dataline":"85578","PlayerLinenumber":"5","ActSceneLine":"1.2.25","Player":"capulet","PlayerLine":"Earth-treading stars that make dark heaven light:","scene":"1.2"},{"Dataline":"85579","PlayerLinenumber":"5","ActSceneLine":"1.2.26","Player":"capulet","PlayerLine":"Such comfort as do lusty young men feel","scene":"1.2"},{"Dataline":"85580","PlayerLinenumber":"5","ActSceneLine":"1.2.27","Player":"capulet","PlayerLine":"When well-apparell\'d April on the heel","scene":"1.2"},{"Dataline":"85581","PlayerLinenumber":"5","ActSceneLine":"1.2.28","Player":"capulet","PlayerLine":"Of limping winter treads, even such delight","scene":"1.2"},{"Dataline":"85582","PlayerLinenumber":"5","ActSceneLine":"1.2.29","Player":"capulet","PlayerLine":"Among fresh female buds shall you this night","scene":"1.2"},{"Dataline":"85583","PlayerLinenumber":"5","ActSceneLine":"1.2.30","Player":"capulet","PlayerLine":"Inherit at my house, hear all, all see,","scene":"1.2"},{"Dataline":"85584","PlayerLinenumber":"5","ActSceneLine":"1.2.31","Player":"capulet","PlayerLine":"And like her most whose merit most shall be:","scene":"1.2"},{"Dataline":"85585","PlayerLinenumber":"5","ActSceneLine":"1.2.32","Player":"capulet","PlayerLine":"Which on more view, of many mine being one","scene":"1.2"},{"Dataline":"85586","PlayerLinenumber":"5","ActSceneLine":"1.2.33","Player":"capulet","PlayerLine":"May stand in number, though in reckoning none,","scene":"1.2"},{"Dataline":"85587","PlayerLinenumber":"5","ActSceneLine":"1.2.34","Player":"capulet","PlayerLine":"Come, go with me.","scene":"1.2"},{"Dataline":"85589","PlayerLinenumber":"5","ActSceneLine":"1.2.35","Player":"capulet","PlayerLine":"Go, sirrah, trudge about","scene":"1.2"},{"Dataline":"85590","PlayerLinenumber":"5","ActSceneLine":"1.2.36","Player":"capulet","PlayerLine":"Through fair Verona, find those persons out","scene":"1.2"},{"Dataline":"85591","PlayerLinenumber":"5","ActSceneLine":"1.2.37","Player":"capulet","PlayerLine":"Whose names are written there, and to them say,","scene":"1.2"},{"Dataline":"85592","PlayerLinenumber":"5","ActSceneLine":"1.2.38","Player":"capulet","PlayerLine":"My house and welcome on their pleasure stay.","scene":"1.2"},{"Dataline":"85594","PlayerLinenumber":"6","ActSceneLine":"1.2.39","Player":"servant","PlayerLine":"Find them out whose names are written here! It is","scene":"1.2"},{"Dataline":"85595","PlayerLinenumber":"6","ActSceneLine":"1.2.40","Player":"servant","PlayerLine":"written, that the shoemaker should meddle with his","scene":"1.2"},{"Dataline":"85596","PlayerLinenumber":"6","ActSceneLine":"1.2.41","Player":"servant","PlayerLine":"yard, and the tailor with his last, the fisher with","scene":"1.2"},{"Dataline":"85597","PlayerLinenumber":"6","ActSceneLine":"1.2.42","Player":"servant","PlayerLine":"his pencil, and the painter with his nets, but I am","scene":"1.2"},{"Dataline":"85598","PlayerLinenumber":"6","ActSceneLine":"1.2.43","Player":"servant","PlayerLine":"sent to find those persons whose names are here","scene":"1.2"},{"Dataline":"85599","PlayerLinenumber":"6","ActSceneLine":"1.2.44","Player":"servant","PlayerLine":"writ, and can never find what names the writing","scene":"1.2"},{"Dataline":"85600","PlayerLinenumber":"6","ActSceneLine":"1.2.45","Player":"servant","PlayerLine":"person hath here writ. I must to the learned.--In good time.","scene":"1.2"},{"Dataline":"85602","PlayerLinenumber":"7","ActSceneLine":"1.2.46","Player":"benvolio","PlayerLine":"Tut, man, one fire burns out another\'s burning,","scene":"1.2"},{"Dataline":"85603","PlayerLinenumber":"7","ActSceneLine":"1.2.47","Player":"benvolio","PlayerLine":"One pain is lessen\'d by another\'s anguish,","scene":"1.2"},{"Dataline":"85604","PlayerLinenumber":"7","ActSceneLine":"1.2.48","Player":"benvolio","PlayerLine":"Turn giddy, and be holp by backward turning,","scene":"1.2"},{"Dataline":"85605","PlayerLinenumber":"7","ActSceneLine":"1.2.49","Player":"benvolio","PlayerLine":"One desperate grief cures with another\'s languish:","scene":"1.2"},{"Dataline":"85606","PlayerLinenumber":"7","ActSceneLine":"1.2.50","Player":"benvolio","PlayerLine":"Take thou some new infection to thy eye,","scene":"1.2"},{"Dataline":"85607","PlayerLinenumber":"7","ActSceneLine":"1.2.51","Player":"benvolio","PlayerLine":"And the rank poison of the old will die.","scene":"1.2"},{"Dataline":"85608","PlayerLinenumber":"8","ActSceneLine":"1.2.52","Player":"romeo","PlayerLine":"Your plaintain-leaf is excellent for that.","scene":"1.2"},{"Dataline":"85609","PlayerLinenumber":"9","ActSceneLine":"1.2.53","Player":"benvolio","PlayerLine":"For what, I pray thee?","scene":"1.2"},{"Dataline":"85610","PlayerLinenumber":"10","ActSceneLine":"1.2.54","Player":"romeo","PlayerLine":"For your broken shin.","scene":"1.2"},{"Dataline":"85611","PlayerLinenumber":"11","ActSceneLine":"1.2.55","Player":"benvolio","PlayerLine":"Why, Romeo, art thou mad?","scene":"1.2"},{"Dataline":"85612","PlayerLinenumber":"12","ActSceneLine":"1.2.56","Player":"romeo","PlayerLine":"Not mad, but bound more than a mad-man is,","scene":"1.2"},{"Dataline":"85613","PlayerLinenumber":"12","ActSceneLine":"1.2.57","Player":"romeo","PlayerLine":"Shut up in prison, kept without my food,","scene":"1.2"},{"Dataline":"85614","PlayerLinenumber":"12","ActSceneLine":"1.2.58","Player":"romeo","PlayerLine":"Whipp\'d and tormented and--God-den, good fellow.","scene":"1.2"},{"Dataline":"85615","PlayerLinenumber":"13","ActSceneLine":"1.2.59","Player":"servant","PlayerLine":"God gi\' god-den. I pray, sir, can you read?","scene":"1.2"},{"Dataline":"85616","PlayerLinenumber":"14","ActSceneLine":"1.2.60","Player":"romeo","PlayerLine":"Ay, mine own fortune in my misery.","scene":"1.2"},{"Dataline":"85617","PlayerLinenumber":"15","ActSceneLine":"1.2.61","Player":"servant","PlayerLine":"Perhaps you have learned it without book: but, I","scene":"1.2"},{"Dataline":"85618","PlayerLinenumber":"15","ActSceneLine":"1.2.62","Player":"servant","PlayerLine":"pray, can you read any thing you see?","scene":"1.2"},{"Dataline":"85619","PlayerLinenumber":"16","ActSceneLine":"1.2.63","Player":"romeo","PlayerLine":"Ay, if I know the letters and the language.","scene":"1.2"},{"Dataline":"85620","PlayerLinenumber":"17","ActSceneLine":"1.2.64","Player":"servant","PlayerLine":"Ye say honestly: rest you merry!","scene":"1.2"},{"Dataline":"85621","PlayerLinenumber":"18","ActSceneLine":"1.2.65","Player":"romeo","PlayerLine":"Stay, fellow, I can read.","scene":"1.2"},{"Dataline":"85623","PlayerLinenumber":"18","ActSceneLine":"1.2.66","Player":"romeo","PlayerLine":"\'Signior Martino and his wife and daughters,","scene":"1.2"},{"Dataline":"85624","PlayerLinenumber":"18","ActSceneLine":"1.2.67","Player":"romeo","PlayerLine":"County Anselme and his beauteous sisters, the lady","scene":"1.2"},{"Dataline":"85625","PlayerLinenumber":"18","ActSceneLine":"1.2.68","Player":"romeo","PlayerLine":"widow of Vitravio, Signior Placentio and his lovely","scene":"1.2"},{"Dataline":"85626","PlayerLinenumber":"18","ActSceneLine":"1.2.69","Player":"romeo","PlayerLine":"nieces, Mercutio and his brother Valentine, mine","scene":"1.2"},{"Dataline":"85627","PlayerLinenumber":"18","ActSceneLine":"1.2.70","Player":"romeo","PlayerLine":"uncle Capulet, his wife and daughters, my fair niece","scene":"1.2"},{"Dataline":"85628","PlayerLinenumber":"18","ActSceneLine":"1.2.71","Player":"romeo","PlayerLine":"Rosaline, Livia, Signior Valentio and his cousin","scene":"1.2"},{"Dataline":"85629","PlayerLinenumber":"18","ActSceneLine":"1.2.72","Player":"romeo","PlayerLine":"Tybalt, Lucio and the lively Helena.\' A fair","scene":"1.2"},{"Dataline":"85630","PlayerLinenumber":"18","ActSceneLine":"1.2.73","Player":"romeo","PlayerLine":"assembly: whither should they come?","scene":"1.2"},{"Dataline":"85631","PlayerLinenumber":"19","ActSceneLine":"1.2.74","Player":"servant","PlayerLine":"Up.","scene":"1.2"},{"Dataline":"85632","PlayerLinenumber":"20","ActSceneLine":"1.2.75","Player":"romeo","PlayerLine":"Whither?","scene":"1.2"},{"Dataline":"85633","PlayerLinenumber":"21","ActSceneLine":"1.2.76","Player":"servant","PlayerLine":"To supper, to our house.","scene":"1.2"},{"Dataline":"85634","PlayerLinenumber":"22","ActSceneLine":"1.2.77","Player":"romeo","PlayerLine":"Whose house?","scene":"1.2"},{"Dataline":"85635","PlayerLinenumber":"23","ActSceneLine":"1.2.78","Player":"servant","PlayerLine":"My master\'s.","scene":"1.2"},{"Dataline":"85636","PlayerLinenumber":"24","ActSceneLine":"1.2.79","Player":"romeo","PlayerLine":"Indeed, I should have ask\'d you that before.","scene":"1.2"},{"Dataline":"85637","PlayerLinenumber":"25","ActSceneLine":"1.2.80","Player":"servant","PlayerLine":"Now I\'ll tell you without asking: my master is the","scene":"1.2"},{"Dataline":"85638","PlayerLinenumber":"25","ActSceneLine":"1.2.81","Player":"servant","PlayerLine":"great rich Capulet, and if you be not of the house","scene":"1.2"},{"Dataline":"85639","PlayerLinenumber":"25","ActSceneLine":"1.2.82","Player":"servant","PlayerLine":"of Montagues, I pray, come and crush a cup of wine.","scene":"1.2"},{"Dataline":"85640","PlayerLinenumber":"25","ActSceneLine":"1.2.83","Player":"servant","PlayerLine":"Rest you merry!","scene":"1.2"},{"Dataline":"85642","PlayerLinenumber":"26","ActSceneLine":"1.2.84","Player":"benvolio","PlayerLine":"At this same ancient feast of Capulet\'s","scene":"1.2"},{"Dataline":"85643","PlayerLinenumber":"26","ActSceneLine":"1.2.85","Player":"benvolio","PlayerLine":"Sups the fair Rosaline whom thou so lovest,","scene":"1.2"},{"Dataline":"85644","PlayerLinenumber":"26","ActSceneLine":"1.2.86","Player":"benvolio","PlayerLine":"With all the admired beauties of Verona:","scene":"1.2"},{"Dataline":"85645","PlayerLinenumber":"26","ActSceneLine":"1.2.87","Player":"benvolio","PlayerLine":"Go thither, and, with unattainted eye,","scene":"1.2"},{"Dataline":"85646","PlayerLinenumber":"26","ActSceneLine":"1.2.88","Player":"benvolio","PlayerLine":"Compare her face with some that I shall show,","scene":"1.2"},{"Dataline":"85647","PlayerLinenumber":"26","ActSceneLine":"1.2.89","Player":"benvolio","PlayerLine":"And I will make thee think thy swan a crow.","scene":"1.2"},{"Dataline":"85648","PlayerLinenumber":"27","ActSceneLine":"1.2.90","Player":"romeo","PlayerLine":"When the devout religion of mine eye","scene":"1.2"},{"Dataline":"85649","PlayerLinenumber":"27","ActSceneLine":"1.2.91","Player":"romeo","PlayerLine":"Maintains such falsehood, then turn tears to fires,","scene":"1.2"},{"Dataline":"85650","PlayerLinenumber":"27","ActSceneLine":"1.2.92","Player":"romeo","PlayerLine":"And these, who often drown\'d could never die,","scene":"1.2"},{"Dataline":"85651","PlayerLinenumber":"27","ActSceneLine":"1.2.93","Player":"romeo","PlayerLine":"Transparent heretics, be burnt for liars!","scene":"1.2"},{"Dataline":"85652","PlayerLinenumber":"27","ActSceneLine":"1.2.94","Player":"romeo","PlayerLine":"One fairer than my love! the all-seeing sun","scene":"1.2"},{"Dataline":"85653","PlayerLinenumber":"27","ActSceneLine":"1.2.95","Player":"romeo","PlayerLine":"Ne\'er saw her match since first the world begun.","scene":"1.2"},{"Dataline":"85654","PlayerLinenumber":"28","ActSceneLine":"1.2.96","Player":"benvolio","PlayerLine":"Tut, you saw her fair, none else being by,","scene":"1.2"},{"Dataline":"85655","PlayerLinenumber":"28","ActSceneLine":"1.2.97","Player":"benvolio","PlayerLine":"Herself poised with herself in either eye:","scene":"1.2"},{"Dataline":"85656","PlayerLinenumber":"28","ActSceneLine":"1.2.98","Player":"benvolio","PlayerLine":"But in that crystal scales let there be weigh\'d","scene":"1.2"},{"Dataline":"85657","PlayerLinenumber":"28","ActSceneLine":"1.2.99","Player":"benvolio","PlayerLine":"Your lady\'s love against some other maid","scene":"1.2"},{"Dataline":"85658","PlayerLinenumber":"28","ActSceneLine":"1.2.100","Player":"benvolio","PlayerLine":"That I will show you shining at this feast,","scene":"1.2"},{"Dataline":"85659","PlayerLinenumber":"28","ActSceneLine":"1.2.101","Player":"benvolio","PlayerLine":"And she shall scant show well that now shows best.","scene":"1.2"},{"Dataline":"85660","PlayerLinenumber":"29","ActSceneLine":"1.2.102","Player":"romeo","PlayerLine":"I\'ll go along, no such sight to be shown,","scene":"1.2"},{"Dataline":"85661","PlayerLinenumber":"29","ActSceneLine":"1.2.103","Player":"romeo","PlayerLine":"But to rejoice in splendor of mine own.","scene":"1.2"},{"Dataline":"85665","PlayerLinenumber":"1","ActSceneLine":"1.3.1","Player":"lady_capulet","PlayerLine":"Nurse, where\'s my daughter? call her forth to me.","scene":"1.3"},{"Dataline":"85666","PlayerLinenumber":"2","ActSceneLine":"1.3.2","Player":"nurse","PlayerLine":"Now, by my maidenhead, at twelve year old,","scene":"1.3"},{"Dataline":"85667","PlayerLinenumber":"2","ActSceneLine":"1.3.3","Player":"nurse","PlayerLine":"I bade her come. What, lamb! what, ladybird!","scene":"1.3"},{"Dataline":"85668","PlayerLinenumber":"2","ActSceneLine":"1.3.4","Player":"nurse","PlayerLine":"God forbid! Where\'s this girl? What, Juliet!","scene":"1.3"},{"Dataline":"85670","PlayerLinenumber":"3","ActSceneLine":"1.3.5","Player":"juliet","PlayerLine":"How now! who calls?","scene":"1.3"},{"Dataline":"85671","PlayerLinenumber":"4","ActSceneLine":"1.3.6","Player":"nurse","PlayerLine":"Your mother.","scene":"1.3"},{"Dataline":"85672","PlayerLinenumber":"5","ActSceneLine":"1.3.7","Player":"juliet","PlayerLine":"Madam, I am here.","scene":"1.3"},{"Dataline":"85673","PlayerLinenumber":"5","ActSceneLine":"1.3.8","Player":"juliet","PlayerLine":"What is your will?","scene":"1.3"},{"Dataline":"85674","PlayerLinenumber":"6","ActSceneLine":"1.3.9","Player":"lady_capulet","PlayerLine":"This is the matter:--Nurse, give leave awhile,","scene":"1.3"},{"Dataline":"85675","PlayerLinenumber":"6","ActSceneLine":"1.3.10","Player":"lady_capulet","PlayerLine":"We must talk in secret:--nurse, come back again,","scene":"1.3"},{"Dataline":"85676","PlayerLinenumber":"6","ActSceneLine":"1.3.11","Player":"lady_capulet","PlayerLine":"I have remember\'d me, thou\'s hear our counsel.","scene":"1.3"},{"Dataline":"85677","PlayerLinenumber":"6","ActSceneLine":"1.3.12","Player":"lady_capulet","PlayerLine":"Thou know\'st my daughter\'s of a pretty age.","scene":"1.3"},{"Dataline":"85678","PlayerLinenumber":"7","ActSceneLine":"1.3.13","Player":"nurse","PlayerLine":"Faith, I can tell her age unto an hour.","scene":"1.3"},{"Dataline":"85679","PlayerLinenumber":"8","ActSceneLine":"1.3.14","Player":"lady_capulet","PlayerLine":"She\'s not fourteen.","scene":"1.3"},{"Dataline":"85680","PlayerLinenumber":"9","ActSceneLine":"1.3.15","Player":"nurse","PlayerLine":"I\'ll lay fourteen of my teeth,--","scene":"1.3"},{"Dataline":"85681","PlayerLinenumber":"9","ActSceneLine":"1.3.16","Player":"nurse","PlayerLine":"And yet, to my teeth be it spoken, I have but four--","scene":"1.3"},{"Dataline":"85682","PlayerLinenumber":"9","ActSceneLine":"1.3.17","Player":"nurse","PlayerLine":"She is not fourteen. How long is it now","scene":"1.3"},{"Dataline":"85683","PlayerLinenumber":"9","ActSceneLine":"1.3.18","Player":"nurse","PlayerLine":"To Lammas-tide?","scene":"1.3"},{"Dataline":"85684","PlayerLinenumber":"10","ActSceneLine":"1.3.19","Player":"lady_capulet","PlayerLine":"A fortnight and odd days.","scene":"1.3"},{"Dataline":"85685","PlayerLinenumber":"11","ActSceneLine":"1.3.20","Player":"nurse","PlayerLine":"Even or odd, of all days in the year,","scene":"1.3"},{"Dataline":"85686","PlayerLinenumber":"11","ActSceneLine":"1.3.21","Player":"nurse","PlayerLine":"Come Lammas-eve at night shall she be fourteen.","scene":"1.3"},{"Dataline":"85687","PlayerLinenumber":"11","ActSceneLine":"1.3.22","Player":"nurse","PlayerLine":"Susan and she--God rest all Christian souls!--","scene":"1.3"},{"Dataline":"85688","PlayerLinenumber":"11","ActSceneLine":"1.3.23","Player":"nurse","PlayerLine":"Were of an age: well, Susan is with God,","scene":"1.3"},{"Dataline":"85689","PlayerLinenumber":"11","ActSceneLine":"1.3.24","Player":"nurse","PlayerLine":"She was too good for me: but, as I said,","scene":"1.3"},{"Dataline":"85690","PlayerLinenumber":"11","ActSceneLine":"1.3.25","Player":"nurse","PlayerLine":"On Lammas-eve at night shall she be fourteen,","scene":"1.3"},{"Dataline":"85691","PlayerLinenumber":"11","ActSceneLine":"1.3.26","Player":"nurse","PlayerLine":"That shall she, marry, I remember it well.","scene":"1.3"},{"Dataline":"85692","PlayerLinenumber":"11","ActSceneLine":"1.3.27","Player":"nurse","PlayerLine":"\'Tis since the earthquake now eleven years,","scene":"1.3"},{"Dataline":"85693","PlayerLinenumber":"11","ActSceneLine":"1.3.28","Player":"nurse","PlayerLine":"And she was wean\'d,--I never shall forget it,--","scene":"1.3"},{"Dataline":"85694","PlayerLinenumber":"11","ActSceneLine":"1.3.29","Player":"nurse","PlayerLine":"Of all the days of the year, upon that day:","scene":"1.3"},{"Dataline":"85695","PlayerLinenumber":"11","ActSceneLine":"1.3.30","Player":"nurse","PlayerLine":"For I had then laid wormwood to my dug,","scene":"1.3"},{"Dataline":"85696","PlayerLinenumber":"11","ActSceneLine":"1.3.31","Player":"nurse","PlayerLine":"Sitting in the sun under the dove-house wall,","scene":"1.3"},{"Dataline":"85697","PlayerLinenumber":"11","ActSceneLine":"1.3.32","Player":"nurse","PlayerLine":"My lord and you were then at Mantua:--","scene":"1.3"},{"Dataline":"85698","PlayerLinenumber":"11","ActSceneLine":"1.3.33","Player":"nurse","PlayerLine":"Nay, I do bear a brain:--but, as I said,","scene":"1.3"},{"Dataline":"85699","PlayerLinenumber":"11","ActSceneLine":"1.3.34","Player":"nurse","PlayerLine":"When it did taste the wormwood on the nipple","scene":"1.3"},{"Dataline":"85700","PlayerLinenumber":"11","ActSceneLine":"1.3.35","Player":"nurse","PlayerLine":"Of my dug and felt it bitter, pretty fool,","scene":"1.3"},{"Dataline":"85701","PlayerLinenumber":"11","ActSceneLine":"1.3.36","Player":"nurse","PlayerLine":"To see it tetchy and fall out with the dug!","scene":"1.3"},{"Dataline":"85702","PlayerLinenumber":"11","ActSceneLine":"1.3.37","Player":"nurse","PlayerLine":"Shake quoth the dove-house: \'twas no need, I trow,","scene":"1.3"},{"Dataline":"85703","PlayerLinenumber":"11","ActSceneLine":"1.3.38","Player":"nurse","PlayerLine":"To bid me trudge:","scene":"1.3"},{"Dataline":"85704","PlayerLinenumber":"11","ActSceneLine":"1.3.39","Player":"nurse","PlayerLine":"And since that time it is eleven years,","scene":"1.3"},{"Dataline":"85705","PlayerLinenumber":"11","ActSceneLine":"1.3.40","Player":"nurse","PlayerLine":"For then she could stand alone, nay, by the rood,","scene":"1.3"},{"Dataline":"85706","PlayerLinenumber":"11","ActSceneLine":"1.3.41","Player":"nurse","PlayerLine":"She could have run and waddled all about,","scene":"1.3"},{"Dataline":"85707","PlayerLinenumber":"11","ActSceneLine":"1.3.42","Player":"nurse","PlayerLine":"For even the day before, she broke her brow:","scene":"1.3"},{"Dataline":"85708","PlayerLinenumber":"11","ActSceneLine":"1.3.43","Player":"nurse","PlayerLine":"And then my husband--God be with his soul!","scene":"1.3"},{"Dataline":"85709","PlayerLinenumber":"11","ActSceneLine":"1.3.44","Player":"nurse","PlayerLine":"A\' was a merry man--took up the child:","scene":"1.3"},{"Dataline":"85710","PlayerLinenumber":"11","ActSceneLine":"1.3.45","Player":"nurse","PlayerLine":"\'Yea,\' quoth he, \'dost thou fall upon thy face?","scene":"1.3"},{"Dataline":"85711","PlayerLinenumber":"11","ActSceneLine":"1.3.46","Player":"nurse","PlayerLine":"Thou wilt fall backward when thou hast more wit,","scene":"1.3"},{"Dataline":"85712","PlayerLinenumber":"11","ActSceneLine":"1.3.47","Player":"nurse","PlayerLine":"Wilt thou not, Jule?\' and, by my holidame,","scene":"1.3"},{"Dataline":"85713","PlayerLinenumber":"11","ActSceneLine":"1.3.48","Player":"nurse","PlayerLine":"The pretty wretch left crying and said \'Ay.\'","scene":"1.3"},{"Dataline":"85714","PlayerLinenumber":"11","ActSceneLine":"1.3.49","Player":"nurse","PlayerLine":"To see, now, how a jest shall come about!","scene":"1.3"},{"Dataline":"85715","PlayerLinenumber":"11","ActSceneLine":"1.3.50","Player":"nurse","PlayerLine":"I warrant, an I should live a thousand years,","scene":"1.3"},{"Dataline":"85716","PlayerLinenumber":"11","ActSceneLine":"1.3.51","Player":"nurse","PlayerLine":"I never should forget it: \'Wilt thou not, Jule?\' quoth he,","scene":"1.3"},{"Dataline":"85717","PlayerLinenumber":"11","ActSceneLine":"1.3.52","Player":"nurse","PlayerLine":"And, pretty fool, it stinted and said \'Ay.\'","scene":"1.3"},{"Dataline":"85718","PlayerLinenumber":"12","ActSceneLine":"1.3.53","Player":"lady_capulet","PlayerLine":"Enough of this, I pray thee, hold thy peace.","scene":"1.3"},{"Dataline":"85719","PlayerLinenumber":"13","ActSceneLine":"1.3.54","Player":"nurse","PlayerLine":"Yes, madam: yet I cannot choose but laugh,","scene":"1.3"},{"Dataline":"85720","PlayerLinenumber":"13","ActSceneLine":"1.3.55","Player":"nurse","PlayerLine":"To think it should leave crying and say \'Ay.\'","scene":"1.3"},{"Dataline":"85721","PlayerLinenumber":"13","ActSceneLine":"1.3.56","Player":"nurse","PlayerLine":"And yet, I warrant, it had upon its brow","scene":"1.3"},{"Dataline":"85722","PlayerLinenumber":"13","ActSceneLine":"1.3.57","Player":"nurse","PlayerLine":"A bump as big as a young cockerel\'s stone,","scene":"1.3"},{"Dataline":"85723","PlayerLinenumber":"13","ActSceneLine":"1.3.58","Player":"nurse","PlayerLine":"A parlous knock, and it cried bitterly:","scene":"1.3"},{"Dataline":"85724","PlayerLinenumber":"13","ActSceneLine":"1.3.59","Player":"nurse","PlayerLine":"\'Yea,\' quoth my husband,\'fall\'st upon thy face?","scene":"1.3"},{"Dataline":"85725","PlayerLinenumber":"13","ActSceneLine":"1.3.60","Player":"nurse","PlayerLine":"Thou wilt fall backward when thou comest to age,","scene":"1.3"},{"Dataline":"85726","PlayerLinenumber":"13","ActSceneLine":"1.3.61","Player":"nurse","PlayerLine":"Wilt thou not, Jule?\' it stinted and said \'Ay.\'","scene":"1.3"},{"Dataline":"85727","PlayerLinenumber":"14","ActSceneLine":"1.3.62","Player":"juliet","PlayerLine":"And stint thou too, I pray thee, nurse, say I.","scene":"1.3"},{"Dataline":"85728","PlayerLinenumber":"15","ActSceneLine":"1.3.63","Player":"nurse","PlayerLine":"Peace, I have done. God mark thee to his grace!","scene":"1.3"},{"Dataline":"85729","PlayerLinenumber":"15","ActSceneLine":"1.3.64","Player":"nurse","PlayerLine":"Thou wast the prettiest babe that e\'er I nursed:","scene":"1.3"},{"Dataline":"85730","PlayerLinenumber":"15","ActSceneLine":"1.3.65","Player":"nurse","PlayerLine":"An I might live to see thee married once,","scene":"1.3"},{"Dataline":"85731","PlayerLinenumber":"15","ActSceneLine":"1.3.66","Player":"nurse","PlayerLine":"I have my wish.","scene":"1.3"},{"Dataline":"85732","PlayerLinenumber":"16","ActSceneLine":"1.3.67","Player":"lady_capulet","PlayerLine":"Marry, that \'marry\' is the very theme","scene":"1.3"},{"Dataline":"85733","PlayerLinenumber":"16","ActSceneLine":"1.3.68","Player":"lady_capulet","PlayerLine":"I came to talk of. Tell me, daughter Juliet,","scene":"1.3"},{"Dataline":"85734","PlayerLinenumber":"16","ActSceneLine":"1.3.69","Player":"lady_capulet","PlayerLine":"How stands your disposition to be married?","scene":"1.3"},{"Dataline":"85735","PlayerLinenumber":"17","ActSceneLine":"1.3.70","Player":"juliet","PlayerLine":"It is an honour that I dream not of.","scene":"1.3"},{"Dataline":"85736","PlayerLinenumber":"18","ActSceneLine":"1.3.71","Player":"nurse","PlayerLine":"An honour! were not I thine only nurse,","scene":"1.3"},{"Dataline":"85737","PlayerLinenumber":"18","ActSceneLine":"1.3.72","Player":"nurse","PlayerLine":"I would say thou hadst suck\'d wisdom from thy teat.","scene":"1.3"},{"Dataline":"85738","PlayerLinenumber":"19","ActSceneLine":"1.3.73","Player":"lady_capulet","PlayerLine":"Well, think of marriage now, younger than you,","scene":"1.3"},{"Dataline":"85739","PlayerLinenumber":"19","ActSceneLine":"1.3.74","Player":"lady_capulet","PlayerLine":"Here in Verona, ladies of esteem,","scene":"1.3"},{"Dataline":"85740","PlayerLinenumber":"19","ActSceneLine":"1.3.75","Player":"lady_capulet","PlayerLine":"Are made already mothers: by my count,","scene":"1.3"},{"Dataline":"85741","PlayerLinenumber":"19","ActSceneLine":"1.3.76","Player":"lady_capulet","PlayerLine":"I was your mother much upon these years","scene":"1.3"},{"Dataline":"85742","PlayerLinenumber":"19","ActSceneLine":"1.3.77","Player":"lady_capulet","PlayerLine":"That you are now a maid. Thus then in brief:","scene":"1.3"},{"Dataline":"85743","PlayerLinenumber":"19","ActSceneLine":"1.3.78","Player":"lady_capulet","PlayerLine":"The valiant Paris seeks you for his love.","scene":"1.3"},{"Dataline":"85744","PlayerLinenumber":"20","ActSceneLine":"1.3.79","Player":"nurse","PlayerLine":"A man, young lady! lady, such a man","scene":"1.3"},{"Dataline":"85745","PlayerLinenumber":"20","ActSceneLine":"1.3.80","Player":"nurse","PlayerLine":"As all the world--why, he\'s a man of wax.","scene":"1.3"},{"Dataline":"85746","PlayerLinenumber":"21","ActSceneLine":"1.3.81","Player":"lady_capulet","PlayerLine":"Verona\'s summer hath not such a flower.","scene":"1.3"},{"Dataline":"85747","PlayerLinenumber":"22","ActSceneLine":"1.3.82","Player":"nurse","PlayerLine":"Nay, he\'s a flower, in faith, a very flower.","scene":"1.3"},{"Dataline":"85748","PlayerLinenumber":"23","ActSceneLine":"1.3.83","Player":"lady_capulet","PlayerLine":"What say you? can you love the gentleman?","scene":"1.3"},{"Dataline":"85749","PlayerLinenumber":"23","ActSceneLine":"1.3.84","Player":"lady_capulet","PlayerLine":"This night you shall behold him at our feast,","scene":"1.3"},{"Dataline":"85750","PlayerLinenumber":"23","ActSceneLine":"1.3.85","Player":"lady_capulet","PlayerLine":"Read o\'er the volume of young Paris\' face,","scene":"1.3"},{"Dataline":"85751","PlayerLinenumber":"23","ActSceneLine":"1.3.86","Player":"lady_capulet","PlayerLine":"And find delight writ there with beauty\'s pen,","scene":"1.3"},{"Dataline":"85752","PlayerLinenumber":"23","ActSceneLine":"1.3.87","Player":"lady_capulet","PlayerLine":"Examine every married lineament,","scene":"1.3"},{"Dataline":"85753","PlayerLinenumber":"23","ActSceneLine":"1.3.88","Player":"lady_capulet","PlayerLine":"And see how one another lends content","scene":"1.3"},{"Dataline":"85754","PlayerLinenumber":"23","ActSceneLine":"1.3.89","Player":"lady_capulet","PlayerLine":"And what obscured in this fair volume lies","scene":"1.3"},{"Dataline":"85755","PlayerLinenumber":"23","ActSceneLine":"1.3.90","Player":"lady_capulet","PlayerLine":"Find written in the margent of his eyes.","scene":"1.3"},{"Dataline":"85756","PlayerLinenumber":"23","ActSceneLine":"1.3.91","Player":"lady_capulet","PlayerLine":"This precious book of love, this unbound lover,","scene":"1.3"},{"Dataline":"85757","PlayerLinenumber":"23","ActSceneLine":"1.3.92","Player":"lady_capulet","PlayerLine":"To beautify him, only lacks a cover:","scene":"1.3"},{"Dataline":"85758","PlayerLinenumber":"23","ActSceneLine":"1.3.93","Player":"lady_capulet","PlayerLine":"The fish lives in the sea, and \'tis much pride","scene":"1.3"},{"Dataline":"85759","PlayerLinenumber":"23","ActSceneLine":"1.3.94","Player":"lady_capulet","PlayerLine":"For fair without the fair within to hide:","scene":"1.3"},{"Dataline":"85760","PlayerLinenumber":"23","ActSceneLine":"1.3.95","Player":"lady_capulet","PlayerLine":"That book in many\'s eyes doth share the glory,","scene":"1.3"},{"Dataline":"85761","PlayerLinenumber":"23","ActSceneLine":"1.3.96","Player":"lady_capulet","PlayerLine":"That in gold clasps locks in the golden story,","scene":"1.3"},{"Dataline":"85762","PlayerLinenumber":"23","ActSceneLine":"1.3.97","Player":"lady_capulet","PlayerLine":"So shall you share all that he doth possess,","scene":"1.3"},{"Dataline":"85763","PlayerLinenumber":"23","ActSceneLine":"1.3.98","Player":"lady_capulet","PlayerLine":"By having him, making yourself no less.","scene":"1.3"},{"Dataline":"85764","PlayerLinenumber":"24","ActSceneLine":"1.3.99","Player":"nurse","PlayerLine":"No less! nay, bigger, women grow by men.","scene":"1.3"},{"Dataline":"85765","PlayerLinenumber":"25","ActSceneLine":"1.3.100","Player":"lady_capulet","PlayerLine":"Speak briefly, can you like of Paris\' love?","scene":"1.3"},{"Dataline":"85766","PlayerLinenumber":"26","ActSceneLine":"1.3.101","Player":"juliet","PlayerLine":"I\'ll look to like, if looking liking move:","scene":"1.3"},{"Dataline":"85767","PlayerLinenumber":"26","ActSceneLine":"1.3.102","Player":"juliet","PlayerLine":"But no more deep will I endart mine eye","scene":"1.3"},{"Dataline":"85768","PlayerLinenumber":"26","ActSceneLine":"1.3.103","Player":"juliet","PlayerLine":"Than your consent gives strength to make it fly.","scene":"1.3"},{"Dataline":"85770","PlayerLinenumber":"27","ActSceneLine":"1.3.104","Player":"servant","PlayerLine":"Madam, the guests are come, supper served up, you","scene":"1.3"},{"Dataline":"85771","PlayerLinenumber":"27","ActSceneLine":"1.3.105","Player":"servant","PlayerLine":"called, my young lady asked for, the nurse cursed in","scene":"1.3"},{"Dataline":"85772","PlayerLinenumber":"27","ActSceneLine":"1.3.106","Player":"servant","PlayerLine":"the pantry, and every thing in extremity. I must","scene":"1.3"},{"Dataline":"85773","PlayerLinenumber":"27","ActSceneLine":"1.3.107","Player":"servant","PlayerLine":"hence to wait, I beseech you, follow straight.","scene":"1.3"},{"Dataline":"85774","PlayerLinenumber":"28","ActSceneLine":"1.3.108","Player":"lady_capulet","PlayerLine":"We follow thee.","scene":"1.3"},{"Dataline":"85776","PlayerLinenumber":"28","ActSceneLine":"1.3.109","Player":"lady_capulet","PlayerLine":"Juliet, the county stays.","scene":"1.3"},{"Dataline":"85777","PlayerLinenumber":"29","ActSceneLine":"1.3.110","Player":"nurse","PlayerLine":"Go, girl, seek happy nights to happy days.","scene":"1.3"},{"Dataline":"85781","PlayerLinenumber":"1","ActSceneLine":"1.4.1","Player":"romeo","PlayerLine":"What, shall this speech be spoke for our excuse?","scene":"1.4"},{"Dataline":"85782","PlayerLinenumber":"1","ActSceneLine":"1.4.2","Player":"romeo","PlayerLine":"Or shall we on without a apology?","scene":"1.4"},{"Dataline":"85783","PlayerLinenumber":"2","ActSceneLine":"1.4.3","Player":"benvolio","PlayerLine":"The date is out of such prolixity:","scene":"1.4"},{"Dataline":"85784","PlayerLinenumber":"2","ActSceneLine":"1.4.4","Player":"benvolio","PlayerLine":"We\'ll have no Cupid hoodwink\'d with a scarf,","scene":"1.4"},{"Dataline":"85785","PlayerLinenumber":"2","ActSceneLine":"1.4.5","Player":"benvolio","PlayerLine":"Bearing a Tartar\'s painted bow of lath,","scene":"1.4"},{"Dataline":"85786","PlayerLinenumber":"2","ActSceneLine":"1.4.6","Player":"benvolio","PlayerLine":"Scaring the ladies like a crow-keeper,","scene":"1.4"},{"Dataline":"85787","PlayerLinenumber":"2","ActSceneLine":"1.4.7","Player":"benvolio","PlayerLine":"Nor no without-book prologue, faintly spoke","scene":"1.4"},{"Dataline":"85788","PlayerLinenumber":"2","ActSceneLine":"1.4.8","Player":"benvolio","PlayerLine":"After the prompter, for our entrance:","scene":"1.4"},{"Dataline":"85789","PlayerLinenumber":"2","ActSceneLine":"1.4.9","Player":"benvolio","PlayerLine":"But let them measure us by what they will,","scene":"1.4"},{"Dataline":"85790","PlayerLinenumber":"2","ActSceneLine":"1.4.10","Player":"benvolio","PlayerLine":"We\'ll measure them a measure, and be gone.","scene":"1.4"},{"Dataline":"85791","PlayerLinenumber":"3","ActSceneLine":"1.4.11","Player":"romeo","PlayerLine":"Give me a torch: I am not for this ambling,","scene":"1.4"},{"Dataline":"85792","PlayerLinenumber":"3","ActSceneLine":"1.4.12","Player":"romeo","PlayerLine":"Being but heavy, I will bear the light.","scene":"1.4"},{"Dataline":"85793","PlayerLinenumber":"4","ActSceneLine":"1.4.13","Player":"mercutio","PlayerLine":"Nay, gentle Romeo, we must have you dance.","scene":"1.4"},{"Dataline":"85794","PlayerLinenumber":"5","ActSceneLine":"1.4.14","Player":"romeo","PlayerLine":"Not I, believe me: you have dancing shoes","scene":"1.4"},{"Dataline":"85795","PlayerLinenumber":"5","ActSceneLine":"1.4.15","Player":"romeo","PlayerLine":"With nimble soles: I have a soul of lead","scene":"1.4"},{"Dataline":"85796","PlayerLinenumber":"5","ActSceneLine":"1.4.16","Player":"romeo","PlayerLine":"So stakes me to the ground I cannot move.","scene":"1.4"},{"Dataline":"85797","PlayerLinenumber":"6","ActSceneLine":"1.4.17","Player":"mercutio","PlayerLine":"You are a lover, borrow Cupid\'s wings,","scene":"1.4"},{"Dataline":"85798","PlayerLinenumber":"6","ActSceneLine":"1.4.18","Player":"mercutio","PlayerLine":"And soar with them above a common bound.","scene":"1.4"},{"Dataline":"85799","PlayerLinenumber":"7","ActSceneLine":"1.4.19","Player":"romeo","PlayerLine":"I am too sore enpierced with his shaft","scene":"1.4"},{"Dataline":"85800","PlayerLinenumber":"7","ActSceneLine":"1.4.20","Player":"romeo","PlayerLine":"To soar with his light feathers, and so bound,","scene":"1.4"},{"Dataline":"85801","PlayerLinenumber":"7","ActSceneLine":"1.4.21","Player":"romeo","PlayerLine":"I cannot bound a pitch above dull woe:","scene":"1.4"},{"Dataline":"85802","PlayerLinenumber":"7","ActSceneLine":"1.4.22","Player":"romeo","PlayerLine":"Under love\'s heavy burden do I sink.","scene":"1.4"},{"Dataline":"85803","PlayerLinenumber":"8","ActSceneLine":"1.4.23","Player":"mercutio","PlayerLine":"And, to sink in it, should you burden love,","scene":"1.4"},{"Dataline":"85804","PlayerLinenumber":"8","ActSceneLine":"1.4.24","Player":"mercutio","PlayerLine":"Too great oppression for a tender thing.","scene":"1.4"},{"Dataline":"85805","PlayerLinenumber":"9","ActSceneLine":"1.4.25","Player":"romeo","PlayerLine":"Is love a tender thing? it is too rough,","scene":"1.4"},{"Dataline":"85806","PlayerLinenumber":"9","ActSceneLine":"1.4.26","Player":"romeo","PlayerLine":"Too rude, too boisterous, and it pricks like thorn.","scene":"1.4"},{"Dataline":"85807","PlayerLinenumber":"10","ActSceneLine":"1.4.27","Player":"mercutio","PlayerLine":"If love be rough with you, be rough with love,","scene":"1.4"},{"Dataline":"85808","PlayerLinenumber":"10","ActSceneLine":"1.4.28","Player":"mercutio","PlayerLine":"Prick love for pricking, and you beat love down.","scene":"1.4"},{"Dataline":"85809","PlayerLinenumber":"10","ActSceneLine":"1.4.29","Player":"mercutio","PlayerLine":"Give me a case to put my visage in:","scene":"1.4"},{"Dataline":"85810","PlayerLinenumber":"10","ActSceneLine":"1.4.30","Player":"mercutio","PlayerLine":"A visor for a visor! what care I","scene":"1.4"},{"Dataline":"85811","PlayerLinenumber":"10","ActSceneLine":"1.4.31","Player":"mercutio","PlayerLine":"What curious eye doth quote deformities?","scene":"1.4"},{"Dataline":"85812","PlayerLinenumber":"10","ActSceneLine":"1.4.32","Player":"mercutio","PlayerLine":"Here are the beetle brows shall blush for me.","scene":"1.4"},{"Dataline":"85813","PlayerLinenumber":"11","ActSceneLine":"1.4.33","Player":"benvolio","PlayerLine":"Come, knock and enter, and no sooner in,","scene":"1.4"},{"Dataline":"85814","PlayerLinenumber":"11","ActSceneLine":"1.4.34","Player":"benvolio","PlayerLine":"But every man betake him to his legs.","scene":"1.4"},{"Dataline":"85815","PlayerLinenumber":"12","ActSceneLine":"1.4.35","Player":"romeo","PlayerLine":"A torch for me: let wantons light of heart","scene":"1.4"},{"Dataline":"85816","PlayerLinenumber":"12","ActSceneLine":"1.4.36","Player":"romeo","PlayerLine":"Tickle the senseless rushes with their heels,","scene":"1.4"},{"Dataline":"85817","PlayerLinenumber":"12","ActSceneLine":"1.4.37","Player":"romeo","PlayerLine":"For I am proverb\'d with a grandsire phrase,","scene":"1.4"},{"Dataline":"85818","PlayerLinenumber":"12","ActSceneLine":"1.4.38","Player":"romeo","PlayerLine":"I\'ll be a candle-holder, and look on.","scene":"1.4"},{"Dataline":"85819","PlayerLinenumber":"12","ActSceneLine":"1.4.39","Player":"romeo","PlayerLine":"The game was ne\'er so fair, and I am done.","scene":"1.4"},{"Dataline":"85820","PlayerLinenumber":"13","ActSceneLine":"1.4.40","Player":"mercutio","PlayerLine":"Tut, dun\'s the mouse, the constable\'s own word:","scene":"1.4"},{"Dataline":"85821","PlayerLinenumber":"13","ActSceneLine":"1.4.41","Player":"mercutio","PlayerLine":"If thou art dun, we\'ll draw thee from the mire","scene":"1.4"},{"Dataline":"85822","PlayerLinenumber":"13","ActSceneLine":"1.4.42","Player":"mercutio","PlayerLine":"Of this sir-reverence love, wherein thou stick\'st","scene":"1.4"},{"Dataline":"85823","PlayerLinenumber":"13","ActSceneLine":"1.4.43","Player":"mercutio","PlayerLine":"Up to the ears. Come, we burn daylight, ho!","scene":"1.4"},{"Dataline":"85824","PlayerLinenumber":"14","ActSceneLine":"1.4.44","Player":"romeo","PlayerLine":"Nay, that\'s not so.","scene":"1.4"},{"Dataline":"85825","PlayerLinenumber":"15","ActSceneLine":"1.4.45","Player":"mercutio","PlayerLine":"I mean, sir, in delay","scene":"1.4"},{"Dataline":"85826","PlayerLinenumber":"15","ActSceneLine":"1.4.46","Player":"mercutio","PlayerLine":"We waste our lights in vain, like lamps by day.","scene":"1.4"},{"Dataline":"85827","PlayerLinenumber":"15","ActSceneLine":"1.4.47","Player":"mercutio","PlayerLine":"Take our good meaning, for our judgment sits","scene":"1.4"},{"Dataline":"85828","PlayerLinenumber":"15","ActSceneLine":"1.4.48","Player":"mercutio","PlayerLine":"Five times in that ere once in our five wits.","scene":"1.4"},{"Dataline":"85829","PlayerLinenumber":"16","ActSceneLine":"1.4.49","Player":"romeo","PlayerLine":"And we mean well in going to this mask,","scene":"1.4"},{"Dataline":"85830","PlayerLinenumber":"16","ActSceneLine":"1.4.50","Player":"romeo","PlayerLine":"But \'tis no wit to go.","scene":"1.4"},{"Dataline":"85831","PlayerLinenumber":"17","ActSceneLine":"1.4.51","Player":"mercutio","PlayerLine":"Why, may one ask?","scene":"1.4"},{"Dataline":"85832","PlayerLinenumber":"18","ActSceneLine":"1.4.52","Player":"romeo","PlayerLine":"I dream\'d a dream to-night.","scene":"1.4"},{"Dataline":"85833","PlayerLinenumber":"19","ActSceneLine":"1.4.53","Player":"mercutio","PlayerLine":"And so did I.","scene":"1.4"},{"Dataline":"85834","PlayerLinenumber":"20","ActSceneLine":"1.4.54","Player":"romeo","PlayerLine":"Well, what was yours?","scene":"1.4"},{"Dataline":"85835","PlayerLinenumber":"21","ActSceneLine":"1.4.55","Player":"mercutio","PlayerLine":"That dreamers often lie.","scene":"1.4"},{"Dataline":"85836","PlayerLinenumber":"22","ActSceneLine":"1.4.56","Player":"romeo","PlayerLine":"In bed asleep, while they do dream things true.","scene":"1.4"},{"Dataline":"85837","PlayerLinenumber":"23","ActSceneLine":"1.4.57","Player":"mercutio","PlayerLine":"O, then, I see Queen Mab hath been with you.","scene":"1.4"},{"Dataline":"85838","PlayerLinenumber":"23","ActSceneLine":"1.4.58","Player":"mercutio","PlayerLine":"She is the fairies\' midwife, and she comes","scene":"1.4"},{"Dataline":"85839","PlayerLinenumber":"23","ActSceneLine":"1.4.59","Player":"mercutio","PlayerLine":"In shape no bigger than an agate-stone","scene":"1.4"},{"Dataline":"85840","PlayerLinenumber":"23","ActSceneLine":"1.4.60","Player":"mercutio","PlayerLine":"On the fore-finger of an alderman,","scene":"1.4"},{"Dataline":"85841","PlayerLinenumber":"23","ActSceneLine":"1.4.61","Player":"mercutio","PlayerLine":"Drawn with a team of little atomies","scene":"1.4"},{"Dataline":"85842","PlayerLinenumber":"23","ActSceneLine":"1.4.62","Player":"mercutio","PlayerLine":"Athwart men\'s noses as they lie asleep,","scene":"1.4"},{"Dataline":"85843","PlayerLinenumber":"23","ActSceneLine":"1.4.63","Player":"mercutio","PlayerLine":"Her wagon-spokes made of long spiders\' legs,","scene":"1.4"},{"Dataline":"85844","PlayerLinenumber":"23","ActSceneLine":"1.4.64","Player":"mercutio","PlayerLine":"The cover of the wings of grasshoppers,","scene":"1.4"},{"Dataline":"85845","PlayerLinenumber":"23","ActSceneLine":"1.4.65","Player":"mercutio","PlayerLine":"The traces of the smallest spider\'s web,","scene":"1.4"},{"Dataline":"85846","PlayerLinenumber":"23","ActSceneLine":"1.4.66","Player":"mercutio","PlayerLine":"The collars of the moonshine\'s watery beams,","scene":"1.4"},{"Dataline":"85847","PlayerLinenumber":"23","ActSceneLine":"1.4.67","Player":"mercutio","PlayerLine":"Her whip of cricket\'s bone, the lash of film,","scene":"1.4"},{"Dataline":"85848","PlayerLinenumber":"23","ActSceneLine":"1.4.68","Player":"mercutio","PlayerLine":"Her wagoner a small grey-coated gnat,","scene":"1.4"},{"Dataline":"85849","PlayerLinenumber":"23","ActSceneLine":"1.4.69","Player":"mercutio","PlayerLine":"Not so big as a round little worm","scene":"1.4"},{"Dataline":"85850","PlayerLinenumber":"23","ActSceneLine":"1.4.70","Player":"mercutio","PlayerLine":"Prick\'d from the lazy finger of a maid,","scene":"1.4"},{"Dataline":"85851","PlayerLinenumber":"23","ActSceneLine":"1.4.71","Player":"mercutio","PlayerLine":"Her chariot is an empty hazel-nut","scene":"1.4"},{"Dataline":"85852","PlayerLinenumber":"23","ActSceneLine":"1.4.72","Player":"mercutio","PlayerLine":"Made by the joiner squirrel or old grub,","scene":"1.4"},{"Dataline":"85853","PlayerLinenumber":"23","ActSceneLine":"1.4.73","Player":"mercutio","PlayerLine":"Time out o\' mind the fairies\' coachmakers.","scene":"1.4"},{"Dataline":"85854","PlayerLinenumber":"23","ActSceneLine":"1.4.74","Player":"mercutio","PlayerLine":"And in this state she gallops night by night","scene":"1.4"},{"Dataline":"85855","PlayerLinenumber":"23","ActSceneLine":"1.4.75","Player":"mercutio","PlayerLine":"Through lovers\' brains, and then they dream of love,","scene":"1.4"},{"Dataline":"85856","PlayerLinenumber":"23","ActSceneLine":"1.4.76","Player":"mercutio","PlayerLine":"O\'er courtiers\' knees, that dream on court\'sies straight,","scene":"1.4"},{"Dataline":"85857","PlayerLinenumber":"23","ActSceneLine":"1.4.77","Player":"mercutio","PlayerLine":"O\'er lawyers\' fingers, who straight dream on fees,","scene":"1.4"},{"Dataline":"85858","PlayerLinenumber":"23","ActSceneLine":"1.4.78","Player":"mercutio","PlayerLine":"O\'er ladies \' lips, who straight on kisses dream,","scene":"1.4"},{"Dataline":"85859","PlayerLinenumber":"23","ActSceneLine":"1.4.79","Player":"mercutio","PlayerLine":"Which oft the angry Mab with blisters plagues,","scene":"1.4"},{"Dataline":"85860","PlayerLinenumber":"23","ActSceneLine":"1.4.80","Player":"mercutio","PlayerLine":"Because their breaths with sweetmeats tainted are:","scene":"1.4"},{"Dataline":"85861","PlayerLinenumber":"23","ActSceneLine":"1.4.81","Player":"mercutio","PlayerLine":"Sometime she gallops o\'er a courtier\'s nose,","scene":"1.4"},{"Dataline":"85862","PlayerLinenumber":"23","ActSceneLine":"1.4.82","Player":"mercutio","PlayerLine":"And then dreams he of smelling out a suit,","scene":"1.4"},{"Dataline":"85863","PlayerLinenumber":"23","ActSceneLine":"1.4.83","Player":"mercutio","PlayerLine":"And sometime comes she with a tithe-pig\'s tail","scene":"1.4"},{"Dataline":"85864","PlayerLinenumber":"23","ActSceneLine":"1.4.84","Player":"mercutio","PlayerLine":"Tickling a parson\'s nose as a\' lies asleep,","scene":"1.4"},{"Dataline":"85865","PlayerLinenumber":"23","ActSceneLine":"1.4.85","Player":"mercutio","PlayerLine":"Then dreams, he of another benefice:","scene":"1.4"},{"Dataline":"85866","PlayerLinenumber":"23","ActSceneLine":"1.4.86","Player":"mercutio","PlayerLine":"Sometime she driveth o\'er a soldier\'s neck,","scene":"1.4"},{"Dataline":"85867","PlayerLinenumber":"23","ActSceneLine":"1.4.87","Player":"mercutio","PlayerLine":"And then dreams he of cutting foreign throats,","scene":"1.4"},{"Dataline":"85868","PlayerLinenumber":"23","ActSceneLine":"1.4.88","Player":"mercutio","PlayerLine":"Of breaches, ambuscadoes, Spanish blades,","scene":"1.4"},{"Dataline":"85869","PlayerLinenumber":"23","ActSceneLine":"1.4.89","Player":"mercutio","PlayerLine":"Of healths five-fathom deep, and then anon","scene":"1.4"},{"Dataline":"85870","PlayerLinenumber":"23","ActSceneLine":"1.4.90","Player":"mercutio","PlayerLine":"Drums in his ear, at which he starts and wakes,","scene":"1.4"},{"Dataline":"85871","PlayerLinenumber":"23","ActSceneLine":"1.4.91","Player":"mercutio","PlayerLine":"And being thus frighted swears a prayer or two","scene":"1.4"},{"Dataline":"85872","PlayerLinenumber":"23","ActSceneLine":"1.4.92","Player":"mercutio","PlayerLine":"And sleeps again. This is that very Mab","scene":"1.4"},{"Dataline":"85873","PlayerLinenumber":"23","ActSceneLine":"1.4.93","Player":"mercutio","PlayerLine":"That plats the manes of horses in the night,","scene":"1.4"},{"Dataline":"85874","PlayerLinenumber":"23","ActSceneLine":"1.4.94","Player":"mercutio","PlayerLine":"And bakes the elflocks in foul sluttish hairs,","scene":"1.4"},{"Dataline":"85875","PlayerLinenumber":"23","ActSceneLine":"1.4.95","Player":"mercutio","PlayerLine":"Which once untangled, much misfortune bodes:","scene":"1.4"},{"Dataline":"85876","PlayerLinenumber":"23","ActSceneLine":"1.4.96","Player":"mercutio","PlayerLine":"This is the hag, when maids lie on their backs,","scene":"1.4"},{"Dataline":"85877","PlayerLinenumber":"23","ActSceneLine":"1.4.97","Player":"mercutio","PlayerLine":"That presses them and learns them first to bear,","scene":"1.4"},{"Dataline":"85878","PlayerLinenumber":"23","ActSceneLine":"1.4.98","Player":"mercutio","PlayerLine":"Making them women of good carriage:","scene":"1.4"},{"Dataline":"85879","PlayerLinenumber":"23","ActSceneLine":"1.4.99","Player":"mercutio","PlayerLine":"This is she--","scene":"1.4"},{"Dataline":"85880","PlayerLinenumber":"24","ActSceneLine":"1.4.100","Player":"romeo","PlayerLine":"Peace, peace, Mercutio, peace!","scene":"1.4"},{"Dataline":"85881","PlayerLinenumber":"24","ActSceneLine":"1.4.101","Player":"romeo","PlayerLine":"Thou talk\'st of nothing.","scene":"1.4"},{"Dataline":"85882","PlayerLinenumber":"25","ActSceneLine":"1.4.102","Player":"mercutio","PlayerLine":"True, I talk of dreams,","scene":"1.4"},{"Dataline":"85883","PlayerLinenumber":"25","ActSceneLine":"1.4.103","Player":"mercutio","PlayerLine":"Which are the children of an idle brain,","scene":"1.4"},{"Dataline":"85884","PlayerLinenumber":"25","ActSceneLine":"1.4.104","Player":"mercutio","PlayerLine":"Begot of nothing but vain fantasy,","scene":"1.4"},{"Dataline":"85885","PlayerLinenumber":"25","ActSceneLine":"1.4.105","Player":"mercutio","PlayerLine":"Which is as thin of substance as the air","scene":"1.4"},{"Dataline":"85886","PlayerLinenumber":"25","ActSceneLine":"1.4.106","Player":"mercutio","PlayerLine":"And more inconstant than the wind, who wooes","scene":"1.4"},{"Dataline":"85887","PlayerLinenumber":"25","ActSceneLine":"1.4.107","Player":"mercutio","PlayerLine":"Even now the frozen bosom of the north,","scene":"1.4"},{"Dataline":"85888","PlayerLinenumber":"25","ActSceneLine":"1.4.108","Player":"mercutio","PlayerLine":"And, being anger\'d, puffs away from thence,","scene":"1.4"},{"Dataline":"85889","PlayerLinenumber":"25","ActSceneLine":"1.4.109","Player":"mercutio","PlayerLine":"Turning his face to the dew-dropping south.","scene":"1.4"},{"Dataline":"85890","PlayerLinenumber":"26","ActSceneLine":"1.4.110","Player":"benvolio","PlayerLine":"This wind, you talk of, blows us from ourselves,","scene":"1.4"},{"Dataline":"85891","PlayerLinenumber":"26","ActSceneLine":"1.4.111","Player":"benvolio","PlayerLine":"Supper is done, and we shall come too late.","scene":"1.4"},{"Dataline":"85892","PlayerLinenumber":"27","ActSceneLine":"1.4.112","Player":"romeo","PlayerLine":"I fear, too early: for my mind misgives","scene":"1.4"},{"Dataline":"85893","PlayerLinenumber":"27","ActSceneLine":"1.4.113","Player":"romeo","PlayerLine":"Some consequence yet hanging in the stars","scene":"1.4"},{"Dataline":"85894","PlayerLinenumber":"27","ActSceneLine":"1.4.114","Player":"romeo","PlayerLine":"Shall bitterly begin his fearful date","scene":"1.4"},{"Dataline":"85895","PlayerLinenumber":"27","ActSceneLine":"1.4.115","Player":"romeo","PlayerLine":"With this night\'s revels and expire the term","scene":"1.4"},{"Dataline":"85896","PlayerLinenumber":"27","ActSceneLine":"1.4.116","Player":"romeo","PlayerLine":"Of a despised life closed in my breast","scene":"1.4"},{"Dataline":"85897","PlayerLinenumber":"27","ActSceneLine":"1.4.117","Player":"romeo","PlayerLine":"By some vile forfeit of untimely death.","scene":"1.4"},{"Dataline":"85898","PlayerLinenumber":"27","ActSceneLine":"1.4.118","Player":"romeo","PlayerLine":"But He, that hath the steerage of my course,","scene":"1.4"},{"Dataline":"85899","PlayerLinenumber":"27","ActSceneLine":"1.4.119","Player":"romeo","PlayerLine":"Direct my sail! On, lusty gentlemen.","scene":"1.4"},{"Dataline":"85900","PlayerLinenumber":"28","ActSceneLine":"1.4.120","Player":"benvolio","PlayerLine":"Strike, drum.","scene":"1.4"},{"Dataline":"85904","PlayerLinenumber":"1","ActSceneLine":"1.5.1","Player":"first_servant","PlayerLine":"Where\'s Potpan, that he helps not to take away? He","scene":"1.5"},{"Dataline":"85905","PlayerLinenumber":"1","ActSceneLine":"1.5.2","Player":"first_servant","PlayerLine":"shift a trencher? he scrape a trencher!","scene":"1.5"},{"Dataline":"85906","PlayerLinenumber":"2","ActSceneLine":"1.5.3","Player":"second_servant","PlayerLine":"When good manners shall lie all in one or two men\'s","scene":"1.5"},{"Dataline":"85907","PlayerLinenumber":"2","ActSceneLine":"1.5.4","Player":"second_servant","PlayerLine":"hands and they unwashed too, \'tis a foul thing.","scene":"1.5"},{"Dataline":"85908","PlayerLinenumber":"3","ActSceneLine":"1.5.5","Player":"first_servant","PlayerLine":"Away with the joint-stools, remove the","scene":"1.5"},{"Dataline":"85909","PlayerLinenumber":"3","ActSceneLine":"1.5.6","Player":"first_servant","PlayerLine":"court-cupboard, look to the plate. Good thou, save","scene":"1.5"},{"Dataline":"85910","PlayerLinenumber":"3","ActSceneLine":"1.5.7","Player":"first_servant","PlayerLine":"me a piece of marchpane, and, as thou lovest me, let","scene":"1.5"},{"Dataline":"85911","PlayerLinenumber":"3","ActSceneLine":"1.5.8","Player":"first_servant","PlayerLine":"the porter let in Susan Grindstone and Nell.","scene":"1.5"},{"Dataline":"85912","PlayerLinenumber":"3","ActSceneLine":"1.5.9","Player":"first_servant","PlayerLine":"Antony, and Potpan!","scene":"1.5"},{"Dataline":"85913","PlayerLinenumber":"4","ActSceneLine":"1.5.10","Player":"second_servant","PlayerLine":"Ay, boy, ready.","scene":"1.5"},{"Dataline":"85914","PlayerLinenumber":"5","ActSceneLine":"1.5.11","Player":"first_servant","PlayerLine":"You are looked for and called for, asked for and","scene":"1.5"},{"Dataline":"85915","PlayerLinenumber":"5","ActSceneLine":"1.5.12","Player":"first_servant","PlayerLine":"sought for, in the great chamber.","scene":"1.5"},{"Dataline":"85916","PlayerLinenumber":"6","ActSceneLine":"1.5.13","Player":"second_servant","PlayerLine":"We cannot be here and there too. Cheerly, boys, be","scene":"1.5"},{"Dataline":"85917","PlayerLinenumber":"6","ActSceneLine":"1.5.14","Player":"second_servant","PlayerLine":"brisk awhile, and the longer liver take all.","scene":"1.5"},{"Dataline":"85919","PlayerLinenumber":"7","ActSceneLine":"1.5.15","Player":"capulet","PlayerLine":"Welcome, gentlemen! ladies that have their toes","scene":"1.5"},{"Dataline":"85920","PlayerLinenumber":"7","ActSceneLine":"1.5.16","Player":"capulet","PlayerLine":"Unplagued with corns will have a bout with you.","scene":"1.5"},{"Dataline":"85921","PlayerLinenumber":"7","ActSceneLine":"1.5.17","Player":"capulet","PlayerLine":"Ah ha, my mistresses! which of you all","scene":"1.5"},{"Dataline":"85922","PlayerLinenumber":"7","ActSceneLine":"1.5.18","Player":"capulet","PlayerLine":"Will now deny to dance? she that makes dainty,","scene":"1.5"},{"Dataline":"85923","PlayerLinenumber":"7","ActSceneLine":"1.5.19","Player":"capulet","PlayerLine":"She, I\'ll swear, hath corns, am I come near ye now?","scene":"1.5"},{"Dataline":"85924","PlayerLinenumber":"7","ActSceneLine":"1.5.20","Player":"capulet","PlayerLine":"Welcome, gentlemen! I have seen the day","scene":"1.5"},{"Dataline":"85925","PlayerLinenumber":"7","ActSceneLine":"1.5.21","Player":"capulet","PlayerLine":"That I have worn a visor and could tell","scene":"1.5"},{"Dataline":"85926","PlayerLinenumber":"7","ActSceneLine":"1.5.22","Player":"capulet","PlayerLine":"A whispering tale in a fair lady\'s ear,","scene":"1.5"},{"Dataline":"85927","PlayerLinenumber":"7","ActSceneLine":"1.5.23","Player":"capulet","PlayerLine":"Such as would please: \'tis gone, \'tis gone, \'tis gone:","scene":"1.5"},{"Dataline":"85928","PlayerLinenumber":"7","ActSceneLine":"1.5.24","Player":"capulet","PlayerLine":"You are welcome, gentlemen! come, musicians, play.","scene":"1.5"},{"Dataline":"85929","PlayerLinenumber":"7","ActSceneLine":"1.5.25","Player":"capulet","PlayerLine":"A hall, a hall! give room! and foot it, girls.","scene":"1.5"},{"Dataline":"85931","PlayerLinenumber":"7","ActSceneLine":"1.5.26","Player":"capulet","PlayerLine":"More light, you knaves, and turn the tables up,","scene":"1.5"},{"Dataline":"85932","PlayerLinenumber":"7","ActSceneLine":"1.5.27","Player":"capulet","PlayerLine":"And quench the fire, the room is grown too hot.","scene":"1.5"},{"Dataline":"85933","PlayerLinenumber":"7","ActSceneLine":"1.5.28","Player":"capulet","PlayerLine":"Ah, sirrah, this unlook\'d-for sport comes well.","scene":"1.5"},{"Dataline":"85934","PlayerLinenumber":"7","ActSceneLine":"1.5.29","Player":"capulet","PlayerLine":"Nay, sit, nay, sit, good cousin Capulet,","scene":"1.5"},{"Dataline":"85935","PlayerLinenumber":"7","ActSceneLine":"1.5.30","Player":"capulet","PlayerLine":"For you and I are past our dancing days:","scene":"1.5"},{"Dataline":"85936","PlayerLinenumber":"7","ActSceneLine":"1.5.31","Player":"capulet","PlayerLine":"How long is\'t now since last yourself and I","scene":"1.5"},{"Dataline":"85937","PlayerLinenumber":"7","ActSceneLine":"1.5.32","Player":"capulet","PlayerLine":"Were in a mask?","scene":"1.5"},{"Dataline":"85938","PlayerLinenumber":"8","ActSceneLine":"1.5.33","Player":"second_capulet","PlayerLine":"By\'r lady, thirty years.","scene":"1.5"},{"Dataline":"85939","PlayerLinenumber":"9","ActSceneLine":"1.5.34","Player":"capulet","PlayerLine":"What, man! \'tis not so much, \'tis not so much:","scene":"1.5"},{"Dataline":"85940","PlayerLinenumber":"9","ActSceneLine":"1.5.35","Player":"capulet","PlayerLine":"\'Tis since the nuptials of Lucentio,","scene":"1.5"},{"Dataline":"85941","PlayerLinenumber":"9","ActSceneLine":"1.5.36","Player":"capulet","PlayerLine":"Come pentecost as quickly as it will,","scene":"1.5"},{"Dataline":"85942","PlayerLinenumber":"9","ActSceneLine":"1.5.37","Player":"capulet","PlayerLine":"Some five and twenty years, and then we mask\'d.","scene":"1.5"},{"Dataline":"85943","PlayerLinenumber":"10","ActSceneLine":"1.5.38","Player":"second_capulet","PlayerLine":"\'Tis more, \'tis more, his son is elder, sir,","scene":"1.5"},{"Dataline":"85944","PlayerLinenumber":"10","ActSceneLine":"1.5.39","Player":"second_capulet","PlayerLine":"His son is thirty.","scene":"1.5"},{"Dataline":"85945","PlayerLinenumber":"11","ActSceneLine":"1.5.40","Player":"capulet","PlayerLine":"Will you tell me that?","scene":"1.5"},{"Dataline":"85946","PlayerLinenumber":"11","ActSceneLine":"1.5.41","Player":"capulet","PlayerLine":"His son was but a ward two years ago.","scene":"1.5"},{"Dataline":"85947","PlayerLinenumber":"12","ActSceneLine":"1.5.42","Player":"romeo","PlayerLine":"[To a Servingman]  What lady is that, which doth","scene":"1.5"},{"Dataline":"85948","PlayerLinenumber":"12","ActSceneLine":"1.5.43","Player":"romeo","PlayerLine":"enrich the hand","scene":"1.5"},{"Dataline":"85949","PlayerLinenumber":"12","ActSceneLine":"1.5.44","Player":"romeo","PlayerLine":"Of yonder knight?","scene":"1.5"},{"Dataline":"85950","PlayerLinenumber":"13","ActSceneLine":"1.5.45","Player":"servant","PlayerLine":"I know not, sir.","scene":"1.5"},{"Dataline":"85951","PlayerLinenumber":"14","ActSceneLine":"1.5.46","Player":"romeo","PlayerLine":"O, she doth teach the torches to burn bright!","scene":"1.5"},{"Dataline":"85952","PlayerLinenumber":"14","ActSceneLine":"1.5.47","Player":"romeo","PlayerLine":"It seems she hangs upon the cheek of night","scene":"1.5"},{"Dataline":"85953","PlayerLinenumber":"14","ActSceneLine":"1.5.48","Player":"romeo","PlayerLine":"Like a rich jewel in an Ethiope\'s ear,","scene":"1.5"},{"Dataline":"85954","PlayerLinenumber":"14","ActSceneLine":"1.5.49","Player":"romeo","PlayerLine":"Beauty too rich for use, for earth too dear!","scene":"1.5"},{"Dataline":"85955","PlayerLinenumber":"14","ActSceneLine":"1.5.50","Player":"romeo","PlayerLine":"So shows a snowy dove trooping with crows,","scene":"1.5"},{"Dataline":"85956","PlayerLinenumber":"14","ActSceneLine":"1.5.51","Player":"romeo","PlayerLine":"As yonder lady o\'er her fellows shows.","scene":"1.5"},{"Dataline":"85957","PlayerLinenumber":"14","ActSceneLine":"1.5.52","Player":"romeo","PlayerLine":"The measure done, I\'ll watch her place of stand,","scene":"1.5"},{"Dataline":"85958","PlayerLinenumber":"14","ActSceneLine":"1.5.53","Player":"romeo","PlayerLine":"And, touching hers, make blessed my rude hand.","scene":"1.5"},{"Dataline":"85959","PlayerLinenumber":"14","ActSceneLine":"1.5.54","Player":"romeo","PlayerLine":"Did my heart love till now? forswear it, sight!","scene":"1.5"},{"Dataline":"85960","PlayerLinenumber":"14","ActSceneLine":"1.5.55","Player":"romeo","PlayerLine":"For I ne\'er saw true beauty till this night.","scene":"1.5"},{"Dataline":"85961","PlayerLinenumber":"15","ActSceneLine":"1.5.56","Player":"tybalt","PlayerLine":"This, by his voice, should be a Montague.","scene":"1.5"},{"Dataline":"85962","PlayerLinenumber":"15","ActSceneLine":"1.5.57","Player":"tybalt","PlayerLine":"Fetch me my rapier, boy. What dares the slave","scene":"1.5"},{"Dataline":"85963","PlayerLinenumber":"15","ActSceneLine":"1.5.58","Player":"tybalt","PlayerLine":"Come hither, cover\'d with an antic face,","scene":"1.5"},{"Dataline":"85964","PlayerLinenumber":"15","ActSceneLine":"1.5.59","Player":"tybalt","PlayerLine":"To fleer and scorn at our solemnity?","scene":"1.5"},{"Dataline":"85965","PlayerLinenumber":"15","ActSceneLine":"1.5.60","Player":"tybalt","PlayerLine":"Now, by the stock and honour of my kin,","scene":"1.5"},{"Dataline":"85966","PlayerLinenumber":"15","ActSceneLine":"1.5.61","Player":"tybalt","PlayerLine":"To strike him dead, I hold it not a sin.","scene":"1.5"},{"Dataline":"85967","PlayerLinenumber":"16","ActSceneLine":"1.5.62","Player":"capulet","PlayerLine":"Why, how now, kinsman! wherefore storm you so?","scene":"1.5"},{"Dataline":"85968","PlayerLinenumber":"17","ActSceneLine":"1.5.63","Player":"tybalt","PlayerLine":"Uncle, this is a Montague, our foe,","scene":"1.5"},{"Dataline":"85969","PlayerLinenumber":"17","ActSceneLine":"1.5.64","Player":"tybalt","PlayerLine":"A villain that is hither come in spite,","scene":"1.5"},{"Dataline":"85970","PlayerLinenumber":"17","ActSceneLine":"1.5.65","Player":"tybalt","PlayerLine":"To scorn at our solemnity this night.","scene":"1.5"},{"Dataline":"85971","PlayerLinenumber":"18","ActSceneLine":"1.5.66","Player":"capulet","PlayerLine":"Young Romeo is it?","scene":"1.5"},{"Dataline":"85972","PlayerLinenumber":"19","ActSceneLine":"1.5.67","Player":"tybalt","PlayerLine":"\'Tis he, that villain Romeo.","scene":"1.5"},{"Dataline":"85973","PlayerLinenumber":"20","ActSceneLine":"1.5.68","Player":"capulet","PlayerLine":"Content thee, gentle coz, let him alone,","scene":"1.5"},{"Dataline":"85974","PlayerLinenumber":"20","ActSceneLine":"1.5.69","Player":"capulet","PlayerLine":"He bears him like a portly gentleman,","scene":"1.5"},{"Dataline":"85975","PlayerLinenumber":"20","ActSceneLine":"1.5.70","Player":"capulet","PlayerLine":"And, to say truth, Verona brags of him","scene":"1.5"},{"Dataline":"85976","PlayerLinenumber":"20","ActSceneLine":"1.5.71","Player":"capulet","PlayerLine":"To be a virtuous and well-govern\'d youth:","scene":"1.5"},{"Dataline":"85977","PlayerLinenumber":"20","ActSceneLine":"1.5.72","Player":"capulet","PlayerLine":"I would not for the wealth of all the town","scene":"1.5"},{"Dataline":"85978","PlayerLinenumber":"20","ActSceneLine":"1.5.73","Player":"capulet","PlayerLine":"Here in my house do him disparagement:","scene":"1.5"},{"Dataline":"85979","PlayerLinenumber":"20","ActSceneLine":"1.5.74","Player":"capulet","PlayerLine":"Therefore be patient, take no note of him:","scene":"1.5"},{"Dataline":"85980","PlayerLinenumber":"20","ActSceneLine":"1.5.75","Player":"capulet","PlayerLine":"It is my will, the which if thou respect,","scene":"1.5"},{"Dataline":"85981","PlayerLinenumber":"20","ActSceneLine":"1.5.76","Player":"capulet","PlayerLine":"Show a fair presence and put off these frowns,","scene":"1.5"},{"Dataline":"85982","PlayerLinenumber":"20","ActSceneLine":"1.5.77","Player":"capulet","PlayerLine":"And ill-beseeming semblance for a feast.","scene":"1.5"},{"Dataline":"85983","PlayerLinenumber":"21","ActSceneLine":"1.5.78","Player":"tybalt","PlayerLine":"It fits, when such a villain is a guest:","scene":"1.5"},{"Dataline":"85984","PlayerLinenumber":"21","ActSceneLine":"1.5.79","Player":"tybalt","PlayerLine":"I\'ll not endure him.","scene":"1.5"},{"Dataline":"85985","PlayerLinenumber":"22","ActSceneLine":"1.5.80","Player":"capulet","PlayerLine":"He shall be endured:","scene":"1.5"},{"Dataline":"85986","PlayerLinenumber":"22","ActSceneLine":"1.5.81","Player":"capulet","PlayerLine":"What, goodman boy! I say, he shall: go to,","scene":"1.5"},{"Dataline":"85987","PlayerLinenumber":"22","ActSceneLine":"1.5.82","Player":"capulet","PlayerLine":"Am I the master here, or you? go to.","scene":"1.5"},{"Dataline":"85988","PlayerLinenumber":"22","ActSceneLine":"1.5.83","Player":"capulet","PlayerLine":"You\'ll not endure him! God shall mend my soul!","scene":"1.5"},{"Dataline":"85989","PlayerLinenumber":"22","ActSceneLine":"1.5.84","Player":"capulet","PlayerLine":"You\'ll make a mutiny among my guests!","scene":"1.5"},{"Dataline":"85990","PlayerLinenumber":"22","ActSceneLine":"1.5.85","Player":"capulet","PlayerLine":"You will set cock-a-hoop! you\'ll be the man!","scene":"1.5"},{"Dataline":"85991","PlayerLinenumber":"23","ActSceneLine":"1.5.86","Player":"tybalt","PlayerLine":"Why, uncle, \'tis a shame.","scene":"1.5"},{"Dataline":"85992","PlayerLinenumber":"24","ActSceneLine":"1.5.87","Player":"capulet","PlayerLine":"Go to, go to,","scene":"1.5"},{"Dataline":"85993","PlayerLinenumber":"24","ActSceneLine":"1.5.88","Player":"capulet","PlayerLine":"You are a saucy boy: is\'t so, indeed?","scene":"1.5"},{"Dataline":"85994","PlayerLinenumber":"24","ActSceneLine":"1.5.89","Player":"capulet","PlayerLine":"This trick may chance to scathe you, I know what:","scene":"1.5"},{"Dataline":"85995","PlayerLinenumber":"24","ActSceneLine":"1.5.90","Player":"capulet","PlayerLine":"You must contrary me! marry, \'tis time.","scene":"1.5"},{"Dataline":"85996","PlayerLinenumber":"24","ActSceneLine":"1.5.91","Player":"capulet","PlayerLine":"Well said, my hearts! You are a princox, go:","scene":"1.5"},{"Dataline":"85997","PlayerLinenumber":"24","ActSceneLine":"1.5.92","Player":"capulet","PlayerLine":"Be quiet, or--More light, more light! For shame!","scene":"1.5"},{"Dataline":"85998","PlayerLinenumber":"24","ActSceneLine":"1.5.93","Player":"capulet","PlayerLine":"I\'ll make you quiet. What, cheerly, my hearts!","scene":"1.5"},{"Dataline":"85999","PlayerLinenumber":"25","ActSceneLine":"1.5.94","Player":"tybalt","PlayerLine":"Patience perforce with wilful choler meeting","scene":"1.5"},{"Dataline":"86000","PlayerLinenumber":"25","ActSceneLine":"1.5.95","Player":"tybalt","PlayerLine":"Makes my flesh tremble in their different greeting.","scene":"1.5"},{"Dataline":"86001","PlayerLinenumber":"25","ActSceneLine":"1.5.96","Player":"tybalt","PlayerLine":"I will withdraw: but this intrusion shall","scene":"1.5"},{"Dataline":"86002","PlayerLinenumber":"25","ActSceneLine":"1.5.97","Player":"tybalt","PlayerLine":"Now seeming sweet convert to bitter gall.","scene":"1.5"},{"Dataline":"86004","PlayerLinenumber":"26","ActSceneLine":"1.5.98","Player":"romeo","PlayerLine":"[To JULIET]  If I profane with my unworthiest hand","scene":"1.5"},{"Dataline":"86005","PlayerLinenumber":"26","ActSceneLine":"1.5.99","Player":"romeo","PlayerLine":"This holy shrine, the gentle fine is this:","scene":"1.5"},{"Dataline":"86006","PlayerLinenumber":"26","ActSceneLine":"1.5.100","Player":"romeo","PlayerLine":"My lips, two blushing pilgrims, ready stand","scene":"1.5"},{"Dataline":"86007","PlayerLinenumber":"26","ActSceneLine":"1.5.101","Player":"romeo","PlayerLine":"To smooth that rough touch with a tender kiss.","scene":"1.5"},{"Dataline":"86008","PlayerLinenumber":"27","ActSceneLine":"1.5.102","Player":"juliet","PlayerLine":"Good pilgrim, you do wrong your hand too much,","scene":"1.5"},{"Dataline":"86009","PlayerLinenumber":"27","ActSceneLine":"1.5.103","Player":"juliet","PlayerLine":"Which mannerly devotion shows in this,","scene":"1.5"},{"Dataline":"86010","PlayerLinenumber":"27","ActSceneLine":"1.5.104","Player":"juliet","PlayerLine":"For saints have hands that pilgrims\' hands do touch,","scene":"1.5"},{"Dataline":"86011","PlayerLinenumber":"27","ActSceneLine":"1.5.105","Player":"juliet","PlayerLine":"And palm to palm is holy palmers\' kiss.","scene":"1.5"},{"Dataline":"86012","PlayerLinenumber":"28","ActSceneLine":"1.5.106","Player":"romeo","PlayerLine":"Have not saints lips, and holy palmers too?","scene":"1.5"},{"Dataline":"86013","PlayerLinenumber":"29","ActSceneLine":"1.5.107","Player":"juliet","PlayerLine":"Ay, pilgrim, lips that they must use in prayer.","scene":"1.5"},{"Dataline":"86014","PlayerLinenumber":"30","ActSceneLine":"1.5.108","Player":"romeo","PlayerLine":"O, then, dear saint, let lips do what hands do,","scene":"1.5"},{"Dataline":"86015","PlayerLinenumber":"30","ActSceneLine":"1.5.109","Player":"romeo","PlayerLine":"They pray, grant thou, lest faith turn to despair.","scene":"1.5"},{"Dataline":"86016","PlayerLinenumber":"31","ActSceneLine":"1.5.110","Player":"juliet","PlayerLine":"Saints do not move, though grant for prayers\' sake.","scene":"1.5"},{"Dataline":"86017","PlayerLinenumber":"32","ActSceneLine":"1.5.111","Player":"romeo","PlayerLine":"Then move not, while my prayer\'s effect I take.","scene":"1.5"},{"Dataline":"86018","PlayerLinenumber":"32","ActSceneLine":"1.5.112","Player":"romeo","PlayerLine":"Thus from my lips, by yours, my sin is purged.","scene":"1.5"},{"Dataline":"86019","PlayerLinenumber":"33","ActSceneLine":"1.5.113","Player":"juliet","PlayerLine":"Then have my lips the sin that they have took.","scene":"1.5"},{"Dataline":"86020","PlayerLinenumber":"34","ActSceneLine":"1.5.114","Player":"romeo","PlayerLine":"Sin from thy lips? O trespass sweetly urged!","scene":"1.5"},{"Dataline":"86021","PlayerLinenumber":"34","ActSceneLine":"1.5.115","Player":"romeo","PlayerLine":"Give me my sin again.","scene":"1.5"},{"Dataline":"86022","PlayerLinenumber":"35","ActSceneLine":"1.5.116","Player":"juliet","PlayerLine":"You kiss by the book.","scene":"1.5"},{"Dataline":"86023","PlayerLinenumber":"36","ActSceneLine":"1.5.117","Player":"nurse","PlayerLine":"Madam, your mother craves a word with you.","scene":"1.5"},{"Dataline":"86024","PlayerLinenumber":"37","ActSceneLine":"1.5.118","Player":"romeo","PlayerLine":"What is her mother?","scene":"1.5"},{"Dataline":"86025","PlayerLinenumber":"38","ActSceneLine":"1.5.119","Player":"nurse","PlayerLine":"Marry, bachelor,","scene":"1.5"},{"Dataline":"86026","PlayerLinenumber":"38","ActSceneLine":"1.5.120","Player":"nurse","PlayerLine":"Her mother is the lady of the house,","scene":"1.5"},{"Dataline":"86027","PlayerLinenumber":"38","ActSceneLine":"1.5.121","Player":"nurse","PlayerLine":"And a good lady, and a wise and virtuous","scene":"1.5"},{"Dataline":"86028","PlayerLinenumber":"38","ActSceneLine":"1.5.122","Player":"nurse","PlayerLine":"I nursed her daughter, that you talk\'d withal,","scene":"1.5"},{"Dataline":"86029","PlayerLinenumber":"38","ActSceneLine":"1.5.123","Player":"nurse","PlayerLine":"I tell you, he that can lay hold of her","scene":"1.5"},{"Dataline":"86030","PlayerLinenumber":"38","ActSceneLine":"1.5.124","Player":"nurse","PlayerLine":"Shall have the chinks.","scene":"1.5"},{"Dataline":"86031","PlayerLinenumber":"39","ActSceneLine":"1.5.125","Player":"romeo","PlayerLine":"Is she a Capulet?","scene":"1.5"},{"Dataline":"86032","PlayerLinenumber":"39","ActSceneLine":"1.5.126","Player":"romeo","PlayerLine":"O dear account! my life is my foe\'s debt.","scene":"1.5"},{"Dataline":"86033","PlayerLinenumber":"40","ActSceneLine":"1.5.127","Player":"benvolio","PlayerLine":"Away, begone, the sport is at the best.","scene":"1.5"},{"Dataline":"86034","PlayerLinenumber":"41","ActSceneLine":"1.5.128","Player":"romeo","PlayerLine":"Ay, so I fear, the more is my unrest.","scene":"1.5"},{"Dataline":"86035","PlayerLinenumber":"42","ActSceneLine":"1.5.129","Player":"capulet","PlayerLine":"Nay, gentlemen, prepare not to be gone,","scene":"1.5"},{"Dataline":"86036","PlayerLinenumber":"42","ActSceneLine":"1.5.130","Player":"capulet","PlayerLine":"We have a trifling foolish banquet towards.","scene":"1.5"},{"Dataline":"86037","PlayerLinenumber":"42","ActSceneLine":"1.5.131","Player":"capulet","PlayerLine":"Is it e\'en so? why, then, I thank you all","scene":"1.5"},{"Dataline":"86038","PlayerLinenumber":"42","ActSceneLine":"1.5.132","Player":"capulet","PlayerLine":"I thank you, honest gentlemen, good night.","scene":"1.5"},{"Dataline":"86039","PlayerLinenumber":"42","ActSceneLine":"1.5.133","Player":"capulet","PlayerLine":"More torches here! Come on then, let\'s to bed.","scene":"1.5"},{"Dataline":"86040","PlayerLinenumber":"42","ActSceneLine":"1.5.134","Player":"capulet","PlayerLine":"Ah, sirrah, by my fay, it waxes late:","scene":"1.5"},{"Dataline":"86041","PlayerLinenumber":"42","ActSceneLine":"1.5.135","Player":"capulet","PlayerLine":"I\'ll to my rest.","scene":"1.5"},{"Dataline":"86043","PlayerLinenumber":"43","ActSceneLine":"1.5.136","Player":"juliet","PlayerLine":"Come hither, nurse. What is yond gentleman?","scene":"1.5"},{"Dataline":"86044","PlayerLinenumber":"44","ActSceneLine":"1.5.137","Player":"nurse","PlayerLine":"The son and heir of old Tiberio.","scene":"1.5"},{"Dataline":"86045","PlayerLinenumber":"45","ActSceneLine":"1.5.138","Player":"juliet","PlayerLine":"What\'s he that now is going out of door?","scene":"1.5"},{"Dataline":"86046","PlayerLinenumber":"46","ActSceneLine":"1.5.139","Player":"nurse","PlayerLine":"Marry, that, I think, be young Petrucio.","scene":"1.5"},{"Dataline":"86047","PlayerLinenumber":"47","ActSceneLine":"1.5.140","Player":"juliet","PlayerLine":"What\'s he that follows there, that would not dance?","scene":"1.5"},{"Dataline":"86048","PlayerLinenumber":"48","ActSceneLine":"1.5.141","Player":"nurse","PlayerLine":"I know not.","scene":"1.5"},{"Dataline":"86049","PlayerLinenumber":"49","ActSceneLine":"1.5.142","Player":"juliet","PlayerLine":"Go ask his name: if he be married.","scene":"1.5"},{"Dataline":"86050","PlayerLinenumber":"49","ActSceneLine":"1.5.143","Player":"juliet","PlayerLine":"My grave is like to be my wedding bed.","scene":"1.5"},{"Dataline":"86051","PlayerLinenumber":"50","ActSceneLine":"1.5.144","Player":"nurse","PlayerLine":"His name is Romeo, and a Montague,","scene":"1.5"},{"Dataline":"86052","PlayerLinenumber":"50","ActSceneLine":"1.5.145","Player":"nurse","PlayerLine":"The only son of your great enemy.","scene":"1.5"},{"Dataline":"86053","PlayerLinenumber":"51","ActSceneLine":"1.5.146","Player":"juliet","PlayerLine":"My only love sprung from my only hate!","scene":"1.5"},{"Dataline":"86054","PlayerLinenumber":"51","ActSceneLine":"1.5.147","Player":"juliet","PlayerLine":"Too early seen unknown, and known too late!","scene":"1.5"},{"Dataline":"86055","PlayerLinenumber":"51","ActSceneLine":"1.5.148","Player":"juliet","PlayerLine":"Prodigious birth of love it is to me,","scene":"1.5"},{"Dataline":"86056","PlayerLinenumber":"51","ActSceneLine":"1.5.149","Player":"juliet","PlayerLine":"That I must love a loathed enemy.","scene":"1.5"},{"Dataline":"86057","PlayerLinenumber":"52","ActSceneLine":"1.5.150","Player":"nurse","PlayerLine":"What\'s this? what\'s this?","scene":"1.5"},{"Dataline":"86058","PlayerLinenumber":"53","ActSceneLine":"1.5.151","Player":"juliet","PlayerLine":"A rhyme I learn\'d even now","scene":"1.5"},{"Dataline":"86059","PlayerLinenumber":"53","ActSceneLine":"1.5.152","Player":"juliet","PlayerLine":"Of one I danced withal.","scene":"1.5"},{"Dataline":"86061","PlayerLinenumber":"54","ActSceneLine":"1.5.153","Player":"nurse","PlayerLine":"Anon, anon!","scene":"1.5"},{"Dataline":"86062","PlayerLinenumber":"54","ActSceneLine":"1.5.154","Player":"nurse","PlayerLine":"Come, let\'s away, the strangers all are gone.","scene":"1.5"},{"Dataline":"86067","PlayerLinenumber":"1","ActSceneLine":"2.0.1","Player":"chorus","PlayerLine":"Now old desire doth in his death-bed lie,","scene":"2.0"},{"Dataline":"86068","PlayerLinenumber":"1","ActSceneLine":"2.0.2","Player":"chorus","PlayerLine":"And young affection gapes to be his heir,","scene":"2.0"},{"Dataline":"86069","PlayerLinenumber":"1","ActSceneLine":"2.0.3","Player":"chorus","PlayerLine":"That fair for which love groan\'d for and would die,","scene":"2.0"},{"Dataline":"86070","PlayerLinenumber":"1","ActSceneLine":"2.0.4","Player":"chorus","PlayerLine":"With tender Juliet match\'d, is now not fair.","scene":"2.0"},{"Dataline":"86071","PlayerLinenumber":"1","ActSceneLine":"2.0.5","Player":"chorus","PlayerLine":"Now Romeo is beloved and loves again,","scene":"2.0"},{"Dataline":"86072","PlayerLinenumber":"1","ActSceneLine":"2.0.6","Player":"chorus","PlayerLine":"Alike betwitched by the charm of looks,","scene":"2.0"},{"Dataline":"86073","PlayerLinenumber":"1","ActSceneLine":"2.0.7","Player":"chorus","PlayerLine":"But to his foe supposed he must complain,","scene":"2.0"},{"Dataline":"86074","PlayerLinenumber":"1","ActSceneLine":"2.0.8","Player":"chorus","PlayerLine":"And she steal love\'s sweet bait from fearful hooks:","scene":"2.0"},{"Dataline":"86075","PlayerLinenumber":"1","ActSceneLine":"2.0.9","Player":"chorus","PlayerLine":"Being held a foe, he may not have access","scene":"2.0"},{"Dataline":"86076","PlayerLinenumber":"1","ActSceneLine":"2.0.10","Player":"chorus","PlayerLine":"To breathe such vows as lovers use to swear,","scene":"2.0"},{"Dataline":"86077","PlayerLinenumber":"1","ActSceneLine":"2.0.11","Player":"chorus","PlayerLine":"And she as much in love, her means much less","scene":"2.0"},{"Dataline":"86078","PlayerLinenumber":"1","ActSceneLine":"2.0.12","Player":"chorus","PlayerLine":"To meet her new-beloved any where:","scene":"2.0"},{"Dataline":"86079","PlayerLinenumber":"1","ActSceneLine":"2.0.13","Player":"chorus","PlayerLine":"But passion lends them power, time means, to meet","scene":"2.0"},{"Dataline":"86080","PlayerLinenumber":"1","ActSceneLine":"2.0.14","Player":"chorus","PlayerLine":"Tempering extremities with extreme sweet.","scene":"2.0"},{"Dataline":"86084","PlayerLinenumber":"1","ActSceneLine":"2.1.1","Player":"romeo","PlayerLine":"Can I go forward when my heart is here?","scene":"2.1"},{"Dataline":"86085","PlayerLinenumber":"1","ActSceneLine":"2.1.2","Player":"romeo","PlayerLine":"Turn back, dull earth, and find thy centre out.","scene":"2.1"},{"Dataline":"86088","PlayerLinenumber":"2","ActSceneLine":"2.1.3","Player":"benvolio","PlayerLine":"Romeo! my cousin Romeo!","scene":"2.1"},{"Dataline":"86089","PlayerLinenumber":"3","ActSceneLine":"2.1.4","Player":"mercutio","PlayerLine":"He is wise,","scene":"2.1"},{"Dataline":"86090","PlayerLinenumber":"3","ActSceneLine":"2.1.5","Player":"mercutio","PlayerLine":"And, on my lie, hath stol\'n him home to bed.","scene":"2.1"},{"Dataline":"86091","PlayerLinenumber":"4","ActSceneLine":"2.1.6","Player":"benvolio","PlayerLine":"He ran this way, and leap\'d this orchard wall:","scene":"2.1"},{"Dataline":"86092","PlayerLinenumber":"4","ActSceneLine":"2.1.7","Player":"benvolio","PlayerLine":"Call, good Mercutio.","scene":"2.1"},{"Dataline":"86093","PlayerLinenumber":"5","ActSceneLine":"2.1.8","Player":"mercutio","PlayerLine":"Nay, I\'ll conjure too.","scene":"2.1"},{"Dataline":"86094","PlayerLinenumber":"5","ActSceneLine":"2.1.9","Player":"mercutio","PlayerLine":"Romeo! humours! madman! passion! lover!","scene":"2.1"},{"Dataline":"86095","PlayerLinenumber":"5","ActSceneLine":"2.1.10","Player":"mercutio","PlayerLine":"Appear thou in the likeness of a sigh:","scene":"2.1"},{"Dataline":"86096","PlayerLinenumber":"5","ActSceneLine":"2.1.11","Player":"mercutio","PlayerLine":"Speak but one rhyme, and I am satisfied,","scene":"2.1"},{"Dataline":"86097","PlayerLinenumber":"5","ActSceneLine":"2.1.12","Player":"mercutio","PlayerLine":"Cry but \'Ay me!\' pronounce but \'love\' and \'dove,\'","scene":"2.1"},{"Dataline":"86098","PlayerLinenumber":"5","ActSceneLine":"2.1.13","Player":"mercutio","PlayerLine":"Speak to my gossip Venus one fair word,","scene":"2.1"},{"Dataline":"86099","PlayerLinenumber":"5","ActSceneLine":"2.1.14","Player":"mercutio","PlayerLine":"One nick-name for her purblind son and heir,","scene":"2.1"},{"Dataline":"86100","PlayerLinenumber":"5","ActSceneLine":"2.1.15","Player":"mercutio","PlayerLine":"Young Adam Cupid, he that shot so trim,","scene":"2.1"},{"Dataline":"86101","PlayerLinenumber":"5","ActSceneLine":"2.1.16","Player":"mercutio","PlayerLine":"When King Cophetua loved the beggar-maid!","scene":"2.1"},{"Dataline":"86102","PlayerLinenumber":"5","ActSceneLine":"2.1.17","Player":"mercutio","PlayerLine":"He heareth not, he stirreth not, he moveth not,","scene":"2.1"},{"Dataline":"86103","PlayerLinenumber":"5","ActSceneLine":"2.1.18","Player":"mercutio","PlayerLine":"The ape is dead, and I must conjure him.","scene":"2.1"},{"Dataline":"86104","PlayerLinenumber":"5","ActSceneLine":"2.1.19","Player":"mercutio","PlayerLine":"I conjure thee by Rosaline\'s bright eyes,","scene":"2.1"},{"Dataline":"86105","PlayerLinenumber":"5","ActSceneLine":"2.1.20","Player":"mercutio","PlayerLine":"By her high forehead and her scarlet lip,","scene":"2.1"},{"Dataline":"86106","PlayerLinenumber":"5","ActSceneLine":"2.1.21","Player":"mercutio","PlayerLine":"By her fine foot, straight leg and quivering thigh","scene":"2.1"},{"Dataline":"86107","PlayerLinenumber":"5","ActSceneLine":"2.1.22","Player":"mercutio","PlayerLine":"And the demesnes that there adjacent lie,","scene":"2.1"},{"Dataline":"86108","PlayerLinenumber":"5","ActSceneLine":"2.1.23","Player":"mercutio","PlayerLine":"That in thy likeness thou appear to us!","scene":"2.1"},{"Dataline":"86109","PlayerLinenumber":"6","ActSceneLine":"2.1.24","Player":"benvolio","PlayerLine":"And if he hear thee, thou wilt anger him.","scene":"2.1"},{"Dataline":"86110","PlayerLinenumber":"7","ActSceneLine":"2.1.25","Player":"mercutio","PlayerLine":"This cannot anger him: \'twould anger him","scene":"2.1"},{"Dataline":"86111","PlayerLinenumber":"7","ActSceneLine":"2.1.26","Player":"mercutio","PlayerLine":"To raise a spirit in his mistress\' circle","scene":"2.1"},{"Dataline":"86112","PlayerLinenumber":"7","ActSceneLine":"2.1.27","Player":"mercutio","PlayerLine":"Of some strange nature, letting it there stand","scene":"2.1"},{"Dataline":"86113","PlayerLinenumber":"7","ActSceneLine":"2.1.28","Player":"mercutio","PlayerLine":"Till she had laid it and conjured it down,","scene":"2.1"},{"Dataline":"86114","PlayerLinenumber":"7","ActSceneLine":"2.1.29","Player":"mercutio","PlayerLine":"That were some spite: my invocation","scene":"2.1"},{"Dataline":"86115","PlayerLinenumber":"7","ActSceneLine":"2.1.30","Player":"mercutio","PlayerLine":"Is fair and honest, and in his mistres s\' name","scene":"2.1"},{"Dataline":"86116","PlayerLinenumber":"7","ActSceneLine":"2.1.31","Player":"mercutio","PlayerLine":"I conjure only but to raise up him.","scene":"2.1"},{"Dataline":"86117","PlayerLinenumber":"8","ActSceneLine":"2.1.32","Player":"benvolio","PlayerLine":"Come, he hath hid himself among these trees,","scene":"2.1"},{"Dataline":"86118","PlayerLinenumber":"8","ActSceneLine":"2.1.33","Player":"benvolio","PlayerLine":"To be consorted with the humorous night:","scene":"2.1"},{"Dataline":"86119","PlayerLinenumber":"8","ActSceneLine":"2.1.34","Player":"benvolio","PlayerLine":"Blind is his love and best befits the dark.","scene":"2.1"},{"Dataline":"86120","PlayerLinenumber":"9","ActSceneLine":"2.1.35","Player":"mercutio","PlayerLine":"If love be blind, love cannot hit the mark.","scene":"2.1"},{"Dataline":"86121","PlayerLinenumber":"9","ActSceneLine":"2.1.36","Player":"mercutio","PlayerLine":"Now will he sit under a medlar tree,","scene":"2.1"},{"Dataline":"86122","PlayerLinenumber":"9","ActSceneLine":"2.1.37","Player":"mercutio","PlayerLine":"And wish his mistress were that kind of fruit","scene":"2.1"},{"Dataline":"86123","PlayerLinenumber":"9","ActSceneLine":"2.1.38","Player":"mercutio","PlayerLine":"As maids call medlars, when they laugh alone.","scene":"2.1"},{"Dataline":"86124","PlayerLinenumber":"9","ActSceneLine":"2.1.39","Player":"mercutio","PlayerLine":"Romeo, that she were, O, that she were","scene":"2.1"},{"Dataline":"86125","PlayerLinenumber":"9","ActSceneLine":"2.1.40","Player":"mercutio","PlayerLine":"An open et caetera, thou a poperin pear!","scene":"2.1"},{"Dataline":"86126","PlayerLinenumber":"9","ActSceneLine":"2.1.41","Player":"mercutio","PlayerLine":"Romeo, good night: I\'ll to my truckle-bed,","scene":"2.1"},{"Dataline":"86127","PlayerLinenumber":"9","ActSceneLine":"2.1.42","Player":"mercutio","PlayerLine":"This field-bed is too cold for me to sleep:","scene":"2.1"},{"Dataline":"86128","PlayerLinenumber":"9","ActSceneLine":"2.1.43","Player":"mercutio","PlayerLine":"Come, shall we go?","scene":"2.1"},{"Dataline":"86129","PlayerLinenumber":"10","ActSceneLine":"2.1.44","Player":"benvolio","PlayerLine":"Go, then, for \'tis in vain","scene":"2.1"},{"Dataline":"86130","PlayerLinenumber":"10","ActSceneLine":"2.1.45","Player":"benvolio","PlayerLine":"To seek him here that means not to be found.","scene":"2.1"},{"Dataline":"86134","PlayerLinenumber":"1","ActSceneLine":"2.2.1","Player":"romeo","PlayerLine":"He jests at scars that never felt a wound.","scene":"2.2"},{"Dataline":"86136","PlayerLinenumber":"1","ActSceneLine":"2.2.2","Player":"romeo","PlayerLine":"But, soft! what light through yonder window breaks?","scene":"2.2"},{"Dataline":"86137","PlayerLinenumber":"1","ActSceneLine":"2.2.3","Player":"romeo","PlayerLine":"It is the east, and Juliet is the sun.","scene":"2.2"},{"Dataline":"86138","PlayerLinenumber":"1","ActSceneLine":"2.2.4","Player":"romeo","PlayerLine":"Arise, fair sun, and kill the envious moon,","scene":"2.2"},{"Dataline":"86139","PlayerLinenumber":"1","ActSceneLine":"2.2.5","Player":"romeo","PlayerLine":"Who is already sick and pale with grief,","scene":"2.2"},{"Dataline":"86140","PlayerLinenumber":"1","ActSceneLine":"2.2.6","Player":"romeo","PlayerLine":"That thou her maid art far more fair than she:","scene":"2.2"},{"Dataline":"86141","PlayerLinenumber":"1","ActSceneLine":"2.2.7","Player":"romeo","PlayerLine":"Be not her maid, since she is envious,","scene":"2.2"},{"Dataline":"86142","PlayerLinenumber":"1","ActSceneLine":"2.2.8","Player":"romeo","PlayerLine":"Her vestal livery is but sick and green","scene":"2.2"},{"Dataline":"86143","PlayerLinenumber":"1","ActSceneLine":"2.2.9","Player":"romeo","PlayerLine":"And none but fools do wear it, cast it off.","scene":"2.2"},{"Dataline":"86144","PlayerLinenumber":"1","ActSceneLine":"2.2.10","Player":"romeo","PlayerLine":"It is my lady, O, it is my love!","scene":"2.2"},{"Dataline":"86145","PlayerLinenumber":"1","ActSceneLine":"2.2.11","Player":"romeo","PlayerLine":"O, that she knew she were!","scene":"2.2"},{"Dataline":"86146","PlayerLinenumber":"1","ActSceneLine":"2.2.12","Player":"romeo","PlayerLine":"She speaks yet she says nothing: what of that?","scene":"2.2"},{"Dataline":"86147","PlayerLinenumber":"1","ActSceneLine":"2.2.13","Player":"romeo","PlayerLine":"Her eye discourses, I will answer it.","scene":"2.2"},{"Dataline":"86148","PlayerLinenumber":"1","ActSceneLine":"2.2.14","Player":"romeo","PlayerLine":"I am too bold, \'tis not to me she speaks:","scene":"2.2"},{"Dataline":"86149","PlayerLinenumber":"1","ActSceneLine":"2.2.15","Player":"romeo","PlayerLine":"Two of the fairest stars in all the heaven,","scene":"2.2"},{"Dataline":"86150","PlayerLinenumber":"1","ActSceneLine":"2.2.16","Player":"romeo","PlayerLine":"Having some business, do entreat her eyes","scene":"2.2"},{"Dataline":"86151","PlayerLinenumber":"1","ActSceneLine":"2.2.17","Player":"romeo","PlayerLine":"To twinkle in their spheres till they return.","scene":"2.2"},{"Dataline":"86152","PlayerLinenumber":"1","ActSceneLine":"2.2.18","Player":"romeo","PlayerLine":"What if her eyes were there, they in her head?","scene":"2.2"},{"Dataline":"86153","PlayerLinenumber":"1","ActSceneLine":"2.2.19","Player":"romeo","PlayerLine":"The brightness of her cheek would shame those stars,","scene":"2.2"},{"Dataline":"86154","PlayerLinenumber":"1","ActSceneLine":"2.2.20","Player":"romeo","PlayerLine":"As daylight doth a lamp, her eyes in heaven","scene":"2.2"},{"Dataline":"86155","PlayerLinenumber":"1","ActSceneLine":"2.2.21","Player":"romeo","PlayerLine":"Would through the airy region stream so bright","scene":"2.2"},{"Dataline":"86156","PlayerLinenumber":"1","ActSceneLine":"2.2.22","Player":"romeo","PlayerLine":"That birds would sing and think it were not night.","scene":"2.2"},{"Dataline":"86157","PlayerLinenumber":"1","ActSceneLine":"2.2.23","Player":"romeo","PlayerLine":"See, how she leans her cheek upon her hand!","scene":"2.2"},{"Dataline":"86158","PlayerLinenumber":"1","ActSceneLine":"2.2.24","Player":"romeo","PlayerLine":"O, that I were a glove upon that hand,","scene":"2.2"},{"Dataline":"86159","PlayerLinenumber":"1","ActSceneLine":"2.2.25","Player":"romeo","PlayerLine":"That I might touch that cheek!","scene":"2.2"},{"Dataline":"86160","PlayerLinenumber":"2","ActSceneLine":"2.2.26","Player":"juliet","PlayerLine":"Ay me!","scene":"2.2"},{"Dataline":"86161","PlayerLinenumber":"3","ActSceneLine":"2.2.27","Player":"romeo","PlayerLine":"She speaks:","scene":"2.2"},{"Dataline":"86162","PlayerLinenumber":"3","ActSceneLine":"2.2.28","Player":"romeo","PlayerLine":"O, speak again, bright angel! for thou art","scene":"2.2"},{"Dataline":"86163","PlayerLinenumber":"3","ActSceneLine":"2.2.29","Player":"romeo","PlayerLine":"As glorious to this night, being o\'er my head","scene":"2.2"},{"Dataline":"86164","PlayerLinenumber":"3","ActSceneLine":"2.2.30","Player":"romeo","PlayerLine":"As is a winged messenger of heaven","scene":"2.2"},{"Dataline":"86165","PlayerLinenumber":"3","ActSceneLine":"2.2.31","Player":"romeo","PlayerLine":"Unto the white-upturned wondering eyes","scene":"2.2"},{"Dataline":"86166","PlayerLinenumber":"3","ActSceneLine":"2.2.32","Player":"romeo","PlayerLine":"Of mortals that fall back to gaze on him","scene":"2.2"},{"Dataline":"86167","PlayerLinenumber":"3","ActSceneLine":"2.2.33","Player":"romeo","PlayerLine":"When he bestrides the lazy-pacing clouds","scene":"2.2"},{"Dataline":"86168","PlayerLinenumber":"3","ActSceneLine":"2.2.34","Player":"romeo","PlayerLine":"And sails upon the bosom of the air.","scene":"2.2"},{"Dataline":"86169","PlayerLinenumber":"4","ActSceneLine":"2.2.35","Player":"juliet","PlayerLine":"O Romeo, Romeo! wherefore art thou Romeo?","scene":"2.2"},{"Dataline":"86170","PlayerLinenumber":"4","ActSceneLine":"2.2.36","Player":"juliet","PlayerLine":"Deny thy father and refuse thy name,","scene":"2.2"},{"Dataline":"86171","PlayerLinenumber":"4","ActSceneLine":"2.2.37","Player":"juliet","PlayerLine":"Or, if thou wilt not, be but sworn my love,","scene":"2.2"},{"Dataline":"86172","PlayerLinenumber":"4","ActSceneLine":"2.2.38","Player":"juliet","PlayerLine":"And I\'ll no longer be a Capulet.","scene":"2.2"},{"Dataline":"86173","PlayerLinenumber":"5","ActSceneLine":"2.2.39","Player":"romeo","PlayerLine":"[Aside]  Shall I hear more, or shall I speak at this?","scene":"2.2"},{"Dataline":"86174","PlayerLinenumber":"6","ActSceneLine":"2.2.40","Player":"juliet","PlayerLine":"\'Tis but thy name that is my enemy,","scene":"2.2"},{"Dataline":"86175","PlayerLinenumber":"6","ActSceneLine":"2.2.41","Player":"juliet","PlayerLine":"Thou art thyself, though not a Montague.","scene":"2.2"},{"Dataline":"86176","PlayerLinenumber":"6","ActSceneLine":"2.2.42","Player":"juliet","PlayerLine":"What\'s Montague? it is nor hand, nor foot,","scene":"2.2"},{"Dataline":"86177","PlayerLinenumber":"6","ActSceneLine":"2.2.43","Player":"juliet","PlayerLine":"Nor arm, nor face, nor any other part","scene":"2.2"},{"Dataline":"86178","PlayerLinenumber":"6","ActSceneLine":"2.2.44","Player":"juliet","PlayerLine":"Belonging to a man. O, be some other name!","scene":"2.2"},{"Dataline":"86179","PlayerLinenumber":"6","ActSceneLine":"2.2.45","Player":"juliet","PlayerLine":"What\'s in a name? that which we call a rose","scene":"2.2"},{"Dataline":"86180","PlayerLinenumber":"6","ActSceneLine":"2.2.46","Player":"juliet","PlayerLine":"By any other name would smell as sweet,","scene":"2.2"},{"Dataline":"86181","PlayerLinenumber":"6","ActSceneLine":"2.2.47","Player":"juliet","PlayerLine":"So Romeo would, were he not Romeo call\'d,","scene":"2.2"},{"Dataline":"86182","PlayerLinenumber":"6","ActSceneLine":"2.2.48","Player":"juliet","PlayerLine":"Retain that dear perfection which he owes","scene":"2.2"},{"Dataline":"86183","PlayerLinenumber":"6","ActSceneLine":"2.2.49","Player":"juliet","PlayerLine":"Without that title. Romeo, doff thy name,","scene":"2.2"},{"Dataline":"86184","PlayerLinenumber":"6","ActSceneLine":"2.2.50","Player":"juliet","PlayerLine":"And for that name which is no part of thee","scene":"2.2"},{"Dataline":"86185","PlayerLinenumber":"6","ActSceneLine":"2.2.51","Player":"juliet","PlayerLine":"Take all myself.","scene":"2.2"},{"Dataline":"86186","PlayerLinenumber":"7","ActSceneLine":"2.2.52","Player":"romeo","PlayerLine":"I take thee at thy word:","scene":"2.2"},{"Dataline":"86187","PlayerLinenumber":"7","ActSceneLine":"2.2.53","Player":"romeo","PlayerLine":"Call me but love, and I\'ll be new baptized,","scene":"2.2"},{"Dataline":"86188","PlayerLinenumber":"7","ActSceneLine":"2.2.54","Player":"romeo","PlayerLine":"Henceforth I never will be Romeo.","scene":"2.2"},{"Dataline":"86189","PlayerLinenumber":"8","ActSceneLine":"2.2.55","Player":"juliet","PlayerLine":"What man art thou that thus bescreen\'d in night","scene":"2.2"},{"Dataline":"86190","PlayerLinenumber":"8","ActSceneLine":"2.2.56","Player":"juliet","PlayerLine":"So stumblest on my counsel?","scene":"2.2"},{"Dataline":"86191","PlayerLinenumber":"9","ActSceneLine":"2.2.57","Player":"romeo","PlayerLine":"By a name","scene":"2.2"},{"Dataline":"86192","PlayerLinenumber":"9","ActSceneLine":"2.2.58","Player":"romeo","PlayerLine":"I know not how to tell thee who I am:","scene":"2.2"},{"Dataline":"86193","PlayerLinenumber":"9","ActSceneLine":"2.2.59","Player":"romeo","PlayerLine":"My name, dear saint, is hateful to myself,","scene":"2.2"},{"Dataline":"86194","PlayerLinenumber":"9","ActSceneLine":"2.2.60","Player":"romeo","PlayerLine":"Because it is an enemy to thee,","scene":"2.2"},{"Dataline":"86195","PlayerLinenumber":"9","ActSceneLine":"2.2.61","Player":"romeo","PlayerLine":"Had I it written, I would tear the word.","scene":"2.2"},{"Dataline":"86196","PlayerLinenumber":"10","ActSceneLine":"2.2.62","Player":"juliet","PlayerLine":"My ears have not yet drunk a hundred words","scene":"2.2"},{"Dataline":"86197","PlayerLinenumber":"10","ActSceneLine":"2.2.63","Player":"juliet","PlayerLine":"Of that tongue\'s utterance, yet I know the sound:","scene":"2.2"},{"Dataline":"86198","PlayerLinenumber":"10","ActSceneLine":"2.2.64","Player":"juliet","PlayerLine":"Art thou not Romeo and a Montague?","scene":"2.2"},{"Dataline":"86199","PlayerLinenumber":"11","ActSceneLine":"2.2.65","Player":"romeo","PlayerLine":"Neither, fair saint, if either thee dislike.","scene":"2.2"},{"Dataline":"86200","PlayerLinenumber":"12","ActSceneLine":"2.2.66","Player":"juliet","PlayerLine":"How camest thou hither, tell me, and wherefore?","scene":"2.2"},{"Dataline":"86201","PlayerLinenumber":"12","ActSceneLine":"2.2.67","Player":"juliet","PlayerLine":"The orchard walls are high and hard to climb,","scene":"2.2"},{"Dataline":"86202","PlayerLinenumber":"12","ActSceneLine":"2.2.68","Player":"juliet","PlayerLine":"And the place death, considering who thou art,","scene":"2.2"},{"Dataline":"86203","PlayerLinenumber":"12","ActSceneLine":"2.2.69","Player":"juliet","PlayerLine":"If any of my kinsmen find thee here.","scene":"2.2"},{"Dataline":"86204","PlayerLinenumber":"13","ActSceneLine":"2.2.70","Player":"romeo","PlayerLine":"With love\'s light wings did I o\'er-perch these walls,","scene":"2.2"},{"Dataline":"86205","PlayerLinenumber":"13","ActSceneLine":"2.2.71","Player":"romeo","PlayerLine":"For stony limits cannot hold love out,","scene":"2.2"},{"Dataline":"86206","PlayerLinenumber":"13","ActSceneLine":"2.2.72","Player":"romeo","PlayerLine":"And what love can do that dares love attempt,","scene":"2.2"},{"Dataline":"86207","PlayerLinenumber":"13","ActSceneLine":"2.2.73","Player":"romeo","PlayerLine":"Therefore thy kinsmen are no let to me.","scene":"2.2"},{"Dataline":"86208","PlayerLinenumber":"14","ActSceneLine":"2.2.74","Player":"juliet","PlayerLine":"If they do see thee, they will murder thee.","scene":"2.2"},{"Dataline":"86209","PlayerLinenumber":"15","ActSceneLine":"2.2.75","Player":"romeo","PlayerLine":"Alack, there lies more peril in thine eye","scene":"2.2"},{"Dataline":"86210","PlayerLinenumber":"15","ActSceneLine":"2.2.76","Player":"romeo","PlayerLine":"Than twenty of their swords: look thou but sweet,","scene":"2.2"},{"Dataline":"86211","PlayerLinenumber":"15","ActSceneLine":"2.2.77","Player":"romeo","PlayerLine":"And I am proof against their enmity.","scene":"2.2"},{"Dataline":"86212","PlayerLinenumber":"16","ActSceneLine":"2.2.78","Player":"juliet","PlayerLine":"I would not for the world they saw thee here.","scene":"2.2"},{"Dataline":"86213","PlayerLinenumber":"17","ActSceneLine":"2.2.79","Player":"romeo","PlayerLine":"I have night\'s cloak to hide me from their sight,","scene":"2.2"},{"Dataline":"86214","PlayerLinenumber":"17","ActSceneLine":"2.2.80","Player":"romeo","PlayerLine":"And but thou love me, let them find me here:","scene":"2.2"},{"Dataline":"86215","PlayerLinenumber":"17","ActSceneLine":"2.2.81","Player":"romeo","PlayerLine":"My life were better ended by their hate,","scene":"2.2"},{"Dataline":"86216","PlayerLinenumber":"17","ActSceneLine":"2.2.82","Player":"romeo","PlayerLine":"Than death prorogued, wanting of thy love.","scene":"2.2"},{"Dataline":"86217","PlayerLinenumber":"18","ActSceneLine":"2.2.83","Player":"juliet","PlayerLine":"By whose direction found\'st thou out this place?","scene":"2.2"},{"Dataline":"86218","PlayerLinenumber":"19","ActSceneLine":"2.2.84","Player":"romeo","PlayerLine":"By love, who first did prompt me to inquire,","scene":"2.2"},{"Dataline":"86219","PlayerLinenumber":"19","ActSceneLine":"2.2.85","Player":"romeo","PlayerLine":"He lent me counsel and I lent him eyes.","scene":"2.2"},{"Dataline":"86220","PlayerLinenumber":"19","ActSceneLine":"2.2.86","Player":"romeo","PlayerLine":"I am no pilot, yet, wert thou as far","scene":"2.2"},{"Dataline":"86221","PlayerLinenumber":"19","ActSceneLine":"2.2.87","Player":"romeo","PlayerLine":"As that vast shore wash\'d with the farthest sea,","scene":"2.2"},{"Dataline":"86222","PlayerLinenumber":"19","ActSceneLine":"2.2.88","Player":"romeo","PlayerLine":"I would adventure for such merchandise.","scene":"2.2"},{"Dataline":"86223","PlayerLinenumber":"20","ActSceneLine":"2.2.89","Player":"juliet","PlayerLine":"Thou know\'st the mask of night is on my face,","scene":"2.2"},{"Dataline":"86224","PlayerLinenumber":"20","ActSceneLine":"2.2.90","Player":"juliet","PlayerLine":"Else would a maiden blush bepaint my cheek","scene":"2.2"},{"Dataline":"86225","PlayerLinenumber":"20","ActSceneLine":"2.2.91","Player":"juliet","PlayerLine":"For that which thou hast heard me speak to-night","scene":"2.2"},{"Dataline":"86226","PlayerLinenumber":"20","ActSceneLine":"2.2.92","Player":"juliet","PlayerLine":"Fain would I dwell on form, fain, fain deny","scene":"2.2"},{"Dataline":"86227","PlayerLinenumber":"20","ActSceneLine":"2.2.93","Player":"juliet","PlayerLine":"What I have spoke: but farewell compliment!","scene":"2.2"},{"Dataline":"86228","PlayerLinenumber":"20","ActSceneLine":"2.2.94","Player":"juliet","PlayerLine":"Dost thou love me? I know thou wilt say \'Ay,\'","scene":"2.2"},{"Dataline":"86229","PlayerLinenumber":"20","ActSceneLine":"2.2.95","Player":"juliet","PlayerLine":"And I will take thy word: yet if thou swear\'st,","scene":"2.2"},{"Dataline":"86230","PlayerLinenumber":"20","ActSceneLine":"2.2.96","Player":"juliet","PlayerLine":"Thou mayst prove false, at lovers\' perjuries","scene":"2.2"},{"Dataline":"86231","PlayerLinenumber":"20","ActSceneLine":"2.2.97","Player":"juliet","PlayerLine":"Then say, Jove laughs. O gentle Romeo,","scene":"2.2"},{"Dataline":"86232","PlayerLinenumber":"20","ActSceneLine":"2.2.98","Player":"juliet","PlayerLine":"If thou dost love, pronounce it faithfully:","scene":"2.2"},{"Dataline":"86233","PlayerLinenumber":"20","ActSceneLine":"2.2.99","Player":"juliet","PlayerLine":"Or if thou think\'st I am too quickly won,","scene":"2.2"},{"Dataline":"86234","PlayerLinenumber":"20","ActSceneLine":"2.2.100","Player":"juliet","PlayerLine":"I\'ll frown and be perverse an say thee nay,","scene":"2.2"},{"Dataline":"86235","PlayerLinenumber":"20","ActSceneLine":"2.2.101","Player":"juliet","PlayerLine":"So thou wilt woo, but else, not for the world.","scene":"2.2"},{"Dataline":"86236","PlayerLinenumber":"20","ActSceneLine":"2.2.102","Player":"juliet","PlayerLine":"In truth, fair Montague, I am too fond,","scene":"2.2"},{"Dataline":"86237","PlayerLinenumber":"20","ActSceneLine":"2.2.103","Player":"juliet","PlayerLine":"And therefore thou mayst think my \'havior light:","scene":"2.2"},{"Dataline":"86238","PlayerLinenumber":"20","ActSceneLine":"2.2.104","Player":"juliet","PlayerLine":"But trust me, gentleman, I\'ll prove more true","scene":"2.2"},{"Dataline":"86239","PlayerLinenumber":"20","ActSceneLine":"2.2.105","Player":"juliet","PlayerLine":"Than those that have more cunning to be strange.","scene":"2.2"},{"Dataline":"86240","PlayerLinenumber":"20","ActSceneLine":"2.2.106","Player":"juliet","PlayerLine":"I should have been more strange, I must confess,","scene":"2.2"},{"Dataline":"86241","PlayerLinenumber":"20","ActSceneLine":"2.2.107","Player":"juliet","PlayerLine":"But that thou overheard\'st, ere I was ware,","scene":"2.2"},{"Dataline":"86242","PlayerLinenumber":"20","ActSceneLine":"2.2.108","Player":"juliet","PlayerLine":"My true love\'s passion: therefore pardon me,","scene":"2.2"},{"Dataline":"86243","PlayerLinenumber":"20","ActSceneLine":"2.2.109","Player":"juliet","PlayerLine":"And not impute this yielding to light love,","scene":"2.2"},{"Dataline":"86244","PlayerLinenumber":"20","ActSceneLine":"2.2.110","Player":"juliet","PlayerLine":"Which the dark night hath so discovered.","scene":"2.2"},{"Dataline":"86245","PlayerLinenumber":"21","ActSceneLine":"2.2.111","Player":"romeo","PlayerLine":"Lady, by yonder blessed moon I swear","scene":"2.2"},{"Dataline":"86246","PlayerLinenumber":"21","ActSceneLine":"2.2.112","Player":"romeo","PlayerLine":"That tips with silver all these fruit-tree tops--","scene":"2.2"},{"Dataline":"86247","PlayerLinenumber":"22","ActSceneLine":"2.2.113","Player":"juliet","PlayerLine":"O, swear not by the moon, the inconstant moon,","scene":"2.2"},{"Dataline":"86248","PlayerLinenumber":"22","ActSceneLine":"2.2.114","Player":"juliet","PlayerLine":"That monthly changes in her circled orb,","scene":"2.2"},{"Dataline":"86249","PlayerLinenumber":"22","ActSceneLine":"2.2.115","Player":"juliet","PlayerLine":"Lest that thy love prove likewise variable.","scene":"2.2"},{"Dataline":"86250","PlayerLinenumber":"23","ActSceneLine":"2.2.116","Player":"romeo","PlayerLine":"What shall I swear by?","scene":"2.2"},{"Dataline":"86251","PlayerLinenumber":"24","ActSceneLine":"2.2.117","Player":"juliet","PlayerLine":"Do not swear at all,","scene":"2.2"},{"Dataline":"86252","PlayerLinenumber":"24","ActSceneLine":"2.2.118","Player":"juliet","PlayerLine":"Or, if thou wilt, swear by thy gracious self,","scene":"2.2"},{"Dataline":"86253","PlayerLinenumber":"24","ActSceneLine":"2.2.119","Player":"juliet","PlayerLine":"Which is the god of my idolatry,","scene":"2.2"},{"Dataline":"86254","PlayerLinenumber":"24","ActSceneLine":"2.2.120","Player":"juliet","PlayerLine":"And I\'ll believe thee.","scene":"2.2"},{"Dataline":"86255","PlayerLinenumber":"25","ActSceneLine":"2.2.121","Player":"romeo","PlayerLine":"If my heart\'s dear love--","scene":"2.2"},{"Dataline":"86256","PlayerLinenumber":"26","ActSceneLine":"2.2.122","Player":"juliet","PlayerLine":"Well, do not swear: although I joy in thee,","scene":"2.2"},{"Dataline":"86257","PlayerLinenumber":"26","ActSceneLine":"2.2.123","Player":"juliet","PlayerLine":"I have no joy of this contract to-night:","scene":"2.2"},{"Dataline":"86258","PlayerLinenumber":"26","ActSceneLine":"2.2.124","Player":"juliet","PlayerLine":"It is too rash, too unadvised, too sudden,","scene":"2.2"},{"Dataline":"86259","PlayerLinenumber":"26","ActSceneLine":"2.2.125","Player":"juliet","PlayerLine":"Too like the lightning, which doth cease to be","scene":"2.2"},{"Dataline":"86260","PlayerLinenumber":"26","ActSceneLine":"2.2.126","Player":"juliet","PlayerLine":"Ere one can say \'It lightens.\' Sweet, good night!","scene":"2.2"},{"Dataline":"86261","PlayerLinenumber":"26","ActSceneLine":"2.2.127","Player":"juliet","PlayerLine":"This bud of love, by summer\'s ripening breath,","scene":"2.2"},{"Dataline":"86262","PlayerLinenumber":"26","ActSceneLine":"2.2.128","Player":"juliet","PlayerLine":"May prove a beauteous flower when next we meet.","scene":"2.2"},{"Dataline":"86263","PlayerLinenumber":"26","ActSceneLine":"2.2.129","Player":"juliet","PlayerLine":"Good night, good night! as sweet repose and rest","scene":"2.2"},{"Dataline":"86264","PlayerLinenumber":"26","ActSceneLine":"2.2.130","Player":"juliet","PlayerLine":"Come to thy heart as that within my breast!","scene":"2.2"},{"Dataline":"86265","PlayerLinenumber":"27","ActSceneLine":"2.2.131","Player":"romeo","PlayerLine":"O, wilt thou leave me so unsatisfied?","scene":"2.2"},{"Dataline":"86266","PlayerLinenumber":"28","ActSceneLine":"2.2.132","Player":"juliet","PlayerLine":"What satisfaction canst thou have to-night?","scene":"2.2"},{"Dataline":"86267","PlayerLinenumber":"29","ActSceneLine":"2.2.133","Player":"romeo","PlayerLine":"The exchange of thy love\'s faithful vow for mine.","scene":"2.2"},{"Dataline":"86268","PlayerLinenumber":"30","ActSceneLine":"2.2.134","Player":"juliet","PlayerLine":"I gave thee mine before thou didst request it:","scene":"2.2"},{"Dataline":"86269","PlayerLinenumber":"30","ActSceneLine":"2.2.135","Player":"juliet","PlayerLine":"And yet I would it were to give again.","scene":"2.2"},{"Dataline":"86270","PlayerLinenumber":"31","ActSceneLine":"2.2.136","Player":"romeo","PlayerLine":"Wouldst thou withdraw it? for what purpose, love?","scene":"2.2"},{"Dataline":"86271","PlayerLinenumber":"32","ActSceneLine":"2.2.137","Player":"juliet","PlayerLine":"But to be frank, and give it thee again.","scene":"2.2"},{"Dataline":"86272","PlayerLinenumber":"32","ActSceneLine":"2.2.138","Player":"juliet","PlayerLine":"And yet I wish but for the thing I have:","scene":"2.2"},{"Dataline":"86273","PlayerLinenumber":"32","ActSceneLine":"2.2.139","Player":"juliet","PlayerLine":"My bounty is as boundless as the sea,","scene":"2.2"},{"Dataline":"86274","PlayerLinenumber":"32","ActSceneLine":"2.2.140","Player":"juliet","PlayerLine":"My love as deep, the more I give to thee,","scene":"2.2"},{"Dataline":"86275","PlayerLinenumber":"32","ActSceneLine":"2.2.141","Player":"juliet","PlayerLine":"The more I have, for both are infinite.","scene":"2.2"},{"Dataline":"86277","PlayerLinenumber":"32","ActSceneLine":"2.2.142","Player":"juliet","PlayerLine":"I hear some noise within, dear love, adieu!","scene":"2.2"},{"Dataline":"86278","PlayerLinenumber":"32","ActSceneLine":"2.2.143","Player":"juliet","PlayerLine":"Anon, good nurse! Sweet Montague, be true.","scene":"2.2"},{"Dataline":"86279","PlayerLinenumber":"32","ActSceneLine":"2.2.144","Player":"juliet","PlayerLine":"Stay but a little, I will come again.","scene":"2.2"},{"Dataline":"86281","PlayerLinenumber":"33","ActSceneLine":"2.2.145","Player":"romeo","PlayerLine":"O blessed, blessed night! I am afeard.","scene":"2.2"},{"Dataline":"86282","PlayerLinenumber":"33","ActSceneLine":"2.2.146","Player":"romeo","PlayerLine":"Being in night, all this is but a dream,","scene":"2.2"},{"Dataline":"86283","PlayerLinenumber":"33","ActSceneLine":"2.2.147","Player":"romeo","PlayerLine":"Too flattering-sweet to be substantial.","scene":"2.2"},{"Dataline":"86285","PlayerLinenumber":"34","ActSceneLine":"2.2.148","Player":"juliet","PlayerLine":"Three words, dear Romeo, and good night indeed.","scene":"2.2"},{"Dataline":"86286","PlayerLinenumber":"34","ActSceneLine":"2.2.149","Player":"juliet","PlayerLine":"If that thy bent of love be honourable,","scene":"2.2"},{"Dataline":"86287","PlayerLinenumber":"34","ActSceneLine":"2.2.150","Player":"juliet","PlayerLine":"Thy purpose marriage, send me word to-morrow,","scene":"2.2"},{"Dataline":"86288","PlayerLinenumber":"34","ActSceneLine":"2.2.151","Player":"juliet","PlayerLine":"By one that I\'ll procure to come to thee,","scene":"2.2"},{"Dataline":"86289","PlayerLinenumber":"34","ActSceneLine":"2.2.152","Player":"juliet","PlayerLine":"Where and what time thou wilt perform the rite,","scene":"2.2"},{"Dataline":"86290","PlayerLinenumber":"34","ActSceneLine":"2.2.153","Player":"juliet","PlayerLine":"And all my fortunes at thy foot I\'ll lay","scene":"2.2"},{"Dataline":"86291","PlayerLinenumber":"34","ActSceneLine":"2.2.154","Player":"juliet","PlayerLine":"And follow thee my lord throughout the world.","scene":"2.2"},{"Dataline":"86292","PlayerLinenumber":"35","ActSceneLine":"2.2.155","Player":"nurse","PlayerLine":"[Within]  Madam!","scene":"2.2"},{"Dataline":"86293","PlayerLinenumber":"36","ActSceneLine":"2.2.156","Player":"juliet","PlayerLine":"I come, anon.--But if thou mean\'st not well,","scene":"2.2"},{"Dataline":"86294","PlayerLinenumber":"36","ActSceneLine":"2.2.157","Player":"juliet","PlayerLine":"I do beseech thee--","scene":"2.2"},{"Dataline":"86295","PlayerLinenumber":"37","ActSceneLine":"2.2.158","Player":"nurse","PlayerLine":"[Within]  Madam!","scene":"2.2"},{"Dataline":"86296","PlayerLinenumber":"38","ActSceneLine":"2.2.159","Player":"juliet","PlayerLine":"By and by, I come:--","scene":"2.2"},{"Dataline":"86297","PlayerLinenumber":"38","ActSceneLine":"2.2.160","Player":"juliet","PlayerLine":"To cease thy suit, and leave me to my grief:","scene":"2.2"},{"Dataline":"86298","PlayerLinenumber":"38","ActSceneLine":"2.2.161","Player":"juliet","PlayerLine":"To-morrow will I send.","scene":"2.2"},{"Dataline":"86299","PlayerLinenumber":"39","ActSceneLine":"2.2.162","Player":"romeo","PlayerLine":"So thrive my soul--","scene":"2.2"},{"Dataline":"86300","PlayerLinenumber":"40","ActSceneLine":"2.2.163","Player":"juliet","PlayerLine":"A thousand times good night!","scene":"2.2"},{"Dataline":"86302","PlayerLinenumber":"41","ActSceneLine":"2.2.164","Player":"romeo","PlayerLine":"A thousand times the worse, to want thy light.","scene":"2.2"},{"Dataline":"86303","PlayerLinenumber":"41","ActSceneLine":"2.2.165","Player":"romeo","PlayerLine":"Love goes toward love, as schoolboys from","scene":"2.2"},{"Dataline":"86304","PlayerLinenumber":"41","ActSceneLine":"2.2.166","Player":"romeo","PlayerLine":"their books,","scene":"2.2"},{"Dataline":"86305","PlayerLinenumber":"41","ActSceneLine":"2.2.167","Player":"romeo","PlayerLine":"But love from love, toward school with heavy looks.","scene":"2.2"},{"Dataline":"86308","PlayerLinenumber":"42","ActSceneLine":"2.2.168","Player":"juliet","PlayerLine":"Hist! Romeo, hist! O, for a falconer\'s voice,","scene":"2.2"},{"Dataline":"86309","PlayerLinenumber":"42","ActSceneLine":"2.2.169","Player":"juliet","PlayerLine":"To lure this tassel-gentle back again!","scene":"2.2"},{"Dataline":"86310","PlayerLinenumber":"42","ActSceneLine":"2.2.170","Player":"juliet","PlayerLine":"Bondage is hoarse, and may not speak aloud,","scene":"2.2"},{"Dataline":"86311","PlayerLinenumber":"42","ActSceneLine":"2.2.171","Player":"juliet","PlayerLine":"Else would I tear the cave where Echo lies,","scene":"2.2"},{"Dataline":"86312","PlayerLinenumber":"42","ActSceneLine":"2.2.172","Player":"juliet","PlayerLine":"And make her airy tongue more hoarse than mine,","scene":"2.2"},{"Dataline":"86313","PlayerLinenumber":"42","ActSceneLine":"2.2.173","Player":"juliet","PlayerLine":"With repetition of my Romeo\'s name.","scene":"2.2"},{"Dataline":"86314","PlayerLinenumber":"43","ActSceneLine":"2.2.174","Player":"romeo","PlayerLine":"It is my soul that calls upon my name:","scene":"2.2"},{"Dataline":"86315","PlayerLinenumber":"43","ActSceneLine":"2.2.175","Player":"romeo","PlayerLine":"How silver-sweet sound lovers\' tongues by night,","scene":"2.2"},{"Dataline":"86316","PlayerLinenumber":"43","ActSceneLine":"2.2.176","Player":"romeo","PlayerLine":"Like softest music to attending ears!","scene":"2.2"},{"Dataline":"86317","PlayerLinenumber":"44","ActSceneLine":"2.2.177","Player":"juliet","PlayerLine":"Romeo!","scene":"2.2"},{"Dataline":"86318","PlayerLinenumber":"45","ActSceneLine":"2.2.178","Player":"romeo","PlayerLine":"My dear?","scene":"2.2"},{"Dataline":"86319","PlayerLinenumber":"46","ActSceneLine":"2.2.179","Player":"juliet","PlayerLine":"At what o\'clock to-morrow","scene":"2.2"},{"Dataline":"86320","PlayerLinenumber":"46","ActSceneLine":"2.2.180","Player":"juliet","PlayerLine":"Shall I send to thee?","scene":"2.2"},{"Dataline":"86321","PlayerLinenumber":"47","ActSceneLine":"2.2.181","Player":"romeo","PlayerLine":"At the hour of nine.","scene":"2.2"},{"Dataline":"86322","PlayerLinenumber":"48","ActSceneLine":"2.2.182","Player":"juliet","PlayerLine":"I will not fail: \'tis twenty years till then.","scene":"2.2"},{"Dataline":"86323","PlayerLinenumber":"48","ActSceneLine":"2.2.183","Player":"juliet","PlayerLine":"I have forgot why I did call thee back.","scene":"2.2"},{"Dataline":"86324","PlayerLinenumber":"49","ActSceneLine":"2.2.184","Player":"romeo","PlayerLine":"Let me stand here till thou remember it.","scene":"2.2"},{"Dataline":"86325","PlayerLinenumber":"50","ActSceneLine":"2.2.185","Player":"juliet","PlayerLine":"I shall forget, to have thee still stand there,","scene":"2.2"},{"Dataline":"86326","PlayerLinenumber":"50","ActSceneLine":"2.2.186","Player":"juliet","PlayerLine":"Remembering how I love thy company.","scene":"2.2"},{"Dataline":"86327","PlayerLinenumber":"51","ActSceneLine":"2.2.187","Player":"romeo","PlayerLine":"And I\'ll still stay, to have thee still forget,","scene":"2.2"},{"Dataline":"86328","PlayerLinenumber":"51","ActSceneLine":"2.2.188","Player":"romeo","PlayerLine":"Forgetting any other home but this.","scene":"2.2"},{"Dataline":"86329","PlayerLinenumber":"52","ActSceneLine":"2.2.189","Player":"juliet","PlayerLine":"\'Tis almost morning, I would have thee gone:","scene":"2.2"},{"Dataline":"86330","PlayerLinenumber":"52","ActSceneLine":"2.2.190","Player":"juliet","PlayerLine":"And yet no further than a wanton\'s bird,","scene":"2.2"},{"Dataline":"86331","PlayerLinenumber":"52","ActSceneLine":"2.2.191","Player":"juliet","PlayerLine":"Who lets it hop a little from her hand,","scene":"2.2"},{"Dataline":"86332","PlayerLinenumber":"52","ActSceneLine":"2.2.192","Player":"juliet","PlayerLine":"Like a poor prisoner in his twisted gyves,","scene":"2.2"},{"Dataline":"86333","PlayerLinenumber":"52","ActSceneLine":"2.2.193","Player":"juliet","PlayerLine":"And with a silk thread plucks it back again,","scene":"2.2"},{"Dataline":"86334","PlayerLinenumber":"52","ActSceneLine":"2.2.194","Player":"juliet","PlayerLine":"So loving-jealous of his liberty.","scene":"2.2"},{"Dataline":"86335","PlayerLinenumber":"53","ActSceneLine":"2.2.195","Player":"romeo","PlayerLine":"I would I were thy bird.","scene":"2.2"},{"Dataline":"86336","PlayerLinenumber":"54","ActSceneLine":"2.2.196","Player":"juliet","PlayerLine":"Sweet, so would I:","scene":"2.2"},{"Dataline":"86337","PlayerLinenumber":"54","ActSceneLine":"2.2.197","Player":"juliet","PlayerLine":"Yet I should kill thee with much cherishing.","scene":"2.2"},{"Dataline":"86338","PlayerLinenumber":"54","ActSceneLine":"2.2.198","Player":"juliet","PlayerLine":"Good night, good night! parting is such","scene":"2.2"},{"Dataline":"86339","PlayerLinenumber":"54","ActSceneLine":"2.2.199","Player":"juliet","PlayerLine":"sweet sorrow,","scene":"2.2"},{"Dataline":"86340","PlayerLinenumber":"54","ActSceneLine":"2.2.200","Player":"juliet","PlayerLine":"That I shall say good night till it be morrow.","scene":"2.2"},{"Dataline":"86342","PlayerLinenumber":"55","ActSceneLine":"2.2.201","Player":"romeo","PlayerLine":"Sleep dwell upon thine eyes, peace in thy breast!","scene":"2.2"},{"Dataline":"86343","PlayerLinenumber":"55","ActSceneLine":"2.2.202","Player":"romeo","PlayerLine":"Would I were sleep and peace, so sweet to rest!","scene":"2.2"},{"Dataline":"86344","PlayerLinenumber":"55","ActSceneLine":"2.2.203","Player":"romeo","PlayerLine":"Hence will I to my ghostly father\'s cell,","scene":"2.2"},{"Dataline":"86345","PlayerLinenumber":"55","ActSceneLine":"2.2.204","Player":"romeo","PlayerLine":"His help to crave, and my dear hap to tell.","scene":"2.2"},{"Dataline":"86349","PlayerLinenumber":"1","ActSceneLine":"2.3.1","Player":"friar_laurence","PlayerLine":"The grey-eyed morn smiles on the frowning night,","scene":"2.3"},{"Dataline":"86350","PlayerLinenumber":"1","ActSceneLine":"2.3.2","Player":"friar_laurence","PlayerLine":"Chequering the eastern clouds with streaks of light,","scene":"2.3"},{"Dataline":"86351","PlayerLinenumber":"1","ActSceneLine":"2.3.3","Player":"friar_laurence","PlayerLine":"And flecked darkness like a drunkard reels","scene":"2.3"},{"Dataline":"86352","PlayerLinenumber":"1","ActSceneLine":"2.3.4","Player":"friar_laurence","PlayerLine":"From forth day\'s path and Titan\'s fiery wheels:","scene":"2.3"},{"Dataline":"86353","PlayerLinenumber":"1","ActSceneLine":"2.3.5","Player":"friar_laurence","PlayerLine":"Now, ere the sun advance his burning eye,","scene":"2.3"},{"Dataline":"86354","PlayerLinenumber":"1","ActSceneLine":"2.3.6","Player":"friar_laurence","PlayerLine":"The day to cheer and night\'s dank dew to dry,","scene":"2.3"},{"Dataline":"86355","PlayerLinenumber":"1","ActSceneLine":"2.3.7","Player":"friar_laurence","PlayerLine":"I must up-fill this osier cage of ours","scene":"2.3"},{"Dataline":"86356","PlayerLinenumber":"1","ActSceneLine":"2.3.8","Player":"friar_laurence","PlayerLine":"With baleful weeds and precious-juiced flowers.","scene":"2.3"},{"Dataline":"86357","PlayerLinenumber":"1","ActSceneLine":"2.3.9","Player":"friar_laurence","PlayerLine":"The earth that\'s nature\'s mother is her tomb,","scene":"2.3"},{"Dataline":"86358","PlayerLinenumber":"1","ActSceneLine":"2.3.10","Player":"friar_laurence","PlayerLine":"What is her burying grave that is her womb,","scene":"2.3"},{"Dataline":"86359","PlayerLinenumber":"1","ActSceneLine":"2.3.11","Player":"friar_laurence","PlayerLine":"And from her womb children of divers kind","scene":"2.3"},{"Dataline":"86360","PlayerLinenumber":"1","ActSceneLine":"2.3.12","Player":"friar_laurence","PlayerLine":"We sucking on her natural bosom find,","scene":"2.3"},{"Dataline":"86361","PlayerLinenumber":"1","ActSceneLine":"2.3.13","Player":"friar_laurence","PlayerLine":"Many for many virtues excellent,","scene":"2.3"},{"Dataline":"86362","PlayerLinenumber":"1","ActSceneLine":"2.3.14","Player":"friar_laurence","PlayerLine":"None but for some and yet all different.","scene":"2.3"},{"Dataline":"86363","PlayerLinenumber":"1","ActSceneLine":"2.3.15","Player":"friar_laurence","PlayerLine":"O, mickle is the powerful grace that lies","scene":"2.3"},{"Dataline":"86364","PlayerLinenumber":"1","ActSceneLine":"2.3.16","Player":"friar_laurence","PlayerLine":"In herbs, plants, stones, and their true qualities:","scene":"2.3"},{"Dataline":"86365","PlayerLinenumber":"1","ActSceneLine":"2.3.17","Player":"friar_laurence","PlayerLine":"For nought so vile that on the earth doth live","scene":"2.3"},{"Dataline":"86366","PlayerLinenumber":"1","ActSceneLine":"2.3.18","Player":"friar_laurence","PlayerLine":"But to the earth some special good doth give,","scene":"2.3"},{"Dataline":"86367","PlayerLinenumber":"1","ActSceneLine":"2.3.19","Player":"friar_laurence","PlayerLine":"Nor aught so good but strain\'d from that fair use","scene":"2.3"},{"Dataline":"86368","PlayerLinenumber":"1","ActSceneLine":"2.3.20","Player":"friar_laurence","PlayerLine":"Revolts from true birth, stumbling on abuse:","scene":"2.3"},{"Dataline":"86369","PlayerLinenumber":"1","ActSceneLine":"2.3.21","Player":"friar_laurence","PlayerLine":"Virtue itself turns vice, being misapplied,","scene":"2.3"},{"Dataline":"86370","PlayerLinenumber":"1","ActSceneLine":"2.3.22","Player":"friar_laurence","PlayerLine":"And vice sometimes by action dignified.","scene":"2.3"},{"Dataline":"86371","PlayerLinenumber":"1","ActSceneLine":"2.3.23","Player":"friar_laurence","PlayerLine":"Within the infant rind of this small flower","scene":"2.3"},{"Dataline":"86372","PlayerLinenumber":"1","ActSceneLine":"2.3.24","Player":"friar_laurence","PlayerLine":"Poison hath residence and medicine power:","scene":"2.3"},{"Dataline":"86373","PlayerLinenumber":"1","ActSceneLine":"2.3.25","Player":"friar_laurence","PlayerLine":"For this, being smelt, with that part cheers each part,","scene":"2.3"},{"Dataline":"86374","PlayerLinenumber":"1","ActSceneLine":"2.3.26","Player":"friar_laurence","PlayerLine":"Being tasted, slays all senses with the heart.","scene":"2.3"},{"Dataline":"86375","PlayerLinenumber":"1","ActSceneLine":"2.3.27","Player":"friar_laurence","PlayerLine":"Two such opposed kings encamp them still","scene":"2.3"},{"Dataline":"86376","PlayerLinenumber":"1","ActSceneLine":"2.3.28","Player":"friar_laurence","PlayerLine":"In man as well as herbs, grace and rude will,","scene":"2.3"},{"Dataline":"86377","PlayerLinenumber":"1","ActSceneLine":"2.3.29","Player":"friar_laurence","PlayerLine":"And where the worser is predominant,","scene":"2.3"},{"Dataline":"86378","PlayerLinenumber":"1","ActSceneLine":"2.3.30","Player":"friar_laurence","PlayerLine":"Full soon the canker death eats up that plant.","scene":"2.3"},{"Dataline":"86380","PlayerLinenumber":"2","ActSceneLine":"2.3.31","Player":"romeo","PlayerLine":"Good morrow, father.","scene":"2.3"},{"Dataline":"86381","PlayerLinenumber":"3","ActSceneLine":"2.3.32","Player":"friar_laurence","PlayerLine":"Benedicite!","scene":"2.3"},{"Dataline":"86382","PlayerLinenumber":"3","ActSceneLine":"2.3.33","Player":"friar_laurence","PlayerLine":"What early tongue so sweet saluteth me?","scene":"2.3"},{"Dataline":"86383","PlayerLinenumber":"3","ActSceneLine":"2.3.34","Player":"friar_laurence","PlayerLine":"Young son, it argues a distemper\'d head","scene":"2.3"},{"Dataline":"86384","PlayerLinenumber":"3","ActSceneLine":"2.3.35","Player":"friar_laurence","PlayerLine":"So soon to bid good morrow to thy bed:","scene":"2.3"},{"Dataline":"86385","PlayerLinenumber":"3","ActSceneLine":"2.3.36","Player":"friar_laurence","PlayerLine":"Care keeps his watch in every old man\'s eye,","scene":"2.3"},{"Dataline":"86386","PlayerLinenumber":"3","ActSceneLine":"2.3.37","Player":"friar_laurence","PlayerLine":"And where care lodges, sleep will never lie,","scene":"2.3"},{"Dataline":"86387","PlayerLinenumber":"3","ActSceneLine":"2.3.38","Player":"friar_laurence","PlayerLine":"But where unbruised youth with unstuff\'d brain","scene":"2.3"},{"Dataline":"86388","PlayerLinenumber":"3","ActSceneLine":"2.3.39","Player":"friar_laurence","PlayerLine":"Doth couch his limbs, there golden sleep doth reign:","scene":"2.3"},{"Dataline":"86389","PlayerLinenumber":"3","ActSceneLine":"2.3.40","Player":"friar_laurence","PlayerLine":"Therefore thy earliness doth me assure","scene":"2.3"},{"Dataline":"86390","PlayerLinenumber":"3","ActSceneLine":"2.3.41","Player":"friar_laurence","PlayerLine":"Thou art up-roused by some distemperature,","scene":"2.3"},{"Dataline":"86391","PlayerLinenumber":"3","ActSceneLine":"2.3.42","Player":"friar_laurence","PlayerLine":"Or if not so, then here I hit it right,","scene":"2.3"},{"Dataline":"86392","PlayerLinenumber":"3","ActSceneLine":"2.3.43","Player":"friar_laurence","PlayerLine":"Our Romeo hath not been in bed to-night.","scene":"2.3"},{"Dataline":"86393","PlayerLinenumber":"4","ActSceneLine":"2.3.44","Player":"romeo","PlayerLine":"That last is true, the sweeter rest was mine.","scene":"2.3"},{"Dataline":"86394","PlayerLinenumber":"5","ActSceneLine":"2.3.45","Player":"friar_laurence","PlayerLine":"God pardon sin! wast thou with Rosaline?","scene":"2.3"},{"Dataline":"86395","PlayerLinenumber":"6","ActSceneLine":"2.3.46","Player":"romeo","PlayerLine":"With Rosaline, my ghostly father? no,","scene":"2.3"},{"Dataline":"86396","PlayerLinenumber":"6","ActSceneLine":"2.3.47","Player":"romeo","PlayerLine":"I have forgot that name, and that name\'s woe.","scene":"2.3"},{"Dataline":"86397","PlayerLinenumber":"7","ActSceneLine":"2.3.48","Player":"friar_laurence","PlayerLine":"That\'s my good son: but where hast thou been, then?","scene":"2.3"},{"Dataline":"86398","PlayerLinenumber":"8","ActSceneLine":"2.3.49","Player":"romeo","PlayerLine":"I\'ll tell thee, ere thou ask it me again.","scene":"2.3"},{"Dataline":"86399","PlayerLinenumber":"8","ActSceneLine":"2.3.50","Player":"romeo","PlayerLine":"I have been feasting with mine enemy,","scene":"2.3"},{"Dataline":"86400","PlayerLinenumber":"8","ActSceneLine":"2.3.51","Player":"romeo","PlayerLine":"Where on a sudden one hath wounded me,","scene":"2.3"},{"Dataline":"86401","PlayerLinenumber":"8","ActSceneLine":"2.3.52","Player":"romeo","PlayerLine":"That\'s by me wounded: both our remedies","scene":"2.3"},{"Dataline":"86402","PlayerLinenumber":"8","ActSceneLine":"2.3.53","Player":"romeo","PlayerLine":"Within thy help and holy physic lies:","scene":"2.3"},{"Dataline":"86403","PlayerLinenumber":"8","ActSceneLine":"2.3.54","Player":"romeo","PlayerLine":"I bear no hatred, blessed man, for, lo,","scene":"2.3"},{"Dataline":"86404","PlayerLinenumber":"8","ActSceneLine":"2.3.55","Player":"romeo","PlayerLine":"My intercession likewise steads my foe.","scene":"2.3"},{"Dataline":"86405","PlayerLinenumber":"9","ActSceneLine":"2.3.56","Player":"friar_laurence","PlayerLine":"Be plain, good son, and homely in thy drift,","scene":"2.3"},{"Dataline":"86406","PlayerLinenumber":"9","ActSceneLine":"2.3.57","Player":"friar_laurence","PlayerLine":"Riddling confession finds but riddling shrift.","scene":"2.3"},{"Dataline":"86407","PlayerLinenumber":"10","ActSceneLine":"2.3.58","Player":"romeo","PlayerLine":"Then plainly know my heart\'s dear love is set","scene":"2.3"},{"Dataline":"86408","PlayerLinenumber":"10","ActSceneLine":"2.3.59","Player":"romeo","PlayerLine":"On the fair daughter of rich Capulet:","scene":"2.3"},{"Dataline":"86409","PlayerLinenumber":"10","ActSceneLine":"2.3.60","Player":"romeo","PlayerLine":"As mine on hers, so hers is set on mine,","scene":"2.3"},{"Dataline":"86410","PlayerLinenumber":"10","ActSceneLine":"2.3.61","Player":"romeo","PlayerLine":"And all combined, save what thou must combine","scene":"2.3"},{"Dataline":"86411","PlayerLinenumber":"10","ActSceneLine":"2.3.62","Player":"romeo","PlayerLine":"By holy marriage: when and where and how","scene":"2.3"},{"Dataline":"86412","PlayerLinenumber":"10","ActSceneLine":"2.3.63","Player":"romeo","PlayerLine":"We met, we woo\'d and made exchange of vow,","scene":"2.3"},{"Dataline":"86413","PlayerLinenumber":"10","ActSceneLine":"2.3.64","Player":"romeo","PlayerLine":"I\'ll tell thee as we pass, but this I pray,","scene":"2.3"},{"Dataline":"86414","PlayerLinenumber":"10","ActSceneLine":"2.3.65","Player":"romeo","PlayerLine":"That thou consent to marry us to-day.","scene":"2.3"},{"Dataline":"86415","PlayerLinenumber":"11","ActSceneLine":"2.3.66","Player":"friar_laurence","PlayerLine":"Holy Saint Francis, what a change is here!","scene":"2.3"},{"Dataline":"86416","PlayerLinenumber":"11","ActSceneLine":"2.3.67","Player":"friar_laurence","PlayerLine":"Is Rosaline, whom thou didst love so dear,","scene":"2.3"},{"Dataline":"86417","PlayerLinenumber":"11","ActSceneLine":"2.3.68","Player":"friar_laurence","PlayerLine":"So soon forsaken? young men\'s love then lies","scene":"2.3"},{"Dataline":"86418","PlayerLinenumber":"11","ActSceneLine":"2.3.69","Player":"friar_laurence","PlayerLine":"Not truly in their hearts, but in their eyes.","scene":"2.3"},{"Dataline":"86419","PlayerLinenumber":"11","ActSceneLine":"2.3.70","Player":"friar_laurence","PlayerLine":"Jesu Maria, what a deal of brine","scene":"2.3"},{"Dataline":"86420","PlayerLinenumber":"11","ActSceneLine":"2.3.71","Player":"friar_laurence","PlayerLine":"Hath wash\'d thy sallow cheeks for Rosaline!","scene":"2.3"},{"Dataline":"86421","PlayerLinenumber":"11","ActSceneLine":"2.3.72","Player":"friar_laurence","PlayerLine":"How much salt water thrown away in waste,","scene":"2.3"},{"Dataline":"86422","PlayerLinenumber":"11","ActSceneLine":"2.3.73","Player":"friar_laurence","PlayerLine":"To season love, that of it doth not taste!","scene":"2.3"},{"Dataline":"86423","PlayerLinenumber":"11","ActSceneLine":"2.3.74","Player":"friar_laurence","PlayerLine":"The sun not yet thy sighs from heaven clears,","scene":"2.3"},{"Dataline":"86424","PlayerLinenumber":"11","ActSceneLine":"2.3.75","Player":"friar_laurence","PlayerLine":"Thy old groans ring yet in my ancient ears,","scene":"2.3"},{"Dataline":"86425","PlayerLinenumber":"11","ActSceneLine":"2.3.76","Player":"friar_laurence","PlayerLine":"Lo, here upon thy cheek the stain doth sit","scene":"2.3"},{"Dataline":"86426","PlayerLinenumber":"11","ActSceneLine":"2.3.77","Player":"friar_laurence","PlayerLine":"Of an old tear that is not wash\'d off yet:","scene":"2.3"},{"Dataline":"86427","PlayerLinenumber":"11","ActSceneLine":"2.3.78","Player":"friar_laurence","PlayerLine":"If e\'er thou wast thyself and these woes thine,","scene":"2.3"},{"Dataline":"86428","PlayerLinenumber":"11","ActSceneLine":"2.3.79","Player":"friar_laurence","PlayerLine":"Thou and these woes were all for Rosaline:","scene":"2.3"},{"Dataline":"86429","PlayerLinenumber":"11","ActSceneLine":"2.3.80","Player":"friar_laurence","PlayerLine":"And art thou changed? pronounce this sentence then,","scene":"2.3"},{"Dataline":"86430","PlayerLinenumber":"11","ActSceneLine":"2.3.81","Player":"friar_laurence","PlayerLine":"Women may fall, when there\'s no strength in men.","scene":"2.3"},{"Dataline":"86431","PlayerLinenumber":"12","ActSceneLine":"2.3.82","Player":"romeo","PlayerLine":"Thou chid\'st me oft for loving Rosaline.","scene":"2.3"},{"Dataline":"86432","PlayerLinenumber":"13","ActSceneLine":"2.3.83","Player":"friar_laurence","PlayerLine":"For doting, not for loving, pupil mine.","scene":"2.3"},{"Dataline":"86433","PlayerLinenumber":"14","ActSceneLine":"2.3.84","Player":"romeo","PlayerLine":"And bad\'st me bury love.","scene":"2.3"},{"Dataline":"86434","PlayerLinenumber":"15","ActSceneLine":"2.3.85","Player":"friar_laurence","PlayerLine":"Not in a grave,","scene":"2.3"},{"Dataline":"86435","PlayerLinenumber":"15","ActSceneLine":"2.3.86","Player":"friar_laurence","PlayerLine":"To lay one in, another out to have.","scene":"2.3"},{"Dataline":"86436","PlayerLinenumber":"16","ActSceneLine":"2.3.87","Player":"romeo","PlayerLine":"I pray thee, chide not, she whom I love now","scene":"2.3"},{"Dataline":"86437","PlayerLinenumber":"16","ActSceneLine":"2.3.88","Player":"romeo","PlayerLine":"Doth grace for grace and love for love allow,","scene":"2.3"},{"Dataline":"86438","PlayerLinenumber":"16","ActSceneLine":"2.3.89","Player":"romeo","PlayerLine":"The other did not so.","scene":"2.3"},{"Dataline":"86439","PlayerLinenumber":"17","ActSceneLine":"2.3.90","Player":"friar_laurence","PlayerLine":"O, she knew well","scene":"2.3"},{"Dataline":"86440","PlayerLinenumber":"17","ActSceneLine":"2.3.91","Player":"friar_laurence","PlayerLine":"Thy love did read by rote and could not spell.","scene":"2.3"},{"Dataline":"86441","PlayerLinenumber":"17","ActSceneLine":"2.3.92","Player":"friar_laurence","PlayerLine":"But come, young waverer, come, go with me,","scene":"2.3"},{"Dataline":"86442","PlayerLinenumber":"17","ActSceneLine":"2.3.93","Player":"friar_laurence","PlayerLine":"In one respect I\'ll thy assistant be,","scene":"2.3"},{"Dataline":"86443","PlayerLinenumber":"17","ActSceneLine":"2.3.94","Player":"friar_laurence","PlayerLine":"For this alliance may so happy prove,","scene":"2.3"},{"Dataline":"86444","PlayerLinenumber":"17","ActSceneLine":"2.3.95","Player":"friar_laurence","PlayerLine":"To turn your households\' rancour to pure love.","scene":"2.3"},{"Dataline":"86445","PlayerLinenumber":"18","ActSceneLine":"2.3.96","Player":"romeo","PlayerLine":"O, let us hence, I stand on sudden haste.","scene":"2.3"},{"Dataline":"86446","PlayerLinenumber":"19","ActSceneLine":"2.3.97","Player":"friar_laurence","PlayerLine":"Wisely and slow, they stumble that run fast.","scene":"2.3"},{"Dataline":"86450","PlayerLinenumber":"1","ActSceneLine":"2.4.1","Player":"mercutio","PlayerLine":"Where the devil should this Romeo be?","scene":"2.4"},{"Dataline":"86451","PlayerLinenumber":"1","ActSceneLine":"2.4.2","Player":"mercutio","PlayerLine":"Came he not home to-night?","scene":"2.4"},{"Dataline":"86452","PlayerLinenumber":"2","ActSceneLine":"2.4.3","Player":"benvolio","PlayerLine":"Not to his father\'s, I spoke with his man.","scene":"2.4"},{"Dataline":"86453","PlayerLinenumber":"3","ActSceneLine":"2.4.4","Player":"mercutio","PlayerLine":"Ah, that same pale hard-hearted wench, that Rosaline.","scene":"2.4"},{"Dataline":"86454","PlayerLinenumber":"3","ActSceneLine":"2.4.5","Player":"mercutio","PlayerLine":"Torments him so, that he will sure run mad.","scene":"2.4"},{"Dataline":"86455","PlayerLinenumber":"4","ActSceneLine":"2.4.6","Player":"benvolio","PlayerLine":"Tybalt, the kinsman of old Capulet,","scene":"2.4"},{"Dataline":"86456","PlayerLinenumber":"4","ActSceneLine":"2.4.7","Player":"benvolio","PlayerLine":"Hath sent a letter to his father\'s house.","scene":"2.4"},{"Dataline":"86457","PlayerLinenumber":"5","ActSceneLine":"2.4.8","Player":"mercutio","PlayerLine":"A challenge, on my life.","scene":"2.4"},{"Dataline":"86458","PlayerLinenumber":"6","ActSceneLine":"2.4.9","Player":"benvolio","PlayerLine":"Romeo will answer it.","scene":"2.4"},{"Dataline":"86459","PlayerLinenumber":"7","ActSceneLine":"2.4.10","Player":"mercutio","PlayerLine":"Any man that can write may answer a letter.","scene":"2.4"},{"Dataline":"86460","PlayerLinenumber":"8","ActSceneLine":"2.4.11","Player":"benvolio","PlayerLine":"Nay, he will answer the letter\'s master, how he","scene":"2.4"},{"Dataline":"86461","PlayerLinenumber":"8","ActSceneLine":"2.4.12","Player":"benvolio","PlayerLine":"dares, being dared.","scene":"2.4"},{"Dataline":"86462","PlayerLinenumber":"9","ActSceneLine":"2.4.13","Player":"mercutio","PlayerLine":"Alas poor Romeo! he is already dead, stabbed with a","scene":"2.4"},{"Dataline":"86463","PlayerLinenumber":"9","ActSceneLine":"2.4.14","Player":"mercutio","PlayerLine":"white wench\'s black eye, shot through the ear with a","scene":"2.4"},{"Dataline":"86464","PlayerLinenumber":"9","ActSceneLine":"2.4.15","Player":"mercutio","PlayerLine":"love-song, the very pin of his heart cleft with the","scene":"2.4"},{"Dataline":"86465","PlayerLinenumber":"9","ActSceneLine":"2.4.16","Player":"mercutio","PlayerLine":"blind bow-boy\'s butt-shaft: and is he a man to","scene":"2.4"},{"Dataline":"86466","PlayerLinenumber":"9","ActSceneLine":"2.4.17","Player":"mercutio","PlayerLine":"encounter Tybalt?","scene":"2.4"},{"Dataline":"86467","PlayerLinenumber":"10","ActSceneLine":"2.4.18","Player":"benvolio","PlayerLine":"Why, what is Tybalt?","scene":"2.4"},{"Dataline":"86468","PlayerLinenumber":"11","ActSceneLine":"2.4.19","Player":"mercutio","PlayerLine":"More than prince of cats, I can tell you. O, he is","scene":"2.4"},{"Dataline":"86469","PlayerLinenumber":"11","ActSceneLine":"2.4.20","Player":"mercutio","PlayerLine":"the courageous captain of compliments. He fights as","scene":"2.4"},{"Dataline":"86470","PlayerLinenumber":"11","ActSceneLine":"2.4.21","Player":"mercutio","PlayerLine":"you sing prick-song, keeps time, distance, and","scene":"2.4"},{"Dataline":"86471","PlayerLinenumber":"11","ActSceneLine":"2.4.22","Player":"mercutio","PlayerLine":"proportion, rests me his minim rest, one, two, and","scene":"2.4"},{"Dataline":"86472","PlayerLinenumber":"11","ActSceneLine":"2.4.23","Player":"mercutio","PlayerLine":"the third in your bosom: the very butcher of a silk","scene":"2.4"},{"Dataline":"86473","PlayerLinenumber":"11","ActSceneLine":"2.4.24","Player":"mercutio","PlayerLine":"button, a duellist, a duellist, a gentleman of the","scene":"2.4"},{"Dataline":"86474","PlayerLinenumber":"11","ActSceneLine":"2.4.25","Player":"mercutio","PlayerLine":"very first house, of the first and second cause:","scene":"2.4"},{"Dataline":"86475","PlayerLinenumber":"11","ActSceneLine":"2.4.26","Player":"mercutio","PlayerLine":"ah, the immortal passado! the punto reverso! the","scene":"2.4"},{"Dataline":"86476","PlayerLinenumber":"11","ActSceneLine":"2.4.27","Player":"mercutio","PlayerLine":"hai!","scene":"2.4"},{"Dataline":"86477","PlayerLinenumber":"12","ActSceneLine":"2.4.28","Player":"benvolio","PlayerLine":"The what?","scene":"2.4"},{"Dataline":"86478","PlayerLinenumber":"13","ActSceneLine":"2.4.29","Player":"mercutio","PlayerLine":"The pox of such antic, lisping, affecting","scene":"2.4"},{"Dataline":"86479","PlayerLinenumber":"13","ActSceneLine":"2.4.30","Player":"mercutio","PlayerLine":"fantasticoes, these new tuners of accents! \'By Jesu,","scene":"2.4"},{"Dataline":"86480","PlayerLinenumber":"13","ActSceneLine":"2.4.31","Player":"mercutio","PlayerLine":"a very good blade! a very tall man! a very good","scene":"2.4"},{"Dataline":"86481","PlayerLinenumber":"13","ActSceneLine":"2.4.32","Player":"mercutio","PlayerLine":"whore!\' Why, is not this a lamentable thing,","scene":"2.4"},{"Dataline":"86482","PlayerLinenumber":"13","ActSceneLine":"2.4.33","Player":"mercutio","PlayerLine":"grandsire, that we should be thus afflicted with","scene":"2.4"},{"Dataline":"86483","PlayerLinenumber":"13","ActSceneLine":"2.4.34","Player":"mercutio","PlayerLine":"these strange flies, these fashion-mongers, these","scene":"2.4"},{"Dataline":"86484","PlayerLinenumber":"13","ActSceneLine":"2.4.35","Player":"mercutio","PlayerLine":"perdona-mi\'s, who stand so much on the new form,","scene":"2.4"},{"Dataline":"86485","PlayerLinenumber":"13","ActSceneLine":"2.4.36","Player":"mercutio","PlayerLine":"that they cannot at ease on the old bench? O, their","scene":"2.4"},{"Dataline":"86486","PlayerLinenumber":"13","ActSceneLine":"2.4.37","Player":"mercutio","PlayerLine":"bones, their bones!","scene":"2.4"},{"Dataline":"86488","PlayerLinenumber":"14","ActSceneLine":"2.4.38","Player":"benvolio","PlayerLine":"Here comes Romeo, here comes Romeo.","scene":"2.4"},{"Dataline":"86489","PlayerLinenumber":"15","ActSceneLine":"2.4.39","Player":"mercutio","PlayerLine":"Without his roe, like a dried herring: flesh, flesh,","scene":"2.4"},{"Dataline":"86490","PlayerLinenumber":"15","ActSceneLine":"2.4.40","Player":"mercutio","PlayerLine":"how art thou fishified! Now is he for the numbers","scene":"2.4"},{"Dataline":"86491","PlayerLinenumber":"15","ActSceneLine":"2.4.41","Player":"mercutio","PlayerLine":"that Petrarch flowed in: Laura to his lady was but a","scene":"2.4"},{"Dataline":"86492","PlayerLinenumber":"15","ActSceneLine":"2.4.42","Player":"mercutio","PlayerLine":"kitchen-wench, marry, she had a better love to","scene":"2.4"},{"Dataline":"86493","PlayerLinenumber":"15","ActSceneLine":"2.4.43","Player":"mercutio","PlayerLine":"be-rhyme her, Dido a dowdy, Cleopatra a gipsy,","scene":"2.4"},{"Dataline":"86494","PlayerLinenumber":"15","ActSceneLine":"2.4.44","Player":"mercutio","PlayerLine":"Helen and Hero hildings and harlots, Thisbe a grey","scene":"2.4"},{"Dataline":"86495","PlayerLinenumber":"15","ActSceneLine":"2.4.45","Player":"mercutio","PlayerLine":"eye or so, but not to the purpose. Signior","scene":"2.4"},{"Dataline":"86496","PlayerLinenumber":"15","ActSceneLine":"2.4.46","Player":"mercutio","PlayerLine":"Romeo, bon jour! there\'s a French salutation","scene":"2.4"},{"Dataline":"86497","PlayerLinenumber":"15","ActSceneLine":"2.4.47","Player":"mercutio","PlayerLine":"to your French slop. You gave us the counterfeit","scene":"2.4"},{"Dataline":"86498","PlayerLinenumber":"15","ActSceneLine":"2.4.48","Player":"mercutio","PlayerLine":"fairly last night.","scene":"2.4"},{"Dataline":"86499","PlayerLinenumber":"16","ActSceneLine":"2.4.49","Player":"romeo","PlayerLine":"Good morrow to you both. What counterfeit did I give you?","scene":"2.4"},{"Dataline":"86500","PlayerLinenumber":"17","ActSceneLine":"2.4.50","Player":"mercutio","PlayerLine":"The ship, sir, the slip, can you not conceive?","scene":"2.4"},{"Dataline":"86501","PlayerLinenumber":"18","ActSceneLine":"2.4.51","Player":"romeo","PlayerLine":"Pardon, good Mercutio, my business was great, and in","scene":"2.4"},{"Dataline":"86502","PlayerLinenumber":"18","ActSceneLine":"2.4.52","Player":"romeo","PlayerLine":"such a case as mine a man may strain courtesy.","scene":"2.4"},{"Dataline":"86503","PlayerLinenumber":"19","ActSceneLine":"2.4.53","Player":"mercutio","PlayerLine":"That\'s as much as to say, such a case as yours","scene":"2.4"},{"Dataline":"86504","PlayerLinenumber":"19","ActSceneLine":"2.4.54","Player":"mercutio","PlayerLine":"constrains a man to bow in the hams.","scene":"2.4"},{"Dataline":"86505","PlayerLinenumber":"20","ActSceneLine":"2.4.55","Player":"romeo","PlayerLine":"Meaning, to court\'sy.","scene":"2.4"},{"Dataline":"86506","PlayerLinenumber":"21","ActSceneLine":"2.4.56","Player":"mercutio","PlayerLine":"Thou hast most kindly hit it.","scene":"2.4"},{"Dataline":"86507","PlayerLinenumber":"22","ActSceneLine":"2.4.57","Player":"romeo","PlayerLine":"A most courteous exposition.","scene":"2.4"},{"Dataline":"86508","PlayerLinenumber":"23","ActSceneLine":"2.4.58","Player":"mercutio","PlayerLine":"Nay, I am the very pink of courtesy.","scene":"2.4"},{"Dataline":"86509","PlayerLinenumber":"24","ActSceneLine":"2.4.59","Player":"romeo","PlayerLine":"Pink for flower.","scene":"2.4"},{"Dataline":"86510","PlayerLinenumber":"25","ActSceneLine":"2.4.60","Player":"mercutio","PlayerLine":"Right.","scene":"2.4"},{"Dataline":"86511","PlayerLinenumber":"26","ActSceneLine":"2.4.61","Player":"romeo","PlayerLine":"Why, then is my pump well flowered.","scene":"2.4"},{"Dataline":"86512","PlayerLinenumber":"27","ActSceneLine":"2.4.62","Player":"mercutio","PlayerLine":"Well said: follow me this jest now till thou hast","scene":"2.4"},{"Dataline":"86513","PlayerLinenumber":"27","ActSceneLine":"2.4.63","Player":"mercutio","PlayerLine":"worn out thy pump, that when the single sole of it","scene":"2.4"},{"Dataline":"86514","PlayerLinenumber":"27","ActSceneLine":"2.4.64","Player":"mercutio","PlayerLine":"is worn, the jest may remain after the wearing sole singular.","scene":"2.4"},{"Dataline":"86515","PlayerLinenumber":"28","ActSceneLine":"2.4.65","Player":"romeo","PlayerLine":"O single-soled jest, solely singular for the","scene":"2.4"},{"Dataline":"86516","PlayerLinenumber":"28","ActSceneLine":"2.4.66","Player":"romeo","PlayerLine":"singleness.","scene":"2.4"},{"Dataline":"86517","PlayerLinenumber":"29","ActSceneLine":"2.4.67","Player":"mercutio","PlayerLine":"Come between us, good Benvolio, my wits faint.","scene":"2.4"},{"Dataline":"86518","PlayerLinenumber":"30","ActSceneLine":"2.4.68","Player":"romeo","PlayerLine":"Switch and spurs, switch and spurs, or I\'ll cry a match.","scene":"2.4"},{"Dataline":"86519","PlayerLinenumber":"31","ActSceneLine":"2.4.69","Player":"mercutio","PlayerLine":"Nay, if thy wits run the wild-goose chase, I have","scene":"2.4"},{"Dataline":"86520","PlayerLinenumber":"31","ActSceneLine":"2.4.70","Player":"mercutio","PlayerLine":"done, for thou hast more of the wild-goose in one of","scene":"2.4"},{"Dataline":"86521","PlayerLinenumber":"31","ActSceneLine":"2.4.71","Player":"mercutio","PlayerLine":"thy wits than, I am sure, I have in my whole five:","scene":"2.4"},{"Dataline":"86522","PlayerLinenumber":"31","ActSceneLine":"2.4.72","Player":"mercutio","PlayerLine":"was I with you there for the goose?","scene":"2.4"},{"Dataline":"86523","PlayerLinenumber":"32","ActSceneLine":"2.4.73","Player":"romeo","PlayerLine":"Thou wast never with me for any thing when thou wast","scene":"2.4"},{"Dataline":"86524","PlayerLinenumber":"32","ActSceneLine":"2.4.74","Player":"romeo","PlayerLine":"not there for the goose.","scene":"2.4"},{"Dataline":"86525","PlayerLinenumber":"33","ActSceneLine":"2.4.75","Player":"mercutio","PlayerLine":"I will bite thee by the ear for that jest.","scene":"2.4"},{"Dataline":"86526","PlayerLinenumber":"34","ActSceneLine":"2.4.76","Player":"romeo","PlayerLine":"Nay, good goose, bite not.","scene":"2.4"},{"Dataline":"86527","PlayerLinenumber":"35","ActSceneLine":"2.4.77","Player":"mercutio","PlayerLine":"Thy wit is a very bitter sweeting, it is a most","scene":"2.4"},{"Dataline":"86528","PlayerLinenumber":"35","ActSceneLine":"2.4.78","Player":"mercutio","PlayerLine":"sharp sauce.","scene":"2.4"},{"Dataline":"86529","PlayerLinenumber":"36","ActSceneLine":"2.4.79","Player":"romeo","PlayerLine":"And is it not well served in to a sweet goose?","scene":"2.4"},{"Dataline":"86530","PlayerLinenumber":"37","ActSceneLine":"2.4.80","Player":"mercutio","PlayerLine":"O here\'s a wit of cheveril, that stretches from an","scene":"2.4"},{"Dataline":"86531","PlayerLinenumber":"37","ActSceneLine":"2.4.81","Player":"mercutio","PlayerLine":"inch narrow to an ell broad!","scene":"2.4"},{"Dataline":"86532","PlayerLinenumber":"38","ActSceneLine":"2.4.82","Player":"romeo","PlayerLine":"I stretch it out for that word \'broad,\' which added","scene":"2.4"},{"Dataline":"86533","PlayerLinenumber":"38","ActSceneLine":"2.4.83","Player":"romeo","PlayerLine":"to the goose, proves thee far and wide a broad goose.","scene":"2.4"},{"Dataline":"86534","PlayerLinenumber":"39","ActSceneLine":"2.4.84","Player":"mercutio","PlayerLine":"Why, is not this better now than groaning for love?","scene":"2.4"},{"Dataline":"86535","PlayerLinenumber":"39","ActSceneLine":"2.4.85","Player":"mercutio","PlayerLine":"now art thou sociable, now art thou Romeo, now art","scene":"2.4"},{"Dataline":"86536","PlayerLinenumber":"39","ActSceneLine":"2.4.86","Player":"mercutio","PlayerLine":"thou what thou art, by art as well as by nature:","scene":"2.4"},{"Dataline":"86537","PlayerLinenumber":"39","ActSceneLine":"2.4.87","Player":"mercutio","PlayerLine":"for this drivelling love is like a great natural,","scene":"2.4"},{"Dataline":"86538","PlayerLinenumber":"39","ActSceneLine":"2.4.88","Player":"mercutio","PlayerLine":"that runs lolling up and down to hide his bauble in a hole.","scene":"2.4"},{"Dataline":"86539","PlayerLinenumber":"40","ActSceneLine":"2.4.89","Player":"benvolio","PlayerLine":"Stop there, stop there.","scene":"2.4"},{"Dataline":"86540","PlayerLinenumber":"41","ActSceneLine":"2.4.90","Player":"mercutio","PlayerLine":"Thou desirest me to stop in my tale against the hair.","scene":"2.4"},{"Dataline":"86541","PlayerLinenumber":"42","ActSceneLine":"2.4.91","Player":"benvolio","PlayerLine":"Thou wouldst else have made thy tale large.","scene":"2.4"},{"Dataline":"86542","PlayerLinenumber":"43","ActSceneLine":"2.4.92","Player":"mercutio","PlayerLine":"O, thou art deceived, I would have made it short:","scene":"2.4"},{"Dataline":"86543","PlayerLinenumber":"43","ActSceneLine":"2.4.93","Player":"mercutio","PlayerLine":"for I was come to the whole depth of my tale, and","scene":"2.4"},{"Dataline":"86544","PlayerLinenumber":"43","ActSceneLine":"2.4.94","Player":"mercutio","PlayerLine":"meant, indeed, to occupy the argument no longer.","scene":"2.4"},{"Dataline":"86545","PlayerLinenumber":"44","ActSceneLine":"2.4.95","Player":"romeo","PlayerLine":"Here\'s goodly gear!","scene":"2.4"},{"Dataline":"86547","PlayerLinenumber":"45","ActSceneLine":"2.4.96","Player":"mercutio","PlayerLine":"A sail, a sail!","scene":"2.4"},{"Dataline":"86548","PlayerLinenumber":"46","ActSceneLine":"2.4.97","Player":"benvolio","PlayerLine":"Two, two, a shirt and a smock.","scene":"2.4"},{"Dataline":"86549","PlayerLinenumber":"47","ActSceneLine":"2.4.98","Player":"nurse","PlayerLine":"Peter!","scene":"2.4"},{"Dataline":"86550","PlayerLinenumber":"48","ActSceneLine":"2.4.99","Player":"peter","PlayerLine":"Anon!","scene":"2.4"},{"Dataline":"86551","PlayerLinenumber":"49","ActSceneLine":"2.4.100","Player":"nurse","PlayerLine":"My fan, Peter.","scene":"2.4"},{"Dataline":"86552","PlayerLinenumber":"50","ActSceneLine":"2.4.101","Player":"mercutio","PlayerLine":"Good Peter, to hide her face, for her fan\'s the","scene":"2.4"},{"Dataline":"86553","PlayerLinenumber":"50","ActSceneLine":"2.4.102","Player":"mercutio","PlayerLine":"fairer face.","scene":"2.4"},{"Dataline":"86554","PlayerLinenumber":"51","ActSceneLine":"2.4.103","Player":"nurse","PlayerLine":"God ye good morrow, gentlemen.","scene":"2.4"},{"Dataline":"86555","PlayerLinenumber":"52","ActSceneLine":"2.4.104","Player":"mercutio","PlayerLine":"God ye good den, fair gentlewoman.","scene":"2.4"},{"Dataline":"86556","PlayerLinenumber":"53","ActSceneLine":"2.4.105","Player":"nurse","PlayerLine":"Is it good den?","scene":"2.4"},{"Dataline":"86557","PlayerLinenumber":"54","ActSceneLine":"2.4.106","Player":"mercutio","PlayerLine":"\'Tis no less, I tell you, for the bawdy hand of the","scene":"2.4"},{"Dataline":"86558","PlayerLinenumber":"54","ActSceneLine":"2.4.107","Player":"mercutio","PlayerLine":"dial is now upon the prick of noon.","scene":"2.4"},{"Dataline":"86559","PlayerLinenumber":"55","ActSceneLine":"2.4.108","Player":"nurse","PlayerLine":"Out upon you! what a man are you!","scene":"2.4"},{"Dataline":"86560","PlayerLinenumber":"56","ActSceneLine":"2.4.109","Player":"romeo","PlayerLine":"One, gentlewoman, that God hath made for himself to","scene":"2.4"},{"Dataline":"86561","PlayerLinenumber":"56","ActSceneLine":"2.4.110","Player":"romeo","PlayerLine":"mar.","scene":"2.4"},{"Dataline":"86562","PlayerLinenumber":"57","ActSceneLine":"2.4.111","Player":"nurse","PlayerLine":"By my troth, it is well said, \'for himself to mar,\'","scene":"2.4"},{"Dataline":"86563","PlayerLinenumber":"57","ActSceneLine":"2.4.112","Player":"nurse","PlayerLine":"quoth a\'? Gentlemen, can any of you tell me where I","scene":"2.4"},{"Dataline":"86564","PlayerLinenumber":"57","ActSceneLine":"2.4.113","Player":"nurse","PlayerLine":"may find the young Romeo?","scene":"2.4"},{"Dataline":"86565","PlayerLinenumber":"58","ActSceneLine":"2.4.114","Player":"romeo","PlayerLine":"I can tell you, but young Romeo will be older when","scene":"2.4"},{"Dataline":"86566","PlayerLinenumber":"58","ActSceneLine":"2.4.115","Player":"romeo","PlayerLine":"you have found him than he was when you sought him:","scene":"2.4"},{"Dataline":"86567","PlayerLinenumber":"58","ActSceneLine":"2.4.116","Player":"romeo","PlayerLine":"I am the youngest of that name, for fault of a worse.","scene":"2.4"},{"Dataline":"86568","PlayerLinenumber":"59","ActSceneLine":"2.4.117","Player":"nurse","PlayerLine":"You say well.","scene":"2.4"},{"Dataline":"86569","PlayerLinenumber":"60","ActSceneLine":"2.4.118","Player":"mercutio","PlayerLine":"Yea, is the worst well? very well took, i\' faith,","scene":"2.4"},{"Dataline":"86570","PlayerLinenumber":"60","ActSceneLine":"2.4.119","Player":"mercutio","PlayerLine":"wisely, wisely.","scene":"2.4"},{"Dataline":"86571","PlayerLinenumber":"61","ActSceneLine":"2.4.120","Player":"nurse","PlayerLine":"if you be he, sir, I desire some confidence with","scene":"2.4"},{"Dataline":"86572","PlayerLinenumber":"61","ActSceneLine":"2.4.121","Player":"nurse","PlayerLine":"you.","scene":"2.4"},{"Dataline":"86573","PlayerLinenumber":"62","ActSceneLine":"2.4.122","Player":"benvolio","PlayerLine":"She will indite him to some supper.","scene":"2.4"},{"Dataline":"86574","PlayerLinenumber":"63","ActSceneLine":"2.4.123","Player":"mercutio","PlayerLine":"A bawd, a bawd, a bawd! so ho!","scene":"2.4"},{"Dataline":"86575","PlayerLinenumber":"64","ActSceneLine":"2.4.124","Player":"romeo","PlayerLine":"What hast thou found?","scene":"2.4"},{"Dataline":"86576","PlayerLinenumber":"65","ActSceneLine":"2.4.125","Player":"mercutio","PlayerLine":"No hare, sir, unless a hare, sir, in a lenten pie,","scene":"2.4"},{"Dataline":"86577","PlayerLinenumber":"65","ActSceneLine":"2.4.126","Player":"mercutio","PlayerLine":"that is something stale and hoar ere it be spent.","scene":"2.4"},{"Dataline":"86579","PlayerLinenumber":"65","ActSceneLine":"2.4.127","Player":"mercutio","PlayerLine":"An old hare hoar,","scene":"2.4"},{"Dataline":"86580","PlayerLinenumber":"65","ActSceneLine":"2.4.128","Player":"mercutio","PlayerLine":"And an old hare hoar,","scene":"2.4"},{"Dataline":"86581","PlayerLinenumber":"65","ActSceneLine":"2.4.129","Player":"mercutio","PlayerLine":"Is very good meat in lent","scene":"2.4"},{"Dataline":"86582","PlayerLinenumber":"65","ActSceneLine":"2.4.130","Player":"mercutio","PlayerLine":"But a hare that is hoar","scene":"2.4"},{"Dataline":"86583","PlayerLinenumber":"65","ActSceneLine":"2.4.131","Player":"mercutio","PlayerLine":"Is too much for a score,","scene":"2.4"},{"Dataline":"86584","PlayerLinenumber":"65","ActSceneLine":"2.4.132","Player":"mercutio","PlayerLine":"When it hoars ere it be spent.","scene":"2.4"},{"Dataline":"86585","PlayerLinenumber":"65","ActSceneLine":"2.4.133","Player":"mercutio","PlayerLine":"Romeo, will you come to your father\'s? we\'ll","scene":"2.4"},{"Dataline":"86586","PlayerLinenumber":"65","ActSceneLine":"2.4.134","Player":"mercutio","PlayerLine":"to dinner, thither.","scene":"2.4"},{"Dataline":"86587","PlayerLinenumber":"66","ActSceneLine":"2.4.135","Player":"romeo","PlayerLine":"I will follow you.","scene":"2.4"},{"Dataline":"86588","PlayerLinenumber":"67","ActSceneLine":"2.4.136","Player":"mercutio","PlayerLine":"Farewell, ancient lady, farewell,","scene":"2.4"},{"Dataline":"86590","PlayerLinenumber":"67","ActSceneLine":"2.4.137","Player":"mercutio","PlayerLine":"\'lady, lady, lady.\'","scene":"2.4"},{"Dataline":"86592","PlayerLinenumber":"68","ActSceneLine":"2.4.138","Player":"nurse","PlayerLine":"Marry, farewell! I pray you, sir, what saucy","scene":"2.4"},{"Dataline":"86593","PlayerLinenumber":"68","ActSceneLine":"2.4.139","Player":"nurse","PlayerLine":"merchant was this, that was so full of his ropery?","scene":"2.4"},{"Dataline":"86594","PlayerLinenumber":"69","ActSceneLine":"2.4.140","Player":"romeo","PlayerLine":"A gentleman, nurse, that loves to hear himself talk,","scene":"2.4"},{"Dataline":"86595","PlayerLinenumber":"69","ActSceneLine":"2.4.141","Player":"romeo","PlayerLine":"and will speak more in a minute than he will stand","scene":"2.4"},{"Dataline":"86596","PlayerLinenumber":"69","ActSceneLine":"2.4.142","Player":"romeo","PlayerLine":"to in a month.","scene":"2.4"},{"Dataline":"86597","PlayerLinenumber":"70","ActSceneLine":"2.4.143","Player":"nurse","PlayerLine":"An a\' speak any thing against me, I\'ll take him","scene":"2.4"},{"Dataline":"86598","PlayerLinenumber":"70","ActSceneLine":"2.4.144","Player":"nurse","PlayerLine":"down, an a\' were lustier than he is, and twenty such","scene":"2.4"},{"Dataline":"86599","PlayerLinenumber":"70","ActSceneLine":"2.4.145","Player":"nurse","PlayerLine":"Jacks, and if I cannot, I\'ll find those that shall.","scene":"2.4"},{"Dataline":"86600","PlayerLinenumber":"70","ActSceneLine":"2.4.146","Player":"nurse","PlayerLine":"Scurvy knave! I am none of his flirt-gills, I am","scene":"2.4"},{"Dataline":"86601","PlayerLinenumber":"70","ActSceneLine":"2.4.147","Player":"nurse","PlayerLine":"none of his skains-mates. And thou must stand by","scene":"2.4"},{"Dataline":"86602","PlayerLinenumber":"70","ActSceneLine":"2.4.148","Player":"nurse","PlayerLine":"too, and suffer every knave to use me at his pleasure?","scene":"2.4"},{"Dataline":"86603","PlayerLinenumber":"71","ActSceneLine":"2.4.149","Player":"peter","PlayerLine":"I saw no man use you a pleasure, if I had, my weapon","scene":"2.4"},{"Dataline":"86604","PlayerLinenumber":"71","ActSceneLine":"2.4.150","Player":"peter","PlayerLine":"should quickly have been out, I warrant you: I dare","scene":"2.4"},{"Dataline":"86605","PlayerLinenumber":"71","ActSceneLine":"2.4.151","Player":"peter","PlayerLine":"draw as soon as another man, if I see occasion in a","scene":"2.4"},{"Dataline":"86606","PlayerLinenumber":"71","ActSceneLine":"2.4.152","Player":"peter","PlayerLine":"good quarrel, and the law on my side.","scene":"2.4"},{"Dataline":"86607","PlayerLinenumber":"72","ActSceneLine":"2.4.153","Player":"nurse","PlayerLine":"Now, afore God, I am so vexed, that every part about","scene":"2.4"},{"Dataline":"86608","PlayerLinenumber":"72","ActSceneLine":"2.4.154","Player":"nurse","PlayerLine":"me quivers. Scurvy knave! Pray you, sir, a word:","scene":"2.4"},{"Dataline":"86609","PlayerLinenumber":"72","ActSceneLine":"2.4.155","Player":"nurse","PlayerLine":"and as I told you, my young lady bade me inquire you","scene":"2.4"},{"Dataline":"86610","PlayerLinenumber":"72","ActSceneLine":"2.4.156","Player":"nurse","PlayerLine":"out, what she bade me say, I will keep to myself:","scene":"2.4"},{"Dataline":"86611","PlayerLinenumber":"72","ActSceneLine":"2.4.157","Player":"nurse","PlayerLine":"but first let me tell ye, if ye should lead her into","scene":"2.4"},{"Dataline":"86612","PlayerLinenumber":"72","ActSceneLine":"2.4.158","Player":"nurse","PlayerLine":"a fool\'s paradise, as they say, it were a very gross","scene":"2.4"},{"Dataline":"86613","PlayerLinenumber":"72","ActSceneLine":"2.4.159","Player":"nurse","PlayerLine":"kind of behavior, as they say: for the gentlewoman","scene":"2.4"},{"Dataline":"86614","PlayerLinenumber":"72","ActSceneLine":"2.4.160","Player":"nurse","PlayerLine":"is young, and, therefore, if you should deal double","scene":"2.4"},{"Dataline":"86615","PlayerLinenumber":"72","ActSceneLine":"2.4.161","Player":"nurse","PlayerLine":"with her, truly it were an ill thing to be offered","scene":"2.4"},{"Dataline":"86616","PlayerLinenumber":"72","ActSceneLine":"2.4.162","Player":"nurse","PlayerLine":"to any gentlewoman, and very weak dealing.","scene":"2.4"},{"Dataline":"86617","PlayerLinenumber":"73","ActSceneLine":"2.4.163","Player":"romeo","PlayerLine":"Nurse, commend me to thy lady and mistress. I","scene":"2.4"},{"Dataline":"86618","PlayerLinenumber":"73","ActSceneLine":"2.4.164","Player":"romeo","PlayerLine":"protest unto thee--","scene":"2.4"},{"Dataline":"86619","PlayerLinenumber":"74","ActSceneLine":"2.4.165","Player":"nurse","PlayerLine":"Good heart, and, i\' faith, I will tell her as much:","scene":"2.4"},{"Dataline":"86620","PlayerLinenumber":"74","ActSceneLine":"2.4.166","Player":"nurse","PlayerLine":"Lord, Lord, she will be a joyful woman.","scene":"2.4"},{"Dataline":"86621","PlayerLinenumber":"75","ActSceneLine":"2.4.167","Player":"romeo","PlayerLine":"What wilt thou tell her, nurse? thou dost not mark me.","scene":"2.4"},{"Dataline":"86622","PlayerLinenumber":"76","ActSceneLine":"2.4.168","Player":"nurse","PlayerLine":"I will tell her, sir, that you do protest, which, as","scene":"2.4"},{"Dataline":"86623","PlayerLinenumber":"76","ActSceneLine":"2.4.169","Player":"nurse","PlayerLine":"I take it, is a gentlemanlike offer.","scene":"2.4"},{"Dataline":"86624","PlayerLinenumber":"77","ActSceneLine":"2.4.170","Player":"romeo","PlayerLine":"Bid her devise","scene":"2.4"},{"Dataline":"86625","PlayerLinenumber":"77","ActSceneLine":"2.4.171","Player":"romeo","PlayerLine":"Some means to come to shrift this afternoon,","scene":"2.4"},{"Dataline":"86626","PlayerLinenumber":"77","ActSceneLine":"2.4.172","Player":"romeo","PlayerLine":"And there she shall at Friar Laurence\' cell","scene":"2.4"},{"Dataline":"86627","PlayerLinenumber":"77","ActSceneLine":"2.4.173","Player":"romeo","PlayerLine":"Be shrived and married. Here is for thy pains.","scene":"2.4"},{"Dataline":"86628","PlayerLinenumber":"78","ActSceneLine":"2.4.174","Player":"nurse","PlayerLine":"No truly sir, not a penny.","scene":"2.4"},{"Dataline":"86629","PlayerLinenumber":"79","ActSceneLine":"2.4.175","Player":"romeo","PlayerLine":"Go to, I say you shall.","scene":"2.4"},{"Dataline":"86630","PlayerLinenumber":"80","ActSceneLine":"2.4.176","Player":"nurse","PlayerLine":"This afternoon, sir? well, she shall be there.","scene":"2.4"},{"Dataline":"86631","PlayerLinenumber":"81","ActSceneLine":"2.4.177","Player":"romeo","PlayerLine":"And stay, good nurse, behind the abbey wall:","scene":"2.4"},{"Dataline":"86632","PlayerLinenumber":"81","ActSceneLine":"2.4.178","Player":"romeo","PlayerLine":"Within this hour my man shall be with thee","scene":"2.4"},{"Dataline":"86633","PlayerLinenumber":"81","ActSceneLine":"2.4.179","Player":"romeo","PlayerLine":"And bring thee cords made like a tackled stair,","scene":"2.4"},{"Dataline":"86634","PlayerLinenumber":"81","ActSceneLine":"2.4.180","Player":"romeo","PlayerLine":"Which to the high top-gallant of my joy","scene":"2.4"},{"Dataline":"86635","PlayerLinenumber":"81","ActSceneLine":"2.4.181","Player":"romeo","PlayerLine":"Must be my convoy in the secret night.","scene":"2.4"},{"Dataline":"86636","PlayerLinenumber":"81","ActSceneLine":"2.4.182","Player":"romeo","PlayerLine":"Farewell, be trusty, and I\'ll quit thy pains:","scene":"2.4"},{"Dataline":"86637","PlayerLinenumber":"81","ActSceneLine":"2.4.183","Player":"romeo","PlayerLine":"Farewell, commend me to thy mistress.","scene":"2.4"},{"Dataline":"86638","PlayerLinenumber":"82","ActSceneLine":"2.4.184","Player":"nurse","PlayerLine":"Now God in heaven bless thee! Hark you, sir.","scene":"2.4"},{"Dataline":"86639","PlayerLinenumber":"83","ActSceneLine":"2.4.185","Player":"romeo","PlayerLine":"What say\'st thou, my dear nurse?","scene":"2.4"},{"Dataline":"86640","PlayerLinenumber":"84","ActSceneLine":"2.4.186","Player":"nurse","PlayerLine":"Is your man secret? Did you ne\'er hear say,","scene":"2.4"},{"Dataline":"86641","PlayerLinenumber":"84","ActSceneLine":"2.4.187","Player":"nurse","PlayerLine":"Two may keep counsel, putting one away?","scene":"2.4"},{"Dataline":"86642","PlayerLinenumber":"85","ActSceneLine":"2.4.188","Player":"romeo","PlayerLine":"I warrant thee, my man\'s as true as steel.","scene":"2.4"},{"Dataline":"86643","PlayerLinenumber":"86","ActSceneLine":"2.4.189","Player":"nurse","PlayerLine":"Well, sir, my mistress is the sweetest lady--Lord,","scene":"2.4"},{"Dataline":"86644","PlayerLinenumber":"86","ActSceneLine":"2.4.190","Player":"nurse","PlayerLine":"Lord! when \'twas a little prating thing:--O, there","scene":"2.4"},{"Dataline":"86645","PlayerLinenumber":"86","ActSceneLine":"2.4.191","Player":"nurse","PlayerLine":"is a nobleman in town, one Paris, that would fain","scene":"2.4"},{"Dataline":"86646","PlayerLinenumber":"86","ActSceneLine":"2.4.192","Player":"nurse","PlayerLine":"lay knife aboard, but she, good soul, had as lief","scene":"2.4"},{"Dataline":"86647","PlayerLinenumber":"86","ActSceneLine":"2.4.193","Player":"nurse","PlayerLine":"see a toad, a very toad, as see him. I anger her","scene":"2.4"},{"Dataline":"86648","PlayerLinenumber":"86","ActSceneLine":"2.4.194","Player":"nurse","PlayerLine":"sometimes and tell her that Paris is the properer","scene":"2.4"},{"Dataline":"86649","PlayerLinenumber":"86","ActSceneLine":"2.4.195","Player":"nurse","PlayerLine":"man, but, I\'ll warrant you, when I say so, she looks","scene":"2.4"},{"Dataline":"86650","PlayerLinenumber":"86","ActSceneLine":"2.4.196","Player":"nurse","PlayerLine":"as pale as any clout in the versal world. Doth not","scene":"2.4"},{"Dataline":"86651","PlayerLinenumber":"86","ActSceneLine":"2.4.197","Player":"nurse","PlayerLine":"rosemary and Romeo begin both with a letter?","scene":"2.4"},{"Dataline":"86652","PlayerLinenumber":"87","ActSceneLine":"2.4.198","Player":"romeo","PlayerLine":"Ay, nurse, what of that? both with an R.","scene":"2.4"},{"Dataline":"86653","PlayerLinenumber":"88","ActSceneLine":"2.4.199","Player":"nurse","PlayerLine":"Ah. mocker! that\'s the dog\'s name, R is for","scene":"2.4"},{"Dataline":"86654","PlayerLinenumber":"88","ActSceneLine":"2.4.200","Player":"nurse","PlayerLine":"the--No, I know it begins with some other","scene":"2.4"},{"Dataline":"86655","PlayerLinenumber":"88","ActSceneLine":"2.4.201","Player":"nurse","PlayerLine":"letter:--and she hath the prettiest sententious of","scene":"2.4"},{"Dataline":"86656","PlayerLinenumber":"88","ActSceneLine":"2.4.202","Player":"nurse","PlayerLine":"it, of you and rosemary, that it would do you good","scene":"2.4"},{"Dataline":"86657","PlayerLinenumber":"88","ActSceneLine":"2.4.203","Player":"nurse","PlayerLine":"to hear it.","scene":"2.4"},{"Dataline":"86658","PlayerLinenumber":"89","ActSceneLine":"2.4.204","Player":"romeo","PlayerLine":"Commend me to thy lady.","scene":"2.4"},{"Dataline":"86659","PlayerLinenumber":"90","ActSceneLine":"2.4.205","Player":"nurse","PlayerLine":"Ay, a thousand times.","scene":"2.4"},{"Dataline":"86661","PlayerLinenumber":"90","ActSceneLine":"2.4.206","Player":"nurse","PlayerLine":"Peter!","scene":"2.4"},{"Dataline":"86662","PlayerLinenumber":"91","ActSceneLine":"2.4.207","Player":"peter","PlayerLine":"Anon!","scene":"2.4"},{"Dataline":"86663","PlayerLinenumber":"92","ActSceneLine":"2.4.208","Player":"nurse","PlayerLine":"Peter, take my fan, and go before and apace.","scene":"2.4"},{"Dataline":"86667","PlayerLinenumber":"1","ActSceneLine":"2.5.1","Player":"juliet","PlayerLine":"The clock struck nine when I did send the nurse,","scene":"2.5"},{"Dataline":"86668","PlayerLinenumber":"1","ActSceneLine":"2.5.2","Player":"juliet","PlayerLine":"In half an hour she promised to return.","scene":"2.5"},{"Dataline":"86669","PlayerLinenumber":"1","ActSceneLine":"2.5.3","Player":"juliet","PlayerLine":"Perchance she cannot meet him: that\'s not so.","scene":"2.5"},{"Dataline":"86670","PlayerLinenumber":"1","ActSceneLine":"2.5.4","Player":"juliet","PlayerLine":"O, she is lame! love\'s heralds should be thoughts,","scene":"2.5"},{"Dataline":"86671","PlayerLinenumber":"1","ActSceneLine":"2.5.5","Player":"juliet","PlayerLine":"Which ten times faster glide than the sun\'s beams,","scene":"2.5"},{"Dataline":"86672","PlayerLinenumber":"1","ActSceneLine":"2.5.6","Player":"juliet","PlayerLine":"Driving back shadows over louring hills:","scene":"2.5"},{"Dataline":"86673","PlayerLinenumber":"1","ActSceneLine":"2.5.7","Player":"juliet","PlayerLine":"Therefore do nimble-pinion\'d doves draw love,","scene":"2.5"},{"Dataline":"86674","PlayerLinenumber":"1","ActSceneLine":"2.5.8","Player":"juliet","PlayerLine":"And therefore hath the wind-swift Cupid wings.","scene":"2.5"},{"Dataline":"86675","PlayerLinenumber":"1","ActSceneLine":"2.5.9","Player":"juliet","PlayerLine":"Now is the sun upon the highmost hill","scene":"2.5"},{"Dataline":"86676","PlayerLinenumber":"1","ActSceneLine":"2.5.10","Player":"juliet","PlayerLine":"Of this day\'s journey, and from nine till twelve","scene":"2.5"},{"Dataline":"86677","PlayerLinenumber":"1","ActSceneLine":"2.5.11","Player":"juliet","PlayerLine":"Is three long hours, yet she is not come.","scene":"2.5"},{"Dataline":"86678","PlayerLinenumber":"1","ActSceneLine":"2.5.12","Player":"juliet","PlayerLine":"Had she affections and warm youthful blood,","scene":"2.5"},{"Dataline":"86679","PlayerLinenumber":"1","ActSceneLine":"2.5.13","Player":"juliet","PlayerLine":"She would be as swift in motion as a ball,","scene":"2.5"},{"Dataline":"86680","PlayerLinenumber":"1","ActSceneLine":"2.5.14","Player":"juliet","PlayerLine":"My words would bandy her to my sweet love,","scene":"2.5"},{"Dataline":"86681","PlayerLinenumber":"1","ActSceneLine":"2.5.15","Player":"juliet","PlayerLine":"And his to me:","scene":"2.5"},{"Dataline":"86682","PlayerLinenumber":"1","ActSceneLine":"2.5.16","Player":"juliet","PlayerLine":"But old folks, many feign as they were dead,","scene":"2.5"},{"Dataline":"86683","PlayerLinenumber":"1","ActSceneLine":"2.5.17","Player":"juliet","PlayerLine":"Unwieldy, slow, heavy and pale as lead.","scene":"2.5"},{"Dataline":"86684","PlayerLinenumber":"1","ActSceneLine":"2.5.18","Player":"juliet","PlayerLine":"O God, she comes!","scene":"2.5"},{"Dataline":"86686","PlayerLinenumber":"1","ActSceneLine":"2.5.19","Player":"juliet","PlayerLine":"O honey nurse, what news?","scene":"2.5"},{"Dataline":"86687","PlayerLinenumber":"1","ActSceneLine":"2.5.20","Player":"juliet","PlayerLine":"Hast thou met with him? Send thy man away.","scene":"2.5"},{"Dataline":"86688","PlayerLinenumber":"2","ActSceneLine":"2.5.21","Player":"nurse","PlayerLine":"Peter, stay at the gate.","scene":"2.5"},{"Dataline":"86690","PlayerLinenumber":"3","ActSceneLine":"2.5.22","Player":"juliet","PlayerLine":"Now, good sweet nurse,--O Lord, why look\'st thou sad?","scene":"2.5"},{"Dataline":"86691","PlayerLinenumber":"3","ActSceneLine":"2.5.23","Player":"juliet","PlayerLine":"Though news be sad, yet tell them merrily,","scene":"2.5"},{"Dataline":"86692","PlayerLinenumber":"3","ActSceneLine":"2.5.24","Player":"juliet","PlayerLine":"If good, thou shamest the music of sweet news","scene":"2.5"},{"Dataline":"86693","PlayerLinenumber":"3","ActSceneLine":"2.5.25","Player":"juliet","PlayerLine":"By playing it to me with so sour a face.","scene":"2.5"},{"Dataline":"86694","PlayerLinenumber":"4","ActSceneLine":"2.5.26","Player":"nurse","PlayerLine":"I am a-weary, give me leave awhile:","scene":"2.5"},{"Dataline":"86695","PlayerLinenumber":"4","ActSceneLine":"2.5.27","Player":"nurse","PlayerLine":"Fie, how my bones ache! what a jaunt have I had!","scene":"2.5"},{"Dataline":"86696","PlayerLinenumber":"5","ActSceneLine":"2.5.28","Player":"juliet","PlayerLine":"I would thou hadst my bones, and I thy news:","scene":"2.5"},{"Dataline":"86697","PlayerLinenumber":"5","ActSceneLine":"2.5.29","Player":"juliet","PlayerLine":"Nay, come, I pray thee, speak, good, good nurse, speak.","scene":"2.5"},{"Dataline":"86698","PlayerLinenumber":"6","ActSceneLine":"2.5.30","Player":"nurse","PlayerLine":"Jesu, what haste? can you not stay awhile?","scene":"2.5"},{"Dataline":"86699","PlayerLinenumber":"6","ActSceneLine":"2.5.31","Player":"nurse","PlayerLine":"Do you not see that I am out of breath?","scene":"2.5"},{"Dataline":"86700","PlayerLinenumber":"7","ActSceneLine":"2.5.32","Player":"juliet","PlayerLine":"How art thou out of breath, when thou hast breath","scene":"2.5"},{"Dataline":"86701","PlayerLinenumber":"7","ActSceneLine":"2.5.33","Player":"juliet","PlayerLine":"To say to me that thou art out of breath?","scene":"2.5"},{"Dataline":"86702","PlayerLinenumber":"7","ActSceneLine":"2.5.34","Player":"juliet","PlayerLine":"The excuse that thou dost make in this delay","scene":"2.5"},{"Dataline":"86703","PlayerLinenumber":"7","ActSceneLine":"2.5.35","Player":"juliet","PlayerLine":"Is longer than the tale thou dost excuse.","scene":"2.5"},{"Dataline":"86704","PlayerLinenumber":"7","ActSceneLine":"2.5.36","Player":"juliet","PlayerLine":"Is thy news good, or bad? answer to that,","scene":"2.5"},{"Dataline":"86705","PlayerLinenumber":"7","ActSceneLine":"2.5.37","Player":"juliet","PlayerLine":"Say either, and I\'ll stay the circumstance:","scene":"2.5"},{"Dataline":"86706","PlayerLinenumber":"7","ActSceneLine":"2.5.38","Player":"juliet","PlayerLine":"Let me be satisfied, is\'t good or bad?","scene":"2.5"},{"Dataline":"86707","PlayerLinenumber":"8","ActSceneLine":"2.5.39","Player":"nurse","PlayerLine":"Well, you have made a simple choice, you know not","scene":"2.5"},{"Dataline":"86708","PlayerLinenumber":"8","ActSceneLine":"2.5.40","Player":"nurse","PlayerLine":"how to choose a man: Romeo! no, not he, though his","scene":"2.5"},{"Dataline":"86709","PlayerLinenumber":"8","ActSceneLine":"2.5.41","Player":"nurse","PlayerLine":"face be better than any man\'s, yet his leg excels","scene":"2.5"},{"Dataline":"86710","PlayerLinenumber":"8","ActSceneLine":"2.5.42","Player":"nurse","PlayerLine":"all men\'s, and for a hand, and a foot, and a body,","scene":"2.5"},{"Dataline":"86711","PlayerLinenumber":"8","ActSceneLine":"2.5.43","Player":"nurse","PlayerLine":"though they be not to be talked on, yet they are","scene":"2.5"},{"Dataline":"86712","PlayerLinenumber":"8","ActSceneLine":"2.5.44","Player":"nurse","PlayerLine":"past compare: he is not the flower of courtesy,","scene":"2.5"},{"Dataline":"86713","PlayerLinenumber":"8","ActSceneLine":"2.5.45","Player":"nurse","PlayerLine":"but, I\'ll warrant him, as gentle as a lamb. Go thy","scene":"2.5"},{"Dataline":"86714","PlayerLinenumber":"8","ActSceneLine":"2.5.46","Player":"nurse","PlayerLine":"ways, wench, serve God. What, have you dined at home?","scene":"2.5"},{"Dataline":"86715","PlayerLinenumber":"9","ActSceneLine":"2.5.47","Player":"juliet","PlayerLine":"No, no: but all this did I know before.","scene":"2.5"},{"Dataline":"86716","PlayerLinenumber":"9","ActSceneLine":"2.5.48","Player":"juliet","PlayerLine":"What says he of our marriage? what of that?","scene":"2.5"},{"Dataline":"86717","PlayerLinenumber":"10","ActSceneLine":"2.5.49","Player":"nurse","PlayerLine":"Lord, how my head aches! what a head have I!","scene":"2.5"},{"Dataline":"86718","PlayerLinenumber":"10","ActSceneLine":"2.5.50","Player":"nurse","PlayerLine":"It beats as it would fall in twenty pieces.","scene":"2.5"},{"Dataline":"86719","PlayerLinenumber":"10","ActSceneLine":"2.5.51","Player":"nurse","PlayerLine":"My back o\' t\' other side,--O, my back, my back!","scene":"2.5"},{"Dataline":"86720","PlayerLinenumber":"10","ActSceneLine":"2.5.52","Player":"nurse","PlayerLine":"Beshrew your heart for sending me about,","scene":"2.5"},{"Dataline":"86721","PlayerLinenumber":"10","ActSceneLine":"2.5.53","Player":"nurse","PlayerLine":"To catch my death with jaunting up and down!","scene":"2.5"},{"Dataline":"86722","PlayerLinenumber":"11","ActSceneLine":"2.5.54","Player":"juliet","PlayerLine":"I\' faith, I am sorry that thou art not well.","scene":"2.5"},{"Dataline":"86723","PlayerLinenumber":"11","ActSceneLine":"2.5.55","Player":"juliet","PlayerLine":"Sweet, sweet, sweet nurse, tell me, what says my love?","scene":"2.5"},{"Dataline":"86724","PlayerLinenumber":"12","ActSceneLine":"2.5.56","Player":"nurse","PlayerLine":"Your love says, like an honest gentleman, and a","scene":"2.5"},{"Dataline":"86725","PlayerLinenumber":"12","ActSceneLine":"2.5.57","Player":"nurse","PlayerLine":"courteous, and a kind, and a handsome, and, I","scene":"2.5"},{"Dataline":"86726","PlayerLinenumber":"12","ActSceneLine":"2.5.58","Player":"nurse","PlayerLine":"warrant, a virtuous,--Where is your mother?","scene":"2.5"},{"Dataline":"86727","PlayerLinenumber":"13","ActSceneLine":"2.5.59","Player":"juliet","PlayerLine":"Where is my mother! why, she is within,","scene":"2.5"},{"Dataline":"86728","PlayerLinenumber":"13","ActSceneLine":"2.5.60","Player":"juliet","PlayerLine":"Where should she be? How oddly thou repliest!","scene":"2.5"},{"Dataline":"86729","PlayerLinenumber":"13","ActSceneLine":"2.5.61","Player":"juliet","PlayerLine":"\'Your love says, like an honest gentleman,","scene":"2.5"},{"Dataline":"86730","PlayerLinenumber":"13","ActSceneLine":"2.5.62","Player":"juliet","PlayerLine":"Where is your mother?\'","scene":"2.5"},{"Dataline":"86731","PlayerLinenumber":"14","ActSceneLine":"2.5.63","Player":"nurse","PlayerLine":"O God\'s lady dear!","scene":"2.5"},{"Dataline":"86732","PlayerLinenumber":"14","ActSceneLine":"2.5.64","Player":"nurse","PlayerLine":"Are you so hot? marry, come up, I trow,","scene":"2.5"},{"Dataline":"86733","PlayerLinenumber":"14","ActSceneLine":"2.5.65","Player":"nurse","PlayerLine":"Is this the poultice for my aching bones?","scene":"2.5"},{"Dataline":"86734","PlayerLinenumber":"14","ActSceneLine":"2.5.66","Player":"nurse","PlayerLine":"Henceforward do your messages yourself.","scene":"2.5"},{"Dataline":"86735","PlayerLinenumber":"15","ActSceneLine":"2.5.67","Player":"juliet","PlayerLine":"Here\'s such a coil! come, what says Romeo?","scene":"2.5"},{"Dataline":"86736","PlayerLinenumber":"16","ActSceneLine":"2.5.68","Player":"nurse","PlayerLine":"Have you got leave to go to shrift to-day?","scene":"2.5"},{"Dataline":"86737","PlayerLinenumber":"17","ActSceneLine":"2.5.69","Player":"juliet","PlayerLine":"I have.","scene":"2.5"},{"Dataline":"86738","PlayerLinenumber":"18","ActSceneLine":"2.5.70","Player":"nurse","PlayerLine":"Then hie you hence to Friar Laurence\' cell,","scene":"2.5"},{"Dataline":"86739","PlayerLinenumber":"18","ActSceneLine":"2.5.71","Player":"nurse","PlayerLine":"There stays a husband to make you a wife:","scene":"2.5"},{"Dataline":"86740","PlayerLinenumber":"18","ActSceneLine":"2.5.72","Player":"nurse","PlayerLine":"Now comes the wanton blood up in your cheeks,","scene":"2.5"},{"Dataline":"86741","PlayerLinenumber":"18","ActSceneLine":"2.5.73","Player":"nurse","PlayerLine":"They\'ll be in scarlet straight at any news.","scene":"2.5"},{"Dataline":"86742","PlayerLinenumber":"18","ActSceneLine":"2.5.74","Player":"nurse","PlayerLine":"Hie you to church, I must another way,","scene":"2.5"},{"Dataline":"86743","PlayerLinenumber":"18","ActSceneLine":"2.5.75","Player":"nurse","PlayerLine":"To fetch a ladder, by the which your love","scene":"2.5"},{"Dataline":"86744","PlayerLinenumber":"18","ActSceneLine":"2.5.76","Player":"nurse","PlayerLine":"Must climb a bird\'s nest soon when it is dark:","scene":"2.5"},{"Dataline":"86745","PlayerLinenumber":"18","ActSceneLine":"2.5.77","Player":"nurse","PlayerLine":"I am the drudge and toil in your delight,","scene":"2.5"},{"Dataline":"86746","PlayerLinenumber":"18","ActSceneLine":"2.5.78","Player":"nurse","PlayerLine":"But you shall bear the burden soon at night.","scene":"2.5"},{"Dataline":"86747","PlayerLinenumber":"18","ActSceneLine":"2.5.79","Player":"nurse","PlayerLine":"Go, I\'ll to dinner: hie you to the cell.","scene":"2.5"},{"Dataline":"86748","PlayerLinenumber":"19","ActSceneLine":"2.5.80","Player":"juliet","PlayerLine":"Hie to high fortune! Honest nurse, farewell.","scene":"2.5"},{"Dataline":"86752","PlayerLinenumber":"1","ActSceneLine":"2.6.1","Player":"friar_laurence","PlayerLine":"So smile the heavens upon this holy act,","scene":"2.6"},{"Dataline":"86753","PlayerLinenumber":"1","ActSceneLine":"2.6.2","Player":"friar_laurence","PlayerLine":"That after hours with sorrow chide us not!","scene":"2.6"},{"Dataline":"86754","PlayerLinenumber":"2","ActSceneLine":"2.6.3","Player":"romeo","PlayerLine":"Amen, amen! but come what sorrow can,","scene":"2.6"},{"Dataline":"86755","PlayerLinenumber":"2","ActSceneLine":"2.6.4","Player":"romeo","PlayerLine":"It cannot countervail the exchange of joy","scene":"2.6"},{"Dataline":"86756","PlayerLinenumber":"2","ActSceneLine":"2.6.5","Player":"romeo","PlayerLine":"That one short minute gives me in her sight:","scene":"2.6"},{"Dataline":"86757","PlayerLinenumber":"2","ActSceneLine":"2.6.6","Player":"romeo","PlayerLine":"Do thou but close our hands with holy words,","scene":"2.6"},{"Dataline":"86758","PlayerLinenumber":"2","ActSceneLine":"2.6.7","Player":"romeo","PlayerLine":"Then love-devouring death do what he dare,","scene":"2.6"},{"Dataline":"86759","PlayerLinenumber":"2","ActSceneLine":"2.6.8","Player":"romeo","PlayerLine":"It is enough I may but call her mine.","scene":"2.6"},{"Dataline":"86760","PlayerLinenumber":"3","ActSceneLine":"2.6.9","Player":"friar_laurence","PlayerLine":"These violent delights have violent ends","scene":"2.6"},{"Dataline":"86761","PlayerLinenumber":"3","ActSceneLine":"2.6.10","Player":"friar_laurence","PlayerLine":"And in their triumph die, like fire and powder,","scene":"2.6"},{"Dataline":"86762","PlayerLinenumber":"3","ActSceneLine":"2.6.11","Player":"friar_laurence","PlayerLine":"Which as they kiss consume: the sweetest honey","scene":"2.6"},{"Dataline":"86763","PlayerLinenumber":"3","ActSceneLine":"2.6.12","Player":"friar_laurence","PlayerLine":"Is loathsome in his own deliciousness","scene":"2.6"},{"Dataline":"86764","PlayerLinenumber":"3","ActSceneLine":"2.6.13","Player":"friar_laurence","PlayerLine":"And in the taste confounds the appetite:","scene":"2.6"},{"Dataline":"86765","PlayerLinenumber":"3","ActSceneLine":"2.6.14","Player":"friar_laurence","PlayerLine":"Therefore love moderately, long love doth so,","scene":"2.6"},{"Dataline":"86766","PlayerLinenumber":"3","ActSceneLine":"2.6.15","Player":"friar_laurence","PlayerLine":"Too swift arrives as tardy as too slow.","scene":"2.6"},{"Dataline":"86768","PlayerLinenumber":"3","ActSceneLine":"2.6.16","Player":"friar_laurence","PlayerLine":"Here comes the lady: O, so light a foot","scene":"2.6"},{"Dataline":"86769","PlayerLinenumber":"3","ActSceneLine":"2.6.17","Player":"friar_laurence","PlayerLine":"Will ne\'er wear out the everlasting flint:","scene":"2.6"},{"Dataline":"86770","PlayerLinenumber":"3","ActSceneLine":"2.6.18","Player":"friar_laurence","PlayerLine":"A lover may bestride the gossamer","scene":"2.6"},{"Dataline":"86771","PlayerLinenumber":"3","ActSceneLine":"2.6.19","Player":"friar_laurence","PlayerLine":"That idles in the wanton summer air,","scene":"2.6"},{"Dataline":"86772","PlayerLinenumber":"3","ActSceneLine":"2.6.20","Player":"friar_laurence","PlayerLine":"And yet not fall, so light is vanity.","scene":"2.6"},{"Dataline":"86773","PlayerLinenumber":"4","ActSceneLine":"2.6.21","Player":"juliet","PlayerLine":"Good even to my ghostly confessor.","scene":"2.6"},{"Dataline":"86774","PlayerLinenumber":"5","ActSceneLine":"2.6.22","Player":"friar_laurence","PlayerLine":"Romeo shall thank thee, daughter, for us both.","scene":"2.6"},{"Dataline":"86775","PlayerLinenumber":"6","ActSceneLine":"2.6.23","Player":"juliet","PlayerLine":"As much to him, else is his thanks too much.","scene":"2.6"},{"Dataline":"86776","PlayerLinenumber":"7","ActSceneLine":"2.6.24","Player":"romeo","PlayerLine":"Ah, Juliet, if the measure of thy joy","scene":"2.6"},{"Dataline":"86777","PlayerLinenumber":"7","ActSceneLine":"2.6.25","Player":"romeo","PlayerLine":"Be heap\'d like mine and that thy skill be more","scene":"2.6"},{"Dataline":"86778","PlayerLinenumber":"7","ActSceneLine":"2.6.26","Player":"romeo","PlayerLine":"To blazon it, then sweeten with thy breath","scene":"2.6"},{"Dataline":"86779","PlayerLinenumber":"7","ActSceneLine":"2.6.27","Player":"romeo","PlayerLine":"This neighbour air, and let rich music\'s tongue","scene":"2.6"},{"Dataline":"86780","PlayerLinenumber":"7","ActSceneLine":"2.6.28","Player":"romeo","PlayerLine":"Unfold the imagined happiness that both","scene":"2.6"},{"Dataline":"86781","PlayerLinenumber":"7","ActSceneLine":"2.6.29","Player":"romeo","PlayerLine":"Receive in either by this dear encounter.","scene":"2.6"},{"Dataline":"86782","PlayerLinenumber":"8","ActSceneLine":"2.6.30","Player":"juliet","PlayerLine":"Conceit, more rich in matter than in words,","scene":"2.6"},{"Dataline":"86783","PlayerLinenumber":"8","ActSceneLine":"2.6.31","Player":"juliet","PlayerLine":"Brags of his substance, not of ornament:","scene":"2.6"},{"Dataline":"86784","PlayerLinenumber":"8","ActSceneLine":"2.6.32","Player":"juliet","PlayerLine":"They are but beggars that can count their worth,","scene":"2.6"},{"Dataline":"86785","PlayerLinenumber":"8","ActSceneLine":"2.6.33","Player":"juliet","PlayerLine":"But my true love is grown to such excess","scene":"2.6"},{"Dataline":"86786","PlayerLinenumber":"8","ActSceneLine":"2.6.34","Player":"juliet","PlayerLine":"I cannot sum up sum of half my wealth.","scene":"2.6"},{"Dataline":"86787","PlayerLinenumber":"9","ActSceneLine":"2.6.35","Player":"friar_laurence","PlayerLine":"Come, come with me, and we will make short work,","scene":"2.6"},{"Dataline":"86788","PlayerLinenumber":"9","ActSceneLine":"2.6.36","Player":"friar_laurence","PlayerLine":"For, by your leaves, you shall not stay alone","scene":"2.6"},{"Dataline":"86789","PlayerLinenumber":"9","ActSceneLine":"2.6.37","Player":"friar_laurence","PlayerLine":"Till holy church incorporate two in one.","scene":"2.6"},{"Dataline":"86794","PlayerLinenumber":"1","ActSceneLine":"3.1.1","Player":"benvolio","PlayerLine":"I pray thee, good Mercutio, let\'s retire:","scene":"3.1"},{"Dataline":"86795","PlayerLinenumber":"1","ActSceneLine":"3.1.2","Player":"benvolio","PlayerLine":"The day is hot, the Capulets abroad,","scene":"3.1"},{"Dataline":"86796","PlayerLinenumber":"1","ActSceneLine":"3.1.3","Player":"benvolio","PlayerLine":"And, if we meet, we shall not scape a brawl,","scene":"3.1"},{"Dataline":"86797","PlayerLinenumber":"1","ActSceneLine":"3.1.4","Player":"benvolio","PlayerLine":"For now, these hot days, is the mad blood stirring.","scene":"3.1"},{"Dataline":"86798","PlayerLinenumber":"2","ActSceneLine":"3.1.5","Player":"mercutio","PlayerLine":"Thou art like one of those fellows that when he","scene":"3.1"},{"Dataline":"86799","PlayerLinenumber":"2","ActSceneLine":"3.1.6","Player":"mercutio","PlayerLine":"enters the confines of a tavern claps me his sword","scene":"3.1"},{"Dataline":"86800","PlayerLinenumber":"2","ActSceneLine":"3.1.7","Player":"mercutio","PlayerLine":"upon the table and says \'God send me no need of","scene":"3.1"},{"Dataline":"86801","PlayerLinenumber":"2","ActSceneLine":"3.1.8","Player":"mercutio","PlayerLine":"thee!\' and by the operation of the second cup draws","scene":"3.1"},{"Dataline":"86802","PlayerLinenumber":"2","ActSceneLine":"3.1.9","Player":"mercutio","PlayerLine":"it on the drawer, when indeed there is no need.","scene":"3.1"},{"Dataline":"86803","PlayerLinenumber":"3","ActSceneLine":"3.1.10","Player":"benvolio","PlayerLine":"Am I like such a fellow?","scene":"3.1"},{"Dataline":"86804","PlayerLinenumber":"4","ActSceneLine":"3.1.11","Player":"mercutio","PlayerLine":"Come, come, thou art as hot a Jack in thy mood as","scene":"3.1"},{"Dataline":"86805","PlayerLinenumber":"4","ActSceneLine":"3.1.12","Player":"mercutio","PlayerLine":"any in Italy, and as soon moved to be moody, and as","scene":"3.1"},{"Dataline":"86806","PlayerLinenumber":"4","ActSceneLine":"3.1.13","Player":"mercutio","PlayerLine":"soon moody to be moved.","scene":"3.1"},{"Dataline":"86807","PlayerLinenumber":"5","ActSceneLine":"3.1.14","Player":"benvolio","PlayerLine":"And what to?","scene":"3.1"},{"Dataline":"86808","PlayerLinenumber":"6","ActSceneLine":"3.1.15","Player":"mercutio","PlayerLine":"Nay, an there were two such, we should have none","scene":"3.1"},{"Dataline":"86809","PlayerLinenumber":"6","ActSceneLine":"3.1.16","Player":"mercutio","PlayerLine":"shortly, for one would kill the other. Thou! why,","scene":"3.1"},{"Dataline":"86810","PlayerLinenumber":"6","ActSceneLine":"3.1.17","Player":"mercutio","PlayerLine":"thou wilt quarrel with a man that hath a hair more,","scene":"3.1"},{"Dataline":"86811","PlayerLinenumber":"6","ActSceneLine":"3.1.18","Player":"mercutio","PlayerLine":"or a hair less, in his beard, than thou hast: thou","scene":"3.1"},{"Dataline":"86812","PlayerLinenumber":"6","ActSceneLine":"3.1.19","Player":"mercutio","PlayerLine":"wilt quarrel with a man for cracking nuts, having no","scene":"3.1"},{"Dataline":"86813","PlayerLinenumber":"6","ActSceneLine":"3.1.20","Player":"mercutio","PlayerLine":"other reason but because thou hast hazel eyes: what","scene":"3.1"},{"Dataline":"86814","PlayerLinenumber":"6","ActSceneLine":"3.1.21","Player":"mercutio","PlayerLine":"eye but such an eye would spy out such a quarrel?","scene":"3.1"},{"Dataline":"86815","PlayerLinenumber":"6","ActSceneLine":"3.1.22","Player":"mercutio","PlayerLine":"Thy head is as fun of quarrels as an egg is full of","scene":"3.1"},{"Dataline":"86816","PlayerLinenumber":"6","ActSceneLine":"3.1.23","Player":"mercutio","PlayerLine":"meat, and yet thy head hath been beaten as addle as","scene":"3.1"},{"Dataline":"86817","PlayerLinenumber":"6","ActSceneLine":"3.1.24","Player":"mercutio","PlayerLine":"an egg for quarrelling: thou hast quarrelled with a","scene":"3.1"},{"Dataline":"86818","PlayerLinenumber":"6","ActSceneLine":"3.1.25","Player":"mercutio","PlayerLine":"man for coughing in the street, because he hath","scene":"3.1"},{"Dataline":"86819","PlayerLinenumber":"6","ActSceneLine":"3.1.26","Player":"mercutio","PlayerLine":"wakened thy dog that hath lain asleep in the sun:","scene":"3.1"},{"Dataline":"86820","PlayerLinenumber":"6","ActSceneLine":"3.1.27","Player":"mercutio","PlayerLine":"didst thou not fall out with a tailor for wearing","scene":"3.1"},{"Dataline":"86821","PlayerLinenumber":"6","ActSceneLine":"3.1.28","Player":"mercutio","PlayerLine":"his new doublet before Easter? with another, for","scene":"3.1"},{"Dataline":"86822","PlayerLinenumber":"6","ActSceneLine":"3.1.29","Player":"mercutio","PlayerLine":"tying his new shoes with old riband? and yet thou","scene":"3.1"},{"Dataline":"86823","PlayerLinenumber":"6","ActSceneLine":"3.1.30","Player":"mercutio","PlayerLine":"wilt tutor me from quarrelling!","scene":"3.1"},{"Dataline":"86824","PlayerLinenumber":"7","ActSceneLine":"3.1.31","Player":"benvolio","PlayerLine":"An I were so apt to quarrel as thou art, any man","scene":"3.1"},{"Dataline":"86825","PlayerLinenumber":"7","ActSceneLine":"3.1.32","Player":"benvolio","PlayerLine":"should buy the fee-simple of my life for an hour and a quarter.","scene":"3.1"},{"Dataline":"86826","PlayerLinenumber":"8","ActSceneLine":"3.1.33","Player":"mercutio","PlayerLine":"The fee-simple! O simple!","scene":"3.1"},{"Dataline":"86827","PlayerLinenumber":"9","ActSceneLine":"3.1.34","Player":"benvolio","PlayerLine":"By my head, here come the Capulets.","scene":"3.1"},{"Dataline":"86828","PlayerLinenumber":"10","ActSceneLine":"3.1.35","Player":"mercutio","PlayerLine":"By my heel, I care not.","scene":"3.1"},{"Dataline":"86830","PlayerLinenumber":"11","ActSceneLine":"3.1.36","Player":"tybalt","PlayerLine":"Follow me close, for I will speak to them.","scene":"3.1"},{"Dataline":"86831","PlayerLinenumber":"11","ActSceneLine":"3.1.37","Player":"tybalt","PlayerLine":"Gentlemen, good den: a word with one of you.","scene":"3.1"},{"Dataline":"86832","PlayerLinenumber":"12","ActSceneLine":"3.1.38","Player":"mercutio","PlayerLine":"And but one word with one of us? couple it with","scene":"3.1"},{"Dataline":"86833","PlayerLinenumber":"12","ActSceneLine":"3.1.39","Player":"mercutio","PlayerLine":"something, make it a word and a blow.","scene":"3.1"},{"Dataline":"86834","PlayerLinenumber":"13","ActSceneLine":"3.1.40","Player":"tybalt","PlayerLine":"You shall find me apt enough to that, sir, an you","scene":"3.1"},{"Dataline":"86835","PlayerLinenumber":"13","ActSceneLine":"3.1.41","Player":"tybalt","PlayerLine":"will give me occasion.","scene":"3.1"},{"Dataline":"86836","PlayerLinenumber":"14","ActSceneLine":"3.1.42","Player":"mercutio","PlayerLine":"Could you not take some occasion without giving?","scene":"3.1"},{"Dataline":"86837","PlayerLinenumber":"15","ActSceneLine":"3.1.43","Player":"tybalt","PlayerLine":"Mercutio, thou consort\'st with Romeo,--","scene":"3.1"},{"Dataline":"86838","PlayerLinenumber":"16","ActSceneLine":"3.1.44","Player":"mercutio","PlayerLine":"Consort! what, dost thou make us minstrels? an","scene":"3.1"},{"Dataline":"86839","PlayerLinenumber":"16","ActSceneLine":"3.1.45","Player":"mercutio","PlayerLine":"thou make minstrels of us, look to hear nothing but","scene":"3.1"},{"Dataline":"86840","PlayerLinenumber":"16","ActSceneLine":"3.1.46","Player":"mercutio","PlayerLine":"discords: here\'s my fiddlestick, here\'s that shall","scene":"3.1"},{"Dataline":"86841","PlayerLinenumber":"16","ActSceneLine":"3.1.47","Player":"mercutio","PlayerLine":"make you dance. \'Zounds, consort!","scene":"3.1"},{"Dataline":"86842","PlayerLinenumber":"17","ActSceneLine":"3.1.48","Player":"benvolio","PlayerLine":"We talk here in the public haunt of men:","scene":"3.1"},{"Dataline":"86843","PlayerLinenumber":"17","ActSceneLine":"3.1.49","Player":"benvolio","PlayerLine":"Either withdraw unto some private place,","scene":"3.1"},{"Dataline":"86844","PlayerLinenumber":"17","ActSceneLine":"3.1.50","Player":"benvolio","PlayerLine":"And reason coldly of your grievances,","scene":"3.1"},{"Dataline":"86845","PlayerLinenumber":"17","ActSceneLine":"3.1.51","Player":"benvolio","PlayerLine":"Or else depart, here all eyes gaze on us.","scene":"3.1"},{"Dataline":"86846","PlayerLinenumber":"18","ActSceneLine":"3.1.52","Player":"mercutio","PlayerLine":"Men\'s eyes were made to look, and let them gaze,","scene":"3.1"},{"Dataline":"86847","PlayerLinenumber":"18","ActSceneLine":"3.1.53","Player":"mercutio","PlayerLine":"I will not budge for no man\'s pleasure, I.","scene":"3.1"},{"Dataline":"86849","PlayerLinenumber":"19","ActSceneLine":"3.1.54","Player":"tybalt","PlayerLine":"Well, peace be with you, sir: here comes my man.","scene":"3.1"},{"Dataline":"86850","PlayerLinenumber":"20","ActSceneLine":"3.1.55","Player":"mercutio","PlayerLine":"But I\'ll be hanged, sir, if he wear your livery:","scene":"3.1"},{"Dataline":"86851","PlayerLinenumber":"20","ActSceneLine":"3.1.56","Player":"mercutio","PlayerLine":"Marry, go before to field, he\'ll be your follower,","scene":"3.1"},{"Dataline":"86852","PlayerLinenumber":"20","ActSceneLine":"3.1.57","Player":"mercutio","PlayerLine":"Your worship in that sense may call him \'man.\'","scene":"3.1"},{"Dataline":"86853","PlayerLinenumber":"21","ActSceneLine":"3.1.58","Player":"tybalt","PlayerLine":"Romeo, the hate I bear thee can afford","scene":"3.1"},{"Dataline":"86854","PlayerLinenumber":"21","ActSceneLine":"3.1.59","Player":"tybalt","PlayerLine":"No better term than this,--thou art a villain.","scene":"3.1"},{"Dataline":"86855","PlayerLinenumber":"22","ActSceneLine":"3.1.60","Player":"romeo","PlayerLine":"Tybalt, the reason that I have to love thee","scene":"3.1"},{"Dataline":"86856","PlayerLinenumber":"22","ActSceneLine":"3.1.61","Player":"romeo","PlayerLine":"Doth much excuse the appertaining rage","scene":"3.1"},{"Dataline":"86857","PlayerLinenumber":"22","ActSceneLine":"3.1.62","Player":"romeo","PlayerLine":"To such a greeting: villain am I none,","scene":"3.1"},{"Dataline":"86858","PlayerLinenumber":"22","ActSceneLine":"3.1.63","Player":"romeo","PlayerLine":"Therefore farewell, I see thou know\'st me not.","scene":"3.1"},{"Dataline":"86859","PlayerLinenumber":"23","ActSceneLine":"3.1.64","Player":"tybalt","PlayerLine":"Boy, this shall not excuse the injuries","scene":"3.1"},{"Dataline":"86860","PlayerLinenumber":"23","ActSceneLine":"3.1.65","Player":"tybalt","PlayerLine":"That thou hast done me, therefore turn and draw.","scene":"3.1"},{"Dataline":"86861","PlayerLinenumber":"24","ActSceneLine":"3.1.66","Player":"romeo","PlayerLine":"I do protest, I never injured thee,","scene":"3.1"},{"Dataline":"86862","PlayerLinenumber":"24","ActSceneLine":"3.1.67","Player":"romeo","PlayerLine":"But love thee better than thou canst devise,","scene":"3.1"},{"Dataline":"86863","PlayerLinenumber":"24","ActSceneLine":"3.1.68","Player":"romeo","PlayerLine":"Till thou shalt know the reason of my love:","scene":"3.1"},{"Dataline":"86864","PlayerLinenumber":"24","ActSceneLine":"3.1.69","Player":"romeo","PlayerLine":"And so, good Capulet,--which name I tender","scene":"3.1"},{"Dataline":"86865","PlayerLinenumber":"24","ActSceneLine":"3.1.70","Player":"romeo","PlayerLine":"As dearly as my own,--be satisfied.","scene":"3.1"},{"Dataline":"86866","PlayerLinenumber":"25","ActSceneLine":"3.1.71","Player":"mercutio","PlayerLine":"O calm, dishonourable, vile submission!","scene":"3.1"},{"Dataline":"86867","PlayerLinenumber":"25","ActSceneLine":"3.1.72","Player":"mercutio","PlayerLine":"Alla stoccata carries it away.","scene":"3.1"},{"Dataline":"86869","PlayerLinenumber":"25","ActSceneLine":"3.1.73","Player":"mercutio","PlayerLine":"Tybalt, you rat-catcher, will you walk?","scene":"3.1"},{"Dataline":"86870","PlayerLinenumber":"26","ActSceneLine":"3.1.74","Player":"tybalt","PlayerLine":"What wouldst thou have with me?","scene":"3.1"},{"Dataline":"86871","PlayerLinenumber":"27","ActSceneLine":"3.1.75","Player":"mercutio","PlayerLine":"Good king of cats, nothing but one of your nine","scene":"3.1"},{"Dataline":"86872","PlayerLinenumber":"27","ActSceneLine":"3.1.76","Player":"mercutio","PlayerLine":"lives, that I mean to make bold withal, and as you","scene":"3.1"},{"Dataline":"86873","PlayerLinenumber":"27","ActSceneLine":"3.1.77","Player":"mercutio","PlayerLine":"shall use me hereafter, drybeat the rest of the","scene":"3.1"},{"Dataline":"86874","PlayerLinenumber":"27","ActSceneLine":"3.1.78","Player":"mercutio","PlayerLine":"eight. Will you pluck your sword out of his pitcher","scene":"3.1"},{"Dataline":"86875","PlayerLinenumber":"27","ActSceneLine":"3.1.79","Player":"mercutio","PlayerLine":"by the ears? make haste, lest mine be about your","scene":"3.1"},{"Dataline":"86876","PlayerLinenumber":"27","ActSceneLine":"3.1.80","Player":"mercutio","PlayerLine":"ears ere it be out.","scene":"3.1"},{"Dataline":"86877","PlayerLinenumber":"28","ActSceneLine":"3.1.81","Player":"tybalt","PlayerLine":"I am for you.","scene":"3.1"},{"Dataline":"86879","PlayerLinenumber":"29","ActSceneLine":"3.1.82","Player":"romeo","PlayerLine":"Gentle Mercutio, put thy rapier up.","scene":"3.1"},{"Dataline":"86880","PlayerLinenumber":"30","ActSceneLine":"3.1.83","Player":"mercutio","PlayerLine":"Come, sir, your passado.","scene":"3.1"},{"Dataline":"86882","PlayerLinenumber":"31","ActSceneLine":"3.1.84","Player":"romeo","PlayerLine":"Draw, Benvolio, beat down their weapons.","scene":"3.1"},{"Dataline":"86883","PlayerLinenumber":"31","ActSceneLine":"3.1.85","Player":"romeo","PlayerLine":"Gentlemen, for shame, forbear this outrage!","scene":"3.1"},{"Dataline":"86884","PlayerLinenumber":"31","ActSceneLine":"3.1.86","Player":"romeo","PlayerLine":"Tybalt, Mercutio, the prince expressly hath","scene":"3.1"},{"Dataline":"86885","PlayerLinenumber":"31","ActSceneLine":"3.1.87","Player":"romeo","PlayerLine":"Forbidden bandying in Verona streets:","scene":"3.1"},{"Dataline":"86886","PlayerLinenumber":"31","ActSceneLine":"3.1.88","Player":"romeo","PlayerLine":"Hold, Tybalt! good Mercutio!","scene":"3.1"},{"Dataline":"86888","PlayerLinenumber":"32","ActSceneLine":"3.1.89","Player":"mercutio","PlayerLine":"I am hurt.","scene":"3.1"},{"Dataline":"86889","PlayerLinenumber":"32","ActSceneLine":"3.1.90","Player":"mercutio","PlayerLine":"A plague o\' both your houses! I am sped.","scene":"3.1"},{"Dataline":"86890","PlayerLinenumber":"32","ActSceneLine":"3.1.91","Player":"mercutio","PlayerLine":"Is he gone, and hath nothing?","scene":"3.1"},{"Dataline":"86891","PlayerLinenumber":"33","ActSceneLine":"3.1.92","Player":"benvolio","PlayerLine":"What, art thou hurt?","scene":"3.1"},{"Dataline":"86892","PlayerLinenumber":"34","ActSceneLine":"3.1.93","Player":"mercutio","PlayerLine":"Ay, ay, a scratch, a scratch, marry, \'tis enough.","scene":"3.1"},{"Dataline":"86893","PlayerLinenumber":"34","ActSceneLine":"3.1.94","Player":"mercutio","PlayerLine":"Where is my page? Go, villain, fetch a surgeon.","scene":"3.1"},{"Dataline":"86895","PlayerLinenumber":"35","ActSceneLine":"3.1.95","Player":"romeo","PlayerLine":"Courage, man, the hurt cannot be much.","scene":"3.1"},{"Dataline":"86896","PlayerLinenumber":"36","ActSceneLine":"3.1.96","Player":"mercutio","PlayerLine":"No, \'tis not so deep as a well, nor so wide as a","scene":"3.1"},{"Dataline":"86897","PlayerLinenumber":"36","ActSceneLine":"3.1.97","Player":"mercutio","PlayerLine":"church-door, but \'tis enough,\'twill serve: ask for","scene":"3.1"},{"Dataline":"86898","PlayerLinenumber":"36","ActSceneLine":"3.1.98","Player":"mercutio","PlayerLine":"me to-morrow, and you shall find me a grave man. I","scene":"3.1"},{"Dataline":"86899","PlayerLinenumber":"36","ActSceneLine":"3.1.99","Player":"mercutio","PlayerLine":"am peppered, I warrant, for this world. A plague o\'","scene":"3.1"},{"Dataline":"86900","PlayerLinenumber":"36","ActSceneLine":"3.1.100","Player":"mercutio","PlayerLine":"both your houses! \'Zounds, a dog, a rat, a mouse, a","scene":"3.1"},{"Dataline":"86901","PlayerLinenumber":"36","ActSceneLine":"3.1.101","Player":"mercutio","PlayerLine":"cat, to scratch a man to death! a braggart, a","scene":"3.1"},{"Dataline":"86902","PlayerLinenumber":"36","ActSceneLine":"3.1.102","Player":"mercutio","PlayerLine":"rogue, a villain, that fights by the book of","scene":"3.1"},{"Dataline":"86903","PlayerLinenumber":"36","ActSceneLine":"3.1.103","Player":"mercutio","PlayerLine":"arithmetic! Why the devil came you between us? I","scene":"3.1"},{"Dataline":"86904","PlayerLinenumber":"36","ActSceneLine":"3.1.104","Player":"mercutio","PlayerLine":"was hurt under your arm.","scene":"3.1"},{"Dataline":"86905","PlayerLinenumber":"37","ActSceneLine":"3.1.105","Player":"romeo","PlayerLine":"I thought all for the best.","scene":"3.1"},{"Dataline":"86906","PlayerLinenumber":"38","ActSceneLine":"3.1.106","Player":"mercutio","PlayerLine":"Help me into some house, Benvolio,","scene":"3.1"},{"Dataline":"86907","PlayerLinenumber":"38","ActSceneLine":"3.1.107","Player":"mercutio","PlayerLine":"Or I shall faint. A plague o\' both your houses!","scene":"3.1"},{"Dataline":"86908","PlayerLinenumber":"38","ActSceneLine":"3.1.108","Player":"mercutio","PlayerLine":"They have made worms\' meat of me: I have it,","scene":"3.1"},{"Dataline":"86909","PlayerLinenumber":"38","ActSceneLine":"3.1.109","Player":"mercutio","PlayerLine":"And soundly too: your houses!","scene":"3.1"},{"Dataline":"86911","PlayerLinenumber":"39","ActSceneLine":"3.1.110","Player":"romeo","PlayerLine":"This gentleman, the prince\'s near ally,","scene":"3.1"},{"Dataline":"86912","PlayerLinenumber":"39","ActSceneLine":"3.1.111","Player":"romeo","PlayerLine":"My very friend, hath got his mortal hurt","scene":"3.1"},{"Dataline":"86913","PlayerLinenumber":"39","ActSceneLine":"3.1.112","Player":"romeo","PlayerLine":"In my behalf, my reputation stain\'d","scene":"3.1"},{"Dataline":"86914","PlayerLinenumber":"39","ActSceneLine":"3.1.113","Player":"romeo","PlayerLine":"With Tybalt\'s slander,--Tybalt, that an hour","scene":"3.1"},{"Dataline":"86915","PlayerLinenumber":"39","ActSceneLine":"3.1.114","Player":"romeo","PlayerLine":"Hath been my kinsman! O sweet Juliet,","scene":"3.1"},{"Dataline":"86916","PlayerLinenumber":"39","ActSceneLine":"3.1.115","Player":"romeo","PlayerLine":"Thy beauty hath made me effeminate","scene":"3.1"},{"Dataline":"86917","PlayerLinenumber":"39","ActSceneLine":"3.1.116","Player":"romeo","PlayerLine":"And in my temper soften\'d valour\'s steel!","scene":"3.1"},{"Dataline":"86919","PlayerLinenumber":"40","ActSceneLine":"3.1.117","Player":"benvolio","PlayerLine":"O Romeo, Romeo, brave Mercutio\'s dead!","scene":"3.1"},{"Dataline":"86920","PlayerLinenumber":"40","ActSceneLine":"3.1.118","Player":"benvolio","PlayerLine":"That gallant spirit hath aspired the clouds,","scene":"3.1"},{"Dataline":"86921","PlayerLinenumber":"40","ActSceneLine":"3.1.119","Player":"benvolio","PlayerLine":"Which too untimely here did scorn the earth.","scene":"3.1"},{"Dataline":"86922","PlayerLinenumber":"41","ActSceneLine":"3.1.120","Player":"romeo","PlayerLine":"This day\'s black fate on more days doth depend,","scene":"3.1"},{"Dataline":"86923","PlayerLinenumber":"41","ActSceneLine":"3.1.121","Player":"romeo","PlayerLine":"This but begins the woe, others must end.","scene":"3.1"},{"Dataline":"86924","PlayerLinenumber":"42","ActSceneLine":"3.1.122","Player":"benvolio","PlayerLine":"Here comes the furious Tybalt back again.","scene":"3.1"},{"Dataline":"86925","PlayerLinenumber":"43","ActSceneLine":"3.1.123","Player":"romeo","PlayerLine":"Alive, in triumph! and Mercutio slain!","scene":"3.1"},{"Dataline":"86926","PlayerLinenumber":"43","ActSceneLine":"3.1.124","Player":"romeo","PlayerLine":"Away to heaven, respective lenity,","scene":"3.1"},{"Dataline":"86927","PlayerLinenumber":"43","ActSceneLine":"3.1.125","Player":"romeo","PlayerLine":"And fire-eyed fury be my conduct now!","scene":"3.1"},{"Dataline":"86929","PlayerLinenumber":"43","ActSceneLine":"3.1.126","Player":"romeo","PlayerLine":"Now, Tybalt, take the villain back again,","scene":"3.1"},{"Dataline":"86930","PlayerLinenumber":"43","ActSceneLine":"3.1.127","Player":"romeo","PlayerLine":"That late thou gavest me, for Mercutio\'s soul","scene":"3.1"},{"Dataline":"86931","PlayerLinenumber":"43","ActSceneLine":"3.1.128","Player":"romeo","PlayerLine":"Is but a little way above our heads,","scene":"3.1"},{"Dataline":"86932","PlayerLinenumber":"43","ActSceneLine":"3.1.129","Player":"romeo","PlayerLine":"Staying for thine to keep him company:","scene":"3.1"},{"Dataline":"86933","PlayerLinenumber":"43","ActSceneLine":"3.1.130","Player":"romeo","PlayerLine":"Either thou, or I, or both, must go with him.","scene":"3.1"},{"Dataline":"86934","PlayerLinenumber":"44","ActSceneLine":"3.1.131","Player":"tybalt","PlayerLine":"Thou, wretched boy, that didst consort him here,","scene":"3.1"},{"Dataline":"86935","PlayerLinenumber":"44","ActSceneLine":"3.1.132","Player":"tybalt","PlayerLine":"Shalt with him hence.","scene":"3.1"},{"Dataline":"86936","PlayerLinenumber":"45","ActSceneLine":"3.1.133","Player":"romeo","PlayerLine":"This shall determine that.","scene":"3.1"},{"Dataline":"86937","PlayerLinenumber":"45","ActSceneLine":"3.1.133","Player":"romeo","PlayerLine":"They fight, TYBALT falls","scene":"3.1"},{"Dataline":"86938","PlayerLinenumber":"46","ActSceneLine":"3.1.134","Player":"benvolio","PlayerLine":"Romeo, away, be gone!","scene":"3.1"},{"Dataline":"86939","PlayerLinenumber":"46","ActSceneLine":"3.1.135","Player":"benvolio","PlayerLine":"The citizens are up, and Tybalt slain.","scene":"3.1"},{"Dataline":"86940","PlayerLinenumber":"46","ActSceneLine":"3.1.136","Player":"benvolio","PlayerLine":"Stand not amazed: the prince will doom thee death,","scene":"3.1"},{"Dataline":"86941","PlayerLinenumber":"46","ActSceneLine":"3.1.137","Player":"benvolio","PlayerLine":"If thou art taken: hence, be gone, away!","scene":"3.1"},{"Dataline":"86942","PlayerLinenumber":"47","ActSceneLine":"3.1.138","Player":"romeo","PlayerLine":"O, I am fortune\'s fool!","scene":"3.1"},{"Dataline":"86943","PlayerLinenumber":"48","ActSceneLine":"3.1.139","Player":"benvolio","PlayerLine":"Why dost thou stay?","scene":"3.1"},{"Dataline":"86946","PlayerLinenumber":"49","ActSceneLine":"3.1.140","Player":"first_citizen","PlayerLine":"Which way ran he that kill\'d Mercutio?","scene":"3.1"},{"Dataline":"86947","PlayerLinenumber":"49","ActSceneLine":"3.1.141","Player":"first_citizen","PlayerLine":"Tybalt, that murderer, which way ran he?","scene":"3.1"},{"Dataline":"86948","PlayerLinenumber":"50","ActSceneLine":"3.1.142","Player":"benvolio","PlayerLine":"There lies that Tybalt.","scene":"3.1"},{"Dataline":"86949","PlayerLinenumber":"51","ActSceneLine":"3.1.143","Player":"first_citizen","PlayerLine":"Up, sir, go with me,","scene":"3.1"},{"Dataline":"86950","PlayerLinenumber":"51","ActSceneLine":"3.1.144","Player":"first_citizen","PlayerLine":"I charge thee in the princes name, obey.","scene":"3.1"},{"Dataline":"86951","PlayerLinenumber":"51","ActSceneLine":"3.1.144","Player":"first_citizen","PlayerLine":"Enter Prince, attended, MONTAGUE, CAPULET, their Wives, and others","scene":"3.1"},{"Dataline":"86952","PlayerLinenumber":"52","ActSceneLine":"3.1.145","Player":"prince","PlayerLine":"Where are the vile beginners of this fray?","scene":"3.1"},{"Dataline":"86953","PlayerLinenumber":"53","ActSceneLine":"3.1.146","Player":"benvolio","PlayerLine":"O noble prince, I can discover all","scene":"3.1"},{"Dataline":"86954","PlayerLinenumber":"53","ActSceneLine":"3.1.147","Player":"benvolio","PlayerLine":"The unlucky manage of this fatal brawl:","scene":"3.1"},{"Dataline":"86955","PlayerLinenumber":"53","ActSceneLine":"3.1.148","Player":"benvolio","PlayerLine":"There lies the man, slain by young Romeo,","scene":"3.1"},{"Dataline":"86956","PlayerLinenumber":"53","ActSceneLine":"3.1.149","Player":"benvolio","PlayerLine":"That slew thy kinsman, brave Mercutio.","scene":"3.1"},{"Dataline":"86957","PlayerLinenumber":"54","ActSceneLine":"3.1.150","Player":"lady_capulet","PlayerLine":"Tybalt, my cousin! O my brother\'s child!","scene":"3.1"},{"Dataline":"86958","PlayerLinenumber":"54","ActSceneLine":"3.1.151","Player":"lady_capulet","PlayerLine":"O prince! O cousin! husband! O, the blood is spilt","scene":"3.1"},{"Dataline":"86959","PlayerLinenumber":"54","ActSceneLine":"3.1.152","Player":"lady_capulet","PlayerLine":"O my dear kinsman! Prince, as thou art true,","scene":"3.1"},{"Dataline":"86960","PlayerLinenumber":"54","ActSceneLine":"3.1.153","Player":"lady_capulet","PlayerLine":"For blood of ours, shed blood of Montague.","scene":"3.1"},{"Dataline":"86961","PlayerLinenumber":"54","ActSceneLine":"3.1.154","Player":"lady_capulet","PlayerLine":"O cousin, cousin!","scene":"3.1"},{"Dataline":"86962","PlayerLinenumber":"55","ActSceneLine":"3.1.155","Player":"prince","PlayerLine":"Benvolio, who began this bloody fray?","scene":"3.1"},{"Dataline":"86963","PlayerLinenumber":"56","ActSceneLine":"3.1.156","Player":"benvolio","PlayerLine":"Tybalt, here slain, whom Romeo\'s hand did slay,","scene":"3.1"},{"Dataline":"86964","PlayerLinenumber":"56","ActSceneLine":"3.1.157","Player":"benvolio","PlayerLine":"Romeo that spoke him fair, bade him bethink","scene":"3.1"},{"Dataline":"86965","PlayerLinenumber":"56","ActSceneLine":"3.1.158","Player":"benvolio","PlayerLine":"How nice the quarrel was, and urged withal","scene":"3.1"},{"Dataline":"86966","PlayerLinenumber":"56","ActSceneLine":"3.1.159","Player":"benvolio","PlayerLine":"Your high displeasure: all this uttered","scene":"3.1"},{"Dataline":"86967","PlayerLinenumber":"56","ActSceneLine":"3.1.160","Player":"benvolio","PlayerLine":"With gentle breath, calm look, knees humbly bow\'d,","scene":"3.1"},{"Dataline":"86968","PlayerLinenumber":"56","ActSceneLine":"3.1.161","Player":"benvolio","PlayerLine":"Could not take truce with the unruly spleen","scene":"3.1"},{"Dataline":"86969","PlayerLinenumber":"56","ActSceneLine":"3.1.162","Player":"benvolio","PlayerLine":"Of Tybalt deaf to peace, but that he tilts","scene":"3.1"},{"Dataline":"86970","PlayerLinenumber":"56","ActSceneLine":"3.1.163","Player":"benvolio","PlayerLine":"With piercing steel at bold Mercutio\'s breast,","scene":"3.1"},{"Dataline":"86971","PlayerLinenumber":"56","ActSceneLine":"3.1.164","Player":"benvolio","PlayerLine":"Who all as hot, turns deadly point to point,","scene":"3.1"},{"Dataline":"86972","PlayerLinenumber":"56","ActSceneLine":"3.1.165","Player":"benvolio","PlayerLine":"And, with a martial scorn, with one hand beats","scene":"3.1"},{"Dataline":"86973","PlayerLinenumber":"56","ActSceneLine":"3.1.166","Player":"benvolio","PlayerLine":"Cold death aside, and with the other sends","scene":"3.1"},{"Dataline":"86974","PlayerLinenumber":"56","ActSceneLine":"3.1.167","Player":"benvolio","PlayerLine":"It back to Tybalt, whose dexterity,","scene":"3.1"},{"Dataline":"86975","PlayerLinenumber":"56","ActSceneLine":"3.1.168","Player":"benvolio","PlayerLine":"Retorts it: Romeo he cries aloud,","scene":"3.1"},{"Dataline":"86976","PlayerLinenumber":"56","ActSceneLine":"3.1.169","Player":"benvolio","PlayerLine":"\'Hold, friends! friends, part!\' and, swifter than","scene":"3.1"},{"Dataline":"86977","PlayerLinenumber":"56","ActSceneLine":"3.1.170","Player":"benvolio","PlayerLine":"his tongue,","scene":"3.1"},{"Dataline":"86978","PlayerLinenumber":"56","ActSceneLine":"3.1.171","Player":"benvolio","PlayerLine":"His agile arm beats down their fatal points,","scene":"3.1"},{"Dataline":"86979","PlayerLinenumber":"56","ActSceneLine":"3.1.172","Player":"benvolio","PlayerLine":"And \'twixt them rushes, underneath whose arm","scene":"3.1"},{"Dataline":"86980","PlayerLinenumber":"56","ActSceneLine":"3.1.173","Player":"benvolio","PlayerLine":"An envious thrust from Tybalt hit the life","scene":"3.1"},{"Dataline":"86981","PlayerLinenumber":"56","ActSceneLine":"3.1.174","Player":"benvolio","PlayerLine":"Of stout Mercutio, and then Tybalt fled,","scene":"3.1"},{"Dataline":"86982","PlayerLinenumber":"56","ActSceneLine":"3.1.175","Player":"benvolio","PlayerLine":"But by and by comes back to Romeo,","scene":"3.1"},{"Dataline":"86983","PlayerLinenumber":"56","ActSceneLine":"3.1.176","Player":"benvolio","PlayerLine":"Who had but newly entertain\'d revenge,","scene":"3.1"},{"Dataline":"86984","PlayerLinenumber":"56","ActSceneLine":"3.1.177","Player":"benvolio","PlayerLine":"And to \'t they go like lightning, for, ere I","scene":"3.1"},{"Dataline":"86985","PlayerLinenumber":"56","ActSceneLine":"3.1.178","Player":"benvolio","PlayerLine":"Could draw to part them, was stout Tybalt slain.","scene":"3.1"},{"Dataline":"86986","PlayerLinenumber":"56","ActSceneLine":"3.1.179","Player":"benvolio","PlayerLine":"And, as he fell, did Romeo turn and fly.","scene":"3.1"},{"Dataline":"86987","PlayerLinenumber":"56","ActSceneLine":"3.1.180","Player":"benvolio","PlayerLine":"This is the truth, or let Benvolio die.","scene":"3.1"},{"Dataline":"86988","PlayerLinenumber":"57","ActSceneLine":"3.1.181","Player":"lady_capulet","PlayerLine":"He is a kinsman to the Montague,","scene":"3.1"},{"Dataline":"86989","PlayerLinenumber":"57","ActSceneLine":"3.1.182","Player":"lady_capulet","PlayerLine":"Affection makes him false, he speaks not true:","scene":"3.1"},{"Dataline":"86990","PlayerLinenumber":"57","ActSceneLine":"3.1.183","Player":"lady_capulet","PlayerLine":"Some twenty of them fought in this black strife,","scene":"3.1"},{"Dataline":"86991","PlayerLinenumber":"57","ActSceneLine":"3.1.184","Player":"lady_capulet","PlayerLine":"And all those twenty could but kill one life.","scene":"3.1"},{"Dataline":"86992","PlayerLinenumber":"57","ActSceneLine":"3.1.185","Player":"lady_capulet","PlayerLine":"I beg for justice, which thou, prince, must give,","scene":"3.1"},{"Dataline":"86993","PlayerLinenumber":"57","ActSceneLine":"3.1.186","Player":"lady_capulet","PlayerLine":"Romeo slew Tybalt, Romeo must not live.","scene":"3.1"},{"Dataline":"86994","PlayerLinenumber":"58","ActSceneLine":"3.1.187","Player":"prince","PlayerLine":"Romeo slew him, he slew Mercutio,","scene":"3.1"},{"Dataline":"86995","PlayerLinenumber":"58","ActSceneLine":"3.1.188","Player":"prince","PlayerLine":"Who now the price of his dear blood doth owe?","scene":"3.1"},{"Dataline":"86996","PlayerLinenumber":"59","ActSceneLine":"3.1.189","Player":"montague","PlayerLine":"Not Romeo, prince, he was Mercutio\'s friend,","scene":"3.1"},{"Dataline":"86997","PlayerLinenumber":"59","ActSceneLine":"3.1.190","Player":"montague","PlayerLine":"His fault concludes but what the law should end,","scene":"3.1"},{"Dataline":"86998","PlayerLinenumber":"59","ActSceneLine":"3.1.191","Player":"montague","PlayerLine":"The life of Tybalt.","scene":"3.1"},{"Dataline":"86999","PlayerLinenumber":"60","ActSceneLine":"3.1.192","Player":"prince","PlayerLine":"And for that offence","scene":"3.1"},{"Dataline":"87000","PlayerLinenumber":"60","ActSceneLine":"3.1.193","Player":"prince","PlayerLine":"Immediately we do exile him hence:","scene":"3.1"},{"Dataline":"87001","PlayerLinenumber":"60","ActSceneLine":"3.1.194","Player":"prince","PlayerLine":"I have an interest in your hate\'s proceeding,","scene":"3.1"},{"Dataline":"87002","PlayerLinenumber":"60","ActSceneLine":"3.1.195","Player":"prince","PlayerLine":"My blood for your rude brawls doth lie a-bleeding,","scene":"3.1"},{"Dataline":"87003","PlayerLinenumber":"60","ActSceneLine":"3.1.196","Player":"prince","PlayerLine":"But I\'ll amerce you with so strong a fine","scene":"3.1"},{"Dataline":"87004","PlayerLinenumber":"60","ActSceneLine":"3.1.197","Player":"prince","PlayerLine":"That you shall all repent the loss of mine:","scene":"3.1"},{"Dataline":"87005","PlayerLinenumber":"60","ActSceneLine":"3.1.198","Player":"prince","PlayerLine":"I will be deaf to pleading and excuses,","scene":"3.1"},{"Dataline":"87006","PlayerLinenumber":"60","ActSceneLine":"3.1.199","Player":"prince","PlayerLine":"Nor tears nor prayers shall purchase out abuses:","scene":"3.1"},{"Dataline":"87007","PlayerLinenumber":"60","ActSceneLine":"3.1.200","Player":"prince","PlayerLine":"Therefore use none: let Romeo hence in haste,","scene":"3.1"},{"Dataline":"87008","PlayerLinenumber":"60","ActSceneLine":"3.1.201","Player":"prince","PlayerLine":"Else, when he\'s found, that hour is his last.","scene":"3.1"},{"Dataline":"87009","PlayerLinenumber":"60","ActSceneLine":"3.1.202","Player":"prince","PlayerLine":"Bear hence this body and attend our will:","scene":"3.1"},{"Dataline":"87010","PlayerLinenumber":"60","ActSceneLine":"3.1.203","Player":"prince","PlayerLine":"Mercy but murders, pardoning those that kill.","scene":"3.1"},{"Dataline":"87014","PlayerLinenumber":"1","ActSceneLine":"3.2.1","Player":"juliet","PlayerLine":"Gallop apace, you fiery-footed steeds,","scene":"3.2"},{"Dataline":"87015","PlayerLinenumber":"1","ActSceneLine":"3.2.2","Player":"juliet","PlayerLine":"Towards Phoebus\' lodging: such a wagoner","scene":"3.2"},{"Dataline":"87016","PlayerLinenumber":"1","ActSceneLine":"3.2.3","Player":"juliet","PlayerLine":"As Phaethon would whip you to the west,","scene":"3.2"},{"Dataline":"87017","PlayerLinenumber":"1","ActSceneLine":"3.2.4","Player":"juliet","PlayerLine":"And bring in cloudy night immediately.","scene":"3.2"},{"Dataline":"87018","PlayerLinenumber":"1","ActSceneLine":"3.2.5","Player":"juliet","PlayerLine":"Spread thy close curtain, love-performing night,","scene":"3.2"},{"Dataline":"87019","PlayerLinenumber":"1","ActSceneLine":"3.2.6","Player":"juliet","PlayerLine":"That runaway\'s eyes may wink and Romeo","scene":"3.2"},{"Dataline":"87020","PlayerLinenumber":"1","ActSceneLine":"3.2.7","Player":"juliet","PlayerLine":"Leap to these arms, untalk\'d of and unseen.","scene":"3.2"},{"Dataline":"87021","PlayerLinenumber":"1","ActSceneLine":"3.2.8","Player":"juliet","PlayerLine":"Lovers can see to do their amorous rites","scene":"3.2"},{"Dataline":"87022","PlayerLinenumber":"1","ActSceneLine":"3.2.9","Player":"juliet","PlayerLine":"By their own beauties, or, if love be blind,","scene":"3.2"},{"Dataline":"87023","PlayerLinenumber":"1","ActSceneLine":"3.2.10","Player":"juliet","PlayerLine":"It best agrees with night. Come, civil night,","scene":"3.2"},{"Dataline":"87024","PlayerLinenumber":"1","ActSceneLine":"3.2.11","Player":"juliet","PlayerLine":"Thou sober-suited matron, all in black,","scene":"3.2"},{"Dataline":"87025","PlayerLinenumber":"1","ActSceneLine":"3.2.12","Player":"juliet","PlayerLine":"And learn me how to lose a winning match,","scene":"3.2"},{"Dataline":"87026","PlayerLinenumber":"1","ActSceneLine":"3.2.13","Player":"juliet","PlayerLine":"Play\'d for a pair of stainless maidenhoods:","scene":"3.2"},{"Dataline":"87027","PlayerLinenumber":"1","ActSceneLine":"3.2.14","Player":"juliet","PlayerLine":"Hood my unmann\'d blood, bating in my cheeks,","scene":"3.2"},{"Dataline":"87028","PlayerLinenumber":"1","ActSceneLine":"3.2.15","Player":"juliet","PlayerLine":"With thy black mantle, till strange love, grown bold,","scene":"3.2"},{"Dataline":"87029","PlayerLinenumber":"1","ActSceneLine":"3.2.16","Player":"juliet","PlayerLine":"Think true love acted simple modesty.","scene":"3.2"},{"Dataline":"87030","PlayerLinenumber":"1","ActSceneLine":"3.2.17","Player":"juliet","PlayerLine":"Come, night, come, Romeo, come, thou day in night,","scene":"3.2"},{"Dataline":"87031","PlayerLinenumber":"1","ActSceneLine":"3.2.18","Player":"juliet","PlayerLine":"For thou wilt lie upon the wings of night","scene":"3.2"},{"Dataline":"87032","PlayerLinenumber":"1","ActSceneLine":"3.2.19","Player":"juliet","PlayerLine":"Whiter than new snow on a raven\'s back.","scene":"3.2"},{"Dataline":"87033","PlayerLinenumber":"1","ActSceneLine":"3.2.20","Player":"juliet","PlayerLine":"Come, gentle night, come, loving, black-brow\'d night,","scene":"3.2"},{"Dataline":"87034","PlayerLinenumber":"1","ActSceneLine":"3.2.21","Player":"juliet","PlayerLine":"Give me my Romeo, and, when he shall die,","scene":"3.2"},{"Dataline":"87035","PlayerLinenumber":"1","ActSceneLine":"3.2.22","Player":"juliet","PlayerLine":"Take him and cut him out in little stars,","scene":"3.2"},{"Dataline":"87036","PlayerLinenumber":"1","ActSceneLine":"3.2.23","Player":"juliet","PlayerLine":"And he will make the face of heaven so fine","scene":"3.2"},{"Dataline":"87037","PlayerLinenumber":"1","ActSceneLine":"3.2.24","Player":"juliet","PlayerLine":"That all the world will be in love with night","scene":"3.2"},{"Dataline":"87038","PlayerLinenumber":"1","ActSceneLine":"3.2.25","Player":"juliet","PlayerLine":"And pay no worship to the garish sun.","scene":"3.2"},{"Dataline":"87039","PlayerLinenumber":"1","ActSceneLine":"3.2.26","Player":"juliet","PlayerLine":"O, I have bought the mansion of a love,","scene":"3.2"},{"Dataline":"87040","PlayerLinenumber":"1","ActSceneLine":"3.2.27","Player":"juliet","PlayerLine":"But not possess\'d it, and, though I am sold,","scene":"3.2"},{"Dataline":"87041","PlayerLinenumber":"1","ActSceneLine":"3.2.28","Player":"juliet","PlayerLine":"Not yet enjoy\'d: so tedious is this day","scene":"3.2"},{"Dataline":"87042","PlayerLinenumber":"1","ActSceneLine":"3.2.29","Player":"juliet","PlayerLine":"As is the night before some festival","scene":"3.2"},{"Dataline":"87043","PlayerLinenumber":"1","ActSceneLine":"3.2.30","Player":"juliet","PlayerLine":"To an impatient child that hath new robes","scene":"3.2"},{"Dataline":"87044","PlayerLinenumber":"1","ActSceneLine":"3.2.31","Player":"juliet","PlayerLine":"And may not wear them. O, here comes my nurse,","scene":"3.2"},{"Dataline":"87045","PlayerLinenumber":"1","ActSceneLine":"3.2.32","Player":"juliet","PlayerLine":"And she brings news, and every tongue that speaks","scene":"3.2"},{"Dataline":"87046","PlayerLinenumber":"1","ActSceneLine":"3.2.33","Player":"juliet","PlayerLine":"But Romeo\'s name speaks heavenly eloquence.","scene":"3.2"},{"Dataline":"87048","PlayerLinenumber":"1","ActSceneLine":"3.2.34","Player":"juliet","PlayerLine":"Now, nurse, what news? What hast thou there? the cords","scene":"3.2"},{"Dataline":"87049","PlayerLinenumber":"1","ActSceneLine":"3.2.35","Player":"juliet","PlayerLine":"That Romeo bid thee fetch?","scene":"3.2"},{"Dataline":"87050","PlayerLinenumber":"2","ActSceneLine":"3.2.36","Player":"nurse","PlayerLine":"Ay, ay, the cords.","scene":"3.2"},{"Dataline":"87052","PlayerLinenumber":"3","ActSceneLine":"3.2.37","Player":"juliet","PlayerLine":"Ay me! what news? why dost thou wring thy hands?","scene":"3.2"},{"Dataline":"87053","PlayerLinenumber":"4","ActSceneLine":"3.2.38","Player":"nurse","PlayerLine":"Ah, well-a-day! he\'s dead, he\'s dead, he\'s dead!","scene":"3.2"},{"Dataline":"87054","PlayerLinenumber":"4","ActSceneLine":"3.2.39","Player":"nurse","PlayerLine":"We are undone, lady, we are undone!","scene":"3.2"},{"Dataline":"87055","PlayerLinenumber":"4","ActSceneLine":"3.2.40","Player":"nurse","PlayerLine":"Alack the day! he\'s gone, he\'s kill\'d, he\'s dead!","scene":"3.2"},{"Dataline":"87056","PlayerLinenumber":"5","ActSceneLine":"3.2.41","Player":"juliet","PlayerLine":"Can heaven be so envious?","scene":"3.2"},{"Dataline":"87057","PlayerLinenumber":"6","ActSceneLine":"3.2.42","Player":"nurse","PlayerLine":"Romeo can,","scene":"3.2"},{"Dataline":"87058","PlayerLinenumber":"6","ActSceneLine":"3.2.43","Player":"nurse","PlayerLine":"Though heaven cannot: O Romeo, Romeo!","scene":"3.2"},{"Dataline":"87059","PlayerLinenumber":"6","ActSceneLine":"3.2.44","Player":"nurse","PlayerLine":"Who ever would have thought it? Romeo!","scene":"3.2"},{"Dataline":"87060","PlayerLinenumber":"7","ActSceneLine":"3.2.45","Player":"juliet","PlayerLine":"What devil art thou, that dost torment me thus?","scene":"3.2"},{"Dataline":"87061","PlayerLinenumber":"7","ActSceneLine":"3.2.46","Player":"juliet","PlayerLine":"This torture should be roar\'d in dismal hell.","scene":"3.2"},{"Dataline":"87062","PlayerLinenumber":"7","ActSceneLine":"3.2.47","Player":"juliet","PlayerLine":"Hath Romeo slain himself? say thou but \'I,\'","scene":"3.2"},{"Dataline":"87063","PlayerLinenumber":"7","ActSceneLine":"3.2.48","Player":"juliet","PlayerLine":"And that bare vowel \'I\' shall poison more","scene":"3.2"},{"Dataline":"87064","PlayerLinenumber":"7","ActSceneLine":"3.2.49","Player":"juliet","PlayerLine":"Than the death-darting eye of cockatrice:","scene":"3.2"},{"Dataline":"87065","PlayerLinenumber":"7","ActSceneLine":"3.2.50","Player":"juliet","PlayerLine":"I am not I, if there be such an I,","scene":"3.2"},{"Dataline":"87066","PlayerLinenumber":"7","ActSceneLine":"3.2.51","Player":"juliet","PlayerLine":"Or those eyes shut, that make thee answer \'I.\'","scene":"3.2"},{"Dataline":"87067","PlayerLinenumber":"7","ActSceneLine":"3.2.52","Player":"juliet","PlayerLine":"If he be slain, say \'I\', or if not, no:","scene":"3.2"},{"Dataline":"87068","PlayerLinenumber":"7","ActSceneLine":"3.2.53","Player":"juliet","PlayerLine":"Brief sounds determine of my weal or woe.","scene":"3.2"},{"Dataline":"87069","PlayerLinenumber":"8","ActSceneLine":"3.2.54","Player":"nurse","PlayerLine":"I saw the wound, I saw it with mine eyes,--","scene":"3.2"},{"Dataline":"87070","PlayerLinenumber":"8","ActSceneLine":"3.2.55","Player":"nurse","PlayerLine":"God save the mark!--here on his manly breast:","scene":"3.2"},{"Dataline":"87071","PlayerLinenumber":"8","ActSceneLine":"3.2.56","Player":"nurse","PlayerLine":"A piteous corse, a bloody piteous corse,","scene":"3.2"},{"Dataline":"87072","PlayerLinenumber":"8","ActSceneLine":"3.2.57","Player":"nurse","PlayerLine":"Pale, pale as ashes, all bedaub\'d in blood,","scene":"3.2"},{"Dataline":"87073","PlayerLinenumber":"8","ActSceneLine":"3.2.58","Player":"nurse","PlayerLine":"All in gore-blood, I swounded at the sight.","scene":"3.2"},{"Dataline":"87074","PlayerLinenumber":"9","ActSceneLine":"3.2.59","Player":"juliet","PlayerLine":"O, break, my heart! poor bankrupt, break at once!","scene":"3.2"},{"Dataline":"87075","PlayerLinenumber":"9","ActSceneLine":"3.2.60","Player":"juliet","PlayerLine":"To prison, eyes, ne\'er look on liberty!","scene":"3.2"},{"Dataline":"87076","PlayerLinenumber":"9","ActSceneLine":"3.2.61","Player":"juliet","PlayerLine":"Vile earth, to earth resign, end motion here,","scene":"3.2"},{"Dataline":"87077","PlayerLinenumber":"9","ActSceneLine":"3.2.62","Player":"juliet","PlayerLine":"And thou and Romeo press one heavy bier!","scene":"3.2"},{"Dataline":"87078","PlayerLinenumber":"10","ActSceneLine":"3.2.63","Player":"nurse","PlayerLine":"O Tybalt, Tybalt, the best friend I had!","scene":"3.2"},{"Dataline":"87079","PlayerLinenumber":"10","ActSceneLine":"3.2.64","Player":"nurse","PlayerLine":"O courteous Tybalt! honest gentleman!","scene":"3.2"},{"Dataline":"87080","PlayerLinenumber":"10","ActSceneLine":"3.2.65","Player":"nurse","PlayerLine":"That ever I should live to see thee dead!","scene":"3.2"},{"Dataline":"87081","PlayerLinenumber":"11","ActSceneLine":"3.2.66","Player":"juliet","PlayerLine":"What storm is this that blows so contrary?","scene":"3.2"},{"Dataline":"87082","PlayerLinenumber":"11","ActSceneLine":"3.2.67","Player":"juliet","PlayerLine":"Is Romeo slaughter\'d, and is Tybalt dead?","scene":"3.2"},{"Dataline":"87083","PlayerLinenumber":"11","ActSceneLine":"3.2.68","Player":"juliet","PlayerLine":"My dear-loved cousin, and my dearer lord?","scene":"3.2"},{"Dataline":"87084","PlayerLinenumber":"11","ActSceneLine":"3.2.69","Player":"juliet","PlayerLine":"Then, dreadful trumpet, sound the general doom!","scene":"3.2"},{"Dataline":"87085","PlayerLinenumber":"11","ActSceneLine":"3.2.70","Player":"juliet","PlayerLine":"For who is living, if those two are gone?","scene":"3.2"},{"Dataline":"87086","PlayerLinenumber":"12","ActSceneLine":"3.2.71","Player":"nurse","PlayerLine":"Tybalt is gone, and Romeo banished,","scene":"3.2"},{"Dataline":"87087","PlayerLinenumber":"12","ActSceneLine":"3.2.72","Player":"nurse","PlayerLine":"Romeo that kill\'d him, he is banished.","scene":"3.2"},{"Dataline":"87088","PlayerLinenumber":"13","ActSceneLine":"3.2.73","Player":"juliet","PlayerLine":"O God! did Romeo\'s hand shed Tybalt\'s blood?","scene":"3.2"},{"Dataline":"87089","PlayerLinenumber":"14","ActSceneLine":"3.2.74","Player":"nurse","PlayerLine":"It did, it did, alas the day, it did!","scene":"3.2"},{"Dataline":"87090","PlayerLinenumber":"15","ActSceneLine":"3.2.75","Player":"juliet","PlayerLine":"O serpent heart, hid with a flowering face!","scene":"3.2"},{"Dataline":"87091","PlayerLinenumber":"15","ActSceneLine":"3.2.76","Player":"juliet","PlayerLine":"Did ever dragon keep so fair a cave?","scene":"3.2"},{"Dataline":"87092","PlayerLinenumber":"15","ActSceneLine":"3.2.77","Player":"juliet","PlayerLine":"Beautiful tyrant! fiend angelical!","scene":"3.2"},{"Dataline":"87093","PlayerLinenumber":"15","ActSceneLine":"3.2.78","Player":"juliet","PlayerLine":"Dove-feather\'d raven! wolvish-ravening lamb!","scene":"3.2"},{"Dataline":"87094","PlayerLinenumber":"15","ActSceneLine":"3.2.79","Player":"juliet","PlayerLine":"Despised substance of divinest show!","scene":"3.2"},{"Dataline":"87095","PlayerLinenumber":"15","ActSceneLine":"3.2.80","Player":"juliet","PlayerLine":"Just opposite to what thou justly seem\'st,","scene":"3.2"},{"Dataline":"87096","PlayerLinenumber":"15","ActSceneLine":"3.2.81","Player":"juliet","PlayerLine":"A damned saint, an honourable villain!","scene":"3.2"},{"Dataline":"87097","PlayerLinenumber":"15","ActSceneLine":"3.2.82","Player":"juliet","PlayerLine":"O nature, what hadst thou to do in hell,","scene":"3.2"},{"Dataline":"87098","PlayerLinenumber":"15","ActSceneLine":"3.2.83","Player":"juliet","PlayerLine":"When thou didst bower the spirit of a fiend","scene":"3.2"},{"Dataline":"87099","PlayerLinenumber":"15","ActSceneLine":"3.2.84","Player":"juliet","PlayerLine":"In moral paradise of such sweet flesh?","scene":"3.2"},{"Dataline":"87100","PlayerLinenumber":"15","ActSceneLine":"3.2.85","Player":"juliet","PlayerLine":"Was ever book containing such vile matter","scene":"3.2"},{"Dataline":"87101","PlayerLinenumber":"15","ActSceneLine":"3.2.86","Player":"juliet","PlayerLine":"So fairly bound? O that deceit should dwell","scene":"3.2"},{"Dataline":"87102","PlayerLinenumber":"15","ActSceneLine":"3.2.87","Player":"juliet","PlayerLine":"In such a gorgeous palace!","scene":"3.2"},{"Dataline":"87103","PlayerLinenumber":"16","ActSceneLine":"3.2.88","Player":"nurse","PlayerLine":"There\'s no trust,","scene":"3.2"},{"Dataline":"87104","PlayerLinenumber":"16","ActSceneLine":"3.2.89","Player":"nurse","PlayerLine":"No faith, no honesty in men, all perjured,","scene":"3.2"},{"Dataline":"87105","PlayerLinenumber":"16","ActSceneLine":"3.2.90","Player":"nurse","PlayerLine":"All forsworn, all naught, all dissemblers.","scene":"3.2"},{"Dataline":"87106","PlayerLinenumber":"16","ActSceneLine":"3.2.91","Player":"nurse","PlayerLine":"Ah, where\'s my man? give me some aqua vitae:","scene":"3.2"},{"Dataline":"87107","PlayerLinenumber":"16","ActSceneLine":"3.2.92","Player":"nurse","PlayerLine":"These griefs, these woes, these sorrows make me old.","scene":"3.2"},{"Dataline":"87108","PlayerLinenumber":"16","ActSceneLine":"3.2.93","Player":"nurse","PlayerLine":"Shame come to Romeo!","scene":"3.2"},{"Dataline":"87109","PlayerLinenumber":"17","ActSceneLine":"3.2.94","Player":"juliet","PlayerLine":"Blister\'d be thy tongue","scene":"3.2"},{"Dataline":"87110","PlayerLinenumber":"17","ActSceneLine":"3.2.95","Player":"juliet","PlayerLine":"For such a wish! he was not born to shame:","scene":"3.2"},{"Dataline":"87111","PlayerLinenumber":"17","ActSceneLine":"3.2.96","Player":"juliet","PlayerLine":"Upon his brow shame is ashamed to sit,","scene":"3.2"},{"Dataline":"87112","PlayerLinenumber":"17","ActSceneLine":"3.2.97","Player":"juliet","PlayerLine":"For \'tis a throne where honour may be crown\'d","scene":"3.2"},{"Dataline":"87113","PlayerLinenumber":"17","ActSceneLine":"3.2.98","Player":"juliet","PlayerLine":"Sole monarch of the universal earth.","scene":"3.2"},{"Dataline":"87114","PlayerLinenumber":"17","ActSceneLine":"3.2.99","Player":"juliet","PlayerLine":"O, what a beast was I to chide at him!","scene":"3.2"},{"Dataline":"87115","PlayerLinenumber":"18","ActSceneLine":"3.2.100","Player":"nurse","PlayerLine":"Will you speak well of him that kill\'d your cousin?","scene":"3.2"},{"Dataline":"87116","PlayerLinenumber":"19","ActSceneLine":"3.2.101","Player":"juliet","PlayerLine":"Shall I speak ill of him that is my husband?","scene":"3.2"},{"Dataline":"87117","PlayerLinenumber":"19","ActSceneLine":"3.2.102","Player":"juliet","PlayerLine":"Ah, poor my lord, what tongue shall smooth thy name,","scene":"3.2"},{"Dataline":"87118","PlayerLinenumber":"19","ActSceneLine":"3.2.103","Player":"juliet","PlayerLine":"When I, thy three-hours wife, have mangled it?","scene":"3.2"},{"Dataline":"87119","PlayerLinenumber":"19","ActSceneLine":"3.2.104","Player":"juliet","PlayerLine":"But, wherefore, villain, didst thou kill my cousin?","scene":"3.2"},{"Dataline":"87120","PlayerLinenumber":"19","ActSceneLine":"3.2.105","Player":"juliet","PlayerLine":"That villain cousin would have kill\'d my husband:","scene":"3.2"},{"Dataline":"87121","PlayerLinenumber":"19","ActSceneLine":"3.2.106","Player":"juliet","PlayerLine":"Back, foolish tears, back to your native spring,","scene":"3.2"},{"Dataline":"87122","PlayerLinenumber":"19","ActSceneLine":"3.2.107","Player":"juliet","PlayerLine":"Your tributary drops belong to woe,","scene":"3.2"},{"Dataline":"87123","PlayerLinenumber":"19","ActSceneLine":"3.2.108","Player":"juliet","PlayerLine":"Which you, mistaking, offer up to joy.","scene":"3.2"},{"Dataline":"87124","PlayerLinenumber":"19","ActSceneLine":"3.2.109","Player":"juliet","PlayerLine":"My husband lives, that Tybalt would have slain,","scene":"3.2"},{"Dataline":"87125","PlayerLinenumber":"19","ActSceneLine":"3.2.110","Player":"juliet","PlayerLine":"And Tybalt\'s dead, that would have slain my husband:","scene":"3.2"},{"Dataline":"87126","PlayerLinenumber":"19","ActSceneLine":"3.2.111","Player":"juliet","PlayerLine":"All this is comfort, wherefore weep I then?","scene":"3.2"},{"Dataline":"87127","PlayerLinenumber":"19","ActSceneLine":"3.2.112","Player":"juliet","PlayerLine":"Some word there was, worser than Tybalt\'s death,","scene":"3.2"},{"Dataline":"87128","PlayerLinenumber":"19","ActSceneLine":"3.2.113","Player":"juliet","PlayerLine":"That murder\'d me: I would forget it fain,","scene":"3.2"},{"Dataline":"87129","PlayerLinenumber":"19","ActSceneLine":"3.2.114","Player":"juliet","PlayerLine":"But, O, it presses to my memory,","scene":"3.2"},{"Dataline":"87130","PlayerLinenumber":"19","ActSceneLine":"3.2.115","Player":"juliet","PlayerLine":"Like damned guilty deeds to sinners\' minds:","scene":"3.2"},{"Dataline":"87131","PlayerLinenumber":"19","ActSceneLine":"3.2.116","Player":"juliet","PlayerLine":"\'Tybalt is dead, and Romeo--banished,\'","scene":"3.2"},{"Dataline":"87132","PlayerLinenumber":"19","ActSceneLine":"3.2.117","Player":"juliet","PlayerLine":"That \'banished,\' that one word \'banished,\'","scene":"3.2"},{"Dataline":"87133","PlayerLinenumber":"19","ActSceneLine":"3.2.118","Player":"juliet","PlayerLine":"Hath slain ten thousand Tybalts. Tybalt\'s death","scene":"3.2"},{"Dataline":"87134","PlayerLinenumber":"19","ActSceneLine":"3.2.119","Player":"juliet","PlayerLine":"Was woe enough, if it had ended there:","scene":"3.2"},{"Dataline":"87135","PlayerLinenumber":"19","ActSceneLine":"3.2.120","Player":"juliet","PlayerLine":"Or, if sour woe delights in fellowship","scene":"3.2"},{"Dataline":"87136","PlayerLinenumber":"19","ActSceneLine":"3.2.121","Player":"juliet","PlayerLine":"And needly will be rank\'d with other griefs,","scene":"3.2"},{"Dataline":"87137","PlayerLinenumber":"19","ActSceneLine":"3.2.122","Player":"juliet","PlayerLine":"Why follow\'d not, when she said \'Tybalt\'s dead,\'","scene":"3.2"},{"Dataline":"87138","PlayerLinenumber":"19","ActSceneLine":"3.2.123","Player":"juliet","PlayerLine":"Thy father, or thy mother, nay, or both,","scene":"3.2"},{"Dataline":"87139","PlayerLinenumber":"19","ActSceneLine":"3.2.124","Player":"juliet","PlayerLine":"Which modern lamentations might have moved?","scene":"3.2"},{"Dataline":"87140","PlayerLinenumber":"19","ActSceneLine":"3.2.125","Player":"juliet","PlayerLine":"But with a rear-ward following Tybalt\'s death,","scene":"3.2"},{"Dataline":"87141","PlayerLinenumber":"19","ActSceneLine":"3.2.126","Player":"juliet","PlayerLine":"\'Romeo is banished,\' to speak that word,","scene":"3.2"},{"Dataline":"87142","PlayerLinenumber":"19","ActSceneLine":"3.2.127","Player":"juliet","PlayerLine":"Is father, mother, Tybalt, Romeo, Juliet,","scene":"3.2"},{"Dataline":"87143","PlayerLinenumber":"19","ActSceneLine":"3.2.128","Player":"juliet","PlayerLine":"All slain, all dead. \'Romeo is banished!\'","scene":"3.2"},{"Dataline":"87144","PlayerLinenumber":"19","ActSceneLine":"3.2.129","Player":"juliet","PlayerLine":"There is no end, no limit, measure, bound,","scene":"3.2"},{"Dataline":"87145","PlayerLinenumber":"19","ActSceneLine":"3.2.130","Player":"juliet","PlayerLine":"In that word\'s death, no words can that woe sound.","scene":"3.2"},{"Dataline":"87146","PlayerLinenumber":"19","ActSceneLine":"3.2.131","Player":"juliet","PlayerLine":"Where is my father, and my mother, nurse?","scene":"3.2"},{"Dataline":"87147","PlayerLinenumber":"20","ActSceneLine":"3.2.132","Player":"nurse","PlayerLine":"Weeping and wailing over Tybalt\'s corse:","scene":"3.2"},{"Dataline":"87148","PlayerLinenumber":"20","ActSceneLine":"3.2.133","Player":"nurse","PlayerLine":"Will you go to them? I will bring you thither.","scene":"3.2"},{"Dataline":"87149","PlayerLinenumber":"21","ActSceneLine":"3.2.134","Player":"juliet","PlayerLine":"Wash they his wounds with tears: mine shall be spent,","scene":"3.2"},{"Dataline":"87150","PlayerLinenumber":"21","ActSceneLine":"3.2.135","Player":"juliet","PlayerLine":"When theirs are dry, for Romeo\'s banishment.","scene":"3.2"},{"Dataline":"87151","PlayerLinenumber":"21","ActSceneLine":"3.2.136","Player":"juliet","PlayerLine":"Take up those cords: poor ropes, you are beguiled,","scene":"3.2"},{"Dataline":"87152","PlayerLinenumber":"21","ActSceneLine":"3.2.137","Player":"juliet","PlayerLine":"Both you and I, for Romeo is exiled:","scene":"3.2"},{"Dataline":"87153","PlayerLinenumber":"21","ActSceneLine":"3.2.138","Player":"juliet","PlayerLine":"He made you for a highway to my bed,","scene":"3.2"},{"Dataline":"87154","PlayerLinenumber":"21","ActSceneLine":"3.2.139","Player":"juliet","PlayerLine":"But I, a maid, die maiden-widowed.","scene":"3.2"},{"Dataline":"87155","PlayerLinenumber":"21","ActSceneLine":"3.2.140","Player":"juliet","PlayerLine":"Come, cords, come, nurse, I\'ll to my wedding-bed,","scene":"3.2"},{"Dataline":"87156","PlayerLinenumber":"21","ActSceneLine":"3.2.141","Player":"juliet","PlayerLine":"And death, not Romeo, take my maidenhead!","scene":"3.2"},{"Dataline":"87157","PlayerLinenumber":"22","ActSceneLine":"3.2.142","Player":"nurse","PlayerLine":"Hie to your chamber: I\'ll find Romeo","scene":"3.2"},{"Dataline":"87158","PlayerLinenumber":"22","ActSceneLine":"3.2.143","Player":"nurse","PlayerLine":"To comfort you: I wot well where he is.","scene":"3.2"},{"Dataline":"87159","PlayerLinenumber":"22","ActSceneLine":"3.2.144","Player":"nurse","PlayerLine":"Hark ye, your Romeo will be here at night:","scene":"3.2"},{"Dataline":"87160","PlayerLinenumber":"22","ActSceneLine":"3.2.145","Player":"nurse","PlayerLine":"I\'ll to him, he is hid at Laurence\' cell.","scene":"3.2"},{"Dataline":"87161","PlayerLinenumber":"23","ActSceneLine":"3.2.146","Player":"juliet","PlayerLine":"O, find him! give this ring to my true knight,","scene":"3.2"},{"Dataline":"87162","PlayerLinenumber":"23","ActSceneLine":"3.2.147","Player":"juliet","PlayerLine":"And bid him come to take his last farewell.","scene":"3.2"},{"Dataline":"87166","PlayerLinenumber":"1","ActSceneLine":"3.3.1","Player":"friar_laurence","PlayerLine":"Romeo, come forth, come forth, thou fearful man:","scene":"3.3"},{"Dataline":"87167","PlayerLinenumber":"1","ActSceneLine":"3.3.2","Player":"friar_laurence","PlayerLine":"Affliction is enamour\'d of thy parts,","scene":"3.3"},{"Dataline":"87168","PlayerLinenumber":"1","ActSceneLine":"3.3.3","Player":"friar_laurence","PlayerLine":"And thou art wedded to calamity.","scene":"3.3"},{"Dataline":"87170","PlayerLinenumber":"2","ActSceneLine":"3.3.4","Player":"romeo","PlayerLine":"Father, what news? what is the prince\'s doom?","scene":"3.3"},{"Dataline":"87171","PlayerLinenumber":"2","ActSceneLine":"3.3.5","Player":"romeo","PlayerLine":"What sorrow craves acquaintance at my hand,","scene":"3.3"},{"Dataline":"87172","PlayerLinenumber":"2","ActSceneLine":"3.3.6","Player":"romeo","PlayerLine":"That I yet know not?","scene":"3.3"},{"Dataline":"87173","PlayerLinenumber":"3","ActSceneLine":"3.3.7","Player":"friar_laurence","PlayerLine":"Too familiar","scene":"3.3"},{"Dataline":"87174","PlayerLinenumber":"3","ActSceneLine":"3.3.8","Player":"friar_laurence","PlayerLine":"Is my dear son with such sour company:","scene":"3.3"},{"Dataline":"87175","PlayerLinenumber":"3","ActSceneLine":"3.3.9","Player":"friar_laurence","PlayerLine":"I bring thee tidings of the prince\'s doom.","scene":"3.3"},{"Dataline":"87176","PlayerLinenumber":"4","ActSceneLine":"3.3.10","Player":"romeo","PlayerLine":"What less than dooms-day is the prince\'s doom?","scene":"3.3"},{"Dataline":"87177","PlayerLinenumber":"5","ActSceneLine":"3.3.11","Player":"friar_laurence","PlayerLine":"A gentler judgment vanish\'d from his lips,","scene":"3.3"},{"Dataline":"87178","PlayerLinenumber":"5","ActSceneLine":"3.3.12","Player":"friar_laurence","PlayerLine":"Not body\'s death, but body\'s banishment.","scene":"3.3"},{"Dataline":"87179","PlayerLinenumber":"6","ActSceneLine":"3.3.13","Player":"romeo","PlayerLine":"Ha, banishment! be merciful, say \'death,\'","scene":"3.3"},{"Dataline":"87180","PlayerLinenumber":"6","ActSceneLine":"3.3.14","Player":"romeo","PlayerLine":"For exile hath more terror in his look,","scene":"3.3"},{"Dataline":"87181","PlayerLinenumber":"6","ActSceneLine":"3.3.15","Player":"romeo","PlayerLine":"Much more than death: do not say \'banishment.\'","scene":"3.3"},{"Dataline":"87182","PlayerLinenumber":"7","ActSceneLine":"3.3.16","Player":"friar_laurence","PlayerLine":"Hence from Verona art thou banished:","scene":"3.3"},{"Dataline":"87183","PlayerLinenumber":"7","ActSceneLine":"3.3.17","Player":"friar_laurence","PlayerLine":"Be patient, for the world is broad and wide.","scene":"3.3"},{"Dataline":"87184","PlayerLinenumber":"8","ActSceneLine":"3.3.18","Player":"romeo","PlayerLine":"There is no world without Verona walls,","scene":"3.3"},{"Dataline":"87185","PlayerLinenumber":"8","ActSceneLine":"3.3.19","Player":"romeo","PlayerLine":"But purgatory, torture, hell itself.","scene":"3.3"},{"Dataline":"87186","PlayerLinenumber":"8","ActSceneLine":"3.3.20","Player":"romeo","PlayerLine":"Hence-banished is banish\'d from the world,","scene":"3.3"},{"Dataline":"87187","PlayerLinenumber":"8","ActSceneLine":"3.3.21","Player":"romeo","PlayerLine":"And world\'s exile is death: then banished,","scene":"3.3"},{"Dataline":"87188","PlayerLinenumber":"8","ActSceneLine":"3.3.22","Player":"romeo","PlayerLine":"Is death mis-term\'d: calling death banishment,","scene":"3.3"},{"Dataline":"87189","PlayerLinenumber":"8","ActSceneLine":"3.3.23","Player":"romeo","PlayerLine":"Thou cutt\'st my head off with a golden axe,","scene":"3.3"},{"Dataline":"87190","PlayerLinenumber":"8","ActSceneLine":"3.3.24","Player":"romeo","PlayerLine":"And smilest upon the stroke that murders me.","scene":"3.3"},{"Dataline":"87191","PlayerLinenumber":"9","ActSceneLine":"3.3.25","Player":"friar_laurence","PlayerLine":"O deadly sin! O rude unthankfulness!","scene":"3.3"},{"Dataline":"87192","PlayerLinenumber":"9","ActSceneLine":"3.3.26","Player":"friar_laurence","PlayerLine":"Thy fault our law calls death, but the kind prince,","scene":"3.3"},{"Dataline":"87193","PlayerLinenumber":"9","ActSceneLine":"3.3.27","Player":"friar_laurence","PlayerLine":"Taking thy part, hath rush\'d aside the law,","scene":"3.3"},{"Dataline":"87194","PlayerLinenumber":"9","ActSceneLine":"3.3.28","Player":"friar_laurence","PlayerLine":"And turn\'d that black word death to banishment:","scene":"3.3"},{"Dataline":"87195","PlayerLinenumber":"9","ActSceneLine":"3.3.29","Player":"friar_laurence","PlayerLine":"This is dear mercy, and thou seest it not.","scene":"3.3"},{"Dataline":"87196","PlayerLinenumber":"10","ActSceneLine":"3.3.30","Player":"romeo","PlayerLine":"\'Tis torture, and not mercy: heaven is here,","scene":"3.3"},{"Dataline":"87197","PlayerLinenumber":"10","ActSceneLine":"3.3.31","Player":"romeo","PlayerLine":"Where Juliet lives, and every cat and dog","scene":"3.3"},{"Dataline":"87198","PlayerLinenumber":"10","ActSceneLine":"3.3.32","Player":"romeo","PlayerLine":"And little mouse, every unworthy thing,","scene":"3.3"},{"Dataline":"87199","PlayerLinenumber":"10","ActSceneLine":"3.3.33","Player":"romeo","PlayerLine":"Live here in heaven and may look on her,","scene":"3.3"},{"Dataline":"87200","PlayerLinenumber":"10","ActSceneLine":"3.3.34","Player":"romeo","PlayerLine":"But Romeo may not: more validity,","scene":"3.3"},{"Dataline":"87201","PlayerLinenumber":"10","ActSceneLine":"3.3.35","Player":"romeo","PlayerLine":"More honourable state, more courtship lives","scene":"3.3"},{"Dataline":"87202","PlayerLinenumber":"10","ActSceneLine":"3.3.36","Player":"romeo","PlayerLine":"In carrion-flies than Romeo: they my seize","scene":"3.3"},{"Dataline":"87203","PlayerLinenumber":"10","ActSceneLine":"3.3.37","Player":"romeo","PlayerLine":"On the white wonder of dear Juliet\'s hand","scene":"3.3"},{"Dataline":"87204","PlayerLinenumber":"10","ActSceneLine":"3.3.38","Player":"romeo","PlayerLine":"And steal immortal blessing from her lips,","scene":"3.3"},{"Dataline":"87205","PlayerLinenumber":"10","ActSceneLine":"3.3.39","Player":"romeo","PlayerLine":"Who even in pure and vestal modesty,","scene":"3.3"},{"Dataline":"87206","PlayerLinenumber":"10","ActSceneLine":"3.3.40","Player":"romeo","PlayerLine":"Still blush, as thinking their own kisses sin,","scene":"3.3"},{"Dataline":"87207","PlayerLinenumber":"10","ActSceneLine":"3.3.41","Player":"romeo","PlayerLine":"But Romeo may not, he is banished:","scene":"3.3"},{"Dataline":"87208","PlayerLinenumber":"10","ActSceneLine":"3.3.42","Player":"romeo","PlayerLine":"Flies may do this, but I from this must fly:","scene":"3.3"},{"Dataline":"87209","PlayerLinenumber":"10","ActSceneLine":"3.3.43","Player":"romeo","PlayerLine":"They are free men, but I am banished.","scene":"3.3"},{"Dataline":"87210","PlayerLinenumber":"10","ActSceneLine":"3.3.44","Player":"romeo","PlayerLine":"And say\'st thou yet that exile is not death?","scene":"3.3"},{"Dataline":"87211","PlayerLinenumber":"10","ActSceneLine":"3.3.45","Player":"romeo","PlayerLine":"Hadst thou no poison mix\'d, no sharp-ground knife,","scene":"3.3"},{"Dataline":"87212","PlayerLinenumber":"10","ActSceneLine":"3.3.46","Player":"romeo","PlayerLine":"No sudden mean of death, though ne\'er so mean,","scene":"3.3"},{"Dataline":"87213","PlayerLinenumber":"10","ActSceneLine":"3.3.47","Player":"romeo","PlayerLine":"But \'banished\' to kill me?--\'banished\'?","scene":"3.3"},{"Dataline":"87214","PlayerLinenumber":"10","ActSceneLine":"3.3.48","Player":"romeo","PlayerLine":"O friar, the damned use that word in hell,","scene":"3.3"},{"Dataline":"87215","PlayerLinenumber":"10","ActSceneLine":"3.3.49","Player":"romeo","PlayerLine":"Howlings attend it: how hast thou the heart,","scene":"3.3"},{"Dataline":"87216","PlayerLinenumber":"10","ActSceneLine":"3.3.50","Player":"romeo","PlayerLine":"Being a divine, a ghostly confessor,","scene":"3.3"},{"Dataline":"87217","PlayerLinenumber":"10","ActSceneLine":"3.3.51","Player":"romeo","PlayerLine":"A sin-absolver, and my friend profess\'d,","scene":"3.3"},{"Dataline":"87218","PlayerLinenumber":"10","ActSceneLine":"3.3.52","Player":"romeo","PlayerLine":"To mangle me with that word \'banished\'?","scene":"3.3"},{"Dataline":"87219","PlayerLinenumber":"11","ActSceneLine":"3.3.53","Player":"friar_laurence","PlayerLine":"Thou fond mad man, hear me but speak a word.","scene":"3.3"},{"Dataline":"87220","PlayerLinenumber":"12","ActSceneLine":"3.3.54","Player":"romeo","PlayerLine":"O, thou wilt speak again of banishment.","scene":"3.3"},{"Dataline":"87221","PlayerLinenumber":"13","ActSceneLine":"3.3.55","Player":"friar_laurence","PlayerLine":"I\'ll give thee armour to keep off that word:","scene":"3.3"},{"Dataline":"87222","PlayerLinenumber":"13","ActSceneLine":"3.3.56","Player":"friar_laurence","PlayerLine":"Adversity\'s sweet milk, philosophy,","scene":"3.3"},{"Dataline":"87223","PlayerLinenumber":"13","ActSceneLine":"3.3.57","Player":"friar_laurence","PlayerLine":"To comfort thee, though thou art banished.","scene":"3.3"},{"Dataline":"87224","PlayerLinenumber":"14","ActSceneLine":"3.3.58","Player":"romeo","PlayerLine":"Yet \'banished\'? Hang up philosophy!","scene":"3.3"},{"Dataline":"87225","PlayerLinenumber":"14","ActSceneLine":"3.3.59","Player":"romeo","PlayerLine":"Unless philosophy can make a Juliet,","scene":"3.3"},{"Dataline":"87226","PlayerLinenumber":"14","ActSceneLine":"3.3.60","Player":"romeo","PlayerLine":"Displant a town, reverse a prince\'s doom,","scene":"3.3"},{"Dataline":"87227","PlayerLinenumber":"14","ActSceneLine":"3.3.61","Player":"romeo","PlayerLine":"It helps not, it prevails not: talk no more.","scene":"3.3"},{"Dataline":"87228","PlayerLinenumber":"15","ActSceneLine":"3.3.62","Player":"friar_laurence","PlayerLine":"O, then I see that madmen have no ears.","scene":"3.3"},{"Dataline":"87229","PlayerLinenumber":"16","ActSceneLine":"3.3.63","Player":"romeo","PlayerLine":"How should they, when that wise men have no eyes?","scene":"3.3"},{"Dataline":"87230","PlayerLinenumber":"17","ActSceneLine":"3.3.64","Player":"friar_laurence","PlayerLine":"Let me dispute with thee of thy estate.","scene":"3.3"},{"Dataline":"87231","PlayerLinenumber":"18","ActSceneLine":"3.3.65","Player":"romeo","PlayerLine":"Thou canst not speak of that thou dost not feel:","scene":"3.3"},{"Dataline":"87232","PlayerLinenumber":"18","ActSceneLine":"3.3.66","Player":"romeo","PlayerLine":"Wert thou as young as I, Juliet thy love,","scene":"3.3"},{"Dataline":"87233","PlayerLinenumber":"18","ActSceneLine":"3.3.67","Player":"romeo","PlayerLine":"An hour but married, Tybalt murdered,","scene":"3.3"},{"Dataline":"87234","PlayerLinenumber":"18","ActSceneLine":"3.3.68","Player":"romeo","PlayerLine":"Doting like me and like me banished,","scene":"3.3"},{"Dataline":"87235","PlayerLinenumber":"18","ActSceneLine":"3.3.69","Player":"romeo","PlayerLine":"Then mightst thou speak, then mightst thou tear thy hair,","scene":"3.3"},{"Dataline":"87236","PlayerLinenumber":"18","ActSceneLine":"3.3.70","Player":"romeo","PlayerLine":"And fall upon the ground, as I do now,","scene":"3.3"},{"Dataline":"87237","PlayerLinenumber":"18","ActSceneLine":"3.3.71","Player":"romeo","PlayerLine":"Taking the measure of an unmade grave.","scene":"3.3"},{"Dataline":"87239","PlayerLinenumber":"19","ActSceneLine":"3.3.72","Player":"friar_laurence","PlayerLine":"Arise, one knocks, good Romeo, hide thyself.","scene":"3.3"},{"Dataline":"87240","PlayerLinenumber":"20","ActSceneLine":"3.3.73","Player":"romeo","PlayerLine":"Not I, unless the breath of heartsick groans,","scene":"3.3"},{"Dataline":"87241","PlayerLinenumber":"20","ActSceneLine":"3.3.74","Player":"romeo","PlayerLine":"Mist-like, infold me from the search of eyes.","scene":"3.3"},{"Dataline":"87243","PlayerLinenumber":"21","ActSceneLine":"3.3.75","Player":"friar_laurence","PlayerLine":"Hark, how they knock! Who\'s there? Romeo, arise,","scene":"3.3"},{"Dataline":"87244","PlayerLinenumber":"21","ActSceneLine":"3.3.76","Player":"friar_laurence","PlayerLine":"Thou wilt be taken. Stay awhile! Stand up,","scene":"3.3"},{"Dataline":"87246","PlayerLinenumber":"21","ActSceneLine":"3.3.77","Player":"friar_laurence","PlayerLine":"Run to my study. By and by! God\'s will,","scene":"3.3"},{"Dataline":"87247","PlayerLinenumber":"21","ActSceneLine":"3.3.78","Player":"friar_laurence","PlayerLine":"What simpleness is this! I come, I come!","scene":"3.3"},{"Dataline":"87249","PlayerLinenumber":"21","ActSceneLine":"3.3.79","Player":"friar_laurence","PlayerLine":"Who knocks so hard? whence come you? what\'s your will?","scene":"3.3"},{"Dataline":"87250","PlayerLinenumber":"22","ActSceneLine":"3.3.80","Player":"nurse","PlayerLine":"[Within]  Let me come in, and you shall know","scene":"3.3"},{"Dataline":"87251","PlayerLinenumber":"22","ActSceneLine":"3.3.81","Player":"nurse","PlayerLine":"my errand,","scene":"3.3"},{"Dataline":"87252","PlayerLinenumber":"22","ActSceneLine":"3.3.82","Player":"nurse","PlayerLine":"I come from Lady Juliet.","scene":"3.3"},{"Dataline":"87253","PlayerLinenumber":"23","ActSceneLine":"3.3.83","Player":"friar_laurence","PlayerLine":"Welcome, then.","scene":"3.3"},{"Dataline":"87255","PlayerLinenumber":"24","ActSceneLine":"3.3.84","Player":"nurse","PlayerLine":"O holy friar, O, tell me, holy friar,","scene":"3.3"},{"Dataline":"87256","PlayerLinenumber":"24","ActSceneLine":"3.3.85","Player":"nurse","PlayerLine":"Where is my lady\'s lord, where\'s Romeo?","scene":"3.3"},{"Dataline":"87257","PlayerLinenumber":"25","ActSceneLine":"3.3.86","Player":"friar_laurence","PlayerLine":"There on the ground, with his own tears made drunk.","scene":"3.3"},{"Dataline":"87258","PlayerLinenumber":"26","ActSceneLine":"3.3.87","Player":"nurse","PlayerLine":"O, he is even in my mistress\' case,","scene":"3.3"},{"Dataline":"87259","PlayerLinenumber":"26","ActSceneLine":"3.3.88","Player":"nurse","PlayerLine":"Just in her case! O woful sympathy!","scene":"3.3"},{"Dataline":"87260","PlayerLinenumber":"26","ActSceneLine":"3.3.89","Player":"nurse","PlayerLine":"Piteous predicament! Even so lies she,","scene":"3.3"},{"Dataline":"87261","PlayerLinenumber":"26","ActSceneLine":"3.3.90","Player":"nurse","PlayerLine":"Blubbering and weeping, weeping and blubbering.","scene":"3.3"},{"Dataline":"87262","PlayerLinenumber":"26","ActSceneLine":"3.3.91","Player":"nurse","PlayerLine":"Stand up, stand up, stand, and you be a man:","scene":"3.3"},{"Dataline":"87263","PlayerLinenumber":"26","ActSceneLine":"3.3.92","Player":"nurse","PlayerLine":"For Juliet\'s sake, for her sake, rise and stand,","scene":"3.3"},{"Dataline":"87264","PlayerLinenumber":"26","ActSceneLine":"3.3.93","Player":"nurse","PlayerLine":"Why should you fall into so deep an O?","scene":"3.3"},{"Dataline":"87265","PlayerLinenumber":"27","ActSceneLine":"3.3.94","Player":"romeo","PlayerLine":"Nurse!","scene":"3.3"},{"Dataline":"87266","PlayerLinenumber":"28","ActSceneLine":"3.3.95","Player":"nurse","PlayerLine":"Ah sir! ah sir! Well, death\'s the end of all.","scene":"3.3"},{"Dataline":"87267","PlayerLinenumber":"29","ActSceneLine":"3.3.96","Player":"romeo","PlayerLine":"Spakest thou of Juliet? how is it with her?","scene":"3.3"},{"Dataline":"87268","PlayerLinenumber":"29","ActSceneLine":"3.3.97","Player":"romeo","PlayerLine":"Doth she not think me an old murderer,","scene":"3.3"},{"Dataline":"87269","PlayerLinenumber":"29","ActSceneLine":"3.3.98","Player":"romeo","PlayerLine":"Now I have stain\'d the childhood of our joy","scene":"3.3"},{"Dataline":"87270","PlayerLinenumber":"29","ActSceneLine":"3.3.99","Player":"romeo","PlayerLine":"With blood removed but little from her own?","scene":"3.3"},{"Dataline":"87271","PlayerLinenumber":"29","ActSceneLine":"3.3.100","Player":"romeo","PlayerLine":"Where is she? and how doth she? and what says","scene":"3.3"},{"Dataline":"87272","PlayerLinenumber":"29","ActSceneLine":"3.3.101","Player":"romeo","PlayerLine":"My conceal\'d lady to our cancell\'d love?","scene":"3.3"},{"Dataline":"87273","PlayerLinenumber":"30","ActSceneLine":"3.3.102","Player":"nurse","PlayerLine":"O, she says nothing, sir, but weeps and weeps,","scene":"3.3"},{"Dataline":"87274","PlayerLinenumber":"30","ActSceneLine":"3.3.103","Player":"nurse","PlayerLine":"And now falls on her bed, and then starts up,","scene":"3.3"},{"Dataline":"87275","PlayerLinenumber":"30","ActSceneLine":"3.3.104","Player":"nurse","PlayerLine":"And Tybalt calls, and then on Romeo cries,","scene":"3.3"},{"Dataline":"87276","PlayerLinenumber":"30","ActSceneLine":"3.3.105","Player":"nurse","PlayerLine":"And then down falls again.","scene":"3.3"},{"Dataline":"87277","PlayerLinenumber":"31","ActSceneLine":"3.3.106","Player":"romeo","PlayerLine":"As if that name,","scene":"3.3"},{"Dataline":"87278","PlayerLinenumber":"31","ActSceneLine":"3.3.107","Player":"romeo","PlayerLine":"Shot from the deadly level of a gun,","scene":"3.3"},{"Dataline":"87279","PlayerLinenumber":"31","ActSceneLine":"3.3.108","Player":"romeo","PlayerLine":"Did murder her, as that name\'s cursed hand","scene":"3.3"},{"Dataline":"87280","PlayerLinenumber":"31","ActSceneLine":"3.3.109","Player":"romeo","PlayerLine":"Murder\'d her kinsman. O, tell me, friar, tell me,","scene":"3.3"},{"Dataline":"87281","PlayerLinenumber":"31","ActSceneLine":"3.3.110","Player":"romeo","PlayerLine":"In what vile part of this anatomy","scene":"3.3"},{"Dataline":"87282","PlayerLinenumber":"31","ActSceneLine":"3.3.111","Player":"romeo","PlayerLine":"Doth my name lodge? tell me, that I may sack","scene":"3.3"},{"Dataline":"87283","PlayerLinenumber":"31","ActSceneLine":"3.3.112","Player":"romeo","PlayerLine":"The hateful mansion.","scene":"3.3"},{"Dataline":"87285","PlayerLinenumber":"32","ActSceneLine":"3.3.113","Player":"friar_laurence","PlayerLine":"Hold thy desperate hand:","scene":"3.3"},{"Dataline":"87286","PlayerLinenumber":"32","ActSceneLine":"3.3.114","Player":"friar_laurence","PlayerLine":"Art thou a man? thy form cries out thou art:","scene":"3.3"},{"Dataline":"87287","PlayerLinenumber":"32","ActSceneLine":"3.3.115","Player":"friar_laurence","PlayerLine":"Thy tears are womanish, thy wild acts denote","scene":"3.3"},{"Dataline":"87288","PlayerLinenumber":"32","ActSceneLine":"3.3.116","Player":"friar_laurence","PlayerLine":"The unreasonable fury of a beast:","scene":"3.3"},{"Dataline":"87289","PlayerLinenumber":"32","ActSceneLine":"3.3.117","Player":"friar_laurence","PlayerLine":"Unseemly woman in a seeming man!","scene":"3.3"},{"Dataline":"87290","PlayerLinenumber":"32","ActSceneLine":"3.3.118","Player":"friar_laurence","PlayerLine":"Or ill-beseeming beast in seeming both!","scene":"3.3"},{"Dataline":"87291","PlayerLinenumber":"32","ActSceneLine":"3.3.119","Player":"friar_laurence","PlayerLine":"Thou hast amazed me: by my holy order,","scene":"3.3"},{"Dataline":"87292","PlayerLinenumber":"32","ActSceneLine":"3.3.120","Player":"friar_laurence","PlayerLine":"I thought thy disposition better temper\'d.","scene":"3.3"},{"Dataline":"87293","PlayerLinenumber":"32","ActSceneLine":"3.3.121","Player":"friar_laurence","PlayerLine":"Hast thou slain Tybalt? wilt thou slay thyself?","scene":"3.3"},{"Dataline":"87294","PlayerLinenumber":"32","ActSceneLine":"3.3.122","Player":"friar_laurence","PlayerLine":"And stay thy lady too that lives in thee,","scene":"3.3"},{"Dataline":"87295","PlayerLinenumber":"32","ActSceneLine":"3.3.123","Player":"friar_laurence","PlayerLine":"By doing damned hate upon thyself?","scene":"3.3"},{"Dataline":"87296","PlayerLinenumber":"32","ActSceneLine":"3.3.124","Player":"friar_laurence","PlayerLine":"Why rail\'st thou on thy birth, the heaven, and earth?","scene":"3.3"},{"Dataline":"87297","PlayerLinenumber":"32","ActSceneLine":"3.3.125","Player":"friar_laurence","PlayerLine":"Since birth, and heaven, and earth, all three do meet","scene":"3.3"},{"Dataline":"87298","PlayerLinenumber":"32","ActSceneLine":"3.3.126","Player":"friar_laurence","PlayerLine":"In thee at once, which thou at once wouldst lose.","scene":"3.3"},{"Dataline":"87299","PlayerLinenumber":"32","ActSceneLine":"3.3.127","Player":"friar_laurence","PlayerLine":"Fie, fie, thou shamest thy shape, thy love, thy wit,","scene":"3.3"},{"Dataline":"87300","PlayerLinenumber":"32","ActSceneLine":"3.3.128","Player":"friar_laurence","PlayerLine":"Which, like a usurer, abound\'st in all,","scene":"3.3"},{"Dataline":"87301","PlayerLinenumber":"32","ActSceneLine":"3.3.129","Player":"friar_laurence","PlayerLine":"And usest none in that true use indeed","scene":"3.3"},{"Dataline":"87302","PlayerLinenumber":"32","ActSceneLine":"3.3.130","Player":"friar_laurence","PlayerLine":"Which should bedeck thy shape, thy love, thy wit:","scene":"3.3"},{"Dataline":"87303","PlayerLinenumber":"32","ActSceneLine":"3.3.131","Player":"friar_laurence","PlayerLine":"Thy noble shape is but a form of wax,","scene":"3.3"},{"Dataline":"87304","PlayerLinenumber":"32","ActSceneLine":"3.3.132","Player":"friar_laurence","PlayerLine":"Digressing from the valour of a man,","scene":"3.3"},{"Dataline":"87305","PlayerLinenumber":"32","ActSceneLine":"3.3.133","Player":"friar_laurence","PlayerLine":"Thy dear love sworn but hollow perjury,","scene":"3.3"},{"Dataline":"87306","PlayerLinenumber":"32","ActSceneLine":"3.3.134","Player":"friar_laurence","PlayerLine":"Killing that love which thou hast vow\'d to cherish,","scene":"3.3"},{"Dataline":"87307","PlayerLinenumber":"32","ActSceneLine":"3.3.135","Player":"friar_laurence","PlayerLine":"Thy wit, that ornament to shape and love,","scene":"3.3"},{"Dataline":"87308","PlayerLinenumber":"32","ActSceneLine":"3.3.136","Player":"friar_laurence","PlayerLine":"Misshapen in the conduct of them both,","scene":"3.3"},{"Dataline":"87309","PlayerLinenumber":"32","ActSceneLine":"3.3.137","Player":"friar_laurence","PlayerLine":"Like powder in a skitless soldier\'s flask,","scene":"3.3"},{"Dataline":"87310","PlayerLinenumber":"32","ActSceneLine":"3.3.138","Player":"friar_laurence","PlayerLine":"Is set afire by thine own ignorance,","scene":"3.3"},{"Dataline":"87311","PlayerLinenumber":"32","ActSceneLine":"3.3.139","Player":"friar_laurence","PlayerLine":"And thou dismember\'d with thine own defence.","scene":"3.3"},{"Dataline":"87312","PlayerLinenumber":"32","ActSceneLine":"3.3.140","Player":"friar_laurence","PlayerLine":"What, rouse thee, man! thy Juliet is alive,","scene":"3.3"},{"Dataline":"87313","PlayerLinenumber":"32","ActSceneLine":"3.3.141","Player":"friar_laurence","PlayerLine":"For whose dear sake thou wast but lately dead,","scene":"3.3"},{"Dataline":"87314","PlayerLinenumber":"32","ActSceneLine":"3.3.142","Player":"friar_laurence","PlayerLine":"There art thou happy: Tybalt would kill thee,","scene":"3.3"},{"Dataline":"87315","PlayerLinenumber":"32","ActSceneLine":"3.3.143","Player":"friar_laurence","PlayerLine":"But thou slew\'st Tybalt, there are thou happy too:","scene":"3.3"},{"Dataline":"87316","PlayerLinenumber":"32","ActSceneLine":"3.3.144","Player":"friar_laurence","PlayerLine":"The law that threaten\'d death becomes thy friend","scene":"3.3"},{"Dataline":"87317","PlayerLinenumber":"32","ActSceneLine":"3.3.145","Player":"friar_laurence","PlayerLine":"And turns it to exile, there art thou happy:","scene":"3.3"},{"Dataline":"87318","PlayerLinenumber":"32","ActSceneLine":"3.3.146","Player":"friar_laurence","PlayerLine":"A pack of blessings lights up upon thy back,","scene":"3.3"},{"Dataline":"87319","PlayerLinenumber":"32","ActSceneLine":"3.3.147","Player":"friar_laurence","PlayerLine":"Happiness courts thee in her best array,","scene":"3.3"},{"Dataline":"87320","PlayerLinenumber":"32","ActSceneLine":"3.3.148","Player":"friar_laurence","PlayerLine":"But, like a misbehaved and sullen wench,","scene":"3.3"},{"Dataline":"87321","PlayerLinenumber":"32","ActSceneLine":"3.3.149","Player":"friar_laurence","PlayerLine":"Thou pout\'st upon thy fortune and thy love:","scene":"3.3"},{"Dataline":"87322","PlayerLinenumber":"32","ActSceneLine":"3.3.150","Player":"friar_laurence","PlayerLine":"Take heed, take heed, for such die miserable.","scene":"3.3"},{"Dataline":"87323","PlayerLinenumber":"32","ActSceneLine":"3.3.151","Player":"friar_laurence","PlayerLine":"Go, get thee to thy love, as was decreed,","scene":"3.3"},{"Dataline":"87324","PlayerLinenumber":"32","ActSceneLine":"3.3.152","Player":"friar_laurence","PlayerLine":"Ascend her chamber, hence and comfort her:","scene":"3.3"},{"Dataline":"87325","PlayerLinenumber":"32","ActSceneLine":"3.3.153","Player":"friar_laurence","PlayerLine":"But look thou stay not till the watch be set,","scene":"3.3"},{"Dataline":"87326","PlayerLinenumber":"32","ActSceneLine":"3.3.154","Player":"friar_laurence","PlayerLine":"For then thou canst not pass to Mantua,","scene":"3.3"},{"Dataline":"87327","PlayerLinenumber":"32","ActSceneLine":"3.3.155","Player":"friar_laurence","PlayerLine":"Where thou shalt live, till we can find a time","scene":"3.3"},{"Dataline":"87328","PlayerLinenumber":"32","ActSceneLine":"3.3.156","Player":"friar_laurence","PlayerLine":"To blaze your marriage, reconcile your friends,","scene":"3.3"},{"Dataline":"87329","PlayerLinenumber":"32","ActSceneLine":"3.3.157","Player":"friar_laurence","PlayerLine":"Beg pardon of the prince, and call thee back","scene":"3.3"},{"Dataline":"87330","PlayerLinenumber":"32","ActSceneLine":"3.3.158","Player":"friar_laurence","PlayerLine":"With twenty hundred thousand times more joy","scene":"3.3"},{"Dataline":"87331","PlayerLinenumber":"32","ActSceneLine":"3.3.159","Player":"friar_laurence","PlayerLine":"Than thou went\'st forth in lamentation.","scene":"3.3"},{"Dataline":"87332","PlayerLinenumber":"32","ActSceneLine":"3.3.160","Player":"friar_laurence","PlayerLine":"Go before, nurse: commend me to thy lady,","scene":"3.3"},{"Dataline":"87333","PlayerLinenumber":"32","ActSceneLine":"3.3.161","Player":"friar_laurence","PlayerLine":"And bid her hasten all the house to bed,","scene":"3.3"},{"Dataline":"87334","PlayerLinenumber":"32","ActSceneLine":"3.3.162","Player":"friar_laurence","PlayerLine":"Which heavy sorrow makes them apt unto:","scene":"3.3"},{"Dataline":"87335","PlayerLinenumber":"32","ActSceneLine":"3.3.163","Player":"friar_laurence","PlayerLine":"Romeo is coming.","scene":"3.3"},{"Dataline":"87336","PlayerLinenumber":"33","ActSceneLine":"3.3.164","Player":"nurse","PlayerLine":"O Lord, I could have stay\'d here all the night","scene":"3.3"},{"Dataline":"87337","PlayerLinenumber":"33","ActSceneLine":"3.3.165","Player":"nurse","PlayerLine":"To hear good counsel: O, what learning is!","scene":"3.3"},{"Dataline":"87338","PlayerLinenumber":"33","ActSceneLine":"3.3.166","Player":"nurse","PlayerLine":"My lord, I\'ll tell my lady you will come.","scene":"3.3"},{"Dataline":"87339","PlayerLinenumber":"34","ActSceneLine":"3.3.167","Player":"romeo","PlayerLine":"Do so, and bid my sweet prepare to chide.","scene":"3.3"},{"Dataline":"87340","PlayerLinenumber":"35","ActSceneLine":"3.3.168","Player":"nurse","PlayerLine":"Here, sir, a ring she bid me give you, sir:","scene":"3.3"},{"Dataline":"87341","PlayerLinenumber":"35","ActSceneLine":"3.3.169","Player":"nurse","PlayerLine":"Hie you, make haste, for it grows very late.","scene":"3.3"},{"Dataline":"87343","PlayerLinenumber":"36","ActSceneLine":"3.3.170","Player":"romeo","PlayerLine":"How well my comfort is revived by this!","scene":"3.3"},{"Dataline":"87344","PlayerLinenumber":"37","ActSceneLine":"3.3.171","Player":"friar_laurence","PlayerLine":"Go hence, good night, and here stands all your state:","scene":"3.3"},{"Dataline":"87345","PlayerLinenumber":"37","ActSceneLine":"3.3.172","Player":"friar_laurence","PlayerLine":"Either be gone before the watch be set,","scene":"3.3"},{"Dataline":"87346","PlayerLinenumber":"37","ActSceneLine":"3.3.173","Player":"friar_laurence","PlayerLine":"Or by the break of day disguised from hence:","scene":"3.3"},{"Dataline":"87347","PlayerLinenumber":"37","ActSceneLine":"3.3.174","Player":"friar_laurence","PlayerLine":"Sojourn in Mantua, I\'ll find out your man,","scene":"3.3"},{"Dataline":"87348","PlayerLinenumber":"37","ActSceneLine":"3.3.175","Player":"friar_laurence","PlayerLine":"And he shall signify from time to time","scene":"3.3"},{"Dataline":"87349","PlayerLinenumber":"37","ActSceneLine":"3.3.176","Player":"friar_laurence","PlayerLine":"Every good hap to you that chances here:","scene":"3.3"},{"Dataline":"87350","PlayerLinenumber":"37","ActSceneLine":"3.3.177","Player":"friar_laurence","PlayerLine":"Give me thy hand, \'tis late: farewell, good night.","scene":"3.3"},{"Dataline":"87351","PlayerLinenumber":"38","ActSceneLine":"3.3.178","Player":"romeo","PlayerLine":"But that a joy past joy calls out on me,","scene":"3.3"},{"Dataline":"87352","PlayerLinenumber":"38","ActSceneLine":"3.3.179","Player":"romeo","PlayerLine":"It were a grief, so brief to part with thee: Farewell.","scene":"3.3"},{"Dataline":"87356","PlayerLinenumber":"1","ActSceneLine":"3.4.1","Player":"capulet","PlayerLine":"Things have fall\'n out, sir, so unluckily,","scene":"3.4"},{"Dataline":"87357","PlayerLinenumber":"1","ActSceneLine":"3.4.2","Player":"capulet","PlayerLine":"That we have had no time to move our daughter:","scene":"3.4"},{"Dataline":"87358","PlayerLinenumber":"1","ActSceneLine":"3.4.3","Player":"capulet","PlayerLine":"Look you, she loved her kinsman Tybalt dearly,","scene":"3.4"},{"Dataline":"87359","PlayerLinenumber":"1","ActSceneLine":"3.4.4","Player":"capulet","PlayerLine":"And so did I:--Well, we were born to die.","scene":"3.4"},{"Dataline":"87360","PlayerLinenumber":"1","ActSceneLine":"3.4.5","Player":"capulet","PlayerLine":"\'Tis very late, she\'ll not come down to-night:","scene":"3.4"},{"Dataline":"87361","PlayerLinenumber":"1","ActSceneLine":"3.4.6","Player":"capulet","PlayerLine":"I promise you, but for your company,","scene":"3.4"},{"Dataline":"87362","PlayerLinenumber":"1","ActSceneLine":"3.4.7","Player":"capulet","PlayerLine":"I would have been a-bed an hour ago.","scene":"3.4"},{"Dataline":"87363","PlayerLinenumber":"2","ActSceneLine":"3.4.8","Player":"paris","PlayerLine":"These times of woe afford no time to woo.","scene":"3.4"},{"Dataline":"87364","PlayerLinenumber":"2","ActSceneLine":"3.4.9","Player":"paris","PlayerLine":"Madam, good night: commend me to your daughter.","scene":"3.4"},{"Dataline":"87365","PlayerLinenumber":"3","ActSceneLine":"3.4.10","Player":"lady_capulet","PlayerLine":"I will, and know her mind early to-morrow,","scene":"3.4"},{"Dataline":"87366","PlayerLinenumber":"3","ActSceneLine":"3.4.11","Player":"lady_capulet","PlayerLine":"To-night she is mew\'d up to her heaviness.","scene":"3.4"},{"Dataline":"87367","PlayerLinenumber":"4","ActSceneLine":"3.4.12","Player":"capulet","PlayerLine":"Sir Paris, I will make a desperate tender","scene":"3.4"},{"Dataline":"87368","PlayerLinenumber":"4","ActSceneLine":"3.4.13","Player":"capulet","PlayerLine":"Of my child\'s love: I think she will be ruled","scene":"3.4"},{"Dataline":"87369","PlayerLinenumber":"4","ActSceneLine":"3.4.14","Player":"capulet","PlayerLine":"In all respects by me, nay, more, I doubt it not.","scene":"3.4"},{"Dataline":"87370","PlayerLinenumber":"4","ActSceneLine":"3.4.15","Player":"capulet","PlayerLine":"Wife, go you to her ere you go to bed,","scene":"3.4"},{"Dataline":"87371","PlayerLinenumber":"4","ActSceneLine":"3.4.16","Player":"capulet","PlayerLine":"Acquaint her here of my son Paris\' love,","scene":"3.4"},{"Dataline":"87372","PlayerLinenumber":"4","ActSceneLine":"3.4.17","Player":"capulet","PlayerLine":"And bid her, mark you me, on Wednesday next--","scene":"3.4"},{"Dataline":"87373","PlayerLinenumber":"4","ActSceneLine":"3.4.18","Player":"capulet","PlayerLine":"But, soft! what day is this?","scene":"3.4"},{"Dataline":"87374","PlayerLinenumber":"5","ActSceneLine":"3.4.19","Player":"paris","PlayerLine":"Monday, my lord,","scene":"3.4"},{"Dataline":"87375","PlayerLinenumber":"6","ActSceneLine":"3.4.20","Player":"capulet","PlayerLine":"Monday! ha, ha! Well, Wednesday is too soon,","scene":"3.4"},{"Dataline":"87376","PlayerLinenumber":"6","ActSceneLine":"3.4.21","Player":"capulet","PlayerLine":"O\' Thursday let it be: o\' Thursday, tell her,","scene":"3.4"},{"Dataline":"87377","PlayerLinenumber":"6","ActSceneLine":"3.4.22","Player":"capulet","PlayerLine":"She shall be married to this noble earl.","scene":"3.4"},{"Dataline":"87378","PlayerLinenumber":"6","ActSceneLine":"3.4.23","Player":"capulet","PlayerLine":"Will you be ready? do you like this haste?","scene":"3.4"},{"Dataline":"87379","PlayerLinenumber":"6","ActSceneLine":"3.4.24","Player":"capulet","PlayerLine":"We\'ll keep no great ado,--a friend or two,","scene":"3.4"},{"Dataline":"87380","PlayerLinenumber":"6","ActSceneLine":"3.4.25","Player":"capulet","PlayerLine":"For, hark you, Tybalt being slain so late,","scene":"3.4"},{"Dataline":"87381","PlayerLinenumber":"6","ActSceneLine":"3.4.26","Player":"capulet","PlayerLine":"It may be thought we held him carelessly,","scene":"3.4"},{"Dataline":"87382","PlayerLinenumber":"6","ActSceneLine":"3.4.27","Player":"capulet","PlayerLine":"Being our kinsman, if we revel much:","scene":"3.4"},{"Dataline":"87383","PlayerLinenumber":"6","ActSceneLine":"3.4.28","Player":"capulet","PlayerLine":"Therefore we\'ll have some half a dozen friends,","scene":"3.4"},{"Dataline":"87384","PlayerLinenumber":"6","ActSceneLine":"3.4.29","Player":"capulet","PlayerLine":"And there an end. But what say you to Thursday?","scene":"3.4"},{"Dataline":"87385","PlayerLinenumber":"7","ActSceneLine":"3.4.30","Player":"paris","PlayerLine":"My lord, I would that Thursday were to-morrow.","scene":"3.4"},{"Dataline":"87386","PlayerLinenumber":"8","ActSceneLine":"3.4.31","Player":"capulet","PlayerLine":"Well get you gone: o\' Thursday be it, then.","scene":"3.4"},{"Dataline":"87387","PlayerLinenumber":"8","ActSceneLine":"3.4.32","Player":"capulet","PlayerLine":"Go you to Juliet ere you go to bed,","scene":"3.4"},{"Dataline":"87388","PlayerLinenumber":"8","ActSceneLine":"3.4.33","Player":"capulet","PlayerLine":"Prepare her, wife, against this wedding-day.","scene":"3.4"},{"Dataline":"87389","PlayerLinenumber":"8","ActSceneLine":"3.4.34","Player":"capulet","PlayerLine":"Farewell, my lord. Light to my chamber, ho!","scene":"3.4"},{"Dataline":"87390","PlayerLinenumber":"8","ActSceneLine":"3.4.35","Player":"capulet","PlayerLine":"Afore me! it is so very very late,","scene":"3.4"},{"Dataline":"87391","PlayerLinenumber":"8","ActSceneLine":"3.4.36","Player":"capulet","PlayerLine":"That we may call it early by and by.","scene":"3.4"},{"Dataline":"87392","PlayerLinenumber":"8","ActSceneLine":"3.4.37","Player":"capulet","PlayerLine":"Good night.","scene":"3.4"},{"Dataline":"87396","PlayerLinenumber":"1","ActSceneLine":"3.5.1","Player":"juliet","PlayerLine":"Wilt thou be gone? it is not yet near day:","scene":"3.5"},{"Dataline":"87397","PlayerLinenumber":"1","ActSceneLine":"3.5.2","Player":"juliet","PlayerLine":"It was the nightingale, and not the lark,","scene":"3.5"},{"Dataline":"87398","PlayerLinenumber":"1","ActSceneLine":"3.5.3","Player":"juliet","PlayerLine":"That pierced the fearful hollow of thine ear,","scene":"3.5"},{"Dataline":"87399","PlayerLinenumber":"1","ActSceneLine":"3.5.4","Player":"juliet","PlayerLine":"Nightly she sings on yon pomegranate-tree:","scene":"3.5"},{"Dataline":"87400","PlayerLinenumber":"1","ActSceneLine":"3.5.5","Player":"juliet","PlayerLine":"Believe me, love, it was the nightingale.","scene":"3.5"},{"Dataline":"87401","PlayerLinenumber":"2","ActSceneLine":"3.5.6","Player":"romeo","PlayerLine":"It was the lark, the herald of the morn,","scene":"3.5"},{"Dataline":"87402","PlayerLinenumber":"2","ActSceneLine":"3.5.7","Player":"romeo","PlayerLine":"No nightingale: look, love, what envious streaks","scene":"3.5"},{"Dataline":"87403","PlayerLinenumber":"2","ActSceneLine":"3.5.8","Player":"romeo","PlayerLine":"Do lace the severing clouds in yonder east:","scene":"3.5"},{"Dataline":"87404","PlayerLinenumber":"2","ActSceneLine":"3.5.9","Player":"romeo","PlayerLine":"Night\'s candles are burnt out, and jocund day","scene":"3.5"},{"Dataline":"87405","PlayerLinenumber":"2","ActSceneLine":"3.5.10","Player":"romeo","PlayerLine":"Stands tiptoe on the misty mountain tops.","scene":"3.5"},{"Dataline":"87406","PlayerLinenumber":"2","ActSceneLine":"3.5.11","Player":"romeo","PlayerLine":"I must be gone and live, or stay and die.","scene":"3.5"},{"Dataline":"87407","PlayerLinenumber":"3","ActSceneLine":"3.5.12","Player":"juliet","PlayerLine":"Yon light is not day-light, I know it, I:","scene":"3.5"},{"Dataline":"87408","PlayerLinenumber":"3","ActSceneLine":"3.5.13","Player":"juliet","PlayerLine":"It is some meteor that the sun exhales,","scene":"3.5"},{"Dataline":"87409","PlayerLinenumber":"3","ActSceneLine":"3.5.14","Player":"juliet","PlayerLine":"To be to thee this night a torch-bearer,","scene":"3.5"},{"Dataline":"87410","PlayerLinenumber":"3","ActSceneLine":"3.5.15","Player":"juliet","PlayerLine":"And light thee on thy way to Mantua:","scene":"3.5"},{"Dataline":"87411","PlayerLinenumber":"3","ActSceneLine":"3.5.16","Player":"juliet","PlayerLine":"Therefore stay yet, thou need\'st not to be gone.","scene":"3.5"},{"Dataline":"87412","PlayerLinenumber":"4","ActSceneLine":"3.5.17","Player":"romeo","PlayerLine":"Let me be ta\'en, let me be put to death,","scene":"3.5"},{"Dataline":"87413","PlayerLinenumber":"4","ActSceneLine":"3.5.18","Player":"romeo","PlayerLine":"I am content, so thou wilt have it so.","scene":"3.5"},{"Dataline":"87414","PlayerLinenumber":"4","ActSceneLine":"3.5.19","Player":"romeo","PlayerLine":"I\'ll say yon grey is not the morning\'s eye,","scene":"3.5"},{"Dataline":"87415","PlayerLinenumber":"4","ActSceneLine":"3.5.20","Player":"romeo","PlayerLine":"\'Tis but the pale reflex of Cynthia\'s brow,","scene":"3.5"},{"Dataline":"87416","PlayerLinenumber":"4","ActSceneLine":"3.5.21","Player":"romeo","PlayerLine":"Nor that is not the lark, whose notes do beat","scene":"3.5"},{"Dataline":"87417","PlayerLinenumber":"4","ActSceneLine":"3.5.22","Player":"romeo","PlayerLine":"The vaulty heaven so high above our heads:","scene":"3.5"},{"Dataline":"87418","PlayerLinenumber":"4","ActSceneLine":"3.5.23","Player":"romeo","PlayerLine":"I have more care to stay than will to go:","scene":"3.5"},{"Dataline":"87419","PlayerLinenumber":"4","ActSceneLine":"3.5.24","Player":"romeo","PlayerLine":"Come, death, and welcome! Juliet wills it so.","scene":"3.5"},{"Dataline":"87420","PlayerLinenumber":"4","ActSceneLine":"3.5.25","Player":"romeo","PlayerLine":"How is\'t, my soul? let\'s talk, it is not day.","scene":"3.5"},{"Dataline":"87421","PlayerLinenumber":"5","ActSceneLine":"3.5.26","Player":"juliet","PlayerLine":"It is, it is: hie hence, be gone, away!","scene":"3.5"},{"Dataline":"87422","PlayerLinenumber":"5","ActSceneLine":"3.5.27","Player":"juliet","PlayerLine":"It is the lark that sings so out of tune,","scene":"3.5"},{"Dataline":"87423","PlayerLinenumber":"5","ActSceneLine":"3.5.28","Player":"juliet","PlayerLine":"Straining harsh discords and unpleasing sharps.","scene":"3.5"},{"Dataline":"87424","PlayerLinenumber":"5","ActSceneLine":"3.5.29","Player":"juliet","PlayerLine":"Some say the lark makes sweet division,","scene":"3.5"},{"Dataline":"87425","PlayerLinenumber":"5","ActSceneLine":"3.5.30","Player":"juliet","PlayerLine":"This doth not so, for she divideth us:","scene":"3.5"},{"Dataline":"87426","PlayerLinenumber":"5","ActSceneLine":"3.5.31","Player":"juliet","PlayerLine":"Some say the lark and loathed toad change eyes,","scene":"3.5"},{"Dataline":"87427","PlayerLinenumber":"5","ActSceneLine":"3.5.32","Player":"juliet","PlayerLine":"O, now I would they had changed voices too!","scene":"3.5"},{"Dataline":"87428","PlayerLinenumber":"5","ActSceneLine":"3.5.33","Player":"juliet","PlayerLine":"Since arm from arm that voice doth us affray,","scene":"3.5"},{"Dataline":"87429","PlayerLinenumber":"5","ActSceneLine":"3.5.34","Player":"juliet","PlayerLine":"Hunting thee hence with hunt\'s-up to the day,","scene":"3.5"},{"Dataline":"87430","PlayerLinenumber":"5","ActSceneLine":"3.5.35","Player":"juliet","PlayerLine":"O, now be gone, more light and light it grows.","scene":"3.5"},{"Dataline":"87431","PlayerLinenumber":"6","ActSceneLine":"3.5.36","Player":"romeo","PlayerLine":"More light and light, more dark and dark our woes!","scene":"3.5"},{"Dataline":"87433","PlayerLinenumber":"7","ActSceneLine":"3.5.37","Player":"nurse","PlayerLine":"Madam!","scene":"3.5"},{"Dataline":"87434","PlayerLinenumber":"8","ActSceneLine":"3.5.38","Player":"juliet","PlayerLine":"Nurse?","scene":"3.5"},{"Dataline":"87435","PlayerLinenumber":"9","ActSceneLine":"3.5.39","Player":"nurse","PlayerLine":"Your lady mother is coming to your chamber:","scene":"3.5"},{"Dataline":"87436","PlayerLinenumber":"9","ActSceneLine":"3.5.40","Player":"nurse","PlayerLine":"The day is broke, be wary, look about.","scene":"3.5"},{"Dataline":"87438","PlayerLinenumber":"10","ActSceneLine":"3.5.41","Player":"juliet","PlayerLine":"Then, window, let day in, and let life out.","scene":"3.5"},{"Dataline":"87439","PlayerLinenumber":"11","ActSceneLine":"3.5.42","Player":"romeo","PlayerLine":"Farewell, farewell! one kiss, and I\'ll descend.","scene":"3.5"},{"Dataline":"87441","PlayerLinenumber":"12","ActSceneLine":"3.5.43","Player":"juliet","PlayerLine":"Art thou gone so? love, lord, ay, husband, friend!","scene":"3.5"},{"Dataline":"87442","PlayerLinenumber":"12","ActSceneLine":"3.5.44","Player":"juliet","PlayerLine":"I must hear from thee every day in the hour,","scene":"3.5"},{"Dataline":"87443","PlayerLinenumber":"12","ActSceneLine":"3.5.45","Player":"juliet","PlayerLine":"For in a minute there are many days:","scene":"3.5"},{"Dataline":"87444","PlayerLinenumber":"12","ActSceneLine":"3.5.46","Player":"juliet","PlayerLine":"O, by this count I shall be much in years","scene":"3.5"},{"Dataline":"87445","PlayerLinenumber":"12","ActSceneLine":"3.5.47","Player":"juliet","PlayerLine":"Ere I again behold my Romeo!","scene":"3.5"},{"Dataline":"87446","PlayerLinenumber":"13","ActSceneLine":"3.5.48","Player":"romeo","PlayerLine":"Farewell!","scene":"3.5"},{"Dataline":"87447","PlayerLinenumber":"13","ActSceneLine":"3.5.49","Player":"romeo","PlayerLine":"I will omit no opportunity","scene":"3.5"},{"Dataline":"87448","PlayerLinenumber":"13","ActSceneLine":"3.5.50","Player":"romeo","PlayerLine":"That may convey my greetings, love, to thee.","scene":"3.5"},{"Dataline":"87449","PlayerLinenumber":"14","ActSceneLine":"3.5.51","Player":"juliet","PlayerLine":"O think\'st thou we shall ever meet again?","scene":"3.5"},{"Dataline":"87450","PlayerLinenumber":"15","ActSceneLine":"3.5.52","Player":"romeo","PlayerLine":"I doubt it not, and all these woes shall serve","scene":"3.5"},{"Dataline":"87451","PlayerLinenumber":"15","ActSceneLine":"3.5.53","Player":"romeo","PlayerLine":"For sweet discourses in our time to come.","scene":"3.5"},{"Dataline":"87452","PlayerLinenumber":"16","ActSceneLine":"3.5.54","Player":"juliet","PlayerLine":"O God, I have an ill-divining soul!","scene":"3.5"},{"Dataline":"87453","PlayerLinenumber":"16","ActSceneLine":"3.5.55","Player":"juliet","PlayerLine":"Methinks I see thee, now thou art below,","scene":"3.5"},{"Dataline":"87454","PlayerLinenumber":"16","ActSceneLine":"3.5.56","Player":"juliet","PlayerLine":"As one dead in the bottom of a tomb:","scene":"3.5"},{"Dataline":"87455","PlayerLinenumber":"16","ActSceneLine":"3.5.57","Player":"juliet","PlayerLine":"Either my eyesight fails, or thou look\'st pale.","scene":"3.5"},{"Dataline":"87456","PlayerLinenumber":"17","ActSceneLine":"3.5.58","Player":"romeo","PlayerLine":"And trust me, love, in my eye so do you:","scene":"3.5"},{"Dataline":"87457","PlayerLinenumber":"17","ActSceneLine":"3.5.59","Player":"romeo","PlayerLine":"Dry sorrow drinks our blood. Adieu, adieu!","scene":"3.5"},{"Dataline":"87459","PlayerLinenumber":"18","ActSceneLine":"3.5.60","Player":"juliet","PlayerLine":"O fortune, fortune! all men call thee fickle:","scene":"3.5"},{"Dataline":"87460","PlayerLinenumber":"18","ActSceneLine":"3.5.61","Player":"juliet","PlayerLine":"If thou art fickle, what dost thou with him.","scene":"3.5"},{"Dataline":"87461","PlayerLinenumber":"18","ActSceneLine":"3.5.62","Player":"juliet","PlayerLine":"That is renown\'d for faith? Be fickle, fortune,","scene":"3.5"},{"Dataline":"87462","PlayerLinenumber":"18","ActSceneLine":"3.5.63","Player":"juliet","PlayerLine":"For then, I hope, thou wilt not keep him long,","scene":"3.5"},{"Dataline":"87463","PlayerLinenumber":"18","ActSceneLine":"3.5.64","Player":"juliet","PlayerLine":"But send him back.","scene":"3.5"},{"Dataline":"87464","PlayerLinenumber":"19","ActSceneLine":"3.5.65","Player":"lady_capulet","PlayerLine":"[Within]         Ho, daughter! are you up?","scene":"3.5"},{"Dataline":"87465","PlayerLinenumber":"20","ActSceneLine":"3.5.66","Player":"juliet","PlayerLine":"Who is\'t that calls? is it my lady mother?","scene":"3.5"},{"Dataline":"87466","PlayerLinenumber":"20","ActSceneLine":"3.5.67","Player":"juliet","PlayerLine":"Is she not down so late, or up so early?","scene":"3.5"},{"Dataline":"87467","PlayerLinenumber":"20","ActSceneLine":"3.5.68","Player":"juliet","PlayerLine":"What unaccustom\'d cause procures her hither?","scene":"3.5"},{"Dataline":"87469","PlayerLinenumber":"21","ActSceneLine":"3.5.69","Player":"lady_capulet","PlayerLine":"Why, how now, Juliet!","scene":"3.5"},{"Dataline":"87470","PlayerLinenumber":"22","ActSceneLine":"3.5.70","Player":"juliet","PlayerLine":"Madam, I am not well.","scene":"3.5"},{"Dataline":"87471","PlayerLinenumber":"23","ActSceneLine":"3.5.71","Player":"lady_capulet","PlayerLine":"Evermore weeping for your cousin\'s death?","scene":"3.5"},{"Dataline":"87472","PlayerLinenumber":"23","ActSceneLine":"3.5.72","Player":"lady_capulet","PlayerLine":"What, wilt thou wash him from his grave with tears?","scene":"3.5"},{"Dataline":"87473","PlayerLinenumber":"23","ActSceneLine":"3.5.73","Player":"lady_capulet","PlayerLine":"An if thou couldst, thou couldst not make him live,","scene":"3.5"},{"Dataline":"87474","PlayerLinenumber":"23","ActSceneLine":"3.5.74","Player":"lady_capulet","PlayerLine":"Therefore, have done: some grief shows much of love,","scene":"3.5"},{"Dataline":"87475","PlayerLinenumber":"23","ActSceneLine":"3.5.75","Player":"lady_capulet","PlayerLine":"But much of grief shows still some want of wit.","scene":"3.5"},{"Dataline":"87476","PlayerLinenumber":"24","ActSceneLine":"3.5.76","Player":"juliet","PlayerLine":"Yet let me weep for such a feeling loss.","scene":"3.5"},{"Dataline":"87477","PlayerLinenumber":"25","ActSceneLine":"3.5.77","Player":"lady_capulet","PlayerLine":"So shall you feel the loss, but not the friend","scene":"3.5"},{"Dataline":"87478","PlayerLinenumber":"25","ActSceneLine":"3.5.78","Player":"lady_capulet","PlayerLine":"Which you weep for.","scene":"3.5"},{"Dataline":"87479","PlayerLinenumber":"26","ActSceneLine":"3.5.79","Player":"juliet","PlayerLine":"Feeling so the loss,","scene":"3.5"},{"Dataline":"87480","PlayerLinenumber":"26","ActSceneLine":"3.5.80","Player":"juliet","PlayerLine":"Cannot choose but ever weep the friend.","scene":"3.5"},{"Dataline":"87481","PlayerLinenumber":"27","ActSceneLine":"3.5.81","Player":"lady_capulet","PlayerLine":"Well, girl, thou weep\'st not so much for his death,","scene":"3.5"},{"Dataline":"87482","PlayerLinenumber":"27","ActSceneLine":"3.5.82","Player":"lady_capulet","PlayerLine":"As that the villain lives which slaughter\'d him.","scene":"3.5"},{"Dataline":"87483","PlayerLinenumber":"28","ActSceneLine":"3.5.83","Player":"juliet","PlayerLine":"What villain madam?","scene":"3.5"},{"Dataline":"87484","PlayerLinenumber":"29","ActSceneLine":"3.5.84","Player":"lady_capulet","PlayerLine":"That same villain, Romeo.","scene":"3.5"},{"Dataline":"87485","PlayerLinenumber":"30","ActSceneLine":"3.5.85","Player":"juliet","PlayerLine":"[Aside]  Villain and he be many miles asunder.--","scene":"3.5"},{"Dataline":"87486","PlayerLinenumber":"30","ActSceneLine":"3.5.86","Player":"juliet","PlayerLine":"God Pardon him! I do, with all my heart,","scene":"3.5"},{"Dataline":"87487","PlayerLinenumber":"30","ActSceneLine":"3.5.87","Player":"juliet","PlayerLine":"And yet no man like he doth grieve my heart.","scene":"3.5"},{"Dataline":"87488","PlayerLinenumber":"31","ActSceneLine":"3.5.88","Player":"lady_capulet","PlayerLine":"That is, because the traitor murderer lives.","scene":"3.5"},{"Dataline":"87489","PlayerLinenumber":"32","ActSceneLine":"3.5.89","Player":"juliet","PlayerLine":"Ay, madam, from the reach of these my hands:","scene":"3.5"},{"Dataline":"87490","PlayerLinenumber":"32","ActSceneLine":"3.5.90","Player":"juliet","PlayerLine":"Would none but I might venge my cousin\'s death!","scene":"3.5"},{"Dataline":"87491","PlayerLinenumber":"33","ActSceneLine":"3.5.91","Player":"lady_capulet","PlayerLine":"We will have vengeance for it, fear thou not:","scene":"3.5"},{"Dataline":"87492","PlayerLinenumber":"33","ActSceneLine":"3.5.92","Player":"lady_capulet","PlayerLine":"Then weep no more. I\'ll send to one in Mantua,","scene":"3.5"},{"Dataline":"87493","PlayerLinenumber":"33","ActSceneLine":"3.5.93","Player":"lady_capulet","PlayerLine":"Where that same banish\'d runagate doth live,","scene":"3.5"},{"Dataline":"87494","PlayerLinenumber":"33","ActSceneLine":"3.5.94","Player":"lady_capulet","PlayerLine":"Shall give him such an unaccustom\'d dram,","scene":"3.5"},{"Dataline":"87495","PlayerLinenumber":"33","ActSceneLine":"3.5.95","Player":"lady_capulet","PlayerLine":"That he shall soon keep Tybalt company:","scene":"3.5"},{"Dataline":"87496","PlayerLinenumber":"33","ActSceneLine":"3.5.96","Player":"lady_capulet","PlayerLine":"And then, I hope, thou wilt be satisfied.","scene":"3.5"},{"Dataline":"87497","PlayerLinenumber":"34","ActSceneLine":"3.5.97","Player":"juliet","PlayerLine":"Indeed, I never shall be satisfied","scene":"3.5"},{"Dataline":"87498","PlayerLinenumber":"34","ActSceneLine":"3.5.98","Player":"juliet","PlayerLine":"With Romeo, till I behold him--dead--","scene":"3.5"},{"Dataline":"87499","PlayerLinenumber":"34","ActSceneLine":"3.5.99","Player":"juliet","PlayerLine":"Is my poor heart for a kinsman vex\'d.","scene":"3.5"},{"Dataline":"87500","PlayerLinenumber":"34","ActSceneLine":"3.5.100","Player":"juliet","PlayerLine":"Madam, if you could find out but a man","scene":"3.5"},{"Dataline":"87501","PlayerLinenumber":"34","ActSceneLine":"3.5.101","Player":"juliet","PlayerLine":"To bear a poison, I would temper it,","scene":"3.5"},{"Dataline":"87502","PlayerLinenumber":"34","ActSceneLine":"3.5.102","Player":"juliet","PlayerLine":"That Romeo should, upon receipt thereof,","scene":"3.5"},{"Dataline":"87503","PlayerLinenumber":"34","ActSceneLine":"3.5.103","Player":"juliet","PlayerLine":"Soon sleep in quiet. O, how my heart abhors","scene":"3.5"},{"Dataline":"87504","PlayerLinenumber":"34","ActSceneLine":"3.5.104","Player":"juliet","PlayerLine":"To hear him named, and cannot come to him.","scene":"3.5"},{"Dataline":"87505","PlayerLinenumber":"34","ActSceneLine":"3.5.105","Player":"juliet","PlayerLine":"To wreak the love I bore my cousin","scene":"3.5"},{"Dataline":"87506","PlayerLinenumber":"34","ActSceneLine":"3.5.106","Player":"juliet","PlayerLine":"Upon his body that slaughter\'d him!","scene":"3.5"},{"Dataline":"87507","PlayerLinenumber":"35","ActSceneLine":"3.5.107","Player":"lady_capulet","PlayerLine":"Find thou the means, and I\'ll find such a man.","scene":"3.5"},{"Dataline":"87508","PlayerLinenumber":"35","ActSceneLine":"3.5.108","Player":"lady_capulet","PlayerLine":"But now I\'ll tell thee joyful tidings, girl.","scene":"3.5"},{"Dataline":"87509","PlayerLinenumber":"36","ActSceneLine":"3.5.109","Player":"juliet","PlayerLine":"And joy comes well in such a needy time:","scene":"3.5"},{"Dataline":"87510","PlayerLinenumber":"36","ActSceneLine":"3.5.110","Player":"juliet","PlayerLine":"What are they, I beseech your ladyship?","scene":"3.5"},{"Dataline":"87511","PlayerLinenumber":"37","ActSceneLine":"3.5.111","Player":"lady_capulet","PlayerLine":"Well, well, thou hast a careful father, child,","scene":"3.5"},{"Dataline":"87512","PlayerLinenumber":"37","ActSceneLine":"3.5.112","Player":"lady_capulet","PlayerLine":"One who, to put thee from thy heaviness,","scene":"3.5"},{"Dataline":"87513","PlayerLinenumber":"37","ActSceneLine":"3.5.113","Player":"lady_capulet","PlayerLine":"Hath sorted out a sudden day of joy,","scene":"3.5"},{"Dataline":"87514","PlayerLinenumber":"37","ActSceneLine":"3.5.114","Player":"lady_capulet","PlayerLine":"That thou expect\'st not nor I look\'d not for.","scene":"3.5"},{"Dataline":"87515","PlayerLinenumber":"38","ActSceneLine":"3.5.115","Player":"juliet","PlayerLine":"Madam, in happy time, what day is that?","scene":"3.5"},{"Dataline":"87516","PlayerLinenumber":"39","ActSceneLine":"3.5.116","Player":"lady_capulet","PlayerLine":"Marry, my child, early next Thursday morn,","scene":"3.5"},{"Dataline":"87517","PlayerLinenumber":"39","ActSceneLine":"3.5.117","Player":"lady_capulet","PlayerLine":"The gallant, young and noble gentleman,","scene":"3.5"},{"Dataline":"87518","PlayerLinenumber":"39","ActSceneLine":"3.5.118","Player":"lady_capulet","PlayerLine":"The County Paris, at Saint Peter\'s Church,","scene":"3.5"},{"Dataline":"87519","PlayerLinenumber":"39","ActSceneLine":"3.5.119","Player":"lady_capulet","PlayerLine":"Shall happily make thee there a joyful bride.","scene":"3.5"},{"Dataline":"87520","PlayerLinenumber":"40","ActSceneLine":"3.5.120","Player":"juliet","PlayerLine":"Now, by Saint Peter\'s Church and Peter too,","scene":"3.5"},{"Dataline":"87521","PlayerLinenumber":"40","ActSceneLine":"3.5.121","Player":"juliet","PlayerLine":"He shall not make me there a joyful bride.","scene":"3.5"},{"Dataline":"87522","PlayerLinenumber":"40","ActSceneLine":"3.5.122","Player":"juliet","PlayerLine":"I wonder at this haste, that I must wed","scene":"3.5"},{"Dataline":"87523","PlayerLinenumber":"40","ActSceneLine":"3.5.123","Player":"juliet","PlayerLine":"Ere he, that should be husband, comes to woo.","scene":"3.5"},{"Dataline":"87524","PlayerLinenumber":"40","ActSceneLine":"3.5.124","Player":"juliet","PlayerLine":"I pray you, tell my lord and father, madam,","scene":"3.5"},{"Dataline":"87525","PlayerLinenumber":"40","ActSceneLine":"3.5.125","Player":"juliet","PlayerLine":"I will not marry yet, and, when I do, I swear,","scene":"3.5"},{"Dataline":"87526","PlayerLinenumber":"40","ActSceneLine":"3.5.126","Player":"juliet","PlayerLine":"It shall be Romeo, whom you know I hate,","scene":"3.5"},{"Dataline":"87527","PlayerLinenumber":"40","ActSceneLine":"3.5.127","Player":"juliet","PlayerLine":"Rather than Paris. These are news indeed!","scene":"3.5"},{"Dataline":"87528","PlayerLinenumber":"41","ActSceneLine":"3.5.128","Player":"lady_capulet","PlayerLine":"Here comes your father, tell him so yourself,","scene":"3.5"},{"Dataline":"87529","PlayerLinenumber":"41","ActSceneLine":"3.5.129","Player":"lady_capulet","PlayerLine":"And see how he will take it at your hands.","scene":"3.5"},{"Dataline":"87531","PlayerLinenumber":"42","ActSceneLine":"3.5.130","Player":"capulet","PlayerLine":"When the sun sets, the air doth drizzle dew,","scene":"3.5"},{"Dataline":"87532","PlayerLinenumber":"42","ActSceneLine":"3.5.131","Player":"capulet","PlayerLine":"But for the sunset of my brother\'s son","scene":"3.5"},{"Dataline":"87533","PlayerLinenumber":"42","ActSceneLine":"3.5.132","Player":"capulet","PlayerLine":"It rains downright.","scene":"3.5"},{"Dataline":"87534","PlayerLinenumber":"42","ActSceneLine":"3.5.133","Player":"capulet","PlayerLine":"How now! a conduit, girl? what, still in tears?","scene":"3.5"},{"Dataline":"87535","PlayerLinenumber":"42","ActSceneLine":"3.5.134","Player":"capulet","PlayerLine":"Evermore showering? In one little body","scene":"3.5"},{"Dataline":"87536","PlayerLinenumber":"42","ActSceneLine":"3.5.135","Player":"capulet","PlayerLine":"Thou counterfeit\'st a bark, a sea, a wind,","scene":"3.5"},{"Dataline":"87537","PlayerLinenumber":"42","ActSceneLine":"3.5.136","Player":"capulet","PlayerLine":"For still thy eyes, which I may call the sea,","scene":"3.5"},{"Dataline":"87538","PlayerLinenumber":"42","ActSceneLine":"3.5.137","Player":"capulet","PlayerLine":"Do ebb and flow with tears, the bark thy body is,","scene":"3.5"},{"Dataline":"87539","PlayerLinenumber":"42","ActSceneLine":"3.5.138","Player":"capulet","PlayerLine":"Sailing in this salt flood, the winds, thy sighs,","scene":"3.5"},{"Dataline":"87540","PlayerLinenumber":"42","ActSceneLine":"3.5.139","Player":"capulet","PlayerLine":"Who, raging with thy tears, and they with them,","scene":"3.5"},{"Dataline":"87541","PlayerLinenumber":"42","ActSceneLine":"3.5.140","Player":"capulet","PlayerLine":"Without a sudden calm, will overset","scene":"3.5"},{"Dataline":"87542","PlayerLinenumber":"42","ActSceneLine":"3.5.141","Player":"capulet","PlayerLine":"Thy tempest-tossed body. How now, wife!","scene":"3.5"},{"Dataline":"87543","PlayerLinenumber":"42","ActSceneLine":"3.5.142","Player":"capulet","PlayerLine":"Have you deliver\'d to her our decree?","scene":"3.5"},{"Dataline":"87544","PlayerLinenumber":"43","ActSceneLine":"3.5.143","Player":"lady_capulet","PlayerLine":"Ay, sir, but she will none, she gives you thanks.","scene":"3.5"},{"Dataline":"87545","PlayerLinenumber":"43","ActSceneLine":"3.5.144","Player":"lady_capulet","PlayerLine":"I would the fool were married to her grave!","scene":"3.5"},{"Dataline":"87546","PlayerLinenumber":"44","ActSceneLine":"3.5.145","Player":"capulet","PlayerLine":"Soft! take me with you, take me with you, wife.","scene":"3.5"},{"Dataline":"87547","PlayerLinenumber":"44","ActSceneLine":"3.5.146","Player":"capulet","PlayerLine":"How! will she none? doth she not give us thanks?","scene":"3.5"},{"Dataline":"87548","PlayerLinenumber":"44","ActSceneLine":"3.5.147","Player":"capulet","PlayerLine":"Is she not proud? doth she not count her blest,","scene":"3.5"},{"Dataline":"87549","PlayerLinenumber":"44","ActSceneLine":"3.5.148","Player":"capulet","PlayerLine":"Unworthy as she is, that we have wrought","scene":"3.5"},{"Dataline":"87550","PlayerLinenumber":"44","ActSceneLine":"3.5.149","Player":"capulet","PlayerLine":"So worthy a gentleman to be her bridegroom?","scene":"3.5"},{"Dataline":"87551","PlayerLinenumber":"45","ActSceneLine":"3.5.150","Player":"juliet","PlayerLine":"Not proud, you have, but thankful, that you have:","scene":"3.5"},{"Dataline":"87552","PlayerLinenumber":"45","ActSceneLine":"3.5.151","Player":"juliet","PlayerLine":"Proud can I never be of what I hate,","scene":"3.5"},{"Dataline":"87553","PlayerLinenumber":"45","ActSceneLine":"3.5.152","Player":"juliet","PlayerLine":"But thankful even for hate, that is meant love.","scene":"3.5"},{"Dataline":"87554","PlayerLinenumber":"46","ActSceneLine":"3.5.153","Player":"capulet","PlayerLine":"How now, how now, chop-logic! What is this?","scene":"3.5"},{"Dataline":"87555","PlayerLinenumber":"46","ActSceneLine":"3.5.154","Player":"capulet","PlayerLine":"\'Proud,\' and \'I thank you,\' and \'I thank you not,\'","scene":"3.5"},{"Dataline":"87556","PlayerLinenumber":"46","ActSceneLine":"3.5.155","Player":"capulet","PlayerLine":"And yet \'not proud,\' mistress minion, you,","scene":"3.5"},{"Dataline":"87557","PlayerLinenumber":"46","ActSceneLine":"3.5.156","Player":"capulet","PlayerLine":"Thank me no thankings, nor, proud me no prouds,","scene":"3.5"},{"Dataline":"87558","PlayerLinenumber":"46","ActSceneLine":"3.5.157","Player":"capulet","PlayerLine":"But fettle your fine joints \'gainst Thursday next,","scene":"3.5"},{"Dataline":"87559","PlayerLinenumber":"46","ActSceneLine":"3.5.158","Player":"capulet","PlayerLine":"To go with Paris to Saint Peter\'s Church,","scene":"3.5"},{"Dataline":"87560","PlayerLinenumber":"46","ActSceneLine":"3.5.159","Player":"capulet","PlayerLine":"Or I will drag thee on a hurdle thither.","scene":"3.5"},{"Dataline":"87561","PlayerLinenumber":"46","ActSceneLine":"3.5.160","Player":"capulet","PlayerLine":"Out, you green-sickness carrion! out, you baggage!","scene":"3.5"},{"Dataline":"87562","PlayerLinenumber":"46","ActSceneLine":"3.5.161","Player":"capulet","PlayerLine":"You tallow-face!","scene":"3.5"},{"Dataline":"87563","PlayerLinenumber":"47","ActSceneLine":"3.5.162","Player":"lady_capulet","PlayerLine":"Fie, fie! what, are you mad?","scene":"3.5"},{"Dataline":"87564","PlayerLinenumber":"48","ActSceneLine":"3.5.163","Player":"juliet","PlayerLine":"Good father, I beseech you on my knees,","scene":"3.5"},{"Dataline":"87565","PlayerLinenumber":"48","ActSceneLine":"3.5.164","Player":"juliet","PlayerLine":"Hear me with patience but to speak a word.","scene":"3.5"},{"Dataline":"87566","PlayerLinenumber":"49","ActSceneLine":"3.5.165","Player":"capulet","PlayerLine":"Hang thee, young baggage! disobedient wretch!","scene":"3.5"},{"Dataline":"87567","PlayerLinenumber":"49","ActSceneLine":"3.5.166","Player":"capulet","PlayerLine":"I tell thee what: get thee to church o\' Thursday,","scene":"3.5"},{"Dataline":"87568","PlayerLinenumber":"49","ActSceneLine":"3.5.167","Player":"capulet","PlayerLine":"Or never after look me in the face:","scene":"3.5"},{"Dataline":"87569","PlayerLinenumber":"49","ActSceneLine":"3.5.168","Player":"capulet","PlayerLine":"Speak not, reply not, do not answer me,","scene":"3.5"},{"Dataline":"87570","PlayerLinenumber":"49","ActSceneLine":"3.5.169","Player":"capulet","PlayerLine":"My fingers itch. Wife, we scarce thought us blest","scene":"3.5"},{"Dataline":"87571","PlayerLinenumber":"49","ActSceneLine":"3.5.170","Player":"capulet","PlayerLine":"That God had lent us but this only child,","scene":"3.5"},{"Dataline":"87572","PlayerLinenumber":"49","ActSceneLine":"3.5.171","Player":"capulet","PlayerLine":"But now I see this one is one too much,","scene":"3.5"},{"Dataline":"87573","PlayerLinenumber":"49","ActSceneLine":"3.5.172","Player":"capulet","PlayerLine":"And that we have a curse in having her:","scene":"3.5"},{"Dataline":"87574","PlayerLinenumber":"49","ActSceneLine":"3.5.173","Player":"capulet","PlayerLine":"Out on her, hilding!","scene":"3.5"},{"Dataline":"87575","PlayerLinenumber":"50","ActSceneLine":"3.5.174","Player":"nurse","PlayerLine":"God in heaven bless her!","scene":"3.5"},{"Dataline":"87576","PlayerLinenumber":"50","ActSceneLine":"3.5.175","Player":"nurse","PlayerLine":"You are to blame, my lord, to rate her so.","scene":"3.5"},{"Dataline":"87577","PlayerLinenumber":"51","ActSceneLine":"3.5.176","Player":"capulet","PlayerLine":"And why, my lady wisdom? hold your tongue,","scene":"3.5"},{"Dataline":"87578","PlayerLinenumber":"51","ActSceneLine":"3.5.177","Player":"capulet","PlayerLine":"Good prudence, smatter with your gossips, go.","scene":"3.5"},{"Dataline":"87579","PlayerLinenumber":"52","ActSceneLine":"3.5.178","Player":"nurse","PlayerLine":"I speak no treason.","scene":"3.5"},{"Dataline":"87580","PlayerLinenumber":"53","ActSceneLine":"3.5.179","Player":"capulet","PlayerLine":"O, God ye god-den.","scene":"3.5"},{"Dataline":"87581","PlayerLinenumber":"54","ActSceneLine":"3.5.180","Player":"nurse","PlayerLine":"May not one speak?","scene":"3.5"},{"Dataline":"87582","PlayerLinenumber":"55","ActSceneLine":"3.5.181","Player":"capulet","PlayerLine":"Peace, you mumbling fool!","scene":"3.5"},{"Dataline":"87583","PlayerLinenumber":"55","ActSceneLine":"3.5.182","Player":"capulet","PlayerLine":"Utter your gravity o\'er a gossip\'s bowl,","scene":"3.5"},{"Dataline":"87584","PlayerLinenumber":"55","ActSceneLine":"3.5.183","Player":"capulet","PlayerLine":"For here we need it not.","scene":"3.5"},{"Dataline":"87585","PlayerLinenumber":"56","ActSceneLine":"3.5.184","Player":"lady_capulet","PlayerLine":"You are too hot.","scene":"3.5"},{"Dataline":"87586","PlayerLinenumber":"57","ActSceneLine":"3.5.185","Player":"capulet","PlayerLine":"God\'s bread! it makes me mad:","scene":"3.5"},{"Dataline":"87587","PlayerLinenumber":"57","ActSceneLine":"3.5.186","Player":"capulet","PlayerLine":"Day, night, hour, tide, time, work, play,","scene":"3.5"},{"Dataline":"87588","PlayerLinenumber":"57","ActSceneLine":"3.5.187","Player":"capulet","PlayerLine":"Alone, in company, still my care hath been","scene":"3.5"},{"Dataline":"87589","PlayerLinenumber":"57","ActSceneLine":"3.5.188","Player":"capulet","PlayerLine":"To have her match\'d: and having now provided","scene":"3.5"},{"Dataline":"87590","PlayerLinenumber":"57","ActSceneLine":"3.5.189","Player":"capulet","PlayerLine":"A gentleman of noble parentage,","scene":"3.5"},{"Dataline":"87591","PlayerLinenumber":"57","ActSceneLine":"3.5.190","Player":"capulet","PlayerLine":"Of fair demesnes, youthful, and nobly train\'d,","scene":"3.5"},{"Dataline":"87592","PlayerLinenumber":"57","ActSceneLine":"3.5.191","Player":"capulet","PlayerLine":"Stuff\'d, as they say, with honourable parts,","scene":"3.5"},{"Dataline":"87593","PlayerLinenumber":"57","ActSceneLine":"3.5.192","Player":"capulet","PlayerLine":"Proportion\'d as one\'s thought would wish a man,","scene":"3.5"},{"Dataline":"87594","PlayerLinenumber":"57","ActSceneLine":"3.5.193","Player":"capulet","PlayerLine":"And then to have a wretched puling fool,","scene":"3.5"},{"Dataline":"87595","PlayerLinenumber":"57","ActSceneLine":"3.5.194","Player":"capulet","PlayerLine":"A whining mammet, in her fortune\'s tender,","scene":"3.5"},{"Dataline":"87596","PlayerLinenumber":"57","ActSceneLine":"3.5.195","Player":"capulet","PlayerLine":"To answer \'I\'ll not wed, I cannot love,","scene":"3.5"},{"Dataline":"87597","PlayerLinenumber":"57","ActSceneLine":"3.5.196","Player":"capulet","PlayerLine":"I am too young, I pray you, pardon me.\'","scene":"3.5"},{"Dataline":"87598","PlayerLinenumber":"57","ActSceneLine":"3.5.197","Player":"capulet","PlayerLine":"But, as you will not wed, I\'ll pardon you:","scene":"3.5"},{"Dataline":"87599","PlayerLinenumber":"57","ActSceneLine":"3.5.198","Player":"capulet","PlayerLine":"Graze where you will you shall not house with me:","scene":"3.5"},{"Dataline":"87600","PlayerLinenumber":"57","ActSceneLine":"3.5.199","Player":"capulet","PlayerLine":"Look to\'t, think on\'t, I do not use to jest.","scene":"3.5"},{"Dataline":"87601","PlayerLinenumber":"57","ActSceneLine":"3.5.200","Player":"capulet","PlayerLine":"Thursday is near, lay hand on heart, advise:","scene":"3.5"},{"Dataline":"87602","PlayerLinenumber":"57","ActSceneLine":"3.5.201","Player":"capulet","PlayerLine":"An you be mine, I\'ll give you to my friend,","scene":"3.5"},{"Dataline":"87603","PlayerLinenumber":"57","ActSceneLine":"3.5.202","Player":"capulet","PlayerLine":"And you be not, hang, beg, starve, die in","scene":"3.5"},{"Dataline":"87604","PlayerLinenumber":"57","ActSceneLine":"3.5.203","Player":"capulet","PlayerLine":"the streets,","scene":"3.5"},{"Dataline":"87605","PlayerLinenumber":"57","ActSceneLine":"3.5.204","Player":"capulet","PlayerLine":"For, by my soul, I\'ll ne\'er acknowledge thee,","scene":"3.5"},{"Dataline":"87606","PlayerLinenumber":"57","ActSceneLine":"3.5.205","Player":"capulet","PlayerLine":"Nor what is mine shall never do thee good:","scene":"3.5"},{"Dataline":"87607","PlayerLinenumber":"57","ActSceneLine":"3.5.206","Player":"capulet","PlayerLine":"Trust to\'t, bethink you, I\'ll not be forsworn.","scene":"3.5"},{"Dataline":"87609","PlayerLinenumber":"58","ActSceneLine":"3.5.207","Player":"juliet","PlayerLine":"Is there no pity sitting in the clouds,","scene":"3.5"},{"Dataline":"87610","PlayerLinenumber":"58","ActSceneLine":"3.5.208","Player":"juliet","PlayerLine":"That sees into the bottom of my grief?","scene":"3.5"},{"Dataline":"87611","PlayerLinenumber":"58","ActSceneLine":"3.5.209","Player":"juliet","PlayerLine":"O, sweet my mother, cast me not away!","scene":"3.5"},{"Dataline":"87612","PlayerLinenumber":"58","ActSceneLine":"3.5.210","Player":"juliet","PlayerLine":"Delay this marriage for a month, a week,","scene":"3.5"},{"Dataline":"87613","PlayerLinenumber":"58","ActSceneLine":"3.5.211","Player":"juliet","PlayerLine":"Or, if you do not, make the bridal bed","scene":"3.5"},{"Dataline":"87614","PlayerLinenumber":"58","ActSceneLine":"3.5.212","Player":"juliet","PlayerLine":"In that dim monument where Tybalt lies.","scene":"3.5"},{"Dataline":"87615","PlayerLinenumber":"59","ActSceneLine":"3.5.213","Player":"lady_capulet","PlayerLine":"Talk not to me, for I\'ll not speak a word:","scene":"3.5"},{"Dataline":"87616","PlayerLinenumber":"59","ActSceneLine":"3.5.214","Player":"lady_capulet","PlayerLine":"Do as thou wilt, for I have done with thee.","scene":"3.5"},{"Dataline":"87618","PlayerLinenumber":"60","ActSceneLine":"3.5.215","Player":"juliet","PlayerLine":"O God!--O nurse, how shall this be prevented?","scene":"3.5"},{"Dataline":"87619","PlayerLinenumber":"60","ActSceneLine":"3.5.216","Player":"juliet","PlayerLine":"My husband is on earth, my faith in heaven,","scene":"3.5"},{"Dataline":"87620","PlayerLinenumber":"60","ActSceneLine":"3.5.217","Player":"juliet","PlayerLine":"How shall that faith return again to earth,","scene":"3.5"},{"Dataline":"87621","PlayerLinenumber":"60","ActSceneLine":"3.5.218","Player":"juliet","PlayerLine":"Unless that husband send it me from heaven","scene":"3.5"},{"Dataline":"87622","PlayerLinenumber":"60","ActSceneLine":"3.5.219","Player":"juliet","PlayerLine":"By leaving earth? comfort me, counsel me.","scene":"3.5"},{"Dataline":"87623","PlayerLinenumber":"60","ActSceneLine":"3.5.220","Player":"juliet","PlayerLine":"Alack, alack, that heaven should practise stratagems","scene":"3.5"},{"Dataline":"87624","PlayerLinenumber":"60","ActSceneLine":"3.5.221","Player":"juliet","PlayerLine":"Upon so soft a subject as myself!","scene":"3.5"},{"Dataline":"87625","PlayerLinenumber":"60","ActSceneLine":"3.5.222","Player":"juliet","PlayerLine":"What say\'st thou? hast thou not a word of joy?","scene":"3.5"},{"Dataline":"87626","PlayerLinenumber":"60","ActSceneLine":"3.5.223","Player":"juliet","PlayerLine":"Some comfort, nurse.","scene":"3.5"},{"Dataline":"87627","PlayerLinenumber":"61","ActSceneLine":"3.5.224","Player":"nurse","PlayerLine":"Faith, here it is.","scene":"3.5"},{"Dataline":"87628","PlayerLinenumber":"61","ActSceneLine":"3.5.225","Player":"nurse","PlayerLine":"Romeo is banish\'d, and all the world to nothing,","scene":"3.5"},{"Dataline":"87629","PlayerLinenumber":"61","ActSceneLine":"3.5.226","Player":"nurse","PlayerLine":"That he dares ne\'er come back to challenge you,","scene":"3.5"},{"Dataline":"87630","PlayerLinenumber":"61","ActSceneLine":"3.5.227","Player":"nurse","PlayerLine":"Or, if he do, it needs must be by stealth.","scene":"3.5"},{"Dataline":"87631","PlayerLinenumber":"61","ActSceneLine":"3.5.228","Player":"nurse","PlayerLine":"Then, since the case so stands as now it doth,","scene":"3.5"},{"Dataline":"87632","PlayerLinenumber":"61","ActSceneLine":"3.5.229","Player":"nurse","PlayerLine":"I think it best you married with the county.","scene":"3.5"},{"Dataline":"87633","PlayerLinenumber":"61","ActSceneLine":"3.5.230","Player":"nurse","PlayerLine":"O, he\'s a lovely gentleman!","scene":"3.5"},{"Dataline":"87634","PlayerLinenumber":"61","ActSceneLine":"3.5.231","Player":"nurse","PlayerLine":"Romeo\'s a dishclout to him: an eagle, madam,","scene":"3.5"},{"Dataline":"87635","PlayerLinenumber":"61","ActSceneLine":"3.5.232","Player":"nurse","PlayerLine":"Hath not so green, so quick, so fair an eye","scene":"3.5"},{"Dataline":"87636","PlayerLinenumber":"61","ActSceneLine":"3.5.233","Player":"nurse","PlayerLine":"As Paris hath. Beshrew my very heart,","scene":"3.5"},{"Dataline":"87637","PlayerLinenumber":"61","ActSceneLine":"3.5.234","Player":"nurse","PlayerLine":"I think you are happy in this second match,","scene":"3.5"},{"Dataline":"87638","PlayerLinenumber":"61","ActSceneLine":"3.5.235","Player":"nurse","PlayerLine":"For it excels your first: or if it did not,","scene":"3.5"},{"Dataline":"87639","PlayerLinenumber":"61","ActSceneLine":"3.5.236","Player":"nurse","PlayerLine":"Your first is dead, or \'twere as good he were,","scene":"3.5"},{"Dataline":"87640","PlayerLinenumber":"61","ActSceneLine":"3.5.237","Player":"nurse","PlayerLine":"As living here and you no use of him.","scene":"3.5"},{"Dataline":"87641","PlayerLinenumber":"62","ActSceneLine":"3.5.238","Player":"juliet","PlayerLine":"Speakest thou from thy heart?","scene":"3.5"},{"Dataline":"87642","PlayerLinenumber":"63","ActSceneLine":"3.5.239","Player":"nurse","PlayerLine":"And from my soul too,","scene":"3.5"},{"Dataline":"87643","PlayerLinenumber":"63","ActSceneLine":"3.5.240","Player":"nurse","PlayerLine":"Or else beshrew them both.","scene":"3.5"},{"Dataline":"87644","PlayerLinenumber":"64","ActSceneLine":"3.5.241","Player":"juliet","PlayerLine":"Amen!","scene":"3.5"},{"Dataline":"87645","PlayerLinenumber":"65","ActSceneLine":"3.5.242","Player":"nurse","PlayerLine":"What?","scene":"3.5"},{"Dataline":"87646","PlayerLinenumber":"66","ActSceneLine":"3.5.243","Player":"juliet","PlayerLine":"Well, thou hast comforted me marvellous much.","scene":"3.5"},{"Dataline":"87647","PlayerLinenumber":"66","ActSceneLine":"3.5.244","Player":"juliet","PlayerLine":"Go in: and tell my lady I am gone,","scene":"3.5"},{"Dataline":"87648","PlayerLinenumber":"66","ActSceneLine":"3.5.245","Player":"juliet","PlayerLine":"Having displeased my father, to Laurence\' cell,","scene":"3.5"},{"Dataline":"87649","PlayerLinenumber":"66","ActSceneLine":"3.5.246","Player":"juliet","PlayerLine":"To make confession and to be absolved.","scene":"3.5"},{"Dataline":"87650","PlayerLinenumber":"67","ActSceneLine":"3.5.247","Player":"nurse","PlayerLine":"Marry, I will, and this is wisely done.","scene":"3.5"},{"Dataline":"87652","PlayerLinenumber":"68","ActSceneLine":"3.5.248","Player":"juliet","PlayerLine":"Ancient damnation! O most wicked fiend!","scene":"3.5"},{"Dataline":"87653","PlayerLinenumber":"68","ActSceneLine":"3.5.249","Player":"juliet","PlayerLine":"Is it more sin to wish me thus forsworn,","scene":"3.5"},{"Dataline":"87654","PlayerLinenumber":"68","ActSceneLine":"3.5.250","Player":"juliet","PlayerLine":"Or to dispraise my lord with that same tongue","scene":"3.5"},{"Dataline":"87655","PlayerLinenumber":"68","ActSceneLine":"3.5.251","Player":"juliet","PlayerLine":"Which she hath praised him with above compare","scene":"3.5"},{"Dataline":"87656","PlayerLinenumber":"68","ActSceneLine":"3.5.252","Player":"juliet","PlayerLine":"So many thousand times? Go, counsellor,","scene":"3.5"},{"Dataline":"87657","PlayerLinenumber":"68","ActSceneLine":"3.5.253","Player":"juliet","PlayerLine":"Thou and my bosom henceforth shall be twain.","scene":"3.5"},{"Dataline":"87658","PlayerLinenumber":"68","ActSceneLine":"3.5.254","Player":"juliet","PlayerLine":"I\'ll to the friar, to know his remedy:","scene":"3.5"},{"Dataline":"87659","PlayerLinenumber":"68","ActSceneLine":"3.5.255","Player":"juliet","PlayerLine":"If all else fail, myself have power to die.","scene":"3.5"},{"Dataline":"87664","PlayerLinenumber":"1","ActSceneLine":"4.1.1","Player":"friar_laurence","PlayerLine":"On Thursday, sir? the time is very short.","scene":"4.1"},{"Dataline":"87665","PlayerLinenumber":"2","ActSceneLine":"4.1.2","Player":"paris","PlayerLine":"My father Capulet will have it so,","scene":"4.1"},{"Dataline":"87666","PlayerLinenumber":"2","ActSceneLine":"4.1.3","Player":"paris","PlayerLine":"And I am nothing slow to slack his haste.","scene":"4.1"},{"Dataline":"87667","PlayerLinenumber":"3","ActSceneLine":"4.1.4","Player":"friar_laurence","PlayerLine":"You say you do not know the lady\'s mind:","scene":"4.1"},{"Dataline":"87668","PlayerLinenumber":"3","ActSceneLine":"4.1.5","Player":"friar_laurence","PlayerLine":"Uneven is the course, I like it not.","scene":"4.1"},{"Dataline":"87669","PlayerLinenumber":"4","ActSceneLine":"4.1.6","Player":"paris","PlayerLine":"Immoderately she weeps for Tybalt\'s death,","scene":"4.1"},{"Dataline":"87670","PlayerLinenumber":"4","ActSceneLine":"4.1.7","Player":"paris","PlayerLine":"And therefore have I little talk\'d of love,","scene":"4.1"},{"Dataline":"87671","PlayerLinenumber":"4","ActSceneLine":"4.1.8","Player":"paris","PlayerLine":"For Venus smiles not in a house of tears.","scene":"4.1"},{"Dataline":"87672","PlayerLinenumber":"4","ActSceneLine":"4.1.9","Player":"paris","PlayerLine":"Now, sir, her father counts it dangerous","scene":"4.1"},{"Dataline":"87673","PlayerLinenumber":"4","ActSceneLine":"4.1.10","Player":"paris","PlayerLine":"That she doth give her sorrow so much sway,","scene":"4.1"},{"Dataline":"87674","PlayerLinenumber":"4","ActSceneLine":"4.1.11","Player":"paris","PlayerLine":"And in his wisdom hastes our marriage,","scene":"4.1"},{"Dataline":"87675","PlayerLinenumber":"4","ActSceneLine":"4.1.12","Player":"paris","PlayerLine":"To stop the inundation of her tears,","scene":"4.1"},{"Dataline":"87676","PlayerLinenumber":"4","ActSceneLine":"4.1.13","Player":"paris","PlayerLine":"Which, too much minded by herself alone,","scene":"4.1"},{"Dataline":"87677","PlayerLinenumber":"4","ActSceneLine":"4.1.14","Player":"paris","PlayerLine":"May be put from her by society:","scene":"4.1"},{"Dataline":"87678","PlayerLinenumber":"4","ActSceneLine":"4.1.15","Player":"paris","PlayerLine":"Now do you know the reason of this haste.","scene":"4.1"},{"Dataline":"87679","PlayerLinenumber":"5","ActSceneLine":"4.1.16","Player":"friar_laurence","PlayerLine":"[Aside]  I would I knew not why it should be slow\'d.","scene":"4.1"},{"Dataline":"87680","PlayerLinenumber":"5","ActSceneLine":"4.1.17","Player":"friar_laurence","PlayerLine":"Look, sir, here comes the lady towards my cell.","scene":"4.1"},{"Dataline":"87682","PlayerLinenumber":"6","ActSceneLine":"4.1.18","Player":"paris","PlayerLine":"Happily met, my lady and my wife!","scene":"4.1"},{"Dataline":"87683","PlayerLinenumber":"7","ActSceneLine":"4.1.19","Player":"juliet","PlayerLine":"That may be, sir, when I may be a wife.","scene":"4.1"},{"Dataline":"87684","PlayerLinenumber":"8","ActSceneLine":"4.1.20","Player":"paris","PlayerLine":"That may be must be, love, on Thursday next.","scene":"4.1"},{"Dataline":"87685","PlayerLinenumber":"9","ActSceneLine":"4.1.21","Player":"juliet","PlayerLine":"What must be shall be.","scene":"4.1"},{"Dataline":"87686","PlayerLinenumber":"10","ActSceneLine":"4.1.22","Player":"friar_laurence","PlayerLine":"That\'s a certain text.","scene":"4.1"},{"Dataline":"87687","PlayerLinenumber":"11","ActSceneLine":"4.1.23","Player":"paris","PlayerLine":"Come you to make confession to this father?","scene":"4.1"},{"Dataline":"87688","PlayerLinenumber":"12","ActSceneLine":"4.1.24","Player":"juliet","PlayerLine":"To answer that, I should confess to you.","scene":"4.1"},{"Dataline":"87689","PlayerLinenumber":"13","ActSceneLine":"4.1.25","Player":"paris","PlayerLine":"Do not deny to him that you love me.","scene":"4.1"},{"Dataline":"87690","PlayerLinenumber":"14","ActSceneLine":"4.1.26","Player":"juliet","PlayerLine":"I will confess to you that I love him.","scene":"4.1"},{"Dataline":"87691","PlayerLinenumber":"15","ActSceneLine":"4.1.27","Player":"paris","PlayerLine":"So will ye, I am sure, that you love me.","scene":"4.1"},{"Dataline":"87692","PlayerLinenumber":"16","ActSceneLine":"4.1.28","Player":"juliet","PlayerLine":"If I do so, it will be of more price,","scene":"4.1"},{"Dataline":"87693","PlayerLinenumber":"16","ActSceneLine":"4.1.29","Player":"juliet","PlayerLine":"Being spoke behind your back, than to your face.","scene":"4.1"},{"Dataline":"87694","PlayerLinenumber":"17","ActSceneLine":"4.1.30","Player":"paris","PlayerLine":"Poor soul, thy face is much abused with tears.","scene":"4.1"},{"Dataline":"87695","PlayerLinenumber":"18","ActSceneLine":"4.1.31","Player":"juliet","PlayerLine":"The tears have got small victory by that,","scene":"4.1"},{"Dataline":"87696","PlayerLinenumber":"18","ActSceneLine":"4.1.32","Player":"juliet","PlayerLine":"For it was bad enough before their spite.","scene":"4.1"},{"Dataline":"87697","PlayerLinenumber":"19","ActSceneLine":"4.1.33","Player":"paris","PlayerLine":"Thou wrong\'st it, more than tears, with that report.","scene":"4.1"},{"Dataline":"87698","PlayerLinenumber":"20","ActSceneLine":"4.1.34","Player":"juliet","PlayerLine":"That is no slander, sir, which is a truth,","scene":"4.1"},{"Dataline":"87699","PlayerLinenumber":"20","ActSceneLine":"4.1.35","Player":"juliet","PlayerLine":"And what I spake, I spake it to my face.","scene":"4.1"},{"Dataline":"87700","PlayerLinenumber":"21","ActSceneLine":"4.1.36","Player":"paris","PlayerLine":"Thy face is mine, and thou hast slander\'d it.","scene":"4.1"},{"Dataline":"87701","PlayerLinenumber":"22","ActSceneLine":"4.1.37","Player":"juliet","PlayerLine":"It may be so, for it is not mine own.","scene":"4.1"},{"Dataline":"87702","PlayerLinenumber":"22","ActSceneLine":"4.1.38","Player":"juliet","PlayerLine":"Are you at leisure, holy father, now,","scene":"4.1"},{"Dataline":"87703","PlayerLinenumber":"22","ActSceneLine":"4.1.39","Player":"juliet","PlayerLine":"Or shall I come to you at evening mass?","scene":"4.1"},{"Dataline":"87704","PlayerLinenumber":"23","ActSceneLine":"4.1.40","Player":"friar_laurence","PlayerLine":"My leisure serves me, pensive daughter, now.","scene":"4.1"},{"Dataline":"87705","PlayerLinenumber":"23","ActSceneLine":"4.1.41","Player":"friar_laurence","PlayerLine":"My lord, we must entreat the time alone.","scene":"4.1"},{"Dataline":"87706","PlayerLinenumber":"24","ActSceneLine":"4.1.42","Player":"paris","PlayerLine":"God shield I should disturb devotion!","scene":"4.1"},{"Dataline":"87707","PlayerLinenumber":"24","ActSceneLine":"4.1.43","Player":"paris","PlayerLine":"Juliet, on Thursday early will I rouse ye:","scene":"4.1"},{"Dataline":"87708","PlayerLinenumber":"24","ActSceneLine":"4.1.44","Player":"paris","PlayerLine":"Till then, adieu, and keep this holy kiss.","scene":"4.1"},{"Dataline":"87710","PlayerLinenumber":"25","ActSceneLine":"4.1.45","Player":"juliet","PlayerLine":"O shut the door! and when thou hast done so,","scene":"4.1"},{"Dataline":"87711","PlayerLinenumber":"25","ActSceneLine":"4.1.46","Player":"juliet","PlayerLine":"Come weep with me, past hope, past cure, past help!","scene":"4.1"},{"Dataline":"87712","PlayerLinenumber":"26","ActSceneLine":"4.1.47","Player":"friar_laurence","PlayerLine":"Ah, Juliet, I already know thy grief,","scene":"4.1"},{"Dataline":"87713","PlayerLinenumber":"26","ActSceneLine":"4.1.48","Player":"friar_laurence","PlayerLine":"It strains me past the compass of my wits:","scene":"4.1"},{"Dataline":"87714","PlayerLinenumber":"26","ActSceneLine":"4.1.49","Player":"friar_laurence","PlayerLine":"I hear thou must, and nothing may prorogue it,","scene":"4.1"},{"Dataline":"87715","PlayerLinenumber":"26","ActSceneLine":"4.1.50","Player":"friar_laurence","PlayerLine":"On Thursday next be married to this county.","scene":"4.1"},{"Dataline":"87716","PlayerLinenumber":"27","ActSceneLine":"4.1.51","Player":"juliet","PlayerLine":"Tell me not, friar, that thou hear\'st of this,","scene":"4.1"},{"Dataline":"87717","PlayerLinenumber":"27","ActSceneLine":"4.1.52","Player":"juliet","PlayerLine":"Unless thou tell me how I may prevent it:","scene":"4.1"},{"Dataline":"87718","PlayerLinenumber":"27","ActSceneLine":"4.1.53","Player":"juliet","PlayerLine":"If, in thy wisdom, thou canst give no help,","scene":"4.1"},{"Dataline":"87719","PlayerLinenumber":"27","ActSceneLine":"4.1.54","Player":"juliet","PlayerLine":"Do thou but call my resolution wise,","scene":"4.1"},{"Dataline":"87720","PlayerLinenumber":"27","ActSceneLine":"4.1.55","Player":"juliet","PlayerLine":"And with this knife I\'ll help it presently.","scene":"4.1"},{"Dataline":"87721","PlayerLinenumber":"27","ActSceneLine":"4.1.56","Player":"juliet","PlayerLine":"God join\'d my heart and Romeo\'s, thou our hands,","scene":"4.1"},{"Dataline":"87722","PlayerLinenumber":"27","ActSceneLine":"4.1.57","Player":"juliet","PlayerLine":"And ere this hand, by thee to Romeo seal\'d,","scene":"4.1"},{"Dataline":"87723","PlayerLinenumber":"27","ActSceneLine":"4.1.58","Player":"juliet","PlayerLine":"Shall be the label to another deed,","scene":"4.1"},{"Dataline":"87724","PlayerLinenumber":"27","ActSceneLine":"4.1.59","Player":"juliet","PlayerLine":"Or my true heart with treacherous revolt","scene":"4.1"},{"Dataline":"87725","PlayerLinenumber":"27","ActSceneLine":"4.1.60","Player":"juliet","PlayerLine":"Turn to another, this shall slay them both:","scene":"4.1"},{"Dataline":"87726","PlayerLinenumber":"27","ActSceneLine":"4.1.61","Player":"juliet","PlayerLine":"Therefore, out of thy long-experienced time,","scene":"4.1"},{"Dataline":"87727","PlayerLinenumber":"27","ActSceneLine":"4.1.62","Player":"juliet","PlayerLine":"Give me some present counsel, or, behold,","scene":"4.1"},{"Dataline":"87728","PlayerLinenumber":"27","ActSceneLine":"4.1.63","Player":"juliet","PlayerLine":"\'Twixt my extremes and me this bloody knife","scene":"4.1"},{"Dataline":"87729","PlayerLinenumber":"27","ActSceneLine":"4.1.64","Player":"juliet","PlayerLine":"Shall play the umpire, arbitrating that","scene":"4.1"},{"Dataline":"87730","PlayerLinenumber":"27","ActSceneLine":"4.1.65","Player":"juliet","PlayerLine":"Which the commission of thy years and art","scene":"4.1"},{"Dataline":"87731","PlayerLinenumber":"27","ActSceneLine":"4.1.66","Player":"juliet","PlayerLine":"Could to no issue of true honour bring.","scene":"4.1"},{"Dataline":"87732","PlayerLinenumber":"27","ActSceneLine":"4.1.67","Player":"juliet","PlayerLine":"Be not so long to speak, I long to die,","scene":"4.1"},{"Dataline":"87733","PlayerLinenumber":"27","ActSceneLine":"4.1.68","Player":"juliet","PlayerLine":"If what thou speak\'st speak not of remedy.","scene":"4.1"},{"Dataline":"87734","PlayerLinenumber":"28","ActSceneLine":"4.1.69","Player":"friar_laurence","PlayerLine":"Hold, daughter: I do spy a kind of hope,","scene":"4.1"},{"Dataline":"87735","PlayerLinenumber":"28","ActSceneLine":"4.1.70","Player":"friar_laurence","PlayerLine":"Which craves as desperate an execution.","scene":"4.1"},{"Dataline":"87736","PlayerLinenumber":"28","ActSceneLine":"4.1.71","Player":"friar_laurence","PlayerLine":"As that is desperate which we would prevent.","scene":"4.1"},{"Dataline":"87737","PlayerLinenumber":"28","ActSceneLine":"4.1.72","Player":"friar_laurence","PlayerLine":"If, rather than to marry County Paris,","scene":"4.1"},{"Dataline":"87738","PlayerLinenumber":"28","ActSceneLine":"4.1.73","Player":"friar_laurence","PlayerLine":"Thou hast the strength of will to slay thyself,","scene":"4.1"},{"Dataline":"87739","PlayerLinenumber":"28","ActSceneLine":"4.1.74","Player":"friar_laurence","PlayerLine":"Then is it likely thou wilt undertake","scene":"4.1"},{"Dataline":"87740","PlayerLinenumber":"28","ActSceneLine":"4.1.75","Player":"friar_laurence","PlayerLine":"A thing like death to chide away this shame,","scene":"4.1"},{"Dataline":"87741","PlayerLinenumber":"28","ActSceneLine":"4.1.76","Player":"friar_laurence","PlayerLine":"That copest with death himself to scape from it:","scene":"4.1"},{"Dataline":"87742","PlayerLinenumber":"28","ActSceneLine":"4.1.77","Player":"friar_laurence","PlayerLine":"And, if thou darest, I\'ll give thee remedy.","scene":"4.1"},{"Dataline":"87743","PlayerLinenumber":"29","ActSceneLine":"4.1.78","Player":"juliet","PlayerLine":"O, bid me leap, rather than marry Paris,","scene":"4.1"},{"Dataline":"87744","PlayerLinenumber":"29","ActSceneLine":"4.1.79","Player":"juliet","PlayerLine":"From off the battlements of yonder tower,","scene":"4.1"},{"Dataline":"87745","PlayerLinenumber":"29","ActSceneLine":"4.1.80","Player":"juliet","PlayerLine":"Or walk in thievish ways, or bid me lurk","scene":"4.1"},{"Dataline":"87746","PlayerLinenumber":"29","ActSceneLine":"4.1.81","Player":"juliet","PlayerLine":"Where serpents are, chain me with roaring bears,","scene":"4.1"},{"Dataline":"87747","PlayerLinenumber":"29","ActSceneLine":"4.1.82","Player":"juliet","PlayerLine":"Or shut me nightly in a charnel-house,","scene":"4.1"},{"Dataline":"87748","PlayerLinenumber":"29","ActSceneLine":"4.1.83","Player":"juliet","PlayerLine":"O\'er-cover\'d quite with dead men\'s rattling bones,","scene":"4.1"},{"Dataline":"87749","PlayerLinenumber":"29","ActSceneLine":"4.1.84","Player":"juliet","PlayerLine":"With reeky shanks and yellow chapless skulls,","scene":"4.1"},{"Dataline":"87750","PlayerLinenumber":"29","ActSceneLine":"4.1.85","Player":"juliet","PlayerLine":"Or bid me go into a new-made grave","scene":"4.1"},{"Dataline":"87751","PlayerLinenumber":"29","ActSceneLine":"4.1.86","Player":"juliet","PlayerLine":"And hide me with a dead man in his shroud,","scene":"4.1"},{"Dataline":"87752","PlayerLinenumber":"29","ActSceneLine":"4.1.87","Player":"juliet","PlayerLine":"Things that, to hear them told, have made me tremble,","scene":"4.1"},{"Dataline":"87753","PlayerLinenumber":"29","ActSceneLine":"4.1.88","Player":"juliet","PlayerLine":"And I will do it without fear or doubt,","scene":"4.1"},{"Dataline":"87754","PlayerLinenumber":"29","ActSceneLine":"4.1.89","Player":"juliet","PlayerLine":"To live an unstain\'d wife to my sweet love.","scene":"4.1"},{"Dataline":"87755","PlayerLinenumber":"30","ActSceneLine":"4.1.90","Player":"friar_laurence","PlayerLine":"Hold, then, go home, be merry, give consent","scene":"4.1"},{"Dataline":"87756","PlayerLinenumber":"30","ActSceneLine":"4.1.91","Player":"friar_laurence","PlayerLine":"To marry Paris: Wednesday is to-morrow:","scene":"4.1"},{"Dataline":"87757","PlayerLinenumber":"30","ActSceneLine":"4.1.92","Player":"friar_laurence","PlayerLine":"To-morrow night look that thou lie alone,","scene":"4.1"},{"Dataline":"87758","PlayerLinenumber":"30","ActSceneLine":"4.1.93","Player":"friar_laurence","PlayerLine":"Let not thy nurse lie with thee in thy chamber:","scene":"4.1"},{"Dataline":"87759","PlayerLinenumber":"30","ActSceneLine":"4.1.94","Player":"friar_laurence","PlayerLine":"Take thou this vial, being then in bed,","scene":"4.1"},{"Dataline":"87760","PlayerLinenumber":"30","ActSceneLine":"4.1.95","Player":"friar_laurence","PlayerLine":"And this distilled liquor drink thou off,","scene":"4.1"},{"Dataline":"87761","PlayerLinenumber":"30","ActSceneLine":"4.1.96","Player":"friar_laurence","PlayerLine":"When presently through all thy veins shall run","scene":"4.1"},{"Dataline":"87762","PlayerLinenumber":"30","ActSceneLine":"4.1.97","Player":"friar_laurence","PlayerLine":"A cold and drowsy humour, for no pulse","scene":"4.1"},{"Dataline":"87763","PlayerLinenumber":"30","ActSceneLine":"4.1.98","Player":"friar_laurence","PlayerLine":"Shall keep his native progress, but surcease:","scene":"4.1"},{"Dataline":"87764","PlayerLinenumber":"30","ActSceneLine":"4.1.99","Player":"friar_laurence","PlayerLine":"No warmth, no breath, shall testify thou livest,","scene":"4.1"},{"Dataline":"87765","PlayerLinenumber":"30","ActSceneLine":"4.1.100","Player":"friar_laurence","PlayerLine":"The roses in thy lips and cheeks shall fade","scene":"4.1"},{"Dataline":"87766","PlayerLinenumber":"30","ActSceneLine":"4.1.101","Player":"friar_laurence","PlayerLine":"To paly ashes, thy eyes\' windows fall,","scene":"4.1"},{"Dataline":"87767","PlayerLinenumber":"30","ActSceneLine":"4.1.102","Player":"friar_laurence","PlayerLine":"Like death, when he shuts up the day of life,","scene":"4.1"},{"Dataline":"87768","PlayerLinenumber":"30","ActSceneLine":"4.1.103","Player":"friar_laurence","PlayerLine":"Each part, deprived of supple government,","scene":"4.1"},{"Dataline":"87769","PlayerLinenumber":"30","ActSceneLine":"4.1.104","Player":"friar_laurence","PlayerLine":"Shall, stiff and stark and cold, appear like death:","scene":"4.1"},{"Dataline":"87770","PlayerLinenumber":"30","ActSceneLine":"4.1.105","Player":"friar_laurence","PlayerLine":"And in this borrow\'d likeness of shrunk death","scene":"4.1"},{"Dataline":"87771","PlayerLinenumber":"30","ActSceneLine":"4.1.106","Player":"friar_laurence","PlayerLine":"Thou shalt continue two and forty hours,","scene":"4.1"},{"Dataline":"87772","PlayerLinenumber":"30","ActSceneLine":"4.1.107","Player":"friar_laurence","PlayerLine":"And then awake as from a pleasant sleep.","scene":"4.1"},{"Dataline":"87773","PlayerLinenumber":"30","ActSceneLine":"4.1.108","Player":"friar_laurence","PlayerLine":"Now, when the bridegroom in the morning comes","scene":"4.1"},{"Dataline":"87774","PlayerLinenumber":"30","ActSceneLine":"4.1.109","Player":"friar_laurence","PlayerLine":"To rouse thee from thy bed, there art thou dead:","scene":"4.1"},{"Dataline":"87775","PlayerLinenumber":"30","ActSceneLine":"4.1.110","Player":"friar_laurence","PlayerLine":"Then, as the manner of our country is,","scene":"4.1"},{"Dataline":"87776","PlayerLinenumber":"30","ActSceneLine":"4.1.111","Player":"friar_laurence","PlayerLine":"In thy best robes uncover\'d on the bier","scene":"4.1"},{"Dataline":"87777","PlayerLinenumber":"30","ActSceneLine":"4.1.112","Player":"friar_laurence","PlayerLine":"Thou shalt be borne to that same ancient vault","scene":"4.1"},{"Dataline":"87778","PlayerLinenumber":"30","ActSceneLine":"4.1.113","Player":"friar_laurence","PlayerLine":"Where all the kindred of the Capulets lie.","scene":"4.1"},{"Dataline":"87779","PlayerLinenumber":"30","ActSceneLine":"4.1.114","Player":"friar_laurence","PlayerLine":"In the mean time, against thou shalt awake,","scene":"4.1"},{"Dataline":"87780","PlayerLinenumber":"30","ActSceneLine":"4.1.115","Player":"friar_laurence","PlayerLine":"Shall Romeo by my letters know our drift,","scene":"4.1"},{"Dataline":"87781","PlayerLinenumber":"30","ActSceneLine":"4.1.116","Player":"friar_laurence","PlayerLine":"And hither shall he come: and he and I","scene":"4.1"},{"Dataline":"87782","PlayerLinenumber":"30","ActSceneLine":"4.1.117","Player":"friar_laurence","PlayerLine":"Will watch thy waking, and that very night","scene":"4.1"},{"Dataline":"87783","PlayerLinenumber":"30","ActSceneLine":"4.1.118","Player":"friar_laurence","PlayerLine":"Shall Romeo bear thee hence to Mantua.","scene":"4.1"},{"Dataline":"87784","PlayerLinenumber":"30","ActSceneLine":"4.1.119","Player":"friar_laurence","PlayerLine":"And this shall free thee from this present shame,","scene":"4.1"},{"Dataline":"87785","PlayerLinenumber":"30","ActSceneLine":"4.1.120","Player":"friar_laurence","PlayerLine":"If no inconstant toy, nor womanish fear,","scene":"4.1"},{"Dataline":"87786","PlayerLinenumber":"30","ActSceneLine":"4.1.121","Player":"friar_laurence","PlayerLine":"Abate thy valour in the acting it.","scene":"4.1"},{"Dataline":"87787","PlayerLinenumber":"31","ActSceneLine":"4.1.122","Player":"juliet","PlayerLine":"Give me, give me! O, tell not me of fear!","scene":"4.1"},{"Dataline":"87788","PlayerLinenumber":"32","ActSceneLine":"4.1.123","Player":"friar_laurence","PlayerLine":"Hold, get you gone, be strong and prosperous","scene":"4.1"},{"Dataline":"87789","PlayerLinenumber":"32","ActSceneLine":"4.1.124","Player":"friar_laurence","PlayerLine":"In this resolve: I\'ll send a friar with speed","scene":"4.1"},{"Dataline":"87790","PlayerLinenumber":"32","ActSceneLine":"4.1.125","Player":"friar_laurence","PlayerLine":"To Mantua, with my letters to thy lord.","scene":"4.1"},{"Dataline":"87791","PlayerLinenumber":"33","ActSceneLine":"4.1.126","Player":"juliet","PlayerLine":"Love give me strength! and strength shall help afford.","scene":"4.1"},{"Dataline":"87792","PlayerLinenumber":"33","ActSceneLine":"4.1.127","Player":"juliet","PlayerLine":"Farewell, dear father!","scene":"4.1"},{"Dataline":"87796","PlayerLinenumber":"1","ActSceneLine":"4.2.1","Player":"capulet","PlayerLine":"So many guests invite as here are writ.","scene":"4.2"},{"Dataline":"87798","PlayerLinenumber":"1","ActSceneLine":"4.2.2","Player":"capulet","PlayerLine":"Sirrah, go hire me twenty cunning cooks.","scene":"4.2"},{"Dataline":"87799","PlayerLinenumber":"2","ActSceneLine":"4.2.3","Player":"second_servant","PlayerLine":"You shall have none ill, sir, for I\'ll try if they","scene":"4.2"},{"Dataline":"87800","PlayerLinenumber":"2","ActSceneLine":"4.2.4","Player":"second_servant","PlayerLine":"can lick their fingers.","scene":"4.2"},{"Dataline":"87801","PlayerLinenumber":"3","ActSceneLine":"4.2.5","Player":"capulet","PlayerLine":"How canst thou try them so?","scene":"4.2"},{"Dataline":"87802","PlayerLinenumber":"4","ActSceneLine":"4.2.6","Player":"second_servant","PlayerLine":"Marry, sir, \'tis an ill cook that cannot lick his","scene":"4.2"},{"Dataline":"87803","PlayerLinenumber":"4","ActSceneLine":"4.2.7","Player":"second_servant","PlayerLine":"own fingers: therefore he that cannot lick his","scene":"4.2"},{"Dataline":"87804","PlayerLinenumber":"4","ActSceneLine":"4.2.8","Player":"second_servant","PlayerLine":"fingers goes not with me.","scene":"4.2"},{"Dataline":"87805","PlayerLinenumber":"5","ActSceneLine":"4.2.9","Player":"capulet","PlayerLine":"Go, be gone.","scene":"4.2"},{"Dataline":"87807","PlayerLinenumber":"5","ActSceneLine":"4.2.10","Player":"capulet","PlayerLine":"We shall be much unfurnished for this time.","scene":"4.2"},{"Dataline":"87808","PlayerLinenumber":"5","ActSceneLine":"4.2.11","Player":"capulet","PlayerLine":"What, is my daughter gone to Friar Laurence?","scene":"4.2"},{"Dataline":"87809","PlayerLinenumber":"6","ActSceneLine":"4.2.12","Player":"nurse","PlayerLine":"Ay, forsooth.","scene":"4.2"},{"Dataline":"87810","PlayerLinenumber":"7","ActSceneLine":"4.2.13","Player":"capulet","PlayerLine":"Well, he may chance to do some good on her:","scene":"4.2"},{"Dataline":"87811","PlayerLinenumber":"7","ActSceneLine":"4.2.14","Player":"capulet","PlayerLine":"A peevish self-will\'d harlotry it is.","scene":"4.2"},{"Dataline":"87812","PlayerLinenumber":"8","ActSceneLine":"4.2.15","Player":"nurse","PlayerLine":"See where she comes from shrift with merry look.","scene":"4.2"},{"Dataline":"87814","PlayerLinenumber":"9","ActSceneLine":"4.2.16","Player":"capulet","PlayerLine":"How now, my headstrong! where have you been gadding?","scene":"4.2"},{"Dataline":"87815","PlayerLinenumber":"10","ActSceneLine":"4.2.17","Player":"juliet","PlayerLine":"Where I have learn\'d me to repent the sin","scene":"4.2"},{"Dataline":"87816","PlayerLinenumber":"10","ActSceneLine":"4.2.18","Player":"juliet","PlayerLine":"Of disobedient opposition","scene":"4.2"},{"Dataline":"87817","PlayerLinenumber":"10","ActSceneLine":"4.2.19","Player":"juliet","PlayerLine":"To you and your behests, and am enjoin\'d","scene":"4.2"},{"Dataline":"87818","PlayerLinenumber":"10","ActSceneLine":"4.2.20","Player":"juliet","PlayerLine":"By holy Laurence to fall prostrate here,","scene":"4.2"},{"Dataline":"87819","PlayerLinenumber":"10","ActSceneLine":"4.2.21","Player":"juliet","PlayerLine":"And beg your pardon: pardon, I beseech you!","scene":"4.2"},{"Dataline":"87820","PlayerLinenumber":"10","ActSceneLine":"4.2.22","Player":"juliet","PlayerLine":"Henceforward I am ever ruled by you.","scene":"4.2"},{"Dataline":"87821","PlayerLinenumber":"11","ActSceneLine":"4.2.23","Player":"capulet","PlayerLine":"Send for the county, go tell him of this:","scene":"4.2"},{"Dataline":"87822","PlayerLinenumber":"11","ActSceneLine":"4.2.24","Player":"capulet","PlayerLine":"I\'ll have this knot knit up to-morrow morning.","scene":"4.2"},{"Dataline":"87823","PlayerLinenumber":"12","ActSceneLine":"4.2.25","Player":"juliet","PlayerLine":"I met the youthful lord at Laurence\' cell,","scene":"4.2"},{"Dataline":"87824","PlayerLinenumber":"12","ActSceneLine":"4.2.26","Player":"juliet","PlayerLine":"And gave him what becomed love I might,","scene":"4.2"},{"Dataline":"87825","PlayerLinenumber":"12","ActSceneLine":"4.2.27","Player":"juliet","PlayerLine":"Not step o\'er the bounds of modesty.","scene":"4.2"},{"Dataline":"87826","PlayerLinenumber":"13","ActSceneLine":"4.2.28","Player":"capulet","PlayerLine":"Why, I am glad on\'t, this is well: stand up:","scene":"4.2"},{"Dataline":"87827","PlayerLinenumber":"13","ActSceneLine":"4.2.29","Player":"capulet","PlayerLine":"This is as\'t should be. Let me see the county,","scene":"4.2"},{"Dataline":"87828","PlayerLinenumber":"13","ActSceneLine":"4.2.30","Player":"capulet","PlayerLine":"Ay, marry, go, I say, and fetch him hither.","scene":"4.2"},{"Dataline":"87829","PlayerLinenumber":"13","ActSceneLine":"4.2.31","Player":"capulet","PlayerLine":"Now, afore God! this reverend holy friar,","scene":"4.2"},{"Dataline":"87830","PlayerLinenumber":"13","ActSceneLine":"4.2.32","Player":"capulet","PlayerLine":"Our whole city is much bound to him.","scene":"4.2"},{"Dataline":"87831","PlayerLinenumber":"14","ActSceneLine":"4.2.33","Player":"juliet","PlayerLine":"Nurse, will you go with me into my closet,","scene":"4.2"},{"Dataline":"87832","PlayerLinenumber":"14","ActSceneLine":"4.2.34","Player":"juliet","PlayerLine":"To help me sort such needful ornaments","scene":"4.2"},{"Dataline":"87833","PlayerLinenumber":"14","ActSceneLine":"4.2.35","Player":"juliet","PlayerLine":"As you think fit to furnish me to-morrow?","scene":"4.2"},{"Dataline":"87834","PlayerLinenumber":"15","ActSceneLine":"4.2.36","Player":"lady_capulet","PlayerLine":"No, not till Thursday, there is time enough.","scene":"4.2"},{"Dataline":"87835","PlayerLinenumber":"16","ActSceneLine":"4.2.37","Player":"capulet","PlayerLine":"Go, nurse, go with her: we\'ll to church to-morrow.","scene":"4.2"},{"Dataline":"87837","PlayerLinenumber":"17","ActSceneLine":"4.2.38","Player":"lady_capulet","PlayerLine":"We shall be short in our provision:","scene":"4.2"},{"Dataline":"87838","PlayerLinenumber":"17","ActSceneLine":"4.2.39","Player":"lady_capulet","PlayerLine":"\'Tis now near night.","scene":"4.2"},{"Dataline":"87839","PlayerLinenumber":"18","ActSceneLine":"4.2.40","Player":"capulet","PlayerLine":"Tush, I will stir about,","scene":"4.2"},{"Dataline":"87840","PlayerLinenumber":"18","ActSceneLine":"4.2.41","Player":"capulet","PlayerLine":"And all things shall be well, I warrant thee, wife:","scene":"4.2"},{"Dataline":"87841","PlayerLinenumber":"18","ActSceneLine":"4.2.42","Player":"capulet","PlayerLine":"Go thou to Juliet, help to deck up her,","scene":"4.2"},{"Dataline":"87842","PlayerLinenumber":"18","ActSceneLine":"4.2.43","Player":"capulet","PlayerLine":"I\'ll not to bed to-night, let me alone,","scene":"4.2"},{"Dataline":"87843","PlayerLinenumber":"18","ActSceneLine":"4.2.44","Player":"capulet","PlayerLine":"I\'ll play the housewife for this once. What, ho!","scene":"4.2"},{"Dataline":"87844","PlayerLinenumber":"18","ActSceneLine":"4.2.45","Player":"capulet","PlayerLine":"They are all forth. Well, I will walk myself","scene":"4.2"},{"Dataline":"87845","PlayerLinenumber":"18","ActSceneLine":"4.2.46","Player":"capulet","PlayerLine":"To County Paris, to prepare him up","scene":"4.2"},{"Dataline":"87846","PlayerLinenumber":"18","ActSceneLine":"4.2.47","Player":"capulet","PlayerLine":"Against to-morrow: my heart is wondrous light,","scene":"4.2"},{"Dataline":"87847","PlayerLinenumber":"18","ActSceneLine":"4.2.48","Player":"capulet","PlayerLine":"Since this same wayward girl is so reclaim\'d.","scene":"4.2"},{"Dataline":"87851","PlayerLinenumber":"1","ActSceneLine":"4.3.1","Player":"juliet","PlayerLine":"Ay, those attires are best: but, gentle nurse,","scene":"4.3"},{"Dataline":"87852","PlayerLinenumber":"1","ActSceneLine":"4.3.2","Player":"juliet","PlayerLine":"I pray thee, leave me to my self to-night,","scene":"4.3"},{"Dataline":"87853","PlayerLinenumber":"1","ActSceneLine":"4.3.3","Player":"juliet","PlayerLine":"For I have need of many orisons","scene":"4.3"},{"Dataline":"87854","PlayerLinenumber":"1","ActSceneLine":"4.3.4","Player":"juliet","PlayerLine":"To move the heavens to smile upon my state,","scene":"4.3"},{"Dataline":"87855","PlayerLinenumber":"1","ActSceneLine":"4.3.5","Player":"juliet","PlayerLine":"Which, well thou know\'st, is cross, and full of sin.","scene":"4.3"},{"Dataline":"87857","PlayerLinenumber":"2","ActSceneLine":"4.3.6","Player":"lady_capulet","PlayerLine":"What, are you busy, ho? need you my help?","scene":"4.3"},{"Dataline":"87858","PlayerLinenumber":"3","ActSceneLine":"4.3.7","Player":"juliet","PlayerLine":"No, madam, we have cull\'d such necessaries","scene":"4.3"},{"Dataline":"87859","PlayerLinenumber":"3","ActSceneLine":"4.3.8","Player":"juliet","PlayerLine":"As are behoveful for our state to-morrow:","scene":"4.3"},{"Dataline":"87860","PlayerLinenumber":"3","ActSceneLine":"4.3.9","Player":"juliet","PlayerLine":"So please you, let me now be left alone,","scene":"4.3"},{"Dataline":"87861","PlayerLinenumber":"3","ActSceneLine":"4.3.10","Player":"juliet","PlayerLine":"And let the nurse this night sit up with you,","scene":"4.3"},{"Dataline":"87862","PlayerLinenumber":"3","ActSceneLine":"4.3.11","Player":"juliet","PlayerLine":"For, I am sure, you have your hands full all,","scene":"4.3"},{"Dataline":"87863","PlayerLinenumber":"3","ActSceneLine":"4.3.12","Player":"juliet","PlayerLine":"In this so sudden business.","scene":"4.3"},{"Dataline":"87864","PlayerLinenumber":"4","ActSceneLine":"4.3.13","Player":"lady_capulet","PlayerLine":"Good night:","scene":"4.3"},{"Dataline":"87865","PlayerLinenumber":"4","ActSceneLine":"4.3.14","Player":"lady_capulet","PlayerLine":"Get thee to bed, and rest, for thou hast need.","scene":"4.3"},{"Dataline":"87867","PlayerLinenumber":"5","ActSceneLine":"4.3.15","Player":"juliet","PlayerLine":"Farewell! God knows when we shall meet again.","scene":"4.3"},{"Dataline":"87868","PlayerLinenumber":"5","ActSceneLine":"4.3.16","Player":"juliet","PlayerLine":"I have a faint cold fear thrills through my veins,","scene":"4.3"},{"Dataline":"87869","PlayerLinenumber":"5","ActSceneLine":"4.3.17","Player":"juliet","PlayerLine":"That almost freezes up the heat of life:","scene":"4.3"},{"Dataline":"87870","PlayerLinenumber":"5","ActSceneLine":"4.3.18","Player":"juliet","PlayerLine":"I\'ll call them back again to comfort me:","scene":"4.3"},{"Dataline":"87871","PlayerLinenumber":"5","ActSceneLine":"4.3.19","Player":"juliet","PlayerLine":"Nurse! What should she do here?","scene":"4.3"},{"Dataline":"87872","PlayerLinenumber":"5","ActSceneLine":"4.3.20","Player":"juliet","PlayerLine":"My dismal scene I needs must act alone.","scene":"4.3"},{"Dataline":"87873","PlayerLinenumber":"5","ActSceneLine":"4.3.21","Player":"juliet","PlayerLine":"Come, vial.","scene":"4.3"},{"Dataline":"87874","PlayerLinenumber":"5","ActSceneLine":"4.3.22","Player":"juliet","PlayerLine":"What if this mixture do not work at all?","scene":"4.3"},{"Dataline":"87875","PlayerLinenumber":"5","ActSceneLine":"4.3.23","Player":"juliet","PlayerLine":"Shall I be married then to-morrow morning?","scene":"4.3"},{"Dataline":"87876","PlayerLinenumber":"5","ActSceneLine":"4.3.24","Player":"juliet","PlayerLine":"No, no: this shall forbid it: lie thou there.","scene":"4.3"},{"Dataline":"87878","PlayerLinenumber":"5","ActSceneLine":"4.3.25","Player":"juliet","PlayerLine":"What if it be a poison, which the friar","scene":"4.3"},{"Dataline":"87879","PlayerLinenumber":"5","ActSceneLine":"4.3.26","Player":"juliet","PlayerLine":"Subtly hath minister\'d to have me dead,","scene":"4.3"},{"Dataline":"87880","PlayerLinenumber":"5","ActSceneLine":"4.3.27","Player":"juliet","PlayerLine":"Lest in this marriage he should be dishonour\'d,","scene":"4.3"},{"Dataline":"87881","PlayerLinenumber":"5","ActSceneLine":"4.3.28","Player":"juliet","PlayerLine":"Because he married me before to Romeo?","scene":"4.3"},{"Dataline":"87882","PlayerLinenumber":"5","ActSceneLine":"4.3.29","Player":"juliet","PlayerLine":"I fear it is: and yet, methinks, it should not,","scene":"4.3"},{"Dataline":"87883","PlayerLinenumber":"5","ActSceneLine":"4.3.30","Player":"juliet","PlayerLine":"For he hath still been tried a holy man.","scene":"4.3"},{"Dataline":"87884","PlayerLinenumber":"5","ActSceneLine":"4.3.31","Player":"juliet","PlayerLine":"How if, when I am laid into the tomb,","scene":"4.3"},{"Dataline":"87885","PlayerLinenumber":"5","ActSceneLine":"4.3.32","Player":"juliet","PlayerLine":"I wake before the time that Romeo","scene":"4.3"},{"Dataline":"87886","PlayerLinenumber":"5","ActSceneLine":"4.3.33","Player":"juliet","PlayerLine":"Come to redeem me? there\'s a fearful point!","scene":"4.3"},{"Dataline":"87887","PlayerLinenumber":"5","ActSceneLine":"4.3.34","Player":"juliet","PlayerLine":"Shall I not, then, be stifled in the vault,","scene":"4.3"},{"Dataline":"87888","PlayerLinenumber":"5","ActSceneLine":"4.3.35","Player":"juliet","PlayerLine":"To whose foul mouth no healthsome air breathes in,","scene":"4.3"},{"Dataline":"87889","PlayerLinenumber":"5","ActSceneLine":"4.3.36","Player":"juliet","PlayerLine":"And there die strangled ere my Romeo comes?","scene":"4.3"},{"Dataline":"87890","PlayerLinenumber":"5","ActSceneLine":"4.3.37","Player":"juliet","PlayerLine":"Or, if I live, is it not very like,","scene":"4.3"},{"Dataline":"87891","PlayerLinenumber":"5","ActSceneLine":"4.3.38","Player":"juliet","PlayerLine":"The horrible conceit of death and night,","scene":"4.3"},{"Dataline":"87892","PlayerLinenumber":"5","ActSceneLine":"4.3.39","Player":"juliet","PlayerLine":"Together with the terror of the place,--","scene":"4.3"},{"Dataline":"87893","PlayerLinenumber":"5","ActSceneLine":"4.3.40","Player":"juliet","PlayerLine":"As in a vault, an ancient receptacle,","scene":"4.3"},{"Dataline":"87894","PlayerLinenumber":"5","ActSceneLine":"4.3.41","Player":"juliet","PlayerLine":"Where, for these many hundred years, the bones","scene":"4.3"},{"Dataline":"87895","PlayerLinenumber":"5","ActSceneLine":"4.3.42","Player":"juliet","PlayerLine":"Of all my buried ancestors are packed:","scene":"4.3"},{"Dataline":"87896","PlayerLinenumber":"5","ActSceneLine":"4.3.43","Player":"juliet","PlayerLine":"Where bloody Tybalt, yet but green in earth,","scene":"4.3"},{"Dataline":"87897","PlayerLinenumber":"5","ActSceneLine":"4.3.44","Player":"juliet","PlayerLine":"Lies festering in his shroud, where, as they say,","scene":"4.3"},{"Dataline":"87898","PlayerLinenumber":"5","ActSceneLine":"4.3.45","Player":"juliet","PlayerLine":"At some hours in the night spirits resort,--","scene":"4.3"},{"Dataline":"87899","PlayerLinenumber":"5","ActSceneLine":"4.3.46","Player":"juliet","PlayerLine":"Alack, alack, is it not like that I,","scene":"4.3"},{"Dataline":"87900","PlayerLinenumber":"5","ActSceneLine":"4.3.47","Player":"juliet","PlayerLine":"So early waking, what with loathsome smells,","scene":"4.3"},{"Dataline":"87901","PlayerLinenumber":"5","ActSceneLine":"4.3.48","Player":"juliet","PlayerLine":"And shrieks like mandrakes\' torn out of the earth,","scene":"4.3"},{"Dataline":"87902","PlayerLinenumber":"5","ActSceneLine":"4.3.49","Player":"juliet","PlayerLine":"That living mortals, hearing them, run mad:--","scene":"4.3"},{"Dataline":"87903","PlayerLinenumber":"5","ActSceneLine":"4.3.50","Player":"juliet","PlayerLine":"O, if I wake, shall I not be distraught,","scene":"4.3"},{"Dataline":"87904","PlayerLinenumber":"5","ActSceneLine":"4.3.51","Player":"juliet","PlayerLine":"Environed with all these hideous fears?","scene":"4.3"},{"Dataline":"87905","PlayerLinenumber":"5","ActSceneLine":"4.3.52","Player":"juliet","PlayerLine":"And madly play with my forefather\'s joints?","scene":"4.3"},{"Dataline":"87906","PlayerLinenumber":"5","ActSceneLine":"4.3.53","Player":"juliet","PlayerLine":"And pluck the mangled Tybalt from his shroud?","scene":"4.3"},{"Dataline":"87907","PlayerLinenumber":"5","ActSceneLine":"4.3.54","Player":"juliet","PlayerLine":"And, in this rage, with some great kinsman\'s bone,","scene":"4.3"},{"Dataline":"87908","PlayerLinenumber":"5","ActSceneLine":"4.3.55","Player":"juliet","PlayerLine":"As with a club, dash out my desperate brains?","scene":"4.3"},{"Dataline":"87909","PlayerLinenumber":"5","ActSceneLine":"4.3.56","Player":"juliet","PlayerLine":"O, look! methinks I see my cousin\'s ghost","scene":"4.3"},{"Dataline":"87910","PlayerLinenumber":"5","ActSceneLine":"4.3.57","Player":"juliet","PlayerLine":"Seeking out Romeo, that did spit his body","scene":"4.3"},{"Dataline":"87911","PlayerLinenumber":"5","ActSceneLine":"4.3.58","Player":"juliet","PlayerLine":"Upon a rapier\'s point: stay, Tybalt, stay!","scene":"4.3"},{"Dataline":"87912","PlayerLinenumber":"5","ActSceneLine":"4.3.59","Player":"juliet","PlayerLine":"Romeo, I come! this do I drink to thee.","scene":"4.3"},{"Dataline":"87916","PlayerLinenumber":"1","ActSceneLine":"4.4.1","Player":"lady_capulet","PlayerLine":"Hold, take these keys, and fetch more spices, nurse.","scene":"4.4"},{"Dataline":"87917","PlayerLinenumber":"2","ActSceneLine":"4.4.2","Player":"nurse","PlayerLine":"They call for dates and quinces in the pastry.","scene":"4.4"},{"Dataline":"87919","PlayerLinenumber":"3","ActSceneLine":"4.4.3","Player":"capulet","PlayerLine":"Come, stir, stir, stir! the second cock hath crow\'d,","scene":"4.4"},{"Dataline":"87920","PlayerLinenumber":"3","ActSceneLine":"4.4.4","Player":"capulet","PlayerLine":"The curfew-bell hath rung, \'tis three o\'clock:","scene":"4.4"},{"Dataline":"87921","PlayerLinenumber":"3","ActSceneLine":"4.4.5","Player":"capulet","PlayerLine":"Look to the baked meats, good Angelica:","scene":"4.4"},{"Dataline":"87922","PlayerLinenumber":"3","ActSceneLine":"4.4.6","Player":"capulet","PlayerLine":"Spare not for the cost.","scene":"4.4"},{"Dataline":"87923","PlayerLinenumber":"4","ActSceneLine":"4.4.7","Player":"nurse","PlayerLine":"Go, you cot-quean, go,","scene":"4.4"},{"Dataline":"87924","PlayerLinenumber":"4","ActSceneLine":"4.4.8","Player":"nurse","PlayerLine":"Get you to bed, faith, You\'ll be sick to-morrow","scene":"4.4"},{"Dataline":"87925","PlayerLinenumber":"4","ActSceneLine":"4.4.9","Player":"nurse","PlayerLine":"For this night\'s watching.","scene":"4.4"},{"Dataline":"87926","PlayerLinenumber":"5","ActSceneLine":"4.4.10","Player":"capulet","PlayerLine":"No, not a whit: what! I have watch\'d ere now","scene":"4.4"},{"Dataline":"87927","PlayerLinenumber":"5","ActSceneLine":"4.4.11","Player":"capulet","PlayerLine":"All night for lesser cause, and ne\'er been sick.","scene":"4.4"},{"Dataline":"87928","PlayerLinenumber":"6","ActSceneLine":"4.4.12","Player":"lady_capulet","PlayerLine":"Ay, you have been a mouse-hunt in your time,","scene":"4.4"},{"Dataline":"87929","PlayerLinenumber":"6","ActSceneLine":"4.4.13","Player":"lady_capulet","PlayerLine":"But I will watch you from such watching now.","scene":"4.4"},{"Dataline":"87931","PlayerLinenumber":"7","ActSceneLine":"4.4.14","Player":"capulet","PlayerLine":"A jealous hood, a jealous hood!","scene":"4.4"},{"Dataline":"87933","PlayerLinenumber":"7","ActSceneLine":"4.4.15","Player":"capulet","PlayerLine":"Now, fellow,","scene":"4.4"},{"Dataline":"87934","PlayerLinenumber":"7","ActSceneLine":"4.4.16","Player":"capulet","PlayerLine":"What\'s there?","scene":"4.4"},{"Dataline":"87935","PlayerLinenumber":"8","ActSceneLine":"4.4.17","Player":"first_servant","PlayerLine":"Things for the cook, sir, but I know not what.","scene":"4.4"},{"Dataline":"87936","PlayerLinenumber":"9","ActSceneLine":"4.4.18","Player":"capulet","PlayerLine":"Make haste, make haste.","scene":"4.4"},{"Dataline":"87938","PlayerLinenumber":"9","ActSceneLine":"4.4.19","Player":"capulet","PlayerLine":"Sirrah, fetch drier logs:","scene":"4.4"},{"Dataline":"87939","PlayerLinenumber":"9","ActSceneLine":"4.4.20","Player":"capulet","PlayerLine":"Call Peter, he will show thee where they are.","scene":"4.4"},{"Dataline":"87940","PlayerLinenumber":"10","ActSceneLine":"4.4.21","Player":"second_servant","PlayerLine":"I have a head, sir, that will find out logs,","scene":"4.4"},{"Dataline":"87941","PlayerLinenumber":"10","ActSceneLine":"4.4.22","Player":"second_servant","PlayerLine":"And never trouble Peter for the matter.","scene":"4.4"},{"Dataline":"87943","PlayerLinenumber":"11","ActSceneLine":"4.4.23","Player":"capulet","PlayerLine":"Mass, and well said, a merry whoreson, ha!","scene":"4.4"},{"Dataline":"87944","PlayerLinenumber":"11","ActSceneLine":"4.4.24","Player":"capulet","PlayerLine":"Thou shalt be logger-head. Good faith, \'tis day:","scene":"4.4"},{"Dataline":"87945","PlayerLinenumber":"11","ActSceneLine":"4.4.25","Player":"capulet","PlayerLine":"The county will be here with music straight,","scene":"4.4"},{"Dataline":"87946","PlayerLinenumber":"11","ActSceneLine":"4.4.26","Player":"capulet","PlayerLine":"For so he said he would: I hear him near.","scene":"4.4"},{"Dataline":"87948","PlayerLinenumber":"11","ActSceneLine":"4.4.27","Player":"capulet","PlayerLine":"Nurse! Wife! What, ho! What, nurse, I say!","scene":"4.4"},{"Dataline":"87950","PlayerLinenumber":"11","ActSceneLine":"4.4.28","Player":"capulet","PlayerLine":"Go waken Juliet, go and trim her up,","scene":"4.4"},{"Dataline":"87951","PlayerLinenumber":"11","ActSceneLine":"4.4.29","Player":"capulet","PlayerLine":"I\'ll go and chat with Paris: hie, make haste,","scene":"4.4"},{"Dataline":"87952","PlayerLinenumber":"11","ActSceneLine":"4.4.30","Player":"capulet","PlayerLine":"Make haste, the bridegroom he is come already:","scene":"4.4"},{"Dataline":"87953","PlayerLinenumber":"11","ActSceneLine":"4.4.31","Player":"capulet","PlayerLine":"Make haste, I say.","scene":"4.4"},{"Dataline":"87957","PlayerLinenumber":"1","ActSceneLine":"4.5.1","Player":"nurse","PlayerLine":"Mistress! what, mistress! Juliet! fast, I warrant her, she:","scene":"4.5"},{"Dataline":"87958","PlayerLinenumber":"1","ActSceneLine":"4.5.2","Player":"nurse","PlayerLine":"Why, lamb! why, lady! fie, you slug-a-bed!","scene":"4.5"},{"Dataline":"87959","PlayerLinenumber":"1","ActSceneLine":"4.5.3","Player":"nurse","PlayerLine":"Why, love, I say! madam! sweet-heart! why, bride!","scene":"4.5"},{"Dataline":"87960","PlayerLinenumber":"1","ActSceneLine":"4.5.4","Player":"nurse","PlayerLine":"What, not a word? you take your pennyworths now,","scene":"4.5"},{"Dataline":"87961","PlayerLinenumber":"1","ActSceneLine":"4.5.5","Player":"nurse","PlayerLine":"Sleep for a week, for the next night, I warrant,","scene":"4.5"},{"Dataline":"87962","PlayerLinenumber":"1","ActSceneLine":"4.5.6","Player":"nurse","PlayerLine":"The County Paris hath set up his rest,","scene":"4.5"},{"Dataline":"87963","PlayerLinenumber":"1","ActSceneLine":"4.5.7","Player":"nurse","PlayerLine":"That you shall rest but little. God forgive me,","scene":"4.5"},{"Dataline":"87964","PlayerLinenumber":"1","ActSceneLine":"4.5.8","Player":"nurse","PlayerLine":"Marry, and amen, how sound is she asleep!","scene":"4.5"},{"Dataline":"87965","PlayerLinenumber":"1","ActSceneLine":"4.5.9","Player":"nurse","PlayerLine":"I must needs wake her. Madam, madam, madam!","scene":"4.5"},{"Dataline":"87966","PlayerLinenumber":"1","ActSceneLine":"4.5.10","Player":"nurse","PlayerLine":"Ay, let the county take you in your bed,","scene":"4.5"},{"Dataline":"87967","PlayerLinenumber":"1","ActSceneLine":"4.5.11","Player":"nurse","PlayerLine":"He\'ll fright you up, i\' faith. Will it not be?","scene":"4.5"},{"Dataline":"87969","PlayerLinenumber":"1","ActSceneLine":"4.5.12","Player":"nurse","PlayerLine":"What, dress\'d! and in your clothes! and down again!","scene":"4.5"},{"Dataline":"87970","PlayerLinenumber":"1","ActSceneLine":"4.5.13","Player":"nurse","PlayerLine":"I must needs wake you, Lady! lady! lady!","scene":"4.5"},{"Dataline":"87971","PlayerLinenumber":"1","ActSceneLine":"4.5.14","Player":"nurse","PlayerLine":"Alas, alas! Help, help! my lady\'s dead!","scene":"4.5"},{"Dataline":"87972","PlayerLinenumber":"1","ActSceneLine":"4.5.15","Player":"nurse","PlayerLine":"O, well-a-day, that ever I was born!","scene":"4.5"},{"Dataline":"87973","PlayerLinenumber":"1","ActSceneLine":"4.5.16","Player":"nurse","PlayerLine":"Some aqua vitae, ho! My lord! my lady!","scene":"4.5"},{"Dataline":"87975","PlayerLinenumber":"2","ActSceneLine":"4.5.17","Player":"lady_capulet","PlayerLine":"What noise is here?","scene":"4.5"},{"Dataline":"87976","PlayerLinenumber":"3","ActSceneLine":"4.5.18","Player":"nurse","PlayerLine":"O lamentable day!","scene":"4.5"},{"Dataline":"87977","PlayerLinenumber":"4","ActSceneLine":"4.5.19","Player":"lady_capulet","PlayerLine":"What is the matter?","scene":"4.5"},{"Dataline":"87978","PlayerLinenumber":"5","ActSceneLine":"4.5.20","Player":"nurse","PlayerLine":"Look, look! O heavy day!","scene":"4.5"},{"Dataline":"87979","PlayerLinenumber":"6","ActSceneLine":"4.5.21","Player":"lady_capulet","PlayerLine":"O me, O me! My child, my only life,","scene":"4.5"},{"Dataline":"87980","PlayerLinenumber":"6","ActSceneLine":"4.5.22","Player":"lady_capulet","PlayerLine":"Revive, look up, or I will die with thee!","scene":"4.5"},{"Dataline":"87981","PlayerLinenumber":"6","ActSceneLine":"4.5.23","Player":"lady_capulet","PlayerLine":"Help, help! Call help.","scene":"4.5"},{"Dataline":"87983","PlayerLinenumber":"7","ActSceneLine":"4.5.24","Player":"capulet","PlayerLine":"For shame, bring Juliet forth, her lord is come.","scene":"4.5"},{"Dataline":"87984","PlayerLinenumber":"8","ActSceneLine":"4.5.25","Player":"nurse","PlayerLine":"She\'s dead, deceased, she\'s dead, alack the day!","scene":"4.5"},{"Dataline":"87985","PlayerLinenumber":"9","ActSceneLine":"4.5.26","Player":"lady_capulet","PlayerLine":"Alack the day, she\'s dead, she\'s dead, she\'s dead!","scene":"4.5"},{"Dataline":"87986","PlayerLinenumber":"10","ActSceneLine":"4.5.27","Player":"capulet","PlayerLine":"Ha! let me see her: out, alas! she\'s cold:","scene":"4.5"},{"Dataline":"87987","PlayerLinenumber":"10","ActSceneLine":"4.5.28","Player":"capulet","PlayerLine":"Her blood is settled, and her joints are stiff,","scene":"4.5"},{"Dataline":"87988","PlayerLinenumber":"10","ActSceneLine":"4.5.29","Player":"capulet","PlayerLine":"Life and these lips have long been separated:","scene":"4.5"},{"Dataline":"87989","PlayerLinenumber":"10","ActSceneLine":"4.5.30","Player":"capulet","PlayerLine":"Death lies on her like an untimely frost","scene":"4.5"},{"Dataline":"87990","PlayerLinenumber":"10","ActSceneLine":"4.5.31","Player":"capulet","PlayerLine":"Upon the sweetest flower of all the field.","scene":"4.5"},{"Dataline":"87991","PlayerLinenumber":"11","ActSceneLine":"4.5.32","Player":"nurse","PlayerLine":"O lamentable day!","scene":"4.5"},{"Dataline":"87992","PlayerLinenumber":"12","ActSceneLine":"4.5.33","Player":"lady_capulet","PlayerLine":"O woful time!","scene":"4.5"},{"Dataline":"87993","PlayerLinenumber":"13","ActSceneLine":"4.5.34","Player":"capulet","PlayerLine":"Death, that hath ta\'en her hence to make me wail,","scene":"4.5"},{"Dataline":"87994","PlayerLinenumber":"13","ActSceneLine":"4.5.35","Player":"capulet","PlayerLine":"Ties up my tongue, and will not let me speak.","scene":"4.5"},{"Dataline":"87996","PlayerLinenumber":"14","ActSceneLine":"4.5.36","Player":"friar_laurence","PlayerLine":"Come, is the bride ready to go to church?","scene":"4.5"},{"Dataline":"87997","PlayerLinenumber":"15","ActSceneLine":"4.5.37","Player":"capulet","PlayerLine":"Ready to go, but never to return.","scene":"4.5"},{"Dataline":"87998","PlayerLinenumber":"15","ActSceneLine":"4.5.38","Player":"capulet","PlayerLine":"O son! the night before thy wedding-day","scene":"4.5"},{"Dataline":"87999","PlayerLinenumber":"15","ActSceneLine":"4.5.39","Player":"capulet","PlayerLine":"Hath Death lain with thy wife. There she lies,","scene":"4.5"},{"Dataline":"88000","PlayerLinenumber":"15","ActSceneLine":"4.5.40","Player":"capulet","PlayerLine":"Flower as she was, deflowered by him.","scene":"4.5"},{"Dataline":"88001","PlayerLinenumber":"15","ActSceneLine":"4.5.41","Player":"capulet","PlayerLine":"Death is my son-in-law, Death is my heir,","scene":"4.5"},{"Dataline":"88002","PlayerLinenumber":"15","ActSceneLine":"4.5.42","Player":"capulet","PlayerLine":"My daughter he hath wedded: I will die,","scene":"4.5"},{"Dataline":"88003","PlayerLinenumber":"15","ActSceneLine":"4.5.43","Player":"capulet","PlayerLine":"And leave him all, life, living, all is Death\'s.","scene":"4.5"},{"Dataline":"88004","PlayerLinenumber":"16","ActSceneLine":"4.5.44","Player":"paris","PlayerLine":"Have I thought long to see this morning\'s face,","scene":"4.5"},{"Dataline":"88005","PlayerLinenumber":"16","ActSceneLine":"4.5.45","Player":"paris","PlayerLine":"And doth it give me such a sight as this?","scene":"4.5"},{"Dataline":"88006","PlayerLinenumber":"17","ActSceneLine":"4.5.46","Player":"lady_capulet","PlayerLine":"Accursed, unhappy, wretched, hateful day!","scene":"4.5"},{"Dataline":"88007","PlayerLinenumber":"17","ActSceneLine":"4.5.47","Player":"lady_capulet","PlayerLine":"Most miserable hour that e\'er time saw","scene":"4.5"},{"Dataline":"88008","PlayerLinenumber":"17","ActSceneLine":"4.5.48","Player":"lady_capulet","PlayerLine":"In lasting labour of his pilgrimage!","scene":"4.5"},{"Dataline":"88009","PlayerLinenumber":"17","ActSceneLine":"4.5.49","Player":"lady_capulet","PlayerLine":"But one, poor one, one poor and loving child,","scene":"4.5"},{"Dataline":"88010","PlayerLinenumber":"17","ActSceneLine":"4.5.50","Player":"lady_capulet","PlayerLine":"But one thing to rejoice and solace in,","scene":"4.5"},{"Dataline":"88011","PlayerLinenumber":"17","ActSceneLine":"4.5.51","Player":"lady_capulet","PlayerLine":"And cruel death hath catch\'d it from my sight!","scene":"4.5"},{"Dataline":"88012","PlayerLinenumber":"18","ActSceneLine":"4.5.52","Player":"nurse","PlayerLine":"O woe! O woful, woful, woful day!","scene":"4.5"},{"Dataline":"88013","PlayerLinenumber":"18","ActSceneLine":"4.5.53","Player":"nurse","PlayerLine":"Most lamentable day, most woful day,","scene":"4.5"},{"Dataline":"88014","PlayerLinenumber":"18","ActSceneLine":"4.5.54","Player":"nurse","PlayerLine":"That ever, ever, I did yet behold!","scene":"4.5"},{"Dataline":"88015","PlayerLinenumber":"18","ActSceneLine":"4.5.55","Player":"nurse","PlayerLine":"O day! O day! O day! O hateful day!","scene":"4.5"},{"Dataline":"88016","PlayerLinenumber":"18","ActSceneLine":"4.5.56","Player":"nurse","PlayerLine":"Never was seen so black a day as this:","scene":"4.5"},{"Dataline":"88017","PlayerLinenumber":"18","ActSceneLine":"4.5.57","Player":"nurse","PlayerLine":"O woful day, O woful day!","scene":"4.5"},{"Dataline":"88018","PlayerLinenumber":"19","ActSceneLine":"4.5.58","Player":"paris","PlayerLine":"Beguiled, divorced, wronged, spited, slain!","scene":"4.5"},{"Dataline":"88019","PlayerLinenumber":"19","ActSceneLine":"4.5.59","Player":"paris","PlayerLine":"Most detestable death, by thee beguil\'d,","scene":"4.5"},{"Dataline":"88020","PlayerLinenumber":"19","ActSceneLine":"4.5.60","Player":"paris","PlayerLine":"By cruel cruel thee quite overthrown!","scene":"4.5"},{"Dataline":"88021","PlayerLinenumber":"19","ActSceneLine":"4.5.61","Player":"paris","PlayerLine":"O love! O life! not life, but love in death!","scene":"4.5"},{"Dataline":"88022","PlayerLinenumber":"20","ActSceneLine":"4.5.62","Player":"capulet","PlayerLine":"Despised, distressed, hated, martyr\'d, kill\'d!","scene":"4.5"},{"Dataline":"88023","PlayerLinenumber":"20","ActSceneLine":"4.5.63","Player":"capulet","PlayerLine":"Uncomfortable time, why camest thou now","scene":"4.5"},{"Dataline":"88024","PlayerLinenumber":"20","ActSceneLine":"4.5.64","Player":"capulet","PlayerLine":"To murder, murder our solemnity?","scene":"4.5"},{"Dataline":"88025","PlayerLinenumber":"20","ActSceneLine":"4.5.65","Player":"capulet","PlayerLine":"O child! O child! my soul, and not my child!","scene":"4.5"},{"Dataline":"88026","PlayerLinenumber":"20","ActSceneLine":"4.5.66","Player":"capulet","PlayerLine":"Dead art thou! Alack! my child is dead,","scene":"4.5"},{"Dataline":"88027","PlayerLinenumber":"20","ActSceneLine":"4.5.67","Player":"capulet","PlayerLine":"And with my child my joys are buried.","scene":"4.5"},{"Dataline":"88028","PlayerLinenumber":"21","ActSceneLine":"4.5.68","Player":"friar_laurence","PlayerLine":"Peace, ho, for shame! confusion\'s cure lives not","scene":"4.5"},{"Dataline":"88029","PlayerLinenumber":"21","ActSceneLine":"4.5.69","Player":"friar_laurence","PlayerLine":"In these confusions. Heaven and yourself","scene":"4.5"},{"Dataline":"88030","PlayerLinenumber":"21","ActSceneLine":"4.5.70","Player":"friar_laurence","PlayerLine":"Had part in this fair maid, now heaven hath all,","scene":"4.5"},{"Dataline":"88031","PlayerLinenumber":"21","ActSceneLine":"4.5.71","Player":"friar_laurence","PlayerLine":"And all the better is it for the maid:","scene":"4.5"},{"Dataline":"88032","PlayerLinenumber":"21","ActSceneLine":"4.5.72","Player":"friar_laurence","PlayerLine":"Your part in her you could not keep from death,","scene":"4.5"},{"Dataline":"88033","PlayerLinenumber":"21","ActSceneLine":"4.5.73","Player":"friar_laurence","PlayerLine":"But heaven keeps his part in eternal life.","scene":"4.5"},{"Dataline":"88034","PlayerLinenumber":"21","ActSceneLine":"4.5.74","Player":"friar_laurence","PlayerLine":"The most you sought was her promotion,","scene":"4.5"},{"Dataline":"88035","PlayerLinenumber":"21","ActSceneLine":"4.5.75","Player":"friar_laurence","PlayerLine":"For \'twas your heaven she should be advanced:","scene":"4.5"},{"Dataline":"88036","PlayerLinenumber":"21","ActSceneLine":"4.5.76","Player":"friar_laurence","PlayerLine":"And weep ye now, seeing she is advanced","scene":"4.5"},{"Dataline":"88037","PlayerLinenumber":"21","ActSceneLine":"4.5.77","Player":"friar_laurence","PlayerLine":"Above the clouds, as high as heaven itself?","scene":"4.5"},{"Dataline":"88038","PlayerLinenumber":"21","ActSceneLine":"4.5.78","Player":"friar_laurence","PlayerLine":"O, in this love, you love your child so ill,","scene":"4.5"},{"Dataline":"88039","PlayerLinenumber":"21","ActSceneLine":"4.5.79","Player":"friar_laurence","PlayerLine":"That you run mad, seeing that she is well:","scene":"4.5"},{"Dataline":"88040","PlayerLinenumber":"21","ActSceneLine":"4.5.80","Player":"friar_laurence","PlayerLine":"She\'s not well married that lives married long,","scene":"4.5"},{"Dataline":"88041","PlayerLinenumber":"21","ActSceneLine":"4.5.81","Player":"friar_laurence","PlayerLine":"But she\'s best married that dies married young.","scene":"4.5"},{"Dataline":"88042","PlayerLinenumber":"21","ActSceneLine":"4.5.82","Player":"friar_laurence","PlayerLine":"Dry up your tears, and stick your rosemary","scene":"4.5"},{"Dataline":"88043","PlayerLinenumber":"21","ActSceneLine":"4.5.83","Player":"friar_laurence","PlayerLine":"On this fair corse, and, as the custom is,","scene":"4.5"},{"Dataline":"88044","PlayerLinenumber":"21","ActSceneLine":"4.5.84","Player":"friar_laurence","PlayerLine":"In all her best array bear her to church:","scene":"4.5"},{"Dataline":"88045","PlayerLinenumber":"21","ActSceneLine":"4.5.85","Player":"friar_laurence","PlayerLine":"For though fond nature bids us an lament,","scene":"4.5"},{"Dataline":"88046","PlayerLinenumber":"21","ActSceneLine":"4.5.86","Player":"friar_laurence","PlayerLine":"Yet nature\'s tears are reason\'s merriment.","scene":"4.5"},{"Dataline":"88047","PlayerLinenumber":"22","ActSceneLine":"4.5.87","Player":"capulet","PlayerLine":"All things that we ordained festival,","scene":"4.5"},{"Dataline":"88048","PlayerLinenumber":"22","ActSceneLine":"4.5.88","Player":"capulet","PlayerLine":"Turn from their office to black funeral,","scene":"4.5"},{"Dataline":"88049","PlayerLinenumber":"22","ActSceneLine":"4.5.89","Player":"capulet","PlayerLine":"Our instruments to melancholy bells,","scene":"4.5"},{"Dataline":"88050","PlayerLinenumber":"22","ActSceneLine":"4.5.90","Player":"capulet","PlayerLine":"Our wedding cheer to a sad burial feast,","scene":"4.5"},{"Dataline":"88051","PlayerLinenumber":"22","ActSceneLine":"4.5.91","Player":"capulet","PlayerLine":"Our solemn hymns to sullen dirges change,","scene":"4.5"},{"Dataline":"88052","PlayerLinenumber":"22","ActSceneLine":"4.5.92","Player":"capulet","PlayerLine":"Our bridal flowers serve for a buried corse,","scene":"4.5"},{"Dataline":"88053","PlayerLinenumber":"22","ActSceneLine":"4.5.93","Player":"capulet","PlayerLine":"And all things change them to the contrary.","scene":"4.5"},{"Dataline":"88054","PlayerLinenumber":"23","ActSceneLine":"4.5.94","Player":"friar_laurence","PlayerLine":"Sir, go you in, and, madam, go with him,","scene":"4.5"},{"Dataline":"88055","PlayerLinenumber":"23","ActSceneLine":"4.5.95","Player":"friar_laurence","PlayerLine":"And go, Sir Paris, every one prepare","scene":"4.5"},{"Dataline":"88056","PlayerLinenumber":"23","ActSceneLine":"4.5.96","Player":"friar_laurence","PlayerLine":"To follow this fair corse unto her grave:","scene":"4.5"},{"Dataline":"88057","PlayerLinenumber":"23","ActSceneLine":"4.5.97","Player":"friar_laurence","PlayerLine":"The heavens do lour upon you for some ill,","scene":"4.5"},{"Dataline":"88058","PlayerLinenumber":"23","ActSceneLine":"4.5.98","Player":"friar_laurence","PlayerLine":"Move them no more by crossing their high will.","scene":"4.5"},{"Dataline":"88060","PlayerLinenumber":"24","ActSceneLine":"4.5.99","Player":"first_musician","PlayerLine":"Faith, we may put up our pipes, and be gone.","scene":"4.5"},{"Dataline":"88061","PlayerLinenumber":"25","ActSceneLine":"4.5.100","Player":"nurse","PlayerLine":"Honest goodfellows, ah, put up, put up,","scene":"4.5"},{"Dataline":"88062","PlayerLinenumber":"25","ActSceneLine":"4.5.101","Player":"nurse","PlayerLine":"For, well you know, this is a pitiful case.","scene":"4.5"},{"Dataline":"88064","PlayerLinenumber":"26","ActSceneLine":"4.5.102","Player":"first_musician","PlayerLine":"Ay, by my troth, the case may be amended.","scene":"4.5"},{"Dataline":"88066","PlayerLinenumber":"27","ActSceneLine":"4.5.103","Player":"peter","PlayerLine":"Musicians, O, musicians, \'Heart\'s ease, Heart\'s","scene":"4.5"},{"Dataline":"88067","PlayerLinenumber":"27","ActSceneLine":"4.5.104","Player":"peter","PlayerLine":"ease:\' O, an you will have me live, play \'Heart\'s ease.\'","scene":"4.5"},{"Dataline":"88068","PlayerLinenumber":"28","ActSceneLine":"4.5.105","Player":"first_musician","PlayerLine":"Why \'Heart\'s ease?\'","scene":"4.5"},{"Dataline":"88069","PlayerLinenumber":"29","ActSceneLine":"4.5.106","Player":"peter","PlayerLine":"O, musicians, because my heart itself plays \'My","scene":"4.5"},{"Dataline":"88070","PlayerLinenumber":"29","ActSceneLine":"4.5.107","Player":"peter","PlayerLine":"heart is full of woe:\' O, play me some merry dump,","scene":"4.5"},{"Dataline":"88071","PlayerLinenumber":"29","ActSceneLine":"4.5.108","Player":"peter","PlayerLine":"to comfort me.","scene":"4.5"},{"Dataline":"88072","PlayerLinenumber":"30","ActSceneLine":"4.5.109","Player":"first_musician","PlayerLine":"Not a dump we, \'tis no time to play now.","scene":"4.5"},{"Dataline":"88073","PlayerLinenumber":"31","ActSceneLine":"4.5.110","Player":"peter","PlayerLine":"You will not, then?","scene":"4.5"},{"Dataline":"88074","PlayerLinenumber":"32","ActSceneLine":"4.5.111","Player":"first_musician","PlayerLine":"No.","scene":"4.5"},{"Dataline":"88075","PlayerLinenumber":"33","ActSceneLine":"4.5.112","Player":"peter","PlayerLine":"I will then give it you soundly.","scene":"4.5"},{"Dataline":"88076","PlayerLinenumber":"34","ActSceneLine":"4.5.113","Player":"first_musician","PlayerLine":"What will you give us?","scene":"4.5"},{"Dataline":"88077","PlayerLinenumber":"35","ActSceneLine":"4.5.114","Player":"peter","PlayerLine":"No money, on my faith, but the gleek,","scene":"4.5"},{"Dataline":"88078","PlayerLinenumber":"35","ActSceneLine":"4.5.115","Player":"peter","PlayerLine":"I will give you the minstrel.","scene":"4.5"},{"Dataline":"88079","PlayerLinenumber":"36","ActSceneLine":"4.5.116","Player":"first_musician","PlayerLine":"Then I will give you the serving-creature.","scene":"4.5"},{"Dataline":"88080","PlayerLinenumber":"37","ActSceneLine":"4.5.117","Player":"peter","PlayerLine":"Then will I lay the serving-creature\'s dagger on","scene":"4.5"},{"Dataline":"88081","PlayerLinenumber":"37","ActSceneLine":"4.5.118","Player":"peter","PlayerLine":"your pate. I will carry no crotchets: I\'ll re you,","scene":"4.5"},{"Dataline":"88082","PlayerLinenumber":"37","ActSceneLine":"4.5.119","Player":"peter","PlayerLine":"I\'ll fa you, do you note me?","scene":"4.5"},{"Dataline":"88083","PlayerLinenumber":"38","ActSceneLine":"4.5.120","Player":"first_musician","PlayerLine":"An you re us and fa us, you note us.","scene":"4.5"},{"Dataline":"88084","PlayerLinenumber":"39","ActSceneLine":"4.5.121","Player":"second_musician","PlayerLine":"Pray you, put up your dagger, and put out your wit.","scene":"4.5"},{"Dataline":"88085","PlayerLinenumber":"40","ActSceneLine":"4.5.122","Player":"peter","PlayerLine":"Then have at you with my wit! I will dry-beat you","scene":"4.5"},{"Dataline":"88086","PlayerLinenumber":"40","ActSceneLine":"4.5.123","Player":"peter","PlayerLine":"with an iron wit, and put up my iron dagger. Answer","scene":"4.5"},{"Dataline":"88087","PlayerLinenumber":"40","ActSceneLine":"4.5.124","Player":"peter","PlayerLine":"me like men:","scene":"4.5"},{"Dataline":"88088","PlayerLinenumber":"40","ActSceneLine":"4.5.125","Player":"peter","PlayerLine":"\'When griping grief the heart doth wound,","scene":"4.5"},{"Dataline":"88089","PlayerLinenumber":"40","ActSceneLine":"4.5.126","Player":"peter","PlayerLine":"And doleful dumps the mind oppress,","scene":"4.5"},{"Dataline":"88090","PlayerLinenumber":"40","ActSceneLine":"4.5.127","Player":"peter","PlayerLine":"Then music with her silver sound\'--","scene":"4.5"},{"Dataline":"88091","PlayerLinenumber":"40","ActSceneLine":"4.5.128","Player":"peter","PlayerLine":"why \'silver sound\'? why \'music with her silver","scene":"4.5"},{"Dataline":"88092","PlayerLinenumber":"40","ActSceneLine":"4.5.129","Player":"peter","PlayerLine":"sound\'? What say you, Simon Catling?","scene":"4.5"},{"Dataline":"88093","PlayerLinenumber":"41","ActSceneLine":"4.5.130","Player":"musician","PlayerLine":"Marry, sir, because silver hath a sweet sound.","scene":"4.5"},{"Dataline":"88094","PlayerLinenumber":"42","ActSceneLine":"4.5.131","Player":"peter","PlayerLine":"Pretty! What say you, Hugh Rebeck?","scene":"4.5"},{"Dataline":"88095","PlayerLinenumber":"43","ActSceneLine":"4.5.132","Player":"second_musician","PlayerLine":"I say \'silver sound,\' because musicians sound for silver.","scene":"4.5"},{"Dataline":"88096","PlayerLinenumber":"44","ActSceneLine":"4.5.133","Player":"peter","PlayerLine":"Pretty too! What say you, James Soundpost?","scene":"4.5"},{"Dataline":"88097","PlayerLinenumber":"45","ActSceneLine":"4.5.134","Player":"third_musician","PlayerLine":"Faith, I know not what to say.","scene":"4.5"},{"Dataline":"88098","PlayerLinenumber":"46","ActSceneLine":"4.5.135","Player":"peter","PlayerLine":"O, I cry you mercy, you are the singer: I will say","scene":"4.5"},{"Dataline":"88099","PlayerLinenumber":"46","ActSceneLine":"4.5.136","Player":"peter","PlayerLine":"for you. It is \'music with her silver sound,\'","scene":"4.5"},{"Dataline":"88100","PlayerLinenumber":"46","ActSceneLine":"4.5.137","Player":"peter","PlayerLine":"because musicians have no gold for sounding:","scene":"4.5"},{"Dataline":"88101","PlayerLinenumber":"46","ActSceneLine":"4.5.138","Player":"peter","PlayerLine":"\'Then music with her silver sound","scene":"4.5"},{"Dataline":"88102","PlayerLinenumber":"46","ActSceneLine":"4.5.139","Player":"peter","PlayerLine":"With speedy help doth lend redress.\'","scene":"4.5"},{"Dataline":"88104","PlayerLinenumber":"47","ActSceneLine":"4.5.140","Player":"first_musician","PlayerLine":"What a pestilent knave is this same!","scene":"4.5"},{"Dataline":"88105","PlayerLinenumber":"48","ActSceneLine":"4.5.141","Player":"second_musician","PlayerLine":"Hang him, Jack! Come, we\'ll in here, tarry for the","scene":"4.5"},{"Dataline":"88106","PlayerLinenumber":"48","ActSceneLine":"4.5.142","Player":"second_musician","PlayerLine":"mourners, and stay dinner.","scene":"4.5"},{"Dataline":"88111","PlayerLinenumber":"1","ActSceneLine":"5.1.1","Player":"romeo","PlayerLine":"If I may trust the flattering truth of sleep,","scene":"5.1"},{"Dataline":"88112","PlayerLinenumber":"1","ActSceneLine":"5.1.2","Player":"romeo","PlayerLine":"My dreams presage some joyful news at hand:","scene":"5.1"},{"Dataline":"88113","PlayerLinenumber":"1","ActSceneLine":"5.1.3","Player":"romeo","PlayerLine":"My bosom\'s lord sits lightly in his throne,","scene":"5.1"},{"Dataline":"88114","PlayerLinenumber":"1","ActSceneLine":"5.1.4","Player":"romeo","PlayerLine":"And all this day an unaccustom\'d spirit","scene":"5.1"},{"Dataline":"88115","PlayerLinenumber":"1","ActSceneLine":"5.1.5","Player":"romeo","PlayerLine":"Lifts me above the ground with cheerful thoughts.","scene":"5.1"},{"Dataline":"88116","PlayerLinenumber":"1","ActSceneLine":"5.1.6","Player":"romeo","PlayerLine":"I dreamt my lady came and found me dead--","scene":"5.1"},{"Dataline":"88117","PlayerLinenumber":"1","ActSceneLine":"5.1.7","Player":"romeo","PlayerLine":"Strange dream, that gives a dead man leave","scene":"5.1"},{"Dataline":"88118","PlayerLinenumber":"1","ActSceneLine":"5.1.8","Player":"romeo","PlayerLine":"to think!--","scene":"5.1"},{"Dataline":"88119","PlayerLinenumber":"1","ActSceneLine":"5.1.9","Player":"romeo","PlayerLine":"And breathed such life with kisses in my lips,","scene":"5.1"},{"Dataline":"88120","PlayerLinenumber":"1","ActSceneLine":"5.1.10","Player":"romeo","PlayerLine":"That I revived, and was an emperor.","scene":"5.1"},{"Dataline":"88121","PlayerLinenumber":"1","ActSceneLine":"5.1.11","Player":"romeo","PlayerLine":"Ah me! how sweet is love itself possess\'d,","scene":"5.1"},{"Dataline":"88122","PlayerLinenumber":"1","ActSceneLine":"5.1.12","Player":"romeo","PlayerLine":"When but love\'s shadows are so rich in joy!","scene":"5.1"},{"Dataline":"88124","PlayerLinenumber":"1","ActSceneLine":"5.1.13","Player":"romeo","PlayerLine":"News from Verona!--How now, Balthasar!","scene":"5.1"},{"Dataline":"88125","PlayerLinenumber":"1","ActSceneLine":"5.1.14","Player":"romeo","PlayerLine":"Dost thou not bring me letters from the friar?","scene":"5.1"},{"Dataline":"88126","PlayerLinenumber":"1","ActSceneLine":"5.1.15","Player":"romeo","PlayerLine":"How doth my lady? Is my father well?","scene":"5.1"},{"Dataline":"88127","PlayerLinenumber":"1","ActSceneLine":"5.1.16","Player":"romeo","PlayerLine":"How fares my Juliet? that I ask again,","scene":"5.1"},{"Dataline":"88128","PlayerLinenumber":"1","ActSceneLine":"5.1.17","Player":"romeo","PlayerLine":"For nothing can be ill, if she be well.","scene":"5.1"},{"Dataline":"88129","PlayerLinenumber":"2","ActSceneLine":"5.1.18","Player":"balthasar","PlayerLine":"Then she is well, and nothing can be ill:","scene":"5.1"},{"Dataline":"88130","PlayerLinenumber":"2","ActSceneLine":"5.1.19","Player":"balthasar","PlayerLine":"Her body sleeps in Capel\'s monument,","scene":"5.1"},{"Dataline":"88131","PlayerLinenumber":"2","ActSceneLine":"5.1.20","Player":"balthasar","PlayerLine":"And her immortal part with angels lives.","scene":"5.1"},{"Dataline":"88132","PlayerLinenumber":"2","ActSceneLine":"5.1.21","Player":"balthasar","PlayerLine":"I saw her laid low in her kindred\'s vault,","scene":"5.1"},{"Dataline":"88133","PlayerLinenumber":"2","ActSceneLine":"5.1.22","Player":"balthasar","PlayerLine":"And presently took post to tell it you:","scene":"5.1"},{"Dataline":"88134","PlayerLinenumber":"2","ActSceneLine":"5.1.23","Player":"balthasar","PlayerLine":"O, pardon me for bringing these ill news,","scene":"5.1"},{"Dataline":"88135","PlayerLinenumber":"2","ActSceneLine":"5.1.24","Player":"balthasar","PlayerLine":"Since you did leave it for my office, sir.","scene":"5.1"},{"Dataline":"88136","PlayerLinenumber":"3","ActSceneLine":"5.1.25","Player":"romeo","PlayerLine":"Is it even so? then I defy you, stars!","scene":"5.1"},{"Dataline":"88137","PlayerLinenumber":"3","ActSceneLine":"5.1.26","Player":"romeo","PlayerLine":"Thou know\'st my lodging: get me ink and paper,","scene":"5.1"},{"Dataline":"88138","PlayerLinenumber":"3","ActSceneLine":"5.1.27","Player":"romeo","PlayerLine":"And hire post-horses, I will hence to-night.","scene":"5.1"},{"Dataline":"88139","PlayerLinenumber":"4","ActSceneLine":"5.1.28","Player":"balthasar","PlayerLine":"I do beseech you, sir, have patience:","scene":"5.1"},{"Dataline":"88140","PlayerLinenumber":"4","ActSceneLine":"5.1.29","Player":"balthasar","PlayerLine":"Your looks are pale and wild, and do import","scene":"5.1"},{"Dataline":"88141","PlayerLinenumber":"4","ActSceneLine":"5.1.30","Player":"balthasar","PlayerLine":"Some misadventure.","scene":"5.1"},{"Dataline":"88142","PlayerLinenumber":"5","ActSceneLine":"5.1.31","Player":"romeo","PlayerLine":"Tush, thou art deceived:","scene":"5.1"},{"Dataline":"88143","PlayerLinenumber":"5","ActSceneLine":"5.1.32","Player":"romeo","PlayerLine":"Leave me, and do the thing I bid thee do.","scene":"5.1"},{"Dataline":"88144","PlayerLinenumber":"5","ActSceneLine":"5.1.33","Player":"romeo","PlayerLine":"Hast thou no letters to me from the friar?","scene":"5.1"},{"Dataline":"88145","PlayerLinenumber":"6","ActSceneLine":"5.1.34","Player":"balthasar","PlayerLine":"No, my good lord.","scene":"5.1"},{"Dataline":"88146","PlayerLinenumber":"7","ActSceneLine":"5.1.35","Player":"romeo","PlayerLine":"No matter: get thee gone,","scene":"5.1"},{"Dataline":"88147","PlayerLinenumber":"7","ActSceneLine":"5.1.36","Player":"romeo","PlayerLine":"And hire those horses, I\'ll be with thee straight.","scene":"5.1"},{"Dataline":"88149","PlayerLinenumber":"7","ActSceneLine":"5.1.37","Player":"romeo","PlayerLine":"Well, Juliet, I will lie with thee to-night.","scene":"5.1"},{"Dataline":"88150","PlayerLinenumber":"7","ActSceneLine":"5.1.38","Player":"romeo","PlayerLine":"Let\'s see for means: O mischief, thou art swift","scene":"5.1"},{"Dataline":"88151","PlayerLinenumber":"7","ActSceneLine":"5.1.39","Player":"romeo","PlayerLine":"To enter in the thoughts of desperate men!","scene":"5.1"},{"Dataline":"88152","PlayerLinenumber":"7","ActSceneLine":"5.1.40","Player":"romeo","PlayerLine":"I do remember an apothecary,--","scene":"5.1"},{"Dataline":"88153","PlayerLinenumber":"7","ActSceneLine":"5.1.41","Player":"romeo","PlayerLine":"And hereabouts he dwells,--which late I noted","scene":"5.1"},{"Dataline":"88154","PlayerLinenumber":"7","ActSceneLine":"5.1.42","Player":"romeo","PlayerLine":"In tatter\'d weeds, with overwhelming brows,","scene":"5.1"},{"Dataline":"88155","PlayerLinenumber":"7","ActSceneLine":"5.1.43","Player":"romeo","PlayerLine":"Culling of simples, meagre were his looks,","scene":"5.1"},{"Dataline":"88156","PlayerLinenumber":"7","ActSceneLine":"5.1.44","Player":"romeo","PlayerLine":"Sharp misery had worn him to the bones:","scene":"5.1"},{"Dataline":"88157","PlayerLinenumber":"7","ActSceneLine":"5.1.45","Player":"romeo","PlayerLine":"And in his needy shop a tortoise hung,","scene":"5.1"},{"Dataline":"88158","PlayerLinenumber":"7","ActSceneLine":"5.1.46","Player":"romeo","PlayerLine":"An alligator stuff\'d, and other skins","scene":"5.1"},{"Dataline":"88159","PlayerLinenumber":"7","ActSceneLine":"5.1.47","Player":"romeo","PlayerLine":"Of ill-shaped fishes, and about his shelves","scene":"5.1"},{"Dataline":"88160","PlayerLinenumber":"7","ActSceneLine":"5.1.48","Player":"romeo","PlayerLine":"A beggarly account of empty boxes,","scene":"5.1"},{"Dataline":"88161","PlayerLinenumber":"7","ActSceneLine":"5.1.49","Player":"romeo","PlayerLine":"Green earthen pots, bladders and musty seeds,","scene":"5.1"},{"Dataline":"88162","PlayerLinenumber":"7","ActSceneLine":"5.1.50","Player":"romeo","PlayerLine":"Remnants of packthread and old cakes of roses,","scene":"5.1"},{"Dataline":"88163","PlayerLinenumber":"7","ActSceneLine":"5.1.51","Player":"romeo","PlayerLine":"Were thinly scatter\'d, to make up a show.","scene":"5.1"},{"Dataline":"88164","PlayerLinenumber":"7","ActSceneLine":"5.1.52","Player":"romeo","PlayerLine":"Noting this penury, to myself I said","scene":"5.1"},{"Dataline":"88165","PlayerLinenumber":"7","ActSceneLine":"5.1.53","Player":"romeo","PlayerLine":"\'An if a man did need a poison now,","scene":"5.1"},{"Dataline":"88166","PlayerLinenumber":"7","ActSceneLine":"5.1.54","Player":"romeo","PlayerLine":"Whose sale is present death in Mantua,","scene":"5.1"},{"Dataline":"88167","PlayerLinenumber":"7","ActSceneLine":"5.1.55","Player":"romeo","PlayerLine":"Here lives a caitiff wretch would sell it him.\'","scene":"5.1"},{"Dataline":"88168","PlayerLinenumber":"7","ActSceneLine":"5.1.56","Player":"romeo","PlayerLine":"O, this same thought did but forerun my need,","scene":"5.1"},{"Dataline":"88169","PlayerLinenumber":"7","ActSceneLine":"5.1.57","Player":"romeo","PlayerLine":"And this same needy man must sell it me.","scene":"5.1"},{"Dataline":"88170","PlayerLinenumber":"7","ActSceneLine":"5.1.58","Player":"romeo","PlayerLine":"As I remember, this should be the house.","scene":"5.1"},{"Dataline":"88171","PlayerLinenumber":"7","ActSceneLine":"5.1.59","Player":"romeo","PlayerLine":"Being holiday, the beggar\'s shop is shut.","scene":"5.1"},{"Dataline":"88172","PlayerLinenumber":"7","ActSceneLine":"5.1.60","Player":"romeo","PlayerLine":"What, ho! apothecary!","scene":"5.1"},{"Dataline":"88174","PlayerLinenumber":"8","ActSceneLine":"5.1.61","Player":"apothecary","PlayerLine":"Who calls so loud?","scene":"5.1"},{"Dataline":"88175","PlayerLinenumber":"9","ActSceneLine":"5.1.62","Player":"romeo","PlayerLine":"Come hither, man. I see that thou art poor:","scene":"5.1"},{"Dataline":"88176","PlayerLinenumber":"9","ActSceneLine":"5.1.63","Player":"romeo","PlayerLine":"Hold, there is forty ducats: let me have","scene":"5.1"},{"Dataline":"88177","PlayerLinenumber":"9","ActSceneLine":"5.1.64","Player":"romeo","PlayerLine":"A dram of poison, such soon-speeding gear","scene":"5.1"},{"Dataline":"88178","PlayerLinenumber":"9","ActSceneLine":"5.1.65","Player":"romeo","PlayerLine":"As will disperse itself through all the veins","scene":"5.1"},{"Dataline":"88179","PlayerLinenumber":"9","ActSceneLine":"5.1.66","Player":"romeo","PlayerLine":"That the life-weary taker may fall dead","scene":"5.1"},{"Dataline":"88180","PlayerLinenumber":"9","ActSceneLine":"5.1.67","Player":"romeo","PlayerLine":"And that the trunk may be discharged of breath","scene":"5.1"},{"Dataline":"88181","PlayerLinenumber":"9","ActSceneLine":"5.1.68","Player":"romeo","PlayerLine":"As violently as hasty powder fired","scene":"5.1"},{"Dataline":"88182","PlayerLinenumber":"9","ActSceneLine":"5.1.69","Player":"romeo","PlayerLine":"Doth hurry from the fatal cannon\'s womb.","scene":"5.1"},{"Dataline":"88183","PlayerLinenumber":"10","ActSceneLine":"5.1.70","Player":"apothecary","PlayerLine":"Such mortal drugs I have, but Mantua\'s law","scene":"5.1"},{"Dataline":"88184","PlayerLinenumber":"10","ActSceneLine":"5.1.71","Player":"apothecary","PlayerLine":"Is death to any he that utters them.","scene":"5.1"},{"Dataline":"88185","PlayerLinenumber":"11","ActSceneLine":"5.1.72","Player":"romeo","PlayerLine":"Art thou so bare and full of wretchedness,","scene":"5.1"},{"Dataline":"88186","PlayerLinenumber":"11","ActSceneLine":"5.1.73","Player":"romeo","PlayerLine":"And fear\'st to die? famine is in thy cheeks,","scene":"5.1"},{"Dataline":"88187","PlayerLinenumber":"11","ActSceneLine":"5.1.74","Player":"romeo","PlayerLine":"Need and oppression starveth in thine eyes,","scene":"5.1"},{"Dataline":"88188","PlayerLinenumber":"11","ActSceneLine":"5.1.75","Player":"romeo","PlayerLine":"Contempt and beggary hangs upon thy back,","scene":"5.1"},{"Dataline":"88189","PlayerLinenumber":"11","ActSceneLine":"5.1.76","Player":"romeo","PlayerLine":"The world is not thy friend nor the world\'s law,","scene":"5.1"},{"Dataline":"88190","PlayerLinenumber":"11","ActSceneLine":"5.1.77","Player":"romeo","PlayerLine":"The world affords no law to make thee rich,","scene":"5.1"},{"Dataline":"88191","PlayerLinenumber":"11","ActSceneLine":"5.1.78","Player":"romeo","PlayerLine":"Then be not poor, but break it, and take this.","scene":"5.1"},{"Dataline":"88192","PlayerLinenumber":"12","ActSceneLine":"5.1.79","Player":"apothecary","PlayerLine":"My poverty, but not my will, consents.","scene":"5.1"},{"Dataline":"88193","PlayerLinenumber":"13","ActSceneLine":"5.1.80","Player":"romeo","PlayerLine":"I pay thy poverty, and not thy will.","scene":"5.1"},{"Dataline":"88194","PlayerLinenumber":"14","ActSceneLine":"5.1.81","Player":"apothecary","PlayerLine":"Put this in any liquid thing you will,","scene":"5.1"},{"Dataline":"88195","PlayerLinenumber":"14","ActSceneLine":"5.1.82","Player":"apothecary","PlayerLine":"And drink it off, and, if you had the strength","scene":"5.1"},{"Dataline":"88196","PlayerLinenumber":"14","ActSceneLine":"5.1.83","Player":"apothecary","PlayerLine":"Of twenty men, it would dispatch you straight.","scene":"5.1"},{"Dataline":"88197","PlayerLinenumber":"15","ActSceneLine":"5.1.84","Player":"romeo","PlayerLine":"There is thy gold, worse poison to men\'s souls,","scene":"5.1"},{"Dataline":"88198","PlayerLinenumber":"15","ActSceneLine":"5.1.85","Player":"romeo","PlayerLine":"Doing more murders in this loathsome world,","scene":"5.1"},{"Dataline":"88199","PlayerLinenumber":"15","ActSceneLine":"5.1.86","Player":"romeo","PlayerLine":"Than these poor compounds that thou mayst not sell.","scene":"5.1"},{"Dataline":"88200","PlayerLinenumber":"15","ActSceneLine":"5.1.87","Player":"romeo","PlayerLine":"I sell thee poison, thou hast sold me none.","scene":"5.1"},{"Dataline":"88201","PlayerLinenumber":"15","ActSceneLine":"5.1.88","Player":"romeo","PlayerLine":"Farewell: buy food, and get thyself in flesh.","scene":"5.1"},{"Dataline":"88202","PlayerLinenumber":"15","ActSceneLine":"5.1.89","Player":"romeo","PlayerLine":"Come, cordial and not poison, go with me","scene":"5.1"},{"Dataline":"88203","PlayerLinenumber":"15","ActSceneLine":"5.1.90","Player":"romeo","PlayerLine":"To Juliet\'s grave, for there must I use thee.","scene":"5.1"},{"Dataline":"88207","PlayerLinenumber":"1","ActSceneLine":"5.2.1","Player":"friar_john","PlayerLine":"Holy Franciscan friar! brother, ho!","scene":"5.2"},{"Dataline":"88209","PlayerLinenumber":"2","ActSceneLine":"5.2.2","Player":"friar_laurence","PlayerLine":"This same should be the voice of Friar John.","scene":"5.2"},{"Dataline":"88210","PlayerLinenumber":"2","ActSceneLine":"5.2.3","Player":"friar_laurence","PlayerLine":"Welcome from Mantua: what says Romeo?","scene":"5.2"},{"Dataline":"88211","PlayerLinenumber":"2","ActSceneLine":"5.2.4","Player":"friar_laurence","PlayerLine":"Or, if his mind be writ, give me his letter.","scene":"5.2"},{"Dataline":"88212","PlayerLinenumber":"3","ActSceneLine":"5.2.5","Player":"friar_john","PlayerLine":"Going to find a bare-foot brother out","scene":"5.2"},{"Dataline":"88213","PlayerLinenumber":"3","ActSceneLine":"5.2.6","Player":"friar_john","PlayerLine":"One of our order, to associate me,","scene":"5.2"},{"Dataline":"88214","PlayerLinenumber":"3","ActSceneLine":"5.2.7","Player":"friar_john","PlayerLine":"Here in this city visiting the sick,","scene":"5.2"},{"Dataline":"88215","PlayerLinenumber":"3","ActSceneLine":"5.2.8","Player":"friar_john","PlayerLine":"And finding him, the searchers of the town,","scene":"5.2"},{"Dataline":"88216","PlayerLinenumber":"3","ActSceneLine":"5.2.9","Player":"friar_john","PlayerLine":"Suspecting that we both were in a house","scene":"5.2"},{"Dataline":"88217","PlayerLinenumber":"3","ActSceneLine":"5.2.10","Player":"friar_john","PlayerLine":"Where the infectious pestilence did reign,","scene":"5.2"},{"Dataline":"88218","PlayerLinenumber":"3","ActSceneLine":"5.2.11","Player":"friar_john","PlayerLine":"Seal\'d up the doors, and would not let us forth,","scene":"5.2"},{"Dataline":"88219","PlayerLinenumber":"3","ActSceneLine":"5.2.12","Player":"friar_john","PlayerLine":"So that my speed to Mantua there was stay\'d.","scene":"5.2"},{"Dataline":"88220","PlayerLinenumber":"4","ActSceneLine":"5.2.13","Player":"friar_laurence","PlayerLine":"Who bare my letter, then, to Romeo?","scene":"5.2"},{"Dataline":"88221","PlayerLinenumber":"5","ActSceneLine":"5.2.14","Player":"friar_john","PlayerLine":"I could not send it,--here it is again,--","scene":"5.2"},{"Dataline":"88222","PlayerLinenumber":"5","ActSceneLine":"5.2.15","Player":"friar_john","PlayerLine":"Nor get a messenger to bring it thee,","scene":"5.2"},{"Dataline":"88223","PlayerLinenumber":"5","ActSceneLine":"5.2.16","Player":"friar_john","PlayerLine":"So fearful were they of infection.","scene":"5.2"},{"Dataline":"88224","PlayerLinenumber":"6","ActSceneLine":"5.2.17","Player":"friar_laurence","PlayerLine":"Unhappy fortune! by my brotherhood,","scene":"5.2"},{"Dataline":"88225","PlayerLinenumber":"6","ActSceneLine":"5.2.18","Player":"friar_laurence","PlayerLine":"The letter was not nice but full of charge","scene":"5.2"},{"Dataline":"88226","PlayerLinenumber":"6","ActSceneLine":"5.2.19","Player":"friar_laurence","PlayerLine":"Of dear import, and the neglecting it","scene":"5.2"},{"Dataline":"88227","PlayerLinenumber":"6","ActSceneLine":"5.2.20","Player":"friar_laurence","PlayerLine":"May do much danger. Friar John, go hence,","scene":"5.2"},{"Dataline":"88228","PlayerLinenumber":"6","ActSceneLine":"5.2.21","Player":"friar_laurence","PlayerLine":"Get me an iron crow, and bring it straight","scene":"5.2"},{"Dataline":"88229","PlayerLinenumber":"6","ActSceneLine":"5.2.22","Player":"friar_laurence","PlayerLine":"Unto my cell.","scene":"5.2"},{"Dataline":"88230","PlayerLinenumber":"7","ActSceneLine":"5.2.23","Player":"friar_john","PlayerLine":"Brother, I\'ll go and bring it thee.","scene":"5.2"},{"Dataline":"88232","PlayerLinenumber":"8","ActSceneLine":"5.2.24","Player":"friar_laurence","PlayerLine":"Now must I to the monument alone,","scene":"5.2"},{"Dataline":"88233","PlayerLinenumber":"8","ActSceneLine":"5.2.25","Player":"friar_laurence","PlayerLine":"Within three hours will fair Juliet wake:","scene":"5.2"},{"Dataline":"88234","PlayerLinenumber":"8","ActSceneLine":"5.2.26","Player":"friar_laurence","PlayerLine":"She will beshrew me much that Romeo","scene":"5.2"},{"Dataline":"88235","PlayerLinenumber":"8","ActSceneLine":"5.2.27","Player":"friar_laurence","PlayerLine":"Hath had no notice of these accidents,","scene":"5.2"},{"Dataline":"88236","PlayerLinenumber":"8","ActSceneLine":"5.2.28","Player":"friar_laurence","PlayerLine":"But I will write again to Mantua,","scene":"5.2"},{"Dataline":"88237","PlayerLinenumber":"8","ActSceneLine":"5.2.29","Player":"friar_laurence","PlayerLine":"And keep her at my cell till Romeo come,","scene":"5.2"},{"Dataline":"88238","PlayerLinenumber":"8","ActSceneLine":"5.2.30","Player":"friar_laurence","PlayerLine":"Poor living corse, closed in a dead man\'s tomb!","scene":"5.2"},{"Dataline":"88242","PlayerLinenumber":"1","ActSceneLine":"5.3.1","Player":"paris","PlayerLine":"Give me thy torch, boy: hence, and stand aloof:","scene":"5.3"},{"Dataline":"88243","PlayerLinenumber":"1","ActSceneLine":"5.3.2","Player":"paris","PlayerLine":"Yet put it out, for I would not be seen.","scene":"5.3"},{"Dataline":"88244","PlayerLinenumber":"1","ActSceneLine":"5.3.3","Player":"paris","PlayerLine":"Under yond yew-trees lay thee all along,","scene":"5.3"},{"Dataline":"88245","PlayerLinenumber":"1","ActSceneLine":"5.3.4","Player":"paris","PlayerLine":"Holding thine ear close to the hollow ground,","scene":"5.3"},{"Dataline":"88246","PlayerLinenumber":"1","ActSceneLine":"5.3.5","Player":"paris","PlayerLine":"So shall no foot upon the churchyard tread,","scene":"5.3"},{"Dataline":"88247","PlayerLinenumber":"1","ActSceneLine":"5.3.6","Player":"paris","PlayerLine":"Being loose, unfirm, with digging up of graves,","scene":"5.3"},{"Dataline":"88248","PlayerLinenumber":"1","ActSceneLine":"5.3.7","Player":"paris","PlayerLine":"But thou shalt hear it: whistle then to me,","scene":"5.3"},{"Dataline":"88249","PlayerLinenumber":"1","ActSceneLine":"5.3.8","Player":"paris","PlayerLine":"As signal that thou hear\'st something approach.","scene":"5.3"},{"Dataline":"88250","PlayerLinenumber":"1","ActSceneLine":"5.3.9","Player":"paris","PlayerLine":"Give me those flowers. Do as I bid thee, go.","scene":"5.3"},{"Dataline":"88251","PlayerLinenumber":"2","ActSceneLine":"5.3.10","Player":"page","PlayerLine":"[Aside]  I am almost afraid to stand alone","scene":"5.3"},{"Dataline":"88252","PlayerLinenumber":"2","ActSceneLine":"5.3.11","Player":"page","PlayerLine":"Here in the churchyard, yet I will adventure.","scene":"5.3"},{"Dataline":"88254","PlayerLinenumber":"3","ActSceneLine":"5.3.12","Player":"paris","PlayerLine":"Sweet flower, with flowers thy bridal bed I strew,--","scene":"5.3"},{"Dataline":"88255","PlayerLinenumber":"3","ActSceneLine":"5.3.13","Player":"paris","PlayerLine":"O woe! thy canopy is dust and stones,--","scene":"5.3"},{"Dataline":"88256","PlayerLinenumber":"3","ActSceneLine":"5.3.14","Player":"paris","PlayerLine":"Which with sweet water nightly I will dew,","scene":"5.3"},{"Dataline":"88257","PlayerLinenumber":"3","ActSceneLine":"5.3.15","Player":"paris","PlayerLine":"Or, wanting that, with tears distill\'d by moans:","scene":"5.3"},{"Dataline":"88258","PlayerLinenumber":"3","ActSceneLine":"5.3.16","Player":"paris","PlayerLine":"The obsequies that I for thee will keep","scene":"5.3"},{"Dataline":"88259","PlayerLinenumber":"3","ActSceneLine":"5.3.17","Player":"paris","PlayerLine":"Nightly shall be to strew thy grave and weep.","scene":"5.3"},{"Dataline":"88261","PlayerLinenumber":"3","ActSceneLine":"5.3.18","Player":"paris","PlayerLine":"The boy gives warning something doth approach.","scene":"5.3"},{"Dataline":"88262","PlayerLinenumber":"3","ActSceneLine":"5.3.19","Player":"paris","PlayerLine":"What cursed foot wanders this way to-night,","scene":"5.3"},{"Dataline":"88263","PlayerLinenumber":"3","ActSceneLine":"5.3.20","Player":"paris","PlayerLine":"To cross my obsequies and true love\'s rite?","scene":"5.3"},{"Dataline":"88264","PlayerLinenumber":"3","ActSceneLine":"5.3.21","Player":"paris","PlayerLine":"What with a torch! muffle me, night, awhile.","scene":"5.3"},{"Dataline":"88267","PlayerLinenumber":"4","ActSceneLine":"5.3.22","Player":"romeo","PlayerLine":"Give me that mattock and the wrenching iron.","scene":"5.3"},{"Dataline":"88268","PlayerLinenumber":"4","ActSceneLine":"5.3.23","Player":"romeo","PlayerLine":"Hold, take this letter, early in the morning","scene":"5.3"},{"Dataline":"88269","PlayerLinenumber":"4","ActSceneLine":"5.3.24","Player":"romeo","PlayerLine":"See thou deliver it to my lord and father.","scene":"5.3"},{"Dataline":"88270","PlayerLinenumber":"4","ActSceneLine":"5.3.25","Player":"romeo","PlayerLine":"Give me the light: upon thy life, I charge thee,","scene":"5.3"},{"Dataline":"88271","PlayerLinenumber":"4","ActSceneLine":"5.3.26","Player":"romeo","PlayerLine":"Whate\'er thou hear\'st or seest, stand all aloof,","scene":"5.3"},{"Dataline":"88272","PlayerLinenumber":"4","ActSceneLine":"5.3.27","Player":"romeo","PlayerLine":"And do not interrupt me in my course.","scene":"5.3"},{"Dataline":"88273","PlayerLinenumber":"4","ActSceneLine":"5.3.28","Player":"romeo","PlayerLine":"Why I descend into this bed of death,","scene":"5.3"},{"Dataline":"88274","PlayerLinenumber":"4","ActSceneLine":"5.3.29","Player":"romeo","PlayerLine":"Is partly to behold my lady\'s face,","scene":"5.3"},{"Dataline":"88275","PlayerLinenumber":"4","ActSceneLine":"5.3.30","Player":"romeo","PlayerLine":"But chiefly to take thence from her dead finger","scene":"5.3"},{"Dataline":"88276","PlayerLinenumber":"4","ActSceneLine":"5.3.31","Player":"romeo","PlayerLine":"A precious ring, a ring that I must use","scene":"5.3"},{"Dataline":"88277","PlayerLinenumber":"4","ActSceneLine":"5.3.32","Player":"romeo","PlayerLine":"In dear employment: therefore hence, be gone:","scene":"5.3"},{"Dataline":"88278","PlayerLinenumber":"4","ActSceneLine":"5.3.33","Player":"romeo","PlayerLine":"But if thou, jealous, dost return to pry","scene":"5.3"},{"Dataline":"88279","PlayerLinenumber":"4","ActSceneLine":"5.3.34","Player":"romeo","PlayerLine":"In what I further shall intend to do,","scene":"5.3"},{"Dataline":"88280","PlayerLinenumber":"4","ActSceneLine":"5.3.35","Player":"romeo","PlayerLine":"By heaven, I will tear thee joint by joint","scene":"5.3"},{"Dataline":"88281","PlayerLinenumber":"4","ActSceneLine":"5.3.36","Player":"romeo","PlayerLine":"And strew this hungry churchyard with thy limbs:","scene":"5.3"},{"Dataline":"88282","PlayerLinenumber":"4","ActSceneLine":"5.3.37","Player":"romeo","PlayerLine":"The time and my intents are savage-wild,","scene":"5.3"},{"Dataline":"88283","PlayerLinenumber":"4","ActSceneLine":"5.3.38","Player":"romeo","PlayerLine":"More fierce and more inexorable far","scene":"5.3"},{"Dataline":"88284","PlayerLinenumber":"4","ActSceneLine":"5.3.39","Player":"romeo","PlayerLine":"Than empty tigers or the roaring sea.","scene":"5.3"},{"Dataline":"88285","PlayerLinenumber":"5","ActSceneLine":"5.3.40","Player":"balthasar","PlayerLine":"I will be gone, sir, and not trouble you.","scene":"5.3"},{"Dataline":"88286","PlayerLinenumber":"6","ActSceneLine":"5.3.41","Player":"romeo","PlayerLine":"So shalt thou show me friendship. Take thou that:","scene":"5.3"},{"Dataline":"88287","PlayerLinenumber":"6","ActSceneLine":"5.3.42","Player":"romeo","PlayerLine":"Live, and be prosperous: and farewell, good fellow.","scene":"5.3"},{"Dataline":"88288","PlayerLinenumber":"7","ActSceneLine":"5.3.43","Player":"balthasar","PlayerLine":"[Aside]  For all this same, I\'ll hide me hereabout:","scene":"5.3"},{"Dataline":"88289","PlayerLinenumber":"7","ActSceneLine":"5.3.44","Player":"balthasar","PlayerLine":"His looks I fear, and his intents I doubt.","scene":"5.3"},{"Dataline":"88291","PlayerLinenumber":"8","ActSceneLine":"5.3.45","Player":"romeo","PlayerLine":"Thou detestable maw, thou womb of death,","scene":"5.3"},{"Dataline":"88292","PlayerLinenumber":"8","ActSceneLine":"5.3.46","Player":"romeo","PlayerLine":"Gorged with the dearest morsel of the earth,","scene":"5.3"},{"Dataline":"88293","PlayerLinenumber":"8","ActSceneLine":"5.3.47","Player":"romeo","PlayerLine":"Thus I enforce thy rotten jaws to open,","scene":"5.3"},{"Dataline":"88294","PlayerLinenumber":"8","ActSceneLine":"5.3.48","Player":"romeo","PlayerLine":"And, in despite, I\'ll cram thee with more food!","scene":"5.3"},{"Dataline":"88296","PlayerLinenumber":"9","ActSceneLine":"5.3.49","Player":"paris","PlayerLine":"This is that banish\'d haughty Montague,","scene":"5.3"},{"Dataline":"88297","PlayerLinenumber":"9","ActSceneLine":"5.3.50","Player":"paris","PlayerLine":"That murder\'d my love\'s cousin, with which grief,","scene":"5.3"},{"Dataline":"88298","PlayerLinenumber":"9","ActSceneLine":"5.3.51","Player":"paris","PlayerLine":"It is supposed, the fair creature died,","scene":"5.3"},{"Dataline":"88299","PlayerLinenumber":"9","ActSceneLine":"5.3.52","Player":"paris","PlayerLine":"And here is come to do some villanous shame","scene":"5.3"},{"Dataline":"88300","PlayerLinenumber":"9","ActSceneLine":"5.3.53","Player":"paris","PlayerLine":"To the dead bodies: I will apprehend him.","scene":"5.3"},{"Dataline":"88302","PlayerLinenumber":"9","ActSceneLine":"5.3.54","Player":"paris","PlayerLine":"Stop thy unhallow\'d toil, vile Montague!","scene":"5.3"},{"Dataline":"88303","PlayerLinenumber":"9","ActSceneLine":"5.3.55","Player":"paris","PlayerLine":"Can vengeance be pursued further than death?","scene":"5.3"},{"Dataline":"88304","PlayerLinenumber":"9","ActSceneLine":"5.3.56","Player":"paris","PlayerLine":"Condemned villain, I do apprehend thee:","scene":"5.3"},{"Dataline":"88305","PlayerLinenumber":"9","ActSceneLine":"5.3.57","Player":"paris","PlayerLine":"Obey, and go with me, for thou must die.","scene":"5.3"},{"Dataline":"88306","PlayerLinenumber":"10","ActSceneLine":"5.3.58","Player":"romeo","PlayerLine":"I must indeed, and therefore came I hither.","scene":"5.3"},{"Dataline":"88307","PlayerLinenumber":"10","ActSceneLine":"5.3.59","Player":"romeo","PlayerLine":"Good gentle youth, tempt not a desperate man,","scene":"5.3"},{"Dataline":"88308","PlayerLinenumber":"10","ActSceneLine":"5.3.60","Player":"romeo","PlayerLine":"Fly hence, and leave me: think upon these gone,","scene":"5.3"},{"Dataline":"88309","PlayerLinenumber":"10","ActSceneLine":"5.3.61","Player":"romeo","PlayerLine":"Let them affright thee. I beseech thee, youth,","scene":"5.3"},{"Dataline":"88310","PlayerLinenumber":"10","ActSceneLine":"5.3.62","Player":"romeo","PlayerLine":"Put not another sin upon my head,","scene":"5.3"},{"Dataline":"88311","PlayerLinenumber":"10","ActSceneLine":"5.3.63","Player":"romeo","PlayerLine":"By urging me to fury: O, be gone!","scene":"5.3"},{"Dataline":"88312","PlayerLinenumber":"10","ActSceneLine":"5.3.64","Player":"romeo","PlayerLine":"By heaven, I love thee better than myself,","scene":"5.3"},{"Dataline":"88313","PlayerLinenumber":"10","ActSceneLine":"5.3.65","Player":"romeo","PlayerLine":"For I come hither arm\'d against myself:","scene":"5.3"},{"Dataline":"88314","PlayerLinenumber":"10","ActSceneLine":"5.3.66","Player":"romeo","PlayerLine":"Stay not, be gone, live, and hereafter say,","scene":"5.3"},{"Dataline":"88315","PlayerLinenumber":"10","ActSceneLine":"5.3.67","Player":"romeo","PlayerLine":"A madman\'s mercy bade thee run away.","scene":"5.3"},{"Dataline":"88316","PlayerLinenumber":"11","ActSceneLine":"5.3.68","Player":"paris","PlayerLine":"I do defy thy conjurations,","scene":"5.3"},{"Dataline":"88317","PlayerLinenumber":"11","ActSceneLine":"5.3.69","Player":"paris","PlayerLine":"And apprehend thee for a felon here.","scene":"5.3"},{"Dataline":"88318","PlayerLinenumber":"12","ActSceneLine":"5.3.70","Player":"romeo","PlayerLine":"Wilt thou provoke me? then have at thee, boy!","scene":"5.3"},{"Dataline":"88320","PlayerLinenumber":"13","ActSceneLine":"5.3.71","Player":"page","PlayerLine":"O Lord, they fight! I will go call the watch.","scene":"5.3"},{"Dataline":"88322","PlayerLinenumber":"14","ActSceneLine":"5.3.72","Player":"paris","PlayerLine":"O, I am slain!","scene":"5.3"},{"Dataline":"88324","PlayerLinenumber":"14","ActSceneLine":"5.3.73","Player":"paris","PlayerLine":"If thou be merciful,","scene":"5.3"},{"Dataline":"88325","PlayerLinenumber":"14","ActSceneLine":"5.3.74","Player":"paris","PlayerLine":"Open the tomb, lay me with Juliet.","scene":"5.3"},{"Dataline":"88327","PlayerLinenumber":"15","ActSceneLine":"5.3.75","Player":"romeo","PlayerLine":"In faith, I will. Let me peruse this face.","scene":"5.3"},{"Dataline":"88328","PlayerLinenumber":"15","ActSceneLine":"5.3.76","Player":"romeo","PlayerLine":"Mercutio\'s kinsman, noble County Paris!","scene":"5.3"},{"Dataline":"88329","PlayerLinenumber":"15","ActSceneLine":"5.3.77","Player":"romeo","PlayerLine":"What said my man, when my betossed soul","scene":"5.3"},{"Dataline":"88330","PlayerLinenumber":"15","ActSceneLine":"5.3.78","Player":"romeo","PlayerLine":"Did not attend him as we rode? I think","scene":"5.3"},{"Dataline":"88331","PlayerLinenumber":"15","ActSceneLine":"5.3.79","Player":"romeo","PlayerLine":"He told me Paris should have married Juliet:","scene":"5.3"},{"Dataline":"88332","PlayerLinenumber":"15","ActSceneLine":"5.3.80","Player":"romeo","PlayerLine":"Said he not so? or did I dream it so?","scene":"5.3"},{"Dataline":"88333","PlayerLinenumber":"15","ActSceneLine":"5.3.81","Player":"romeo","PlayerLine":"Or am I mad, hearing him talk of Juliet,","scene":"5.3"},{"Dataline":"88334","PlayerLinenumber":"15","ActSceneLine":"5.3.82","Player":"romeo","PlayerLine":"To think it was so? O, give me thy hand,","scene":"5.3"},{"Dataline":"88335","PlayerLinenumber":"15","ActSceneLine":"5.3.83","Player":"romeo","PlayerLine":"One writ with me in sour misfortune\'s book!","scene":"5.3"},{"Dataline":"88336","PlayerLinenumber":"15","ActSceneLine":"5.3.84","Player":"romeo","PlayerLine":"I\'ll bury thee in a triumphant grave,","scene":"5.3"},{"Dataline":"88337","PlayerLinenumber":"15","ActSceneLine":"5.3.85","Player":"romeo","PlayerLine":"A grave? O no! a lantern, slaughter\'d youth,","scene":"5.3"},{"Dataline":"88338","PlayerLinenumber":"15","ActSceneLine":"5.3.86","Player":"romeo","PlayerLine":"For here lies Juliet, and her beauty makes","scene":"5.3"},{"Dataline":"88339","PlayerLinenumber":"15","ActSceneLine":"5.3.87","Player":"romeo","PlayerLine":"This vault a feasting presence full of light.","scene":"5.3"},{"Dataline":"88340","PlayerLinenumber":"15","ActSceneLine":"5.3.88","Player":"romeo","PlayerLine":"Death, lie thou there, by a dead man interr\'d.","scene":"5.3"},{"Dataline":"88342","PlayerLinenumber":"15","ActSceneLine":"5.3.89","Player":"romeo","PlayerLine":"How oft when men are at the point of death","scene":"5.3"},{"Dataline":"88343","PlayerLinenumber":"15","ActSceneLine":"5.3.90","Player":"romeo","PlayerLine":"Have they been merry! which their keepers call","scene":"5.3"},{"Dataline":"88344","PlayerLinenumber":"15","ActSceneLine":"5.3.91","Player":"romeo","PlayerLine":"A lightning before death: O, how may I","scene":"5.3"},{"Dataline":"88345","PlayerLinenumber":"15","ActSceneLine":"5.3.92","Player":"romeo","PlayerLine":"Call this a lightning? O my love! my wife!","scene":"5.3"},{"Dataline":"88346","PlayerLinenumber":"15","ActSceneLine":"5.3.93","Player":"romeo","PlayerLine":"Death, that hath suck\'d the honey of thy breath,","scene":"5.3"},{"Dataline":"88347","PlayerLinenumber":"15","ActSceneLine":"5.3.94","Player":"romeo","PlayerLine":"Hath had no power yet upon thy beauty:","scene":"5.3"},{"Dataline":"88348","PlayerLinenumber":"15","ActSceneLine":"5.3.95","Player":"romeo","PlayerLine":"Thou art not conquer\'d, beauty\'s ensign yet","scene":"5.3"},{"Dataline":"88349","PlayerLinenumber":"15","ActSceneLine":"5.3.96","Player":"romeo","PlayerLine":"Is crimson in thy lips and in thy cheeks,","scene":"5.3"},{"Dataline":"88350","PlayerLinenumber":"15","ActSceneLine":"5.3.97","Player":"romeo","PlayerLine":"And death\'s pale flag is not advanced there.","scene":"5.3"},{"Dataline":"88351","PlayerLinenumber":"15","ActSceneLine":"5.3.98","Player":"romeo","PlayerLine":"Tybalt, liest thou there in thy bloody sheet?","scene":"5.3"},{"Dataline":"88352","PlayerLinenumber":"15","ActSceneLine":"5.3.99","Player":"romeo","PlayerLine":"O, what more favour can I do to thee,","scene":"5.3"},{"Dataline":"88353","PlayerLinenumber":"15","ActSceneLine":"5.3.100","Player":"romeo","PlayerLine":"Than with that hand that cut thy youth in twain","scene":"5.3"},{"Dataline":"88354","PlayerLinenumber":"15","ActSceneLine":"5.3.101","Player":"romeo","PlayerLine":"To sunder his that was thine enemy?","scene":"5.3"},{"Dataline":"88355","PlayerLinenumber":"15","ActSceneLine":"5.3.102","Player":"romeo","PlayerLine":"Forgive me, cousin! Ah, dear Juliet,","scene":"5.3"},{"Dataline":"88356","PlayerLinenumber":"15","ActSceneLine":"5.3.103","Player":"romeo","PlayerLine":"Why art thou yet so fair? shall I believe","scene":"5.3"},{"Dataline":"88357","PlayerLinenumber":"15","ActSceneLine":"5.3.104","Player":"romeo","PlayerLine":"That unsubstantial death is amorous,","scene":"5.3"},{"Dataline":"88358","PlayerLinenumber":"15","ActSceneLine":"5.3.105","Player":"romeo","PlayerLine":"And that the lean abhorred monster keeps","scene":"5.3"},{"Dataline":"88359","PlayerLinenumber":"15","ActSceneLine":"5.3.106","Player":"romeo","PlayerLine":"Thee here in dark to be his paramour?","scene":"5.3"},{"Dataline":"88360","PlayerLinenumber":"15","ActSceneLine":"5.3.107","Player":"romeo","PlayerLine":"For fear of that, I still will stay with thee,","scene":"5.3"},{"Dataline":"88361","PlayerLinenumber":"15","ActSceneLine":"5.3.108","Player":"romeo","PlayerLine":"And never from this palace of dim night","scene":"5.3"},{"Dataline":"88362","PlayerLinenumber":"15","ActSceneLine":"5.3.109","Player":"romeo","PlayerLine":"Depart again: here, here will I remain","scene":"5.3"},{"Dataline":"88363","PlayerLinenumber":"15","ActSceneLine":"5.3.110","Player":"romeo","PlayerLine":"With worms that are thy chamber-maids, O, here","scene":"5.3"},{"Dataline":"88364","PlayerLinenumber":"15","ActSceneLine":"5.3.111","Player":"romeo","PlayerLine":"Will I set up my everlasting rest,","scene":"5.3"},{"Dataline":"88365","PlayerLinenumber":"15","ActSceneLine":"5.3.112","Player":"romeo","PlayerLine":"And shake the yoke of inauspicious stars","scene":"5.3"},{"Dataline":"88366","PlayerLinenumber":"15","ActSceneLine":"5.3.113","Player":"romeo","PlayerLine":"From this world-wearied flesh. Eyes, look your last!","scene":"5.3"},{"Dataline":"88367","PlayerLinenumber":"15","ActSceneLine":"5.3.114","Player":"romeo","PlayerLine":"Arms, take your last embrace! and, lips, O you","scene":"5.3"},{"Dataline":"88368","PlayerLinenumber":"15","ActSceneLine":"5.3.115","Player":"romeo","PlayerLine":"The doors of breath, seal with a righteous kiss","scene":"5.3"},{"Dataline":"88369","PlayerLinenumber":"15","ActSceneLine":"5.3.116","Player":"romeo","PlayerLine":"A dateless bargain to engrossing death!","scene":"5.3"},{"Dataline":"88370","PlayerLinenumber":"15","ActSceneLine":"5.3.117","Player":"romeo","PlayerLine":"Come, bitter conduct, come, unsavoury guide!","scene":"5.3"},{"Dataline":"88371","PlayerLinenumber":"15","ActSceneLine":"5.3.118","Player":"romeo","PlayerLine":"Thou desperate pilot, now at once run on","scene":"5.3"},{"Dataline":"88372","PlayerLinenumber":"15","ActSceneLine":"5.3.119","Player":"romeo","PlayerLine":"The dashing rocks thy sea-sick weary bark!","scene":"5.3"},{"Dataline":"88373","PlayerLinenumber":"15","ActSceneLine":"5.3.120","Player":"romeo","PlayerLine":"Here\'s to my love!","scene":"5.3"},{"Dataline":"88375","PlayerLinenumber":"15","ActSceneLine":"5.3.121","Player":"romeo","PlayerLine":"O true apothecary!","scene":"5.3"},{"Dataline":"88376","PlayerLinenumber":"15","ActSceneLine":"5.3.122","Player":"romeo","PlayerLine":"Thy drugs are quick. Thus with a kiss I die.","scene":"5.3"},{"Dataline":"88379","PlayerLinenumber":"16","ActSceneLine":"5.3.123","Player":"friar_laurence","PlayerLine":"Saint Francis be my speed! how oft to-night","scene":"5.3"},{"Dataline":"88380","PlayerLinenumber":"16","ActSceneLine":"5.3.124","Player":"friar_laurence","PlayerLine":"Have my old feet stumbled at graves! Who\'s there?","scene":"5.3"},{"Dataline":"88381","PlayerLinenumber":"17","ActSceneLine":"5.3.125","Player":"balthasar","PlayerLine":"Here\'s one, a friend, and one that knows you well.","scene":"5.3"},{"Dataline":"88382","PlayerLinenumber":"18","ActSceneLine":"5.3.126","Player":"friar_laurence","PlayerLine":"Bliss be upon you! Tell me, good my friend,","scene":"5.3"},{"Dataline":"88383","PlayerLinenumber":"18","ActSceneLine":"5.3.127","Player":"friar_laurence","PlayerLine":"What torch is yond, that vainly lends his light","scene":"5.3"},{"Dataline":"88384","PlayerLinenumber":"18","ActSceneLine":"5.3.128","Player":"friar_laurence","PlayerLine":"To grubs and eyeless skulls? as I discern,","scene":"5.3"},{"Dataline":"88385","PlayerLinenumber":"18","ActSceneLine":"5.3.129","Player":"friar_laurence","PlayerLine":"It burneth in the Capel\'s monument.","scene":"5.3"},{"Dataline":"88386","PlayerLinenumber":"19","ActSceneLine":"5.3.130","Player":"balthasar","PlayerLine":"It doth so, holy sir, and there\'s my master,","scene":"5.3"},{"Dataline":"88387","PlayerLinenumber":"19","ActSceneLine":"5.3.131","Player":"balthasar","PlayerLine":"One that you love.","scene":"5.3"},{"Dataline":"88388","PlayerLinenumber":"20","ActSceneLine":"5.3.132","Player":"friar_laurence","PlayerLine":"Who is it?","scene":"5.3"},{"Dataline":"88389","PlayerLinenumber":"21","ActSceneLine":"5.3.133","Player":"balthasar","PlayerLine":"Romeo.","scene":"5.3"},{"Dataline":"88390","PlayerLinenumber":"22","ActSceneLine":"5.3.134","Player":"friar_laurence","PlayerLine":"How long hath he been there?","scene":"5.3"},{"Dataline":"88391","PlayerLinenumber":"23","ActSceneLine":"5.3.135","Player":"balthasar","PlayerLine":"Full half an hour.","scene":"5.3"},{"Dataline":"88392","PlayerLinenumber":"24","ActSceneLine":"5.3.136","Player":"friar_laurence","PlayerLine":"Go with me to the vault.","scene":"5.3"},{"Dataline":"88393","PlayerLinenumber":"25","ActSceneLine":"5.3.137","Player":"balthasar","PlayerLine":"I dare not, sir","scene":"5.3"},{"Dataline":"88394","PlayerLinenumber":"25","ActSceneLine":"5.3.138","Player":"balthasar","PlayerLine":"My master knows not but I am gone hence,","scene":"5.3"},{"Dataline":"88395","PlayerLinenumber":"25","ActSceneLine":"5.3.139","Player":"balthasar","PlayerLine":"And fearfully did menace me with death,","scene":"5.3"},{"Dataline":"88396","PlayerLinenumber":"25","ActSceneLine":"5.3.140","Player":"balthasar","PlayerLine":"If I did stay to look on his intents.","scene":"5.3"},{"Dataline":"88397","PlayerLinenumber":"26","ActSceneLine":"5.3.141","Player":"friar_laurence","PlayerLine":"Stay, then, I\'ll go alone. Fear comes upon me:","scene":"5.3"},{"Dataline":"88398","PlayerLinenumber":"26","ActSceneLine":"5.3.142","Player":"friar_laurence","PlayerLine":"O, much I fear some ill unlucky thing.","scene":"5.3"},{"Dataline":"88399","PlayerLinenumber":"27","ActSceneLine":"5.3.143","Player":"balthasar","PlayerLine":"As I did sleep under this yew-tree here,","scene":"5.3"},{"Dataline":"88400","PlayerLinenumber":"27","ActSceneLine":"5.3.144","Player":"balthasar","PlayerLine":"I dreamt my master and another fought,","scene":"5.3"},{"Dataline":"88401","PlayerLinenumber":"27","ActSceneLine":"5.3.145","Player":"balthasar","PlayerLine":"And that my master slew him.","scene":"5.3"},{"Dataline":"88402","PlayerLinenumber":"28","ActSceneLine":"5.3.146","Player":"friar_laurence","PlayerLine":"Romeo!","scene":"5.3"},{"Dataline":"88404","PlayerLinenumber":"28","ActSceneLine":"5.3.147","Player":"friar_laurence","PlayerLine":"Alack, alack, what blood is this, which stains","scene":"5.3"},{"Dataline":"88405","PlayerLinenumber":"28","ActSceneLine":"5.3.148","Player":"friar_laurence","PlayerLine":"The stony entrance of this sepulchre?","scene":"5.3"},{"Dataline":"88406","PlayerLinenumber":"28","ActSceneLine":"5.3.149","Player":"friar_laurence","PlayerLine":"What mean these masterless and gory swords","scene":"5.3"},{"Dataline":"88407","PlayerLinenumber":"28","ActSceneLine":"5.3.150","Player":"friar_laurence","PlayerLine":"To lie discolour\'d by this place of peace?","scene":"5.3"},{"Dataline":"88409","PlayerLinenumber":"28","ActSceneLine":"5.3.151","Player":"friar_laurence","PlayerLine":"Romeo! O, pale! Who else? what, Paris too?","scene":"5.3"},{"Dataline":"88410","PlayerLinenumber":"28","ActSceneLine":"5.3.152","Player":"friar_laurence","PlayerLine":"And steep\'d in blood? Ah, what an unkind hour","scene":"5.3"},{"Dataline":"88411","PlayerLinenumber":"28","ActSceneLine":"5.3.153","Player":"friar_laurence","PlayerLine":"Is guilty of this lamentable chance!","scene":"5.3"},{"Dataline":"88412","PlayerLinenumber":"28","ActSceneLine":"5.3.154","Player":"friar_laurence","PlayerLine":"The lady stirs.","scene":"5.3"},{"Dataline":"88414","PlayerLinenumber":"29","ActSceneLine":"5.3.155","Player":"juliet","PlayerLine":"O comfortable friar! where is my lord?","scene":"5.3"},{"Dataline":"88415","PlayerLinenumber":"29","ActSceneLine":"5.3.156","Player":"juliet","PlayerLine":"I do remember well where I should be,","scene":"5.3"},{"Dataline":"88416","PlayerLinenumber":"29","ActSceneLine":"5.3.157","Player":"juliet","PlayerLine":"And there I am. Where is my Romeo?","scene":"5.3"},{"Dataline":"88418","PlayerLinenumber":"30","ActSceneLine":"5.3.158","Player":"friar_laurence","PlayerLine":"I hear some noise. Lady, come from that nest","scene":"5.3"},{"Dataline":"88419","PlayerLinenumber":"30","ActSceneLine":"5.3.159","Player":"friar_laurence","PlayerLine":"Of death, contagion, and unnatural sleep:","scene":"5.3"},{"Dataline":"88420","PlayerLinenumber":"30","ActSceneLine":"5.3.160","Player":"friar_laurence","PlayerLine":"A greater power than we can contradict","scene":"5.3"},{"Dataline":"88421","PlayerLinenumber":"30","ActSceneLine":"5.3.161","Player":"friar_laurence","PlayerLine":"Hath thwarted our intents. Come, come away.","scene":"5.3"},{"Dataline":"88422","PlayerLinenumber":"30","ActSceneLine":"5.3.162","Player":"friar_laurence","PlayerLine":"Thy husband in thy bosom there lies dead,","scene":"5.3"},{"Dataline":"88423","PlayerLinenumber":"30","ActSceneLine":"5.3.163","Player":"friar_laurence","PlayerLine":"And Paris too. Come, I\'ll dispose of thee","scene":"5.3"},{"Dataline":"88424","PlayerLinenumber":"30","ActSceneLine":"5.3.164","Player":"friar_laurence","PlayerLine":"Among a sisterhood of holy nuns:","scene":"5.3"},{"Dataline":"88425","PlayerLinenumber":"30","ActSceneLine":"5.3.165","Player":"friar_laurence","PlayerLine":"Stay not to question, for the watch is coming,","scene":"5.3"},{"Dataline":"88426","PlayerLinenumber":"30","ActSceneLine":"5.3.166","Player":"friar_laurence","PlayerLine":"Come, go, good Juliet,","scene":"5.3"},{"Dataline":"88428","PlayerLinenumber":"30","ActSceneLine":"5.3.167","Player":"friar_laurence","PlayerLine":"I dare no longer stay.","scene":"5.3"},{"Dataline":"88429","PlayerLinenumber":"31","ActSceneLine":"5.3.168","Player":"juliet","PlayerLine":"Go, get thee hence, for I will not away.","scene":"5.3"},{"Dataline":"88431","PlayerLinenumber":"31","ActSceneLine":"5.3.169","Player":"juliet","PlayerLine":"What\'s here? a cup, closed in my true love\'s hand?","scene":"5.3"},{"Dataline":"88432","PlayerLinenumber":"31","ActSceneLine":"5.3.170","Player":"juliet","PlayerLine":"Poison, I see, hath been his timeless end:","scene":"5.3"},{"Dataline":"88433","PlayerLinenumber":"31","ActSceneLine":"5.3.171","Player":"juliet","PlayerLine":"O churl! drunk all, and left no friendly drop","scene":"5.3"},{"Dataline":"88434","PlayerLinenumber":"31","ActSceneLine":"5.3.172","Player":"juliet","PlayerLine":"To help me after? I will kiss thy lips,","scene":"5.3"},{"Dataline":"88435","PlayerLinenumber":"31","ActSceneLine":"5.3.173","Player":"juliet","PlayerLine":"Haply some poison yet doth hang on them,","scene":"5.3"},{"Dataline":"88436","PlayerLinenumber":"31","ActSceneLine":"5.3.174","Player":"juliet","PlayerLine":"To make die with a restorative.","scene":"5.3"},{"Dataline":"88438","PlayerLinenumber":"31","ActSceneLine":"5.3.175","Player":"juliet","PlayerLine":"Thy lips are warm.","scene":"5.3"},{"Dataline":"88439","PlayerLinenumber":"32","ActSceneLine":"5.3.176","Player":"first_watchman","PlayerLine":"[Within]  Lead, boy: which way?","scene":"5.3"},{"Dataline":"88440","PlayerLinenumber":"33","ActSceneLine":"5.3.177","Player":"juliet","PlayerLine":"Yea, noise? then I\'ll be brief. O happy dagger!","scene":"5.3"},{"Dataline":"88442","PlayerLinenumber":"33","ActSceneLine":"5.3.178","Player":"juliet","PlayerLine":"This is thy sheath,","scene":"5.3"},{"Dataline":"88444","PlayerLinenumber":"33","ActSceneLine":"5.3.179","Player":"juliet","PlayerLine":"there rust, and let me die.","scene":"5.3"},{"Dataline":"88447","PlayerLinenumber":"34","ActSceneLine":"5.3.180","Player":"page","PlayerLine":"This is the place, there, where the torch doth burn.","scene":"5.3"},{"Dataline":"88448","PlayerLinenumber":"35","ActSceneLine":"5.3.181","Player":"first_watchman","PlayerLine":"The ground is bloody, search about the churchyard:","scene":"5.3"},{"Dataline":"88449","PlayerLinenumber":"35","ActSceneLine":"5.3.182","Player":"first_watchman","PlayerLine":"Go, some of you, whoe\'er you find attach.","scene":"5.3"},{"Dataline":"88450","PlayerLinenumber":"35","ActSceneLine":"5.3.183","Player":"first_watchman","PlayerLine":"Pitiful sight! here lies the county slain,","scene":"5.3"},{"Dataline":"88451","PlayerLinenumber":"35","ActSceneLine":"5.3.184","Player":"first_watchman","PlayerLine":"And Juliet bleeding, warm, and newly dead,","scene":"5.3"},{"Dataline":"88452","PlayerLinenumber":"35","ActSceneLine":"5.3.185","Player":"first_watchman","PlayerLine":"Who here hath lain these two days buried.","scene":"5.3"},{"Dataline":"88453","PlayerLinenumber":"35","ActSceneLine":"5.3.186","Player":"first_watchman","PlayerLine":"Go, tell the prince: run to the Capulets:","scene":"5.3"},{"Dataline":"88454","PlayerLinenumber":"35","ActSceneLine":"5.3.187","Player":"first_watchman","PlayerLine":"Raise up the Montagues: some others search:","scene":"5.3"},{"Dataline":"88455","PlayerLinenumber":"35","ActSceneLine":"5.3.188","Player":"first_watchman","PlayerLine":"We see the ground whereon these woes do lie,","scene":"5.3"},{"Dataline":"88456","PlayerLinenumber":"35","ActSceneLine":"5.3.189","Player":"first_watchman","PlayerLine":"But the true ground of all these piteous woes","scene":"5.3"},{"Dataline":"88457","PlayerLinenumber":"35","ActSceneLine":"5.3.190","Player":"first_watchman","PlayerLine":"We cannot without circumstance descry.","scene":"5.3"},{"Dataline":"88459","PlayerLinenumber":"36","ActSceneLine":"5.3.191","Player":"second_watchman","PlayerLine":"Here\'s Romeo\'s man, we found him in the churchyard.","scene":"5.3"},{"Dataline":"88460","PlayerLinenumber":"37","ActSceneLine":"5.3.192","Player":"first_watchman","PlayerLine":"Hold him in safety, till the prince come hither.","scene":"5.3"},{"Dataline":"88462","PlayerLinenumber":"38","ActSceneLine":"5.3.193","Player":"third_watchman","PlayerLine":"Here is a friar, that trembles, sighs and weeps:","scene":"5.3"},{"Dataline":"88463","PlayerLinenumber":"38","ActSceneLine":"5.3.194","Player":"third_watchman","PlayerLine":"We took this mattock and this spade from him,","scene":"5.3"},{"Dataline":"88464","PlayerLinenumber":"38","ActSceneLine":"5.3.195","Player":"third_watchman","PlayerLine":"As he was coming from this churchyard side.","scene":"5.3"},{"Dataline":"88465","PlayerLinenumber":"39","ActSceneLine":"5.3.196","Player":"first_watchman","PlayerLine":"A great suspicion: stay the friar too.","scene":"5.3"},{"Dataline":"88467","PlayerLinenumber":"40","ActSceneLine":"5.3.197","Player":"prince","PlayerLine":"What misadventure is so early up,","scene":"5.3"},{"Dataline":"88468","PlayerLinenumber":"40","ActSceneLine":"5.3.198","Player":"prince","PlayerLine":"That calls our person from our morning\'s rest?","scene":"5.3"},{"Dataline":"88470","PlayerLinenumber":"41","ActSceneLine":"5.3.199","Player":"capulet","PlayerLine":"What should it be, that they so shriek abroad?","scene":"5.3"},{"Dataline":"88471","PlayerLinenumber":"42","ActSceneLine":"5.3.200","Player":"lady_capulet","PlayerLine":"The people in the street cry Romeo,","scene":"5.3"},{"Dataline":"88472","PlayerLinenumber":"42","ActSceneLine":"5.3.201","Player":"lady_capulet","PlayerLine":"Some Juliet, and some Paris, and all run,","scene":"5.3"},{"Dataline":"88473","PlayerLinenumber":"42","ActSceneLine":"5.3.202","Player":"lady_capulet","PlayerLine":"With open outcry toward our monument.","scene":"5.3"},{"Dataline":"88474","PlayerLinenumber":"43","ActSceneLine":"5.3.203","Player":"prince","PlayerLine":"What fear is this which startles in our ears?","scene":"5.3"},{"Dataline":"88475","PlayerLinenumber":"44","ActSceneLine":"5.3.204","Player":"first_watchman","PlayerLine":"Sovereign, here lies the County Paris slain,","scene":"5.3"},{"Dataline":"88476","PlayerLinenumber":"44","ActSceneLine":"5.3.205","Player":"first_watchman","PlayerLine":"And Romeo dead, and Juliet, dead before,","scene":"5.3"},{"Dataline":"88477","PlayerLinenumber":"44","ActSceneLine":"5.3.206","Player":"first_watchman","PlayerLine":"Warm and new kill\'d.","scene":"5.3"},{"Dataline":"88478","PlayerLinenumber":"45","ActSceneLine":"5.3.207","Player":"prince","PlayerLine":"Search, seek, and know how this foul murder comes.","scene":"5.3"},{"Dataline":"88479","PlayerLinenumber":"46","ActSceneLine":"5.3.208","Player":"first_watchman","PlayerLine":"Here is a friar, and slaughter\'d Romeo\'s man,","scene":"5.3"},{"Dataline":"88480","PlayerLinenumber":"46","ActSceneLine":"5.3.209","Player":"first_watchman","PlayerLine":"With instruments upon them, fit to open","scene":"5.3"},{"Dataline":"88481","PlayerLinenumber":"46","ActSceneLine":"5.3.210","Player":"first_watchman","PlayerLine":"These dead men\'s tombs.","scene":"5.3"},{"Dataline":"88482","PlayerLinenumber":"47","ActSceneLine":"5.3.211","Player":"capulet","PlayerLine":"O heavens! O wife, look how our daughter bleeds!","scene":"5.3"},{"Dataline":"88483","PlayerLinenumber":"47","ActSceneLine":"5.3.212","Player":"capulet","PlayerLine":"This dagger hath mista\'en--for, lo, his house","scene":"5.3"},{"Dataline":"88484","PlayerLinenumber":"47","ActSceneLine":"5.3.213","Player":"capulet","PlayerLine":"Is empty on the back of Montague,--","scene":"5.3"},{"Dataline":"88485","PlayerLinenumber":"47","ActSceneLine":"5.3.214","Player":"capulet","PlayerLine":"And it mis-sheathed in my daughter\'s bosom!","scene":"5.3"},{"Dataline":"88486","PlayerLinenumber":"48","ActSceneLine":"5.3.215","Player":"lady_capulet","PlayerLine":"O me! this sight of death is as a bell,","scene":"5.3"},{"Dataline":"88487","PlayerLinenumber":"48","ActSceneLine":"5.3.216","Player":"lady_capulet","PlayerLine":"That warns my old age to a sepulchre.","scene":"5.3"},{"Dataline":"88489","PlayerLinenumber":"49","ActSceneLine":"5.3.217","Player":"prince","PlayerLine":"Come, Montague, for thou art early up,","scene":"5.3"},{"Dataline":"88490","PlayerLinenumber":"49","ActSceneLine":"5.3.218","Player":"prince","PlayerLine":"To see thy son and heir more early down.","scene":"5.3"},{"Dataline":"88491","PlayerLinenumber":"50","ActSceneLine":"5.3.219","Player":"montague","PlayerLine":"Alas, my liege, my wife is dead to-night,","scene":"5.3"},{"Dataline":"88492","PlayerLinenumber":"50","ActSceneLine":"5.3.220","Player":"montague","PlayerLine":"Grief of my son\'s exile hath stopp\'d her breath:","scene":"5.3"},{"Dataline":"88493","PlayerLinenumber":"50","ActSceneLine":"5.3.221","Player":"montague","PlayerLine":"What further woe conspires against mine age?","scene":"5.3"},{"Dataline":"88494","PlayerLinenumber":"51","ActSceneLine":"5.3.222","Player":"prince","PlayerLine":"Look, and thou shalt see.","scene":"5.3"},{"Dataline":"88495","PlayerLinenumber":"52","ActSceneLine":"5.3.223","Player":"montague","PlayerLine":"O thou untaught! what manners is in this?","scene":"5.3"},{"Dataline":"88496","PlayerLinenumber":"52","ActSceneLine":"5.3.224","Player":"montague","PlayerLine":"To press before thy father to a grave?","scene":"5.3"},{"Dataline":"88497","PlayerLinenumber":"53","ActSceneLine":"5.3.225","Player":"prince","PlayerLine":"Seal up the mouth of outrage for a while,","scene":"5.3"},{"Dataline":"88498","PlayerLinenumber":"53","ActSceneLine":"5.3.226","Player":"prince","PlayerLine":"Till we can clear these ambiguities,","scene":"5.3"},{"Dataline":"88499","PlayerLinenumber":"53","ActSceneLine":"5.3.227","Player":"prince","PlayerLine":"And know their spring, their head, their","scene":"5.3"},{"Dataline":"88500","PlayerLinenumber":"53","ActSceneLine":"5.3.228","Player":"prince","PlayerLine":"true descent,","scene":"5.3"},{"Dataline":"88501","PlayerLinenumber":"53","ActSceneLine":"5.3.229","Player":"prince","PlayerLine":"And then will I be general of your woes,","scene":"5.3"},{"Dataline":"88502","PlayerLinenumber":"53","ActSceneLine":"5.3.230","Player":"prince","PlayerLine":"And lead you even to death: meantime forbear,","scene":"5.3"},{"Dataline":"88503","PlayerLinenumber":"53","ActSceneLine":"5.3.231","Player":"prince","PlayerLine":"And let mischance be slave to patience.","scene":"5.3"},{"Dataline":"88504","PlayerLinenumber":"53","ActSceneLine":"5.3.232","Player":"prince","PlayerLine":"Bring forth the parties of suspicion.","scene":"5.3"},{"Dataline":"88505","PlayerLinenumber":"54","ActSceneLine":"5.3.233","Player":"friar_laurence","PlayerLine":"I am the greatest, able to do least,","scene":"5.3"},{"Dataline":"88506","PlayerLinenumber":"54","ActSceneLine":"5.3.234","Player":"friar_laurence","PlayerLine":"Yet most suspected, as the time and place","scene":"5.3"},{"Dataline":"88507","PlayerLinenumber":"54","ActSceneLine":"5.3.235","Player":"friar_laurence","PlayerLine":"Doth make against me of this direful murder,","scene":"5.3"},{"Dataline":"88508","PlayerLinenumber":"54","ActSceneLine":"5.3.236","Player":"friar_laurence","PlayerLine":"And here I stand, both to impeach and purge","scene":"5.3"},{"Dataline":"88509","PlayerLinenumber":"54","ActSceneLine":"5.3.237","Player":"friar_laurence","PlayerLine":"Myself condemned and myself excused.","scene":"5.3"},{"Dataline":"88510","PlayerLinenumber":"55","ActSceneLine":"5.3.238","Player":"prince","PlayerLine":"Then say at once what thou dost know in this.","scene":"5.3"},{"Dataline":"88511","PlayerLinenumber":"56","ActSceneLine":"5.3.239","Player":"friar_laurence","PlayerLine":"I will be brief, for my short date of breath","scene":"5.3"},{"Dataline":"88512","PlayerLinenumber":"56","ActSceneLine":"5.3.240","Player":"friar_laurence","PlayerLine":"Is not so long as is a tedious tale.","scene":"5.3"},{"Dataline":"88513","PlayerLinenumber":"56","ActSceneLine":"5.3.241","Player":"friar_laurence","PlayerLine":"Romeo, there dead, was husband to that Juliet,","scene":"5.3"},{"Dataline":"88514","PlayerLinenumber":"56","ActSceneLine":"5.3.242","Player":"friar_laurence","PlayerLine":"And she, there dead, that Romeo\'s faithful wife:","scene":"5.3"},{"Dataline":"88515","PlayerLinenumber":"56","ActSceneLine":"5.3.243","Player":"friar_laurence","PlayerLine":"I married them, and their stol\'n marriage-day","scene":"5.3"},{"Dataline":"88516","PlayerLinenumber":"56","ActSceneLine":"5.3.244","Player":"friar_laurence","PlayerLine":"Was Tybalt\'s dooms-day, whose untimely death","scene":"5.3"},{"Dataline":"88517","PlayerLinenumber":"56","ActSceneLine":"5.3.245","Player":"friar_laurence","PlayerLine":"Banish\'d the new-made bridegroom from the city,","scene":"5.3"},{"Dataline":"88518","PlayerLinenumber":"56","ActSceneLine":"5.3.246","Player":"friar_laurence","PlayerLine":"For whom, and not for Tybalt, Juliet pined.","scene":"5.3"},{"Dataline":"88519","PlayerLinenumber":"56","ActSceneLine":"5.3.247","Player":"friar_laurence","PlayerLine":"You, to remove that siege of grief from her,","scene":"5.3"},{"Dataline":"88520","PlayerLinenumber":"56","ActSceneLine":"5.3.248","Player":"friar_laurence","PlayerLine":"Betroth\'d and would have married her perforce","scene":"5.3"},{"Dataline":"88521","PlayerLinenumber":"56","ActSceneLine":"5.3.249","Player":"friar_laurence","PlayerLine":"To County Paris: then comes she to me,","scene":"5.3"},{"Dataline":"88522","PlayerLinenumber":"56","ActSceneLine":"5.3.250","Player":"friar_laurence","PlayerLine":"And, with wild looks, bid me devise some mean","scene":"5.3"},{"Dataline":"88523","PlayerLinenumber":"56","ActSceneLine":"5.3.251","Player":"friar_laurence","PlayerLine":"To rid her from this second marriage,","scene":"5.3"},{"Dataline":"88524","PlayerLinenumber":"56","ActSceneLine":"5.3.252","Player":"friar_laurence","PlayerLine":"Or in my cell there would she kill herself.","scene":"5.3"},{"Dataline":"88525","PlayerLinenumber":"56","ActSceneLine":"5.3.253","Player":"friar_laurence","PlayerLine":"Then gave I her, so tutor\'d by my art,","scene":"5.3"},{"Dataline":"88526","PlayerLinenumber":"56","ActSceneLine":"5.3.254","Player":"friar_laurence","PlayerLine":"A sleeping potion, which so took effect","scene":"5.3"},{"Dataline":"88527","PlayerLinenumber":"56","ActSceneLine":"5.3.255","Player":"friar_laurence","PlayerLine":"As I intended, for it wrought on her","scene":"5.3"},{"Dataline":"88528","PlayerLinenumber":"56","ActSceneLine":"5.3.256","Player":"friar_laurence","PlayerLine":"The form of death: meantime I writ to Romeo,","scene":"5.3"},{"Dataline":"88529","PlayerLinenumber":"56","ActSceneLine":"5.3.257","Player":"friar_laurence","PlayerLine":"That he should hither come as this dire night,","scene":"5.3"},{"Dataline":"88530","PlayerLinenumber":"56","ActSceneLine":"5.3.258","Player":"friar_laurence","PlayerLine":"To help to take her from her borrow\'d grave,","scene":"5.3"},{"Dataline":"88531","PlayerLinenumber":"56","ActSceneLine":"5.3.259","Player":"friar_laurence","PlayerLine":"Being the time the potion\'s force should cease.","scene":"5.3"},{"Dataline":"88532","PlayerLinenumber":"56","ActSceneLine":"5.3.260","Player":"friar_laurence","PlayerLine":"But he which bore my letter, Friar John,","scene":"5.3"},{"Dataline":"88533","PlayerLinenumber":"56","ActSceneLine":"5.3.261","Player":"friar_laurence","PlayerLine":"Was stay\'d by accident, and yesternight","scene":"5.3"},{"Dataline":"88534","PlayerLinenumber":"56","ActSceneLine":"5.3.262","Player":"friar_laurence","PlayerLine":"Return\'d my letter back. Then all alone","scene":"5.3"},{"Dataline":"88535","PlayerLinenumber":"56","ActSceneLine":"5.3.263","Player":"friar_laurence","PlayerLine":"At the prefixed hour of her waking,","scene":"5.3"},{"Dataline":"88536","PlayerLinenumber":"56","ActSceneLine":"5.3.264","Player":"friar_laurence","PlayerLine":"Came I to take her from her kindred\'s vault,","scene":"5.3"},{"Dataline":"88537","PlayerLinenumber":"56","ActSceneLine":"5.3.265","Player":"friar_laurence","PlayerLine":"Meaning to keep her closely at my cell,","scene":"5.3"},{"Dataline":"88538","PlayerLinenumber":"56","ActSceneLine":"5.3.266","Player":"friar_laurence","PlayerLine":"Till I conveniently could send to Romeo:","scene":"5.3"},{"Dataline":"88539","PlayerLinenumber":"56","ActSceneLine":"5.3.267","Player":"friar_laurence","PlayerLine":"But when I came, some minute ere the time","scene":"5.3"},{"Dataline":"88540","PlayerLinenumber":"56","ActSceneLine":"5.3.268","Player":"friar_laurence","PlayerLine":"Of her awaking, here untimely lay","scene":"5.3"},{"Dataline":"88541","PlayerLinenumber":"56","ActSceneLine":"5.3.269","Player":"friar_laurence","PlayerLine":"The noble Paris and true Romeo dead.","scene":"5.3"},{"Dataline":"88542","PlayerLinenumber":"56","ActSceneLine":"5.3.270","Player":"friar_laurence","PlayerLine":"She wakes, and I entreated her come forth,","scene":"5.3"},{"Dataline":"88543","PlayerLinenumber":"56","ActSceneLine":"5.3.271","Player":"friar_laurence","PlayerLine":"And bear this work of heaven with patience:","scene":"5.3"},{"Dataline":"88544","PlayerLinenumber":"56","ActSceneLine":"5.3.272","Player":"friar_laurence","PlayerLine":"But then a noise did scare me from the tomb,","scene":"5.3"},{"Dataline":"88545","PlayerLinenumber":"56","ActSceneLine":"5.3.273","Player":"friar_laurence","PlayerLine":"And she, too desperate, would not go with me,","scene":"5.3"},{"Dataline":"88546","PlayerLinenumber":"56","ActSceneLine":"5.3.274","Player":"friar_laurence","PlayerLine":"But, as it seems, did violence on herself.","scene":"5.3"},{"Dataline":"88547","PlayerLinenumber":"56","ActSceneLine":"5.3.275","Player":"friar_laurence","PlayerLine":"All this I know, and to the marriage","scene":"5.3"},{"Dataline":"88548","PlayerLinenumber":"56","ActSceneLine":"5.3.276","Player":"friar_laurence","PlayerLine":"Her nurse is privy: and, if aught in this","scene":"5.3"},{"Dataline":"88549","PlayerLinenumber":"56","ActSceneLine":"5.3.277","Player":"friar_laurence","PlayerLine":"Miscarried by my fault, let my old life","scene":"5.3"},{"Dataline":"88550","PlayerLinenumber":"56","ActSceneLine":"5.3.278","Player":"friar_laurence","PlayerLine":"Be sacrificed, some hour before his time,","scene":"5.3"},{"Dataline":"88551","PlayerLinenumber":"56","ActSceneLine":"5.3.279","Player":"friar_laurence","PlayerLine":"Unto the rigour of severest law.","scene":"5.3"},{"Dataline":"88552","PlayerLinenumber":"57","ActSceneLine":"5.3.280","Player":"prince","PlayerLine":"We still have known thee for a holy man.","scene":"5.3"},{"Dataline":"88553","PlayerLinenumber":"57","ActSceneLine":"5.3.281","Player":"prince","PlayerLine":"Where\'s Romeo\'s man? what can he say in this?","scene":"5.3"},{"Dataline":"88554","PlayerLinenumber":"58","ActSceneLine":"5.3.282","Player":"balthasar","PlayerLine":"I brought my master news of Juliet\'s death,","scene":"5.3"},{"Dataline":"88555","PlayerLinenumber":"58","ActSceneLine":"5.3.283","Player":"balthasar","PlayerLine":"And then in post he came from Mantua","scene":"5.3"},{"Dataline":"88556","PlayerLinenumber":"58","ActSceneLine":"5.3.284","Player":"balthasar","PlayerLine":"To this same place, to this same monument.","scene":"5.3"},{"Dataline":"88557","PlayerLinenumber":"58","ActSceneLine":"5.3.285","Player":"balthasar","PlayerLine":"This letter he early bid me give his father,","scene":"5.3"},{"Dataline":"88558","PlayerLinenumber":"58","ActSceneLine":"5.3.286","Player":"balthasar","PlayerLine":"And threatened me with death, going in the vault,","scene":"5.3"},{"Dataline":"88559","PlayerLinenumber":"58","ActSceneLine":"5.3.287","Player":"balthasar","PlayerLine":"I departed not and left him there.","scene":"5.3"},{"Dataline":"88560","PlayerLinenumber":"59","ActSceneLine":"5.3.288","Player":"prince","PlayerLine":"Give me the letter, I will look on it.","scene":"5.3"},{"Dataline":"88561","PlayerLinenumber":"59","ActSceneLine":"5.3.289","Player":"prince","PlayerLine":"Where is the county\'s page, that raised the watch?","scene":"5.3"},{"Dataline":"88562","PlayerLinenumber":"59","ActSceneLine":"5.3.290","Player":"prince","PlayerLine":"Sirrah, what made your master in this place?","scene":"5.3"},{"Dataline":"88563","PlayerLinenumber":"60","ActSceneLine":"5.3.291","Player":"page","PlayerLine":"He came with flowers to strew his lady\'s grave,","scene":"5.3"},{"Dataline":"88564","PlayerLinenumber":"60","ActSceneLine":"5.3.292","Player":"page","PlayerLine":"And bid me stand aloof, and so I did:","scene":"5.3"},{"Dataline":"88565","PlayerLinenumber":"60","ActSceneLine":"5.3.293","Player":"page","PlayerLine":"Anon comes one with light to ope the tomb,","scene":"5.3"},{"Dataline":"88566","PlayerLinenumber":"60","ActSceneLine":"5.3.294","Player":"page","PlayerLine":"And by and by my master drew on him,","scene":"5.3"},{"Dataline":"88567","PlayerLinenumber":"60","ActSceneLine":"5.3.295","Player":"page","PlayerLine":"And then I ran away to call the watch.","scene":"5.3"},{"Dataline":"88568","PlayerLinenumber":"61","ActSceneLine":"5.3.296","Player":"prince","PlayerLine":"This letter doth make good the friar\'s words,","scene":"5.3"},{"Dataline":"88569","PlayerLinenumber":"61","ActSceneLine":"5.3.297","Player":"prince","PlayerLine":"Their course of love, the tidings of her death:","scene":"5.3"},{"Dataline":"88570","PlayerLinenumber":"61","ActSceneLine":"5.3.298","Player":"prince","PlayerLine":"And here he writes that he did buy a poison","scene":"5.3"},{"Dataline":"88571","PlayerLinenumber":"61","ActSceneLine":"5.3.299","Player":"prince","PlayerLine":"Of a poor \'pothecary, and therewithal","scene":"5.3"},{"Dataline":"88572","PlayerLinenumber":"61","ActSceneLine":"5.3.300","Player":"prince","PlayerLine":"Came to this vault to die, and lie with Juliet.","scene":"5.3"},{"Dataline":"88573","PlayerLinenumber":"61","ActSceneLine":"5.3.301","Player":"prince","PlayerLine":"Where be these enemies? Capulet! Montague!","scene":"5.3"},{"Dataline":"88574","PlayerLinenumber":"61","ActSceneLine":"5.3.302","Player":"prince","PlayerLine":"See, what a scourge is laid upon your hate,","scene":"5.3"},{"Dataline":"88575","PlayerLinenumber":"61","ActSceneLine":"5.3.303","Player":"prince","PlayerLine":"That heaven finds means to kill your joys with love.","scene":"5.3"},{"Dataline":"88576","PlayerLinenumber":"61","ActSceneLine":"5.3.304","Player":"prince","PlayerLine":"And I for winking at your discords too","scene":"5.3"},{"Dataline":"88577","PlayerLinenumber":"61","ActSceneLine":"5.3.305","Player":"prince","PlayerLine":"Have lost a brace of kinsmen: all are punish\'d.","scene":"5.3"},{"Dataline":"88578","PlayerLinenumber":"62","ActSceneLine":"5.3.306","Player":"capulet","PlayerLine":"O brother Montague, give me thy hand:","scene":"5.3"},{"Dataline":"88579","PlayerLinenumber":"62","ActSceneLine":"5.3.307","Player":"capulet","PlayerLine":"This is my daughter\'s jointure, for no more","scene":"5.3"},{"Dataline":"88580","PlayerLinenumber":"62","ActSceneLine":"5.3.308","Player":"capulet","PlayerLine":"Can I demand.","scene":"5.3"},{"Dataline":"88581","PlayerLinenumber":"63","ActSceneLine":"5.3.309","Player":"montague","PlayerLine":"But I can give thee more:","scene":"5.3"},{"Dataline":"88582","PlayerLinenumber":"63","ActSceneLine":"5.3.310","Player":"montague","PlayerLine":"For I will raise her statue in pure gold,","scene":"5.3"},{"Dataline":"88583","PlayerLinenumber":"63","ActSceneLine":"5.3.311","Player":"montague","PlayerLine":"That while Verona by that name is known,","scene":"5.3"},{"Dataline":"88584","PlayerLinenumber":"63","ActSceneLine":"5.3.312","Player":"montague","PlayerLine":"There shall no figure at such rate be set","scene":"5.3"},{"Dataline":"88585","PlayerLinenumber":"63","ActSceneLine":"5.3.313","Player":"montague","PlayerLine":"As that of true and faithful Juliet.","scene":"5.3"},{"Dataline":"88586","PlayerLinenumber":"64","ActSceneLine":"5.3.314","Player":"capulet","PlayerLine":"As rich shall Romeo\'s by his lady\'s lie,","scene":"5.3"},{"Dataline":"88587","PlayerLinenumber":"64","ActSceneLine":"5.3.315","Player":"capulet","PlayerLine":"Poor sacrifices of our enmity!","scene":"5.3"},{"Dataline":"88588","PlayerLinenumber":"65","ActSceneLine":"5.3.316","Player":"prince","PlayerLine":"A glooming peace this morning with it brings,","scene":"5.3"},{"Dataline":"88589","PlayerLinenumber":"65","ActSceneLine":"5.3.317","Player":"prince","PlayerLine":"The sun, for sorrow, will not show his head:","scene":"5.3"},{"Dataline":"88590","PlayerLinenumber":"65","ActSceneLine":"5.3.318","Player":"prince","PlayerLine":"Go hence, to have more talk of these sad things,","scene":"5.3"},{"Dataline":"88591","PlayerLinenumber":"65","ActSceneLine":"5.3.319","Player":"prince","PlayerLine":"Some shall be pardon\'d, and some punished:","scene":"5.3"},{"Dataline":"88592","PlayerLinenumber":"65","ActSceneLine":"5.3.320","Player":"prince","PlayerLine":"For never was a story of more woe","scene":"5.3"},{"Dataline":"88593","PlayerLinenumber":"65","ActSceneLine":"5.3.321","Player":"prince","PlayerLine":"Than this of Juliet and her Romeo.","scene":"5.3"}]');

},{}],"c0mAN":[function(require,module,exports) {

},{}]},["fdTx9","1SICI"], "1SICI", "parcelRequire94c2")

//# sourceMappingURL=index.18dbc454.js.map