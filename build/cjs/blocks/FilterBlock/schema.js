"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterBlock = exports.FilterProps = exports.FilterItemProps = exports.FilterTagProps = void 0;
const common_1 = require("../../schema/validators/common");
const utils_1 = require("../../schema/validators/utils");
exports.FilterTagProps = {
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
exports.FilterItemProps = {
    additionalProperties: false,
    required: ['tags', 'card'],
    properties: {
        tags: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        card: { $ref: 'self#/definitions/cards' },
    },
};
exports.FilterProps = {
    additionalProperties: false,
    required: ['tags', 'items'],
    properties: Object.assign(Object.assign(Object.assign(Object.assign({}, common_1.BlockBaseProps), common_1.AnimatableProps), common_1.BlockHeaderProps), { allTag: {
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
        }, colSizes: common_1.containerSizesObject, tags: (0, utils_1.filteredArray)(exports.FilterTagProps), items: (0, utils_1.filteredArray)(exports.FilterItemProps), tagButtonSize: {
            type: 'string',
            enum: ['s', 'm', 'l', 'xl'],
        }, centered: { type: 'boolean' } }),
};
exports.FilterBlock = {
    'filter-block': exports.FilterProps,
};
