"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogFeedBlock = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const FeedHeader_1 = tslib_1.__importDefault(require("../../components/FeedHeader/FeedHeader"));
const BlogFeedPosts_1 = tslib_1.__importDefault(require("./BlogFeedPosts/BlogFeedPosts"));
const BlogFeedBlock = ({ image, title }) => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(FeedHeader_1.default, { image: image, title: title }),
    react_1.default.createElement(BlogFeedPosts_1.default, null)));
exports.BlogFeedBlock = BlogFeedBlock;
exports.default = exports.BlogFeedBlock;
