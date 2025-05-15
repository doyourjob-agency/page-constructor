import React, { Fragment, useCallback, useEffect, useState } from 'react';
import chunk from 'lodash/chunk';
import { CardBase } from '../../../components';
import { BREAKPOINTS } from '../../../constants';
import { Col, Grid, GridColumnSize, Row } from '../../../grid';
import { block } from '../../../utils';
import './CombinedPriceDetailed.css';
const b = block('combined-price-detailed-block');
const CombinedPricesGroupSize = {
    [GridColumnSize.Sm]: 1,
    [GridColumnSize.Md]: 2,
    [GridColumnSize.Lg]: 3,
};
const CombinedPriceDetailed = (props) => {
    const { items, numberGroupItems, border, useMixedView, getDescriptionComponent, getDetailsComponent, analyticsEvents, } = props;
    const [groupItemsSize, setGroupItemsSize] = useState(numberGroupItems);
    const updateGroupItemsSize = useCallback((windowWidth) => {
        if (windowWidth >= BREAKPOINTS.lg) {
            setGroupItemsSize(numberGroupItems);
        }
        else if (BREAKPOINTS.lg > windowWidth && windowWidth >= BREAKPOINTS.md) {
            setGroupItemsSize(CombinedPricesGroupSize[GridColumnSize.Lg]);
        }
        else if (BREAKPOINTS.md > windowWidth && windowWidth >= BREAKPOINTS.sm) {
            setGroupItemsSize(CombinedPricesGroupSize[GridColumnSize.Md]);
        }
        else {
            setGroupItemsSize(CombinedPricesGroupSize[GridColumnSize.Sm]);
        }
    }, [numberGroupItems]);
    useEffect(() => {
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
            descriptionComponents[id] = (React.createElement(Col, { key: `card_${id}` }, price && getDescriptionComponent(price)));
            detailsComponents[id] = (React.createElement(Col, { key: `details_${id}`, className: price ? '' : b('empty-column') }, price && getDetailsComponent(price.items)));
        }
        return (React.createElement(Fragment, null,
            React.createElement("div", null, descriptionComponents),
            React.createElement("div", { className: b('description', { delimiter: useMixedView }) }, detailsComponents)));
    };
    const chunkedItems = chunk(items, groupItemsSize);
    return (React.createElement(CardBase, { className: b(), border: border, analyticsEvents: analyticsEvents },
        React.createElement(CardBase.Content, null,
            React.createElement(Grid, null, chunkedItems.map((item, id) => {
                return (React.createElement(Row, { key: id, className: b('row') }, getPrice(item)));
            })))));
};
export default CombinedPriceDetailed;
