"use strict";
/* eslint-disable no-param-reassign */
/* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.blockHeaderTransformer = void 0;
const tslib_1 = require("tslib");
const models_1 = require("../models");
const common_1 = require("./common");
function parseTableBlock(transformer, content) {
    const legend = content === null || content === void 0 ? void 0 : content.legend;
    return Object.assign(Object.assign({}, (content || {})), { legend: legend && legend.map((string) => transformer(string)) });
}
function parseFeatures(transformer, items) {
    return items.map((_a) => {
        var { title, text } = _a, rest = tslib_1.__rest(_a, ["title", "text"]);
        return (Object.assign({ title: title && transformer(title), text: text && transformer(text) }, rest));
    });
}
function parsePromoFeatures(transformer, items) {
    return items.map((_a) => {
        var { text } = _a, rest = tslib_1.__rest(_a, ["text"]);
        return (Object.assign({ text: transformer(text) }, rest));
    });
}
const parseTitle = (transformer, title) => typeof title === 'object' && 'text' in title
    ? Object.assign(Object.assign({}, title), { text: transformer(title.text) }) : title && transformer(title);
const parseItemsTitle = (transformer, items) => items.map((_a) => {
    var { title } = _a, rest = tslib_1.__rest(_a, ["title"]);
    return (Object.assign({ title: title && parseTitle(transformer, title) }, rest));
});
function parsePriceDetailedBlock(transformer, block) {
    const { priceType } = block;
    /* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
    block.items = block.items.map((item) => {
        const { description, items: details = [] } = item;
        if (priceType === 'marked-list') {
            item.items = details.map((detail) => {
                detail.text = detail.text && transformer(detail.text);
                return detail;
            });
        }
        else {
            item.items = details.map((detail) => {
                detail.description = detail.description && transformer(detail.description);
                return detail;
            });
        }
        item.description = transformer(description);
        return item;
    });
    /* eslint-enable no-not-accumulator-reassign/no-not-accumulator-reassign */
    return block;
}
const parseContentLayout = (transformer, content) => {
    if (content) {
        const { text, additionalInfo, list } = content;
        /* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
        if (text) {
            content.text = transformer(text);
        }
        if (additionalInfo) {
            content.additionalInfo = transformer(additionalInfo);
        }
        if (list) {
            content.list = list.map((item) => {
                if (item === null || item === void 0 ? void 0 : item.text) {
                    return Object.assign(Object.assign({}, item), { text: transformer(item.text) });
                }
                return item;
            });
        }
        /* eslint-enable no-not-accumulator-reassign/no-not-accumulator-reassign */
    }
    return content;
};
function parseContentLayoutTitle(transformer, content) {
    if (content === null || content === void 0 ? void 0 : content.title) {
        const { title } = content;
        // eslint-disable-next-line no-not-accumulator-reassign/no-not-accumulator-reassign
        content.title = title && parseTitle(transformer, title);
    }
    return content;
}
exports.blockHeaderTransformer = [
    {
        fields: ['title'],
        transformer: common_1.typografTransformer,
        parser: parseTitle,
    },
    {
        fields: ['description'],
        transformer: common_1.yfmTransformer,
    },
];
exports.config = {
    [models_1.SubBlockType.BasicCard]: [
        {
            fields: ['title'],
            transformer: common_1.typografTransformer,
        },
        {
            fields: ['text', 'additionalInfo'],
            transformer: common_1.yfmTransformer,
        },
    ],
    [models_1.SubBlockType.Card]: [
        {
            fields: ['text'],
            transformer: common_1.yfmTransformer,
        },
    ],
    [models_1.SubBlockType.BackgroundCard]: [
        {
            fields: ['text', 'additionalInfo'],
            transformer: common_1.yfmTransformer,
        },
        {
            fields: ['title'],
            transformer: common_1.typografTransformer,
        },
    ],
    [models_1.SubBlockType.ImageCard]: [
        {
            fields: ['text', 'additionalInfo'],
            transformer: common_1.yfmTransformer,
        },
        {
            fields: ['title'],
            transformer: common_1.typografTransformer,
        },
    ],
    [models_1.SubBlockType.LayoutItem]: [
        {
            fields: ['content'],
            parser: parseContentLayout,
            transformer: common_1.yfmTransformer,
        },
        {
            fields: ['content'],
            parser: parseContentLayoutTitle,
            transformer: common_1.typografTransformer,
        },
        {
            fields: ['metaInfo'],
            parser: (0, common_1.createItemsParser)([]),
            transformer: common_1.yfmTransformer,
        },
    ],
    [models_1.SubBlockType.Quote]: [
        {
            fields: ['text'],
            transformer: common_1.typografTransformer,
        },
        {
            fields: ['yfmText'],
            transformer: common_1.yfmTransformer,
        },
    ],
    [models_1.BlockType.ExtendedFeaturesBlock]: [
        ...exports.blockHeaderTransformer,
        {
            fields: ['items'],
            transformer: common_1.typografTransformer,
            parser: (0, common_1.createItemsParser)(['title']),
        },
        {
            fields: ['items'],
            transformer: common_1.yfmTransformer,
            parser: (0, common_1.createItemsParser)(['text', 'additionalInfo']),
        },
    ],
    [models_1.BlockType.PromoFeaturesBlock]: [
        ...exports.blockHeaderTransformer,
        {
            fields: ['items'],
            transformer: common_1.yfmTransformer,
            parser: parsePromoFeatures,
        },
    ],
    [models_1.BlockType.SliderBlock]: exports.blockHeaderTransformer,
    [models_1.BlockType.CompaniesBlock]: exports.blockHeaderTransformer,
    [models_1.BlockType.QuestionsBlock]: [
        {
            fields: ['title'],
            transformer: common_1.typografTransformer,
        },
        {
            fields: ['text', 'additionalInfo'],
            transformer: common_1.yfmTransformer,
        },
        {
            fields: ['items'],
            transformer: common_1.yfmTransformer,
            parser: parseFeatures,
        },
    ],
    [models_1.BlockType.BannerBlock]: [
        {
            fields: ['title'],
            transformer: common_1.typografTransformer,
        },
        {
            fields: ['subtitle'],
            transformer: common_1.yfmTransformer,
        },
    ],
    [models_1.SubBlockType.BannerCard]: [
        {
            fields: ['title'],
            transformer: common_1.typografTransformer,
        },
        {
            fields: ['subtitle'],
            transformer: common_1.yfmTransformer,
        },
    ],
    [models_1.BlockType.MediaBlock]: [
        ...exports.blockHeaderTransformer,
        {
            fields: ['title', 'additionalInfo'],
            transformer: common_1.yfmTransformer,
        },
        {
            fields: ['list'],
            transformer: common_1.yfmTransformer,
            parser: (0, common_1.createItemsParser)(['text']),
        },
    ],
    [models_1.BlockType.MapBlock]: [
        ...exports.blockHeaderTransformer,
        {
            fields: ['title', 'additionalInfo'],
            transformer: common_1.yfmTransformer,
        },
    ],
    [models_1.BlockType.TabsBlock]: [
        ...exports.blockHeaderTransformer,
        {
            fields: ['items'],
            transformer: common_1.yfmTransformer,
            parser: (0, common_1.createItemsParser)(['text', 'additionalInfo', 'caption']),
        },
        {
            fields: ['items'],
            transformer: common_1.typografTransformer,
            parser: parseItemsTitle,
        },
    ],
    [models_1.BlockType.TableBlock]: [
        {
            fields: ['description'],
            transformer: common_1.yfmTransformer,
        },
        {
            fields: ['table'],
            transformer: common_1.yfmTransformer,
            parser: parseTableBlock,
        },
    ],
    [models_1.BlockType.HeaderSliderBlock]: [
        {
            fields: ['items'],
            transformer: common_1.typografTransformer,
            parser: (0, common_1.createItemsParser)(['title', 'overtitle']),
        },
        {
            fields: ['items'],
            transformer: common_1.yfmTransformer,
            parser: (0, common_1.createItemsParser)(['description']),
        },
    ],
    [models_1.SubBlockType.PriceDetailed]: [
        {
            transformer: common_1.yfmTransformer,
            parser: parsePriceDetailedBlock,
        },
    ],
    [models_1.BlockType.HeaderBlock]: [
        {
            fields: ['description'],
            transformer: common_1.yfmTransformer,
        },
    ],
    [models_1.BlockType.ContentLayoutBlock]: [
        {
            fields: ['textContent'],
            transformer: common_1.yfmTransformer,
            parser: parseContentLayout,
        },
        {
            fields: ['textContent'],
            transformer: common_1.typografTransformer,
            parser: parseContentLayoutTitle,
        },
    ],
    [models_1.SubBlockType.Content]: [
        {
            fields: ['text', 'additionalInfo'],
            transformer: common_1.yfmTransformer,
        },
        {
            fields: ['title'],
            transformer: common_1.typografTransformer,
            parser: parseTitle,
        },
        {
            fields: ['list'],
            transformer: common_1.yfmTransformer,
            parser: (0, common_1.createItemsParser)(['title', 'text']),
        },
    ],
    [models_1.BlockType.InfoBlock]: [
        {
            fields: ['rightContent', 'leftContent'],
            transformer: common_1.yfmTransformer,
            parser: parseContentLayout,
        },
        {
            fields: ['rightContent', 'leftContent'],
            transformer: common_1.typografTransformer,
            parser: parseContentLayoutTitle,
        },
    ],
    [models_1.BlockType.ShareBlock]: [
        {
            fields: ['title'],
            transformer: common_1.typografTransformer,
        },
    ],
    [models_1.BlockType.CardLayoutBlock]: exports.blockHeaderTransformer,
    [models_1.BlockType.FilterBlock]: exports.blockHeaderTransformer,
    [models_1.BlockType.IconsBlock]: exports.blockHeaderTransformer,
    [models_1.SubBlockType.PriceCard]: [
        {
            fields: ['title'],
            transformer: common_1.typografTransformer,
        },
        {
            fields: ['list'],
            transformer: common_1.yfmTransformer,
            parser: (0, common_1.createItemsParser)(['text']),
        },
    ],
    [models_1.BlockType.FormBlock]: [
        {
            fields: ['textContent', 'textFormContent'],
            transformer: common_1.yfmTransformer,
            parser: parseContentLayout,
        },
        {
            fields: ['textContent', 'textFormContent'],
            transformer: common_1.typografTransformer,
            parser: parseContentLayoutTitle,
        },
    ],
};
