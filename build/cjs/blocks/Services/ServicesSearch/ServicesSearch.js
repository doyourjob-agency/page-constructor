"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesSearch = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const utils_1 = require("../../../utils");
const i18n_1 = require("../i18n");
const b = (0, utils_1.block)('services-search');
const ServicesSearch = ({ value, setValue }) => {
    const handleChange = (0, react_1.useCallback)((e) => setValue(e.target.value), [setValue]);
    const handleReset = (0, react_1.useCallback)(() => setValue(''), [setValue]);
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement("div", { className: b('suggest-container') },
            react_1.default.createElement(uikit_1.TextInput, { className: b('suggest'), size: "l", placeholder: (0, i18n_1.i18n)('search'), onChange: handleChange, value: value })),
        value ? (react_1.default.createElement(uikit_1.Button, { onClick: handleReset, className: b('button'), view: "flat", size: "s" },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 12, hanging: 12, viewBox: "0 0 10 10" },
                react_1.default.createElement("path", { d: "M10 0.7L9.3 0L5 4.3L0.7 0L0 0.7L4.3 5L0 9.3L0.7 10L5 5.7L9.3 10L10 9.3L5.7 5L10 0.7Z", fill: "currentColor" })))) : (react_1.default.createElement(uikit_1.Button, { className: b('button'), view: "flat", size: "s" },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", viewBox: "0 0 16 16" },
                react_1.default.createElement("path", { d: "M9.532 9.539A5 5 0 1 0 2.468 2.46a5 5 0 0 0 7.064 7.08zm0 0L15 15", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", vectorEffect: "non-scaling-stroke" }))))));
};
exports.ServicesSearch = ServicesSearch;
exports.default = exports.ServicesSearch;
