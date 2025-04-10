"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YandexFormProps = void 0;
const common_1 = require("../../schema/validators/common");
exports.YandexFormProps = {
    type: 'object',
    required: ['id'],
    properties: Object.assign(Object.assign({}, common_1.BaseProps), { id: {
            type: 'string',
        }, containerId: {
            type: 'string',
        } }),
};
