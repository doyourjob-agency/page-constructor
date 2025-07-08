import React from 'react';

import {ButtonSize} from '@gravity-ui/uikit';

import {GridColumnSize, GridColumnSizesType, IndentValue} from '../../grid/types';
import {BlockBackgroundType, ThemeSupporting} from '../../utils';
import {AnalyticsEventsBase} from '../common';

import {
    AnchorProps,
    Animatable,
    BackgroundImageProps,
    ButtonProps,
    CardBorder,
    ContentSize,
    ContentTextSize,
    ContentTheme,
    FileLinkProps,
    HeaderBreadCrumbsProps,
    HeaderImageSize,
    HeaderOffset,
    HeaderWidth,
    ImageDeviceProps,
    ImageProps,
    Justify,
    LegendTableMarkerType,
    LinkProps,
    MapProps,
    MediaDirection,
    MediaProps,
    MediaView,
    ReportFileType,
    TagProps,
    TextSize,
    TextTheme,
    Themable,
    ThemedImage,
    ThemedMediaProps,
    ThemedMediaVideoProps,
    TitleItemBaseProps,
    TitleItemProps,
    WithBorder,
    YandexFormProps,
} from './common';
import {BannerCardProps, HubspotFormProps, SubBlock, SubBlockModels} from './sub-blocks';

export enum BlockType {
    PromoFeaturesBlock = 'promo-features-block',
    ExtendedFeaturesBlock = 'extended-features-block',
    SliderBlock = 'slider-block',
    QuestionsBlock = 'questions-block',
    BannerBlock = 'banner-block',
    CompaniesBlock = 'companies-block',
    MediaBlock = 'media-block',
    InfoBlock = 'info-block',
    TableBlock = 'table-block',
    TabsBlock = 'tabs-block',
    TabLinksBlock = 'tab-links-block',
    HeaderSliderBlock = 'header-slider-block',
    HeaderBlock = 'header-block',
    IconsBlock = 'icons-block',
    CardLayoutBlock = 'card-layout-block',
    ContentLayoutBlock = 'content-layout-block',
    ShareBlock = 'share-block',
    MapBlock = 'map-block',
    FilterBlock = 'filter-block',
    FormBlock = 'form-block',
    MarqueeLinksBlock = 'marquee-links-block',
    SolutionsBlock = 'solutions-block',
    ServicesBlock = 'services-block',
    QuotesBlock = 'quotes-block',
    ReportsBlock = 'reports-block',
    ReportsCardsBlock = 'reports-cards-block',
    ReportsSectionsBlock = 'reports-sections-block',
    FormWallBlock = 'form-wall-block',
    LinkTableBlock = 'link-table-block',
    EventsFeedBlock = 'events-feed-block',
    IrEventsFeedUpcomingBlock = 'ir-events-feed-upcoming-block',
    IrEventsFeedRecentBlock = 'ir-events-feed-recent-block',
    BlogFeedBlock = 'blog-feed-block',
    RelevantPostsBlock = 'relevant-posts-block',
    RelevantReportsCardsBlock = 'relevant-reports-cards-block',
    RelevantReportsBlock = 'relevant-reports-block',
    PressReleasesBlock = 'press-releases-block',
    // unstable
    SliderNewBlock = 'slider-new-block',
    HighlightTableBlock = 'highlight-table-block',
}

export const BlockTypes = Object.values(BlockType);
export const HeaderBlockTypes = [BlockType.HeaderBlock, BlockType.HeaderSliderBlock];

export interface Childable {
    children?: SubBlock[];
}

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type VisibilityPreset = 'mobile' | 'desktop';
export type VisibilityMap = Partial<Record<Breakpoint, boolean>>;

export type VisibilityProp = VisibilityPreset | VisibilityMap;

//block props
export interface BlockBaseProps {
    anchor?: AnchorProps;
    visibility?: VisibilityProp;
    /** @deprecated */
    visible?: GridColumnSize;
    /** @deprecated */
    hidden?: GridColumnSize;
    /** @deprecated */
    resetPaddings?: boolean;
    indent?: {
        top?: IndentValue;
        bottom?: IndentValue;
    };
    backgroundFull?: string; // deprecated, use 'blockBackground'
    blockBackground?: BlockBackgroundType;
    className?: string;
    qa?: string;
}

