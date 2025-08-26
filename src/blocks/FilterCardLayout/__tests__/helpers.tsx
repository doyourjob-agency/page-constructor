import {composeStories} from '@storybook/react';

import * as FilterCardLayoutStories from '../__stories__/FilterCardLayout.stories';

export const {Default, WithDefaultAllTag, WithCustomAllTag} =
    composeStories(FilterCardLayoutStories);
