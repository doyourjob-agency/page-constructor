import React from 'react';
import './ServiceSearch.css';
type ServicesSearchProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
};
export declare const ServicesSearch: ({ value, setValue }: ServicesSearchProps) => JSX.Element;
export default ServicesSearch;
