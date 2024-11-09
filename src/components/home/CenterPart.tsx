"use client"

import * as React from "react"
import { Fingerprint, Eye, EyeOff } from "lucide-react"


const correctPassword = '1234';

interface CenterPartProps {
    onEnterLab: () => void;
    onExitLab: () => void;
    isEntered: boolean;
}

const CenterPart: React.FC<CenterPartProps> = ({ onEnterLab, onExitLab, isEntered }) => {
    const [password, setPassword] = React.useState<string>("")
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
    const [timeLeft, setTimeLeft] = React.useState<number>(600);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    // Handle password submission
    const handleLogin = () => {
        if (password === "1234") {
            setIsLoggedIn(true);
            onEnterLab();
        } else {
            alert("Incorrect password");
        }
    };


    // Handle timer countdown 
    React.useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (isLoggedIn && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }

        // If time runs out
        if (timeLeft === 0) {
            setIsLoggedIn(false);
            alert('You have exhausted your allocated time.');
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isLoggedIn, timeLeft]);

    // Handle exiting the lab
    const handleExit = () => {
        setIsLoggedIn(false);
        setTimeLeft(600);
    };

    return (
        <div className="flex items-center justify-center absolute z-20">
            {!isLoggedIn ? (
                <div className="flex h-[400px] w-[400px] flex-col items-center justify-center rounded-full bg-black">
                    <div className="absolute inset-0 rounded-full border-[6px] border-primary shadow-lg shadow-primary" />
                    <Fingerprint className="mb-4 h-16 w-16 text-primary" />
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                        Enter your pilearning password
                    </p>

                    <div className="relative w-72 mb-7">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-3 w-full border-primary border-[1px] bg-transparent text-primary z-20 relative focus:border-primary text-xl"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-3 text-primary z-20"
                        >
                            {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                        </button>
                    </div>

                    <button
                        className="bg-primary text-black font-bold px-8 py-3 text-xl z-20"
                        onClick={handleLogin}
                    >
                        Enter Lab
                    </button>
                </div>
            ) : (
                <div className="flex items-center justify-center absolute z-20">
                    <div className="flex h-[400px] w-[400px] flex-col items-center justify-center rounded-full bg-black animate-[rotate_2s_linear_infinite]">
                        <div className="absolute inset-0 rounded-full border-[6px] border-primary shadow-lg shadow-primary" />
                        <Fingerprint className="mb-4 h-16 w-16 text-primary" />
                        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                            Time remaining:
                        </p>
                        <p className="text-xl text-primary">
                            {`${Math.floor(timeLeft / 60)}:${timeLeft % 60}`}
                        </p>

                        <button
                            className="bg-primary text-black font-bold px-8 py-3 text-xl z-20 mt-4"
                            onClick={handleExit}
                        >
                            Exit Lab
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}


export default CenterPart