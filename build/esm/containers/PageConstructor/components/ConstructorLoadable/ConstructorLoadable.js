import React, { useContext } from 'react';
import { BlockIdContext } from '../../../../context/blockIdContext';
import { InnerContext } from '../../../../context/innerContext';
import Loadable from '../../../Loadable/Loadable';
export const ConstructorLoadable = (props) => {
    const { itemMap } = useContext(InnerContext);
    const { block, blockKey, config, serviceId, params } = props;
    const { type } = block;
    const { fetch, component: ChildComponent } = config;
    const Component = itemMap[type];
    return (React.createElement(BlockIdContext.Provider, { value: blockKey, key: blockKey },
        React.createElement(Loadable, { key: blockKey, block: block, blockKey: blockKey, Component: Component, ChildComponent: ChildComponent, fetch: fetch, serviceId: serviceId, params: params })));
};