export interface LoadableProps {
    source: string;
    /**
     * @deprecated Will be moved to params
     */
    serviceId?: number;
    params?: Record<string, string | number | boolean>;
}

export interface LoadableChildren {
    loadable?: LoadableProps;
}

export enum SliderBreakpointNames {
    Sm = 'sm',
    Md = 'md',
    Lg = 'lg',
    Xl = 'xl',
}

export enum SliderType {
    MediaCard = 'media-card',
    HeaderCard = 'header-card',
}

export type SliderBreakpointParams = Record<SliderBreakpointNames, number>;
export type SlidesToShow = Partial<SliderBreakpointParams> | number;

export interface SliderProps extends Childable, Animatable, LoadableChildren {
    dots?: boolean;
    arrows?: boolean;
    slidesToShow?: SlidesToShow;
    disclaimer?: {
        text: string;
        size?: TextSize;
    };
    title?: TitleItemBaseProps;
    description?: string;
    autoplay?: number;
    infinite?: boolean;
    //for server transforms
    randomOrder?: boolean;
    adaptive?: boolean;
}

export interface SliderNewProps extends Childable, Animatable, LoadableChildren {
    dots?: boolean;
    arrows?: boolean;
    slidesToShow?: SlidesToShow;
    disclaimer?: {
        text: string;
        size?: TextSize;
    };
    title?: TitleItemBaseProps;
    description?: string;
    autoplay?: number;
    //for server transforms
    randomOrder?: boolean;
}

export interface HeaderSliderBlockProps extends Omit<SliderProps, 'title' | 'description'> {
    items: HeaderBlockProps[];
}

interface HeaderBackgroundProps {
    /** @deprecated replaced by Media Props image */
    url?: string;
    /** @deprecated replaced by Media Props image */
    disableCompress?: boolean;
}

export interface HeaderBlockBackground extends Partial<HeaderBackgroundProps>, Partial<MediaProps> {
    fullWidth?: boolean;
    fullWidthMedia?: boolean;
}

export type ThemedHeaderBlockBackground = ThemeSupporting<HeaderBlockBackground>;

export type HeaderTag = {
    text: string;
    url?: string;
    icon?: 'map' | 'clock';
    target?: string;
};

export enum HeaderStockType {
    Price = 'price',
    Shares = 'shares',
}

export interface HeaderStockPriceProps {
    name?: string;
    percent?: string;
    price?: string;
    update?: string;
    delayed?: string;
}

export interface HeaderStockSharesProps {
    date?: string;
    total?: string;
    text?: string;
    included?: {
        title: string;
        text: string;
    }[];
    description?: string;
}

export interface SwitchingTitleProps {
    text: string;
    switchingTime?: number;
}

export interface HeaderBlockProps {
    title: string;
    switchingTitle?: SwitchingTitleProps;
    topTags?: HeaderTag[];
    bottomTags?: HeaderTag[];
    overtitle?: string;
    description?: string;
    buttons?: Pick<ButtonProps, 'url' | 'text' | 'theme' | 'primary' | 'size' | 'extraProps'>[];
    stock?: HeaderStockType;
    stockPrice?: Pick<HeaderStockPriceProps, 'name' | 'delayed'>;
    stockShares?: HeaderStockSharesProps;
    width?: HeaderWidth;
    /** @deprecated imageSize now depends on width */
    imageSize?: HeaderImageSize;
    /**
     * @deprecated used only on the main page
     * TODO: delete after the possibility to remove padding-bottom in the block
     */
    offset?: HeaderOffset;
    image?: ThemedImage;
    video?: ThemedMediaVideoProps;
    mediaView?: MediaView;
    background?: ThemedHeaderBlockBackground;
    theme?: 'light' | 'dark';
    verticalOffset?: '0' | 's' | 'm' | 'l' | 'xl';
    breadcrumbs?: HeaderBreadCrumbsProps;
    status?: JSX.Element;
    renderTitle?: (title: string) => React.ReactNode;
}

export interface ExtendedFeaturesItem
    extends Omit<ContentBlockProps, 'theme' | 'centered' | 'colSizes' | 'size' | 'title'> {
    title: string;
    label?: string;
    icon?: ThemedImage;
    /** @deprecated **/
    link?: LinkProps;
}

export interface ExtendedFeaturesProps extends Animatable {
    items: ExtendedFeaturesItem[];
    title?: TitleItemProps | string;
    description?: string;
    colSizes?: GridColumnSizesType;
}

