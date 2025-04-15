import React from 'react';
import FullscreenMedia from '../../FullscreenMedia/FullscreenMedia';
import Video from '../Video/Video';
const FullscreenVideo = (props) => {
    return (React.createElement(FullscreenMedia, null, (classNames) => React.createElement(Video, Object.assign({}, props, classNames))));
};
export default FullscreenVideo;
