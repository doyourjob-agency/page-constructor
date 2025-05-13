"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navItemMap = exports.subBlockMap = exports.blockMap = void 0;
const tslib_1 = require("tslib");
const blocks_1 = require("./blocks");
const unstable_1 = require("./blocks/unstable");
const models_1 = require("./models");
const NavigationItem_1 = require("./navigation/components/NavigationItem");
const SocialIcon_1 = tslib_1.__importDefault(require("./navigation/components/SocialIcon/SocialIcon"));
const sub_blocks_1 = require("./sub-blocks");
exports.blockMap = {
    [models_1.BlockType.SliderBlock]: blocks_1.SliderBlock,
    [models_1.BlockType.ExtendedFeaturesBlock]: blocks_1.ExtendedFeaturesBlock,
    [models_1.BlockType.PromoFeaturesBlock]: blocks_1.PromoFeaturesBlock,
    [models_1.BlockType.QuestionsBlock]: blocks_1.QuestionsBlock,
    [models_1.BlockType.BannerBlock]: blocks_1.BannerBlock,
    [models_1.BlockType.CompaniesBlock]: blocks_1.CompaniesBlock,
    [models_1.BlockType.MediaBlock]: blocks_1.MediaBlock,
    [models_1.BlockType.InfoBlock]: blocks_1.InfoBlock,
    [models_1.BlockType.TableBlock]: blocks_1.TableBlock,
    [models_1.BlockType.TabsBlock]: blocks_1.TabsBlock,
    [models_1.BlockType.HeaderBlock]: blocks_1.HeaderBlock,
    [models_1.BlockType.IconsBlock]: blocks_1.IconsBlock,
    [models_1.BlockType.HeaderSliderBlock]: blocks_1.HeaderSliderBlock,
    [models_1.BlockType.CardLayoutBlock]: blocks_1.CardLayoutBlock,
    [models_1.BlockType.ContentLayoutBlock]: blocks_1.ContentLayoutBlock,
    [models_1.BlockType.ShareBlock]: blocks_1.ShareBlock,
    [models_1.BlockType.MapBlock]: blocks_1.MapBlock,
    [models_1.BlockType.FilterBlock]: blocks_1.FilterBlock,
    [models_1.BlockType.FormBlock]: blocks_1.FormBlock,
    [models_1.BlockType.MarqueeLinksBlock]: blocks_1.MarqueeLinksBlock,
    [models_1.BlockType.SolutionsBlock]: blocks_1.SolutionsBlock,
    [models_1.BlockType.EventsFeedBlock]: blocks_1.EventsFeedBlock,
    [models_1.BlockType.PressReleasesBlock]: blocks_1.PressReleasesBlock,
    [models_1.BlockType.LinkTableBlock]: blocks_1.LinkTableBlock,
    [models_1.BlockType.ServicesBlock]: blocks_1.ServicesBlock,
    [models_1.BlockType.QuotesBlock]: blocks_1.QuotesBlock,
    // unstable
    [models_1.BlockType.SliderNewBlock]: unstable_1.SliderNewBlock,
};
exports.subBlockMap = {
    [models_1.SubBlockType.Divider]: sub_blocks_1.Divider,
    [models_1.SubBlockType.PriceDetailed]: sub_blocks_1.PriceDetailed,
    [models_1.SubBlockType.MediaCard]: sub_blocks_1.MediaCard,
    [models_1.SubBlockType.BannerCard]: sub_blocks_1.BannerCard,
    [models_1.SubBlockType.LayoutItem]: sub_blocks_1.LayoutItem,
    [models_1.SubBlockType.BackgroundCard]: sub_blocks_1.BackgroundCard,
    [models_1.SubBlockType.BasicCard]: sub_blocks_1.BasicCard,
    [models_1.SubBlockType.Content]: sub_blocks_1.Content,
    [models_1.SubBlockType.Quote]: sub_blocks_1.Quote,
    [models_1.SubBlockType.PriceCard]: sub_blocks_1.PriceCard,
    [models_1.SubBlockType.ImageCard]: sub_blocks_1.ImageCard,
    [models_1.SubBlockType.ContentLayoutCard]: sub_blocks_1.ContentLayoutCard,
    [models_1.SubBlockType.Card]: sub_blocks_1.Card,
};
exports.navItemMap = {
    [models_1.NavigationItemType.Button]: NavigationItem_1.NavigationButton,
    [models_1.NavigationItemType.Social]: SocialIcon_1.default,
    [models_1.NavigationItemType.Dropdown]: NavigationItem_1.NavigationDropdown,
    [models_1.NavigationItemType.Link]: NavigationItem_1.NavigationLink,
    [models_1.NavigationItemType.GithubButton]: NavigationItem_1.GithubButton,
};
