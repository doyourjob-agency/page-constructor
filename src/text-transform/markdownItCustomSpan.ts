import type {PluginWithOptions, StateInline} from 'markdown-it';

interface Options {
    /** шаблон: {#id текст} */
    pattern?: RegExp;
}

const defaultPattern = /\{#([a-zA-Z0-9\-_]+)\s+([^}]+)\}/;

const customSpanPlugin: PluginWithOptions<Options> = (md, opts) => {
    const pattern = opts?.pattern ?? defaultPattern;

    function customSpanRule(state: StateInline, silent: boolean): boolean {
        const {src, pos} = state;

        pattern.lastIndex = pos;
        const match = pattern.exec(src);
        if (!match || match.index !== pos) return false;

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
