"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Map_1 = tslib_1.__importDefault(require("../../components/Map/Map"));
const MediaBase_1 = tslib_1.__importDefault(require("../../components/MediaBase/MediaBase"));
const utils_1 = require("../../utils");
const borderSelector_1 = require("../../utils/borderSelector");
const b = (0, utils_1.block)('map-block');
const MapBlock = (_a) => {
    var { map, border, disableShadow } = _a, props = tslib_1.__rest(_a, ["map", "border", "disableShadow"]);
    const borderSelected = (0, borderSelector_1.getMediaBorder)({
        border,
        disableShadow,
    });
    return (react_1.default.createElement(MediaBase_1.default, Object.assign({}, props),
        react_1.default.createElement(MediaBase_1.default.Card, null,
            react_1.default.createElement(Map_1.default, Object.assign({}, map, { className: b({ border: borderSelected }) })))));
};
exports.MapBlock = MapBlock;
exports.default = exports.MapBlock;
