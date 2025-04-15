import capitalize from 'lodash/capitalize';
import { ViewModeItem } from '../types';
export const formatBlockName = (name) => capitalize(name).replace(/(block|-)/g, ' ');
export const addCustomDecorator = (decorators, custom = {}) => {
    const customDecorators = custom.decorators || {};
    return Object.assign(Object.assign({}, custom), { decorators: Object.assign(Object.assign({}, customDecorators), { block: [...(customDecorators.block || []), ...decorators] }) });
};
export const getBlockId = ({ index, type }) => `${type}${index === undefined ? '' : `-${index}`}`;
export const checkIsMobile = (viewMode) => [ViewModeItem.Mobile, ViewModeItem.Tablet].includes(viewMode);
