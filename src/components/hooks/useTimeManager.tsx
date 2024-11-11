import { useState, useEffect } from 'react';

export const useTimeManager = (initialTime: number) => {
    const getSavedTime = () => parseInt(localStorage.getItem('timeLeft') || `${initialTime}`);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(getSavedTime());
    const [isTimeExhausted, setIsTimeExhausted] = useState<boolean>(
        localStorage.getItem('isTimeExhausted') === 'true'
    );

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isLoggedIn && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        } else if (timeLeft === 0) {
            setIsLoggedIn(false);
            setIsTimeExhausted(true);
            localStorage.setItem('isTimeExhausted', 'true');
        }

        return () => {
            clearInterval(timer);
            localStorage.setItem('timeLeft', timeLeft.toString());
        };
    }, [isLoggedIn, timeLeft]);

    const handleEnterLab = () => {
        if (!isTimeExhausted) setIsLoggedIn(true);
    };

    const handleExitLab = () => {
        setIsLoggedIn(false);
        localStorage.setItem('timeLeft', timeLeft.toString());
    };

    return { isLoggedIn, timeLeft, isTimeExhausted, handleEnterLab, handleExitLab };
};
