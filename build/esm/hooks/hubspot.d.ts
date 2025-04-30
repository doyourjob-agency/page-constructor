import { HubspotEventHandlers } from '../utils/hubspot';
/**
 * @param {string} formId
 * @returns {void}
 *
 * @description Use this hook on top level frame to loopback hubspot forms events back to origin frame
 */
export declare function useLoopBackHubspotEvents(formId: string): void;
/**
 * @param {HubspotEventHandlers} handlers form event handlers, should be stable across renders
 * @param {string} formId
 * @returns {void}
 *
 * @description Use this hook in any frame to handle hubspot forms events
 */
export declare function useHandleHubspotEvents(handlers: HubspotEventHandlers, formId: string): void;
