import React from 'react';
import { Check, Minus } from '@gravity-ui/icons';
import { Icon } from '@gravity-ui/uikit';
import { HTML, YFMWrapper } from '../';
import { block } from '../../utils';
import './Table.css';
function getMarkerId(index) {
    if (isNaN(index)) {
        return undefined;
    }
    return `marker-${index}`;
}
const b = block('table');
export default class Table extends React.Component {
    render() {
        const { content, legend, hideLegend, marker = 'disk', className, caption } = this.props;
        if (!content || !content.length || !content[0].length) {
            return null;
        }
        return (React.createElement("div", { className: b(null, className), role: 'table', "aria-label": caption },
            this.renderTable(content, marker, legend),
            legend && !hideLegend && this.renderLegend(legend, marker)));
    }
    renderTable(content, marker, legend) {
        const justify = this.getDefaultJustify(content, this.props.justify);
        return (React.createElement("div", { className: b('table'), role: 'rowgroup' }, content.map((row, i) => (React.createElement("div", { key: i, className: b('row'), role: 'row' }, row.map((cell, j) => (React.createElement("div", { key: j, className: b('cell', { justify: justify[j] }), role: 'cell' }, legend && i && j ? (this.renderMarker(marker, cell)) : (React.createElement(HTML, null, cell))))))))));
    }
    renderMarker(type, cell) {
        return (React.createElement("div", { "aria-labelledby": getMarkerId(Number(cell)), className: b('marker', { type, index: String(cell) }) }, type === 'tick' ? (React.createElement(Icon, { size: 20, className: b('marker_tick', { check: Number(cell) === 1 }), data: Number(cell) === 1 ? Check : Minus })) : null));
    }
    renderLegend(legend, marker) {
        return (React.createElement("div", { className: b('legend') }, legend.map((item, index) => (React.createElement("div", { key: item, className: b('legend-item') },
            this.renderMarker(marker, String(index)),
            React.createElement(YFMWrapper, { className: b('legent-item-text'), content: item, modifiers: { constructor: true }, id: getMarkerId(index) }))))));
    }
    getDefaultJustify(content, justify) {
        return justify || new Array(content[0].length).fill('center');
    }
}
