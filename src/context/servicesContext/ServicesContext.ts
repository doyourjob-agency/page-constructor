import React from 'react';

type Service = {
    id: number;
    name: string;
    slug: string;
    icon?: string | null;
    docUrl?: string | null;
    pricesUrl?: string | null;
    tag?: string | null;
    consoleUrl?: string | null;
    description?: string | null;
    url?: string | null;
};

type ServicesCategory = {
    name: string;
    slug: string;
    services: Service[];
};

export interface ServicesContextProps {
    dataByCategories: ServicesCategory[];
    icons: Record<string, string>;
}

export const ServicesContext = React.createContext<ServicesContextProps>({
    icons: {},
    dataByCategories: [],
});
