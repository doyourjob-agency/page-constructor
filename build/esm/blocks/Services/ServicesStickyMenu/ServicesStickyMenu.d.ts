import { ServiceCategory } from '../../../context/servicesContext';
import './ServicesStickyMenu.css';
type ServicesStickyMenuProps = {
    items: ServiceCategory[];
};
export declare const ServicesStickyMenu: ({ items }: ServicesStickyMenuProps) => JSX.Element;
export default ServicesStickyMenu;
