import React from 'react';
export interface StylesContextProps {
    setStyles: (newValues: Record<string, string>) => void;
    pricesDetailedDescriptionHeight?: string;
}
export declare const StylesContext: React.Context<StylesContextProps>;
