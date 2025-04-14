import React from 'react';

export interface PageHelperContextProps {
    headerBlockTag?: string | null;
    backButton?: {
        link: string;
        text: string;
    };
}

export const PageHelperContext = React.createContext<PageHelperContextProps>({});
