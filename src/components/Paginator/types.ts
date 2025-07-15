import type {ClassNameProps} from '../../models/common';

export interface PaginatorItemProps {
    key: string | ArrowType;
    dataKey: string | ArrowType;
    type?: string;
    active?: boolean;
    onClick?: (key: number | ArrowType) => void;
}

export type PaginatorProps = {
    page: number;
    totalItems: number;
    itemsPerPage: number;
    maxPages: number;
    onPageChange: (page: number | ArrowType) => void;
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
