import React, {useContext} from 'react';

import {Theme} from '@gravity-ui/uikit';

import {HeaderStockContext} from '../../../context/headerStockContext';
import {HeaderBlockProps, HeaderStockType} from '../../../models';
import HeaderStockPrice from '../HeaderStockPrice/HeaderStockPrice';
import HeaderStockShares from '../HeaderStockShares/HeaderStockShares';

type HeaderStockProps = {
    type: HeaderStockType;
    stockPrice?: HeaderBlockProps['stockPrice'];
    stockShares?: HeaderBlockProps['stockShares'];
    theme: Theme;
};

export const HeaderStock = ({type, stockPrice, stockShares, theme}: HeaderStockProps) => {
    const {price, shares} = useContext(HeaderStockContext);

    switch (type) {
        case HeaderStockType.Price:
            return price ? <HeaderStockPrice {...price} {...stockPrice} theme={theme} /> : null;
        case HeaderStockType.Shares:
            return shares ? <HeaderStockShares {...shares} {...stockShares} theme={theme} /> : null;
        default:
            return null;
    }
};

export default HeaderStock;
