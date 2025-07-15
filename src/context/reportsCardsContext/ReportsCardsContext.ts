import React from 'react';

import {AttachmentCardProps, SelectProps} from '../../models';

interface Item extends AttachmentCardProps {
    filters?: Record<string, string[]>;
    options?: {
        date?: string;
    };
}

interface Select extends SelectProps {
    init: string;
}

type ReportsCardsData = {
    selects?: Select[];
    items?: Item[];
};

export type ReportsCardsContextProps = Record<string, ReportsCardsData>;

export const ReportsCardsContext = React.createContext<ReportsCardsContextProps>({});
