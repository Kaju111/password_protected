"use client"
import React, { useState } from 'react';
import LeftDoor from './LeftDoor';
import CenterPart from './CenterPart';
import RightDoor from './RightDoor';

const Home = () => {
    const [isEntered, setIsEntered] = useState(false);

    const handleEnterLab = () => {
        setIsEntered(true);
    };

    const handleExitLab = () => {
        setIsEntered(false);
    };
    return (
        <div className="bg-black min-h-screen flex items-center justify-center gap-1 relative">
            <LeftDoor isEntered={isEntered} />
            <CenterPart
                onEnterLab={handleEnterLab}
                onExitLab={handleExitLab}
                isEntered={isEntered}
            />
            <RightDoor isEntered={isEntered} />
        </div>
    );
};

export default Home;
