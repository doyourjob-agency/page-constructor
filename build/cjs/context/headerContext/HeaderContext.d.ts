import React from 'react';
export interface HeaderContextProps {
    blockTag?: string | null;
    backButton?: {
        link: string;
        text: string;
    };
}
export declare const HeaderContext: React.Context<HeaderContextProps>;
