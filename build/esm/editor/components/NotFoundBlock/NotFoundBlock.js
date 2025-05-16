import React, { Fragment } from 'react';
import { BlockBase } from '../../../components';
import { block } from '../../../utils';
import { i18n } from './i18n';
import './NotFoundBlock.css';
const b = block('not-found-block');
export const NotFoundBlock = ({ type, children }) => children ? (React.createElement(Fragment, null, children)) : (React.createElement(BlockBase, null,
    React.createElement("div", { className: b() }, i18n('message', { type }))));
