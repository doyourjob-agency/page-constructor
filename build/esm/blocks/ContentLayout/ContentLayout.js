import React, { useContext, useMemo } from 'react';
import { BackgroundImage, FileLink } from '../../components';
import { MobileContext } from '../../context/mobileContext';
import { useTheme } from '../../context/theme';
import { Col } from '../../grid';
import { Content } from '../../sub-blocks';
import { block, getThemedValue } from '../../utils';
import './ContentLayout.css';
const b = block('content-layout-block');
function getFileTextSize(size) {
    switch (size) {
        case 's':
            return 's';
        case 'l':
        default:
            return 'l';
    }
}
function getTextWidth(size) {
    switch (size) {
        case 's':
            return { all: 12, md: 6 };
        case 'l':
            return { all: 12, md: 12 };
        case 'm':
        default:
            return { all: 12, md: 8 };
    }
}
export const ContentLayoutBlock = (props) => {
    const isMobile = useContext(MobileContext);
    const { textContent, fileContent, size = 'l', background, centered, theme = 'default', textWidth = 'm', } = props;
    const colSizes = useMemo(() => getTextWidth(textWidth), [textWidth]);
    const globalTheme = useTheme();
    const themedBackground = getThemedValue(background, globalTheme);
    return (React.createElement("div", { className: b({ size, theme, background: Boolean(background) }) },
        React.createElement(Content, Object.assign({ className: b('content') }, textContent, { size: size, centered: centered, colSizes: colSizes, theme: theme })),
        fileContent && (React.createElement(Col, { className: b('files', { size, centered }), reset: true, sizes: colSizes }, fileContent.map((file) => (React.createElement(FileLink, Object.assign({ className: b('file') }, file, { key: file.href, type: "horizontal", textSize: getFileTextSize(size), theme: theme })))))),
        background && (React.createElement("div", { className: b('background') },
            React.createElement(BackgroundImage, Object.assign({ className: b('background-item') }, themedBackground, { hide: isMobile }))))));
};
export default ContentLayoutBlock;
