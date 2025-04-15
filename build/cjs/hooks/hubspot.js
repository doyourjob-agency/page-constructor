"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHandleHubspotEvents = exports.useLoopBackHubspotEvents = void 0;
const react_1 = require("react");
const hubspot_1 = require("../utils/hubspot");
/**
 * @param {string} formId
 * @returns {void}
 *
 * @description Use this hook on top level frame to loopback hubspot forms events back to origin frame
 */
function useLoopBackHubspotEvents(formId) {
    (0, react_1.useEffect)(() => {
        const topHandler = (0, hubspot_1.loopBackHabspotEvents)(formId);
        window.addEventListener('message', topHandler, { passive: true });
        return () => {
            window.removeEventListener('message', topHandler);
        };
    }, [formId]);
}
exports.useLoopBackHubspotEvents = useLoopBackHubspotEvents;
/**
 * @param {HubspotEventHandlers} handlers form event handlers, should be stable across renders
 * @param {string} formId
 * @returns {void}
 *
 * @description Use this hook in any frame to handle hubspot forms events
 */
function useHandleHubspotEvents(handlers, formId) {
    (0, react_1.useEffect)(() => {
        const topHandler = (0, hubspot_1.handleHubspotEvents)(handlers, formId);
        window.addEventListener('message', topHandler, { passive: true });
        return () => {
            window.removeEventListener('message', topHandler);
        };
    }, [handlers, formId]);
}
exports.useHandleHubspotEvents = useHandleHubspotEvents;
