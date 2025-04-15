"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionBlockItem = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const components_1 = require("../../../components");
const Link_1 = tslib_1.__importDefault(require("../../../components/Link/Link"));
const utils_1 = require("../../../utils");
const models_1 = require("../models");
const b = (0, utils_1.block)('QuestionsBlockItem');
const QuestionBlockItem = ({ title: itemTitle, text: itemText, link, listStyle = 'dash', isOpened, onClick, }) => {
    const { onKeyDown } = (0, uikit_1.useActionHandlers)(onClick);
    return (react_1.default.createElement("div", { className: b(), itemScope: true, itemProp: models_1.FaqMicrodataValues.QuestionProp, itemType: models_1.FaqMicrodataValues.QuestionType, role: 'listitem' },
        react_1.default.createElement("button", { className: b('title'), onClick: onClick, "aria-expanded": isOpened, onKeyDown: onKeyDown },
            react_1.default.createElement(components_1.HTML, { itemProp: models_1.FaqMicrodataValues.QuestionNameProp }, itemTitle),
            react_1.default.createElement(components_1.ToggleArrow, { open: isOpened, size: 16, type: 'vertical', iconType: "navigation", className: b('arrow') })),
        react_1.default.createElement(components_1.Foldable, { isOpened: isOpened },
            react_1.default.createElement("div", { className: b('text'), itemScope: true, itemProp: models_1.FaqMicrodataValues.AnswerProp, itemType: models_1.FaqMicrodataValues.AnswerType, "aria-hidden": !isOpened },
                react_1.default.createElement(components_1.YFMWrapper, { content: itemText, modifiers: {
                        constructor: true,
                        constructorListStyle: true,
                        constructorListStyleDash: listStyle === 'dash',
                    }, itemProp: models_1.FaqMicrodataValues.QuestionTextProp }),
                link && react_1.default.createElement(Link_1.default, Object.assign({}, link, { tabIndex: isOpened ? 0 : -1, className: b('link') }))))));
};
exports.QuestionBlockItem = QuestionBlockItem;
