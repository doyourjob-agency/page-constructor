"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const utils_1 = require("../../utils");
const Image_1 = tslib_1.__importDefault(require("../Image/Image"));
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('fullscreen-image');
const FULL_SCREEN_ICON_SIZE = 18;
const CLOSE_ICON_SIZE = 24;
const FullscreenImage = (props) => {
    const { imageClassName, modalImageClass, imageStyle, alt = (0, i18n_1.i18n)('img-alt'), extraProps } = props;
    const [isOpened, setIsOpened] = (0, react_1.useState)(false);
    const openModal = () => setIsOpened(true);
    const closeModal = () => setIsOpened(false);
    return (react_1.default.createElement("div", Object.assign({ className: b() }, extraProps),
        react_1.default.createElement("div", { className: b('image-wrapper') },
            react_1.default.createElement(Image_1.default, Object.assign({}, props, { alt: alt, className: b('image', imageClassName), onClick: openModal, style: imageStyle })),
            react_1.default.createElement("button", { className: b('icon-wrapper'), onClick: openModal },
                react_1.default.createElement(uikit_1.Icon, { data: icons_1.ChevronsExpandUpRight, width: FULL_SCREEN_ICON_SIZE, height: FULL_SCREEN_ICON_SIZE, className: b('icon') }))),
        isOpened && (react_1.default.createElement(uikit_1.Modal, { open: isOpened, onClose: closeModal, className: b('modal'), contentClassName: b('modal-content') },
            react_1.default.createElement("button", { className: b('icon-wrapper', { visible: true }), onClick: closeModal, "aria-label": (0, i18n_1.i18n)('close') },
                react_1.default.createElement(uikit_1.Icon, { data: icons_1.Xmark, width: CLOSE_ICON_SIZE, height: CLOSE_ICON_SIZE, className: b('icon', { hover: true }) })),
            react_1.default.createElement(Image_1.default, Object.assign({}, props, { className: b('modal-image', modalImageClass) }))))));
};
exports.default = FullscreenImage;
