import { useEffect } from 'react';
export default function useMount(handler) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(handler, []);
}
