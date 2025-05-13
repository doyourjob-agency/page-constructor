"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PressReleasesBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const __1 = require("..");
const pressReleasesContext_1 = require("../../context/pressReleasesContext");
const sub_blocks_1 = require("../../sub-blocks");
const colSizes = {
    all: 12,
    md: 8,
    lg: 8,
    xl: 8,
};
const PressReleasesBlock = ({ title }) => {
    const { pressReleases, page, pageSize, onLoadMore } = (0, react_1.useContext)(pressReleasesContext_1.PressReleasesContext);
    const totalPages = Math.ceil(pressReleases.length / pageSize);
    const visibleCount = page * pageSize;
    const itemsToShow = pressReleases.slice(0, visibleCount);
    (0, react_1.useEffect)(() => {
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
    return (react_1.default.createElement(__1.CardLayoutBlock, { title: title, colSizes: colSizes }, itemsToShow.map((item) => (react_1.default.createElement(sub_blocks_1.BasicCard, { key: item.url, title: item.title, text: item.date, url: item.url, border: "line" })))));
};
exports.PressReleasesBlock = PressReleasesBlock;
exports.default = exports.PressReleasesBlock;
