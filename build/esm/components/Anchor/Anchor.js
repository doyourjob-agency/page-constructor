//TODO move to cloud components
import React from 'react';
import { block } from '../../utils';
import './Anchor.css';
const b = block('Anchor');
export const qaIdByDefault = 'qa-anchor';
const Anchor = ({ id, className, qa }) => (React.createElement("div", { id: id, className: b(null, className), "data-qa": qa || qaIdByDefault }));
export default Anchor;
