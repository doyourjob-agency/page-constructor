import React from 'react';

export const OnetrustCookieList = React.memo(
    () => {
        return <div id="ot-sdk-cookie-policy" />;
    },
    () => true,
);

OnetrustCookieList.displayName = 'OnetrustCookieList';

export default OnetrustCookieList;
