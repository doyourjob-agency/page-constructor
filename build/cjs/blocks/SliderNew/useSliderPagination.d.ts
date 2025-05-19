import { Swiper as SwiperProps } from 'swiper/swiper-react';
export declare const useSliderPagination: (props: {
    enabled: boolean;
    isA11yControlHidden: boolean;
    controlTabIndex: number;
    bulletClass: string;
    bulletActiveClass: string;
    paginationLabel: string;
}) => Pick<SwiperProps, 'pagination' | 'onPaginationUpdate'> | undefined;
