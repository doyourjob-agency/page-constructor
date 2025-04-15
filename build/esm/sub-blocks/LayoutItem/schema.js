import omit from 'lodash/omit';
import metaInfo from '../../components/MetaInfo/schema';
import { BaseProps, CardLayoutProps, MediaProps, titleTextSize, } from '../../schema/validators/common';
import { AnalyticsEventSchema } from '../../schema/validators/event';
import { ContentBase } from '../../sub-blocks/Content/schema';
export const LayoutItem = {
    type: 'object',
    additionalProperties: false,
    required: ['content', 'media'],
    properties: Object.assign(Object.assign(Object.assign({}, BaseProps), CardLayoutProps), { title: {
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
        }, afterTitle: {
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
        }, rightSpace: {
            type: 'boolean',
        }, media: MediaProps, content: omit(ContentBase, ['colSize', 'size', 'centered']), metaInfo: metaInfo, border: {
            type: 'boolean',
        }, fullscreen: {
            type: 'boolean',
        }, analyticsEvents: {
            oneOf: [
                Object.assign(Object.assign({}, AnalyticsEventSchema), { optionName: 'single' }),
                {
                    type: 'array',
                    items: AnalyticsEventSchema,
                    optionName: 'list',
                },
            ],
        } }),
};
