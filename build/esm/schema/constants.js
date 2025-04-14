import { BannerBlock, BannerCard, CardLayoutBlock, CompaniesBlock, ContentLayoutBlock, EventsFeedBlock, ExtendedFeaturesBlock, FilterBlock, FormBlock, HeaderBlock, HeaderSliderBlock, IconsBlock, InfoBlock, LinkTableBlock, MapBlock, MarqueeLinksBlock, MediaBlock, PromoFeaturesBlock, QuestionsBlock, QuotesBlock, ServicesBlock, ShareBlock, SliderBlock, SliderNewBlock, SolutionsBlock, TableBlock, TabsBlock, } from './validators/blocks';
import { BackgroundCard, BasicCard, Card, ContentLayoutCard, Divider, ImageCard, MediaCardBlock, PriceCardBlock, PriceDetailedBlock, Quote, } from './validators/sub-blocks';
export const blockSchemas = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Divider), ExtendedFeaturesBlock), PromoFeaturesBlock), SliderBlock), QuestionsBlock), HeaderBlock), BannerBlock), CompaniesBlock), MediaBlock), MapBlock), InfoBlock), TableBlock), TabsBlock), HeaderSliderBlock), IconsBlock), CardLayoutBlock), ContentLayoutBlock), ShareBlock), FilterBlock), FormBlock), SliderNewBlock), MarqueeLinksBlock), SolutionsBlock), ServicesBlock), QuotesBlock), LinkTableBlock), EventsFeedBlock);
export const cardSchemas = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, MediaCardBlock), BannerCard), PriceDetailedBlock), BackgroundCard), Quote), BasicCard), PriceCardBlock), ImageCard), ContentLayoutCard), Card);
export const constructorBlockSchemaNames = [
    'divider',
    'quote',
    'event',
    'post',
    'extended-features-block',
    'promo-features-block',
    'slider-block',
    'questions-block',
    'header-block',
    'banner-block',
    'companies-block',
    'media-block',
    'map-block',
    'info-block',
    'table-block',
    'tabs-block',
    'marquee-links-block',
    /** @deprecated */
    'price-detailed',
    'header-slider-block',
    'cards-with-image-block',
    'icons-block',
    'card-layout-block',
    'content-layout-block',
    'share-block',
    'filter-block',
    'form-block',
    'solutions-block',
    'services-block',
    'quotes-block',
    'link-table-block',
    'events-feed-block',
];
export const constructorCardSchemaNames = [
    'media-card',
    'banner-card',
    /** @deprecated */
    'price-detailed',
    'background-card',
    'quote',
    'basic-card',
    'layout-item',
    'price-card',
    'image-card',
    'content-layout-card',
    'card',
];
