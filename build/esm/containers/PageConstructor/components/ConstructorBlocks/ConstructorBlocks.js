import React, { Fragment, useContext } from 'react';
import get from 'lodash/get';
import { InnerContext } from '../../../../context/innerContext';
import { BlockDecoration } from '../../../../customization/BlockDecoration';
import { getBlockKey } from '../../../../utils';
import { ConstructorBlock } from '../ConstructorBlock/ConstructorBlock';
import { ConstructorItem } from '../ConstructorItem';
import { ConstructorLoadable } from '../ConstructorLoadable';
export const ConstructorBlocks = ({ items }) => {
    const { blockTypes, loadables, itemMap, shouldRenderBlock } = useContext(InnerContext);
    const renderer = (parentId = '', item, index) => {
        if (!itemMap[item.type]) {
            return parentId ? null : (React.createElement(BlockDecoration, { type: item.type, index: index }, null));
        }
        let itemElement;
        const key = getBlockKey(item, index);
        const blockId = parentId ? `${parentId}_${key}` : key;
        if (shouldRenderBlock && !shouldRenderBlock(item, blockId)) {
            return null;
        }
        if ('loadable' in item && item.loadable) {
            const { source, serviceId, params } = item.loadable;
            const config = get(loadables, source);
            if (!config) {
                return null;
            }
            itemElement = (React.createElement(ConstructorLoadable, { block: item, key: blockId, blockKey: blockId, config: config, serviceId: serviceId, params: params }));
        }
        else {
            let children;
            if ('children' in item && item.children) {
                children = item.children.map(renderer.bind(null, blockId));
            }
            itemElement = (React.createElement(ConstructorItem, { data: item, key: blockId, blockKey: blockId }, children));
        }
        return blockTypes.includes(item.type) ? (
        //TODO: replace ConstructorBlock (and delete it) with BlockBase when all
        // components relying on constructor inner structure like Slider or blog-constructor will be refactored
        React.createElement(ConstructorBlock, { data: item, key: blockId, index: index }, itemElement)) : (itemElement);
    };
    return React.createElement(Fragment, null, items.map(renderer.bind(null, '')));
};
