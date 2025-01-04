import React from 'react';
import { Box } from '../command/Box';
import { RightDoorProps } from "../global/type";
import { useTimeManager } from '../hooks/useTimeManager';

const RightDoor: React.FC<RightDoorProps> = ({ isEntered }) => {
    const initialTime = 600;
    const totalBoxes = 10;
    const { timeLeft, isTimeExhausted } = useTimeManager(initialTime, isEntered);

    const minutesLeft = Math.floor(timeLeft / 60);
    const secondsLeft = timeLeft % 60;

    const fractionalFill = (secondsLeft / 60) * 100;

    return (
        <div
            className={`h-screen ${isEntered ? 'opacity-0 overflow-hidden w-0 p-0' : 'opacity-100 w-[50%] p-20'
                } bg-black border-primary border-[6px] transition-all duration-1000`}
        >

            <div className="flex flex-col items-end justify-start pt-28 pr-10">
                <div className="space-y-2">
                    {Array.from({ length: totalBoxes - minutesLeft - 1 }).map((_, i) => (
                        <Box key={`empty-${i}`} width="w-28" height="h-6" />
                    ))}

                    {timeLeft > 0 && (
                        <Box
                            key="fractional"
                            width="w-28"
                            height="h-6"
                            isPrimary
                            fillPercentage={fractionalFill}
                        />
                    )}

                    {Array.from({ length: minutesLeft }).map((_, i) => (
                        <Box key={`filled-${i}`} width="w-28" height="h-6" isBgColor />
                    ))}
                </div>

                <div className="mt-8 text-right">
                    {isTimeExhausted ? (
                        <p className="text-4xl font-bold text-primary">00:00:00</p>
                    ) : (
                        <p className="text-4xl font-bold text-primary">
                            {`00:${minutesLeft > 9 ? minutesLeft : `0${minutesLeft}`}:${secondsLeft > 9 ? secondsLeft : `0${secondsLeft}`}`} min
                        </p>
                    )}
                    <p className="text-sm text-gray-400">out of 10 min</p>
                </div>
            </div>
        </div>
    );
};

export default RightDoor;
