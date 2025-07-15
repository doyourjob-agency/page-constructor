import React, {useMemo} from 'react';

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

    const paginatorItems = useMemo(() => {
        const items = getPageConfigs({page, pagesCount, handlePageClick: onPageChange});
        if (isShowSupportButtons && page > 1) {
            items.unshift({
                key: ArrowType.Prev,
                dataKey: ArrowType.Prev,
                type: ArrowType.Prev,
                onClick: onPageChange,
            });
        }

        if (isShowSupportButtons && page < pagesCount) {
            items.push({
                key: ArrowType.Next,
                dataKey: ArrowType.Next,
                type: ArrowType.Next,
                onClick: onPageChange,
            });
        }

        return items;
    }, [page, pagesCount, onPageChange, isShowSupportButtons]);

    if (pagesCount <= 1) return null;

    return (
        <ul className={b(null, className)} role="navigation" aria-label="Pagination Navigation">
            {paginatorItems.map(({key, ...rest}) => (
                <PaginatorItem key={`page_${key}`} {...rest} />
            ))}
        </ul>
    );
};

export default Paginator;
