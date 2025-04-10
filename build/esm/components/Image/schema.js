import { filteredItem } from '../../schema/validators/utils';
export const imageUrlPattern = '^(files\\.[^:\\s]+|((http[s]?|ftp):\\/)?\\/?([^:\\/\\s]+)((\\/\\w+)*\\/)([\\w\\-\\.]+[^#?\\s]+)(.*)?(#[\\w\\-]+)?)$';
const ImageBase = {
    alt: {
        type: 'string',
        contentType: 'text',
    },
    disableCompress: {
        type: 'boolean',
    },
    loading: {
        type: 'string',
        enum: ['eager', 'lazy'],
    },
    fetchPriority: {
        type: 'string',
        enum: ['high', 'low', 'auto'],
    },
};
const StyleBase = {
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        backgroundColor: { type: 'string' },
        height: { type: ['string', 'number'] },
        width: { type: ['string', 'number'] },
        color: { type: 'string' },
    },
};
export const ImageDeviceProps = {
    type: 'object',
    additionalProperties: false,
    required: ['desktop', 'mobile'],
    properties: Object.assign(Object.assign({}, ImageBase), { desktop: { type: 'string', pattern: imageUrlPattern }, tablet: {
            type: 'string',
            pattern: imageUrlPattern,
        }, mobile: {
            type: 'string',
            pattern: imageUrlPattern,
        } }),
};
export const ImageBaseObjectProps = {
    type: 'object',
    additionalProperties: false,
    properties: Object.assign(Object.assign({}, ImageBase), { src: {
            type: 'string',
            pattern: imageUrlPattern,
        }, style: StyleBase }),
};
export const ImageObjectProps = Object.assign(Object.assign({}, ImageBaseObjectProps), { required: ['src'] });
export const ImageProps = {
    oneOf: [
        {
            type: 'string',
            pattern: imageUrlPattern,
            optionName: 'url',
        },
        filteredItem(Object.assign(Object.assign({}, ImageObjectProps), { optionName: 'options' })),
        filteredItem(Object.assign(Object.assign({}, ImageDeviceProps), { optionName: 'device options' })),
        {
            type: 'array',
            items: filteredItem(Object.assign({}, ImageObjectProps)),
            optionName: 'options list',
        },
        {
            type: 'array',
            items: filteredItem(Object.assign({}, ImageDeviceProps)),
            optionName: 'device options list',
        },
    ],
};
export const BackgroundImageProps = {
    anyOf: [
        Object.assign(Object.assign({}, ImageBaseObjectProps), { optionName: 'options' }),
        Object.assign(Object.assign({}, ImageDeviceProps), { optionName: 'device options' }),
    ],
};
