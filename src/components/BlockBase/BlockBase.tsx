import React, {PropsWithChildren, useMemo} from 'react';

import {ConstructorRow} from '../../containers/PageConstructor/components/ConstructorRow';
import {Col, Grid} from '../../grid';
import {BlockBaseProps, ClassNameProps, QAProps} from '../../models';
import {block, getBlockVisibilityClasses} from '../../utils';
import Anchor from '../Anchor/Anchor';

import './BlockBase.scss';

const b = block('block-base');

export type BlockBaseFullProps = BlockBaseProps &
    ClassNameProps &
    PropsWithChildren &
    QAProps & {withoutGrid?: boolean};

const BlockBase = (props: BlockBaseFullProps) => {
    const {
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
        withoutGrid,
    } = props;

    const {top, bottom} =
        indent || (resetPaddings ? {top: '0', bottom: '0'} : {top: 'l', bottom: 'l'});

    const isBackgroundUrl = /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(backgroundFull || '');
    const visibilityClasses = getBlockVisibilityClasses(visibility);

    const render = useMemo(
        () => (
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
        ),
        [
            anchor,
            backgroundFull,
            bottom,
            children,
            className,
            hidden,
            isBackgroundUrl,
            qa,
            resetPaddings,
            top,
            visibilityClasses,
            visible,
        ],
    );

    if (withoutGrid) {
        return render;
    }

    return (
        <Grid>
            <ConstructorRow>{render}</ConstructorRow>
        </Grid>
    );
};

export default BlockBase;
