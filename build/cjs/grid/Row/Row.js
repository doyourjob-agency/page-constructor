"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
exports.Row = (0, react_1.forwardRef)((props, ref) => {
    const { className, justifyContent, alignItems, noGutter, style, children } = props;
    const getClassName = (0, react_1.useCallback)(() => {
        return ['row', className, justifyContent, alignItems, noGutter && 'no-gutter']
            .filter(Boolean)
            .join(' ');
    }, [className, justifyContent, alignItems, noGutter]);
    return (react_1.default.createElement("div", { ref: ref, className: getClassName(), style: style }, children));
});
exports.Row.displayName = 'Row';
