"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Media_1 = tslib_1.__importDefault(require("../../components/Media/Media"));
const MediaBase_1 = tslib_1.__importDefault(require("../../components/MediaBase/MediaBase"));
const theme_1 = require("../../context/theme");
const utils_1 = require("../../utils");
const borderSelector_1 = require("../../utils/borderSelector");
const microdata_1 = require("../../utils/microdata");
const b = (0, utils_1.block)('media-block');
const MediaBlock = (props) => {
    const { media, border, disableShadow, title, description } = props;
    const borderSelected = (0, borderSelector_1.getMediaBorder)({
        border,
        disableShadow,
    });
    const [play, setPlay] = (0, react_1.useState)(false);
    const theme = (0, theme_1.useTheme)();
    const mediaThemed = (0, utils_1.getThemedValue)(media, theme);
    const mediaWithMicrodata = (0, microdata_1.mergeVideoMicrodata)(mediaThemed, {
        name: title,
        description,
    });
    return (react_1.default.createElement(MediaBase_1.default, Object.assign({}, props, { onScroll: () => setPlay(true) }),
        react_1.default.createElement(MediaBase_1.default.Card, null,
            react_1.default.createElement(Media_1.default, Object.assign({ imageClassName: b('image') }, mediaWithMicrodata, { playVideo: play, className: b({ border: borderSelected }) })))));
};
exports.MediaBlock = MediaBlock;
exports.default = exports.MediaBlock;
