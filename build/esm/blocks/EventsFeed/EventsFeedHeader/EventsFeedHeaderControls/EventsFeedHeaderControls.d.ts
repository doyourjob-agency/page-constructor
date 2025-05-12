import { Query } from '../../../../utils';
import './EventsFeedHeaderControls.css';
export type SelectItem = {
    content: string;
    value: string;
};
export type EventsFeedHeaderControlsProps = {
    title?: string;
    handleLoadData: (query: Query) => void;
    online?: SelectItem[];
    types?: SelectItem[];
    queryParams: Query;
};
export declare const EventsFeedHeaderControls: ({ title, handleLoadData, online, types, queryParams, }: EventsFeedHeaderControlsProps) => JSX.Element;
export default EventsFeedHeaderControls;
