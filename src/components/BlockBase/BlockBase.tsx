import React, {PropsWithChildren} from 'react';

import {Col, Grid, Row} from '../../grid';
import {BlockBaseProps, BlockType, ClassNameProps, QAProps} from '../../models';
import {block, getBlockVisibilityClasses} from '../../utils';
import Anchor from '../Anchor/Anchor';

import './BlockBase.scss';

const b = block('block-base');

export type BlockBaseFullProps = BlockBaseProps & ClassNameProps & PropsWithChildren & QAProps;

const BlockBase = (props: BlockBaseFullProps) => {
    const {
        type,
        anchor,
        visibility,
        indent,
        backgroundFull,
        visible,
        hidden,
        children,
        className,
        resetPaddings,
        qa,
    } = props;

    const {top, bottom} =
        indent || (resetPaddings ? {top: '0', bottom: '0'} : {top: 'l', bottom: 'l'});

    const isBackgroundUrl = /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(backgroundFull || '');
    const visibilityClasses = getBlockVisibilityClasses(visibility);

    return (
        <Grid className={b('wrap', {overflowXhidden: type === BlockType.QuotesBlock})}>
            <Row>
                <Col
                    className={b(
                        {
                            ['reset-paddings']: resetPaddings,
                            indentTop: top,
                            indentBottom: bottom,
                            ...visibilityClasses,
                        },
                        className,
                    )}
                    hidden={hidden}
                    visible={visible}
                    reset={true}
                    qa={qa}
                >
                    {anchor && <Anchor id={anchor.url} className={b('anchor')} />}
                    {backgroundFull && (
                        <div
                            className={b('background-full', {top})}
                            style={
                                isBackgroundUrl
                                    ? {backgroundImage: `url(${backgroundFull})`}
                                    : {backgroundColor: backgroundFull}
                            }
                        />
                    )}
                    {children}
                </Col>
            </Row>
        </Grid>
    );
};

export default BlockBase;
