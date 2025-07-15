import React from 'react';

import {Link} from '../../components';
import {TabLinksBlockProps} from '../../models';
import {block} from '../../utils';

import './TabLinks.scss';

const b = block('tab-links-block');

export const TabLinksBlock = ({items}: TabLinksBlockProps) => {
    return (
        <div className={b()} role="tablist" aria-orientation="horizontal">
            <div className={b('scroll')}>
                {items.map((item, index) => (
                    <Link
                        tabIndex={-1}
                        extraProps={{
                            role: 'tab',
                            'aria-selected': item.active ? 'true' : 'false',
                        }}
                        key={index}
                        url={item.url}
                        text={item.text}
                        className={b('item', {active: item.active})}
                        theme="normal"
                    />
                ))}
            </div>
        </div>
    );
};

export default TabLinksBlock;
