"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoBlock = void 0;
const tslib_1 = require("tslib");
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const common_1 = require("../../schema/validators/common");
const utils_1 = require("../../schema/validators/utils");
const schema_1 = require("../../sub-blocks/Content/schema");
const ContentProps = {
    additionalProperties: false,
    properties: (0, omit_1.default)(schema_1.ContentBase, ['size', 'colSizes', 'theme']),
};
exports.InfoBlock = {
    'info-block': {
        additionalProperties: false,
        required: ['title', 'sectionsTitle'],
        properties: Object.assign(Object.assign({}, common_1.BaseProps), { title: {
                type: 'string',
                contentType: 'text',
            }, backgroundColor: (0, common_1.withTheme)({
                type: 'string',
            }), sectionsTitle: {
                type: 'string',
                contentType: 'text',
            }, buttons: (0, utils_1.filteredArray)(common_1.ButtonBlock), theme: common_1.ThemeProps, links: (0, utils_1.filteredArray)(common_1.LinkProps), leftContent: ContentProps, rightContent: ContentProps }),
    },
};
