import {ArrowType, PaginatorItemProps, PaginatorProps} from './types';

export const getPageConfigs = ({
    page,
    pagesCount,
    handlePageClick,
}: {
    page: number;
    pagesCount: number;
    handlePageClick: (index: number | ArrowType) => void;
}): PaginatorItemProps[] => {
    const paginatorItems: PaginatorItemProps[] = [];

    const addPage = (i: number) => {
        paginatorItems.push({
            dataKey: String(i),
            active: page === i,
            onClick: handlePageClick,
        });
    };

    if (pagesCount <= 7) {
        for (let i = 1; i <= pagesCount; i++) {
            addPage(i);
        }
        return paginatorItems;
    }

    if (page <= 4) {
        for (let i = 1; i <= 5; i++) {
            addPage(i);
        }
        paginatorItems.push({dataKey: 'ellipsis'});
        addPage(pagesCount);
        return paginatorItems;
    }

    if (page >= pagesCount - 3) {
        addPage(1);
        paginatorItems.push({dataKey: 'ellipsis'});
        for (let i = pagesCount - 4; i <= pagesCount; i++) {
            addPage(i);
        }
        return paginatorItems;
    }

    addPage(1);
    paginatorItems.push({dataKey: 'ellipsis'});
    addPage(page - 1);
    addPage(page);
    addPage(page + 1);
    paginatorItems.push({dataKey: 'ellipsis'});
    addPage(pagesCount);

    return paginatorItems;
};

export const getPagesCount = (
    props: Pick<PaginatorProps, 'totalItems' | 'itemsPerPage' | 'maxPages'>,
) => {
    const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);

    return Number.isFinite(props.maxPages) ? Math.min(totalPages, props.maxPages) : totalPages;
};
