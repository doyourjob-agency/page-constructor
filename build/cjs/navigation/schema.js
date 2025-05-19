"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationHeaderProps = exports.LogoProps = void 0;
const tslib_1 = require("tslib");
const omit_1 = tslib_1.__importDefault(require("lodash/omit"));
const schema_1 = require("../components/Image/schema");
const common_1 = require("../schema/validators/common");
const utils_1 = require("../schema/validators/utils");
const NavigationItemType = {
    type: 'string',
    enum: ['link', 'button', 'dropdown'],
};
exports.LogoProps = {
    type: 'object',
    additionalProperties: false,
    required: ['icon'],
    properties: {
        icon: schema_1.ImageProps,
        text: {
            type: 'string',
            contentType: 'text',
        },
        url: {
            type: 'string',
        },
    },
};
const NavigationItemBaseProps = {
    text: {
        type: 'string',
        contentType: 'text',
    },
    url: {
        type: 'string',
    },
    icon: {
        type: 'string',
        pattern: schema_1.imageUrlPattern,
    },
    iconSize: {
        type: 'number',
    },
};
const NavigationItemBaseLinkProps = (0, omit_1.default)(NavigationItemBaseProps, ['url']);
const NavigationLinkItemProps = {
    type: 'object',
    additionalProperties: false,
    required: ['type', 'text'],
    properties: Object.assign(Object.assign({}, NavigationItemBaseLinkProps), { type: Object.assign({}, NavigationItemType), url: {
            type: 'string',
        }, target: {
            type: 'string',
        }, arrow: {
            type: 'boolean',
        } }),
};
const NavigationButtonItemProps = {
    type: 'object',
    additionalProperties: false,
    required: ['type', 'text', 'url'],
    properties: Object.assign(Object.assign({}, common_1.ButtonProps), { type: Object.assign({}, NavigationItemType) }),
};
const NavigationDropdownItemProps = {
    type: 'object',
    additionalProperties: false,
    required: ['type', 'items'],
    properties: Object.assign(Object.assign({}, NavigationItemBaseProps), { type: Object.assign({}, NavigationItemType), items: (0, utils_1.filteredArray)(NavigationLinkItemProps) }),
};
const NavigationItemProps = {
    oneOf: [
        (0, utils_1.filteredArray)(NavigationLinkItemProps),
        (0, utils_1.filteredArray)(NavigationButtonItemProps),
        (0, utils_1.filteredArray)(NavigationDropdownItemProps),
    ],
};
exports.NavigationHeaderProps = {
    type: 'object',
    additionalProperties: false,
    required: ['leftItems'],
    properties: {
        leftItems: NavigationItemProps,
        rightItems: NavigationItemProps,
        iconSize: {
            type: 'number',
        },
    },
};
