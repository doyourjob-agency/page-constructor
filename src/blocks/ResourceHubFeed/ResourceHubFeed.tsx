import React from 'react';

import FeedHeader from '../../components/FeedHeader/FeedHeader';
import {ResourceHubPostsBlockProps} from '../../models';

import ResourceHubPostsSection from './ResourceHubFeedSection/ResourceHubFeedSection';

export const ResourceHubPostsBlock = ({image, title}: ResourceHubPostsBlockProps) => (
    <React.Fragment>
        <FeedHeader image={image} title={title} />
        <ResourceHubPostsSection />
    </React.Fragment>
);

export default ResourceHubPostsBlock;
