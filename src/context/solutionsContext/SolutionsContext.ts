import React from 'react';

type Solution = {
    description?: string;
    name?: string;
    slug: string;
    image?: string;
};

export interface SolutionsContextProps {
    items: Solution[];
}

export const SolutionsContext = React.createContext<SolutionsContextProps>({items: []});
