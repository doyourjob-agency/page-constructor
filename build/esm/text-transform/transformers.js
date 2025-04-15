import cloneDeep from 'lodash/cloneDeep';
import shuffle from 'lodash/shuffle';
import { config } from './config';
import { filterContent } from './filter';
function transformBlocks(blocks, lang, customConfig = {}, options = {}) {
    const fullConfig = Object.assign(Object.assign({}, config), customConfig);
    const { plugins = [] } = options;
    const clonedBlocks = cloneDeep(blocks);
    return clonedBlocks.map((block) => transformBlock(lang, fullConfig, block, plugins));
}
function transformBlock(lang, blocksConfig, block, plugins) {
    const blockConfig = blocksConfig[block.type];
    if (block) {
        if ('randomOrder' in block && block.randomOrder && 'children' in block && block.children) {
            block.children = shuffle(block.children);
        }
    }
    if (blockConfig) {
        const configs = Array.isArray(blockConfig) ? blockConfig : [blockConfig];
        configs.forEach((transformConfig) => {
            const { fields, transformer: transformerRaw, parser } = transformConfig;
            const transformer = (content) => 
            // eslint-disable-next-line no-useless-call
            transformerRaw.call(null, lang, content, { plugins });
            if (fields) {
                fields.forEach((field) => {
                    if (block[field]) {
                        if (parser) {
                            block[field] = parser(transformer, block[field]);
                        }
                        else if (typeof block[field] === 'string') {
                            block[field] = transformer(block[field]);
                        }
                    }
                });
            }
            else if (parser) {
                parser(transformer, block);
            }
        });
    }
    if ('children' in block && block.children) {
        block.children = transformBlocks(block.children, lang, blocksConfig, {
            plugins,
        });
    }
    return block;
}
export const contentTransformer = ({ content, options }) => {
    const { lang, customConfig = {}, vars, plugins = [] } = options;
    const { blocks = [] } = (vars ? filterContent(content, vars) : content);
    const transformedBlocks = transformBlocks(blocks, lang, customConfig, {
        plugins,
    });
    return {
        blocks: transformedBlocks,
    };
};
