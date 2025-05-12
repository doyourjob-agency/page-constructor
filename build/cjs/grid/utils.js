"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColClass = exports.getResetClass = exports.getJustifyClass = exports.getSizeClass = exports.getVisibilityClasses = exports.getOrderClass = exports.getOffsetClass = exports.getClasses = void 0;
const types_1 = require("./types");
function getVisibilityClass(visibility, size) {
    return `d${size ? `-${size}` : ''}-${visibility}`;
}
function getClasses(items, prefix) {
    return Object.keys(items).reduce((result, size) => {
        const sizeName = size === types_1.GridColumnSize.All ? '' : `-${size}`;
        const itemSize = items[size];
        const sizeValue = !itemSize && prefix === types_1.GridColumnClassPrefix.Col ? '' : `-${itemSize}`;
        return result + ` ${prefix}${sizeName}${sizeValue}`;
    }, '');
}
exports.getClasses = getClasses;
function getOffsetClass(offsets) {
    return getClasses(offsets, types_1.GridColumnClassPrefix.Offset);
}
exports.getOffsetClass = getOffsetClass;
function getOrderClass(orders) {
    return getClasses(orders, types_1.GridColumnClassPrefix.Order);
}
exports.getOrderClass = getOrderClass;
function getVisibilityClasses(size, type) {
    const [oppositeClass, mainClass] = type === types_1.GridColumnVisibilityClass.None
        ? [types_1.GridColumnVisibilityClass.None, types_1.GridColumnVisibilityClass.Block]
        : [types_1.GridColumnVisibilityClass.Block, types_1.GridColumnVisibilityClass.None];
    return `${getVisibilityClass(mainClass)} ${getVisibilityClass(oppositeClass, size)}`;
}
exports.getVisibilityClasses = getVisibilityClasses;
function getSizeClass(sizes) {
    if (typeof sizes === 'number') {
        return `${types_1.GridColumnClassPrefix.Col}-${sizes.toString()}`;
    }
    return getClasses(sizes, types_1.GridColumnClassPrefix.Col);
}
exports.getSizeClass = getSizeClass;
function getJustifyClass(justifyContent) {
    return `d-flex ${justifyContent}`;
}
exports.getJustifyClass = getJustifyClass;
function getResetClass() {
    return 'col-reset';
}
exports.getResetClass = getResetClass;
function getColClass(params) {
    const { className = '', sizes, offsets, orders, hidden, visible, alignSelf, justifyContent, reset, } = params;
    return [
        types_1.GridColumnClassPrefix.Col,
        alignSelf,
        justifyContent && getJustifyClass(justifyContent),
        sizes && getSizeClass(sizes),
        offsets && getOffsetClass(offsets),
        orders && getOrderClass(orders),
        hidden && getVisibilityClasses(hidden, types_1.GridColumnVisibilityClass.None),
        visible && getVisibilityClasses(visible, types_1.GridColumnVisibilityClass.Block),
        reset && getResetClass(),
        className,
    ]
        .filter(Boolean)
        .join(' ');
}
exports.getColClass = getColClass;
