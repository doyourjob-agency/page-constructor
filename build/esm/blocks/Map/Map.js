import { __rest } from "tslib";
import React from 'react';
import Map from '../../components/Map/Map';
import MediaBase from '../../components/MediaBase/MediaBase';
import { block } from '../../utils';
import { getMediaBorder } from '../../utils/borderSelector';
import './Map.css';
const b = block('map-block');
export const MapBlock = (_a) => {
    var { map, border, disableShadow } = _a, props = __rest(_a, ["map", "border", "disableShadow"]);
    const borderSelected = getMediaBorder({
        border,
        disableShadow,
    });
    return (React.createElement(MediaBase, Object.assign({}, props),
        React.createElement(MediaBase.Card, null,
            React.createElement(Map, Object.assign({}, map, { className: b({ border: borderSelected }) })))));
};
export default MapBlock;
