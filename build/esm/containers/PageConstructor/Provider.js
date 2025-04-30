import React, { Fragment } from 'react';
import { DEFAULT_THEME } from '../../components/constants';
import { AnalyticsContext } from '../../context/analyticsContext';
import { DEFAULT_FORMS_CONTEXT_VALUE, FormsContext, } from '../../context/formsContext/FormsContext';
import { ImageContext } from '../../context/imageContext';
import { LocaleContext } from '../../context/localeContext';
import { LocationContext } from '../../context/locationContext';
import { MapsContext, initialMapValue } from '../../context/mapsContext/mapsContext';
import { MobileContext } from '../../context/mobileContext';
import { ProjectSettingsContext, } from '../../context/projectSettingsContext';
import { SSRContext } from '../../context/ssrContext';
import { ThemeContext } from '../../context/theme';
export const PageConstructorProvider = (props) => {
    const { isMobile, mapsContext = initialMapValue, locale = {}, location = {}, analytics = {}, ssrConfig = {}, projectSettings = {}, theme = DEFAULT_THEME, children, image = {}, forms = DEFAULT_FORMS_CONTEXT_VALUE, } = props;
    /* eslint-disable react/jsx-key */
    const context = [
        React.createElement(ThemeContext.Provider, { value: { theme } }),
        React.createElement(ProjectSettingsContext.Provider, { value: projectSettings }),
        React.createElement(LocaleContext.Provider, { value: locale }),
        React.createElement(ImageContext.Provider, { value: image }),
        React.createElement(LocationContext.Provider, { value: location }),
        React.createElement(MobileContext.Provider, { value: Boolean(isMobile) }),
        React.createElement(MapsContext.Provider, { value: mapsContext }),
        React.createElement(AnalyticsContext.Provider, { value: analytics }),
        React.createElement(FormsContext.Provider, { value: forms }),
        React.createElement(SSRContext.Provider, { value: { isServer: ssrConfig === null || ssrConfig === void 0 ? void 0 : ssrConfig.isServer } }),
    ].reduceRight((prev, provider) => React.cloneElement(provider, {}, prev), children);
    /* eslint-enable react/jsx-key */
    return React.createElement(Fragment, null, context);
};
