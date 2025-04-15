import { MouseEventHandler } from 'react';
import { NavigationButtonItem, NavigationDropdownItem, NavigationItemModel, NavigationItemType } from '../models';
import { ItemColumnName } from './models';
type GetItemClickHandlerArgs = {
    column: ItemColumnName;
    index: number;
    activeItemId?: string;
    onActiveItemChange: (id?: string) => void;
};
export declare const getItemClickHandler: ({ column, index, onActiveItemChange, }: GetItemClickHandlerArgs) => MouseEventHandler;
export declare function getNavigationItemWithIconSize(iconSize?: number): (item: NavigationItemModel) => NavigationButtonItem | NavigationDropdownItem | {
    type: NavigationItemType.Link;
    url: string;
    urlTitle?: string | undefined;
    arrow?: boolean | undefined;
    target?: string | undefined;
    text: string;
    icon?: import("../models").ImageProps | undefined;
    iconSize?: number | undefined;
};
export {};
