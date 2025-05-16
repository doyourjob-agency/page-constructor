"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSlider = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const models_1 = require("../../models");
const utils_1 = require("./utils");
const useSlider = (_a) => {
    var { children, autoplayMs, type } = _a, props = tslib_1.__rest(_a, ["children", "autoplayMs", "type"]);
    const [slider, setSlider] = (0, react_1.useState)();
    const [isLocked, setIsLocked] = (0, react_1.useState)(false);
    const slidesToShow = (0, utils_1.useMemoized)(props.slidesToShow);
    const childrenCount = react_1.default.Children.count(children);
    const autoplayEnabled = autoplayMs !== undefined && autoplayMs > 0;
    const breakpoints = (0, react_1.useMemo)(() => {
        return (0, utils_1.getSliderResponsiveParams)({
            contentLength: childrenCount,
            slidesToShow,
            mobileFullscreen: Boolean(type && Object.values(models_1.SliderType).includes(type)),
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
    (0, react_1.useEffect)(() => {
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
exports.useSlider = useSlider;
