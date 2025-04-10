import React from 'react';
import { block } from '../../../utils';
import { getBlockId } from '../../utils';
import { i18n } from './i18n';
import './ErrorBoundary.css';
const b = block('error-boundary');
export class ErrorBoundary extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    componentDidCatch(error, info) {
        this.setState({ error: `${error.message} ${info === null || info === void 0 ? void 0 : info.componentStack}` });
    }
    render() {
        const { type, index } = this.props;
        const { error } = this.state;
        const header = type
            ? i18n('error-block-header', { id: getBlockId({ type, index }) })
            : i18n('error-page-header');
        if (this.state.error) {
            return (React.createElement("div", { className: b() },
                React.createElement("div", { className: b('container') },
                    React.createElement("div", { className: b('image') }),
                    React.createElement("div", { className: b('content') },
                        React.createElement("h2", { className: b('header') }, header),
                        React.createElement("code", { className: b('error') }, error)))));
        }
        return this.props.children;
    }
}
