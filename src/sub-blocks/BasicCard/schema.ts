import omit from 'lodash/omit';

import {ImageProps} from '../../components/Image/schema';
import {BaseProps, CardBase, CardLayoutProps, Tag} from '../../schema/validators/common';
import {ContentBase} from '../Content/schema';

const BasicCardContentProps = omit(ContentBase, ['size', 'theme', 'controlPosition']);

export const BasicCard = {
    'basic-card': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BaseProps,
            ...CardBase,
            ...CardLayoutProps,
            ...BasicCardContentProps,
            url: {
                type: 'string',
            },
            urlTitle: {
                type: 'string',
            },
            icon: ImageProps,
            target: {
                type: 'string',
                enum: ['_blank', '_parent', '_top', '_self'],
            },
            iconPosition: {
                type: 'string',
                enum: ['top', 'left'],
            },
            controlPosition: {
                type: 'string',
                enum: ['content', 'footer'],
            },
            label: Tag,
        },
    },
};
