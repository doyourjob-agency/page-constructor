import { JSONSchema4 } from 'json-schema';
import { PageContent } from '../../../models';
import './PageSettings.css';
export interface PageSettingsProps {
    content: PageContent;
    schema: JSONSchema4;
    onChange: (content: PageContent) => void;
}
export declare const PageSettings: {
    ({ schema, content, onChange }: PageSettingsProps): JSX.Element;
    displayName: string;
};
