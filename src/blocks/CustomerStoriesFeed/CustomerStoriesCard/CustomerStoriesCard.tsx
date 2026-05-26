import React, {useMemo} from 'react';

import {ButtonTheme} from '../../../models';
import {LayoutItem} from '../../../sub-blocks';

type CustomerStoriesCardProps = {
    image: string;
    title: string;
    description?: string;
    url: string;
};

export const CustomerStoriesCard = ({image, title, description, url}: CustomerStoriesCardProps) => {
    const media = useMemo(() => ({image}), [image]);
    const content = useMemo(
        () => ({
            title: title,
            text: description,
            buttons: [
                {
                    text: 'Read the story',
                    theme: 'outlined' as ButtonTheme,
                    url: url,
                },
            ],
        }),
        [description, title, url],
    );
    return <LayoutItem media={media} content={content} />;
};

export default React.memo(CustomerStoriesCard);
