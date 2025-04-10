"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackButton = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const grid_1 = require("../../../grid");
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('header-block-back-button');
const BackButton = ({ backButton, theme, }) => {
    if (!backButton)
        return null;
    return (react_1.default.createElement(grid_1.Row, null,
        react_1.default.createElement(grid_1.Col, null,
            react_1.default.createElement(uikit_1.Button, { href: backButton.link, size: "l", view: "flat-secondary", className: b('back-link', { theme }) },
                react_1.default.createElement(uikit_1.Icon, { data: icons_1.ArrowLeft, size: 20 }),
                backButton.text))));
};
exports.BackButton = BackButton;
exports.default = exports.BackButton;
