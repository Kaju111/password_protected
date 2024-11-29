import React from 'react';
import { Box } from '../command/Box';
import { RightDoorProps } from "../global/type";
import { useTimeManager } from '../hooks/useTimeManager';


const RightDoor: React.FC<RightDoorProps> = ({ isEntered }) => {

    const initialTime = 600;

    const { timeLeft, isTimeExhausted } = useTimeManager(initialTime);

    const hoursLeft = Math.floor(timeLeft / 3600);
    const minutesLeft = Math.floor((timeLeft % 3600) / 60);
    const secondsLeft = timeLeft % 60;


    const formattedHours = hoursLeft > 9 ? hoursLeft : `0${hoursLeft}`;
    const formattedMinutes = minutesLeft > 9 ? minutesLeft : `0${minutesLeft}`;
    const formattedSeconds = secondsLeft > 9 ? secondsLeft : `0${secondsLeft}`;

    return (
        <div
            className={`min-h-screen ${isEntered ? 'w-0 p-0 opacity-0' : 'w-[50%] p-20'} bg-black border-primary border-[6px] transition-all duration-1000`}
        >
            <div className="flex flex-col items-end justify-start pt-28 pr-10">

                <div className="space-y-2">
                    {[...Array(7)].map((_, i) => (
                        <Box key={i} width="w-28" height="h-8" isPrimary />
                    ))}
                </div>

                <div className="mt-8 text-right">
                    {isTimeExhausted ? (
                        <p className="text-4xl font-bold text-primary">00:00:00</p>
                    ) : (
                        <p className="text-4xl font-bold text-primary">

                            {formattedHours}:{formattedMinutes}:{formattedSeconds} min left
                        </p>
                    )}
                    <p className="text-sm text-gray-400">out of 10 min</p>
                </div>
            </div>
        </div>
    );
};

export default RightDoor;
