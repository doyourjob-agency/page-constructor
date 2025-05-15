import { ServiceCategory } from '../../../context/servicesContext';
import './ServicesMobileMenu.css';
type ServicesMobileMenuProps = {
    items: ServiceCategory[];
};
export declare const ServicesMobileMenu: ({ items }: ServicesMobileMenuProps) => JSX.Element;
export default ServicesMobileMenu;
