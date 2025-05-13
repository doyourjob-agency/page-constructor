"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsFeedBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const groupBy_1 = tslib_1.__importDefault(require("lodash/groupBy"));
const __1 = require("..");
const components_1 = require("../../components");
const eventsContext_1 = require("../../context/eventsContext");
const routerContext_1 = require("../../context/routerContext");
const utils_1 = require("../../utils");
const EventsFeedCard_1 = tslib_1.__importDefault(require("./EventsFeedCard/EventsFeedCard"));
const EventsFeedHeader_1 = tslib_1.__importDefault(require("./EventsFeedHeader/EventsFeedHeader"));
const i18n_1 = require("./i18n");
const b = (0, utils_1.block)('events-feed-block');
const colSizes = {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
    all: 12,
};
const EventsFeedBlock = ({ image, title }) => {
    const [isHandleLoad, setIsHandleLoad] = (0, react_1.useState)(false);
    const { query } = (0, react_1.useContext)(routerContext_1.RouterContext);
    const { events } = (0, react_1.useContext)(eventsContext_1.EventsContext);
    const [tempQuery, setTempQuery] = (0, react_1.useState)((0, utils_1.convertParsedUrlQueryToQuery)(query));
    const types = [...new Set(events.map((item) => item.type))]
        .sort((a, c) => (a > c ? 1 : -1))
        .map((item) => ({
        content: item,
        value: item,
    }));
    const countries = [...new Set(events.map((item) => item.country || ''))]
        .sort((a, c) => (a > c ? 1 : -1))
        .filter(Boolean)
        .map((item) => ({
        content: item,
        value: item,
    }));
    const eventsFiltered = (0, react_1.useMemo)(() => (events === null || events === void 0 ? void 0 : events.filter((item) => (!(tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.search) ||
        `${item.title} ${item.description}`
            .toLocaleLowerCase()
            .includes(tempQuery.search.toLocaleLowerCase())) &&
        (!(tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.countries) ||
            (item.country && tempQuery.countries.split(',').includes(item.country))) &&
        (!(tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.types) || tempQuery.types.split(',').includes(item.type)))) || [], [events, tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.search, tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.countries, tempQuery === null || tempQuery === void 0 ? void 0 : tempQuery.types]);
    const { upcoming = [], recent = [] } = (0, react_1.useMemo)(() => {
        const { u = [], r = [] } = (0, groupBy_1.default)(eventsFiltered, (event) => {
            const now = new Date();
            if (event.date) {
                const eventDate = new Date(event.date);
                return now.getTime() < eventDate.getTime() ? 'u' : 'r';
            }
            return 'upcoming';
        });
        return {
            upcoming: u.sort((a, c) => new Date(a.dateStart).getTime() < new Date(c.dateStart).getTime() ? -1 : 1),
            recent: r.sort((a, c) => new Date(a.dateStart).getTime() < new Date(c.dateStart).getTime() ? 1 : -1),
        };
    }, [eventsFiltered]);
    (0, react_1.useEffect)(() => {
        if (!isHandleLoad) {
            setTempQuery((0, utils_1.convertParsedUrlQueryToQuery)(query));
        }
    }, [query, isHandleLoad]);
    const handleLoadData = (0, react_1.useCallback)((q) => {
        setIsHandleLoad(true);
        setTempQuery((prev) => (Object.assign(Object.assign({}, prev), q)));
        (0, utils_1.updateQueryCallback)(q);
    }, []);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(EventsFeedHeader_1.default, { image: image, title: title, countries: countries, types: types, handleLoadData: handleLoadData, queryParams: tempQuery }),
        react_1.default.createElement("div", { className: b('wrap') },
            react_1.default.createElement(components_1.Anchor, { id: "upcoming" }),
            react_1.default.createElement(__1.CardLayoutBlock, { colSizes: colSizes }, upcoming.map((item) => (react_1.default.createElement(EventsFeedCard_1.default, Object.assign({ key: item.slug }, item)))))),
        Boolean(recent.length) && (react_1.default.createElement("div", { className: b('wrap') },
            react_1.default.createElement(components_1.Anchor, { id: "recent" }),
            react_1.default.createElement(__1.CardLayoutBlock, { title: (0, i18n_1.i18n)('recent_events'), colSizes: colSizes }, recent.map((item) => (react_1.default.createElement(EventsFeedCard_1.default, Object.assign({ key: item.slug }, item)))))))));
};
exports.EventsFeedBlock = EventsFeedBlock;
exports.default = exports.EventsFeedBlock;
