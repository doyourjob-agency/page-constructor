import {BaseProps, Tag} from './../../schema/validators/common';

export const IrEventsFeedUpcomingBlock = {
    'ir-events-feed-upcoming-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            label: Tag,
        },
    },
};
