import React, { Fragment, useCallback, useContext } from 'react';
import { Image, Title } from '../../components';
import { LocationContext } from '../../context/locationContext';
import { useTheme } from '../../context/theme';
import { useAnalytics } from '../../hooks';
import { block, getLinkProps, getThemedValue } from '../../utils';
import './Icons.css';
const b = block('icons-block');
const getItemContent = (item) => (React.createElement(Fragment, null,
    React.createElement(Image, { className: b('image'), src: item.src }),
    React.createElement("p", { className: b('text') }, item.text)));
const Icons = ({ title, description, size = 's', colSizes = { all: 12 }, items }) => {
    const { hostname } = useContext(LocationContext);
    const handleAnalytics = useAnalytics();
    const theme = useTheme();
    const onClick = useCallback(({ analyticsEvents, url }) => {
        handleAnalytics(analyticsEvents, { url });
    }, [handleAnalytics]);
    return (React.createElement("div", { className: b({ size }) },
        (title || description) && (React.createElement(Title, { className: b('header'), title: title, subtitle: description, colSizes: colSizes })),
        items.map((item) => {
            const themedSrc = getThemedValue(item.src, theme);
            const itemContent = getItemContent(Object.assign(Object.assign({}, item), { src: themedSrc }));
            const { url, text } = item;
            return url ? (React.createElement("a", Object.assign({ className: b('item'), key: url, href: url, "aria-label": text, title: text }, getLinkProps(url, hostname), { onClick: () => onClick(item) }), itemContent)) : (React.createElement("div", { className: b('item'), key: text }, itemContent));
        })));
};
export default Icons;
