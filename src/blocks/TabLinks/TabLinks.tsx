import React from 'react';

import {Link} from '../../components';
import {TabLinksBlockProps} from '../../models';
import {block} from '../../utils';

import './TabLinks.scss';

const b = block('tab-links-block');

export const TabLinksBlock = ({items}: TabLinksBlockProps) => {
    return (
        <div className={b()}>
            {items.map((item, index) => (
                <Link
                    key={index}
                    url={item.url}
                    text={item.text}
                    className={b('item', {active: item.active})}
                    theme="normal"
                />
            ))}
        </div>
    );
};

export default TabLinksBlock;
