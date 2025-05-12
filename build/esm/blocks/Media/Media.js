import React, { useState } from 'react';
import Media from '../../components/Media/Media';
import MediaBase from '../../components/MediaBase/MediaBase';
import { useTheme } from '../../context/theme';
import { block, getThemedValue } from '../../utils';
import { getMediaBorder } from '../../utils/borderSelector';
import { mergeVideoMicrodata } from '../../utils/microdata';
import './Media.css';
const b = block('media-block');
export const MediaBlock = (props) => {
    const { media, border, disableShadow, title, description } = props;
    const borderSelected = getMediaBorder({
        border,
        disableShadow,
    });
    const [play, setPlay] = useState(false);
    const theme = useTheme();
    const mediaThemed = getThemedValue(media, theme);
    const mediaWithMicrodata = mergeVideoMicrodata(mediaThemed, {
        name: title,
        description,
    });
    return (React.createElement(MediaBase, Object.assign({}, props, { onScroll: () => setPlay(true) }),
        React.createElement(MediaBase.Card, null,
            React.createElement(Media, Object.assign({ imageClassName: b('image') }, mediaWithMicrodata, { playVideo: play, className: b({ border: borderSelected }) })))));
};
export default MediaBlock;
