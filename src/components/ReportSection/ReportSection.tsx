import React from 'react';

import {ReportSectionProps} from '../../models';
import {block} from '../../utils';

import Item from './Item/Item';

import './ReportSection.scss';

const b = block('report-section');

export const ReportSection = ({title, date, items = []}: ReportSectionProps) => (
    <div className={b()}>
        {date && <div className={b('date')}>{date}</div>}
        {title && <h2 className={b('title')}>{title}</h2>}
        {Boolean(items.length) && (
            <ul className={b('files')}>
                {items.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </ul>
        )}
    </div>
);

export default ReportSection;
