"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrowSize = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const __1 = require("../");
const locationContext_1 = require("../../context/locationContext");
const mobileContext_1 = require("../../context/mobileContext");
const utils_1 = require("../../utils");
const Anchor_1 = tslib_1.__importDefault(require("../Anchor/Anchor"));
const b = (0, utils_1.block)('title-item');
function getArrowSize(size, isMobile) {
    switch (size) {
        case 'xs':
            return 13;
        case 's':
            return 16;
        case 'm':
            return isMobile ? 22 : 24;
        case 'l':
            return isMobile ? 26 : 38;
        case 'xl':
            return isMobile ? 26 : 38;
        default:
            return 20;
    }
}
exports.getArrowSize = getArrowSize;
const TitleItem = (props) => {
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const { textSize = 'm', text, anchor, justify, url, onClick, custom, className, qa, resetMargin = true, urlTitle, } = props;
    const { hostname } = (0, react_1.useContext)(locationContext_1.LocationContext);
    const textMarkup = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.HTML, { className: b('text') }, text),
        custom && (react_1.default.createElement(react_1.default.Fragment, null,
            "\u00A0",
            react_1.default.createElement("span", { className: b('custom') }, custom)))));
    let content;
    const insideClickableContent = (react_1.default.createElement("span", { className: b('wrapper') },
        textMarkup,
        "\u00A0",
        react_1.default.createElement(__1.ToggleArrow, { className: b('arrow', { size: textSize }), size: getArrowSize(textSize, isMobile), type: 'horizontal', iconType: "navigation", open: false })));
    if (!url && !onClick) {
        content = textMarkup;
    }
    else if (url) {
        content = (react_1.default.createElement("a", Object.assign({ className: b('link'), href: url }, (0, utils_1.getLinkProps)(url, hostname), { onClick: onClick, title: urlTitle }), insideClickableContent));
    }
    else if (onClick) {
        content = (react_1.default.createElement("button", { className: b('link'), onClick: onClick, title: urlTitle }, insideClickableContent));
    }
    return (react_1.default.createElement(react_1.Fragment, null,
        anchor && react_1.default.createElement(Anchor_1.default, { id: anchor, className: b('anchor') }),
        react_1.default.createElement((0, utils_1.getHeaderTag)(textSize), {
            className: b({ size: textSize, justify, 'reset-margin': resetMargin }, className),
            'data-qa': `${qa}-header`,
        }, content)));
};
exports.default = TitleItem;
