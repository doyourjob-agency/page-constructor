"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultEventNames = exports.PredefinedEventTypes = exports.themeNames = exports.Theme = void 0;
var Theme;
(function (Theme) {
    Theme["Light"] = "light";
    Theme["Dark"] = "dark";
})(Theme = exports.Theme || (exports.Theme = {}));
exports.themeNames = {
    [Theme.Light]: 'Light',
    [Theme.Dark]: 'Dark',
};
var PredefinedEventTypes;
(function (PredefinedEventTypes) {
    PredefinedEventTypes["Default"] = "default-event";
    PredefinedEventTypes["Play"] = "play";
    PredefinedEventTypes["Stop"] = "stop";
})(PredefinedEventTypes = exports.PredefinedEventTypes || (exports.PredefinedEventTypes = {}));
var DefaultEventNames;
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
})(DefaultEventNames = exports.DefaultEventNames || (exports.DefaultEventNames = {}));
