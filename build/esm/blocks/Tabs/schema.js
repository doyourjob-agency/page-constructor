import omit from 'lodash/omit';
import { ImageProps } from '../../components/Image/schema';
import { BlockBaseProps, BlockHeaderProps, LinkProps, MediaProps, containerSizesArray, contentSizes, mediaDirection, sizeNumber, withTheme, } from '../../schema/validators/common';
import { filteredArray } from '../../schema/validators/utils';
import { ContentBase } from '../../sub-blocks/Content/schema';
const TabsItemContentProps = omit(ContentBase, ['size', 'colSizes', 'centered', 'theme']);
export const tabsItem = {
    type: 'object',
    additionalProperties: false,
    required: ['tabName'],
    properties: Object.assign(Object.assign({}, TabsItemContentProps), { tabName: {
            type: 'string',
        }, caption: {
            type: 'string',
            contentType: 'text',
        }, media: withTheme({
            type: 'object',
            properties: MediaProps,
        }), 
        //TODO deprecated
        link: LinkProps, image: withTheme(ImageProps), border: {
            type: 'string',
            enum: ['shadow', 'line', 'none'],
        } }),
};
export const TabsBlock = {
    'tabs-block': {
        additionalProperties: false,
        required: ['title', 'items'],
        properties: Object.assign(Object.assign(Object.assign({}, BlockBaseProps), BlockHeaderProps), { tabsColSizes: containerSizesArray.reduce((acc, size) => (Object.assign(Object.assign({}, acc), { [size]: sizeNumber })), {}), direction: {
                type: 'string',
                enum: mediaDirection,
            }, centered: { type: 'boolean' }, items: filteredArray(tabsItem), contentSize: {
                type: 'string',
                enum: contentSizes,
            } }),
    },
};
