/* eslint-disable no-param-reassign */
/* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
import { __rest } from "tslib";
import { BlockType, SubBlockType, } from '../models';
import { createItemsParser, typografTransformer, yfmTransformer, } from './common';
function parseTableBlock(transformer, content) {
    const legend = content === null || content === void 0 ? void 0 : content.legend;
    return Object.assign(Object.assign({}, (content || {})), { legend: legend && legend.map((string) => transformer(string)) });
}
function parseFeatures(transformer, items) {
    return items.map((_a) => {
        var { title, text } = _a, rest = __rest(_a, ["title", "text"]);
        return (Object.assign({ title: title && transformer(title), text: text && transformer(text) }, rest));
    });
}
function parsePromoFeatures(transformer, items) {
    return items.map((_a) => {
        var { text } = _a, rest = __rest(_a, ["text"]);
        return (Object.assign({ text: transformer(text) }, rest));
    });
}
const parseTitle = (transformer, title) => typeof title === 'object' && 'text' in title
    ? Object.assign(Object.assign({}, title), { text: transformer(title.text) }) : title && transformer(title);
const parseItemsTitle = (transformer, items) => items.map((_a) => {
    var { title } = _a, rest = __rest(_a, ["title"]);
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
export const blockHeaderTransformer = [
    {
        fields: ['title'],
        transformer: typografTransformer,
        parser: parseTitle,
    },
    {
        fields: ['description'],
        transformer: yfmTransformer,
    },
];
export const config = {
    [SubBlockType.BasicCard]: [
        {
            fields: ['title'],
            transformer: typografTransformer,
        },
        {
            fields: ['text', 'additionalInfo'],
            transformer: yfmTransformer,
        },
    ],
    [SubBlockType.Card]: [
        {
            fields: ['text'],
            transformer: yfmTransformer,
        },
    ],
    [SubBlockType.BackgroundCard]: [
        {
            fields: ['text', 'additionalInfo'],
            transformer: yfmTransformer,
        },
        {
            fields: ['title'],
            transformer: typografTransformer,
        },
    ],
    [SubBlockType.ImageCard]: [
        {
            fields: ['text', 'additionalInfo'],
            transformer: yfmTransformer,
        },
        {
            fields: ['title'],
            transformer: typografTransformer,
        },
    ],
    [SubBlockType.LayoutItem]: [
        {
            fields: ['content'],
            parser: parseContentLayout,
            transformer: yfmTransformer,
        },
        {
            fields: ['content'],
            parser: parseContentLayoutTitle,
            transformer: typografTransformer,
        },
        {
            fields: ['metaInfo'],
            parser: createItemsParser([]),
            transformer: yfmTransformer,
        },
    ],
    [SubBlockType.Quote]: [
        {
            fields: ['text'],
            transformer: typografTransformer,
        },
        {
            fields: ['yfmText'],
            transformer: yfmTransformer,
        },
    ],
    [BlockType.ExtendedFeaturesBlock]: [
        ...blockHeaderTransformer,
        {
            fields: ['items'],
            transformer: typografTransformer,
            parser: createItemsParser(['title']),
        },
        {
            fields: ['items'],
            transformer: yfmTransformer,
            parser: createItemsParser(['text', 'additionalInfo']),
        },
    ],
    [BlockType.PromoFeaturesBlock]: [
        ...blockHeaderTransformer,
        {
            fields: ['items'],
            transformer: yfmTransformer,
            parser: parsePromoFeatures,
        },
    ],
    [BlockType.SliderBlock]: blockHeaderTransformer,
    [BlockType.CompaniesBlock]: blockHeaderTransformer,
    [BlockType.QuestionsBlock]: [
        {
            fields: ['title'],
            transformer: typografTransformer,
        },
        {
            fields: ['text', 'additionalInfo'],
            transformer: yfmTransformer,
        },
        {
            fields: ['items'],
            transformer: yfmTransformer,
            parser: parseFeatures,
        },
    ],
    [BlockType.BannerBlock]: [
        {
            fields: ['title'],
            transformer: typografTransformer,
        },
        {
            fields: ['subtitle'],
            transformer: yfmTransformer,
        },
    ],
    [SubBlockType.BannerCard]: [
        {
            fields: ['title'],
            transformer: typografTransformer,
        },
        {
            fields: ['subtitle'],
            transformer: yfmTransformer,
        },
    ],
    [BlockType.MediaBlock]: [
        ...blockHeaderTransformer,
        {
            fields: ['title', 'additionalInfo'],
            transformer: yfmTransformer,
        },
        {
            fields: ['list'],
            transformer: yfmTransformer,
            parser: createItemsParser(['text']),
        },
    ],
    [BlockType.MapBlock]: [
        ...blockHeaderTransformer,
        {
            fields: ['title', 'additionalInfo'],
            transformer: yfmTransformer,
        },
    ],
    [BlockType.TabsBlock]: [
        ...blockHeaderTransformer,
        {
            fields: ['items'],
            transformer: yfmTransformer,
            parser: createItemsParser(['text', 'additionalInfo', 'caption']),
        },
        {
            fields: ['items'],
            transformer: typografTransformer,
            parser: parseItemsTitle,
        },
    ],
    [BlockType.TableBlock]: [
        {
            fields: ['description'],
            transformer: yfmTransformer,
        },
        {
            fields: ['table'],
            transformer: yfmTransformer,
            parser: parseTableBlock,
        },
    ],
    [BlockType.HeaderSliderBlock]: [
        {
            fields: ['items'],
            transformer: typografTransformer,
            parser: createItemsParser(['title', 'overtitle']),
        },
        {
            fields: ['items'],
            transformer: yfmTransformer,
            parser: createItemsParser(['description']),
        },
    ],
    [SubBlockType.PriceDetailed]: [
        {
            transformer: yfmTransformer,
            parser: parsePriceDetailedBlock,
        },
    ],
    [BlockType.HeaderBlock]: [
        {
            fields: ['description'],
            transformer: yfmTransformer,
        },
    ],
    [BlockType.ContentLayoutBlock]: [
        {
            fields: ['textContent'],
            transformer: yfmTransformer,
            parser: parseContentLayout,
        },
        {
            fields: ['textContent'],
            transformer: typografTransformer,
            parser: parseContentLayoutTitle,
        },
    ],
    [SubBlockType.Content]: [
        {
            fields: ['text', 'additionalInfo'],
            transformer: yfmTransformer,
        },
        {
            fields: ['title'],
            transformer: typografTransformer,
            parser: parseTitle,
        },
        {
            fields: ['list'],
            transformer: yfmTransformer,
            parser: createItemsParser(['title', 'text']),
        },
    ],
    [BlockType.InfoBlock]: [
        {
            fields: ['rightContent', 'leftContent'],
            transformer: yfmTransformer,
            parser: parseContentLayout,
        },
        {
            fields: ['rightContent', 'leftContent'],
            transformer: typografTransformer,
            parser: parseContentLayoutTitle,
        },
    ],
    [BlockType.ShareBlock]: [
        {
            fields: ['title'],
            transformer: typografTransformer,
        },
    ],
    [BlockType.CardLayoutBlock]: blockHeaderTransformer,
    [BlockType.FilterBlock]: blockHeaderTransformer,
    [BlockType.IconsBlock]: blockHeaderTransformer,
    [SubBlockType.PriceCard]: [
        {
            fields: ['title'],
            transformer: typografTransformer,
        },
        {
            fields: ['list'],
            transformer: yfmTransformer,
            parser: createItemsParser(['text']),
        },
    ],
    [BlockType.FormBlock]: [
        {
            fields: ['textContent', 'textFormContent'],
            transformer: yfmTransformer,
            parser: parseContentLayout,
        },
        {
            fields: ['textContent', 'textFormContent'],
            transformer: typografTransformer,
            parser: parseContentLayoutTitle,
        },
    ],
};
