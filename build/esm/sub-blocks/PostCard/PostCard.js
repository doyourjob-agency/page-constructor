import React from 'react';
import { Icon, useUniqId } from '@gravity-ui/uikit';
import { CardBase, HTML, YFMWrapper } from '../../components';
import { TimeIcon } from '../../icons/TimeIcon';
import { PostCardSize, PostCardTitleHeadingLevel } from '../../models';
import { block } from '../../utils/cn';
import { i18n } from './i18n';
import './PostCard.css';
const ICON_SIZE = 16;
const b = block('post-card');
const PostCard = ({ title, date, readingTime, image, description, tags, url, fullWidth = false, size = PostCardSize.SMALL, showTag = false, titleHeadingLevel = PostCardTitleHeadingLevel.H3, }) => {
    var _a;
    const titleId = useUniqId();
    const descriptionId = useUniqId();
    const isTagVisible = showTag && ((_a = tags === null || tags === void 0 ? void 0 : tags[0]) === null || _a === void 0 ? void 0 : _a.name);
    return (React.createElement(CardBase, { url: url, className: b('card', { fullWidth }) },
        React.createElement(CardBase.Header, { image: image, imageExtraProps: { 'aria-hidden': 'true' }, className: b('header', { fullWidth }) },
            React.createElement("div", { className: b('image-container'), "data-qa": "blog-suggest-header" })),
        React.createElement(CardBase.Content, null,
            isTagVisible && React.createElement("div", { className: b('tag', { size }) }, tags[0].name),
            title &&
                React.createElement(titleHeadingLevel, { className: b('title', { size }) }, React.createElement("span", null,
                    React.createElement(HTML, { id: titleId }, title))),
            description && (React.createElement(YFMWrapper, { className: b('description'), content: description, modifiers: {
                    blog: size === 'm',
                    blogCard: true,
                }, id: descriptionId }))),
        React.createElement(CardBase.Footer, null,
            React.createElement("div", { className: b('container') },
                React.createElement("div", { className: b('suggest-container') },
                    date && React.createElement("div", { className: b('item', { size }) }, date),
                    readingTime && (React.createElement("div", { className: b('item', { size }) },
                        React.createElement("span", { className: b('icon') },
                            React.createElement(Icon, { data: TimeIcon, size: ICON_SIZE, className: b('icon-color') })),
                        i18n('reading_time', { count: readingTime }))))))));
};
export default React.memo(PostCard);
