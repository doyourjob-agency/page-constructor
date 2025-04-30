import { CardProps } from '../../models/constructor-items/sub-blocks';
import './Card.css';
declare const Card: ({ header, text, service, ...props }: CardProps) => JSX.Element;
export default Card;
