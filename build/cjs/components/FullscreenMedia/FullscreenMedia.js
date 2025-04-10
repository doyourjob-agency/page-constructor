"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const mobileContext_1 = require("../../context/mobileContext");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('full-screen-media');
const FULL_SCREEN_ICON_SIZE = 18;
const CLOSE_ICON_SIZE = 24;
const getMediaClass = (type) => b('modal-media', { type });
const FullscreenMedia = ({ children, showFullscreenIcon = true }) => {
    const [isOpened, setIsOpened] = (0, react_1.useState)(false);
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const openModal = (e) => {
        e.stopPropagation();
        setIsOpened(true);
    };
    const closeModal = () => setIsOpened(false);
    if (isMobile) {
        return children();
    }
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement("div", { className: b('media-wrapper'), onClickCapture: openModal },
            children({ className: b('inline-media') }),
            showFullscreenIcon && (react_1.default.createElement(uikit_1.Button, { className: b('icon-wrapper'), extraProps: { onClickCapture: openModal }, size: 'l' },
                react_1.default.createElement(uikit_1.Icon, { data: icons_1.ChevronsExpandUpRight, width: FULL_SCREEN_ICON_SIZE, height: FULL_SCREEN_ICON_SIZE, className: b('icon') })))),
        isOpened && (react_1.default.createElement(uikit_1.Modal, { open: isOpened, onClose: closeModal, className: b('modal'), contentClassName: b('modal-content') },
            react_1.default.createElement(uikit_1.Button, { className: b('icon-wrapper', { visible: true }), onClick: closeModal, size: 'l' },
                react_1.default.createElement(uikit_1.Icon, { data: icons_1.Xmark, width: CLOSE_ICON_SIZE, height: CLOSE_ICON_SIZE, className: b('icon', { hover: true }) })),
            children({
                imageClassName: getMediaClass('image'),
                videoClassName: getMediaClass('video'),
                youtubeClassName: getMediaClass('youtube'),
                fullscreen: true,
                previewImg: undefined,
                autoplay: true,
            })))));
};
exports.default = FullscreenMedia;
