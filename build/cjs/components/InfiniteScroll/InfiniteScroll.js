"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfiniteScroll = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const detect_passive_events_1 = require("detect-passive-events");
const InfiniteScroll = ({ hasMore, onNext, preventiveLoadFactor = 0.5, }) => {
    const moreEl = (0, react_1.useRef)(null);
    const isBottomEdge = (0, react_1.useCallback)((node) => {
        const rect = node.getBoundingClientRect();
        const height = window.innerHeight;
        // element factor (default is half) window height down
        return rect.top - height < height * preventiveLoadFactor;
    }, [preventiveLoadFactor]);
    const handleScroll = (0, react_1.useCallback)(() => {
        if (!moreEl.current) {
            return;
        }
        if (isBottomEdge(moreEl.current)) {
            onNext === null || onNext === void 0 ? void 0 : onNext();
        }
    }, [onNext, isBottomEdge]);
    (0, react_1.useEffect)(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll, detect_passive_events_1.supportsPassiveEvents ? { passive: true } : undefined);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
    if (!hasMore) {
        return null;
    }
    return react_1.default.createElement("div", { ref: moreEl });
};
exports.InfiniteScroll = InfiniteScroll;
exports.default = exports.InfiniteScroll;
