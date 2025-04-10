"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const __1 = require("../");
const utils_1 = require("../../utils");
function getMarkerId(index) {
    if (isNaN(index)) {
        return undefined;
    }
    return `marker-${index}`;
}
const b = (0, utils_1.block)('table');
class Table extends react_1.default.Component {
    render() {
        const { content, legend, hideLegend, marker = 'disk', className, caption } = this.props;
        if (!content || !content.length || !content[0].length) {
            return null;
        }
        return (react_1.default.createElement("div", { className: b(null, className), role: 'table', "aria-label": caption },
            this.renderTable(content, marker, legend),
            legend && !hideLegend && this.renderLegend(legend, marker)));
    }
    renderTable(content, marker, legend) {
        const justify = this.getDefaultJustify(content, this.props.justify);
        return (react_1.default.createElement("div", { className: b('table'), role: 'rowgroup' }, content.map((row, i) => (react_1.default.createElement("div", { key: i, className: b('row'), role: 'row' }, row.map((cell, j) => (react_1.default.createElement("div", { key: j, className: b('cell', { justify: justify[j] }), role: 'cell' }, legend && i && j ? (this.renderMarker(marker, cell)) : (react_1.default.createElement(__1.HTML, null, cell))))))))));
    }
    renderMarker(type, cell) {
        return (react_1.default.createElement("div", { "aria-labelledby": getMarkerId(Number(cell)), className: b('marker', { type, index: String(cell) }) }, type === 'tick' ? (react_1.default.createElement(uikit_1.Icon, { size: 20, className: b('marker_tick', { check: Number(cell) === 1 }), data: Number(cell) === 1 ? icons_1.Check : icons_1.Minus })) : null));
    }
    renderLegend(legend, marker) {
        return (react_1.default.createElement("div", { className: b('legend') }, legend.map((item, index) => (react_1.default.createElement("div", { key: item, className: b('legend-item') },
            this.renderMarker(marker, String(index)),
            react_1.default.createElement(__1.YFMWrapper, { className: b('legent-item-text'), content: item, modifiers: { constructor: true }, id: getMarkerId(index) }))))));
    }
    getDefaultJustify(content, justify) {
        return justify || new Array(content[0].length).fill('center');
    }
}
exports.default = Table;
