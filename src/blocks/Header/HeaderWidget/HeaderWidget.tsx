import React, {useContext} from 'react';

import {Theme} from '@gravity-ui/uikit';

import {HeaderWidgetContext} from '../../../context/headerWidgetContext';
import {HeaderWidgetType} from '../../../models';
import HeaderWidgetPrice from '../HeaderWidgetPrice/HeaderWidgetPrice';
import HeaderWidgetShares from '../HeaderWidgetShares/HeaderWidgetShares';

type HeaderWidgetProps = {
    type: HeaderWidgetType;
    theme: Theme;
};

export const HeaderWidget = ({type, theme}: HeaderWidgetProps) => {
    const {price, shares} = useContext(HeaderWidgetContext);

    switch (type) {
        case 'price':
            return price ? <HeaderWidgetPrice {...price} theme={theme} /> : null;
        case 'shares':
            return shares ? <HeaderWidgetShares {...shares} theme={theme} /> : null;
        default:
            return null;
    }
};

export default HeaderWidget;
