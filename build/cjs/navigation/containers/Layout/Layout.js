"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../../utils");
const Navigation_1 = tslib_1.__importDefault(require("../../components/Navigation/Navigation"));
const b = (0, utils_1.block)('layout');
const Layout = ({ children, navigation }) => (react_1.default.createElement("div", { className: b() },
    navigation &&
        (navigation.renderNavigation ? (navigation.renderNavigation()) : (react_1.default.createElement(Navigation_1.default, { data: navigation.header, logo: navigation.logo, className: b('navigation') }))),
    react_1.default.createElement("main", { className: b('content') }, children)));
exports.default = Layout;
