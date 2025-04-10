import React from 'react';
import { ClassNameProps, HeaderData, ThemedNavigationLogoData } from '../../../models';
import './Navigation.css';
export interface NavigationComponentProps extends ClassNameProps {
    logo: ThemedNavigationLogoData;
    data: HeaderData;
}
export declare const Navigation: React.FC<NavigationComponentProps>;
export default Navigation;
