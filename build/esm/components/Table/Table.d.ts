import React from 'react';
import { ClassNameProps, TableProps } from '../../models';
import './Table.css';
export default class Table extends React.Component<TableProps & ClassNameProps> {
    render(): JSX.Element | null;
    private renderTable;
    private renderMarker;
    private renderLegend;
    private getDefaultJustify;
}
