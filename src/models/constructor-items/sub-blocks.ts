import {ClassNameProps, QuoteType} from '../../models';
import {ThemeSupporting} from '../../utils';
import {HubspotEventData, HubspotEventHandlers} from '../../utils/hubspot';
import {AnalyticsEventsBase} from '../common';

import {ContentBlockProps} from './blocks';
import {
    AuthorItem,
    ButtonProps,
    CardBaseProps,
    CardLayoutProps,
    ContentTheme,
    DividerSize,
    ImageCardMargins,
    ImageObjectProps,
    ImageProps,
    LinkProps,
    MediaProps,
    MediaView,
    PriceDetailedProps,
    ServiceLabelProps,
    TagProps,
    TextTheme,
    Themable,
    ThemedImage,
    TitleItemBaseProps,
    TitleTextSize,
} from './common';

export enum SubBlockType {
    Divider = 'divider',
    Quote = 'quote',
    /**
     * @deprecated Will be removed
     */
    PriceDetailed = 'price-detailed',
    MediaCard = 'media-card',
    BannerCard = 'banner-card',
    LayoutItem = 'layout-item',
    BackgroundCard = 'background-card',
    BasicCard = 'basic-card',
    AttachmentCard = 'attachment-card',
    CaseStudyCard = 'case-study-card',
    Content = 'content',
    HubspotForm = 'hubspot-form',
    PriceCard = 'price-card',
    ImageCard = 'image-card',
    ContentLayoutCard = 'content-layout-card',
    Card = 'card',
    PostCard = 'post-card',
    FeedCard = 'feed-card',
    EventPersonCard = 'event-person-card',
}

export enum IconPosition {
    Top = 'top',
    Left = 'left',
}

export interface PositionedIcon {
    value: ImageProps;
    position?: IconPosition;
}

export interface IconWrapperProps {
    icon?: PositionedIcon;
}

export enum ImageCardDirection {
    Direct = 'direct',
    Reverse = 'reverse',
}

export const SubBlockTypes = Object.values(SubBlockType);

export interface DividerProps {
    size?: DividerSize;
    border?: boolean;
}

export interface HubspotFormProps extends HubspotEventHandlers, AnalyticsEventsBase {
    className?: string;
    theme?: ContentTheme;
    isMobile?: boolean;
    region?: string;
    portalId: string;
    formId: string;
    formInstanceId?: string;
    formClassName?: string;

    /**
     * To use this handler for component that is rendered in iframe, set up useLoopBackHubspotEvents hook on top level frame
     */
    onBeforeLoad?: (arg: HubspotEventData) => void;

    /**
     * To use this handler for component that is rendered in iframe, set up useLoopBackHubspotEvents hook on top level frame
     */
    onBeforeSubmit?: (arg: HubspotEventData) => void;

    /**
     * To use this handler for component that is rendered in iframe, set up useLoopBackHubspotEvents hook on top level frame
     */
    onSubmit?: (arg: HubspotEventData) => void;

    /**
     * To use this handler for component that is rendered in iframe, set up useLoopBackHubspotEvents hook on top level frame
     */
    onLoad?: (arg: HubspotEventData) => void;
    hubspotEvents?: string[];
    createDOMElement?: boolean;
}

//cards
export interface QuoteProps extends Themable, CardBaseProps {
    text?: string;
    // for backward compatibility, yfmText will become property 'text' in major
    yfmText?: string;
    image: ThemedImage;
    logo: ThemeSupporting<ImageProps>;
    color?: string;
    /**
     * @deprecated use property button instead
     */
    url?: string;
    /**
     * @deprecated use property button instead
     */
    urlTitle?: string;
    author?: AuthorItem;
    /**
     * @deprecated use property button instead
     */
    buttonText?: string;
    theme?: TextTheme;
    quoteType?: QuoteType;
    button?: ButtonProps;
}

export interface BackgroundCardProps
    extends CardBaseProps,
        AnalyticsEventsBase,
        CardLayoutProps,
        Omit<ContentBlockProps, 'colSizes' | 'centered' | 'controlPosition'> {
    url?: string;
    urlTitle?: string;
    target?: string;
    background?: ThemeSupporting<ImageObjectProps>;
    backgroundPosition?: 'left' | 'right' | 'center' | 'top' | 'bottom';
    paddingBottom?: 's' | 'm' | 'l' | 'xl';
    backgroundColor?: string;
    label?: TagProps;
}

export interface BasicCardProps
    extends CardBaseProps,
        AnalyticsEventsBase,
        CardLayoutProps,
        Omit<ContentBlockProps, 'colSizes' | 'centered' | 'size' | 'theme' | 'controlPosition'> {
    url: string;
    urlTitle?: string;
    icon?: ThemeSupporting<ImageProps>;
    target?: string;
    iconPosition?: IconPosition;
    label?: TagProps;
}

export interface CardProps extends CardBaseProps, Pick<ContentBlockProps, 'summary' | 'text'> {
    header: {
        image: string;
        title: string;
    };
    service?: ServiceLabelProps;
    label?: TagProps;
}

export interface BannerCardProps {
    title: string;
    subtitle?: string;
    className?: string;
    image?: ThemeSupporting<string>;
    disableCompress?: boolean;
    color?: ThemeSupporting<string>;
    theme?: TextTheme;
    button?: Pick<ButtonProps, 'text' | 'url' | 'target' | 'theme'>;
    mediaView?: MediaView;
}

