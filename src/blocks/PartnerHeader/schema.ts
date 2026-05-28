import {BaseProps} from '../../schema/validators/common';

export const PartnerHeaderBlock = {
    'partner-header-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            levelColorText: {
                type: 'string',
            },
            levelColorBackground: {
                type: 'string',
            },
            level: {
                type: 'string',
            },
            label: {
                type: 'string',
            },
            title: {
                type: 'string',
            },
            logo: {
                type: 'string',
            },
            background: {
                type: 'string',
            },
        },
    },
};
