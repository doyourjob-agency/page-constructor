import React from 'react';

import {ReportsItem, ReportsItemProps, SelectProps} from '../../models';

interface Item extends ReportsItem {
    filters?: Record<string, string[]>;
}

interface Select extends SelectProps {
    init: string;
}

type ReportsData = {
    selects?: Select[];
    items: Item[];
    itemsPerPage?: number;
} & Pick<ReportsItemProps, 'filesOutline'>;

export type ReportsContextProps = Record<string, ReportsData>;

export const ReportsContext = React.createContext<ReportsContextProps>({});
