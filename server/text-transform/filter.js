"use strict";
/* eslint-disable no-param-reassign */
/* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterContent = void 0;
const evaluation_1 = __importDefault(require("@diplodoc/transform/lib/liquid/evaluation"));
function filterItems(items, vars, propertyName) {
    if (!Array.isArray(items)) {
        throw new Error(`Error while filtering: items has invalid key '${propertyName}' equals ${JSON.stringify(items)}`);
    }
    return items.reduce((result, item) => {
        const passedFiltration = checkWhenCondition(item.when, vars);
        if (passedFiltration) {
            const property = propertyName && item[propertyName];
            if (property === undefined) {
                result.push(item);
            }
            else {
                const filteredProperty = filterItems(property, vars, propertyName);
                if (filteredProperty.length !== 0) {
                    result.push(Object.assign(Object.assign({}, item), { [propertyName]: filteredProperty }));
                }
            }
        }
        return result;
    }, []);
}
function checkWhenCondition(whenValue, vars) {
    return (whenValue === true ||
        whenValue === undefined ||
        (typeof whenValue === 'string' && (!whenValue || (0, evaluation_1.default)(whenValue, vars))));
}
function isItemArray(content) {
    return Array.isArray(content);
}
function isItem(content) {
    return content && typeof content === 'object' && !Array.isArray(content);
}
/**
 * Filters content recoursively by result of it's 'when' property evaluation applied to vars argument.
 * e.g. property {..., when: 'someVar == "someValue"' } will be included in result only if vars.someVar === 'someValue'
 * @param {FilterableContent} content
 * @param {ContentVariables} vars
 * @return {FilteredContent}
 */
function filterContent(content, vars) {
    if (isItemArray(content)) {
        return filterItems(content, vars).map((item) => filterContent(item, vars));
    }
    else if (isItem(content)) {
        return Object.entries(content).reduce((acc, [key, value]) => {
            acc[key] = filterContent(value, vars);
            return acc;
        }, {});
    }
    else {
        return content;
    }
}
exports.filterContent = filterContent;
