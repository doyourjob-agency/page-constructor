import { DEFAULT_THEME } from '../components/constants';
export function isThemedValue(value) {
    return typeof value === 'object' && value !== null && DEFAULT_THEME in value;
}
export function getThemedValue(value, theme = DEFAULT_THEME) {
    if (isThemedValue(value)) {
        return value[theme] || value[DEFAULT_THEME];
    }
    else {
        return value;
    }
}
