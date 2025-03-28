import React, { Fragment } from 'react';
import { YFMWrapper } from '../../../../components';
import { block } from '../../../../utils';
import './List.css';
const b = block('marked-list');
const List = (props) => {
    const { items = [], titleSize = 's' } = props;
    return (React.createElement(Fragment, null, items.map((item, id) => (React.createElement("div", { key: id, className: b('list-item') },
        React.createElement("img", { className: b('img'), alt: "" }),
        React.createElement("div", { className: b('text', { size: titleSize }) },
            React.createElement(YFMWrapper, { content: item.text, modifiers: { constructor: true } })))))));
};
export default List;
