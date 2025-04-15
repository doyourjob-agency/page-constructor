"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEditorBlocksData = void 0;
const tslib_1 = require("tslib");
const models_1 = require("../../models");
const utils_1 = require("../utils");
const default_preview_1 = tslib_1.__importDefault(require("./previews/default-preview"));
const header_block_1 = tslib_1.__importDefault(require("./previews/header-block"));
const getBlockTemplate = (blockType) => { var _a; return (_a = `./templates/${blockType}.json`, Promise.resolve().then(() => tslib_1.__importStar(require(_a)))).then((data) => data.default); };
const getBlockPreview = (blockType) => {
    try {
        if (blockType === models_1.BlockType.HeaderBlock) {
            return header_block_1.default;
        }
        return default_preview_1.default;
    }
    catch (err) {
        /*eslint-disable no-console */
        console.warn(`Preview image for ${blockType} not found`);
        return default_preview_1.default;
    }
};
async function getEditorBlocksData() {
    const EdiorBlockData = {};
    for (const blockType of Object.values(models_1.BlockType)) {
        const template = await getBlockTemplate(blockType);
        const preview = getBlockPreview(blockType);
        template.meta = template.meta || {};
        template.meta.title = template.meta.title || (0, utils_1.formatBlockName)(blockType);
        EdiorBlockData[blockType] = Object.assign(Object.assign({}, template), { preview });
    }
    return EdiorBlockData;
}
exports.getEditorBlocksData = getEditorBlocksData;
