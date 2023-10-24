import { useEffect } from 'react';

const useWindowResize = (callback: EventListener): void => {
    useEffect(() => {
        window.addEventListener('resize', callback);

        return () => {
            window.removeEventListener('resize', callback);
        };
    }, [callback]);
};

export default useWindowResize;
