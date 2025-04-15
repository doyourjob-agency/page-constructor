import { __rest } from "tslib";
import React from 'react';
import { Col } from '../../grid';
import { block } from '../../utils';
import YFMWrapper from '../YFMWrapper/YFMWrapper';
import TitleItem from './TitleItem';
import './Title.css';
const b = block('title');
const Title = ({ title, subtitle, subtitleBold, className, colSizes = { all: 12, sm: 8 }, id, }) => {
    if (!title && !subtitle) {
        return null;
    }
    const _a = !title || typeof title === 'string' ? { text: title } : title, { text } = _a, titleProps = __rest(_a, ["text"]);
    return (React.createElement("div", { className: b(null, className), id: id },
        text && (React.createElement(Col, { reset: true, sizes: colSizes },
            React.createElement(TitleItem, Object.assign({ text: text }, titleProps)))),
        subtitle && (React.createElement(Col, { reset: true, sizes: colSizes },
            React.createElement("div", { className: b('description', {
                    titleSize: titleProps === null || titleProps === void 0 ? void 0 : titleProps.textSize,
                    bold: subtitleBold,
                }) },
                React.createElement(YFMWrapper, { content: subtitle, modifiers: { constructor: true } }))))));
};
export default Title;
