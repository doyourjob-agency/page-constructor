/// <reference types="react" />
export interface Refable<T> {
    ref?: React.Ref<T>;
}
export declare enum Theme {
    Light = "light",
    Dark = "dark"
}
export declare const themeNames: Record<Theme, string>;
export type Modifiers = {
    [name: string]: string | boolean | undefined;
};
export interface ClassNameProps {
    className?: string;
}
export interface QAProps {
    qa?: string;
}
export type Timeout = ReturnType<typeof setTimeout> | undefined;
export declare enum PredefinedEventTypes {
    Default = "default-event",
    Play = "play",
    Stop = "stop"
}
export declare enum DefaultEventNames {
    ShareButton = "share-button-click",
    Button = "button-click",
    CardBase = "card-base-click",
    Link = "link-click",
    ReactPlayerControls = "react-player-controls-click",
    YandexFormSubmit = "yandex-form-submit",
    HubspotFormSubmit = "hubspot-form-submit",
    QuoteButton = "quote-button-click",
    BackLink = "back-link-click",
    Breadcrumb = "breadcrumb-click",
    VideoPreview = "video-preview-click"
}
export type AnalyticsCounters = {
    include?: string[];
    exclude?: string[];
};
export type AnalyticsEvent<T = {}> = T & {
    name: string;
    type?: string;
    counters?: AnalyticsCounters;
    context?: string;
    target?: string;
};
export type AnalyticsEventsProp = AnalyticsEvent | AnalyticsEvent[];
export interface AnalyticsEventsBase {
    analyticsEvents?: AnalyticsEventsProp;
}
