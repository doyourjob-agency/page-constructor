import React, { Fragment, useContext } from 'react';
import { LocationContext } from '../../context/locationContext';
const RouterLink = ({ href, children }) => {
    const { Link } = useContext(LocationContext);
    return Link ? React.createElement(Link, { href: href }, children) : React.createElement(Fragment, null, children);
};
export default RouterLink;
