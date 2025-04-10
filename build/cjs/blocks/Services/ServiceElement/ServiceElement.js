"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceElement = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const components_1 = require("../../../components");
const ServiceIcon_1 = tslib_1.__importDefault(require("../../../components/ServiceIcon/ServiceIcon"));
const servicesContext_1 = require("../../../context/servicesContext");
const grid_1 = require("../../../grid");
const utils_1 = require("../../../utils");
const ServiceTag_1 = tslib_1.__importDefault(require("../ServiceTag/ServiceTag"));
const i18n_1 = require("../i18n");
const b = (0, utils_1.block)('services-element');
const ServiceElement = ({ service, showCards, serviceLinkType }) => {
    const [notPrerender, setNotPrerender] = (0, react_1.useState)(false);
    const { icons } = (0, react_1.useContext)(servicesContext_1.ServicesContext);
    const data = (service === null || service === void 0 ? void 0 : service.slug) ? icons[service.slug] : '';
    (0, react_1.useEffect)(() => setNotPrerender(true), []);
    if (!service)
        return null;
    const description = (0, utils_1.replaceTrademark)(service.description || '');
    return (react_1.default.createElement(grid_1.Col, { key: service === null || service === void 0 ? void 0 : service.id, sizes: { all: 12, sm: 6, lg: 4 }, className: b({ card: showCards }) }, showCards ? (react_1.default.createElement(components_1.CardBase, { className: b('card') },
        react_1.default.createElement(components_1.CardBase.Content, null,
            react_1.default.createElement("a", { href: service.url || undefined, className: b('card-link'), "aria-label": service.name }),
            react_1.default.createElement("div", { className: b('card-content') },
                react_1.default.createElement("div", { className: b('upper-content') },
                    react_1.default.createElement("div", { className: b('logo-tag') },
                        data && (react_1.default.createElement("div", { className: b('logo'), "aria-hidden": "true" },
                            react_1.default.createElement(ServiceIcon_1.default, { name: service.slug }))),
                        react_1.default.createElement(ServiceTag_1.default, { tag: service.tag })),
                    react_1.default.createElement("div", { className: b('name') }, service.name),
                    react_1.default.createElement(components_1.HTML, { className: b('description') }, description)),
                react_1.default.createElement("div", { className: b('lower-links') },
                    notPrerender && service.docUrl && (react_1.default.createElement(uikit_1.Link, { view: "secondary", href: service.docUrl }, (0, i18n_1.i18n)('doc'))),
                    notPrerender && service.pricesUrl && (react_1.default.createElement(uikit_1.Link, { href: service.pricesUrl }, (0, i18n_1.i18n)('price')))))))) : (react_1.default.createElement(uikit_1.Link, { className: b('price-item-layout'), href: (serviceLinkType === 'price' ? service.pricesUrl : service.docUrl) || '' },
        react_1.default.createElement("div", { className: b('price-item-icon'), "aria-hidden": "true" },
            react_1.default.createElement(ServiceIcon_1.default, { name: service.slug })),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: b('price-upper-row') },
                react_1.default.createElement("span", null, service.name),
                "\u00A0",
                react_1.default.createElement(ServiceTag_1.default, { tag: service.tag, small: true })),
            react_1.default.createElement(components_1.HTML, { className: b('price-lower-row') }, description))))));
};
exports.ServiceElement = ServiceElement;
exports.default = exports.ServiceElement;
