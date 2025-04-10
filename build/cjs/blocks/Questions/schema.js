"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsBlock = void 0;
const tslib_1 = require("tslib");
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const common_1 = require("../../schema/validators/common");
const utils_1 = require("../../schema/validators/utils");
const schema_1 = require("../../sub-blocks/Content/schema");
const QuestionsBlockContentProps = (0, omit_1.default)(schema_1.ContentBase, ['size', 'theme']);
exports.QuestionsBlock = {
    'questions-block': {
        additionalProperties: false,
        required: ['title', 'items'],
        properties: Object.assign(Object.assign(Object.assign({}, common_1.BlockBaseProps), QuestionsBlockContentProps), { items: (0, utils_1.filteredArray)({
                type: 'object',
                required: ['title', 'text'],
                properties: {
                    title: {
                        type: 'string',
                        contentType: 'text',
                    },
                    text: {
                        type: 'string',
                        contentType: 'yfm',
                    },
                    link: common_1.LinkProps,
                    listStyle: {
                        type: 'string',
                        enum: ['dash', 'disk'],
                    },
                },
            }) }),
    },
};
