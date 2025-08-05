import React, {useContext, useMemo} from 'react';

import {SSRContext} from '../../context/ssrContext';

import type {SliderNewProps} from './SliderClient';

export const SliderNewBlock = (props: React.PropsWithChildren<SliderNewProps>) => {
    const {isServer, dynamic} = useContext(SSRContext);

    const SliderClient = useMemo(() => {
        if (dynamic && isServer) {
            return dynamic(() => import('./SliderClient').then((mod) => mod.SliderClient), {
                ssr: false,
            });
        }
        return require('./SliderClient').SliderClient;
    }, [dynamic, isServer]);

    return <SliderClient {...props} />;
};

export default SliderNewBlock;
