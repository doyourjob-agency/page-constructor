import React from 'react';

import {ReportFile} from '../../../components';
import {ReportsSectionsItem} from '../../../models';
import {block} from '../../../utils';

import './Item.scss';

const b = block('reports-sections-item');

export const Item = ({title, files}: ReportsSectionsItem) => (
    <div className={b()}>
        <div className={b('wrap')}>
            <div className={b('title')}>{title}</div>
        </div>
        {files?.length && (
            <div className={b('files')}>
                {files.map((file) => (
                    <ReportFile key={file.link} {...file} outline />
                ))}
            </div>
        )}
    </div>
);

export default Item;
