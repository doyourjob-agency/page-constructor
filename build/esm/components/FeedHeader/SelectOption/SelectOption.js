import React from 'react';
import { block } from '../../../utils';
import './SelectOption.css';
const b = block('feed-header-select-option');
export const SelectOption = ({ data }) => {
    return (React.createElement("div", { className: b() },
        React.createElement("span", null, data.content)));
};
export default SelectOption;
