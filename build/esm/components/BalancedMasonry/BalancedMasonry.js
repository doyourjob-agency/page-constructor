import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import first from 'lodash/first';
import minBy from 'lodash/minBy';
import { SSRContext } from '../../context/ssrContext';
import { block, getQaAttrubutes } from '../../utils';
import './BalancedMasonry.css';
const b = block('BalancedMasonry');
const BalancedMasonry = (props) => {
    const { className, columnClassName, children = [], breakpointCols, qa } = props;
    const qaAttributes = getQaAttrubutes(qa, 'column');
    const { isServer } = useContext(SSRContext);
    const getCurrentColumnsCount = useCallback(() => {
        const breakpoints = Object.entries(breakpointCols).sort(([firstBreakpoint], [secondBreakpoint]) => {
            return Number(secondBreakpoint) - Number(firstBreakpoint);
        });
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        let [, result] = first(breakpoints);
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
    const [columnCount, setColumnCount] = useState(getCurrentColumnsCount());
    const [columns, setColumns] = useState([]);
    const containerRef = useRef(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const balanceColumns = useCallback(debounce(() => {
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
            const minColumn = minBy(columnsMeta, 'height') || { id: 0, height: 0 };
            const { id: columnId } = minColumn;
            localColumns[columnId].push(children[i]);
            minColumn.height += node.offsetHeight;
        }
        setColumns(localColumns);
    }, 300), [children, columnCount]);
    useEffect(() => {
        balanceColumns();
    }, [balanceColumns, children, columnCount]);
    useEffect(() => {
        const updateColumnCounter = () => setColumnCount(getCurrentColumnsCount());
        window.addEventListener('resize', updateColumnCounter, { passive: true });
        return () => window.removeEventListener('resize', updateColumnCounter);
    }, [setColumnCount, columns, getCurrentColumnsCount]);
    useEffect(() => {
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
    return (React.createElement("div", { className: b(null, className), "data-qa": qa },
        React.createElement("div", { className: b('hidden-container'), style: { width: `${100 / columnCount}%` } },
            React.createElement("div", { ref: containerRef, className: b('hidden-list') }, children)),
        columns.map((columnElements, index) => (React.createElement("div", { key: index, className: columnClassName, style: { width: `${100 / columnCount}%` }, "data-qa": qaAttributes.column }, columnElements)))));
};
export default BalancedMasonry;
