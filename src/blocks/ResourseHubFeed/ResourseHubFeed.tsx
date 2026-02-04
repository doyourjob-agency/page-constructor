import React from 'react';

import FeedHeader from '../../components/FeedHeader/FeedHeader';
import {ResourseHubFeedBlockProps} from '../../models';

import ResourseHubFeedSection from './ResourseHubFeedSection/ResourseHubFeedSection';

export const ResourseHubFeedBlock = ({image, title}: ResourseHubFeedBlockProps) => (
    <React.Fragment>
        <FeedHeader image={image} title={title} />
        <ResourseHubFeedSection />
    </React.Fragment>
);

export default ResourseHubFeedBlock;
