import { NavigationItemModel } from '../../models';
declare const useActiveNavItem: (iconSize: number, leftItems: NavigationItemModel[], rightItems?: NavigationItemModel[]) => {
    activeItemId: string | undefined;
    leftItemsWithIconSize: (import("../../models").NavigationButtonItem | import("../../models").NavigationDropdownItem | {
        type: import("../../models").NavigationItemType.Link;
        url: string;
        urlTitle?: string | undefined;
        arrow?: boolean | undefined;
        target?: string | undefined;
        text: string;
        icon?: import("../../models").ImageProps | undefined;
        iconSize?: number | undefined;
    })[];
    rightItemsWithIconSize: (import("../../models").NavigationButtonItem | import("../../models").NavigationDropdownItem | {
        type: import("../../models").NavigationItemType.Link;
        url: string;
        urlTitle?: string | undefined;
        arrow?: boolean | undefined;
        target?: string | undefined;
        text: string;
        icon?: import("../../models").ImageProps | undefined;
        iconSize?: number | undefined;
    })[] | undefined;
    onActiveItemChange: (id?: string) => void;
};
export default useActiveNavItem;
