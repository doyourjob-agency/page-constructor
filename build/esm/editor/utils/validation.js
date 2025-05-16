import Ajv from 'ajv';
import ajvKeywords from 'ajv-keywords';
import yaml from 'js-yaml';
import SourceMap from 'js-yaml-source-map';
import isArray from 'lodash/isArray';
const SUCCESS_MESSAGE = 'Valid';
export var CodeEditorMessageStatus;
(function (CodeEditorMessageStatus) {
    CodeEditorMessageStatus["SUCCESS"] = "success";
    CodeEditorMessageStatus["WARNING"] = "warning";
    CodeEditorMessageStatus["ERROR"] = "error";
})(CodeEditorMessageStatus || (CodeEditorMessageStatus = {}));
export function createValidator(schema) {
    const ajv = new Ajv({ $data: true, allErrors: true, schemas: [schema], strict: false });
    // TODO: select is deprecated, replace with discriminator:
    // https://github.com/ajv-validator/ajv-keywords#selectselectcasesselectdefault
    ajvKeywords(ajv, 'select');
    return ajv.compile(schema);
}
export function validate(content, validator) {
    let result;
    if (!content) {
        return { status: CodeEditorMessageStatus.SUCCESS, text: SUCCESS_MESSAGE };
    }
    try {
        const jsYamlMap = new SourceMap();
        const data = yaml.load(content, { listener: jsYamlMap.listen() });
        validator(data);
        if (validator.errors) {
            const messages = validator.errors.map(({ instancePath, schemaPath, message, params }) => {
                const pointer = jsYamlMap.lookup(instancePath.split('/').filter(Boolean));
                const stringParams = Object.entries(params).map(([key, value]) => {
                    if (isArray(value)) {
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
