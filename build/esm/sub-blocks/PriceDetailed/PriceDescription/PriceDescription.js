import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import { Label } from '@gravity-ui/uikit';
import { YFMWrapper } from '../../../components';
import { StylesContext } from '../../../context/stylesContext';
import { PriceLabelColor, } from '../../../models';
import { block } from '../../../utils';
import './PriceDescription.css';
const b = block('price-description');
const LabelColorsMapping = {
    [PriceLabelColor.BLUE]: 'info',
    [PriceLabelColor.GREEN]: 'success',
    [PriceLabelColor.YELLOW]: 'warning',
    [PriceLabelColor.PURPLE]: 'normal',
    [PriceLabelColor.RED]: 'dnager',
};
const LabelSizeMap = {
    l: 's',
    m: 's',
    s: 'xs',
    xs: 'xs',
};
const PriceDescription = (props) => {
    const { title, detailedTitle = '', description, titleSize = 'l', descriptionSize = 'm', colorTitle = 'cornflower', label, labelsDefaultText, className, } = props;
    const descriptionRef = React.useRef(null);
    const { pricesDetailedDescriptionHeight, setStyles } = useContext(StylesContext);
    const setDescriptionHeight = useCallback(() => {
        var _a;
        if (!descriptionRef || !descriptionRef.current) {
            return;
        }
        const descriptionChildren = (_a = descriptionRef.current) === null || _a === void 0 ? void 0 : _a.children;
        if (!descriptionChildren) {
            return;
        }
        const childrenHeight = [...descriptionChildren].reduce((result, element) => result + element.clientHeight, 0);
        if (pricesDetailedDescriptionHeight === undefined ||
            Number(pricesDetailedDescriptionHeight) < childrenHeight) {
            setStyles({ pricesDetailedDescriptionHeight: childrenHeight.toString() });
        }
        else if (childrenHeight < Number(pricesDetailedDescriptionHeight)) {
            descriptionRef.current.style.height = `${pricesDetailedDescriptionHeight}px`;
        }
    }, [pricesDetailedDescriptionHeight, setStyles]);
    useEffect(() => {
        setDescriptionHeight();
        window.addEventListener('resize', setDescriptionHeight, { passive: true });
        return () => window.removeEventListener('resize', setDescriptionHeight);
    }, [setDescriptionHeight]);
    const labelElement = useMemo(() => {
        if (!label) {
            return null;
        }
        const labelTitle = label.text || (labelsDefaultText && labelsDefaultText[label.color]);
        const labelColor = (LabelColorsMapping[label.color] || 'unknown');
        const labelSize = LabelSizeMap[label.size || descriptionSize];
        return (React.createElement(Label, { className: b('label', { size: labelSize }), theme: labelColor, size: labelSize }, labelTitle));
    }, [descriptionSize, label, labelsDefaultText]);
    const titleElement = useMemo(() => {
        return (React.createElement("div", { className: b('title', { size: titleSize }) },
            React.createElement("div", { className: b('main-title', { color: colorTitle }) }, title),
            React.createElement("div", { className: b('detailed-title', { size: descriptionSize }) }, detailedTitle)));
    }, [colorTitle, descriptionSize, detailedTitle, title, titleSize]);
    return (React.createElement("div", { className: b(null, className), ref: descriptionRef },
        labelElement,
        titleElement,
        React.createElement("div", { className: b('description', { size: descriptionSize }) },
            React.createElement(YFMWrapper, { content: description, modifiers: { constructor: true } }))));
};
export default PriceDescription;
