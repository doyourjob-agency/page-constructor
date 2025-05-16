"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PressReleasesBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const __1 = require("..");
const components_1 = require("../../components");
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
    const itemsToShow = pressReleases.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(pressReleases.length / pageSize);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(__1.CardLayoutBlock, { title: title, colSizes: colSizes }, itemsToShow.map((item) => (react_1.default.createElement(sub_blocks_1.BasicCard, { key: item.url, title: item.title, text: item.date, url: item.url, border: "line" })))),
        react_1.default.createElement(components_1.InfiniteScroll, { hasMore: hasMore, onNext: onLoadMore })));
};
exports.PressReleasesBlock = PressReleasesBlock;
exports.default = exports.PressReleasesBlock;
