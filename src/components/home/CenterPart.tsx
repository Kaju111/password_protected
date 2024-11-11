import React, { useState } from "react";
import { Fingerprint, Eye, EyeOff } from "lucide-react";
import { CenterPartProps } from "../global/type";


const correctPassword = '1234';

const CenterPart: React.FC<CenterPartProps> = ({ onEnterLab, isLoggedIn, timeLeft, isTimeExhausted }) => {
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleLogin = () => {
        if (isTimeExhausted || timeLeft === 0) {
            alert("You have exhausted your allocated time.");
        } else if (password === correctPassword) {
            onEnterLab();
        } else {
            alert("Incorrect password");
        }
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
                    <div className="flex h-[400px] w-[400px] flex-col items-center justify-center rounded-full bg-black animate-rotateFade">
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
                            onClick={() => onEnterLab()}
                        >
                            Exit Lab
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CenterPart;
