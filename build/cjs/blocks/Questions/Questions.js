"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const grid_1 = require("../../grid");
const sub_blocks_1 = require("../../sub-blocks");
const utils_1 = require("../../utils");
const QuestionBlockItem_1 = require("./QuestionBlockItem/QuestionBlockItem");
const models_1 = require("./models");
const b = (0, utils_1.block)('QuestionsBlock');
const QuestionsBlock = (props) => {
    const { title, text, additionalInfo, links, buttons, items, list } = props;
    const [opened, setOpened] = (0, react_1.useState)([0]);
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
    return (react_1.default.createElement("div", { className: b(), itemScope: true, itemType: models_1.FaqMicrodataValues.PageType, itemID: models_1.FaqMicrodataValues.PageId },
        react_1.default.createElement(grid_1.Row, null,
            react_1.default.createElement(grid_1.Col, { sizes: { all: 12, md: 4 } },
                react_1.default.createElement("div", { className: b('title') },
                    react_1.default.createElement(sub_blocks_1.Content, { title: title, text: text, additionalInfo: additionalInfo, links: links, list: list, buttons: buttons, colSizes: { all: 12, md: 12 } }))),
            react_1.default.createElement(grid_1.Col, { sizes: { all: 12, md: 8 }, role: 'list' }, items.map(({ title: itemTitle, text: itemText, link, listStyle = 'dash' }, index) => {
                const isOpened = opened.includes(index);
                const onClick = () => toggleItem(index);
                return (react_1.default.createElement(QuestionBlockItem_1.QuestionBlockItem, { key: itemTitle, title: itemTitle, text: itemText, link: link, listStyle: listStyle, isOpened: isOpened, onClick: onClick }));
            })))));
};
exports.default = QuestionsBlock;
