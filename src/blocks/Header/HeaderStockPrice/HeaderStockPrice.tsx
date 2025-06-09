import React from 'react';

import {Theme} from '@gravity-ui/uikit';

import {useTheme} from '../../../context/theme';
import {HeaderStockPriceProps} from '../../../models';
import {block} from '../../../utils';

import './HeaderStockPrice.scss';

const b = block('header-stock-price');

type Props = HeaderStockPriceProps & {
    theme: Theme;
};

export const HeaderStockPrice = ({name, percent, price, update, delayed, theme}: Props) => {
    const globalTheme = useTheme();

    return (
        <div className={b({theme: theme || globalTheme})}>
            <div className={b('name')}>{name}</div>
            <div className={b('percent')}>{percent}</div>
            <div className={b('price')}>{price}</div>
            <div className={b('update')}>{update}</div>
            <div className={b('delayed')}>{delayed}</div>
        </div>
    );
};

export default HeaderStockPrice;
