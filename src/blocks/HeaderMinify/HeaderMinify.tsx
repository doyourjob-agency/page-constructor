import React, {useRef} from 'react';

import {BackgroundEffect, HTML, YFMWrapper} from '../../components';
import {HeaderMinifyBlockProps} from '../../models';
import {block} from '../../utils';

import Button from './Button/Button';

import './HeaderMinify.scss';

const b = block('header-minify-block');

const modifiers = {
    constructor: true,
};

export const HeaderMinifyBlock = (props: HeaderMinifyBlockProps) => {
    const {title, description, button, backgroundEffect} = props;

    const headerRef = useRef<HTMLElement>(null);

    return (
        <header ref={headerRef} className={b()}>
            {backgroundEffect && backgroundEffect.firstSrc && backgroundEffect.secondSrc && (
                <BackgroundEffect {...backgroundEffect} attachRef={headerRef} />
            )}
            <h1 className={b('title')}>
                <HTML>{title}</HTML>
            </h1>
            {description && (
                <div className={b('description')}>
                    <YFMWrapper content={description} modifiers={modifiers} />
                </div>
            )}
            <div className={b('buttons')}>{button && <Button {...button} />}</div>
        </header>
    );
};

export default HeaderMinifyBlock;
