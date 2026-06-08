import React from 'react';

import {Link} from '@gravity-ui/uikit';

import {Image} from '../../components';
import {Col, GridColumnSize} from '../../grid';
import type {GridColumnSizesType} from '../../grid';
import {LogoRotatorBlockProps} from '../../models';
import {block} from '../../utils';

import {getLayerModifiers} from './utils';
import type {LogoRotatorLayer, LogoRotatorSwapAnimation} from './utils';

import './LogoRotator.scss';

const b = block('logo-rotator-block');

const defaultColSizes: GridColumnSizesType = {all: 3};
const maxMobileColSize = 6;

type Props = {
    src: string;
    url?: string;
    previousSrc?: string;
    previousUrl?: string;
    swapAnimation: LogoRotatorSwapAnimation;
    colSizes: LogoRotatorBlockProps['colSizes'];
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};

const getLayerClassName = (
    layer: LogoRotatorLayer,
    swapAnimation: LogoRotatorSwapAnimation,
    link = false,
) =>
    `${link ? `${b('item-link')} ` : ''}${b(
        'logo-layer',
        getLayerModifiers(layer, swapAnimation),
    )}`;

const getColSizes = (colSizes: LogoRotatorBlockProps['colSizes']): GridColumnSizesType => {
    const sizes: GridColumnSizesType = {...(colSizes || defaultColSizes)};

    [GridColumnSize.All, GridColumnSize.Sm].forEach((size) => {
        const colSize = sizes[size];

        if (colSize !== undefined) {
            sizes[size] = Math.min(colSize, maxMobileColSize);
        }
    });

    return sizes;
};

export const Item = ({
    url,
    src,
    previousSrc,
    previousUrl,
    swapAnimation,
    colSizes,
    onMouseEnter,
    onMouseLeave,
}: Props) => {
    const renderLayer = (layerSrc: string, layer: LogoRotatorLayer, layerUrl?: string) => {
        const image = <Image src={layerSrc} className={b('image')} alt="" aria-hidden="true" />;

        if (layerUrl) {
            return (
                <Link href={layerUrl} className={getLayerClassName(layer, swapAnimation, true)}>
                    {image}
                </Link>
            );
        }

        return <div className={getLayerClassName(layer, swapAnimation)}>{image}</div>;
    };

    const isSwapping = Boolean(previousSrc);

    return (
        <Col sizes={getColSizes(colSizes)}>
            <div
                className={b('item', {swapping: isSwapping})}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {previousSrc && renderLayer(previousSrc, 'from', previousUrl)}
                {renderLayer(src, previousSrc ? 'to' : 'current', url)}
            </div>
        </Col>
    );
};

export default React.memo(Item);
