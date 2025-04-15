import { __rest } from "tslib";
import React, { useContext, useMemo } from 'react';
import '@diplodoc/transform/dist/js/yfm';
import BackgroundMedia from '../../components/BackgroundMedia/BackgroundMedia';
import BrandFooter from '../../components/BrandFooter/BrandFooter';
import RootCn from '../../components/RootCn';
import { blockMap, navItemMap, subBlockMap } from '../../constructor-items';
import { AnimateContext } from '../../context/animateContext';
import { InnerContext } from '../../context/innerContext';
import { ProjectSettingsContext } from '../../context/projectSettingsContext';
import { useTheme } from '../../context/theme';
import { Grid } from '../../grid';
import { BlockType, BlockTypes, HeaderBlockTypes, NavigationItemTypes, SubBlockTypes, } from '../../models';
import Layout from '../../navigation/containers/Layout/Layout';
import { block as cnBlock, getCustomItems, getCustomTypes, getHeaderBlock, getOrderedBlocks, getThemedValue, } from '../../utils';
import { ConstructorBlocks } from './components/ConstructorBlocks';
import { ConstructorHeader } from './components/ConstructorItem';
import { ConstructorRow } from './components/ConstructorRow';
import './PageConstructor.css';
const b = cnBlock('page-constructor');
export const Constructor = (props) => {
    const { content: { blocks = [], background } = {}, renderMenu, shouldRenderBlock, navigation, custom, isBranded, microdata, } = props;
    const { context } = useMemo(() => ({
        context: {
            blockTypes: [...BlockTypes, ...getCustomTypes(['blocks', 'headers'], custom)],
            subBlockTypes: [...SubBlockTypes, ...getCustomTypes(['subBlocks'], custom)],
            headerBlockTypes: [...HeaderBlockTypes, ...getCustomTypes(['headers'], custom)],
            navigationBlockTypes: [
                ...NavigationItemTypes,
                ...getCustomTypes(['navigation'], custom),
            ],
            itemMap: Object.assign(Object.assign(Object.assign({}, blockMap), subBlockMap), getCustomItems(['blocks', 'headers', 'subBlocks'], custom)),
            navItemMap: Object.assign(Object.assign({}, navItemMap), getCustomItems(['navigation'], custom)),
            loadables: custom === null || custom === void 0 ? void 0 : custom.loadable,
            shouldRenderBlock,
            customization: {
                decorators: custom === null || custom === void 0 ? void 0 : custom.decorators,
            },
            microdata,
        },
    }), [custom, shouldRenderBlock, microdata]);
    const theme = useTheme();
    const header = getHeaderBlock(blocks, context.headerBlockTypes);
    const restBlocks = getOrderedBlocks(blocks, context.headerBlockTypes);
    const themedBackground = getThemedValue(background, theme);
    return (React.createElement(InnerContext.Provider, { value: context },
        React.createElement(RootCn, { className: b() },
            React.createElement("div", { className: b('wrapper') },
                themedBackground && (React.createElement(BackgroundMedia, Object.assign({}, themedBackground, { className: b('background') }))),
                React.createElement(Layout, { navigation: navigation },
                    renderMenu && renderMenu(),
                    header && (React.createElement(ConstructorHeader, { data: header, blockKey: BlockType.HeaderBlock })),
                    React.createElement(Grid, null, restBlocks && (React.createElement(ConstructorRow, null,
                        React.createElement(ConstructorBlocks, { items: restBlocks }))))),
                isBranded && React.createElement(BrandFooter, null)))));
};
export const PageConstructor = (props) => {
    const { isAnimationEnabled = true } = useContext(ProjectSettingsContext);
    const { content: { animated = isAnimationEnabled } = {} } = props, rest = __rest(props, ["content"]);
    return (React.createElement(AnimateContext.Provider, { value: { animated } },
        React.createElement(Constructor, Object.assign({ content: props.content }, rest))));
};
