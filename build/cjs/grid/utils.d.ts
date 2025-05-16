import { GridColumnClassParams, GridColumnClassPrefix, GridColumnOrderSizesType, GridColumnSize, GridColumnSizesType, GridColumnVisibilityClass, GridJustifyContent } from './types';
export declare function getClasses(items: GridColumnSizesType | GridColumnOrderSizesType, prefix: GridColumnClassPrefix): string;
export declare function getOffsetClass(offsets: GridColumnSizesType): string;
export declare function getOrderClass(orders: GridColumnOrderSizesType): string;
export declare function getVisibilityClasses(size: GridColumnSize, type: GridColumnVisibilityClass): string;
export declare function getSizeClass(sizes: GridColumnSizesType | number): string;
export declare function getJustifyClass(justifyContent: GridJustifyContent): string;
export declare function getResetClass(): string;
export declare function getColClass(params: GridColumnClassParams): string;
