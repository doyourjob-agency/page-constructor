import React from 'react';

import {BackgroundImageProps} from '../../models';
import {block, getQaAttrubutes} from '../../utils';
import Image from '../Image/Image';
import {getMediaImage} from '../Media/Image/utils';

import './BackgroundImage.scss';

export const qaIdByDefault = 'background-image';

const b = block('storage-background-image');

const BackgroundImage = (props: React.PropsWithChildren<BackgroundImageProps>) => {
    const {children, src, desktop, className, hoverImage, imageClassName, style, hide, qa} = props;
    const qaAttributes = getQaAttrubutes(qa || qaIdByDefault);

    return (
        <div className={b(null, className)} style={style} data-qa={qa || qaIdByDefault}>
            {(src || desktop) && !hide && (
                <React.Fragment>
                    <Image
                        {...props}
                        className={b('img', imageClassName)}
                        qa={qaAttributes.image}
                    />
                    {hoverImage && (
                        <Image
                            {...getMediaImage(hoverImage || '')}
                            className={b('img', {hover: true}, imageClassName)}
                            qa={qaAttributes.image}
                        />
                    )}
                </React.Fragment>
            )}
            {children && <div className={b('container')}>{children}</div>}
        </div>
    );
};

export default BackgroundImage;
