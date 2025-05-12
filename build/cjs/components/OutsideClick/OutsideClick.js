"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
//TODO move into cloud components?
const react_1 = tslib_1.__importStar(require("react"));
const noop_1 = tslib_1.__importDefault(require("lodash/noop"));
class OutsideClick extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.ref = (0, react_1.createRef)();
        this.handleOutsideClick = (e) => {
            if (e.target &&
                this.ref &&
                this.ref.current &&
                !this.ref.current.contains(e.target)) {
                this.props.onOutsideClick();
            }
        };
    }
    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick, { passive: true });
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }
    render() {
        const { children, className, onClick } = this.props;
        return (react_1.default.createElement("div", { className: className, ref: this.ref, onClick: onClick, onKeyDown: noop_1.default, role: onClick ? 'button' : 'group', tabIndex: onClick ? 0 : -1 }, children));
    }
}
exports.default = OutsideClick;
