import omit from 'lodash/omit';
import { ImageObjectProps } from '../../components/Image/schema';
import { BaseProps, CardBase, CardLayoutProps, withTheme } from '../../schema/validators/common';
import { AnalyticsEventSchema } from '../../schema/validators/event';
import { ContentBase } from '../Content/schema';
const BackgroundCardContentProps = omit(ContentBase, ['size', 'controlPosition']);
export const BackgroundCard = {
    'background-card': {
        additionalProperties: false,
        required: ['title', 'text'],
        properties: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, BaseProps), CardBase), CardLayoutProps), BackgroundCardContentProps), { url: {
                type: 'string',
            }, urlTitle: {
                type: 'string',
            }, background: withTheme(ImageObjectProps), backgroundColor: {
                type: 'string',
            }, backgroundPosition: {
                type: 'string',
                enum: ['left', 'right', 'center', 'top', 'bottom'],
            }, paddingBottom: {
                type: 'string',
                enum: ['s', 'm', 'l', 'xl'],
            }, analyticsEvents: {
                oneOf: [
                    Object.assign(Object.assign({}, AnalyticsEventSchema), { optionName: 'single' }),
                    {
                        type: 'array',
                        items: AnalyticsEventSchema,
                        optionName: 'list',
                    },
                ],
            }, controlPosition: {
                type: 'string',
                enum: ['content', 'footer'],
            } }),
    },
};
