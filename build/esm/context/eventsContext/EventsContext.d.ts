import React from 'react';
export type EventData = {
    slug: string;
    title?: string;
    description?: string;
    date?: string;
    dateStart: string;
    image?: string;
    info?: string;
    country?: string;
    place?: string;
    type: string;
    online?: boolean;
};
export interface EventsContextProps {
    events: EventData[];
}
export declare const EventsContext: React.Context<EventsContextProps>;
