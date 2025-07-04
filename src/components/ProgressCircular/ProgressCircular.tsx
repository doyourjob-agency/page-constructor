import React from 'react';

import {block} from '../../utils/cn';

import './ProgressCircular.scss';

const b = block('progress-circular');

type ProgressCircularProps = {
    size?: number;
    strokeWidth?: number;
    color?: string;
};

export default function ProgressCircular({
    size = 40,
    strokeWidth = 4,
    color = '#1976d2',
}: ProgressCircularProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <svg className={b()} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#eee"
                strokeWidth={strokeWidth}
            />
            <circle
                className={b('fg')}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={circumference * 0.75}
            />
        </svg>
    );
}
