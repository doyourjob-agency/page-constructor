import React from 'react';
import { ThemedNavigationLogoData } from '../../../models';
import './Logo.css';
export type LogoProps = ThemedNavigationLogoData & {
    className?: string;
    alt?: string;
};
export declare const Logo: React.FC<LogoProps>;
export default Logo;
