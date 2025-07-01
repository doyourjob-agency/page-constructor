import React from 'react';

import {ReportsSectionsSection, SelectProps} from '../../models';

interface Section extends ReportsSectionsSection {
    filters?: Record<string, string[]>;
}

interface Select extends SelectProps {
    init: string;
}

type ReportsSectionsData = {
    selects?: Select[];
    sections: Section[];
};

export type ReportsSectionsContextProps = Record<string, ReportsSectionsData>;

export const ReportsSectionsContext = React.createContext<ReportsSectionsContextProps>({});
