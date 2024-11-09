import React from 'react';

type BoxProps = {
    width: string;
    height: string;
    isPrimary?: boolean;
    borderOnly?: boolean;
};

export const Box: React.FC<BoxProps> = ({ width, height, isPrimary = false, borderOnly = false }) => {
    return (
        <div
            className={`${height} ${width} ${isPrimary ? 'bg-primary' : ''} ${borderOnly ? 'border-2 border-primary' : 'border border-primary'
                }`}
        />
    );
};
