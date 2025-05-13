import { useCallback, useMemo } from 'react';
import { createValidator, validate } from '../utils/validation';
export function useCodeValidator(schema) {
    const validator = useMemo(() => createValidator(schema), [schema]);
    return useCallback((code) => validate(code, validator), [validator]);
}
