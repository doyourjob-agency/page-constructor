import {BackgroundImageProps} from '../../components/Image/schema';
import {
    AnimatableProps,
    BlockBaseProps,
    FileLinkProps,
    contentSizes,
    contentTextWidth,
    contentThemes,
} from '../../schema/validators/common';
import {filteredArray} from '../../schema/validators/utils';
import {ContentBlock} from '../../sub-blocks/Content/schema';

const ContentLayoutBlockProperties = {
    size: {
        type: 'string',
        enum: contentSizes,
    },
    background: BackgroundImageProps,
    unicorn: {
        type: 'string',
    },
    centered: {
        type: 'boolean',
    },
    theme: {
        type: 'string',
        enum: contentThemes,
    },
    textWidth: {
        type: 'string',
        enum: contentTextWidth,
    },
};

export const ContentLayoutBlock = {
    'content-layout-block': {
        additionalProperties: false,
        properties: {
            ...BlockBaseProps,
            ...AnimatableProps,
            textContent: ContentBlock?.content,
            fileContent: filteredArray(FileLinkProps),
            /**
             * @deprecated Use params on top level instead
             */
            properties: ContentLayoutBlockProperties,
            ...ContentLayoutBlockProperties,
        },
    },
};
