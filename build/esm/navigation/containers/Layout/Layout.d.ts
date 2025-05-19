import React from 'react';
import { NavigationData } from '../../../models';
import './Layout.css';
export interface LayoutProps {
    navigation?: NavigationData;
    children?: React.ReactNode;
}
declare const Layout: React.FC<LayoutProps>;
export default Layout;
