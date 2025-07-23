import {useCallback, useEffect, useMemo, useState} from 'react';

import {ImageProps, Theme} from '../models';
import {ThemeSupporting, getThemedValue} from '../utils';

export const useHoverImage = (time: number, image?: ImageProps, hoverImage?: ImageProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [shouldFadeIn, setShouldFadeIn] = useState(false);

    const imageData = isHovered && hoverImage ? hoverImage : image;

    useEffect(() => {
        setShouldFadeIn(true);
        const timeout = setTimeout(() => setShouldFadeIn(false), time);
        return () => clearTimeout(timeout);
    }, [imageData, time]);

    const onMouseEnter = useCallback(() => setIsHovered(true), []);
    const onMouseLeave = useCallback(() => setIsHovered(false), []);

    const imageMods = useMemo(() => ({fade: shouldFadeIn}), [shouldFadeIn]);

    return {
        imageData,
        isHovered,
        imageMods,
        onMouseEnter,
        onMouseLeave,
    };
};

export const useHoverImageThemeSupporting = (
    time: number,
    globalTheme: Theme,
    image?: ThemeSupporting<ImageProps>,
    hoverImage?: ThemeSupporting<ImageProps>,
) => {
    return useHoverImage(
        time,
        getThemedValue(image, globalTheme),
        hoverImage ? getThemedValue(hoverImage, globalTheme) : undefined,
    );
};
