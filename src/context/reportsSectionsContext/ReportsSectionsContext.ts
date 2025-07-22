import React from 'react';

import {ReportSectionProps, SelectProps} from '../../models';

interface Section extends ReportSectionProps {
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
