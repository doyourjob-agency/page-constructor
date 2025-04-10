import { __rest } from "tslib";
import React from 'react';
import { CardBase, Media } from '../../components';
import { block } from '../../utils';
import './MediaCard.css';
const b = block('MediaCard');
const MediaCard = (_a) => {
    var { border, analyticsEvents } = _a, mediaProps = __rest(_a, ["border", "analyticsEvents"]);
    return (React.createElement(CardBase, { className: b(), bodyClassName: b('body'), border: border, analyticsEvents: analyticsEvents },
        React.createElement(CardBase.Content, null,
            React.createElement(Media, Object.assign({}, mediaProps)))));
};
export default MediaCard;
