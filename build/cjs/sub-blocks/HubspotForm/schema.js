"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubspotFormProps = void 0;
const common_1 = require("../../schema/validators/common");
exports.HubspotFormProps = {
    type: 'object',
    required: ['portalId', 'formId'],
    properties: Object.assign(Object.assign({}, common_1.BaseProps), { region: {
            type: 'string',
        }, portalId: {
            type: 'string',
        }, formId: {
            type: 'string',
        }, formInstanceId: {
            type: 'string',
        } }),
};
