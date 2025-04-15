import React, { Fragment, useCallback, useState } from 'react';
import { Foldable, ToggleArrow } from '../../../components';
import { PriceDetailsType, } from '../../../models';
import { block } from '../../../utils';
import List from './Details/List';
import Settings from './Details/Settings';
import './PriceDetails.css';
const b = block('price-details');
const PriceDetails = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpened(!isOpened);
    }, [isOpened]);
    const { items = [], type = PriceDetailsType.SETTINGS, titleSize = 's', descriptionSize = 'm', foldable, useMixedView, className, } = props;
    const { title: foldableTitle, size: foldableSize = descriptionSize, titleColor: foldableColor = 'cornflower', } = foldable || {};
    const getPriceDetails = () => {
        switch (type) {
            case PriceDetailsType.MARKED_LIST:
                return React.createElement(List, { items: items, titleSize: titleSize });
            case PriceDetailsType.SETTINGS:
            default:
                return (React.createElement(Settings, { items: items, titleSize: titleSize, descriptionSize: descriptionSize }));
        }
    };
    const getFoldableBlock = () => {
        return React.createElement("div", { className: b('foldable_block') }, getPriceDetails());
    };
    const getFoldableTitle = () => {
        return (React.createElement("button", { className: b('foldable_title', { color: foldableColor, size: foldableSize }), onClick: toggleOpen, "aria-expanded": isOpened },
            foldableTitle,
            React.createElement(ToggleArrow, { open: isOpened, size: 14, type: 'vertical', className: b('arrow') })));
    };
    const getFoldableComponent = (customClassName = '') => {
        return (React.createElement("div", { className: customClassName },
            getFoldableTitle(),
            React.createElement(Foldable, { isOpened: isOpened }, getFoldableBlock())));
    };
    const getNonFoldableComponent = (customClassName = '') => {
        return React.createElement("div", { className: customClassName }, getFoldableBlock());
    };
    const getComponentMixedView = () => {
        if (foldable) {
            return (React.createElement(Fragment, null,
                getFoldableComponent(b('foldable')),
                getNonFoldableComponent(b('non_foldable'))));
        }
        return getNonFoldableComponent(b('delimiter-line'));
    };
    const getComponentSimpleView = () => {
        return foldable ? getFoldableComponent() : getNonFoldableComponent(b('delimiter-line'));
    };
    return (React.createElement("div", { className: b(null, className) }, useMixedView ? getComponentMixedView() : getComponentSimpleView()));
};
export default PriceDetails;
