import React from 'react';

import {ReportFileProps} from '../../models';
import {block} from '../../utils';

import './ReportFile.scss';

const b = block('report-file');

export const ReportFile = ({name, link, outline}: ReportFileProps) => (
    <a className={b({outline})} href={link}>
        {name}
    </a>
);

export default ReportFile;
