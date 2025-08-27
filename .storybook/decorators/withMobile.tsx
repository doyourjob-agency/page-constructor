import React from 'react';
import {StoryFn, StoryContext} from '@storybook/react-webpack5';
import {MobileProvider} from '@gravity-ui/uikit';

export function withMobile(Story: StoryFn, context: StoryContext) {
    const platform = context.globals.platform;

    return (
        <MobileProvider mobile={platform === 'mobile'} platform={platform}>
            <Story {...context} />
        </MobileProvider>
    );
}
