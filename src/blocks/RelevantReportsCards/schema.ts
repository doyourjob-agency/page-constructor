import {BaseProps, BlockHeaderProps, LinkProps} from './../../schema/validators/common';

export const RelevantReportsCardsBlock = {
    'relevant-reports-cards-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            ...BlockHeaderProps,
            typeKey: {
                type: 'string',
            },
            link: LinkProps,
            slider: {
                type: 'boolean',
            },
            date: {
                type: 'string',
                enum: ['today', 'week', 'month'],
            },
            dateStart: {
                type: 'string',
            },
            dateEnd: {
                type: 'string',
            },
        },
    },
};
