import React from 'react';

export type PressRelease = {
    url: string;
    title?: string;
    date?: string;
};

export interface PressReleasesContextProps {
    items: PressRelease[];
    itemsPerPage: number;
}

export const PressReleasesContext = React.createContext<PressReleasesContextProps>({
    items: [],
    itemsPerPage: 2,
});
