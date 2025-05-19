import React, { useContext, useMemo, useState } from 'react';
import { InnerContext } from '../../context/innerContext';
import { block, getQaAttrubutes } from '../../utils';
import { sanitizeMicrodata } from '../../utils/microdata';
import IframeVideoBlock from '../VideoBlock/VideoBlock';
import DataLens from './DataLens/DataLens';
import FullscreenVideo from './FullscreenVideo/FullscreenVideo';
import Iframe from './Iframe/Iframe';
import Image from './Image/Image';
import Video from './Video/Video';
import './Media.css';
const b = block('Media');
export const Media = (props) => {
    const { image, video, youtube, videoIframe, dataLens, color, height, previewImg, parallax = false, fullscreen, analyticsEvents, className, imageClassName, videoClassName, youtubeClassName, disableImageSliderForArrayInput, playVideo = true, isBackground, playButton, customBarControlsClassName, qa, ratio, autoplay, onImageLoad, iframe, margins, videoMicrodata, } = props;
    const [hasVideoFallback, setHasVideoFallback] = useState(false);
    const { microdata } = useContext(InnerContext);
    const qaAttributes = getQaAttrubutes(qa, 'video');
    const content = useMemo(() => {
        let result = [];
        if (image) {
            result.push(React.createElement(Image, { key: "image", parallax: parallax, image: image, disableImageSliderForArrayInput: disableImageSliderForArrayInput, height: height, imageClassName: imageClassName, isBackground: isBackground, video: video, hasVideoFallback: hasVideoFallback, fullscreen: fullscreen, qa: qaAttributes.image, onLoad: onImageLoad }));
        }
        if (video) {
            const videoProps = {
                key: 'video',
                video,
                videoClassName,
                height,
                analyticsEvents,
                playVideo,
                previewImg,
                playButton,
                customBarControlsClassName,
                hasVideoFallback,
                setHasVideoFallback,
                ratio,
            };
            if (fullscreen) {
                result.push(React.createElement(FullscreenVideo, Object.assign({}, videoProps, { qa: qaAttributes.video })));
            }
            else {
                result.push(React.createElement(Video, Object.assign({}, videoProps, { qa: qaAttributes.video })));
            }
        }
        if (youtube || videoIframe) {
            result = (React.createElement(IframeVideoBlock, { className: b('youtube', youtubeClassName), record: youtube, videoIframe: videoIframe, attributes: { color: 'white', rel: '0' }, previewImg: previewImg, height: height, fullscreen: fullscreen, analyticsEvents: analyticsEvents, autoplay: autoplay, onImageLoad: onImageLoad }));
        }
        if (dataLens) {
            result = React.createElement(DataLens, { dataLens: dataLens });
        }
        if (iframe) {
            result = React.createElement(Iframe, { iframe: iframe, margins: margins });
        }
        return result;
    }, [
        image,
        video,
        videoIframe,
        youtube,
        dataLens,
        iframe,
        parallax,
        disableImageSliderForArrayInput,
        height,
        imageClassName,
        isBackground,
        hasVideoFallback,
        fullscreen,
        qaAttributes.image,
        qaAttributes.video,
        onImageLoad,
        videoClassName,
        analyticsEvents,
        playVideo,
        previewImg,
        playButton,
        customBarControlsClassName,
        ratio,
        youtubeClassName,
        autoplay,
        margins,
    ]);
    const videoMicrodataScript = useMemo(() => {
        var _a;
        const { name, description } = videoMicrodata || {};
        const json = JSON.stringify(Object.assign(Object.assign({ '@context': 'http://schema.org/', '@type': 'VideoObject', uploadDate: microdata === null || microdata === void 0 ? void 0 : microdata.contentUpdatedDate, contentUrl: ((_a = video === null || video === void 0 ? void 0 : video.src) === null || _a === void 0 ? void 0 : _a[0]) || videoIframe || youtube, thumbnailUrl: previewImg }, (videoMicrodata || {})), { name: name ? sanitizeMicrodata(name) : name, description: description ? sanitizeMicrodata(description) : description }));
        return video || youtube || videoIframe ? (React.createElement("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: json } })) : null;
    }, [microdata === null || microdata === void 0 ? void 0 : microdata.contentUpdatedDate, previewImg, video, videoIframe, videoMicrodata, youtube]);
    return (React.createElement("div", { className: b(null, className), style: { backgroundColor: color }, "data-qa": qa },
        videoMicrodataScript,
        content));
};
export default Media;
