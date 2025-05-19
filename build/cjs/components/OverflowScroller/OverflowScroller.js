"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const debounce_1 = tslib_1.__importDefault(require("lodash/debounce"));
const __1 = require("..");
const utils_1 = require("../../utils");
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('overflow-scroller');
const TRANSITION_TIME = 300;
const PADDING_SIZE = 24;
const DEFAULT_ARROW_SIZE = 18;
class OverflowScroller extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            arrows: [],
            scrollValue: 0,
        };
        this.containerRef = (0, react_1.createRef)();
        this.wrapperRef = (0, react_1.createRef)();
        // eslint-disable-next-line @typescript-eslint/member-ordering, react/sort-comp
        this.checkOverflow = (0, debounce_1.default)(() => {
            if (this.containerRef &&
                this.containerRef.current &&
                this.wrapperRef &&
                this.wrapperRef.current) {
                const containerWidth = this.containerRef.current.offsetWidth;
                const wrapperWidth = this.wrapperRef.current.offsetWidth;
                const scrollValue = 0;
                const arrows = wrapperWidth < containerWidth ? [] : ['right'];
                this.setState({ scrollValue, arrows });
            }
        }, 100);
        this.handleScrollClick = (e, arrow) => {
            const { scrollValue, arrows } = this.state;
            const { onScrollStart } = this.props;
            if (this.containerRef &&
                this.containerRef.current &&
                this.wrapperRef &&
                this.wrapperRef.current) {
                const containerWidth = this.containerRef.current.offsetWidth;
                const wrapperWidth = this.wrapperRef.current.offsetWidth;
                const hiddenWidth = arrow === 'right' ? wrapperWidth - (containerWidth + scrollValue) : scrollValue;
                const padding = arrows.length > 1 && hiddenWidth + PADDING_SIZE > containerWidth ? PADDING_SIZE : 0;
                const delta = containerWidth > hiddenWidth ? hiddenWidth : containerWidth;
                const newScrollValue = arrow === 'right' ? scrollValue + delta + padding : scrollValue - delta - padding;
                let newArrows = ['left', 'right'];
                if (newScrollValue + containerWidth >= wrapperWidth) {
                    newArrows = ['left'];
                }
                else if (!newScrollValue) {
                    newArrows = ['right'];
                }
                this.setState({ arrows: newArrows, scrollValue: newScrollValue });
                if (onScrollStart) {
                    onScrollStart();
                }
                e.stopPropagation();
            }
        };
    }
    componentDidMount() {
        this.checkOverflow();
        window.addEventListener('resize', this.checkOverflow, { passive: true });
    }
    componentDidUpdate(_prepvProps, { scrollValue: prevScrollValue }) {
        const { onScrollEnd } = this.props;
        if (prevScrollValue !== this.state.scrollValue && onScrollEnd) {
            setTimeout(onScrollEnd, TRANSITION_TIME + 100);
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.checkOverflow);
    }
    render() {
        const { className, arrowClassName, children, arrowSize = DEFAULT_ARROW_SIZE } = this.props;
        const { arrows, scrollValue } = this.state;
        const wrapperStyle = arrows.length ? { left: -scrollValue } : { left: 0 };
        const paddingLeft = arrows.includes('left');
        const paddingRight = arrows.includes('right');
        return (react_1.default.createElement("div", { className: b('container', {
                'padding-left': paddingLeft,
                'padding-right': paddingRight,
            }) },
            react_1.default.createElement("div", { className: b(null, className), ref: this.containerRef },
                react_1.default.createElement("div", { className: b('wrapper'), style: wrapperStyle, ref: this.wrapperRef }, children)),
            arrows.map((direction) => (react_1.default.createElement("button", { key: direction, className: b('arrow', { type: direction }, arrowClassName), onClick: (e) => this.handleScrollClick(e, direction), "aria-label": (0, i18n_1.i18n)(direction) },
                react_1.default.createElement(__1.ToggleArrow, { size: arrowSize, type: 'horizontal', iconType: "navigation" }))))));
    }
}
exports.default = OverflowScroller;
