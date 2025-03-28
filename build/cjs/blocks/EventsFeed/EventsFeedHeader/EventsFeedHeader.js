"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsFeedHeader = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../../components");
const grid_1 = require("../../../grid");
const utils_1 = require("../../../utils");
const EventsFeedHeaderControls_1 = tslib_1.__importDefault(require("./EventsFeedHeaderControls/EventsFeedHeaderControls"));
const b = (0, utils_1.block)('events-feed-header');
const EventsFeedHeader = ({ title, online, types, image, handleLoadData, queryParams, }) => (react_1.default.createElement("div", { className: b() },
    react_1.default.createElement(grid_1.Grid, { className: b('content') },
        image && react_1.default.createElement(components_1.BackgroundImage, { src: image, className: b('background') }),
        react_1.default.createElement(EventsFeedHeaderControls_1.default, { title: title, online: online, types: types, handleLoadData: handleLoadData, queryParams: queryParams }))));
exports.EventsFeedHeader = EventsFeedHeader;
exports.default = exports.EventsFeedHeader;
