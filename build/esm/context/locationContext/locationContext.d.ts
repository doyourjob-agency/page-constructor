import React from 'react';
import { RouterLinkProps } from '../../components/RouterLink/RouterLink';
export interface History {
    action: 'PUSH' | 'POP' | 'REPLACE' | '';
    replace(location: Partial<Location>): void;
    push(location: Partial<Location>): void;
    goBack(): void;
    length: number;
}
export type RouterLink = React.ComponentClass<RouterLinkProps> | React.FC<React.PropsWithChildren<RouterLinkProps>>;
export type LocationContextProps = {
    history?: History;
    search?: string;
    hash?: string;
    pathname?: string;
    hostname?: string;
    Link?: RouterLink;
    asPath?: string;
};
export declare const LocationContext: React.Context<LocationContextProps>;
