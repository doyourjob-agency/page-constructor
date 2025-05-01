"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const __1 = require("..");
const components_1 = require("../../components");
const ButtonTabs_1 = tslib_1.__importDefault(require("../../components/ButtonTabs/ButtonTabs"));
const ConstructorItem_1 = require("../../containers/PageConstructor/components/ConstructorItem");
const grid_1 = require("../../grid");
const utils_1 = require("../../utils");
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('filter-block');
const FilterBlock = ({ title, description, tags, tagButtonSize, allTag, items, colSizes, centered, animated, }) => {
    const tabButtons = (0, react_1.useMemo)(() => {
        const allButton = allTag
            ? { id: null, title: typeof allTag === 'boolean' ? (0, i18n_1.i18n)('label-all-tag') : allTag }
            : undefined;
        const otherButtons = tags && tags.map((tag) => ({ id: tag.id, title: tag.label }));
        return [...(allButton ? [allButton] : []), ...(otherButtons ? otherButtons : [])];
    }, [allTag, tags]);
    const [selectedTag, setSelectedTag] = (0, react_1.useState)(tabButtons.length ? tabButtons[0].id : null);
    const actualTag = (0, react_1.useMemo)(() => {
        return tabButtons.length && !tabButtons.find((tab) => tab.id === selectedTag)
            ? tabButtons[0].id
            : selectedTag;
    }, [tabButtons, selectedTag]);
    const cards = (0, react_1.useMemo)(() => {
        const itemsToShow = actualTag
            ? items.filter((item) => item.tags.includes(actualTag))
            : items;
        return itemsToShow.map((item) => item.card);
    }, [actualTag, items]);
    return (react_1.default.createElement(components_1.AnimateBlock, { className: b(), animate: animated },
        title && (react_1.default.createElement(components_1.Title, { className: b('title', { centered: centered }), title: title, subtitle: description })),
        tabButtons.length && (react_1.default.createElement(grid_1.Row, null,
            react_1.default.createElement(grid_1.Col, null,
                react_1.default.createElement(ButtonTabs_1.default, { className: b('tabs', { centered: centered }), items: tabButtons, activeTab: selectedTag, onSelectTab: setSelectedTag, tabSize: tagButtonSize })))),
        react_1.default.createElement(grid_1.Row, { className: b('block-container') },
            react_1.default.createElement(__1.CardLayoutBlock, { title: "", colSizes: colSizes, className: b('cards-container') }, cards.map((card, index) => {
                const key = (0, utils_1.getBlockKey)(card, index);
                return react_1.default.createElement(ConstructorItem_1.ConstructorItem, { data: card, blockKey: key, key: key });
            })))));
};
exports.default = FilterBlock;
