import React from 'react';

import {Link} from '@gravity-ui/uikit';

import {CardBase, HTML, Links, Tag} from '../../components';
import ServiceLabel from '../../components/ServiceLabel/ServiceLabel';
import {CardProps} from '../../models/constructor-items/sub-blocks';
import {block} from '../../utils';
import Content from '../Content/Content';

import {i18n} from './i18n';

import './Card.scss';

const b = block('card');

const Card = ({header, summary, text, service, label, ...props}: CardProps) => {
    return (
        <CardBase className={b()} {...props}>
            <CardBase.Header
                className={b('header')}
                image={header.image}
                hoverImage={header.hoverImage}
            >
                {label && <Tag {...label} />}
                <h3 className={b('title')}>
                    <HTML>{header.title}</HTML>
                </h3>
            </CardBase.Header>
            <CardBase.Content>
                <Content summary={summary} text={text} size="s" colSizes={{all: 12}} />
                {service && (
                    <div className={b('service')}>
                        <span className={b('phrase')}>{i18n('phrase')}</span>
                        <Link href={`/services/${service.slug}`}>
                            <ServiceLabel slug={service.slug} name={service.name} />
                        </Link>
                    </div>
                )}
            </CardBase.Content>
            <CardBase.Footer>
                <Links />
            </CardBase.Footer>
        </CardBase>
    );
};

export default Card;
