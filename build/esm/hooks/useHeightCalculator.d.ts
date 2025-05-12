import React from 'react';
type HeightCalculatorOptions = {
    recalculateOnResizeDelay: number;
};
declare const useHeightCalculator: (containerRef: React.RefObject<HTMLElement>, options?: HeightCalculatorOptions) => number | undefined;
export default useHeightCalculator;
