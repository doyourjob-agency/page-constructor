import React from 'react';
import { block } from '../../utils';
import { YFMWrapper } from '../index';
import './MetaInfo.css';
const b = block('meta-info');
const MetaInfo = ({ items, className }) => (React.createElement("h4", { className: b(null, className) }, items.map((metaInfoItem) => (React.createElement(YFMWrapper, { content: metaInfoItem, key: metaInfoItem, className: b('item'), modifiers: { constructor: true, constructorMetaInfo: true } })))));
export default MetaInfo;
