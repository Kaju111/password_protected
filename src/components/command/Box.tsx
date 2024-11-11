import React from 'react';
import { BoxProps } from '../global/type';

export const Box: React.FC<BoxProps> = ({ width, height, isPrimary = false, borderOnly = false }) => {
    return (
        <div
            className={`${height} ${width} ${isPrimary ? 'bg-primary' : ''} ${borderOnly ? 'border-2 border-primary' : 'border border-primary'
                }`}
        />
    );
};
