import { __rest } from "tslib";
import React, { useContext } from 'react';
import { BlockIdContext } from '../../../../context/blockIdContext';
import { InnerContext } from '../../../../context/innerContext';
import { BlockDecoration } from '../../../../customization/BlockDecoration';
export const ConstructorItem = ({ data, blockKey, children, }) => {
    const { itemMap } = useContext(InnerContext);
    const { type } = data, rest = __rest(data, ["type"]);
    const Component = itemMap[type];
    return (React.createElement(BlockIdContext.Provider, { value: blockKey },
        React.createElement(Component, Object.assign({}, rest), children)));
};
export const ConstructorHeader = ({ data, blockKey, }) => (React.createElement(BlockDecoration, { type: data.type },
    React.createElement(ConstructorItem, { data: data, key: data.type, blockKey: blockKey })));
