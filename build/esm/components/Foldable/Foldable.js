import React, { useEffect, useRef } from 'react';
import useHeightCalculator from '../../hooks/useHeightCalculator';
import { block, getQaAttrubutes } from '../../utils';
import './Foldable.css';
const b = block('foldable-block');
const Foldable = ({ isOpened, children, className, qa }) => {
    const qaAttributes = getQaAttrubutes(qa);
    const blockRef = useRef(null);
    const contentRef = useRef(null);
    const contentHeight = useHeightCalculator(contentRef);
    useEffect(() => {
        if (blockRef && blockRef.current) {
            blockRef.current.style.height = isOpened && contentHeight ? `${contentHeight}px` : '0';
        }
    }, [isOpened, contentHeight]);
    return (React.createElement("div", { ref: blockRef, className: b({ open: isOpened }, className), "data-qa": qaAttributes.default },
        React.createElement("div", { ref: contentRef, className: b('content-container'), "data-qa": qaAttributes.container }, children)));
};
export default Foldable;
