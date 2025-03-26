import React, {useEffect, useMemo, useRef} from 'react';

import {useTheme} from '../../context/theme';
import {QuotesBlockProps} from '../../models';
import {block} from '../../utils';
import {SliderBlock} from '../Slider/Slider';

import QuotesItem from './QuotesItem/QuotesItem';

import './Quotes.scss';

const b = block('quotes-block');

export const QuotesBlock = ({
    theme: localTheme,
    items,
    background,
    backgroundColor,
}: QuotesBlockProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const globalTheme = useTheme();
    const theme = localTheme || globalTheme;

    useEffect(() => {
        if (!divRef.current) return () => {};
        const resizeObserver = new ResizeObserver(() => {
            divRef.current?.style.removeProperty('--quotes-block-width');
            divRef.current?.style.setProperty(
                '--quotes-block-width',
                `${divRef.current?.clientWidth}px`,
            );
        });
        resizeObserver.observe(divRef.current);
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    const backgroundStyle = useMemo(() => {
        if (background) {
            return {backgroundImage: `url("${background}")`};
        }
        if (backgroundColor) {
            return {backgroundColor};
        }
        return undefined;
    }, [background, backgroundColor]);

    return (
        <div ref={divRef} className={b({theme})}>
            <SliderBlock slidesToShow={1} lazyLoad="ondemand" adaptive={false}>
                {items.map((item, index) => (
                    <QuotesItem key={index} theme={theme} {...item} />
                ))}
            </SliderBlock>
            <div className={b('bg')} style={backgroundStyle} />
        </div>
    );
};

export default QuotesBlock;
