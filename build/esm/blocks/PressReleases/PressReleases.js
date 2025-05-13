import React, { useContext, useEffect } from 'react';
import { CardLayoutBlock } from '..';
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
    const totalPages = Math.ceil(pressReleases.length / pageSize);
    const visibleCount = page * pageSize;
    const itemsToShow = pressReleases.slice(0, visibleCount);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            const nearBottom = scrollY + viewportHeight >= fullHeight;
            if (nearBottom && page < totalPages) {
                onLoadMore();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page, totalPages, onLoadMore]);
    return (React.createElement(CardLayoutBlock, { title: title, colSizes: colSizes }, itemsToShow.map((item) => (React.createElement(BasicCard, { key: item.url, title: item.title, text: item.date, url: item.url, border: "line" })))));
};
export default PressReleasesBlock;
