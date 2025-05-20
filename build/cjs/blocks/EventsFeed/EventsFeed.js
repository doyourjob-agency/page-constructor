"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsFeedBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const FeedHeader_1 = tslib_1.__importDefault(require("../../components/FeedHeader/FeedHeader"));
const EventsFeedRecent_1 = tslib_1.__importDefault(require("./EventsFeedRecent/EventsFeedRecent"));
const EventsFeedUpcoming_1 = tslib_1.__importDefault(require("./EventsFeedUpcoming/EventsFeedUpcoming"));
const EventsFeedBlock = ({ image, title }) => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(FeedHeader_1.default, { image: image, title: title }),
    react_1.default.createElement(EventsFeedUpcoming_1.default, null),
    react_1.default.createElement(EventsFeedRecent_1.default, null)));
exports.EventsFeedBlock = EventsFeedBlock;
exports.default = exports.EventsFeedBlock;
