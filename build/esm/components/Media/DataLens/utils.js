export function unifyDataLensToObject(dataLens) {
    return typeof dataLens === 'string' ? { id: dataLens, theme: 'light' } : dataLens;
}
