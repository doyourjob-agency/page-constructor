import React from 'react';
import { ClassNameProps, TableProps } from '../../models';
export default class Table extends React.Component<TableProps & ClassNameProps> {
    render(): JSX.Element | null;
    private renderTable;
    private renderMarker;
    private renderLegend;
    private getDefaultJustify;
}
