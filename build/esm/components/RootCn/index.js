import React from 'react';
import { useTheme } from '../../context/theme';
import { rootCn } from '../../utils';
const RootCn = ({ className, children }) => {
    const theme = useTheme();
    return React.createElement("div", { className: rootCn({ theme }, className) }, children);
};
export default RootCn;
