import { __rest } from "tslib";
import React, { forwardRef } from 'react';
import { getColClass } from '../utils';
export const Col = forwardRef((props, ref) => {
    const { children, style, qa, role } = props, rest = __rest(props, ["children", "style", "qa", "role"]);
    return (React.createElement("div", { ref: ref, className: getColClass(rest), style: style, "data-qa": qa, role: role }, children));
});
Col.displayName = 'Col';
