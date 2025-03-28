import React from 'react';
export interface PageHelperContextProps {
    headerBlockTag?: string | null;
    isSolutionPage?: boolean;
}
export declare const PageHelperContext: React.Context<PageHelperContextProps>;
