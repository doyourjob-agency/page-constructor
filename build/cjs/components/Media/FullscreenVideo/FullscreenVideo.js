"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const FullscreenMedia_1 = tslib_1.__importDefault(require("../../FullscreenMedia/FullscreenMedia"));
const Video_1 = tslib_1.__importDefault(require("../Video/Video"));
const FullscreenVideo = (props) => {
    return (react_1.default.createElement(FullscreenMedia_1.default, null, (classNames) => react_1.default.createElement(Video_1.default, Object.assign({}, props, classNames))));
};
exports.default = FullscreenVideo;
