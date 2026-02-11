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
    TitleTextSize,
    WithBorder,
    YandexFormProps,
} from './common';
import {BannerCardProps, HubspotFormProps, SubBlock, SubBlockModels} from './sub-blocks';

export enum BlockType {
    AdvantagesBlock = 'advantages-block',
    BenefitsBlock = 'benefits-block',
    ScrollerBlock = 'scroller-block',
    PromoFeaturesBlock = 'promo-features-block',
    ExtendedFeaturesBlock = 'extended-features-block',
    SliderBlock = 'slider-block',
    QuestionsBlock = 'questions-block',
    BannerBlock = 'banner-block',
    LogoRotatorBlock = 'logo-rotator-block',
    CompaniesBlock = 'companies-block',
    MediaBlock = 'media-block',
    InfoBlock = 'info-block',
    TableBlock = 'table-block',
    TabsBlock = 'tabs-block',
    TabsHighlightTableBlock = 'tabs-highlight-table-block',
    TabLinksBlock = 'tab-links-block',
    HeaderSliderBlock = 'header-slider-block',
    HeaderBlock = 'header-block',
    HeaderMinifyBlock = 'header-minify-block',
    IconsBlock = 'icons-block',
    CardLayoutBlock = 'card-layout-block',
    ContentLayoutBlock = 'content-layout-block',
    BannerMinifyBlock = 'banner-minify-block',
    ShareBlock = 'share-block',
    MapBlock = 'map-block',
    FilterBlock = 'filter-block',
    FilterCardLayoutBlock = 'filter-card-layout-block',
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
    EventsSectionBlock = 'events-section-block',
    BlogFeedBlock = 'blog-feed-block',
    RelevantPostsBlock = 'relevant-posts-block',
    RelevantReportsCardsBlock = 'relevant-reports-cards-block',
    RelevantReportsBlock = 'relevant-reports-block',
    PressReleasesBlock = 'press-releases-block',
    SliderNewBlock = 'slider-new-block',
    HighlightTableBlock = 'highlight-table-block',
    MiniCaseBlock = 'mini-case-block',
    BenchmarkBlock = 'benchmark-block',
}

export const BlockTypes = Object.values(BlockType);
export const HeaderBlockTypes = [
    BlockType.HeaderBlock,
    BlockType.HeaderSliderBlock,
    BlockType.HeaderMinifyBlock,
];

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
    selectionColor?: string;
    blockBackground?: BlockBackgroundType;
    blockUnicorn?: string;
    className?: string;
    qa?: string;
    visibilityFilter?: string | string[];
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
    icon?: 'map' | 'clock' | 'calendar';
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

export type HeaderButtonType = Pick<
    ButtonProps,
    'url' | 'text' | 'img' | 'theme' | 'primary' | 'size' | 'extraProps'
>;

export interface HeaderBlockProps {
    title: string;
    switchingTitle?: SwitchingTitleProps;
    topTags?: HeaderTag[];
    bottomTags?: HeaderTag[];
    overtitle?: string;
    description?: string;
    buttons?: HeaderButtonType[];
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
    backgroundEffect?: {
        firstSrc: string;
        secondSrc: string;
    };
    headerSpace?: boolean;
}

export interface HeaderMinifyButtonProps {
    url: string;
    icon?: string;
    text: string;
}

export interface HeaderMinifyBlockProps {
    title: string;
    description?: string;
    button?: HeaderMinifyButtonProps;
    backgroundEffect?: {
        firstSrc: string;
        secondSrc: string;
    };
}

