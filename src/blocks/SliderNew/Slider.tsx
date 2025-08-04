import * as React from 'react';

import {A11y, Autoplay, Pagination} from 'swiper/modules';
import {Swiper as SwiperReact, SwiperSlide} from 'swiper/react';
import type {SwiperProps} from 'swiper/react';

import Anchor from '../../components/Anchor/Anchor';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import Title from '../../components/Title/Title';
import {ClassNameProps, Refable, SliderProps as SliderParams, SliderType} from '../../models';
import {block} from '../../utils';

import Arrow from './Arrow/Arrow';
import {i18n} from './i18n';
import {useSlider} from './useSlider';
import {useSliderPagination} from './useSliderPagination';

import './Slider.scss';
import 'swiper/modules/autoplay.min.css';
import 'swiper/modules/pagination.min.css';
import 'swiper/swiper.min.css';

const b = block('slider-new-block');

export interface SliderNewProps
    extends Omit<SliderParams, 'children'>,
        Partial<
            Pick<
                SwiperProps,
                | 'onSlideChange'
                | 'onSlideChangeTransitionStart'
                | 'onSlideChangeTransitionEnd'
                | 'onActiveIndexChange'
                | 'onBreakpoint'
            >
        >,
        Refable<HTMLDivElement>,
        ClassNameProps {
    type?: string;
    anchorId?: string;
    dotsClassName?: string;
    blockClassName?: string;
    arrowSize?: number;
    initialSlide?: number;
}

export const SliderNewBlock = ({
    animated,
    title,
    description,
    type,
    anchorId,
    arrows = true,
    adaptive,
    autoplay: autoplayMs,
    infinite = false,
    dots = true,
    initialSlide = 0,
    className,
    dotsClassName,
    disclaimer,
    children,
    blockClassName,
    arrowSize,
    slidesToShow,
    onSlideChange,
    onSlideChangeTransitionStart,
    onSlideChangeTransitionEnd,
    onActiveIndexChange,
    onBreakpoint,
}: React.PropsWithChildren<SliderNewProps>) => {
    const {
        autoplay,
        isLocked,
        childrenCount,
        breakpoints,
        onSwiper,
        handleSwiperInit,
        onPrev,
        onNext,
        setIsLocked,
    } = useSlider({
        slidesToShow,
        children,
        type,
        autoplayMs,
    });

    const isA11yControlHidden = Boolean(autoplay);
    const controlTabIndex = isA11yControlHidden ? -1 : 0;

    const paginationProps = useSliderPagination({
        enabled: dots,
        isA11yControlHidden,
        controlTabIndex,
        bulletClass: b('dot', dotsClassName),
        bulletActiveClass: b('dot_active'),
        paginationLabel: i18n('pagination-label'),
    });

    return (
        <div
            className={b(
                {
                    'one-slide': childrenCount === 1,
                    'only-arrows':
                        (!title || (typeof title !== 'string' && !title?.text)) &&
                        !description &&
                        arrows,
                    'without-dots': !dots || isLocked,
                    type,
                },
                blockClassName,
            )}
        >
            {anchorId && <Anchor id={anchorId} />}
            <Title
                title={title}
                subtitle={description}
                className={b('header', {'no-description': !description})}
            />
            <AnimateBlock className={b('animate-slides')} animate={animated}>
                <SwiperReact
                    modules={[Autoplay, A11y, Pagination]}
                    className={b('slider', className)}
                    onSwiper={onSwiper}
                    speed={700}
                    autoplay={autoplay}
                    loop={infinite}
                    autoHeight={adaptive}
                    initialSlide={initialSlide}
                    noSwiping={false}
                    slidesOffsetBefore={24}
                    slidesOffsetAfter={24}
                    breakpoints={breakpoints}
                    onSlideChange={onSlideChange}
                    onSlideChangeTransitionStart={onSlideChangeTransitionStart}
                    onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
                    onActiveIndexChange={onActiveIndexChange}
                    onBreakpoint={onBreakpoint}
                    onLock={() => setIsLocked(true)}
                    onUnlock={() => setIsLocked(false)}
                    onInit={handleSwiperInit}
                    watchSlidesProgress
                    watchOverflow
                    a11y={{
                        slideLabelMessage: '',
                        paginationBulletMessage: i18n('dot-label', {index: '{{index}}'}),
                    }}
                    {...paginationProps}
                >
                    {React.Children.map(children, (elem, index) => (
                        <SwiperSlide className={b('slide')} key={index}>
                            {({isVisible}) => (
                                <div
                                    className={b('slide-item')}
                                    aria-hidden={!isA11yControlHidden && !isVisible}
                                >
                                    {elem}
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </SwiperReact>
                {arrows && !isLocked && (
                    <div aria-hidden={isA11yControlHidden}>
                        <Arrow
                            className={b('arrow', {prev: true})}
                            type="left"
                            transparent={type === SliderType.HeaderCard}
                            onClick={onPrev}
                            size={arrowSize}
                            extraProps={{tabIndex: controlTabIndex}}
                        />
                        <Arrow
                            className={b('arrow', {next: true})}
                            type="right"
                            transparent={type === SliderType.HeaderCard}
                            onClick={onNext}
                            size={arrowSize}
                            extraProps={{tabIndex: controlTabIndex}}
                        />
                    </div>
                )}
                <div className={b('footer')}>
                    {disclaimer ? (
                        <div className={b('disclaimer', {size: disclaimer?.size || 'm'})}>
                            {disclaimer?.text}
                        </div>
                    ) : null}
                </div>
            </AnimateBlock>
        </div>
    );
};

export default SliderNewBlock;
