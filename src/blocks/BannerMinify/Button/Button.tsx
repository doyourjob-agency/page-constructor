import React from 'react';

import {RouterLink} from '../../../components';
import {BannerMinifyButtonProps} from '../../../models';
import {block} from '../../../utils';

import './Button.scss';

const b = block('banner-minify-button');

export const Button = (props: BannerMinifyButtonProps) => {
    const {url, theme, text} = props;

    return (
        <RouterLink href={url}>
            <a href={url} className={b({theme})}>
                {text}
            </a>
        </RouterLink>
    );
};

export default Button;
