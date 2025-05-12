"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBlock = void 0;
const common_1 = require("../../schema/validators/common");
const utils_1 = require("../../schema/validators/utils");
exports.TableBlock = {
    'table-block': {
        additionalProperties: false,
        required: ['title', 'table'],
        properties: Object.assign(Object.assign({}, common_1.BlockBaseProps), { title: {
                type: 'string',
                contentType: 'text',
            }, description: {
                type: 'string',
            }, links: (0, utils_1.filteredArray)(common_1.LinkProps), buttons: (0, utils_1.filteredArray)(common_1.ButtonBlock), table: {
                additionalProperties: false,
                required: ['content'],
                properties: Object.assign(Object.assign({}, common_1.BaseProps), { content: {
                        type: 'array',
                        items: {
                            type: 'array',
                            items: {
                                oneOf: [
                                    {
                                        type: 'string',
                                        contentType: 'text',
                                        optionName: 'text',
                                    },
                                    {
                                        type: 'number',
                                        contentType: 'text',
                                        optionName: 'number',
                                    },
                                ],
                            },
                        },
                    }, legend: {
                        type: 'array',
                        items: {
                            type: 'string',
                            contentType: 'yfm',
                        },
                    }, hideLegend: {
                        type: 'boolean',
                    }, justify: {
                        type: 'array',
                        items: common_1.JustifyProps,
                    }, marker: {
                        type: 'string',
                        enum: ['disk', 'tick'],
                    }, caption: {
                        type: 'string',
                    } }),
            } }),
    },
};
