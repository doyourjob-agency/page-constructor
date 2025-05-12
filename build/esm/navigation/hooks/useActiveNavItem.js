import { useMemo, useState } from 'react';
import { getNavigationItemWithIconSize } from '../utils';
const useActiveNavItem = (iconSize, leftItems, rightItems) => {
    const [activeItemId, setActiveItemId] = useState(undefined);
    const getNavigationItem = getNavigationItemWithIconSize(iconSize);
    const leftItemsWithIconSize = useMemo(() => leftItems.map(getNavigationItem), [getNavigationItem, leftItems]);
    const rightItemsWithIconSize = useMemo(() => rightItems === null || rightItems === void 0 ? void 0 : rightItems.map(getNavigationItem), [getNavigationItem, rightItems]);
    const onActiveItemChange = (id) => {
        setActiveItemId(id);
    };
    return { activeItemId, leftItemsWithIconSize, rightItemsWithIconSize, onActiveItemChange };
};
export default useActiveNavItem;
