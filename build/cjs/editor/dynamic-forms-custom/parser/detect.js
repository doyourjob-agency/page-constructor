"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectParserType = exports.ParserType = void 0;
const dynamic_forms_1 = require("@gravity-ui/dynamic-forms");
var ParserType;
(function (ParserType) {
    ParserType["Object"] = "object";
    ParserType["Array"] = "array";
    ParserType["Children"] = "children";
    ParserType["OneOf"] = "oneOf";
    ParserType["Primitive"] = "primitive";
})(ParserType = exports.ParserType || (exports.ParserType = {}));
const isOneOf = (data) => 'oneOf' in data;
const isObject = (data) => 'properties' in data;
const isArray = (data) => 'type' in data && data.type === dynamic_forms_1.SpecTypes.Array;
const isChildren = (data) => 'type' in data &&
    data.type === dynamic_forms_1.SpecTypes.Array &&
    'items' in data &&
    typeof data.items !== 'undefined' &&
    '$ref' in data.items;
//detector applying order matters!
const ParserTypeDetectors = [
    { type: ParserType.OneOf, detector: isOneOf },
    { type: ParserType.Children, detector: isChildren },
    { type: ParserType.Object, detector: isObject },
    { type: ParserType.Array, detector: isArray },
];
const detectParserType = (data) => {
    for (const { type, detector } of ParserTypeDetectors) {
        if (detector(data)) {
            return type;
        }
    }
    return ParserType.Primitive;
};
exports.detectParserType = detectParserType;
