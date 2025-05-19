import React, { useCallback, useEffect, useRef } from 'react';
import { supportsPassiveEvents } from 'detect-passive-events';
export const InfiniteScroll = ({ hasMore, onNext, preventiveLoadFactor = 0.5, }) => {
    const moreEl = useRef(null);
    const isBottomEdge = useCallback((node) => {
        const rect = node.getBoundingClientRect();
        const height = window.innerHeight;
        // element factor (default is half) window height down
        return rect.top - height < height * preventiveLoadFactor;
    }, [preventiveLoadFactor]);
    const handleScroll = useCallback(() => {
        if (!moreEl.current) {
            return;
        }
        if (isBottomEdge(moreEl.current)) {
            onNext === null || onNext === void 0 ? void 0 : onNext();
        }
    }, [onNext, isBottomEdge]);
    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll, supportsPassiveEvents ? { passive: true } : undefined);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
    if (!hasMore) {
        return null;
    }
    return React.createElement("div", { ref: moreEl });
};
export default InfiniteScroll;
