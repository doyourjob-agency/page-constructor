import React from 'react';

import {render, screen} from '@testing-library/react';

import Iframe from '../Iframe';

const iframeProps = {
    src: 'https://example.com/form',
    title: 'Example form',
};

const setWindowWidth = (width: number) => {
    Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        writable: true,
        value: width,
    });
};

const getIframe = () => screen.getByTitle(iframeProps.title);
/* eslint-disable-next-line testing-library/no-node-access */
const getIframeWrapper = () => getIframe().parentElement;

describe('Iframe', () => {
    test('uses default height when height is not set', () => {
        render(<Iframe iframe={iframeProps} />);

        const iframe = getIframe();

        expect(getIframeWrapper()).toHaveStyle({height: '400px'});
        expect(iframe).toHaveAttribute('height', '400');
    });

    test('keeps numeric height backward compatible', () => {
        render(<Iframe iframe={{...iframeProps, height: 3000}} />);

        const iframe = getIframe();

        expect(getIframeWrapper()).toHaveStyle({height: '3000px'});
        expect(iframe).toHaveAttribute('height', '3000');
    });

    test('uses all height for mobile viewport', () => {
        setWindowWidth(576);

        render(<Iframe iframe={{...iframeProps, height: {all: 4300, md: 3000}}} />);

        const iframe = getIframe();

        expect(getIframeWrapper()).toHaveStyle({height: '4300px'});
        expect(iframe).toHaveAttribute('height', '4300');
    });

    test('uses the matching breakpoint height for wider viewport', () => {
        setWindowWidth(769);

        render(<Iframe iframe={{...iframeProps, height: {all: 4300, md: 3000}}} />);

        const iframe = getIframe();

        expect(getIframeWrapper()).toHaveStyle({height: '3000px'});
        expect(iframe).toHaveAttribute('height', '3000');
    });
});
