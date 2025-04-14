import React, { useContext, useMemo, useState } from 'react';
import { Title } from '../../components';
import { ServicesContext } from '../../context/servicesContext';
import { Col, Row } from '../../grid';
import { block } from '../../utils';
import ServiceElement from './ServiceElement/ServiceElement';
import ServicesMobileMenu from './ServicesMobileMenu/ServicesMobileMenu';
import ServicesSearch from './ServicesSearch/ServicesSearch';
import ServicesStickyMenu from './ServicesStickyMenu/ServicesStickyMenu';
import { i18n } from './i18n';
import './Services.css';
const b = block('services-block');
export const ServicesBlock = ({ title, serviceLinkType }) => {
    const { dataByCategories } = useContext(ServicesContext);
    const filterSortDataByCategories = useMemo(() => dataByCategories
        .map((group) => (Object.assign(Object.assign({}, group), { services: ((group === null || group === void 0 ? void 0 : group.services) || []).filter((item) => (serviceLinkType === 'doc' ? item.docUrl : true) &&
            (serviceLinkType === 'price' ? item.pricesUrl : true)) })))
        .filter((group) => group.services.length), [dataByCategories, serviceLinkType]);
    const [search, setSearch] = useState('');
    const showCards = useMemo(() => !(serviceLinkType === 'price' || serviceLinkType === 'doc'), [serviceLinkType]);
    const content = useMemo(() => {
        if (search) {
            const res = dataByCategories.reduce((val, group) => {
                var _a;
                const services = ((_a = group === null || group === void 0 ? void 0 : group.services) === null || _a === void 0 ? void 0 : _a.filter((item) => {
                    var _a;
                    return ((_a = `${item.name} ${item.description}`
                        .toLocaleLowerCase()) === null || _a === void 0 ? void 0 : _a.indexOf(search.toLocaleLowerCase())) !== -1 &&
                        (serviceLinkType === 'doc' ? item.docUrl : true) &&
                        (serviceLinkType === 'price' ? item.pricesUrl : true);
                })) || [];
                return [...val, ...services];
            }, []);
            let groupTitle = res.length > 1 ? `${res.length} ${i18n('found')}` : i18n('foundOne');
            groupTitle = res.length === 0 ? i18n('nofoundTitle') : groupTitle;
            const groupSubtitle = res.length === 0 ? i18n('nofoundSubtitle') : '';
            return (React.createElement("div", { className: b('group') },
                React.createElement(Row, null,
                    React.createElement(Col, { sizes: { all: 12 } },
                        React.createElement(Title, { title: {
                                text: groupTitle,
                                textSize: 's',
                            }, subtitle: groupSubtitle }))),
                React.createElement(Row, { className: b('items-with-upper-padding') }, res.map((service) => (React.createElement(ServiceElement, { key: service === null || service === void 0 ? void 0 : service.slug, service: service, serviceLinkType: serviceLinkType, showCards: showCards }))))));
        }
        return filterSortDataByCategories.map((group) => (React.createElement("div", { key: group.slug, className: b('group', { 'small-margin': !showCards }) },
            React.createElement(Row, null,
                React.createElement(Col, { sizes: { all: 12 } },
                    React.createElement("div", { className: b('anchor'), id: group.slug }),
                    React.createElement(Title, { title: {
                            text: group.name,
                            textSize: 's',
                        } }))),
            React.createElement(Row, { className: showCards ? undefined : b('items-with-upper-padding') }, group === null || group === void 0 ? void 0 : group.services.map((service) => (React.createElement(ServiceElement, { key: service === null || service === void 0 ? void 0 : service.slug, service: service, serviceLinkType: serviceLinkType, showCards: showCards })))))));
    }, [search, dataByCategories, filterSortDataByCategories, serviceLinkType, showCards]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Title, { className: b('title'), title: title }),
        !showCards && serviceLinkType !== 'doc' && (React.createElement(ServicesSearch, { value: search, setValue: setSearch })),
        React.createElement(Row, null,
            React.createElement(ServicesMobileMenu, { items: filterSortDataByCategories })),
        React.createElement(Row, null,
            React.createElement(Col, { sizes: { all: 12, md: 9 } }, content),
            React.createElement(Col, null,
                React.createElement(ServicesStickyMenu, { items: filterSortDataByCategories })))));
};
export default ServicesBlock;
