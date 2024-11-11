"use client";
import React from 'react';
import LeftDoor from './LeftDoor';
import CenterPart from './CenterPart';
import RightDoor from './RightDoor';
import InsideLab from './InsideLab';
import { useTimeManager } from '../hooks/useTimeManager';

const Home: React.FC = () => {
    const initialTime = 600;
    const { isLoggedIn, timeLeft, isTimeExhausted, handleEnterLab, handleExitLab } = useTimeManager(initialTime);

    return (
        <div className="bg-black min-h-screen flex items-center justify-between gap-1">
            {isLoggedIn && <InsideLab timeLeft={timeLeft} onExitLab={handleExitLab} isTimeExhausted={isTimeExhausted} />}
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
