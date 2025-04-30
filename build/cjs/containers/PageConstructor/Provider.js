"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageConstructorProvider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const constants_1 = require("../../components/constants");
const analyticsContext_1 = require("../../context/analyticsContext");
const FormsContext_1 = require("../../context/formsContext/FormsContext");
const imageContext_1 = require("../../context/imageContext");
const localeContext_1 = require("../../context/localeContext");
const locationContext_1 = require("../../context/locationContext");
const mapsContext_1 = require("../../context/mapsContext/mapsContext");
const mobileContext_1 = require("../../context/mobileContext");
const projectSettingsContext_1 = require("../../context/projectSettingsContext");
const ssrContext_1 = require("../../context/ssrContext");
const theme_1 = require("../../context/theme");
const PageConstructorProvider = (props) => {
    const { isMobile, mapsContext = mapsContext_1.initialMapValue, locale = {}, location = {}, analytics = {}, ssrConfig = {}, projectSettings = {}, theme = constants_1.DEFAULT_THEME, children, image = {}, forms = FormsContext_1.DEFAULT_FORMS_CONTEXT_VALUE, } = props;
    /* eslint-disable react/jsx-key */
    const context = [
        react_1.default.createElement(theme_1.ThemeContext.Provider, { value: { theme } }),
        react_1.default.createElement(projectSettingsContext_1.ProjectSettingsContext.Provider, { value: projectSettings }),
        react_1.default.createElement(localeContext_1.LocaleContext.Provider, { value: locale }),
        react_1.default.createElement(imageContext_1.ImageContext.Provider, { value: image }),
        react_1.default.createElement(locationContext_1.LocationContext.Provider, { value: location }),
        react_1.default.createElement(mobileContext_1.MobileContext.Provider, { value: Boolean(isMobile) }),
        react_1.default.createElement(mapsContext_1.MapsContext.Provider, { value: mapsContext }),
        react_1.default.createElement(analyticsContext_1.AnalyticsContext.Provider, { value: analytics }),
        react_1.default.createElement(FormsContext_1.FormsContext.Provider, { value: forms }),
        react_1.default.createElement(ssrContext_1.SSRContext.Provider, { value: { isServer: ssrConfig === null || ssrConfig === void 0 ? void 0 : ssrConfig.isServer } }),
    ].reduceRight((prev, provider) => react_1.default.cloneElement(provider, {}, prev), children);
    /* eslint-enable react/jsx-key */
    return react_1.default.createElement(react_1.Fragment, null, context);
};
exports.PageConstructorProvider = PageConstructorProvider;
