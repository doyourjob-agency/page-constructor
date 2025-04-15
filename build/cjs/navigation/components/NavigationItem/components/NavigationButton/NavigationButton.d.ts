import React from 'react';
import { ButtonProps } from '../../../../../models';
import { NavigationItemProps } from '../../../../models';
type NavigationButtonProps = Pick<NavigationItemProps, 'className'> & ButtonProps;
export declare const NavigationButton: React.FC<NavigationButtonProps>;
export {};
