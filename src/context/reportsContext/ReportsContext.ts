import React from 'react';

import {ReportItemProps, ReportItemType, SelectProps} from '../../models';

interface Item extends ReportItemType {
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
    items?: Item[];
    itemsPerPage?: number;
} & Pick<ReportItemProps, 'filesOutline'>;

export type ReportsContextProps = Record<string, ReportsData>;

export const ReportsContext = React.createContext<ReportsContextProps>({});
