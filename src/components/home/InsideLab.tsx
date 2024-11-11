import React from 'react';
import { InsideLabProps } from "../global/type";


const InsideLab: React.FC<InsideLabProps> = ({ timeLeft, onExitLab, isTimeExhausted }) => {
    return (
        <div className="text-primary absolute h-screen p-20 flex flex-col">
            <div className="flex text-3xl">
                <p className="mb-2 font-medium uppercase tracking-wider">
                    {isTimeExhausted ? "Time exhausted" : "Time remaining -"}
                </p>
                {!isTimeExhausted && (
                    <p>{`${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`}</p>
                )}
            </div>
            <button
                className="bg-primary text-black font-bold px-8 py-3 text-xl z-20 mt-4"
                onClick={onExitLab}
                disabled={isTimeExhausted}
            >
                {isTimeExhausted ? "Time Exhausted" : "Exit Lab"}
            </button>
        </div>
    );
};

export default InsideLab;
