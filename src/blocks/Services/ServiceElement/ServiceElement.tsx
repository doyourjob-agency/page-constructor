import React, {useContext, useEffect, useState} from 'react';

import {Icon, Link} from '@gravity-ui/uikit';

import {CardBase, HTML, Image} from '../../../components';
import ServiceIcon from '../../../components/ServiceIcon/ServiceIcon';
import {DefaultService, ServicesContext} from '../../../context/servicesContext';
import {Col} from '../../../grid';
import {block} from '../../../utils';
import ServiceTag from '../ServiceTag/ServiceTag';
import {i18n} from '../i18n';

import './ServiceElement.scss';

const b = block('services-element');

type ServiceElementProps = {
    service?: DefaultService;
    showCards?: boolean;
    serviceLinkType?: string;
};

export const ServiceElement = ({service, showCards, serviceLinkType}: ServiceElementProps) => {
    const [notPrerender, setNotPrerender] = useState(false);
    const {icons} = useContext(ServicesContext);
    const data = service?.slug ? icons[service.slug] : '';
    useEffect(() => setNotPrerender(true), []);
    if (!service) return null;
    const description = service.description || '';
    // const description = replaceStringTrademark(service.description || '');
    return (
        <Col key={service?.id} sizes={{all: 12, sm: 6, lg: 4}} className={b({card: showCards})}>
            {showCards ? (
                <CardBase className={b('card')}>
                    <CardBase.Content>
                        <a
                            href={service.url || undefined}
                            className={b('card-link')}
                            aria-label={service.name}
                        />
                        <div className={b('card-content')}>
                            <div className={b('upper-content')}>
                                <div className={b('logo-tag')}>
                                    {data && (
                                        <div className={b('logo')} aria-hidden="true">
                                            {/^(http(s?):\/\/)/.test(data) ? (
                                                <Image src={data} alt="" />
                                            ) : (
                                                <Icon data={data} />
                                            )}
                                        </div>
                                    )}
                                    <ServiceTag tag={service.tag} />
                                </div>
                                <div className={b('name')}>{service.name}</div>
                                <HTML className={b('description')}>{description}</HTML>
                            </div>
                            <div className={b('lower-links')}>
                                {notPrerender && service.docUrl && (
                                    <Link view="secondary" href={service.docUrl}>
                                        {i18n('doc')}
                                    </Link>
                                )}
                                {notPrerender && service.pricesUrl && (
                                    <Link href={service.pricesUrl}>{i18n('price')}</Link>
                                )}
                            </div>
                        </div>
                    </CardBase.Content>
                </CardBase>
            ) : (
                <Link
                    className={b('price-item-layout')}
                    href={(serviceLinkType === 'price' ? service.pricesUrl : service.docUrl) || ''}
                >
                    <div className={b('price-item-icon')} aria-hidden="true">
                        <ServiceIcon name={service.slug} />
                    </div>
                    <div>
                        <div className={b('price-upper-row')}>
                            <span>{service.name}</span>&nbsp;
                            <ServiceTag tag={service.tag} small />
                        </div>
                        <HTML className={b('price-lower-row')}>{description}</HTML>
                    </div>
                </Link>
            )}
        </Col>
    );
};

export default ServiceElement;
