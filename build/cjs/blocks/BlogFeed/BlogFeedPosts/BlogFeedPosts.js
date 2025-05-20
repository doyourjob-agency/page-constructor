"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogFeedPosts = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const __1 = require("../..");
const components_1 = require("../../../components");
const blogPostsContext_1 = require("../../../context/blogPostsContext");
const models_1 = require("../../../models");
const PostCard_1 = tslib_1.__importDefault(require("../../../sub-blocks/PostCard/PostCard"));
const utils_1 = require("../../../utils");
const b = (0, utils_1.block)('blog-feed-posts');
const colSizes = {
    all: 12,
    lg: 4,
    md: 6,
};
const BlogFeedPosts = () => {
    const { pinnedPost, posts, page, pageSize, onLoadMore } = (0, react_1.useContext)(blogPostsContext_1.BlogPostsContext);
    const itemsToShow = posts.slice(0, page * pageSize);
    const hasMore = page < Math.ceil(posts.length / pageSize);
    if (posts.length === 0) {
        return null;
    }
    return (react_1.default.createElement("div", { className: b() },
        pinnedPost && (react_1.default.createElement("div", { className: b('wrap') },
            react_1.default.createElement(PostCard_1.default, Object.assign({}, pinnedPost, { size: models_1.PostCardSize.MEDIUM, fullWidth: true, showTag: true, titleHeadingLevel: models_1.PostCardTitleHeadingLevel.H2 })))),
        react_1.default.createElement(__1.CardLayoutBlock, { className: b('wrap'), colSizes: colSizes }, itemsToShow.map((item) => (react_1.default.createElement(PostCard_1.default, Object.assign({ key: item.slug }, item, { showTag: true, titleHeadingLevel: pinnedPost ? models_1.PostCardTitleHeadingLevel.H3 : models_1.PostCardTitleHeadingLevel.H2 }))))),
        react_1.default.createElement(components_1.InfiniteScroll, { hasMore: hasMore, onNext: onLoadMore })));
};
exports.BlogFeedPosts = BlogFeedPosts;
exports.default = react_1.default.memo(exports.BlogFeedPosts);
