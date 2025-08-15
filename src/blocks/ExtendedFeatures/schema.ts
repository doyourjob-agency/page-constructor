import {
    AnimatableProps,
    BlockBaseProps,
    BlockHeaderProps,
    LinkProps,
    TitleProps,
    containerSizesObject,
    withTheme,
} from '../../schema/validators/common';
import {ImageProps} from '../../schema/validators/components';
import {filteredArray} from '../../schema/validators/utils';

export const ExtendedFeaturesItem = {
    additionalProperties: false,
    required: [],
    properties: {
        title: {
            oneOf: [
                {
                    type: 'string',
                    contentType: 'text',
                    optionName: 'text',
                },
                {
                    ...TitleProps,
                    properties: {
                        text: TitleProps.properties.text,
                        textSize: TitleProps.properties.textSize,
                    },
                    optionName: 'options',
                },
            ],
        },
        text: {
            type: 'string',
            contentType: 'yfm',
        },
        label: {
            type: 'string',
            enum: ['New', 'Preview'],
        },
        link: LinkProps,
        icon: withTheme(ImageProps),
    },
};

export const ExtendedFeaturesBlock = {
    'extended-features-block': {
        additionalProperties: false,
        required: [],
        properties: {
            ...BlockBaseProps,
            ...AnimatableProps,
            ...BlockHeaderProps,
            items: filteredArray(ExtendedFeaturesItem),
            colSizes: containerSizesObject,
        },
    },
};
