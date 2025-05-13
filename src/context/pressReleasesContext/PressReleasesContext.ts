import React from 'react';

export type PressRelease = {
    url: string;
    title?: string;
    date?: string;
};

export interface PressReleasesContextProps {
    pressReleases: PressRelease[];
    page: number;
    pageSize: number;
    onLoadMore: () => void;
}

export const PressReleasesContext = React.createContext<PressReleasesContextProps>({
    pressReleases: [],
    page: 1,
    pageSize: 10,
    onLoadMore: () => {},
});
