"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultIconId = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const utils_1 = require("../../utils");
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('control');
exports.defaultIconId = 'icon-test-id';
const Control = (props) => {
    const { icon, theme = 'primary', size = 's', iconSize = 16, disabled = false, onClick, className, qa, } = props;
    return (react_1.default.createElement("button", { type: "button", "aria-label": (0, i18n_1.i18n)('aria-label'), className: b({ size, theme, disabled }, className), onClick: disabled ? undefined : onClick, disabled: disabled, "data-qa": qa },
        react_1.default.createElement(uikit_1.Icon, { data: icon, size: iconSize, qa: exports.defaultIconId })));
};
exports.default = Control;
