"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = require("react");
const noop_1 = tslib_1.__importDefault(require("lodash/noop"));
const mobileContext_1 = require("../context/mobileContext");
function useFocus(element) {
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const [hasFocus, setHasFocus] = (0, react_1.useState)(false);
    const setFocus = (0, react_1.useCallback)(() => setHasFocus(true), []);
    const unsetFocus = (0, react_1.useCallback)(() => setHasFocus(false), []);
    (0, react_1.useEffect)(() => {
        if (element) {
            if (isMobile) {
                element.addEventListener('pointerdown', setFocus, { passive: true });
            }
            else {
                element.addEventListener('mouseenter', setFocus, { passive: true });
                element.addEventListener('mouseleave', unsetFocus, { passive: true });
            }
            return () => {
                if (isMobile) {
                    element.removeEventListener('pointerdown', setFocus);
                }
                else {
                    element.removeEventListener('mouseenter', setFocus);
                    element.removeEventListener('mouseleave', unsetFocus);
                }
            };
        }
        return noop_1.default;
    }, [element, isMobile, setFocus, unsetFocus]);
    return {
        hasFocus,
        setFocus,
        unsetFocus,
    };
}
exports.default = useFocus;
