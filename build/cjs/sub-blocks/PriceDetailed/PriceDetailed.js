"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const models_1 = require("../../models");
const CombinedPriceDetailed_1 = tslib_1.__importDefault(require("./CombinedPriceDetailed/CombinedPriceDetailed"));
const PriceDescription_1 = tslib_1.__importDefault(require("./PriceDescription/PriceDescription"));
const PriceDetails_1 = tslib_1.__importDefault(require("./PriceDetails/PriceDetails"));
const SeparatePriceDetailed_1 = tslib_1.__importDefault(require("./SeparatePriceDetailed/SeparatePriceDetailed"));
// eslint-disable-next-line valid-jsdoc
/** @deprecated */
const PriceDetailed = (props) => {
    const { priceType = models_1.PriceDetailsType.SETTINGS, items, numberGroupItems = 1, description, details, foldable, labelsDefaultText, isCombined = false, useMixedView = false, border, } = props;
    const { titleSize: descriptionTitleSize = 'l', descriptionSize = 'm', titleColor: descriptionTitleColor = 'cornflower', } = description || {};
    const { titleSize: detailsTitleSize = 's', descriptionSize: detailsDescriptionSize = 'm' } = details || {};
    const getDescriptionComponent = (priceDescription) => {
        return (react_1.default.createElement(PriceDescription_1.default, Object.assign({}, priceDescription, { titleSize: descriptionTitleSize, descriptionSize: descriptionSize, colorTitle: descriptionTitleColor, labelsDefaultText: labelsDefaultText })));
    };
    const getDetailsComponent = (priceDetails) => {
        return (react_1.default.createElement(PriceDetails_1.default, { items: priceDetails, type: priceType, foldable: foldable, titleSize: detailsTitleSize, descriptionSize: detailsDescriptionSize, useMixedView: useMixedView }));
    };
    return (react_1.default.createElement(react_1.Fragment, null, isCombined ? (react_1.default.createElement(CombinedPriceDetailed_1.default, { items: items, numberGroupItems: numberGroupItems, border: border, useMixedView: useMixedView, getDescriptionComponent: getDescriptionComponent, getDetailsComponent: getDetailsComponent })) : (react_1.default.createElement(SeparatePriceDetailed_1.default, { items: items, border: border, getDescriptionComponent: getDescriptionComponent, getDetailsComponent: getDetailsComponent }))));
};
exports.default = PriceDetailed;
