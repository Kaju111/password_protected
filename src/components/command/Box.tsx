import React from 'react';
import { BoxProps } from '../global/type';

export const Box: React.FC<BoxProps> = ({
    width,
    height,
    isPrimary = false,
    fillPercentage = 100,
    isBgColor = false
}) => {
    return (
        <div
            className={`${height} ${width} relative border border-primary`}
            style={{
                backgroundColor: isPrimary ? 'var(--primary-color)' : 'transparent',
                overflow: 'hidden',
            }}
        >
            {isPrimary && fillPercentage < 100 && (
                <div
                    className="absolute bottom-0 left-0 bg-primary"
                    style={{
                        width: '100%',
                        height: `${fillPercentage}%`,
                        transition: 'height 0.1s linear',
                    }}
                />
            )}


            {isBgColor && (
                <div
                    className="absolute bottom-0 left-0 bg-primary"
                    style={{
                        width: '100%',
                        height: `${fillPercentage}%`,
                        transition: 'height 0.1s linear',
                    }}
                />
            )}
        </div>
    );
};
