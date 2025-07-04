import type {ReactNode} from 'react';

import type {NoStrictEntityMods} from '@bem-react/classname';

import type {ClassNameProps} from '../../models/common';

export interface PaginatorItemProps {
    key: string | ArrowType;
    dataKey: string | ArrowType;
    mods: NoStrictEntityMods;
    content: ReactNode;
    onClick?: (key: number | ArrowType) => void;
    index: number;
}

export type PaginatorProps = {
    page: number;
    totalItems: number;
    itemsPerPage: number;
    maxPages: number;
    onPageChange: (page: number) => void;
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
