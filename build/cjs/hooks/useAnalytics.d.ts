import { AnalyticsEventsProp } from '../models';
export declare const useAnalytics: (name?: string, target?: string) => (e?: AnalyticsEventsProp | null, additionalContext?: Record<string, string>) => void;
