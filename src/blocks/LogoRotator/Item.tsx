import React from 'react';

import {Link} from '@gravity-ui/uikit';

import {Image} from '../../components';
import {Col} from '../../grid';
import {LogoRotatorBlockProps} from '../../models';
import {block} from '../../utils';

import './LogoRotator.scss';

const b = block('logo-rotator-block');

const defaultColSizes = {all: 3};

type Props = {
    src: string;
    url: string;
    hidden: boolean;
    colSizes: LogoRotatorBlockProps['colSizes'];
};

export const Item = ({url, src, hidden, colSizes}: Props) => {
    const renderItem = React.useMemo(
        () => (
            <Link href={url} className={b('item', {hidden})}>
                <Image src={src} className={b('image')} alt="" aria-hidden="true" />
            </Link>
        ),
        [hidden, src, url],
    );

    return <Col sizes={colSizes || defaultColSizes}>{renderItem}</Col>;
};

export default React.memo(Item);
