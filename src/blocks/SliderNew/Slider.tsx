import React, {ComponentType, PropsWithChildren, useEffect, useState} from 'react';

import {block} from '../../utils';

import type {SliderNewProps} from './SliderClient';

import './Slider.scss';

const b = block('slider-new-block');

export const SliderNewBlock = (props: PropsWithChildren<SliderNewProps>) => {
    const [SliderClient, setSliderClient] = useState<ComponentType<SliderNewProps> | null>(null);

    useEffect(() => {
        import('./SliderClient').then((mod) => {
            setSliderClient(() => mod.SliderClient);
        });
    }, []);

    if (!SliderClient) return <div className={b('server-side-placeholder')}>{props.children}</div>;

    return <SliderClient {...props} />;
};

export default SliderNewBlock;
