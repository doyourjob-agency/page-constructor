import { Schema } from '../../../schema';
export declare enum ParserType {
    Object = "object",
    Array = "array",
    Children = "children",
    OneOf = "oneOf",
    Primitive = "primitive"
}
export declare const detectParserType: (data: Schema) => ParserType;
