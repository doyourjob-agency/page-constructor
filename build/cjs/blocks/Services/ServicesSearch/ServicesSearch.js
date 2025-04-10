"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesSearch = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const CloseIcon_1 = require("../../../icons/CloseIcon");
const SearchIcon_1 = require("../../../icons/SearchIcon");
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
            react_1.default.createElement(uikit_1.Button.Icon, null,
                react_1.default.createElement(CloseIcon_1.CloseIcon, { width: 12, height: 12 })))) : (react_1.default.createElement(uikit_1.Button, { className: b('button'), view: "flat", size: "s" },
            react_1.default.createElement(uikit_1.Button.Icon, null,
                react_1.default.createElement(SearchIcon_1.SearchIcon, null))))));
};
exports.ServicesSearch = ServicesSearch;
exports.default = exports.ServicesSearch;
