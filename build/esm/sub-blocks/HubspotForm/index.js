import React, { forwardRef, useContext, useMemo } from 'react';
import { MobileContext } from '../../context/mobileContext';
import { useTheme } from '../../context/theme';
import { useAnalytics, useHandleHubspotEvents } from '../../hooks';
import { DefaultEventNames } from '../../models';
import { block } from '../../utils';
import HubspotFormContainer from './HubspotFormContainer';
import './HubspotForm.css';
const b = block('hubspot-form');
const HubspotForm = forwardRef((props, ref) => {
    const { className, theme: themeProp, isMobile: isMobileProp, formId, formInstanceId, portalId, region, formClassName, 
    // hubspotEvents, // TODO: decide how to handle them
    analyticsEvents, onBeforeSubmit, onSubmit, onBeforeLoad, onLoad, createDOMElement, onSubmitError, } = props;
    const themeValue = useTheme();
    const handleAnalytics = useAnalytics(DefaultEventNames.HubspotFormSubmit);
    const isMobileValue = useContext(MobileContext);
    const theme = themeProp !== null && themeProp !== void 0 ? themeProp : themeValue;
    const mobile = isMobileProp !== null && isMobileProp !== void 0 ? isMobileProp : isMobileValue;
    const handlers = useMemo(() => ({
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
    useHandleHubspotEvents(handlers, formId);
    return (React.createElement(HubspotFormContainer, { createDOMElement: createDOMElement, key: [formClassName, formId, formInstanceId, portalId, region].join(), className: b({ theme, mobile }, className), formClassName: formClassName, formId: formId, portalId: portalId, formInstanceId: formInstanceId, region: region, ref: ref }));
});
HubspotForm.displayName = 'HubspotForm';
export default HubspotForm;
