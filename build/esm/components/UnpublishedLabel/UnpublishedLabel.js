import React from 'react';
import { block } from '../../utils';
import { i18n } from './i18n';
import './UnpublishedLabel.css';
const b = block('unpublished-label');
const UnpublishedLabel = ({ className, children, type = 'line', }) => (React.createElement("div", { className: b({ type }, className) }, children || i18n('label_non_published')));
export default UnpublishedLabel;
