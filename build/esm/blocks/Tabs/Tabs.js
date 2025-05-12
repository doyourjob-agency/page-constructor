import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useUniqId } from '@gravity-ui/uikit';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import ButtonTabs from '../../components/ButtonTabs/ButtonTabs';
import FullscreenImage from '../../components/FullscreenImage/FullscreenImage';
import { getMediaImage } from '../../components/Media/Image/utils';
import Media from '../../components/Media/Media';
import Title from '../../components/Title/Title';
import { getHeight } from '../../components/VideoBlock/VideoBlock';
import YFMWrapper from '../../components/YFMWrapper/YFMWrapper';
import { useTheme } from '../../context/theme';
import { Col, GridColumnOrderClasses, Row } from '../../grid';
import { block, getThemedValue } from '../../utils';
import { mergeVideoMicrodata } from '../../utils/microdata';
import TabsTextContent from './TabsTextContent/TabsTextContent';
import './Tabs.css';
const b = block('tabs-block');
export const TabsBlock = ({ items, title, description, animated, tabsColSizes, centered, direction = 'media-content', contentSize = 's', }) => {
    var _a, _b;
    const [activeTab, setActiveTab] = useState(items[0].tabName);
    const [play, setPlay] = useState(false);
    const theme = useTheme();
    const tabs = items.map(({ tabName }) => ({ title: tabName, id: tabName }));
    const activeTabData = items.find(({ tabName }) => tabName === activeTab);
    const isReverse = direction === 'content-media';
    const ref = useRef(null);
    const mediaWidth = (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.offsetWidth;
    const captionId = useUniqId();
    const themedMedia = getThemedValue(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.media, theme);
    const hasNoImage = !(themedMedia === null || themedMedia === void 0 ? void 0 : themedMedia.image) && !(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.image);
    const mediaVideoHeight = hasNoImage && mediaWidth && getHeight(mediaWidth);
    const [minImageHeight, setMinImageHeight] = useState((_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.offsetHeight);
    // TODO remove property support activeTabData?.image. Use only activeTabData?.media?.image
    let imageProps;
    const handleImageHeight = useCallback(() => {
        var _a, _b;
        if (minImageHeight !== ((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.offsetHeight)) {
            setMinImageHeight((_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.offsetHeight);
        }
    }, [minImageHeight]);
    const onSelectTab = useCallback((id, e) => {
        setActiveTab(id);
        e.currentTarget.scrollIntoView({
            inline: 'center',
            behavior: 'smooth',
            block: 'nearest',
        });
    }, []);
    useEffect(() => {
        handleImageHeight();
    }, [activeTab, handleImageHeight]);
    if (activeTabData) {
        const themedImage = getThemedValue(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.image, theme);
        imageProps = themedImage && getMediaImage(themedImage);
        if (activeTabData.caption && imageProps) {
            Object.assign(imageProps, {
                'aria-describedby': captionId,
            });
        }
    }
    const showMedia = Boolean((activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.media) || imageProps);
    const showText = Boolean(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.text);
    const border = (activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.border) || 'shadow';
    const textContent = showText && (React.createElement(TabsTextContent, { showMedia: showMedia, data: activeTabData, imageProps: imageProps ? imageProps : undefined, isReverse: isReverse, contentSize: contentSize, centered: centered }));
    const mediaContent = showMedia && (React.createElement(Col, { sizes: { all: 12, md: 8 }, orders: {
            all: GridColumnOrderClasses.Last,
            md: GridColumnOrderClasses.First,
        }, className: b('col', { centered: centered }) },
        (activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.media) && (React.createElement("div", { style: { minHeight: mediaVideoHeight || minImageHeight } },
            React.createElement("div", { ref: ref },
                React.createElement(Media, Object.assign({}, mergeVideoMicrodata(getThemedValue(activeTabData.media, theme), {
                    name: activeTabData.tabName,
                    description: activeTabData.caption
                        ? activeTabData.caption
                        : undefined,
                }), { key: activeTab, className: b('media', { border }), playVideo: play, height: mediaVideoHeight || undefined, onImageLoad: handleImageHeight }))))),
        imageProps && (React.createElement(Fragment, null,
            React.createElement(FullscreenImage, Object.assign({}, imageProps, { imageClassName: b('image', { border }) })))),
        (activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.caption) && (React.createElement("p", { className: b('caption'), id: captionId },
            React.createElement(YFMWrapper, { content: activeTabData.caption, modifiers: { constructor: true }, id: captionId })))));
    return (React.createElement(AnimateBlock, { className: b(), onScroll: () => setPlay(true), animate: animated },
        React.createElement(Title, { title: title, subtitle: description, className: b('title', { centered: centered }) }),
        React.createElement(Row, null,
            React.createElement(Col, { sizes: tabsColSizes },
                React.createElement(ButtonTabs, { items: tabs, onSelectTab: onSelectTab, activeTab: activeTab, className: b('tabs', { centered: centered }) }))),
        activeTabData && (React.createElement(Row, { className: b('row', { reverse: isReverse }) },
            mediaContent,
            textContent))));
};
export default TabsBlock;
