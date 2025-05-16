"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructorCardSchemaNames = exports.constructorBlockSchemaNames = exports.cardSchemas = exports.blockSchemas = void 0;
const blocks_1 = require("./validators/blocks");
const sub_blocks_1 = require("./validators/sub-blocks");
exports.blockSchemas = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, sub_blocks_1.Divider), blocks_1.ExtendedFeaturesBlock), blocks_1.PromoFeaturesBlock), blocks_1.SliderBlock), blocks_1.QuestionsBlock), blocks_1.HeaderBlock), blocks_1.BannerBlock), blocks_1.CompaniesBlock), blocks_1.MediaBlock), blocks_1.MapBlock), blocks_1.InfoBlock), blocks_1.TableBlock), blocks_1.TabsBlock), blocks_1.HeaderSliderBlock), blocks_1.IconsBlock), blocks_1.CardLayoutBlock), blocks_1.ContentLayoutBlock), blocks_1.ShareBlock), blocks_1.FilterBlock), blocks_1.FormBlock), blocks_1.SliderNewBlock), blocks_1.MarqueeLinksBlock), blocks_1.SolutionsBlock), blocks_1.ServicesBlock), blocks_1.QuotesBlock), blocks_1.LinkTableBlock), blocks_1.EventsFeedBlock), blocks_1.PressReleasesBlock);
exports.cardSchemas = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, sub_blocks_1.MediaCardBlock), blocks_1.BannerCard), sub_blocks_1.PriceDetailedBlock), sub_blocks_1.BackgroundCard), sub_blocks_1.Quote), sub_blocks_1.BasicCard), sub_blocks_1.PriceCardBlock), sub_blocks_1.ImageCard), sub_blocks_1.ContentLayoutCard), sub_blocks_1.Card);
exports.constructorBlockSchemaNames = [
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
exports.constructorCardSchemaNames = [
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
