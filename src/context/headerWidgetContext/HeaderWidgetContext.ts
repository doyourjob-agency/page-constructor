import React from 'react';

import {HeaderWidgetPriceProps, HeaderWidgetSharesProps} from '../../models';

export interface HeaderWidgetContextProps {
    price?: HeaderWidgetPriceProps;
    shares?: HeaderWidgetSharesProps;
}

export const HeaderWidgetContext = React.createContext<HeaderWidgetContextProps>({});
