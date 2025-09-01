import {
    BaseProps,
    LinkProps,
    TitleProps,
    contentThemes,
    withTheme,
} from '../../schema/validators/common';
import {ImageProps} from '../../schema/validators/components';
import {filteredArray} from '../../schema/validators/utils';

export const EventPersonCard = {
    'event-person-card': {
        additionalProperties: false,
        properties: {
            ...BaseProps,
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
            url: {
                type: 'string',
            },
            target: {
                type: 'string',
                enum: ['_blank', '_parent', '_top', '_self'],
            },
            subtitle: {
                type: 'string',
            },
            text: {
                type: 'string',
                contentType: 'yfm',
                inputType: 'textarea',
            },
            links: filteredArray(LinkProps),
            theme: {
                type: 'string',
                enum: contentThemes,
            },
            image: withTheme(ImageProps),
            hoverImage: withTheme(ImageProps),
        },
    },
};
