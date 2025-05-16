import omit from 'lodash/omit';
import { ImageProps, imageUrlPattern } from '../components/Image/schema';
import { ButtonProps } from '../schema/validators/common';
import { filteredArray } from '../schema/validators/utils';
const NavigationItemType = {
    type: 'string',
    enum: ['link', 'button', 'dropdown'],
};
export const LogoProps = {
    type: 'object',
    additionalProperties: false,
    required: ['icon'],
    properties: {
        icon: ImageProps,
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
        pattern: imageUrlPattern,
    },
    iconSize: {
        type: 'number',
    },
};
const NavigationItemBaseLinkProps = omit(NavigationItemBaseProps, ['url']);
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
    properties: Object.assign(Object.assign({}, ButtonProps), { type: Object.assign({}, NavigationItemType) }),
};
const NavigationDropdownItemProps = {
    type: 'object',
    additionalProperties: false,
    required: ['type', 'items'],
    properties: Object.assign(Object.assign({}, NavigationItemBaseProps), { type: Object.assign({}, NavigationItemType), items: filteredArray(NavigationLinkItemProps) }),
};
const NavigationItemProps = {
    oneOf: [
        filteredArray(NavigationLinkItemProps),
        filteredArray(NavigationButtonItemProps),
        filteredArray(NavigationDropdownItemProps),
    ],
};
export const NavigationHeaderProps = {
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
