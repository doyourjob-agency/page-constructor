"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadScript = void 0;
async function loadScript(src, { id, defer = false, async = true }) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.defer = defer;
        script.async = async;
        script.onload = (event) => {
            resolve(event);
        };
        script.onerror = (event) => {
            var _a;
            const element = document.getElementById(id);
            (_a = element === null || element === void 0 ? void 0 : element.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(element);
            reject(event);
        };
        document.head.appendChild(script);
    });
}
exports.loadScript = loadScript;
