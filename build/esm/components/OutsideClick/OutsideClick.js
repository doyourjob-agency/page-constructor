//TODO move into cloud components?
import React, { createRef } from 'react';
import noop from 'lodash/noop';
export default class OutsideClick extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = createRef();
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
        return (React.createElement("div", { className: className, ref: this.ref, onClick: onClick, onKeyDown: noop, role: onClick ? 'button' : 'group', tabIndex: onClick ? 0 : -1 }, children));
    }
}
