import { EventsFeedHeaderControlsProps } from './EventsFeedHeaderControls/EventsFeedHeaderControls';
interface EventsFeedHeaderProps extends EventsFeedHeaderControlsProps {
    image?: string;
}
export declare const EventsFeedHeader: ({ title, countries, types, image, handleLoadData, queryParams, }: EventsFeedHeaderProps) => JSX.Element;
export default EventsFeedHeader;
