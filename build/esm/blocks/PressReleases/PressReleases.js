import React, { useContext } from 'react';
import { CardLayoutBlock } from '..';
import { InfiniteScroll } from '../../components';
import { PressReleasesContext } from '../../context/pressReleasesContext';
import { BasicCard } from '../../sub-blocks';
const colSizes = {
    all: 12,
    md: 8,
    lg: 8,
    xl: 8,
};
export const PressReleasesBlock = ({ title }) => {
    const { pressReleases, page, pageSize, onLoadMore } = useContext(PressReleasesContext);
    const itemsToShow = pressReleases.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(pressReleases.length / pageSize);
    return (React.createElement("div", null,
        React.createElement(CardLayoutBlock, { title: title, colSizes: colSizes }, itemsToShow.map((item) => (React.createElement(BasicCard, { key: item.url, title: item.title, text: item.date, url: item.url, border: "line" })))),
        React.createElement(InfiniteScroll, { hasMore: hasMore, onNext: onLoadMore })));
};
export default PressReleasesBlock;
