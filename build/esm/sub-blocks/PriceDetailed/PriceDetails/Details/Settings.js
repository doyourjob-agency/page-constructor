import React, { Fragment } from 'react';
import { YFMWrapper } from '../../../../components';
import { block } from '../../../../utils';
import './Settings.css';
const b = block('settings-list');
const Settings = (props) => {
    const { items = [], titleSize = 's', descriptionSize = 'm' } = props;
    return (React.createElement(Fragment, null, items.map((item, id) => (React.createElement("div", { key: id },
        React.createElement("div", { className: b('title', { size: titleSize }) }, item.title),
        React.createElement("div", { className: b('description', { size: descriptionSize }) },
            React.createElement(YFMWrapper, { content: item.description, modifiers: { constructor: true } })))))));
};
export default Settings;
