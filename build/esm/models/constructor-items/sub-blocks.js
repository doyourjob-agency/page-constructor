export var SubBlockType;
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
})(SubBlockType || (SubBlockType = {}));
export var IconPosition;
(function (IconPosition) {
    IconPosition["Top"] = "top";
    IconPosition["Left"] = "left";
})(IconPosition || (IconPosition = {}));
export var ImageCardDirection;
(function (ImageCardDirection) {
    ImageCardDirection["Direct"] = "direct";
    ImageCardDirection["Reverse"] = "reverse";
})(ImageCardDirection || (ImageCardDirection = {}));
export const SubBlockTypes = Object.values(SubBlockType);
