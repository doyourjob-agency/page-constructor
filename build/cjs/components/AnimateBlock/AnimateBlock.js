"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_waypoint_1 = require("react-waypoint");
const AnimateContext_1 = require("../../context/animateContext/AnimateContext");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('AnimateBlock');
const AnimateBlock = (props) => {
    const { animated } = (0, react_1.useContext)(AnimateContext_1.AnimateContext);
    const { children, className, offset = 100, onScroll, style, animate = animated, qa } = props;
    const [playAnimation, setPlayAnimation] = (0, react_1.useState)(false);
    const divClassName = animate
        ? b(null, `${playAnimation && 'animate'} ${className}`)
        : className;
    return (react_1.default.createElement("div", { className: divClassName, style: style, "data-qa": qa },
        react_1.default.createElement(react_waypoint_1.Waypoint
        // trigger animation if element is above screen
        , { 
            // trigger animation if element is above screen
            topOffset: '-100000%', bottomOffset: offset, onEnter: async () => {
                setPlayAnimation(true);
                if (onScroll) {
                    onScroll();
                }
            } }),
        children));
};
exports.default = AnimateBlock;
