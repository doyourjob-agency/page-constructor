"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AnimateBlock_1 = tslib_1.__importDefault(require("../../components/AnimateBlock/AnimateBlock"));
const sub_blocks_1 = require("../../sub-blocks");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('banner-block');
const BannerBlock = (props) => {
    const { animated, className } = props, bannerProps = tslib_1.__rest(props, ["animated", "className"]);
    return (react_1.default.createElement(AnimateBlock_1.default, { className: b(null, className), animate: animated },
        react_1.default.createElement(sub_blocks_1.BannerCard, Object.assign({}, bannerProps))));
};
exports.BannerBlock = BannerBlock;
exports.default = exports.BannerBlock;
