import React from 'react';

export interface PageHelperContextProps {
    headerBlockTag?: string | null;
    isSolutionPage?: boolean;
}

export const PageHelperContext = React.createContext<PageHelperContextProps>({});
