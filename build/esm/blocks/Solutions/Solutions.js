import React, { useContext } from 'react';
import { CardBase, HTML, Image } from '../../components';
import { SolutionsContext } from '../../context/solutionsContext';
import { Col, Grid, Row } from '../../grid';
import { block } from '../../utils';
import './Solutions.css';
const b = block('solutions-block');
const colSizes = {
    all: 12,
    sm: 6,
    lg: 4,
};
export const SolutionsBlock = () => {
    const { items } = useContext(SolutionsContext);
    return (React.createElement(Grid, { className: b() },
        React.createElement(Row, { className: b('cards') }, items.map((card) => (React.createElement(Col, { key: card.slug, className: b('card'), sizes: colSizes },
            React.createElement(CardBase, { url: `/solutions/${card.slug}` },
                React.createElement(CardBase.Content, null,
                    React.createElement(Image, { className: b('icon'), src: card.image, alt: "solution-icon" }),
                    React.createElement("h5", { className: b('title') },
                        React.createElement("span", null, card.name)),
                    React.createElement(HTML, null, card.description)))))))));
};
export default SolutionsBlock;
