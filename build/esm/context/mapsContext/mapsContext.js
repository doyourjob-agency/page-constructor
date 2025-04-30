import React from 'react';
export var MapType;
(function (MapType) {
    MapType["Yandex"] = "yandex";
    MapType["Google"] = "google";
})(MapType || (MapType = {}));
export const Maplangs = {
    ru: 'ru_RU',
    en: 'en_US',
};
export const initialMapValue = {
    apiKey: '',
    scriptSrc: '',
    type: MapType.Yandex,
};
export const MapsContext = React.createContext(initialMapValue);
