"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarqueeLinksBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const react_fast_marquee_1 = tslib_1.__importDefault(require("react-fast-marquee"));
const components_1 = require("../../components");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('marquee-links-block');
const MarqueeLinksBlock = ({ title, description, textAlign = 'left', speed = 10, items, }) => {
    const renderItem = (0, react_1.useCallback)((item) => {
        if (item.url) {
            return (react_1.default.createElement(uikit_1.Link, { key: item.src, href: item.url, extraProps: { tabIndex: -1 } },
                react_1.default.createElement(components_1.Image, { src: item.src, alt: "" })));
        }
        return react_1.default.createElement(components_1.Image, { src: item.src, key: item.src, alt: "" });
    }, []);
    if (!items.length)
        return null;
    return (react_1.default.createElement("div", { className: b({ [textAlign]: true }) },
        title && (react_1.default.createElement("div", { className: b('header') },
            react_1.default.createElement(uikit_1.Text, { variant: "display-2" }, title))),
        description && (react_1.default.createElement("div", { className: b('description') },
            react_1.default.createElement(uikit_1.Text, { variant: "body-2" },
                react_1.default.createElement(components_1.HTML, null, description)))),
        react_1.default.createElement(react_fast_marquee_1.default, { gradient: true, autoFill: true, speed: speed, className: b('items') }, items.map(renderItem))));
};
exports.MarqueeLinksBlock = MarqueeLinksBlock;
exports.default = exports.MarqueeLinksBlock;
