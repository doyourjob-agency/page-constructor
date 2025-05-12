import React, { Fragment } from 'react';
import { PriceDetailsType, } from '../../models';
import CombinedPriceDetailed from './CombinedPriceDetailed/CombinedPriceDetailed';
import PriceDescription from './PriceDescription/PriceDescription';
import PriceDetails from './PriceDetails/PriceDetails';
import SeparatePriceDetailed from './SeparatePriceDetailed/SeparatePriceDetailed';
// eslint-disable-next-line valid-jsdoc
/** @deprecated */
const PriceDetailed = (props) => {
    const { priceType = PriceDetailsType.SETTINGS, items, numberGroupItems = 1, description, details, foldable, labelsDefaultText, isCombined = false, useMixedView = false, border, } = props;
    const { titleSize: descriptionTitleSize = 'l', descriptionSize = 'm', titleColor: descriptionTitleColor = 'cornflower', } = description || {};
    const { titleSize: detailsTitleSize = 's', descriptionSize: detailsDescriptionSize = 'm' } = details || {};
    const getDescriptionComponent = (priceDescription) => {
        return (React.createElement(PriceDescription, Object.assign({}, priceDescription, { titleSize: descriptionTitleSize, descriptionSize: descriptionSize, colorTitle: descriptionTitleColor, labelsDefaultText: labelsDefaultText })));
    };
    const getDetailsComponent = (priceDetails) => {
        return (React.createElement(PriceDetails, { items: priceDetails, type: priceType, foldable: foldable, titleSize: detailsTitleSize, descriptionSize: detailsDescriptionSize, useMixedView: useMixedView }));
    };
    return (React.createElement(Fragment, null, isCombined ? (React.createElement(CombinedPriceDetailed, { items: items, numberGroupItems: numberGroupItems, border: border, useMixedView: useMixedView, getDescriptionComponent: getDescriptionComponent, getDetailsComponent: getDetailsComponent })) : (React.createElement(SeparatePriceDetailed, { items: items, border: border, getDescriptionComponent: getDescriptionComponent, getDetailsComponent: getDetailsComponent }))));
};
export default PriceDetailed;
