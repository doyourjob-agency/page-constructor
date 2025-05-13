import { __rest } from "tslib";
import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { AnimateBlock, BackgroundImage, Title } from '../../components';
import { useTheme } from '../../context/theme';
import { Col, Row } from '../../grid';
import { block, getThemedValue } from '../../utils';
import './CardLayout.css';
const DEFAULT_SIZES = {
    all: 12,
    sm: 6,
    md: 4,
};
const b = block('card-layout-block');
const CardLayout = ({ title, description, animated, colSizes = DEFAULT_SIZES, children, className, titleClassName, background, }) => {
    const theme = useTheme();
    const _a = getThemedValue(background || {}, theme), { border } = _a, backgroundImageProps = __rest(_a, ["border"]);
    return (React.createElement(AnimateBlock, { className: b(null, className), animate: animated },
        (title || description) && (React.createElement(Title, { title: title, subtitle: description, className: titleClassName })),
        React.createElement("div", { className: b('content', {
                'with-background': !isEmpty(background),
            }) },
            React.createElement(BackgroundImage, Object.assign({ className: b('image', { border }) }, backgroundImageProps)),
            React.createElement(Row, null, React.Children.map(children, (child, index) => (React.createElement(Col, { key: index, sizes: colSizes, className: b('item') }, child)))))));
};
export default CardLayout;
