import React from 'react';

import Check from '@gravity-ui/icons/Check';

import {BackgroundImage, Buttons, CardBase, ContentList, HTML, Links, Tag} from '../../components';
import {PriceCardProps} from '../../models';
import {block} from '../../utils';

import './PriceCard.scss';

const b = block('price-card');

const PriceCard = (props: PriceCardProps) => {
    const {
        border,
        title,
        summary,
        price,
        pricePeriod,
        priceDetails,
        theme,
        description,
        list,
        buttons,
        links,
        backgroundColor,
        label,
    } = props;
    return (
        <CardBase className={b({theme})} border={border}>
            <CardBase.Content key="content">
                <BackgroundImage className={b('background')} style={{backgroundColor}} />
                {label && <Tag {...label} />}
                <div className={b('content', {theme})}>
                    <div className={b('info')}>
                        {(title || summary) && (
                            <div className={b('wrap')}>
                                {title && <HTML className={b('title')}>{title}</HTML>}
                                {summary && <div className={b('summary')}>{summary}</div>}
                            </div>
                        )}
                        <div className={b('price')}>
                            <div>
                                <span className={b('price-value')}>{price}</span>
                                {pricePeriod && (
                                    <span className={b('price-period')}>/ {pricePeriod}</span>
                                )}
                            </div>
                            {priceDetails && (
                                <div className={b('price-details')}>{priceDetails}</div>
                            )}
                        </div>
                        {description && <div className={b('description')}>{description}</div>}
                        {list?.length ? (
                            <div className={b('list')}>
                                <ContentList
                                    list={list.map((item) => ({
                                        icon: Check,
                                        text: item,
                                    }))}
                                    size="s"
                                />
                            </div>
                        ) : null}
                    </div>
                    <Buttons className={b('buttons')} buttons={buttons} size="s" />
                    <Links className={b('links')} links={links} size="s" />
                </div>
            </CardBase.Content>
        </CardBase>
    );
};

export default PriceCard;
