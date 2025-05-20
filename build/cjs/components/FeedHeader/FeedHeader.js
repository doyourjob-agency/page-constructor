"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedHeader = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../components");
const grid_1 = require("../../grid");
const utils_1 = require("../../utils");
const Controls_1 = tslib_1.__importDefault(require("./Controls/Controls"));
const b = (0, utils_1.block)('feed-header');
const FeedHeader = ({ title, image }) => {
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement(grid_1.Grid, { className: b('content') },
            image && react_1.default.createElement(components_1.BackgroundImage, { src: image, className: b('background') }),
            react_1.default.createElement(Controls_1.default, { title: title }))));
};
exports.FeedHeader = FeedHeader;
exports.default = react_1.default.memo(exports.FeedHeader);
