import React from 'react';
import { block } from '../../../utils';
import Navigation from '../../components/Navigation/Navigation';
import './Layout.css';
const b = block('layout');
const Layout = ({ children, navigation }) => (React.createElement("div", { className: b() },
    navigation &&
        (navigation.renderNavigation ? (navigation.renderNavigation()) : (React.createElement(Navigation, { data: navigation.header, logo: navigation.logo, className: b('navigation') }))),
    React.createElement("main", { className: b('content') }, children)));
export default Layout;
