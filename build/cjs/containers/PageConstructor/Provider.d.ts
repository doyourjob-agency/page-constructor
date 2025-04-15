import React from 'react';
import { AnalyticsContextProps } from '../../context/analyticsContext';
import { FormsContextProps } from '../../context/formsContext/FormsContext';
import { ImageContextProps } from '../../context/imageContext';
import { LocaleContextProps } from '../../context/localeContext';
import { LocationContextProps } from '../../context/locationContext';
import { MapsContextType } from '../../context/mapsContext/mapsContext';
import { ProjectSettingsContextProps } from '../../context/projectSettingsContext';
import { SSRContextProps } from '../../context/ssrContext';
import { Theme } from '../../models';
export interface PageConstructorProviderProps {
    isMobile?: boolean;
    locale?: LocaleContextProps;
    location?: LocationContextProps;
    ssrConfig?: SSRContextProps;
    theme?: Theme;
    mapsContext?: MapsContextType;
    projectSettings?: ProjectSettingsContextProps;
    analytics?: AnalyticsContextProps;
    forms?: FormsContextProps;
    image?: ImageContextProps;
}
export declare const PageConstructorProvider: (props: React.PropsWithChildren<PageConstructorProviderProps>) => JSX.Element;
