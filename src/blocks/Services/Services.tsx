import React, {useContext, useMemo, useState} from 'react';

import {Title} from '../../components';
import {DefaultService, ServicesContext} from '../../context/servicesContext';
import {Col, Row} from '../../grid';
import {ServicesBlockProps} from '../../models';
import {block} from '../../utils';

import ServiceElement from './ServiceElement/ServiceElement';
import ServicesMobileMenu from './ServicesMobileMenu/ServicesMobileMenu';
import ServicesSearch from './ServicesSearch/ServicesSearch';
import ServicesStickyMenu from './ServicesStickyMenu/ServicesStickyMenu';
import {i18n} from './i18n';

import './Services.scss';

const b = block('services-block');

export const ServicesBlock = ({title, serviceLinkType}: ServicesBlockProps) => {
    const {dataByCategories} = useContext(ServicesContext);
    const filterSortDataByCategories = useMemo(
        () =>
            dataByCategories
                .map((group) => ({
                    ...group,
                    services: (group?.services || []).filter(
                        (item) =>
                            (serviceLinkType === 'doc' ? item.docUrl : true) &&
                            (serviceLinkType === 'price' ? item.pricesUrl : true),
                    ),
                }))
                .filter((group) => group.services.length),
        [dataByCategories, serviceLinkType],
    );
    const [search, setSearch] = useState('');
    const showCards = useMemo(
        () => !(serviceLinkType === 'price' || serviceLinkType === 'doc'),
        [serviceLinkType],
    );

    const content = useMemo(() => {
        if (search) {
            const res = dataByCategories.reduce<DefaultService[]>((val, group) => {
                const services =
                    group?.services?.filter(
                        (item) =>
                            `${item.name} ${item.description}`
                                .toLocaleLowerCase()
                                ?.indexOf(search.toLocaleLowerCase()) !== -1 &&
                            (serviceLinkType === 'doc' ? item.docUrl : true) &&
                            (serviceLinkType === 'price' ? item.pricesUrl : true),
                    ) || [];
                return [...val, ...services];
            }, []);
            let groupTitle = res.length > 1 ? `${res.length} ${i18n('found')}` : i18n('foundOne');
            groupTitle = res.length === 0 ? i18n('nofoundTitle') : groupTitle;
            const groupSubtitle = res.length === 0 ? i18n('nofoundSubtitle') : '';
            return (
                <div className={b('group')}>
                    <Row>
                        <Col sizes={{all: 12}}>
                            <Title
                                title={{
                                    text: groupTitle,
                                    textSize: 's',
                                }}
                                subtitle={groupSubtitle}
                            />
                        </Col>
                    </Row>
                    <Row className={b('items-with-upper-padding')}>
                        {res.map((service) => (
                            <ServiceElement
                                key={service?.slug}
                                service={service}
                                serviceLinkType={serviceLinkType}
                                showCards={showCards}
                            />
                        ))}
                    </Row>
                </div>
            );
        }

        return filterSortDataByCategories.map((group) => (
            <div key={group.slug} className={b('group', {'small-margin': !showCards})}>
                <Row>
                    <Col sizes={{all: 12}}>
                        <div className={b('anchor')} id={group.slug}></div>
                        <Title
                            title={{
                                text: group.name,
                                textSize: 's',
                            }}
                        />
                    </Col>
                </Row>
                <Row className={showCards ? undefined : b('items-with-upper-padding')}>
                    {group?.services.map((service) => (
                        <ServiceElement
                            key={service?.slug}
                            service={service}
                            serviceLinkType={serviceLinkType}
                            showCards={showCards}
                        />
                    ))}
                </Row>
            </div>
        ));
    }, [search, dataByCategories, filterSortDataByCategories, serviceLinkType, showCards]);

    return (
        <React.Fragment>
            <Title className={b('title')} title={title} />
            {!showCards && serviceLinkType !== 'doc' && (
                <ServicesSearch value={search} setValue={setSearch} />
            )}
            <Row>
                <ServicesMobileMenu items={filterSortDataByCategories} />
            </Row>
            <Row>
                <Col sizes={{all: 12, md: 9}}>{content}</Col>
                <Col>
                    <ServicesStickyMenu items={filterSortDataByCategories} />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ServicesBlock;
