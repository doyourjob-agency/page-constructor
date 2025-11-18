import React, {useEffect, useState} from 'react';

type AnimatedNumberProps = {
    value: number;
    duration?: number;
    postfix?: string;
    animated?: boolean;
};

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

        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setDisplayValue(Math.floor(progress * value));
            if (progress < 1) frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(frame);
        };
    }, [value, duration, animated]);

    return (
        <span>
            {displayValue}
            {postfix}
        </span>
    );
};

export default AnimatedNumber;
