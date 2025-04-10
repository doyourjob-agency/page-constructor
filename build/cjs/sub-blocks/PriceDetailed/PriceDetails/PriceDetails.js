"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../../components");
const models_1 = require("../../../models");
const utils_1 = require("../../../utils");
const List_1 = tslib_1.__importDefault(require("./Details/List"));
const Settings_1 = tslib_1.__importDefault(require("./Details/Settings"));
const b = (0, utils_1.block)('price-details');
const PriceDetails = (props) => {
    const [isOpened, setIsOpened] = (0, react_1.useState)(false);
    const toggleOpen = (0, react_1.useCallback)(() => {
        setIsOpened(!isOpened);
    }, [isOpened]);
    const { items = [], type = models_1.PriceDetailsType.SETTINGS, titleSize = 's', descriptionSize = 'm', foldable, useMixedView, className, } = props;
    const { title: foldableTitle, size: foldableSize = descriptionSize, titleColor: foldableColor = 'cornflower', } = foldable || {};
    const getPriceDetails = () => {
        switch (type) {
            case models_1.PriceDetailsType.MARKED_LIST:
                return react_1.default.createElement(List_1.default, { items: items, titleSize: titleSize });
            case models_1.PriceDetailsType.SETTINGS:
            default:
                return (react_1.default.createElement(Settings_1.default, { items: items, titleSize: titleSize, descriptionSize: descriptionSize }));
        }
    };
    const getFoldableBlock = () => {
        return react_1.default.createElement("div", { className: b('foldable_block') }, getPriceDetails());
    };
    const getFoldableTitle = () => {
        return (react_1.default.createElement("button", { className: b('foldable_title', { color: foldableColor, size: foldableSize }), onClick: toggleOpen, "aria-expanded": isOpened },
            foldableTitle,
            react_1.default.createElement(components_1.ToggleArrow, { open: isOpened, size: 14, type: 'vertical', className: b('arrow') })));
    };
    const getFoldableComponent = (customClassName = '') => {
        return (react_1.default.createElement("div", { className: customClassName },
            getFoldableTitle(),
            react_1.default.createElement(components_1.Foldable, { isOpened: isOpened }, getFoldableBlock())));
    };
    const getNonFoldableComponent = (customClassName = '') => {
        return react_1.default.createElement("div", { className: customClassName }, getFoldableBlock());
    };
    const getComponentMixedView = () => {
        if (foldable) {
            return (react_1.default.createElement(react_1.Fragment, null,
                getFoldableComponent(b('foldable')),
                getNonFoldableComponent(b('non_foldable'))));
        }
        return getNonFoldableComponent(b('delimiter-line'));
    };
    const getComponentSimpleView = () => {
        return foldable ? getFoldableComponent() : getNonFoldableComponent(b('delimiter-line'));
    };
    return (react_1.default.createElement("div", { className: b(null, className) }, useMixedView ? getComponentMixedView() : getComponentSimpleView()));
};
exports.default = PriceDetails;
