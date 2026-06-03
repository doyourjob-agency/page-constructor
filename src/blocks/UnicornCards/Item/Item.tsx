import React, {useState} from 'react';

import {UnicornScene} from '../../../components';
import {BREAKPOINTS} from '../../../constants';
import useWindowBreakpoint from '../../../hooks/useWindowBreakpoint';
import {UnicornCardsItemProps} from '../../../models';
import {block} from '../../../utils';

import './Item.scss';

const b = block('unicorn-cards-item');

export const Item = ({
    title,
    text,
    unicorn,
    unicornSdkUrl,
    previewImage,
}: UnicornCardsItemProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const breakpoint = useWindowBreakpoint();
    const isMobile = breakpoint < BREAKPOINTS.md;

    const showPreview = isMobile && previewImage;
    const showUnicorn = !isMobile && unicorn;

    return (
        <div
            className={b()}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {title && <div className={b('title')}>{title}</div>}
            {text && <div className={b('text')}>{text}</div>}
            <div className={b('background')}>
                {showPreview && (
                    <img src={previewImage} className={b('preview-image')} alt={title} />
                )}
                {showUnicorn && (
                    <UnicornScene
                        className={b('background-item')}
                        jsonFilePath={unicorn}
                        sdkUrl={unicornSdkUrl}
                        width="100%"
                        play={isHovered}
                    />
                )}
            </div>
        </div>
    );
};

export default Item;
