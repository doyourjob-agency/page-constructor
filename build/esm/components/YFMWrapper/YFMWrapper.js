/* we won't use 'pc' class prefix here to let you opportunity to define yfm styles
in your project via global 'yfm' class */
import React from 'react';
import toSnakeCase from 'snakecase-keys';
import { HTML } from '../../components';
import { cn } from '../../utils';
const yfm = cn('yfm');
const YFMWrapper = ({ content, modifiers, className, itemProp, id, qa }) => (React.createElement(HTML, { className: yfm(modifiers ? toSnakeCase(modifiers) : {}, className), itemProp: itemProp, id: id, qa: qa }, content));
export default YFMWrapper;
