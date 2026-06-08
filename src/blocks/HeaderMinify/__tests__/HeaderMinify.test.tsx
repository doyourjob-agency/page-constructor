import React from 'react';

import {render} from '@testing-library/react';

import HeaderMinifyBlock from '../HeaderMinify';
import {HeaderMinifyBlock as HeaderMinifyBlockSchema} from '../schema';

describe('HeaderMinifyBlock', () => {
    test('applies xxl vertical offset classes', () => {
        const {container} = render(
            <HeaderMinifyBlock
                title="Header"
                verticalOffset="xxl"
                verticalOffsetTop="xxl"
                verticalOffsetBottom="xxl"
            />,
        );

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const header = container.querySelector('.pc-header-minify-block');

        expect(header).toHaveClass('pc-header-minify-block_vertical-offset_xxl');
        expect(header).toHaveClass('pc-header-minify-block_vertical-offset-top_xxl');
        expect(header).toHaveClass('pc-header-minify-block_vertical-offset-bottom_xxl');
    });

    test('allows xxl vertical offsets in schema', () => {
        const schema = HeaderMinifyBlockSchema['header-minify-block'];

        expect(schema.properties.verticalOffset.enum).toContain('xxl');
        expect(schema.properties.verticalOffsetTop.enum).toContain('xxl');
        expect(schema.properties.verticalOffsetBottom.enum).toContain('xxl');
    });
});
