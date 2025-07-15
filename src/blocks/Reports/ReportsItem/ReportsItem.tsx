import React from 'react';

import {ReportFile} from '../../../components';
import {ReportsItemProps} from '../../../models';
import {block} from '../../../utils';

import './ReportsItem.scss';

const b = block('reports-item');

const ReportsItem = ({title, date, text, files, filesOutline}: ReportsItemProps) => (
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
        {Boolean(files?.length) && (
            <ul className={b('files')}>
                {files?.map((file) => (
                    <li key={file.link}>
                        <ReportFile {...file} outlined={filesOutline} />
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default React.memo(ReportsItem);
