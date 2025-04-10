import React from 'react';
import { AuthorType } from '../../models';
import { block } from '../../utils';
import { getMediaImage } from '../Media/Image/utils';
import { Image } from '../index';
import './Author.css';
const b = block('author');
const Author = (props) => {
    const { author, className, authorContainerClassName, type = AuthorType.Column, qa, theme, } = props;
    const { firstName, secondName, description, avatar } = author;
    const name = secondName ? `${firstName} ${secondName}` : firstName;
    const isAvatarJSX = React.isValidElement(avatar);
    let avatarProps = {};
    if (!isAvatarJSX && avatar) {
        avatarProps = getMediaImage(avatar);
    }
    return (React.createElement("div", { className: b({ type, theme }, className), "data-qa": qa },
        avatar && (React.createElement("div", { className: b('avatar', authorContainerClassName) }, isAvatarJSX ? avatar : React.createElement(Image, Object.assign({}, avatarProps)))),
        React.createElement("div", { className: b('label') },
            React.createElement("div", { className: b('name') }, name),
            description && React.createElement("div", { className: b('description') }, description))));
};
export default Author;
