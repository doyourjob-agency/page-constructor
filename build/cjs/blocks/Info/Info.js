"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const theme_1 = require("../../context/theme");
const grid_1 = require("../../grid");
const Content_1 = tslib_1.__importDefault(require("../../sub-blocks/Content/Content"));
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('info-block');
const sizes = { md: 6, all: 12 };
const InfoBlock = (props) => {
    const { backgroundColor, theme: blockTheme = 'dark', buttons = [], title, sectionsTitle, links = [], rightContent = {}, leftContent = {}, } = props;
    const theme = (0, theme_1.useTheme)();
    const contentTheme = blockTheme === 'dark' ? 'dark' : 'default';
    const rightLinks = [
        ...((rightContent === null || rightContent === void 0 ? void 0 : rightContent.links) || []),
        ...links.map((link) => (Object.assign(Object.assign({}, link), { arrow: true, theme: 'normal' }))),
    ];
    const leftButtons = [...buttons, ...((leftContent === null || leftContent === void 0 ? void 0 : leftContent.buttons) || [])];
    const commonProps = {
        colSizes: { all: 12, md: 12 },
        className: b('content'),
        theme: contentTheme,
    };
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement("div", { className: b('container'), style: { backgroundColor: (0, utils_1.getThemedValue)(backgroundColor, theme) } },
            react_1.default.createElement(grid_1.Grid, null,
                react_1.default.createElement(grid_1.Row, null,
                    react_1.default.createElement(grid_1.Col, { sizes: sizes, className: b('left') },
                        react_1.default.createElement(Content_1.default, Object.assign({ title: title || (leftContent === null || leftContent === void 0 ? void 0 : leftContent.title), text: leftContent === null || leftContent === void 0 ? void 0 : leftContent.text, links: leftContent === null || leftContent === void 0 ? void 0 : leftContent.links, list: leftContent === null || leftContent === void 0 ? void 0 : leftContent.list, buttons: leftButtons, additionalInfo: leftContent === null || leftContent === void 0 ? void 0 : leftContent.additionalInfo }, commonProps))),
                    react_1.default.createElement(grid_1.Col, { sizes: sizes, className: b('right') },
                        react_1.default.createElement(Content_1.default, Object.assign({ title: sectionsTitle || (rightContent === null || rightContent === void 0 ? void 0 : rightContent.title), text: rightContent === null || rightContent === void 0 ? void 0 : rightContent.text, links: rightLinks, list: rightContent === null || rightContent === void 0 ? void 0 : rightContent.list, buttons: rightContent === null || rightContent === void 0 ? void 0 : rightContent.buttons, additionalInfo: rightContent === null || rightContent === void 0 ? void 0 : rightContent.additionalInfo }, commonProps))))))));
};
exports.InfoBlock = InfoBlock;
exports.default = exports.InfoBlock;
