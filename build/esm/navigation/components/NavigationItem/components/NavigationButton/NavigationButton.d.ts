import React from 'react';
import { ButtonProps } from '../../../../../models';
import { NavigationItemProps } from '../../../../models';
import './NavigationButton.css';
type NavigationButtonProps = Pick<NavigationItemProps, 'className'> & ButtonProps;
export declare const NavigationButton: React.FC<NavigationButtonProps>;
export {};
