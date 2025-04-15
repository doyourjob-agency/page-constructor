"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const mapsContext_1 = require("../../context/mapsContext/mapsContext");
const GoogleMap_1 = tslib_1.__importDefault(require("./GoogleMap"));
const YandexMap_1 = tslib_1.__importDefault(require("./YMap/YandexMap"));
const Map = (props) => {
    const { type } = (0, react_1.useContext)(mapsContext_1.MapsContext);
    switch (type) {
        case mapsContext_1.MapType.Yandex:
            return react_1.default.createElement(YandexMap_1.default, Object.assign({}, props));
        case mapsContext_1.MapType.Google:
            return react_1.default.createElement(GoogleMap_1.default, Object.assign({}, props));
        default:
            return null;
    }
};
exports.Map = Map;
exports.default = exports.Map;
