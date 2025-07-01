import React from 'react';

import {ArrowLeftIcon, ArrowRightIcon} from '../../../icons';
import {i18n} from '../i18n';
import {ArrowType} from '../types';

export type NavigationButtonProps = {
    arrowType: ArrowType;
    disabled?: boolean;
};

export const NavigationButton = ({arrowType, disabled}: NavigationButtonProps) => {
    if (disabled) {
        return null;
    }

    if (arrowType === ArrowType.Prev) {
        return (
            <React.Fragment>
                <ArrowLeftIcon />
                <span>{i18n('prev')}</span>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <span>{i18n('next')}</span>
            <ArrowRightIcon />
        </React.Fragment>
    );
};
