export const filteredItem = (itemsSchema) => (Object.assign(Object.assign({}, itemsSchema), { type: 'object', properties: Object.assign({ when: {
            type: 'string',
        } }, itemsSchema.properties) }));
export const filteredArray = (itemsSchema) => ({
    type: 'array',
    items: filteredItem(itemsSchema),
});
