import { useMemo } from 'react';
import formSpecParser from '../dynamic-forms-custom/parser';
export default function useFormSpec(schema) {
    return useMemo(() => formSpecParser.parse(schema), [schema]);
}
