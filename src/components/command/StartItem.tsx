import React from "react";
import { StatItemProps } from "../global/type";

export const StatItem: React.FC<StatItemProps> = ({ icon, label, value, total, description }) => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded border border-primary/20 bg-primary/10">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium uppercase tracking-wider text-gray-100">{label}</p>
                <div className="flex items-baseline gap-2">
                    <h2 className="text-4xl font-bold text-primary">{value}</h2>
                    <p className="text-sm text-gray-400">
                        {description} {total && <span>{total}</span>}
                    </p>
                </div>
            </div>
        </div>
    );
};
