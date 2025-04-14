"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const chunk_1 = tslib_1.__importDefault(require("lodash/chunk"));
const components_1 = require("../../../components");
const constants_1 = require("../../../constants");
const grid_1 = require("../../../grid");
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('combined-price-detailed-block');
const CombinedPricesGroupSize = {
    [grid_1.GridColumnSize.Sm]: 1,
    [grid_1.GridColumnSize.Md]: 2,
    [grid_1.GridColumnSize.Lg]: 3,
};
const CombinedPriceDetailed = (props) => {
    const { items, numberGroupItems, border, useMixedView, getDescriptionComponent, getDetailsComponent, analyticsEvents, } = props;
    const [groupItemsSize, setGroupItemsSize] = (0, react_1.useState)(numberGroupItems);
    const updateGroupItemsSize = (0, react_1.useCallback)((windowWidth) => {
        if (windowWidth >= constants_1.BREAKPOINTS.lg) {
            setGroupItemsSize(numberGroupItems);
        }
        else if (constants_1.BREAKPOINTS.lg > windowWidth && windowWidth >= constants_1.BREAKPOINTS.md) {
            setGroupItemsSize(CombinedPricesGroupSize[grid_1.GridColumnSize.Lg]);
        }
        else if (constants_1.BREAKPOINTS.md > windowWidth && windowWidth >= constants_1.BREAKPOINTS.sm) {
            setGroupItemsSize(CombinedPricesGroupSize[grid_1.GridColumnSize.Md]);
        }
        else {
            setGroupItemsSize(CombinedPricesGroupSize[grid_1.GridColumnSize.Sm]);
        }
    }, [numberGroupItems]);
    (0, react_1.useEffect)(() => {
        function handleResize() {
            updateGroupItemsSize(window.innerWidth);
        }
        handleResize();
        window.addEventListener('resize', handleResize, { passive: true });
        return () => window.removeEventListener('resize', handleResize);
    }, [updateGroupItemsSize]);
    const getPrice = (groupPrices) => {
        const descriptionComponents = Array(groupItemsSize);
        const detailsComponents = Array(groupItemsSize);
        for (let id = 0; id < groupItemsSize; id++) {
            const price = groupPrices[id];
            descriptionComponents[id] = (react_1.default.createElement(grid_1.Col, { key: `card_${id}` }, price && getDescriptionComponent(price)));
            detailsComponents[id] = (react_1.default.createElement(grid_1.Col, { key: `details_${id}`, className: price ? '' : b('empty-column') }, price && getDetailsComponent(price.items)));
        }
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement("div", null, descriptionComponents),
            react_1.default.createElement("div", { className: b('description', { delimiter: useMixedView }) }, detailsComponents)));
    };
    const chunkedItems = (0, chunk_1.default)(items, groupItemsSize);
    return (react_1.default.createElement(components_1.CardBase, { className: b(), border: border, analyticsEvents: analyticsEvents },
        react_1.default.createElement(components_1.CardBase.Content, null,
            react_1.default.createElement(grid_1.Grid, null, chunkedItems.map((item, id) => {
                return (react_1.default.createElement(grid_1.Row, { key: id, className: b('row') }, getPrice(item)));
            })))));
};
exports.default = CombinedPriceDetailed;
