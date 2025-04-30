import React from 'react';
import { Image, Title } from '../../components';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';
import { useTheme } from '../../context/theme';
import { block, getThemedValue } from '../../utils';
import './Companies.css';
const b = block('companies-block');
export const CompaniesBlock = ({ title, description, images, animated }) => {
    const theme = useTheme();
    const themedImages = getThemedValue(images, theme) || {};
    return (React.createElement(AnimateBlock, { className: b(), offset: 150, animate: animated },
        React.createElement("div", { className: b('content') },
            React.createElement(Title, { title: title, subtitle: description, colSizes: { all: 12, sm: 12 } }),
            React.createElement("div", { className: b('images') },
                React.createElement(Image, Object.assign({}, themedImages, { className: b('image') }))))));
};
export default CompaniesBlock;
