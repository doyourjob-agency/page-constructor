"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapBlock = exports.Map = void 0;
const common_1 = require("../../schema/validators/common");
const schema_1 = require("../Media/schema");
exports.Map = {
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: common_1.MapProps,
};
exports.MapBlock = {
    'map-block': {
        additionalProperties: false,
        required: ['title', 'map'],
        properties: Object.assign(Object.assign({}, schema_1.MediaBlockBaseProps), { map: exports.Map }),
    },
};
