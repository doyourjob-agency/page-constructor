import { __rest } from "tslib";
import React, { useContext } from 'react';
import { MobileContext } from '../../context/mobileContext';
import { SliderType } from '../../models';
import { block } from '../../utils';
import Header from '../Header/Header';
import { SliderBlock } from '../index';
import './HeaderSlider.css';
const b = block('header-slider-block');
export const HeaderSliderBlock = (_a) => {
    var { items, arrows } = _a, props = __rest(_a, ["items", "arrows"]);
    const isMobile = useContext(MobileContext);
    const showArrows = isMobile ? false : arrows;
    return (React.createElement("div", { className: b('wrapper'), "data-qa": "header-slider" },
        React.createElement(SliderBlock, Object.assign({}, props, { arrows: showArrows, slidesToShow: 1, type: SliderType.HeaderCard, animated: false, blockClassName: b(), arrowSize: 20 }), items.map((item, index) => (React.createElement("div", { key: index, className: b('item'), "data-qa": `header-slider-item-${index + 1}` },
            React.createElement(Header, Object.assign({}, item, { className: b('item-content') }))))))));
};
export default HeaderSliderBlock;
