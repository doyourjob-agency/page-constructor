import { __rest } from "tslib";
import React, { useEffect, useMemo, useState } from 'react';
import { SliderType } from '../../models';
import { getSliderResponsiveParams, useMemoized } from './utils';
export const useSlider = (_a) => {
    var { children, autoplayMs, type } = _a, props = __rest(_a, ["children", "autoplayMs", "type"]);
    const [slider, setSlider] = useState();
    const [isLocked, setIsLocked] = useState(false);
    const slidesToShow = useMemoized(props.slidesToShow);
    const childrenCount = React.Children.count(children);
    const autoplayEnabled = autoplayMs !== undefined && autoplayMs > 0;
    const breakpoints = useMemo(() => {
        return getSliderResponsiveParams({
            contentLength: childrenCount,
            slidesToShow,
            mobileFullscreen: Boolean(type && Object.values(SliderType).includes(type)),
        });
    }, [slidesToShow, type, childrenCount]);
    const handleNext = () => {
        if (!slider) {
            return;
        }
        if (slider.isEnd) {
            slider.slideTo(0);
            return;
        }
        slider.slideNext();
    };
    const handlePrev = () => {
        if (!slider) {
            return;
        }
        if (slider.isBeginning) {
            slider.slideTo(childrenCount - 1);
            return;
        }
        slider.slidePrev();
    };
    useEffect(() => {
        if (!slider) {
            return;
        }
        if (autoplayEnabled) {
            slider.autoplay.start();
        }
        else {
            slider.autoplay.stop();
        }
    }, [slider, autoplayEnabled]);
    return {
        slider,
        onSwiper: setSlider,
        onNext: handleNext,
        onPrev: handlePrev,
        breakpoints,
        childrenCount,
        isLocked,
        setIsLocked,
        autoplay: autoplayEnabled && {
            delay: autoplayMs,
            disableOnInteraction: false,
        },
    };
};
