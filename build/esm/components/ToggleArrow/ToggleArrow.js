import React from 'react';
import { Icon } from '@gravity-ui/uikit';
import { Chevron, NavigationChevron } from '../../icons';
import { block } from '../../utils';
import './ToggleArrow.css';
const b = block('ToggleArrow');
const ToggleArrow = ({ type = 'horizontal', iconType = 'default', open = false, size = 16, thin = false, slow = false, className, }) => (React.createElement(Icon, { className: b({ type, open, thin, slow }, className), data: iconType === 'navigation' ? NavigationChevron : Chevron, size: size }));
export default ToggleArrow;
