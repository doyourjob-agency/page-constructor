import React, { Children, Fragment } from 'react';
import { block } from '../../../utils';
import { EditModeItem } from '../../types';
import DeviceEmulation from '../DeviceEmulation/DeviceEmulation';
import './Layout.css';
const b = block('editor-layout');
const Left = () => null;
const Right = () => null;
// TODO in https://github.com/gravity-ui/page-constructor/issues/884 this component will be disappeared
const Layout = ({ children, editMode, viewMode }) => {
    let left, right;
    const isEditingMode = editMode === EditModeItem.Form;
    function handleChild(child) {
        switch (child === null || child === void 0 ? void 0 : child.type) {
            case Left:
                left = child === null || child === void 0 ? void 0 : child.props.children;
                break;
            case Right:
                right = child === null || child === void 0 ? void 0 : child.props.children;
                break;
        }
    }
    if (React.Children.toArray(children).length) {
        Children.forEach(children, handleChild);
    }
    return (React.createElement("div", { className: b('container') },
        React.createElement(Fragment, null,
            left && React.createElement("div", { className: b('left') }, left),
            right && (React.createElement("div", { className: b('right', { editing: isEditingMode }) },
                React.createElement(DeviceEmulation, { mode: viewMode }, right))))));
};
Layout.Left = Left;
Layout.Right = Right;
export default Layout;
