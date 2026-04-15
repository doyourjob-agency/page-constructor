import {BaseProps} from '../../schema/validators/common';
import {NewPostCardProps} from '../../sub-blocks/NewPostCard/schema';

export const ScienceSuggestBlock = {
    'science-suggest-block': {
        additionalProperties: false,
        required: ['items'],
        properties: {
            ...BaseProps,
            items: {
                type: 'array',
                items: {
                    additionalProperties: false,
                    required: [],
                    properties: NewPostCardProps,
                },
            },
        },
    },
};
