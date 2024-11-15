This is a web application built with Next.js, TypeScript, Tailwind CSS, and localStorage. It provides a password-based login system with session management based on a time limit.

Features
Password Authentication: The application uses a predefined password (1234) for login.
Session Management with localStorage: Tracks the user's session time, stores the session status, and allows the user to resume where they left off.
Time Limit: The session is time-limited. Once the time runs out, the user can no longer log in until the page is refreshed.
Responsive UI: The interface is built using Tailwind CSS, ensuring a responsive and clean layout.
Getting Started
Prerequisites
Before you begin, make sure you have Node.js and npm (or yarn) installed on your machine.

Install Node.js
Install npm
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-project-name.git
Navigate to the project directory:

bash
Copy code
cd your-project-name
Install dependencies:

bash
Copy code
npm install

# or

yarn install
Run the development server:

bash
Copy code
npm run dev

# or

yarn dev
Open your browser and navigate to http://localhost:3000 to view the application.

Usage
The application uses the following components:

Login (CenterPart Component): A simple password input field. The user must enter the password (1234) to log in.
Inside Lab (InsideLab Component): Once logged in, the user will see a countdown timer showing the remaining time. The user can exit the lab by clicking the "Exit Lab" button.
Technologies Used
Next.js: A React framework for building static and dynamic websites with built-in routing and server-side rendering.
TypeScript: A superset of JavaScript that adds type safety and features for scalable applications.
Tailwind CSS: A utility-first CSS framework that helps create a responsive UI quickly.
localStorage: For storing session data (such as login status and remaining time) in the browser's local storage.
Components

1.  Login and Time Management (CenterPart and InsideLab Components)
    CenterPart Component: Manages the password entry and login process.
    InsideLab Component: Displays the remaining session time and allows the user to exit the lab.
2.  Session Management
    localStorage: Used to store the user's session status and remaining time. This ensures that the session persists even if the page is refreshed.
    tsx
    Copy code
    useEffect(() => {
    const savedTimeLeft = localStorage.getItem("timeLeft");
    const savedLoginStatus = localStorage.getItem("isLoggedIn");

        if (savedTimeLeft && savedLoginStatus === "true") {
            setTimeLeft(parseInt(savedTimeLeft, 10));
            setIsLoggedIn(true);
        }

    }, []);

useEffect(() => {
if (isLoggedIn) {
localStorage.setItem("isLoggedIn", "true");
} else {
localStorage.removeItem("isLoggedIn");
}

    if (timeLeft < 600 && timeLeft >= 0) {
        localStorage.setItem("timeLeft", timeLeft.toString());
    }

}, [isLoggedIn, timeLeft]);
Error Handling
Incorrect Password: If the user enters an incorrect password, an alert is shown:

tsx
Copy code
alert("Incorrect password");
Time Exhausted: If the user's session time runs out, they are shown an alert and can no longer log in until the page is refreshed:

tsx
Copy code
if (timeLeft === 0) {
alert("Your allocated time has been exhausted.");
}
Conclusion
This project demonstrates the integration of password-based login, session management with localStorage, and time-based restrictions using Next.js, TypeScript, and Tailwind CSS. It provides a simple yet functional solution for time-limited sessions and basic security via password authentication.

License
This project is licensed under the MIT License - see the LICENSE file for details.
