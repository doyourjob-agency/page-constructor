"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const components_1 = require("../../components");
const ServiceLabel_1 = tslib_1.__importDefault(require("../../components/ServiceLabel/ServiceLabel"));
const utils_1 = require("../../utils");
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('card');
const Card = (_a) => {
    var { header, text, service } = _a, props = tslib_1.__rest(_a, ["header", "text", "service"]);
    return (react_1.default.createElement(components_1.CardBase, Object.assign({}, props),
        react_1.default.createElement(components_1.CardBase.Header, { className: b('header'), image: header.image },
            react_1.default.createElement("h3", { className: b('title') },
                react_1.default.createElement(components_1.HTML, null, header.title))),
        react_1.default.createElement(components_1.CardBase.Content, null,
            react_1.default.createElement(components_1.YFMWrapper, { content: text || '', modifiers: { constructor: true, constructor_list_style: true } }),
            service && (react_1.default.createElement("div", { className: b('service') },
                react_1.default.createElement("span", { className: b('phrase') }, (0, i18n_1.i18n)('phrase')),
                react_1.default.createElement(uikit_1.Link, { href: `/services/${service.slug}` },
                    react_1.default.createElement(ServiceLabel_1.default, { slug: service.slug, name: service.name }))))),
        react_1.default.createElement(components_1.CardBase.Footer, null,
            react_1.default.createElement(components_1.Links, null))));
};
exports.default = Card;
