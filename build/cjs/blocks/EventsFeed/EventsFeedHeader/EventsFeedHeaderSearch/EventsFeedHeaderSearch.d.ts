export type SearchSize = 's' | 'm';
type EventsFeedHeaderSearchProps = {
    className?: string;
    initialValue?: string;
    onSubmit: (value: string) => void;
    debounce?: number;
    placeholder?: string;
    size?: SearchSize;
};
export declare const EventsFeedHeaderSearch: ({ className, initialValue, onSubmit, debounce, placeholder, size, }: EventsFeedHeaderSearchProps) => JSX.Element;
export default EventsFeedHeaderSearch;
