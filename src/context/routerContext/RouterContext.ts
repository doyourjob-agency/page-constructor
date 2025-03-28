import React from 'react';

export interface RouterContextProps {
    query: {[key: string]: string | string[] | undefined};
}

export const RouterContext = React.createContext<RouterContextProps>({query: {}});
