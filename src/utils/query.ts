import {Query} from './url';

export function updateQueryCallback(query: Query) {
    const url = new URL(window?.location.href);

    Object.keys(query).forEach((key) => {
        const value = query[key];
        if (value === undefined) return;
        if (!value) {
            url.searchParams.delete(key);
            return;
        }
        url.searchParams.set(key, String(value));
    });

    window.history.replaceState(window.history.state, '', url);
}

export function convertParsedUrlQueryToQuery(parsedUrlQuery: {
    [key: string]: string | string[] | undefined;
}): Query {
    const query: Query = {};

    Object.keys(parsedUrlQuery).forEach((key) => {
        const value = parsedUrlQuery[key];

        if (Array.isArray(value)) {
            query[key] = value.join(',') ?? null;
        } else if (value === undefined) {
            query[key] = null;
        } else {
            query[key] = value;
        }
    });

    return query;
}
