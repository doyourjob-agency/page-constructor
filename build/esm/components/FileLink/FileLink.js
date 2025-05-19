import React, { useContext } from 'react';
import { Label } from '@gravity-ui/uikit';
import { LocationContext } from '../../context/locationContext';
import { block, getLinkProps } from '../../utils';
import './FileLink.css';
const b = block('file-link');
const FIGMA_URL = 'https://www.figma.com';
export var FileExtension;
(function (FileExtension) {
    FileExtension["PDF"] = "pdf";
    FileExtension["DOC"] = "doc";
    FileExtension["XLS"] = "xls";
    FileExtension["PPT"] = "ppt";
    FileExtension["FIG"] = "fig";
    FileExtension["ZIP"] = "zip";
})(FileExtension || (FileExtension = {}));
export function getFileExt(name) {
    if (name === null || name === void 0 ? void 0 : name.includes(FIGMA_URL)) {
        return FileExtension.FIG;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return name && name.split('.').pop().toLowerCase();
}
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
    const { hostname } = useContext(LocationContext);
    const { href, text, type = 'vertical', textSize = 'm', className, theme = 'default', onClick, tabIndex, urlTitle, extraProps, } = props;
    const fileExt = getFileExt(href);
    const labelTheme = (FileExtensionThemes[fileExt] || 'unknown');
    const labelSize = LabelSizeMap[textSize];
    return (React.createElement("div", { className: b({ ext: fileExt, type, size: textSize, theme }, className) },
        React.createElement(Label, { className: b('file-label'), size: labelSize, theme: labelTheme }, fileExt),
        React.createElement("div", { className: b('link') },
            React.createElement("a", Object.assign({ href: href, onClick: onClick, tabIndex: tabIndex, title: urlTitle }, getLinkProps(href, hostname), extraProps), text))));
};
export default FileLink;
