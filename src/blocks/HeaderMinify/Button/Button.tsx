import React from 'react';

import {ImageBase, RouterLink} from '../../../components';
import {HeaderMinifyButtonProps} from '../../../models';
import {block} from '../../../utils';

import './Button.scss';

const b = block('header-minify-button');

export const Button = (props: HeaderMinifyButtonProps) => {
    const {url, icon, text} = props;

    return (
        <RouterLink href={url}>
            <a href={url} className={b('')}>
                {icon ? (
                    <ImageBase className={b('icon')} src={icon} alt="" aria-hidden="true" />
                ) : null}
                {text}
            </a>
        </RouterLink>
    );
};

export default Button;
