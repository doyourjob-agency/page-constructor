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
export declare const PressReleasesContext: React.Context<PressReleasesContextProps>;
