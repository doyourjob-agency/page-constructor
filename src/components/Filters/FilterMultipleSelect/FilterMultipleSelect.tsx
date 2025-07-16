import React, {useContext, useMemo} from 'react';

import {Select} from '@gravity-ui/uikit';

import {FeedHeaderOption} from '../../../context/feedHeaderContext';
import {MobileContext} from '../../../context/mobileContext';
import {block} from '../../../utils';
import {renderFilter, renderOption, renderSwitcher} from '../customRenders';

import './FilterMultipleSelect.scss';

const b = block('filter-multiple-select');

const VIRTUALIZATION_THRESHOLD = 1000;

const FilterMultipleSelect = ({
    label,
    value,
    onChange,
    items = [],
    filterText,
}: {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    items?: FeedHeaderOption[];
    filterText?: string;
}) => {
    const isMobile = useContext(MobileContext);

    const handleUpdate = (selected: string[]) => {
        const asString = selected.join(',');

        onChange(asString);
    };

    const valueLocal = useMemo(() => (value ? [...value.split(',')] : []), [value]);

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
            renderFilter={renderFilter({
                placeholder: filterText,
                className: b('popup-filter'),
            })}
            multiple
            filterable
            hasClear
        />
    );
};

export default React.memo(FilterMultipleSelect);
