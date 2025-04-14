"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorBoundaryState = exports.addEditorProps = exports.addBlock = exports.getNewBlockIndex = exports.duplicateBlock = exports.changeBlocksOrder = void 0;
const tslib_1 = require("tslib");
const cloneDeep_1 = tslib_1.__importDefault(require("lodash/cloneDeep"));
const changeBlocksOrder = (array, oldIndex, newIndex) => {
    const result = [...array];
    const element = result.splice(oldIndex, 1)[0];
    result.splice(newIndex, 0, element);
    return result;
};
exports.changeBlocksOrder = changeBlocksOrder;
const duplicateBlock = (array, index) => {
    const result = [...array];
    result.splice(index + 1, 0, (0, cloneDeep_1.default)(result[index]));
    return result;
};
exports.duplicateBlock = duplicateBlock;
const getNewBlockIndex = (id, orderedBlocksCount) => {
    if (id === -1) {
        return orderedBlocksCount;
    }
    // id === 'string' - header block
    return typeof id === 'string' ? 0 : id + 1;
};
exports.getNewBlockIndex = getNewBlockIndex;
const addBlock = (array, block, index) => {
    const result = [...array];
    result.splice(index, 0, block);
    return result;
};
exports.addBlock = addBlock;
const addEditorProps = (content) => {
    return Object.assign(Object.assign({}, content), { animated: false });
};
exports.addEditorProps = addEditorProps;
const getErrorBoundaryState = (prevState) => prevState === Number.MAX_SAFE_INTEGER ? 0 : prevState + 1;
exports.getErrorBoundaryState = getErrorBoundaryState;
