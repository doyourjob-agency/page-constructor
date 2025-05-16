"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.UPDATE_CONTENT = exports.ORDER_BLOCK = exports.SET_REGION = exports.ADD_BLOCK = exports.COPY_BLOCK = exports.DELETE_BLOCK = exports.SELECT_BLOCK = void 0;
const utils_1 = require("./utils");
// actions
exports.SELECT_BLOCK = 'SELECT_BLOCK';
exports.DELETE_BLOCK = 'DELETE_BLOCK';
exports.COPY_BLOCK = 'COPY_BLOCK';
exports.ADD_BLOCK = 'ADD_BLOCK';
exports.SET_REGION = 'SET_REGION';
exports.ORDER_BLOCK = 'ORDER_BLOCK';
exports.UPDATE_CONTENT = 'UPDATE_CONTENT';
// reducer
const reducer = (state, action) => {
    const { content } = state;
    const getNewState = (blocks, activeBlockIndex) => (Object.assign(Object.assign({}, state), { content: Object.assign(Object.assign({}, content), { blocks }), activeBlockIndex }));
    switch (action.type) {
        case exports.UPDATE_CONTENT:
            return Object.assign(Object.assign({}, state), { content: action.payload, errorBoundaryState: (0, utils_1.getErrorBoundaryState)(state.errorBoundaryState) });
        case exports.SELECT_BLOCK:
            return Object.assign(Object.assign({}, state), { activeBlockIndex: action.payload });
        case exports.DELETE_BLOCK: {
            const blockId = action.payload;
            return getNewState(content.blocks.filter((_block, index) => index !== blockId), -1);
        }
        case exports.COPY_BLOCK: {
            const index = action.payload;
            return getNewState((0, utils_1.duplicateBlock)(content.blocks, index), index + 1);
        }
        case exports.ADD_BLOCK: {
            const { block, index } = action.payload;
            return getNewState((0, utils_1.addBlock)(content.blocks, block, index), index);
        }
        case exports.ORDER_BLOCK: {
            const { oldIndex, newIndex } = action.payload;
            return getNewState((0, utils_1.changeBlocksOrder)(content.blocks, oldIndex, newIndex), newIndex);
        }
        default:
            return state;
    }
};
exports.reducer = reducer;
