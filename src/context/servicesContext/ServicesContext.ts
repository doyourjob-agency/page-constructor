import React from 'react';

export type DefaultService = {
    id: number;
    name: string;
    slug: string;
    docUrl?: string | null;
    pricesUrl?: string | null;
    tag?: string | null;
    consoleUrl?: string | null;
    description?: string | null;
    url?: string | null;
};

export interface ServiceCategory {
    name: string;
    slug: string;
}

export interface ServiceCategoryWithServices extends ServiceCategory {
    services: DefaultService[];
}

export interface ServicesContextProps {
    dataByCategories: ServiceCategoryWithServices[];
    icons: Record<string, string>;
}

export const ServicesContext = React.createContext<ServicesContextProps>({
    icons: {},
    dataByCategories: [],
});
