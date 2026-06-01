import React from 'react';

import UnicornSceneLib from 'unicornstudio-react';
import type {UnicornSceneProps} from 'unicornstudio-react';

export const UNICORN_STUDIO_SDK_URL =
    'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.0/dist/unicornStudio.umd.js';

const UnicornScene = (props: UnicornSceneProps) => {
    const {sdkUrl = UNICORN_STUDIO_SDK_URL, ...rest} = props;

    return <UnicornSceneLib sdkUrl={sdkUrl} {...rest} />;
};

export type {UnicornSceneProps};
export default UnicornScene;
