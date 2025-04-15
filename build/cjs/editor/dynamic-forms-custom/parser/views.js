"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrimitiveViewSpec = exports.getArrayViewSpec = exports.getObjectViewSpec = exports.getOneOfViewSpec = void 0;
const tslib_1 = require("tslib");
const getOneOfViewSpec = ({ layoutTitle }) => {
    return {
        type: 'oneof_custom',
        layout: 'row',
        layoutTitle,
        oneOfParams: {
            toggler: 'select',
        },
    };
};
exports.getOneOfViewSpec = getOneOfViewSpec;
const getObjectViewSpec = ({ properties, disabled, layoutTitle, layout = 'accordeon', }) => {
    return {
        layoutTitle,
        type: 'base',
        layout,
        order: properties && Object.keys(properties).sort(),
        disabled,
    };
};
exports.getObjectViewSpec = getObjectViewSpec;
const getArrayViewSpec = ({ layoutTitle }) => ({
    layoutTitle,
    type: 'base',
    layout: 'accordeon',
    layoutOpen: true,
    itemLabel: 'Add Item',
});
exports.getArrayViewSpec = getArrayViewSpec;
const getPrimitiveViewSpec = (_a) => {
    var { layoutTitle } = _a, data = tslib_1.__rest(_a, ["layoutTitle"]);
    let type = (data === null || data === void 0 ? void 0 : data.inputType) || 'base';
    if (data && 'enum' in data && data.enum) {
        type = 'select';
    }
    return {
        layout: 'row',
        type,
        layoutTitle,
    };
};
exports.getPrimitiveViewSpec = getPrimitiveViewSpec;
