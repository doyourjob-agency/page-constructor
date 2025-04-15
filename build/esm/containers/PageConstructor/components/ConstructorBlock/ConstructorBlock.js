import React, { useMemo } from 'react';
import pick from 'lodash/pick';
import BlockBase from '../../../../components/BlockBase/BlockBase';
import { BlockDecoration } from '../../../../customization/BlockDecoration';
import { block } from '../../../../utils';
import './ConstructorBlock.css';
const b = block('constructor-block');
export const ConstructorBlock = ({ index = 0, data, children, }) => {
    const { type } = data;
    const blockBaseProps = useMemo(() => pick(data, [
        'anchor',
        'visible',
        'hidden',
        'visibility',
        'resetPaddings',
        'indent',
        'backgroundFull',
    ]), [data]);
    return (React.createElement(BlockDecoration, Object.assign({ type: type, index: index }, blockBaseProps),
        React.createElement(BlockBase, Object.assign({ className: b({ type }) }, blockBaseProps), children)));
};
