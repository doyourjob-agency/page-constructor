"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const useHeightCalculator_1 = tslib_1.__importDefault(require("../../hooks/useHeightCalculator"));
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('foldable-block');
const Foldable = ({ isOpened, children, className, qa }) => {
    const qaAttributes = (0, utils_1.getQaAttrubutes)(qa);
    const blockRef = (0, react_1.useRef)(null);
    const contentRef = (0, react_1.useRef)(null);
    const contentHeight = (0, useHeightCalculator_1.default)(contentRef);
    (0, react_1.useEffect)(() => {
        if (blockRef && blockRef.current) {
            blockRef.current.style.height = isOpened && contentHeight ? `${contentHeight}px` : '0';
        }
    }, [isOpened, contentHeight]);
    return (react_1.default.createElement("div", { ref: blockRef, className: b({ open: isOpened }, className), "data-qa": qaAttributes.default },
        react_1.default.createElement("div", { ref: contentRef, className: b('content-container'), "data-qa": qaAttributes.container }, children)));
};
exports.default = Foldable;
