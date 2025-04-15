"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMapApiKey = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const mapsContext_1 = require("./mapsContext");
function useMapApiKey() {
    const { apiKey, setKey } = react_1.default.useContext(mapsContext_1.MapsContext);
    return [apiKey, setKey];
}
exports.useMapApiKey = useMapApiKey;
