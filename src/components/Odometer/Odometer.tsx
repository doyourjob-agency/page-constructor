import React, {useEffect, useRef} from 'react';

import {useOdometer} from './useOdometer';

type OdometerProps = {
    initValue?: number;
    value: number;
    duration?: number;
    animated?: boolean;
};

const Odometer: React.FC<OdometerProps> = ({initValue, value, duration = 2000, animated}) => {
    useOdometer();
    const ref = useRef<HTMLSpanElement>(null);
    const odometer = useRef<typeof window.Odometer>();
    useEffect(() => {
        if (typeof window === 'undefined' || !animated) return;
        odometer.current = new window.Odometer({
            el: ref.current,
            value: initValue || 0,
            format: '',
            duration,
        });
    }, [duration, initValue, animated]);
    useEffect(() => {
        if (animated) {
            odometer.current?.update(value);
        }
    }, [animated, value]);

    return <span ref={ref}>{value}</span>;
};

export default Odometer;
