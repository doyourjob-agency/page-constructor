import { EventsFeedHeaderControlsProps } from './EventsFeedHeaderControls/EventsFeedHeaderControls';
import './EventsFeedHeader.css';
interface EventsFeedHeaderProps extends EventsFeedHeaderControlsProps {
    image?: string;
}
export declare const EventsFeedHeader: ({ title, countries, types, image, handleLoadData, queryParams, }: EventsFeedHeaderProps) => JSX.Element;
export default EventsFeedHeader;
