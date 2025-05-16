"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormBlock = void 0;
const tslib_1 = require("tslib");
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const schema_1 = require("../../components/Image/schema");
const schema_2 = require("../../components/YandexForm/schema");
const common_1 = require("../../schema/validators/common");
const schema_3 = require("../../sub-blocks/Content/schema");
const schema_4 = require("../../sub-blocks/HubspotForm/schema");
const FormBlockContentProps = (0, omit_1.default)(schema_3.ContentBase, ['size', 'centered', 'colSizes']);
exports.FormBlock = {
    'form-block': {
        additionalProperties: false,
        required: [],
        properties: Object.assign(Object.assign({}, common_1.BlockBaseProps), { title: {
                type: 'string',
            }, slug: {
                type: 'string',
            }, formData: {
                oneOf: [
                    {
                        type: 'object',
                        optionName: 'yandex',
                        properties: {
                            yandex: (0, common_1.withTheme)(schema_2.YandexFormProps),
                        },
                    },
                    {
                        type: 'object',
                        optionName: 'hubspot',
                        properties: {
                            hubspot: (0, common_1.withTheme)(schema_4.HubspotFormProps),
                        },
                    },
                ],
            }, textContent: {
                additionalProperties: false,
                properties: FormBlockContentProps,
            }, textFormContent: {
                additionalProperties: false,
                properties: FormBlockContentProps,
            }, direction: {
                enum: ['content-form', 'form-content', 'center'],
            }, image: schema_1.ImageProps, backgroundColor: {
                type: 'string',
            }, background: {
                anyOf: [
                    Object.assign(Object.assign({}, schema_1.ImageBaseObjectProps), { properties: Object.assign(Object.assign({}, schema_1.ImageBaseObjectProps.properties), { border: common_1.BorderProps }), optionName: 'options' }),
                    Object.assign(Object.assign({}, schema_1.ImageDeviceProps), { properties: Object.assign(Object.assign({}, schema_1.ImageDeviceProps.properties), { border: common_1.BorderProps }), optionName: 'device options' }),
                ],
            } }),
    },
};
