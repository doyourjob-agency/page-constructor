import {Lang, configure as uiKitConfigure} from '@gravity-ui/uikit';
import {configure} from '@testing-library/dom';
import React, {PropsWithChildren} from 'react';

uiKitConfigure({
    lang: Lang.En,
});

configure({testIdAttribute: 'data-qa'});

jest.mock('swiper/react', () => ({
    Swiper: ({children}: PropsWithChildren) => (
        <div data-testid="swiper-testid" className="pc-slider-new-block">
            {children}
        </div>
    ),
    SwiperSlide: ({children}: PropsWithChildren) => (
        <div data-testid="swiper-slide-testid" className="pc-slider-new-block__slide">
            {children}
        </div>
    ),
}));

jest.mock('swiper/modules', () => ({
    Navigation: () => null,
    Pagination: () => null,
    Scrollbar: () => null,
    A11y: () => null,
}));
