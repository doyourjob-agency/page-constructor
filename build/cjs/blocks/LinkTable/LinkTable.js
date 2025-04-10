"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkTableBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../components");
const grid_1 = require("../../grid");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('link-table-block');
const colSizes = {
    lg: 4,
    md: 6,
    all: 12,
};
const LinkTableBlock = ({ title, items }) => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(components_1.Title, { title: title }),
    react_1.default.createElement(grid_1.Row, { className: b('links') }, items.map((links) => (react_1.default.createElement(grid_1.Col, { key: links.map((link) => link.url).join(), sizes: colSizes }, links.map((link) => (react_1.default.createElement(components_1.Link, Object.assign({ key: link.url, theme: "normal" }, link))))))))));
exports.LinkTableBlock = LinkTableBlock;
exports.default = exports.LinkTableBlock;
