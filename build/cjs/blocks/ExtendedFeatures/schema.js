"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedFeaturesBlock = exports.ExtendedFeaturesItem = void 0;
const common_1 = require("../../schema/validators/common");
const components_1 = require("../../schema/validators/components");
const utils_1 = require("../../schema/validators/utils");
exports.ExtendedFeaturesItem = {
    additionalProperties: false,
    required: [],
    properties: {
        title: {
            type: 'string',
            contentType: 'text',
        },
        text: {
            type: 'string',
            contentType: 'yfm',
        },
        label: {
            type: 'string',
            enum: ['New', 'Preview'],
        },
        link: common_1.LinkProps,
        icon: (0, common_1.withTheme)(components_1.ImageProps),
    },
};
exports.ExtendedFeaturesBlock = {
    'extended-features-block': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign(Object.assign(Object.assign({}, common_1.BlockBaseProps), common_1.AnimatableProps), common_1.BlockHeaderProps), { items: (0, utils_1.filteredArray)(exports.ExtendedFeaturesItem), colSizes: common_1.containerSizesObject }),
    },
};
