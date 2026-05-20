import React from 'react';

export type PartnerData = {
    url: string;
    title?: string;
    subtitle?: string;
    tags?: string[];
    image?: string;
};

export type PartnersContextProps = {
    items?: PartnerData[];
    page?: number;
    pageSize?: number;
    onLoadMore?: () => void;
};

export const PartnersContext = React.createContext<PartnersContextProps>({});
