import React from 'react';
export const InnerContext = React.createContext({
    blockTypes: [],
    subBlockTypes: [],
    headerBlockTypes: [],
    navigationBlockTypes: [],
    itemMap: {},
    navItemMap: {},
    microdata: {},
});
