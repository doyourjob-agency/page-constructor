import { DefaultService } from '../../../context/servicesContext';
type ServiceElementProps = {
    service?: DefaultService;
    showCards?: boolean;
    serviceLinkType?: string;
};
export declare const ServiceElement: ({ service, showCards, serviceLinkType }: ServiceElementProps) => JSX.Element | null;
export default ServiceElement;
