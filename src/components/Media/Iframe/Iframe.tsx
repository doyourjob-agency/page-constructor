import React, {useEffect, useState} from 'react';

import {MediaComponentIframeProps} from '../../../models';
import {block} from '../../../utils';

import {i18n} from './i18n';
import {getIframeHeight} from './utils';

import './Iframe.scss';

const b = block('media-component-iframe');

const getViewportWidth = () => (typeof window === 'undefined' ? 0 : window.innerWidth);

const Iframe = (props: MediaComponentIframeProps) => {
    const {iframe, margins = true} = props;
    const {height, src, width, name, title} = iframe;
    const shouldTrackViewportWidth = typeof height === 'object';
    const [viewportWidth, setViewportWidth] = useState(() =>
        shouldTrackViewportWidth ? getViewportWidth() : 0,
    );
    const resolvedHeight = getIframeHeight(height, viewportWidth);

    useEffect(() => {
        if (!shouldTrackViewportWidth) {
            return undefined;
        }

        const handleResize = () => setViewportWidth(getViewportWidth());

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [shouldTrackViewportWidth]);

    return iframe ? (
        <div className={b({margins})} style={{height: resolvedHeight}}>
            <iframe
                className={b('item')}
                loading="lazy"
                title={title || i18n('iframe-title')}
                frameBorder={0}
                src={src}
                width={width}
                height={resolvedHeight}
                name={name}
                /* 
                  1. allow: дает права на камеру, микрофон, полноэкранный режим 
                     и демонстрацию экрана (необходимы для Zoom).
                */
                allow="camera; microphone; fullscreen; display-capture;"
                /* 
                  2. sandbox: снимает ограничения на выполнение скриптов, 
                     отправку форм, всплывающие окна и сохраняет сессию.
                */
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            />
        </div>
    ) : null;
};

export default Iframe;
