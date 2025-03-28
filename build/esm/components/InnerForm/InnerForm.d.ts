import React from 'react';
import { FormBlockData } from '../../models';
interface InnerFormProps {
    formData: FormBlockData;
    onContentLoad: () => void;
    className?: string;
}
declare const InnerForm: React.FC<InnerFormProps>;
export default InnerForm;
