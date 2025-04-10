export const ICON_QA = 'button-icon';
const themeMap = {
    normal: 'normal',
    action: 'action',
    flat: 'flat',
    light: 'flat-secondary',
    clear: 'flat-secondary',
    raised: 'raised',
    pseudo: 'outlined',
    link: 'outlined-info',
    accent: 'action',
    websearch: 'action',
    'flat-special': 'flat-contrast',
    'normal-special': 'normal-contrast',
    'normal-dark': 'outlined-contrast',
    'pseudo-special': 'outlined-contrast',
};
const sizeMap = {
    xs: 's',
    ns: 's',
    s: 'm',
    m: 'l',
    l: 'l',
    n: 'l',
    head: 'l',
    promo: 'xl',
};
export const toCommonView = (theme) => { var _a; return (_a = themeMap[theme]) !== null && _a !== void 0 ? _a : theme; };
export const toCommonSize = (size) => { var _a; return (_a = sizeMap[size]) !== null && _a !== void 0 ? _a : size; };