export interface MediaCardProps extends MediaProps, AnalyticsEventsBase, CardBaseProps {
    label?: TagProps;
}

export interface PriceCardProps extends CardBaseProps, Pick<ContentBlockProps, 'theme'> {
    title: string;
    summary?: string;
    price: string;
    pricePeriod?: string;
    priceDetails?: string;
    description?: string;
    buttons?: ButtonProps[];
    links?: LinkProps[];
    backgroundColor?: string;
    list?: string[];
    label?: TagProps;
}

export interface LayoutItemProps extends ClassNameProps, CardLayoutProps, AnalyticsEventsBase {
    title?: {
        text?: string;
        size?: TitleTextSize;
    };
    afterTitle?: {
        text?: string;
        size?: TitleTextSize;
    };
    summary?: string;
    rightSpace?: boolean;
    content: Omit<ContentBlockProps, 'colSizes' | 'centered' | 'size'>;
    media?: ThemeSupporting<MediaProps>;
    metaInfo?: string[];
    border?: boolean;
    fullscreen?: boolean;
    icon?: ThemeSupporting<PositionedIcon>;
    label?: TagProps;
}

export interface ImageCardProps
    extends CardBaseProps,
        CardLayoutProps,
        Omit<ContentBlockProps, 'colSizes' | 'centered' | 'controlPosition'> {
    image: ThemeSupporting<ImageProps>;
    enableImageBorderRadius?: boolean;
    margins?: ImageCardMargins;
    direction?: ImageCardDirection;
    backgroundColor?: string;
    url?: string;
    urlTitle?: string;
    target?: string;
    label?: TagProps;
}

export enum PostCardSize {
    SMALL = 's',
    MEDIUM = 'm',
}

export enum PostCardTitleHeadingLevel {
    H2 = 'h2',
    H3 = 'h3',
}

interface PostCardParams {
    fullWidth?: boolean;
    showTag?: boolean;
    size?: PostCardSize;
    titleHeadingLevel?: PostCardTitleHeadingLevel;
}

export interface PostCardProps extends PostCardParams {
    date: string;
    description?: string;
    image: string;
    readingTime?: number;
    slug: string;
    tags: {slug: string; name: string}[];
    title: string;
    url: string;
}

export interface FeedCardProps {
    url?: string;
    type?: string;
    image?: string;
    title?: string;
    description?: string;
    info?: string;
    place?: string;
}

export interface AttachmentCardItemType {
    icon: ThemedImage;
    name: string;
    link: string;
    target?: string;
    download?: boolean;
}

export interface AttachmentCardProps extends CardBaseProps {
    url?: string;
    title?: TitleItemBaseProps | string;
    date?: string;
    time?: string;
    items?: AttachmentCardItemType[];
    label?: TagProps;
    column?: boolean;
}

export interface CaseStudyCardProps {
    title: string;
    image: string;
    text: string;
    background?: string;
    highlights: {
        kicker?: string;
        title: string;
        subtitle?: string;
        background?: string;
    }[];
    labels: TagProps[];
}

export interface EventPersonCardProps {
    image: ThemeSupporting<ImageProps>;
    title?: TitleItemBaseProps | string;
    text?: string;
    links?: LinkProps[];
    theme?: ContentTheme;
}

// sub-block models
export type DividerModel = {
    type: SubBlockType.Divider;
} & DividerProps;

export type QuoteModel = {
    type: SubBlockType.Quote;
} & QuoteProps;

export type LayoutItemModel = {
    type: SubBlockType.LayoutItem;
} & LayoutItemProps;

export type BackgroundCardModel = {
    type: SubBlockType.BackgroundCard;
} & BackgroundCardProps;

/** @deprecated */
export type PriceDetailedModel = {
    type: SubBlockType.PriceDetailed;
} & PriceDetailedProps;

export type MediaCardModel = {
    type: SubBlockType.MediaCard;
} & MediaCardProps;

export type HubspotFormModel = {
    type: SubBlockType.HubspotForm;
} & HubspotFormProps;

export type BannerCardModel = {
    type: SubBlockType.BannerCard;
} & BannerCardProps;

export type BasicCardModel = {
    type: SubBlockType.BasicCard;
} & BasicCardProps;

export type PriceCardModel = {
    type: SubBlockType.PriceCard;
} & PriceCardProps;

export type ImageCardModel = {
    type: SubBlockType.ImageCard;
} & ImageCardProps;

export type PostCardModel = {
    type: SubBlockType.PostCard;
} & PostCardProps;

export type FeedCardModel = {
    type: SubBlockType.FeedCard;
} & FeedCardProps;

export type EventPersonCardModel = {
    type: SubBlockType.EventPersonCard;
} & EventPersonCardProps;

export type AttachmentCardModel = {
    type: SubBlockType.AttachmentCard;
} & AttachmentCardProps;

export type CaseStudyCardModel = {
    type: SubBlockType.CaseStudyCard;
} & CaseStudyCardProps;

export type SubBlockModels =
    | DividerModel
    | QuoteModel
    | PriceDetailedModel
    | MediaCardModel
    | BackgroundCardModel
    | HubspotFormModel
    | BannerCardModel
    | BasicCardModel
    | PriceCardModel
    | LayoutItemModel
    | ImageCardModel
    | PostCardModel
    | FeedCardModel
    | EventPersonCardModel
    | AttachmentCardModel
    | CaseStudyCardModel;

export type SubBlock = SubBlockModels;
