import React from 'react';

import {Theme} from '@gravity-ui/uikit';

import {useTheme} from '../../../context/theme';
import {HeaderStockSharesProps} from '../../../models';
import {block} from '../../../utils';

import './HeaderStockShares.scss';

const b = block('header-stock-shares');

type Props = HeaderStockSharesProps & {
    theme: Theme;
};

export const HeaderStockShares = ({date, total, text, included, description, theme}: Props) => {
    const globalTheme = useTheme();

    return (
        <div className={b({theme: theme || globalTheme})}>
            <div className={b('date')}>{date}</div>
            <div className={b('total')}>{total}</div>
            <div className={b('text')}>{text}</div>
            <div className={b('included')}>
                <div className={b('label')}>Including:</div>
                <div className={b('items')}>
                    {included?.map((item) => (
                        <div key={item.text} className={b('item')}>
                            <div className={b('item-total')}>{item.title}</div>
                            <div className={b('item-text')}>{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={b('description')}>{description}</div>
        </div>
    );
};

export default HeaderStockShares;
