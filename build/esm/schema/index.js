export { validators } from './validators';
import { blockSchemas, cardSchemas, constructorBlockSchemaNames, constructorCardSchemaNames, } from './constants';
import { AnimatableProps, BackgroundProps, MenuProps, withTheme } from './validators/common';
import { LogoProps, NavigationHeaderProps } from './validators/navigation';
import { filteredItem } from './validators/utils';
export const getBlocksCases = (blocks) => {
    return Object.values(blocks).reduce((acc, block) => (Object.assign(Object.assign({}, acc), block)), {});
};
export function generateDefaultSchema(config) {
    const { cards = {}, blocks = {}, extensions = {} } = config !== null && config !== void 0 ? config : {};
    const configBlockSchemaNames = Object.keys(blocks).filter((item) => !constructorBlockSchemaNames.includes(item));
    const configCardSchemaNames = Object.keys(cards).filter((item) => !constructorCardSchemaNames.includes(item));
    return {
        $id: 'self',
        definitions: {
            children: filteredItem({
                type: 'object',
                required: ['type'],
                properties: {
                    type: {
                        type: 'string',
                        enum: [...constructorBlockSchemaNames, ...configBlockSchemaNames],
                    },
                },
                select: { $data: '0/type' },
                selectCases: Object.assign(Object.assign({}, blockSchemas), getBlocksCases(blocks)),
            }),
            cards: filteredItem({
                type: 'object',
                required: ['type'],
                properties: {
                    type: {
                        type: 'string',
                        enum: [...constructorCardSchemaNames, ...configCardSchemaNames],
                    },
                },
                select: { $data: '0/type' },
                selectCases: Object.assign(Object.assign({}, cardSchemas), getBlocksCases(cards)),
            }),
        },
        type: 'object',
        additionalProperties: false,
        required: ['blocks'],
        properties: Object.assign(Object.assign(Object.assign({}, AnimatableProps), { logo: withTheme(LogoProps), header: NavigationHeaderProps, blocks: {
                type: 'array',
                items: {
                    $ref: '#/definitions/children',
                },
            }, menu: MenuProps, background: withTheme(BackgroundProps) }), extensions),
    };
}
