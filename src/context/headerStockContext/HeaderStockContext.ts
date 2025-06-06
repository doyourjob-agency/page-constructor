import React from 'react';

import {HeaderStockPriceProps, HeaderStockSharesProps} from '../../models';

export interface HeaderStockContextProps {
    price?: HeaderStockPriceProps;
    shares?: HeaderStockSharesProps;
}

export const HeaderStockContext = React.createContext<HeaderStockContextProps>({});
