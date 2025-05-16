"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentTransformer = void 0;
const cloneDeep_1 = __importDefault(require("lodash/cloneDeep"));
const shuffle_1 = __importDefault(require("lodash/shuffle"));
const config_1 = require("./config");
const filter_1 = require("./filter");
function transformBlocks(blocks, lang, customConfig = {}, options = {}) {
    const fullConfig = Object.assign(Object.assign({}, config_1.config), customConfig);
    const { plugins = [] } = options;
    const clonedBlocks = (0, cloneDeep_1.default)(blocks);
    return clonedBlocks.map((block) => transformBlock(lang, fullConfig, block, plugins));
}
function transformBlock(lang, blocksConfig, block, plugins) {
    const blockConfig = blocksConfig[block.type];
    if (block) {
        if ('randomOrder' in block && block.randomOrder && 'children' in block && block.children) {
            block.children = (0, shuffle_1.default)(block.children);
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
const contentTransformer = ({ content, options }) => {
    const { lang, customConfig = {}, vars, plugins = [] } = options;
    const { blocks = [] } = (vars ? (0, filter_1.filterContent)(content, vars) : content);
    const transformedBlocks = transformBlocks(blocks, lang, customConfig, {
        plugins,
    });
    return {
        blocks: transformedBlocks,
    };
};
exports.contentTransformer = contentTransformer;
