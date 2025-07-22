import React from 'react';

import {ReportFile} from '../../components';
import {ReportItemProps} from '../../models';
import {block} from '../../utils';

import './ReportItem.scss';

const b = block('report-item');

const ReportItem = ({title, date, text, files, filesOutline}: ReportItemProps) => (
    <li className={b()}>
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
    </li>
);

export default React.memo(ReportItem);
