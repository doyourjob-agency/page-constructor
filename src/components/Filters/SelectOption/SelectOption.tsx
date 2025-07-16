import React from 'react';

import {SelectOption as PcSelectOption} from '@gravity-ui/uikit';

import {block} from '../../../utils';

import './SelectOption.scss';

const b = block('filter-select-option');

type SelectOptionProps = {
    data: PcSelectOption;
};

export const SelectOption = ({data}: SelectOptionProps) => {
    return (
        <div className={b()}>
            <span>{data.content}</span>
        </div>
    );
};

export default SelectOption;
