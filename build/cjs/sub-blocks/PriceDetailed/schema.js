"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceDetailedBlock = void 0;
const common_1 = require("../../schema/validators/common");
const event_1 = require("../../schema/validators/event");
const utils_1 = require("../../schema/validators/utils");
const PriceDetailedDetailsType = ['marked-list', 'settings'];
const PriceDetailedDescriptionColor = ['cornflower', 'black'];
const PriceLabelColor = ['blue', 'green', 'yellow', 'purple', 'red'];
const LabelsDefaultTextProp = PriceLabelColor.reduce((result, labelColor) => {
    return Object.assign(Object.assign({}, result), { [labelColor]: {
            type: 'string',
        } });
}, {});
const PriceDetailedLabelsDefaultTextProps = {
    additionalProperties: false,
    required: [],
    properties: LabelsDefaultTextProp,
};
const PriceDetailedFoldableDetailsProps = {
    additionalProperties: false,
    required: ['title'],
    properties: {
        title: {
            type: 'string',
            contentType: 'text',
        },
        size: {
            type: 'string',
            enum: common_1.textSize,
        },
        titleColor: {
            type: 'string',
            enum: PriceDetailedDescriptionColor,
        },
    },
};
const PriceDetailedDetailsProps = {
    additionalProperties: false,
    required: [],
    properties: {
        titleSize: {
            type: 'string',
            enum: common_1.textSize,
        },
        descriptionSize: {
            type: 'string',
            enum: common_1.textSize,
        },
    },
};
const PriceDetailedDescriptionProps = {
    additionalProperties: false,
    required: [],
    properties: {
        titleSize: {
            type: 'string',
            enum: common_1.textSize,
        },
        descriptionSize: {
            type: 'string',
            enum: common_1.textSize,
        },
        titleColor: {
            type: 'string',
            enum: PriceDetailedDescriptionColor,
        },
    },
};
const PriceDescriptionLabelProps = {
    additionalProperties: false,
    required: ['color'],
    properties: {
        color: {
            type: 'string',
            enum: PriceLabelColor,
        },
        text: {
            type: 'string',
            contentType: 'text',
        },
        size: {
            type: 'string',
            enum: common_1.textSize,
        },
    },
};
const PriceDescriptionProps = {
    title: {
        type: 'string',
        contentType: 'text',
    },
    description: {
        type: 'string',
        contentType: 'yfm',
    },
    detailedTitle: {
        type: 'string',
        contentType: 'text',
    },
    label: PriceDescriptionLabelProps,
};
const PriceDetailsSettingsProps = {
    type: 'object',
    additionalProperties: false,
    required: ['title', 'description'],
    properties: {
        title: {
            type: 'string',
            contentType: 'text',
        },
        description: {
            type: 'string',
            contentType: 'yfm',
        },
    },
};
const PriceDetailsListProps = {
    type: 'object',
    additionalProperties: false,
    required: ['text'],
    properties: {
        text: {
            type: 'string',
            contentType: 'yfm',
        },
    },
};
const PriceDetailsProps = {
    items: {
        oneOf: [
            Object.assign(Object.assign({}, (0, utils_1.filteredArray)(Object.assign({}, PriceDetailsListProps))), { optionName: 'marked-list' }),
            Object.assign(Object.assign({}, (0, utils_1.filteredArray)(Object.assign({}, PriceDetailsSettingsProps))), { optionName: 'settings' }),
        ],
    },
};
const PriceItem = {
    type: 'object',
    additionalProperties: false,
    required: ['title', 'description'],
    properties: Object.assign(Object.assign(Object.assign({}, PriceDetailsProps), PriceDescriptionProps), { analyticsEvents: {
            oneOf: [
                Object.assign(Object.assign({}, event_1.AnalyticsEventSchema), { optionName: 'single' }),
                {
                    type: 'array',
                    items: event_1.AnalyticsEventSchema,
                    optionName: 'list',
                },
            ],
        } }),
};
/** @deprecated */
exports.PriceDetailedBlock = {
    'price-detailed': {
        additionalProperties: false,
        required: ['items'],
        properties: Object.assign(Object.assign(Object.assign({}, common_1.BaseProps), common_1.AnimatableProps), { items: (0, utils_1.filteredArray)(PriceItem), description: PriceDetailedDescriptionProps, details: PriceDetailedDetailsProps, priceType: {
                type: 'string',
                enum: PriceDetailedDetailsType,
                default: 'settings',
            }, numberGroupItems: {
                type: 'number',
                enum: [3, 4, 5],
            }, isCombined: {
                type: 'boolean',
            }, useMixedView: {
                type: 'boolean',
            }, foldable: PriceDetailedFoldableDetailsProps, labelsDefaultText: PriceDetailedLabelsDefaultTextProps }),
    },
};
