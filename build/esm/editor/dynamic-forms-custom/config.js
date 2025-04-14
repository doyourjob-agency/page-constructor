import { dynamicConfig as libConfig } from '@gravity-ui/dynamic-forms';
import cloneDeep from 'lodash/cloneDeep';
import { OneOfCustom } from './components/OneOfCustom/OneOfCustom';
const getDynamicConfig = () => {
    const dynamicConfig = cloneDeep(libConfig);
    dynamicConfig.object.inputs['oneof_custom'] = { Component: OneOfCustom, independent: true };
    return dynamicConfig;
};
export const dynamicConfig = getDynamicConfig();
