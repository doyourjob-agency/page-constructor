"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const components_1 = require("../../components");
const TimeIcon_1 = require("../../icons/TimeIcon");
const models_1 = require("../../models");
const cn_1 = require("../../utils/cn");
const i18n_1 = require("./i18n");
const ICON_SIZE = 16;
const b = (0, cn_1.block)('post-card');
const PostCard = ({ title, date, readingTime, image, description, tags, url, fullWidth = false, size = models_1.PostCardSize.SMALL, showTag = false, titleHeadingLevel = models_1.PostCardTitleHeadingLevel.H3, }) => {
    var _a;
    const titleId = (0, uikit_1.useUniqId)();
    const descriptionId = (0, uikit_1.useUniqId)();
    const isTagVisible = showTag && ((_a = tags === null || tags === void 0 ? void 0 : tags[0]) === null || _a === void 0 ? void 0 : _a.name);
    return (react_1.default.createElement(components_1.CardBase, { url: url, className: b('card', { fullWidth }) },
        react_1.default.createElement(components_1.CardBase.Header, { image: image, imageExtraProps: { 'aria-hidden': 'true' }, className: b('header', { fullWidth }) },
            react_1.default.createElement("div", { className: b('image-container'), "data-qa": "blog-suggest-header" })),
        react_1.default.createElement(components_1.CardBase.Content, null,
            isTagVisible && react_1.default.createElement("div", { className: b('tag', { size }) }, tags[0].name),
            title &&
                react_1.default.createElement(titleHeadingLevel, { className: b('title', { size }) }, react_1.default.createElement("span", null,
                    react_1.default.createElement(components_1.HTML, { id: titleId }, title))),
            description && (react_1.default.createElement(components_1.YFMWrapper, { className: b('description'), content: description, modifiers: {
                    blog: size === 'm',
                    blogCard: true,
                }, id: descriptionId }))),
        react_1.default.createElement(components_1.CardBase.Footer, null,
            react_1.default.createElement("div", { className: b('container') },
                react_1.default.createElement("div", { className: b('suggest-container') },
                    date && react_1.default.createElement("div", { className: b('item', { size }) }, date),
                    readingTime && (react_1.default.createElement("div", { className: b('item', { size }) },
                        react_1.default.createElement("span", { className: b('icon') },
                            react_1.default.createElement(uikit_1.Icon, { data: TimeIcon_1.TimeIcon, size: ICON_SIZE, className: b('icon-color') })),
                        (0, i18n_1.i18n)('reading_time', { count: readingTime }))))))));
};
exports.default = react_1.default.memo(PostCard);
