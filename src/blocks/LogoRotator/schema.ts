import {
    AnimatableProps,
    BaseProps,
    ThemeProps,
    TitleProps,
    containerSizesObject,
} from '../../schema/validators/common';

const countColumns = ['c2', 'c3', 'c4', 'c5', 'c6', 'c7'];

const countByColumnsProperties = countColumns.reduce<Record<string, {type: 'number'}>>(
    (acc, columns) => ({...acc, [columns]: {type: 'number'}}),
    {},
);

const countByColumns = {
    type: 'object',
    additionalProperties: false,
    required: countColumns,
    properties: countByColumnsProperties,
};

export const LogoRotatorBlock = {
    'logo-rotator-block': {
        additionalProperties: false,
        required: ['items', 'count'],
        properties: {
            ...BaseProps,
            ...AnimatableProps,
            title: {
                oneOf: [
                    {
                        type: 'string',
                        contentType: 'text',
                        optionName: 'text',
                    },
                    {
                        ...TitleProps,
                        optionName: 'options',
                    },
                ],
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
            count: countByColumns,
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
