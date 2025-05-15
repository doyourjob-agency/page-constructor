"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardLayoutBlock = exports.CardLayoutProps = void 0;
const schema_1 = require("../../components/Image/schema");
const common_1 = require("../../schema/validators/common");
exports.CardLayoutProps = {
    additionalProperties: false,
    required: [],
    properties: Object.assign(Object.assign(Object.assign(Object.assign({}, common_1.BlockBaseProps), common_1.AnimatableProps), common_1.BlockHeaderProps), { colSizes: common_1.containerSizesObject, background: {
            anyOf: [
                Object.assign(Object.assign({}, schema_1.ImageBaseObjectProps), { properties: Object.assign(Object.assign({}, schema_1.ImageBaseObjectProps.properties), { border: common_1.BorderProps }), optionName: 'options' }),
                Object.assign(Object.assign({}, schema_1.ImageDeviceProps), { properties: Object.assign(Object.assign({}, schema_1.ImageDeviceProps.properties), { border: common_1.BorderProps }), optionName: 'device options' }),
            ],
        }, children: common_1.ChildrenCardsProps }),
};
exports.CardLayoutBlock = {
    'card-layout-block': exports.CardLayoutProps,
};
