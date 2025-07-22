import React from 'react';

import {ReportFile} from '../../../components';
import {ReportSectionItemProps} from '../../../models';
import {block} from '../../../utils';

import './Item.scss';

const b = block('report-section-item');

export const Item = ({title, files = []}: ReportSectionItemProps) => (
    <li className={b()}>
        <div className={b('wrap')}>
            <div className={b('title')}>{title}</div>
        </div>
        {Boolean(files.length) && (
            <ul className={b('files')}>
                {files.map((file) => (
                    <li key={file.link}>
                        <ReportFile {...file} outlined />
                    </li>
                ))}
            </ul>
        )}
    </li>
);

export default Item;
