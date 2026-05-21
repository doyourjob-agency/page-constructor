import React from 'react';

import {MediaComponentIframeProps} from '../../../models';
import {block} from '../../../utils';

import {i18n} from './i18n';

import './Iframe.scss';

const b = block('media-component-iframe');

const Iframe = (props: MediaComponentIframeProps) => {
    const {iframe, margins = true} = props;
    const {height = 400, src, width, name, title} = iframe;

    return iframe ? (
        <div className={b({margins})} style={{height}}>
            <iframe
                className={b('item')}
                loading="lazy"
                title={title || i18n('iframe-title')}
                frameBorder={0}
                src={src}
                width={width}
                height={height}
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
