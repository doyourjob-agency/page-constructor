import { AnimatableProps, BlockBaseProps, containerSizesObject, } from '../../schema/validators/common';
import { AnalyticsEventSchema } from '../../schema/validators/event';
export const IconsProps = {
    additionalProperties: false,
    required: ['size', 'items'],
    properties: Object.assign(Object.assign(Object.assign({}, BlockBaseProps), AnimatableProps), { title: {
            type: 'string',
            contentType: 'text',
        }, description: {
            type: 'string',
            contentType: 'text',
        }, size: {
            type: 'string',
            enum: ['s', 'm', 'l'],
            default: 's',
        }, colSizes: containerSizesObject, items: {
            type: 'array',
            items: {
                type: 'object',
                additionalProperties: false,
                required: ['url', 'text', 'src'],
                properties: {
                    url: {
                        type: 'string',
                    },
                    text: {
                        type: 'string',
                        contentType: 'text',
                    },
                    src: {
                        type: 'string',
                    },
                },
                analyticsEvents: {
                    oneOf: [
                        Object.assign(Object.assign({}, AnalyticsEventSchema), { optionName: 'single' }),
                        {
                            type: 'array',
                            items: AnalyticsEventSchema,
                            optionName: 'list',
                        },
                    ],
                },
            },
        } }),
};
export const IconsBlock = {
    'icons-block': IconsProps,
};
