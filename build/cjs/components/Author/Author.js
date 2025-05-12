"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const utils_2 = require("../Media/Image/utils");
const index_1 = require("../index");
const b = (0, utils_1.block)('author');
const Author = (props) => {
    const { author, className, authorContainerClassName, type = models_1.AuthorType.Column, qa, theme, } = props;
    const { firstName, secondName, description, avatar } = author;
    const name = secondName ? `${firstName} ${secondName}` : firstName;
    const isAvatarJSX = react_1.default.isValidElement(avatar);
    let avatarProps = {};
    if (!isAvatarJSX && avatar) {
        avatarProps = (0, utils_2.getMediaImage)(avatar);
    }
    return (react_1.default.createElement("div", { className: b({ type, theme }, className), "data-qa": qa },
        avatar && (react_1.default.createElement("div", { className: b('avatar', authorContainerClassName) }, isAvatarJSX ? avatar : react_1.default.createElement(index_1.Image, Object.assign({}, avatarProps)))),
        react_1.default.createElement("div", { className: b('label') },
            react_1.default.createElement("div", { className: b('name') }, name),
            description && react_1.default.createElement("div", { className: b('description') }, description))));
};
exports.default = Author;
