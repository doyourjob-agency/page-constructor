"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const useShowBorder = (withBorder, withBorderOnScroll) => {
    const [showBorder, setShowBorder] = (0, react_1.useState)(withBorder);
    (0, react_1.useEffect)(() => {
        if (!withBorderOnScroll)
            return () => { };
        const showBorderOnScroll = () => {
            if (!withBorder) {
                setShowBorder(window.scrollY > 0);
            }
        };
        const scrollHandler = (0, debounce_1.default)(showBorderOnScroll, 20);
        window.addEventListener('scroll', scrollHandler, { passive: true });
        return () => window.removeEventListener('scroll', scrollHandler);
    });
    return [showBorder];
};
exports.default = useShowBorder;
