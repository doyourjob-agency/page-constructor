import React from 'react';
export interface RouterContextProps {
    query: {
        [key: string]: string | string[] | undefined;
    };
}
export declare const RouterContext: React.Context<RouterContextProps>;