export interface PromoFeaturesItem {
    title: string;
    text: string;
    theme?: 'accent' | 'accent-light' | 'primary';
    media?: ThemeSupporting<MediaProps>;
}

export interface PromoFeaturesProps extends Animatable {
    items: PromoFeaturesItem[];
    title?: TitleItemProps | string;
    description?: string;
    theme?: 'grey' | 'default';
}

export interface QuestionItem {
    title: string;
    text: string;
    listStyle?: 'dash' | 'disk';
    link?: LinkProps;
}

export interface QuestionsProps
    extends Omit<ContentBlockProps, 'colSizes' | 'centered' | 'size' | 'theme'> {
    items: QuestionItem[];
}

export interface QuestionBlockItemProps extends QuestionItem {
    isOpened: boolean;
    onClick: () => void;
}

export interface BannerBlockProps extends BannerCardProps, Animatable {}

export interface CompaniesBlockProps extends Animatable {
    title: string;
    description?: string;
    images: ThemeSupporting<ImageDeviceProps>;
}

export interface MediaBaseBlockProps extends Animatable, MediaContentProps {
    direction?: MediaDirection;
    mobileDirection?: MediaDirection;
    largeMedia?: boolean;
    smallMedia?: boolean;
    mediaOnly?: boolean;
    mediaOnlyColSizes?: GridColumnSizesType;
}

export interface MediaContentProps
    extends Omit<ContentBlockProps, 'colSizes' | 'text' | 'title' | 'theme' | 'centered'> {
    title: string;
    description?: string;
    /** @deprecated  Use array of buttons from ContentBlockProps instead**/
    button?: ButtonProps;
}

export interface MediaBlockProps extends MediaBaseBlockProps, WithBorder {
    media: ThemeSupporting<MediaProps>;
}

export interface MapBlockProps extends MediaBaseBlockProps, WithBorder {
    map: MapProps;
}

export interface InfoBlockProps {
    theme?: TextTheme;
    backgroundColor?: ThemeSupporting<string>;
    /** @deprecated **/
    title?: string;
    /** @deprecated **/
    buttons?: Pick<ButtonProps, 'url' | 'text' | 'theme'>[];
    /** @deprecated **/
    sectionsTitle?: string;
    /** @deprecated **/
    links?: Pick<LinkProps, 'text' | 'url'>[];
    leftContent?: Omit<ContentBlockProps, 'colSizes' | 'theme' | 'size'>;
    rightContent?: Omit<ContentBlockProps, 'colSizes' | 'theme' | 'size'>;
}

export type MarqueeLinksItem = {
    src: string;
    url?: string;
};

export interface MarqueeLinksBlockProps {
    title?: string;
    description?: string;
    textAlign?: 'left' | 'right' | 'center';
    speed?: number;
    items: MarqueeLinksItem[];
}

export interface TableProps {
    content: string[][];
    legend?: string[];
    hideLegend?: boolean;
    justify?: Justify[];
    marker?: LegendTableMarkerType;
    /**
     * Only as accessible name, not displayed explicitly
     */
    caption?: string;
}

export interface TableBlockProps {
    title: string;
    table: TableProps;
    description?: string;
    links?: LinkProps[];
    buttons?: ButtonProps[];
}

export interface FormWallBlockProps {
    formData: FormBlockHubspotData;
    slug?: string;
}

export interface HighlightTableData {
    content: string[][];
    customColumnWidth?: (12 | 6 | 4 | 3 | 2)[];
    justify?: ('left' | 'right' | 'center')[];
    highlighter?: string[];
}

export interface HighlightTableBlockProps {
    title?: string;
    description?: string;
    table: HighlightTableData;
    legend?: string[];
    legendPosition?: 'top' | 'bottom';
    legendAlign?: 'left' | 'center' | 'right';
    contentSize?: ContentSize;
}

export interface TabsBlockItem
    extends Omit<ContentBlockProps, 'size' | 'colSizes' | 'centered' | 'theme'>,
        WithBorder {
    tabName: string;
    /**
     * @deprecated Use array links from ContentBlockProps instead
     */
    link?: LinkProps;
    image?: ThemedImage;
    caption?: string;
    media?: ThemedMediaProps;
}

