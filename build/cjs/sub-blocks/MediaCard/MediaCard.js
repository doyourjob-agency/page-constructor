"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("../../components");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('MediaCard');
const MediaCard = (_a) => {
    var { border, analyticsEvents } = _a, mediaProps = tslib_1.__rest(_a, ["border", "analyticsEvents"]);
    return (react_1.default.createElement(components_1.CardBase, { className: b(), bodyClassName: b('body'), border: border, analyticsEvents: analyticsEvents },
        react_1.default.createElement(components_1.CardBase.Content, null,
            react_1.default.createElement(components_1.Media, Object.assign({}, mediaProps)))));
};
exports.default = MediaCard;
