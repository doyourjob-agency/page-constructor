"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const components_1 = require("../../components");
const HeaderBreadcrumbs_1 = tslib_1.__importDefault(require("../../components/HeaderBreadcrumbs/HeaderBreadcrumbs"));
const utils_1 = require("../../components/Media/Image/utils");
const YFMWrapper_1 = tslib_1.__importDefault(require("../../components/YFMWrapper/YFMWrapper"));
const mobileContext_1 = require("../../context/mobileContext");
const pageHelperContext_1 = require("../../context/pageHelperContext");
const theme_1 = require("../../context/theme");
const grid_1 = require("../../grid");
const utils_2 = require("../../utils");
const HeaderTags_1 = tslib_1.__importDefault(require("./HeaderTags/HeaderTags"));
const i18n_1 = require("./i18n");
const utils_3 = require("./utils");
const b = (0, utils_2.block)('header-block');
const Background = ({ background, isMobile }) => {
    const { url, image, fullWidthMedia, video, color } = background;
    const imageObject = url ? (0, utils_1.getMediaImage)(url) : image;
    const renderMedia = !isMobile || (typeof image === 'object' && 'mobile' in image);
    return (react_1.default.createElement("div", { className: b('background', { media: true, 'full-width-media': fullWidthMedia }), style: { backgroundColor: color } }, renderMedia && (react_1.default.createElement(components_1.Media, Object.assign({}, background, { className: b('background-media'), imageClassName: b('image'), videoClassName: b('video'), isBackground: true, parallax: false, video: isMobile ? undefined : video, image: imageObject })))));
};
const FullWidthBackground = ({ background }) => (react_1.default.createElement("div", { className: b('background', { ['full-width']: true }), style: { backgroundColor: background === null || background === void 0 ? void 0 : background.color } }));
const BackButton = ({ isSolutionPage, theme }) => {
    if (!isSolutionPage)
        return null;
    return (react_1.default.createElement(grid_1.Row, null,
        react_1.default.createElement(grid_1.Col, null,
            react_1.default.createElement(uikit_1.Button, { href: "/solutions", size: "l", view: "flat-secondary", className: b('back-link', { theme }) },
                react_1.default.createElement(uikit_1.Icon, { data: icons_1.ArrowLeft, size: 20 }),
                (0, i18n_1.i18n)('all_solutions')))));
};
const Breadcrumbs = ({ breadcrumbs, theme, }) => {
    if (!breadcrumbs)
        return null;
    return (react_1.default.createElement(grid_1.Row, { className: b('breadcrumbs') },
        react_1.default.createElement(grid_1.Col, null,
            react_1.default.createElement(HeaderBreadcrumbs_1.default, Object.assign({}, breadcrumbs, { theme: theme })))));
};
const HeaderBlock = (props) => {
    const { title, topTags, bottomTags, overtitle, description, buttons, image, video, width = 'm', imageSize, offset = 'default', background, theme: textTheme = 'light', verticalOffset = 'm', className, breadcrumbs, status, renderTitle, children, mediaView = 'full', } = props;
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const { isSolutionPage, headerBlockTag } = (0, react_1.useContext)(pageHelperContext_1.PageHelperContext);
    const theme = (0, theme_1.useTheme)();
    const hasRightSideImage = Boolean(image || video);
    const curImageSize = imageSize || (0, utils_3.getImageSize)(width);
    const titleSizes = hasRightSideImage ? (0, utils_3.titleWithImageSizes)(curImageSize) : (0, utils_3.getTitleSizes)(width);
    let curVerticalOffset = verticalOffset;
    if (hasRightSideImage && !verticalOffset) {
        curVerticalOffset = 'm';
    }
    const backgroundThemed = background && (0, utils_2.getThemedValue)(background, theme);
    const imageThemed = image && (0, utils_2.getThemedValue)(image, theme);
    const videoThemed = video && (0, utils_2.getThemedValue)(video, theme);
    const fullWidth = (backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.fullWidth) || (backgroundThemed === null || backgroundThemed === void 0 ? void 0 : backgroundThemed.fullWidthMedia);
    const titleId = (0, uikit_1.useUniqId)();
    return (react_1.default.createElement("header", { className: b({
            ['has-media']: hasRightSideImage,
            ['full-width']: fullWidth,
            ['media-view']: mediaView,
            ['controls-view']: textTheme,
        }, className) },
        backgroundThemed && fullWidth && react_1.default.createElement(FullWidthBackground, { background: backgroundThemed }),
        backgroundThemed && react_1.default.createElement(Background, { background: backgroundThemed, isMobile: isMobile }),
        react_1.default.createElement(grid_1.Grid, { containerClass: b('container-fluid') },
            react_1.default.createElement(Breadcrumbs, { breadcrumbs: breadcrumbs, theme: textTheme }),
            react_1.default.createElement(BackButton, { isSolutionPage: isSolutionPage && verticalOffset !== '0' && !breadcrumbs, theme: textTheme }),
            react_1.default.createElement(grid_1.Row, null,
                react_1.default.createElement(grid_1.Col, { reset: true, className: b('content-wrapper') },
                    react_1.default.createElement(grid_1.Row, null,
                        react_1.default.createElement(grid_1.Col, { className: b('content', {
                                offset,
                                theme: textTheme,
                                'vertical-offset': curVerticalOffset,
                            }) },
                            react_1.default.createElement(HeaderTags_1.default, { theme: textTheme, tags: topTags, className: b('tags', { top: true }) }),
                            react_1.default.createElement(grid_1.Col, { sizes: titleSizes, className: b('content-inner') },
                                overtitle && (react_1.default.createElement("div", { className: b('overtitle') },
                                    react_1.default.createElement(components_1.HTML, null, overtitle))),
                                react_1.default.createElement("h1", { className: b('title'), id: titleId, "data-tag": headerBlockTag },
                                    status,
                                    renderTitle ? renderTitle(title) : react_1.default.createElement(components_1.HTML, null, title)),
                                description && (react_1.default.createElement("div", { className: b('description', { theme: textTheme }) },
                                    react_1.default.createElement(YFMWrapper_1.default, { content: description, modifiers: {
                                            constructor: true,
                                            constructorTheme: textTheme,
                                        } }))),
                                buttons && (react_1.default.createElement("div", { className: b('buttons'), "data-qa": "header-buttons" }, buttons.map((button, index) => (react_1.default.createElement(components_1.RouterLink, { href: button.url, key: index },
                                    react_1.default.createElement(components_1.Button, Object.assign({ key: index, className: b('button'), size: "xl", extraProps: Object.assign({ 'aria-describedby': titleId }, button.extraProps) }, button))))))),
                                children),
                            react_1.default.createElement(HeaderTags_1.default, { theme: textTheme, tags: bottomTags, className: b('tags', { bottom: true }) }))),
                    hasRightSideImage && (react_1.default.createElement(components_1.Media, { className: b('media', { [curImageSize]: true }), videoClassName: b('video'), imageClassName: b('image'), video: videoThemed, image: imageThemed })))))));
};
exports.HeaderBlock = HeaderBlock;
exports.default = exports.HeaderBlock;