export interface TabsBlockProps extends Animatable {
    title?: TitleItemProps | string;
    description?: string;
    tabsColSizes?: GridColumnSizesType;
    centered?: boolean;
    direction?: MediaDirection;
    items: TabsBlockItem[];
    contentSize?: ContentSize;
}

export interface TabLinksBlockProps {
    items: {
        active?: boolean;
        text: string;
        url: string;
    }[];
}

export interface ServicesBlockProps {
    title?: string;
    serviceLinkType?: 'doc' | 'price';
}

export interface EventsFeedBlockProps {
    image?: string;
    title?: string;
}

export interface IrEventsFeedUpcomingBlockProps {
    label?: TagProps;
    empty?: string;
}

export interface IrEventsFeedRecentBlockProps {
    label?: TagProps;
    empty?: string;
}

export interface BlogFeedBlockProps {
    image?: string;
    title?: string;
}

export interface RelevantPostsBlockProps {
    title?: TitleItemProps | string;
    description?: string;
    slider: boolean;
    date?: 'today' | 'week' | 'month';
    dateStart?: string;
    dateEnd?: string;
    tags?: string[];
    services?: string[];
    pinnedPost?: boolean;
}

export interface RelevantReportsCardsBlockProps {
    typeKey: string;
    link?: LinkProps;
    title?: TitleItemProps | string;
    description?: string;
    slider: boolean;
    date?: 'today' | 'week' | 'month';
    dateStart?: string;
    dateEnd?: string;
}

export interface RelevantReportsBlockProps {
    typeKey: string;
    link?: LinkProps;
    title?: TitleItemProps | string;
    description?: string;
    slider: boolean;
    date?: 'today' | 'week' | 'month';
    dateStart?: string;
    dateEnd?: string;
}

export interface PressReleasesBlockProps {
    title?: string;
}

export interface LinkTableBlockProps {
    title: TitleItemBaseProps;
    items: LinkProps[][];
}

export interface QuotesItem {
    avatar?: string;
    logo?: string;
    name?: string;
    description?: string;
    quote: string;
    style?: 'normal' | 'long' | 'short';
    buttonText?: string;
    buttonUrl?: string;
}

export interface QuotesItemProps extends Themable, QuotesItem {}

export interface QuotesBlockProps extends Themable {
    items: QuotesItem[];
    background?: string;
    backgroundColor?: string;
}

export interface ReportsItem {
    title?: string;
    date?: string;
    text?: string;
    files?: ReportFileType[];
}

export interface ReportsItemProps extends ReportsItem {
    filesOutline?: boolean;
}

export interface ReportsBlockProps {
    title?: TitleItemBaseProps | string;
    typeKey: string;
    empty?: string;
}

export interface ReportsCardsBlockProps extends ReportsBlockProps {
    postscript?: string;
}

export interface ReportsSectionsItem {
    title?: string;
    files?: ReportFileType[];
}

export interface ReportsSectionsSection {
    title?: string;
    date?: string;
    items?: ReportsSectionsItem[];
}

export interface ReportsSectionsBlockProps extends ReportsBlockProps {}

export interface CardLayoutBlockProps extends Childable, Animatable, LoadableChildren {
    title?: TitleItemProps | string;
    titleClassName?: string;
    description?: string;
    colSizes?: GridColumnSizesType;
    itemColSizes?: {
        [index: number]: GridColumnSizesType;
    };
    background?: ThemeSupporting<
        BackgroundImageProps & {
            border?: CardBorder;
        }
    >;
    largeItemGap?: boolean;
}

export type FilterTag = {
    id: string;
    label: string;
};

export type FilterItem = {
    tags: string[];
    card: SubBlockModels;
};

export interface FilterBlockProps extends Animatable, LoadableChildren {
    title?: TitleItemProps | string;
    description?: string;
    tags: FilterTag[];
    items: FilterItem[];
    tagButtonSize?: ButtonSize;
    allTag?: boolean | string;
    colSizes?: GridColumnSizesType;
    centered?: boolean;
}

export interface IconsBlockItemProps extends AnalyticsEventsBase {
    url: string;
    text: string;
    src: ThemeSupporting<string>;
}

export interface IconsBlockProps {
    title?: string;
    description?: string;
    size?: 's' | 'm' | 'l';
    items: IconsBlockItemProps[];
    colSizes?: GridColumnSizesType;
}

