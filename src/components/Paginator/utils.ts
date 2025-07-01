import {GetPageConfigParams, PaginatorItemProps, PaginatorProps} from './types';

export const getPageConfigs = ({page, pagesCount, handlePageClick}: GetPageConfigParams) => {
    const paginatorItems: PaginatorItemProps[] = [];

    const showLeftDots = page > 4;
    const showRightDots = page < pagesCount - 3;

    const addPage = (i: number) => {
        paginatorItems.push({
            key: String(i),
            dataKey: String(i),
            index: i,
            mods: {type: 'page', active: page === i},
            onClick: handlePageClick,
            content: i,
        });
    };

    if (pagesCount <= 5) {
        for (let i = 1; i <= pagesCount; i++) {
            addPage(i);
        }

        return paginatorItems;
    }

    // Всегда добавляем первую
    addPage(1);

    // Левые троеточия
    if (showLeftDots) {
        paginatorItems.push({
            key: 'ellipsis',
            dataKey: 'ellipsis',
            index: -1,
            mods: {type: 'ellipsis'},
            content: '…',
        });
    }

    // Центральный блок
    let start = Math.max(2, page - 1);
    let end = Math.min(pagesCount - 1, page + 1);

    if (!showLeftDots) {
        start = 2;
        end = 5;
    } else if (!showRightDots) {
        start = pagesCount - 4;
        end = pagesCount - 1;
    }

    for (let i = start; i <= end; i++) {
        addPage(i);
    }

    // Правые троеточия
    if (showRightDots) {
        paginatorItems.push({
            key: 'ellipsis',
            dataKey: 'ellipsis',
            index: -2,
            mods: {type: 'ellipsis'},
            content: '…',
        });
    }

    // Последняя страница
    if (pagesCount > 1) {
        addPage(pagesCount);
    }

    return paginatorItems;
};

export const getPagesCount = (
    props: Pick<PaginatorProps, 'totalItems' | 'itemsPerPage' | 'maxPages'>,
) => {
    const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);

    return Number.isFinite(props.maxPages) ? Math.min(totalPages, props.maxPages) : totalPages;
};
