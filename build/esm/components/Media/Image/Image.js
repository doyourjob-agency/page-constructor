import React, { Fragment, useEffect, useState } from 'react';
import { animated, config, useSpring } from '@react-spring/web';
import debounce from 'lodash/debounce';
import SliderBlock from '../../../blocks/Slider/Slider';
import { SliderType } from '../../../models';
import { block, getQaAttrubutes } from '../../../utils';
import BackgroundImage from '../../BackgroundImage/BackgroundImage';
import FullscreenImage from '../../FullscreenImage/FullscreenImage';
import ImageView from '../../Image/Image';
import { getMediaImage } from './utils';
import './Image.css';
const b = block('media-component-image');
export const defaultAnimatedDivQa = 'animated-div';
const Image = (props) => {
    const { parallax, height, imageClassName, isBackground, hasVideoFallback, video, fullscreen, disableImageSliderForArrayInput, qa, onLoad, } = props;
    const image = Array.isArray(props.image) && disableImageSliderForArrayInput
        ? props.image[0]
        : props.image;
    const qaAttributes = getQaAttrubutes(qa, 'fullscreen-image', 'animate', 'background-image', 'image-view', 'slider-block');
    const [scrollY, setScrollY] = useState(0);
    const [{ springScrollY }, springSetScrollY] = useSpring(() => ({
        springScrollY: 0,
        config: config.molasses,
    }));
    let parallaxInterpolate = '';
    useEffect(() => {
        if (parallax) {
            const handleScroll = () => setScrollY(window.scrollY);
            const debouncedHandler = debounce(handleScroll, 5);
            window.addEventListener('scroll', debouncedHandler, { passive: true });
            return () => window.removeEventListener('scroll', debouncedHandler);
        }
        return () => { };
    });
    if (parallax) {
        const parallaxLevel = 2;
        springSetScrollY.start({ springScrollY: height && scrollY > height ? height : scrollY });
        parallaxInterpolate = springScrollY.to((value) => `translateY(-${Number(value) / parallaxLevel}px)`);
    }
    const imageClass = b('item', { withVideo: Boolean(video) && !hasVideoFallback }, imageClassName);
    const renderFullscreenImage = (item) => {
        const itemData = getMediaImage(item);
        return (React.createElement(FullscreenImage, Object.assign({ key: itemData.alt }, itemData, { imageClassName: imageClass, imageStyle: { height }, qa: qaAttributes.fullscreenImage })));
    };
    const imageBackground = (oneImage) => {
        const imageData = getMediaImage(oneImage);
        return (React.createElement(animated.div, { style: { transform: parallaxInterpolate }, "data-qa": qaAttributes.animate },
            React.createElement(BackgroundImage, Object.assign({}, imageData, { className: imageClass, style: { height }, qa: qaAttributes.backgroundImage }))));
    };
    const imageOnly = (oneImage) => {
        const imageData = getMediaImage(oneImage);
        return (React.createElement(ImageView, Object.assign({}, imageData, { className: imageClass, style: { height }, qa: qaAttributes.imageView, onLoad: onLoad })));
    };
    const imageSlider = (imageArray) => {
        const fullscreenItem = fullscreen === undefined || fullscreen;
        return (React.createElement(SliderBlock, { slidesToShow: 1, type: SliderType.MediaCard }, imageArray.map((item, index) => (React.createElement(Fragment, { key: index }, fullscreenItem ? renderFullscreenImage(item) : imageOnly(item))))));
    };
    if (Array.isArray(image)) {
        return imageSlider(image);
    }
    if (fullscreen) {
        return renderFullscreenImage(image);
    }
    return isBackground ? imageBackground(image) : imageOnly(image);
};
export default Image;
