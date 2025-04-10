import React from 'react';
import { Clock, MapPin } from '@gravity-ui/icons';
import { Button as ButtonKit, Icon } from '@gravity-ui/uikit';
import { Col } from '../../../grid';
import { block } from '../../../utils';
import './HeaderTags.css';
const b = block('header-tags');
function getIcon(name) {
    switch (name) {
        case 'clock':
            return React.createElement(Icon, { data: Clock, size: 16 });
        case 'map':
            return React.createElement(Icon, { data: MapPin, size: 16 });
        default:
            return null;
    }
}
export const HeaderTags = ({ theme, tags, className }) => {
    if (!(tags === null || tags === void 0 ? void 0 : tags.length))
        return null;
    return (React.createElement(Col, { className: b({ theme }, className) }, tags.map((tag) => (React.createElement(ButtonKit, Object.assign({ view: "outlined", size: "l", href: tag.url, className: b('tag', { disable: !tag.url }) }, (tag.url ? {} : { tabIndex: -1 }), { key: tag.text, target: tag.target }),
        getIcon(tag.icon),
        tag.text)))));
};
export default HeaderTags;
