import React from 'react';
import { block } from '../../utils';
import Link from '../Link/Link';
import './Links.css';
const b = block('links');
function getLinkSize(size) {
    switch (size) {
        case 's':
            return 'm';
        case 'l':
        default:
            return 'l';
    }
}
const Links = ({ className, titleId, links, size = 's', qa, linkQa }) => links ? (React.createElement("div", { className: b({ size }, className), "data-qa": qa }, links === null || links === void 0 ? void 0 : links.map((link) => (React.createElement(Link, Object.assign({ className: b('link') }, link, { textSize: getLinkSize(size), key: link.url, qa: linkQa, extraProps: Object.assign({ 'aria-describedby': link.urlTitle ? undefined : titleId }, link.extraProps) })))))) : null;
export default Links;
