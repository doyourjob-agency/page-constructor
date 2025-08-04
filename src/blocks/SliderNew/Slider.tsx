import * as React from 'react';

import SliderClient, {SliderNewProps} from './SliderClient';

export const SliderNewBlock = (props: React.PropsWithChildren<SliderNewProps>) => {
    const [ClientComponent, setClientComponent] =
        React.useState<React.ComponentType<SliderNewProps> | null>(null);

    React.useEffect(() => {
        import('./SliderClient').then((mod) => {
            setClientComponent(() => mod.default);
        });
    }, []);

    if (!ClientComponent) return null; // или прелоадер

    return <SliderClient {...props} />;
};

export default SliderNewBlock;
