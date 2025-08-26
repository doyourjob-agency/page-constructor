import React, {useMemo, useState} from 'react';

import {CardLayoutBlock} from '..';
import {AnimateBlock, Title} from '../../components';
import ButtonTabs, {ButtonTabsItemProps} from '../../components/ButtonTabs/ButtonTabs';
import {ConstructorItem} from '../../containers/PageConstructor/components/ConstructorItem';
import {Col, Row} from '../../grid';
import {FilterCardLayoutBlockProps, FilterCardLayoutItem} from '../../models';
import {block, getBlockKey} from '../../utils';

import {i18n} from './i18n';

import './FilterCardLayout.scss';

const b = block('filter-card-layout');

const FilterCardLayoutBlock: React.FC<FilterCardLayoutBlockProps> = ({
    title,
    description,
    tags,
    tagButtonSize,
    allTag,
    items,
    centered,
    animated,
}) => {
    const tabButtons = useMemo(() => {
        const allButton: ButtonTabsItemProps | undefined = allTag
            ? {id: null, title: typeof allTag === 'boolean' ? i18n('label-all-tag') : allTag}
            : undefined;
        const otherButtons: ButtonTabsItemProps[] | undefined =
            tags && tags.map((tag) => ({id: tag.id, title: tag.label}));
        return [...(allButton ? [allButton] : []), ...(otherButtons ? otherButtons : [])];
    }, [allTag, tags]);

    const [selectedTag, setSelectedTag] = useState(tabButtons.length ? tabButtons[0].id : null);

    const actualTag: string | null = useMemo(() => {
        return tabButtons.length && !tabButtons.find((tab) => tab.id === selectedTag)
            ? tabButtons[0].id
            : selectedTag;
    }, [tabButtons, selectedTag]);

    const layouts = useMemo(() => {
        const itemsToShow: FilterCardLayoutItem[] = actualTag
            ? items.filter((item) => item.tags.includes(actualTag))
            : items;

        return itemsToShow;
    }, [actualTag, items]);

    return (
        <AnimateBlock className={b()} animate={animated}>
            {title && (
                <Title
                    className={b('title', {centered: centered})}
                    title={title}
                    subtitle={description}
                />
            )}
            {Boolean(tabButtons.length) && (
                <Row>
                    <Col>
                        <ButtonTabs
                            className={b('tabs', {centered: centered})}
                            items={tabButtons}
                            activeTab={selectedTag}
                            onSelectTab={setSelectedTag}
                            tabSize={tagButtonSize}
                        />
                    </Col>
                </Row>
            )}
            <Row className={b('block-container')}>
                {layouts.map(({children, ...props}, index) => (
                    <CardLayoutBlock key={index} {...props} className={b('container')}>
                        {children?.map((child, _index) => {
                            const key = getBlockKey(child, _index);

                            return <ConstructorItem data={child} blockKey={key} key={key} />;
                        })}
                    </CardLayoutBlock>
                ))}
            </Row>
        </AnimateBlock>
    );
};
export default FilterCardLayoutBlock;
