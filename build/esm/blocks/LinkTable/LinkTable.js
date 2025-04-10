import React from 'react';
import { Link, Title } from '../../components';
import { Col, Row } from '../../grid';
import { block } from '../../utils';
import './LinkTable.css';
const b = block('link-table-block');
const colSizes = {
    lg: 4,
    md: 6,
    all: 12,
};
export const LinkTableBlock = ({ title, items }) => (React.createElement(React.Fragment, null,
    React.createElement(Title, { title: title }),
    React.createElement(Row, { className: b('links') }, items.map((links) => (React.createElement(Col, { key: links.map((link) => link.url).join(), sizes: colSizes }, links.map((link) => (React.createElement(Link, Object.assign({ key: link.url, theme: "normal" }, link))))))))));
export default LinkTableBlock;
