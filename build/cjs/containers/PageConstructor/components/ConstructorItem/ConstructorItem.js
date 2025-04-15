"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructorHeader = exports.ConstructorItem = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const blockIdContext_1 = require("../../../../context/blockIdContext");
const innerContext_1 = require("../../../../context/innerContext");
const BlockDecoration_1 = require("../../../../customization/BlockDecoration");
const ConstructorItem = ({ data, blockKey, children, }) => {
    const { itemMap } = (0, react_1.useContext)(innerContext_1.InnerContext);
    const { type } = data, rest = tslib_1.__rest(data, ["type"]);
    const Component = itemMap[type];
    return (react_1.default.createElement(blockIdContext_1.BlockIdContext.Provider, { value: blockKey },
        react_1.default.createElement(Component, Object.assign({}, rest), children)));
};
exports.ConstructorItem = ConstructorItem;
const ConstructorHeader = ({ data, blockKey, }) => (react_1.default.createElement(BlockDecoration_1.BlockDecoration, { type: data.type },
    react_1.default.createElement(exports.ConstructorItem, { data: data, key: data.type, blockKey: blockKey })));
exports.ConstructorHeader = ConstructorHeader;
