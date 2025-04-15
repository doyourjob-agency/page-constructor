"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const components_1 = require("../../components");
const grid_1 = require("../../grid");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('table-block');
const bTable = (0, utils_1.block)('table');
const bScrollbar = (0, utils_1.block)('table-scrollbar');
const TableBlock = (props) => {
    const { title, table, description, links, buttons } = props;
    const tableRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        var _a;
        const pcTable = (_a = tableRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(`.${bTable()} > .${bTable('table')}`);
        if (!pcTable)
            return () => { };
        let scrollBar = pcTable.querySelector(`.${bScrollbar()}`);
        let scrollThumb = scrollBar === null || scrollBar === void 0 ? void 0 : scrollBar.querySelector('div');
        if (!scrollBar) {
            scrollBar = document.createElement('div');
            scrollThumb = document.createElement('div');
            scrollBar.appendChild(scrollThumb);
            scrollBar.className = bScrollbar();
            pcTable.appendChild(scrollBar);
        }
        const updateProgress = () => {
            const scrollWidth = Math.round(scrollBar.clientWidth * (pcTable.clientWidth / pcTable.scrollWidth));
            const scrollLeft = Math.round(scrollBar.clientWidth * (pcTable.scrollLeft / pcTable.scrollWidth));
            scrollThumb.style.setProperty('transform', `translateX(${scrollLeft}px)`);
            scrollThumb.style.setProperty('width', `${scrollWidth}px`);
        };
        updateProgress();
        pcTable.addEventListener('scroll', updateProgress);
        return () => {
            pcTable.removeEventListener('scroll', updateProgress);
        };
    }, []);
    return (react_1.default.createElement("div", { className: b(), ref: tableRef },
        react_1.default.createElement(grid_1.Grid, { className: b('content') },
            react_1.default.createElement(grid_1.Row, { className: b('row') },
                react_1.default.createElement(grid_1.Col, { className: b('lhs'), sizes: { [grid_1.GridColumnSize.Md]: 3, [grid_1.GridColumnSize.All]: 12 }, alignSelf: grid_1.GridColumnAlignSelf.Start },
                    react_1.default.createElement(uikit_1.Text, { variant: "display-2" }, title),
                    description && (react_1.default.createElement("div", { className: b('description') },
                        react_1.default.createElement(uikit_1.Text, { variant: "body-2" },
                            react_1.default.createElement(components_1.HTML, null, description)))),
                    (links === null || links === void 0 ? void 0 : links.length) && react_1.default.createElement(components_1.Links, { className: b('bottomObject'), links: links }),
                    (buttons === null || buttons === void 0 ? void 0 : buttons.length) && (react_1.default.createElement(components_1.Buttons, { className: b('bottomObject'), buttons: buttons }))),
                react_1.default.createElement(grid_1.Col, { sizes: { [grid_1.GridColumnSize.Md]: 8, [grid_1.GridColumnSize.All]: 12 }, offsets: { [grid_1.GridColumnSize.Md]: 1 } },
                    react_1.default.createElement(components_1.Table, Object.assign({ className: b('table') }, table)))))));
};
exports.TableBlock = TableBlock;
exports.default = exports.TableBlock;
