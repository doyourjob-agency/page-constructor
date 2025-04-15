import React, { useState } from 'react';
import { Col, Row } from '../../grid';
import { Content } from '../../sub-blocks';
import { block } from '../../utils';
import { QuestionBlockItem } from './QuestionBlockItem/QuestionBlockItem';
import { FaqMicrodataValues } from './models';
import './Questions.css';
const b = block('QuestionsBlock');
const QuestionsBlock = (props) => {
    const { title, text, additionalInfo, links, buttons, items, list } = props;
    const [opened, setOpened] = useState([0]);
    const toggleItem = (index) => {
        let newState;
        if (opened.includes(index)) {
            newState = opened.filter((itemIndex) => itemIndex !== index);
        }
        else {
            newState = [...opened, index];
        }
        setOpened(newState);
    };
    return (React.createElement("div", { className: b(), itemScope: true, itemType: FaqMicrodataValues.PageType, itemID: FaqMicrodataValues.PageId },
        React.createElement(Row, null,
            React.createElement(Col, { sizes: { all: 12, md: 4 } },
                React.createElement("div", { className: b('title') },
                    React.createElement(Content, { title: title, text: text, additionalInfo: additionalInfo, links: links, list: list, buttons: buttons, colSizes: { all: 12, md: 12 } }))),
            React.createElement(Col, { sizes: { all: 12, md: 8 }, role: 'list' }, items.map(({ title: itemTitle, text: itemText, link, listStyle = 'dash' }, index) => {
                const isOpened = opened.includes(index);
                const onClick = () => toggleItem(index);
                return (React.createElement(QuestionBlockItem, { key: itemTitle, title: itemTitle, text: itemText, link: link, listStyle: listStyle, isOpened: isOpened, onClick: onClick }));
            })))));
};
export default QuestionsBlock;
