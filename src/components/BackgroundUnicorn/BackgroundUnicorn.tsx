import React from 'react';

import UnicornScene from 'unicornstudio-react';

import {ConstructorBlock} from '../../models';
import {block} from '../../utils';

import './BackgroundUnicorn.scss';

const b = block('background-unicorn');

const BackgroundUnicorn = (props: ConstructorBlock) => {
    if (!('blockUnicorn' in props) || typeof props.blockUnicorn !== 'string') {
        return null;
    }

    return (
        <div className={b()}>
            <UnicornScene className={b('item')} jsonFilePath={props.blockUnicorn} width="100%" />
        </div>
    );
};

export default BackgroundUnicorn;
