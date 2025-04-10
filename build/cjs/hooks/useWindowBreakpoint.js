"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const constants_1 = require("../constants");
function calculate(windowWidth) {
    const breakpointsSorted = Object.values(constants_1.BREAKPOINTS).sort((b1, b2) => b1 - b2);
    let result = breakpointsSorted[0];
    for (const breakpoint of breakpointsSorted) {
        if (windowWidth >= breakpoint) {
            result = breakpoint;
        }
        else {
            return result;
        }
    }
    return result;
}
function useWindowBreakpoint() {
    const [breakpoint, setBreakpoint] = (0, react_1.useState)(constants_1.BREAKPOINTS.sm);
    (0, react_1.useEffect)(() => {
        setBreakpoint(calculate(window.innerWidth));
        const detect = (0, debounce_1.default)(() => {
            setBreakpoint(calculate(window.innerWidth));
        }, 100);
        detect();
        window.addEventListener('resize', detect, { passive: true });
        return () => window.removeEventListener('resize', detect);
    }, []);
    return breakpoint;
}
exports.default = useWindowBreakpoint;
