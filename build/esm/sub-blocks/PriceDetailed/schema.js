import { AnimatableProps, BaseProps, textSize } from '../../schema/validators/common';
import { AnalyticsEventSchema } from '../../schema/validators/event';
import { filteredArray } from '../../schema/validators/utils';
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
            enum: textSize,
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
            enum: textSize,
        },
        descriptionSize: {
            type: 'string',
            enum: textSize,
        },
    },
};
const PriceDetailedDescriptionProps = {
    additionalProperties: false,
    required: [],
    properties: {
        titleSize: {
            type: 'string',
            enum: textSize,
        },
        descriptionSize: {
            type: 'string',
            enum: textSize,
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
            enum: textSize,
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
            Object.assign(Object.assign({}, filteredArray(Object.assign({}, PriceDetailsListProps))), { optionName: 'marked-list' }),
            Object.assign(Object.assign({}, filteredArray(Object.assign({}, PriceDetailsSettingsProps))), { optionName: 'settings' }),
        ],
    },
};
const PriceItem = {
    type: 'object',
    additionalProperties: false,
    required: ['title', 'description'],
    properties: Object.assign(Object.assign(Object.assign({}, PriceDetailsProps), PriceDescriptionProps), { analyticsEvents: {
            oneOf: [
                Object.assign(Object.assign({}, AnalyticsEventSchema), { optionName: 'single' }),
                {
                    type: 'array',
                    items: AnalyticsEventSchema,
                    optionName: 'list',
                },
            ],
        } }),
};
/** @deprecated */
export const PriceDetailedBlock = {
    'price-detailed': {
        additionalProperties: false,
        required: ['items'],
        properties: Object.assign(Object.assign(Object.assign({}, BaseProps), AnimatableProps), { items: filteredArray(PriceItem), description: PriceDetailedDescriptionProps, details: PriceDetailedDetailsProps, priceType: {
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
