import { ImageProps } from '../../components/Image/schema';
import { ButtonBlock, LinkProps, TitleProps, containerSizesArray, contentSizes, contentThemes, sizeNumber, withTheme, } from '../../schema/validators/common';
import { filteredArray } from '../../schema/validators/utils';
export const ContentItem = {
    additionalProperties: false,
    required: ['icon'],
    properties: {
        title: {
            type: 'string',
            contentType: 'text',
        },
        text: {
            type: 'string',
            contentType: 'yfm',
        },
        icon: withTheme(ImageProps),
    },
};
export const ContentBase = {
    title: {
        oneOf: [
            {
                type: 'string',
                contentType: 'text',
                optionName: 'text',
            },
            Object.assign(Object.assign({}, TitleProps), { optionName: 'options' }),
        ],
    },
    subtitle: {
        type: 'string',
    },
    text: {
        type: 'string',
        contentType: 'yfm',
        inputType: 'textarea',
    },
    additionalInfo: {
        type: 'string',
        contentType: 'yfm',
    },
    size: {
        type: 'string',
        enum: contentSizes,
    },
    links: filteredArray(LinkProps),
    subtitleLinks: filteredArray(LinkProps),
    buttons: filteredArray(ButtonBlock),
    theme: {
        type: 'string',
        enum: contentThemes,
    },
    list: filteredArray(ContentItem),
    controlPosition: {
        type: 'string',
        enum: ['default', 'bottom'],
    },
};
export const ContentBlock = {
    content: {
        additionalProperties: false,
        properties: Object.assign(Object.assign({}, ContentBase), { colSizes: containerSizesArray.reduce((acc, size) => (Object.assign(Object.assign({}, acc), { [size]: sizeNumber })), {}), centered: {
                type: 'boolean',
            } }),
    },
};
