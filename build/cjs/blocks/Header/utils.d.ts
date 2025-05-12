import { HeaderImageSize, HeaderWidth } from '../../models';
export declare function titleWithImageSizes(imageSize: HeaderImageSize): {
    md: number;
    all: number;
} | {
    all: number;
    md?: undefined;
};
export declare function getTitleSizes(width: HeaderWidth): {
    lg: number;
    sm: number;
    md: number;
    all: number;
} | {
    all: number;
    lg?: undefined;
    sm?: undefined;
    md?: undefined;
};
export declare function getImageSize(width: HeaderWidth): "s" | "m";
