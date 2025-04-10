"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const mobileContext_1 = require("../../context/mobileContext");
const theme_1 = require("../../context/theme");
const hooks_1 = require("../../hooks");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const HubspotFormContainer_1 = tslib_1.__importDefault(require("./HubspotFormContainer"));
const b = (0, utils_1.block)('hubspot-form');
const HubspotForm = (0, react_1.forwardRef)((props, ref) => {
    const { className, theme: themeProp, isMobile: isMobileProp, formId, formInstanceId, portalId, region, formClassName, 
    // hubspotEvents, // TODO: decide how to handle them
    analyticsEvents, onBeforeSubmit, onSubmit, onBeforeLoad, onLoad, createDOMElement, onSubmitError, } = props;
    const themeValue = (0, theme_1.useTheme)();
    const handleAnalytics = (0, hooks_1.useAnalytics)(models_1.DefaultEventNames.HubspotFormSubmit);
    const isMobileValue = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const theme = themeProp !== null && themeProp !== void 0 ? themeProp : themeValue;
    const mobile = isMobileProp !== null && isMobileProp !== void 0 ? isMobileProp : isMobileValue;
    const handlers = (0, react_1.useMemo)(() => ({
        onBeforeLoad,
        onBeforeSubmit,
        onLoad,
        onSubmitError,
        onSubmit: (event) => {
            handleAnalytics(analyticsEvents);
            onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(event);
        },
    }), [
        onBeforeLoad,
        onBeforeSubmit,
        onLoad,
        handleAnalytics,
        analyticsEvents,
        onSubmit,
        onSubmitError,
    ]);
    (0, hooks_1.useHandleHubspotEvents)(handlers, formId);
    return (react_1.default.createElement(HubspotFormContainer_1.default, { createDOMElement: createDOMElement, key: [formClassName, formId, formInstanceId, portalId, region].join(), className: b({ theme, mobile }, className), formClassName: formClassName, formId: formId, portalId: portalId, formInstanceId: formInstanceId, region: region, ref: ref }));
});
HubspotForm.displayName = 'HubspotForm';
exports.default = HubspotForm;
