import React from 'react';

import {ReportsItem, ReportsItemProps, SelectProps} from '../../models';

interface Item extends ReportsItem {
    url?: string;
    filters?: Record<string, string[]>;
    options?: {
        date?: string;
    };
}

interface Select extends SelectProps {
    init: string;
}

type ReportsData = {
    selects?: Select[];
    loading?: boolean;
    items: Item[];
    itemsPerPage?: number;
} & Pick<ReportsItemProps, 'filesOutline'>;

export type ReportsContextProps = Record<string, ReportsData>;

export const ReportsContext = React.createContext<ReportsContextProps>({});
