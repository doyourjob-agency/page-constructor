"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const utils_1 = require("../../../../utils");
const context_1 = require("../../../context");
const widget_1 = require("../../../widget");
const b = (0, utils_1.block)('device-emulation-mobile');
const DeviceEmulationMobile = ({ device, active }) => {
    const _a = (0, react_1.useContext)(context_1.EditorContext), { deviceEmulationSettings } = _a, initialData = tslib_1.__rest(_a, ["deviceEmulationSettings"]);
    const containerRef = (0, react_1.useRef)(null);
    const deviceIframeRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        let iframe;
        if (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) {
            iframe = new widget_1.DeviceIframe(containerRef === null || containerRef === void 0 ? void 0 : containerRef.current, {
                initialData,
                className: b('frame', { device }),
                settings: deviceEmulationSettings,
            });
            deviceIframeRef.current = iframe;
        }
        return () => {
            iframe === null || iframe === void 0 ? void 0 : iframe.destroy();
        };
        // render iframe only once, then update it's data with postMessage
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [device]);
    (0, react_1.useEffect)(() => {
        if (deviceIframeRef.current) {
            deviceIframeRef.current.onActivenessUpdate(active);
        }
    }, [active]);
    (0, react_1.useEffect)(() => {
        if (deviceIframeRef.current && initialData) {
            deviceIframeRef.current.onDataUpdate(initialData);
        }
    }, [initialData]);
    return react_1.default.createElement("div", { className: b({ active, device }), ref: containerRef });
};
exports.default = DeviceEmulationMobile;
