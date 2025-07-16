import React, {useContext, useMemo} from 'react';

import {Select} from '@gravity-ui/uikit';

import {FeedHeaderOption} from '../../../context/feedHeaderContext';
import {MobileContext} from '../../../context/mobileContext';
import {block} from '../../../utils';
import {renderOption, renderSwitcher} from '../customRenders';

import './FilterSelect.scss';

const b = block('filter-select');

const VIRTUALIZATION_THRESHOLD = 1000;

const FilterSelect = ({
    label,
    value,
    onChange,
    items = [],
}: {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    items?: FeedHeaderOption[];
}) => {
    const isMobile = useContext(MobileContext);

    const handleUpdate = (selected: string[]) => {
        const isEmpty = selected.some((tag) => tag === 'empty');

        onChange(isEmpty ? '' : selected[0]);
    };

    const valueLocal = useMemo(() => (value ? [value] : []), [value]);

    return (
        <Select
            className={b()}
            size="xl"
            options={items}
            defaultValue={[]}
            value={valueLocal}
            onUpdate={handleUpdate}
            popupClassName={b('popup', {mobile: isMobile})}
            renderControl={renderSwitcher({
                initial: valueLocal,
                list: items,
                defaultLabel: label || '',
            })}
            disablePortal
            virtualizationThreshold={VIRTUALIZATION_THRESHOLD}
            renderOption={renderOption}
        />
    );
};

export default React.memo(FilterSelect);
