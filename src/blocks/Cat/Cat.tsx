import React, {PropsWithChildren, useCallback, useState} from 'react';

import {CatBlockProps} from '../../models';
import {block} from '../../utils/cn';

import './Cat.scss';

const b = block('cat-block');

export const Cat = ({title, children}: PropsWithChildren<CatBlockProps>) => {
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback(() => setOpen(true), []);
    return (
        <div className={b({open})}>
            {open ? (
                React.Children.map(children, (child, i) => (
                    <div key={i} className={b('item')}>
                        {child}
                    </div>
                ))
            ) : (
                <button onClick={handleOpen} className={b('button')}>
                    {title}
                </button>
            )}
        </div>
    );
};

export default Cat;
