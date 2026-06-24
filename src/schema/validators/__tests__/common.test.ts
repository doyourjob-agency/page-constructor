import Ajv from 'ajv';

import {MediaProps} from '../common';

describe('common validators', () => {
    const iframe = MediaProps.iframe as {properties: Record<string, unknown>};

    test('allows iframe height as responsive breakpoint values', () => {
        expect(iframe.properties.height).toEqual({
            oneOf: [
                {
                    type: 'number',
                    optionName: 'constant',
                },
                {
                    type: 'object',
                    additionalProperties: false,
                    optionName: 'responsive',
                    properties: {
                        all: {type: 'number'},
                        sm: {type: 'number'},
                        md: {type: 'number'},
                        lg: {type: 'number'},
                        xl: {type: 'number'},
                    },
                },
            ],
        });
    });

    test('validates numeric and responsive iframe heights', () => {
        const ajv = new Ajv({strict: false});
        const validate = ajv.compile(iframe);

        expect(validate({src: 'https://example.com/form', height: 3000})).toBe(true);
        expect(validate({src: 'https://example.com/form', height: {all: 4300, md: 3000}})).toBe(
            true,
        );
    });
});
