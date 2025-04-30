import React from 'react';
import RootCn from '../../../components/RootCn';
import Navigation from './../../components/Navigation/Navigation';
const Standalone = (props) => (React.createElement(RootCn, null,
    React.createElement(Navigation, Object.assign({}, props))));
export default Standalone;
