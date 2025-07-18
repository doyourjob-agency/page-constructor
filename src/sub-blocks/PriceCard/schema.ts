import {BaseProps, ButtonBlock, CardBase, LinkProps, Tag} from '../../schema/validators/common';
import {ContentBase} from '../Content/schema';

export const PriceCardBlock = {
    'price-card': {
        additionalProperties: false,
        required: ['title', 'price'],
        properties: {
            ...BaseProps,
            ...CardBase,
            theme: ContentBase.theme,
            title: {
                type: 'string',
            },
            summary: {
                type: 'string',
            },
            price: {
                type: 'string',
            },
            pricePeriod: {
                type: 'string',
            },
            priceDetails: {
                type: 'string',
            },
            description: {
                type: 'string',
            },
            buttons: {
                type: 'array',
                items: ButtonBlock,
            },
            links: {
                type: 'array',
                items: LinkProps,
            },
            backgroundColor: {
                type: 'string',
            },
            list: {
                type: 'array',
                items: {
                    type: 'string',
                },
            },
            controlPosition: {
                type: 'string',
                enum: ['content', 'footer'],
            },
            label: Tag,
        },
    },
};
