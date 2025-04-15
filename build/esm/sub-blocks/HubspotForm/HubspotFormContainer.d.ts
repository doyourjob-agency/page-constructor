import React from 'react';
import { HubspotFormProps } from '../../models';
type HubspotFormContainerPropsKeys = 'className' | 'formId' | 'formInstanceId' | 'portalId' | 'region' | 'formClassName' | 'createDOMElement';
type HubspotFormContainerProps = Pick<HubspotFormProps, HubspotFormContainerPropsKeys>;
declare const HubspotFormContainer: React.ForwardRefExoticComponent<HubspotFormContainerProps & React.RefAttributes<HTMLDivElement>>;
export default HubspotFormContainer;
