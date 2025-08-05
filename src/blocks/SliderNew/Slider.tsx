import React, {ComponentType, PropsWithChildren, useEffect, useState} from 'react';

import type {SliderNewProps} from './SliderClient';

export const SliderNewBlock = (props: PropsWithChildren<SliderNewProps>) => {
    const [SliderClient, setSliderClient] = useState<ComponentType<SliderNewProps> | null>(null);

    useEffect(() => {
        import('./SliderClient').then((mod) => {
            setSliderClient(() => mod.SliderClient);
        });
    }, []);

    if (!SliderClient) return null;

    return <SliderClient {...props} />;
};

export default SliderNewBlock;
