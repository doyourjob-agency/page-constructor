"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../../components");
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('separate-price-detailed-block');
const SeparatePriceDetailed = (props) => {
    const { items, border, getDescriptionComponent, getDetailsComponent } = props;
    return (react_1.default.createElement(react_1.Fragment, null, items.map((_a, id) => {
        var { analyticsEvents } = _a, item = tslib_1.__rest(_a, ["analyticsEvents"]);
        return (react_1.default.createElement(components_1.CardBase, { key: id, className: b(), border: border, analyticsEvents: analyticsEvents },
            react_1.default.createElement(components_1.CardBase.Content, null,
                getDescriptionComponent(item),
                getDetailsComponent(item.items))));
    })));
};
exports.default = SeparatePriceDetailed;
