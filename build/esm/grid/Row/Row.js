import React, { forwardRef, useCallback } from 'react';
export const Row = forwardRef((props, ref) => {
    const { className, justifyContent, alignItems, noGutter, style, children } = props;
    const getClassName = useCallback(() => {
        return ['row', className, justifyContent, alignItems, noGutter && 'no-gutter']
            .filter(Boolean)
            .join(' ');
    }, [className, justifyContent, alignItems, noGutter]);
    return (React.createElement("div", { ref: ref, className: getClassName(), style: style }, children));
});
Row.displayName = 'Row';
