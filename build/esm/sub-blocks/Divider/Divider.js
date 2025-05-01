import React from 'react';
import { block } from '../../utils';
import './Divider.css';
const b = block('divider-block');
const Divider = ({ size = 'm', border }) => React.createElement("div", { className: b({ size, border }) });
export default Divider;
