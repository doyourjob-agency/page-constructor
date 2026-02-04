import React from 'react';

import FeedHeader from '../../components/FeedHeader/FeedHeader';
import {ResourceHubFeedBlockProps} from '../../models';

import ResourceHubFeedSection from './ResourceHubFeedSection/ResourceHubFeedSection';

export const ResourceHubFeedBlock = ({image, title}: ResourceHubFeedBlockProps) => (
    <React.Fragment>
        <FeedHeader image={image} title={title} />
        <ResourceHubFeedSection />
    </React.Fragment>
);

export default ResourceHubFeedBlock;
