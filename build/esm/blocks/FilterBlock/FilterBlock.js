import React, { useMemo, useState } from 'react';
import { CardLayoutBlock } from '..';
import { AnimateBlock, Title } from '../../components';
import ButtonTabs from '../../components/ButtonTabs/ButtonTabs';
import { ConstructorItem } from '../../containers/PageConstructor/components/ConstructorItem';
import { Col, Row } from '../../grid';
import { block, getBlockKey } from '../../utils';
import { i18n } from './i18n';
import './FilterBlock.css';
const b = block('filter-block');
const FilterBlock = ({ title, description, tags, tagButtonSize, allTag, items, colSizes, centered, animated, }) => {
    const tabButtons = useMemo(() => {
        const allButton = allTag
            ? { id: null, title: typeof allTag === 'boolean' ? i18n('label-all-tag') : allTag }
            : undefined;
        const otherButtons = tags && tags.map((tag) => ({ id: tag.id, title: tag.label }));
        return [...(allButton ? [allButton] : []), ...(otherButtons ? otherButtons : [])];
    }, [allTag, tags]);
    const [selectedTag, setSelectedTag] = useState(tabButtons.length ? tabButtons[0].id : null);
    const actualTag = useMemo(() => {
        return tabButtons.length && !tabButtons.find((tab) => tab.id === selectedTag)
            ? tabButtons[0].id
            : selectedTag;
    }, [tabButtons, selectedTag]);
    const cards = useMemo(() => {
        const itemsToShow = actualTag
            ? items.filter((item) => item.tags.includes(actualTag))
            : items;
        return itemsToShow.map((item) => item.card);
    }, [actualTag, items]);
    return (React.createElement(AnimateBlock, { className: b(), animate: animated },
        title && (React.createElement(Title, { className: b('title', { centered: centered }), title: title, subtitle: description })),
        tabButtons.length && (React.createElement(Row, null,
            React.createElement(Col, null,
                React.createElement(ButtonTabs, { className: b('tabs', { centered: centered }), items: tabButtons, activeTab: selectedTag, onSelectTab: setSelectedTag, tabSize: tagButtonSize })))),
        React.createElement(Row, { className: b('block-container') },
            React.createElement(CardLayoutBlock, { title: "", colSizes: colSizes, className: b('cards-container') }, cards.map((card, index) => {
                const key = getBlockKey(card, index);
                return React.createElement(ConstructorItem, { data: card, blockKey: key, key: key });
            })))));
};
export default FilterBlock;
