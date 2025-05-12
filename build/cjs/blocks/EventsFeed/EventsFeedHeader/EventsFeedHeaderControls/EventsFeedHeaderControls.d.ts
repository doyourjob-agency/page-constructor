import { Query } from '../../../../utils';
export type SelectItem = {
    content: string;
    value: string;
};
export type EventsFeedHeaderControlsProps = {
    title?: string;
    handleLoadData: (query: Query) => void;
    countries?: SelectItem[];
    types?: SelectItem[];
    queryParams: Query;
};
export declare const EventsFeedHeaderControls: ({ title, handleLoadData, countries, types, queryParams, }: EventsFeedHeaderControlsProps) => JSX.Element;
export default EventsFeedHeaderControls;
