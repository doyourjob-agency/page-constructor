"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormBlockDirection = exports.FormBlockDataTypes = exports.PCShareSocialNetwork = exports.SliderType = exports.SliderBreakpointNames = exports.HeaderBlockTypes = exports.BlockTypes = exports.BlockType = void 0;
var BlockType;
(function (BlockType) {
    BlockType["PromoFeaturesBlock"] = "promo-features-block";
    BlockType["ExtendedFeaturesBlock"] = "extended-features-block";
    BlockType["SliderBlock"] = "slider-block";
    BlockType["QuestionsBlock"] = "questions-block";
    BlockType["BannerBlock"] = "banner-block";
    BlockType["CompaniesBlock"] = "companies-block";
    BlockType["MediaBlock"] = "media-block";
    BlockType["InfoBlock"] = "info-block";
    BlockType["TableBlock"] = "table-block";
    BlockType["TabsBlock"] = "tabs-block";
    BlockType["HeaderSliderBlock"] = "header-slider-block";
    BlockType["HeaderBlock"] = "header-block";
    BlockType["IconsBlock"] = "icons-block";
    BlockType["CardLayoutBlock"] = "card-layout-block";
    BlockType["ContentLayoutBlock"] = "content-layout-block";
    BlockType["ShareBlock"] = "share-block";
    BlockType["MapBlock"] = "map-block";
    BlockType["FilterBlock"] = "filter-block";
    BlockType["FormBlock"] = "form-block";
    BlockType["MarqueeLinksBlock"] = "marquee-links-block";
    BlockType["SolutionsBlock"] = "solutions-block";
    BlockType["ServicesBlock"] = "services-block";
    BlockType["QuotesBlock"] = "quotes-block";
    BlockType["LinkTableBlock"] = "link-table-block";
    BlockType["EventsFeedBlock"] = "events-feed-block";
    // unstable
    BlockType["SliderNewBlock"] = "slider-new-block";
})(BlockType = exports.BlockType || (exports.BlockType = {}));
exports.BlockTypes = Object.values(BlockType);
exports.HeaderBlockTypes = [BlockType.HeaderBlock, BlockType.HeaderSliderBlock];
var SliderBreakpointNames;
(function (SliderBreakpointNames) {
    SliderBreakpointNames["Sm"] = "sm";
    SliderBreakpointNames["Md"] = "md";
    SliderBreakpointNames["Lg"] = "lg";
    SliderBreakpointNames["Xl"] = "xl";
})(SliderBreakpointNames = exports.SliderBreakpointNames || (exports.SliderBreakpointNames = {}));
var SliderType;
(function (SliderType) {
    SliderType["MediaCard"] = "media-card";
    SliderType["HeaderCard"] = "header-card";
})(SliderType = exports.SliderType || (exports.SliderType = {}));
var PCShareSocialNetwork;
(function (PCShareSocialNetwork) {
    PCShareSocialNetwork["Vk"] = "vk";
    PCShareSocialNetwork["Telegram"] = "telegram";
    PCShareSocialNetwork["Twitter"] = "twitter";
    PCShareSocialNetwork["Facebook"] = "facebook";
    PCShareSocialNetwork["LinkedIn"] = "linkedin";
})(PCShareSocialNetwork = exports.PCShareSocialNetwork || (exports.PCShareSocialNetwork = {}));
var FormBlockDataTypes;
(function (FormBlockDataTypes) {
    FormBlockDataTypes["YANDEX"] = "yandex";
    FormBlockDataTypes["HUBSPOT"] = "hubspot";
})(FormBlockDataTypes = exports.FormBlockDataTypes || (exports.FormBlockDataTypes = {}));
var FormBlockDirection;
(function (FormBlockDirection) {
    FormBlockDirection["FormContent"] = "form-content";
    FormBlockDirection["ContentForm"] = "content-form";
    FormBlockDirection["Center"] = "center";
})(FormBlockDirection = exports.FormBlockDirection || (exports.FormBlockDirection = {}));
