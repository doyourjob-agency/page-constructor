import React, {useEffect, useState} from 'react';

type AnimatedNumberProps = {
    value: number;
    duration?: number;
    postfix?: string;
    animated?: boolean;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
    value,
    duration = 1200,
    postfix = '',
    animated = false,
}) => {
    const [displayValue, setDisplayValue] = useState(animated ? 0 : value);

    useEffect(() => {
        if (!animated) return () => {};

        let start: number | null = null;
        let frame: number;
        const startValue = 0;
        const diff = value - startValue;

        const scaledDuration = duration + Math.log10(value + 1) * 400;

        const animate = (timestamp: number) => {
            if (start === null) start = timestamp;
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / scaledDuration, 1);
            const eased = easeOutCubic(progress);
            const current = startValue + diff * eased;
            setDisplayValue(Math.round(current));
            if (progress < 1) frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [value, duration, animated]);

    const formatted = Math.round(displayValue).toLocaleString('en-US');

    return (
        <span>
            {formatted}
            {postfix}
        </span>
    );
};

export default AnimatedNumber;
