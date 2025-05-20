"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsFeedRecent = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const __1 = require("../..");
const components_1 = require("../../../components");
const eventsContext_1 = require("../../../context/eventsContext");
const utils_1 = require("../../../utils");
const EventsFeedCard_1 = tslib_1.__importDefault(require("../EventsFeedCard/EventsFeedCard"));
const i18n_1 = require("../i18n");
const b = (0, utils_1.block)('events-feed-recent');
const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};
const EventsFeedRecent = () => {
    const { recent, page, pageSize, onLoadMore } = (0, react_1.useContext)(eventsContext_1.EventsRecentContext);
    const itemsToShow = recent.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(recent.length / pageSize);
    if (recent.length === 0) {
        return null;
    }
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement(components_1.Anchor, { id: "recent" }),
        react_1.default.createElement(__1.CardLayoutBlock, { title: (0, i18n_1.i18n)('recent_events'), colSizes: colSizes }, itemsToShow.map((item) => (react_1.default.createElement(EventsFeedCard_1.default, Object.assign({ key: item.slug }, item))))),
        react_1.default.createElement(components_1.InfiniteScroll, { hasMore: hasMore, onNext: onLoadMore })));
};
exports.EventsFeedRecent = EventsFeedRecent;
exports.default = react_1.default.memo(exports.EventsFeedRecent);
