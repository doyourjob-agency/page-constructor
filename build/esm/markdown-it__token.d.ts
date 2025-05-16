declare module 'markdown-it/lib/token' {
    type Nesting = -1 | 0 | 1; // Тип для значения nesting

    class Token {
        type: string;
        tag: string;
        attrs: Array<[string, string]> | null;
        map: [number, number] | null;
        nesting: Nesting;
        level: number;
        children: Token[] | null;
        content: string;
        markup: string;
        info: string;
        meta: Record<string, unknown> | null;
        block: boolean;
        hidden: boolean;

        constructor(type: string, tag: string, nesting: Nesting);

        // Измененный метод attrPush, теперь принимает кортеж [string, string]
        attrIndex(name: string): number;
        attrPush(attrData: [string, string]): void; // Принимает кортеж [string, string]
        attrSet(name: string, value: string): void;
        attrGet(name: string): string | null;
        attrJoin(name: string): string;
    }

    export default Token;
}
