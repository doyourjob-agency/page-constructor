import React from 'react';

import {a11yHiddenSvgProps} from '../utils/svg';

export const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        height="12"
        width="12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        fill="currentColor"
        {...a11yHiddenSvgProps}
        {...props}
    >
        <path fill="none" stroke="currentColor" fillRule="evenodd" d="M8 10L4 6l4-4"></path>
    </svg>
);
