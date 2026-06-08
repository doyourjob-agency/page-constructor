import React from 'react';

import {render} from '@testing-library/react';

import Divider from '../Divider';
import {Divider as DividerSchema} from '../schema';

describe('Divider', () => {
    test('applies visibility classes', () => {
        const {container} = render(<Divider visibility="desktop" />);

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const divider = container.firstElementChild;

        expect(divider).toHaveClass('pc-divider-block_hidden');
        expect(divider).toHaveClass('pc-divider-block_visible-md');
        expect(divider).toHaveClass('pc-divider-block_visible-lg');
        expect(divider).toHaveClass('pc-divider-block_visible-xl');
        expect(divider).toHaveClass('pc-divider-block_visible-xxl');
    });

    test('allows visibility in schema', () => {
        const properties = DividerSchema.divider.properties as Record<string, unknown>;

        expect(properties.visibility).toEqual({
            type: 'string',
            enum: ['mobile', 'desktop'],
        });
    });
});
