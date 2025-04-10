"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const DEFAULT_RECALCULATE_ON_RESIZE_DELAY = 1000;
const DEFAULT_OPTIONS = {
    recalculateOnResizeDelay: DEFAULT_RECALCULATE_ON_RESIZE_DELAY,
};
const useHeightCalculator = (containerRef, options = DEFAULT_OPTIONS) => {
    const recalculateOnResizeDelay = options.recalculateOnResizeDelay;
    const [containerHeight, setContainerHeight] = (0, react_1.useState)(undefined);
    const calculateContainerHeight = (0, react_1.useCallback)(() => {
        if (containerRef.current && containerRef.current.offsetHeight !== containerHeight)
            setContainerHeight(containerRef.current.offsetHeight);
    }, [containerRef, containerHeight, setContainerHeight]);
    (0, react_1.useEffect)(() => {
        const handleResize = (0, debounce_1.default)(calculateContainerHeight, recalculateOnResizeDelay);
        handleResize();
        window.addEventListener('resize', handleResize, { passive: true });
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [calculateContainerHeight, recalculateOnResizeDelay]);
    return containerHeight;
};
exports.default = useHeightCalculator;
