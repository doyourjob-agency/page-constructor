"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderSliderBlock = void 0;
const tslib_1 = require("tslib");
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const blocks_1 = require("../../schema/validators/blocks");
const common_1 = require("../../schema/validators/common");
exports.HeaderSliderBlock = {
    'header-slider-block': {
        additionalProperties: false,
        required: ['items'],
        properties: Object.assign(Object.assign(Object.assign({}, common_1.BlockBaseProps), (0, omit_1.default)(blocks_1.SliderProps, ['loadable', 'children'])), { items: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    required: ['title'],
                    properties: blocks_1.HeaderProperties,
                },
            } }),
    },
};
