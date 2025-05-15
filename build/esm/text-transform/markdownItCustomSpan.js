const defaultPattern = /\{#([a-zA-Z0-9\-_]+)\s+([^}]+)\}/;
const customSpanPlugin = (md, opts) => {
    var _a;
    const pattern = (_a = opts === null || opts === void 0 ? void 0 : opts.pattern) !== null && _a !== void 0 ? _a : defaultPattern;
    function customSpanRule(state, silent) {
        const { src, pos } = state;
        pattern.lastIndex = pos;
        const match = pattern.exec(src);
        if (!match || match.index !== pos)
            return false;
        const [fullMatch, id, spanText] = match;
        const matchLen = fullMatch.length;
        if (!silent) {
            const open = state.push('html_inline', '', 0);
            open.content = `<span id="${md.utils.escapeHtml(id)}">`;
            const text = state.push('text', '', 0);
            text.content = spanText;
            const close = state.push('html_inline', '', 0);
            close.content = `</span>`;
        }
        // eslint-disable-next-line no-param-reassign, no-not-accumulator-reassign/no-not-accumulator-reassign
        state.pos += matchLen;
        return true;
    }
    md.inline.ruler.before('text', 'custom_span', customSpanRule);
};
export default customSpanPlugin;