interface ContentLayoutBlockParams {
    size?: ContentSize;
    background?: ThemeSupporting<BackgroundImageProps>;
    centered?: boolean;
    theme?: ContentTheme;
    textWidth?: ContentTextSize;
}

export interface ContentLayoutBlockProps extends ContentLayoutBlockParams {
    textContent: ContentBlockProps;
    fileContent?: FileLinkProps[];
}

export type SVGIcon = React.FC<React.SVGProps<SVGSVGElement>>;

export interface ContentItemProps {
    title?: string;
    text?: string;
    icon: ThemeSupporting<ImageProps | SVGIcon>;
}

export interface ContentListProps {
    list: ContentItemProps[];
    size: ContentSize;
    theme?: ContentTheme;
}

export interface ContentBlockProps {
    title?: TitleItemBaseProps | string;
    subtitle?: string;
    summary?: string;
    titleId?: string;
    text?: string;
    textId?: string;
    additionalInfo?: string;
    links?: LinkProps[];
    subtitleLinks?: LinkProps[];
    buttons?: ButtonProps[];
    size?: ContentSize;
    colSizes?: GridColumnSizesType;
    centered?: boolean;
    theme?: ContentTheme;
    list?: ContentItemProps[];
    controlPosition?: 'default' | 'bottom';
}

export enum PCShareSocialNetwork {
    Vk = 'vk',
    Telegram = 'telegram',
    Twitter = 'twitter',
    Facebook = 'facebook',
    LinkedIn = 'linkedin',
}

export interface ShareBlockProps {
    items: PCShareSocialNetwork[];
    title?: string;
}

export enum FormBlockDataTypes {
    YANDEX = 'yandex',
    HUBSPOT = 'hubspot',
}

export enum FormBlockDirection {
    FormContent = 'form-content',
    ContentForm = 'content-form',
    Center = 'center',
}

export interface FormBlockYandexData {
    yandex: ThemeSupporting<YandexFormProps>;
}

export interface FormBlockHubspotData {
    hubspot: ThemeSupporting<HubspotFormProps>;
}

export type FormBlockData = FormBlockYandexData | FormBlockHubspotData;

export interface FormBlockProps {
    formData?: FormBlockData;
    title?: string;
    textContent?: Omit<ContentBlockProps, 'centered' | 'colSizes' | 'size'>;
    textFormContent?: Omit<ContentBlockProps, 'centered' | 'colSizes' | 'size'>;
    direction?: FormBlockDirection;
    background?: ThemeSupporting<BackgroundImageProps>;
    backgroundColor?: string;
    image?: string;
    slug?: string;
    fullWidth?: boolean;
}

//block models
export type HeaderBlockModel = {
    type: BlockType.HeaderBlock;
} & HeaderBlockProps;

export type SliderBlockModel = {
    type: BlockType.SliderBlock;
} & SliderProps;

export type ExtendedFeaturesBlockModel = {
    type: BlockType.ExtendedFeaturesBlock;
} & ExtendedFeaturesProps;

export type PromoFeaturesBlockModel = {
    type: BlockType.PromoFeaturesBlock;
} & PromoFeaturesProps;

export type QuestionsBlockModel = {
    type: BlockType.QuestionsBlock;
} & QuestionsProps;

export type BannerBlockModel = {
    type: BlockType.BannerBlock;
} & BannerBlockProps;

export type CompaniesBlockModel = {
    type: BlockType.CompaniesBlock;
} & CompaniesBlockProps;

export type MediaBlockModel = {
    type: BlockType.MediaBlock;
} & MediaBlockProps;

export type MapBlockModel = {
    type: BlockType.MapBlock;
} & MapBlockProps;

export type InfoBlockModel = {
    type: BlockType.InfoBlock;
} & InfoBlockProps;

export type TableBlockModel = {
    type: BlockType.TableBlock;
} & TableBlockProps;

export type HighlightTableBlockModel = {
    type: BlockType.HighlightTableBlock;
} & HighlightTableBlockProps;

export type TabsBlockModel = {
    type: BlockType.TabsBlock;
} & TabsBlockProps;

export type TabLinksBlockModel = {
    type: BlockType.TabLinksBlock;
} & TabLinksBlockProps;

export type CardLayoutBlockModel = {
    type: BlockType.CardLayoutBlock;
} & CardLayoutBlockProps;

export type FilterBlockModel = {
    type: BlockType.FilterBlock;
} & FilterBlockProps;

