"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentLayoutBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../components");
const mobileContext_1 = require("../../context/mobileContext");
const theme_1 = require("../../context/theme");
const grid_1 = require("../../grid");
const sub_blocks_1 = require("../../sub-blocks");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('content-layout-block');
function getFileTextSize(size) {
    switch (size) {
        case 's':
            return 's';
        case 'l':
        default:
            return 'l';
    }
}
function getTextWidth(size) {
    switch (size) {
        case 's':
            return { all: 12, md: 6 };
        case 'l':
            return { all: 12, md: 12 };
        case 'm':
        default:
            return { all: 12, md: 8 };
    }
}
const ContentLayoutBlock = (props) => {
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const { textContent, fileContent, size = 'l', background, centered, theme = 'default', textWidth = 'm', } = props;
    const colSizes = (0, react_1.useMemo)(() => getTextWidth(textWidth), [textWidth]);
    const globalTheme = (0, theme_1.useTheme)();
    const themedBackground = (0, utils_1.getThemedValue)(background, globalTheme);
    return (react_1.default.createElement("div", { className: b({ size, theme, background: Boolean(background) }) },
        react_1.default.createElement(sub_blocks_1.Content, Object.assign({ className: b('content') }, textContent, { size: size, centered: centered, colSizes: colSizes, theme: theme })),
        fileContent && (react_1.default.createElement(grid_1.Col, { className: b('files', { size, centered }), reset: true, sizes: colSizes }, fileContent.map((file) => (react_1.default.createElement(components_1.FileLink, Object.assign({ className: b('file') }, file, { key: file.href, type: "horizontal", textSize: getFileTextSize(size), theme: theme })))))),
        background && (react_1.default.createElement("div", { className: b('background') },
            react_1.default.createElement(components_1.BackgroundImage, Object.assign({ className: b('background-item') }, themedBackground, { hide: isMobile }))))));
};
exports.ContentLayoutBlock = ContentLayoutBlock;
exports.default = exports.ContentLayoutBlock;
