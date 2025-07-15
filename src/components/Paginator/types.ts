import type {ClassNameProps} from '../../models/common';

export interface PaginatorItemProps {
    dataKey: string | ArrowType | 'ellipsis';
    type?: string;
    active?: boolean;
    onClick?: (key: number | ArrowType) => void;
}

export type PaginatorProps = {
    page: number;
    totalItems: number;
    itemsPerPage: number;
    maxPages: number;
    onPageChange: React.Dispatch<React.SetStateAction<number>>;
    pageCountForShowSupportButtons?: number;
} & ClassNameProps;

export enum ArrowType {
    Prev = 'prev',
    Next = 'next',
}

export type GetPageConfigParams = {
    page: number;
    pagesCount: number;
    handlePageClick: (key: number | ArrowType) => void;
};
