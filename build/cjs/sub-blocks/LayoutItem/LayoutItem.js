"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const components_1 = require("../../components");
const theme_1 = require("../../context/theme");
const utils_1 = require("../../utils");
const microdata_1 = require("../../utils/microdata");
const Content_1 = tslib_1.__importDefault(require("../Content/Content"));
const utils_2 = require("./utils");
const b = (0, utils_1.block)('layout-item');
const LayoutItem = (_a) => {
    var { title, afterTitle, rightSpace = false } = _a, _b = _a.content, { links } = _b, content = tslib_1.__rest(_b, ["links"]), { metaInfo, media, border, fullscreen, icon, className, analyticsEvents, controlPosition = 'content' } = _a;
    const normalizedLinks = (0, react_1.useMemo)(() => (0, utils_2.getLayoutItemLinks)(links), [links]);
    const areControlsInFooter = controlPosition === 'footer';
    const theme = (0, theme_1.useTheme)();
    const themedIcon = (0, utils_1.getThemedValue)(icon, theme);
    const contentProps = Object.assign(Object.assign({ controlPosition: areControlsInFooter ? 'bottom' : 'default' }, content), { links: normalizedLinks, size: 's', colSizes: { all: 12, md: 12 } });
    const titleId = (0, uikit_1.useUniqId)();
    const renderMedia = () => {
        var _a;
        if (!media) {
            return null;
        }
        const themedMedia = (0, utils_1.getThemedValue)(media, theme);
        const mediaWithMicrodata = (0, microdata_1.mergeVideoMicrodata)(themedMedia, {
            name: typeof content.title === 'string' ? content.title : (_a = content.title) === null || _a === void 0 ? void 0 : _a.text,
            description: content.text,
        });
        return fullscreen && (0, utils_2.hasFullscreen)(themedMedia) ? (react_1.default.createElement(components_1.FullscreenMedia, { showFullscreenIcon: (0, utils_2.showFullscreenIcon)(themedMedia) }, (_a = {}) => {
            var { className: mediaClassName, fullscreen: _fullscreen } = _a, fullscreenMediaProps = tslib_1.__rest(_a, ["className", "fullscreen"]);
            return (react_1.default.createElement(components_1.Media, Object.assign({}, mediaWithMicrodata, fullscreenMediaProps, { className: b('media', { border }, mediaClassName), analyticsEvents: analyticsEvents })));
        })) : (react_1.default.createElement(components_1.Media, Object.assign({}, themedMedia, { className: b('media', { border }), analyticsEvents: analyticsEvents })));
    };
    return (react_1.default.createElement("div", { className: b({ right: rightSpace }, className) },
        (title || afterTitle) && (react_1.default.createElement("div", { className: b('wrap') },
            title && (react_1.default.createElement("span", { className: b('title', { size: (title === null || title === void 0 ? void 0 : title.size) || 'm' }) }, title === null || title === void 0 ? void 0 : title.text)),
            afterTitle && (react_1.default.createElement("span", { className: b('afterTitle', { size: (afterTitle === null || afterTitle === void 0 ? void 0 : afterTitle.size) || 'm' }) }, afterTitle === null || afterTitle === void 0 ? void 0 : afterTitle.text)))),
        renderMedia(),
        metaInfo && react_1.default.createElement(components_1.MetaInfo, { items: metaInfo, className: b('meta-info') }),
        react_1.default.createElement("div", { className: b('content', { 'no-media': !media }) },
            react_1.default.createElement(components_1.IconWrapper, { icon: themedIcon, className: b('wrapper') },
                react_1.default.createElement(Content_1.default, Object.assign({}, contentProps, { titleId: titleId }))))));
};
exports.default = LayoutItem;
