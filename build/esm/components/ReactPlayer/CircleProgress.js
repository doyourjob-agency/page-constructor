import React, { useMemo } from 'react';
import { block } from '../../utils';
import './CircleProgress.css';
const b = block('CircleProgress');
const CircleProgress = (props) => {
    const { baseColor, elapsedTime, circleColor = '#262626', strokeWidth = 10, radius = 50, className, } = props;
    const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);
    const baseCircle = useMemo(() => {
        if (!baseColor) {
            return null;
        }
        return (React.createElement("circle", { cx: "60", cy: "60", r: radius, fill: "none", stroke: baseColor, strokeWidth: strokeWidth }));
    }, [baseColor, radius, strokeWidth]);
    return (React.createElement("svg", { className: b(null, className), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 120 120" },
        baseCircle,
        React.createElement("circle", { cx: "60", cy: "60", r: radius, transform: "rotate(-90 60 60)", fill: "none", strokeDashoffset: circumference - elapsedTime * circumference, strokeDasharray: circumference, stroke: circleColor, strokeWidth: strokeWidth })));
};
export default CircleProgress;
