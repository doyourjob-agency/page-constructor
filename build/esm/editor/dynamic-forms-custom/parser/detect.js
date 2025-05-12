import { SpecTypes } from '@gravity-ui/dynamic-forms';
export var ParserType;
(function (ParserType) {
    ParserType["Object"] = "object";
    ParserType["Array"] = "array";
    ParserType["Children"] = "children";
    ParserType["OneOf"] = "oneOf";
    ParserType["Primitive"] = "primitive";
})(ParserType || (ParserType = {}));
const isOneOf = (data) => 'oneOf' in data;
const isObject = (data) => 'properties' in data;
const isArray = (data) => 'type' in data && data.type === SpecTypes.Array;
const isChildren = (data) => 'type' in data &&
    data.type === SpecTypes.Array &&
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
export const detectParserType = (data) => {
    for (const { type, detector } of ParserTypeDetectors) {
        if (detector(data)) {
            return type;
        }
    }
    return ParserType.Primitive;
};
