import React from 'react';
import { NavigationSocialItem } from '../../../models';
export interface NavigationSocialItemOwnProps extends NavigationSocialItem {
    className?: string;
}
declare const SocialIcon: React.FC<NavigationSocialItemOwnProps>;
export default SocialIcon;
