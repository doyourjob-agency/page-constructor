import React from 'react';

import {BackgroundImage} from '../../components';
import {Grid} from '../../grid';
import {block} from '../../utils';

import Controls, {ControlsProps} from './Controls/Controls';

import './FeedHeader.scss';

const b = block('feed-header');

interface FeedHeaderProps extends ControlsProps {
    image?: string;
}

export const FeedHeader = ({title, image}: FeedHeaderProps) => {
    return (
        <div className={b()}>
            <Grid className={b('content')}>
                {image && <BackgroundImage src={image} className={b('background')} />}
                <Controls title={title} />
            </Grid>
        </div>
    );
};

export default React.memo(FeedHeader);
