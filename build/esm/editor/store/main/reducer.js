import { addBlock, changeBlocksOrder, duplicateBlock, getErrorBoundaryState } from './utils';
// actions
export const SELECT_BLOCK = 'SELECT_BLOCK';
export const DELETE_BLOCK = 'DELETE_BLOCK';
export const COPY_BLOCK = 'COPY_BLOCK';
export const ADD_BLOCK = 'ADD_BLOCK';
export const SET_REGION = 'SET_REGION';
export const ORDER_BLOCK = 'ORDER_BLOCK';
export const UPDATE_CONTENT = 'UPDATE_CONTENT';
// reducer
export const reducer = (state, action) => {
    const { content } = state;
    const getNewState = (blocks, activeBlockIndex) => (Object.assign(Object.assign({}, state), { content: Object.assign(Object.assign({}, content), { blocks }), activeBlockIndex }));
    switch (action.type) {
        case UPDATE_CONTENT:
            return Object.assign(Object.assign({}, state), { content: action.payload, errorBoundaryState: getErrorBoundaryState(state.errorBoundaryState) });
        case SELECT_BLOCK:
            return Object.assign(Object.assign({}, state), { activeBlockIndex: action.payload });
        case DELETE_BLOCK: {
            const blockId = action.payload;
            return getNewState(content.blocks.filter((_block, index) => index !== blockId), -1);
        }
        case COPY_BLOCK: {
            const index = action.payload;
            return getNewState(duplicateBlock(content.blocks, index), index + 1);
        }
        case ADD_BLOCK: {
            const { block, index } = action.payload;
            return getNewState(addBlock(content.blocks, block, index), index);
        }
        case ORDER_BLOCK: {
            const { oldIndex, newIndex } = action.payload;
            return getNewState(changeBlocksOrder(content.blocks, oldIndex, newIndex), newIndex);
        }
        default:
            return state;
    }
};
