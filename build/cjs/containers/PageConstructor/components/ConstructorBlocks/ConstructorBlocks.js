"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructorBlocks = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const get_1 = tslib_1.__importDefault(require("lodash/get"));
const innerContext_1 = require("../../../../context/innerContext");
const BlockDecoration_1 = require("../../../../customization/BlockDecoration");
const utils_1 = require("../../../../utils");
const ConstructorBlock_1 = require("../ConstructorBlock/ConstructorBlock");
const ConstructorItem_1 = require("../ConstructorItem");
const ConstructorLoadable_1 = require("../ConstructorLoadable");
const ConstructorBlocks = ({ items }) => {
    const { blockTypes, loadables, itemMap, shouldRenderBlock } = (0, react_1.useContext)(innerContext_1.InnerContext);
    const renderer = (parentId = '', item, index) => {
        if (!itemMap[item.type]) {
            return parentId ? null : (react_1.default.createElement(BlockDecoration_1.BlockDecoration, { type: item.type, index: index }, null));
        }
        let itemElement;
        const key = (0, utils_1.getBlockKey)(item, index);
        const blockId = parentId ? `${parentId}_${key}` : key;
        if (shouldRenderBlock && !shouldRenderBlock(item, blockId)) {
            return null;
        }
        if ('loadable' in item && item.loadable) {
            const { source, serviceId, params } = item.loadable;
            const config = (0, get_1.default)(loadables, source);
            if (!config) {
                return null;
            }
            itemElement = (react_1.default.createElement(ConstructorLoadable_1.ConstructorLoadable, { block: item, key: blockId, blockKey: blockId, config: config, serviceId: serviceId, params: params }));
        }
        else {
            let children;
            if ('children' in item && item.children) {
                children = item.children.map(renderer.bind(null, blockId));
            }
            itemElement = (react_1.default.createElement(ConstructorItem_1.ConstructorItem, { data: item, key: blockId, blockKey: blockId }, children));
        }
        return blockTypes.includes(item.type) ? (
        //TODO: replace ConstructorBlock (and delete it) with BlockBase when all
        // components relying on constructor inner structure like Slider or blog-constructor will be refactored
        react_1.default.createElement(ConstructorBlock_1.ConstructorBlock, { data: item, key: blockId, index: index }, itemElement)) : (itemElement);
    };
    return react_1.default.createElement(react_1.Fragment, null, items.map(renderer.bind(null, '')));
};
exports.ConstructorBlocks = ConstructorBlocks;
