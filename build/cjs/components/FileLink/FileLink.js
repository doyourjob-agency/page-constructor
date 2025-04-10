"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileExt = exports.FileExtension = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uikit_1 = require("@gravity-ui/uikit");
const locationContext_1 = require("../../context/locationContext");
const utils_1 = require("../../utils");
const b = (0, utils_1.block)('file-link');
const FIGMA_URL = 'https://www.figma.com';
var FileExtension;
(function (FileExtension) {
    FileExtension["PDF"] = "pdf";
    FileExtension["DOC"] = "doc";
    FileExtension["XLS"] = "xls";
    FileExtension["PPT"] = "ppt";
    FileExtension["FIG"] = "fig";
    FileExtension["ZIP"] = "zip";
})(FileExtension = exports.FileExtension || (exports.FileExtension = {}));
function getFileExt(name) {
    if (name === null || name === void 0 ? void 0 : name.includes(FIGMA_URL)) {
        return FileExtension.FIG;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return name && name.split('.').pop().toLowerCase();
}
exports.getFileExt = getFileExt;
const FileExtensionThemes = {
    [FileExtension.PDF]: 'danger',
    [FileExtension.DOC]: 'info',
    [FileExtension.XLS]: 'success',
    [FileExtension.PPT]: 'warning',
    [FileExtension.FIG]: 'normal',
    [FileExtension.ZIP]: 'unknown',
};
const LabelSizeMap = {
    l: 's',
    m: 's',
    s: 'xs',
    xs: 'xs',
};
const FileLink = (props) => {
    const { hostname } = (0, react_1.useContext)(locationContext_1.LocationContext);
    const { href, text, type = 'vertical', textSize = 'm', className, theme = 'default', onClick, tabIndex, urlTitle, extraProps, } = props;
    const fileExt = getFileExt(href);
    const labelTheme = (FileExtensionThemes[fileExt] || 'unknown');
    const labelSize = LabelSizeMap[textSize];
    return (react_1.default.createElement("div", { className: b({ ext: fileExt, type, size: textSize, theme }, className) },
        react_1.default.createElement(uikit_1.Label, { className: b('file-label'), size: labelSize, theme: labelTheme }, fileExt),
        react_1.default.createElement("div", { className: b('link') },
            react_1.default.createElement("a", Object.assign({ href: href, onClick: onClick, tabIndex: tabIndex, title: urlTitle }, (0, utils_1.getLinkProps)(href, hostname), extraProps), text))));
};
exports.default = FileLink;
