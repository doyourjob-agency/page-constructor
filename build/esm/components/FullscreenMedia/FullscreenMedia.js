import React, { useContext, useState } from 'react';
import { ChevronsExpandUpRight, Xmark } from '@gravity-ui/icons';
import { Button, Icon, Modal } from '@gravity-ui/uikit';
import { MobileContext } from '../../context/mobileContext';
import { block } from '../../utils';
import './FullscreenMedia.css';
const b = block('full-screen-media');
const FULL_SCREEN_ICON_SIZE = 18;
const CLOSE_ICON_SIZE = 24;
const getMediaClass = (type) => b('modal-media', { type });
const FullscreenMedia = ({ children, showFullscreenIcon = true }) => {
    const [isOpened, setIsOpened] = useState(false);
    const isMobile = useContext(MobileContext);
    const openModal = (e) => {
        e.stopPropagation();
        setIsOpened(true);
    };
    const closeModal = () => setIsOpened(false);
    if (isMobile) {
        return children();
    }
    return (React.createElement("div", { className: b() },
        React.createElement("div", { className: b('media-wrapper'), onClickCapture: openModal },
            children({ className: b('inline-media') }),
            showFullscreenIcon && (React.createElement(Button, { className: b('icon-wrapper'), extraProps: { onClickCapture: openModal }, size: 'l' },
                React.createElement(Icon, { data: ChevronsExpandUpRight, width: FULL_SCREEN_ICON_SIZE, height: FULL_SCREEN_ICON_SIZE, className: b('icon') })))),
        isOpened && (React.createElement(Modal, { open: isOpened, onClose: closeModal, className: b('modal'), contentClassName: b('modal-content') },
            React.createElement(Button, { className: b('icon-wrapper', { visible: true }), onClick: closeModal, size: 'l' },
                React.createElement(Icon, { data: Xmark, width: CLOSE_ICON_SIZE, height: CLOSE_ICON_SIZE, className: b('icon', { hover: true }) })),
            children({
                imageClassName: getMediaClass('image'),
                videoClassName: getMediaClass('video'),
                youtubeClassName: getMediaClass('youtube'),
                fullscreen: true,
                previewImg: undefined,
                autoplay: true,
            })))));
};
export default FullscreenMedia;
