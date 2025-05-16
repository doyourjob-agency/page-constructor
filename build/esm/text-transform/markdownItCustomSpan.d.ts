import type { PluginWithOptions } from 'markdown-it';
interface Options {
    /** шаблон: {#id текст} */
    pattern?: RegExp;
}
declare const customSpanPlugin: PluginWithOptions<Options>;
export default customSpanPlugin;
