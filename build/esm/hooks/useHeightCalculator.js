import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
const DEFAULT_RECALCULATE_ON_RESIZE_DELAY = 1000;
const DEFAULT_OPTIONS = {
    recalculateOnResizeDelay: DEFAULT_RECALCULATE_ON_RESIZE_DELAY,
};
const useHeightCalculator = (containerRef, options = DEFAULT_OPTIONS) => {
    const recalculateOnResizeDelay = options.recalculateOnResizeDelay;
    const [containerHeight, setContainerHeight] = useState(undefined);
    const calculateContainerHeight = useCallback(() => {
        if (containerRef.current && containerRef.current.offsetHeight !== containerHeight)
            setContainerHeight(containerRef.current.offsetHeight);
    }, [containerRef, containerHeight, setContainerHeight]);
    useEffect(() => {
        const handleResize = debounce(calculateContainerHeight, recalculateOnResizeDelay);
        handleResize();
        window.addEventListener('resize', handleResize, { passive: true });
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [calculateContainerHeight, recalculateOnResizeDelay]);
    return containerHeight;
};
export default useHeightCalculator;
