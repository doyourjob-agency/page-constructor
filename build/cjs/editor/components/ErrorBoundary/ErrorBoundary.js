"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("../../../utils");
const utils_2 = require("../../utils");
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('error-boundary');
class ErrorBoundary extends react_1.default.Component {
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
            ? (0, i18n_1.i18n)('error-block-header', { id: (0, utils_2.getBlockId)({ type, index }) })
            : (0, i18n_1.i18n)('error-page-header');
        if (this.state.error) {
            return (react_1.default.createElement("div", { className: b() },
                react_1.default.createElement("div", { className: b('container') },
                    react_1.default.createElement("div", { className: b('image') }),
                    react_1.default.createElement("div", { className: b('content') },
                        react_1.default.createElement("h2", { className: b('header') }, header),
                        react_1.default.createElement("code", { className: b('error') }, error)))));
        }
        return this.props.children;
    }
}
exports.ErrorBoundary = ErrorBoundary;
