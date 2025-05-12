import React, { createRef } from 'react';
import debounce from 'lodash/debounce';
import { ToggleArrow } from '..';
import { block } from '../../utils';
import { i18n } from './i18n';
import './OverflowScroller.css';
const b = block('overflow-scroller');
const TRANSITION_TIME = 300;
const PADDING_SIZE = 24;
const DEFAULT_ARROW_SIZE = 18;
export default class OverflowScroller extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            arrows: [],
            scrollValue: 0,
        };
        this.containerRef = createRef();
        this.wrapperRef = createRef();
        // eslint-disable-next-line @typescript-eslint/member-ordering, react/sort-comp
        this.checkOverflow = debounce(() => {
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
        return (React.createElement("div", { className: b('container', {
                'padding-left': paddingLeft,
                'padding-right': paddingRight,
            }) },
            React.createElement("div", { className: b(null, className), ref: this.containerRef },
                React.createElement("div", { className: b('wrapper'), style: wrapperStyle, ref: this.wrapperRef }, children)),
            arrows.map((direction) => (React.createElement("button", { key: direction, className: b('arrow', { type: direction }, arrowClassName), onClick: (e) => this.handleScrollClick(e, direction), "aria-label": i18n(direction) },
                React.createElement(ToggleArrow, { size: arrowSize, type: 'horizontal', iconType: "navigation" }))))));
    }
}
