"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const first_1 = tslib_1.__importDefault(require("lodash/first"));
const minBy_1 = tslib_1.__importDefault(require("lodash/minBy"));
const ssrContext_1 = require("../../context/ssrContext");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('BalancedMasonry');
const BalancedMasonry = (props) => {
    const { className, columnClassName, children = [], breakpointCols, qa } = props;
    const qaAttributes = (0, utils_1.getQaAttrubutes)(qa, 'column');
    const { isServer } = (0, react_1.useContext)(ssrContext_1.SSRContext);
    const getCurrentColumnsCount = (0, react_1.useCallback)(() => {
        const breakpoints = Object.entries(breakpointCols).sort(([firstBreakpoint], [secondBreakpoint]) => {
            return Number(secondBreakpoint) - Number(firstBreakpoint);
        });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        let [, result] = (0, first_1.default)(breakpoints);
        if (isServer) {
            return result;
        }
        for (const [rawWidth, columnCount] of breakpoints) {
            const width = Number(rawWidth);
            if ((document === null || document === void 0 ? void 0 : document.body.clientWidth) <= width) {
                result = columnCount;
            }
        }
        return result;
    }, [breakpointCols, isServer]);
    const [columnCount, setColumnCount] = (0, react_1.useState)(getCurrentColumnsCount());
    const [columns, setColumns] = (0, react_1.useState)([]);
    const containerRef = (0, react_1.useRef)(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const balanceColumns = (0, react_1.useCallback)((0, debounce_1.default)(() => {
        if (!containerRef.current) {
            return;
        }
        const localColumns = [];
        const columnsMeta = [];
        for (let i = 0; i < columnCount; i++) {
            columnsMeta.push({ id: i, height: 0 });
            localColumns.push([]);
        }
        for (let i = 0; i < containerRef.current.children.length; i++) {
            const node = containerRef.current.children.item(i);
            if (!node) {
                continue;
            }
            const minColumn = (0, minBy_1.default)(columnsMeta, 'height') || { id: 0, height: 0 };
            const { id: columnId } = minColumn;
            localColumns[columnId].push(children[i]);
            minColumn.height += node.offsetHeight;
        }
        setColumns(localColumns);
    }, 300), [children, columnCount]);
    (0, react_1.useEffect)(() => {
        balanceColumns();
    }, [balanceColumns, children, columnCount]);
    (0, react_1.useEffect)(() => {
        const updateColumnCounter = () => setColumnCount(getCurrentColumnsCount());
        window.addEventListener('resize', updateColumnCounter, { passive: true });
        return () => window.removeEventListener('resize', updateColumnCounter);
    }, [setColumnCount, columns, getCurrentColumnsCount]);
    (0, react_1.useEffect)(() => {
        const currentRef = containerRef.current;
        const isResizeEventsSupported = 'ResizeObserver' in window;
        if (!currentRef || !isResizeEventsSupported) {
            return () => { };
        }
        const observer = new ResizeObserver(balanceColumns);
        for (let i = 0; i < currentRef.children.length; i++) {
            const node = currentRef.children.item(i);
            if (!node) {
                continue;
            }
            observer.observe(node);
        }
        return () => observer.disconnect();
    }, [balanceColumns, children]);
    return (react_1.default.createElement("div", { className: b(null, className), "data-qa": qa },
        react_1.default.createElement("div", { className: b('hidden-container'), style: { width: `${100 / columnCount}%` } },
            react_1.default.createElement("div", { ref: containerRef, className: b('hidden-list') }, children)),
        columns.map((columnElements, index) => (react_1.default.createElement("div", { key: index, className: columnClassName, style: { width: `${100 / columnCount}%` }, "data-qa": qaAttributes.column }, columnElements)))));
};
exports.default = BalancedMasonry;
