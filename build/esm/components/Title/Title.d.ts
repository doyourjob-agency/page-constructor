import { GridColumnSizesType } from '../../grid';
import { ClassNameProps, TitleProps as TitleParams } from '../../models';
import './Title.css';
export interface TitleProps extends TitleParams {
    colSizes?: GridColumnSizesType;
    id?: string;
}
declare const Title: ({ title, subtitle, subtitleBold, className, colSizes, id, }: TitleProps & ClassNameProps) => JSX.Element | null;
export default Title;
