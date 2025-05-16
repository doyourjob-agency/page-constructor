import React, { useEffect, useRef } from 'react';
import { Text } from '@gravity-ui/uikit';
import { Buttons, HTML, Links, Table } from '../../components';
import { Col, Grid, GridColumnAlignSelf, GridColumnSize, Row } from '../../grid';
import { block } from '../../utils';
import './Table.css';
const b = block('table-block');
const bTable = block('table');
const bScrollbar = block('table-scrollbar');
export const TableBlock = (props) => {
    const { title, table, description, links, buttons } = props;
    const tableRef = useRef(null);
    useEffect(() => {
        var _a;
        const pcTable = (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(`.${bTable()} > .${bTable('table')}`);
        if (!pcTable)
            return () => { };
        let scrollBar = pcTable.querySelector(`.${bScrollbar()}`);
        let scrollThumb = scrollBar === null || scrollBar === void 0 ? void 0 : scrollBar.querySelector('div');
        if (!scrollBar) {
            scrollBar = document.createElement('div');
            scrollThumb = document.createElement('div');
            scrollBar.appendChild(scrollThumb);
            scrollBar.className = bScrollbar();
            pcTable.appendChild(scrollBar);
        }
        const updateProgress = () => {
            const scrollWidth = Math.round(scrollBar.clientWidth * (pcTable.clientWidth / pcTable.scrollWidth));
            const scrollLeft = Math.round(scrollBar.clientWidth * (pcTable.scrollLeft / pcTable.scrollWidth));
            scrollThumb.style.setProperty('transform', `translateX(${scrollLeft}px)`);
            scrollThumb.style.setProperty('width', `${scrollWidth}px`);
        };
        updateProgress();
        pcTable.addEventListener('scroll', updateProgress);
        return () => {
            pcTable.removeEventListener('scroll', updateProgress);
        };
    }, []);
    return (React.createElement("div", { className: b(), ref: tableRef },
        React.createElement(Grid, { className: b('content') },
            React.createElement(Row, { className: b('row') },
                React.createElement(Col, { className: b('lhs'), sizes: { [GridColumnSize.Md]: 3, [GridColumnSize.All]: 12 }, alignSelf: GridColumnAlignSelf.Start },
                    React.createElement(Text, { variant: "display-2" }, title),
                    description && (React.createElement("div", { className: b('description') },
                        React.createElement(Text, { variant: "body-2" },
                            React.createElement(HTML, null, description)))),
                    (links === null || links === void 0 ? void 0 : links.length) && React.createElement(Links, { className: b('bottomObject'), links: links }),
                    (buttons === null || buttons === void 0 ? void 0 : buttons.length) && (React.createElement(Buttons, { className: b('bottomObject'), buttons: buttons }))),
                React.createElement(Col, { sizes: { [GridColumnSize.Md]: 8, [GridColumnSize.All]: 12 }, offsets: { [GridColumnSize.Md]: 1 } },
                    React.createElement(Table, Object.assign({ className: b('table') }, table)))))));
};
export default TableBlock;
