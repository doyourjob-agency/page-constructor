"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const utils_1 = require("../../utils");
const index_1 = require("../index");
const b = (0, utils_1.block)('button-tabs');
const ButtonTabs = ({ className, items, activeTab, onSelectTab, tabSize = 'l', qa, }) => {
    const activeTabId = (0, react_1.useMemo)(() => {
        if (activeTab) {
            return activeTab;
        }
        return items[0].id;
    }, [activeTab, items]);
    const handleClick = (0, react_1.useCallback)((tabId) => (e) => {
        if (onSelectTab) {
            onSelectTab(tabId, e);
        }
    }, [onSelectTab]);
    return (react_1.default.createElement("div", { className: b(null, className), role: "tablist", "data-qa": qa }, items.map(({ id, title }) => {
        const isActive = id === activeTabId;
        return (react_1.default.createElement(index_1.Button, { text: title, className: b('item', { active: isActive }), key: title, size: tabSize, onClick: handleClick(id), extraProps: {
                role: 'tab',
                'aria-selected': isActive,
            } }));
    })));
};
exports.default = ButtonTabs;
