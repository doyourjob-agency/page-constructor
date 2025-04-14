"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../components");
const locationContext_1 = require("../../context/locationContext");
const theme_1 = require("../../context/theme");
const hooks_1 = require("../../hooks");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('icons-block');
const getItemContent = (item) => (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(components_1.Image, { className: b('image'), src: item.src }),
    react_1.default.createElement("p", { className: b('text') }, item.text)));
const Icons = ({ title, description, size = 's', colSizes = { all: 12 }, items }) => {
    const { hostname } = (0, react_1.useContext)(locationContext_1.LocationContext);
    const handleAnalytics = (0, hooks_1.useAnalytics)();
    const theme = (0, theme_1.useTheme)();
    const onClick = (0, react_1.useCallback)(({ analyticsEvents, url }) => {
        handleAnalytics(analyticsEvents, { url });
    }, [handleAnalytics]);
    return (react_1.default.createElement("div", { className: b({ size }) },
        (title || description) && (react_1.default.createElement(components_1.Title, { className: b('header'), title: title, subtitle: description, colSizes: colSizes })),
        items.map((item) => {
            const themedSrc = (0, utils_1.getThemedValue)(item.src, theme);
            const itemContent = getItemContent(Object.assign(Object.assign({}, item), { src: themedSrc }));
            const { url, text } = item;
            return url ? (react_1.default.createElement("a", Object.assign({ className: b('item'), key: url, href: url, "aria-label": text, title: text }, (0, utils_1.getLinkProps)(url, hostname), { onClick: () => onClick(item) }), itemContent)) : (react_1.default.createElement("div", { className: b('item'), key: text }, itemContent));
        })));
};
exports.default = Icons;
