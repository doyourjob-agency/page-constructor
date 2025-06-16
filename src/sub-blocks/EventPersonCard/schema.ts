import {BaseProps, LinkProps, TitleProps, contentThemes} from '../../schema/validators/common';
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
            image: ImageProps,
        },
    },
};
