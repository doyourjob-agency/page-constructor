import React, { memo } from 'react';
import { Text } from '@gravity-ui/uikit';
import { block, getBlockKey } from '../../../utils';
import { BlockForm } from '../../components/BlockForm/BlockForm';
import useFormSpec from '../../hooks/useFormSpec';
import './Form.css';
const b = block('editor-form');
// TODO in https://github.com/gravity-ui/page-constructor/issues/884 this component will be extremely refactor
export const Form = memo(({ content, onChange, activeBlockIndex, onSelect, schema }) => {
    const { blocks } = content || {};
    const spec = useFormSpec(schema);
    const { blocks: blocksSpec } = spec || {};
    return (React.createElement("div", { className: b() },
        React.createElement(Text, { variant: "body-2" }, 'Blocks'),
        blocks.map((blockData, index) => blocksSpec[blockData.type] ? (React.createElement("div", { className: b('block-form'), key: getBlockKey(blockData, index) },
            React.createElement(BlockForm, { spec: blocksSpec[blockData.type], data: blockData, active: activeBlockIndex === index, onChange: (data) => {
                    onChange(Object.assign(Object.assign({}, content), { blocks: [
                            ...blocks.slice(0, index),
                            data,
                            ...blocks.slice(index + 1),
                        ] }));
                }, onSelect: () => onSelect(index) }))) : null)));
});
Form.displayName = 'Form';
