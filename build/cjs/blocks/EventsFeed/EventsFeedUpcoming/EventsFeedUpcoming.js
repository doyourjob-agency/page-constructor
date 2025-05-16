"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsFeedUpcoming = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const __1 = require("../..");
const components_1 = require("../../../components");
const eventsContext_1 = require("../../../context/eventsContext");
const utils_1 = require("../../../utils");
const EventsFeedCard_1 = tslib_1.__importDefault(require("./../EventsFeedCard/EventsFeedCard"));
const b = (0, utils_1.block)('events-feed-upcoming');
const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};
const EventsFeedUpcoming = () => {
    const { upcoming } = (0, react_1.useContext)(eventsContext_1.EventsUpcomingContext);
    return (react_1.default.createElement("div", { className: b() },
        react_1.default.createElement(components_1.Anchor, { id: "upcoming" }),
        react_1.default.createElement(__1.CardLayoutBlock, { colSizes: colSizes }, upcoming.map((item) => (react_1.default.createElement(EventsFeedCard_1.default, Object.assign({ key: item.slug }, item)))))));
};
exports.EventsFeedUpcoming = EventsFeedUpcoming;
exports.default = react_1.default.memo(exports.EventsFeedUpcoming);
