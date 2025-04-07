import React, {useCallback} from 'react';

import {Button, TextInput} from '@gravity-ui/uikit';

import {CloseIcon} from '../../../icons/CloseIcon';
import {SearchIcon} from '../../../icons/SearchIcon';
import {block} from '../../../utils';
import {i18n} from '../i18n';

import './ServiceSearch.scss';

const b = block('services-search');

type ServicesSearchProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const ServicesSearch = ({value, setValue}: ServicesSearchProps) => {
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
        [setValue],
    );
    const handleReset = useCallback(() => setValue(''), [setValue]);

    return (
        <div className={b()}>
            <div className={b('suggest-container')}>
                <TextInput
                    className={b('suggest')}
                    size="l"
                    placeholder={i18n('search')}
                    onChange={handleChange}
                    value={value}
                />
            </div>
            {value ? (
                <Button onClick={handleReset} className={b('button')} view="flat" size="s">
                    <Button.Icon>
                        <CloseIcon width={12} height={12} />
                    </Button.Icon>
                </Button>
            ) : (
                <Button className={b('button')} view="flat" size="s">
                    <Button.Icon>
                        <SearchIcon />
                    </Button.Icon>
                </Button>
            )}
        </div>
    );
};

export default ServicesSearch;
