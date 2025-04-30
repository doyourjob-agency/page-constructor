"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AnimateBlock_1 = tslib_1.__importDefault(require("../../components/AnimateBlock/AnimateBlock"));
const BalancedMasonry_1 = tslib_1.__importDefault(require("../../components/BalancedMasonry/BalancedMasonry"));
const FullWidthBackground_1 = tslib_1.__importDefault(require("../../components/FullWidthBackground/FullWidthBackground"));
const Media_1 = tslib_1.__importDefault(require("../../components/Media/Media"));
const Title_1 = tslib_1.__importDefault(require("../../components/Title/Title"));
const YFMWrapper_1 = tslib_1.__importDefault(require("../../components/YFMWrapper/YFMWrapper"));
const constants_1 = require("../../constants");
const theme_1 = require("../../context/theme");
const utils_1 = require("../../utils");
const microdata_1 = require("../../utils/microdata");
const b = (0, utils_1.block)('PromoFeaturesBlock');
const breakpointColumns = {
    [constants_1.BREAKPOINTS.lg]: 3,
    [constants_1.BREAKPOINTS.md]: 2,
    [constants_1.BREAKPOINTS.sm]: 1,
};
const PromoFeaturesBlock = (props) => {
    const { items, title, description, theme, animated = true } = props;
    const backgroundTheme = theme || 'default';
    const globalTheme = (0, theme_1.useTheme)();
    return (react_1.default.createElement(AnimateBlock_1.default, { className: b({ [backgroundTheme]: true }), animate: animated },
        react_1.default.createElement(FullWidthBackground_1.default, { className: b('background', { [backgroundTheme]: true }) }),
        react_1.default.createElement(Title_1.default, { title: title, subtitle: description, className: b('header') }),
        react_1.default.createElement(BalancedMasonry_1.default, { breakpointCols: breakpointColumns, className: b('card-container'), columnClassName: b('card-container-column') }, items.map(({ title: cardTitle, text, media, theme: cardTheme }, index) => {
            const blockModifier = backgroundTheme === 'default' ? 'default' : 'light';
            const themeMod = cardTheme || blockModifier || '';
            const themedMedia = (0, utils_1.getThemedValue)(media, globalTheme);
            const allProps = (0, microdata_1.mergeVideoMicrodata)(themedMedia, {
                name: cardTitle,
                description: text,
            });
            return (react_1.default.createElement("div", { key: index, className: b('card', {
                    'no-media': !media,
                    [themeMod]: Boolean(themeMod),
                }) },
                react_1.default.createElement("div", { className: b('card-info') },
                    react_1.default.createElement("h3", { className: b('card-title') }, cardTitle),
                    react_1.default.createElement("div", { className: b('card-text') },
                        react_1.default.createElement(YFMWrapper_1.default, { content: text, modifiers: { constructor: true } }))),
                media && react_1.default.createElement(Media_1.default, Object.assign({ className: b('card-media') }, allProps))));
        }))));
};
exports.default = PromoFeaturesBlock;
