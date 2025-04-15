import { BaseProps } from '../../schema/validators/common';
export const ShareBlock = {
    'share-block': {
        additionalProperties: false,
        required: ['items'],
        properties: Object.assign(Object.assign({}, BaseProps), { title: {
                type: 'string',
            }, items: {
                type: 'array',
                items: {
                    type: 'string',
                    enum: ['telegram', 'facebook', 'twitter', 'vk', 'linkedin'],
                },
            } }),
    },
};
