"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructorLoadable = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const blockIdContext_1 = require("../../../../context/blockIdContext");
const innerContext_1 = require("../../../../context/innerContext");
const Loadable_1 = tslib_1.__importDefault(require("../../../Loadable/Loadable"));
const ConstructorLoadable = (props) => {
    const { itemMap } = (0, react_1.useContext)(innerContext_1.InnerContext);
    const { block, blockKey, config, serviceId, params } = props;
    const { type } = block;
    const { fetch, component: ChildComponent } = config;
    const Component = itemMap[type];
    return (react_1.default.createElement(blockIdContext_1.BlockIdContext.Provider, { value: blockKey, key: blockKey },
        react_1.default.createElement(Loadable_1.default, { key: blockKey, block: block, blockKey: blockKey, Component: Component, ChildComponent: ChildComponent, fetch: fetch, serviceId: serviceId, params: params })));
};
exports.ConstructorLoadable = ConstructorLoadable;
