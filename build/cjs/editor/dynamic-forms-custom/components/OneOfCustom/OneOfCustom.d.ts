import React from 'react';
import { ObjectIndependentInputProps } from '@gravity-ui/dynamic-forms';
/**
 * Customization of @gravity-ui/dynamic-forms OneOf component
 *
 * Main differences from original component:
 *
 * 1. Custom component can detect initial data type by it's json schema passed it __schema property of spec and
 * shows according input
 *
 * 2. Custom component doesn't create additional nested level of data for each OneOf option and doesn't wraps data value, e.g.
 *
 * custom component: {propertyName: propertyValue}
 * original component: {propertyName: {option1: {value: propertyValue}}}
 *
 * @param {ObjectIndependentInputProps} props - props of original OneOf component
 * @returns {React.FC<ObjectIndependentInputProps>}
 */
export declare const OneOfCustom: React.FC<ObjectIndependentInputProps>;
