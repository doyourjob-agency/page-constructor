type InfiniteScrollProps = {
    onNext?: () => void;
    preventiveLoadFactor?: number;
    hasMore?: boolean;
};
export declare const InfiniteScroll: ({ hasMore, onNext, preventiveLoadFactor, }: InfiniteScrollProps) => JSX.Element | null;
export default InfiniteScroll;
