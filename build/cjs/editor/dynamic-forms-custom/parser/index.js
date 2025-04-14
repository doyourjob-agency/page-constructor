"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable no-param-reassign */
/* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
const dynamic_forms_1 = require("@gravity-ui/dynamic-forms");
const detect_1 = require("./detect");
const views_1 = require("./views");
class FormSpecParser {
    constructor() {
        this.schema = {};
        this.definitions = {};
        this.getChildrenSpec = (data) => {
            var _a, _b, _c;
            const childrenType = (_c = (_b = (_a = data.items) === null || _a === void 0 ? void 0 : _a.$ref) === null || _b === void 0 ? void 0 : _b.split('/')) === null || _c === void 0 ? void 0 : _c.pop();
            return this.definitions[childrenType];
        };
        this.getRequiredProperties = (data) => Array.isArray(data.required) ? data.required : [];
        this.childrenParser = ({ data, name, required }) => {
            const childSpec = this.getChildrenSpec(data);
            const properties = childSpec &&
                Object.entries(childSpec).reduce((parsedChildSpecProperties, [childName, childSchema]) => {
                    const childRequiredProperties = this.getRequiredProperties(childSchema);
                    const childProperies = childSchema.properties &&
                        Object.entries(childSchema.properties).reduce((parsedChildProperties, [childPropertyName, childPropertyData]) => {
                            parsedChildProperties[childPropertyName] = this.parseSchemaProperty({
                                data: childPropertyData,
                                name: childPropertyName,
                                required: childRequiredProperties.includes(childPropertyName),
                            });
                            return parsedChildProperties;
                        }, {});
                    const childJsonSchema = Object.assign(Object.assign({}, childSchema), { properties: Object.assign(Object.assign({}, childSchema.properties), { type: {
                                type: dynamic_forms_1.SpecTypes.String,
                                enum: [childName],
                            } }) });
                    parsedChildSpecProperties[childName] = {
                        type: dynamic_forms_1.SpecTypes.Array,
                        items: Object.assign(Object.assign({}, childSchema), { type: dynamic_forms_1.SpecTypes.Object, properties: Object.assign(Object.assign({}, childProperies), { type: {
                                    type: dynamic_forms_1.SpecTypes.String,
                                    defaultValue: childName,
                                    viewSpec: {
                                        type: 'hidden',
                                    },
                                } }), viewSpec: childProperies &&
                                (0, views_1.getObjectViewSpec)({
                                    properties: childProperies,
                                    layoutTitle: childName,
                                }), __schema: childJsonSchema }),
                        required: false,
                        viewSpec: (0, views_1.getArrayViewSpec)({ layoutTitle: childName }),
                        __schema: {
                            type: dynamic_forms_1.SpecTypes.Array,
                            items: childJsonSchema,
                        },
                    };
                    return parsedChildSpecProperties;
                }, {});
            return {
                type: dynamic_forms_1.SpecTypes.Object,
                properties,
                viewSpec: {
                    type: 'oneof_custom',
                    layout: 'row',
                    layoutTitle: name,
                    oneOfParams: {
                        toggler: 'select',
                    },
                },
                required,
            };
        };
        this.oneOfParser = ({ data, name, required }) => {
            const requiredProperties = this.getRequiredProperties(data);
            const properties = data.oneOf &&
                data.oneOf.reduce((result, propertyData, index) => {
                    const propertyName = (propertyData === null || propertyData === void 0 ? void 0 : propertyData.optionName)
                        ? propertyData === null || propertyData === void 0 ? void 0 : propertyData.optionName
                        : `${name}_${index}`;
                    result[propertyName] = this.parseSchemaProperty({
                        data: propertyData,
                        name: propertyName,
                        required: requiredProperties.includes(propertyName),
                    });
                    return result;
                }, {});
            return {
                type: dynamic_forms_1.SpecTypes.Object,
                properties,
                required,
                viewSpec: (0, views_1.getOneOfViewSpec)({ layoutTitle: name }),
            };
        };
        this.arrayParser = ({ data, name }) => {
            const items = data.items && this.parseSchemaProperty({ data: data.items, name });
            return Object.assign(Object.assign({}, data), { type: dynamic_forms_1.SpecTypes.Array, items, viewSpec: (0, views_1.getArrayViewSpec)({ layoutTitle: name }) });
        };
        this.objectParser = ({ data, name, required }) => {
            const requiredProperties = this.getRequiredProperties(data);
            const properties = data.properties &&
                Object.entries(data.properties).reduce((result, [propertyName, propertyData]) => {
                    result[propertyName] = this.parseSchemaProperty({
                        data: propertyData,
                        name: propertyName,
                        required: requiredProperties.includes(propertyName),
                    });
                    return result;
                }, {});
            return Object.assign(Object.assign({}, data), { type: dynamic_forms_1.SpecTypes.Object, properties, viewSpec: (0, views_1.getObjectViewSpec)({ properties, layoutTitle: name }), required });
        };
        this.primitiveParser = ({ data, name, required }) => {
            return Object.assign(Object.assign({}, data), { type: data.type, required, defaultValue: data.default, viewSpec: (0, views_1.getPrimitiveViewSpec)({ layoutTitle: name, data }), validator: 'base' });
        };
        //eslint-disable-next-line @typescript-eslint/member-ordering
        this.schemaParserMap = {
            [detect_1.ParserType.Object]: this.objectParser,
            [detect_1.ParserType.Array]: this.arrayParser,
            [detect_1.ParserType.Primitive]: this.primitiveParser,
            [detect_1.ParserType.OneOf]: this.oneOfParser,
            [detect_1.ParserType.Children]: this.childrenParser,
        };
    }
    /**
     * Transforms page-constructor json schema into dynamic-forms specs for each block
     *
     * @param schema {Schema} - page-constructor json schema
     * @returns {FormSpecs} - object containig dynamic-forms specs for each constructor block
     */
    parse(schema) {
        this.init(schema);
        return this.getFormSpec();
    }
    parseSchemaProperty({ data, name, required }) {
        const parserType = (0, detect_1.detectParserType)(data);
        const parser = this.schemaParserMap[parserType];
        return Object.assign(Object.assign({}, parser({ data, name, required })), { 
            //save json schema from constructor to compare with incoming intial data inside oneOf form fields
            __schema: data });
    }
    getBlocksSpec() {
        const blocks = this.definitions.children;
        return Object.entries(blocks).reduce((result, [blockName, blockData]) => {
            result[blockName] = this.parseSchemaProperty({
                name: blockName,
                data: Object.assign({}, blockData),
                required: true,
            });
            return result;
        }, {});
    }
    getPageSpec() {
        var _a;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _b = ((_a = this.schema) === null || _a === void 0 ? void 0 : _a.properties) || {}, { blocks } = _b, pageSchema = tslib_1.__rest(_b, ["blocks"]);
        const requiredProperties = this.getRequiredProperties(this.schema);
        const properties = Object.entries(pageSchema).reduce((result, [propertyName, propertyData]) => {
            result[propertyName] = this.parseSchemaProperty({
                name: propertyName,
                data: propertyData,
                required: requiredProperties.includes(propertyName),
            });
            return result;
        }, {});
        return {
            type: dynamic_forms_1.SpecTypes.Object,
            properties,
            viewSpec: (0, views_1.getObjectViewSpec)({ properties, layout: 'section' }),
            required: true,
        };
    }
    getFormSpec() {
        return {
            blocks: this.getBlocksSpec(),
            page: this.getPageSpec(),
        };
    }
    init(schema) {
        this.schema = schema;
        if (schema.definitions) {
            this.definitions = Object.entries(schema.definitions).reduce((result, [childType, childSpec]) => {
                result[childType] = childSpec === null || childSpec === void 0 ? void 0 : childSpec.selectCases;
                return result;
            }, {});
        }
    }
}
exports.default = new FormSpecParser();
