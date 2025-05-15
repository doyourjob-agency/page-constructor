import cloneDeep from 'lodash/cloneDeep';
export const changeBlocksOrder = (array, oldIndex, newIndex) => {
    const result = [...array];
    const element = result.splice(oldIndex, 1)[0];
    result.splice(newIndex, 0, element);
    return result;
};
export const duplicateBlock = (array, index) => {
    const result = [...array];
    result.splice(index + 1, 0, cloneDeep(result[index]));
    return result;
};
export const getNewBlockIndex = (id, orderedBlocksCount) => {
    if (id === -1) {
        return orderedBlocksCount;
    }
    // id === 'string' - header block
    return typeof id === 'string' ? 0 : id + 1;
};
export const addBlock = (array, block, index) => {
    const result = [...array];
    result.splice(index, 0, block);
    return result;
};
export const addEditorProps = (content) => {
    return Object.assign(Object.assign({}, content), { animated: false });
};
export const getErrorBoundaryState = (prevState) => prevState === Number.MAX_SAFE_INTEGER ? 0 : prevState + 1;
