"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderSliderBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const mobileContext_1 = require("../../context/mobileContext");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const Header_1 = tslib_1.__importDefault(require("../Header/Header"));
const index_1 = require("../index");
const b = (0, utils_1.block)('header-slider-block');
const HeaderSliderBlock = (_a) => {
    var { items, arrows } = _a, props = tslib_1.__rest(_a, ["items", "arrows"]);
    const isMobile = (0, react_1.useContext)(mobileContext_1.MobileContext);
    const showArrows = isMobile ? false : arrows;
    return (react_1.default.createElement("div", { className: b('wrapper'), "data-qa": "header-slider" },
        react_1.default.createElement(index_1.SliderBlock, Object.assign({}, props, { arrows: showArrows, slidesToShow: 1, type: models_1.SliderType.HeaderCard, animated: false, blockClassName: b(), arrowSize: 20 }), items.map((item, index) => (react_1.default.createElement("div", { key: index, className: b('item'), "data-qa": `header-slider-item-${index + 1}` },
            react_1.default.createElement(Header_1.default, Object.assign({}, item, { className: b('item-content') }))))))));
};
exports.HeaderSliderBlock = HeaderSliderBlock;
exports.default = exports.HeaderSliderBlock;
