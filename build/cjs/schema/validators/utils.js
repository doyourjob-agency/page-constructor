"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteredArray = exports.filteredItem = void 0;
const filteredItem = (itemsSchema) => (Object.assign(Object.assign({}, itemsSchema), { type: 'object', properties: Object.assign({ when: {
            type: 'string',
        } }, itemsSchema.properties) }));
exports.filteredItem = filteredItem;
const filteredArray = (itemsSchema) => ({
    type: 'array',
    items: (0, exports.filteredItem)(itemsSchema),
});
exports.filteredArray = filteredArray;
