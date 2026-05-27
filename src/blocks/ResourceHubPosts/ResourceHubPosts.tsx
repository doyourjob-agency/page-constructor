import React from 'react';

import FeedHeader from '../../components/FeedHeader/FeedHeader';
import {ResourceHubPostsBlockProps} from '../../models';

import ResourceHubPostsSection from './ResourceHubPostsSection/ResourceHubPostsSection';

export const ResourceHubPostsBlock = ({image, title, text}: ResourceHubPostsBlockProps) => (
    <React.Fragment>
        <FeedHeader image={image} title={title} text={text} />
        <ResourceHubPostsSection />
    </React.Fragment>
);

export default ResourceHubPostsBlock;
