import React from 'react';

type ComponentModule<P = {}> = {
    default: React.ComponentType<P>;
};
export declare type LoaderComponent<P = {}> = Promise<React.ComponentType<P> | ComponentModule<P>>;
export declare type Loader<P = {}> = (() => LoaderComponent<P>) | LoaderComponent<P>;

export interface SSRContextProps {
    isServer?: boolean;
    dynamic?: <P = {}>(
        dynamicOptions: Loader<P>,
        options?: {ssr?: boolean},
    ) => React.ComponentType<P>;
}

export const SSRContext = React.createContext<SSRContextProps>({});
