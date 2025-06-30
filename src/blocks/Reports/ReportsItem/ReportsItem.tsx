import React from 'react';

import {ReportFile} from '../../../components';
import {ReportsItemProps} from '../../../models';
import {block} from '../../../utils';

import './ReportsItem.scss';

const b = block('reports-item');

export const ReportsItem = ({title, date, text, files, filesOutline}: ReportsItemProps) => (
    <div className={b()}>
        <div className={b('wrap')}>
            <div className={b('title')}>{title}</div>
            {(date || text) && (
                <div className={b('info')}>
                    {date && <div className={b('date')}>{date}</div>}
                    {date && text && <div className={b('dot')} />}
                    {text && <div className={b('text')}>{text}</div>}
                </div>
            )}
        </div>
        {files?.length && (
            <div className={b('files')}>
                {files.map((file) => (
                    <ReportFile key={file.link} {...file} outline={filesOutline} />
                ))}
            </div>
        )}
    </div>
);

export default ReportsItem;
