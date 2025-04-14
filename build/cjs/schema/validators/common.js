"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderProps = exports.MapProps = exports.YMapMarker = exports.YMapMarkerLabel = exports.MediaProps = exports.ButtonBlock = exports.TitleProps = exports.BlockBaseProps = exports.AnchorProps = exports.withTheme = exports.MenuProps = exports.ButtonProps = exports.authorItem = exports.FileLinkProps = exports.LinkProps = exports.BackgroundProps = exports.DataLensProps = exports.DataLensObjectProps = exports.JustifyProps = exports.ThemeProps = exports.VideoProps = exports.CustomControlsOptionsProps = exports.PlayButtonProps = exports.LoopProps = exports.ChildrenCardsProps = exports.ChildrenProps = exports.AnimatableProps = exports.sliderSizesObject = exports.containerSizesObject = exports.CardLayoutProps = exports.BaseProps = exports.customControlsButtonPositioning = exports.customControlsType = exports.mediaView = exports.quoteTypes = exports.contentThemes = exports.sizeNumber = exports.dividerEnum = exports.fileLinkTypes = exports.videoControlsTypes = exports.playIconThemes = exports.playIconTypes = exports.videoTypes = exports.contentTextWidth = exports.contentSizes = exports.sliderSizesArray = exports.containerSizesArray = exports.titleTextSize = exports.textSize = exports.mediaDirection = void 0;
exports.BlockHeaderProps = exports.CardBase = void 0;
const schema_1 = require("../../components/Image/schema");
const models_1 = require("../../models");
const event_1 = require("./event");
exports.mediaDirection = ['media-content', 'content-media'];
exports.textSize = ['s', 'm', 'l'];
exports.titleTextSize = ['xs', 's', 'm', 'l', 'xl'];
exports.containerSizesArray = ['sm', 'md', 'lg', 'xl', 'all'];
exports.sliderSizesArray = ['sm', 'md', 'lg', 'xl'];
exports.contentSizes = ['s', 'l'];
exports.contentTextWidth = ['s', 'm', 'l'];
exports.videoTypes = ['default', 'player'];
exports.playIconTypes = ['default', 'text'];
exports.playIconThemes = ['blue', 'grey'];
exports.videoControlsTypes = [models_1.MediaVideoControlsType.Default, models_1.MediaVideoControlsType.Custom];
exports.fileLinkTypes = ['vertical', 'horizontal'];
exports.dividerEnum = { enum: ['0', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'] };
exports.sizeNumber = { type: 'number', maximum: 12, minimum: 1 };
exports.contentThemes = ['default', 'dark', 'light'];
exports.quoteTypes = Object.values(models_1.QuoteType);
exports.mediaView = ['fit', 'full'];
exports.customControlsType = [
    models_1.CustomControlsType.WithMuteButton,
    models_1.CustomControlsType.WithPlayPauseButton,
];
exports.customControlsButtonPositioning = [
    models_1.CustomControlsButtonPositioning.Center,
    models_1.CustomControlsButtonPositioning.Left,
    models_1.CustomControlsButtonPositioning.Right,
];
exports.BaseProps = {
    type: {},
    when: {
        type: 'string',
    },
};
exports.CardLayoutProps = {
    controlPosition: {
        type: 'string',
        enum: ['content', 'footer'],
    },
};
exports.containerSizesObject = {
    type: 'object',
    additionalProperties: false,
    properties: exports.containerSizesArray.reduce((acc, size) => (Object.assign(Object.assign({}, acc), { [size]: exports.sizeNumber })), {}),
};
exports.sliderSizesObject = {
    oneOf: [
        {
            type: 'object',
            additionalProperties: false,
            properties: exports.sliderSizesArray.reduce((acc, size) => (Object.assign(Object.assign({}, acc), { [size]: exports.sizeNumber })), {}),
            optionName: 'custom',
        },
        {
            type: 'number',
            optionName: 'constant',
        },
    ],
};
exports.AnimatableProps = {
    animated: {
        type: 'boolean',
    },
};
exports.ChildrenProps = {
    type: 'array',
    items: { $ref: 'self#/definitions/children' },
};
exports.ChildrenCardsProps = {
    type: 'array',
    items: { $ref: 'self#/definitions/cards' },
};
exports.LoopProps = {
    type: 'object',
    additionalProperties: false,
    required: ['start'],
    properties: {
        start: {
            type: 'number',
        },
        end: {
            type: 'number',
        },
    },
};
exports.PlayButtonProps = {
    type: 'object',
    additionalProperties: false,
    properties: {
        type: {
            type: 'string',
            enum: exports.playIconTypes,
        },
        theme: {
            type: 'string',
            enum: exports.playIconThemes,
        },
        text: {
            type: 'string',
            contentType: 'text',
        },
    },
};
exports.CustomControlsOptionsProps = {
    type: 'object',
    additionalProperties: false,
    properties: {
        type: {
            type: 'string',
            enum: exports.customControlsType,
        },
        muteButtonShown: {
            type: 'boolean',
        },
        positioning: {
            type: 'string',
            enum: exports.customControlsButtonPositioning,
        },
    },
};
exports.VideoProps = {
    type: 'object',
    additionalProperties: false,
    required: ['src'],
    properties: {
        src: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        loop: {
            oneOf: [
                Object.assign(Object.assign({}, exports.LoopProps), { optionName: 'options' }),
                {
                    type: 'boolean',
                    optionName: 'enabled',
                },
            ],
        },
        type: {
            type: 'string',
            enum: exports.videoTypes,
        },
        muted: {
            type: 'boolean',
        },
        autoplay: {
            type: 'boolean',
        },
        elapsedTime: {
            type: 'number',
        },
        playButton: exports.PlayButtonProps,
        controls: {
            type: 'string',
            enum: exports.videoControlsTypes,
        },
        customControlsOptions: exports.CustomControlsOptionsProps,
        ariaLabel: {
            type: 'string',
        },
        contain: {
            type: 'boolean',
        },
    },
};
exports.ThemeProps = {
    type: 'string',
    enum: ['light', 'dark'],
};
exports.JustifyProps = {
    type: 'string',
    enum: ['start', 'center', 'end'],
};
exports.DataLensObjectProps = {
    type: 'object',
    additionalProperties: false,
    required: ['id'],
    properties: {
        id: {
            type: 'string',
        },
        theme: exports.ThemeProps,
    },
};
exports.DataLensProps = {
    oneOf: [
        {
            type: 'string',
            optionName: 'id',
        },
        Object.assign(Object.assign({}, exports.DataLensObjectProps), { optionName: 'options' }),
    ],
};
exports.BackgroundProps = {
    additionalProperties: false,
    properties: Object.assign(Object.assign({}, exports.AnimatableProps), { image: schema_1.ImageProps, color: {
            type: 'string',
        }, video: exports.VideoProps, height: {
            type: 'number',
        }, size: {
            type: 'string',
            enum: ['contain', 'cover'],
        }, parallax: {
            type: 'boolean',
        }, fullWidthMedia: {
            type: 'boolean',
        } }),
};
exports.LinkProps = {
    type: 'object',
    additionalProperties: false,
    required: ['text', 'url'],
    properties: Object.assign(Object.assign({}, exports.BaseProps), { text: {
            type: 'string',
            contentType: 'text',
        }, url: {
            type: 'string',
        }, urlTitle: {
            type: 'string',
        }, arrow: {
            type: 'boolean',
        }, theme: {
            type: 'string',
            enum: ['back', 'file-link', 'normal'],
        }, textSize: {
            type: 'string',
            enum: exports.textSize,
        }, target: {
            type: 'string',
            enum: ['_blank', '_parent', '_top', '_self'],
        }, analyticsEvents: {
            oneOf: [
                Object.assign(Object.assign({}, event_1.AnalyticsEventSchema), { optionName: 'single' }),
                {
                    type: 'array',
                    items: event_1.AnalyticsEventSchema,
                    optionName: 'list',
                },
            ],
        } }),
};
exports.FileLinkProps = {
    type: 'object',
    additionalProperties: false,
    required: ['href', 'text'],
    properties: {
        href: {
            type: 'string',
        },
        text: {
            type: 'string',
            contentType: 'text',
        },
        type: {
            type: 'string',
            enum: exports.fileLinkTypes,
        },
        textSize: {
            type: 'string',
            enum: exports.textSize,
        },
        theme: {
            type: 'string',
            enum: exports.contentThemes,
        },
    },
};
exports.authorItem = {
    type: 'object',
    required: ['firstName', 'secondName'],
    properties: {
        firstName: {
            type: 'string',
            contentType: 'text',
        },
        secondName: {
            type: 'string',
            contentType: 'text',
        },
        avatar: schema_1.ImageProps,
        description: {
            type: 'string',
            contentType: 'yfm',
        },
    },
};
exports.ButtonProps = {
    text: {
        type: 'string',
        contentType: 'text',
    },
    url: {
        type: 'string',
    },
    urlTitle: {
        type: 'string',
    },
    primary: {
        type: 'boolean',
    },
    size: {
        type: 'string',
        enum: [
            'xs',
            'ns',
            's',
            'n',
            'm',
            'l',
            'xl',
            'head',
            'promo', // deprecated, use 'xl'
        ],
    },
    theme: {
        type: 'string',
        enum: [
            'normal',
            'action',
            'outlined',
            'outlined-info',
            'outlined-danger',
            'raised',
            'flat',
            'flat-info',
            'flat-danger',
            'flat-secondary',
            'clear',
            'normal-contrast',
            'outlined-contrast',
            'flat-contrast',
            'link',
            'pseudo',
            'pseudo-special',
            'websearch',
            'normal-dark',
            'normal-special',
            'accent',
            'dark-grey',
            'app-store',
            'google-play',
            'scale',
            'github',
            'monochrome',
        ],
    },
    img: {
        oneOf: [
            {
                type: 'string',
                optionName: 'url',
            },
            {
                type: 'object',
                additionalProperties: false,
                required: ['data'],
                properties: {
                    data: {
                        type: 'string',
                    },
                    position: {
                        type: 'string',
                        enum: ['left', 'right'],
                    },
                    alt: {
                        type: 'string',
                        contentType: 'text',
                    },
                },
                optionName: 'options',
            },
        ],
    },
    analyticsEvents: {
        oneOf: [
            Object.assign(Object.assign({}, event_1.AnalyticsEventSchema), { optionName: 'single' }),
            { type: 'array', items: event_1.AnalyticsEventSchema, optionName: 'list' },
        ],
    },
    target: {
        type: 'string',
        enum: ['_self', '_blank', '_parent', '_top'],
    },
    width: {
        type: 'string',
        enum: ['auto', 'max'],
    },
};
exports.MenuProps = {
    type: 'object',
    additionalProperties: false,
    properties: {
        title: {
            type: 'string',
            contentType: 'text',
        },
    },
};
function withTheme(value) {
    return {
        oneOf: [
            Object.assign(Object.assign({}, value), { optionName: 'no theme' }),
            {
                type: 'object',
                additionalProperties: false,
                required: [models_1.Theme.Light],
                properties: Object.values(models_1.Theme).reduce((result, themeName) => (Object.assign(Object.assign({}, result), { [themeName]: value })), {}),
                optionName: 'themes',
            },
        ],
    };
}
exports.withTheme = withTheme;
exports.AnchorProps = {
    type: 'object',
    additionalProperties: false,
    required: ['text', 'url'],
    properties: {
        text: {
            type: 'string',
            contentType: 'text',
        },
        url: {
            type: 'string',
        },
        urlTitle: {
            type: 'string',
        },
    },
};
exports.BlockBaseProps = Object.assign(Object.assign({}, exports.BaseProps), { anchor: exports.AnchorProps, visible: {
        type: 'string',
        enum: exports.containerSizesArray,
    }, hidden: {
        type: 'string',
        enum: exports.containerSizesArray,
    }, resetPaddings: {
        type: 'boolean',
    }, context: {
        type: 'string',
    }, indent: {
        type: 'object',
        additionalProperties: false,
        properties: {
            top: exports.dividerEnum,
            bottom: exports.dividerEnum,
        },
    }, backgroundFull: {
        type: 'string',
    } });
exports.TitleProps = {
    type: 'object',
    additionalProperties: false,
    required: ['text'],
    properties: {
        text: {
            type: 'string',
            contentType: 'text',
        },
        textSize: {
            type: 'string',
            enum: exports.titleTextSize,
        },
        url: {
            type: 'string',
        },
        urlTitle: {
            type: 'string',
        },
        resetMargin: {
            type: 'boolean',
        },
    },
};
exports.ButtonBlock = {
    type: 'object',
    additionalProperties: false,
    properties: exports.ButtonProps,
    if: {
        properties: {
            theme: {
                enum: ['app-store', 'google-play'],
            },
        },
    },
    then: {
        required: ['url'],
    },
    else: {
        required: ['text', 'url'],
    },
};
const IframeProps = {
    type: 'object',
    additionalProperties: false,
    required: ['src'],
    properties: {
        src: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        title: {
            type: 'string',
        },
        height: {
            type: 'number',
        },
        width: {
            type: 'number',
        },
    },
};
exports.MediaProps = {
    color: {
        type: 'string',
    },
    image: {
        oneOf: [
            Object.assign(Object.assign({}, schema_1.ImageProps), { optionName: 'single' }),
            { type: 'array', items: schema_1.ImageProps, optionName: 'list' },
        ],
    },
    disableImageSliderForArrayInput: {
        type: 'boolean',
    },
    video: exports.VideoProps,
    youtube: {
        type: 'string',
    },
    videoIframe: {
        type: 'string',
    },
    parallax: {
        type: 'boolean',
    },
    height: {
        type: 'number',
    },
    previewImg: {
        type: 'string',
    },
    dataLens: exports.DataLensProps,
    fullscreen: {
        type: 'boolean',
    },
    analyticsEvents: {
        anyOf: [event_1.AnalyticsEventSchema, { type: 'array', items: event_1.AnalyticsEventSchema }],
    },
    ratio: {
        type: ['number', 'string'],
        pattern: '^auto$',
    },
    iframe: Object.assign({}, IframeProps),
    margins: {
        type: 'boolean',
    },
};
exports.YMapMarkerLabel = {
    type: 'object',
    required: [],
    properties: {
        iconCaption: {
            type: 'string',
        },
        iconContent: {
            type: 'string',
        },
        iconColor: {
            type: 'string',
        },
        preset: {
            type: 'string',
        },
    },
};
exports.YMapMarker = {
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
        coordinate: {
            type: 'array',
            items: { type: 'number' },
        },
        address: {
            type: 'string',
        },
        label: exports.YMapMarkerLabel,
    },
};
exports.MapProps = {
    zoom: {
        type: 'number',
    },
    address: {
        type: 'string',
    },
    id: {
        type: 'string',
    },
    markers: {
        type: 'array',
        items: exports.YMapMarker,
    },
};
exports.BorderProps = {
    type: 'string',
    enum: ['line', 'shadow', 'none'],
};
exports.CardBase = {
    border: exports.BorderProps,
};
exports.BlockHeaderProps = {
    title: {
        oneOf: [
            {
                type: 'string',
                optionName: 'text',
            },
            Object.assign(Object.assign({}, exports.TitleProps), { optionName: 'options' }),
        ],
    },
    description: {
        type: 'string',
        contentType: 'yfm',
        inputType: 'textarea',
    },
};
