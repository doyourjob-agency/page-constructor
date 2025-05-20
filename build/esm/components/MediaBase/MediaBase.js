import { __rest } from "tslib";
import React, { useMemo } from 'react';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import { Col, Grid, GridColumnSize, Row } from '../../grid';
import { block } from '../../utils';
import Title from '../Title/Title';
import MediaContent from './MediaBaseContent';
import './MediaBase.css';
const b = block('media-base');
const Card = () => null;
export const MediaBase = (props) => {
    const { children, largeMedia, smallMedia, direction = 'content-media', mobileDirection = 'content-media', animated, mediaOnly, onScroll, mediaOnlyColSizes = { all: 12, md: 8 } } = props, mediaContentProps = __rest(props, ["children", "largeMedia", "smallMedia", "direction", "mobileDirection", "animated", "mediaOnly", "onScroll", "mediaOnlyColSizes"]);
    const { title, description } = mediaContentProps;
    const mediaSizes = useMemo(() => {
        let md = 6;
        if (smallMedia) {
            md = 4;
        }
        if (largeMedia) {
            md = 8;
        }
        return mediaOnly
            ? { [GridColumnSize.All]: 12 }
            : { [GridColumnSize.Md]: md, [GridColumnSize.All]: 12 };
    }, [mediaOnly, largeMedia, smallMedia]);
    const contentSizes = useMemo(() => {
        let md = 6;
        if (smallMedia) {
            md = 8;
        }
        if (largeMedia) {
            md = 4;
        }
        return { [GridColumnSize.Md]: md, [GridColumnSize.All]: 12 };
    }, [largeMedia, smallMedia]);
    const mediaContent = !mediaOnly && React.createElement(MediaContent, Object.assign({}, mediaContentProps));
    const card = children.type === Card ? children === null || children === void 0 ? void 0 : children.props.children : null;
    return (React.createElement(AnimateBlock, { className: b(), onScroll: onScroll, animate: animated },
        mediaOnly && (React.createElement(Title, { className: b('header'), title: title, subtitle: description, colSizes: mediaOnlyColSizes })),
        React.createElement(Grid, null,
            React.createElement(Row, { className: b('row', {
                    reverse: direction === 'media-content',
                    'mobile-reverse': mobileDirection === 'media-content',
                }) },
                React.createElement(Col, { className: b('content'), sizes: contentSizes }, mediaContent),
                card ? (React.createElement(Col, { sizes: mediaSizes },
                    React.createElement("div", { className: b('card') }, card))) : null))));
};
MediaBase.Card = Card;
export default MediaBase;
