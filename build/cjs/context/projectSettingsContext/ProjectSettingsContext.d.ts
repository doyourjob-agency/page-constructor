import React from 'react';
export interface ProjectSettingsContextProps {
    disableCompress?: boolean;
    isAnimationEnabled?: boolean;
}
export declare const ProjectSettingsContext: React.Context<ProjectSettingsContextProps>;
