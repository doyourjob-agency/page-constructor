import { __rest } from "tslib";
export const getOneOfViewSpec = ({ layoutTitle }) => {
    return {
        type: 'oneof_custom',
        layout: 'row',
        layoutTitle,
        oneOfParams: {
            toggler: 'select',
        },
    };
};
export const getObjectViewSpec = ({ properties, disabled, layoutTitle, layout = 'accordeon', }) => {
    return {
        layoutTitle,
        type: 'base',
        layout,
        order: properties && Object.keys(properties).sort(),
        disabled,
    };
};
export const getArrayViewSpec = ({ layoutTitle }) => ({
    layoutTitle,
    type: 'base',
    layout: 'accordeon',
    layoutOpen: true,
    itemLabel: 'Add Item',
});
export const getPrimitiveViewSpec = (_a) => {
    var { layoutTitle } = _a, data = __rest(_a, ["layoutTitle"]);
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
