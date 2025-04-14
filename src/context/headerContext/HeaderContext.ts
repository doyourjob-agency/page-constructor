import React from 'react';

export interface HeaderContextProps {
    blockTag?: string | null;
    backButton?: {
        link: string;
        text: string;
    };
}

export const HeaderContext = React.createContext<HeaderContextProps>({});
