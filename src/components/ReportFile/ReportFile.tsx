import React from 'react';

import {ReportFileProps} from '../../models';
import {block} from '../../utils';

import './ReportFile.scss';

const b = block('report-file');

export const ReportFile = ({name, link, target, outlined}: ReportFileProps) => (
    <a className={b({outlined})} href={link} target={target}>
        {name}
    </a>
);

export default ReportFile;
