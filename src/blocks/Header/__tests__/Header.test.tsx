import React from 'react';

import {act, fireEvent, render, screen, waitFor} from '@testing-library/react';

import {MobileContext} from '../../../context/mobileContext';
import {HeaderBlockProps} from '../../../models';
import HeaderBlock from '../Header';
import {HeaderBlock as HeaderBlockSchema} from '../schema';

/* eslint-disable testing-library/no-container, testing-library/no-node-access */

jest.mock('../../../components/UnicornScene/UnicornScene', () => {
    function UnicornSceneMock({
        jsonFilePath,
        onLoad,
        play,
    }: {
        jsonFilePath: string;
        onLoad?: () => void;
        play?: boolean;
    }) {
        React.useEffect(() => {
            onLoad?.();
        }, [onLoad]);

        return (
            <div data-play={String(play)} data-qa="unicorn-scene">
                {jsonFilePath}
            </div>
        );
    }

    return {
        __esModule: true,
        default: UnicornSceneMock,
    };
});

type IntersectionObserverCallback = ConstructorParameters<typeof IntersectionObserver>[0];

const headerTitle = 'Header with Unicorn fallback';

const baseProps: HeaderBlockProps = {
    title: headerTitle,
    unicorn: '/scene.json',
    unicornFallbackImage: '/fallback.jpg',
    unicornFallbackImageMobile: '/fallback-mobile.jpg',
};

const renderHeader = (
    props: HeaderBlockProps = baseProps,
    {isMobile = false}: {isMobile?: boolean} = {},
) =>
    render(
        <MobileContext.Provider value={isMobile}>
            <HeaderBlock {...props} />
        </MobileContext.Provider>,
    );

let intersectionCallbacks: IntersectionObserverCallback[] = [];
let rafCallbacks: FrameRequestCallback[] = [];

class IntersectionObserverMock {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();

    constructor(callback: IntersectionObserverCallback) {
        intersectionCallbacks.push(callback);
    }
}

const triggerIntersection = (isIntersecting: boolean) => {
    act(() => {
        intersectionCallbacks.forEach((callback) => {
            callback([{isIntersecting} as IntersectionObserverEntry], {} as IntersectionObserver);
        });
    });
};

const runAnimationFrame = () => {
    const callbacks = rafCallbacks;
    rafCallbacks = [];

    act(() => {
        callbacks.forEach((callback) => callback(16));
    });
};

const setReducedMotion = (matches: boolean) => {
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
        query,
        matches,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }));
};

describe('HeaderBlock Unicorn fallback', () => {
    beforeEach(() => {
        intersectionCallbacks = [];
        rafCallbacks = [];
        setReducedMotion(false);

        Object.defineProperty(window, 'IntersectionObserver', {
            configurable: true,
            writable: true,
            value: IntersectionObserverMock,
        });
        Object.defineProperty(global, 'IntersectionObserver', {
            configurable: true,
            writable: true,
            value: IntersectionObserverMock,
        });
        Object.defineProperty(window.navigator, 'hardwareConcurrency', {
            configurable: true,
            value: 8,
        });
        Object.defineProperty(window.navigator, 'connection', {
            configurable: true,
            value: {effectiveType: '4g', saveData: false},
        });
        window.requestAnimationFrame = jest.fn((callback: FrameRequestCallback) => {
            rafCallbacks.push(callback);
            return rafCallbacks.length;
        });
        window.cancelAnimationFrame = jest.fn();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('uses the static fallback immediately for reduced motion and does not mount Unicorn', () => {
        setReducedMotion(true);

        renderHeader();

        expect(screen.queryByTestId('unicorn-scene')).not.toBeInTheDocument();
        expect(screen.getByAltText('')).toHaveAttribute('src', '/fallback.jpg');
        expect(screen.getByAltText('')).toHaveAttribute('aria-hidden', 'true');
        expect(screen.getByAltText('').closest('.pc-header-block__fallback')).toHaveClass(
            'pc-header-block__fallback_visible',
        );
    });

    it('mounts Unicorn only when the header background is near the viewport', async () => {
        renderHeader();

        expect(screen.queryByTestId('unicorn-scene')).not.toBeInTheDocument();

        triggerIntersection(true);

        expect(await screen.findByTestId('unicorn-scene')).toHaveTextContent('/scene.json');
    });

    it('fades fallback in before removing the visible Unicorn scene from the shortcut path', async () => {
        renderHeader();
        triggerIntersection(true);

        expect(await screen.findByTestId('unicorn-scene')).toBeInTheDocument();

        fireEvent.keyDown(document, {altKey: true, code: 'KeyU', key: 'Dead', shiftKey: true});

        const fallbackImage = screen.getByAltText('');
        const fallbackLayer = fallbackImage.closest('.pc-header-block__fallback');

        expect(fallbackLayer).not.toHaveClass('pc-header-block__fallback_visible');
        expect(screen.getByTestId('unicorn-scene')).toBeInTheDocument();

        fireEvent.load(fallbackImage);
        runAnimationFrame();

        expect(fallbackLayer).toHaveClass('pc-header-block__fallback_visible');
        expect(screen.getByTestId('unicorn-scene')).toBeInTheDocument();

        fireEvent.transitionEnd(fallbackLayer as Element);

        await waitFor(() => {
            expect(screen.queryByTestId('unicorn-scene')).not.toBeInTheDocument();
        });
        expect(fallbackLayer).toHaveClass('pc-header-block__fallback_visible');
    });

    it('uses the mobile fallback image by default without mounting or observing Unicorn', () => {
        const {container} = renderHeader(baseProps, {isMobile: true});

        expect(screen.queryByTestId('unicorn-scene')).not.toBeInTheDocument();
        expect(screen.getByAltText('')).toHaveAttribute('src', '/fallback-mobile.jpg');
        expect(screen.getByAltText('').closest('.pc-header-block__fallback')).toHaveClass(
            'pc-header-block__fallback_visible',
        );
        expect(container.querySelector('.pc-header-block__background_unicorn')).toHaveClass(
            'pc-header-block__background_unicorn-fallback',
        );
        expect(intersectionCallbacks).toHaveLength(0);
        expect(window.requestAnimationFrame).not.toHaveBeenCalled();
    });

    it('keeps adaptive mobile behavior when forceMobileImage is false', async () => {
        renderHeader({...baseProps, forceMobileImage: false}, {isMobile: true});

        expect(screen.queryByTestId('unicorn-scene')).not.toBeInTheDocument();
        expect(screen.queryByAltText('')).not.toBeInTheDocument();
        expect(intersectionCallbacks).toHaveLength(1);

        triggerIntersection(true);

        expect(await screen.findByTestId('unicorn-scene')).toHaveTextContent('/scene.json');
    });

    it('keeps the fallback layer inside the Unicorn background, below header content', () => {
        setReducedMotion(true);

        const {container} = renderHeader();
        const background = container.querySelector('.pc-header-block__background_unicorn');
        const fallback = container.querySelector('.pc-header-block__fallback');
        const content = screen
            .getByRole('heading', {name: headerTitle})
            .closest('.pc-header-block__content-inner');

        expect(background).toContainElement(fallback as HTMLElement);
        expect(background).not.toContainElement(content as HTMLElement);
    });

    it('allows fallback image fields in the header block schema', () => {
        const schema = HeaderBlockSchema['header-block'].properties as Record<string, unknown>;

        expect(schema.unicornFallbackImage).toEqual({type: 'string'});
        expect(schema.unicornFallbackImageMobile).toEqual({type: 'string'});
        expect(schema.forceMobileImage).toEqual({type: 'boolean'});
    });
});
