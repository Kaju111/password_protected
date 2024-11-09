import React from 'react';

type BoxProps = {
    width: string;
    height: string;
    isPrimary?: boolean;
    borderOnly?: boolean;
};

const Box: React.FC<BoxProps> = ({ width, height, isPrimary = false, borderOnly = false }) => {
    return (
        <div
            className={`${height} ${width} ${isPrimary ? 'bg-primary' : ''} ${borderOnly ? 'border-2 border-primary' : 'border border-primary'
                }`}
        />
    );
};

interface RightDoorProps {
    isEntered: boolean;
}

const RightDoor: React.FC<RightDoorProps> = ({ isEntered }) => {
    return (
        <div
            className={`min-h-screen ${isEntered ? 'w-0 p-0 opacity-0' : 'w-[50%] p-20'} bg-black border-primary border-[6px] transition-all duration-1000`}
        >
            <div className="flex flex-col items-end justify-start pt-28 pr-10">
                <Box width="w-28" height="h-8" borderOnly />

                <div className="py-2">
                    <Box width="w-28" height="h-4" borderOnly />
                    <Box width="w-28" height="h-4" isPrimary />
                </div>

                <div className="space-y-2">
                    {[...Array(5)].map((_, i) => (
                        <Box key={i} width="w-28" height="h-8" isPrimary />
                    ))}
                </div>

                <div className="mt-8 text-right">
                    <p className="text-4xl font-bold text-primary">45 hours left</p>
                    <p className="text-sm text-gray-400">out of 50 hours</p>
                </div>
            </div>
        </div>
    );
};

export default RightDoor;
