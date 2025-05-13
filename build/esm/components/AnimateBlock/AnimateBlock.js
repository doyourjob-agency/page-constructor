import React, { useContext, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { AnimateContext } from '../../context/animateContext/AnimateContext';
import { block } from '../../utils';
const b = block('AnimateBlock');
const AnimateBlock = (props) => {
    const { animated } = useContext(AnimateContext);
    const { children, className, offset = 100, onScroll, style, animate = animated, qa } = props;
    const [playAnimation, setPlayAnimation] = useState(false);
    const divClassName = animate
        ? b(null, `${playAnimation && 'animate'} ${className}`)
        : className;
    return (React.createElement("div", { className: divClassName, style: style, "data-qa": qa },
        React.createElement(Waypoint
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
export default AnimateBlock;
