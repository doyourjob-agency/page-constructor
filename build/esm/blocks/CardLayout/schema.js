import { ImageBaseObjectProps, ImageDeviceProps } from '../../components/Image/schema';
import { AnimatableProps, BlockBaseProps, BlockHeaderProps, BorderProps, ChildrenCardsProps, containerSizesObject, } from '../../schema/validators/common';
export const CardLayoutProps = {
    additionalProperties: false,
    required: [],
    properties: Object.assign(Object.assign(Object.assign(Object.assign({}, BlockBaseProps), AnimatableProps), BlockHeaderProps), { colSizes: containerSizesObject, background: {
            anyOf: [
                Object.assign(Object.assign({}, ImageBaseObjectProps), { properties: Object.assign(Object.assign({}, ImageBaseObjectProps.properties), { border: BorderProps }), optionName: 'options' }),
                Object.assign(Object.assign({}, ImageDeviceProps), { properties: Object.assign(Object.assign({}, ImageDeviceProps.properties), { border: BorderProps }), optionName: 'device options' }),
            ],
        }, children: ChildrenCardsProps }),
};
export const CardLayoutBlock = {
    'card-layout-block': CardLayoutProps,
};
