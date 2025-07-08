import {BlockBaseProps, BlockHeaderProps} from '../../schema/validators/common';
import {filteredArray} from '../../schema/validators/utils';

export const linkItem = {
    additionalProperties: false,
    required: ['text', 'url'],
    properties: {
        active: {
            type: 'boolean',
        },
        text: {
            type: 'string',
        },
        url: {
            type: 'string',
        },
    },
};

export const TabLinksBlock = {
    'tab-links-block': {
        additionalProperties: false,
        required: ['items'],
        properties: {
            ...BlockBaseProps,
            ...BlockHeaderProps,
            items: filteredArray(linkItem),
        },
    },
};
