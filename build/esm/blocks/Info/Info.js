import React from 'react';
import { useTheme } from '../../context/theme';
import { Col, Grid, Row } from '../../grid';
import Content from '../../sub-blocks/Content/Content';
import { block, getThemedValue } from '../../utils';
import './Info.css';
const b = block('info-block');
const sizes = { md: 6, all: 12 };
export const InfoBlock = (props) => {
    const { backgroundColor, theme: blockTheme = 'dark', buttons = [], title, sectionsTitle, links = [], rightContent = {}, leftContent = {}, } = props;
    const theme = useTheme();
    const contentTheme = blockTheme === 'dark' ? 'dark' : 'default';
    const rightLinks = [
        ...((rightContent === null || rightContent === void 0 ? void 0 : rightContent.links) || []),
        ...links.map((link) => (Object.assign(Object.assign({}, link), { arrow: true, theme: 'normal' }))),
    ];
    const leftButtons = [...buttons, ...((leftContent === null || leftContent === void 0 ? void 0 : leftContent.buttons) || [])];
    const commonProps = {
        colSizes: { all: 12, md: 12 },
        className: b('content'),
        theme: contentTheme,
    };
    return (React.createElement("div", { className: b() },
        React.createElement("div", { className: b('container'), style: { backgroundColor: getThemedValue(backgroundColor, theme) } },
            React.createElement(Grid, null,
                React.createElement(Row, null,
                    React.createElement(Col, { sizes: sizes, className: b('left') },
                        React.createElement(Content, Object.assign({ title: title || (leftContent === null || leftContent === void 0 ? void 0 : leftContent.title), text: leftContent === null || leftContent === void 0 ? void 0 : leftContent.text, links: leftContent === null || leftContent === void 0 ? void 0 : leftContent.links, list: leftContent === null || leftContent === void 0 ? void 0 : leftContent.list, buttons: leftButtons, additionalInfo: leftContent === null || leftContent === void 0 ? void 0 : leftContent.additionalInfo }, commonProps))),
                    React.createElement(Col, { sizes: sizes, className: b('right') },
                        React.createElement(Content, Object.assign({ title: sectionsTitle || (rightContent === null || rightContent === void 0 ? void 0 : rightContent.title), text: rightContent === null || rightContent === void 0 ? void 0 : rightContent.text, links: rightLinks, list: rightContent === null || rightContent === void 0 ? void 0 : rightContent.list, buttons: rightContent === null || rightContent === void 0 ? void 0 : rightContent.buttons, additionalInfo: rightContent === null || rightContent === void 0 ? void 0 : rightContent.additionalInfo }, commonProps))))))));
};
export default InfoBlock;
