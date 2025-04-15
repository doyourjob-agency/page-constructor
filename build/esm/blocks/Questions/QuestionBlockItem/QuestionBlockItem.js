import React from 'react';
import { useActionHandlers } from '@gravity-ui/uikit';
import { Foldable, HTML, ToggleArrow, YFMWrapper } from '../../../components';
import Link from '../../../components/Link/Link';
import { block } from '../../../utils';
import { FaqMicrodataValues } from '../models';
import './QuestionBlockItem.css';
const b = block('QuestionsBlockItem');
export const QuestionBlockItem = ({ title: itemTitle, text: itemText, link, listStyle = 'dash', isOpened, onClick, }) => {
    const { onKeyDown } = useActionHandlers(onClick);
    return (React.createElement("div", { className: b(), itemScope: true, itemProp: FaqMicrodataValues.QuestionProp, itemType: FaqMicrodataValues.QuestionType, role: 'listitem' },
        React.createElement("button", { className: b('title'), onClick: onClick, "aria-expanded": isOpened, onKeyDown: onKeyDown },
            React.createElement(HTML, { itemProp: FaqMicrodataValues.QuestionNameProp }, itemTitle),
            React.createElement(ToggleArrow, { open: isOpened, size: 16, type: 'vertical', iconType: "navigation", className: b('arrow') })),
        React.createElement(Foldable, { isOpened: isOpened },
            React.createElement("div", { className: b('text'), itemScope: true, itemProp: FaqMicrodataValues.AnswerProp, itemType: FaqMicrodataValues.AnswerType, "aria-hidden": !isOpened },
                React.createElement(YFMWrapper, { content: itemText, modifiers: {
                        constructor: true,
                        constructorListStyle: true,
                        constructorListStyleDash: listStyle === 'dash',
                    }, itemProp: FaqMicrodataValues.QuestionTextProp }),
                link && React.createElement(Link, Object.assign({}, link, { tabIndex: isOpened ? 0 : -1, className: b('link') }))))));
};
