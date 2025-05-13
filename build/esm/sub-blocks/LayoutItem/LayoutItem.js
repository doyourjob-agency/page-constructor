import { __rest } from "tslib";
import React, { useMemo } from 'react';
import { useUniqId } from '@gravity-ui/uikit';
import { FullscreenMedia, IconWrapper, Media, MetaInfo } from '../../components';
import { useTheme } from '../../context/theme';
import { block, getThemedValue } from '../../utils';
import { mergeVideoMicrodata } from '../../utils/microdata';
import Content from '../Content/Content';
import { getLayoutItemLinks, hasFullscreen, showFullscreenIcon } from './utils';
import './LayoutItem.css';
const b = block('layout-item');
const LayoutItem = (_a) => {
    var { title, afterTitle, rightSpace = true } = _a, _b = _a.content, { links } = _b, content = __rest(_b, ["links"]), { metaInfo, media, border, fullscreen, icon, className, analyticsEvents, controlPosition = 'content' } = _a;
    const normalizedLinks = useMemo(() => getLayoutItemLinks(links), [links]);
    const areControlsInFooter = controlPosition === 'footer';
    const theme = useTheme();
    const themedIcon = getThemedValue(icon, theme);
    const contentProps = Object.assign(Object.assign({ controlPosition: areControlsInFooter ? 'bottom' : 'default' }, content), { links: normalizedLinks, size: 's', colSizes: { all: 12, md: 12 } });
    const titleId = useUniqId();
    const renderMedia = () => {
        var _a;
        if (!media) {
            return null;
        }
        const themedMedia = getThemedValue(media, theme);
        const mediaWithMicrodata = mergeVideoMicrodata(themedMedia, {
            name: typeof content.title === 'string' ? content.title : (_a = content.title) === null || _a === void 0 ? void 0 : _a.text,
            description: content.text,
        });
        return fullscreen && hasFullscreen(themedMedia) ? (React.createElement(FullscreenMedia, { showFullscreenIcon: showFullscreenIcon(themedMedia) }, (_a = {}) => {
            var { className: mediaClassName, fullscreen: _fullscreen } = _a, fullscreenMediaProps = __rest(_a, ["className", "fullscreen"]);
            return (React.createElement(Media, Object.assign({}, mediaWithMicrodata, fullscreenMediaProps, { className: b('media', { border }, mediaClassName), analyticsEvents: analyticsEvents })));
        })) : (React.createElement(Media, Object.assign({}, themedMedia, { className: b('media', { border }), analyticsEvents: analyticsEvents })));
    };
    return (React.createElement("div", { className: b(null, className) },
        (title || afterTitle) && (React.createElement("div", { className: b('wrap', { right: rightSpace }) },
            title && (React.createElement("span", { className: b('title', { size: (title === null || title === void 0 ? void 0 : title.size) || 'm' }) }, title === null || title === void 0 ? void 0 : title.text)),
            afterTitle && (React.createElement("span", { className: b('afterTitle', { size: (afterTitle === null || afterTitle === void 0 ? void 0 : afterTitle.size) || 'm' }) }, afterTitle === null || afterTitle === void 0 ? void 0 : afterTitle.text)))),
        renderMedia(),
        metaInfo && (React.createElement(MetaInfo, { items: metaInfo, className: b('meta-info', { right: rightSpace }) })),
        React.createElement("div", { className: b('content', { 'no-media': !media, right: rightSpace }) },
            React.createElement(IconWrapper, { icon: themedIcon, className: b('wrapper') },
                React.createElement(Content, Object.assign({}, contentProps, { titleId: titleId }))))));
};
export default LayoutItem;
