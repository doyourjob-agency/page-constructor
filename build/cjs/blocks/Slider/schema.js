"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderBlock = exports.SliderProps = void 0;
const common_1 = require("../../schema/validators/common");
const LoadableProps = {
    additionalProperties: false,
    required: ['source'],
    properties: {
        source: {
            type: 'string',
            // add loadable sources here if you use it in your project
            // enum: ['my-loadable-source-1', 'my-loadable-source-1'],
        },
        /**
         * @deprecated
         */
        minCount: {
            type: 'number',
        },
        params: {
            type: 'object',
            patternProperties: {
                '.*': {
                    type: ['string', 'number', 'boolean'],
                },
            },
        },
    },
    // remove it in your custom validator schema if you use loadable
    disabled: true,
};
const DisclaimerProps = {
    additionalProperties: false,
    required: ['text'],
    properties: {
        text: {
            type: 'string',
            contentType: 'text',
        },
        size: {
            type: 'string',
            enum: common_1.textSize,
        },
    },
};
exports.SliderProps = {
    dots: {
        type: 'boolean',
    },
    arrows: {
        type: 'boolean',
    },
    infinite: {
        type: 'boolean',
    },
    randomOrder: {
        type: 'boolean',
    },
    autoplay: {
        type: 'number',
    },
    animated: common_1.AnimatableProps,
    slidesToShow: common_1.sliderSizesObject,
    disclaimer: DisclaimerProps,
    loadable: LoadableProps,
    children: common_1.ChildrenCardsProps,
};
exports.SliderBlock = {
    'slider-block': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign(Object.assign(Object.assign({}, common_1.BlockBaseProps), common_1.AnimatableProps), exports.SliderProps), common_1.BlockHeaderProps),
    },
};
