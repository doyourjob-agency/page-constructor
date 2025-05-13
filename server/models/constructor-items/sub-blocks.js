"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubBlockTypes = exports.ImageCardDirection = exports.IconPosition = exports.SubBlockType = void 0;
var SubBlockType;
(function (SubBlockType) {
    SubBlockType["Divider"] = "divider";
    SubBlockType["Quote"] = "quote";
    /**
     * @deprecated Will be removed
     */
    SubBlockType["PriceDetailed"] = "price-detailed";
    SubBlockType["MediaCard"] = "media-card";
    SubBlockType["BannerCard"] = "banner-card";
    SubBlockType["LayoutItem"] = "layout-item";
    SubBlockType["BackgroundCard"] = "background-card";
    SubBlockType["BasicCard"] = "basic-card";
    SubBlockType["Content"] = "content";
    SubBlockType["HubspotForm"] = "hubspot-form";
    SubBlockType["PriceCard"] = "price-card";
    SubBlockType["ImageCard"] = "image-card";
    SubBlockType["ContentLayoutCard"] = "content-layout-card";
    SubBlockType["Card"] = "card";
})(SubBlockType = exports.SubBlockType || (exports.SubBlockType = {}));
var IconPosition;
(function (IconPosition) {
    IconPosition["Top"] = "top";
    IconPosition["Left"] = "left";
})(IconPosition = exports.IconPosition || (exports.IconPosition = {}));
var ImageCardDirection;
(function (ImageCardDirection) {
    ImageCardDirection["Direct"] = "direct";
    ImageCardDirection["Reverse"] = "reverse";
})(ImageCardDirection = exports.ImageCardDirection || (exports.ImageCardDirection = {}));
exports.SubBlockTypes = Object.values(SubBlockType);
