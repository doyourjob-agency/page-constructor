import React from 'react';

import {ScienceFeedBlockProps} from '../../models';

import ScienceFeedHeader from './ScienceFeedHeader/ScienceFeedHeader';
import ScienceFeedPosts from './ScienceFeedPosts/ScienceFeedPosts';

export const ScienceFeedBlock = (props: ScienceFeedBlockProps) => (
    <React.Fragment>
        <ScienceFeedHeader {...props} />
        <ScienceFeedPosts />
    </React.Fragment>
);
export default ScienceFeedBlock;
