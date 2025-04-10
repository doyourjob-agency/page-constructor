"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('CircleProgress');
const CircleProgress = (props) => {
    const { baseColor, elapsedTime, circleColor = '#262626', strokeWidth = 10, radius = 50, className, } = props;
    const circumference = (0, react_1.useMemo)(() => 2 * Math.PI * radius, [radius]);
    const baseCircle = (0, react_1.useMemo)(() => {
        if (!baseColor) {
            return null;
        }
        return (react_1.default.createElement("circle", { cx: "60", cy: "60", r: radius, fill: "none", stroke: baseColor, strokeWidth: strokeWidth }));
    }, [baseColor, radius, strokeWidth]);
    return (react_1.default.createElement("svg", { className: b(null, className), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 120 120" },
        baseCircle,
        react_1.default.createElement("circle", { cx: "60", cy: "60", r: radius, transform: "rotate(-90 60 60)", fill: "none", strokeDashoffset: circumference - elapsedTime * circumference, strokeDasharray: circumference, stroke: circleColor, strokeWidth: strokeWidth })));
};
exports.default = CircleProgress;
