import { __rest } from "tslib";
import React from 'react';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import { BannerCard } from '../../sub-blocks';
import { block } from '../../utils';
import './Banner.css';
const b = block('banner-block');
export const BannerBlock = (props) => {
    const { animated, className } = props, bannerProps = __rest(props, ["animated", "className"]);
    return (React.createElement(AnimateBlock, { className: b(null, className), animate: animated },
        React.createElement(BannerCard, Object.assign({}, bannerProps))));
};
export default BannerBlock;
