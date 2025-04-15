"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const icons_1 = require("@gravity-ui/icons");
const uikit_1 = require("@gravity-ui/uikit");
const constructor_items_1 = require("../../../constructor-items");
const utils_1 = require("../../../utils");
const data_1 = require("../../data");
const b = (0, utils_1.block)('add-block');
const sortedBlockNames = Object.keys(constructor_items_1.blockMap).sort();
const AddBlock = ({ onAdd, className }) => {
    const [isOpened, setIsOpened] = (0, react_1.useState)(false);
    const [search, setSearch] = (0, react_1.useState)('');
    const [editorBlocksData, setEditorBlocksData] = (0, react_1.useState)(null);
    const ref = (0, react_1.useRef)(null);
    const blocks = (0, react_1.useMemo)(() => {
        if (!editorBlocksData) {
            return [];
        }
        return sortedBlockNames.filter((blockName) => {
            var _a;
            return (_a = editorBlocksData[blockName]) === null || _a === void 0 ? void 0 : _a.meta.title.toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
        });
    }, [editorBlocksData, search]);
    (0, react_1.useEffect)(() => {
        const loadEditorBlocksData = async () => {
            const data = await (0, data_1.getEditorBlocksData)();
            setEditorBlocksData(data);
        };
        loadEditorBlocksData();
    }, []);
    return (react_1.default.createElement("div", { className: b(null, className), ref: ref },
        react_1.default.createElement("button", { className: b('button'), type: "button", onClick: () => {
                setIsOpened(!isOpened);
                setSearch('');
            } },
            react_1.default.createElement(icons_1.Plus, { className: b('icon') })),
        isOpened && (react_1.default.createElement(uikit_1.Popup, { anchorRef: ref, open: isOpened, contentClassName: b('popup'), placement: "top", offset: [0, 24], onOutsideClick: () => setIsOpened(false) },
            react_1.default.createElement("div", { className: b('search') },
                react_1.default.createElement(uikit_1.TextInput, { placeholder: "search", type: "text", value: search, size: "l", onUpdate: (value) => setSearch(value) })),
            react_1.default.createElement("div", { className: b('blocks') }, blocks.map((blockName) => {
                var _a;
                const blockData = editorBlocksData === null || editorBlocksData === void 0 ? void 0 : editorBlocksData[blockName];
                if (!blockData) {
                    return null;
                }
                const Preview = blockData.preview;
                return (react_1.default.createElement("button", { key: blockName, className: b('block'), onClick: () => {
                        onAdd(blockData === null || blockData === void 0 ? void 0 : blockData.template);
                        setIsOpened(false);
                    } },
                    react_1.default.createElement("div", { className: b('preview') },
                        react_1.default.createElement(Preview, null)),
                    react_1.default.createElement("div", { className: b('info') },
                        react_1.default.createElement("h4", { className: b('title') }, blockData.meta.title),
                        ((_a = blockData === null || blockData === void 0 ? void 0 : blockData.meta) === null || _a === void 0 ? void 0 : _a.description) && (react_1.default.createElement("p", { className: b('description') }, blockData.meta.description)))));
            }))))));
};
exports.default = AddBlock;
