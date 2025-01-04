import { useState, useEffect } from 'react';

export const useTimeManager = (initialTime: number, isEntered: boolean) => {
    const isBrowser = typeof window !== 'undefined';

    const getSavedTime = () =>
        isBrowser ? parseInt(localStorage.getItem('timeLeft') || `${initialTime}`) : initialTime;

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(getSavedTime());
    const [isTimeExhausted, setIsTimeExhausted] = useState<boolean>(
        isBrowser && localStorage.getItem('isTimeExhausted') === 'true'
    );

    useEffect(() => {
        if (!isEntered || timeLeft <= 0) {
            if (timeLeft <= 0) setIsTimeExhausted(true);
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                const newTime = prev - 1;
                if (isBrowser) {
                    localStorage.setItem('timeLeft', newTime.toString());
                }
                return Math.max(newTime, 0);
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isEntered, timeLeft, isBrowser]);

    return { isLoggedIn, timeLeft, isTimeExhausted };
};
