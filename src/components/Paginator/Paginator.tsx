import React, {useCallback} from 'react';

import {block} from '../../utils/cn';

import PaginatorItem from './components/PaginatorItem';
import {ArrowType, PaginatorProps} from './types';
import {getPageConfigs, getPagesCount} from './utils';

import './Paginator.scss';

const b = block('paginator');

const DEFAULT_PAGE_COUNT_FOR_SHOW_SUPPORT_BUTTONS = 5;

export const Paginator = ({
    itemsPerPage,
    totalItems,
    maxPages,
    page,
    className,
    onPageChange,
    pageCountForShowSupportButtons = DEFAULT_PAGE_COUNT_FOR_SHOW_SUPPORT_BUTTONS,
}: PaginatorProps) => {
    const pagesCount = getPagesCount({itemsPerPage, totalItems, maxPages});
    const isShowSupportButtons = pagesCount > pageCountForShowSupportButtons;

    const handlePageClick = useCallback(
        (index: number | ArrowType) => {
            switch (index) {
                case ArrowType.Prev:
                    onPageChange((prev) => prev - 1);
                    break;
                case ArrowType.Next:
                    onPageChange((prev) => prev + 1);
                    break;
                default:
                    onPageChange(index);
            }
        },
        [onPageChange],
    );

    const items = getPageConfigs({page, pagesCount, handlePageClick});

    if (pagesCount <= 1) return null;

    return (
        <ul className={b(null, className)} role="navigation" aria-label="Pagination Navigation">
            {isShowSupportButtons && page > 1 && (
                <PaginatorItem dataKey={ArrowType.Prev} onClick={handlePageClick} />
            )}
            {items.map((item, index) => (
                <PaginatorItem key={index} {...item} />
            ))}
            {isShowSupportButtons && page < pagesCount && (
                <PaginatorItem dataKey={ArrowType.Next} onClick={handlePageClick} />
            )}
        </ul>
    );
};

export default Paginator;
