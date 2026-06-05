import React from 'react';

import {render, screen, waitFor} from '@testing-library/react';

import {LogoRotatorBlockProps} from '../../../models';
import LogoRotator from '../LogoRotator';
import {LogoRotatorBlock as LogoRotatorBlockSchema} from '../schema';

const items = Array.from({length: 8}, (_, index) => ({
    src: `/logo-${index}.svg`,
}));

const renderLogoRotator = (props: Partial<LogoRotatorBlockProps> = {}) =>
    render(
        <LogoRotator items={items} count={3} minRotateCount={1} maxRotateCount={1} {...props} />,
    );

const setWindowWidth = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
    });
};

const getLogoItems = () => screen.getAllByRole('img', {hidden: true});

describe('LogoRotator', () => {
    test('renders count items by default', async () => {
        setWindowWidth(360);

        renderLogoRotator({desktopCount: 5});

        await waitFor(() => {
            expect(getLogoItems()).toHaveLength(3);
        });
    });

    test('renders desktopCount items on desktop', async () => {
        setWindowWidth(1280);

        renderLogoRotator({desktopCount: 5});

        await waitFor(() => {
            expect(getLogoItems()).toHaveLength(5);
        });
    });

    test('allows desktopCount in schema without requiring it', () => {
        const schema = LogoRotatorBlockSchema['logo-rotator-block'];

        expect(schema.properties.desktopCount).toEqual({type: 'number'});
        expect(schema.required).not.toContain('desktopCount');
    });
});
