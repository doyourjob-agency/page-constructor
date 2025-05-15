export var Theme;
(function (Theme) {
    Theme["Light"] = "light";
    Theme["Dark"] = "dark";
})(Theme || (Theme = {}));
export const themeNames = {
    [Theme.Light]: 'Light',
    [Theme.Dark]: 'Dark',
};
export var PredefinedEventTypes;
(function (PredefinedEventTypes) {
    PredefinedEventTypes["Default"] = "default-event";
    PredefinedEventTypes["Play"] = "play";
    PredefinedEventTypes["Stop"] = "stop";
})(PredefinedEventTypes || (PredefinedEventTypes = {}));
export var DefaultEventNames;
(function (DefaultEventNames) {
    DefaultEventNames["ShareButton"] = "share-button-click";
    DefaultEventNames["Button"] = "button-click";
    DefaultEventNames["CardBase"] = "card-base-click";
    DefaultEventNames["Link"] = "link-click";
    DefaultEventNames["ReactPlayerControls"] = "react-player-controls-click";
    DefaultEventNames["YandexFormSubmit"] = "yandex-form-submit";
    DefaultEventNames["HubspotFormSubmit"] = "hubspot-form-submit";
    DefaultEventNames["QuoteButton"] = "quote-button-click";
    DefaultEventNames["BackLink"] = "back-link-click";
    DefaultEventNames["Breadcrumb"] = "breadcrumb-click";
    DefaultEventNames["VideoPreview"] = "video-preview-click";
})(DefaultEventNames || (DefaultEventNames = {}));
