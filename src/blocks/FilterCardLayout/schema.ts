import {AnimatableProps, BlockBaseProps, BlockHeaderProps} from '../../schema/validators/common';
import {filteredArray} from '../../schema/validators/utils';
import {CardLayoutProps} from '../validators';

const FilterCardLayoutTagProps = {
    additionalProperties: false,
    required: ['id', 'label'],
    properties: {
        id: {
            type: 'string',
        },
        label: {
            type: 'string',
        },
    },
};

const FilterCardLayoutItemProps = {
    additionalProperties: false,
    required: ['tags'],
    properties: {
        tags: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        ...CardLayoutProps.properties,
    },
};

export const FilterCardLayoutBlock = {
    'filter-card-layout-block': {
        additionalProperties: false,
        required: ['tags', 'items'],
        properties: {
            ...BlockBaseProps,
            ...AnimatableProps,
            ...BlockHeaderProps,
            allTag: {
                oneOf: [
                    {
                        type: 'boolean',
                        optionName: 'auto',
                    },
                    {
                        type: 'string',
                        optionName: 'cutom',
                    },
                ],
            },
            tags: filteredArray(FilterCardLayoutTagProps),
            items: filteredArray(FilterCardLayoutItemProps),
            tagButtonSize: {
                type: 'string',
                enum: ['s', 'm', 'l', 'xl'],
            },
            centered: {type: 'boolean'},
        },
    },
};
