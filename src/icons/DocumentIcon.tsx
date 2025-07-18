import React from 'react';

import {a11yHiddenSvgProps} from '../utils/svg';

export const DocumentIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="16"
        viewBox="0 0 12 16"
        fill="currentColor"
        {...a11yHiddenSvgProps}
        {...props}
    >
        <path
            d="M3 12.5H9V11H3V12.5ZM3 9.5H9V8H3V9.5ZM1.5 15.5C1.0875 15.5 0.734375 15.3531 0.440625 15.0594C0.146875 14.7656 0 14.4125 0 14V2C0 1.5875 0.146875 1.23438 0.440625 0.940625C0.734375 0.646875 1.0875 0.5 1.5 0.5H7.5L12 5V14C12 14.4125 11.8531 14.7656 11.5594 15.0594C11.2656 15.3531 10.9125 15.5 10.5 15.5H1.5ZM6.75 5.75V2H1.5V14H10.5V5.75H6.75Z"
            fill="currentColor"
        />
    </svg>
);
