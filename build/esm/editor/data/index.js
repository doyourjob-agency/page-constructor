import { BlockType } from '../../models';
import { formatBlockName } from '../utils';
import DefaultPreview from './previews/default-preview';
import HeaderBlock from './previews/header-block';
const getBlockTemplate = (blockType) => import(`./templates/${blockType}.json`).then((data) => data.default);
const getBlockPreview = (blockType) => {
    try {
        if (blockType === BlockType.HeaderBlock) {
            return HeaderBlock;
        }
        return DefaultPreview;
    }
    catch (err) {
        /*eslint-disable no-console */
        console.warn(`Preview image for ${blockType} not found`);
        return DefaultPreview;
    }
};
async function getEditorBlocksData() {
    const EdiorBlockData = {};
    for (const blockType of Object.values(BlockType)) {
        const template = await getBlockTemplate(blockType);
        const preview = getBlockPreview(blockType);
        template.meta = template.meta || {};
        template.meta.title = template.meta.title || formatBlockName(blockType);
        EdiorBlockData[blockType] = Object.assign(Object.assign({}, template), { preview });
    }
    return EdiorBlockData;
}
export { getEditorBlocksData };
