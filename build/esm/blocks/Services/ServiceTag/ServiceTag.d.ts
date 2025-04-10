import './ServiceTag.css';
type ServiceTagProps = {
    tag?: string | null;
    small?: boolean;
};
export declare const ServiceTag: ({ tag, small }: ServiceTagProps) => JSX.Element | null;
export default ServiceTag;
