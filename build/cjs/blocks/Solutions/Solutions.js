"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionsBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const components_1 = require("../../components");
const solutionsContext_1 = require("../../context/solutionsContext");
const grid_1 = require("../../grid");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('solutions-block');
const colSizes = {
    all: 12,
    sm: 6,
    lg: 4,
};
const SolutionsBlock = () => {
    const { items } = (0, react_1.useContext)(solutionsContext_1.SolutionsContext);
    return (react_1.default.createElement(grid_1.Grid, { className: b() },
        react_1.default.createElement(grid_1.Row, { className: b('cards') }, items.map((card) => (react_1.default.createElement(grid_1.Col, { key: card.slug, className: b('card'), sizes: colSizes },
            react_1.default.createElement(components_1.CardBase, { url: `/solutions/${card.slug}` },
                react_1.default.createElement(components_1.CardBase.Content, null,
                    react_1.default.createElement(components_1.Image, { className: b('icon'), src: card.image, alt: "", "aria-hidden": "true" }),
                    react_1.default.createElement("h5", { className: b('title') },
                        react_1.default.createElement("span", null, card.name)),
                    react_1.default.createElement(components_1.HTML, null, card.description)))))))));
};
exports.SolutionsBlock = SolutionsBlock;
exports.default = exports.SolutionsBlock;
