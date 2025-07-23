import omit from 'lodash/omit';

import {BaseProps, CardBase, CardLayoutProps, Tag, withTheme} from '../../schema/validators/common';
import {ImageProps} from '../../schema/validators/components';
import {ContentBase} from '../Content/schema';

const ImageCardBlockContentProps = omit(ContentBase, ['centered', 'colSizes', 'controlPosition']);

export const ImageCard = {
    'image-card': {
        additionalProperties: false,
        required: ['image'],
        properties: {
            ...BaseProps,
            ...CardBase,
            ...CardLayoutProps,
            ...ImageCardBlockContentProps,
            image: withTheme(ImageProps),
            hoverImage: withTheme(ImageProps),
            direction: {
                type: 'string',
                enum: ['direct', 'reverse'],
            },
            margins: {
                type: 'string',
                enum: ['s', 'm'],
            },
            backgroundColor: {
                type: 'string',
            },
            url: {
                type: 'string',
            },
            urlTitle: {
                type: 'string',
            },
            label: Tag,
        },
    },
};
