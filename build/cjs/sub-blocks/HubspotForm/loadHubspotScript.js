"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let scriptPromise;
const loadHubspotScript = async () => {
    if (scriptPromise) {
        return scriptPromise;
    }
    else {
        scriptPromise = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = '//js-eu1.hsforms.net/forms/v2.js';
            script.onload = (event) => {
                resolve(event);
            };
            script.onerror = (event) => {
                var _a;
                (_a = script === null || script === void 0 ? void 0 : script.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(script);
                reject(event);
            };
            document.head.appendChild(script);
        });
        return scriptPromise;
    }
};
exports.default = loadHubspotScript;
