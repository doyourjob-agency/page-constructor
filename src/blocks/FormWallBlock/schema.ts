import {BaseProps, withTheme} from '../../schema/validators/common';
import {HubspotFormProps} from '../../sub-blocks/HubspotForm/schema';

export const FormWallBlock = {
    'form-wall-block': {
        additionalProperties: false,
        properties: {
            ...BaseProps,
            slug: {
                type: 'string',
            },
            formData: {
                type: 'object',
                optionName: 'hubspot',
                properties: {
                    hubspot: withTheme(HubspotFormProps),
                },
            },
        },
    },
};
