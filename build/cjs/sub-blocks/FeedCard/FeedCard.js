"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedCard = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../components");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('feed-card');
const FeedCard = ({ url, image, title, type, description, info, place }) => (react_1.default.createElement(components_1.CardBase, { url: url, className: b() },
    react_1.default.createElement(components_1.CardBase.Header, { className: b('header') }, image && (react_1.default.createElement(components_1.Image, { src: image, className: b('image'), alt: "", extraProps: { 'aria-hidden': 'true' } }))),
    react_1.default.createElement(components_1.CardBase.Content, null,
        type && react_1.default.createElement("div", { className: b('type') }, type),
        title && (react_1.default.createElement("h3", { className: b('title') },
            react_1.default.createElement(components_1.HTML, null, title))),
        description && react_1.default.createElement(components_1.YFMWrapper, { className: b('description'), content: description })),
    react_1.default.createElement(components_1.CardBase.Footer, { className: b('footer') },
        react_1.default.createElement("div", { className: b('info') }, info),
        react_1.default.createElement("div", { className: b('place') }, place))));
exports.FeedCard = FeedCard;
exports.default = react_1.default.memo(exports.FeedCard);
