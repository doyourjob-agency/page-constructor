import React from 'react';

import {Link} from '..';
import {Col, GridColumnSizesType} from '../../grid';
import {ClassNameProps, TitleItemProps, TitleProps as TitleParams} from '../../models';
import {block} from '../../utils';
import YFMWrapper from '../YFMWrapper/YFMWrapper';

import TitleItem from './TitleItem';

import './Title.scss';

const b = block('title');

export interface TitleProps extends TitleParams {
    colSizes?: GridColumnSizesType;
    id?: string;
}

const Title = ({
    title,
    subtitle,
    subtitleBold,
    link,
    className,
    colSizes = {all: 12, sm: 8},
    id,
}: TitleProps & ClassNameProps) => {
    if (!title && !subtitle) {
        return null;
    }

    const {text, ...titleProps} =
        !title || typeof title === 'string' ? ({text: title} as TitleItemProps) : title;

    return (
        <div className={b(null, className)} id={id}>
            {text && (
                <Col reset sizes={colSizes} className={b('title')}>
                    <TitleItem text={text} {...titleProps} />
                    {link && <Link {...link} className={b('link')} theme="normal" arrow />}
                </Col>
            )}
            {subtitle && (
                <Col reset sizes={colSizes}>
                    <div
                        className={b('description', {
                            titleSize: titleProps?.textSize,
                            bold: subtitleBold,
                        })}
                    >
                        <YFMWrapper content={subtitle} modifiers={{constructor: true}} />
                    </div>
                </Col>
            )}
        </div>
    );
};

export default React.memo(Title);
