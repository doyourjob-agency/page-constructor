import { GridColumnClassPrefix, GridColumnSize, GridColumnVisibilityClass, } from './types';
function getVisibilityClass(visibility, size) {
    return `d${size ? `-${size}` : ''}-${visibility}`;
}
export function getClasses(items, prefix) {
    return Object.keys(items).reduce((result, size) => {
        const sizeName = size === GridColumnSize.All ? '' : `-${size}`;
        const itemSize = items[size];
        const sizeValue = !itemSize && prefix === GridColumnClassPrefix.Col ? '' : `-${itemSize}`;
        return result + ` ${prefix}${sizeName}${sizeValue}`;
    }, '');
}
export function getOffsetClass(offsets) {
    return getClasses(offsets, GridColumnClassPrefix.Offset);
}
export function getOrderClass(orders) {
    return getClasses(orders, GridColumnClassPrefix.Order);
}
export function getVisibilityClasses(size, type) {
    const [oppositeClass, mainClass] = type === GridColumnVisibilityClass.None
        ? [GridColumnVisibilityClass.None, GridColumnVisibilityClass.Block]
        : [GridColumnVisibilityClass.Block, GridColumnVisibilityClass.None];
    return `${getVisibilityClass(mainClass)} ${getVisibilityClass(oppositeClass, size)}`;
}
export function getSizeClass(sizes) {
    if (typeof sizes === 'number') {
        return `${GridColumnClassPrefix.Col}-${sizes.toString()}`;
    }
    return getClasses(sizes, GridColumnClassPrefix.Col);
}
export function getJustifyClass(justifyContent) {
    return `d-flex ${justifyContent}`;
}
export function getResetClass() {
    return 'col-reset';
}
export function getColClass(params) {
    const { className = '', sizes, offsets, orders, hidden, visible, alignSelf, justifyContent, reset, } = params;
    return [
        GridColumnClassPrefix.Col,
        alignSelf,
        justifyContent && getJustifyClass(justifyContent),
        sizes && getSizeClass(sizes),
        offsets && getOffsetClass(offsets),
        orders && getOrderClass(orders),
        hidden && getVisibilityClasses(hidden, GridColumnVisibilityClass.None),
        visible && getVisibilityClasses(visible, GridColumnVisibilityClass.Block),
        reset && getResetClass(),
        className,
    ]
        .filter(Boolean)
        .join(' ');
}
