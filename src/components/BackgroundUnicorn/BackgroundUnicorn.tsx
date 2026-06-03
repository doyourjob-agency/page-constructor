import React from 'react';

import {UnicornScene} from '..';
import {Block, ConstructorBlock} from '../../models';
import {block} from '../../utils';

import './BackgroundUnicorn.scss';

const b = block('background-unicorn');

const BackgroundUnicorn = (props: ConstructorBlock) => {
    const {blockUnicorn, blockUnicornSdkUrl} = props as Block;
    if (!blockUnicorn || typeof blockUnicorn !== 'string') {
        return null;
    }

    return (
        <div className={b()}>
            <UnicornScene
                className={b('item')}
                jsonFilePath={blockUnicorn}
                sdkUrl={blockUnicornSdkUrl}
                width="100%"
                play={true}
            />
        </div>
    );
};

export default BackgroundUnicorn;
