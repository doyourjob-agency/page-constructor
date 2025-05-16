import React, { useState } from 'react';
import { ChevronsExpandUpRight, Xmark } from '@gravity-ui/icons';
import { Icon, Modal } from '@gravity-ui/uikit';
import { block } from '../../utils';
import Image from '../Image/Image';
import { i18n } from './i18n';
import './FullscreenImage.css';
const b = block('fullscreen-image');
const FULL_SCREEN_ICON_SIZE = 18;
const CLOSE_ICON_SIZE = 24;
const FullscreenImage = (props) => {
    const { imageClassName, modalImageClass, imageStyle, alt = i18n('img-alt'), extraProps } = props;
    const [isOpened, setIsOpened] = useState(false);
    const openModal = () => setIsOpened(true);
    const closeModal = () => setIsOpened(false);
    return (React.createElement("div", Object.assign({ className: b() }, extraProps),
        React.createElement("div", { className: b('image-wrapper') },
            React.createElement(Image, Object.assign({}, props, { alt: alt, className: b('image', imageClassName), onClick: openModal, style: imageStyle })),
            React.createElement("button", { className: b('icon-wrapper'), onClick: openModal },
                React.createElement(Icon, { data: ChevronsExpandUpRight, width: FULL_SCREEN_ICON_SIZE, height: FULL_SCREEN_ICON_SIZE, className: b('icon') }))),
        isOpened && (React.createElement(Modal, { open: isOpened, onClose: closeModal, className: b('modal'), contentClassName: b('modal-content') },
            React.createElement("button", { className: b('icon-wrapper', { visible: true }), onClick: closeModal, "aria-label": i18n('close') },
                React.createElement(Icon, { data: Xmark, width: CLOSE_ICON_SIZE, height: CLOSE_ICON_SIZE, className: b('icon', { hover: true }) })),
            React.createElement(Image, Object.assign({}, props, { className: b('modal-image', modalImageClass) }))))));
};
export default FullscreenImage;
