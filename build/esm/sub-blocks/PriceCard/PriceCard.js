import React from 'react';
import Check from '@gravity-ui/icons/Check';
import { BackgroundImage, Buttons, CardBase, ContentList, HTML, Links } from '../../components';
import { block } from '../../utils';
import './PriceCard.css';
const b = block('price-card');
const PriceCard = (props) => {
    const { border, title, price, pricePeriod, priceDetails, theme, description, list, buttons, links, backgroundColor, } = props;
    return (React.createElement(CardBase, { className: b({ theme }), border: border },
        React.createElement(CardBase.Content, { key: "content" },
            React.createElement(BackgroundImage, { className: b('background'), style: { backgroundColor } }),
            React.createElement("div", { className: b('content', { theme }) },
                React.createElement("div", { className: b('info') },
                    React.createElement(HTML, { className: b('title') }, title),
                    React.createElement("div", { className: b('price') },
                        React.createElement("div", null,
                            React.createElement("span", { className: b('price-value') }, price),
                            pricePeriod && (React.createElement("span", { className: b('price-period') },
                                "/ ",
                                pricePeriod))),
                        priceDetails && (React.createElement("div", { className: b('price-details') }, priceDetails))),
                    description && React.createElement("div", { className: b('description') }, description),
                    (list === null || list === void 0 ? void 0 : list.length) ? (React.createElement("div", { className: b('list') },
                        React.createElement(ContentList, { list: list.map((item) => ({
                                icon: Check,
                                text: item,
                            })), size: "s" }))) : null),
                React.createElement(Buttons, { className: b('buttons'), buttons: buttons, size: "s" }),
                React.createElement(Links, { className: b('links'), links: links, size: "s" })))));
};
export default PriceCard;
