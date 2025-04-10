"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumbs = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const HeaderBreadcrumbs_1 = tslib_1.__importDefault(require("../../../components/HeaderBreadcrumbs/HeaderBreadcrumbs"));
const grid_1 = require("../../../grid");
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('header-block-breadcrumbs');
const Breadcrumbs = ({ breadcrumbs, theme, }) => {
    if (!breadcrumbs)
        return null;
    return (react_1.default.createElement(grid_1.Row, { className: b() },
        react_1.default.createElement(grid_1.Col, null,
            react_1.default.createElement(HeaderBreadcrumbs_1.default, Object.assign({}, breadcrumbs, { theme: theme })))));
};
exports.Breadcrumbs = Breadcrumbs;
exports.default = exports.Breadcrumbs;
