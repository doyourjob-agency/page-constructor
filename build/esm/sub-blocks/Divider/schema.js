import { BaseProps, dividerEnum } from '../../schema/validators/common';
export const Divider = {
    divider: {
        additionalProperties: false,
        properties: Object.assign(Object.assign({}, BaseProps), { border: {
                type: 'boolean',
            }, size: dividerEnum }),
    },
};
