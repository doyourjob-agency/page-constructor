"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const AnimateBlock_1 = tslib_1.__importDefault(require("../../components/AnimateBlock/AnimateBlock"));
const ButtonTabs_1 = tslib_1.__importDefault(require("../../components/ButtonTabs/ButtonTabs"));
const FullscreenImage_1 = tslib_1.__importDefault(require("../../components/FullscreenImage/FullscreenImage"));
const utils_1 = require("../../components/Media/Image/utils");
const Media_1 = tslib_1.__importDefault(require("../../components/Media/Media"));
const Title_1 = tslib_1.__importDefault(require("../../components/Title/Title"));
const VideoBlock_1 = require("../../components/VideoBlock/VideoBlock");
const YFMWrapper_1 = tslib_1.__importDefault(require("../../components/YFMWrapper/YFMWrapper"));
const theme_1 = require("../../context/theme");
const grid_1 = require("../../grid");
const utils_2 = require("../../utils");
const microdata_1 = require("../../utils/microdata");
const TabsTextContent_1 = tslib_1.__importDefault(require("./TabsTextContent/TabsTextContent"));
const b = (0, utils_2.block)('tabs-block');
const TabsBlock = ({ items, title, description, animated, tabsColSizes, centered, direction = 'media-content', contentSize = 's', }) => {
    var _a, _b;
    const [activeTab, setActiveTab] = (0, react_1.useState)(items[0].tabName);
    const [play, setPlay] = (0, react_1.useState)(false);
    const theme = (0, theme_1.useTheme)();
    const tabs = items.map(({ tabName }) => ({ title: tabName, id: tabName }));
    const activeTabData = items.find(({ tabName }) => tabName === activeTab);
    const isReverse = direction === 'content-media';
    const ref = (0, react_1.useRef)(null);
    const mediaWidth = (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.offsetWidth;
    const captionId = (0, uikit_1.useUniqId)();
    const themedMedia = (0, utils_2.getThemedValue)(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.media, theme);
    const hasNoImage = !(themedMedia === null || themedMedia === void 0 ? void 0 : themedMedia.image) && !(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.image);
    const mediaVideoHeight = hasNoImage && mediaWidth && (0, VideoBlock_1.getHeight)(mediaWidth);
    const [minImageHeight, setMinImageHeight] = (0, react_1.useState)((_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.offsetHeight);
    // TODO remove property support activeTabData?.image. Use only activeTabData?.media?.image
    let imageProps;
    const handleImageHeight = (0, react_1.useCallback)(() => {
        var _a, _b;
        if (minImageHeight !== ((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.offsetHeight)) {
            setMinImageHeight((_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.offsetHeight);
        }
    }, [minImageHeight]);
    const onSelectTab = (0, react_1.useCallback)((id, e) => {
        setActiveTab(id);
        e.currentTarget.scrollIntoView({
            inline: 'center',
            behavior: 'smooth',
            block: 'nearest',
        });
    }, []);
    (0, react_1.useEffect)(() => {
        handleImageHeight();
    }, [activeTab, handleImageHeight]);
    if (activeTabData) {
        const themedImage = (0, utils_2.getThemedValue)(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.image, theme);
        imageProps = themedImage && (0, utils_1.getMediaImage)(themedImage);
        if (activeTabData.caption && imageProps) {
            Object.assign(imageProps, {
                'aria-describedby': captionId,
            });
        }
    }
    const showMedia = Boolean((activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.media) || imageProps);
    const showText = Boolean(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.text);
    const border = (activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.border) || 'shadow';
    const textContent = showText && (react_1.default.createElement(TabsTextContent_1.default, { showMedia: showMedia, data: activeTabData, imageProps: imageProps ? imageProps : undefined, isReverse: isReverse, contentSize: contentSize, centered: centered }));
    const mediaContent = showMedia && (react_1.default.createElement(grid_1.Col, { sizes: { all: 12, md: 8 }, orders: {
            all: grid_1.GridColumnOrderClasses.Last,
            md: grid_1.GridColumnOrderClasses.First,
        }, className: b('col', { centered: centered }) },
        (activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.media) && (react_1.default.createElement("div", { style: { minHeight: mediaVideoHeight || minImageHeight } },
            react_1.default.createElement("div", { ref: ref },
                react_1.default.createElement(Media_1.default, Object.assign({}, (0, microdata_1.mergeVideoMicrodata)((0, utils_2.getThemedValue)(activeTabData.media, theme), {
                    name: activeTabData.tabName,
                    description: activeTabData.caption
                        ? activeTabData.caption
                        : undefined,
                }), { key: activeTab, className: b('media', { border }), playVideo: play, height: mediaVideoHeight || undefined, onImageLoad: handleImageHeight }))))),
        imageProps && (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement(FullscreenImage_1.default, Object.assign({}, imageProps, { imageClassName: b('image', { border }) })))),
        (activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.caption) && (react_1.default.createElement("p", { className: b('caption'), id: captionId },
            react_1.default.createElement(YFMWrapper_1.default, { content: activeTabData.caption, modifiers: { constructor: true }, id: captionId })))));
    return (react_1.default.createElement(AnimateBlock_1.default, { className: b(), onScroll: () => setPlay(true), animate: animated },
        react_1.default.createElement(Title_1.default, { title: title, subtitle: description, className: b('title', { centered: centered }) }),
        react_1.default.createElement(grid_1.Row, null,
            react_1.default.createElement(grid_1.Col, { sizes: tabsColSizes },
                react_1.default.createElement(ButtonTabs_1.default, { items: tabs, onSelectTab: onSelectTab, activeTab: activeTab, className: b('tabs', { centered: centered }) }))),
        activeTabData && (react_1.default.createElement(grid_1.Row, { className: b('row', { reverse: isReverse }) },
            mediaContent,
            textContent))));
};
exports.TabsBlock = TabsBlock;
exports.default = exports.TabsBlock;
