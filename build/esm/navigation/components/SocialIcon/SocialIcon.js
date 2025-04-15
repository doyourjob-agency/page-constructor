import React from 'react';
import { Image } from '../../../components';
import { getMediaImage } from '../../../components/Media/Image/utils';
import { block } from '../../../utils';
import './SocialIcon.css';
const b = block('social-icon');
const SocialIcon = ({ icon, url, className, urlTitle }) => {
    const iconData = getMediaImage(icon);
    const { alt } = iconData;
    return (React.createElement("a", { href: url, "aria-label": alt, title: urlTitle || alt, target: "_blank", rel: "noopener noreferrer", className: b(null, className) },
        React.createElement(Image, Object.assign({ className: b('icon') }, iconData))));
};
export default SocialIcon;
