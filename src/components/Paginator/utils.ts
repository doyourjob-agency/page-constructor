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
            key: String(i),
            dataKey: String(i),
            type: 'page',
            active: page === i,
            onClick: handlePageClick,
        });
    };

    const addEllipsis = (key: string) => {
        paginatorItems.push({
            key,
            dataKey: key,
            type: 'ellipsis',
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
        addEllipsis('ellipsis-right');
        addPage(pagesCount);
        return paginatorItems;
    }

    if (page >= pagesCount - 3) {
        addPage(1);
        addEllipsis('ellipsis-left');
        for (let i = pagesCount - 4; i <= pagesCount; i++) {
            addPage(i);
        }
        return paginatorItems;
    }

    addPage(1);
    addEllipsis('ellipsis-left');
    addPage(page - 1);
    addPage(page);
    addPage(page + 1);
    addEllipsis('ellipsis-right');
    addPage(pagesCount);

    return paginatorItems;
};

export const getPagesCount = (
    props: Pick<PaginatorProps, 'totalItems' | 'itemsPerPage' | 'maxPages'>,
) => {
    const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);

    return Number.isFinite(props.maxPages) ? Math.min(totalPages, props.maxPages) : totalPages;
};
