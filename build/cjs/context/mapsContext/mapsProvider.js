"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapProvider = exports.gmapApiKeyIdInLS = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const mapsContext_1 = require("./mapsContext");
exports.gmapApiKeyIdInLS = 'gmap-api-key';
const MapProvider = ({ type = mapsContext_1.MapType.Yandex, scriptSrc, apiKey, children, }) => {
    const initialKeyValue = type === mapsContext_1.MapType.Google
        ? apiKey || localStorage.getItem(exports.gmapApiKeyIdInLS) || ''
        : apiKey || '';
    const [currentApiKey, setKey] = (0, react_1.useState)(initialKeyValue);
    return (react_1.default.createElement(mapsContext_1.MapsContext.Provider, { value: { apiKey: currentApiKey, setKey, scriptSrc, type } }, children));
};
exports.MapProvider = MapProvider;
