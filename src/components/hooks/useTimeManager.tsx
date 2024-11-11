import { useState, useEffect } from 'react';

export const useTimeManager = (initialTime: number) => {
    // Function to retrieve the saved time from localStorage, falling back to initialTime if not found
    const getSavedTime = () => parseInt(localStorage.getItem('timeLeft') || `${initialTime}`);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(getSavedTime());
    const [isTimeExhausted, setIsTimeExhausted] = useState<boolean>(
        localStorage.getItem('isTimeExhausted') === 'true'
    );

      // Handle the countdown and update the localStorage
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

      // Function to handle entering the lab
    const handleEnterLab = () => {
        if (!isTimeExhausted) setIsLoggedIn(true);
    };

    // Function to handle exiting the lab
    const handleExitLab = () => {
        setIsLoggedIn(false);
        localStorage.setItem('timeLeft', timeLeft.toString());
    };

    return { isLoggedIn, timeLeft, isTimeExhausted, handleEnterLab, handleExitLab };
};
