import React from 'react';

import {CaseStudyCardProps} from '../../models';

export type MiniCaseContextProps = Record<string, CaseStudyCardProps>;

export const MiniCaseContext = React.createContext<MiniCaseContextProps>({});
