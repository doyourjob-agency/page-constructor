import {BaseProps, Tag} from './../../schema/validators/common';

export const IrEventsFeedRecentBlock = {
    'ir-events-feed-recent-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            label: Tag,
        },
    },
};
