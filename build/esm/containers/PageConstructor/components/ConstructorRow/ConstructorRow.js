import React from 'react';
import { Col, Row } from '../../../../grid';
import { block } from '../../../../utils';
import './ConstructorRow.css';
const b = block('constructor-row');
export const ConstructorRow = ({ children }) => children ? (React.createElement(Row, { className: b() },
    React.createElement(Col, null, children))) : null;
