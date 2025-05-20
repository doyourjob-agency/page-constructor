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
            }, tag: {
                type: 'string',
            } }),
    },
};
