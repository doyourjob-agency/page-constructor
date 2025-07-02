import React from 'react';

import {a11yHiddenSvgProps} from '../utils/svg';

export const VideoIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="currentColor"
        {...a11yHiddenSvgProps}
        {...props}
    >
        <path d="M6.25 3.24992V10.7499L12.0833 6.99992L6.25 3.24992Z" fill="currentColor"></path>
        <path
            d="M6.25 3.24992V10.7499L12.0833 6.99992L6.25 3.24992Z"
            fill="currentColor"
            fillOpacity="0.2"
        ></path>
        <path
            d="M15 0.333252H1.66667C0.75 0.333252 0 1.08325 0 1.99992V11.9999C0 12.9166 0.75 13.6666 1.66667 13.6666H15C15.9167 13.6666 16.6667 12.9166 16.6667 11.9999V1.99992C16.6667 1.08325 15.9167 0.333252 15 0.333252ZM15 12.0083H1.66667V1.99159H15V12.0083Z"
            fill="currentColor"
        ></path>
        <path
            d="M15 0.333252H1.66667C0.75 0.333252 0 1.08325 0 1.99992V11.9999C0 12.9166 0.75 13.6666 1.66667 13.6666H15C15.9167 13.6666 16.6667 12.9166 16.6667 11.9999V1.99992C16.6667 1.08325 15.9167 0.333252 15 0.333252ZM15 12.0083H1.66667V1.99159H15V12.0083Z"
            fill="currentColor"
            fillOpacity="0.2"
        ></path>
    </svg>
);
