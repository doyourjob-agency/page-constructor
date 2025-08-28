import {ImageProps} from '../../components/Image/schema';
import {HeaderStockType} from '../../models';
import {
    BlockBaseProps,
    ButtonBlock,
    MediaProps,
    VideoProps,
    mediaView,
    withTheme,
} from '../../schema/validators/common';
import {filteredArray} from '../../schema/validators/utils';

export const HeaderBackgroundProps = {
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        ...MediaProps,
        fullWidth: {type: 'boolean'},
        fullWidthMedia: {type: 'boolean'},
    },
};

export const HeaderProperties = {
    title: {
        type: 'string',
        contentType: 'text',
    },
    switchingTitle: {
        type: 'object',
        additionalProperties: false,
        required: ['text'],
        properties: {
            text: {
                type: 'string',
            },
            switchingTime: {
                type: 'number',
            },
        },
    },
    overtitle: {
        type: 'string',
        contentType: 'text',
    },
    description: {
        type: 'string',
        contentType: 'yfm',
        inputType: 'textarea',
    },
    width: {
        type: 'string',
        enum: ['s', 'm', 'l'],
    },
    buttons: filteredArray(ButtonBlock),
    offset: {
        type: 'string',
        enum: ['default', 'large'],
    },
    image: withTheme(ImageProps),
    video: withTheme(VideoProps),
    mediaView: {
        type: 'string',
        enum: mediaView,
    },
    stockPrice: {
        type: 'object',
        additionalProperties: false,
        properties: {
            type: {
                type: 'string',
            },
            name: {
                type: 'string',
            },
            delayed: {
                type: 'string',
            },
        },
    },
    stockShares: {
        type: 'object',
        additionalProperties: false,
        properties: {
            date: {
                type: 'string',
            },
            total: {
                type: 'string',
            },
            text: {
                type: 'string',
            },
            included: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['title', 'text'],
                    properties: {
                        title: {
                            type: 'string',
                        },
                        text: {
                            type: 'string',
                        },
                    },
                },
            },
            description: {
                type: 'string',
            },
        },
    },
    stock: {
        type: 'string',
        enum: [HeaderStockType.Price, HeaderStockType.Shares],
    },
    backLink: {
        type: 'object',
        required: ['url', 'title'],
        properties: {
            url: {
                type: 'string',
            },
            title: {
                type: 'string',
                contentType: 'text',
            },
        },
    },
    imageSize: {
        type: 'string',
        enum: ['s', 'm'],
    },
    verticalOffset: {
        type: 'string',
        enum: ['0', 's', 'm', 'l', 'xl'],
    },
    background: withTheme(HeaderBackgroundProps),
    theme: {
        type: 'string',
        enum: ['default', 'dark'],
    },
    breadcrumbs: {
        type: 'object',
        additionalProperties: false,
        required: ['items'],
        properties: {
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['url', 'text'],
                    properties: {
                        url: {
                            type: 'string',
                        },
                        text: {
                            type: 'string',
                            contentType: 'text',
                        },
                    },
                },
            },
            theme: {type: 'string', enum: ['light', 'dark']},
        },
    },
    status: {
        type: 'string',
    },
    topTags: {
        type: 'array',
        items: {
            type: 'object',
            additionalProperties: false,
            required: ['text'],
            properties: {
                text: {type: 'string'},
                url: {type: 'string'},
                icon: {type: 'string', enum: ['map', 'clock']},
                target: {type: 'string'},
            },
        },
    },
    bottomTags: {
        type: 'array',
        items: {
            type: 'object',
            additionalProperties: false,
            required: ['text'],
            properties: {
                text: {type: 'string'},
                url: {type: 'string'},
                icon: {type: 'string', enum: ['map', 'clock']},
                target: {type: 'string'},
            },
        },
    },
    backgroundEffect: {
        type: 'object',
        additionalProperties: false,
        required: ['firstSrc', 'secondSrc'],
        properties: {
            firstSrc: {type: 'string'},
            secondSrc: {type: 'string'},
        },
    },
    headerSpace: {
        type: 'boolean',
    },
};

export const HeaderBlock = {
    'header-block': {
        additionalProperties: false,
        required: ['title'],
        properties: {
            ...BlockBaseProps,
            ...HeaderProperties,
        },
    },
};
