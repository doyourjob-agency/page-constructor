"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const locationContext_1 = require("../../context/locationContext");
const RouterLink = ({ href, children }) => {
    const { Link } = (0, react_1.useContext)(locationContext_1.LocationContext);
    return Link ? react_1.default.createElement(Link, { href: href }, children) : react_1.default.createElement(react_1.Fragment, null, children);
};
exports.default = RouterLink;
