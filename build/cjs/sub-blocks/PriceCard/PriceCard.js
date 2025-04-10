"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const Check_1 = tslib_1.__importDefault(require("@gravity-ui/icons/Check"));
const components_1 = require("../../components");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('price-card');
const PriceCard = (props) => {
    const { border, title, price, pricePeriod, priceDetails, theme, description, list, buttons, links, backgroundColor, } = props;
    return (react_1.default.createElement(components_1.CardBase, { className: b({ theme }), border: border },
        react_1.default.createElement(components_1.CardBase.Content, { key: "content" },
            react_1.default.createElement(components_1.BackgroundImage, { className: b('background'), style: { backgroundColor } }),
            react_1.default.createElement("div", { className: b('content', { theme }) },
                react_1.default.createElement("div", { className: b('info') },
                    react_1.default.createElement(components_1.HTML, { className: b('title') }, title),
                    react_1.default.createElement("div", { className: b('price') },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("span", { className: b('price-value') }, price),
                            pricePeriod && (react_1.default.createElement("span", { className: b('price-period') },
                                "/ ",
                                pricePeriod))),
                        priceDetails && (react_1.default.createElement("div", { className: b('price-details') }, priceDetails))),
                    description && react_1.default.createElement("div", { className: b('description') }, description),
                    (list === null || list === void 0 ? void 0 : list.length) ? (react_1.default.createElement("div", { className: b('list') },
                        react_1.default.createElement(components_1.ContentList, { list: list.map((item) => ({
                                icon: Check_1.default,
                                text: item,
                            })), size: "s" }))) : null),
                react_1.default.createElement(components_1.Buttons, { className: b('buttons'), buttons: buttons, size: "s" }),
                react_1.default.createElement(components_1.Links, { className: b('links'), links: links, size: "s" })))));
};
exports.default = PriceCard;
