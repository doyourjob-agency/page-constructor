import React, {useCallback} from 'react';

import {Button, TextInput} from '@gravity-ui/uikit';

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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        hanging={12}
                        viewBox="0 0 10 10"
                    >
                        <path
                            d="M10 0.7L9.3 0L5 4.3L0.7 0L0 0.7L4.3 5L0 9.3L0.7 10L5 5.7L9.3 10L10 9.3L5.7 5L10 0.7Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </Button>
            ) : (
                <Button className={b('button')} view="flat" size="s">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="none"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M9.532 9.539A5 5 0 1 0 2.468 2.46a5 5 0 0 0 7.064 7.08zm0 0L15 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                        ></path>
                    </svg>
                </Button>
            )}
        </div>
    );
};

export default ServicesSearch;
