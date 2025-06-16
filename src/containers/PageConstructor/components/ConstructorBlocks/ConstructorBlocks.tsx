import React, {Fragment, ReactElement, useContext} from 'react';

import get from 'lodash/get';

import {InnerContext} from '../../../../context/innerContext';
import {BlockDecoration} from '../../../../customization/BlockDecoration';
import {Col, Grid, Row} from '../../../../grid';
import {
    BlockBaseProps,
    BlockType,
    ConstructorBlock as ConstructorBlockType,
    LoadableProps,
    SubBlock,
} from '../../../../models';
import {block, getBlockBackgroundStyles, getBlockKey} from '../../../../utils';
import {ConstructorBlock} from '../ConstructorBlock/ConstructorBlock';
import {ConstructorItem} from '../ConstructorItem';
import {ConstructorLoadable} from '../ConstructorLoadable';

import './ConstructorBlocks.scss';

const b = block('constructor-blocks');

export interface ConstructorBlocksProps {
    items: ConstructorBlockType[];
}

export const ConstructorBlocks: React.FC<ConstructorBlocksProps> = ({items}) => {
    const {blockTypes, loadables, itemMap, shouldRenderBlock} = useContext(InnerContext);

    const renderer = (
        parentId = '',
        item: ConstructorBlockType,
        index: number,
    ): ReactElement | null => {
        if (!itemMap[item.type]) {
            return parentId ? null : (
                <BlockDecoration type={item.type as BlockType} index={index}>
                    {null}
                </BlockDecoration>
            );
        }

        let itemElement;
        const key = getBlockKey(item, index);
        const blockId = parentId ? `${parentId}_${key}` : key;
        if (shouldRenderBlock && !shouldRenderBlock(item, blockId)) {
            return null;
        }

        if ('loadable' in item && item.loadable) {
            const {source, serviceId, params} = item.loadable as LoadableProps;
            const config = get(loadables, source);

            if (!config) {
                return null;
            }

            itemElement = (
                <ConstructorLoadable
                    block={item}
                    key={blockId}
                    blockKey={blockId}
                    config={config}
                    serviceId={serviceId}
                    params={params}
                />
            );
        } else {
            let children;
            if ('children' in item && item.children) {
                children = (item.children as SubBlock[]).map(renderer.bind(null, blockId));
            }

            itemElement = (
                <ConstructorItem data={item} key={blockId} blockKey={blockId}>
                    {children}
                </ConstructorItem>
            );
        }
        //TODO: replace ConstructorBlock (and delete it) with BlockBase when all
        // components relying on constructor inner structure like Slider or blog-constructor will be refactored
        if (blockTypes.includes(item.type)) {
            if (parentId) {
                return (
                    <ConstructorBlock key={blockId} data={item} index={index}>
                        {itemElement}
                    </ConstructorBlock>
                );
            }

            const styles = getBlockBackgroundStyles(
                ('blockBackground' in item &&
                    item.blockBackground) as BlockBaseProps['blockBackground'],
            );

            return (
                <Grid
                    key={blockId}
                    className={b({
                        'no-horizontal-scroll':
                            item.type === BlockType.QuotesBlock ||
                            ('backgroundFull' in item && Boolean(item.backgroundFull)),
                    })}
                    style={styles}
                >
                    <Row>
                        <Col>
                            <ConstructorBlock data={item} index={index}>
                                {itemElement}
                            </ConstructorBlock>
                        </Col>
                    </Row>
                </Grid>
            );
        }

        return itemElement;
    };

    return <Fragment>{items.map(renderer.bind(null, ''))}</Fragment>;
};