export interface ExtendedFeaturesItem
    extends Omit<ContentBlockProps, 'theme' | 'centered' | 'colSizes' | 'size' | 'title'> {
    title: Pick<TitleItemProps, 'text' | 'textSize'> | string;
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
    extends Omit<ContentBlockProps, 'colSizes' | 'centered' | 'size' | 'theme'>,
        Animatable {
    items: QuestionItem[];
    firstOpened?: boolean;
}

export interface QuestionBlockItemProps extends QuestionItem {
    isOpened: boolean;
    onClick: () => void;
}

export interface BannerBlockProps extends BannerCardProps, Animatable {}

export interface LogoRotatorBlockProps extends Animatable {
    title?: string;
    items: {url: string; src: string}[];
    count: number;
    colSizes?: Partial<Record<GridColumnSize, number>>;
    theme?: TextTheme;
    rowMode?: boolean;
}

export interface AdvantagesBlockProps {
    title?: string;
    link?: Pick<LinkProps, 'text' | 'url'>;
    logo?: string;
    items?: {
        image?: string;
        title: string;
        description: string;
        url: string;
    }[];
}

export interface BenefitsBlockCard {
    icon?: string;
    title?: string;
    text?: string;
}

export interface BenefitsBlockItemLabel {
    title?: string;
    text?: string;
}

export interface BenefitsBlockItemData {
    images: string[];
    columns: number[];
    rows: number[];
}

export interface BenefitsBlockItem extends BenefitsBlockItemLabel, BenefitsBlockItemData {}

export interface BenefitsBlockProps extends Themable, Animatable {
    titleOne?: string;
    postTitleOne?: string;
    textOne?: string;
    titleTwo?: string;
    postTitleTwo?: string;
    textTwo?: string;
    background?: string;
    cards?: BenefitsBlockCard[];
    items?: BenefitsBlockItem[];
    accentColor?: string;
}

export interface ScrollerBlockProps extends Childable, Animatable {
    title?: string;
    text?: string;
    widths?: string[];
    gapLong?: boolean;
}

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

export interface InfoBlockProps extends Animatable {
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

export interface MarqueeLinksBlockProps extends Animatable {
    title?: string;
    description?: string;
    textAlign?: 'left' | 'right' | 'center';
    speed?: number;
    items: MarqueeLinksItem[];
}

export interface SolutionsBlockProps extends Animatable {}

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

export interface TableBlockProps extends Animatable {
    title: string;
    table: TableProps;
    description?: string;
    links?: LinkProps[];
    buttons?: ButtonProps[];
    titleSize?: TitleTextSize;
}

export interface FormWallBlockProps {
    formData: FormBlockHubspotData;
    slug?: string;
}

type HighlightTableColumnWidth = 12 | 6 | 4 | 3 | 2;

export type HighlightTableCell =
    | {
          cell: string;
          buttonUrl?: string;
          buttonText?: string;
          columnWidth?: HighlightTableColumnWidth;
      }
    | string;

export interface HighlightTableData {
    content: HighlightTableCell[][];
    customColumnWidth?: HighlightTableColumnWidth[];
    justify?: ('left' | 'right' | 'center')[];
    highlighter?: string[];
}

export interface HighlightTableBlockProps extends Animatable {
    title?: string;
    description?: string;
    table: HighlightTableData;
    legend?: string[];
    legendPosition?: 'top' | 'bottom';
    legendAlign?: 'left' | 'center' | 'right';
    contentSize?: ContentSize;
    rowHoverColor?: string;
    rowHoverIncrease?: boolean;
}

export interface MiniCaseBlockProps extends Pick<SliderProps, 'title' | 'description'> {
    items: string[];
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

export interface TabsHighlightTableBlockItem extends HighlightTableBlockProps {
    tabName: string;
}

export interface TabsHighlightTableBlockProps extends Animatable {
    title?: TitleItemProps | string;
    description?: string;
    tabsColSizes?: GridColumnSizesType;
    centered?: boolean;
    items: TabsHighlightTableBlockItem[];
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

export interface EventsSectionBlockProps {
    typeKey: string;
    title?: TitleItemProps | string;
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
    count?: number;
}

export interface PressReleasesBlockProps {
    title?: string;
}

export interface LinkTableBlockProps extends Animatable {
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

export interface ReportsBlockProps {
    title?: TitleItemBaseProps | string;
    typeKey: string;
    empty?: string;
}

export interface ReportsCardsBlockProps extends ReportsBlockProps {
    postscript?: string;
}

export interface ReportSectionItemProps {
    title?: string;
    files?: ReportFileType[];
}

export interface ReportSectionProps {
    title?: string;
    date?: string;
    items?: ReportSectionItemProps[];
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

export interface BenchmarkBlockProps extends Animatable {
    title?: string;
    duration?: number;
    data: {
        title?: string;
        sizes?: GridColumnSizesType;
        items: {
            top?: string;
            value: number;
            init?: number;
            postfix?: string;
            bottom?: string;
        }[];
    }[];
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

export type FilterCardLayoutItem = {
    tags: string[];
} & CardLayoutBlockModel;

export interface FilterCardLayoutBlockProps extends Animatable, LoadableChildren {
    title?: TitleItemProps | string;
    description?: string;
    tags: FilterTag[];
    items: FilterCardLayoutItem[];
    tagButtonSize?: ButtonSize;
    allTag?: boolean | string;
    centered?: boolean;
}

export interface IconsBlockItemProps extends AnalyticsEventsBase {
    url: string;
    text: string;
    src: ThemeSupporting<string>;
}

export interface IconsBlockProps extends Animatable {
    title?: string;
    description?: string;
    size?: 's' | 'm' | 'l';
    items: IconsBlockItemProps[];
    colSizes?: GridColumnSizesType;
}

interface ContentLayoutBlockParams {
    size?: ContentSize;
    background?: ThemeSupporting<BackgroundImageProps>;
    unicorn?: string;
    centered?: boolean;
    theme?: ContentTheme;
    textWidth?: ContentTextSize;
}

export interface ContentLayoutBlockProps extends ContentLayoutBlockParams, Animatable {
    textContent: ContentBlockProps;
    fileContent?: FileLinkProps[];
}

export interface BannerMinifyButtonProps {
    url: string;
    text: string;
    theme: 'outline' | 'normal';
}

export interface BannerMinifyBlockProps extends Animatable {
    title?: string;
    text?: string;
    buttons?: BannerMinifyButtonProps[];
    theme?: ContentTheme;
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
    fullWidthContent?: boolean;
}

//block models
export type HeaderBlockModel = {
    type: BlockType.HeaderBlock;
} & HeaderBlockProps;

export type HeaderMinifyBlockModel = {
    type: BlockType.HeaderMinifyBlock;
} & HeaderMinifyBlockProps;

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

export type LogoRotatorBlockModel = {
    type: BlockType.LogoRotatorBlock;
} & LogoRotatorBlockProps;

export type AdvantagesBlockModel = {
    type: BlockType.AdvantagesBlock;
} & AdvantagesBlockProps;

export type BenefitsBlockModel = {
    type: BlockType.BenefitsBlock;
} & BenefitsBlockProps;

export type ScrollerBlockModel = {
    type: BlockType.ScrollerBlock;
} & ScrollerBlockProps;

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

export type MiniCaseBlockModel = {
    type: BlockType.MiniCaseBlock;
} & MiniCaseBlockProps;

export type TabsBlockModel = {
    type: BlockType.TabsBlock;
} & TabsBlockProps;

export type TabsHighlightTableBlockModel = {
    type: BlockType.TabsHighlightTableBlock;
} & TabsHighlightTableBlockProps;

export type TabLinksBlockModel = {
    type: BlockType.TabLinksBlock;
} & TabLinksBlockProps;

export type CardLayoutBlockModel = {
    type: BlockType.CardLayoutBlock;
} & CardLayoutBlockProps;

export type FilterBlockModel = {
    type: BlockType.FilterBlock;
} & FilterBlockProps;

export type FilterCardLayoutBlockModel = {
    type: BlockType.FilterCardLayoutBlock;
} & FilterCardLayoutBlockProps;

export type IconsBlockModel = {
    type: BlockType.IconsBlock;
} & IconsBlockProps;

export type HeaderSliderBlockModel = {
    type: BlockType.HeaderSliderBlock;
} & HeaderSliderBlockProps;

export type ContentLayoutBlockModel = {
    type: BlockType.ContentLayoutBlock;
} & ContentLayoutBlockProps;

export type BannerMinifyBlockModel = {
    type: BlockType.BannerMinifyBlock;
} & BannerMinifyBlockProps;

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
} & SolutionsBlockProps;

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

export type BenchmarkBlockModel = {
    type: BlockType.BenchmarkBlock;
} & BenchmarkBlockProps;

export type EventsSectionBlockModel = {
    type: BlockType.EventsSectionBlock;
} & EventsSectionBlockProps;

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

export type SliderNewBlockModel = {
    type: BlockType.SliderNewBlock;
} & SliderNewProps;

type BlockModels =
    | SliderBlockModel
    | ExtendedFeaturesBlockModel
    | PromoFeaturesBlockModel
    | QuestionsBlockModel
    | BannerBlockModel
    | LogoRotatorBlockModel
    | AdvantagesBlockModel
    | BenefitsBlockModel
    | ScrollerBlockModel
    | CompaniesBlockModel
    | MediaBlockModel
    | MapBlockModel
    | InfoBlockModel
    | TableBlockModel
    | HighlightTableBlockModel
    | MiniCaseBlockModel
    | TabsBlockModel
    | TabsHighlightTableBlockModel
    | TabLinksBlockModel
    | HeaderBlockModel
    | HeaderMinifyBlockModel
    | IconsBlockModel
    | HeaderSliderBlockModel
    | CardLayoutBlockModel
    | ContentLayoutBlockModel
    | BannerMinifyBlockModel
    | ShareBLockModel
    | FilterBlockModel
    | FilterCardLayoutBlockModel
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
    | BenchmarkBlockModel
    | EventsSectionBlockModel
    | BlogFeedBlockModel
    | RelevantPostsBlockModel
    | RelevantReportsCardsBlockModel
    | RelevantReportsBlockModel
    | PressReleasesBlockModel
    | FormWallBlockModel
    | SliderNewBlockModel;

export type Block = BlockModels & BlockBaseProps;
