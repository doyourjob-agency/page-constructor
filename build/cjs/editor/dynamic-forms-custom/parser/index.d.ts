import { Schema } from '../../../schema';
import { FormSpecs } from './types';
declare class FormSpecParser {
    private schema;
    private definitions;
    /**
     * Transforms page-constructor json schema into dynamic-forms specs for each block
     *
     * @param schema {Schema} - page-constructor json schema
     * @returns {FormSpecs} - object containig dynamic-forms specs for each constructor block
     */
    parse(schema: Schema): FormSpecs;
    private getChildrenSpec;
    private getRequiredProperties;
    private childrenParser;
    private oneOfParser;
    private arrayParser;
    private objectParser;
    private primitiveParser;
    private schemaParserMap;
    private parseSchemaProperty;
    private getBlocksSpec;
    private getPageSpec;
    private getFormSpec;
    private init;
}
declare const _default: FormSpecParser;
export default _default;
