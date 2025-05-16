"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsFeedHeaderSearch = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const CloseIcon_1 = require("../../../../icons/CloseIcon");
const SearchIcon_1 = require("../../../../icons/SearchIcon");
const utils_1 = require("../../../../utils");
const i18n_1 = require("../../i18n");
const b = (0, utils_1.block)('events-feed-header-search');
const SEARCH_ICON_SIZE = 16;
const CLOSE_ICON_SIZE = 12;
const EventsFeedHeaderSearch = ({ className, initialValue, onSubmit, debounce = 300, placeholder, size = 'm', }) => {
    const handleChange = (0, debounce_1.default)(onSubmit, debounce);
    const [isSetInitValue, setIsSetInitValue] = (0, react_1.useState)(false);
    const [value, setValue] = (0, react_1.useState)(initialValue);
    const inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!isSetInitValue && !value && initialValue) {
            setIsSetInitValue(true);
            setValue(initialValue);
        }
    }, [isSetInitValue, value, initialValue]);
    const iconData = value ? CloseIcon_1.CloseIcon : SearchIcon_1.SearchIcon;
    const iconSize = value ? CLOSE_ICON_SIZE : SEARCH_ICON_SIZE;
    const handleClick = (0, react_1.useCallback)(() => {
        var _a;
        if (value) {
            handleChange.cancel();
            setValue('');
            onSubmit('');
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [value, handleChange, onSubmit]);
    const rightContent = (0, react_1.useMemo)(() => (react_1.default.createElement("button", { className: b('input-icon'), onClick: handleClick, "aria-label": (0, i18n_1.i18n)('clear'), disabled: !value },
        react_1.default.createElement(uikit_1.Icon, { data: iconData, size: iconSize }))), [handleClick, value, iconData, iconSize]);
    const handleUpdate = (0, react_1.useCallback)((query) => {
        setValue(query);
        handleChange(query);
    }, [handleChange]);
    return (react_1.default.createElement("div", { className: b({ size }, className) },
        react_1.default.createElement(uikit_1.TextInput, { className: b('suggest'), value: value, onUpdate: handleUpdate, placeholder: placeholder, size: size === 'm' ? 'xl' : 'l', controlRef: inputRef, view: "clear", controlProps: {
                className: b('control'),
            }, rightContent: rightContent })));
};
exports.EventsFeedHeaderSearch = EventsFeedHeaderSearch;
exports.default = exports.EventsFeedHeaderSearch;
