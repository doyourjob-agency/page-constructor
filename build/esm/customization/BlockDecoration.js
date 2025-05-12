import { __rest } from "tslib";
import React, { Fragment, useContext } from 'react';
import { InnerContext } from '../context/innerContext';
export const BlockDecoration = (_a) => {
    var _b, _c;
    var { children: blockChildren } = _a, rest = __rest(_a, ["children"]);
    const blockDecorators = (_c = (_b = useContext(InnerContext).customization) === null || _b === void 0 ? void 0 : _b.decorators) === null || _c === void 0 ? void 0 : _c.block;
    const content = blockDecorators
        ? blockDecorators.reduce((children, decorator) => decorator(Object.assign({ children }, rest)), blockChildren)
        : blockChildren;
    return React.createElement(Fragment, null, content);
};
