import React from 'react';

import FeedHeader from '../../components/FeedHeader/FeedHeader';
import {EventsFeedBlockProps} from '../../models';

import PartnersFeedSection from './PartnersFeedSection/PartnersFeedSection';

export const PartnersFeedBlock = ({image, title}: EventsFeedBlockProps) => (
    <React.Fragment>
        <FeedHeader image={image} title={title} />
        <PartnersFeedSection />
    </React.Fragment>
);
export default PartnersFeedBlock;
