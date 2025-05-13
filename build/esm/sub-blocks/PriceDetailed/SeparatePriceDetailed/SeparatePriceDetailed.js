import { __rest } from "tslib";
import React, { Fragment } from 'react';
import { CardBase } from '../../../components';
import { block } from '../../../utils';
import './SeparatePriceDetailed.css';
const b = block('separate-price-detailed-block');
const SeparatePriceDetailed = (props) => {
    const { items, border, getDescriptionComponent, getDetailsComponent } = props;
    return (React.createElement(Fragment, null, items.map((_a, id) => {
        var { analyticsEvents } = _a, item = __rest(_a, ["analyticsEvents"]);
        return (React.createElement(CardBase, { key: id, className: b(), border: border, analyticsEvents: analyticsEvents },
            React.createElement(CardBase.Content, null,
                getDescriptionComponent(item),
                getDetailsComponent(item.items))));
    })));
};
export default SeparatePriceDetailed;
