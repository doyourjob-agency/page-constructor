"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../components");
const servicesContext_1 = require("../../context/servicesContext");
const grid_1 = require("../../grid");
const utils_1 = require("../../utils");
const ServiceElement_1 = tslib_1.__importDefault(require("./ServiceElement/ServiceElement"));
const ServicesMobileMenu_1 = tslib_1.__importDefault(require("./ServicesMobileMenu/ServicesMobileMenu"));
const ServicesSearch_1 = tslib_1.__importDefault(require("./ServicesSearch/ServicesSearch"));
const ServicesStickyMenu_1 = tslib_1.__importDefault(require("./ServicesStickyMenu/ServicesStickyMenu"));
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('services-block');
const ServicesBlock = ({ title, serviceLinkType }) => {
    const { dataByCategories } = (0, react_1.useContext)(servicesContext_1.ServicesContext);
    const filterSortDataByCategories = (0, react_1.useMemo)(() => dataByCategories
        .map((group) => (Object.assign(Object.assign({}, group), { services: ((group === null || group === void 0 ? void 0 : group.services) || []).filter((item) => (serviceLinkType === 'doc' ? item.docUrl : true) &&
            (serviceLinkType === 'price' ? item.pricesUrl : true)) })))
        .filter((group) => group.services.length), [dataByCategories, serviceLinkType]);
    const [search, setSearch] = (0, react_1.useState)('');
    const showCards = (0, react_1.useMemo)(() => !(serviceLinkType === 'price' || serviceLinkType === 'doc'), [serviceLinkType]);
    const content = (0, react_1.useMemo)(() => {
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
            let groupTitle = res.length > 1 ? `${res.length} ${(0, i18n_1.i18n)('found')}` : (0, i18n_1.i18n)('foundOne');
            groupTitle = res.length === 0 ? (0, i18n_1.i18n)('nofoundTitle') : groupTitle;
            const groupSubtitle = res.length === 0 ? (0, i18n_1.i18n)('nofoundSubtitle') : '';
            return (react_1.default.createElement("div", { className: b('group') },
                react_1.default.createElement(grid_1.Row, null,
                    react_1.default.createElement(grid_1.Col, { sizes: { all: 12 } },
                        react_1.default.createElement(components_1.Title, { title: {
                                text: groupTitle,
                                textSize: 's',
                            }, subtitle: groupSubtitle }))),
                react_1.default.createElement(grid_1.Row, { className: b('items-with-upper-padding') }, res.map((service) => (react_1.default.createElement(ServiceElement_1.default, { key: service === null || service === void 0 ? void 0 : service.slug, service: service, serviceLinkType: serviceLinkType, showCards: showCards }))))));
        }
        return filterSortDataByCategories.map((group) => (react_1.default.createElement("div", { key: group.slug, className: b('group', { 'small-margin': !showCards }) },
            react_1.default.createElement(grid_1.Row, null,
                react_1.default.createElement(grid_1.Col, { sizes: { all: 12 } },
                    react_1.default.createElement("div", { className: b('anchor'), id: group.slug }),
                    react_1.default.createElement(components_1.Title, { title: {
                            text: group.name,
                            textSize: 's',
                        } }))),
            react_1.default.createElement(grid_1.Row, { className: showCards ? undefined : b('items-with-upper-padding') }, group === null || group === void 0 ? void 0 : group.services.map((service) => (react_1.default.createElement(ServiceElement_1.default, { key: service === null || service === void 0 ? void 0 : service.slug, service: service, serviceLinkType: serviceLinkType, showCards: showCards })))))));
    }, [search, dataByCategories, filterSortDataByCategories, serviceLinkType, showCards]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components_1.Title, { className: b('title'), title: title }),
        !showCards && serviceLinkType !== 'doc' && (react_1.default.createElement(ServicesSearch_1.default, { value: search, setValue: setSearch })),
        react_1.default.createElement(grid_1.Row, null,
            react_1.default.createElement(ServicesMobileMenu_1.default, { items: filterSortDataByCategories })),
        react_1.default.createElement(grid_1.Row, null,
            react_1.default.createElement(grid_1.Col, { sizes: { all: 12, md: 9 } }, content),
            react_1.default.createElement(grid_1.Col, null,
                react_1.default.createElement(ServicesStickyMenu_1.default, { items: filterSortDataByCategories })))));
};
exports.ServicesBlock = ServicesBlock;
exports.default = exports.ServicesBlock;
