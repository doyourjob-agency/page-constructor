import { BaseProps } from '../../schema/validators/common';
export const FeedCard = {
    'feed-card': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign({}, BaseProps), { url: {
                type: 'string',
            }, image: {
                type: 'string',
            }, type: {
                type: 'string',
            }, title: {
                type: 'string',
            }, description: {
                type: 'string',
            }, info: {
                type: 'string',
            }, place: {
                type: 'string',
            } }),
    },
};
