"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageConstructor = exports.Constructor = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
require("@diplodoc/transform/dist/js/yfm");
const BackgroundMedia_1 = tslib_1.__importDefault(require("../../components/BackgroundMedia/BackgroundMedia"));
const BrandFooter_1 = tslib_1.__importDefault(require("../../components/BrandFooter/BrandFooter"));
const RootCn_1 = tslib_1.__importDefault(require("../../components/RootCn"));
const constructor_items_1 = require("../../constructor-items");
const animateContext_1 = require("../../context/animateContext");
const innerContext_1 = require("../../context/innerContext");
const projectSettingsContext_1 = require("../../context/projectSettingsContext");
const theme_1 = require("../../context/theme");
const grid_1 = require("../../grid");
const models_1 = require("../../models");
const Layout_1 = tslib_1.__importDefault(require("../../navigation/containers/Layout/Layout"));
const utils_1 = require("../../utils");
const ConstructorBlocks_1 = require("./components/ConstructorBlocks");
const ConstructorItem_1 = require("./components/ConstructorItem");
const ConstructorRow_1 = require("./components/ConstructorRow");
const b = (0, utils_1.block)('page-constructor');
const Constructor = (props) => {
    const { content: { blocks = [], background } = {}, renderMenu, shouldRenderBlock, navigation, custom, isBranded, microdata, } = props;
    const { context } = (0, react_1.useMemo)(() => ({
        context: {
            blockTypes: [...models_1.BlockTypes, ...(0, utils_1.getCustomTypes)(['blocks', 'headers'], custom)],
            subBlockTypes: [...models_1.SubBlockTypes, ...(0, utils_1.getCustomTypes)(['subBlocks'], custom)],
            headerBlockTypes: [...models_1.HeaderBlockTypes, ...(0, utils_1.getCustomTypes)(['headers'], custom)],
            navigationBlockTypes: [
                ...models_1.NavigationItemTypes,
                ...(0, utils_1.getCustomTypes)(['navigation'], custom),
            ],
            itemMap: Object.assign(Object.assign(Object.assign({}, constructor_items_1.blockMap), constructor_items_1.subBlockMap), (0, utils_1.getCustomItems)(['blocks', 'headers', 'subBlocks'], custom)),
            navItemMap: Object.assign(Object.assign({}, constructor_items_1.navItemMap), (0, utils_1.getCustomItems)(['navigation'], custom)),
            loadables: custom === null || custom === void 0 ? void 0 : custom.loadable,
            shouldRenderBlock,
            customization: {
                decorators: custom === null || custom === void 0 ? void 0 : custom.decorators,
            },
            microdata,
        },
    }), [custom, shouldRenderBlock, microdata]);
    const theme = (0, theme_1.useTheme)();
    const header = (0, utils_1.getHeaderBlock)(blocks, context.headerBlockTypes);
    const restBlocks = (0, utils_1.getOrderedBlocks)(blocks, context.headerBlockTypes);
    const themedBackground = (0, utils_1.getThemedValue)(background, theme);
    return (react_1.default.createElement(innerContext_1.InnerContext.Provider, { value: context },
        react_1.default.createElement(RootCn_1.default, { className: b() },
            react_1.default.createElement("div", { className: b('wrapper') },
                themedBackground && (react_1.default.createElement(BackgroundMedia_1.default, Object.assign({}, themedBackground, { className: b('background') }))),
                react_1.default.createElement(Layout_1.default, { navigation: navigation },
                    renderMenu && renderMenu(),
                    header && (react_1.default.createElement(ConstructorItem_1.ConstructorHeader, { data: header, blockKey: models_1.BlockType.HeaderBlock })),
                    react_1.default.createElement(grid_1.Grid, null, restBlocks && (react_1.default.createElement(ConstructorRow_1.ConstructorRow, null,
                        react_1.default.createElement(ConstructorBlocks_1.ConstructorBlocks, { items: restBlocks }))))),
                isBranded && react_1.default.createElement(BrandFooter_1.default, null)))));
};
exports.Constructor = Constructor;
const PageConstructor = (props) => {
    const { isAnimationEnabled = true } = (0, react_1.useContext)(projectSettingsContext_1.ProjectSettingsContext);
    const { content: { animated = isAnimationEnabled } = {} } = props, rest = tslib_1.__rest(props, ["content"]);
    return (react_1.default.createElement(animateContext_1.AnimateContext.Provider, { value: { animated } },
        react_1.default.createElement(exports.Constructor, Object.assign({ content: props.content }, rest))));
};
exports.PageConstructor = PageConstructor;
