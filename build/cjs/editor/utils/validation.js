"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.createValidator = exports.CodeEditorMessageStatus = void 0;
const tslib_1 = require("tslib");
const ajv_1 = tslib_1.__importDefault(require("ajv"));
const ajv_keywords_1 = tslib_1.__importDefault(require("ajv-keywords"));
const js_yaml_1 = tslib_1.__importDefault(require("js-yaml"));
const js_yaml_source_map_1 = tslib_1.__importDefault(require("js-yaml-source-map"));
const isArray_1 = tslib_1.__importDefault(require("lodash/isArray"));
const SUCCESS_MESSAGE = 'Valid';
var CodeEditorMessageStatus;
(function (CodeEditorMessageStatus) {
    CodeEditorMessageStatus["SUCCESS"] = "success";
    CodeEditorMessageStatus["WARNING"] = "warning";
    CodeEditorMessageStatus["ERROR"] = "error";
})(CodeEditorMessageStatus = exports.CodeEditorMessageStatus || (exports.CodeEditorMessageStatus = {}));
function createValidator(schema) {
    const ajv = new ajv_1.default({ $data: true, allErrors: true, schemas: [schema], strict: false });
    // TODO: select is deprecated, replace with discriminator:
    // https://github.com/ajv-validator/ajv-keywords#selectselectcasesselectdefault
    (0, ajv_keywords_1.default)(ajv, 'select');
    return ajv.compile(schema);
}
exports.createValidator = createValidator;
function validate(content, validator) {
    let result;
    if (!content) {
        return { status: CodeEditorMessageStatus.SUCCESS, text: SUCCESS_MESSAGE };
    }
    try {
        const jsYamlMap = new js_yaml_source_map_1.default();
        const data = js_yaml_1.default.load(content, { listener: jsYamlMap.listen() });
        validator(data);
        if (validator.errors) {
            const messages = validator.errors.map(({ instancePath, schemaPath, message, params }) => {
                const pointer = jsYamlMap.lookup(instancePath.split('/').filter(Boolean));
                const stringParams = Object.entries(params).map(([key, value]) => {
                    if ((0, isArray_1.default)(value)) {
                        return `${key}: ${value.join(' | ')}`;
                    }
                    return `${key}: ${value}`;
                });
                const ref = pointer ? `${pointer.line}: ` : '';
                return `${ref}${instancePath || schemaPath}: ${message}\n${stringParams.join('\n')}`;
            });
            result = { status: CodeEditorMessageStatus.WARNING, text: messages.join('\n\n') };
        }
        else {
            result = { status: CodeEditorMessageStatus.SUCCESS, text: SUCCESS_MESSAGE };
        }
    }
    catch ({ message }) {
        result = { status: CodeEditorMessageStatus.ERROR, text: message };
    }
    return result;
}
exports.validate = validate;
