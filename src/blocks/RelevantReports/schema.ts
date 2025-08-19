import {BaseProps, BlockHeaderProps, LinkProps} from './../../schema/validators/common';

export const RelevantReportsBlock = {
    'relevant-reports-block': {
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
            count: {
                type: 'number',
            },
        },
    },
};
