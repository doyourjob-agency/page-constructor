"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationButton = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../../../../components");
const blockIdContext_1 = require("../../../../../context/blockIdContext");
const utils_1 = require("../../../../../utils");
const b = (0, utils_1.block)('navigation-button');
const ANALYTICS_ID = 'navigation';
const NavigationButton = (props) => {
    const { url, target, className } = props;
    const classes = b(null, className);
    return (react_1.default.createElement(blockIdContext_1.BlockIdContext.Provider, { value: ANALYTICS_ID }, target ? (react_1.default.createElement(components_1.Button, Object.assign({ className: classes }, props, { url: url }))) : (react_1.default.createElement(components_1.RouterLink, { href: url },
        react_1.default.createElement(components_1.Button, Object.assign({}, props, { className: classes, url: url }))))));
};
exports.NavigationButton = NavigationButton;
