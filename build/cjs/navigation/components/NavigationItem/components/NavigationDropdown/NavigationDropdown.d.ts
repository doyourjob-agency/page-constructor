import { NavigationDropdownItem } from '../../../../../models';
import { NavigationItemProps } from '../../../../models';
type NavigationDropdownProps = NavigationItemProps & NavigationDropdownItem;
export declare const NavigationDropdown: ({ text, icon, className, iconSize, hidePopup, items, isActive, ...props }: NavigationDropdownProps) => JSX.Element;
export {};
