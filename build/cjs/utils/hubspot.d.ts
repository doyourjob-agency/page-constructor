export type HubspotEventName = 'onBeforeFormInit' | 'onFormReady' | 'onFormSubmit' | 'onFormSubmitted' | 'onFormError' | `_${string}`;
export interface HubspotEventData {
    type: HubspotEventName | string;
    eventName: HubspotEventName;
    id: string;
    data?: unknown;
}
export declare function isHubspotEventData(maybeData: unknown): maybeData is HubspotEventData;
export interface HubspotEventHandlers {
    onBeforeLoad?: (arg: HubspotEventData) => void;
    onBeforeSubmit?: (arg: HubspotEventData) => void;
    onSubmit?: (arg: HubspotEventData) => void;
    onLoad?: (arg: HubspotEventData) => void;
    onSubmitError?: (arg: HubspotEventData) => void;
}
export declare function loopBackHabspotEvents(formId: string): ({ data, source, origin }: MessageEvent) => void;
export declare function handleHubspotEvents(handlers: HubspotEventHandlers, formId: string): ({ data }: MessageEvent) => void;
