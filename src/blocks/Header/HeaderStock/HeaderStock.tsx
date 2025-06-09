import React, {useContext} from 'react';

import {Theme} from '@gravity-ui/uikit';

import {HeaderStockContext} from '../../../context/headerStockContext';
import {HeaderStockType} from '../../../models';
import HeaderStockPrice from '../HeaderStockPrice/HeaderStockPrice';
import HeaderStockShares from '../HeaderStockShares/HeaderStockShares';

type HeaderStockProps = {
    type: HeaderStockType;
    theme: Theme;
};

export const HeaderStock = ({type, theme}: HeaderStockProps) => {
    const {price, shares} = useContext(HeaderStockContext);

    switch (type) {
        case HeaderStockType.Price:
            return price ? <HeaderStockPrice {...price} theme={theme} /> : null;
        case HeaderStockType.Shares:
            return shares ? <HeaderStockShares {...shares} theme={theme} /> : null;
        default:
            return null;
    }
};

export default HeaderStock;
