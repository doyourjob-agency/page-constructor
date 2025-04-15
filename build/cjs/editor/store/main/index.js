"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMainState = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const constants_1 = require("../../../components/constants");
const models_1 = require("../../../models");
const utils_1 = require("../../../utils");
const EditBlock_1 = require("../../components/EditBlock/EditBlock");
const types_1 = require("../../types");
const reducer_1 = require("./reducer");
const utils_2 = require("./utils");
function useMainState({ content: intialContent, custom }) {
    const [{ activeBlockIndex, content, errorBoundaryState }, dispatch] = (0, react_1.useReducer)(reducer_1.reducer, {
        activeBlockIndex: 0,
        errorBoundaryState: 0,
        content: (0, utils_2.addEditorProps)(intialContent),
        viewMode: types_1.ViewModeItem.Desktop,
        theme: constants_1.DEFAULT_THEME,
    });
    return (0, react_1.useMemo)(() => {
        const headerBlockTypes = [...models_1.HeaderBlockTypes, ...(0, utils_1.getCustomTypes)(['headers'], custom)];
        const contentHasHeader = Boolean((0, utils_1.getHeaderBlock)(content.blocks, headerBlockTypes));
        const checkIsHeader = (type) => headerBlockTypes.includes(type);
        const onAdd = (block) => {
            const isHeader = checkIsHeader(block.type);
            if (contentHasHeader && isHeader) {
                //TODO: add warning that it should be only one header block
                return;
            }
            // eslint-disable-next-line no-nested-ternary
            const index = isHeader
                ? 0
                : activeBlockIndex === -1
                    ? content.blocks.length
                    : activeBlockIndex + 1;
            dispatch({ type: reducer_1.ADD_BLOCK, payload: { block, index } });
        };
        const onSelect = (index) => dispatch({ type: reducer_1.SELECT_BLOCK, payload: index });
        const onContentUpdate = (newContent) => dispatch({ type: reducer_1.UPDATE_CONTENT, payload: newContent });
        const injectEditBlockProps = (_a) => {
            var { type, index: relativeIndex = 0, children } = _a, rest = tslib_1.__rest(_a, ["type", "index", "children"]);
            const orderedBlocksStartIndex = contentHasHeader ? 1 : 0;
            const isHeader = checkIsHeader(type);
            const index = isHeader ? 0 : relativeIndex + orderedBlocksStartIndex;
            const isActive = activeBlockIndex === index;
            const actions = {
                [EditBlock_1.EditBlockControls.Delete]: () => dispatch({ type: reducer_1.DELETE_BLOCK, payload: index }),
            };
            if (!isHeader) {
                actions[EditBlock_1.EditBlockControls.Copy] = () => dispatch({ type: reducer_1.COPY_BLOCK, payload: index });
                if (index > orderedBlocksStartIndex) {
                    actions[EditBlock_1.EditBlockControls.Up] = () => dispatch({
                        type: reducer_1.ORDER_BLOCK,
                        payload: { oldIndex: index, newIndex: index - 1 },
                    });
                }
                if (index < content.blocks.length - 1) {
                    actions[EditBlock_1.EditBlockControls.Down] = () => dispatch({
                        type: reducer_1.ORDER_BLOCK,
                        payload: { oldIndex: index, newIndex: index + 1 },
                    });
                }
            }
            return Object.assign({ children,
                isHeader,
                isActive,
                actions, onSelect: () => onSelect(index) }, rest);
        };
        return {
            activeBlockIndex,
            content,
            errorBoundaryState,
            injectEditBlockProps,
            onAdd,
            onSelect,
            onContentUpdate,
        };
    }, [content, activeBlockIndex, errorBoundaryState, custom]);
}
exports.useMainState = useMainState;
