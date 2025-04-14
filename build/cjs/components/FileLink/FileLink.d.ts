import React from 'react';
import { FileLinkProps } from '../../models';
export declare enum FileExtension {
    PDF = "pdf",
    DOC = "doc",
    XLS = "xls",
    PPT = "ppt",
    FIG = "fig",
    ZIP = "zip"
}
export declare function getFileExt(name: string): string;
declare const FileLink: (props: React.PropsWithChildren<FileLinkProps>) => JSX.Element;
export default FileLink;
