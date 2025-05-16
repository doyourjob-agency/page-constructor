"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapsContext = exports.initialMapValue = exports.Maplangs = exports.MapType = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
var MapType;
(function (MapType) {
    MapType["Yandex"] = "yandex";
    MapType["Google"] = "google";
})(MapType = exports.MapType || (exports.MapType = {}));
exports.Maplangs = {
    ru: 'ru_RU',
    en: 'en_US',
};
exports.initialMapValue = {
    apiKey: '',
    scriptSrc: '',
    type: MapType.Yandex,
};
exports.MapsContext = react_1.default.createContext(exports.initialMapValue);
