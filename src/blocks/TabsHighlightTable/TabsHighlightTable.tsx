import React, {useCallback, useMemo, useState} from 'react';

import {HighlightTableBlock} from '../..';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import ButtonTabs, {ButtonTabsItemProps} from '../../components/ButtonTabs/ButtonTabs';
import Title from '../../components/Title/Title';
import {Col, Row} from '../../grid';
import {TabsHighlightTableBlockProps} from '../../models';
import {block} from '../../utils';

import './TabsHighlightTable.scss';

const b = block('tabs-highlight-table-block');

export const TabsHighlightTableBlock = ({
    items,
    title,
    description,
    animated,
    tabsColSizes,
    centered,
}: TabsHighlightTableBlockProps) => {
    const [activeTab, setActiveTab] = useState<string | null>(items[0].tabName);
    const tabs: ButtonTabsItemProps[] = items.map(({tabName}) => ({title: tabName, id: tabName}));
    const activeTabData = items.find(({tabName}) => tabName === activeTab);

    const onSelectTab = useCallback(
        (id: string | null, e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
            setActiveTab(id);
            e.currentTarget.scrollIntoView({
                inline: 'center',
                behavior: 'smooth',
                block: 'nearest',
            });
        },
        [],
    );

    const renderItem = useMemo(() => {
        if (!activeTabData) return null;
        return <HighlightTableBlock {...activeTabData} />;
    }, [activeTabData]);

    return (
        <AnimateBlock className={b()} animate={animated}>
            <Title
                title={title}
                subtitle={description}
                className={b('title', {centered: centered})}
            />
            <Row>
                <Col sizes={tabsColSizes}>
                    <ButtonTabs
                        items={tabs}
                        onSelectTab={onSelectTab}
                        activeTab={activeTab}
                        className={b('tabs', {centered: centered})}
                    />
                </Col>
            </Row>
            {activeTabData && <div>{renderItem}</div>}
        </AnimateBlock>
    );
};

export default TabsHighlightTableBlock;
