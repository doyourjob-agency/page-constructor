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
    const wrapRef = useRef<HTMLDivElement>(null);
    const globalTheme = useTheme();
    const theme = localTheme || globalTheme;

    useEffect(() => {
        if (!divRef.current) return () => {};
        const resizeObserver = new ResizeObserver(() => {
            divRef.current?.style.removeProperty('--quotes-block-width');
            const divWidth = divRef.current?.clientWidth;
            divRef.current?.style.setProperty('--quotes-block-width', `${divWidth}px`);
            if (divWidth) {
                wrapRef.current?.style.setProperty('width', `${window.innerWidth}px`);
                const space = (window.innerWidth - divWidth) / 2;
                wrapRef.current?.style.setProperty('padding-left', `${space}px`);
                wrapRef.current?.style.setProperty('padding-right', `${space}px`);
                wrapRef.current?.style.setProperty('margin-left', `-${space}px`);
                wrapRef.current?.style.setProperty('margin-right', `-${space}px`);
            }
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
            <div ref={wrapRef} className={b('wrap')}>
                <SliderBlock slidesToShow={1} lazyLoad="progressive" adaptive={false}>
                    {items.map((item, index) => (
                        <QuotesItem key={index} theme={theme} {...item} />
                    ))}
                </SliderBlock>
            </div>
            <div className={b('bg')} style={backgroundStyle} />
        </div>
    );
};

export default QuotesBlock;
