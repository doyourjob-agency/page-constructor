"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaBase = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const AnimateBlock_1 = tslib_1.__importDefault(require("../../components/AnimateBlock/AnimateBlock"));
const grid_1 = require("../../grid");
const utils_1 = require("../../utils");
const Title_1 = tslib_1.__importDefault(require("../Title/Title"));
const MediaBaseContent_1 = tslib_1.__importDefault(require("./MediaBaseContent"));
const b = (0, utils_1.block)('media-base');
const Card = () => null;
const MediaBase = (props) => {
    const { children, largeMedia, smallMedia, direction = 'content-media', mobileDirection = 'content-media', animated, mediaOnly, onScroll, mediaOnlyColSizes = { all: 12, md: 8 } } = props, mediaContentProps = tslib_1.__rest(props, ["children", "largeMedia", "smallMedia", "direction", "mobileDirection", "animated", "mediaOnly", "onScroll", "mediaOnlyColSizes"]);
    const { title, description } = mediaContentProps;
    const mediaSizes = (0, react_1.useMemo)(() => {
        let md = 6;
        if (smallMedia) {
            md = 4;
        }
        if (largeMedia) {
            md = 8;
        }
        return mediaOnly
            ? { [grid_1.GridColumnSize.All]: 12 }
            : { [grid_1.GridColumnSize.Md]: md, [grid_1.GridColumnSize.All]: 12 };
    }, [mediaOnly, largeMedia, smallMedia]);
    const contentSizes = (0, react_1.useMemo)(() => {
        let md = 6;
        if (smallMedia) {
            md = 8;
        }
        if (largeMedia) {
            md = 4;
        }
        return { [grid_1.GridColumnSize.Md]: md, [grid_1.GridColumnSize.All]: 12 };
    }, [largeMedia, smallMedia]);
    const mediaContent = !mediaOnly && react_1.default.createElement(MediaBaseContent_1.default, Object.assign({}, mediaContentProps));
    const card = children.type === Card ? children === null || children === void 0 ? void 0 : children.props.children : null;
    return (react_1.default.createElement(AnimateBlock_1.default, { className: b(), onScroll: onScroll, animate: animated },
        mediaOnly && (react_1.default.createElement(Title_1.default, { className: b('header'), title: title, subtitle: description, colSizes: mediaOnlyColSizes })),
        react_1.default.createElement(grid_1.Grid, null,
            react_1.default.createElement(grid_1.Row, { className: b('row', {
                    reverse: direction === 'media-content',
                    'mobile-reverse': mobileDirection === 'media-content',
                }) },
                react_1.default.createElement(grid_1.Col, { className: b('content'), sizes: contentSizes }, mediaContent),
                card ? (react_1.default.createElement(grid_1.Col, { sizes: mediaSizes },
                    react_1.default.createElement("div", { className: b('card') }, card))) : null))));
};
exports.MediaBase = MediaBase;
exports.MediaBase.Card = Card;
exports.default = exports.MediaBase;
