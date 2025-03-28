import { EventsFeedBlockProps } from '../../models';
import { Query } from '../../utils';
export declare function updateQueryCallback(query: Query): void;
export declare function convertParsedUrlQueryToQuery(parsedUrlQuery: {
    [key: string]: string | string[] | undefined;
}): Query;
export declare const EventsFeedBlock: ({ image, title }: EventsFeedBlockProps) => JSX.Element;
export default EventsFeedBlock;
