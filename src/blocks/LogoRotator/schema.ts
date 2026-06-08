import {
    AnimatableProps,
    BaseProps,
    ThemeProps,
    containerSizesArray,
    containerSizesObject,
} from '../../schema/validators/common';

const countByBreakpointProperties = containerSizesArray.reduce<Record<string, {type: 'number'}>>(
    (acc, size) => ({...acc, [size]: {type: 'number'}}),
    {},
);

const countByBreakpoint = {
    type: 'object',
    additionalProperties: false,
    required: ['all'],
    properties: countByBreakpointProperties,
};

export const LogoRotatorBlock = {
    'logo-rotator-block': {
        additionalProperties: false,
        required: ['items', 'count'],
        properties: {
            ...BaseProps,
            ...AnimatableProps,
            title: {
                type: 'string',
            },
            text: {
                type: 'string',
            },
            theme: ThemeProps,
            items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['src'],
                    properties: {
                        url: {type: 'string'},
                        src: {type: 'string'},
                        isStatic: {type: 'boolean'},
                    },
                },
            },
            count: countByBreakpoint,
            minRotateCount: {
                type: 'number',
            },
            maxRotateCount: {
                type: 'number',
            },
            swapAnimation: {
                type: 'string',
                enum: ['fade', 'morph'],
            },
            colSizes: {
                type: 'object',
                additionalProperties: containerSizesObject,
            },
            rowMode: {
                type: 'boolean',
            },
        },
    },
};
