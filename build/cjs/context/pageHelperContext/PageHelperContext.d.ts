import React from 'react';
export interface PageHelperContextProps {
    headerBlockTag?: string | null;
    backButton?: {
        link: string;
        text: string;
    };
}
export declare const PageHelperContext: React.Context<PageHelperContextProps>;
