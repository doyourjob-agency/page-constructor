import React, {useCallback} from 'react';

import {Button, HTML, Image} from '../../../components';
import {QuotesItemProps} from '../../../models';
import {block} from '../../../utils';
import {i18n} from '../i18n';

import './QuotesItem.scss';

const b = block('quotes-item');

export const QuotesItem = ({
    theme = 'light',
    avatar,
    logo,
    name,
    description,
    quote,
    style = 'normal',
    buttonText,
    buttonUrl,
}: QuotesItemProps) => {
    const renderAuthor = useCallback(
        (mobile?: boolean) => {
            return (
                <div className={b('author', mobile ? {mobile} : {desktop: true})}>
                    {avatar && (
                        <Image className={b('author-avatar')} src={avatar} alt={i18n('avatar')} />
                    )}
                    <div className={b('author-wrap')}>
                        {name && <div className={b('author-title')}>{name}</div>}
                        {description && <div className={b('author-text')}>{description}</div>}
                    </div>
                </div>
            );
        },
        [avatar, description, name],
    );

    return (
        <div className={b({theme})}>
            <div className={b('header')}>
                {renderAuthor()}
                {logo && <Image className={b('logo')} src={logo} alt={i18n('logo')} />}
            </div>
            <HTML block className={b('body', {style})}>
                {quote}
            </HTML>
            {renderAuthor(true)}
            {buttonText && (
                <div className={b('footer')}>
                    <Button
                        theme={theme === 'light' ? 'outlined' : 'outlined-contrast'}
                        text={buttonText}
                        size="xl"
                        url={buttonUrl}
                    />
                </div>
            )}
        </div>
    );
};

export default QuotesItem;
