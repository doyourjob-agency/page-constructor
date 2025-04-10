import React, { useEffect, useMemo, useRef } from 'react';
import { useTheme } from '../../context/theme';
import { block } from '../../utils';
import { SliderBlock } from '../Slider/Slider';
import QuotesItem from './QuotesItem/QuotesItem';
import './Quotes.css';
const b = block('quotes-block');
export const QuotesBlock = ({ theme: localTheme, items, background, backgroundColor, }) => {
    const divRef = useRef(null);
    const globalTheme = useTheme();
    const theme = localTheme || globalTheme;
    useEffect(() => {
        if (!divRef.current)
            return () => { };
        const resizeObserver = new ResizeObserver(() => {
            var _a, _b, _c;
            (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.style.removeProperty('--quotes-block-width');
            (_b = divRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty('--quotes-block-width', `${(_c = divRef.current) === null || _c === void 0 ? void 0 : _c.clientWidth}px`);
        });
        resizeObserver.observe(divRef.current);
        return () => {
            resizeObserver.disconnect();
        };
    }, []);
    const backgroundStyle = useMemo(() => {
        if (background) {
            return { backgroundImage: `url("${background}")` };
        }
        if (backgroundColor) {
            return { backgroundColor };
        }
        return undefined;
    }, [background, backgroundColor]);
    return (React.createElement("div", { ref: divRef, className: b({ theme }) },
        React.createElement(SliderBlock, { slidesToShow: 1, lazyLoad: "progressive", adaptive: false }, items.map((item, index) => (React.createElement(QuotesItem, Object.assign({ key: index, theme: theme }, item))))),
        React.createElement("div", { className: b('bg'), style: backgroundStyle })));
};
export default QuotesBlock;
