"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../components");
const utils_1 = require("../../components/Media/Image/utils");
const theme_1 = require("../../context/theme");
const hooks_1 = require("../../hooks");
const models_1 = require("../../models");
const utils_2 = require("../../utils");
const b = (0, utils_2.block)('quote');
const Quote = (props) => {
    const { theme: textTheme = 'light', color, image, border = 'shadow', text, yfmText, logo, author, url, urlTitle, buttonText, quoteType = models_1.QuoteType.Chevron, button, } = props;
    const theme = (0, theme_1.useTheme)();
    const imageThemed = (0, utils_2.getThemedValue)(image, theme);
    const imageData = (0, utils_1.getMediaImage)(imageThemed);
    const handleAnalytics = (0, hooks_1.useAnalytics)(models_1.DefaultEventNames.QuoteButton, url);
    const handleButtonClick = (0, react_1.useCallback)(() => handleAnalytics(), [handleAnalytics]);
    const themedAuthor = author
        ? Object.assign(Object.assign({}, author), { avatar: (0, utils_2.getThemedValue)(author.avatar, theme) })
        : author;
    const renderFooter = Boolean(author || url) && (react_1.default.createElement("div", { className: b('author-wrapper') },
        themedAuthor && (react_1.default.createElement(components_1.Author, { className: b('author', { theme: textTheme }), author: themedAuthor, type: models_1.AuthorType.Line, theme: textTheme })),
        url && buttonText && !button && (react_1.default.createElement(components_1.Button, { theme: "outlined", size: "xl", url: url, className: b('link-button', { theme: textTheme }), onClick: handleButtonClick, urlTitle: urlTitle, text: buttonText })),
        button && react_1.default.createElement(components_1.Button, Object.assign({ size: "xl" }, button))));
    const themedLogoProps = (0, utils_2.getThemedValue)(logo, theme);
    const logoProps = (0, utils_1.getMediaImage)(themedLogoProps);
    return (react_1.default.createElement("div", { className: b({ theme: textTheme, border }), style: color ? { backgroundColor: color } : {} },
        react_1.default.createElement("div", { key: text, className: b('content-wrapper') },
            react_1.default.createElement("div", null,
                react_1.default.createElement(components_1.Image, Object.assign({ className: b('logo') }, logoProps)),
                react_1.default.createElement("div", { className: b('content', { 'quote-type': quoteType }) },
                    text && (react_1.default.createElement("span", { className: b('text') },
                        react_1.default.createElement(components_1.HTML, null, text))),
                    yfmText && (react_1.default.createElement(components_1.YFMWrapper, { className: b('text'), content: yfmText, modifiers: { constructor: true } })))),
            renderFooter),
        react_1.default.createElement("div", { className: b('image-wrapper') },
            react_1.default.createElement(components_1.Image, Object.assign({}, imageData, { className: b('image') })))));
};
exports.default = Quote;
