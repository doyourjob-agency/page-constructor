import React, {useMemo} from 'react';

import {Button, RouterLink} from '../../../components';
import {HeaderBlockProps, HeaderButtonType} from '../../../models';
import {block} from '../../../utils';

import './HeaderButtons.scss';

const b = block('header-buttons');

type HeaderButtonProps = HeaderButtonType & {
    titleId?: string;
};

const HeaderButton = (props: HeaderButtonProps) => {
    const extraProps = useMemo(
        () => ({
            'aria-describedby': props.titleId,
            ...props.extraProps,
        }),
        [props.extraProps, props.titleId],
    );
    return (
        <RouterLink href={props.url}>
            <Button className={b('button')} size="xl" extraProps={extraProps} {...props} />
        </RouterLink>
    );
};

type HeaderButtonsProps = Pick<HeaderBlockProps, 'buttons'> & {
    titleId?: string;
};

export const HeaderButtons = ({buttons, titleId}: HeaderButtonsProps) => {
    if (!buttons) return null;

    return (
        <div className={b()} data-qa="header-buttons">
            {buttons.map((button, index) => (
                <HeaderButton key={index} {...button} titleId={titleId} />
            ))}
        </div>
    );
};

export default HeaderButtons;
