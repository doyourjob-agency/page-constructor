"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("./url");
describe('URL utils check', () => {
    test.each([
        ['https://user:pass@sub.example.com:8080/p/a/t/h?query=string&query2=1#hash', true],
        ['http://example.net/path', true],
        ['/p/a/t/h?query=string&query2=1#hash', false],
        ['/path', false],
        ['path', false],
    ])("isAbsoluteUrl('%s') should return '%s'", (url, result) => {
        expect((0, url_1.isAbsoluteUrl)(url)).toEqual(result);
    });
    test.each([
        [
            'https://user:pass@sub.example.com:8080/p/a/t/h?query=string&query2=1#hash',
            'example.net',
            true,
        ],
        [
            'https://user:pass@sub.example.com:8080/p/a/t/h?query=string&query2=1#hash',
            'sub.example.com',
            false,
        ],
        [
            'https://user:pass@sub.example.com:8080/p/a/t/h?query=string&query2=1#hash',
            undefined,
            true,
        ],
        ['http://example.net/path', 'example.net', false],
        ['http://example.net/path', 'sub.example.com', true],
        ['http://example.net/path', undefined, true],
        ['/p/a/t/h?query=string&query2=1#hash', 'example.net', false],
        ['/p/a/t/h?query=string&query2=1#hash', undefined, false],
        ['/path', 'example.net', false],
        ['/path', undefined, false],
        ['path', 'example.net', false],
        ['path', undefined, false],
    ])("isLinkExternal('%s', '%s') should return '%s'", (url, hostname, result) => {
        expect((0, url_1.isLinkExternal)(url, hostname)).toEqual(result);
    });
    test.each([
        ['http://example.net/path', 'example.net', '_blank', { target: '_blank' }],
        ['http://example.net/path', 'example.net', undefined, {}],
        [
            'http://example.net/path',
            'example.com',
            '_blank',
            { target: '_blank', rel: 'noopener noreferrer' },
        ],
        [
            'http://example.net/path',
            'example.com',
            undefined,
            { target: '_blank', rel: 'noopener noreferrer' },
        ],
        [
            'http://example.net/path',
            undefined,
            '_blank',
            { target: '_blank', rel: 'noopener noreferrer' },
        ],
        [
            'http://example.net/path',
            undefined,
            undefined,
            { target: '_blank', rel: 'noopener noreferrer' },
        ],
        ['/path', 'example.net', '_blank', { target: '_blank' }],
        ['/path', 'example.net', undefined, {}],
        ['/path', undefined, '_blank', { target: '_blank' }],
        ['/path', undefined, undefined, {}],
    ])("getLinkProps('%s', '%s', '%s') should return '%s'", (url, hostname, target, result) => {
        expect((0, url_1.getLinkProps)(url, hostname, target)).toEqual(result);
    });
});
