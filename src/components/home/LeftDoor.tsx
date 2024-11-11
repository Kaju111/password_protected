import { LineChart, Timer } from 'lucide-react'
import React from 'react'
import { StatItem } from '../command/StartItem'
import { LeftDoorProps } from "../global/type";


const LeftDoor: React.FC<LeftDoorProps> = ({ isEntered }) => {
    return (
        <div
            className={`min-h-screen ${isEntered ? 'w-0 p-0 opacity-0' : 'w-[50%] p-20'} bg-black border-[6px] border-primary transition-all duration-1000 z-20 `}
        >
            <section className="space-y-6">
                <header>
                    <h1 className="text-5xl font-bold text-white">Java</h1>
                    <p className="text-base text-gray-400">
                        This course is provisioned by{" "}
                        <span className="text-primary">Nexxt Labs</span>
                    </p>
                </header>

                <nav className="flex gap-6">
                    {["Labs", "Exercises", "Do it Yourself"].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-primary">
                            <span className="bg-primary h-2 w-2 rounded-full" aria-hidden="true"></span>
                            <span>{item}</span>
                        </div>
                    ))}
                </nav>

                <div className="space-y-14">
                    <StatItem
                        icon={<LineChart className="h-8 w-8 text-primary" />}
                        label="Exercises"
                        value="9"
                        total="84"
                        description="completed out of"
                    />

                    <StatItem
                        icon={<LineChart className="h-8 w-8 text-primary" />}
                        label="Projects"
                        value="2"
                        total="6"
                        description="completed out of"
                    />

                    <StatItem
                        icon={<Timer className="h-8 w-8 text-primary" />}
                        label="Time Spent"
                        value="5"
                        description="hours till now"
                    />
                </div>
            </section>
        </div>
    )
}

export default LeftDoor
