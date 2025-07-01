import React from 'react';

import {ReportsSectionsSection} from '../../../models';
import {block} from '../../../utils';
import Item from '../Item/Item';

import './Section.scss';

const b = block('reports-sections-section');

export const Section = ({title, date, items}: ReportsSectionsSection) => (
    <div className={b()}>
        {date && <div className={b('date')}>{date}</div>}
        {title && <h2 className={b('title')}>{title}</h2>}
        {items?.length && (
            <div className={b('files')}>
                {items.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </div>
        )}
    </div>
);

export default Section;
