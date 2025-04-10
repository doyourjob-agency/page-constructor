import React from 'react';
import { useTheme } from '../../context/theme';
import { getThemedValue } from '../../utils';
import Image from '../Image/Image';
import { getMediaImage } from '../Media/Image/utils';
function isIconSvg(icon) {
    return typeof icon === 'function';
}
const ContentListItemIcon = ({ icon, className, qa }) => {
    const theme = useTheme();
    const iconThemed = getThemedValue(icon, theme);
    if (isIconSvg(iconThemed)) {
        const Icon = iconThemed;
        return (React.createElement("div", null,
            React.createElement(Icon, { className: className })));
    }
    const iconData = getMediaImage(iconThemed);
    return React.createElement(Image, Object.assign({}, iconData, { className: className, qa: qa }));
};
export default ContentListItemIcon;
