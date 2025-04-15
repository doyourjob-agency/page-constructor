import sanitize from 'sanitize-html';
export const mergeVideoMicrodata = (values = {}, newValues = {}) => (Object.assign(Object.assign({}, values), { videoMicrodata: Object.assign(Object.assign({}, newValues), (values.videoMicrodata || {})) }));
export function sanitizeMicrodata(html) {
    return html && sanitize(html, { allowedTags: [], allowedAttributes: {} });
}
