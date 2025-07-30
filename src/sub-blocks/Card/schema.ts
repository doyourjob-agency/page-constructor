import pick from 'lodash/pick';

import {BaseProps, CardBase, Tag} from '../../schema/validators/common';
import {ContentBase} from '../Content/schema';

const CardContentProps = pick(ContentBase, ['text', 'summary']);

export const Card = {
    card: {
        additionalProperties: false,
        required: ['header'],
        properties: {
            ...BaseProps,
            ...CardBase,
            ...CardContentProps,
            header: {
                type: 'object',
                additionalProperties: false,
                required: ['image', 'title'],
                properties: {
                    image: {
                        type: 'string',
                    },
                    hoverImage: {
                        type: 'string',
                    },
                    title: {
                        type: 'string',
                    },
                },
            },
            service: {
                type: 'object',
                additionalProperties: false,
                required: ['slug', 'name'],
                properties: {
                    slug: {
                        type: 'string',
                    },
                    name: {
                        type: 'string',
                    },
                },
            },
            label: Tag,
        },
    },
};
