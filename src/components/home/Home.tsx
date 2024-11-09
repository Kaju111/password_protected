"use client";
import React, { useState, useEffect } from 'react';
import LeftDoor from './LeftDoor';
import CenterPart from './CenterPart';
import RightDoor from './RightDoor';
import InsideLab from './InsideLab';

const Home: React.FC = () => {
    const initialTime = () => {
        const savedTime = localStorage.getItem('timeLeft');
        return savedTime ? parseInt(savedTime) : 600;
    };

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(initialTime);
    const [isTimeExhausted, setIsTimeExhausted] = useState<boolean>(
        localStorage.getItem('isTimeExhausted') === 'true'
    );

    const handleEnterLab = () => {
        if (isTimeExhausted) {
            alert("You have exhausted your allocated time.");
        } else {
            setIsLoggedIn(true);
        }
    };

    const handleExitLab = () => {
        setIsLoggedIn(false);
        localStorage.setItem('timeLeft', timeLeft.toString());
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isLoggedIn && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsLoggedIn(false);
            setIsTimeExhausted(true);
            localStorage.setItem('isTimeExhausted', 'true');
            alert("You have exhausted your allocated time.");
        }

        return () => {
            clearInterval(timer);
            localStorage.setItem('timeLeft', timeLeft.toString());
        };
    }, [isLoggedIn, timeLeft]);

    useEffect(() => {
        if (isLoggedIn) {
            const savedTime = localStorage.getItem('timeLeft');
            if (savedTime) setTimeLeft(parseInt(savedTime));
        }
    }, [isLoggedIn]);

    return (
        <div className="bg-black min-h-screen flex items-center justify-between gap-1">
            {isLoggedIn && <InsideLab timeLeft={timeLeft} onExitLab={handleExitLab}  isTimeExhausted={isTimeExhausted}/>}
            <LeftDoor isEntered={isLoggedIn} />
            <div className="flex-1 flex justify-center items-center">
                <CenterPart
                    onEnterLab={handleEnterLab}
                    isLoggedIn={isLoggedIn}
                    timeLeft={timeLeft}
                    isTimeExhausted={isTimeExhausted}
                />
            </div>
            <RightDoor isEntered={isLoggedIn} />
        </div>
    );
};

export default Home;
