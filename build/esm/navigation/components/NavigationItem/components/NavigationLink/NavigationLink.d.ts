import React from 'react';
import { NavigationLinkItem } from '../../../../../models';
import { NavigationItemProps } from '../../../../models';
import './NavigationLink.css';
type NavigationLinkProps = NavigationItemProps & NavigationLinkItem;
export declare const NavigationLink: React.FC<NavigationLinkProps>;
export {};
