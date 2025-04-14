"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const components_1 = require("../../../components");
const stylesContext_1 = require("../../../context/stylesContext");
const models_1 = require("../../../models");
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('price-description');
const LabelColorsMapping = {
    [models_1.PriceLabelColor.BLUE]: 'info',
    [models_1.PriceLabelColor.GREEN]: 'success',
    [models_1.PriceLabelColor.YELLOW]: 'warning',
    [models_1.PriceLabelColor.PURPLE]: 'normal',
    [models_1.PriceLabelColor.RED]: 'dnager',
};
const LabelSizeMap = {
    l: 's',
    m: 's',
    s: 'xs',
    xs: 'xs',
};
const PriceDescription = (props) => {
    const { title, detailedTitle = '', description, titleSize = 'l', descriptionSize = 'm', colorTitle = 'cornflower', label, labelsDefaultText, className, } = props;
    const descriptionRef = react_1.default.useRef(null);
    const { pricesDetailedDescriptionHeight, setStyles } = (0, react_1.useContext)(stylesContext_1.StylesContext);
    const setDescriptionHeight = (0, react_1.useCallback)(() => {
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
    (0, react_1.useEffect)(() => {
        setDescriptionHeight();
        window.addEventListener('resize', setDescriptionHeight, { passive: true });
        return () => window.removeEventListener('resize', setDescriptionHeight);
    }, [setDescriptionHeight]);
    const labelElement = (0, react_1.useMemo)(() => {
        if (!label) {
            return null;
        }
        const labelTitle = label.text || (labelsDefaultText && labelsDefaultText[label.color]);
        const labelColor = (LabelColorsMapping[label.color] || 'unknown');
        const labelSize = LabelSizeMap[label.size || descriptionSize];
        return (react_1.default.createElement(uikit_1.Label, { className: b('label', { size: labelSize }), theme: labelColor, size: labelSize }, labelTitle));
    }, [descriptionSize, label, labelsDefaultText]);
    const titleElement = (0, react_1.useMemo)(() => {
        return (react_1.default.createElement("div", { className: b('title', { size: titleSize }) },
            react_1.default.createElement("div", { className: b('main-title', { color: colorTitle }) }, title),
            react_1.default.createElement("div", { className: b('detailed-title', { size: descriptionSize }) }, detailedTitle)));
    }, [colorTitle, descriptionSize, detailedTitle, title, titleSize]);
    return (react_1.default.createElement("div", { className: b(null, className), ref: descriptionRef },
        labelElement,
        titleElement,
        react_1.default.createElement("div", { className: b('description', { size: descriptionSize }) },
            react_1.default.createElement(components_1.YFMWrapper, { content: description, modifiers: { constructor: true } }))));
};
exports.default = PriceDescription;
