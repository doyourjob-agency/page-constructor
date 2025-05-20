import React from 'react';
export const PressReleasesContext = React.createContext({
    pressReleases: [],
    page: 1,
    pageSize: 10,
    onLoadMore: () => { },
});
