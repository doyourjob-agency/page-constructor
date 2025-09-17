import React, {CSSProperties, PropsWithChildren, useMemo} from 'react';

import {Col} from '../../grid';
import {BlockBaseProps, ClassNameProps, QAProps} from '../../models';
import {block, getBlockVisibilityClasses} from '../../utils';
import Anchor from '../Anchor/Anchor';

import './BlockBase.scss';

const b = block('block-base');

export type BlockBaseFullProps = BlockBaseProps & ClassNameProps & PropsWithChildren & QAProps;

const BlockBase = (props: BlockBaseFullProps) => {
    const {
        anchor,
        visibility,
        indent,
        backgroundFull,
        selectionColor,
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
    const rootStyle = useMemo(
        () =>
            selectionColor ? ({['--selection-bg']: selectionColor} as CSSProperties) : undefined,
        [selectionColor],
    );
    return (
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
            style={rootStyle}
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
    );
};

export default BlockBase;
