import {BaseProps, Tag, TitleProps} from './../../schema/validators/common';

export const EventsSectionBlock = {
    'events-section-block': {
        additionalProperties: false,
        required: ['typeKey'],
        properties: {
            ...BaseProps,
            typeKey: {
                type: 'string',
            },
            title: {
                oneOf: [
                    {
                        type: 'string',
                        contentType: 'text',
                        optionName: 'text',
                    },
                    {
                        ...TitleProps,
                        optionName: 'options',
                    },
                ],
            },
            label: Tag,
            empty: {
                type: 'string',
            },
        },
    },
};
