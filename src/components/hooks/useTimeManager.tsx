import { useState, useEffect } from 'react';

export const useTimeManager = (initialTime: number, isEntered: boolean) => {
    const getSavedTime = () => parseInt(localStorage.getItem('timeLeft') || `${initialTime}`);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(getSavedTime());
    const [isTimeExhausted, setIsTimeExhausted] = useState<boolean>(
        localStorage.getItem('isTimeExhausted') === 'true'
    );

    useEffect(() => {
        if (!isEntered || timeLeft <= 0) {
            if (timeLeft <= 0) setIsTimeExhausted(true);
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                const newTime = prev - 1;
                localStorage.setItem('timeLeft', newTime.toString());
                return Math.max(newTime, 0);
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isEntered, timeLeft]);



    return { isLoggedIn, timeLeft, isTimeExhausted };
};
