import React from 'react';

import UnicornScene from 'unicornstudio-react';

import {UnicornCardsItemProps} from '../../../models';
import {block} from '../../../utils';

import './Item.scss';

const b = block('unicorn-cards-item');

export const Item = ({title, text, unicorn}: UnicornCardsItemProps) => {
    return (
        <div className={b()}>
            {title && <div className={b('title')}>{title}</div>}
            {text && <div className={b('text')}>{text}</div>}
            {unicorn && (
                <div className={b('background')}>
                    <UnicornScene
                        className={b('background-item')}
                        jsonFilePath={unicorn}
                        width="100%"
                    />
                </div>
            )}
        </div>
    );
};

export default Item;
