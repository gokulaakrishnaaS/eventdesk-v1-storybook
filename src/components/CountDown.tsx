import React, { useEffect, useState } from "react";

const CountDown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const target = new Date();
    target.setHours(target.getHours() + 1); // Set 1 hour from now
    return Math.floor((target.getTime() - Date.now()) / 1000);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <span className="countdown font-mono text-2xl">
      <span
        style={{ "--value": hours } as React.CSSProperties}
        aria-live="polite"
        aria-label={`${hours} hours`}
      >
        {hours}
      </span>
      h
      <span
        style={{ "--value": minutes } as React.CSSProperties}
        aria-live="polite"
        aria-label={`${minutes} minutes`}
      >
        {minutes}
      </span>
      m
      <span
        style={{ "--value": seconds } as React.CSSProperties}
        aria-live="polite"
        aria-label={`${seconds} seconds`}
      >
        {seconds}
      </span>
      s
    </span>
  );
};

export default CountDown;
