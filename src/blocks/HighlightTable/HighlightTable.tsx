import React, {useCallback, useEffect, useRef} from 'react';

import {Text} from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';

import {HTML, YFMWrapper} from '../../components';
import {HighlightTableBlockProps} from '../../models';
import {block} from '../../utils';

import './HighlightTable.scss';

const b = block('highlight-table-block');

export const HighlightTableBlock = (props: HighlightTableBlockProps) => {
    const {title, description, table} = props;
    const firstRow = table.content[0] || [];
    const otherRows = table.content.slice(1);
    const customColumnWidth = table.customColumnWidth || [];
    const maxContentColumns = Math.max(...table.content.map((row) => row.length));
    const maxCustomColumn = customColumnWidth.reduce((val, value) => val + value, 0) || 0;
    const maxColumns =
        maxContentColumns > maxCustomColumn
            ? maxCustomColumn + (maxContentColumns - customColumnWidth.length) * 2
            : maxCustomColumn;
    const blockRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);
    const tableContentRef = useRef<HTMLDivElement>(null);
    const scrollBarRef = useRef<HTMLDivElement>(null);
    const scrollThumbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const blockElem = blockRef.current;
        const tableContentElem = tableContentRef.current;

        if (!tableContentElem || !blockElem) return () => {};

        const updateSizes = debounce(() => {
            const width = Math.max(672, blockElem.clientWidth);
            tableContentElem.style.setProperty('--block-width', `${width}px`);
        });

        updateSizes();

        window.addEventListener('resize', updateSizes, {passive: true});

        return () => {
            window.removeEventListener('resize', updateSizes);
        };
    }, [maxColumns]);

    useEffect(() => {
        const tableElem = tableRef.current;
        const scrollBar = scrollBarRef.current;
        const scrollThumb = scrollThumbRef.current;

        if (!tableElem || !scrollBar || !scrollThumb) return () => {};

        const updateProgress = debounce(() => {
            const scrollWidth = Math.round(
                scrollBar.clientWidth * (tableElem.clientWidth / tableElem.scrollWidth),
            );
            const scrollLeft = Math.round(
                scrollBar.clientWidth * (tableElem.scrollLeft / tableElem.scrollWidth),
            );
            scrollThumb.style.setProperty('transform', `translateX(${scrollLeft}px)`);
            scrollThumb.style.setProperty('width', `${scrollWidth}px`);
        });

        setTimeout(updateProgress, 0);

        tableElem.addEventListener('scroll', updateProgress);
        window.addEventListener('resize', updateProgress, {passive: true});

        return () => {
            tableElem.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, []);

    const renderRow = useCallback(
        (row: string[], index: number) => (
            <div
                key={index}
                className={b('row')}
                style={{backgroundColor: table.highlighter?.[index] ?? ''}}
            >
                {row.map((cell, cellIndex) => (
                    <div
                        key={cellIndex}
                        className={b('cell')}
                        style={{
                            textAlign: table.justify?.[cellIndex] ?? 'left',
                            width: `calc(var(--block-width) * ${
                                1 / (12 / (table.customColumnWidth?.[cellIndex] || 2))
                            })`,
                        }}
                    >
                        <HTML>{cell}</HTML>
                    </div>
                ))}
            </div>
        ),
        [table.customColumnWidth, table.highlighter, table.justify],
    );

    return (
        <div ref={blockRef} className={b()}>
            <Text className={b('title')} variant="header-2">
                {title}
            </Text>
            {description && (
                <div className={b('description')}>
                    <YFMWrapper content={description} modifiers={{constructor: true}} />
                </div>
            )}
            <div ref={tableRef} className={b('table')}>
                <div ref={tableContentRef} className={b('content')}>
                    <div className={b('head')}>{renderRow(firstRow, 0)}</div>
                    <div className={b('body')}>{otherRows.map(renderRow)}</div>
                </div>
            </div>
            <div ref={scrollBarRef} className={b('scrollbar')}>
                <div ref={scrollThumbRef} />
            </div>
        </div>
    );
};

export default HighlightTableBlock;
