import {BlockBaseProps} from '../../schema/validators/common';

export const OnetrustCookieListBlock = {
    ['onetrust-cookie-list']: {
        type: 'object',
        additionalProperties: false,
        properties: BlockBaseProps,
    },
};
