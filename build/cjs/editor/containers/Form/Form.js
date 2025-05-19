"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const utils_1 = require("../../../utils");
const BlockForm_1 = require("../../components/BlockForm/BlockForm");
const useFormSpec_1 = tslib_1.__importDefault(require("../../hooks/useFormSpec"));
const b = (0, utils_1.block)('editor-form');
// TODO in https://github.com/gravity-ui/page-constructor/issues/884 this component will be extremely refactor
exports.Form = (0, react_1.memo)(({ content, onChange, activeBlockIndex, onSelect, schema }) => {
    const { blocks } = content || {};
    const spec = (0, useFormSpec_1.default)(schema);
    const { blocks: blocksSpec } = spec || {};
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement(uikit_1.Text, { variant: "body-2" }, 'Blocks'),
        blocks.map((blockData, index) => blocksSpec[blockData.type] ? (react_1.default.createElement("div", { className: b('block-form'), key: (0, utils_1.getBlockKey)(blockData, index) },
            react_1.default.createElement(BlockForm_1.BlockForm, { spec: blocksSpec[blockData.type], data: blockData, active: activeBlockIndex === index, onChange: (data) => {
                    onChange(Object.assign(Object.assign({}, content), { blocks: [
                            ...blocks.slice(0, index),
                            data,
                            ...blocks.slice(index + 1),
                        ] }));
                }, onSelect: () => onSelect(index) }))) : null)));
});
exports.Form.displayName = 'Form';
