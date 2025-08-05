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

export const HeaderButtons = ({buttons}: Pick<HeaderBlockProps, 'buttons'>) => {
    if (!buttons) return null;

    return (
        <div className={b()} data-qa="header-buttons">
            {buttons.map((button, index) => (
                <HeaderButton key={index} {...button} />
            ))}
        </div>
    );
};

export default HeaderButtons;
