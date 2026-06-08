import React from 'react';

import {act, fireEvent, render, screen, waitFor} from '@testing-library/react';

import {LogoRotatorBlockProps} from '../../../models';
import LogoRotator from '../LogoRotator';
import {LogoRotatorBlock as LogoRotatorBlockSchema} from '../schema';

const items = Array.from({length: 8}, (_, index) => ({
    src: `/logo-${index}.svg`,
}));

const renderLogoRotator = (props: Partial<LogoRotatorBlockProps> = {}) =>
    render(
        <LogoRotator
            items={items}
            countMobile={3}
            minRotateCount={1}
            maxRotateCount={1}
            {...props}
        />,
    );

const setWindowWidth = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
    });
};

const getLogoItems = () => screen.getAllByRole('img', {hidden: true});

/* eslint-disable testing-library/no-node-access */
const getLayerClassCount = (className: string) => document.querySelectorAll(`.${className}`).length;
const getGridClassCount = (className: string) => document.querySelectorAll(`.${className}`).length;
/* eslint-enable testing-library/no-node-access */

describe('LogoRotator', () => {
    afterEach(() => {
        jest.useRealTimers();
        jest.restoreAllMocks();
    });

    test('renders countMobile items by default', async () => {
        setWindowWidth(360);

        renderLogoRotator({countDesktop: 5});

        await waitFor(() => {
            expect(getLogoItems()).toHaveLength(3);
        });
    });

    test('renders countDesktop items on desktop', async () => {
        setWindowWidth(1280);

        renderLogoRotator({countDesktop: 5});

        await waitFor(() => {
            expect(getLogoItems()).toHaveLength(5);
        });
    });

    test('allows countDesktop in schema without requiring it', () => {
        const schema = LogoRotatorBlockSchema['logo-rotator-block'];

        expect(schema.properties.countMobile).toEqual({type: 'number'});
        expect(schema.properties.countDesktop).toEqual({type: 'number'});
        expect(schema.properties).not.toHaveProperty('count');
        expect(schema.properties).not.toHaveProperty('desktopCount');
        expect(schema.required).toContain('countMobile');
        expect(schema.required).not.toContain('count');
        expect(schema.required).not.toContain('countDesktop');
    });

    test('allows swapAnimation in schema without requiring it', () => {
        const schema = LogoRotatorBlockSchema['logo-rotator-block'];

        expect(schema.properties.swapAnimation).toEqual({
            type: 'string',
            enum: ['fade', 'morph'],
        });
        expect(schema.required).not.toContain('swapAnimation');
    });

    test('caps mobile colSizes to keep at least two logos per row', async () => {
        setWindowWidth(320);

        renderLogoRotator({colSizes: {all: 12, sm: 12, md: 3}});

        await waitFor(() => {
            expect(getLogoItems()).toHaveLength(3);
        });

        expect(getGridClassCount('col-6')).toBe(3);
        expect(getGridClassCount('col-sm-6')).toBe(3);
        expect(getGridClassCount('col-12')).toBe(0);
        expect(getGridClassCount('col-sm-12')).toBe(0);
        expect(getGridClassCount('col-md-3')).toBe(3);
    });

    test('keeps default fade layers for the sequential fade-out and fade-in duration', () => {
        jest.useFakeTimers();
        jest.spyOn(Math, 'random').mockReturnValue(0);

        renderLogoRotator({countMobile: 4, minRotateCount: 2, maxRotateCount: 2});

        act(() => {
            jest.advanceTimersByTime(1999);
        });

        expect(getLogoItems()).toHaveLength(4);

        act(() => {
            jest.advanceTimersByTime(1);
        });

        expect(getLogoItems()).toHaveLength(6);

        act(() => {
            jest.advanceTimersByTime(600);
        });

        expect(getLogoItems()).toHaveLength(6);

        act(() => {
            jest.advanceTimersByTime(499);
        });

        expect(getLogoItems()).toHaveLength(6);

        act(() => {
            jest.advanceTimersByTime(1);
        });

        expect(getLogoItems()).toHaveLength(4);
    });

    test('keeps morph layers on the shorter morph duration', () => {
        jest.useFakeTimers();
        jest.spyOn(Math, 'random').mockReturnValue(0);

        renderLogoRotator({
            countMobile: 4,
            minRotateCount: 2,
            maxRotateCount: 2,
            swapAnimation: 'morph',
        });

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(getLogoItems()).toHaveLength(6);

        act(() => {
            jest.advanceTimersByTime(500);
        });

        expect(getLogoItems()).toHaveLength(4);
    });

    test('renders outgoing and incoming logo layers during rotation', () => {
        jest.useFakeTimers();
        jest.spyOn(Math, 'random').mockReturnValue(0);

        renderLogoRotator({countMobile: 1});

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        const transitionSrcs = getLogoItems().map((image) => image.getAttribute('src'));

        expect(transitionSrcs).toEqual(['/logo-0.svg', '/logo-1.svg']);

        act(() => {
            jest.advanceTimersByTime(1100);
        });

        expect(getLogoItems()).toHaveLength(1);
        expect(getLogoItems()[0]).toHaveAttribute('src', '/logo-1.svg');
    });

    test('uses fade swap animation by default', () => {
        jest.useFakeTimers();
        jest.spyOn(Math, 'random').mockReturnValue(0);

        renderLogoRotator({countMobile: 1});

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(getLayerClassCount('pc-logo-rotator-block__logo-layer_fade-from')).toBe(1);
        expect(getLayerClassCount('pc-logo-rotator-block__logo-layer_fade-to')).toBe(1);
        expect(getLayerClassCount('pc-logo-rotator-block__logo-layer_morph-from')).toBe(0);
        expect(getLayerClassCount('pc-logo-rotator-block__logo-layer_morph-to')).toBe(0);
    });

    test('uses morph swap animation when selected', () => {
        jest.useFakeTimers();
        jest.spyOn(Math, 'random').mockReturnValue(0);

        renderLogoRotator({countMobile: 1, swapAnimation: 'morph'});

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(getLayerClassCount('pc-logo-rotator-block__logo-layer_morph-from')).toBe(1);
        expect(getLayerClassCount('pc-logo-rotator-block__logo-layer_morph-to')).toBe(1);
        expect(getLayerClassCount('pc-logo-rotator-block__logo-layer_fade-from')).toBe(0);
        expect(getLayerClassCount('pc-logo-rotator-block__logo-layer_fade-to')).toBe(0);
    });

    test('skips duplicate logo assets when choosing the incoming layer', () => {
        jest.useFakeTimers();
        jest.spyOn(Math, 'random').mockReturnValue(0);

        renderLogoRotator({
            countMobile: 1,
            items: [{src: '/logo-0.svg'}, {src: '/logo-0.svg'}, {src: '/logo-1.svg'}],
        });

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(getLogoItems().map((image) => image.getAttribute('src'))).toEqual([
            '/logo-0.svg',
            '/logo-1.svg',
        ]);
    });

    test('allows hidden logos that duplicate another visible logo', () => {
        jest.useFakeTimers();
        jest.spyOn(Math, 'random').mockReturnValue(0);

        renderLogoRotator({
            countMobile: 2,
            items: [
                {src: '/logo-0.svg'},
                {src: '/logo-1.svg', isStatic: true},
                {src: '/logo-2.svg'},
                {src: '/logo-1.svg'},
            ],
        });

        act(() => {
            jest.advanceTimersByTime(2000);
        });

        expect(getLogoItems().map((image) => image.getAttribute('src'))).toEqual([
            '/logo-1.svg',
            '/logo-0.svg',
            '/logo-1.svg',
        ]);
    });

    test('keeps non-hovered logos rotating while the hovered logo is paused', async () => {
        jest.useFakeTimers();
        jest.spyOn(Math, 'random').mockReturnValue(0);

        renderLogoRotator();

        const initialSrcs = getLogoItems().map((image) => image.getAttribute('src'));
        const hoveredLogo = getLogoItems()[0];

        expect(hoveredLogo).not.toBeNull();

        fireEvent.mouseEnter(hoveredLogo);

        act(() => {
            jest.advanceTimersByTime(2500);
        });

        const nextSrcs = getLogoItems().map((image) => image.getAttribute('src'));

        expect(nextSrcs[0]).toBe(initialSrcs[0]);
        expect(nextSrcs.slice(1)).not.toEqual(initialSrcs.slice(1));
    });
});
