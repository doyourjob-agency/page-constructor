export declare enum GridJustifyContent {
    Start = "justify-content-start",
    Center = "justify-content-center",
    End = "justify-content-end",
    Around = "justify-content-around",
    Between = "justify-content-between"
}
export declare enum GridAlignItems {
    Start = "align-items-start",
    Center = "align-items-center",
    End = "align-items-end"
}
export declare enum GridColumnSize {
    Sm = "sm",
    Md = "md",
    Lg = "lg",
    Xl = "xl",
    All = "all"
}
export declare enum GridColumnAlignSelf {
    Start = "align-self-start",
    Center = "align-self-center",
    End = "align-self-end"
}
export declare enum GridColumnClassPrefix {
    Col = "col",
    Offset = "offset",
    Order = "order"
}
export declare enum GridColumnVisibilityClass {
    None = "none",
    Block = "block"
}
export declare enum GridColumnOrderClasses {
    First = "first",
    Last = "last"
}
export type GridColumnSizesType = Partial<Record<GridColumnSize, number>>;
export type GridColumnOrderSizesType = Partial<Record<GridColumnSize, number | GridColumnOrderClasses>>;
export interface GridColumnClassParams {
    className?: string;
    sizes?: GridColumnSizesType | number;
    offsets?: GridColumnSizesType;
    orders?: GridColumnOrderSizesType;
    hidden?: GridColumnSize;
    visible?: GridColumnSize;
    alignSelf?: GridColumnAlignSelf;
    justifyContent?: GridJustifyContent;
    reset?: boolean;
}
export type IndentValue = '0' | 'xs' | 's' | 'm' | 'l' | 'xl';
