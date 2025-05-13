import React from 'react';
export type LabeLType = 'label' | 'line';
export interface UnpublishedLabelProps {
    type?: LabeLType;
    className?: string;
}
declare const UnpublishedLabel: ({ className, children, type, }: React.PropsWithChildren<UnpublishedLabelProps>) => JSX.Element;
export default UnpublishedLabel;
