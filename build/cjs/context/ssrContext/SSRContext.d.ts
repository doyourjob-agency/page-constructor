import React from 'react';
export interface SSRContextProps {
    isServer?: boolean;
}
export declare const SSRContext: React.Context<SSRContextProps>;
