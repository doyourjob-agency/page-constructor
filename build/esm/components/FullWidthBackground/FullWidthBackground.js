import React, { Component, createRef } from 'react';
import debounce from 'lodash/debounce';
import { BREAKPOINTS } from '../../constants';
import { block } from '../../utils';
import './FullWidthBackground.css';
const b = block('FullWidthBackground');
function getPadding(width) {
    return width > BREAKPOINTS.sm ? 16 : 8;
}
export default class FullWidthBackground extends Component {
    constructor() {
        super(...arguments);
        this.ref = createRef();
        this.setBg = debounce(() => {
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
        return (React.createElement("div", { className: b({ [theme]: true }, className), ref: this.ref, style: style }, children));
    }
}
