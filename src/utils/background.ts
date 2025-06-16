export function normalizeBackgroundValue(str?: string): string | undefined {
    if (!str) return undefined;
    return /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(str) ? `url(${str})` : str;
}
