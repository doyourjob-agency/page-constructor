import { LayoutItemProps, LinkTheme, MediaProps } from '../../models';
export declare const getLayoutItemLinks: (links: LayoutItemProps['content']['links']) => {
    url: string;
    urlTitle?: string | undefined;
    text?: string | undefined;
    textSize?: import("../../models").TextSize | undefined;
    theme: LinkTheme;
    colorTheme?: import("../../models").TextTheme | undefined;
    arrow?: boolean | undefined;
    target?: string | undefined;
    extraProps?: import("react").HTMLProps<HTMLAnchorElement> | undefined;
    analyticsEvents?: import("../../models").AnalyticsEventsProp | undefined;
    className?: string | undefined;
    tabIndex?: number | undefined;
}[] | undefined;
export declare const hasFullscreen: ({ dataLens, image }: MediaProps) => boolean;
export declare const showFullscreenIcon: ({ youtube, videoIframe }: MediaProps) => boolean;
