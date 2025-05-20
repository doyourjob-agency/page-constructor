import { BaseProps } from '../../schema/validators/common';
export const PostCard = {
    'post-card': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign({}, BaseProps), { url: {
                type: 'string',
            }, title: {
                type: 'string',
            }, date: {
                type: 'string',
            }, readingTime: {
                type: 'number',
            }, image: {
                type: 'string',
            }, description: {
                type: 'string',
            }, tags: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['name', 'slug'],
                    properties: {
                        name: {
                            type: 'string',
                        },
                        slug: {
                            type: 'string',
                        },
                    },
                },
            } }),
    },
};
