import React, { useCallback, useMemo } from 'react';
import { block } from '../../utils';
import { Button } from '../index';
import './ButtonTabs.css';
const b = block('button-tabs');
const ButtonTabs = ({ className, items, activeTab, onSelectTab, tabSize = 'l', qa, }) => {
    const activeTabId = useMemo(() => {
        if (activeTab) {
            return activeTab;
        }
        return items[0].id;
    }, [activeTab, items]);
    const handleClick = useCallback((tabId) => (e) => {
        if (onSelectTab) {
            onSelectTab(tabId, e);
        }
    }, [onSelectTab]);
    return (React.createElement("div", { className: b(null, className), role: "tablist", "data-qa": qa }, items.map(({ id, title }) => {
        const isActive = id === activeTabId;
        return (React.createElement(Button, { text: title, className: b('item', { active: isActive }), key: title, size: tabSize, onClick: handleClick(id), extraProps: {
                role: 'tab',
                'aria-selected': isActive,
            } }));
    })));
};
export default ButtonTabs;
