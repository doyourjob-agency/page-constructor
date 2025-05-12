"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerCard = exports.BannerBlock = exports.BannerCardProps = void 0;
const common_1 = require("../../schema/validators/common");
exports.BannerCardProps = {
    additionalProperties: false,
    required: ['title', 'button'],
    properties: Object.assign(Object.assign(Object.assign({}, common_1.BaseProps), common_1.AnimatableProps), { title: {
            type: 'string',
            contentType: 'text',
        }, subtitle: {
            type: 'string',
            contentType: 'yfm',
        }, image: (0, common_1.withTheme)({
            type: 'string',
        }), mediaView: {
            type: 'string',
            enum: common_1.mediaView,
        }, disableCompress: {
            type: 'boolean',
        }, color: (0, common_1.withTheme)({
            type: 'string',
        }), theme: common_1.ThemeProps, width: {
            type: 'string',
            enum: ['s', 'm', 'l'],
        }, button: common_1.ButtonBlock }),
};
exports.BannerBlock = {
    'banner-block': exports.BannerCardProps,
};
exports.BannerCard = {
    'banner-card': exports.BannerCardProps,
};
