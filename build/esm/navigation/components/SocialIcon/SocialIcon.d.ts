import React from 'react';
import { NavigationSocialItem } from '../../../models';
import './SocialIcon.css';
export interface NavigationSocialItemOwnProps extends NavigationSocialItem {
    className?: string;
}
declare const SocialIcon: React.FC<NavigationSocialItemOwnProps>;
export default SocialIcon;
