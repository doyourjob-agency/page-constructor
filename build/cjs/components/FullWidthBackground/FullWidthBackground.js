"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('FullWidthBackground');
function getPadding(width) {
    return width > constants_1.BREAKPOINTS.sm ? 16 : 8;
}
class FullWidthBackground extends react_1.Component {
    constructor() {
        super(...arguments);
        this.ref = (0, react_1.createRef)();
        this.setBg = (0, debounce_1.default)(() => {
            var _a, _b;
            if (this.ref && this.ref.current) {
                const bg = this.ref.current;
                const width = document.documentElement.clientWidth || document.body.clientWidth;
                const padding = this.props.theme === 'rounded' ? getPadding(width) : 0;
                const { left } = (_b = (_a = bg.parentElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : { left: 0 };
                bg.style.width = `${width - padding * 2}px`;
                bg.style.left = `-${left - padding}px`;
            }
        }, 100);
    }
    componentDidMount() {
        var _a, _b;
        if ((_b = (_a = this === null || this === void 0 ? void 0 : this.ref) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.parentElement) {
            this.ref.current.parentElement.style.position = 'relative';
            this.setBg();
            window.addEventListener('resize', this.setBg, { passive: true });
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.setBg);
    }
    render() {
        const { children, className, style, theme = 'default' } = this.props;
        return (react_1.default.createElement("div", { className: b({ [theme]: true }, className), ref: this.ref, style: style }, children));
    }
}
exports.default = FullWidthBackground;
