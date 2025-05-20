import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Plus } from '@gravity-ui/icons';
import { Popup, TextInput } from '@gravity-ui/uikit';
import { blockMap } from '../../../constructor-items';
import { block } from '../../../utils';
import { getEditorBlocksData } from '../../data';
import './AddBlock.css';
const b = block('add-block');
const sortedBlockNames = Object.keys(blockMap).sort();
const AddBlock = ({ onAdd, className }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [search, setSearch] = useState('');
    const [editorBlocksData, setEditorBlocksData] = useState(null);
    const ref = useRef(null);
    const blocks = useMemo(() => {
        if (!editorBlocksData) {
            return [];
        }
        return sortedBlockNames.filter((blockName) => {
            var _a;
            return (_a = editorBlocksData[blockName]) === null || _a === void 0 ? void 0 : _a.meta.title.toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
        });
    }, [editorBlocksData, search]);
    useEffect(() => {
        const loadEditorBlocksData = async () => {
            const data = await getEditorBlocksData();
            setEditorBlocksData(data);
        };
        loadEditorBlocksData();
    }, []);
    return (React.createElement("div", { className: b(null, className), ref: ref },
        React.createElement("button", { className: b('button'), type: "button", onClick: () => {
                setIsOpened(!isOpened);
                setSearch('');
            } },
            React.createElement(Plus, { className: b('icon') })),
        isOpened && (React.createElement(Popup, { anchorRef: ref, open: isOpened, contentClassName: b('popup'), placement: "top", offset: [0, 24], onOutsideClick: () => setIsOpened(false) },
            React.createElement("div", { className: b('search') },
                React.createElement(TextInput, { placeholder: "search", type: "text", value: search, size: "l", onUpdate: (value) => setSearch(value) })),
            React.createElement("div", { className: b('blocks') }, blocks.map((blockName) => {
                var _a;
                const blockData = editorBlocksData === null || editorBlocksData === void 0 ? void 0 : editorBlocksData[blockName];
                if (!blockData) {
                    return null;
                }
                const Preview = blockData.preview;
                return (React.createElement("button", { key: blockName, className: b('block'), onClick: () => {
                        onAdd(blockData === null || blockData === void 0 ? void 0 : blockData.template);
                        setIsOpened(false);
                    } },
                    React.createElement("div", { className: b('preview') },
                        React.createElement(Preview, null)),
                    React.createElement("div", { className: b('info') },
                        React.createElement("h4", { className: b('title') }, blockData.meta.title),
                        ((_a = blockData === null || blockData === void 0 ? void 0 : blockData.meta) === null || _a === void 0 ? void 0 : _a.description) && (React.createElement("p", { className: b('description') }, blockData.meta.description)))));
            }))))));
};
export default AddBlock;