export type IconsBlockModel = {
    type: BlockType.IconsBlock;
} & IconsBlockProps;

export type HeaderSliderBlockModel = {
    type: BlockType.HeaderSliderBlock;
} & HeaderSliderBlockProps;

export type ContentLayoutBlockModel = {
    type: BlockType.ContentLayoutBlock;
} & ContentLayoutBlockProps;

export type ShareBLockModel = {
    type: BlockType.ShareBlock;
} & ShareBlockProps;

export type FormBlockModel = {
    type: BlockType.FormBlock;
} & FormBlockProps;

export type MarqueeLinksBlockModel = {
    type: BlockType.MarqueeLinksBlock;
} & MarqueeLinksBlockProps;

export type SolutionsBlockModel = {
    type: BlockType.SolutionsBlock;
};

export type QuotesBlockModel = {
    type: BlockType.QuotesBlock;
} & QuotesBlockProps;

export type ReportsBlockModel = {
    type: BlockType.ReportsBlock;
} & ReportsBlockProps;

export type ReportsCardsBlockModel = {
    type: BlockType.ReportsCardsBlock;
} & ReportsCardsBlockProps;

export type ReportsSectionsBlockModel = {
    type: BlockType.ReportsSectionsBlock;
} & ReportsSectionsBlockProps;

export type LinkTableBlockModel = {
    type: BlockType.LinkTableBlock;
} & LinkTableBlockProps;

export type ServicesBlockModel = {
    type: BlockType.ServicesBlock;
} & ServicesBlockProps;

export type EventsFeedBlockModel = {
    type: BlockType.EventsFeedBlock;
} & EventsFeedBlockProps;

export type IrEventsFeedUpcomingBlockModel = {
    type: BlockType.IrEventsFeedUpcomingBlock;
} & IrEventsFeedUpcomingBlockProps;

export type IrEventsFeedRecentBlockModel = {
    type: BlockType.IrEventsFeedRecentBlock;
} & IrEventsFeedRecentBlockProps;

export type BlogFeedBlockModel = {
    type: BlockType.BlogFeedBlock;
} & BlogFeedBlockProps;

export type RelevantPostsBlockModel = {
    type: BlockType.RelevantPostsBlock;
} & RelevantPostsBlockProps;

export type RelevantReportsCardsBlockModel = {
    type: BlockType.RelevantReportsCardsBlock;
} & RelevantReportsCardsBlockProps;

export type RelevantReportsBlockModel = {
    type: BlockType.RelevantReportsBlock;
} & RelevantReportsBlockProps;

export type PressReleasesBlockModel = {
    type: BlockType.PressReleasesBlock;
} & PressReleasesBlockProps;

export type FormWallBlockModel = {
    type: BlockType.FormWallBlock;
} & FormWallBlockProps;

// unstable block models
export type SliderNewBlockModel = {
    type: BlockType.SliderNewBlock;
} & SliderNewProps;

type BlockModels =
    | SliderBlockModel
    | ExtendedFeaturesBlockModel
    | PromoFeaturesBlockModel
    | QuestionsBlockModel
    | BannerBlockModel
    | CompaniesBlockModel
    | MediaBlockModel
    | MapBlockModel
    | InfoBlockModel
    | TableBlockModel
    | HighlightTableBlockModel
    | TabsBlockModel
    | TabLinksBlockModel
    | HeaderBlockModel
    | IconsBlockModel
    | HeaderSliderBlockModel
    | CardLayoutBlockModel
    | ContentLayoutBlockModel
    | ShareBLockModel
    | FilterBlockModel
    | FormBlockModel
    | MarqueeLinksBlockModel
    | SolutionsBlockModel
    | ServicesBlockModel
    | QuotesBlockModel
    | ReportsBlockModel
    | ReportsCardsBlockModel
    | ReportsSectionsBlockModel
    | LinkTableBlockModel
    | EventsFeedBlockModel
    | IrEventsFeedUpcomingBlockModel
    | IrEventsFeedRecentBlockModel
    | BlogFeedBlockModel
    | RelevantPostsBlockModel
    | RelevantReportsCardsBlockModel
    | RelevantReportsBlockModel
    | PressReleasesBlockModel
    | FormWallBlockModel;

type UnstableBlockModels = SliderNewBlockModel;

export type Block = (BlockModels | UnstableBlockModels) & BlockBaseProps;
