import React, { useEffect, useState } from "react";
import { Countdown } from "react-daisyui";

const DaisyCountDown: React.FC = () => {
  const startSeconds = 100; // Countdown from 100 seconds
  const [timeLeft, setTimeLeft] = useState(startSeconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Countdown completed!");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Convert timeLeft (seconds) to minutes:seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Countdown Timer</h2>
      <div className="flex gap-2 text-2xl  items-center">
        <Countdown value={minutes} />
        :
        <Countdown value={seconds < 10 ? 0 : seconds} />
      </div>
    </div>
  );
};

export default DaisyCountDown;
