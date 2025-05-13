import React, { useContext, useEffect, useRef } from 'react';
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
    const blockRef = useRef(null);
    const totalPages = Math.ceil(pressReleases.length / pageSize);
    const visibleCount = page * pageSize;
    const itemsToShow = pressReleases.slice(0, visibleCount);
    useEffect(() => {
        const handleScroll = () => {
            if (!blockRef.current)
                return;
            const rect = blockRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const nearBottom = rect.bottom - viewportHeight < 200;
            if (nearBottom && page < totalPages) {
                onLoadMore();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page, totalPages, onLoadMore]);
    return (React.createElement("div", { ref: blockRef },
        React.createElement(CardLayoutBlock, { title: title, colSizes: colSizes }, itemsToShow.map((item) => (React.createElement(BasicCard, { key: item.url, title: item.title, text: item.date, url: item.url, border: "line" }))))));
};
export default PressReleasesBlock;
