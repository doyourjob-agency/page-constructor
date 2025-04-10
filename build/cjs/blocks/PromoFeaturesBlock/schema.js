"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoFeaturesBlock = exports.PromoFeaturesItem = void 0;
const common_1 = require("../../schema/validators/common");
const utils_1 = require("../../schema/validators/utils");
const schema_1 = require("../Media/schema");
exports.PromoFeaturesItem = {
    additionalProperties: false,
    required: ['title', 'text'],
    properties: {
        title: {
            type: 'string',
            contentType: 'text',
        },
        text: {
            type: 'string',
            contentType: 'yfm',
            inputType: 'textarea',
        },
        theme: {
            enum: ['accent', 'accent-light', 'primary'],
        },
        media: schema_1.Media,
    },
};
exports.PromoFeaturesBlock = {
    'promo-features-block': {
        additionalProperties: false,
        required: ['items'],
        properties: Object.assign(Object.assign(Object.assign(Object.assign({}, common_1.BlockBaseProps), common_1.AnimatableProps), common_1.BlockHeaderProps), { theme: {
                enum: ['grey', 'default'],
            }, items: (0, utils_1.filteredArray)(exports.PromoFeaturesItem) }),
    },
};
