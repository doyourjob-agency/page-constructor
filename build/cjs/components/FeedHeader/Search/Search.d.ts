export type SearchSize = 's' | 'm';
type SearchProps = {
    className?: string;
    initialValue?: string;
    onSubmit: (value: string) => void;
    debounce?: number;
    placeholder?: string;
    size?: SearchSize;
};
export declare const Search: ({ className, initialValue, onSubmit, debounce, placeholder, size, }: SearchProps) => JSX.Element;
export default Search;
