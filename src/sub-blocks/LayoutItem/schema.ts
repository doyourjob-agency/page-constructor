import omit from 'lodash/omit';

import {ImageObjectProps} from '../../components/Image/schema';
import metaInfo from '../../components/MetaInfo/schema';
import {
    BaseProps,
    CardLayoutProps,
    MediaProps,
    Tag,
    titleTextSize,
    withTheme,
} from '../../schema/validators/common';
import {AnalyticsEventSchema} from '../../schema/validators/event';
import {ContentBase} from '../../sub-blocks/Content/schema';

export const LayoutItem = {
    type: 'object',
    additionalProperties: false,
    required: ['content', 'media'],
    properties: {
        ...BaseProps,
        ...CardLayoutProps,
        title: {
            type: 'object',
            additionalProperties: false,
            properties: {
                text: {
                    type: 'string',
                },
                size: {
                    type: 'string',
                    enum: titleTextSize,
                },
            },
        },
        afterTitle: {
            type: 'object',
            additionalProperties: false,
            properties: {
                text: {
                    type: 'string',
                },
                size: {
                    type: 'string',
                    enum: titleTextSize,
                },
            },
        },
        summary: {
            type: 'string',
        },
        rightSpace: {
            type: 'boolean',
        },
        mediaLink: {
            type: 'object',
            additionalProperties: false,
            properties: {
                href: {
                    type: 'string',
                },
                download: {
                    type: 'boolean',
                },
                target: {
                    type: 'string',
                },
            },
        },
        media: MediaProps,
        content: omit(ContentBase, ['colSize', 'size', 'centered']),
        metaInfo: metaInfo,
        border: {
            type: 'boolean',
        },
        fullscreen: {
            type: 'boolean',
        },
        analyticsEvents: {
            oneOf: [
                {
                    ...AnalyticsEventSchema,
                    optionName: 'single',
                },
                {
                    type: 'array',
                    items: AnalyticsEventSchema,
                    optionName: 'list',
                },
            ],
        },
        label: Tag,
        jumpOnHover: {
            type: 'boolean',
        },
        background: withTheme(ImageObjectProps),
        backgroundColor: {
            type: 'string',
        },
        paddingBottom: {
            type: 'string',
            enum: ['s', 'm', 'l', 'xl'],
        },
    },
};
