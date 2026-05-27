import React from 'react';

import FeedHeader from '../../components/FeedHeader/FeedHeader';
import {EventsFeedBlockProps} from '../../models';

import PartnersFeedSection from './PartnersFeedSection/PartnersFeedSection';

export const PartnersFeedBlock = ({image, title, text}: EventsFeedBlockProps) => (
    <React.Fragment>
        <FeedHeader image={image} title={title} text={text} />
        <PartnersFeedSection />
    </React.Fragment>
);
export default PartnersFeedBlock;
