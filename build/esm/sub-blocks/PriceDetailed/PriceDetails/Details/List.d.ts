import { PriceDetailsListProps, TextSize } from '../../../../models';
import './List.css';
export interface ListProps {
    items: PriceDetailsListProps[];
    titleSize?: TextSize;
}
declare const List: (props: ListProps) => JSX.Element;
export default List;
