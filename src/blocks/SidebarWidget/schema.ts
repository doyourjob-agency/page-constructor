import {BlockBaseProps} from '../../schema/validators/common';

export const SidebarWidgetBlock = {
    'sidebar-widget-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BlockBaseProps,
            image: {
                type: 'string',
            },
            title: {
                type: 'string',
            },
            text: {
                type: 'string',
            },
            url: {
                type: 'string',
            },
            blank: {
                type: 'boolean',
            },
        },
    },
};
