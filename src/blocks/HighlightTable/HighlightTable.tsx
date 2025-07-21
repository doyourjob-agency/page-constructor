import React, {useCallback, useEffect, useMemo, useRef} from 'react';

import {text} from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';

import {HTML, Title} from '../../components';
import {HighlightTableBlockProps} from '../../models';
import {block} from '../../utils';

import './HighlightTable.scss';

const b = block('highlight-table-block');

const getTextStyles = (contentSize: HighlightTableBlockProps['contentSize']) => {
    switch (contentSize) {
        case 'l':
            return 'body-2';
        default:
            return 'body-1';
    }
};

export const HighlightTableBlock = ({
    title,
    description,
    table,
    legend = [],
    contentSize = 's',
    legendPosition = 'top',
    legendAlign = 'center',
}: HighlightTableBlockProps) => {
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

    const textStyles = text({variant: getTextStyles(contentSize)});

    useEffect(() => {
        const blockElem = blockRef.current;
        const tableContentElem = tableContentRef.current;

        if (!tableContentElem || !blockElem) return () => {};

        const updateSizes = debounce(() => {
            const width = Math.max(648, blockElem.clientWidth - 24 - 2); // 24 - padding, 2 - border
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
            if (tableElem.clientWidth === tableElem.scrollWidth) {
                if (scrollBar.style.getPropertyValue('display') !== 'none') {
                    scrollBar.style.setProperty('display', `none`);
                }
            } else if (scrollBar.style.getPropertyValue('display') !== 'block') {
                scrollBar.style.setProperty('display', `block`);
            }
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

    const renderLegend = useMemo(
        () =>
            Boolean(legend.length) && (
                <div
                    className={`${b('legend', {
                        left: legendAlign === 'left',
                        right: legendAlign === 'right',
                        'position-top': legendPosition === 'top',
                        'position-bottom': legendPosition === 'bottom',
                    })} ${textStyles}`}
                >
                    {legend.map((item, index) => (
                        <HTML className={b('legend-item')} block key={String(index)}>
                            {item}
                        </HTML>
                    ))}
                </div>
            ),
        [legend, legendAlign, legendPosition, textStyles],
    );

    return (
        <div ref={blockRef} className={b()}>
            {(title || description) && (
                <Title className={b('title')} title={title} subtitle={description} />
            )}
            {legendPosition === 'top' && renderLegend}
            <div ref={tableRef} className={`${b('table')} ${textStyles}`}>
                <div ref={tableContentRef} className={b('content')}>
                    <div className={b('head')}>{renderRow(firstRow, 0)}</div>
                    <div className={b('body')}>{otherRows.map(renderRow)}</div>
                </div>
            </div>
            <div ref={scrollBarRef} className={b('scrollbar')}>
                <div ref={scrollThumbRef} />
            </div>
            {legendPosition === 'bottom' && renderLegend}
        </div>
    );
};

export default HighlightTableBlock;
