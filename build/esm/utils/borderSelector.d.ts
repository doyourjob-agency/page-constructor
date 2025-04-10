import { MediaBorder } from '../models';
type GetMediaBorderArgs = {
    border?: MediaBorder;
    disableShadow?: boolean;
};
export declare const getMediaBorder: ({ border, disableShadow }: GetMediaBorderArgs) => MediaBorder;
export {};
