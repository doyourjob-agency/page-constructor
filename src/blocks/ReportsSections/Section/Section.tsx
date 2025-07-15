import React from 'react';

import {ReportsSectionsSection} from '../../../models';
import {block} from '../../../utils';
import Item from '../Item/Item';

import './Section.scss';

const b = block('reports-sections-section');

export const Section = ({title, date, items = []}: ReportsSectionsSection) => (
    <div className={b()}>
        {date && <div className={b('date')}>{date}</div>}
        {title && <h2 className={b('title')}>{title}</h2>}
        {Boolean(items.length) && (
            <ul className={b('files')}>
                {items.map((item, index) => (
                    <li key={index}>
                        <Item {...item} />
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default Section;
