import React from 'react';
import { ThemedNavigationLogoData } from '../../../models';
export type LogoProps = ThemedNavigationLogoData & {
    className?: string;
    alt?: string;
};
export declare const Logo: React.FC<LogoProps>;
export default Logo;
