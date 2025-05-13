import React from 'react';
import { block } from '../../utils';
import Button from '../Button/Button';
import './Buttons.css';
const b = block('buttons');
function getButtonSize(size) {
    switch (size) {
        case 's':
            return 'm';
        case 'l':
        default:
            return 'xl';
    }
}
const Buttons = ({ className, titleId, buttons, size = 's', qa, buttonQa }) => buttons ? (React.createElement("div", { className: b({ size }, className), "data-qa": qa }, buttons.map((item) => (React.createElement(Button, Object.assign({ className: b('button') }, item, { key: item.url, size: getButtonSize(size), qa: buttonQa, extraProps: Object.assign({ 'aria-describedby': item.urlTitle ? undefined : titleId }, item.extraProps) })))))) : null;
export default Buttons;
