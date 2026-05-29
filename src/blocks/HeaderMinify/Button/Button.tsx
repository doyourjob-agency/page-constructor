import React from 'react';

import {RouterLink} from '../../../components';
import {HeaderMinifyButtonProps} from '../../../models';
import {block} from '../../../utils';

import './Button.scss';

const b = block('header-minify-button');

export const Button = (props: HeaderMinifyButtonProps) => {
    const {url, text, outline} = props;

    return (
        <RouterLink href={url}>
            <a href={url} className={b({outline})}>
                {text}
            </a>
        </RouterLink>
    );
};

export default Button;
