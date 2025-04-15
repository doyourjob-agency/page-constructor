import { Query } from './url';
export declare function updateQueryCallback(query: Query): void;
export declare function convertParsedUrlQueryToQuery(parsedUrlQuery: {
    [key: string]: string | string[] | undefined;
}): Query;
