"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDefaultSchema = exports.getBlocksCases = exports.validators = void 0;
var validators_1 = require("./validators");
Object.defineProperty(exports, "validators", { enumerable: true, get: function () { return validators_1.validators; } });
const constants_1 = require("./constants");
const common_1 = require("./validators/common");
const navigation_1 = require("./validators/navigation");
const utils_1 = require("./validators/utils");
const getBlocksCases = (blocks) => {
    return Object.values(blocks).reduce((acc, block) => (Object.assign(Object.assign({}, acc), block)), {});
};
exports.getBlocksCases = getBlocksCases;
function generateDefaultSchema(config) {
    const { cards = {}, blocks = {}, extensions = {} } = config !== null && config !== void 0 ? config : {};
    const configBlockSchemaNames = Object.keys(blocks).filter((item) => !constants_1.constructorBlockSchemaNames.includes(item));
    const configCardSchemaNames = Object.keys(cards).filter((item) => !constants_1.constructorCardSchemaNames.includes(item));
    return {
        $id: 'self',
        definitions: {
            children: (0, utils_1.filteredItem)({
                type: 'object',
                required: ['type'],
                properties: {
                    type: {
                        type: 'string',
                        enum: [...constants_1.constructorBlockSchemaNames, ...configBlockSchemaNames],
                    },
                },
                select: { $data: '0/type' },
                selectCases: Object.assign(Object.assign({}, constants_1.blockSchemas), (0, exports.getBlocksCases)(blocks)),
            }),
            cards: (0, utils_1.filteredItem)({
                type: 'object',
                required: ['type'],
                properties: {
                    type: {
                        type: 'string',
                        enum: [...constants_1.constructorCardSchemaNames, ...configCardSchemaNames],
                    },
                },
                select: { $data: '0/type' },
                selectCases: Object.assign(Object.assign({}, constants_1.cardSchemas), (0, exports.getBlocksCases)(cards)),
            }),
        },
        type: 'object',
        additionalProperties: false,
        required: ['blocks'],
        properties: Object.assign(Object.assign(Object.assign({}, common_1.AnimatableProps), { logo: (0, common_1.withTheme)(navigation_1.LogoProps), header: navigation_1.NavigationHeaderProps, blocks: {
                type: 'array',
                items: {
                    $ref: '#/definitions/children',
                },
            }, menu: common_1.MenuProps, background: (0, common_1.withTheme)(common_1.BackgroundProps) }), extensions),
    };
}
exports.generateDefaultSchema = generateDefaultSchema;
